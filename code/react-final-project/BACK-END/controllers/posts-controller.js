import { mongoose } from "../db.js"
import Post from "../models/Post.js"

const getRecentPosts = async (req, res) => {
  try {
    const getRecentPosts = await Post.find().sort({ createdAt: -1 }).limit(3)
    // When sorting dates, recent dates have higher values:
    // Past ---  2024-01-25  |  2024-01-26  |  2024-01-27 --- Present
    // (smaller numbers)                              (bigger numbers)
    // .sort({ createdAt: -1 }) means "start from highest
    // (newest) and go down"
    // .sort({ createdAt: 1 }) means "start from lowest
    // (oldest) and go up"
    res.status(200).jso(getRecentPosts)
  } catch (error) {
    console.log(error) // for server-side debugging
    res.status(500).json({ message: "Error retrieving posts..." })
  }
}

const getAllPosts = async (req, res) => {
  try {
    //.sort({ createdAt: -1 }) will show posts from the most recent
    // to the oldest one
    const getAllPosts = await Post.find().sort({ createdAt: -1 })
    res.status(200).json(getAllPosts)
  } catch (error) {
    console.log(error) // for server-side debugging
    res.status(500).json({ message: "Error retrieving posts..." })
  }
}

const getSpecificUserPosts = async (req, res) => {
  try {
    // get the ID of the user who posts we are trying to get
    const { userId } = req.user

    // find the posts related to that user's ID
    const findUsersPosts = await Post.find({ createdBy: userId })

    // .find returns an array so we can check to see if the array
    // has any content or not
    if (findUsersPosts.length > 0) {
      res.status(200).json(findUsersPosts)
    } else {
      // the code is 200 because the request was successful, it just had nothing
      res.status(200).json({ message: "No posts available..." })
    }
  } catch (error) {}
}

const createPost = async (req, res) => {
  try {
    const { posttitle, postbody } = req.body
    const { userId } = req.user

    if (!posttitle || !postbody) {
      return res
        .status(400)
        .json({ message: "Please fill in all the required fields..." })
    }

    const newPost = new Post({
      posttitle,
      postbody,
      createdBy: userId, // this is assigned automatically by the server,
      // so the user doesn't have to fill it in inside the body
    })

    await newPost.save()

    res
      .status(201)
      .json({ message: "Your post has been created successfully..." })
  } catch (error) {
    console.log(error) // for server-side debugging
    res
      .status(500)
      .json({ message: "Something went wrong! Please try again..." })
  }
}

const updatePostById = async (req, res) => {
  // we update by ID because the database ID is the most unique identifier

  try {
    // check if post_id is a valid DB id
    if (!mongoose.Types.ObjectId.isValid(req.params.post_id)) {
      return res.status(400).json({ message: "That is not a valid post..." })
    }
    // if yes, find the post with that ID
    // check if the ID in the DB is the same as the ID in our URL
    const findPostToUpdate = await Post.findOne({ _id: req.params.post_id })

    // if ID doesn't exist
    if (!findPostToUpdate) {
      return res.status(404).json({ message: "That post does not exist..." })

      // if ID exists, check for authorization to update
    } else if (findPostToUpdate.createdBy.toString() !== req.user.userId) {
      return res
        .status(401)
        .json({ message: "You don't the have permissions to update..." })

      // if the IDs match, check for meaningful changes
    } else {
      // first check if the key exists in the DB before comparing
      // to avoid comparing with undefined values ie. when a value doesn't
      // exist in the DB. Also, if it exists in the DB, and in the req.body
      // there's no value, handle that so as to prevent empty values as updates

      // This checks if the key is missing in
      // the database(!findPostToUpdate[key])
      // If the (!findPostToUpdate[key]) does not have a value for this key
      // it would be undefined ie. false, meaning the field doesn’t exist
      // in the database, hence the ! makes this part of the logic true

      // and that check evaluates to true to mean it doesn't exist in the DB.
      // so we trigger the return false to skip the check for that key
      // and move to the NEXT ITERATION ie. the next key check

      // the next part of the logic: (req.body[key]) checks if
      // the value for that key exists in the request body. meaning its truthy
      // so if it's falsy ie. null, undefined or empty("") we want to
      // handle that case to also trigger return false to also skip
      // the check for that key. This ensures the req.body always has a value
      //  and doesn't send null/undefined/empty values.
      // and move to the NEXT ITERATION ie. the next key check
      // Essentially, we want to ONLY PROCEED to the next line of code
      // when both values are valid
      // ie. (exist in the DB and are non-falsy in the req.body).

      // if the key exists in the req.body and not in our DB
      // the condition evaluates to false and triggers the return false

      // // If both conditions are true:
      // The key doesn’t exist in the findPostToUpdate (the post in the DB).
      // The client hasn't provided a value for this key in the req.body.
      // the function returns false to indicate that there is no need to
      // check for updates on this key.
      // Essentially, this prevents updating the database with a new field that was not
      // previously part of the database content. If the field didn't exist in the DB and
      // the client is trying to add a new one, this logic stops the update for that key.
      // this helps prevent attempts to add new fields to the DB content that weren't
      // originally in the database. It ensures that only existing fields are updated, and
      // any additional fields in the request body (which might be new) are ignored in the update operation.
      // When return false is triggered, no comparison to check for any updates happens.
      // so if the condition triggers the return false, the next line of code
      // won't be executed as the function already exits early FOR THAT ITERATION with return false.
      // This ensures that new fields (not present in the database) are excluded from being processed in the update.
      // The check if (!findPostToUpdate[key] && req.body[key]) is used to determine if the key
      // should be excluded from the update process altogether.
      // When the condition triggers returns false, the function moves on to the next iteration
      // of the Object.keys(req.body).some(...) check, without executing the rest of the logic for that key.
      // Therefore, the line findPostToUpdate[key].toString() !== req.body[key].toString() won't
      // run for keys where the condition is true (i.e., when findPostToUpdate[key] doesn't exist
      // and req.body[key] is not undefined).
      const isModified = Object.keys(req.body).some((key) => {
        if (!findPostToUpdate[key] && req.body[key]) {
          return false // skip this key and move to the next key
        }

        // When the key does exists in the DB, and in the req.body it has no value
        // the entire condition evaluates to false and we don't want to move to
        // the line that checks for updates when the value of req.body is falsy
        // So we handle that case:

        if (
          req.body[key] === undefined ||
          req.body[key] === null ||
          req.body[key] === ""
        ) {
          return false //this skips comparison and doesn't trigger update
          // return false means it will move to the NEXT ITERATION of .some()
        }
        // if the key exists in our DB and has a value,
        // compare with the key in req.body to see if there was a change,
        // if there was a change
        // .some will return true and exit isModified, making it true
        return findPostToUpdate[key].toString() !== req.body[key].toString()
      })

      if (!isModified) {
        return res.status(400).json({ message: "No changes were made..." })
      }
    }
    // update the recipe, if there were meaningful changes ie.
    // isModified returned true, update
    const updatePost = await Post.updateOne(
      { _id: req.params.post_id },
      req.body
    )

    if (updatePost.modifiedCount > 0) {
      return res
        .status(200)
        .json({ message: "Your post has been updated successfully..." })
    } else {
      return res.status(400).json({
        message: "Something went wrong! We couldn't update your post...",
      })
    }
  } catch (error) {
    console.log(error) // for server-side debugging
    res.status(500).json({ message: "Internal Server Error..." })
  }
}

const deletePostById = async (req, res) => {
  // we delete by ID because the database ID is the most unique identifier

  try {
    // check if post_id is a valid DB ID
    if (!mongoose.Types.ObjectId.isValid(req.params.post_id)) {
      return res.status(500).json({ message: "That is not a valid post..." })
    }

    // if it is find post to delete
    const findPostToDelete = await Post.findOne({ _id: req.params.post_id })

    // if post doesn't exist in our DB
    if (!findPostToDelete) {
      res.status(404).json({ message: "That post does not exist..." })

      // if if exists, check for authorization
    } else if (findPostToDelete.createdBy.toString() !== req.user.userId) {
      return res
        .status(401)
        .json({ message: "You don't have permissions to delete..." })
    } else {
      // delete post
      const deletePost = await Post.deleteOne({ _id: req.params.post_id })

      if (deletePost.deletedCount === 1) {
        return res
          .status(200)
          .json({ message: "Your post has been deleted successfully..." })
      } else {
        res.status(400).json({
          message: "Something went wrong! We couldn't delete your post...",
        })
      }
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal Server Error..." })
  }
}
export {
  getRecentPosts,
  getAllPosts,
  getSpecificUserPosts,
  createPost,
  updatePostById,
  deletePostById,
}

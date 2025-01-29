import User from "../models/User.js"

// const editProfilePhoto = async () => {}

const getProfileDetails = async (req, res) => {
  try {
    const { username } = req.user

    const userDetails = await User.findOne({ username })
    res.status(200).json(userDetails)
  } catch (error) {
    console.log(error) // for server-side debugging
    res.status(500).json({ message: "Error retrieving the user details..." })
  }
}

const addProfileDetails = async (req, res) => {
  try {
    // get the ID of the user whose profile we are updating
    const { userId } = req.user

    const { location, hairtype, porosity, bio } = req.body

    if (!location || !hairtype || !porosity || !bio) {
      return res
        .status(400)
        .json({ message: "Please fill in all the required fields..." })
    }

    const updateUserProfile = await User.findOneAndUpdate(
      { _id: userId }, // find the user with this ID, to
      // update their profile
      {
        location,
        hairtype, // update these fields
        porosity,
        bio,
      },
      { new: true, runValidators: true } // new:true returns updated user & 
      // runValidators: true validatse inputs
    )

    if (!updateUserProfile) {
      return res.status(404).json({ message: "User not found..." })
    }

    res.status(200).json({
      message: "Profile updated successfully...",
      user: updateUserProfile,
    })
  } catch (error) {
    console.log(error) // for server-side debugging
    res
      .status(500)
      .json({ message: "Something went wrong! Please try again..." })
  }
}

const editDisplayName = async (req, res) => {
  try {
    const { userId } = req.user

    const { displayname } = req.body

    // search for the profile to update from the DB by
    // checking its ID against the user's ID,
    // update the specific part
    // and return the update
    const updateProfile = await User.findByIdAndUpdate(
      { _id: userId },
      { displayname },
      { new: true, runValidators: true }
    )
    // runvalidators is for validating the schema/rather, checking that
    // the schema validation for the displayname is adhered to

    if (!updateProfile) {
      return res.status(404).json({ message: "User not found..." })
    }

    res
      .status(200)
      .json({ message: "Your display name has been updated successfully..." })
  } catch (error) {
    console.log(error)
    // for server-side debugging
    console.log(error.name)
    // for server-side debugging
    console.log(error._message)
    // for server-side debugging
    console.log(error.errors)

    if (error.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: error.errors.displayname.properties.message })
    }
    res.status(500).json({ message: "Internal Server Error..." })
  }
}

const editLocation = async (req, res) => {
  try {
    const { userId } = req.user

    const { location } = req.body

    // search for the profile to update from the DB by
    // checking its ID against the user's ID,
    // update the specific part
    // and return the update
    const updateProfile = await User.findByIdAndUpdate(
      { _id: userId },
      { location },
      { new: true, runValidators: true }
    )
    // runvalidators is for validating the schema/rather, checking that
    // the schema validation for the location is adhered to

    if (!updateProfile) {
      return res.status(404).json({ message: "User not found..." })
    }

    res
      .status(200)
      .json({ message: "Your location has been updated successfully..." })
  } catch (error) {
    console.log(error)

    res.status(500).json({ message: "Internal Server Error..." })
  }
}

const editHairType = async (req, res) => {
  try {
    const { userId } = req.user

    const { hairtype } = req.body

    // search for the profile to update from the DB by
    // checking its ID against the user's ID,
    // update the specific part
    // and return the update
    const updateProfile = await User.findByIdAndUpdate(
      { _id: userId },
      { hairtype },
      { new: true, runValidators: true }
    )
    // runvalidators is for validating the schema/rather, checking that
    // the schema validation for the hairtype is adhered to

    if (!updateProfile) {
      return res.status(404).json({ message: "User not found..." })
    }

    res
      .status(200)
      .json({ message: "Your hairtype has been updated successfully..." })
  } catch (error) {
    console.log(error)

    res.status(500).json({ message: "Internal Server Error..." })
  }
}

const editPorosity = async (req, res) => {
  try {
    const { userId } = req.user

    const { porosity } = req.body

    // search for the profile to update from the DB by
    // checking its ID against the user's ID,
    // update the specific part
    // and return the update
    const updateProfile = await User.findByIdAndUpdate(
      { _id: userId },
      { porosity },
      { new: true, runValidators: true }
    )
    // runvalidators is for validating the schema/rather, checking that
    // the schema validation for the porosity is adhered to

    if (!updateProfile) {
      return res.status(404).json({ message: "User not found..." })
    }

    res
      .status(200)
      .json({ message: "Your hair porosity has been updated successfully..." })
  } catch (error) {
    console.log(error)

    if (error.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: error.errors.porosity.properties.message })
    }
    res.status(500).json({ message: "Internal Server Error..." })
  }
}

const editBio = async (req, res) => {
  try {
    const { userId } = req.user

    const { bio } = req.body

    // search for the profile to update from the DB by
    // checking its ID against the user's ID,
    // update the specific part
    // and return the update
    const updateProfile = await User.findByIdAndUpdate(
      { _id: userId },
      { bio },
      { new: true, runValidators: true }
    )
    // runvalidators is for validating the schema/rather, checking that
    // the schema validation for the bio is adhered to

    if (!updateProfile) {
      return res.status(404).json({ message: "User not found..." })
    }

    res
      .status(200)
      .json({ message: "Your bio has been updated successfully..." })
  } catch (error) {
    console.log(error)

    res.status(500).json({ message: "Internal Server Error..." })
  }
}

const deleteAccount = async (req, res) => {
  try {
    const { userId } = req.user

    // search for the profile to delete from the DB by
    // checking its ID against the user's ID,
    // and delete
    const deleteProfile = await User.findByIdAndDelete({ _id: userId })

    if (!deleteProfile) {
      return res.status(404).json({ message: "User not found..." })
    }

    res
      .status(200)
      .json({ message: "Your account has been deleted successfully..." })
  } catch (error) {
    console.log(error)

    res.status(500).json({ message: "Internal Server Error..." })
  }
}

export {
  // editProfilePhoto,
  getProfileDetails,
  addProfileDetails,
  editDisplayName,
  editLocation,
  editHairType,
  editPorosity,
  editBio,
  deleteAccount,
}

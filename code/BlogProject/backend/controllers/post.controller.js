export const createPost = (req, res) => {
  try {
    console.log(`create post endpoint`);
  } catch (error) {
    console.log(`error in createpost endpoint: ${error.error}`);
    res.status(500).json({ error: "internal server error" });
  }
};

export const getAllPosts = (req, res) => {
  try {
    console.log(`get all users post endpoint`);
  } catch (error) {
    console.log(`error in getAllPosts endpoint: ${error.error}`);
    res.status(500).json({ error: "internal server error" });
  }
};

export const getPostsByUser = (req, res) => {
  try {
    console.log(`get one user post endpoint`);
  } catch (error) {
    console.log(`error in getPostsByUser endpoint: ${error.error}`);
    res.status(500).json({ error: "internal server error" });
  }
};

export const updateUserPost = (req, res) => {
  try {
    console.log(`update user post endpoint`);
  } catch (error) {
    console.log(`error in updateUserPost endpoint: ${error.error}`);
    res.status(500).json({ error: "internal server error" });
  }
};

export const deleteUserPost = (req, res) => {
  try {
    console.log(`update user post endpoint`);
  } catch (error) {
    console.log(`error in deleteUserPost endpoint: ${error.error}`);
    res.status(500).json({ error: "internal server error" });
  }
};

export const getProfile = (req, res) => {
  try {
    console.log(`get Profile endpoint`);
  } catch (error) {
    console.log(`error in getProfile endpoint: ${error.error}`);
    res.status(500).json({ error: "internal server error" });
  }
};

export const updateProfile = (req, res) => {
  try {
    console.log(`update Profile endpoint`);
  } catch (error) {
    console.log(`error in  updateProfile endpoint: ${error.error}`);
    res.status(500).json({ error: "internal server error" });
  }
};

export const deleteProfile = (req, res) => {
  try {
    console.log(`delete Profile endpoint`);
  } catch (error) {
    console.log(`error in  deleteProfile endpoint: ${error.error}`);
    res.status(500).json({ error: "internal server error" });
  }
};

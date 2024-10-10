export const createAccount = async (req, res) => {
  res.send({ message: "You hit the signUp endpoint" });
};

export const loginToAccount = async (req, res) => {
  res.send({ message: "You hit the login endpoint" });
};

export const logOut = async (req, res) => {
  res.send({ message: "You hit the logout endpoint" });
};

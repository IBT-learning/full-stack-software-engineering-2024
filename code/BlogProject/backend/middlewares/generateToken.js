import jwt from "jsonwebtoken";

export const generateTokenAndCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "14d" });

  res.cookie("jwt", token, {
    maxAge: 7*24*60*60*1000,
    httpOnly: true,
    sameSite: "strict",
  })
};

import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const tokenValidation = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];  
  if (!token) return res.status(401).json({ error: 'Token missing or invalid' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);  
    next();
  } catch (error) {
    res.status(403).json({ error: 'Invalid token' });
  }
};

export default tokenValidation;

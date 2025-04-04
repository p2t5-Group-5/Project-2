import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    where: { username: username },
  });

  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const passwordIsValid = await bcrypt.compare(password, user.password);

  if (!passwordIsValid) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const secretKey = process.env.JWT_SECRET_KEY || '';

  const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
  return res.json({ token });
};

export const signup = async (req: Request, res: Response) => {
  const { username, password, usertype, email } = req.body;
  
  try {
    const user = await User.findOne({
      where: { username: username },
      attributes: ['username']
    });

    if (user) {
      return res.status(401).json({ message: 'Username is already taken' });
    }

    await User.create({
      username: username,
      password: password,
      usertype,
      email
    });

    const secretKey = process.env.JWT_SECRET_KEY || '';

    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    return res.json({ token });
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);  // Define the login route

// POST - signup - Create a new user
router.post('/signup', signup); 

export default router;

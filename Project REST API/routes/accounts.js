import express from 'express';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import { users, accounts } from '../data/mockdata.js';
import { authenticateToken, SECRET_KEY } from '../middleware/auth.js';

const router = express.Router();


router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (!user || !bcryptjs.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid username or password' });
    console.log("Invalid username or password");
  }
  console.log("login successful");
  const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, {
    expiresIn: '1h',
  });

  res.json({ message: 'Login successful', token });
});

// GET /accounts
router.get('/accounts', authenticateToken, (req, res) => {
  res.json(accounts);
});

// POST /accounts/:id/status
router.post('/accounts/:id/status', authenticateToken, (req, res) => {
  const accountId = parseInt(req.params.id);
  const { status } = req.body;

  const account = accounts.find(acc => acc.id === accountId);
  if (!account) return res.status(404).json({ message: 'Account not found' });

  account.status = status;
  res.json({ message: 'Status updated successfully' });
});

export default router;

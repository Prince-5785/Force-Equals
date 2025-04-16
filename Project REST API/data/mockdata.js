import bcryptjs from 'bcryptjs';

const users = [
  {
    id: 1,
    username: 'user1',
    password: bcryptjs.hashSync('pass123', 8), // hashed password
  },
];

const accounts = [
  { id: 1, name: 'Company A', match_score: 0.92, status: 'Non-Target' },
  { id: 2, name: 'Company B', match_score: 0.75, status: 'Non-Target' },
];

export { users, accounts };

const User = require('../../models/User');

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = User.findByUsername(username);

  if (user && user.password === password) {
    res.status(200).json({ message: `Welcome back, ${username}. The vault opens.` });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};
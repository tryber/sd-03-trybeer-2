const jwt = require('jsonwebtoken');
const { SECRET } = require('../utils/SECRET');

const verifyToken = (req, res, next) => {
  try {
    const header = req.headers.authorization;
    const bearer = header.split(' ');
    const token = bearer[1];
    jwt.verify(token, SECRET, (err, userData) => {
      if (err) {
        return res.status(403).json({ err: 'Invalid token' });
      }
      req.token = token;
      req.user = userData;
      next();
    });
  } catch (error) {
    return res.status(403).json({ err: 'Invalid token' });
  }
};

module.exports = verifyToken;

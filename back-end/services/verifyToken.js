const jwt = require('jsonwebtoken');

const SECRET = '2c48ad576fc39c27a37910eafc4c483faa0d81d40712596b950a49ddcebee4592dce95a6201376b2a7d65791d89999e86b366e345292d732eb7d9d3a6f75fce1';

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

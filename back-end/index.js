const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const { verifyIfExists, registerUser } = require('./models/users');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.listen('/login',);

app.post('/verificar', async (req, res) => {
  const { email } = req.body;
  console.log(email);
  const verifyRegistration = await verifyIfExists({ email });
  if (!email) {
    return res.status(400).json({ message: 'Sem email na solicitação' });
  } if (verifyRegistration) {
    return res.status(400).json({ message: 'Email já cadastrado' });
  }
  return res.status(200).json({ message: 'Email disponível' });
});

app.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body; // controller
  const userObject = { name, email, password, role }; // ..
  if (!name || !email || !password || !role) {
    return res.status(400).json({ message: 'Envie nome, email, password e função (role)' });
  }
  const verifyDup = await verifyIfExists({ email });
  if (verifyDup) return res.json({ message: 'Email indisponível' });
  const register = await registerUser(userObject);
  const user = {
    name,
    email,
    password,
    role,
  };

  if (!verifyDup && register) {
    return jwt.sign(user, process.env.SECRET, { expiresIn: '10m' }, (err, token) => {
      res.json({
        token,
      });
    });
  }
});

function verifyToken(req, res, next) {
  const { token } = req.body;
  if (token == null) return res.status(401).json({ err: 'Token is null' });
  jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err) return res.status(403).json({ err: err.message });
    req.user = user;
    next();
  });
}

app.post('/login', verifyToken, (req, res) => {
  res.status(200).json({ message: 'ok', role: req.user.role });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Running on :${PORT}`));

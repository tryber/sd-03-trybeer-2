const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const { verifyIfExists, registerUser } = require('./models/users');
const loginController = require('./controllers/loginController');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/login', loginController);

// app.listen('/login',);

app.post('/verificar', async (req, res) => {
  const { email } = req.body;
  console.log(email);
  const verifyRegistration = await verifyIfExists(email);
  if (!email) {
    return res.status(400).json({ message: 'Sem email na solicitação' });
  } if (verifyRegistration) {
    return res.status(400).json({ message: 'Email já cadastrado' });//E-mail already in database//
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
    const tokenFinal = jwt.sign(user, process.env.SECRET, { expiresIn: '10m', algorithm: 'HS256' });
    return res.status(200).json({ token: tokenFinal });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Running on :${PORT}`));

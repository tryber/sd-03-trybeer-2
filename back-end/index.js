const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const loginController = require('./controllers/loginController');
const registerController = require('./controllers/registerController');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/login', loginController);
app.post('/register', registerController);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Running on :${PORT}`));

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const loginController = require('./controllers/loginController');
const registerController = require('./controllers/registerController');
const profileController = require('./controllers/profileController');
const checkoutController = require('./controllers/checkoutController');
const productsControler = require('./controllers/productsControler');
const ordersRoutes = require('./routes/ordersRoutes');
const verifyToken = require('./services/verifyToken');
const AdminDetail = require('./controllers/AdminOrderDetailController');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/images', express.static(path.join(__dirname, '/images')));
app.get('/products', productsControler);
app.get('/admin/orders', AdminDetail.controllerDetailsOrder);

app.post('/login', loginController);
app.post('/register', registerController);
app.post('/profile', verifyToken, profileController);
app.post('/checkout', verifyToken, checkoutController);
app.use('/orders', ordersRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Running on :${PORT}`));

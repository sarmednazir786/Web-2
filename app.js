const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
const cookieParser = require('cookie-parser');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json())
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://sarmednazir786:Sarmed@119@cluster0.h6hcelo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
//const dbURI = 'mongodb://mongo_db:27017';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/products', requireAuth, (req, res) => res.render('products'));
app.get('/hidden/page/flag', requireAuth2, (req, res) => res.render('flag'));
app.use(authRoutes);

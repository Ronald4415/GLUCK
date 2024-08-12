const express = require('express');
var cors = require('cors');
const connection = require('./connection');
const userRoute = require('./routes/user');
const offerRoute = require('./routes/offer');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use('/user', userRoute);
app.use('/offer', offerRoute);

module.exports = app;

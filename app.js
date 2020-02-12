const express = require('express');

const app = express();
const userRouter = require('./userRouter');

app.use('/user', userRouter);

app.get('/index', function(req, res) 

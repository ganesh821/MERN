const express = require('express');
const dotenv = require('dotenv').config();
const colors =require('colors')
const {errorHandler} =require('../backend/middleware/errorMiddleware')
const port = process.env.PORT || 5000;
const connectDB = require('./config/db')
connectDB()
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`server start on ${port}`)
})
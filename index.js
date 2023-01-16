const express = require("express");
const dotenv= require('dotenv');
const connectDB= require('./config/config');
require('colors');
const morgan = require("morgan");
const { bgMagenta } = require("colors");

// config dotenv
dotenv.config();

// connetion mongodb
connectDB();


const app = express();

// middleware

app.use(express.json());
app.use(morgan('dev'));

// route
app.use('/api/pizzas', require('./routes/pizzaRoute'));
app.use('/api/users',require('./routes/userRoutes'));

app.get('/', (req,res)=>{
  res.send('<h1>Node is running with server via nodemon</h1>')
})

const port = process.env.PORT || 5425;

app.listen(port, () => {
  console.log(`Server is running on ${process.env.NODE_ENV} mode on port number ${process.env.PORT}`.bgMagenta.white);
});

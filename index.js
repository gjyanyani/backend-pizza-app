const express = require("express");
require('colors');
const morgan = require("morgan");

const app = express();

// middleware

app.use(express.json());
app.use(morgan('dev'));

// route

app.get('/', (req,res)=>{
  res.send('<h1>Hello</h1>')
})

const port = process.env.PORT || 5425;

app.listen(port, () => {
  console.log(`Server is running on port ${port}  `);
});

const dotenv1 = require('dotenv');
const mongose = require('mongoose');
const exp=require('express');
const app=exp(); 

dotenv1.config({path: './config.env'}); 

require('./db/conn'); 

//const User = require('./models/userSchema');

app.use(exp.json());

app.use(require('./router/auth'));

const PORT = process.env.PORT; 

const middleware =(req, res, next) => {
      console.log('Hello my Middleware');
      next();
}

// app.get('/',(req, res) => {
//     res.send('Hey User');
// }); 

app.get('/about' , middleware,(req, res) => { 
  console.log('Hello about');
  res.send('Hey This is about page');
});

app.get('/contact',(req, res) => { 
  res.cookie("Test", 'thapa');
  res.send('Hey This is contact page');
});

app.get('/signin',(req, res) => {
  res.send('Hey This is signin page');
});

app.get('/signup',(req, res) => {
  res.send('Hey This is signup page');
});

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT} th port`);
});


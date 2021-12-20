const mongose = require('mongoose');

const DB = process.env.DATA_BASE; 

mongose.connect(DB, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }).then(() => {
    console.log('connected successfully');
  }).catch((err) => console.log(`no connection`));
  
  
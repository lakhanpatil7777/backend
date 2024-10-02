const mongoose = require('mongoose')

require('dotenv').config();
const mongoUrl = process.env.mongoDB_Url;

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tlsInsecure: true  
});

const db = mongoose.connection ;

db.on('connected',()=>{
    console.log("connected mongodb server")
} );
db.on('error',(err)=>{
    console.log("error while connecting",err.message)
    console.error(err.stack);
});

const mongoose = require('mongoose');

module.exports = app => {
    //mongoose.connect('mongodb://localhost/test');
    mongoose.connect('mongodb+srv://consentdeves:zV150nvXitPEveIu@@cluster0.bm7ic.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    mongoose.connection.once('open',function(){
        console.log('Database connected Successfully');
    }).on('error',function(err){
        console.log('Error', err);
    })
};

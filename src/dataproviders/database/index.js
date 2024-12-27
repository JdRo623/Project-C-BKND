const mongoose = require('mongoose');

module.exports = app => {
    mongoose.connect('mongodb://localhost/test');
    mongoose.connection.once('open',function(){
        console.log('Database connected Successfully');
    }).on('error',function(err){
        console.log('Error', err);
    })
};

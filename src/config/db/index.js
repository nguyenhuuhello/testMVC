// https://github.com/Automattic/mongoose
const mongoose = require('mongoose');

async function connect(){ //await phải nằm trong 1 function async

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev');
        console.log('Connect successfully!');
    } catch (error) {
        console.log('Connect failure!');
    }
}

// export như 1 object
module.exports = {connect};
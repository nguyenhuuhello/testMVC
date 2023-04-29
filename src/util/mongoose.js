module.exports = {
    //Xử lý với dữ liệu là 1 mảng nhiều document
    mutipleMongooseToObject: function(mongooses){
        return mongooses.map(mongoose => mongoose.toObject());
    },
    //Với trường hợp chỉ có 1 document
    mongooseToObject: function (mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }
};

//nó sẽ được import ở controller
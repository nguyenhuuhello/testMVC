//file này là nơi viết của news cũng như con của nó nhỏ hơn, 
// ví dụ rõ hơn về show() bên dưới


const Course = require('../models/Course');

const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    //[GET] /home
    home(req, res, next){
        // res.json({
        //     name: 'xin chào'
        // });
        // res.render('home');

        //---Lấy dữ liệu từ DB

        //Ở ĐÂY CÓ 2 CÁCH VIẾT BÊN DƯỚI ĐỂ LẤY DỮ LIỆU TỪ DB
        // Course.find({})
        //     .then(courses => res.json(courses))
        //     .catch(err => res.status(400).json({error: 'ERROR!'}))



        // //Đây là cách viết promise
        // Course.find({})
        //     .then(courses => {
        //         res.render('home', {
        //             courses: mutipleMongooseToObject(courses)
        //         }); 
                
        //         // res.json(courses);
        //         // res.render('home', {courses}); 
                
        //         //ở đây, cách viết là courses:courses, tuy nhiên viết như trên nó cũng sẽ hiểu được
                
        //         //nó sẽ truyển qua dạng key:value và cách hiển thị như ví dụ này
        //         //https://handlebarsjs.com/examples/simple-expressions.html
        //     })
        //     .catch(error => {
        //         next(err);
        //     });

        res.send("hello from server");


    }

    //[GET] /search
    search(req, res){
        res.render('search');
    }

}

//tạo ra đối tượng mới và export ra ngoài
module.exports = new SiteController;
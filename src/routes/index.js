const newRouter = require('./news'); //nạp news.js vào
const siteRouter = require('./site')

function route(app){


    // app.get('/news', (req, res) => {
    //     console.log(req.query.q); //Query parameters
    //     res.render('news');
    //   });

    //THAY VÌ SỬ DỤNG CÁCH TRÊN THÌ BÂY GIỜ CHÚNG TA SỬ DỤNG
    app.use('/news', newRouter); //Quản lý toàn bộ nhưng gì liên quan tới news
    
    //*** Với cách trên, mỗi thay đổi về đường dẫn chi tiết hơn của news thì 
    // chúng ta thay đổi***/
    //trong ./routes/news.js
    //Còn thay đổi về nội dung của từng chi tiết ta chỉnh sửa trong ./app/controllers/NewsController.js
    


    // app.get('/search', (req, res) => {
    //     console.log(req.query.q)
    //     res.render('search');
    //   });



    // app.get('/', (req, res) => {
    //     res.render('home');
    //   });
      

    //----------------------------
    app.use('/', siteRouter); 


    
    app.post('/search', (req, res) => {
        console.log(req.body); //nhờ thư viện qs tích hợp sẵn nên nhận được form gửi lên, đầu ra gán vào body
        res.send('Đã Post dữ liệu');
      });
      
}

module.exports = route;
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const port = 3000;
const app = express();

//Khai báo cho route
const route = require('./routes'); //Không cần trỏ trực tiếp tới index.js vì khi tới thư mục thì nó sẽ tự động tìm đến index.js đầu tiên


//MONGODB
const db = require('./config/db');
//connect to DB
db.connect();


//Load file tĩnh
app.use(express.static(path.join(__dirname, 'public')));

//Phải sử dụng middleware để có thể nhận gói tin ở server khi post dữ liệu (req.body)
//Đối với phiên bản express từ 4.16 trở đi thì đã tích hợp body-parser, các phiên bản cũ hơn thì phải cài
app.use(express.urlencoded({
    extended: true
})); //sử dụng khi gửi dữ liệu dưới dạng form
//Khi gửi dữ liệu từ client dưới các dạng như XMLHttpRequest, fetch, axios,... thì dùng
app.use(express.json());


//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', hbs.engine({
    extname : '.hbs'
}));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));
//join có thể nhiều đối số và có thể tạo đường dẫn cho chúng ta
//như thế này: 'resources/views'



//Chạy route
route(app);


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})
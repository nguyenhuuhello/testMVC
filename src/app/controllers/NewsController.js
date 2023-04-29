//file này là nơi viết của news cũng như con của nó nhỏ hơn, 
// ví dụ rõ hơn về show() bên dưới

class NewsController {
    //[GET] /news
    index(req, res){
        res.render('news');
    }

    //[GET] /news/:slug
    show(req, res){
        res.send('Chi tiết hơn, là con của news')
    }

}

//tạo ra đối tượng mới và export ra ngoài
module.exports = new NewsController;
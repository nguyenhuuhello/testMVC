//Nguồn: https://expressjs.com/en/4x/api.html#router.use

const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController')

//LƯU Ý: các đường dẫn được sắp xếp từ chi tiết nhiều đến ít chi tiết
// Để khi không tìm thấy thì sẽ tìm được nhưng cái khác ít chi tiết hơn

router.get('/:slug', newsController.show);

router.get('/', newsController.index);
// bình thường chúng ta sử dụng sẽ là
// router.use('/', (req, res){
//     res.render('news');
// })
//Bây giờ index thay thế cho hàm trả về


module.exports = router;
//Sử dụng cho những trang ít nội dung, chi tiết như Home, search

//Nguồn: https://expressjs.com/en/4x/api.html#router.use

const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController')

//LƯU Ý: các đường dẫn được sắp xếp từ chi tiết nhiều đến ít chi tiết
// Để khi không tìm thấy thì sẽ tìm được nhưng cái khác ít chi tiết hơn



router.get('/search', siteController.search);
// bình thường chúng ta sử dụng sẽ là
// router.use('/', (req, res){
//     res.render('search');
// })
//Bây giờ index thay thế cho hàm trả về

router.get('/', siteController.home);

module.exports = router;
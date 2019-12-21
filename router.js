var express = require('express')

var router = express.Router()

//默认找views文件夹下的页面，无须再写路径
router.get('/',function(req,res){
	res.render("index.html")
})

router.get('/plan',function(req,res){
	res.render("plan.html")
})

module.exports = router
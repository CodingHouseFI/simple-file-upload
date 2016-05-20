var express = require('express');
var router = express.Router();

var multer = require('multer');
var upload = multer({storage: multer.memoryStorage()})
// var upload = multer({dest: './uploads'});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', upload.single('newFile'), (req, res) => {
  console.log('req.file:', req.file);

  res.redirect('/');
});

module.exports = router;


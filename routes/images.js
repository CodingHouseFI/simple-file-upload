'use strict';

const express = require('express');
const multer = require('multer');

let router = express.Router();
let upload = multer({storage: multer.memoryStorage()});

let Image = require('../models/image');

//   /api/images

router.post('/', upload.single('newFile'), (req, res) => {
  Image.upload(req.file, (err, image) => {
    console.log('image:', image);

    res.redirect('/');
  });
});

module.exports = router;

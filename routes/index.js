const express = require('express');
const router = express.Router();
const indexCon = require('../controllers/indexController');

router.all('/', indexCon.home_get);

router.get('/examplepage', indexCon.examplepage_get);

router.get('/gallery', indexCon.gallery_get);

module.exports = router;
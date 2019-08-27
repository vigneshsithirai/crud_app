var file = require('../controller/filereadwrite');
var express = require('express');
var router = express.Router();

router.post('/csv/write/user', file.writeCSVFile);

router.get('/csv/:filename', file.readCsvFile);

module.exports = router;
var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_nodejs_crud',
  debug: false
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/testconnect', function (req, res, next){
  if(db != null){
    res.send('connect success');
  }else{
    res.send('connect fail');
  }
});

router.get('/select', function (req, res, next) {
  db.query('SELECT * FROM tb_book', function(err, rs) {
    res.render('select', { books: rs });
  });
});


module.exports = router;
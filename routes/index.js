var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");

router.use(express.static('public'));

/* GET home page (index.ejs). */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express'});
});

router.get('/galeria', function (req, res, next) {
  db.query("SELECT * FROM imagen", function (err, resultados) {
    res.render('galeria', { title: 'Galería', Imagenes: resultados });
    console.log(resultados);
  });
});

module.exports = router;

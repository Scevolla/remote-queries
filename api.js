const express    = require('express');
const router     = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', function(req, res) {
  console.log('=======================');
  console.log('hello from get /');
  console.log('GET: ', req.query);
  console.log('POST: ', req.body);
  console.log('-------------------------');
  res.send('hello from get /');
});

router.get('/api', function(req, res) {
  console.log('=======================');
  console.log('hello from get api/');
  console.log('GET: ', req.query);
  console.log('POST: ', req.body);
  console.log('-------------------------');
  res.send('hello from get /api');
});

router.post('/api', function(req, res) {
  const db = req.app.get('db');
  console.log('=======================');
  console.log('hello from post /api');
  console.log('GET: ', req.query);
  console.log('POST: ', req.body);
  console.log('-------------------------');
  res.send('hello from post /api');
});

module.exports = router;
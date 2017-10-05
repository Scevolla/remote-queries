global.debugWrite = function() {
  if (arguments.length == 0) {
    return;
  }
  for (var i = 0; i < arguments.length; ++i) {
    if (typeof arguments[i] == 'string') {
      fs.appendFileSync('log.txt', arguments[i]);
    } else {
      fs.appendFileSync('log.txt', JSON.stringify(arguments[i], null, 4));
    }
  }
  fs.appendFileSync('log.txt', '\r\n\r\n');
}

const express     = require('express');
const path        = require('path');
const app         = express();
const mongoClient = require('mongodb').MongoClient;
const config      = require('./config');

mongoClient.connect(config.dbUrl, (err, database) => {
  if (err) {
    console.log(err);
  }

  app.set('port', process.env.PORT || 3050);
  app.set('db', database);
  
  app.use(require('./api.js'));

  app.listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
  });
});
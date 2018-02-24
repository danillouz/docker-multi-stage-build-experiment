'uses strict';

const express = require('express');

const app = express();

app.use('/', function(req, res, next) {
  res.json({
    status: 'ok'
  });
});

app.listen(8888);

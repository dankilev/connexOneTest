var express = require('express');
var router = express.Router();

const PromClient = require('prom-client');

const metricsInterval = PromClient.collectDefaultMetrics();
const test = new PromClient.Counter({
  name: 'num_of_requests',
  help: 'Number of requests made',
  labelNames: ['method', 'route', 'code']
});

/* GET metrics */
router.get('/', function(req, res, next) {
  var auth = req.get('Authorization');
  if (auth != 'mysecrettoken') {
    res.send(403);
  } else {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.set('Content-Type', PromClient.register.contentType)
    res.end(PromClient.register.metrics())
  }
});

module.exports = router;

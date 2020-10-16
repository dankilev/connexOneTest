var express = require('express');
var router = express.Router();

/* GET time */
router.get('/', function(req, res, next) {
  var procTime = Math.round(new Date() / 1000);
  var auth = req.get('Authorization');
  if (auth != 'mysecrettoken') {
    res.send(403);
  } else {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.json({
      "properties": {
        "epoch": {
          "description": procTime,
          "type": "number"
        }
      },
      "required": ["epoch"],
      "type": "object"
    });
  }
});

module.exports = router;

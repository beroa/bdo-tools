var express = require('express');
var router = express.Router();

router.get('/marketplace', (req, res, next) => {
    const category = req.params.category; // ex: cooking, meat1, gurubox
    res.send(`Request for ${category} recieved!`);
});

module.exports = router;
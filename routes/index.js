var express = require('express');
var router = express.Router();
const marketplaceController = require('./controllers/marketplaceController.js')

router.get('/GetItemSellBuyInfo', marketplaceController.GetItemSellBuyInfo);

module.exports = router;
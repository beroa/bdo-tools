const config = require('../../utils/config.js')

exports.GetItemSellBuyInfo = (req,res,next) => {
    const category = req.params.category; // ex: cooking, meat1, gurubox
    res.send(`Request for ${category} recieved! ${config.BDO_COOKIE}`);
}
const request  = require('request')
const apiConfig = require('../../utils/apiConfig.js')

exports.GetItemSellBuyInfo = (req,res,next) => {
    const formData = {
        mainKey: req.params.mainKey,
        subKey: req.params.subKey || '0',
        keyType: '0',
        isUp: 'True'
    }

    const config = apiConfig.createConfig('GetItemSellBuyInfo', formData)

    request(config, function (err, response) {
        if (err) throw new Error(err)
        res.send(JSON.parse(response.body))
        // res.send(JSON.parse(response.body))
    })

}
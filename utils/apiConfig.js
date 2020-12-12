const config = require('./config')

const getURL = (route) => {
    const baseURL = 'https://marketweb-na.blackdesertonline.com/Home'
    const url = `${baseURL}/${route}`
    return url
}

const createConfig = (route, dataObj) => {
    const apiConfig = {
        method: 'POST',
        url: getURL(route),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Cookie": "__RequestVerificationToken="+config.BDO_COOKIE,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36'
        },
        formData: {
            __RequestVerificationToken: config.BDO_TOKEN,
            ...dataObj
        }
    }
    return apiConfig
}

module.exports = {
    createConfig
}
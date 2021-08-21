const api = require('../services/api');
const axios = require('axios').default;
const fs = require('fs');

module.exports.home_get = function (req, res) {
    console.log('Request for `home` received');
    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=SuperFarm%2CEthereum%2Caxie-infinity%2Csmooth-love-potion%2Cbitcoin&vs_currencies=usd';
    axios.get(url).then(response => {
        var obj = response.data;
        let coins = {};
        let i = 0;
        for (const [key, value] of Object.entries(obj)) {
            let coin = { coinId : key, usd : Object.values(value)[0] }
            coins[i] = coin;
            i++;
        }
        res.render('index', { coins : coins });
    })
}

module.exports.gallery_get = function (req, res) {
    console.log('Request for `gallery` received');
    let list = new Array();
    fs.readdir("images/pictures/", function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        files.forEach(function (file) {
            list.push(file);
        });
        res.render('gallery', { list : list });
    });
}
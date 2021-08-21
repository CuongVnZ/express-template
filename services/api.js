const axios = require('axios').default;
const cheerio = require("cheerio");
const fs = require("fs");

if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function() 
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}

function createDate() {
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //As January is 0.
    var yyyy = today.getFullYear(); 
    const noTimeDate = dd+'-'+mm+'-'+yyyy+'-';
    return noTimeDate;
}

function checkApostrophe(data) { // Remove Apostrophe from string
    const newData = data;
    const regex = /'/g; // Regular expression to remove all occurences of '
    for(const key of Object.keys(newData)) {
        var str = newData[key];
        if(typeof str === 'string')
            if(str.includes("'")) newData[key] = str.replace(regex, "");

    }
    return newData;
}

/* (async () => {

	const url = `https://axieinfinity.com/`;

	const axiosResponse = await axios.get(url);

	console.log('axiosResponse', axiosResponse.data, axiosResponse.status);


})(); */

module.exports.createDate = createDate();
module.exports.checkApostrophe = checkApostrophe;
const fs = require('fs')
const axios = require('axios')

const api = axios.create({
    baseURL: process.env.API_URL
})

let jsonData = '{"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}'

let jsonObj = JSON.parse(jsonData)
console.log(jsonObj)

let jsonContent = JSON.stringify(jsonObj)

fs.writeFile("output.json", jsonContent, 'utf-8', function (err) {
    if (err) {
        console.error("an error occurred while writing JSON file")
        return console.error(err)
    }
    console.log("JSON has been succesfully saved")
})
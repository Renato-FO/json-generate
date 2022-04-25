const fs = require('fs')
const getData = require('./src/services/rest')

let jsonData = ''

async function restApi () {
    const data = await getData()
    
    jsonData = `${data}`
}

restApi ()

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
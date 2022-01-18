const request = require('postman-request');
const geoCode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js')


// const url = 'http://api.weatherstack.com/current?access_key=d1b2f82b107b106d5af857dd08e58b8f&query=37.8267,-122.4233'

// request({url: url, json: true}, (error, res)=> {
//     if(error) {
//         console.log('unable to connect to internet')
//     } else if(res.body.error) {
//         console.log('enable to find location')
//     } else {
//         console.log(res.body.current)
//     }
// })





geoCode('Milan', (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }

    forecast(data.lat, data.long, (error, data) => {
        if (error) {
            console.log(error)
        } else {
            console.log(data)
        }
    })
})





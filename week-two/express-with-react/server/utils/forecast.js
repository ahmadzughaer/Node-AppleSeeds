const request = require('postman-request')
const { latitude, longitude } = require('./geocode')
const forecast = (latitude, longitude, callBack) => {
    const url = `http://api.weatherstack.com/current?access_key=d1b2f82b107b106d5af857dd08e58b8f&query=${latitude},${longitude}`

    request({url: url, json: true}, (error, res)=> {
        if(error) {
            callBack('unable to connect to internet', undefined)
        } else if(res.body.error) {
            callBack('enable to find location', undefined)
        } else {
            callBack( undefined, `Today is ${res.body.current.weather_descriptions[0]} and the temperature is: ${res.body.current.temperature}`)
        }
    })
}
// const forecast = () => {
//     console.log(latitude, longitude)
// }
module.exports = forecast
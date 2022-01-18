const request = require('postman-request')
let latitude, longitude, location
const geoCode = (address, callBack) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYWhtYWR6IiwiYSI6ImNreWg4aXVtdzF6dTcyeHBiYXF6NjhlODcifQ.PSB48Ia5vpT19Uyefnb9Ig&limit=1`
    request({ url: url, json: true }, (error, res) => {
        if (error) {
            callBack('Unable to connect to internet', undefined)
        } else if (res.body.features.length === 0) {
            callBack('enable to find location',undefined)
        } else {
            latitude = res.body.features[0].center[1]
            longitude = res.body.features[0].center[0]
            location = res.body.features[0].place_name
            callBack(undefined, {
                'lat': latitude,
                'long': longitude,
                'location': location
            })
        }
    })
}



module.exports = {
    latitude,
    longitude
}

module.exports = geoCode
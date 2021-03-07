const request = require('postman-request')


const forecast =(latitude, longitude, callback)=>{
    const url='http://api.weatherstack.com/current?access_key=3a4d6ddd0528cdda12a5d8c2238aec7f&query='+latitude+','+longitude
    request({ url ,json: true }, (error, {body})=>{   //url :url shorthand property and destructuring body off of response that we get here
            if (error){
                callback("Cannot connect to the weather service!",undefined)
            } else if(body.error){
                callback('Unable to find location',undefined)
            } else{
            callback(undefined,`${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out with ${body.current.humidity}% humidity. It feels like ${body.current.feelslike} degrees.`)
            }
            
        })


}
module.exports = forecast
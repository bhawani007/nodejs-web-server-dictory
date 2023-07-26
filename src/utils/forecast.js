const request = require("request")
console.log("check the forecast file....")


const forecast = (lat,long, callback) => {

    const url = "http://api.weatherstack.com/current?access_key=820ee83b629b98106d60c41b81d1b083&query="+lat+","+long;

    request( { url, json:true  }, (error, { body }) => {
        console.log(body)
        if(error)
        {
           callback("Unable to connect to weather  service!",undefined)
        }else if(body.error)
        {
           callback("Unable to find locationvv", undefined)
        }else {
            callback(undefined, body.daily.data[0].summary + " It is currenty " + body.current.temperature + " degress out. There is a " + body.current.precipProbability + " % chance of rain.")
            //callback(undefined, body)
        }
      
     
        // console.log(body.current.weather_icons)

        // if(error)
        // {
        //       //console.log(error)
        //       callback("Unable to connect to location services!", undefined)
        // }
     
 })
  
}


module.exports = forecast

const request = require('request');

console.log("geocode file is working....")

const geocode = (address = "boston", callback) => {

        const url = "http://api.weatherstack.com/current?access_key=820ee83b629b98106d60c41b81d1b083&query="+address;

        request( { url, json:true  }, (error, { body }) => {
            //const dataparse = JSON.parse(body);
            //console.log(dataparse.current);
            // console.log(body.current.weather_icons)

            // if(error)
            // {
            //       //console.log(error)
            //       callback("Unable to connect to location services!", undefined)
            // }
          if(body)
          {
           //console.log(body.current.weather_descriptions[0]+ " It is currenty " + body.current.temperature + " degress out. It feels like " + body.current.feelslike + " degress out.")
           callback("undefined",{
                  response:body.current.weather_descriptions[0]+ " 2It is currenty " + body.current.temperature + " degress out. It feels like " + body.current.feelslike + " degress out.",
                  "valuecheck": true
           })
          }else
          {
            callback("something went wrong", undefined)
          }
     })
      
}

module.exports = geocode
// const geocode = require('./utils/geocode')
// const forecast = require('./utils/forecast')

// const address = process.argv[2]

// if (!address) {
//     console.log('Please provide an address')
// } else {
//     geocode(address, (error, { latitude, longitude, location }) => {
//         if (error) {
//             return console.log(error)
//         }

//         forecast(latitude, longitude, (error, forecastData) => {
//             if (error) {
//                 return console.log(error)
//             }

//             console.log(location)
//             console.log(forecastData)
//         })
//     })
// }




//const request = require('request');

// const url = "https://api.darksky.net/forecast/d0f53843820de63f547cf69b890613b7/37.8267,-122.4233?lang:tet";

// /*request({url:url},(error,response)=> {
//     const data = JSON.parse(response.body);
//     console.log(data);
// });*/

// // request({url:url,json:true},(error,response)=> {
// //     console.log(response.body.daily.data[0].summary+ " It is currently "+response.body.currently.temperature+" degrees out .There is "+response.body.currently.precipProbability+"% chance of rain");
// // });

// // const geoURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2FseWFuaXN1cmEiLCJhIjoiY2szc2l1MHgwMDVwZTNucDdreGo2emh4NiJ9.e-LUMVfNb3WaCIUH0cezaA";

// // request({url:geoURL,json:true},(error,response)=> {
// //     console.log("lattitude is : "+response.body.features[0].center[0]+ " logituude is : "+response.body.features[0].center[1]);
// // });

// //for temp error handling

// request({url:url,json:true},(error,response)=> {
//     if(error) {

//         console.log('unable to open the link');
//     } 
//     else if(response.body.error) {
//         console.log('location is wrong');
//     }
//     else {
//         console.log(response.body);
//     }
// });


// //for geo loaction error

// const geoURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2FseWFuaXN1cmEiLCJhoiY2szc2l1MHgwMDVwZTNucDdreGo2emh4NiJ9.e-LUMVfNb3WaCIUH0cezaA";

// request({url:geoURL,json:true},(error,response)=> {
//     if(error) {
//         console.log('link is not opened');
//     } 
//     else if(response.body.features.length===0) {
//         console.log('location is wrong');
//     }
//     else {
//         console.log("lattitude is : "+response.body.features[0].center[0]+ " logituude is : "+response.body.features[0].center[1]);
//     }
// });


// const geoCode = (address,callback) => {
//     const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1Ijoia2FseWFuaXN1cmEiLCJhIjoiY2szc2l1MHgwMDVwZTNucDdreGo2emh4NiJ9.e-LUMVfNb3WaCIUH0cezaA'

//     request({ url: geocodeURL, json: true }, (error, response) => {
//         if (error) {
//             callback('Unable to connect to location services!',undefined)
//         } else if (response.body.features.length===0) {
//             callback('Unable to find location. Try another search.',undefined)
//         } else {

//             callback('undefined', {
//             latitude : response.body.features[0].center[0],
//             longitude : response.body.features[0].center[1],
//             location : response.body.features[0].place_name
//             })
//         }
//     })
// }

const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if(!address) {
    console.log('enter location');
}
else {
    geoCode( address ,(error, {latitude ,longitude ,location} ) => {
        
        if(error) {
            return console.log(error);
        }

        forecast( latitude ,longitude , (error, forecastData) => {
            if(error) {
                return console.log(error);
            }
            console.log(location)
            console.log(forecastData);
        })
    });
}

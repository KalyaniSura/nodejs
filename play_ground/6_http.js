const https =require('https');
const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2FseWFuaXN1cmEiLCJhIjoiY2szc2l1MHgwMDVwZTNucDdreGo2emh4NiJ9.e-LUMVfNb3WaCIUH0cezaA";

const request = https.request( url , (response)=>{
    let data = "";

    response.on('data',(chunk)=>{
        data = data + chunk.toString();
    });

    response.on('end',()=>{
        const body = JSON.parse(data);
        console.log(body);
    })

});

request.on('error',(error)=>{
    console.log('An error occured')
});

request.end();
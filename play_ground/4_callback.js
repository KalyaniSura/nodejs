setTimeout (() => {
    console.log('2 seconds of time');
},2000);

const names = ['andrew','jen','jess'];

const shortNames = names.filter((name)=>{

    return name.length <4;
})

const geocode = ( address , callback ) => {

    setTimeout (() => {
        const data =  {
            lattitude:0,
            lagitude:0
        }
    
        callback(data);
    },2000);
    // const data =  {
    //     lattitude:0,
    //     lagitude:0
    // }

    // return data;
}

geocode('india' , (data) => {
    console.log(data)
});

//console.log(data)
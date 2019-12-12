// const name='kalyani';
// const user_age= 27

// const user ={
//     name,
//     age:user_age,
//     location : 'india'
// }

// console.log(user)

const product = {
    label : 'read notebook',
    price : 3 ,
    stock :30 ,
    rating :4.4 ,
    saleprice :undefined
}

// const {label:productLabel,price,rating =5} = product;

// console.log(productLabel);
// console.log(rating);

const transaction = ( type , {label,stock} ) => {
    console.log(type,label,stock)
}

transaction('order',product);
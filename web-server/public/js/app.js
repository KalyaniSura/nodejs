console.log('Client side javascript file is loaded!')

/*fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then( (data) => {
        console.log(data)
    })
})*/



const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const message = document.querySelector('#messageOne');
const messageSecond = document.querySelector('#messageSecond');

const searchResults ="";



weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const location = search.value;

    message.textContent = "loading serach results";
    messageSecond.textContent ="";

    fetch('http://localhost:3000/weather?address='+location).then((response) => {
    response.json().then( (data) => {
        if(data.error) {
            messageSecond.textContent = data.error;
            message.textContent = '';
        }
        else {
            message.textContent = data.location ;
            messageSecond.textContent = data.forecast ;
            
        }
    })
})
})

//messageSecond.textContent = searchResults
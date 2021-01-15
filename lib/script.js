let url = 'https://api.thecatapi.com/v1/images/search'

var randomCat 


let img = document.querySelector('img');
let button = document.querySelector('button');      // Made program aware there was a button

function getCat() {                                 // What code to run.
fetch(url)
  .then(response => response.json())
  .then(json => img.src = json[0].url)              //do in browser
  .catch(err => console.log('oops something went wrong', err))
}

                                                    // Know when button is clicked
button.addEventListener('click', getCat)            // must pass in a callback function

// Part 3
document.querySelector(".searchButton").addEventListener("click", (event) =>{
    event.preventDefault();
    
    fetch('https://api.thecatapi.com/v1/images/search?category_ids=' + document.getElementById("textInput").value, {
    headers: {
    'x-api-key': '844648bd-4902-49e3-a8a9-4c7f9f2ece28'
    }
    })
    .then(response => response.json())
    .then(json => {
    response = json;
    document.querySelector(".randomCatImage").src = response[0].url;
    })
    .catch(err => console.log("something went wrong!", err))
    })

    ///844648bd-4902-49e3-a8a9-4c7f9f2ece28
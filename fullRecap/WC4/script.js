'use strict'

window.onload = () => {
    let dees =null;
    async function getData(searchedData) {
        let response = await fetch(`http://www.omdbapi.com/?s=${searchedData}&apikey=77960cf`);
        let json = await response.json();
        return json;
    }

    let submitFuckingShiteForm = () => {
        let searched = document.getElementById('numberInput').value;
        getData(searched).then(result => {
            console.log(result);
            let cardHolder = document.getElementById('fuck');
            cardHolder.innerHTML = "";
            for (const film of result.Search) {
                cardHolder.innerHTML += `<div class="card" style="width: 18rem;">
                <img src="${film.Poster}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${film.Title}</h5>
                  <p class="card-text">Year: ${film.Year}</p>
                  <a href="#" class="btn btn-primary">Watch</a>
                </div>
              </div>`
                // dees = document.createElement('p');
                // dees.innerHTML =`${film.Title}`;
                // document.getElementById('fuck').appendChild(dees);
            }
            
            
        })
        console.log("fail");
    }
    
    let button = document.getElementById('knop');
    button.addEventListener('click', submitFuckingShiteForm);
    

}
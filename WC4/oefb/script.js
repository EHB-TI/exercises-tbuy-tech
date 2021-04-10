'use strict'
window.onload = () => {
    fetch('http://www.omdbapi.com/?s=tt3896198&apikey=77960cf')
    .then(response => console.log(response.text()))

        async function getData(searchParamater) {
            let url = await fetch(`${config.baseurl}`)
        }

    let submitForm = event => {
        event.preventDefault();
        
        let value = document.getElementById('inputTitle').value;

        let result = getData(value);
    }
    
}


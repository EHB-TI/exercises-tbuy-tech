

window.onload = () => {
    let config = null;
    let cards = [document.getElementsByClassName('card')[0], document.getElementsByClassName('card')[1], document.getElementsByClassName('card')[2], document.getElementsByClassName('card')[3]];
    cards.forEach(element => element.style.display = 'none')
    async function getConfig(){
        let resp = await fetch('config.json');
        let data = await resp.json();

        config = data;
    }
    console.log('loaded');
    getConfig();

    async function getData(searchParameter) {
        let url = `http://www.omdbapi.com/?s=${searchParameter}&apikey=77960cf`;
        //let url = await fetch(`${config.baseurl}s=${searchparameter}${config.apikey}`);

        console.log(url);
        let resp = await fetch(url);
        let data = await resp.json();
        let results = [data.Search[0], data.Search[1], data.Search[2], data.Search[3]]
        return results;
    }
    function showMovieOnCard(results){
        
        for (let i = 0; i < results.length; i++) {
            console.log('test');
            cards[i].style.display = 'block';
            document.getElementsByClassName('card-img-top')[i].src = results[i].Poster;
            document.getElementsByClassName('card-title')[i].innerHTML = results[i].Title;
            //document.getElementsByClassName('card-text')[i].innerHTML = results[i].Year;
            document.getElementsByClassName('card-text')[i].innerHTML = results[i].Plot;

        }
        
    }

    let submitForm = event => {
        event.preventDefault();
        
        let value = document.getElementById('t').value;

        getData(value).then(results => {
            showMovieOnCard(results)
        });
        
        
    }
    document.getElementById('search-by-title-form').addEventListener('submit', submitForm);
    
}


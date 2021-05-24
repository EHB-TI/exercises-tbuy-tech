

window.onload = () => {
    console.log('loaded');
    let config = null;
    getConfig();
    let cards = [];
    let totalWatchTime = 0;
    cards.forEach(element => element.style.display = 'none')
    document.getElementById('timeWasted').innerText = `${totalWatchTime} minutes`;

    let submitForm = event => {
        event.preventDefault();
        let value = document.getElementById('t').value;
        getData(value).then(results => {
            showMovieOnCard(results).then(() => {
                let addTimeButtons = document.getElementsByClassName('addTimeButton');
                console.log(addTimeButtons);
                for (let index = 0; index < 8; index++) {
                    addTimeButtons[index].addEventListener('click', () => {
                        totalWatchTime += parseInt(document.getElementsByClassName('card-text')[index].innerHTML);
                        document.getElementById('timeWasted').innerText = `${totalWatchTime} minutes`;
                    });
                }
            });
        });
    }

    document.getElementById('search-by-title-form').addEventListener('submit', submitForm);




    async function getConfig() {
        let resp = await fetch('config.json');
        let data = await resp.json();
        config = data;
        console.log(config);
    }
    async function getData(searchParameter) {
        console.log(config);
        let url = `${config.baseurl}s=${searchParameter}${config.apikey}`;
        let resp = await fetch(url);
        let data = await resp.json();
        let results = [data.Search[0], data.Search[1], data.Search[2], data.Search[3], data.Search[4], data.Search[5], data.Search[6], data.Search[7]]
        return results;
    }

    async function showMovieOnCard(results) {
        let cardBlock = document.getElementById('cards');
        console.log(cardBlock.childNodes.length);
        if (cardBlock.childNodes.length === 0) {
            console.log('true');
            for (let i = 0; i < results.length; i++) {
                let card = document.createElement('div');
                card.classList.add('card');
                let img = document.createElement('img');
                img.classList.add('card-img-top');
                img.src = results[i].Poster;
                let card_body = document.createElement('div');
                card_body.classList.add('card-body');
                let title = document.createElement('h5');
                title.classList.add('card-title');
                title.innerHTML = results[i].Title;
                let durationMovie = document.createElement('p');
                durationMovie.classList.add('card-text');
                let durationButton = document.createElement('button');
                durationButton.classList.add('btn-sm');
                durationButton.classList.add('addTimeButton');
                durationButton.innerText = "+";
                durationMovie.innerHTML = getRandomInt();
                card.appendChild(img);
                card.appendChild(card_body);
                card_body.appendChild(title);
                card_body.appendChild(durationMovie);
                card_body.appendChild(durationButton);
                cards.push(card);
                cards[i].style.display = 'block';
            }
        } else {
            console.log('false');

            for (let i = 0; i < results.length; i++) {
                document.getElementsByClassName('card-img-top')[i].src = results[i].Poster;
                document.getElementsByClassName('card-title')[i].innerHTML = results[i].Title;
                document.getElementsByClassName('card-text')[i].innerHTML = getRandomInt();
            }

        }
        cards.forEach(element => cardBlock.appendChild(element));
    }

    function getRandomInt() {
        min = Math.ceil(120);
        max = Math.floor(230);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

}




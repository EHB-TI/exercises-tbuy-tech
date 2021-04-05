'use strict'
let random = Math.floor(Math.random() * 20);
document.getElementsByTagName('p')[0].innerHTML = random;

document.getElementsByTagName('form')[0].addEventListener('submit', (event) => {
    event.preventDefault();
    let guess = document.getElementById('guess').value;
    compareNumber(guess)
});

function compareNumber(guess) {
    let promise = new Promise((resolve, reject) => {
        if (guess < 0 || guess > 20) {
            reject(new error('only numbers between 0 and 20 please.'))
        }
        if (random == guess) {
            resolve( () => {
                document.getElementById('result').innerHTML = 'Correct! Play again';
                random = Math.floor(Math.random() * 20)})
        } else if (random < guess) {
            resolve(document.getElementById('result').innerHTML = 'Lower, try again.');
        } else if (random > guess) {
            resolve(document.getElementById('result').innerHTML = 'Higher, try again.');
        } 
      });
}


// document.getElementsByTagName('form')[0].addEventListener('submit', (event) => {
//     event.preventDefault();
//     let guess = document.getElementById('guess').value;
//     console.log(random);
//     console.log(guess);
//     if (random == guess) {
//         document.getElementById('result').innerHTML = 'Correct! Play again'
//         random = Math.floor(Math.random() * 20);
//         document.getElementsByTagName('p')[0].innerHTML = random;
//     } else if (random < guess) {
//         document.getElementById('result').innerHTML = 'Lower, try again.'
//     } else if (random > guess) {
//         document.getElementById('result').innerHTML = 'Higher, try again.'
//     } 
// })
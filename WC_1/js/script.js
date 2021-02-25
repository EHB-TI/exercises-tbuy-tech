'use strict'

let btn = document.getElementById("btn");
btn.addEventListener('click', function() {
    let naam = document.getElementById("naam").value;
    let leeftijd = document.getElementById("leeftijd").value;
    alert("Dag " + naam + ", Je bent " + leeftijd + " jaar oud.")
})

//7 - Capitalization
function capitalize(txt) {
    let cap = txt.charAt(0).toUpperCase() + txt.slice(1);
    return cap;
} 
let toto = "piet";
toto = capitalize(toto);

console.log(toto);

//8 - Capitalization++
function capitalizeEnhanced(txt) {
    if (txt.charAt(0) === " ") {
        txt = txt.slice(1);
    }
    if (txt.charAt(txt.length - 1) === " ") {
        txt = txt.slice(0, (txt.length - 1));
    }
    txt = txt.charAt(0).toUpperCase() + txt.slice(1);
    for (let index = 0; index < txt.length; index++) {
        if (txt.charAt(index) === " ") {
            txt = txt.slice(0, index + 1) + txt.charAt(index + 1).toUpperCase() + txt.slice(index + 2);
        }
    }
    return txt;
} 

let yay = " test one two three ";
let test = capitalizeEnhanced(yay);

//9 - Change it up
let phrase = "Javascript is the main focus of Web Essentials";
let phraseUpdated = phrase.replace("Essentials", "Advanced");
console.log(phraseUpdated);

//10 - Travel much?

function longestName(one, two, three, four) {
    let array = [one, two, three, four];
    let largest = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index].length >= largest) {
            largest = array[index].length;
        }
    }
    for (let index = 0; index < array.length; index++) {
        if (array[index].length === largest) {
            return array[index];
        }
    }
}

let langeTisch = longestName("Italie", "Oezbekistan", "Droomland", "Nieuw-Zeeland");
console.log(langeTisch);

//DATES 
function formatDate(datum) {
    
    console.log(datum);
    let month;
    let compare = datum.slice(4,7);
    console.log(compare);
    switch (compare) {
        case "Jan":
            month = "January";
            break;
        case "Feb":
            month = "February";
            break;
        case "Mar":
            month = "March";
            break;
        case "Apr":
            month = "April";
            break;
        case "Mai":
            month = "Mai";
            break;
        case "Jun":
            month = "June";
            break;
        case "Jul":
            month = "July";
            break;
        case "Aug":
            month = "August";
            break;
        case "Sep":
            month = "September";
            break;
        case "Oct":
            month = "October";
            break;
        case "Nov":
            month = "November";
            break;
        case "Dec":
            month = "December";
            break;
    }
    let day = datum.slice(8,10);
    let year = datum.slice(11,15);
    let dateFormatted = day + " " + month + " " + year;
    return dateFormatted;

}
let datum = new Date();
console.log(datum);
console.log(formatDate(datum.toDateString()));

//Birthday 
let datumm = new Date();
let bDay = new Date(2022, 1, 1);
console.log(bDay);
let diff = bDay - datumm;
diff /= 86400000;
diff = diff.toFixed(0);
console.log(diff + " days to birthday.");


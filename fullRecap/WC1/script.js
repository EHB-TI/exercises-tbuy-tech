'use strict'

let voornaam = document.getElementById('voornaamInput');
let achternaam = document.getElementById('achternaamInput');
let leeftijd = document.getElementById('leeftijdInput');
let geboorteDatum = document.getElementById('geboorteInput');

let form = document.getElementById('formEntry');

let Color = {
    nR:document.getElementById('myRange1').value, 
    nG:document.getElementById('myRange2').value, 
    nB:document.getElementById('myRange3').value, 
    getColors: function() {
        return `${this.nR},${this.nG},${this.nB}`;
    },
    setColors: function(a, b, c) {
        this.nR = a;
        this.nG = b;
        this.nB = c;
    }
};

function Student(first, last, age, degree) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.degree = degree;
  }
  let students =[];
  students.push(new Student("yo", "ca va", 12, "fail"));
  students.push(new Student("ya", "ca va", 17, "fail"));
  students.push(new Student("yi", "ca va", 32, "fail"));
  for (const x of students) {
      console.log(x);
  }

// let Student = {
//     name:"",
//     age: 0,
//     degree:"",
//     courses: [],
//     setPersonalDetails: function(pers) {
//         // let {name, age, degree} = pers;
//         this.name = pers[0];
//         this.age = pers[1];
//         this.degree = pers[2];

//     },
//     addCourse: function (...a) {
//         for (const x of a) {
//             this.courses.push(x);
//         }
        
//     },
//     showStudent: function() {
//         let display = `${this.name}, ${this.age}, ${this.degree}, vakken: ${this.courses}`;

//         return display;
//     }
// }
// let pers = ["Piet Snot", 23, "wetenschappen"];
// console.log(pers);
// Student.setPersonalDetails(pers);

// console.log(Student.showStudent());

// Student.addCourse("Fysica","biologie", "aardrijkskunde", "wiskunde");

// console.log(Student.showStudent());

document.getElementById('myRange1').addEventListener('mousemove', () => {
    Color.setColors(document.getElementById('myRange1').value, document.getElementById('myRange2').value, document.getElementById('myRange2').value);
    document.getElementsByTagName('body')[0].style.backgroundColor = `rgb(${Color.getColors()})`;
})
document.getElementById('myRange2').addEventListener('mousemove', () => {
    Color.setColors(document.getElementById('myRange1').value, document.getElementById('myRange2').value, document.getElementById('myRange2').value);
    document.getElementsByTagName('body')[0].style.backgroundColor = `rgb(${Color.getColors()})`;

})
document.getElementById('myRange3').addEventListener('mousemove', () => {
    Color.setColors(document.getElementById('myRange1').value, document.getElementById('myRange3').value, document.getElementById('myRange2').value);
    document.getElementsByTagName('body')[0].style.backgroundColor = `rgb(${Color.getColors()})`;
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (leeftijd.value >= 18) {
        alert(`Welkom ${voornaam.value} ${achternaam.value}, je mag verdergaan.`)
        let gd = geboorteDatum.value;
        console.log(gd);
        berekenVerjaardag(gd);
        console.log(`rgb(${Color.getColors})`);


    } else {
        alert(`Get the fuck out, ${voornaam.value} ${achternaam.value}. Je mag NIET verdergaan.`)

    }
    form.reset();

})

let text = document.getElementById('text');
let string = text.innerHTML;
string = string.charAt(0).toUpperCase() + string.slice(1);
console.log(string);
text.innerHTML = string;

function capitalize(string)  {
 return string.charAt(0).toUpperCase() + string.slice(1);
}

function enhancedCapitalization(string) {
    string = string.trim();
    string = string.charAt(0).toUpperCase() + string.slice(1);
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === " ") {
            string = string.slice(0, i + 1) + string.charAt(i + 1).toUpperCase() + string.slice(i +2);
        }
        
    }
    return string;
}



let papa = "ik ben een vader";
console.log(papa);
papa = capitalize(papa);
console.log(papa);
let mama = "      ik ben een mama       ";
console.log(mama);

mama = enhancedCapitalization(mama);
console.log(mama);
mama = mama.replace("Mama", "Papa");
console.log(mama);

function fixDeLangste(array) {
    let langste ="";
    for (const land of array) {

        if (land.length > langste.length) {
            langste = land;
        }
    }
    return langste;
}

let landen = ["Belgie", "Nederland", "Frankrijk"]

console.log(fixDeLangste(landen));


function berekenVerjaardag(datum) {
    datum = new Date(datum);
    console.log(datum);
    console.log(datum.getMonth());
    console.log(datum.getDay());

    let today = new Date;
if (datum.getMonth() > today.getMonth()) {
    datum.setYear(2021);
}
if (datum.getMonth() < today.getMonth()) {
    datum.setYear(2022);
}
if (datum.getMonth() == today.getMonth()) {
    if (datum.getDay() > today.getDay()) {
    datum.setYear(2021);
        
    } else if (datum.getDay() < today.getDay()) {
        datum.setYear(2022);

    } else {
        text.innerHTML = "Gelukkige verjaardag!";
    }
    
}
console.log(datum);
let diff = datum.getTime() - today.getTime()
diff = diff/(1000*60*60*24);
console.log(diff.toFixed(0));
text.innerHTML = `Nog ${diff.toFixed(0)} dagen tot je verjaardag.`

}



Color.setColors(12,23,234)
 console.log(Color.getColors());


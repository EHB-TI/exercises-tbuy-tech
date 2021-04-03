'use strict'

// OEFENING 1
let color = {
    nR: 0,
    nG: 0,
    nB: 0,

    showColor() {
        console.log(`rgb(${this.nR},${this.nG},${this.nB})`);
    },
    // OEFENING 2 uitbreiding => de if statement. Hoe van je een functieoproep met te weining argumenten op?
    setColor(red, green, blue) {
        if (red > 255 || red < 0 || green > 255 || green < 0 || blue > 255 || blue < 0) {
            console.log('Enter valid data');
        } else {
            this.nR = red;
            this.nG = green;
            this.nB = blue;
        }
    }
}
// OEFENING 3 uitbreiding => prompt()
let red = prompt('Geef de roodwaarde aan.');
let green = prompt('Geef de groenwaarde aan.');
let blue = prompt('Geef de blauwwaarde aan.');


color.setColor(red,green,blue);
color.showColor();
color.setColor(245,143,12);
color.showColor();
color.setColor(182,124, 12);
color.showColor();

//OEFENING 4



let student = {
    name: "John Doe",
    age: 0,
    degree: "default",
    courses: [],

    setPersonalDetails(name, age, degree) {
        this.name = name;
        this.age = age;
        this.degree = degree;
    },

    addCourse(...courses) {
        for (const course of courses) {
            this.courses.push(course);
        }
    },

    showStudent() {
        console.log( `Name: ${this.name}, age: ${this.age}, degree: ${this.degree}, courses: ${this.courses}`);
    }

}
 //QUESTION: How to manipulate the display off arrays using literals?
student.setPersonalDetails('Thomas', 12, 'IT');
student.addCourse('Web dev', 'Data essentials', 'Business IT');
student.showStudent();

/*
class Color {
    // constructor() {
    //     this.nR = 0;
    //     this.nG = 0;
    //     this.nB = 0;
    // }
    constructor(red, green, blue) {
        this.nR = red;
        this.nG = green;
        this.nB = blue;
    }


     showColor() {
        console.log(`rgb(${this.nR},${this.nG},${this.nB})`);
        
    }
    colorBody() {
        document.getElementsByTagName('body')[0].style.background = `rgb(${this.nR},${this.nG},${this.nB})`;
    }

};

let a = new Color(12,123,78);
a.showColor();
a.colorBody();
console.log(a.nB);
*/
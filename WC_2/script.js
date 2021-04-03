'use strict'

// OEFENING 1
let color = {
    nR: 0,
    nG: 0,
    nB: 0,

    showColor() {
        console.log(`rgb(${this.nR},${this.nG},${this.nB})`);
    },

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

color.showColor();
color.setColor(12,12,12);
color.showColor();
color.setColor(245,143,12);
color.showColor();
color.setColor(182,124);

// OEFENING 2 uitbreiding



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
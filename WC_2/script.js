'use strict'
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
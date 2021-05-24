'use strict'
window.onload = () => {

    let squares = document.getElementsByClassName('square');
    
    
    Array.from(squares).forEach(element => {
        element.style.backgroundColor = 'brown';
        element.addEventListener('mouseover', () => {
            if (element.style.backgroundColor == 'brown') {
                element.style.backgroundColor = 'black';
            } else {
                element.style.backgroundColor = 'brown';
            }
            
           
            
        })
    });


}


'use strict'

window.onload = () => {
    let ul = document.getElementsByClassName('list-group')[0];
    let list = JSON.parse(sessionStorage.getItem('list'));
    console.log(list);
    ul.innerHTML ="";
     for (const student of list) {
         ul.innerHTML += `<li class="list-group-item">${student.name}: ${student.age}, ${student.degree}, ${student.courses.join(',')} </li>`
     }
}





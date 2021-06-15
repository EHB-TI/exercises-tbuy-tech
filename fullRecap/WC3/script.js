'use strict'
let dgree = null;
let course = null;
let form = document.getElementById('inputForm');
function Student(name, age, degree) {
    this.name = name;
    this.age = age;
    this.degree = degree;
    this.courses = [];
}


let students = [];


let registerStudent = document.getElementById('registerStudent');

registerStudent.addEventListener('click', (event) => {
    event.preventDefault();
    for (const radio of document.getElementsByClassName('radio')) {
        if (radio.checked) {
            dgree = radio.value;
            console.log(dgree);
        }
    }
    let a = new Student(document.getElementById('formGroupExampleInput').value, document.getElementById('formGroupExampleInput2').value, dgree)
    for (const checkbox of document.getElementsByClassName('checkbox')) {
        if (checkbox.checked) {
            a.courses.push(checkbox.value)

        }
    }

    students.push(a);
    sessionStorage.setItem('list', JSON.stringify(students));
    console.log(JSON.parse(sessionStorage.getItem('list')));
    form.reset();
    addAllert();

})

console.log(students);

let addAllert = () => {
    
    let divAlert = document.createElement('div');
    divAlert.innerHTML = `<div class="alert alert-success" role="alert">
    A simple success alert—check it out!
  </div>`
  form.appendChild(divAlert);
  function myFunction() {
    setTimeout(function(){ form.removeChild(divAlert); }, 3000);
  }
  myFunction();
  
  console.log("yay");
}


// let removE = (alert) => {
//     console.log("test");
//     form.removeChild(alert);
// }


function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(script);

    document.body.append(script);
}

loadScript("math.js", script => {
    console.log(`${script} is loaded.`);
    
})
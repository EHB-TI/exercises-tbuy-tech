'use strict';


    let listStudents = [];//List of students

    //Student object constructor
    function Student(name, age, degree, courses){
        this.name = name;
        this.age = age;
        this.degree = degree;
        this.courses = courses;

         this.showStudent = function(){
             let txt = `Studentname: ${this.name}, ${this.age} years and studying ${this.degree} at EhB. 
 Courses are: ${this.courses.join(', ')}.`;

             return txt;
         }

    }

    function createStudent(){
        //ask for details
        let name = document.querySelector('#name-input').value;
        let age = document.querySelector('#age-input').value;
        let radios = document.querySelectorAll('.radio > input');
        let degree;
        console.log(radios);
        for (const r of radios) {
            if (r.checked) {
                degree = r.value;
            }
        }
        let courses = [];
        let checkboxes = document.querySelectorAll('.course > input');
        console.log(checkboxes);
        for (const c of checkboxes) {
            if (c.checked) {
                courses.push(c.value);
            }
        }
        console.log(courses)
        let student = new Student(name,age,degree, courses);

        //ask for all the courses
        // while(true){
        //     let c = prompt('Course?');
        //     if (c) {
        //         student.addCourse(c);
        //     } else {
        //         break;
        //     }
        // }

        // Done. Add to list\
        listStudents.push(student);
        console.log(listStudents);
        sessionStorage.setItem('list', JSON.stringify(listStudents));

    }

    function showStudents(){
        let div = document.getElementById('content');
        for(let s of listStudents){
            let p = document.createElement('p');
            p.innerHTML = s.showStudent();
            div.appendChild(p);
        }
    }



    document.getElementById('form_idable').addEventListener('submit', function(event){
        event.preventDefault();
        createStudent();
        console.log(listStudents);
        document.getElementsByClassName('alert-success')[0].style.display = "block";
        setTimeout(closePopUp, 3000);

    })
    

function closePopUp() {
    document.getElementsByClassName('alert-success')[0].style.display = "none";
}










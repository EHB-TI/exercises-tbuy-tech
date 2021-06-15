'use strict'

window.onload = () => {
    let container = document.getElementsByClassName('container')[0];
    async function getData() {
        let data = await fetch("data.json");
        data = await data.json();
        return data;
    }


    let showData = () => {
        getData().then(result => {
            console.log(result);
            let stringkje= "";
            for (const student of result.students) {
                stringkje += `<div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${student.name}</h5>
                <p class="card-text">${student.age}</p>
                <p class="card-text">${student.degree}</p>`;
                for (const x of student.courses) {
                    stringkje +=  `<p class="card-text">${x.name} - ${x.credits}</p>`;
                }
                stringkje += `<a href="#" class="btn btn-primary">Go somewhere</a></div></div>`;
                container.innerHTML += `${stringkje}`;

            }
        });
    }
    showData();
}
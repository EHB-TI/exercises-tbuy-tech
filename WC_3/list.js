'use strict'
window.onload = function() {
    let list = JSON.parse(sessionStorage.getItem('list'));
    console.log(list);

    let html = '<div class=\"card" style=\"width: 18rem;\"><ul class=\"list-group list-group-flush\">'

    for (const student of list) {
        html += `<li class="list-group-item">${student.name}</li>`
    }

    html += '</ul></div>'


    document.getElementById('students').innerHTML = html;

}
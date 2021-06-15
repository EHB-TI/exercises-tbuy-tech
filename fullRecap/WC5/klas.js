'use strict'
window.onload = () => {
    document.querySelectorAll('.container  .dropdown  .btn')[1].innerHTML = `Leerlingen`;
    async function getData() {
        let data = await fetch("klassen.json");
        data = await data.json();
        return data;
    }
    function vuldDeCombo1() {
        getData().then(result => {
            document.querySelectorAll('.container  .dropdown  .btn')[0].innerHTML = `Klassen`;
            for (const klas in result) {

                document.querySelectorAll('.dropdown-menu')[0].innerHTML += `<li><a class="dropdown-item" href="#">${klas}</a></li>`;
            }
        })
            .then(result => {
                for (let index = 1; index < 2; index++) {
                    let stri = `#dropdownMenu${index} a`;
                    console.log(stri);
                    console.log(document.querySelectorAll(stri)[0]);
                    for (let i = 0; i < 4; i++) {
                        console.log(document.querySelectorAll(stri)[i]);
                        document.querySelectorAll(stri)[i].addEventListener('click', event => {
                            vuldDeCombo2(document.querySelectorAll(stri)[i].innerHTML);
                            console.log(document.querySelectorAll(stri)[i].innerHTML + " " + i);
                        });
                    }
                }
            });
    }
    function vuldDeCombo2(waarde) {
        let aantalItems = 0;
        getData().then(result => {
            console.log(result);
            let i = 0;

            for (const klas in result) {
                if (klas == waarde) {
                    document.querySelectorAll('.dropdown-menu')[1].innerHTML = "";
                    console.log(`${result[klas] == waarde} `);
                    for (const key in result[klas]) {
                        document.querySelectorAll('.dropdown-menu')[1].innerHTML += `<li><a class="dropdown-item" href="#">${result[klas][key]}</a></li>`;
                        aantalItems++;
                    }
                }
                i++;
            }
            return aantalItems
        })
            .then(result => {
                console.log(result);
                for (let index = 0; index < result; index++) {
                    console.log(document.querySelectorAll('#dropdownMenu2 .dropdown-item')[index]);
                    document.querySelectorAll('#dropdownMenu2 .dropdown-item')[index].addEventListener('click', () => {
                        document.getElementById('x').innerHTML = document.querySelectorAll('#dropdownMenu2 .dropdown-item')[index].innerHTML;
                        console.log(document.querySelectorAll('#dropdownMenu2 .dropdown-item')[index].innerHTML);
                    })

                }
            });

    }
    vuldDeCombo1();
}
import Cleave from 'cleave.js';
import _ from '../node_modules/cleave.js/dist/addons/cleave-phone.be.js';

window.onload = () => {
  console.log(document.getElementsByClassName('test')[0]);

  
  new Cleave('.my-input', {
    date: true,
    dateMin: '2000-01-01',
    dateMax: '2099-12-31',
    datePattern: ['d', 'm', 'Y']
  });
  
  new Cleave('.input-01', {
    prefix: 'STUDENT-'
  });

  new Cleave('.test', {
    blocks: [2, 2, 2, 3, 2],
    delimiters: ['.', '.', '-', '.']
});

new Cleave('.age', {
  numeral: true,
  numeralPositiveOnly: true
});



new Cleave('.phone', {
  blocks: [3, 3, 2, 2, 2],
  delimiters: [' ', ' ', ' ', ' '],
  prefix: '+32'
});

  

}




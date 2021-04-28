import _ from 'lodash';

var Cleave = require('cleave.js');
require('cleave.js/dist/addons/cleave-phone.be');

new Cleave('.input-3', {
  date: true,
  datePattern: ['Y', 'm', 'd'],
});

console.log('test');
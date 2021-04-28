import _ from 'lodash';

let one = new Cleave('.input-01', {
  phone: true,
  phoneRegionCode: 'US',
  blocks: [6, 3, 3],
  prefix: '+32'
});

let two = new Cleave('.input-3', {
  date: true,
  datePattern: ['Y', 'm', 'd'],
  delimiter: '.'
});

console.log('test');
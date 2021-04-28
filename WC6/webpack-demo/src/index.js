import _ from 'lodash';

new Cleave('.input-01', {
  phone: true,
  phoneRegionCode: 'US',
  blocks: [6, 3, 3],
  prefix: '+32'
});

new Cleave('.input-3', {
  date: true,
  datePattern: ['Y', 'm', 'd'],
  delimiter: '.'
});

console.log('test');
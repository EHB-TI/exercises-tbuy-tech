import _ from 'lodash';

new Cleave('.form-control input-3', {
  date: true,
  datePattern: ['Y', 'm', 'd'],
  delimiter: '.'
});

new Cleave('.student-name', {
  blocks: [3, 3, 3, 2],
  delimiters: ['.', '.', '-']
});

console.log('test');
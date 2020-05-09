const user = require('./userFactory');

var alex = user('Alex Banks', 100);
var eve = user('Eve Porcello', 100, 'This and That');

eve.payDay(100);
console.log(alex.toString());
console.log(eve.toString());

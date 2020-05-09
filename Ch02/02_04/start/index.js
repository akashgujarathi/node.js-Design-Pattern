var Scout = require('./scout_prototype');

var alex = Scout.clone();
alex.name = 'Alex';
alex.addItemToList('slingshot');

var eve = Scout.clone();
eve.name = 'Eve';
eve.addItemToList('reading light');

console.log(`${alex.name}: ${alex.shoppingList}`);
console.log(`${eve.name}: ${eve.shoppingList}`);

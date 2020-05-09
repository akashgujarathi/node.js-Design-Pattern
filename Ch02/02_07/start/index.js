const User = require('./buildPattern');

// Employees
const sue = new User('Sue').makeEmployee().makeManager(40).build();
const bill = new User('Bill').makeEmployee().makePartTime().build();
const phil = new User('Phil').makeEmployee().build();

// Shoppers
const charles = new User('Charles')
  .money(500)
  .list(['jeans', 'sunglasses'])
  .build();
const tabbitha = new User('Tabbitha').money(1000).build();

console.log(sue.toString());
console.log(charles.toString());

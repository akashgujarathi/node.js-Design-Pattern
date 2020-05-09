var Shopper = require('./Shopper');
var Employee = require('./Employee');

const User = (name = '', money = 0, employee) => {
  if (employee) {
    return new Employee(name, money, employee);
  } else {
    return new Shopper(name, money);
  }
};

module.exports = User;

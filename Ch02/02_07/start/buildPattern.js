var Person = require('./Person');

class buildPerson {
  constructor(name) {
    this.name = name;
  }
  makeEmployee() {
    this.isEmployee = true;
    return this;
  }
  makeManager(hours = 40) {
    this.isManager = true;
    this.hours = hours;
    return this;
  }
  makePartTime(hours = 20) {
    this.hours = hours;
    return this;
  }
  money(money = 0) {
    this.money = money;
    return this;
  }
  list(list = []) {
    this.shoppingList = list;
    return this;
  }

  build() {
    return new Person(this);
  }
}

module.exports = buildPerson;

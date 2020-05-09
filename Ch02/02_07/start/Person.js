class Person {
  constructor(Build) {
    this.name = Build.name;
    this.isEmployee = Build.isEmployee;
    this.isManager = Build.isManager;
    this.hours = Build.hours;
    this.money = Build.money;
    this.shoppingList = Build.shoppingList;
  }

  toString() {
    return JSON.stringify(this);
  }
}

module.exports = Person;

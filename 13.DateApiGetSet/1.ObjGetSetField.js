// Write an object with getter/setter field name.

const obj = {
  _name: [],
  set name(value) {
    let result = [];
    let valueToArr = value.split(", ");

    for (let i = 0; i < valueToArr.length; i++) {
      const elem = valueToArr[i];
      result.push([elem, elem.length]);
    }
    obj._name = result;
  },
  get name() {
    return obj._name;
  },
};
console.log(obj.name);
obj.name = "Vrezh, Artavazd";
console.log(obj.name); // [['Vrezh', 7], ['Artavazd', 10]]

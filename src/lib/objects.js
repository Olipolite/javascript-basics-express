const createPerson = (name, age) => {
  const Person = {
    name,
    age,
  };
  return Person;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object[property]) {
    return true;
  }
  return false;
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map(element => element.age);
};

const findByName = (name, people) => {
  return people.find(element => element.name === name);
};

const findHondas = cars => {
  return cars.filter(element => element.manufacturer === 'Honda');
};

const averageAge = people => {
  const age = people.map(element => element.age);
  const sum = age.reduce((total, number) => {
    return total + number;
  });

  return sum / people.length;
};

const createTalkingPerson = (name, age) => {
  const person = {
    name,
    age,
    introduce(personName) {
      return `Hi ${personName}, my name is ${name} and I am ${age}!`;
    },
  };

  return person;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson,
};

const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.join(',');
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  return array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  if (!index) {
    return array.shift();
  }
  return array.splice(index, index - 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  return strings.map(words => words.toUpperCase());
};

const reverseWordsInArray = strings => {
  strings.map((element, index) => {
    element = element.split('');
    element = element.reverse();
    element = element.join('');
    strings[index] = element;
  });

  return strings;
};

function onlyEven(numbers) {
  const evenNumbers = numbers.filter(element => {
    if (element % 2 === 0) {
      return element;
    }
  });
  return evenNumbers;
}

const removeNthElement2 = (index, array) => {
  const items = array.filter(element => {
    if (array[index] !== element) {
      return element;
    }
  });
  return items;
};

const elementsStartingWithAVowel = strings => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const newArray = strings.filter(element => {
    for (let i = 0; i < vowels.length; i++) {
      if (element.charAt(0) == vowels[i] || element.charAt(0) == vowels[i].toUpperCase()) {
        return element;
      }
    }
  });

  return newArray;
};

const removeSpaces = string => {
  const noSpace = string.replaceAll(' ', '');

  return noSpace;
};

const sumNumbers = numbers => {
  const sum = numbers.reduce((acc, number) => {
    return acc + number;
  });
  return sum;
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};

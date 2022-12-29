function negate(a) {
  return !a;
}

function both(a, b) {
  return a && b;
}

function either(a, b) {
  return a || b;
}

function none(a, b) {
  return !(a || b);
}

function one(a, b) {
  return (a && !b) || (!a && b);
}

function truthiness(a) {
  return !!a;
}

function isEqual(a, b) {
  return a === b;
}

function isGreaterThan(a, b) {
  if (a > b) {
    return true;
  }
  return false;
}

function isLessThanOrEqualTo(a, b) {
  if (a <= b) {
    return true;
  }
  return false;
}

function isOdd(a) {
  if (a % 2 === 1) {
    return true;
  }
  return false;
}

function isEven(a) {
  if (a % 2 == 0) {
    return true;
  }
  return false;
}

function isSquare(a) {
  /* let root = Math.sqrt(a); 
  if (Number.isInteger(root)){
    return true;
  }
  return false; */

  if (Number.isInteger(Math.sqrt(a))) {
    return true;
  }
  return false;
}

function startsWith(char, string) {
  if (char == string.charAt(0)) {
    return true;
  }
  return false;
}

function containsVowels(string) {
  const storbokstav = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < string.length; i++) {
    if (storbokstav.includes(string[i].toLowerCase())) {
      return true;
    }
  }
  return false;
}

function isLowerCase(string) {
  if (string == string.toLowerCase()) {
    return true;
  }
  return false;
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase,
};

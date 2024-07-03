const array = ['õun', 'banaan', 'apelsin', 'mandarin', 'pirn'];

function getFirstElement (array) {
  return array[0];
}

function getLastElement (array) {
  return array[array.length - 1]
}

function getElementByIndex (array, index) {
  return array[index];
}

console.log(getFirstElement(array));
console.log(getLastElement(array));
console.log(getElementByIndex(array, 3));

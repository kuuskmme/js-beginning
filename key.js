const location = {
  city: 'Tallinn',
  country: 'Estonia',
}

function getValueFromKey (object, key) {
  return object[key];
}

function setValueForKey (object, keyValue) {
  const newObj = {...object, ...keyValue}
  return newObj
}

console.log(getValueFromKey(location, 'city'))
console.log(getValueFromKey(location, 'continent'))
console.log(setValueForKey(location, 'airports', ['TLL']));
console.log(setValueForKey(location, 'highestElevation', 64));
const string = 'sixten'
const arrayOfString = ['si', 'xt', 'en']

function splitByDelimiter (string, delimiter) {
  return string.split(delimiter);
}

function joinWithDelimiter (arrayOfString, joinString) {
  return arrayOfString.join(joinString)
}

console.log(splitByDelimiter(string, ''));
console.log(joinWithDelimiter(arrayOfString, ''))
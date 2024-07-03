const toUpperCase = 'sixten'
const toLowerCase = "SIXTEN"

function makeLouder (string) {
  let upperCaseString = ""; // define empty container for that will be used to store modified string

// iterate over string to get charcaters
  for (let i = 0; i < string.length; i++) {
    let letter = string.charAt(i)
  
// if character is in lowercase turn to uppercase, otherwise use same/excisting characters
  if (letter >= 'a' && letter <= 'z') {
    let convertedChars = String.fromCharCode(letter.charCodeAt(0) - 32);
    upperCaseString += convertedChars // return string with modified characters
    } else {
      upperCaseString += letter // return same string
    } 
  }
  return upperCaseString;  // return result to end function
}

function makeQuieter (string) {
  let lowerCaseString = ""; // define empty container for that will be used to store modified string

  // iterate over string to get charcaters
  for (let i = 0; i < string.length; i++) {
    let letter = string.charAt(i)
  
// if character is in lowercase turn to uppercase, otherwise use same/excisting characters
  if (letter >= 'A' && letter <= 'Z') {
    let convertedChars = String.fromCharCode(letter.charCodeAt(0) + 32);
    lowerCaseString += convertedChars  // return string with modified characters
    } else {
      lowerCaseString += letter // return same string
    }  
  }
  return lowerCaseString; // return result to end function
}  

console.log(makeLouder(toUpperCase));
console.log(makeQuieter(toLowerCase));
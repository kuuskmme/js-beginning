const trial = [1, 2, [3, 'cat', 4, [5, 6]]]
const trialTwo = 'sixten'
const trialThree = 12
//for console testing

function sumNestedArray (nestedArray) {
  if (!Array.isArray(nestedArray)) {
    throw new TypeError('Input must be an array')
  }

  const flattenArray = nestedArray.flat(Infinity)
  //flatten the array

  const numbersOnly = flattenArray.filter(element => typeof element === 'number')
  //if elements are numbers then add them up

  const sumOfNestedArray = numbersOnly.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  return sumOfNestedArray
  //return result
}

console.log(sumNestedArray(trial))
//for console testing
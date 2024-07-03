const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

function sliceFunc (arr, start, end) {
  // find indexOf start
  const startIndex = arr.indexOf(start)

  //find indexOfLast end
  const endIndex = arr.lastIndexOf(end)

  // slice()
  const result = arr.slice(startIndex, endIndex + 1)
  return result
}

console.log(sliceFunc(animals, 'ant', 'duck'));
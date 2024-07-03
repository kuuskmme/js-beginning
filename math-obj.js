const mathObj = {
  abs: function (anyNumber) {
    return Math.abs(anyNumber)
  },
  isEven: function (anyNumber) {
    return anyNumber % 2 === 0
  },
  isOdd: function (anyNumber) {
    return !this.isEven(anyNumber)
  },
  isStrictlyPositive: function (anyNumber) {
    return anyNumber > 0
  },
  min: function (anyNumber1, anyNumber2){
    return Math.min(anyNumber1, anyNumber2)
  },
  max: function (anyNumber1, anyNumber2) {
    return Math.max(anyNumber1, anyNumber2)
  },
}
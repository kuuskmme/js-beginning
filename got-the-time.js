function printPrettyDate (date) {
  return "Today is " + date.getDate(date) + date.getMonth(date) + date.getYear(date) + ", and the time is " + date.toLocaleTimeString(date)
}

console.log(printPrettyDate(new Date("1997-04-02T20:52:20.250Z")))
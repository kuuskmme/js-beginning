/*function printPrettyDate (date) {
  return "Today is " + date.getDate(date) + date.getMonth(date) + date.getYear(date) + ", and the time is " + date.toLocaleTimeString(date)
}

console.log(printPrettyDate(new Date("1997-04-02T20:52:20.250Z")))*/ // DIDNT WORK

function printPrettyDate(date) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
  ];

  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12; // the hour '0' should be '12'

  const formattedDate = `Today is ${day}, ${month} ${dayOfMonth}, ${year}, and the time is ${hours}:${minutes}:${seconds} ${ampm}`;
  console.log(formattedDate);
}

// Example usage:
const date = new Date();
printPrettyDate(date);

function classifyDate (date) {
  const now = new Date();
  const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
  const oneYearFromNow = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());

  if (date < now) {
    if (date < oneYearAgo) {
      return "ancient";
    } 
    return "past";
  } else if (date > now) {
    if (date > oneYearFromNow) {
      return "distant future"
    }
    return "future"
  } else  {
    return "past"
  }
  }

  console.log(classifyDate(new Date(2023, 7, 15)))
//JS challenger

// // JS Date

// Check if two dates fall on the exact same day:
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise
function myFunction(t1, t2) {
    console.log(t1.getTime() === t2.getTime());
  }
  myFunction(new Date('2000/01/01'), new Date('2000/01/01'))
  myFunction(new Date('2000/01/01'), new Date('2000/01/02'))
  myFunction(new Date('2001/01/01'), new Date('2000/01/01'))

// Check if two dates are equal:
// Sounds easy, but you need to know the trick
// Write a function that takes two date instances as argument
// It should return true if the dates are equal
// It should return false otherwise

function myFunction(t1, t2) {
    console.log(t1.getTime(), t2.getTime());
  }
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00"));
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 09:00:00"));
  
  // Check if one date is earlier than another:
  // Write a function that takes as argument an object with the properties a and b, each containing a date instance
  // It should return true if date a is earlier than date b
  // It should return false otherwise
  
  function myFunction({ a, b }) {
    console.log(a < b);
  }
  myFunction({a: new Date("2000/01/01 08:00:00"), b: new Date("2000/01/01 08:45:00")});
  myFunction({a: new Date("2000/01/01 08:45:00"), b: new Date("2000/01/01 08:00:00")});
  
  // Check if two dates are within 1 hour from each other:
  // Write a function that takes two date instances as argument
  // It should return true if the difference between the dates is less than or equal to 1 hour
  // It should return false otherwise.
  // Author's solution:
  // function myFunction( a, b ) {
  //   return Math.abs( a - b) / 1000 / 60 <= 60
  // }
  
  function myFunction(a, b) {
    let diff = Math.abs(a.getTime() - b.getTime());
    console.log(diff <= 3600000);
  }
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00"));
  myFunction(new Date("2000/01/01 09:00:00"), new Date("2000/01/01 08:45:00"));
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 09:45:00"));
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 09:00:00"));
  
  // Return the number of days between two dates:
  // Write a function that takes two date instances as argument
  // It should return the number of days that lies between those dates
  
  function myFunction(a, b) {
    console.log(Math.abs(a - b) / 1000 / 60 / 60 / 24);
  }
  myFunction(new Date("2020-06-11"), new Date("2020-06-01"));
  myFunction(new Date("2000-01-01"), new Date("2020-06-01"));
  
  // Calculate difference between two dates in hours, minutes, and seconds:
  // This is a more difficult challenge
  // Write a function that takes two date instances as arguments
  // It should return an object with the properties 'hrs', 'min', and 'sec'
  // The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds
  
  function myFunction(a, b) {
      let hrs = Math.abs(a.getHours() - b.getHours());
      let min = Math.abs(a.getMinutes() - b.getMinutes());
      let sec = Math.abs(a.getSeconds() - b.getSeconds());
      console.log({hrs, min, sec})
  }
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:10"));
  myFunction(new Date("2000/01/01 09:50:23"), new Date("2000/01/01 08:00:00"));
  myFunction(new Date("2000/01/01 11:04:12"), new Date("2000/01/01 08:00:00"));
  
  
  
  // Add n days to an existing date:
  // Write a function that takes as argument an object with the properties date and daysToAdd, containing a Javascript date and a number
  // It should add daysToAdd days to the date and return the number of milliseconds since January 1, 1970, 00:00:00 UTC
  //Author's solution:
  // function myFunction({ date, daysToAdd }) {
  //   const currentDays = date.getDate();
  //   return date.setDate(currentDays + daysToAdd)
  // }
  
  function myFunction({date, daysToAdd}) {
    let dayInMiliseconds = 1000 * 60 * 60 * 24;
    console.log(date.getTime() + dayInMiliseconds * daysToAdd);
  }
  myFunction({ date: new Date(Date.UTC(2000,01,01)), daysToAdd: 31 })
  myFunction({ date: new Date(Date.UTC(2000,01,01)), daysToAdd: 10 })
  myFunction({ date: new Date(Date.UTC(2000,02,28,)), daysToAdd: 2 })
  
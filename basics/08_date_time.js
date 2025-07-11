let myDate = new Date();// Create a new Date object with the current date and time
console.log(myDate.toString ()); // Current date and time
console.log(myDate.getFullYear()); // Get current year
console.log(myDate.getMonth()); // Get current month (0-11)
console.log(myDate.getDate()); // Get current date (1-31)
console.log(myDate.getHours()); // Get current hour (0-23)
console.log(myDate.toDateString()); // Get date in string format
console.log(myDate.toTimeString()); // Get time in string format


time
console.log(myDate.getTime()); // Get time in milliseconds since January 1, 1970
console.log(myDate.getDay()); // Get day of the week (0-6, where 0 is Sunday)
console.log(myDate.getMinutes()); // Get current minutes (0-59)
console.log(myDate.getSeconds()); // Get current seconds (0-59)
console.log(myDate.getMilliseconds()); // Get current milliseconds (0-999)
console.log(myDate.getUTCFullYear()); // Get current year in UTC
console.log(myDate.getUTCHours()); // Get current hour in UTC
console.log(myDate.getUTCMonth()); // Get current month in UTC (0-11)
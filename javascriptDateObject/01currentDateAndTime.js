// Getting Current Date: 

const currentDate = new Date();

console.log(`Current date: ${currentDate}`)

// Current date: Thu Dec 17 2020 11:34:04 GMT+0100
// (Central European Standard Time)

/*If you don’t pass anything to the Date constructor,;
 the date object returned contains the current date and time. */


 const currentDayOfMonth = currentDate.getDate();
 const currentMonth = currentDate.getMonth();
 const currentyear = currentDate.getFullYear();

 console.log(`Checking currenty month value: ${currentMonth}`);

  // Note: The “January is 0” pitfall is common but not universal.
 //  It’s worth double-checking the documentation of any language 
 // (or configuration format: e.g., cron is notably 1-based) before 
 // you start using it.

 const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentyear;

 console.log(`Current Day, Month and Year String: ${dateString}`);



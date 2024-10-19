// Date and time 

// How to create date 
let today = new Date()
console.log(today)

/*getTime(): number
Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.*/
console.log(today.getTime())

/*getFullYear(): number
Gets the year, using local time.*/
console.log(today.getFullYear())

/*getDay(): number
Gets the day of the week, using local time.*/
console.log(today.getDay())

console.log(today.getMonth()); //Gets the month, using local time.

/*toDateString(): string
Returns a date as a string value.*/
console.log(today.toDateString()); 

/*(method) Date.toTimeString(): string
Returns a GMT time as a string value.*/
console.log(today.toTimeString())

/*(method) Date.toTimeString(): string
Returns a local  time as a string value.*/
console.log(today.toLocaleTimeString("en-IN")) //but in order to get our area specific time we have to update time zone 

console.log(today.toLocaleTimeString("en-IN" , {timeZone : "Asia/Kolkata"})) // like this 




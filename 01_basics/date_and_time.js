let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 2, 13)
// console.log(myCreatedDate);
// console.log(myCreatedDate.toString());

// let myCreatedDate2 = new Date(2025,5,11,10,2)
// console.log(myCreatedDate2);
// console.log(myCreatedDate2.toLocaleString());

// let myCreatedDate3 = new Date("2025-06-23")      //  yyyy/dd/mm
// let myCreatedDate3 = new Date("12-23-2025")         //  mm/dd/yyyy
// console.log(myCreatedDate3.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(Math.floor(myTimeStamp)/1000);

// let myDate2 = new Date()
// console.log(myDate2);
// console.log(myDate2.getMonth() + 1);    // count month or day from 0 bcz of array index basess
// console.log(myDate2.getDay() + 1);      // count days from Sunday

let myDate3 = new Date()
let weekend  = myDate3.toLocaleString('default', {
                weekday : "long",
                timeZone: 'America/New_York',
                calendar: 'gregory' // Default calendar system  [ Specifically, the calendar option isn't valid in the toLocaleString options, ]
            })
console.log(weekend);


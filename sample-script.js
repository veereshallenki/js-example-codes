const c1= new Date(); 
console.log("to date is " + c1); 

//array declaration days
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d1 = new Date();
let day = days[d1.getDay()]
//based on the days finding the current day
console.log("Today is  " + day  );
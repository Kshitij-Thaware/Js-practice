let d = new Date()
// console.log(d.toString());
// console.log(d.toDateString());
// console.log(d.toLocaleString('IN-EN'));
// console.log(typeof d);

let myCreatedDate = new Date(2023, 0, 23,  21, 4, 45)
console.log(myCreatedDate.toLocaleString());

// Month's start from 0  in js

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday:"long",
    Date: Date(),
})

console.log(newDate.weekday);
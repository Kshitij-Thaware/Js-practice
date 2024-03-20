// // for (let index = 0; index <= 10; index++) {
// //     const element = index;
// //     console.log(element);
    
// // }



// // Loops on array


// // for of

// const arr = [1, 2, 3, 5, 6, 7, 8]

// for (const num of arr) {
//     // console.log(num);
// }

// // Maps

// const map = new Map()
// map.set('In', "Indisa")
// map.set('CH', "China")
// map.set('NZ', "New Zealand")
// map.set('In', "Indisa")
// // console.log(map)

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }


// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'GTA'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }


// ForIN
const muObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'ruby',
    html: 'HTML by vs'
 }

// for (const key in muObject) {
//     console.log(`${key} filetype is for ${muObject[key]}`);
// }

const prog = ["js", "rb", "py", "java"]

for (const key in prog) {
    console.log(prog[key]);
}
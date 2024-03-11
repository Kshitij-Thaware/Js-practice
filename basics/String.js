const name = "hitesh"
const repoCount = 50
//console.log(name + repoCount+ " Hello World");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('kshitijkt')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('t'));

const newStr = gameName.substring(0,4)
console.log(newStr);

const anotherStr = gameName.slice(-7, 4)
console.log(anotherStr);

const onestr = "    hitesh    "
console.log(onestr.trim());

const ibg = "https://github.com/Kshitij-Thaware/Js-practice"
console.log(ibg.replace('-', '.'));
console.log(ibg.includes('Kshitij'));

console.log(ibg.split('/'));
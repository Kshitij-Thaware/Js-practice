// const coding = ["js", "ruby", "java", "C#", "XML", "cpp"]


// const values = coding.forEach( (item) => {
//     return item
// })


// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnums = myNums.filter((num) => {
//     return num > 4
// })

const newnums =  []

myNums.forEach((num) => {
    if(num > 4){
        newnums.push(num)
    }
})

console.log(newnums);
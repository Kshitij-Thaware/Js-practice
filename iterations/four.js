const myNums = [1, 2, 3, 4, 5, 6, 7]

// const myTotal = myNums.reduce((acc, currval) => {
//     console.log(`accumulator: ${acc} and current value:${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

console.log(`The total: ${myTotal}`);


const shoppingcart = [
    {
        itemname: "js course",
        price: 999
    },
    {
        itemname: "data science course",
        price: 12999
    },
    {
        itemname: "java course",
        price: 5999
    },
    {
        itemname: "UI UX course",
        price: 399
    }
]

const total = shoppingcart.reduce((acc, item) => item.price + acc, 0)

console.log(total);
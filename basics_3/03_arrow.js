const user = {
    username: "kshitij",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
    
}

// user.welcomeMessage()
// user.username = "mitesh"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "Vrushabh"
//     console.log(this.username);
// }

// chai()

// const chai = () => {
//     let username = "hitesh"
//     console.log(this);
// }
// chai()

// const addTwo = (num1, num2) => {
// return num1 + num2
// }

// console.log(addTwo(4,7));

// const addThree = (num1, num2, num3) => ( num1 + num2 + num3)

// console.log(addThree(7,5,9));

const addThree = (num1, num2) => ({ username: "hitesh"})

console.log(addThree(3,5));

const myArray = [2,5,8,7,9,6]

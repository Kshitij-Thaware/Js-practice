//Singleton Object
const tinduser = new Object()

// Non- Singleton User
const tinderuser = {}

tinderuser.Id = 101
tinderuser.name = "Kshitij Thaware"
tinderuser.email = "kshitij@thaware.com"

// console.log(tinderuser);

const regularuser = {
    email:"sam@gma.com",
    fullname: {
        userfullname:{
            firstname: "Kshitij",
            lastname: "Thaware"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "a"}

// const obj3 ={ obj1, obj2 }

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// 

const users = [
    {
        id: 1,
        email: "bhushan@shahare.com"
    },
    {
        id: 2,
        email: "vrushabh@patil.com"
    },
    {
        id: 3,
        email: "smit@gedam.com"
    }
]

// console.log(users[0].email);
// console.log(tinderuser);

// // // console.log(Object.keys(tinderuser));
// // console.log(Object.values(tinderuser));

// console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('email'))

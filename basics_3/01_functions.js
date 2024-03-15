// function two(n1, n2){
//     console.log(n1 + n2);
// }

function two(n1, n2){
    // let result = (n1 + n2)
    // return result
    return n1 + n2
}

const result = two(5, 5)

// console.log(result);

function loginUserMessage(username = "user"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("kshitijthaware2004"))


function calculateCartPrice(...num1) {

    return num1 
}

// console.log(calculateCartPrice(400, 500, 600));

const user = {
    username: "kshitij",
    Id: 300
}

function handleobjecct(anyobject){
    console.log(`Username is ${anyobject.username} and Id is ${anyobject.Id}`);
}

// handleobjecct(user);
// handleobjecct({
//     username: "Nihal",
//     Id: 245
// })

const Myarray = [200, 400, 500,  300, 4999]

function returnSecondValue(getArray){
return getArray[2]
}

// console.log(returnSecondValue(Myarray));
console.log(returnSecondValue([200,400,855,479,258]));
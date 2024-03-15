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

console.log(calculateCartPrice(400, 500, 600));



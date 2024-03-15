let a =10
function func() {
    let a= 13
    let b= 20
    console.log(a);
    console.log(b);
    console.log(a+b);    
}

// func()
// console.log(a);


function one(){
    const username = "kshitij"

    function two() {
        const website = "github"
        // console.log(username);
    }
    // console.log(website);

    two()
}
one()

if(true){
    const username = "kshitij"
    if(username === "kshitij"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ************************************ something ************************** 

console.log(addone(5));

function addone(num){
    return num + 1
}


const addTwo = function(num){
    return num + 2
}
console.log(addTwo(6));


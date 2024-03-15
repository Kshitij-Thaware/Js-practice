//Immediately Invoked Function Expression


// (function chai(){
    // named IIfe
//     console.log(`DB CONNECTED`);
// })();
// // chai()

((name) => {
    console.log(`DB CONNECTED TO ${name}`);
})('hitesh')
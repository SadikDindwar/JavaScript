// High Order Functions (HOF) and Callbacks.
/*
 High order functions are the type of functions which take callback functions as parametres or the functions which return another function.
 example: map(),reduce(), setTimeout(callback, time_in_miliseconds)
 */
//Example for high order functions
//setTimeout
setTimeout(()=>{
    console.log("hi");
}, 5000)
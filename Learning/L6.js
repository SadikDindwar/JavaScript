// Arrays.

const myArray = [];
myArray[0]=10;
myArray[1]="sadik";
myArray[2]= true;

console.log(myArray);

myArray.push("added");
console.log(myArray);


// delete keyword
// The delete keyword in JavaScript is used to remove properties from objects, not variables or functions.
//example

delete myArray[0];

console.log(myArray);


let v1 =90;
// delete v1; // not allowed for vaiables 


//array.splice(startIndex, deleteCount, item1, item2, ...)
/*
startIndex	             The index where to start changing the array
deleteCount	             How many elements to remove from that index
item1, item2, ...	     (Optional) New elements to add at that position
*/

const myArray2 = [1,2,3,4,5,6,7,8,9,10];
console.log(myArray2);

myArray2.splice(1, 3);
console.log(myArray2);

myArray2.splice(0) // if we donot provide delete count then it will delete all from starting index.
console.log(myArray2);

const myArray3 =[1,2,3,4,5];
myArray3.splice(1 , 0, 67); // at index 1 donot delete anything and add 67 at index 1 and shift the remaining array.

console.log(myArray3);


//slice() : slice() mthod is used to return sub-Array.
//example : slice(startingIndex, endingIndex); 

const myArray4 = [1,2,3,4,5,6,7,8,9,10];
const newArray1= myArray4.slice(0, 4);
console.log(newArray1);


//reverse() : reverse the existing array.
myArray4.reverse();
console.log(myArray4)

//join() : will join the array elements and return it as a String.
const v4 = myArray4.join();
console.log(v4);
console.log(typeof v4);

//concat() : helps in concatinate two Arrays.
const array1 =["1" , "2", "3"];
const array2 = ["4", "5" , "6"];

const newArray2 = array1.concat(array2);
console.log(newArray2);


const array3 =["7", "8" , "9"];

const newArray3 = array1.concat(array2).concat(array3);
console.log(newArray3);

// using spread operation to concatinate multiple arrays

const v5 = [...array1, ...array2, ...array3];
console.log(typeof v5 , v5);



//multi-dimentional array or nested arrays

const v6 = ["mango" , "apple" , "banana"];
const v7 = [1, 2, 3];
const v8 = [v6 , v7];
console.log(v8[0]); // return all v6 array elements
console.log(v8[1]); // return all v7 array elements

console.log(v8[0][1]); // return v6 arrays 1st index element that is apple.

console.log(v8[1][2]); // return v7 arrays 2nd index element that is 3.

















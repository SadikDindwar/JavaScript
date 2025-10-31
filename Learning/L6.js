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




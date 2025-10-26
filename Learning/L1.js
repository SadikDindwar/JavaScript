//1. Data Types

/*
In JavaScript we have 8 types of data that is 7 primitive data types and 1 non-primitive data type object. 
Primitive data types
1.String
2.Number
3.Boolean
4.BigInt
5.Symbol
6.Undefined
7.Null

Non-Primitive data type 
8.Object
*/

//String
//String can be declared in ' ' or in " "
let d1 = "Hello";
let d2 = 'hi';

console.log(typeof d1); // typeof is used to know the data type
console.log(typeof d2);

//Undefined 
//Undefined is the type of primitive data type which means thata variable exists but has not been assigned any value yet.
let d3;

console.log(typeof d3); // op : undefind

console.log(typeof 79)


//String mehods

let v1 = "javascript programming"

//charAt() used to access character at perticular index
console.log(v1.charAt(2))

//indexOf() used to check index of particular character in a given string
console.log(v1.indexOf('s'))
console.log(v1.indexOf('z')) // if character is not present in a given string then it will return -1


//length this is the property which return no of character in a given String
console.log(v1.length)

//lastIndexOf() is used to get the last index of provided character or string in a given string
console.log(v1.lastIndexOf("i")) // 19
console.log(v1.lastIndexOf("ipt")) // 7 coz ipt starts from 7th index

//slice() this method is used to return substring of the given string by using starting and ending index 
console.log(v1.slice(0, 1)) // here ending index is exclusive or endind index-1
console.log(v1.slice(1, 3))
console.log(v1.slice(11)) // if we donot provide the ending index it will return all the character from starting endex

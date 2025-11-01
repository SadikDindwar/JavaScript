// Objects in JavaScript

/*
Object is the collection of key value pair where key(also know as properties) is String or symbols and value can be anny data type
like number,String,Boolean,Array, or even another Object.

*/


//Example Object

const employee={
    id: 10,
    name:"martin",
    age: 90,
    skills: ()=>{
        console.log("SkillA , SkillB, SkillC, SkillD");
    }
}
console.log(employee);

//Accessing Object Properties using "." dot notations

console.log(employee.id);
console.log(employee.name);
console.log(employee.age);
employee.skills();

//Accessing Object Properties using "[]" bracket  notations

console.log(employee["id"]);
console.log(employee["name"]);
console.log(employee["age"]);

/*
Use bracket notation when the property name:

has spaces ("first name")
starts with a number ("1key")
or is stored in a variable.
*/

//Adding new properties into Objects

employee.salary = 60000000;
console.log(employee);

//Deleting properties from Object

delete employee.age;
console.log(employee);


//Example Object 2

const client ={
    id:12,
    name:"josh",
    salary:80888797,
    language:()=>{
        return "speaks English";
    },
    skills:()=>{
        return "This person have many skills.";
    },
    height:function (){
        return this.name+" is 7 foot tall.";
    }
}
console.log(client);
console.log(client.language());

delete client.language;
console.log(client);

console.log(client.height());

/*
🔹 Difference between Anonymous Function and Arrow Function

Anonymous Function:
1. Introduced in ES5.
2. Anonymous functions don’t have a name but use the 'function' keyword.
   They can be used as callbacks or assigned to variables.
3. Anonymous functions have their own 'this' context 
   (the value of 'this' depends on how the function is called).

Arrow Function:
1. Introduced in ES6.
2. Arrow functions don’t have a name and don’t use the 'function' keyword.
   They are often used as short and clean callback functions.
3. Arrow functions do NOT have their own 'this'.
   Instead, they inherit 'this' from the surrounding (lexical) scope.
*/









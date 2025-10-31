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




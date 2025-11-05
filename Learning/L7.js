// Objects in JavaScript     //🧠 🔹 ⚙️ ❗

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




// Very Important Notes related to Objects and Functions.
/*
🧠 Objects:
🔹 objects are like containers which store related information in the form of key and value pairs.
⚙️ example:
const car ={
    brand: "bmw",
    wheels: 4,
    cost:98765
}

🔹prototype: every object in js has its prototype, prototype is a another object which has shared properties.
 assume prototype as a parent so every object(child) has a prototype(parent object) and all the properties from prototype is inherited to the child obkect.
⚙️ example:
sadik {
  name: "Sadik Dindwar"
}
   ⬆
   | (prototype link)
person {
  greet() { console.log("Hello, I'm " + this.name); }
}
   ⬆
   | (prototype link)
Object.prototype
   ⬆
   |
null

🔹 why prototype?
You are Person. You have your own wallet (your properties).
But if you don’t have a pen, you borrow it from your father (prototype).
If he doesn’t have it, he asks your grandfather (prototype’s prototype).
That’s called the prototype chain.

🔹how JS checks for properties ?
Does the object have the property?
If not, go to its prototype.
Keep going up until null.




🧠Object (with capital O).
🔹 Object(with capital O) is a builtin Constructer Function which is pressent globally and it helps in Creating Objects, copying objets , looking
   objects, getting Object keys and value.
   ⚙️ example 1:
   const car = Object(); // same as {}
   car.name = "Audi";
   console.log(car); // { name: 'Audi' }
   
   ⚙️ example 2:
    const animal ={
        kingdom:"animal",
    };

    const dog = Object.create(animal); // here dog object is created with animal object as its prototype.now dog has animal properties.
    dog.noOfLegs=2;  // we can also add extra props in dog
    
🔹 But Object is a Constructer function so how can a function call another funtion? ex : Object.create(animal).
    because in java script functions are also treated as a object and functions can also have its own properties and methods in it
    for example Object function has creat() method as property so it was able to call it.
    ⚙️ example 1:
    greet(){
    console.log("hi");
    }
    greet.name="martin"; // here we are adding props to greet method
    greet.check = function(){  // here we are adding methods to the greet method.
       console.log("checked");
    }
    
    greet(); // op: hi
    greet.check(); // op : checked.
    console.log(greet.name); // op : martin.

🔹another way of creating methods inside objects.
⚙️ example :
    const person = {
        greet() {   
            console.log("Hello, shorthand method!");    // we can also declare methods inside objects like this this is shortne method introduced in ES6.
                                                        // here greet is treated as a key and greet() is treated as a value.
        }
    };

 */





 // Object methods.
 
 // Object.create(proto) : used to create Object with a Prototype

//Object.setPrototypeOf(obj, prototype) : used to set prototype of given object
//example.

const obj2={
    name:"obj2"
}

const obj3={
    id: 90
}
Object.setPrototypeOf(obj3 , obj2); // here for obj3 the obj2 will be set as prototype.

//Object.getPrototypeOf(obj) : it give the prototype of the given object.
//example
console.log(Object.getPrototypeOf(obj3));


//Object.keys(obj) : it return keys in the form of array.
//Example
console.log(Object.keys(employee));

//Object.values(obj): it returns values of the object in the form of array.
//Example
console.log(Object.values(employee))

//Object.entries(obj) : returns array of key - value pairs.
//Example
console.log(Object.entries(employee));

//Object.freeze(obj) : It freezes the Object so that no additon , deletions or updation allowed.
// Example
Object.freeze(obj2);
let isTrue = Object.isFrozen(obj2);// checks weather the object is frozen or not.
console.log(isTrue);

//Object.seal(obj) : seal the object - properties cannot be added or deleted but can be changed.
//Example
Object.seal(obj3);
isTrue= Object.isSealed(obj3); // Check weather the object is Sealed or not.





 


// Example of the function which take an Object as a parameter.

function doStuff(vehicle){
    let brandName = vehicle.name;
    let speed = vehicle.speed;
    let color = vehicle.color;
    let millage = vehicle.getMillage();
     
    return "Name of brand : "+brandName +" speed : "+ speed +"Km/sec color : "+color+" milage : "+millage + ".";

}
const vehicle = {
    name: "bmw",
    speed: 100,
    color: "black",
    getMillage: function(){
        return this.speed/2;
    } 
};

const vehicleInfo1 = doStuff(vehicle);
const vehicleInfo2 = doStuff({
    name: "audi",
    speed: 150,
    color: "Deeep Black",
    getMillage: function(){
        return this.speed/2;
    }
});


console.log(vehicleInfo1);
console.log(vehicleInfo2);

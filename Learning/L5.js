// var, let, const
 
/*
1. var
--------------------------------------------------
-> 'var' is **function-scoped**, meaning if we declare it inside a function,
   it is accessible everywhere inside that function.

Example:
function myFunc() {
    if (true) {
        var v1 = 10;
    }
    console.log(v1); // ✅ v1 is still accessible outside the 'if' block
                     // because 'var' is function-scoped.
}

-> 'var' allows redeclaration of the same variable.

Example:
var v1 = 49;
var v1 = 90; // ✅ Allowed (redeclaration is permitted)
--------------------------------------------------

2. let and const
--------------------------------------------------
-> Both 'let' and 'const' are **block-scoped**, meaning they are only accessible
   inside the block `{}` in which they are declared.

Example:
{
    let v1 = 29;
    const v2 = 87;
    var v3 = 65;
}

console.log(v1); // ❌ Not accessible (block-scoped)
console.log(v2); // ❌ Not accessible (block-scoped)
console.log(v3); // ✅ Accessible ('var' ignores block scope)

-> Both 'let' and 'const' do NOT allow redeclaration of the same variable.

Example:
let v1 = 90;
const v2 = 87;

let v1 = 65;   // ❌ Not allowed (redeclare)
const v2 = 56; // ❌ Not allowed (redeclare)
--------------------------------------------------

Additional Note:
- 'let' allows reassignment, but 'const' does not.
*/



function doSomething(){
    if(true){
        let v1 =90;
        const v2 =89;
        var v3 =76;
    }
      // console.log(v1); // not accessable
      // console.log(v2); // not accessable
    console.log(v3)  // allowed
}

doSomething();


{
    let v1 =90;
    const v2 =676;
    var v3 =897987;
}

// console.log(v1);   // not allowed

// console.log(v2);  // not allowed

console.log(v3);     // allowed

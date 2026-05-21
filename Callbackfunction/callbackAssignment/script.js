console.log(a);
var a= 10;
console.log(a);

// Question -> 2 
let a = 10;
function test() {
let b = 20;

console.log(a+b);
}
test();

// Question ->3 
function functionA() {
    console.log("Function A  Start");

    functionB();

    console.log("Function A End");
}

function functionB() {
    console.log("Function B");
}

functionA();

// Question ->4 
let a = 10;
function test() {
    let a = 20;

    console.log("Inside Function:",a);
}
test();

console.log("Outside Function:",a);

// Question ->5 
function test() {
    console.log(this);
}
test();

// Question ->6

const student = {
    name:"Devendra",
    age:22,

    ShowDetalis: function(){
        console.log(this.name);
        console.log(this.age);
        
    }
};

student.ShowDetalis();

// Question ->7 
console.log(a);
var a = 10;

console.log(b);
let b = 20;

console.log(c);
const c = 30;

// Question ->8 
function functionA() {
    console.log("Inside FunctionA");

    functionB();

    console.log("Back to functionA");
}

function functionB() {
    console.log("Inside FunctionB");
    
}
console.log("Globle Executaion Start");

functionA();

console.log("Globle Execution End");


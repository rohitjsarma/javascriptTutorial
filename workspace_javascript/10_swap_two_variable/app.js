let a = prompt('enter the first number ');
let b = prompt('enter the second number ');

let temp;

//swapping logic
temp=a;
a=b;
b=temp;
console.log(`The value of a is ${a}`);
console.log(`The value of b is ${b}`);
//taking two variable to swap ==================================
a=b;
b=a;
console.log(`The value of a = ${a}`); //Output   a= 20
console.log(`The value of b = ${b}`); //Output   b=20

console.log('welcome to js ');
console.log("hello java script ")
console.info("I am  information ");
console.warn("I am a warning msg ");
console.error("I am an error msg");
console.log(true+true);
console.log(false-true);
console.log(10-'6'); //6 is string but still no error its a bug in js
console.log('6'-10);  //6 is string but still no error its a bug in js

let student={
    name:'rohit',
    age:25,
    course:'java script '
}
console.table(student);
//--------------------------------------
let test=()=>{
    document.write('Named Function ')
}
test();
//---------------------------------------
//its a closure example
let x= 10;
let add=()=>{
    document.write(x+x)
    console.log(x+x);
}
add();
//--------------------------------------
let str= 'ROHIT SHARMA ';
console.log(str.charAt(5));


document.write('welcome to java script example ')
/*alert('kindly login ');
prompt('hello java script');
confirm('are u sure ?');
open('google.com'); //to open a link
close();*/
history.back();
document.getElementById('test').innerHTML="<h1>Hello World</h1>"
document.getElementById('testone').innerText="text using java script"
console.log("10"+10+10);
window.document.body.style.cursor = "wait";
document.body.bgColor="pink"; //changing the background color of body

let num=[10,20,30];
let num2=[40,50 ,...num,60,70];
console.log(num2);


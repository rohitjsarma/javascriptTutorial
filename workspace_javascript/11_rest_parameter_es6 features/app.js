

let restParameter=(...arg)=>{
    let sum=0;
    for (let i of arg){
        sum+=i;
    }
    console.log(`sum is ${sum}`); //print on console
    document.write(`sum is ${sum}`); // print on browser page
}
restParameter(10,20,30);
//======================================================================

//template Literals example
let strOne='rohit sharma';
let strTwo='Utthunga Technology ';
console.log(`The string one is ${strOne}`);
console.log(`The string two is ${strTwo}`);
let str=`Both of the string is :${strOne} & ${strTwo}`;
console.log(str);
//=====================================================================

//de-structuring in es6

let name=['ROHIT','SHARMA'];
console.log(name);
let[fname,lastname]=name;
console.log(fname,lastname);
//===============================================================
// creating class in es6
//ES5
/*var var_name = new className{

}

console.log(var_name);*/

//ES6
x=10
class className {

}
console.log(x)

//generator function =========================================
function * genFunction()
{
    obj1=100;
    obj2=null;
    obj3=300;
}
//calling generator function
let myGen=genFunction();
console.log(myGen.next().value);
console.log(myGen.next().value);
console.log(myGen.next().value);

let show= (a,b=200)=>{
console.log(`The total is - ${a+b}`);
}
show(500)


//=================Call by value============================================
let original=10;
function updateOriginal(originalVal){
    originalVal +=10;
    console.log(originalVal);
}
updateOriginal(original);
console.log("ORIGINAL ==>" +original);
//===================Call by reference=======================================
let myObj={
    value:10
}
function updateValue(objRef){
    objRef.value=20;
}
updateValue(myObj);
console.log(myObj.value);
//=====================================================================
var foo = function (){
    var bar = function (x){
        return x+1;
    }
}

var test = foo(1);
test()
//===============================================================================

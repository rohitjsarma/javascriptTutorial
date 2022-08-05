var x = [10,20,30,40,50]
var largestNo=x[0];
for (i=1; i<=x.length; i++){
    if (x[i]>largestNo){
        largestNo=x[i]
    }
    console.log("largest no is " +largestNo)
}
//====================REMOVE DUPLICATE ARRAY =========
function getUnique(arr){

    let uniqueArr = [];

    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 3,8,8,8,99,99,199];

// calling the function
// passing array argument
getUnique(array);
//===================================================================
// program to remove duplicate value from an array

function getUnique(arr){

    // removing duplicate
    let uniqueArr = [...new Set(arr)];

    console.log(uniqueArr);
}

const arrayy = [1, 2, 3, 2, 3,9,9,9,88,99,88];

// calling the function
getUnique(arrayy);
//==========================================================================
function test(){
    console.log('rohit')
 }
//test();
console.log('Message no. 1: Sync');
setTimeout(function() {
    console.log('Message no. 2: setTimeout');
}, 0);
var promise = new Promise(function(resolve, reject) {
    resolve();
});
promise.then(function(resolve) {
    console.log('Message no. 3: 1st Promise');
})
    .then(function(resolve) {
        console.log('Message no. 4: 2nd Promise');
    });
console.log('Message no. 5: Sync')
//========================================================

console.log(3<2<1)      //true
console.log(1 < 2 < 3); //true
console.log(3 > 2 > 1); //false
//=================================================
var n =  [0,1,0,0,1,1,0,1,0,1,1,0];

var n = n[0];
for(var i=1;i=n.length;i++){
    for(var j=1;j=n.length;j++){
        if(n[i]+n[j]==10){
            temp=n[i]+n[j];
            console.log(n[i]+","+n[j]);
        }
    }

}
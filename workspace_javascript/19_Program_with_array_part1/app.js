//Javascript arrays sort method
let elements = ['Javascript', 'Css', 'Html'];
elements.sort(function (a, b) {
    return a.length - b.length;
});
console.log(elements);

//==============================================================
/*There are two ways you can find the largest number from a JavaScript array:
Using the forEach() array method
Using the reduce() array method*/
let arr = [4, 5, 6, 7, 8, 9, 10];

arr.forEach((element) => {
    console.log(element);
});
console.log("Array ....",arr)
//========finding the largest number of an array=========================
let arrr = [4, 5, 6, 7, 8, 9, 10,99];
temp = 0;
arrr.forEach((element) => {
    if (temp < element) {
        temp = element;
    }
});
console.log(`The largest number in the array: ${temp}`);
//===========finding the shortest number of an array ======================
const ar = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
const min = Math.min(...ar)
console.log(`The smallest number in the array: ${min}`);
//===========Sum of all the value in an array==============================
let marks = [50,10,20,30,40,50];
let total=0
console.log(marks);
for( let i=0;i<marks.length;i++){
    total+=marks[i]
}
console.log(`total marks obtain is ${total}`)
//==============Assending order of an array ===============================
let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
numbers.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});
console.log(numbers);
let animals = [
    'cat', 'dog', 'elephant', 'bee', 'ant'
];
animals.sort();
console.log(animals);
//=====================descending order======================
let animal = ['cat', 'dog', 'elephant', 'bee', 'ant'];

animal.sort((a, b) => {
    if (a > b)
        return -1;
    if (a < b)
        return 1;
    return 0;
});
console.log(animal);
//============================================================
let num=[0,1,2,3,4,5,6,7,8,9,345,56,7865,432,566]
function prime(num){
    for(let i= 2; i*i<=num;i++)
        if(num % i==0)
            return false;
    return num >1;
}
console.log("Prime no ==",num)
//=====================================================================
console.log(1)
let abc = null;
console.log(abc)
//===========================================================
let person = {
    name: 'John Doe',
    getName: function() {
        console.log(this.name);
    }
};

setTimeout(person.getName, 1000); //called once only
setInterval(person.getName, 1000) //called after every 1 second
console.log("The Name is ",person.name)
//======================================================
function msgDisplay(){
    alert('Welcome to set Timeout')
}



let i;
let result=0;
for (i=100;1>=1;i--){
    if (i%2==0){
        console.log(i);
    }
    else {
        console.log('thank you ')
        result +=i
        console.log("sum of even no is " +result);
    }
}
//====================================== factorial program
let factorial=()=>{
    let x = prompt("enter the num ");
    let y;

    for (y=1;y<=20;y++){
        result=x*y;
        console.log(result)
    }
}
//=========================================
let ename,eage;
    ename="ROHIT";
    eage=30;
let total=0 ;
let marks=[50,60,70,80,90]
console.log(marks);
for (i=1;i<marks.length;i++){
    total +=marks[i]
}
let avg=total/marks.length
console.log(avg);

//======================================large no of an array
let number=[10,20,30,40,50,90,80,75,110];
let largeNo =number[0];
for (i=1;i<=number.length;i++){
    if ( number[i]>largeNo){
        largeNo=number[i]

    }
    console.log("largest no is " +largeNo);
}
//==============================================
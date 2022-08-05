let emp =[
    {
        name:"Rohit",
        age:30,
        city:"NEW DELHI"

    },
    {
        name:"RANI",
        age:28,
        city:"CHANDIGARH"

    },
    {
        name:"RAZZ",
        age:33,
        city:"MUMBAI"

    },
    {
        name:"RIYA",
        age:36,
        city:"NEW YORK"

    }

        ]
x=emp
console.log(x)

console.log(emp)
document.querySelector('.box').style.backgroundColor = "red";
document.querySelector('#demo').style.backgroundColor = "yellow";
document.querySelector('#demo').innerHTML;
const demo = document.querySelector('.box');

let details =emp.map(function (e){
    return(
       '<div>'+e.name+e.age+e.city+'</div>'
    )
})
demo.innerHTML = details.join('\n')

let obj = JSON.stringify(emp);
console.log(obj);

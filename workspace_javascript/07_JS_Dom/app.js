function change (){
    document.getElementById('demo').innerHTML='hello js ';
    document.getElementById('p').style.color='red';

}

let length =()=>{
    let  x = document.getElementById('p1')

    let y = x.length;
    document.getElementById('p1').innerHTML=y


}
document.getElementsByClass = function (h2) {
    
}
let list=()=>{
    let x= document.getElementsByTagName('li')
   document.getElementById('h1').innerHTML=x[1].innerHTML

}
let count=()=>{
    let i=1

    for (i=1 ;i<=10;i++){
        console.log(i)
    }
}
let x = 1
let inc=()=>{
    document.getElementById('inc').value = x++;
    console.log(x);
}

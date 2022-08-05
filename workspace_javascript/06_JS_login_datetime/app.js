let login=()=>{
    let uname = document.getElementById('uname').value;
    let pswd = document.getElementById('pswd').value;
    if (uname=='rohit' && pswd == 123){
        window.alert('LOGIN SUCCESS');
    }
    else {
        window.alert('login failed')
    }

}
/*let time=()=>{
    setInterval(()=>{
        // console.log(new Date().toLocaleTimeString())
        document.write(new Date().toLocaleTimeString())
        let dt= new Date()
        document.getElementById("clock")
            .innerHTML = JSON.stringify(dt);
    },1000)


}*/
setInterval(showTime, 1000);
function showTime() {
    let time = new Date().toLocaleTimeString();

    let currentTime = time;

    document.getElementById("clock")
        .innerHTML = currentTime;
}
showTime();

//2nd way
/*setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":"
        + min + ":" + sec + am_pm;

    document.getElementById("clock")
        .innerHTML = currentTime;
}
showTime();*/
let time=()=>{

   let x=  document.getElementById('demo').innerHTML=new Date().toLocaleTimeString()
    setInterval(time,1000);
}











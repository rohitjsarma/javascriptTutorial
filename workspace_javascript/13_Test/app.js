(function() {
    var a = b = 5;
})();

console.log(b);

//==================================
let test=()=>{
    for (var i = 0; i < 3; i++) {
        setTimeout(function() {console.log(i) }, 5000 + i);
    }
}
test();
//==================================================================


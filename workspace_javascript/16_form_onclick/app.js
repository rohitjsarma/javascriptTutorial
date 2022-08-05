$('#show').on('click', function () {
    $('.center').show();
    $(this).hide();
})

$('#close').on('click', function () {
    $('.center').hide();
    $('#show').show();
})

var i=3;
function change(j){
    j=4;
}
change(i);
console.log(i)

// var myClass = function(n){
//     this.n=n;}

// myClass.X.square = function(){
//     return this.n*this.n;
// }
// var object = new myClass(4);
// alert(object.square());
//===============================================================
var pattern = (function(){
    var instance ;
    function createInstance(){
        var object = new Object("test")
        return object;
    }
    return{
        getInstance: function(){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    };
    }
)();
//=============================
MyClass = function(){
    this.a ='hello';
    this.b='word';
};
MyClass.prototype.a='rohit';
MyClass.prototype.c=12;
obj = new MyClass();
console.log(obj.a)
console.log(obj.b)
console.log(obj.c)
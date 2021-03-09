var a =1;
function outer(){
    function inner(){
        console.log(a);
        var a = 3;
    }
    inner()
    console.log(a);
}
outer();
console.log(a);

var a = 10;
console.log(a);

function print(){
    var b = 20;
    if(true) {
        var c = 30;
    }
    console.log(c);
}
    

print();
console.log(b);

//scope 가 함수 단위, 컬리 단위가 아님. 렉시컬 단위.
function sum(...args){
    var total = 0;
    for (var i = 0; i < args.length; i++){
        total += args[i];
    }
    console.log(args.indexOf(1));
    return total;
}
console.log(sum(1,2,3));

function sum2(a,b, ...others){
    var total = a + b;

    for (var i = 0; i < others.length; i++){
        total += others[i];
    }
    return total;
}

console.log(sum2(1,2));
console.log(sum2(1, 2, 3,4));

/**
 * 나머지 매개변수와 다르게, 아규먼츠 객체는 함수 몸통에서만 쓰인다.
 * 자주 쓰일 것 같지만.. 음.. 매개변수는 정확히 지정해 주는게 좋다고 생각함.
 */
function sum(){
    var total = 0;
    for (var i=0; i<arguments.length; i++){
        total += arguments[i];
    }
    console.log(arguments instanceof Array);
    return total;
}

var sumOf1to3 = sum(1, 2, 3);
console.log(sumOf1to3);

function testArgs(){
    var newArr = Array.prototype.slice.call(arguments); // 
    console.log(newArr);
    console.log(newArr.indexOf('b'));
    console.log(arguments.indexOf('b'));
}
testArg('a','b');
/**
 * 새로운 개념인것 같다. 항상 함수 호출할때 매개변수 방식으로만(매개변수 벡터) 받았는데,
 * 매개변수: 함수 선언시 작성되는 변수
 * 전달인자: 함수가 호출 될 떄 전달되는 값
 * 
 * -> 자바 스크립트는 전달인자의 개수와 매개변수의 개수가 달라도 에러를 발생하지 않는다.
 * 그래서 매개변수와 무관하게 함수 호출 시 더 많은 인자를 전달 할 수 있고, 
 * 
 * 매개 변수 외에 함수에서만 사용 가능한 특별한 객체를 제공한다.
 * -> arguments 객체
 * -> arguments 객체는 배열과 유사하게 인덱스로 접근이 가능
 * 하지만 length 속성 외에는 배열의 어떠한 속성과 메써드도 갖고 있지 않음.
 */
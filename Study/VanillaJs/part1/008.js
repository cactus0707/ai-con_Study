var x = 5 ;
var y = 'five';
var isTrue = true;
var empty = null;
var nothing // undefined;

sym = Symbol('me');
/**
 * 심볼은 ES6 이후에 생긴 프리미티브 타입. 다른 원시형과 다르게 유일하게 변경 불가능한 자료형이다. (값을 변경 하지 못한다?)
 * 참조형의 키로도 사용가능 하며, 31장에서 다룬다지만 나는 바로 31장 펴서 보는걸로한다. 킵 고잉.
 */

var item = {
    price : 5000,
    count : 10
}; // 객체  ?
/**
 * 타입 트리를 보면, 레퍼런스타입-오브젝트 -어레이
 *                                -펑션
 *                                -데이트
 *                                -레직스익스프레션
 *                                -맵,위크맵
 *                                -셋,위크셋
 *                  이렇게 있는데, 위에 적은 객체는 6개중에 무슨 타입인가?
 * 
 * 어찌 되었건 데이터 영역에서 다시 객체의 변수영역으로 메모리를 하나 더 추상화 해서 쓰므로, 레퍼런스 타입은 맞다.
 * 설명은 객체는 컬리 브라캣 {} 안에 key : value 쌍으로 이루어진 property 모음. 이라고 말하고 있음.
 * 반드시 키는 스트링 이여야 한다. 반드시. 이 키를 통해 접근하며, 다시 객체를 할당 하는 것도 가능(nested)
 */
//feedback 이유성대리님
/* 사실은 모두다 객체다... 오브젝트 타입 트리에 크게 얽메이지 마라. 프리미티브 타입과 레퍼런스의 차이가 더 중요하다!


var fruits = ['apple', 'orange', 'kiwi'];

var addFruit = function(fruit){
    fruits.push(fruit);
} // function
/**
 * 함수 모습도 조금 다르다, 리턴타입이 따로 없고 리턴을 변수에 할당하며.
 * .push부분은 어레이 메소드 인것 같다. 메소드 정리 한번 필요함.
 */

addFruit('watermelon');

console.log(fruits);

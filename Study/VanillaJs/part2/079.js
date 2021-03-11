/**
 * Array.from(배열로 변환될 값, 반환될 배열 내부 요소에 대한 callback 함수)
 * 쓸일이 많은 것 같은 어레이 내장객체 메소드
 */

const str = '12345678';

const distributeArr = Array.from(str); // 각 요소를 배열로 만듬.
console.log(distributeArr); // 배열이 됨.

const modifiedArr = Array.from(distributeArr, el=> el * 2); // 람다 펑션 처럼 각 요소에 콜백 함수를 대입하여 가공.
console.log(modifiedArr);
/**
 * 타입 변환 형 변환 .. 
 */
console.log("5" + 1);// 스트링 컨켓네잇
console.log("5" - 1);
console.log("5" * 2);
console.log("There is " + 5);
console.log("Five" * 2); // NaN

console.log('연산자를 활용한 자료형 변환');
var str = 5 + "1"; // 스트링으로 
console.log(str); // 51
console.log(typeof str); // string

var num = +str; //단항 양수 + 통해 문자형을 숫자형으로 변환 할 수 있음.
console.log(num);
console.log(typeof num);

console.log('-함수를 활요한 자료형 변환');
str = String(num); // 명시적
console.log(str);
console.log(typeof str);

num = Number(str); // 명시적
console.log(num);
console.log(typeof num);


/**
 * 자동 형변환(type coercion)의 경우 -> + 는 대입된 값에 따라 스트링 컨켓네잇 연산  or 숫자로 계산
 *                              -> 나머지 연산에 경우 모두 숫자로 생각하고 형변환 함
 * 
 *  -> 자동 형변환은 쓰지 않도록 함. 왜냐면 명시적으로 해야 확실히 누구든 알아 볼 수 있는 코드이기 때문.. 언어 불문인듯.
 * 
 * 
 */
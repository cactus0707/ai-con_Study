const CONST_USER = {name: "jay", age:30};
console.log(CONST_USER.name, CONST_USER.age);

CONST_USER.name = 'jay2';
CONST_USER.age = 31;

console.log(CONST_USER.name, CONST_USER.age);
CONST_USER = {name: 'bbo'}
/**
 * 객체가 가르키는 곳만 (객체 의 변수 영역) 변경 불가능이지, 그 객체의 변수영역에서 가르키는 데이터 영역은 변경가능
 * 
 * 42번 까지 복습 및 코자바 실행 컨텍스트
 */
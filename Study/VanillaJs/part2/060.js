const str = new String('자바스크립트');
const num = new Number(200);
const bool = new Boolean(true);
const date = new Date();
const map = new Map();
const set = new Set();

console.log(Math.PI);
console.log(Date.parse('2020-01-01'));
console.log(JSON.parse('{}'));

/**
 * 표준 내장 객체는 전역 스코프안에 있는 개체들을 참조하고 있어, 자바스크립트를 실행 할 때 어떤환경이라도(서버, 브라우저) 전역에서 사용 가능함
 * 표준 내장 객체는 객체임에도 불구하고, 함수처럼 호출 가능.
 *  -> 함수 처럼 매개변수를 받고, 함수 몸통에 내장 함수 객체의 행위를 특징화 하는 코드들이 구현되어 있음.
 *  -> 이러한 형태를 내장 함수 객체 라고함.
 *  -> new 지시자를 사용하여, 함수 형태로 호출하며 생성자(Construction)를 생성함. 
 *  -> 여기 내부는 속성과 메서드가 정의 되어 있음.
 * 
 *  --- 자바의 래퍼 클래스라고 이해하면 될 듯. 상위 오브젝트에서 상속받아 구현되어 있음. 타입세이프하고 로직에 에러가 없기 때문에 씀.
 * 프리미티브, 레퍼런스 타입이 아니라, 타입을 하나의 객체로 만들어 사용함.(ADT을 객체화 시킴)
 * 
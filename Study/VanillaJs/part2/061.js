const str = 'JavaScript';
const strObj = new String('Javascript');

const num = 200;
const numObj = new Number('200');

const bool = true;
const boolObj = new Boolean(true);

const func = function(){};
const arr = [10, 200, 4000];
const obj = {a1 : 'test'};

const empty = null;
const notCalled = undefined;

console.log(typeof str === 'string');
console.log(typeof strObj === 'object');
console.log(' ');
console.log(typeof num === 'number');
console.log(typeof numObj === 'object');
console.log(' ');
console.log(typeof bool ==='boolean');
console.log(typeof boolObj === 'object');
console.log(' ');
console.log(typeof func === 'function');
console.log(typeof arr === 'object');
console.log(typeof obj === 'object');
console.log(' ');
console.log(typeof empty === 'object');
console.log(typeof notCalled === 'undefined');
console.log(' ');
console.log(str instanceof String);
console.log(strObj instanceof String);
console.log(' ');
console.log(num instanceof Number);
console.log(numObj instanceof Number);
console.log(' ');
console.log(bool instanceof Boolean);
console.log(boolObj instanceof Boolean);
console.log(' ');
console.log(arr instanceof Array); // Object 를 상속 받은 참조형이기 때문에 T
console.log(obj instanceof Object); // Object 를 상속 받은 참조형이기 때문에 T
console.log(func instanceof Function); // Object 를 상속 받은 참조형이기 때문에 T
console.log(' ');
console.log(empty instanceof Object); // 널은 Object를 상속 받은 객체가 아니므로 false
console.log(notCalled instanceof undefined); // 언디파인드는 객체가 아니기 떄문에 에러를 발생.
 /**
  * typeof는 특정 원시 자료형을 확인하거나, 원시 자료형과 객체형을 구분하기 위해 활용.
  * instanceof는 어떤 종류의 객체인지 확인하는데 주로 사용..
  * 
  * null과 object 
  * null은  object를 상속받은 객체가 아님. typeof에서는 자바스크립트 언어에서 의도한대로 object를 반환했지만, 
  * instanceof에서는 false를 반환하여 객체가 아님을 확인할 수 있음...
  */
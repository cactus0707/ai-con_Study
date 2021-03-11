const num = 5;
const bool = true;
const str = "문자열 값";
const arr = [1, 2, 3];
const obj ={ a : 15};

console.log(num.toString());
console.log(bool.toString());
console.log(str.toString());
console.log(arr.toString());
console.log(obj.toString());// [object Object] 가반환됨.
/**
 * 자바스크립트의 모든 객체는 Object를 상속 받기 때문에, 모든 객체는 prototype을 통해
 * Object의 내장 메소드 toString()에 접근 가능하고, Override함.
 * @이것은 Object객체의 toString()을 상속받은 것과 다름.
 * 
 * 말을 어렵게 써놓긴 했는데, 객체지행 프로그램들 보면 자식의 경우에 메서드 재정의 override라고 생각하면됨
 * 아래의 케이스는 num이 가지고 있는 프로토 객체의 toString을 재정의 한 경우임.
 */
num.__proto__.toString = () => {
    return 'toString() 덮어쓰기';
};
console.log(num.toString());
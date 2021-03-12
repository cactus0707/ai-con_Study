/**
 * 객체 병합 확장하기 (assign)
 * Object.assign(반환될 객체, ... 병합될 다른 객체들);
 * 
 * 첫번째 인자로 대입된 객체를 기준으로 병합 함.
 * 이 객체를 기준으로 다른 객체들이 병합되기 떄문에 첫 번째 인자는 "원본이 수정"되어 반환됨.
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 * 인터넷익스플로러 에선 지원하지 않음.
 * 동일한 키가 존재할 경우 대상 객체의 속성은 출처 객체의 속성으로 덮어쓰여집니다. 후에 출처의 속성은 이전의 출처의 속성과 유사하게 덮어씁니다.

 * Object.assign() 메소드는 열거할 수 있는 출처 객체의 속성만 대상 객체로 복사합니다. 
 * 이 메소드는 출처 객체의 [[Get]], 대상 객체의 [[Set]] 을 사용하여 getter 와 setter 를 호출합니다. 
 * 따라서 이는 속성을 단순히 복사하거나 새롭게 정의하는 것이 아니라 할당하는 것입니다.
 * 깊은 클로닝(깊은복사) 주의 !! : 클로닝 대상이 객체에 대한 참조인 경우, 참조 값만 복사함.. 조심할 것.
 */

const obj1 = {one: 1, two: 2, three: 3};
const obj2 = {name: '탄이', age:5, address: 'Seoul'};
const obj3 = {friends: ['혜림', '현아', '현일', '우림']};

const newObj1 = Object.assign({}, obj1);
const newObj2 = Object.assign({}, obj1, obj2);
newObj1.four = 4;

console.log(obj1);
console.log(newObj1);
console.log(newObj2);

console.log('\n');

const newObj3 = Object.assign(obj1, obj3);

console.log(obj1);
console.log(newObj1);
console.log(newObj2);
console.log(newObj3);

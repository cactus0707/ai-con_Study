/**
 * 자바스크립트에서 __proto__ 속성으로 원형 객체를 정의할 수 있음.
 * 모든 자바 스크립트 객체는 __proto__속성을 가지는데ㅡ, 별도로 지정 하지 않으면,
 * Object.prototype객체가 연결 되어 있음.
 * 
 *  자바스크립트에서 객체 라고 말하는게 크게 두가지가 있는 것 같다. 
 * 객체지향의 의미에서 말하는 객체와, 자바스크립트 언어적 특성이 가지는 객체의 단어.
 * 문맥을 잘 파악 해서 써야할 것 같음.
 */

const studentProto = {
    gainExp: function (){
        this.exp++;
    }
}

const harin = {
    name: '하린',
    age: 10,
    exp: 0,
    __proto__: studentProto
};

const bbo = {
    name: '뽀',
    age: 20,
    exp: 10,
    __proto__: studentProto
};

bbo.gainExp();
harin.gainExp();
harin.gainExp();

console.log(harin);
console.log(bbo);

 
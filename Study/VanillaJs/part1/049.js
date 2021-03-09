
function Teacher(name, age, subject){
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.teach = function(student){
        console.log(student + '에게' + this.subject + '를 가르칩니다');
    };
}

const jay = new Teacher('jay', 30, 'JavaScript'); // 
console.log(jay);
jay.teach('bbo');

console.log(jay.constructor);
console.log(jay instanceof Teacher);

const jay2 = Teacher('jay', 30, 'JavaScript');
console.log(jay2);
console.log(age);

/**
 * https://ko.javascript.info/constructor-new 
 * 관례적으로, 생성자 함수(constructor function)와 일반 함수에 기술적인 차이는 없습니다. 다만 생성자 함수는 아래 두 관례를 따릅니다.
 * 함수 이름의 첫 글자는 대문자로 시작합니다.
 * 반드시 "new" 연산자를 붙여 실행합니다.
 * 
 * 또한, 이렇게 객체를 만들면, 다른 객체 지향 언어 처럼 this 키워드가 할당이 되며 
 * 
 * new User("Jack")이외에도 new User("Ann"), new User("Alice") 등을 이용하면 손쉽게 사용자 객체를 만들 수 있습니다. 객체 리터럴 문법으로 일일이 객체를 만드는 방법보다 훨씬 간단하고 읽기 쉽게 객체를 만들 수 있게 되었죠.

생성자의 의의는 바로 여기에 있습니다. 재사용할 수 있는 객체 생성 코드를 구현하는 것이죠.

잠깐! 모든 함수는 생성자 함수가 될 수 있다는 점을 잊지 마시기 바랍니다. new를 붙여 실행한다면 어떤 함수라도 위에 언급된 알고리즘이 실행됩니다. 이름 "첫 글자가 대문자"인 함수는 new를 붙여 실행해야 한다는 점도 잊지 마세요. 공동의 약속이니까요.
 */


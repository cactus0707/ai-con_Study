
function Teacher(name, age, subject){
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.teach = function(student){
        console.log(student + '에게' + this.subject + '를 가르칩니다');
    };
}

const jay = new Teacher('jay', 30, 'JavaScript'); // 별도의 리턴문이 없어도, 새로운 객체를 만듬 // 데이터 영역에서 가르키는 곳이 다르다는 의미 빈 객체를 만들고, 그때의 객체 (this에 매개변수를 연결 시킴)
console.log(jay);
jay.teach('bbo'); // 그 객체의 스튜던트 매개변수로 뽀를 넘겨서  콘솔로그 , 7번째 줄로감

console.log(jay.constructor); // 생성자 함수를 바로 불렀는데, 아마 내장함수 일듯?
console.log(jay instanceof Teacher); // 인스턴스 오브 ????

const jay2 = Teacher('jay', 30, 'JavaScript'); // --> New 로 할당 하지 않았기 떄문에 아래는 모두 전역 객체의 것을 가르킴 (데이터 영역, 이 객채를 위해 재할당이 이루어 지지 않음 )
console.log(jay2); // 언디파인드 . -- 새로운 객체가 반환 되지않아 제이 2 는 언디파인드로 출력 
console.log(age); // 이부분은 데이터 영역의 에이지를 호출, 객체에서는 이 에이지를 참조할 듯.

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


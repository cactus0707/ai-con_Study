
export default 'hello';

export default function hello(name){
    console.log('hello' + name);
};

export default class Hello{
    constructor(greeting){
        this.greeting = greeting;
    }
    hi(name){
        console.log(`${this.greeting} ${name}`);
    }
}

/**
 * default 키워드는 한 모듈에 하나만 사용 할 수 있다.
 * 따라서 위 코드는 에러. 익스포트는, 숫자, 문자, 불리언, 등등 기본형 값과 객체, 함수, 클래스와 같은 참조형
 * 모두 가능.
 * 
 * 또한 디폴트 키워드 다음에는 var, let, const와 같은 변수 선언 키워드가 올 수 없음.
 * 디폴트는 사실 해당 모듈의 기본값을 선언하는 것이기 때문에, 변수 선언 키워드가 오면 문법적 오류를 발생.
 * A.default = 'hello' = 'abdd' 디폴트 뒤에 할당 하면 이런 맥락이 됨.
 */
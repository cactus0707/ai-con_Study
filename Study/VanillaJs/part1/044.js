function createCounterClosure(){
    let count = 0;
    return{
        increase: function() {
            count++;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter1 = createCounterClosure();
const counter2 = createCounterClosure();

counter1.increase();
counter1.increase();

console.log('counter 1의 값 : ' + counter1.getCount());
counter2.increase();
console.log('counter 2의 값 : ' +counter2.getCount());

/**
 * 
 * 흔히 함수 내에서 함수를 정의하고 사용하면 클로저라고 한다. 하지만 대개는 정의한 함수를 리턴하고 사용은 바깥에서 하게된다.
 * 
 * 정확히 말하면,
 * 클로저란 함수가 정의 될때의 (실행 컨텍스트의) 렉시컬 환경을 기억하는 함수를 말함.
 * 그 13라인과 14라인에서 클로저를 만들었을때 각자의 렉시컬 환경을 만듬.또한 이를 기억함.
 * 위의 코드에서 counter1 ,counter2가 전역변수에 할당 되어 참조가 존재 하므로, 
 * 
 * 클로저는 반환된 내부함수가 자신이 선언됐을 때의 환경(Lexical environment)인 스코프를 기억하여 
 * 자신이 선언됐을 때의 환경(스코프) 밖에서 호출되어도 그 환경(스코프)에 접근할 수 있는 함수를 말한다. 
 * 이를 조금 더 간단히 말하면 클로저는 자신이 생성될 때의 환경(Lexical environment)을 기억하는 함수다라고 말할 수 있겠다.
 */
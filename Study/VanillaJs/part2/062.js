console.log(Number.isNaN(NaN)); // T
console.log(Number.isNaN(undefined)); // F
console.log(Number.isNaN('Is it number?')); // F - 'Is it number'는 스트링이지 NaN형이 아니므로, 폴스.
console.log(Number.isNaN(0)); //F
console.log(Number.isNaN(null)); // F
console.log(' ');
console.log(Number.isNaN(-1)); // F - 숫자라서 
console.log(Number.isNaN(0/0)); // T - 수학적으로 연산이 되지 않은, 의미가 없는 연산 결과값이 NaN이다.
console.log(Number.isNaN(new Date())); // F new Date()가 실행되면 ,현재 시간이 long 자료형의 값으로 변환, 이는 NaN이 아닌 숫자형으로 false를 반환..
console.log(Number.isNaN(new Date().toString())); // F 문자열은 NaN이 아니기 때문에 false 반환.
console.log(Number.isNaN('Infinity')); // F 인피니티도 사실은 자바스크립트에서 제일 큰 "숫자형" 이므로, False 반환.

/* 
NaN의 초기값은 Not-A-Number(숫자가 아님)로, Number.NaN의 값과 같습니다. 
최신 브라우저에서 NaN은 설정 불가, 쓰기 불가 속성입니다. 그렇지 않다고 하더라도 덮어쓰는건 피하는게 좋습니다.

NaN을 반환하는 연산에는 다섯 가지 종류가 있습니다.
----- 이부분 외울 것 -----
숫자로서 읽을 수 없음 (parseInt("어쩌구"), Number(undefined))
결과가 허수인 수학 계산식 (Math.sqrt(-1))
피연산자가 NaN (7 ** NaN)
정의할 수 없는 계산식 (0 * Infinity)
문자열을 포함하면서 덧셈이 아닌 계산식 ("가" / 3) */

/* 
NaN은 다른 모든 값과 비교(==, !=, ===, !==)했을 때 같지 않으며, 다른 NaN과도 같지 않습니다. 
NaN의 판별은 Number.isNaN() 또는 isNaN()을 사용하면 제일 분명하게 수행할 수 있습니다. 아니면, 
오로지 NaN만이 자기자신과 비교했을 때 같지 않음을 이용할 수도 있습니다.

그러나 isNaN()과 Number.isNaN()의 차이를 주의해야 합니다. isNaN은 현재 값이 NaN이거나, 
숫자로 변환했을 때 NaN이 되면 참을 반환하지만, Number.isNaN은 현재 값이 NaN이어야만 참을 반환합니다. */

// 그러니까 Number.isNaN(NaN) 일때 트루를 반환하니까 5개의 케이스 외울 것.. 
//isNaN도 쓰이니까, 알아둬야함
console.log(parseInt('15')); // 10진수로 변환.하고 리턴.
console.log(parseInt('15',10)); // 앞의 수를 10진수로 읽고 10 진수로 변환
console.log(parseInt('15',2)); // 앞의 인수를('15')를 2진수로 읽어서 10진 수로 반환함, 11132 <- 같은 경우 111 까지만 읽어서 10진수 7로 반환됨. 3을 만나면 멈춤 (2보다 크므로) 
console.log(parseInt(5.15)); // 버림
console.log(parseInt('5.15'));

/**
 * '', null, undefined, 0 은 falsy값. 그외에는 truthy값
 */


/* 
주어진 string로부터 분석한 정수.

또는 아래의 경우에는 NaN을 반환합니다

radix가 2보다 작거나 36보다 큰 경우
첫번째 non-whitespace 문자가 숫자로 변환되지 않는 경우
 */

 /**
  * 어떤 내장 함수 객체에도 속하지 않은 전역에서 사용할 수 있는 내장 함수
  */

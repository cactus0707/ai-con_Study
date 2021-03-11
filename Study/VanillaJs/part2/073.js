const str1 = 'Good afternoon';
const str2 = ', Good evening';
const str3 = ', and Good night';
const str4 = ' - The Truman Show, 1998';

console.log(str1.concat(str2, str3, str4));
/**
 * 맨처음 놓일(str1)변수를 기준으로 concat메소드를 호출함.
 * 두개 이상의 문자열을 추가하려고 할 때, 나머지 변수들은 메소드 인자로 문자열을 순서대로 나열하여 대입하면 됨.
 * 
 * String 내장객체 메소드 concat을 사용하는 방법 외에도 + 연산자를 활용하여 문자열을 합칠 수가 있음.
 *  자료형(숫자) 문자를 하나의 문자열로 만드는 경우가  일반적으로 많을 뿐더러, + 연산자가 concat연산자보다 빠름. + 연산자를 이용할 것.
 * 컨켓연산 규칙 찾아볼 것. 자료형 + 스트링 = ?? 반환값은??
 */


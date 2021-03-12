/**
 * 스트링의 서치 + 레직스
 * 정규표현식 이란 특정 규칙을 가진 문자열의 집합.
 * 
 * 자바스크립트에서 정규표현식을 활용 하는데 두가지 방법 이 있음.
 * 1. 스트링 객체의 메소드 중에서 매개변수로 정규표현식을 대입하는 메소드를 사용하는 방법
 * 2. 자바스크립트는 정규표현식 자체를 RegEx객체로 해석하여, RegEx객체의 내장 메소드를 활용하는 방법.
 * 
 * 지금은 1번임.
 * 정규식도 문법이 크게 3가지가 있는데, 어느 문법을 따르는지 검색해볼 것.
 */
const str = 'To lose your path is the way to find that path';

const regex1 = /path/; // 정규표현식 방법은 /<정규표현식>/ 을 쓰는 방법으로 이루어짐
const regex2 = /q/; // 소문자 q를 찾 음
const regex3 = /t/g; //g플래그를 추가하면 정구표현식은 대상 문자열 전체에서 일치하는 모든 문자를 찾음 -> 여기선 search함수 특성상, 가장 첫번째 인덱스를 반환하기 떄문에 첫번쨰 t의 인덱스가 리턴.
const regex4 = /t/ig; // i플래그를 추가하면 대소문자 구분없이, 문자열을 찾음 마찬가지로 search 함수 특성을 따라감.

console.log(str.search(regex1));
console.log(str.search(regex2));
console.log(str.search(regex3));
console.log(str.search(regex4));


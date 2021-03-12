/**
 * 스트링의 매치 + 레직스
 * 내 기억엔 정규표현식 문제가 NP였나 그래서, 간단한 것 말고는 쓰지 않는게 좋다고 기억하고 있음
 * 자연스럽게 문서에서 특정 문자열을 찾는 문제인데 KMP알고리즘과 연관 있다고만 알고 있음.
 * 내기억이 틀렸을 수도 있으니 제대로 찾아볼 것.
 */
const str = 'To lose your path is the way to find that path';

const sensitiveCaseRegex = /to/;
const ignoreAllCaseRegex = /to/gi;
const findRangeRegex = /([a-f])\w+/i;
const findAllRangeRegex = /([a-f])\w+/gi;

console.log(str.match(sensitiveCaseRegex));
console.log(str.match(ignoreAllCaseRegex));
console.log(str.match(findRangeRegex));
console.log(str.match(findAllRangeRegex));

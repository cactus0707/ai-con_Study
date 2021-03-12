/**
 * 
 * 지금은 앞서 설명한 2번 부분.
 * 레직스 객체의 .test(<regix Expression>)
 * 실제 그 문자열에서 레직스이스프레션을 만족하면 true
 * 아니면 false 
 * -> 비밀번호나, 이메일 체킹등에 쓰일 듯.
 * 짧은 문장에 대해서만 할 것.
 */
const numRegExp = /[0-9]+/;
const phoneRegExp = /\d{3}-\d{3,4}-\d{4}$/;
const emailRegExp =/^([-_.]?[0-9a-zA-Z]{6,13})+\@([0-9a-z]+)\.([a-z]{2,3})$/i;

console.log(numRegExp.test(12345));
console.log(numRegExp.test('test'));
console.log(phoneRegExp.test('010-3003-0046'));
console.log(phoneRegExp.test('02-8844-1234'));
console.log(emailRegExp.test('test123@javascript.org'));
console.log(emailRegExp.test('test-javascript'));

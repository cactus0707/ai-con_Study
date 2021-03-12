/**
 * regix객체의 exec메소드는 정규표현식과 일치하는 문자열을 찾아 배열로 반환함.
 * 일치하는 문자열이 없으면, null을 반환함.
 * ㅇㅇ활용에 따라 일치하는 문자열과 해당 위치 정보들을 모두 알 수 있음.
 */
const str = 'Java is not in JavaScript';

const result1 = /java/ig.exec(str);
console.log(result1[0]);
console.log(result1.index);
console.log(result1.input);

const nums = '"1","2","3"';
const regex = /\d+/g;

while(result2 = regex.exec(nums)){
    console.log(result2, regex.lastIndex);
}
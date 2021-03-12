/**
 * Math객체의 ceil 메소드는 매개변수의 소수점 다음의 값을 올림함. 라운드 함수와 조작방법 동일. 단지 올림한다는게 다름.
 */
const positiveNum = 93.54;
const negativeNum = -39.27;

console.log(Math.ceil(positiveNum));
console.log(Math.ceil(negativeNum));
console.log(Math.ceil(positiveNum * 10) / 10);
console.log(Math.ceil(positiveNum / 10) * 10);
console.log(Math.ceil(negativeNum * 10) / 10);
console.log(Math.ceil(negativeNum / 10) * 10);


/**
 * Number 객체의 toString메소드는 값을 특정진법으로 표현하여 "스트링형"으로 반환함.
 */
const dec = 531;

const binByDex = dec.toString(2);
const octByDex = dec.toString(8);
const hexByDex = dec.toString(16);

console.log(binByDex);
console.log(octByDex);
console.log(hexByDex);

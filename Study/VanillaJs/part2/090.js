/**
 * 배열.indexOf(검색할 값, 시작 인덱스)
 */
const arr= ['spring', 'summer', 'fall', 'winter', 'is', 'down'];

console.log(`"winter" is in this index ${arr.indexOf('winter')}`);
console.log(`"winter" in not in here, look this value ${arr.indexOf('winter',4)}`); // 인덱스가 4부터 시작하면, winter 요소가 없기 떄문에 -1 리턴 // 
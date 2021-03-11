/**
 * 배열.every(callback fn)
 * 배열의 모든 요소가 콜백함수의 조건을 만족 하는지 확인함.
 * 한번이라도 false를 리턴하면 false리턴과 함께 함수 종료.
 * 
 * 모든 요소가 True 여야만 True리턴. 
 */
const arr = [
    {id: 0, name: '혜림', age: 6},
    {id: 1, name: '현일', age: 3},
    {id: 2, name: '현아', age: 5},
    {id: 3, name: '우림', age: 2}
];

const isAllHyunA = arr.every(el => el.name == '현아');
const youngerThanSevenAll = arr.every(el => el.age < 7);

console.log(isAllHyunA);
console.log(youngerThanSevenAll);
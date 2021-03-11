/**
 * 배열.some(callback fn)
 * 콜백함수의 리턴값이 true를 반활 할 때 까지만 배열 요소를 순환함.
 * true반환 후 그 다음 요소에 대해서는 더이상 처리를 하지 않음
 * 만일 마지막 요소 까지 순환해도 true를 끝내 반환하지 않으면, false를 반환함.
 */
const arr = [
    {id: 0, name: '혜림', age: 6},
    {id: 1, name: '현일', age: 3},
    {id: 2, name: '현아', age: 5},
    {id: 3, name: '우림', age: 2}
];

const isHyunAhere = arr.some(el => el.name == '현아');
const olderThansix = arr.some(el => el.age > 6);

console.log(isHyunAhere);
console.log(olderThansix);
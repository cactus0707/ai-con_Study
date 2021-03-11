/**
 * 자주 쓰일 것 같다.
 * 배열의 요소를 일괄 변경 한다거나, 추출 해야하는 경우 쓰일 수 있고
 * 콜백 함수의 리턴으로 반환되는 값들을 재조합 하여 새로운 배열에 만듬.
 */
const arr = [
    {id: 0, name: '혜림', age: 6},
    {id: 1, name: '현일', age: 3},
    {id: 2, name: '현아', age: 5},
    {id: 3, name: '우림', age: 2}
];

const arr2 = arr.map(el=>{
    el.age = el.age + 1;
    return el; // 여기서는 매개변수로 받은 객체를 리턴. 그러므로, 객체를 원소로 가지는 배열이 리턴.
});

const arr3 = arr.map(el => el.name); // 이름만 리턴, 그러므로 arr3에는 이름만 가지는 배열이 리턴.

console.log(arr2);
console.log(arr3);
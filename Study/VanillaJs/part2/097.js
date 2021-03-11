/**
 * 배열.find(callback fn)
 * 콜백 펑션을 만족하는 ( 무조건 트루 아니면 폴스) 요소를 배열 내에서 찾음
 * 첫번째 요소를 반환함.
 */
const arr = [
    {name: '우림', age: 2},
    {name: '현아', age: 5},
    {name: '탄이', age: 30},
    {name: '현일', age: 3},
    {name: '혜림', age: 6}
];

const myFriend = arr.find(a=> a.age === 30);
console.log(myFriend);
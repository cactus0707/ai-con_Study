/**
 * 배열.forEach(call back함수) // 포이치문은 항상 콜백 함수를 가진다.
 * 음.. 그러니까 PQ만들떄 PQ소트를 항상 람다로 만드는 방식? 문형 과 비슷하다고 생각하면 될듯.
 */

 const arr = [
     {id: 0, name: '혜림', age: 6},
     {id: 1, name: '현일', age: 3},
     {id: 2, name: '현아', age: 5},
     {id: 3, name: '우림', age: 2}
 ];

 arr.forEach(
     (el) => {
         console.log(el.name);
     }
 );
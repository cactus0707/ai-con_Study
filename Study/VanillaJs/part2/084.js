const prevList = [1, 2, 3];
const currentList = [4, 5, 6];
const nextList = [7, 8, 9];

console.log(prevList.concat(currentList));
console.log(prevList.concat(currentList, nextList));
console.log(['배열'].concat('합치기'));
console.log(['배열'].concat('합치기', 'JavaScript')); // Array의 concat이라는 걸 까먹지 않도록. 문자열의 concat과 다름. 
/**
 * 첫번째 인자가 Array일때 호출가능. 첫번째 Array일때 Array의 내장 객체의 메소드에 접근가능 - 너무 당연한 이야기..
 */
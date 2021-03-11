/**
 * 배열.slice(시작인덱스, 끝 인덱스) // [) <- 구간에 대하여 동작함. 끝인덱스가 아웃오브인덱스라면, 배열의 끝까지 뽑음.
 * slice는 원본 배열을 변경하지 않고, 얕은 복사를 수행함.(원시 배열이 수정되면 같이 수정되어버릴 여지가 있음.)
 * 따라서 slice후에는 참조 관계와 다른 변수로 대입할 것.
 */

const arr = ['melon', 'lemon', 'source', 'apple', 'juice'];
console.log(`과일이 아닌 요소는 ${arr.slice(2,3)}와 ${arr.slice(4,5)} 입니다.`);
console.log(arr.slice(0,10));
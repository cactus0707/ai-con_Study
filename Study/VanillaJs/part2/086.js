const arr = [1, 2, 3];
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

/**
 * 내부적으론 링크드 리스트지만, 모두 팝되서 원소가 없다면 언디파인드 (값이 아에 없는 할당하지 않은 상태) 리턴.
 * 0인덱스부터 시작하는 스택이라고 이해하면됨.
 */


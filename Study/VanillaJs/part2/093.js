const str = 'abcdefghijklmnopqrstuvwxyz';
const arr = str.split(''); // 스플릿에 대한 결과값으로 배열을 반환함. 그 배열이 arr에 할당. - split('')
arr.reverse(); // 리버스 함수 호출 // 사실 인덱스 제어가 된다면 리버스를 만들 수도있으나.. 이건 공부 할떄나..

console.log(arr.join('')); // join 을 빈 문자열로 호출하게되면 하나의 스트링으로 반환이됨.

/**
 * 문자열을 배열로 바꾸고, 연산 후 다시 문자열로 만드는 방식.
 * 씨피피에서는 문자열도 하나의 배열로 보고 연산했지만, 이 방식이 좀 더 명확 할 듯.(왜냐면 시피피의 스트링 모델은 좀 까다로움..)
 */
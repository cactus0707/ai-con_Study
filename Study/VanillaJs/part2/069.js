const sentence = 'This will be the end of Wakanda';
console.log(sentence.substring(13)); // 13번쨰부터 문장 끝까지 출력.
console.log(sentence.substring(13, 50)); // 13번쨰부터 20번 까지.
console.log(sentence.substring(0));
console.log(sentence.substring(0, -20));
console.log(sentence.substring(50)); // 문자열 길이를 뛰어넘는 인자를 넣으면 정상 작동 하지않음.단, 시작점이 있다면 문장 끝까지 반환
console.log(sentence.substring(20,13));

/**
 * '문자열'.substring(시작 인덱스, 종료 인덱스)
 * [ ,) 구간에 대해서 동작.
 * 슬라이스랑 다른점은
 *  -음수를 넣으면 정상적으로 수행하지 않음.
 *  -첫 번째 인자가 두 번째 인자보다 크면 두개의 인수를 교환하여 수행함.  
 */


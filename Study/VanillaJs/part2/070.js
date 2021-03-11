const sentence = 'Wakanda Forever!!!';

console.log(sentence.substr(8)); // 8번째부터 마지막까지의 문자열 반환.
console.log(sentence.substr(8,7)); // 8번쨰부터 길이 7
console.log(sentence.substr(0)); //시작점이 0 이고 길이를 정하지 않으면, 전체를 반환
console.log(sentence.substr(-10)); //첫번째 인자에 음수를 넣으면 뒤에서 부터 길이를 세서 계산..slice와 비슷
console.log(sentence.substr(0,-3)); //두번째 인자에 음수를 넣게되면 정상적으로 동작하지 않음 (5,-3) -> 의미적으론되나, 두번쨰 인자가 음수이기 때문에 정상 작동하지 않음.
console.log(sentence.substr(30)); // 문자열 길이보다 크게 첫번째 인덱스를 넣으면 인덱스를 찾지 못하기 때문에 빈 값을 반환
console.log(sentence.substr(0,30)); //두번째 인자가 문장의 길이보다 크다면, 문장의 끝까지 가서 마지막 까지의 문자열 반환..

/**
 * '문자열'.substr(시작인덱스, 길이)
 * 두번째 인자는 선택사항이고 필수 값이 아님.
 * 시작인덱스 부터 시작해서 길이 만큼의 새문자 열을 반환함.
 */


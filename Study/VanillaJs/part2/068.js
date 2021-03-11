const sentences = 'The sun will shine on us again';
console.log(sentences.slice(13)); //13 번쨰 부터 문서 끝까지
console.log(sentences.slice(13, 24)); // 13번쨰부터 25번쨰 까지. -만약 25번쨰 인덱스가 없더라도, 빈칸을 만들지 않고 문장의 끝에서 반환
console.log(sentences.slice(0));// 시작인덱스는 0부터, 끝을 지정해주지 않으면 문장 끝까지.
console.log(sentences.slice(0, -23)); // 음수 인덱스는 문장의 끝에서 23번째 라는 의미. 0번쨰 인덱스부터, 문장의 뒤에서 셋을때 23번째 인덱스 까지 문자열을 반환
console.log(sentences.slice(50)); //문자열 길이를 뛰어 넘는 숫자를 넣으면 빈 값을 반환, 단 시작점이 있다면 문장 끝에서 반환.
console.log(sentences.slice(7,2)); // 첫번째 인자가 두번째 인자보다 크면 slice함수는 정상적으로 동작하지 않음.
/**
 * '문자열'.slice(시작 인덱스, 종료 인덱스) // [, ) < -구간 
 * 자바스크립트 스트링 시작 인덱스는 0부터
 * 지정한 범위의 인덱스 문자열을 반환하되, 기존 문자열에 영향을 미치지 않습니다.
 */


const str = 'Carpe diem, seize the day';

console.log(`"e"는 ${str.lastIndexOf('e')} 번째 인덱스에 있습니다.` );
console.log(`대문자 "C"는 ${str.lastIndexOf('C')} 번째 인덱스에 있습니다.`);
console.log(`소문자 "c"는 ${str.lastIndexOf('c')} 번째 인덱스에 있습니다`);
console.log(`문자열 ", se"는 ${str.lastIndexOf(', se')} 번째 인덱스에 있습니다.`);

/**
 * 문자열 뒤에서 부터 검색해서 발결한 첫번째 인덱스 값을 반환함
 */


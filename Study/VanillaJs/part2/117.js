/**
 * JSON.parse(값, 리플레이서)
 * 첫번째 인자는 stringfy로 변환할 대상의 값.
 * 
 * 두 번쨰 리플레이서(Replacer)는 JSON으로 변환하기 전에 값을 변경하는 인자.
 * 리플레이서 인자는 필수 값이 아니고, 콜백 함수를 넣거나, 특정 키 정보를 담은 배열을 넣어 값을 변경함.
 */
const jsonStr = '{"drama":"PET","season":2017,"casting":' + '["koyuki","matsumoto jun"],"character":["sumire","momo"]}';

console.log(JSON.parse(jsonStr));
console.log(JSON.parse(jsonStr, (key, val)=>{ // 콜백 함수 jsonStr의 키와 밸류가 매개변수로 전달됨. ?? 항상 인자가 두개면 parse함수는 이렇게 행동하는 것인가 ? 인자가 하나면 어떻게 되지?
    if(key==='season') val = 2003;
    return val;
}));

console.log(JSON.parse('13.1')); // 숫자형 13.1 을 반환
console.log(typeof JSON.parse('13.1')); 
console.log(JSON.parse('false')); // 문자열 false는 불린 false로 반환
console.log(typeof JSON.parse('false'));

console.log(JSON.parse('Kiss Carnival')); // 특정 원시 자료형을 나타내지 않는(?) 문자형 -> syntax error ???
console.log(JSON.parse('[2003, 2017')); // 배열형태의 문자열 - > syntax error



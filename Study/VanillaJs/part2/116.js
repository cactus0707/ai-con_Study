/**
 * JSON.stringfy(값, 리플레이서, 공백 개수)
 * 첫 번째 인자는 JSON 문자열로 변환할 대상의 값.
 * 두 번째 인자는 리플레이서로, JSON문자열로 변환하기 전에 값을 변경하는 인자.
 *       이 때, 리플레이서로 콜백(callback)함수를 넣거나, 특정 (key) 정보를 담은 배열을 넣어 값을 변경.
 * 
 * 세번째  인자 공백 개수는 JSON 문자열의 들여쓰기 시 공백 개수를 의미함. 1부터 10까지 지정할 수 있고, null이나 0 또는 음수인 경우 공백을 사용하지 않는 것으로 간주.
 */
const testStringify = {
    stringifiedNum: JSON.stringify(13.1),
    stringifiedNum: JSON.stringify('Kiss Carnival'),
    stringifiedNum: JSON.stringify(false),
    stringifiedNum: JSON.stringify([2003,2017])
};

for(let key in testStringify){
    console.log(`----------${key}----------`);    
    console.log(typeof testStringify[key]);
    console.log(testStringify[key]);
}

console.log(`----------stringifyObj-----------`);
const obj = {
    drama: 'PET',
    season: 2017,
    casting: ['koyuki','matsumoto Jun'],
    character: ['sumire', 'momo']
};

console.log(typeof JSON.stringify(obj));
console.log(JSON.stringify(obj));
console.log(JSON.stringify(obj, ['drama','season']));
console.log(JSON.stringify(obj, null, 4));
console.log(JSON.stringify(obj, (key,val)=>{
    if (key==='season') return 2003;
    return val;
},4));


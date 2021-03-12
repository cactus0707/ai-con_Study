/**
 * 스트링객체의 replace 메소드임.
 * 문자열.replace(교체 대상 문자열 또는 정규식, 대체될 문자열 또는 함수)
 * 
 * 첫번째 인자에는 기존 문자열에서 교체할 대상 문자열 또는 정규식을 넣음
 * 기본적으로 replace는 첫 번쨰 인자에 따라 일치하는 첫 번째 항목만 찾음. 그러나 모든 문자열을 변경 하고 싶으면,
 * g플래그를 사용하면 일치하는 모든 문자열을 찾아 낼 수 있음.
 * 
 * 문자열을 찾은 뒤에는 두번째 인자를 통해 문자열을 교체함. 두번쨰 인자로 함수를 정의할 떄는 다음의 매개변수를 이용
 * ㅇ 일치한 문자열
 * ㅇ 일치한 값들
 * ㅇ 일치한 값의 위치
 * ㅇ 원본 문자열
 * 정규표현식으로 특정 문자열을 검색한 뒤, 원하는 문자열로 대체함.
 */
console.log('2018-08-03 07-23-14'.replace('-',':'));
console.log('2018-08-03 07-23-14'.replace(/-/g,':'));
console.log('2018-08-03 07-23-14'.replace(/\d/g,'9'));

const littleWomen = 'Meg March, Jo March, Beth March, Amy March';
console.log(littleWomen.replace(/\w+ March/ig, 'Mrs.$&'));
console.log(littleWomen.replace(/\w+ March/ig, (str, d1, d2, d3, d4, offset, s)=>{
    let tag = '';
    if(/Meg/.test(str)) tag = '첫째'
    else if (/Jo/.test(str)) tag = '둘쨰'
    else if (/Beth/.test(str)) tag = '셋째'
    else if (/Amy/.test(str)) tag = '넷째'

    console.log(`원작 "작은 아씨들"에서 주인공 ${str}은 ${tag}입니다.`);
    return tag;
}));

const name = 'March Amy';
console.log(name.replace(/(March) (Amy)/, '$2 $1'));
console.log(name.replace(/(March) (Amy)/, (str, first, second, offset, s)=>{
    console.log(`${second} is name, ${first} is first name.`);
    return `${second} ${first}`}
));


 
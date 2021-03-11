const arr = ['short', 'long sentence, it is not appropriate'];

arr.forEach(str=>{
    if (str.length<10) console.log(str);
});
/**
 * length 는 String객체에 미리 정의되어 있는 기본 속성.이를 통해 문자열의 길이를 구할 수있음.
 * str.length
 */
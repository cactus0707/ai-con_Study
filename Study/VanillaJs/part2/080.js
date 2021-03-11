const capitals = `Prague, Czech Republic
Copenhagen,Denmark
Paris, France
Madrid,Spain
Rome,Italy`


capitals.split('\n').forEach( s => {
    const capital = s.split(',')[0];
    const country = s.split(',')[1];
    console.log(`${capital} is in ${country}`);
});
/**
 *  문맥으론 이해가 되는데 , 스플릿 정확한 이해가 필요.. [0],[1] 부분.
 *  그러니까, 캐피탈즈를 개행문자를 기준으로 분리를 하되, 그 요소에 대해서 다시 , 로 분리 해서 첫번쨰 인덱스, 두번째 인덱스 접근하며 
 *  템플릿 문자열로 출력.
 *  스플릿을하고 그값을 다시 배열로 보낼 수 있어야함.-> 도전해볼것.
 */
/**
 *  컴퓨터가 만드는 랜덤중에 진짜 랜덤은 없다.
 * 
 */
const generateRandom = (min, max) => {
    return Math.floor(Math.random()*(max - min +1) + min);
    // Math.random()*(max-min +1 )+ min '최소 ~ 최대 ' 사이의 무작위 실수 값을 반환함.- 당연한이야기..
    //floor 함수로, 소수점을 버림하여 정수로 만듬.
};

for ( let i=0; i<5; ++i){
    console.log(generateRandom(1,10));
}

for(let i=0; i<5; ++i){
    console.log(generateRandom(10, 100));
}
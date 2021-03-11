/**
 * 인자로 대입된 콜백 함수를 통해 배열 내부를 순환 하면서 요소 각각이 특정 조건을 만족하는지 확인.
 * 확인 하는 방식은 callback 함수 내부에 정의된 문장들을 통해 테스트 하게되는데, 
 * callback함수의 반환값은 "무조건" true or false 여야만함.
 * 이 중에서 true 것들만 "새로운 배열에 담아" 리턴.
 */
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

const filteredTwo = arr.filter( a=>{
    console.log(`현재 위치의 값은 ${a} 입니다`);
    return a%2 == 0;
});

console.log(filteredTwo);

const filteredThree = arr.filter(a => a%3 ==0);
console.log(filteredThree);
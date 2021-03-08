var obj = {a: 1, b: 2, c: 30, d:44, e: 5 };

var {a, c} = obj; // 시플플 구조적 바인딩 이랑 비슷함
// 변수 a 에는 obj의 a가(1), 변수 c에는 obj의 c가(30)이 할당됨.

console.log(`a >>> ${a}`);
console.log(`c >>> ${c}`);

var {a:newA=10, f:newF=5} = obj;
/**
 * a의 값을 newA에 할당 하되, a가 언디파인드면 10으로 할당해라(디폴트 값)
 */
console.log(`newA >>> ${newA}`);
console.log(`newF >>> ${newF}`);

/********************배열 비구조화 할당********************/

var arr = [1, 2, 30, 44, 5];

var [b, c, ...rest] = arr; // 첫번쨰는 b 변수에 두번째는 c 변수에, ...<-나머지 연산자를 사용해서 나머지 변수는 ...rest <- rest에 담을 수 있음.이 경우 에는 남아있는 배열이 전부 담겨짐
console.log(`0) b >>> ${b}`);
console.log(`0) c >>> ${c}`);
console.log(`0) rest >>> ${rest}`);

var [a=10, f=9] = [1]; // [1,2,3] 처럼 할당 가능.. 한개로.. 햇갈리지말것..와...
console.log(`1) a >>> ${a}`);
console.log(`1) f >>> ${f}`);

[a,f] = [f, a]; // 스왑은 간단!
console.log(`2) a >>> ${a}`);
console.log(`2) f >>> ${f}`);

function getArr(){
    return [1, 2, 3, 4, 5, 6];
}

[a,,,,,f] = getArr(); // 함수의 리턴 값도 비구조화 하여 받을 수 있음.
console.log(`3) a >>> ${a}`);
console.log(`3) f >>> ${f}`);

/**
 * 자바스크립트의 비구조화 문법이란게, 시피피 구조적 바인딩+오토 개념을 좀 더 쓰기 쉽게 만든거라고 느껴짐. 비슷한 느낌이다.
 */

const str = 'Carpe diem, seize the day';
console.log(`"e"는 ${str.indexOf('e')} 번째 인덱스에 있습니다`);
console.log(`대문자 "C"는 ${str.indexOf('C')} 번째 인덱스에 있습니다.`);
console.log(`소문자 "c"는 ${str.indexOf('c')} 번째 인덱스에 있습니다.`);
console.log(`문자열 ", se"는 ${str.indexOf(", se")} 번째 인덱스에 있습니다.`);

const arr = ['Carpe','diem','seize','the', 'day'];
const howManyHasE = (argumentVector)=> {// argumentVector라는 매개 변수를 받는 => 화살표 함수
    let count = 0;
    argumentVector.forEach((str) => { // 매개변수로 str을 받아 -변수명이 str이지 사실은 그냥 변수임. 
        //이 부분에서 자바스크립트의 강점이자 약점이 나오는 것같음. 타입체크를 안함. 하지만 우린 스트링이 날라온다는 걸 알기에, 뒤에 인덱스오브 가능
        if (str.indexOf('e') > -1) count++; // 여기서 -1 의 값은 indexOf 가 반환하는 리턴값임(값이 없을때) - 이방식은 C언어 함수 리턴 방식이랑 비슷함.-str종류들.
    });
    return count;
}

console.log(`${arr}에 "e"가 있는 요소는 모두 ${howManyHasE(arr)}개 입니다.`);
//howManyHasE(arr)에서 함수 호출 -> 전역으로 선언한 arr변수가 들어가고, 함수가 동작하기 시작함.









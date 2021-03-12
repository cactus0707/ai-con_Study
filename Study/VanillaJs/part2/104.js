/**
 * 객체 변경 되지 않도록 하기(freeze)
 */
let obj = {}; // 나중에 freeze 메소드를 실행한 뒤 다시 obj변수로 할당하기 때문에 obj변수는 let으로 선언합니다 (?????)

obj.title = 'IDOL';
obj = Object.freeze(obj); // 상위 객체(Object)의 내장 함수로, obj 갹체를 변경 후 다시 obj가 그 객체 영역을 가르킴. 내부 동작? 한번 파악 해볼 필요가 있음. 
obj.title = 'Euphoria';

console.log(obj);  // Object객체의 freeze 함수로 obj를 변경 금지 했으므로, IDOL이 출력됨

const changeUntilNum = (obj, num) => {
    'use strict'; // 위 블럭에서 'use strict'를 선언 했다면, 아이돌 -> Euphoria 할당시 에러가남. 여기서는 30 초과가된다면 프로그램을 종료 시키기 위해 씀

    while(true){
        console.log(obj);

        if(obj.age >= num){
            obj = Object.freeze(obj); // 매개변수로 넘어온 30보다 크거나 같으면, 프리즈 함. 
        }
        obj.age += 1; // 이프문 들어갔다 나왔기 떄문에 프리즈 된 상태에서 에이지 +1 하면 변경을 시도하게 되고, 위의 유즈 스트릭트 문 떄문에 에러를 내뿜음.
    }
}

let profile = {name: '지연', age: 25}; //
changeUntilNum(profile, 30); // 프로필 ,30 인자로 채인지 언틸넘 함수 호출.
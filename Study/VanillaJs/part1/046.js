/***
 * 45장과 46장을 합치면 정말 기본적은 멤버 변수, 멤버 함수, 게터 세터 를 정의 할 수 있을 것 같다. 근데 이걸론 정말 부족한데.. 뒤에 더 있을 것 같다.
 * 클로저 개념까지 포함하면, OOP 스럽게 짤 수 있을 것 같다.
 */
let user = {};
Object.defineProperty(user, "age",{ // 속성 기술 자를 통해 유저의 에이지 속성을 정의 하고, 이때 3번째 매개변수로 객체를 넘겨주는데, 이 객체를 접근 기술자라고 칭함.
    //겟 메서드와 셋 메서드를 가짐
    get: function () {  // 에이지 속성의 겟/ 셋 부분, 내가아는 게터 세터 역활 // 
        return this._age; // 이 객체의 age 기 떄문에 _ <- 언더스코어(스코프..)
    },
    set: function (age){
        if(age < 0){
            console.error('0보다 작은 값은 올 수 없습니다.');
        } else {
            this._age = age;
        }
    },
    enumerable: true
});

user.age = 10;
console.log(user.age);
user.age = -1; // 이프문 으로 제어하는 에러 


let user2 = {
    get name(){
        return this._name;
    },
    set name(val){
        if(val.length < 3){
            throw new Error('3자 이상이여야 합니다'); // 에러처리..
        }
        this._name = val;
    }
}

user2.name = 'harin';
console.log(user2.name);
user2.name = 'ha'; // 예외처리 핸들러 방식 으로 에러메세지 나옴. 돌려서 확인할 것.

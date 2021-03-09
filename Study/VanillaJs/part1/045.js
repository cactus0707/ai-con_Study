let user = {
    name: "jeado"
};
let descriptor = Object.getOwnPropertyDescriptor(user, 'name'); 
/**자바스크립트의 모든 객체 속성은 자기 자신에 대한 정보를 담고 있는 속성 기술자(propertyDescriptor를 가지고 있음)
 * 이 속성 기술자는 객체로 표현 됨. Object.getOwnPropertyDescriptor로 가져 올 수 있음!
 */
console.log(descriptor);

let user2 = {}; // user2 객체 선언
Object.defineProperty(user2, "name", { // 객체 속성을 정의 첫 번째 인자는 정의할 객체, 두번째 인자는 속성명, 세번째 인자는 속성 기술자. @@오해하지 말것. "속성" 기술자임.
        value: "jeado", // 네임 속성의 값은 재도 이고,
        enumerable : true, // 포룹이나, Object.keys 메소드 같이 속성을 나열할때 가능 여부. false로 놓으면 나열되지 않음
        configurable: true, // 속성 기술자를 변경 할 수 있는 여부를 정함 , false로 둘 경우 한번 속성 기술자로 속성의 속성을(?) 다시 수정 할 수 없음
        writable: false // 값을 변경 할 수 있는 지 여부를 정의함. false일 경우 값이 변하지 않음.
});
console.log(user2.name);
user2.name = "bbo";
console.log(user2.name);

let user3 = {
    name: "jaedo",
    toString(){ // 투스트링 속성을 정의함.
        return this.name;
    }
};
//?
Object.defineProperty(user3, "toString",{
    enumerable: false //23라인에 투스트링을 정의 하고, 32줄에서 포룹을 돌림
});

for(let key in user3){
    console.log(key); // 예상했듯이 이너머러블 폴스 이기 때문에 투스트링 속성은 보이지 않음 ( JSON타입이랑 햇갈리지 말 것.)
}

let user4 = {};
Object.defineProperty(user4, "name",{
    value: "jeado",
    configurable: false // 속성기술자를 이용하여 네임 속성에 대해 컨피규러블 폴스로 둠 
});

delete user4.name
console.log(user4);
Object.defineProperty(user4, "name",{ // 다시 속성기술자를 호출하였을떄는, 에러나올 듯.
    writable: true
});

/**
 * 속성에 속성을(?) 정의하는 기능 말고도 데이터에 접근 하는 방법을 정의 할 수 있음.
 * get,set 함수를 통해 할 수 있음 46번 참고.
 */

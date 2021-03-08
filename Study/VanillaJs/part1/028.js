var family = {
    "address" : 'Seoul', //키를 작성할때는 싱글 쿼테이션 있어도 되고 없어도 된다. 그러나 JSON형식을 따르자면 항상 큰 따옴표로 키를 묶을 것.
                        // JSON : 속성키 이름은 큰 따옴표로 묶어야 하며, 값은 오직 문자열,숫자,배열,true,false, null, 그리고 또 다른 Json객체만 가능..
    members : {}, // 키 멤버에 새로운 객체 리터럴을 대입 아직 할당 된 것은 없음

    /*키 애드 패밀리 이름으로, 함수리터럴을 대입. 함수 표현식을 변수에 넣은 것 처럼, 키에도 대입 가능.*/
    addFamily: function(age, name, role){
        this.members[role] = { // this 키워드를 통해, family 객체 내부 속성에 접근.. -> 뒤에 더 상세하게 다룸
            age: age, // 객체가 선언된 이후에도 속성을 추가적으로 더 넣을 수 있음.
            name: name
        };
    },

    getHeadcount: function(){ // 이 함수는 멤버의 키들을 모아 배열로 반환하고,반환된 배열의 길이를 통해 패밀리 객체 사이즈를 알 수있음.. 
        return Object.keys(this.members).length; // 
    }
};

family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10,'dangdangi', 'dog');
console.log(family.getHeadcount());
console.log(family);

/**
 * 이 객체의 모양?이 상상이 잘안됨.. 
 * keys 함수 알아보기
 */
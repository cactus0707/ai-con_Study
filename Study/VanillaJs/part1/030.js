var address = 'Seoul';
var members = {};
var addFamily = function(age, name, role){
    this.members[role] = {age, name};
};
var getHeadcount = function(){
    return Object.keys(this.members).length;
};

var family = { address, members, addFamily, getHeadcount};

family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, 'dangdangi', 'dog');

console.log(family.getHeadcount());

/**
 * 기존 패밀리 객체의 속성을 변수로 모두 저장하면서 "키이름"을 변수명으로 정의함. 
 * 18번쨰 줄에 그 변수명을 객체의 속성으로 할당함.
 * 
 * 이렇게
 * {변수명, 변수명, ,,,} 으로 정의한 객체는 {변수명:변수값} 으로(28번) 정의한 것과 동일함.
 * 이런 단축 속성명은 문자열, 객체, 함수 등 자료형에 상관없이 적용 가능함.
 */
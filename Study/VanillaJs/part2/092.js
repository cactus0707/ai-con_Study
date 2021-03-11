/*
배열.sort(function(a,b){
    return 비교값;
})
PQ구현 람다식이랑 완전 동일함.
정확한 내부 구현은 모르겠으나, (씨플플은 인트로소트.)
오름차순일 때 리턴값이 1보다크면(truthy) 그대로 두고, -1이면 순서가 오름차순에 맞지않으므로 소팅 알고리즘이 도는 방식일듯 - old school
*/

const numArr1 = [2, 0, 3, 4, 1];
const numArr2 = [2, 0, 3, 4, 1];

const objArr = [
    {id: 2, name: 'Leo'},
    {id: 0, name: 'daniel'},
    {id: 3, name: 'Asher'},
    {id: 4, name: 'Chloe'},
    {id: 1, name: 'Chloe'}
];

numArr1.sort(function(a,b){return a-b;}); // 오름차순
numArr2.sort(function(a,b){return b-a;}); // 내림차순
objArr.sort(function(a,b){ // Lexical 비교, 오름차순으로 정렬함. 대문자 > 소문자 , 아스키 코드 값으로 비교한다는걸 알 수 있음.
    if ( a.name > b.name) return 1;
    else if (b.name > a.name) return -1;
    else return 0;
});

console.log(`오름차순 : ${numArr1}`);
console.log(`내림차순 : ${numArr2}`);
console.log(objArr);
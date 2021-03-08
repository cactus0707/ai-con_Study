var cart = [
    {name : '옷', price : 2000},
    {name : '가방', price : 1000}
];

var numOfItems = `카트에 ${cart.length} 개의 아이템이 있습니다`;
var cartTable = 
`<ul>
    <li>품목 : ${cart[0].name}, 가격 : ${cart[0].price}</li>
    <li>품목 : ${cart[1].name}, 가격 : ${cart[1].price}</li>
</ul>`

console.log(numOfItems);
console.log(cartTable);

var personName = 'harin';
var helloString = 'hello ' + personName;
var helloTemplateString = `hello ${personName}`;
console.log(helloString === helloTemplateString);
console.log(typeof helloTemplateString);


/**
 * 템플릿 문자열은 억음 부호 ( 1옆에 그것)로 작성함. 템플릿 문자열을 이용하면 ${표현식} <-으로 삽입 처리가 가능하다.
 * 삽입처리란 - > 표현식의 계산된 결과가 문자열로 변경되어 해당 위치에 삽입되는 것을 말함.
 * 
 * 6 ~ 10라인을 보면 템플릿 문자열은 멀티라인이 가능함. 개행하여 작성한 그대로 정의 됨.
 * 
 */
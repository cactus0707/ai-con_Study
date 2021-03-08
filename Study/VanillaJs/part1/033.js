const symbol = Symbol(); //심볼은 뉴 키워드를 통한 호출은 에러가 발생한다. 심볼은 함수 호출을 통해 생성가능하다. 
const hello = Symbol('hello'); // 함수 호출시 값을 전달 할 순 있는데, 이 값은 디버깅 용도라함. --? 어떻게 디버깅 용도로 쓰지??

console.log(Number(3)===Number(3)); // T
console.log(Symbol('symbol')=== Symbol('symbol')); // 만들때 시드 값이 아니라 디버그를 위한 인자이므로, 또한 심볼은 항상 고유한 값을 가지므로 false
console.log(Symbol() === Symbol()); // 심볼 함수 호출시 고유값이기 떄문에 === 비교하면 다른 값. false
console.log(typeof Symbol());// 타입은 Symbol로 찍힘

const nationility = Symbol('nationility');// 심볼은 객체의 키로 사용가능 , 지금 심볼의 값을 변수에 담아 키 처럼 쓰기 위해 할당하고, 컨스트로 변수를 RO화 시킴
const user = {
    name : 'jay'
};

user[nationility] = 'korean';
console.log(user[nationility]);
// 심볼이 객체의 키로 사용될 경우 for - in loop가 돌 지 않음 // 
for (let key in user){
    console.log(key);
}
/** 오브젝트 키를 반환하는 메서드 에서도 심볼을 이용한 키는 빠지며, JSON문자열을 만들때도 빠짐.*/
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));
console.log(JSON.stringify(user));

/**심볼을 이용한 키를 가져오려면, Object.getOwnPropertySymbols()<-메서드를 통해서 가져올 수 있음 */
const symbolProperties = Object.getOwnPropertySymbols(user);
console.log(symbolProperties); // Symbol(nationility)
console.log(user[symbolProperties[0]]); // korean ?? 심볼 프로퍼 타이즈 중에 0번을 뽑는것인듯. 네임키도 있기 떄문에. 따로 저장되는걸 알 수 있음

/**
 * 
 */

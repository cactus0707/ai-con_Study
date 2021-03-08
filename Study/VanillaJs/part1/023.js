//And 연산
console.log(true && true); // T
console.log(true && false); // F
console.log(('문장' == '문장') && (5== 5)); // T
console.log((5==5) && ('다른문장 1' == '다른문장 2')); // F

//OR 연산
console.log(true || false); // T
console.log(false || true); // T
console.log('문장'=='문장' || 5 == 10); //T

//NOT 연산 
console.log(!true); // F
console.log(!false); // T
/**
 * 아랫부분은 그. 코드 잘때 값이 있다 없다 체크 그 부분 이라고 이해하면 될 듯.
 */
console.log(!5); //  F
console.log(!'문장'); // F 
console.log(!!5); // T
console.log(!!'문장') // T


/**
 * AND 연산에서 연산자 우선순위. 그냥 순서대론지?
 */
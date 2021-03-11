console.log(Number.isInteger(0));
console.log(Number.isInteger(-1));
console.log(Number.isInteger(7777777777777777777777777777777777777));
console.log(Number.isInteger(null));
console.log(Number.isInteger(0/0));
console.log(Number.isInteger('Infinity'));
console.log(Number.isInteger(true));
console.log(Number.isInteger({}));
/**
 * 수학적으로 정의된 정수라면 모두 트루. 그게아니라면, false
 */
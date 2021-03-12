const bin = 1000010011;
const oct = 1023;
const hex = 213;

const dexByBin = parseInt(bin, 2); // bin을 2진수로 읽고, parseInt를 통해 10진수로 리턴됨
const dexByOct = parseInt(oct, 8); // oct를 8진수로 읽고, parseInt를 통해 10진수로 리턴됨
const dexByhex = parseInt(hex, 16); // hex를 16진수로 읽고, parseInt를 통해 10진수로 리턴
const hexByOct = parseInt(oct, 8).toString(16); // oct을 8진수로 읽고 parseInt를 통해 10진수로 리턴한 값을 다시 Number.toString(16)을 통해(리턴이 넘버형이라 타입추론하는 것 같음) 16진수로 변환후 리턴.

console.log(dexByBin);
console.log(dexByOct);
console.log(dexByhex);
console.log(hexByOct);


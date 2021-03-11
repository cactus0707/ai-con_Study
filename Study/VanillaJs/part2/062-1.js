function veirfyNumber(n){
    if( !n || Number.isNaN(n) ) return 0; // 난 형이거나  낫 널 -> 리턴 0
    return n;
}
const num1 = veirfyNumber(15); 
const num2 = veirfyNumber(undefined);
const num3 = veirfyNumber(null);
const num4 = veirfyNumber(NaN);

console.log(num1 + num2 + num3 + num4); // 숫자가 아닌 다른 형태여도, verifyNumber함수로 0 을 리턴 했기 때문에 15 출력됨

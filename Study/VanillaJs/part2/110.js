const val = 573.926;
console.log(Math.round( val ));
console.log(Math.round( (val * 10)) / 10); // 한자리를 올리고(*10) 나누기 10을 하면 둘째 자리에서 반올림
console.log(Math.round( (val*100)) / 100); // 2자리 올리고 (*100) 나누기 100 을하면, 셋쨰 자리에서 반올림
console.log(Math.round( (val/10)) * 10 ); // 한자리를 내리고 (/10) 곱하기 10을 하면 1의자리에서 반올림
console.log(Math.round( (val/100)) * 100 ); // 두자리를 내리고 (/100) 곱하기 100을하면 십의 자리에서 반올림.
/**
 * 반올림한 값은 라운드 함수가 리턴. 항상 라운드 함수는 소숫점 다음 값을 반올림함.소숫점 첫쨰자리. 이걸 이용해서 곱하고 나누고..하면됨.
 */
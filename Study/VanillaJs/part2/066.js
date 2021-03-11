/**
  * 어떤 내장 함수 객체에도 속하지 않은 전역에서 사용할 수 있는 내장 함수
  */
console.log(parseFloat(5.55))
console.log(parseFloat('5.55')) // 
console.log(parseFloat('5.55 숫자의 결과 값')) 
// 5.55 앞에 문자가 들어가게되면 플롯으로 변환이 되지 않기 때문에 NaN 반환. 마찬가지로 앞에서 부터 읽음

function checkNumber(val){
    if (typeof val !== 'number') throw '유효하지 않은 값입니다.';
    console.log('숫자형 값으로 확인 됬습니다');
}

checkNumber(100);
checkNumber('Wrong type');
console.log('완료');

/**
 * 씨플플의 경우 예외처리시 스택 언와인딩이 일어나 메모리 해제가 안되는 경우가 있따.
 * 자바의 경우에도 메모리 릭이 나는 경우가 있는데, 분명 예외 처리구문이 있는건 좋으나
 * 자바스크립트 예외처리 규칙? 룰이 어떨지 궁금하다. 이게 씨플플처럼 예외처리 스택이있어서 차곡차곡 가거나 점프하는 방식인지
 * 자바처럼 예외처리시 갈비지 컬렉터에 의존하나 다른 곳에서 참조 한다면 더 롤백을 시키는지 중요하다.
 * 우선 문형과 문법 그리고 손에 익지 않고, 각종 메서드와 라이브러리들에 익숙하지 않는 문제가 내가 가진 가장 큰 문제이므로 
 * 중요하다고 표시를 하고 남겨두기로 한다. 035,035-1
 */
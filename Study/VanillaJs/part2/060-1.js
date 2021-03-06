const str1 = '자바스크립트';
const str2 = new String('자바스크립트 ');

console.log(typeof str1); //string - primitive type
console.log(typeof str2); // object

console.log(str1 === '자바스크립트'); //primitive type 이고, 밸류도 같기 때문에 True.
console.log(str2 === new String('자바스크립트')); // 뉴 스트링, 다른 메모리를 가르키므로, False

console.log(str1.valueOf()); // 값은 .. 자바스크립트
console.log(str2.valueOf()); // 마찬가지.

/**
 *  Object : 다른 표준 내장 객체의 기본이 되는 일반 객체. 
 *  Number : 숫자형을 감싼 객체. 숫자형과 관련된 함수와 속성을 갖고 있음
 *  String : 문자형을 감싼 객체. 문자형을 조작하거나 특정 문자열을 찾고 추출 하는 등의 메소드와 속성을 활용 할 수 있음.
 *  Array  : 모든 배열은 Array.prototype 을 상속 받습니다. Array객체는 리스트 처럼 배열 역활을 지니며, 
 *           배열 요소를 추가/삭제하거나, 배열 자체를 순회/변경하는 다양한 메소드와 속성을 지니고있음.
 *  Math   : 수리연산을 하기 위한 속성과 메소드르 지닌 내장 객체. 다른 내장 객체와 달리, 
 *           Math는 new 를 통해 인스턴스를 생성하지 않음. static으로 정의된 속성과 method를 직접 호출 해야함.
 *  Date   : 시간에 관련된 객체. 현재 시간을 비롯하여, 국제 표준시에 따른 시간 변환 계산도 할 수 있음
 *  JSON   : Javascript Object Notation 을 의미함.
 *           이를 다른 자료형으로 변환 하거나, 다시 JSON으로 변환하는 등의 메소드를 제공하고 있음.
 *  RegExp : 정규 표현식은 특정 문자열 처리를 위해 사용하는 문자열 패턴 정의를 의미함. - 여러가지 문법(기준 들이 있음 크게 3가지)
 *           정규 표현식을 적용 가능한 문자열 탐색, 비교, 대체 등의 문자열 처리 메소드들을 지원 함.
 *  Map    : ES6 부터 표준으로 추가된 Map객체는 키:값 데이터 구조를 지닌 데이터집합체(collection)
 *           키 중복을 허용하지 않으며, 관련된 속성, 메소드들을 갖고 있음. Iterator를 통해 Map데이터를 순회한다는 특징이 있음
 *           - 씨플플 언오더드 맵 생각하면 될듯. 자세히 보긴 해야함. 이터레이터 순회는 씨피피에서도 권장하는 방식. 
 *  Set    : ES6부터 표준으로 추가된 객체형으로, 오직 값으로만 이루어진 데이터 집합체. 그래서 언뜻 배열과 비슷하게 느껴질 수도 있으나
 *           내부 속성,메소드 구성이 다르고 또한 Iterator로 순회된다는 점. 값의 중복성을 허용하지 않는 차이점.
 *           - 중복을 허용하지 않으니 씨피피 언오더드 셋을 생각하면되나, 
 * 
 * 맵과 셋 : 씨피피에서는 언오더드 맵/셋 은 해쉬로 구현되어있고, 오더드(중복허용)은 밸런스 트리의 한종류로 구성되어있음
 * 결국 자료구조 문제고 언제 어떻게 적절하게 쓸 것이냐가 관건. 이를 위해 맵과 셋은 세부적으로 공부가 더 필요함.
 * 
 */
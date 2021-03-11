const dialogue = [
    'Fear is the path to the dark side',
    'Fear leads to anger',
    'Anger leads to hate',
    'Hate leads to suffering',
    'I sense much fear in you'
];
console.log(dialogue.join());
console.log(dialogue.join('. '));
console.log(dialogue.join('.\n'));

/**
 * 
 * Array객체의 메소드 join은 각 배열 요소를 병합하여 하나의 문자열로 변환.
 * 아무런 delimiter를 주지 않으면 , <- 가 콘솔로그창에는 찍힘. 배열 표시는 없음. 하나의 문자열 반환.
 * 각 배열 요소마다 구분자를 삽임. 말그대로 join가능 delimiter 기능.
 * 
 */
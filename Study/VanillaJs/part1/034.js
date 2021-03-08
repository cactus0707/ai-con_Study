var greeting_expression = function(name) { //함수 표현식 으로
    console.log('Hi, ' + name);
}

function greeting_declaration(name){ // 함수 선언문으로 // 
    console.log('Hi, ' + name);
}

greeting_expression('CHLOE');
greeting_declaration('Chloe');

/**
 * 자바스크립트도 함수명이 그함수를 특정하는 함수 리터럴이다.
 * 멤버 함수들간의 관계는 어떻게 될 것인지.?
 */
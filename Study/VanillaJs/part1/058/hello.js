export const version = 'v1.0';

export var personA = {
    name: 'a'
};

export function add(a, b){
    return a + b;
}

export class Person{
    constructor(name){
        this.name = name;
    }
}

/**
 * class Person{ ......
 * }
 * 
 * const version{ .......
 * }
 * 
 * export Person //문법 오류. 
 * export{ version, Person} <- 이렇게 컬리 브라캣 안에 써서 내보내야함.
 * 
 * 
 * import {personA} from './hello.js'
 * personA = 'v2'; <- 읽기만 가능하고, 해당 이름에 다른 값을 할당할 수 없습니다.
 */
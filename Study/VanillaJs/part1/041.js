if(true){
    var functionScopeValue = 'global'; //함수 단위의 유효 범위를 가지게되어 if 문에 정의 했어도, 블록 밖에서 접근이 가능. ?
                                       //?함수 단위 인데 왜 밖에서 가능?
    let blockScopeValue = 'local'; //블록 단위의 유효 범위를 가지게 되어 블록 밖에서 접근 할 경우 레퍼런스 에러
}

console.log(functionScopeValue);
console.log(blockScopeValue); // ReferenceError
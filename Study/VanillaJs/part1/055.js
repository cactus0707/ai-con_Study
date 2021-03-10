var namespaceA = (function(){
    var privateVariable = '비공개 변수';
    return{
        publicApi: function(){
            console.log(privateVariable + '를 접근할 수 없습니다.');
        }
    }
})(); // (function(){})(); <-이 패턴을 통해서, namespaceA 변수에서 리턴한 객체를 할당함. - 함수를 할당하는게아니라 그 함수에서 리턴한 객체를 할당.
//하고 즉각 호출패턴 /
/**
 * 함수 안에 선언된 변수는 함수 내부에서만 접근이 가능함. 비공개 영역이됨 ( 리턴객체를 갖고 있기 때문에)
 * 그러나, namespaceA 는 여전히 전역에서 쓰이고 있음. 즉, 공개 API가 되는 셈.
 */

namespaceA.publicApi();
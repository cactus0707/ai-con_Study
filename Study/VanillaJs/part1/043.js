var person = 'harin';

function print(){
    var person2 = 'jay';

    function innerprint(){
        console.log(person);
        console.log(person2);
    }
    innerprint();
    console.log('print finished');
}

print();
console.log('finished');

/**
 * ExecuyionContext = {
 *      LexicalEnvironment:{
 *          EnvironmentRecord:{
 *          },
 *      OuterLexicalEnvironment :참조
 *      }
 *}
 */

 /**
  * 호이스팅 단위는 렉시컬 //
  */
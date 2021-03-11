/**
 *  MDN이나 다른 예제들을 통해서 익혀야할 부분.
 *  자주 쓰일 여지가 충분하다.
 * ex)Nested JSon에서 어레이로 보낸후, 문자열 작업을 해야할때, 워드 벡터로 보내서 머신러닝 돌릴 때 등.
 * 다른 방법이 있을 수도 있으나, 한 계층에 데이터가 모두 모여 있는 건 중요하다. 
 */
const arr = [1, [2, 3], [4, 5, 6], ['배열','나열하기'], 'JavaScript'];

const result = arr.reduce((acc, el)=>{
    return acc.concat(el);
    },[]); // 하나의 배열에 컨캣연산으로 나눠진 배열 요소들을 접근하여 한 배열로 만듬.

    console.log(result);
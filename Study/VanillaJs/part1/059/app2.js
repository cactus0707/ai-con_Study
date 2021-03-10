import * as add from './add.js';// add.js의 모든 모듈을 가져오고 이를 add라고 씀.
import './sideeffect.js'; // 이렇게 가져오면 해당 js 파일이 실행되고 아무 것도 가져오지 않음. hello!가 출력 됨.
// 그리고 이때 실행되었으므로, hello함수가 전역으로 선언됨. cpp 헤더 파일 부르듯이 불려짐.

console.log(add.version);
const added = add.default(1,2); // 디폴트펑션으로 지정된 디폴트 펑션을 가져옴.
console.log(added);
hello('harin'); // 
import {version as moduleVersion} from './version.js'; //version.js 에서 version 모듈을 가져오는데, as 키워드로, 이 파일에선 moduleVersion으로 쓰겠다라는 의미. 글자그대로 as 의 의미
// as 키워드는 export에도 가능. export { version as ver}; <- 이런식.
const version = 'v0';
console.log(moduleVersion);
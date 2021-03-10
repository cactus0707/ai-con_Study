import {hello} from './hello.js';
hello('es6 module');
/**
 * 의존 관계 그래프에서는 최상위 루트가 필요한데 , 이 루트모듈이 애플리케이션의 시작지점.
 * 자바나 C언어에서 메인메소드와 같다고 생각해도됨.
 * app.js가 루트 모듈이라고 볼 수 있음.
 */

 /* 
 ㅇ런타임 로딩 : 런타임 로딩은 의존관계가 형성된 모듈들을 애플리케이션 구동 시점에 비동기 HTTP 요청으로 불러오고 실행 됩니다.
 이떄 모듈 로더가 필요한데, system.js requir.js 를 이용 할 수 있습니다.
 
 ㅇ 번들링 : 번들링은 의존관계가 형성된 모듈들을 하나의 파일로 묶어 줍니다. 그리고 애플리케이션이 구동할 떄 묶여진 이 파일을 로드합니다. 
 번들링은 개발시점에 이루어 지게 되고, 브라우저에서 이루어지지 않고, 대체로 node.js 환경에서 이루어지게 됩니다. 대표적인 모듈 번들러로는
 웹팩이 있습니다.

 크롬 61 버전부터 <script type=module></script>를 지원 함(안쓸 것같음. 호환성 문제.)
 */
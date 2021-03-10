console.log('hello');
window.hello = function hello(name){ // 이렇게 윈도우에 메소드를 추가하면, window를 통하지 않고, 직접 해당 메소드의 호출이 가능 함.(window는 브라우저 전역객체)
    console.log('hello' + name);
}
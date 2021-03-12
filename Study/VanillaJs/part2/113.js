/**
 * 그러니까, Date 객체안에는 Prototype(거의 모든 객체는 prototype을 갖고 있다.) 에 yyyymmdd를 정의할 수 있다.
 */
Date.prototype.yyyymmdd = function() { //Date객체 protoType으로 yyyymmdd 이름의 메소드를 정의합니다.
    const yyyy = this.getFullYear(); //함수 내 this는 Date객체를 가르킴. Date의 getFullyear를 통해 연도를 가져옴.
    const mm = this.getMonth() < 9 ? // 
        `0${this.getMonth() +1}` : this.getMonth() + 1; // 기본적으로 getMonth는 0부터 시작하므로 양 값에 둘다 + 1을 시켜준다. yy자리를 맞추기위해 0을 붙여준다.
        const dd =this.getDate() < 10?
        `0${this.getDate()}` : this.getDate(); // getDate의 경우는 +1 을 시켜줄 필요가 없고, mm 자리를 맞추기 위해 10 보다 작을때 0을 붙여준다

    return '' + yyyy + mm + dd;
}

const date = new Date();
console.log(date.yyyymmdd());
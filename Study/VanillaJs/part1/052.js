class Chart{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }

    drawLine(){
        console.log('draw line');
    }
}

class BarChart extends Chart{
    constructor(width,height){
        super(width, height) // 부모의 생성자 함수를 가르킴 - extends Chart
    }

    draw(){
        this.drawLine();
        console.log(`draw ${this.width} X ${this.height} barChart`);
    }
}

const barchart1 = new BarChart(100, 100);
barchart1.draw();
/**
 * 자바스크립트는 새로운 기능이 추가되면 하위 버전의 코드로 변환이 되어야한다.
 * 그래서 ES6의 클래스는 생성자 함수로 반환이 변환이 되고( 앞선 예제 확인), extends키워드의 상속은 prototype기반 상속 코드로 변경 가능.
 * 즉. 클래스는신택스 슈가에 불과하다.
 * 결국 자바스크립트는 여전히 프로토 타입 기반의 상속이다.
 * 
 * 내가 알아야 할 것은 이 프로토 타입 기반 상속에 대해 찾아야 함..
 */
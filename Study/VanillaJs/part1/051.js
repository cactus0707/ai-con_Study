/**
 * 내가 아는 그 클래스라기보다, 신택스 슈가인 듯 하다.
 */
class Cart{
    constructor(){ // 생성자 함수가 constructor 로 고정됨. 이전의 함수 방식이 아님-클래스 안에서는..
        this.store = {}; // 하나의 생성자만 가능하고, new 키워드로 객체 생성시 호출됨. store프로퍼티에 빈 객체 를 할당해놈. 인자를 받아서 속성으로 추가하거나, 속성의 초기 값을 넣는게 가능.
    }
    addProduct(product){
        this.store[product.id] = product; //
    }
    getProduct(id){
        return this.store[id];
    }
}

const cart1 = new Cart();

cart1.addProduct({id: 1, name: '노트북'});
console.log(cart1.store); //스토어 아래에 이렇게 저장됨. {'1' : {id: 1,name: '노트북'}}

const p = cart1.getProduct(1);
console.log(p);//{id: 1, name: '노트북'}
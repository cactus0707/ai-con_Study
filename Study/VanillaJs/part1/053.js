class Product{
    static build(name, price){
        const id = Math.floor(Math.random() * 1000);
        return new Product(id, name, price);
    }

    static getTaxPrice(product){
        return (product.price * 0.1) + product.price;
    }

    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class DeposableProduct extends Product {
    depose(){
        this.depose = true;
    }
}

const gum = Product.build('껌',1000);
console.log(gum);

const clothes = new DeposableProduct(1, '옷', 2000);
const taxprice = DeposableProduct.getTaxPrice(clothes);
console.log(taxprice);

/**
 * 이때 폐기가능 상품 클래스에서 프로덕트를 상속받는데, 스태틱 메서드 또한. 상속 받는다. 
 * 부모에서 선언한 스태틱 메서드는 자식에게 상속이 되어지며, 부모의 인스턴스가 (메모리에 올리지 않아도) 생성 되어있지 않더라도, 
 * 자식에서 사용 가능하다.
 */
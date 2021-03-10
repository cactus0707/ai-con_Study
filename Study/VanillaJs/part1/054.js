/**
 * 크롬 콘솔에서 확인할 것. 코자바 3장 디스 보고 해석 할 것.
 */

this.valueA = 'a';
console.log(valueA);
valueB = 'b';
console.log(this.valueB);

function checkThis(){
    console.log(this);
}

function checkThis2(){
    "use strict";
    console.log(this);
}
checkThis();
checkThis2();

function Product(name, price){
    this.name = name;
    this.price = price;
}

const Product1 = Product('가방', 2000);
console.log(window.name);
console.log(window.price);

const product2 = {
    name : '가방2',
    price : 3000,
    getVAT(){
        return this.price/10;
    }
};

const valueOfProduct2 = product2.getVAT();
console.log(valueOfProduct2);

const calVAT = calVAT.bind(product2);
const VAT2 = calVAT();
console.log(VAT3);

const counter1 = {
    count: 0,
    addAfter1sec(){
        setTimeout(function(){
            this.count += 1;
            console.log(this.count);
        },1000)
    }
};

counter1.addAfter1sec();

const counter2= {
    count: 0,
    addAfter1sec(){
        setTimeout(()=> {
            this.count += 1;
            console.log(this.count);
        }, 1000)
    }
};
counter2.addAfter1sec();
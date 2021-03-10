/**
 * 조금은 의미가 다르지만, 자바의 객체 상속 계층도 , (결국 모든 객체의 조상은 오브젝트라는 객체)를 상상하면서 풀어보니 이해가됨.
 * 자바스크립트에서 생성자 함수로부터 만들어진 객체는, 그 생성자 함수의 프로토타입 객체를 상속함. 익히 알고 있는 함수 원형을 얘기할때 프로토 타입이라기보다, 
 * 글자그대로 프로토 타입이라고 이해하면 될 듯.
 * 
 * 즉, 모든 인스턴스는 해당 생성자 함수의 프로토타입 객체의 속성과 메소드들을 사용 할 수 있음
 * 자바와 다르게, 자바스크립트는 이 체인을 타고가다보면 결국 null을 만남.
 * 
 * 모든 함수는 prototype 속성으로, 프로토 타입 객체를 가짐. 
 * 또한, 모든 객체는 __proto__속성을 가짐.  이 속성은 해당 객체를 생성한 생성자 함수의 prototype객체를 가르킴. -> 그래서 생성자 함수를 통해서 타입을 정의 할 수 있음.
 * 
 * 프로토 타입, 객체 부분은 메모리 추상화 봐야 할 듯. 덤으로 Object모델 봐야함우선은 빠르게 훑는 걸 목표로함
 */
function Storage(){
    this.dataStore = {};
} //Storage 생성자 함수를 정의힘. 인스턴스에 떠 있는 스토리지 객체의 dataStore를 빈 객체 {} 할당 해줌.
Storage.prototype.put = function(key, data){ // 스토리지 생성자 함수의 프로토타입에 있는 put을 상속받아 재정의
    this.dataStore[key] = data; // 키를 매개 변수로 받아 [] <- 오퍼레이션 으로 접근 후 data 를 할당 .
} // 세터 메서드 역활 -> 주어진 키에 해당 하는 값을 dataStore에 할당.
Storage.prototype.getData = function(key){ // 스토리지 생성자 함수의 프로토타입에 있는 getData를 상속 받아 재정의
    return this.dataStore[key]; // 매개변수로 받아 그 키를 찾아가([]오퍼레이션) 이 객체의 키에 해당하는 값을 리턴
}

const productStorage = new Storage(); // 생성자 함수를 이용해 객체 할당.productStorage에 할당(연결했다고 생각하면됨)
productStorage.put('id001', {name: '키보드', price:2000});
/**
 * dataStore : {
 *              "id001" : {
 *                          name: '키보드'
 *                          price: 2000}
 *                         }
 * }
 */
console.log(productStorage.getData('id001'));

function RemovaleStorage(){
    Storage.call(this); // 스토리지 객체에 .call 아마도 Object <- 가 가지고 있는 (상속받은 메서드) // 에 디스를 넣음. 이때의 this는 아마도 스토리지 생성자 함수의 this.
}

RemovaleStorage.prototype = Object.create(Storage.prototype); 
// 리무브스토리지의 프로토 타입에 오브젝트 크리에잇 메서드를 이용해서 스토리지 프로토 타입을 상속 받게함. ( 스토리지 프로토 타입 <-리무버블 스토리지(여기에 할당했기떄문))
RemovaleStorage.prototype.removeAll = function(){
    this.dataStore = {};
} // '

const productStorage2 = new RemovaleStorage();
productStorage2.put('id001', { name: '키보드',price: 2000});
productStorage2.removeAll();
const item2 = productStorage2.getData('id001');
console.log(item2);
/**
 * 이거보고 33가지 자바스크립트 컨셉
 */
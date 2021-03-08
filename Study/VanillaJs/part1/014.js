var store = {snack : 1000,
             flower : 5000,
             beverage : 2000};

for(var item in store){
    if(!store.hasOwnProperty(item)) continue

    console.log(item + '는 가격이 ' + store.item + '입니다');
}


/**
 * cpp for each문이랑 같은 역활인듯. 객체와 그 요소들 루프돌릴때 유용할 것 같다.
 * For - in 문을 쓸때는 hasOwnproperty 이용하여 그 객체에 요소가 있는 지 없는지 확인 할 것 -> 습관 들일 것.
 * 
 * [] 브라켓으로 도 접근 가능하지만 . 오퍼레이션으로도 요소 접근 가능.
 * 당연한 얘기지만 키값으로 기준 잡고 돌림
 */
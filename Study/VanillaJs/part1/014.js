var store = {snack : 1000,
             flower : 5000,
             beverage : 2000};

for(var item in store){
    if(!store.hasOwnProperty(item)) continue

    console.log(item + '는 가격이 ' + store[item] + '입니다');
}


/**
 * cpp for each문이랑 같은 역활인듯. 객체와 그 요소들 루프돌릴때 유용할 것 같다.
 * For - in 문을 쓸때는 hasOwnproperty 이용하여 그 객체에 요소가 있는 지 없는지 확인 할 것 -> 습관 들일 것.
 * 
 * [] 브라켓->은 그 요소에 대한 접근(위에 item을 보면 그 요소에 대한 접근으로 썻는데, 따로 연산이 있음).
 * .오퍼레이션은 그 특정 요소에 대한 접근. (store.snack)
 * 씨플플 이터레이터 용법 이라 이해하면됨.
 * 당연한 얘기지만 키값으로 기준 잡고 돌림
 */
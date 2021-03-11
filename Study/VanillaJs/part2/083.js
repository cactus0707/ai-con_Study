const ship= {
    max: 4,
    passengers: [],
    onBoard: function(name){ //속성에 특정 함수 정의.
        if(this.passengers.length === 4){ //this 이 객체의 길이를 확인 (ship객체 - new는아님.)
            console.log(`This ship is full. ${name} can not board this ship.`);
        } else {
            this.passengers.push(name);
            console.log(`${name} boarded.`);
        }
    }
}

ship.onBoard('chloe');
ship.onBoard('jay');
ship.onBoard('david');
ship.onBoard('asher');
ship.onBoard('daniel');

console.log(ship.passengers);
















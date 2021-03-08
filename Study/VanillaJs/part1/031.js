var obj = {};
for (var i =0; i < 4; ++i){
    obj['key'+ i] = i;
}

console.log(obj);

var profile = 'chloe:30';
var person = {
    [profile] : true,
    [profile.split(':')[0]]: profile.split(':')[1]
};

console.log(person);

/**
 * 객체 명을 변수로 담고, 그 변수를 키로 이용하는 방법.
 * 11번째 줄에 스플릿으로 분리 후 0번째 인덱스 클로이를 키로하고, 1번쨰 인덱스 30을 값으로 하는 객체로 퍼슨을 만듬.
 */
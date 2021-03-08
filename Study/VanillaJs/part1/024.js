var condition = 5 > 10;
condition ? console.log('Left') : console.log('Right');

var result = condition ? (
    console.log("트루일떄"),
    "표현식1" // 참일때 이부분이 리절트에 할당됨(리턴값).
) : (
    console.log("false 일때"),
    "표현식2" // 폴스 일때 이 부분이 리절트에 할당됨(리턴값)
);
console.log(result);
const obj = {
    movie: 'Sunny',
    music: 'Like Sugar',
    style: 'Retro',
    price: Infinity
};

const arr =Object.keys(obj);

console.log(arr);
/**
 * 객체에 key만 추출하기(keys)
 * objㅇㅔ 객체 리터럴을 대입.
 * Object 메소드의 Keys메소드는 해당 메소드의 키만 뽑아서 출력해줌. - 콘솔로그에 인자로 Object.keys(obj)해도 동일한 형식으로 보여줌
 * 그러나, 어레이에 담아 가는 편이. 안전.
 */
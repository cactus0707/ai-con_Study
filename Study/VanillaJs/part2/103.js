const obj = {
    movie: 'Sunny',
    music: 'Like Sugar',
    style: 'Retro',
    price: Infinity
};


const modifiedObj = Object.entries(obj);
console.log(modifiedObj);
/**
 * 객체를 배열로 변환하기(entries)
 * 배열안에 배열 형식으로 담겨서 entries가 뽑아줌.
 * 마찬가지로, 추출할때, 리커시브하게 만들어야할 듯.
 */
const sentences = ['    ABC, abc','ABC abc  ', `first
second third
        forth
sentence


`];

const filterSentence = (sentences) => {
    const filtered = [];
    sentences.forEach(s => {
        filtered.push(s.trim());
    }); //각각의 요소에대해 포 이치문이 돌면서 s => {함수를 실행하고, s로 반환.}
    return filtered;
} // 화살표 함수? 에 대해서 이해가 부족한거같음 다시 찾아 볼것 복습시.

console.log(filterSentence(sentences));

/**
 * 트림 메소드는 문자열의 양 끝의 공백, 탭 줄바꿈을 제거.
 */
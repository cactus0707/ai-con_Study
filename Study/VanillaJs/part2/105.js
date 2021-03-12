/**
 * 객체에 속성 추가 못하게 만들기.(seal)
 * 속성을 추가/삭제를 불가능하게 만듬.
 * 단!! 기존속성에 대해서는 변경은 가능함.
 * 예를들어 OOP 시도할때 생성자에 이 옵션이 있으면, 좋을 것 같음. Strict하게 관리 가능
 */

 const album = {
     name: 'LOVE YOURSELF'
 };

 album.song = 'Euphoria';
 album.singer = 'RM';

 console.log(album);

 Object.seal(album);

 album.comment = 'Answer';
 album.singer = 'JK';
 delete album.name;

 console.log(album);


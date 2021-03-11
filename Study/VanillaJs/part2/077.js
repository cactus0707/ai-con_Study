/**
 * '문자열'.includes(문자열, 인덱스);
 * 마찬가지로, 두번쨰 인자의 인덱스는 필수값은 아님. -> 없으면 인덱스 0 부터 검색함
 * 두번째 인자를 주게되면, 그 인덱스 부터 검색을 시작함. 폐구간임 [ <- 시작인덱스
 */

 const str = 'Make your lives extraordinary';

 console.log(str.includes('Make'));
 console.log(str.includes('Make',1));
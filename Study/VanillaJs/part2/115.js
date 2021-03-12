/**
 *  
 */
Date.daysDiff = (date1, date2) => {
    if((!(date1 instanceof Date)) || !(date2 instanceof Date)) return ''; // 타입 체킹

    const d1 = date1.getTime(); // 밀리세컨드 단위로 반환함
    const d2 = date2.getTime(); // 밀리세컨드 단위로 반환함

    let diff = d2 - d1;

    const seconds = Math.floor( (diff = diff/1000) % 60); //단위 환산
    const minutes = Math.floor( (diff = diff / 60) % 60); // 단위 환산
    const hours = Math.floor( (diff=diff)/60 % 24); // 단위 환산
    const days = Math.floor(diff /24); // 단위환산.

    return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds}, second`;
}

var from = new Date(2000, 0, 1); // 한국 시간으로, 2000년 1월 1일 00시 00분 00초 를 의미함.
var to = new Date(from.getFullYear() + 1, from.getMonth() +3,
from.getDate() +5, from.getHours() +4, from.getMinutes() +30, from.getSeconds() + 50);

console.log(`From > ${from}`)
console.log(`To > ${to}`)
console.log(Date.daysDiff(from, to));
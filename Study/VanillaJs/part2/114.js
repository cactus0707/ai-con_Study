/**
 * UTC 기준 날짜 출력 하기.
 * 특별한 내용은 없으나, 알고 있어야함 표현방식.
 */
const date = new Date();
const dateUTC = Date.UTC(
    date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
    date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()
);

console.log(new Date(dateUTC));
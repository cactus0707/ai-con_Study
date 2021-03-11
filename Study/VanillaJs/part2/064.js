function callRoll(students){
    if (!Array.isArray(students)) return;

students.forEach((students)=>{
    console.log(`Are you here, ${students}`);
}); // 스튜던츠 배열 //람다식 쓰듯이 썻음. 화살표 함수.

}

const students = ['Jun', 'Ali', 'Murry', 'Toby'];
callRoll(students);
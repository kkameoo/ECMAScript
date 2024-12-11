// Date 생성자
let now = new Date() // 현재 시간
console.log(now);

let today = new Date(2024, 11, 11); // month는 0부터
console.log(today);

let time  =  new Date(2024, 11, 11, 10, 2, 0);
console.log(time);

console.log("년도 : ", now.getFullYear());
console.log("월 : ", now.getMonth() + 1);
console.log("요일 : ", now.getDay()); // 일요일 : 0
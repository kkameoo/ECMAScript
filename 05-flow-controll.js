// if ~ else if ~ else
// switch ~ case
// for, while, do while
// 모두 C계열 문법과 거의 동일

// 연습문제 1-1) for 문 구구단
// 2단 ~ 9단까지 루프 돌면서 출력

for(let j = 2; j < 10; j++) {
    for(let i = 1; i < 10; i++) {
        process.stdout.write(i +"*" + j + "=" + (j*i)+ " ");
    }
    console.log();
}
console.log("----------");

// 연습문제 1-2) while 문 구구단
// 2단 ~ 9단까지 루프 돌며 출력
let j = 2;
while(j < 10) {
    let i = 0;
    while(i < 9){
        i++;
        process.stdout.write(i +"*" + j + "=" + (j*i)+ " ");
    }
    j++;
    console.log();
}
console.log("----------");

// 연습문제 2-1) for 문을 이용해서 별 그리기
/*

*****
****
***
**
*

*/
for(let j = 0; j < 5; j++){
    for(let i = j; i < 5; i++) {
        process.stdout.write("*");
    }
    console.log();
}
console.log("---------");
// 연습문제 2-2) while 문을 이용 별그리기
j = 0;
while(j < 5) {
    j++;
    let i = j;
    while(i < 6) {
        i++;
        process.stdout.write("*");
        
    }
    console.log();
}

// TODO : for ... in
//   객체의 속성 key를 반복하는 루프


// TODO : for ... of
//  컬렉션 객체(배열)의 요소 순환

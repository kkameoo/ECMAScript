// 함수
// 함수 선언문
// 입력 -> 함수 -> 로직 -> 출력
// 코드의 집합을 다른 곳에서 재사용

function sum(a, b) {
    return a + b;
}
// sum - 함수 이름
// a, b - 함수 매개변수, 입력 
// return - 출력

console.log(sum(10, 20));
console.log(sum(30, 40));

// 함수 표현식 : 이름이 없는 함수 -> 익명 함수
const asum = function(a, b) {
    return a + b;
}

console.log(typeof asum, asum(10, 50));

// Functional Programming (함수형 프로그래밍)

// 매개변수의 이해
console.log("============ 매개변수");
// 매개변수의 선언과 별도로 전달된 모든 매개변수가 arguments라는 함수 내장 매개변수로 전달

function getNumberTotal() { // 매개변수 정의 없음
    // console.log("전달된 매개변수 : ", arguments);
    // 전달받은 모든 매개변수를 합산해서 리턴
    let result = 0;
    for(let i = 0; i < arguments.length; i++){
        if(typeof arguments[i] === "number")
            result += arguments[i];
    }
    return result;
}

console.log(getNumberTotal(1, 2, 3, 4, 5, 6));
console.log(getNumberTotal(1, 2, "3", 4, 5));

// JavaScript의 함수는 1급 시민
// - Number, String 과 동등한 지위를 갖는다
// - 변수에 할당될 수 있고, 다른 함수의 매개변수로 전달될 수 있다
// - 함수의 결과로 리턴될 수 있다 -> 고계 함수
console.log("============= 콜백 함수");
function sandbox(val1, val2, func) {
    if (typeof func === "function")
        return func(val1, val2)
};

sandbox(3, 4, function(v1, v2) {
    console.log(v1 + v2);
});

sandbox(3, 4, function(v1, v2) {
    console.log(v1 * v2);
});

// 함수를 전달해 주고, 함수 내부에서 거꾸로 호출되는 함수
// -> Callback 함수
// 데이터 처리함수, 이벤트 처리함수 등에서 활용

// 화살표 함수 :  =>
// 즉석에서 함수를 만들어야 할 때 유용
console.log("================== 화살표 함수");
const f1 =  function() {
    return "hello";
};
console.log(f1());

const f1Arrow = () => "hello";
console.log(f1Arrow());

const f2 = function(name) {
    return "Hello, " + name;
};

console.log(f2("홍길동"));
const f2Arrow = (name) => "Hello, " + name;
console.log(f2Arrow("윤석열"));

console.log(sandbox(3, 4, (v1, v2) => v1 * v2));
console.log(sandbox(3, 4, (v1, v2) => v1 / v2));
// 전개 연산자
console.log("============= 배열 전개 연산");

let arr1 = ['홍길동', '장길산'];
let arr2 = ['임꺼정', '전우치'];
// arr1, arr2 하나로 합치려면...

let combined = [];
// 방법 1
combined = [arr1[0], arr1[1], arr2[0], arr2[1]];
console.log("Combinde 1 : ", combined);

// 방법 2
combined = arr1.concat(arr2);
console.log("Combined 2 : ", combined);
// 방법 3

combined = [].concat(arr1, arr2);
console.log("Combined 3 : ", combined);

// ES6 방식
combined = [...arr1, ...arr2];
console.log("ES6 Combined : ", combined);

// 배열의 전개
console.log("========== 배열의 전개");
console.log("arr1 : ", arr1);

// let first = arr1[0];
// let second = arr1[1];
let [first, second, third, ...others] = arr1;
console.log(first, second, third = "empty", others);

[first, second, third, ...others] = combined;
console.log(first, second, third = "empty", others);

console.log("============ 객체 전개 연산");
let obj1 = { one : 1, two : 2, other : 0};
let obj2 = { three : 3, four : 4, other: -1};

combined = {
    one : obj1.one,
    two : obj1.two,
    three : obj2.three,
    four : obj2.four,
    other : obj2.other // 중복 속성
}

console.log("Combined 1 : ", combined);

// 방법 2
combined = Object.assign({}, obj1, obj2);
console.log("Combined 2 : ", combined);

console.log("============= ES6 방식");
combined = {
    ...obj1, // obj1 모든 속성을 전개 (one two other)
    ...obj2, // obj2 모든 속성을 전개 (three four other)
}
console.log("ES6 combined : ", combined);

// 연결 순서 변경
combined = {
    ...obj2,
    ...obj1
}
console.log("ES6 combined2 : ", combined);

console.log("============ 객체 전개 할당");
console.log("object : ", combined);

let { other, ...remains } = combined;
console.log(other, remains);

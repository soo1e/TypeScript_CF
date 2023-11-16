/**
 * Defining Function
 */

// function printName(name){
//     console.log(name);
// }
// name이 암묵적으로 any타입이 된다.


// 콜론을 이용해 타입 지정
function printName(name: string) {
    console.log(name);
}

// 파라미터의 갯수에 상관 없이 타입 지정 가능
function returnTwoCouples(person1: string, person2: string) {
    return `${person1}와 ${person2}는 사귀고 있습니다.`
}


console.log(returnTwoCouples('나', '너'));
// returnTwoCouples(0, 1); -> 타입 방지 가능
// returnTwoCouples('나'); -> 한 개만 넣는 것도 불가능
// returnTwoCouples('나', '너', '레드벨벳'); -> 2개의 arguments를 받아야하는데 3개라서 불가능

/**
 * Optional Parameter : type or undefined
 */
function mulitplyOrReturn(x: number, y?: number) {
    if (y) {
        return x * y;
    } else {
        return x;
    }
}

console.log(mulitplyOrReturn(10, 20));
console.log(mulitplyOrReturn(10));

function multiplyOrReturn2(x: number, y: number = 20) {
    return x * y;
}

console.log(multiplyOrReturn2(10));
console.log(multiplyOrReturn2(10, 30));

/**
 * 나머지 매개변수
 */
function getInfiniteParameters(...args: string[]) { // string으로 구성된 무한한 parameters
    return args.map((x) => `너무좋아 ${x}`);
}

console.log(getInfiniteParameters('나', '너', '우리'))
// console.log(getInfiniteParameters(1, 2, 3)) -> number라서 불가능

/**
 * Return Type
 */
function addTwoNumbers(x: number, y: number) {
    return x + y; // number + number 이므로 number
}

addTwoNumbers(10, 20);

function randomNumber() {
    return Math.random() > 0.5 ?
        10 : '랜덤';
}

randomNumber(); // 10 | '랜덤'

function subtractTwoNumbers(x: number, y: number): number{
    // return '이게 반환이 되나?';
    return x - y;
}

const subtracTwoNumbersArrow = (x: number, y: number) : number => {
    return x - y;
}

/**
 * 특수 반환 타입
 * 
 * void / never
 */

// void 타입은 반환을 할 것이 없을 때 사용
function doNotReturn(): void{
    console.log('저는 반환을 하지 않습니다.');
}

doNotReturn();

// never 타입은 함수가 끝나지 않는 상황을 만들 때 사용
function neverEndingLoop() : never{
    while(true){

    }
}

function throwError2() : never{
    throw Error();
}
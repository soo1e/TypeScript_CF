/**
 * Statement and Expression
 */

// statement (문장)
function addTwoNumbers(x: number, y: number) {
    return x + y;
}

// expression (표현식)
const addTwoNumbersExp = (x: number, y: number) => {
    return x + y;
}

// 둘의 차이

/**
 * Statement : 문장으로 선언하면 다 정의해줘야한다.
 */
function add(x: number, y: number) : number{
    return x + y;
}

function subtract(x: number, y: number) : number{
    return x - y;
}

function multiply(x: number, y: number) : number{
    return x * y;
}

function divide(x: number, y: number) : number{
    return x / y;
}

/**
 * Expression : 함수를 타입화해서 함수를 선언할 때 유용하다.
 */
type CalculationType = (x: number, y: number) => number;

const add2 : CalculationType = function(x, y){
    return x + y;
}

const subtract2 : CalculationType = function(x, y){
    return x - y;
}

const multiply2 : CalculationType = function(x, y){
    return x * y;
}

const divide2 : CalculationType = function(x, y){
    return x / y;
}
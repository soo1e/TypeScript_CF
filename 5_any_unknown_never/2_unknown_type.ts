/**
 * Unknown Type : any type과 비슷하지만 unknown이 좀 더 관대하다.
 */

let anyValue: any;

// 어느 값이라도 넣을 수 있다.
anyValue = 24;
anyValue = '아이유';
anyValue = false;
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;

let unknownValue: unknown;

// unknown 또한 어떤 값이든 선언해줄 수 있다. 하지만 할당에서 차이가 생긴다.
unknownValue = 24;
unknownValue = '아이유';
unknownValue = false;
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;

// 어떤 타입의 변수를 새로 선언하든 그 값에는 any 타입의 다른 변수 값을 할당을 할 수가 있다.
let anyType: any = anyValue;
let unknownType: unknown = anyValue;
let booleanType: boolean = anyValue;
let arrayType: string[] = anyValue;
let objectType: {} = anyValue;
let nullType: null = anyValue;
let undefinedType: undefined = anyValue;

// unknown 타입을 갖고 있는 값의 경우, any 타입을 갖고 있는 경우나 unknown 타입의 변수에만 할당이 가능하다.
// 나머지 primitive 타입은 할당 할 수가 없다.

// let anyType: any = unknownValue;
// let unknownType: unknown = unknownValue;
// let booleanType: boolean = unknownValue;
// let arrayType: string[] = unknownValue;
// let objectType: {} = unknownValue;
// let nullType: null = unknownValue;
// let undefinedType: undefined = unknownValue;

anyValue.toUpperCase();
anyValue.name;
new anyValue();

// unknownValue.toUpperCase();
// unknownValue.name;
// new unknownValue();


// type predicate
function isString(target: unknown) : target is string{
    return typeof target === 'string';
}

let testVal: unknown;

if(isString(testVal)){
    testVal;
}

/**
 * Union Type
 */
// 다른 primitive 타입으로 union 타입을 선언하면 unknown으로 흡수된다. any 제외하곤.

type uOrString = unknown | string;
type uOrBoolean = unknown | boolean;
type uOrNumber = unknown | number;
type uOrAny = unknown | any;
type anyOrU = any | unknown;

/**
 * Intersection Type : 역으로 흡수가 된다.
 */

type uAndString = unknown & string;
type uAndBoolean = unknown & boolean;
type uAndNumber = unknown & number;
type uAndAny = unknown & any;
type anyAndU = any & unknown;

/**
 * Operator 사용
 */
let number1: unknown = 10;
let number2: unknown = 20;

// 모르는 타입이기 때문에 연산 불가
// number1 + number2;
// number1 - number2;
// number1 * number2;
// number1 / number2;

// 같은지 비교는 가능
number1 === number2;
number1 == number2;
number1 !== number2;
number1 != number2;
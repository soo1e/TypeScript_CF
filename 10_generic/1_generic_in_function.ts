/**
 * Generic 함수에서 사용하기
 */

function whatValue(value: any) {
    return value;
}

const value = whatValue('test'); // any 타입

// 타입의 변수화 <> T means Type
// 제네릭을 쓰면 타입의 선언을 실제 실행할 때로 미룰 수 있다.
function genericWhatValue<T>(value: T): T {
    return value;
}

const genericResult1 = genericWhatValue<number>(123); // number 타입

let genericResult2 = genericWhatValue('123') // string 타입

function multipleGenerics<X, Y, Z>(x: X, y: Y, z: Z) {
    return {
        x,
        y,
        z,
    }
}

const multipleGenericResult = multipleGenerics<number, boolean, string>(
    123,
    true,
    '123',
);

// 자동으로 유추가 된다.
const multipleGenericResult2 = multipleGenerics(
    123,
    true,
    '123',
);

function getTuple<X, Y>(val1: X, val2: Y) {
    return [val1, val2] as const;
}

const tuple = getTuple(true, 100);

class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Car {
    brand: string;
    codeName: string;

    constructor(brand: string, codeName: string) {
        this.brand = brand;
        this.codeName = codeName;
    }
}

// constructor에 대해 파라미터를 자유롭게 받을 수 있도록
function instantiator<T extends { new(...args: any[]): {} }>(constructor: T,
    ...args: any[]) {
    return new constructor(...args);
}

// new니까 constructor인데 constructor에서 파라미터를 무한하게 마음대로 어떤 타입이든 받을 거고 이 constructor을 실행하면
// 객체 타입이 반환될 것이다.



console.log(instantiator(Idol, '아이유', 23));
console.log(instantiator(Car, 'BMW', 1111));
/**
 * Type vs Interface
 */

// Object 선언할때
interface IObject {
    x: number;
    y: number;
}

type TObject = {
    x: number;
    y: number;
}

// function을 선언할때
interface IFunction {
    (x: number, y: number): number;
}

type TFunction = (x: number, y: number) => number;

/**
 * Type에서는 할 수 있지만
 * interface에서는 할 수 없는 것 -> 객체라서
 */

// (1) primitive 타입 선언하기
type Name = string;

// (2) union 타입 선언하기
type UnionType = string | number;

// (3) primitive list 또는 tuple 타입 선언하기
type TupleType = [number, string];

/**
 * Interface는 할 수 있고
 * Type은 못하는 것
 */

// interface merging : 인터페이스 중복 선언을 하면 무한히 중첩시킬 수 있다.
interface IRectangle {
    height: number;
}

interface IRectangle {
    width: number;
}

let rectangle: IRectangle = {
    height: 200,
    width: 100,
}

// type TRectangle = {
//     height: number;
// }
//
// type TRectangle = {
//     width: number;
// }

/**
 * Interface Merging
 */

class Review {
    // 프로퍼티 : 그냥 primitive로 정의 가능
    getY = (x: number) => { return x };

    // 메서드 : 함수처럼 정의
    getX(x: number) {
        return x;
    }
}

interface GetXnY {
    getX: (x: number) => number;
    getY: (y: number) => number;
}

interface GetXnY {
    getX: (x: number) => number;
    // getY: (y: string) => number;
}

interface GetXnY2 {
    getX(x: number): number;
    getY(y: number): number;
}

interface GetXnY2 {
    getX(x: number): number;
    getY(y: string): number;
}

const testMethod: GetXnY2 = {
    getX(x){
        return x;
    },
    getY(y){
        return 1;
    }
}
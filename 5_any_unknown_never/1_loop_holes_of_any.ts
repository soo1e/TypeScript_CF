/**
 * Loopholes of Any : Any의 문제점
 */

let number: number;
number = 10;

// number.toUpperCase(); string 전용 함수라 사용 불가.

// (number as any).toUpperCase(); 런타임에 에러를 던짐.

const multiplyTwo = (x: number, y: number) => {
    return x * y;
}

let args1: any = '1';
let args2: any = true;

multiplyTwo(args1, args2); // 에러가 안 남!
// multiplyTwo('1', true); // 이 때는 에러가 미리 나는데 위의 경우는 에러가 나지 않는다.

let iu:any = {name: '아이유', age: 30};
// iu

const callbackRunner = (x: number, y: number, callback: any)=>{
    return callback(x, y);
    // return callback(x);
    // NaN이 나온다.
}

const callback = (x:number, y: number)=>{
    return x * y;
}

console.log(callbackRunner(5, 4, callback));
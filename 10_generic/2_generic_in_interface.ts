/**
 * Generic in Interface
 */
interface Cache<T> {
    data: T[];
    lastUpdate: Date;
}

const cache1: Cache<string> = {
    data: ['data1', 'data2'],
    lastUpdate: new Date(),
}

const cache2: Cache<number> = {
    data: [123, 456],
    lastUpdate: new Date(),
}

// Generic 타입을 입력하지 않을 경우 Default 값
interface DefaultGeneric<T = string>{
    data:T[];
}

// const cache3: DefaultGeneric = {
//     data: [123, 456], // -> 불가능. Number가 될 수 없다.
// }
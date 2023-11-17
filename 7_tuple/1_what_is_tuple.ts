/**
 * Tuple : 자바스크립트에서는 존재하지 않는 개념
 */

let iveTopMembers: string[] = ['안유진', '장원영', '레이'];

let numberAndStringTuple: [number, string] = [ // 첫번째 값은 무조건 number, 두번째 값은 무조건 string
    23,
    '수',
]

numberAndStringTuple.push('아이유'); // 이렇게 푸쉬를 해버리면 에러가 안 난다. 런타임에는 그냥 Array기 때문에
console.log(numberAndStringTuple);

let unmodifiableTuple: readonly [number, string] = [ // 위의 오류를 이렇게 readonly를 넣어서 할 수 없게 해준다.
    23,
    '수수',
]

// unmodifiableTuple.push(); -> error!

/**
 * Tuple 유추하기
 */
let actresses = ['가', '나', '다'];

let actressesTuple = ['가', '나', '다'] as const; // 캐스팅을 통해 정확한 타입으로 유추할 수 있다.
const actressesTupleConst = ['가', '나', '다'] as const;

let stringArray: string[] = [
    ...actressesTuple,
    ...actressesTupleConst,
    // ...[1,2,3]
]

/**
 * Named Tuple : Tuple에 이름을 지어줄 수 있다. 이러한 추가 정보를 통해 문맥을 읽을 수 있다.
 */

const namedTuple: [name: string, age: number] = [
    '콩',
    32,
]

/**
 * Assigning Tuple to Tuple
 * 
 * Tuple은 같은 타입끼리만 할당이 가능하다.
 */
const tuple1: [string, string] = ['콩', '수'];
const tuple2: [number, number] = [1, 2];

// let tuple3: [boolean, boolean] = tuple1; -> 할당 불가능
// let tuple4: [number, number, number] = tuple2; -> 할당 불가능

let tuple5: [number, number] = tuple2;

/**
 * Tuple과 Array의 관계
 */

let ive: [string, string] = [
    '장원영',
    '안유진',
]

let stringArr: string[] = ive; // 할당 가능!

// let ive2: [string, string] = stringArr; // 할당 불가능!

// 범위를 생각해보자

/**
 * Multi Dimesional Tuple
 */

const tuple2D : [string, number][] = [
    ['수', 32],
    ['아이유', 31],
    ['김고은', 30],
]
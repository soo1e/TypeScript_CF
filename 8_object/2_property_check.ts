/**
 * Property Check
 * 
 * 초과 속성 검사
 */
type TName = {
    name: string;
}

type TAge = {
    age: number;
}

const iu = {
    name: '아이유',
    age: 30,
}

// const iu: TAge = {
//     name: '아이유', // 불가
//     age: 30,
// }

// const iu: TName = {
//     name: '아이유',
//     age: 30,  // 불가
// }

const testName: TName = iu;
const testAge: TAge = iu;
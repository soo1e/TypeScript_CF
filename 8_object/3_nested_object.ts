/**
 * Nested Object : 객체 안의 객체
 */

type NestedPerson = {
    identity:{
        name: string;
        age: number;
    },
    nationality: string;
}

const codefactory: NestedPerson = {
    identity:{
        name: '코드팩토리',
        age: 32,
    },
    nationality: '한국인',
}

// 객체를 한 번에 선언하는게 좋을까, 나눠서 선언하는게 좋을까

type TPerson = {
    identity: TPersonIdentity, // 밑에서 만든 객체
    nationality: string;
}

type TPersonIdentity = {
    name: string;
    age: number;
}

const iu: TPerson = {
    identity:{
        name: '아이유',
        age: 32,
    },
    nationality: '한국인',
}

// 위에 코드팩토리에서 name을 지우면 에러가 뜨지만 이렇게 나눠서 아이유처럼 name을 지우면 에러를 보기가 편하다
// nesting된 객체를 타입으로 나눠서 선언하면 에러 볼 때 편하다.

interface IPerson {
    identity: IPersonIdentity;
    nationality: string;
}

interface IPersonIdentity{
    name: string;
    age: number;
}

const yuJin: IPerson = {
    identity:{
        name: '안유진',
        age: 22,
    },
    nationality: '한국인',
}

// name을 지우면 똑같이 어떤 인터페이스에서 에러가 난지 뜬다. 이것도 좋은 방법이다.

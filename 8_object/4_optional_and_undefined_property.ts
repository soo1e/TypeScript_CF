/**
 * Optional and Undefined Property
 */

interface Dog {
    name: string;
    age: number;
    // 종을 모르면 undefined를 넘겨줘도 괜찮다.
    breed?: string; // string or undefined
}

const byulE: Dog = {
    name: '별이',
    age: 12,
    breed: '미니핀',
}

const ori: Dog = {
    name: '오리',
    age: 3,
}

interface Cat{
    name: string;
    age: number;
    breed: string | undefined;
}

const nabi: Cat = {
    name: '나비',
    age: 7,
    breed: undefined, // -> 필수로 입력해야함
}

interface Cat2{
    name: string;
    age: number;
    breed?: string | undefined;
}

const nabi2: Cat2 = {
    name: '나비',
    age: 7,
}

// 이 때는 breed를 입력하지 않아도 된다.
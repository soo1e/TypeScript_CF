/**
 * Required Type : 전부 다 필수로 만든다
 */

interface Dog {
    name: string;
    age?: number;
    country?: string;
}

const requiredDog: Required<Dog> = {
    name: '모찌',
    age: 7,
    country: '한국'
}
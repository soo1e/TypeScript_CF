/**
 * Object 
 */

// JS
const codefactory = {
    name: '코드팩토리',
    age: 32,
}

interface IPerson{
    name: string;
    age: number;
}

type TPerson = {
    name: string;
    age: number;
}

const iPerson: IPerson = {
    name: '아이',
    age: 7,
}

const tPerson: TPerson = {
    name: '어른',
    age: 27,
}

iPerson.name;
tPerson.age;
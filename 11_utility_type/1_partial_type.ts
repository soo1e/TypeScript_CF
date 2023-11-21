/**
 * Partial Type
 */
interface Idol{
    name: string;
    age: number;
    groupName: string;
}

const yuJin: Idol = {
    name: '안유진',
    age: 23,
    groupName: '아이브',
}

// 인터페이스에서 부분적으로 입력하게 하고 싶을 때 partial<type>
function updateIdol(original: Idol, updates: Partial<Idol>): Idol{
    return {
        ...original,
        ...updates,
    }
}

console.log(updateIdol(yuJin, {
    age: 27,
    name: '코드팩토리',
    groupName: '주식회사 코드팩토리',
}));
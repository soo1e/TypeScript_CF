/**
 * Object Union
 */

/**
 * 유추된 객체 타입 유니언
 */
const dogOrCat = Math.random() > 0.5 ?
    // 강아지
    {
        name: '별이',
        age: 12,
    } :
    // 고양이
    {
        name: '오리',
        breed: '코리안 길냥이',
    }

dogOrCat.name;
dogOrCat.age; // number or undefined
dogOrCat.breed; // string or undefined

// 위의 상황에서는 breed와 age가 numstring or undefined 이므로 의도와 다르다
// 직접 케이스를 만들어야함

interface Dog {
    name: string;
    age: number;
}

interface Cat {
    name: string;
    breed: string;
}

type DogOrCat = Dog | Cat;

const dogOrCat2: DogOrCat = Math.random() > 0.5 ?
    // 강아지
    {
        name: '별이',
        age: 12,
    } :
    // 고양이
    {
        name: '오리',
        breed: '코리안 길냥이',
    }

dogOrCat2.name;
// dogOrCat2.age; -> age가 cat에 없기 때문에
// dogOrCat2.breed; -> breed가 dog에 없기 때문에

if('age' in dogOrCat2){
    dogOrCat2; // dog
    dogOrCat2.age;
    dogOrCat2.name;
}else{
    dogOrCat2; // cat
    dogOrCat2.name;
    dogOrCat2.breed;
}

// 그렇기 때문에 인 키워드를 이용한 내로잉을 통해 정확히 파악!
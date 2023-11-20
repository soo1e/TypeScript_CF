/**
 * Interface : 객체 지향 관점에서의 인터페이스
 */
interface Animal {
    name: string;
    age: number;
    jump(): string;
}

// 인터페이스에 있는 모든 요소들을 정의해야 한다.
class Dog implements Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    jump(): string {
        return `${this.name}이 점프를 합니다.`;
    }

    // 다른 것을 추가 정의하는 것은 괜찮다.
    dance() {

    }
}

let ori: any = new Dog('오리', 3);

// type predicate
function instanceOfAnimal(object: any): object is Animal {
    return 'jump' in object;
}

if (instanceOfAnimal(ori)) {
    ori; // Animal 타입
}

/**
 * 다중 인터페이스 구현
 */

interface Pet {
    legsCount: number;
    bark(): void
}

class Cat implements Animal, Pet {
    // Animal
    name: string;
    age: number;

    // Pet
    legsCount: number;

    constructor(name: string, age: number, legsCount: number) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }

    // Aniaml
    jump(): string {
        return `${this.name}이 점프를 합니다.`;
    }

    // Pet
    bark(): void {
        console.log('냐옹');
    }
}

// intersection을 통해서 interface
type AnimalAndPet = Animal & Pet;

class Cat2 implements AnimalAndPet {
    // Animal
    name: string;
    age: number;

    // Pet
    legsCount: number;

    constructor(name: string, age: number, legsCount: number) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }

    // Aniaml
    jump(): string {
        return `${this.name}이 점프를 합니다.`;
    }

    // Pet
    bark(): void {
        console.log('냐옹');
    }
}

interface WrongInterface1 {
    name: string | number;
}

interface WrongInterface2 {
    name: number;
}

// class Person implements WrongInterface1, WrongInterface2{ -> name이 각각 두 인터페이스에 정의되어 있는데 intersection이 never다! 고로 불가능.
// name: number;
// name: number | string;
// }


// 인터페이스로 클래스 정의
class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

interface IdolConstructor {
    new(name: string, age: number): Idol;
}

function createIdol(constructor: IdolConstructor, name: string, age: number) {
    // return new Idol(name, age);
    return new constructor(name, age);
}

// 클래스, 파라미터
console.log(createIdol(Idol, '아이유', 32));
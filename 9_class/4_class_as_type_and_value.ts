/**
 * Class as Type and Value : 타입이 될 수도 있고 값이 될 수도 있다.
 */

class Dog {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    bark(){
        return `${this.name}가 짖습니다`;
    }
}

let ori = new Dog('오리');
// Dog 타입을 한 번도 선언한 적 없는데 타입이 될 수도 있고 값이 될 수도 있다.

console.log(ori.bark());

// ori = '오리';


// 객체로는 바꿀 수 있다.
ori = {
    name: '별이',
    bark(){
        return `${this.name}가 짖습니다.`;
    }
}

console.log(ori);
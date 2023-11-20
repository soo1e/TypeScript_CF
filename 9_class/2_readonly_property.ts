/**
 * readonly 프로퍼티
 */

class Idol {
    readonly name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

const yuJin = new Idol('안유진', 23);

yuJin.age = 32;
// yuJin.name = '장원영'; readonly라서 변경 불가능!
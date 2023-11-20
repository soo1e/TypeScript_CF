/**
 * Abstract class (추상 클래스) : 인스턴스화를 하지 못하게 만드는 클래스
 */
abstract class ModelWithId {
    id: number;

    constructor(id: number) {
        this.id = id;
    }
}

// const modelWithId = new ModelWithId(123); -> 만들 수 없다!
// 직접적인 선언이 불가능하다.

// 왜 사용하는가?

// 이 자체로는 인스턴스화 할 일이 없는데 공유되는 값들, 프로퍼티나 메서드를 정의하고 싶을 때, 다른 곳에서 상속을 받을 때 사용한다.
class Product extends ModelWithId{

}

const product = new Product(1);
product.id;

abstract class ModelWithAbstractMethod{
    abstract shout(name: string): string;
}

class Person extends ModelWithAbstractMethod{
    shout(name: string): string {
        return '소리를 지르자!';
    }
}
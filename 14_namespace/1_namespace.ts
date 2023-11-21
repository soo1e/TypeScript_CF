/**
 * Namespace : 이제는 쓰지 않는다. 모듈을 구성할 수 있다.
 */

namespace Home {
    class Idol {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }

    // export를 사용해서 접근 가능
    export const yuJin = new Idol(
        '안유진',
        23,
    );
}

// Post에선 Idol 접근 불가!
namespace Post {
    class User {
        email: string;
        name: string;

        constructor(email: string, name: string) {
            this.email = email;
            this.name = name;
        }
    }

    const admin = new User('admin@codefactory.ai', Home.yuJin.name);

    console.log(admin);
}

namespace Comment {
    const name = 'comment';

    namespace Detail {
        const page = 'detail';

        console.log(name);
        console.log(page);
    }

    console.log('----------');
    console.log(name);
    // console.log(page); -> 내부에 있기 때문에 접근 불가능
}
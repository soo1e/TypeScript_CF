/**
 * Class에서 Generic 사용하기
 */

class Pagination<Data, Message>{
    data: Data[] = [];
    message?: Message;
    lastFetchedAt?: Date;
}

const pgData = new Pagination<number, string>();
pgData.data; // number[]
pgData.message; // string | undefined
pgData.lastFetchedAt; // Date | undefined

class Pagination2<Data, Message>{
    data: Data[] = [];
    message?: Message;
    lastFetchedAt?: Date;

    constructor(data: Data[], message?: Message, lastFetchedAt?: Date){
        this.data = data;
        this.message = message;
        this.lastFetchedAt = lastFetchedAt;
    }
}

const pagination2 = new Pagination2<number, string>([123, 456]);

pagination2.data;
pagination2.message; // string | undefined
pagination2.lastFetchedAt; // Date | undefined

class DefaultGeneric<T= boolean>{
    data: T[] = [];
}

const defaultGeneric = new DefaultGeneric();
defaultGeneric.data; // boolean[]
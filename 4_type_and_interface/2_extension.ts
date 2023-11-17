/**
 * Extension
 */
interface IName{
    name: string;
}

interface IIdol extends IName{
    age: number;
}

const idol: IIdol = {
    name: '안유진',
    age: 23,
}

type TName = {
    name: string;
}

type TIdol = TName & {
    age: number
};

const idol2: TIdol = {
    name: '아이유',
    age: 29,
}

interface IIdol2 extends TName{
    age: number;
}

const idol3: IIdol2 = {
    name: '제니',
    age: 29,
}

type TIdol2 = IName & {
    age: number;
}

const idol4: TIdol2 = {
    name: '지수',
    age: 31,
}

/**
 * extending multiple : 여러 개를 상속 받을 수 있다.
 */

type DogName = {
    name: string;
}

type DogAge = {
    age: number;
}

type DogBreed = {
    breed: string;
}

type Dog = DogName & DogAge & DogBreed;

const dog: Dog = {
    name: '푸푸',
    age: 7,
    breed: 'Poodl',
}

interface CatName{
    name: string;
}

interface CatAge{
    age: number;
}

interface Cat extends CatName, CatAge{
    breed: string;
}

const cat: Cat = {
    name: '오리',
    age: 7,
    breed: '코리안 냥냥이',
}

/**
 * Overriding
 */

type THeight = {
    height: number;
}

type TRectangle = THeight & {
    height: string; // number -> string
    width: number;
}

// const rectangle: TRectangle = {
//     height:, // primitive 타입들에 대해 intersection이 생겨서 never 타입 : 중복으로 선언 할거면 같은 타입으로 해야한다!
//     width: 100,
// }

type TWidth = {
    width: number | string;
}

type TRectangle2 = TWidth & {
    width: number;
    height: number;
}

const rectangle: TRectangle2 = {
    height: 100,
    width: 200,
}

interface IHeight{
    height: number;
}

// interface IRectangle extends IHeight{
//     height: string; -> 중복 선언을 해서 string으로 바뀌어서 불가능!
//     width: number;
// }

interface IWidth{
    width: number | string;
}

interface IRectangle extends IWidth{
    width: number; // narrowing은 가능
    height: number;
}
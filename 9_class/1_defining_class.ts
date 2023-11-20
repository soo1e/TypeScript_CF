/**
 * Class 선언하기
 */

// 선언법
class SampleClass { }

// 프로퍼티가 있는 경우 -> 클래스 안에서 프로퍼티를 정의할 경우 타입을 지정해줘야함!
class Game {
    name: string;
    country: string;
    download: number;

    constructor(name: string, country: string, download: number){
        this.name = name;
        this.country = country;
        this.download = download;
    }

    introduce(){
        return `${this.name}은 ${this.country}에서 제작된 ${this.download}개의 다운로드를 달성한 게임입니다.`;
    }
}

const starcraft = new Game(
    'Star Craft',
    'USA',
    10000000,
);

const retVal = starcraft.introduce();

// starcraft.changeGame();
// 존재하지 않는 함수는 불가능
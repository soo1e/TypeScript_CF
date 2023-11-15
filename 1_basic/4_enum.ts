/**
 * Enum
 */

/**
 * API 요청을한다.
 * 상태는 4가지 상태
 * 
 * DONE - 요청 완료 상태
 * ERROR - 에러가 생긴 상태
 * LOADING - 로딩상태
 * INITIAL - 초기 상태
 */
function runWork(){
    let state = 'INITIAL';

    try{
        state = 'LOADING';
        // 작업을 한다.

        state = 'DONE';
    }catch(e){
        state = 'ERROR';
    }finally{
        return state;
    }
}

console.log(runWork() === 'DONE');
console.log(runWork() === 'DONNE');

// 자바스크립트에서는 이렇게 일일히 선언해주고 사용했다.
const doneState = 'DONE';
const loadingState = 'LOADING';
const errorState = 'ERROR';
const initialState = 'INITIAL';

function runWork2(){
    let state = initialState;

    try{
        state = loadingState;
        // 작업을 한다.

        state = doneState;
    }catch(e){
        state = errorState;
    }finally{
        return state;
    }
}

console.log(runWork2() === doneState);
// 실제 String으로 비교를 안하고 변수로 비교를 할 수 있다. 이는 위의 사례처럼 DONNE 같은 스펠링 오류를 막을 수 있다.

enum State {
    DONE = 'DONE',
    LOADING = 'LOADING',
    INITIAL = 'INITIAL',
    ERROR = 'ERROR',
}

function runWork3(){
    let state = State.INITIAL;

    try{
        state = State.LOADING;
        // 작업을 한다.

        state = State.DONE;
    }catch(e){
        state = State.ERROR;
    }finally{
        return state;
    }
}

console.log(runWork3() === State.DONE);
console.log(runWork3()); // 0으로 출력 -> enum을 선언하면 각각 0,1,2,3 이렇게 부여가 되어서 0번째 인덱스인 done을 의미한다.
// 지금은 DONE = "DONE"으로 선언되어서 DONE으로 나온다.
/**
 * Generic in Type
 */
type GenericSimpleType<T> = T;

const genericString: GenericSimpleType<string> = '담원';
// const genericString2: GenericSimpleType = '티원'; -> 불가능

interface DoneState<T>{
    data: T[];
}

interface LoadingState{
    requestedAt: Date;
}

interface ErrorState {
    error: string;
}

type State<T = number> = DoneState<T> | LoadingState | ErrorState;

let state: State<string> = {
    data: ['123', '456'],
}

state = {
    requestedAt: new Date()
}

state = {error: 'error'};

let state2: State = {
    data: [123, 456]
}
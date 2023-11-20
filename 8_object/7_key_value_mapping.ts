/**
 * Key Value Mapping
 */

enum State {
    loading,
    done,
    error,
}

type GlobalApiStatus = {
    getUser: State;
    paginateUsers: State | undefined;
    banUser: State | null;
    getPosts: State;
}

type UserApiStatus = {
    getUser: State;
    paginateUsers: State | undefined;
    banUser: State | null;
}

// 위의 경우처럼 작성하면 중복되는 키들이 있다.

// 이렇게 바꿔준다.
type UserApiStatus2 = {
    getUser: GlobalApiStatus['getUser']; // 실제 객체처럼 작동한다.
    paginateUsers: GlobalApiStatus['paginateUsers'];
    banUser: GlobalApiStatus['banUser'];
}

// 이것보다 좋은 효율을 보이기 위해 아래처럼 매핑을 한다.

type UserApiStatus3 = {
    [k in 'getUser' | 'paginateUsers' | 'banUser']: GlobalApiStatus[k]; // 키값으로 가져오고 싶은 항목 union : 가져올 타입
    // getUser: 
    // paginateUsers:
    // banUser:
}

// pick<대상 타입, 가져올 키> -> 선택해서 값을 뽑아옴
type PickedUserApiStatus = Pick<GlobalApiStatus, 'getUser' | 'banUser' | 'paginateUsers'>;

// Omit<대상 타입, 뺄 키> -> 생략해서 값을 뽑아옴
type OmitUserApiStatus = Omit<GlobalApiStatus, 'getPosts'>;

/**
 * keyof : 객체의 키 값들을 유니온으로 가져올 수 있다.
 */

type AllKeys = keyof GlobalApiStatus;

// 위에서 가져온 키 값 중 가져올 수 있음
const key: AllKeys = 'getUser';

// 키 값들을 가져와 k에 하나씩 가져옴
type KeyOfUserApiStatus = {
    [k in keyof GlobalApiStatus]: GlobalApiStatus[k];
}

// 모든 키들이 다 들어와서 마지막을 못 뺐음 여기서 Exclude 유틸리티 사용. Exclude<가져올 타입,제외 값>

type KeyOfUserApiStatus2 = {
    [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]: GlobalApiStatus[k];
}

// 전부 다 옵셔널도 가능
type KeyOfUserApiStatus3 = {
    [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]?: GlobalApiStatus[k];
}

interface LoadingStatus {
    type: 'loading';
    data: string[];
}

interface ErrorStatus {
    type: 'error';
    message: string;
}

type FetchStatus = LoadingStatus | ErrorStatus;

type StatusType = FetchStatus['type']; // 로딩 또는 에러
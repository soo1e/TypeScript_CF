/**
 * Parameter Type
 */

function sampleFunction(x: number, y: string, z: boolean){

}

// 파라미터의 값을 순서로 받아올 수 있다.

type Params = Parameters<typeof sampleFunction>;
type Params2 = Parameters<(one: number) => void>;
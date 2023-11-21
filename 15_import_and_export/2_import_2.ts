// 정확히 명칭을 입력해줘야 한다.

import {IdolModel, rose, number, ICat} from './2_export_1';

const iu = new IdolModel('아이유', 32);
console.log(iu);
console.log(rose);
console.log(number);

const cat: ICat = {
    name: '냥냥이',
    age: 12,
}
console.log(cat);
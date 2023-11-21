/**
 * ./ -> 현재
 * ../-> 상위 폴더
 */

import IdolModel from './1_export_default_1';

const iu = new IdolModel('아이유', 23);
console.log(iu);

console.log(IdolModel);

const cat: IdolModel = {
    name: '냥냥이',
    age : 18,
};

const yuJin = new IdolModel('안유진', 23);

console.log(yuJin);

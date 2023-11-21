/**
 * Multiple Ways to Import and Export
 */

// 명칭 변경은 as
// import { IdolModel as IM, rose, number, ICat } from "./2_export_1";

// console.log(new IM('아이유', 32));
// console.log(new IdolModel('아이유', 32));

// import * as allTogether from './2_export_1';

// console.log(allTogether.number);
// console.log(allTogether.rose);

// import cf, {rose, number} from './2_export_1';

// console.log(cf);
// console.log(rose);

// baseUrl -> 경로 베이스를 현재 경로로
import { IdolModel } from "15_import_and_export/2_export_1";
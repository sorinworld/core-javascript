/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number -> '2022'
const YEAR = 2022;

console.log(String(YEAR)); //'2022'


// undefined ->'undefined'
// null
console.log(String(undefined)); //'undefined'

let days = null;
console.log(String(days)); //

// boolean
let isKind = true;
console.log(String(isKind));

// string 함수를 지정하지 않고도 형변환 가능 / 의도치 않은 형변환
console.log((isKind)+ '');





/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed ->NaN
console.log(Number(undefined));

// null
let money = null;
console.log(Number(money));

// boolean ->true는 숫자형으로 변환됐을때 1이 나옴 / false는 0
let cutie = true;
console.log(cutie * 1);
console.log(cutie / 1);
// 곱하거나 나눠도 형변환된다.
console.log(+cutie);
// 앞에 +를 붙여도 형변환된다.
// 연산형태는 함수로 감싸줘야한다.

// string 숫자형 문자 ->공백을 제거하고 문자로 만들어줌

let num = '   123'
console.log(num * 1);

// numeric string
let width = '320px';
// console.log(width * 1); ->NaN

// 정수만 빼주는 함수 ->소수점이있는경우 parseFloat
console.log(parseInt(width,10));

/* 데이터 → 불리언 ---------------------------------------------------------- */
// null, undefined, 0, NaN, '' ->false
// 위에 나열한 이외의 것들 ->true

console.log(Boolean(null)); 

// 의도치않은 형변환 ->false / !는 부정연산을 해줘서 !!은 긍정
console.log(Boolean(!!null)); 


// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 
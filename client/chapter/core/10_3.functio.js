/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */

let arr = [1,2,3,4];


//화살표함수는 arguments 없음 ->(...args) 이렇게 쓰면됌. 단 얘는 진짜 배열임
//rest parameter - 나머지만 처리 (priceA,priceB,...args) 이렇게도 가능
const calculateTotal = (priceA,priceB,...args) => {

  let total = 0;
  args.forEach(item=>{

    total += item 
  })
  
  //args.reduce((acc,item)=> acc + item)

  //console.log(args);

  return total;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
/* let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900); */

/* console.log(resultX);
console.log(resultY);
console.log(resultZ); */


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a,b,c,d)=>a+b+c+d;


// 화살표 함수와 this

function normalFunction(){
  console.log('화살표함수 : ' , this);
}

const arrowFunction = ()=>{
  console.log('화살표함수 : ' , this);
}

//객체의 메서드로 함수를 실행할 경우는 일반함수로 실행해야 this가 객체를 찾습니다.
//메서드 안에서의 함수는 this를 찾기 위해서는 arrowFunction이 오히려 낫다

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) = ; 

pow(2,53);

// repeat(text: string, repeatCount: number): string;
let repeat; 
repeat('hello',3) //hellohellohello

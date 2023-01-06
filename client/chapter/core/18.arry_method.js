/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray

const array = [10,100,1000,10000];

function isArray(data) {
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array'
}


//type을 check 할 때 쓰는 유틸 함수로 사용할 수 있다
function isNull(data) {
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null'
}


console.log(Array.isArray([]));

//Object.prototype.toString.call([])
//'[object Array]'

/* 요소 순환 -------------------------------------------------------------- */

// forEach
//forEach가 할 수 있는 일은 for도 할 수 있다
const user = {}

array.forEach(function(item,index){
  this[index] = item
},user)


// const span = document.querySelectorAll('span');

// span.forEach(item)=>{
//   item.addEventListener('click',(e)=>{
//     console.log(e.target.style.background = 'orange');
//     console.log(index);
//   })
// }

//e.target
//addEventListenesr('click',(e)=>)
/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse()
console.log(array);

// splice
//           시작 제거 [추가]
array.splice(1,0,23,5)
console.log(array);




// sort / compare function

//반환값 < 0 : a가 b보다 앞에 있어야 한다.
//반환값 = 0 : a와 b의 순서를 바꾸지 않는다.
//반환값 > 0 : b가 a보다 앞에 있어야 한다.
array.sort((a,b)=>{
  return b - a
})
console.log(array);


/* 새로운 배열 반환 --------------------------------------------------------- */


// concat
// slice
// map = 일처리 후 새로운 배열로 만들어준다.

let todo = ['밥먹기','미용실가기','코딩공부하기'];

let template = todo.map((tododList)=>{
  return /*html*/ `<li>${tododList}</li>`
})

template.forEach((item) => {
  document.body.insertAdjacentHTML("beforeend", item);
});



// console.log(template);

let newArray = array.map(item=> item * 2)

// console.log(newArray);
/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
console.log(array.indexOf());


// lastIndexOf
// includes
console.log(array.includes(10));


/* 요소 찾기 -------------------------------------------------------------- */
const users = [
  {id:1,name:'로운'},
  {id:2,name:'승택'},
  {id:2,name:'연주'},
]
// find = 한번 결과를 비교해서 true가 나오면 그만찾음, 대상은 한가지만 찾는다.

const find = users.find((item,inndex)=>{
  return item.id < 5
})

console.log(find);

// findIndex
  const findIndex = users.findIndex((item)=>{
    return item.id === 3
  })
  console.log(findIndex);

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter
  let result = array.filter((number)=>{
    return number > 100
  })

  console.log(result);



/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */
//parameter 명시적으로 소문자?



// reduce

const friends = [
  {
    name: '윤보라',
    age: 28,
    job: '작꼬져',
  },
  {
    name: '이로운',
    age: 23,
    job: '배고픈 개발자',
  },
  {
    name: '오승택',
    age: 21,
    job: '물음표살인마',
  }
];


let age = friends.reduce((sum, cur) => {
  return sum + cur.age},0);

let template2 = todo.reduce((acc,cur,index)=>{
    return /* html */acc + `<li>할일${index + 1} : ${cur}</li>`
  },'')  

console.log(age);
console.log(template2);



// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

let str = '성찬 보경 일범 세민 형진 주현';

// split :  문자 -> 배열
let nameArray = str.split(' ');

console.log(nameArray);


// join : 배열 -> 문자
console.log(nameArray.join(' / ')); 

/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */

// const obj = {

// }

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2022,
  hasOwnProperty: function (){
    return '헤헤'
  }
};

let key = 'standardName'

// console.log(key in javaScript);


// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// hasOwnProperty 조상에 있는걸 찾지않고 '내'가 가지고 있는걸 찾아준다.
// 하지만 hasOwnProperty는 자바스크립트에서 보호해주지않는다. ->그래서 찐 오브젝트에 접근한다. =Object.prototype
// 하지만 그냥 쓸수는 없고 진짜 오브젝트에게 빌려써야한다. .call
// 객체 자신(own)의 속성(property)인지 확인(has)하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
// console.log(javaScript.hasOwnProperty(key));
Object.prototype.nickName = 'tiger'
//for in 안에서 hasOwnProperty를 쓰는게 조금 더 정확하다.

console.log(Object.prototype.hasOwnProperty.call(javaScript,key));




//Object.prototype === {}

let a = {}

for(let key in javaScript){

if(({}).hasOwnProperty.call(javaScript,key)){

  console.log(key);
  }
}


const user = {
  name : 'tiger'
  age : 32
}

function hello (){
  console.log(this);
}

hello.call(user)

//call, apply, bind 찾아보기...


// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?
// 배열을 순환할때는 for in을 쓰지않는게 좋다, 객체에 양보하는게...

let tens = [10,100,1000,10000];

for(let value in tens){
  if(({}).hasOwnProperty.call(javaScript,key)){
  console.log(tens[value]);
}
}


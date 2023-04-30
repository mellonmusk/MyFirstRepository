const frame=document.querySelector("#wrap");//bodu 에서 아이디가 wrap인 요소를 찾아서 frame 변수에 저장
console.log(frame);//console.log를 이용해서 출력

//클래스명이 box1인 요소 선택하기
const box1=document.querySelector("#wrap.box1");
console.log(box1)

//요소를 모두 선택하기
const item=document.querySelectorAll("#wrap article");
for(let item of items){
  console.log(item)
}
for(let i=0;i<items.length;i++){
  console.log(items[i]);
}

//자식 요소 선택하기
const list=document.querySelector(".list");
const items=list.children;

console.log(items);
console.log(items[0]);
console.log(items[1]);
console.log(items[2]);
console.log(items[3]);

//부모 요소 선택하기
const item2=document.querySelector(".item2");
console.log(item2.parentElement);
//제일 가까운 상위 부모 요소를 선택하려면 closest 이용

//형제 요소 선택하기
const item3=document.querySelector(".item3");
console.log(item3.previousElementSibling);
console.log(item3.nextElementSibling);
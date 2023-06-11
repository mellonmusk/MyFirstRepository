const frame = document.querySelector("section");
const lists = frame.querySelector("article");
const deg = 45; //각각의 article요소가 회전할 각도
const len = lists.length-1; //순번이 0부터 시작하므로 전체 개수에서 1을 뻄
let i=0;
for (let el of lists){
  el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`; //각 article 요소를 45도씩 회전하고 아래로 배치
  i++;
}

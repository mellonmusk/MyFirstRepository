const frame = document.querySelector("section");
const lists = frame.querySelector("article");
const deg = 45; //각각의 article요소가 회전할 각도
const len = lists.length-1; //순번이 0부터 시작하므로 전체 개수에서 1을 뻄
let i=0;
for (let el of lists){
  let pic=el.querySelector(".pic");
  el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`; //각 article 요소를 45도씩 회전하고 아래로 배치
  pic.style.backgroundImage=`url(../img/member${i+1}.jpg)`
  i++;

  let play = el.querySelector(".play");
  let pause = el.querySelector(".pause");
  let load = el.querySelector(".load");
  
  play.addEventListener("cilck", e=>{
    e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
    e.currentTarget.closest("article").querySelector("audio").play();
  });
  pause.addEventListener("cilck", e=>{
    e.currentTarget.closest("article").querySelector(".pic").classList.remove("on");
    e.currentTarget.closest("article").querySelector("audio").pause();
  });
  load.addEventListener("cilck", e=>{
    e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
    e.currentTarget.closest("article").querySelector("audio").load();   
    e.currentTarget.closest("article").querySelector("audio").play();
  });
}
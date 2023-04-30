const wrap=document.querySelector("#wrap");
const box=wrap.querySelector("article");
//1
wrap.addEventListener("click",()=>{
  box.style.backgroundColor="hotpink";
})
//2
wrap.addEventListener("click",()=>{
  wrap.classList.add("on");
})
//3
wrap.addEventListener("click",()=>{
  let isOn=wrap.classList.contains("on");
  console.log(isOn);
})
//4
wrap.addEventListener("click",()=>{
  let isOn=wrap.classList.contains("on");
  console.log(isOn);
  wrap.classList.add("on");

if(isOn){
  wrap.classList.remove("on");
}
else{
  wrap.classList.add("on");
}
})
//5
wrap.addEventListener("click",()=>{
  wrap.classList.toggle("on");
})
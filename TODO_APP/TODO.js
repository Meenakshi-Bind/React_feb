let btn = document.querySelector("button");
let body=document.querySelector("body");
console.log(btn);
btn.addEventListener("click",function(){
    console.log("heyy clicked");
 body.innerHTML=`<h1>heyaaaa inner html me</h1>`;
})
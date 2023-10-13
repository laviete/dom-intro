const body = document.body;
const section = document.querySelector("section");
const button = document.querySelector("button");
function btnclickHandler(e) {
  console.log('this >> ',this);
  e.target.style.backgroundColor = 'red';
}
//занурення
button.addEventListener("click", btnclickHandler, {capture:true});
section.addEventListener("click", btnclickHandler, {capture:true});
body.addEventListener("click", btnclickHandler, {capture:true});

//сплиття
body.addEventListener("click", btnclickHandler);
section.addEventListener("click", btnclickHandler);
button.addEventListener("click", btnclickHandler);

let clickCounter = 0;
body.addEventListener('click', ()=>{
    clickCounter++;
    console.log(clickCounter)
})
button.addEventListener('click', e=>{
    e.stopPropagation();
})
import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as o}from"./assets/vendor-BbbuE1sJ.js";const i=document.querySelector(".inp"),c=document.querySelector(".radio-ful"),m=document.querySelector(".radio-rej"),u=document.querySelector(".btn"),r=document.querySelector(".form");u.addEventListener("click",function(s){s.preventDefault();const e=Number(i.value);if(!i.value||isNaN(e)||e<0){o.warning({title:"Warning",message:"⏰ Please enter a valid positive number in ms!",position:"topRight"});return}new Promise((t,n)=>{setTimeout(()=>{c.checked?t(`✅ Fulfilled promise in ${e}ms`):m.checked&&n(`❌ Rejected promise in ${e}ms`)},e)}).then(t=>{o.success({title:"Success",message:t,position:"topRight"}),r.reset()}).catch(t=>{o.error({title:"Error",message:t,position:"topRight"}),r.reset()})});
//# sourceMappingURL=2-snackbar.js.map

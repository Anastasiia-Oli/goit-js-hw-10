import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as h,i as y}from"./assets/vendor-BbbuE1sJ.js";let l=null;const n=document.querySelector(".btn"),d=document.querySelector(".inp");n.disabled=!0;function p(t){const s=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:a,minutes:m,seconds:f}}function i(t){return String(t).padStart(2,"0")}function u({days:t,hours:e,minutes:o,seconds:r}){const c={days:i(t),hours:i(e),minutes:i(o),seconds:i(r)};for(const s in c){const a=document.querySelector(`[data-${s}]`);a&&(a.textContent=c[s])}}const b={dateFormat:"Y-m-d H:i",enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=new Date;t[0]<=e?(y.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),n.disabled=!0):(l=t[0],n.disabled=!1),console.log(t[0])}};h("#datetime-picker",b);n.addEventListener("click",function(){n.disabled=!0,d.disabled=!0;const t=setInterval(()=>{const e=Date.now(),o=l-e;if(o<=0){clearInterval(t),u({days:0,hours:0,minutes:0,seconds:0}),d.disabled=!1;return}const r=p(o);u(r)},1e3)});
//# sourceMappingURL=1-timer.js.map

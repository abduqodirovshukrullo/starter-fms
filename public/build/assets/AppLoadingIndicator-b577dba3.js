import{r as a,w as v,n as r,o as f,c as d,b as m,a3 as p,a4 as b,z as _}from"./main-8f4bf164.js";const k={key:0,class:"position-fixed",style:{"z-index":"9999","inset-block-start":"0","inset-inline-end":"0","inset-inline-start":"0"}},I={__name:"AppLoadingIndicator",setup(V,{expose:c}){const s=a(20),e=a(10),l=a(!1),t=a(),n=a(!1);v([e,l],()=>{e.value>80&&l.value&&(e.value=82),o()});function o(){clearInterval(t.value),t.value=setInterval(()=>{e.value+=Math.random()*(15-5)+5,s.value+=Math.random()*(15-5)+6},800)}return c({fallbackHandle:()=>{n.value=!0,e.value=10,l.value=!0,o()},resolveHandle:()=>{l.value=!1,e.value=100,setTimeout(()=>{clearInterval(t.value),e.value=0,s.value=20,n.value=!1},300)}}),(x,u)=>r(n)?(f(),d("div",k,[m(b,{modelValue:r(e),"onUpdate:modelValue":u[0]||(u[0]=i=>p(e)?e.value=i:null),"buffer-value":r(s),color:"primary",height:"2","bg-color":"background"},null,8,["modelValue","buffer-value"])])):_("",!0)}};export{I as _};

import{r as a,w as v,m as n,o as f,c as d,b as m,a2 as p,a3 as b,y as _}from"./main-2cb2b578.js";const k={key:0,class:"position-fixed",style:{"z-index":"9999","inset-block-start":"0","inset-inline-end":"0","inset-inline-start":"0"}},H={__name:"AppLoadingIndicator",setup(V,{expose:c}){const s=a(20),e=a(10),l=a(!1),t=a(),r=a(!1);v([e,l],()=>{e.value>80&&l.value&&(e.value=82),o()});function o(){clearInterval(t.value),t.value=setInterval(()=>{e.value+=Math.random()*(15-5)+5,s.value+=Math.random()*(15-5)+6},800)}return c({fallbackHandle:()=>{r.value=!0,e.value=10,l.value=!0,o()},resolveHandle:()=>{l.value=!1,e.value=100,setTimeout(()=>{clearInterval(t.value),e.value=0,s.value=20,r.value=!1},300)}}),(x,u)=>n(r)?(f(),d("div",k,[m(b,{modelValue:n(e),"onUpdate:modelValue":u[0]||(u[0]=i=>p(e)?e.value=i:null),"buffer-value":n(s),color:"primary",height:"2","bg-color":"background"},null,8,["modelValue","buffer-value"])])):_("",!0)}};export{H as _};
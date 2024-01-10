import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";import{a as O,V as T}from"./VRow-bdc8a60e.js";import{V as B,a as A}from"./VCard-b110a604.js";import{V as U}from"./VCardText-e36fdb2d.js";import{V as L}from"./VAvatar-f2225889.js";import{r as v,o as d,f as _,e as s,c as D,F as H,i as z,n as a,d as r,b as o,J as E,a1 as x,x as l,R as G,U as q,a as F,z as j,av as W,a5 as k,a3 as b,v as m,a4 as J,a7 as w,s as P}from"./main-8f4bf164.js";import{V as K}from"./VMenu-83c355c3.js";import{V as Q}from"./VList-e5202c5f.js";import{V as X,a as Y,p as Z,b as ee}from"./VPagination-fa19659c.js";import{u as te}from"./useApi-e3dff6f1.js";import{c as se}from"./createUrl-4ac06473.js";import{V as R}from"./VDivider-730229d6.js";const oe=u=>(G("data-v-164a00b8"),u=u(),q(),u),ae={class:"d-flex align-center gap-x-4 mb-2"},re={class:"text-h5 font-weight-medium"},ie={class:"text-body-1"},le={class:"d-flex gap-x-2"},ne={class:"text-h6 font-weight-medium"},ce=oe(()=>r("span",{class:"text-disabled"},"than last week",-1)),pe={__name:"LogisticsCardStatistics",setup(u){const n=v([{icon:"tabler-car",color:"primary",title:"On route vehicles",value:42,change:18.2,isHover:!1},{icon:"tabler-alert-triangle",color:"warning",title:"Vehicles with errors",value:8,change:-8.7,isHover:!1},{icon:"tabler-git-fork",color:"error",title:"Deviated from route",value:27,change:4.3,isHover:!1},{icon:"tabler-clock-hour-12",color:"info",title:"Late vehicles",value:13,change:-2.5,isHover:!1}]);return(f,c)=>(d(),_(T,null,{default:s(()=>[(d(!0),D(H,null,z(a(n),(e,g)=>(d(),_(O,{key:g,cols:"12",md:"3",sm:"6"},{default:s(()=>[r("div",null,[o(B,{class:"logistics-card-statistics cursor-pointer",style:E(e.isHover?{"border-block-end":`2px solid rgba(var(--v-theme-${e.color}))`}:{"border-block-end":`2px solid rgba(var(--v-theme-${e.color}), var(--v-disabled-opacity))`}),onMouseenter:h=>e.isHover=!0,onMouseleave:h=>e.isHover=!1},{default:s(()=>[o(U,null,{default:s(()=>[r("div",ae,[o(L,{variant:"tonal",color:e.color,rounded:""},{default:s(()=>[o(x,{icon:e.icon,size:"28"},null,8,["icon"])]),_:2},1032,["color"]),r("h5",re,l(e.value),1)]),r("div",ie,l(e.title),1),r("div",le,[r("h6",ne,l(e.change>0?"+":"")+" "+l(e.change)+"% ",1),ce])]),_:2},1024)]),_:2},1032,["style","onMouseenter","onMouseleave"])])]),_:2},1024))),128))]),_:1}))}},Be=M(pe,[["__scopeId","data-v-164a00b8"]]),ue={__name:"MoreBtn",props:{menuList:{type:Array,required:!1},itemProps:{type:Boolean,required:!1}},setup(u){const n=u;return(f,c)=>{const e=F("IconBtn");return d(),_(e,{density:"compact",color:"disabled"},{default:s(()=>[o(x,{icon:"tabler-dots-vertical"}),n.menuList?(d(),_(K,{key:0,activator:"parent"},{default:s(()=>[o(Q,{items:n.menuList,"item-props":n.itemProps},null,8,["items","item-props"])]),_:1})):j("",!0)]),_:1})}}},de={class:"d-flex align-center gap-x-4",style:{"min-inline-size":"240px"}},me={class:"w-100"},ve={class:"d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3"},_e={class:"text-sm text-disabled mb-0"},Le={__name:"LogisticsOverviewTable",async setup(u){let n,f;const c=v(5),e=v(1),g=v(),h=v(),N=i=>{var p,V;e.value=i.page,g.value=(p=i.sortBy[0])==null?void 0:p.key,h.value=(V=i.sortBy[0])==null?void 0:V.order},{data:C}=([n,f]=W(()=>te(se("/apps/logistics/vehicles",{query:{page:e,itemsPerPage:c,sortBy:g,orderBy:h}}))),n=await n,f(),n),S=k(()=>C.value.vehicles),y=k(()=>C.value.totalVehicles),I=[{title:"LOCATION",key:"location"},{title:"STARTING ROUTE",key:"startRoute"},{title:"ENDING ROUTE",key:"endRoute"},{title:"WARNINGS",key:"warnings"},{title:"PROGRESS",key:"progress"}],$=i=>{if(i==="No Warnings")return"success";if(i==="fuel problems")return"primary";if(i==="Temperature Not Optimal")return"warning";if(i==="Ecu Not Responding")return"error";if(i==="Oil Leakage")return"info"};return(i,p)=>{const V=ue;return d(),_(B,null,{default:s(()=>[o(A,{title:"On Route vehicles"},{append:s(()=>[o(V)]),_:1}),o(R),o(a(X),{"items-per-page":a(c),"onUpdate:itemsPerPage":p[1]||(p[1]=t=>b(c)?c.value=t:null),page:a(e),"onUpdate:page":p[2]||(p[2]=t=>b(e)?e.value=t:null),"items-per-page-options":[{value:5,title:"5"},{value:10,title:"10"},{value:20,title:"20"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}],"items-length":a(y),items:a(S),headers:I,"show-select":"",class:"text-no-wrap","onUpdate:options":N},{"item.location":s(({item:t})=>[o(L,{variant:"tonal",class:"me-2",size:"40"},{default:s(()=>[o(x,{icon:"tabler-truck",size:"24"})]),_:1})]),"item.startRoute":s(({item:t})=>[m(l(t.startCity)+", "+l(t.startCountry),1)]),"item.endRoute":s(({item:t})=>[m(l(t.endCity)+", "+l(t.endCountry),1)]),"item.warnings":s(({item:t})=>[o(Y,{color:$(t.warnings),label:""},{default:s(()=>[m(l(t.warnings),1)]),_:2},1032,["color"])]),"item.progress":s(({item:t})=>[r("div",de,[r("div",me,[o(J,{"model-value":t.progress,rounded:"",color:"primary",height:8},null,8,["model-value"])]),r("div",null,l(t.progress)+"% ",1)])]),bottom:s(()=>[o(R),r("div",ve,[r("p",_e,l(a(Z)({page:a(e),itemsPerPage:a(c)},a(y))),1),o(ee,{modelValue:a(e),"onUpdate:modelValue":p[0]||(p[0]=t=>b(e)?e.value=t:null),length:Math.ceil(a(y)/a(c)),"total-visible":i.$vuetify.display.xs?1:Math.min(Math.ceil(a(y)/a(c)),5)},{prev:s(t=>[o(w,P({variant:"tonal",color:"default"},t,{icon:!1}),{default:s(()=>[m(" Previous ")]),_:2},1040)]),next:s(t=>[o(w,P({variant:"tonal",color:"default"},t,{icon:!1}),{default:s(()=>[m(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),_:1},8,["items-per-page","page","items-per-page-options","items-length","items"])]),_:1})}}};export{Be as L,Le as _};
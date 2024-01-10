import{_ as z,a as E}from"./AppDrawerHeaderSection-c7aa5abe.js";import{r as A}from"./validators-4dbf72f5.js";import{r as i,o as R,f as H,e as t,b as e,n as a,a3 as V,a6 as Q,a7 as D,v,aE as B,av as G,a5 as C,c as I,d as S,x as k,s as $}from"./main-8f4bf164.js";import{V as J,_ as K}from"./VForm-aacac416.js";import{P as L}from"./vue3-perfect-scrollbar.esm-6646fc21.js";import{V as T}from"./VCard-b110a604.js";import{V as F}from"./VCardText-e36fdb2d.js";import{V as W,a as O}from"./VRow-bdc8a60e.js";import{V as X}from"./VNavigationDrawer-ac0d6395.js";import{a as Y,b as Z,V as ee,p as te}from"./VPagination-fa19659c.js";import{$ as ae}from"./api-a3f27960.js";import{u as le}from"./useApi-e3dff6f1.js";import{c as oe}from"./createUrl-4ac06473.js";import{V as re}from"./VSpacer-031748a5.js";import{V as q}from"./VDivider-730229d6.js";import"./VTextField-6d0acdda.js";import"./transition-be9978a2.js";import"./easing-9f15041e.js";import"./forwardRefs-8348545e.js";import"./VImg-2da5316b.js";import"./VAvatar-f2225889.js";import"./VOverlay-aedc1a4f.js";import"./lazy-5892a07e.js";import"./ssrBoot-dc5ad16a.js";import"./VList-e5202c5f.js";import"./dialog-transition-169eb89b.js";import"./VMenu-83c355c3.js";import"./VCheckboxBtn-0bc48480.js";import"./index-51d05da2.js";const se={__name:"AddNewVehicleDrawer",props:{isDrawerOpen:{type:Boolean,required:!0}},emits:["update:isDrawerOpen","robotData"],setup(U,{emit:_}){const h=U,u=_,g=i(!1),p=i(),b=i(""),w=i(""),x=()=>{u("update:isDrawerOpen",!1),B(()=>{var o,r;(o=p.value)==null||o.reset(),(r=p.value)==null||r.resetValidation()})},d=()=>{var o;(o=p.value)==null||o.validate().then(({valid:r})=>{r&&(u("robotData",{id:0,name:b.value,number:w.value,type:"vehicle"}),u("update:isDrawerOpen",!1),B(()=>{var y,m;(y=p.value)==null||y.reset(),(m=p.value)==null||m.resetValidation()}))})},n=o=>{u("update:isDrawerOpen",o)};return(o,r)=>{const y=z,m=K;return R(),H(X,{temporary:"",width:400,location:"end",class:"scrollable-content","model-value":h.isDrawerOpen,"onUpdate:modelValue":n},{default:t(()=>[e(y,{title:"Add Vehicle",onCancel:x}),e(a(L),{options:{wheelPropagation:!1}},{default:t(()=>[e(T,{flat:""},{default:t(()=>[e(F,null,{default:t(()=>[e(J,{ref_key:"refForm",ref:p,modelValue:a(g),"onUpdate:modelValue":r[2]||(r[2]=c=>V(g)?g.value=c:null),onSubmit:Q(d,["prevent"])},{default:t(()=>[e(W,null,{default:t(()=>[e(O,{cols:"12"},{default:t(()=>[e(m,{modelValue:a(b),"onUpdate:modelValue":r[0]||(r[0]=c=>V(b)?b.value=c:null),rules:["requiredValidator"in o?o.requiredValidator:a(A)],label:"Name",placeholder:""},null,8,["modelValue","rules"])]),_:1}),e(O,{cols:"12"},{default:t(()=>[e(m,{modelValue:a(w),"onUpdate:modelValue":r[1]||(r[1]=c=>V(w)?w.value=c:null),rules:["requiredValidator"in o?o.requiredValidator:a(A)],label:"Number",placeholder:""},null,8,["modelValue","rules"])]),_:1}),e(O,{cols:"12"},{default:t(()=>[e(D,{type:"submit",class:"me-3"},{default:t(()=>[v(" Submit ")]),_:1}),e(D,{type:"reset",variant:"outlined",color:"secondary",onClick:x},{default:t(()=>[v(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])}}},ie={class:"me-3 d-flex gap-3"},ne={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},ue={class:"d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3"},de={class:"text-sm text-disabled mb-0"},je={__name:"main",async setup(U){let _,h;const u=i(!1),g=async f=>{await ae("/dashboard/admin/fleet",{method:"POST",body:f}),c()},p=i(""),b=i(),w=i(),x=i(),d=i(10),n=i(1),o=i(),r=i(),y=f=>{var s,N;n.value=f.page,o.value=(s=f.sortBy[0])==null?void 0:s.key,r.value=(N=f.sortBy[0])==null?void 0:N.order},{data:m,execute:c}=([_,h]=G(()=>le(oe("/dashboard/admin/fleet",{query:{q:p,type:"vehicle",status:x,plan:w,role:b,itemsPerPage:d,page:n,sortBy:o,orderBy:r}}))),_=await _,h(),_),M=C(()=>m.value.result.data),P=C(()=>m.value.result.total),j=[{title:"Name",key:"name"},{title:"Number",key:"number"},{title:"Status",key:"status"}];return(f,s)=>{const N=E;return R(),I("section",null,[e(T,null,{default:t(()=>[e(F,{class:"d-flex flex-wrap py-4 gap-4"},{default:t(()=>[S("div",ie,[e(N,{items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{"inline-size":"6.25rem"}})]),e(re),S("div",ne,[e(D,{"prepend-icon":"tabler-plus",onClick:s[0]||(s[0]=l=>u.value=!0)},{default:t(()=>[v(" Add new vehicle ")]),_:1})])]),_:1}),e(q),e(a(ee),{"items-per-page":a(d),"onUpdate:itemsPerPage":s[2]||(s[2]=l=>V(d)?d.value=l:null),page:a(n),"onUpdate:page":s[3]||(s[3]=l=>V(n)?n.value=l:null),items:a(M),"items-length":a(P),headers:j,class:"text-no-wrap","onUpdate:options":y},{"item.name":t(({item:l})=>[v(k(l.name),1)]),"item.status":t(({item:l})=>[e(Y,{color:"success",size:"small",label:""},{default:t(()=>[v(k(l.status),1)]),_:2},1024)]),bottom:t(()=>[e(q),S("div",ue,[S("p",de,k(a(te)({page:a(n),itemsPerPage:a(d)},a(P))),1),e(Z,{modelValue:a(n),"onUpdate:modelValue":s[1]||(s[1]=l=>V(n)?n.value=l:null),length:Math.ceil(a(P)/a(d)),"total-visible":f.$vuetify.display.xs?1:Math.ceil(a(P)/a(d))},{prev:t(l=>[e(D,$({variant:"tonal",color:"default"},l,{icon:!1}),{default:t(()=>[v(" Previous ")]),_:2},1040)]),next:t(l=>[e(D,$({variant:"tonal",color:"default"},l,{icon:!1}),{default:t(()=>[v(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1}),e(se,{isDrawerOpen:a(u),"onUpdate:isDrawerOpen":s[4]||(s[4]=l=>V(u)?u.value=l:null),onRobotData:g},null,8,["isDrawerOpen"])])}}};export{je as default};
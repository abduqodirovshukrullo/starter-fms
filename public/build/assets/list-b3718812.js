import{_ as R,a as z}from"./AppDrawerHeaderSection-6fa416fb.js";import{r as h,e as H}from"./validators-4dbf72f5.js";import{r as i,o as T,f as J,e as t,b as e,m as a,a2 as f,a5 as Q,a6 as U,t as D,aD as A,au as G,a4 as C,a as K,c as L,d as N,v as O,a0 as W,q as $}from"./main-fa96fe76.js";import{V as X,_ as Y}from"./VForm-8f6e8f3f.js";import{P as Z}from"./vue3-perfect-scrollbar.esm-8a18cbbb.js";import{V as M}from"./VCard-176ad7dd.js";import{V as I}from"./VCardText-8a86c634.js";import{V as ee,a as S}from"./VRow-43f5ef13.js";import{V as ae}from"./VNavigationDrawer-cc09e668.js";import{b as te,V as le,p as oe}from"./VPagination-8c42e200.js";import{$ as re}from"./api-798ac130.js";import{u as se}from"./useApi-b6e3fef1.js";import{c as ie}from"./createUrl-301e47f6.js";import{V as ne}from"./VSpacer-f316e7fe.js";import{V as F}from"./VDivider-62271e55.js";import"./VTextField-24e4fff8.js";import"./transition-8459a07e.js";import"./easing-9f15041e.js";import"./forwardRefs-8348545e.js";import"./VImg-15db7f2c.js";import"./VAvatar-2e40be3b.js";import"./VOverlay-d4cb1d62.js";import"./lazy-c22c28d8.js";import"./ssrBoot-0f84079e.js";import"./VList-7d7067fc.js";import"./dialog-transition-794a34d6.js";import"./VMenu-b9c3e4a8.js";import"./VCheckboxBtn-96c2df87.js";import"./index-51d05da2.js";const de={__name:"AddNewUserDrawer",props:{isDrawerOpen:{type:Boolean,required:!0}},emits:["update:isDrawerOpen","userData"],setup(q,{emit:v}){const P=q,u=v,b=i(!1),c=i(),w=i(""),_=i(""),y=i(""),x=()=>{u("update:isDrawerOpen",!1),A(()=>{var l,r;(l=c.value)==null||l.reset(),(r=c.value)==null||r.resetValidation()})},n=()=>{var l;(l=c.value)==null||l.validate().then(({valid:r})=>{r&&(u("userData",{id:0,name:w.value,email:_.value,password:y.value}),u("update:isDrawerOpen",!1),A(()=>{var g,m;(g=c.value)==null||g.reset(),(m=c.value)==null||m.resetValidation()}))})},d=l=>{u("update:isDrawerOpen",l)};return(l,r)=>{const g=R,m=Y;return T(),J(ae,{temporary:"",width:400,location:"end",class:"scrollable-content","model-value":P.isDrawerOpen,"onUpdate:modelValue":d},{default:t(()=>[e(g,{title:"Add User",onCancel:x}),e(a(Z),{options:{wheelPropagation:!1}},{default:t(()=>[e(M,{flat:""},{default:t(()=>[e(I,null,{default:t(()=>[e(X,{ref_key:"refForm",ref:c,modelValue:a(b),"onUpdate:modelValue":r[3]||(r[3]=p=>f(b)?b.value=p:null),onSubmit:Q(n,["prevent"])},{default:t(()=>[e(ee,null,{default:t(()=>[e(S,{cols:"12"},{default:t(()=>[e(m,{modelValue:a(w),"onUpdate:modelValue":r[0]||(r[0]=p=>f(w)?w.value=p:null),rules:["requiredValidator"in l?l.requiredValidator:a(h)],label:"Full Name",placeholder:"John Doe"},null,8,["modelValue","rules"])]),_:1}),e(S,{cols:"12"},{default:t(()=>[e(m,{modelValue:a(_),"onUpdate:modelValue":r[1]||(r[1]=p=>f(_)?_.value=p:null),rules:["requiredValidator"in l?l.requiredValidator:a(h),"emailValidator"in l?l.emailValidator:a(H)],label:"Email",placeholder:"johndoe@email.com"},null,8,["modelValue","rules"])]),_:1}),e(S,{cols:"12"},{default:t(()=>[e(m,{modelValue:a(y),"onUpdate:modelValue":r[2]||(r[2]=p=>f(y)?y.value=p:null),type:"password",rules:["requiredValidator"in l?l.requiredValidator:a(h)],label:"Password"},null,8,["modelValue","rules"])]),_:1}),e(S,{cols:"12"},{default:t(()=>[e(U,{type:"submit",class:"me-3"},{default:t(()=>[D(" Submit ")]),_:1}),e(U,{type:"reset",variant:"outlined",color:"secondary",onClick:x},{default:t(()=>[D(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])}}},ue={class:"me-3 d-flex gap-3"},me={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},pe={class:"d-flex align-center justify-sm-space-between justify-center flex-wrap gap-3 pa-5 pt-3"},ce={class:"text-sm text-disabled mb-0"},ze={__name:"list",async setup(q){let v,P;const u=i(!1),b=async V=>{await re("/dashboard/admin/user",{method:"POST",body:V}),p()},c=[{title:"User",key:"name"},{title:"Email",key:"email"},{title:"Created at",key:"created_at"},{title:"Actions",key:"actions",sortable:!1}],w=i(""),_=i(),y=i(),x=i(),n=i(10),d=i(1),l=i(),r=i(),g=V=>{var s,B;d.value=V.page,l.value=(s=V.sortBy[0])==null?void 0:s.key,r.value=(B=V.sortBy[0])==null?void 0:B.order},{data:m,execute:p}=([v,P]=G(()=>se(ie("/dashboard/admin/user",{query:{q:w,status:x,plan:y,role:_,itemsPerPage:n,page:d,sortBy:l,orderBy:r}}))),v=await v,P(),v),j=C(()=>m.value.result.data),k=C(()=>m.value.result.total);return(V,s)=>{const B=z,E=K("IconBtn");return T(),L("section",null,[e(M,null,{default:t(()=>[e(I,{class:"d-flex flex-wrap py-4 gap-4"},{default:t(()=>[N("div",ue,[e(B,{"model-value":a(n),items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{"inline-size":"6.25rem"},"onUpdate:modelValue":s[0]||(s[0]=o=>n.value=parseInt(o,10))},null,8,["model-value"])]),e(ne),N("div",me,[e(U,{"prepend-icon":"tabler-plus",onClick:s[1]||(s[1]=o=>u.value=!0)},{default:t(()=>[D(" Add New User ")]),_:1})])]),_:1}),e(F),e(a(le),{"items-per-page":a(n),"onUpdate:itemsPerPage":s[3]||(s[3]=o=>f(n)?n.value=o:null),page:a(d),"onUpdate:page":s[4]||(s[4]=o=>f(d)?d.value=o:null),items:a(j),"items-length":a(k),headers:c,class:"text-no-wrap","onUpdate:options":g},{"item.created_at":t(({item:o})=>[D(O(new Date(o.created_at).toDateString()),1)]),"item.actions":t(({item:o})=>[e(E,{to:{name:"users-id",params:{id:o.id}}},{default:t(()=>[e(W,{icon:"tabler-eye"})]),_:2},1032,["to"])]),bottom:t(()=>[e(F),N("div",pe,[N("p",ce,O(a(oe)({page:a(d),itemsPerPage:a(n)},a(k))),1),e(te,{modelValue:a(d),"onUpdate:modelValue":s[2]||(s[2]=o=>f(d)?d.value=o:null),length:Math.ceil(a(k)/a(n)),"total-visible":V.$vuetify.display.xs?1:Math.ceil(a(k)/a(n))},{prev:t(o=>[e(U,$({variant:"tonal",color:"default"},o,{icon:!1}),{default:t(()=>[D(" Previous ")]),_:2},1040)]),next:t(o=>[e(U,$({variant:"tonal",color:"default"},o,{icon:!1}),{default:t(()=>[D(" Next ")]),_:2},1040)]),_:1},8,["modelValue","length","total-visible"])])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1}),e(de,{isDrawerOpen:a(u),"onUpdate:isDrawerOpen":s[5]||(s[5]=o=>f(u)?u.value=o:null),onUserData:b},null,8,["isDrawerOpen"])])}}};export{ze as default};
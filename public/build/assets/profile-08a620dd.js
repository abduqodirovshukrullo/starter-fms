import{r as y,e as h}from"./validators-4dbf72f5.js";import{k as q,r as f,o as _,f as k,e as a,b as e,n as s,a3 as V,a6 as F,a7 as C,v as w,z as N,aE as x,ah as B,av as T,c as U}from"./main-8f4bf164.js";import{V as A,_ as E}from"./VForm-aacac416.js";import{a as p,V as v}from"./VRow-bdc8a60e.js";import{V as R}from"./VCard-b110a604.js";import{V as S}from"./VCardText-e36fdb2d.js";import{u as $}from"./useApi-e3dff6f1.js";import"./VTextField-6d0acdda.js";import"./transition-be9978a2.js";import"./easing-9f15041e.js";import"./forwardRefs-8348545e.js";import"./VImg-2da5316b.js";import"./VAvatar-f2225889.js";const j={__name:"UserProfile",props:{userData:{type:Object,required:!0}},setup(c){q();const o=c,u=f(!1),i=f(),d=f(""),n=f(""),b=f(""),D=()=>{var l;(l=i.value)==null||l.validate().then(({valid:t})=>{t&&(emit("userData",{id:0,name:d.value,email:n.value,password:b.value}),x(()=>{var m,r;(m=i.value)==null||m.reset(),(r=i.value)==null||r.resetValidation()}))})};return(l,t)=>{const m=E;return _(),k(v,null,{default:a(()=>[e(p,{cols:"12"},{default:a(()=>[c.userData?(_(),k(R,{key:0,flat:""},{default:a(()=>[e(S,null,{default:a(()=>[e(A,{ref_key:"refForm",ref:i,modelValue:s(u),"onUpdate:modelValue":t[2]||(t[2]=r=>V(u)?u.value=r:null),onSubmit:F(D,["prevent"])},{default:a(()=>[e(v,null,{default:a(()=>[e(p,{cols:"12"},{default:a(()=>[e(m,{modelValue:s(d),"onUpdate:modelValue":t[0]||(t[0]=r=>V(d)?d.value=r:null),rules:["requiredValidator"in l?l.requiredValidator:s(y)],label:"Full Name",placeholder:o.userData.name},null,8,["modelValue","rules","placeholder"])]),_:1}),e(p,{cols:"12"},{default:a(()=>[e(m,{modelValue:s(n),"onUpdate:modelValue":t[1]||(t[1]=r=>V(n)?n.value=r:null),rules:["requiredValidator"in l?l.requiredValidator:s(y),"emailValidator"in l?l.emailValidator:s(h)],label:"Email",placeholder:o.userData.email},null,8,["modelValue","rules","placeholder"])]),_:1}),e(p,{cols:"12"},{default:a(()=>[e(C,{type:"submit",class:"me-3"},{default:a(()=>[w(" Submit ")]),_:1}),e(C,{type:"reset",variant:"outlined",color:"secondary"},{default:a(()=>[w(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})):N("",!0)]),_:1})]),_:1})}}},X={__name:"profile",async setup(c){let o,u;const i=B("userData"),{data:d}=([o,u]=T(()=>$(`/dashboard/admin/user/${i.value.id}`)),o=await o,u(),o);return(n,b)=>(_(),U("section",null,[e(v,{class:"d-flex justify-center"},{default:a(()=>[e(p,{cols:"4",md:"5",lg:"4"},{default:a(()=>[e(j,{"user-data":s(d).result},null,8,["user-data"])]),_:1})]),_:1})]))}};export{X as default};

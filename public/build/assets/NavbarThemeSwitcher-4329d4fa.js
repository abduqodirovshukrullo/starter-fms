import{a7 as f,r as v,w as V,a as g,o as c,f as i,e as o,b as s,a0 as y,m as n,d as x,v as h,a2 as k,c as b,F as w,h as B,t as S}from"./main-40cc9b9a.js";import{V as C}from"./VTooltip-80291ca1.js";import{V as I}from"./VMenu-420ee6e1.js";import{V as T,a as N}from"./VList-6747a48b.js";import"./VOverlay-be1f2100.js";import"./forwardRefs-6ea3df5c.js";import"./VImg-3a8899fa.js";import"./VAvatar-3f26509e.js";import"./VDivider-466b6769.js";const z={class:"text-capitalize"},L={__name:"ThemeSwitcher",props:{themes:{type:Array,required:!0}},setup(m){const r=m,t=f(),a=v([t.theme]);return V(()=>t.theme,()=>{a.value=[t.theme]},{deep:!0}),(l,p)=>{const d=g("IconBtn");return c(),i(d,{color:"rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity))"},{default:o(()=>{var u;return[s(y,{icon:(u=r.themes.find(e=>e.name===n(t).theme))==null?void 0:u.icon,size:"26"},null,8,["icon"]),s(C,{activator:"parent","open-delay":"1000","scroll-strategy":"close"},{default:o(()=>[x("span",z,h(n(t).theme),1)]),_:1}),s(I,{activator:"parent",offset:"14px"},{default:o(()=>[s(T,{selected:n(a),"onUpdate:selected":p[0]||(p[0]=e=>k(a)?a.value=e:null)},{default:o(()=>[(c(!0),b(w,null,B(r.themes,({name:e,icon:_})=>(c(),i(N,{key:e,value:e,"prepend-icon":_,color:"primary",class:"text-capitalize",onClick:()=>{n(t).theme=e}},{default:o(()=>[S(h(e),1)]),_:2},1032,["value","prepend-icon","onClick"]))),128))]),_:1},8,["selected"])]),_:1})]}),_:1})}}},j={__name:"NavbarThemeSwitcher",setup(m){const r=[{name:"system",icon:"tabler-device-laptop"},{name:"light",icon:"tabler-sun-high"},{name:"dark",icon:"tabler-moon"}];return(t,a)=>{const l=L;return c(),i(l,{themes:r})}}};export{j as default};
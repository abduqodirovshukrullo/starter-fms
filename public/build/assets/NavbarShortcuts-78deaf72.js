import{P as b}from"./vue3-perfect-scrollbar.esm-6646fc21.js";import{k as h,a as g,o as s,f as n,e,b as t,a1 as r,v as V,n as p,c as x,F as y,i as v,y as C,d as m,x as d}from"./main-8f4bf164.js";import{V as S}from"./VMenu-83c355c3.js";import{V as k,a as A,b as I}from"./VCard-b110a604.js";import{V as B}from"./VDivider-730229d6.js";import{V as w,a as D}from"./VRow-bdc8a60e.js";import{V as M}from"./VAvatar-f2225889.js";import"./VOverlay-aedc1a4f.js";import"./easing-9f15041e.js";import"./lazy-5892a07e.js";import"./transition-be9978a2.js";import"./forwardRefs-8348545e.js";import"./dialog-transition-169eb89b.js";import"./VCardText-e36fdb2d.js";import"./VImg-2da5316b.js";const N={class:"text-base font-weight-medium mt-2 mb-0"},P={class:"text-sm"},z={__name:"Shortcuts",props:{togglerIcon:{type:String,required:!1,default:"tabler-layout-grid-add"},shortcuts:{type:Array,required:!0}},setup(l){const o=l,i=h();return(_,c)=>{const u=g("IconBtn");return s(),n(u,null,{default:e(()=>[t(r,{size:"26",icon:o.togglerIcon},null,8,["icon"]),t(S,{activator:"parent",offset:"14px",location:"bottom end"},{default:e(()=>[t(k,{width:"340","max-height":"560",class:"d-flex flex-column"},{default:e(()=>[t(A,{class:"py-4"},{append:e(()=>[t(u,null,{default:e(()=>[t(r,{icon:"tabler-layout-grid-add"})]),_:1})]),default:e(()=>[t(I,null,{default:e(()=>[V("Shortcuts")]),_:1})]),_:1}),t(B),t(p(b),{options:{wheelPropagation:!1}},{default:e(()=>[t(w,{class:"ma-0 mt-n1"},{default:e(()=>[(s(!0),x(y,null,v(o.shortcuts,(a,f)=>(s(),n(D,{key:a.title,cols:"6",class:C(["text-center border-t cursor-pointer pa-4 shortcut-icon",(f+1)%2?"border-e":""]),onClick:R=>p(i).push(a.to)},{default:e(()=>[t(M,{variant:"tonal",size:"48"},{default:e(()=>[t(r,{icon:a.icon},null,8,["icon"])]),_:2},1024),m("h6",N,d(a.title),1),m("span",P,d(a.subtitle),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},X={__name:"NavbarShortcuts",setup(l){const o=[{icon:"tabler-calendar",title:"Calendar",subtitle:"Appointments",to:{name:"apps-calendar"}},{icon:"tabler-file",title:"Invoice App",subtitle:"Manage Accounts",to:{name:"apps-invoice-list"}},{icon:"tabler-user",title:"Users",subtitle:"Manage Users",to:{name:"apps-user-list"}},{icon:"tabler-lock",title:"Role Management",subtitle:"Permission",to:{name:"apps-roles"}},{icon:"tabler-layout-dashboard",title:"Dashboard",subtitle:"Dashboard Analytics",to:{name:"dashboards-analytics"}},{icon:"tabler-settings",title:"Settings",subtitle:"Account Settings",to:{name:"pages-account-settings-tab",params:{tab:"account"}}}];return(i,_)=>{const c=z;return s(),n(c,{shortcuts:o})}}};export{X as default};
import{ac as A,ae as L,af as $,r as V,cW as F,w as y,bq as C,a5 as K,s as k,ah as T,b as o,cL as U,d5 as z,dj as N,a as O,o as B,f as j,e as c,n as p,a3 as q,ck as I,d as f,a1 as S,K as x,c as M,F as W,i as Q,A as g,v as X,x as E,L as w,R as G,U as H}from"./main-bb175efe.js";import{P as J}from"./vue3-perfect-scrollbar.esm-ad071d18.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Z}from"./VCard-4f4d4a2d.js";import{V as P}from"./VCardText-4e45446e.js";import{V as ee}from"./VTextField-aa412089.js";import{V as ae}from"./VDivider-53e8f013.js";import{V as te,a as se}from"./VList-f171d29c.js";import{m as oe,u as le,V as R,f as re}from"./forwardRefs-452d2fae.js";import{V as ne}from"./dialog-transition-62ebad1f.js";import"./VAvatar-ac4a682b.js";import"./VImg-eedbfd95.js";const ie=A({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...oe({origin:"center center",scrollStrategy:"block",transition:{component:ne},zIndex:2400})},"VDialog"),ce=L()({name:"VDialog",props:ie(),emits:{"update:modelValue":t=>!0},setup(t,_){let{slots:r}=_;const u=$(t,"modelValue"),{scopeId:b}=le(),n=V();function h(a){var d,e;const s=a.relatedTarget,i=a.target;if(s!==i&&((d=n.value)!=null&&d.contentEl)&&((e=n.value)!=null&&e.globalTop)&&![document,n.value.contentEl].includes(i)&&!n.value.contentEl.contains(i)){const l=z(n.value.contentEl);if(!l.length)return;const v=l[0],m=l[l.length-1];s===v?m.focus():v.focus()}}F&&y(()=>u.value&&t.retainFocus,a=>{a?document.addEventListener("focusin",h):document.removeEventListener("focusin",h)},{immediate:!0}),y(u,async a=>{var s,i;await C(),a?(s=n.value.contentEl)==null||s.focus({preventScroll:!0}):(i=n.value.activatorEl)==null||i.focus({preventScroll:!0})});const D=K(()=>k({"aria-haspopup":"dialog","aria-expanded":String(u.value)},t.activatorProps));return T(()=>{const[a]=R.filterProps(t);return o(R,k({ref:n,class:["v-dialog",{"v-dialog--fullscreen":t.fullscreen,"v-dialog--scrollable":t.scrollable},t.class],style:t.style},a,{modelValue:u.value,"onUpdate:modelValue":s=>u.value=s,"aria-modal":"true",activatorProps:D.value,role:"dialog"},b),{activator:r.activator,default:function(){for(var s=arguments.length,i=new Array(s),d=0;d<s;d++)i[d]=arguments[d];return o(U,{root:"VDialog"},{default:()=>{var e;return[(e=r.default)==null?void 0:e.call(r,...i)]}})}})}),re({},n)}}),ue=t=>(G("data-v-b2ceff69"),t=t(),H(),t),de={class:"d-flex align-center text-high-emphasis me-1"},pe={class:"d-flex align-start"},fe={class:"h-100"},me={class:"h-100"},ve={class:"app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis h-100"},he={class:"d-flex align-center flex-wrap justify-center gap-2 text-h6 my-3"},ge=ue(()=>f("span",null,"No Result For ",-1)),Ve={__name:"AppBarSearch",props:{isDialogVisible:{type:Boolean,required:!0},searchResults:{type:Array,required:!0}},emits:["update:isDialogVisible","search"],setup(t,{emit:_}){const r=t,u=_,{ctrl_k:b,meta_k:n}=N({passive:!1,onEventFired(e){e.ctrlKey&&e.key==="k"&&e.type==="keydown"&&e.preventDefault()}}),h=V(),D=V(),a=V("");y([b,n],()=>{u("update:isDialogVisible",!0)});const s=()=>{a.value="",u("update:isDialogVisible",!1)},i=e=>{var l,v;e.key==="ArrowDown"?(e.preventDefault(),(l=h.value)==null||l.focus("next")):e.key==="ArrowUp"&&(e.preventDefault(),(v=h.value)==null||v.focus("prev"))},d=e=>{a.value="",u("update:isDialogVisible",e)};return y(()=>r.isDialogVisible,()=>{a.value=""}),(e,l)=>{const v=O("IconBtn");return B(),j(ce,{"max-width":"600","model-value":r.isDialogVisible,height:e.$vuetify.display.smAndUp?"550":"100%",fullscreen:e.$vuetify.display.width<600,class:"app-bar-search-dialog","onUpdate:modelValue":d,onKeyup:I(s,["esc"])},{default:c(()=>[o(Z,{height:"100%",width:"100%",class:"position-relative"},{default:c(()=>[o(P,{class:"pt-2"},{default:c(()=>[o(ee,{ref_key:"refSearchInput",ref:D,modelValue:p(a),"onUpdate:modelValue":[l[0]||(l[0]=m=>q(a)?a.value=m:null),l[1]||(l[1]=m=>e.$emit("search",p(a)))],autofocus:"",density:"comfortable",variant:"plain",onKeyup:I(s,["esc"]),onKeydown:i},{"prepend-inner":c(()=>[f("div",de,[o(S,{size:"22",icon:"tabler-search",style:{opacity:"1"}})])]),"append-inner":c(()=>[f("div",pe,[f("div",{class:"text-base text-disabled cursor-pointer me-1",onClick:s}," [esc] "),o(v,{size:"22",onClick:s},{default:c(()=>[o(S,{icon:"tabler-x",size:"20"})]),_:1})])]),_:1},8,["modelValue"])]),_:1}),o(ae),o(p(J),{options:{wheelPropagation:!1,suppressScrollX:!0},class:"h-100"},{default:c(()=>[x(o(p(te),{ref_key:"refSearchList",ref:h,density:"compact",class:"app-bar-search-list"},{default:c(()=>[(B(!0),M(W,null,Q(r.searchResults,m=>g(e.$slots,"searchResult",{key:m,item:m},()=>[o(p(se),null,{default:c(()=>[X(E(m),1)]),_:2},1024)],!0)),128))]),_:3},512),[[w,p(a).length&&!!r.searchResults.length]]),x(f("div",fe,[g(e.$slots,"suggestions",{},void 0,!0)],512),[[w,!!r.searchResults&&!p(a)&&e.$slots.suggestions]]),x(f("div",me,[g(e.$slots,"noData",{},()=>[o(P,{class:"h-100"},{default:c(()=>[f("div",ve,[o(S,{size:"75",icon:"tabler-file-x"}),f("div",he,[ge,f("span",null,'"'+E(p(a))+'"',1)]),g(e.$slots,"noDataSuggestion",{},void 0,!0)])]),_:3})],!0)],512),[[w,!r.searchResults.length&&p(a).length]])]),_:3})]),_:3})]),_:3},8,["model-value","height","fullscreen"])}}},Re=Y(Ve,[["__scopeId","data-v-b2ceff69"]]);export{Re as default};

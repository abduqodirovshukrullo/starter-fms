import{c as i}from"./VAvatar-3f26509e.js";import{a1 as u,a as p,o,f as s,e,b as t,a0 as m,m as d,c as f,F as _,h as V,t as g,v}from"./main-40cc9b9a.js";import{V as I}from"./VMenu-420ee6e1.js";import{V as L,a as b,b as k}from"./VList-6747a48b.js";const q=i("v-spacer","div","VSpacer"),w={__name:"I18n",props:{languages:{type:Array,required:!0},location:{type:null,required:!1,default:"bottom end"}},setup(l){const n=l,{locale:r}=u({useScope:"global"});return(x,y)=>{const c=p("IconBtn");return o(),s(c,null,{default:e(()=>[t(m,{size:"26",icon:"tabler-language"}),t(I,{activator:"parent",location:n.location,offset:"14px"},{default:e(()=>[t(L,{selected:[d(r)],color:"primary","min-width":"175px"},{default:e(()=>[(o(!0),f(_,null,V(n.languages,a=>(o(),s(b,{key:a.i18nLang,value:a.i18nLang,onClick:B=>r.value=a.i18nLang},{default:e(()=>[t(k,null,{default:e(()=>[g(v(a.label),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:1},8,["selected"])]),_:1},8,["location"])]),_:1})}}};export{q as V,w as _};
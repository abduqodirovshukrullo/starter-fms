import{m as T,a as k,u as A,b as y,V as p}from"./VOverlay-5272bf9c.js";import{f as S}from"./forwardRefs-6ea3df5c.js";import{a8 as K,a9 as O,aa as U,ab as I,ac as R,a4 as g,r as F,U as L,au as N,O as $,w as j,q as w,ad as q,b as V,av as z,aw as B,ax as b,ay as G,az as P}from"./main-275d6db0.js";const H=K({id:String,...O(T({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:k}}),["absolute"])},"VMenu"),Y=U()({name:"VMenu",props:H(),emits:{"update:modelValue":l=>!0},setup(l,E){let{slots:i}=E;const r=I(l,"modelValue"),{scopeId:x}=A(),h=R(),f=g(()=>l.id||`v-menu-${h}`),n=F(),a=L(y,null),c=N(0);$(y,{register(){++c.value},unregister(){--c.value},closeParents(){setTimeout(()=>{c.value||(r.value=!1,a==null||a.closeParents())},40)}});async function v(e){var s,u,d;const t=e.relatedTarget,o=e.target;await B(),r.value&&t!==o&&((s=n.value)!=null&&s.contentEl)&&((u=n.value)!=null&&u.globalTop)&&![document,n.value.contentEl].includes(o)&&!n.value.contentEl.contains(o)&&((d=b(n.value.contentEl)[0])==null||d.focus())}j(r,e=>{e?(a==null||a.register(),document.addEventListener("focusin",v,{once:!0})):(a==null||a.unregister(),document.removeEventListener("focusin",v))});function C(){a==null||a.closeParents()}function D(e){var t,o,s;l.disabled||e.key==="Tab"&&(G(b((t=n.value)==null?void 0:t.contentEl,!1),e.shiftKey?"prev":"next",d=>d.tabIndex>=0)||(r.value=!1,(s=(o=n.value)==null?void 0:o.activatorEl)==null||s.focus()))}function m(e){var o;if(l.disabled)return;const t=(o=n.value)==null?void 0:o.contentEl;t&&r.value?e.key==="ArrowDown"?(e.preventDefault(),P(t,"next")):e.key==="ArrowUp"&&(e.preventDefault(),P(t,"prev")):["ArrowDown","ArrowUp"].includes(e.key)&&(r.value=!0,e.preventDefault(),setTimeout(()=>setTimeout(()=>m(e))))}const M=g(()=>w({"aria-haspopup":"menu","aria-expanded":String(r.value),"aria-owns":f.value,onKeydown:m},l.activatorProps));return q(()=>{const[e]=p.filterProps(l);return V(p,w({ref:n,class:["v-menu",l.class],style:l.style},e,{modelValue:r.value,"onUpdate:modelValue":t=>r.value=t,absolute:!0,activatorProps:M.value,"onClick:outside":C,onKeydown:D},x),{activator:i.activator,default:function(){for(var t=arguments.length,o=new Array(t),s=0;s<t;s++)o[s]=arguments[s];return V(z,{root:"VMenu"},{default:()=>{var u;return[(u=i.default)==null?void 0:u.call(i,...o)]}})}})}),S({id:f,ΨopenChildren:c},n)}});export{Y as V};

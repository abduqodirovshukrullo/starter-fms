import{ac as I,am as B,cQ as L,ae as O,cS as U,ah as C,b as a,a5 as y,N as K,s as F,T as Q,di as W,bS as S,r as G,w as z,bt as J,bq as X,K as j,bK as Y,F as Z,cU as p,L as ee}from"./main-bb175efe.js";function te(e){return{aspectStyles:y(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const q=I({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...B(),...L()},"VResponsive"),k=O()({name:"VResponsive",props:q(),setup(e,l){let{slots:s}=l;const{aspectStyles:n}=te(e),{dimensionStyles:c}=U(e);return C(()=>{var r;return a("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[c.value,e.style]},[a("div",{class:"v-responsive__sizer",style:n.value},null),(r=s.additional)==null?void 0:r.call(s),s.default&&a("div",{class:["v-responsive__content",e.contentClass]},[s.default()])])}),{}}}),ne=I({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),h=(e,l)=>{let{slots:s}=l;const{transition:n,disabled:c,...r}=e,{component:i=Q,...v}=typeof n=="object"?n:{};return K(i,F(typeof n=="string"?{name:c?"":n}:v,r,{disabled:c}),s)};function ae(e,l){if(!W)return;const s=l.modifiers||{},n=l.value,{handler:c,options:r}=typeof n=="object"?n:{handler:n,options:{}},i=new IntersectionObserver(function(){var f;let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],g=arguments.length>1?arguments[1]:void 0;const o=(f=e._observe)==null?void 0:f[l.instance.$.uid];if(!o)return;const d=v.some(_=>_.isIntersecting);c&&(!s.quiet||o.init)&&(!s.once||d||o.init)&&c(d,v,g),d&&s.once?D(e,l):o.init=!0},r);e._observe=Object(e._observe),e._observe[l.instance.$.uid]={init:!1,observer:i},i.observe(e)}function D(e,l){var n;const s=(n=e._observe)==null?void 0:n[l.instance.$.uid];s&&(s.observer.unobserve(e),delete e._observe[l.instance.$.uid])}const re={mounted:ae,unmounted:D},se=re,ie=I({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...q(),...B(),...ne()},"VImg"),oe=O()({name:"VImg",directives:{intersect:se},props:ie(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:s,slots:n}=l;const c=S(""),r=G(),i=S(e.eager?"loading":"idle"),v=S(),g=S(),o=y(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),d=y(()=>o.value.aspect||v.value/g.value||0);z(()=>e.src,()=>{f(i.value!=="idle")}),z(d,(t,u)=>{!t&&u&&r.value&&b(r.value)}),J(()=>f());function f(t){if(!(e.eager&&t)&&!(W&&!t&&!e.eager)){if(i.value="loading",o.value.lazySrc){const u=new Image;u.src=o.value.lazySrc,b(u,null)}o.value.src&&X(()=>{var u,m;if(s("loadstart",((u=r.value)==null?void 0:u.currentSrc)||o.value.src),(m=r.value)!=null&&m.complete){if(r.value.naturalWidth||R(),i.value==="error")return;d.value||b(r.value,null),_()}else d.value||b(r.value),w()})}}function _(){var t;w(),i.value="loaded",s("load",((t=r.value)==null?void 0:t.currentSrc)||o.value.src)}function R(){var t;i.value="error",s("error",((t=r.value)==null?void 0:t.currentSrc)||o.value.src)}function w(){const t=r.value;t&&(c.value=t.currentSrc||t.src)}let V=-1;function b(t){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const m=()=>{clearTimeout(V);const{naturalHeight:N,naturalWidth:$}=t;N||$?(v.value=$,g.value=N):!t.complete&&i.value==="loading"&&u!=null?V=window.setTimeout(m,u):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,g.value=1)};m()}const P=y(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),E=()=>{var m;if(!o.value.src||i.value==="idle")return null;const t=a("img",{class:["v-img__img",P.value],src:o.value.src,srcset:o.value.srcset,alt:e.alt,sizes:e.sizes,ref:r,onLoad:_,onError:R},null),u=(m=n.sources)==null?void 0:m.call(n);return a(h,{transition:e.transition,appear:!0},{default:()=>[j(u?a("picture",{class:"v-img__picture"},[u,t]):t,[[ee,i.value==="loaded"]])]})},M=()=>a(h,{transition:e.transition},{default:()=>[o.value.lazySrc&&i.value!=="loaded"&&a("img",{class:["v-img__img","v-img__img--preload",P.value],src:o.value.lazySrc,alt:e.alt},null)]}),x=()=>n.placeholder?a(h,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!n.error)&&a("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,A=()=>n.error?a(h,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&a("div",{class:"v-img__error"},[n.error()])]}):null,H=()=>e.gradient?a("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,T=S(!1);{const t=z(d,u=>{u&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{T.value=!0})}),t())})}return C(()=>{const[t]=k.filterProps(e);return j(a(k,F({class:["v-img",{"v-img--booting":!T.value},e.class],style:[{width:p(e.width==="auto"?v.value:e.width)},e.style]},t,{aspectRatio:d.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>a(Z,null,[a(E,null,null),a(M,null,null),a(H,null,null),a(x,null,null),a(A,null,null)]),default:n.default}),[[Y("intersect"),{handler:f,options:e.options},null,{once:!0}]])}),{currentSrc:c,image:r,state:i,naturalWidth:v,naturalHeight:g}}});export{se as I,h as M,oe as V,ne as m};
import{bW as Se,bX as xe,a8 as K,r as W,a_ as q,bj as le,bw as R,w as M,bY as Le,bZ as fe,b_ as ee,b$ as te,c0 as ve,a4 as C,aD as Q,c1 as de,aN as L,b1 as me,bt as se,c2 as Oe,U as ke,c3 as Me,bv as ce,q as V,by as Re,aU as G,aF as Be,G as De,c4 as Pe,O as Ne,bR as _e,bK as He,ah as Ie,aS as Ve,am as We,aa as qe,ab as $e,az as ze,aL as je,an as Ye,$ as Ge,aT as Ke,bh as Ue,ad as Xe,b as N,c5 as Ze,J as Je,K as Qe,b4 as et,F as tt,T as nt,c6 as ot}from"./main-29a7e903.js";import{B as ne,g as ye,n as at,a as it,s as rt}from"./easing-9f15041e.js";import{m as lt,u as st}from"./lazy-4bc7490f.js";import{m as ct,M as ut}from"./transition-0db7838c.js";const U=new WeakMap;function ft(e,t){Object.keys(t).forEach(n=>{if(Se(n)){const o=xe(n),a=U.get(e);if(t[n]==null)a==null||a.forEach(i=>{const[s,l]=i;s===o&&(e.removeEventListener(o,l),a.delete(i))});else if(!a||![...a].some(i=>i[0]===o&&i[1]===t[n])){e.addEventListener(o,t[n]);const i=a||new Set;i.add([o,t[n]]),U.has(e)||U.set(e,i)}}else t[n]==null?e.removeAttribute(n):e.setAttribute(n,t[n])})}function vt(e,t){Object.keys(t).forEach(n=>{if(Se(n)){const o=xe(n),a=U.get(e);a==null||a.forEach(i=>{const[s,l]=i;s===o&&(e.removeEventListener(o,l),a.delete(i))})}else e.removeAttribute(n)})}function Ce(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function dt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(t?mt(e):ue(e))return e;e=e.parentElement}return document.scrollingElement}function Z(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(ue(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function ue(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function mt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["scroll","auto"].includes(t.overflowY)}function yt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function oe(e,t){return{x:e.x+t.x,y:e.y+t.y}}function gt(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ge(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:o}=e,a=o==="left"?0:o==="center"?t.width/2:o==="right"?t.width:o,i=n==="top"?0:n==="bottom"?t.height:n;return oe({x:a,y:i},t)}else if(e.side==="left"||e.side==="right"){const{side:n,align:o}=e,a=n==="left"?0:n==="right"?t.width:n,i=o==="top"?0:o==="center"?t.height/2:o==="bottom"?t.height:o;return oe({x:a,y:i},t)}return oe({x:t.width/2,y:t.height/2},t)}const pe={static:wt,connected:St},ht=K({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in pe},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function bt(e,t){const n=W({}),o=W();q&&(le(()=>!!(t.isActive.value&&e.locationStrategy),i=>{var s,l;M(()=>e.locationStrategy,i),R(()=>{o.value=void 0}),typeof e.locationStrategy=="function"?o.value=(s=e.locationStrategy(t,e,n))==null?void 0:s.updateLocation:o.value=(l=pe[e.locationStrategy](t,e,n))==null?void 0:l.updateLocation}),window.addEventListener("resize",a,{passive:!0}),R(()=>{window.removeEventListener("resize",a),o.value=void 0}));function a(i){var s;(s=o.value)==null||s.call(o,i)}return{contentStyles:n,updateLocation:o}}function wt(){}function Et(e,t){t?e.style.removeProperty("left"):e.style.removeProperty("right");const n=at(e);return t?n.x+=parseFloat(e.style.right||0):n.x-=parseFloat(e.style.left||0),n.y-=parseFloat(e.style.top||0),n}function St(e,t,n){yt(e.activatorEl.value)&&Object.assign(n.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:i}=Le(()=>{const d=fe(t.location,e.isRtl.value),f=t.origin==="overlap"?d:t.origin==="auto"?ee(d):fe(t.origin,e.isRtl.value);return d.side===f.side&&d.align===te(f).align?{preferredAnchor:ve(d),preferredOrigin:ve(f)}:{preferredAnchor:d,preferredOrigin:f}}),[s,l,c,v]=["minWidth","minHeight","maxWidth","maxHeight"].map(d=>C(()=>{const f=parseFloat(t[d]);return isNaN(f)?1/0:f})),u=C(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const d=t.offset.split(" ").map(parseFloat);return d.length<2&&d.push(0),d}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let g=!1;const b=new ResizeObserver(()=>{g&&P()});M([e.activatorEl,e.contentEl],(d,f)=>{let[k,O]=d,[w,r]=f;w&&b.unobserve(w),k&&b.observe(k),r&&b.unobserve(r),O&&b.observe(O)},{immediate:!0}),R(()=>{b.disconnect()});function P(){if(g=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>g=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const d=e.activatorEl.value.getBoundingClientRect(),f=Et(e.contentEl.value,e.isRtl.value),k=Z(e.contentEl.value),O=12;k.length||(k.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(f.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),f.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const w=k.reduce((S,E)=>{const m=E.getBoundingClientRect(),h=new ne({x:E===document.documentElement?0:m.x,y:E===document.documentElement?0:m.y,width:E.clientWidth,height:E.clientHeight});return S?new ne({x:Math.max(S.left,h.left),y:Math.max(S.top,h.top),width:Math.min(S.right,h.right)-Math.max(S.left,h.left),height:Math.min(S.bottom,h.bottom)-Math.max(S.top,h.top)}):h},void 0);w.x+=O,w.y+=O,w.width-=O*2,w.height-=O*2;let r={anchor:a.value,origin:i.value};function A(S){const E=new ne(f),m=ge(S.anchor,d),h=ge(S.origin,E);let{x:T,y:F}=gt(m,h);switch(S.anchor.side){case"top":F-=u.value[0];break;case"bottom":F+=u.value[0];break;case"left":T-=u.value[0];break;case"right":T+=u.value[0];break}switch(S.anchor.align){case"top":F-=u.value[1];break;case"bottom":F+=u.value[1];break;case"left":T-=u.value[1];break;case"right":T+=u.value[1];break}return E.x+=T,E.y+=F,E.width=Math.min(E.width,c.value),E.height=Math.min(E.height,v.value),{overflows:ye(E,w),x:T,y:F}}let D=0,_=0;const H={x:0,y:0},z={x:!1,y:!1};let j=-1;for(;!(j++>10);){const{x:S,y:E,overflows:m}=A(r);D+=S,_+=E,f.x+=S,f.y+=E;{const h=de(r.anchor),T=m.x.before||m.x.after,F=m.y.before||m.y.after;let $=!1;if(["x","y"].forEach(x=>{if(x==="x"&&T&&!z.x||x==="y"&&F&&!z.y){const y={anchor:{...r.anchor},origin:{...r.origin}},p=x==="x"?h==="y"?te:ee:h==="y"?ee:te;y.anchor=p(y.anchor),y.origin=p(y.origin);const{overflows:I}=A(y);(I[x].before<=m[x].before&&I[x].after<=m[x].after||I[x].before+I[x].after<(m[x].before+m[x].after)/2)&&(r=y,$=z[x]=!0)}}),$)continue}m.x.before&&(D+=m.x.before,f.x+=m.x.before),m.x.after&&(D-=m.x.after,f.x-=m.x.after),m.y.before&&(_+=m.y.before,f.y+=m.y.before),m.y.after&&(_-=m.y.after,f.y-=m.y.after);{const h=ye(f,w);H.x=w.width-h.x.before-h.x.after,H.y=w.height-h.y.before-h.y.after,D+=h.x.before,f.x+=h.x.before,_+=h.y.before,f.y+=h.y.before}break}const B=de(r.anchor);return Object.assign(n.value,{"--v-overlay-anchor-origin":`${r.anchor.side} ${r.anchor.align}`,transformOrigin:`${r.origin.side} ${r.origin.align}`,top:L(ae(_)),left:e.isRtl.value?void 0:L(ae(D)),right:e.isRtl.value?L(ae(-D)):void 0,minWidth:L(B==="y"?Math.min(s.value,d.width):s.value),maxWidth:L(he(me(H.x,s.value===1/0?0:s.value,c.value))),maxHeight:L(he(me(H.y,l.value===1/0?0:l.value,v.value)))}),{available:H,contentBox:f}}return M(()=>[a.value,i.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>P()),Q(()=>{const d=P();if(!d)return;const{available:f,contentBox:k}=d;k.height>f.y&&requestAnimationFrame(()=>{P(),requestAnimationFrame(()=>{P()})})}),{updateLocation:P}}function ae(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function he(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ie=!0;const J=[];function xt(e){!ie||J.length?(J.push(e),re()):(ie=!1,e(),re())}let be=-1;function re(){cancelAnimationFrame(be),be=requestAnimationFrame(()=>{const e=J.shift();e&&e(),J.length?re():ie=!0})}const X={none:null,close:Pt,block:Ct,reposition:pt},Ot=K({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in X}},"VOverlay-scroll-strategies");function kt(e,t){if(!q)return;let n;se(async()=>{n==null||n.stop(),t.isActive.value&&e.scrollStrategy&&(n=Oe(),await Q(),n.active&&n.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(t,e,n):(o=X[e.scrollStrategy])==null||o.call(X,t,e,n)}))}),R(()=>{n==null||n.stop()})}function Pt(e){function t(n){e.isActive.value=!1}Ae(e.activatorEl.value??e.contentEl.value,t)}function Ct(e,t){var s;const n=(s=e.root.value)==null?void 0:s.offsetParent,o=[...new Set([...Z(e.activatorEl.value,t.contained?n:void 0),...Z(e.contentEl.value,t.contained?n:void 0)])].filter(l=>!l.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,i=(l=>ue(l)&&l)(n||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((l,c)=>{l.style.setProperty("--v-body-scroll-x",L(-l.scrollLeft)),l.style.setProperty("--v-body-scroll-y",L(-l.scrollTop)),l!==document.documentElement&&l.style.setProperty("--v-scrollbar-offset",L(a)),l.classList.add("v-overlay-scroll-blocked")}),R(()=>{o.forEach((l,c)=>{const v=parseFloat(l.style.getPropertyValue("--v-body-scroll-x")),u=parseFloat(l.style.getPropertyValue("--v-body-scroll-y"));l.style.removeProperty("--v-body-scroll-x"),l.style.removeProperty("--v-body-scroll-y"),l.style.removeProperty("--v-scrollbar-offset"),l.classList.remove("v-overlay-scroll-blocked"),l.scrollLeft=-v,l.scrollTop=-u}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function pt(e,t,n){let o=!1,a=-1,i=-1;function s(l){xt(()=>{var u,g;const c=performance.now();(g=(u=e.updateLocation).value)==null||g.call(u,l),o=(performance.now()-c)/(1e3/60)>2})}i=(typeof requestIdleCallback>"u"?l=>l():requestIdleCallback)(()=>{n.run(()=>{Ae(e.activatorEl.value??e.contentEl.value,l=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{s(l)})})):s(l)})})}),R(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(i),cancelAnimationFrame(a)})}function Ae(e,t){const n=[document,...Z(e)];n.forEach(o=>{o.addEventListener("scroll",t,{passive:!0})}),R(()=>{n.forEach(o=>{o.removeEventListener("scroll",t)})})}const At=Symbol.for("vuetify:v-menu"),Tt=K({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Ft(e,t){const n={},o=a=>()=>{if(!q)return Promise.resolve(!0);const i=a==="openDelay";return n.closeDelay&&window.clearTimeout(n.closeDelay),delete n.closeDelay,n.openDelay&&window.clearTimeout(n.openDelay),delete n.openDelay,new Promise(s=>{const l=parseInt(e[a]??0,10);n[a]=window.setTimeout(()=>{t==null||t(i),s(i)},l)})};return{runCloseDelay:o("closeDelay"),runOpenDelay:o("openDelay")}}const Lt=K({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Tt()},"VOverlay-activator");function Mt(e,t){let{isActive:n,isTop:o}=t;const a=W();let i=!1,s=!1,l=!0;const c=C(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),v=C(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!c.value),{runOpenDelay:u,runCloseDelay:g}=Ft(e,r=>{r===(e.openOnHover&&i||c.value&&s)&&!(e.openOnHover&&n.value&&!o.value)&&(n.value!==r&&(l=!0),n.value=r)}),b={onClick:r=>{r.stopPropagation(),a.value=r.currentTarget||r.target,n.value=!n.value},onMouseenter:r=>{var A;(A=r.sourceCapabilities)!=null&&A.firesTouchEvents||(i=!0,a.value=r.currentTarget||r.target,u())},onMouseleave:r=>{i=!1,g()},onFocus:r=>{Re(r.target,":focus-visible")!==!1&&(s=!0,r.stopPropagation(),a.value=r.currentTarget||r.target,u())},onBlur:r=>{s=!1,r.stopPropagation(),g()}},P=C(()=>{const r={};return v.value&&(r.onClick=b.onClick),e.openOnHover&&(r.onMouseenter=b.onMouseenter,r.onMouseleave=b.onMouseleave),c.value&&(r.onFocus=b.onFocus,r.onBlur=b.onBlur),r}),d=C(()=>{const r={};if(e.openOnHover&&(r.onMouseenter=()=>{i=!0,u()},r.onMouseleave=()=>{i=!1,g()}),c.value&&(r.onFocusin=()=>{s=!0,u()},r.onFocusout=()=>{s=!1,g()}),e.closeOnContentClick){const A=ke(At,null);r.onClick=()=>{n.value=!1,A==null||A.closeParents()}}return r}),f=C(()=>{const r={};return e.openOnHover&&(r.onMouseenter=()=>{l&&(i=!0,l=!1,u())},r.onMouseleave=()=>{i=!1,g()}),r});M(o,r=>{r&&(e.openOnHover&&!i&&(!c.value||!s)||c.value&&!s&&(!e.openOnHover||!i))&&(n.value=!1)});const k=W();se(()=>{k.value&&Q(()=>{a.value=Me(k.value)})});const O=ce("useActivator");let w;return M(()=>!!e.activator,r=>{r&&q?(w=Oe(),w.run(()=>{Rt(e,O,{activatorEl:a,activatorEvents:P})})):w&&w.stop()},{flush:"post",immediate:!0}),R(()=>{w==null||w.stop()}),{activatorEl:a,activatorRef:k,activatorEvents:P,contentEvents:d,scrimEvents:f}}function Rt(e,t,n){let{activatorEl:o,activatorEvents:a}=n;M(()=>e.activator,(c,v)=>{if(v&&c!==v){const u=l(v);u&&s(u)}c&&Q(()=>i())},{immediate:!0}),M(()=>e.activatorProps,()=>{i()}),R(()=>{s()});function i(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&ft(c,V(a.value,v))}function s(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&vt(c,V(a.value,v))}function l(){var u,g;let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,v;if(c)if(c==="parent"){let b=(g=(u=t==null?void 0:t.proxy)==null?void 0:u.$el)==null?void 0:g.parentNode;for(;b!=null&&b.hasAttribute("data-no-activator");)b=b.parentNode;v=b}else typeof c=="string"?v=document.querySelector(c):"$el"in c?v=c.$el:v=c;return o.value=(v==null?void 0:v.nodeType)===Node.ELEMENT_NODE?v:null,o.value}}function Bt(){if(!q)return G(!1);const{ssr:e}=Be();if(e){const t=G(!1);return De(()=>{t.value=!0}),t}else return G(!0)}function Dt(){const t=ce("useScopeId").vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}const we=Symbol.for("vuetify:stack"),Y=Pe([]);function Nt(e,t,n){const o=ce("useStack"),a=!n,i=ke(we,void 0),s=Pe({activeChildren:new Set});Ne(we,s);const l=G(+t.value);le(e,()=>{var g;const u=(g=Y.at(-1))==null?void 0:g[1];l.value=u?u+10:+t.value,a&&Y.push([o.uid,l.value]),i==null||i.activeChildren.add(o.uid),R(()=>{if(a){const b=He(Y).findIndex(P=>P[0]===o.uid);Y.splice(b,1)}i==null||i.activeChildren.delete(o.uid)})});const c=G(!0);a&&se(()=>{var g;const u=((g=Y.at(-1))==null?void 0:g[0])===o.uid;setTimeout(()=>c.value=u)});const v=C(()=>!s.activeChildren.size);return{globalTop:_e(c),localTop:v,stackStyles:C(()=>({zIndex:l.value}))}}function _t(e){return{teleportTarget:C(()=>{const n=e.value;if(n===!0||!q)return;const o=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function Ht(){return!0}function Te(e,t,n){if(!e||Fe(e,n)===!1)return!1;const o=Ce(t);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof n.value=="object"&&n.value.include||(()=>[]))();return a.push(t),!a.some(i=>i==null?void 0:i.contains(e.target))}function Fe(e,t){return(typeof t.value=="object"&&t.value.closeConditional||Ht)(e)}function It(e,t,n){const o=typeof n.value=="function"?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&Te(e,t,n)&&setTimeout(()=>{Fe(e,n)&&o&&o(e)},0)}function Ee(e,t){const n=Ce(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const Vt={mounted(e,t){const n=a=>It(a,e,t),o=a=>{e._clickOutside.lastMousedownWasOutside=Te(a,e,t)};Ee(e,a=>{a.addEventListener("click",n,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:o}},unmounted(e,t){e._clickOutside&&(Ee(e,n=>{var i;if(!n||!((i=e._clickOutside)!=null&&i[t.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",o,!0),n.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[t.instance.$.uid])}};function Wt(e){const{modelValue:t,color:n,...o}=e;return N(nt,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&N("div",V({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const qt=K({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...Lt(),...Ie(),...Ve(),...lt(),...ht(),...Ot(),...We(),...ct()},"VOverlay"),Gt=qe()({name:"VOverlay",directives:{ClickOutside:Vt},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...qt()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:o,emit:a}=t;const i=$e(e,"modelValue"),s=C({get:()=>i.value,set:y=>{y&&e.disabled||(i.value=y)}}),{teleportTarget:l}=_t(C(()=>e.attach||e.contained)),{themeClasses:c}=ze(e),{rtlClasses:v,isRtl:u}=je(),{hasContent:g,onAfterLeave:b}=st(e,s),P=Ye(C(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:d,localTop:f,stackStyles:k}=Nt(s,Ge(e,"zIndex"),e._disableGlobalStack),{activatorEl:O,activatorRef:w,activatorEvents:r,contentEvents:A,scrimEvents:D}=Mt(e,{isActive:s,isTop:f}),{dimensionStyles:_}=Ke(e),H=Bt(),{scopeId:z}=Dt();M(()=>e.disabled,y=>{y&&(s.value=!1)});const j=W(),B=W(),{contentStyles:S,updateLocation:E}=bt(e,{isRtl:u,contentEl:B,activatorEl:O,isActive:s});kt(e,{root:j,contentEl:B,activatorEl:O,isActive:s,updateLocation:E});function m(y){a("click:outside",y),e.persistent?x():s.value=!1}function h(){return s.value&&d.value}q&&M(s,y=>{y?window.addEventListener("keydown",T):window.removeEventListener("keydown",T)},{immediate:!0});function T(y){var p,I;y.key==="Escape"&&d.value&&(e.persistent?x():(s.value=!1,(p=B.value)!=null&&p.contains(document.activeElement)&&((I=O.value)==null||I.focus())))}const F=Ue();le(()=>e.closeOnBack,()=>{ot(F,y=>{d.value&&s.value?(y(!1),e.persistent?x():s.value=!1):y()})});const $=W();M(()=>s.value&&(e.absolute||e.contained)&&l.value==null,y=>{if(y){const p=dt(j.value);p&&p!==document.scrollingElement&&($.value=p.scrollTop)}});function x(){e.noClickAnimation||B.value&&it(B.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:rt})}return Xe(()=>{var y;return N(tt,null,[(y=n.activator)==null?void 0:y.call(n,{isActive:s.value,props:V({ref:w},r.value,e.activatorProps)}),H.value&&g.value&&N(Ze,{disabled:!l.value,to:l.value},{default:()=>[N("div",V({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},c.value,v.value,e.class],style:[k.value,{top:L($.value)},e.style],ref:j},z,o),[N(Wt,V({color:P,modelValue:s.value&&!!e.scrim},D.value),null),N(ut,{appear:!0,persisted:!0,transition:e.transition,target:O.value,onAfterLeave:()=>{b(),a("afterLeave")}},{default:()=>{var p;return[Je(N("div",V({ref:B,class:["v-overlay__content",e.contentClass],style:[_.value,S.value]},A.value,e.contentProps),[(p=n.default)==null?void 0:p.call(n,{isActive:s})]),[[Qe,s.value],[et("click-outside"),{handler:m,closeConditional:h,include:()=>[O.value]}]])]}})])]})])}),{activatorEl:O,animateClick:x,contentEl:B,globalTop:d,localTop:f,updateLocation:E}}});export{Gt as V,At as a,dt as g,qt as m,Dt as u};

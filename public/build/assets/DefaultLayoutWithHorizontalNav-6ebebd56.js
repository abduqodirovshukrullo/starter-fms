import{_ as Ut}from"./AppLoadingIndicator-2f739d7f.js";import{o as h,c as F,F as Pt,i as $t,f as R,h as L,j as Dt,k as Zt,l as pt,r as H,w as nt,m as te,n as u,p as ee,e as A,d as x,q as $,s as q,t as Bt,v as Vt,x as mt,y as U,z as gt,A as M,b as T,B as ne,C as oe,D as ie,E as se,G as re,H as le,I as O,J as ct,K as At,L as St,T as ae,a as Nt,S as ce}from"./main-bb175efe.js";import ue from"./Footer-53395bc3.js";import fe from"./NavbarThemeSwitcher-f94afbbb.js";import de from"./UserProfile-2269fb96.js";import{V as pe,_ as me}from"./I18n-ed4a010c.js";import{V as ge}from"./VNodeRenderer-23476e81.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VTooltip-265d66ad.js";import"./forwardRefs-452d2fae.js";import"./VImg-eedbfd95.js";import"./VMenu-fd1c3c2d.js";import"./dialog-transition-62ebad1f.js";import"./VList-f171d29c.js";import"./VAvatar-ac4a682b.js";import"./VDivider-53e8f013.js";import"./useAbility-6649afdc.js";import"./VBadge-f0fbbe57.js";const he={class:"nav-items"},ve={__name:"HorizontalNav",props:{navItems:{type:null,required:!0}},setup(t){const e=n=>"children"in n?we:It;return(n,o)=>(h(),F("ul",he,[(h(!0),F(Pt,null,$t(t.navItems,(i,s)=>(h(),R(L(e(i)),{key:s,item:i},null,8,["item"]))),128))]))}},ye={class:"nav-group-label"},we=Object.assign({name:"HorizontalNavGroup"},{__name:"HorizontalNavGroup",props:{item:{type:null,required:!0},childrenAtEnd:{type:Boolean,required:!1,default:!1},isSubItem:{type:Boolean,required:!1,default:!1}},setup(t){const e=t,n=Dt(),o=Zt(),i=pt(),s=H(!1);return nt(()=>n.path,()=>{const r=te(e.item.children,o);s.value=r},{immediate:!0}),(r,l)=>u(ee)(t.item)?(h(),R(u(nn),{key:0,"is-rtl":u(i).isAppRTL,class:U(["nav-group",[{active:u(s),"children-at-end":t.childrenAtEnd,"sub-item":t.isSubItem,disabled:t.item.disable}]]),tag:"li","content-container-tag":"ul","popper-inline-end":t.childrenAtEnd},{content:A(()=>[(h(!0),F(Pt,null,$t(t.item.children,a=>(h(),R(L("children"in a?"HorizontalNavGroup":u(It)),{key:a.title,item:a,"children-at-end":"","is-sub-item":""},null,8,["item"]))),128))]),default:A(()=>[x("div",ye,[(h(),R(L(u($).app.iconRenderer||"div"),q({class:"nav-item-icon"},t.item.icon||u($).verticalNav.defaultNavItemIconProps),null,16)),(h(),R(L(u($).app.i18n.enable?"i18n-t":"span"),q(u(Bt)(t.item.title,"span"),{class:"nav-item-title"}),{default:A(()=>[Vt(mt(t.item.title),1)]),_:1},16)),(h(),R(L(u($).app.iconRenderer||"div"),q(u($).icons.chevronDown,{class:"nav-group-arrow"}),null,16))])]),_:1},8,["is-rtl","class","popper-inline-end"])):gt("",!0)}}),xe={class:"layout-navbar"},be={class:"navbar-content-container"},Ce={class:"layout-horizontal-nav"},Re={class:"horizontal-nav-content-container"},ke={class:"layout-page-content"},Ae={class:"layout-footer"},Se={class:"footer-content-container"},Ne={__name:"HorizontalNavLayout",props:{navItems:{type:null,required:!0}},setup(t){const e=pt();return(n,o)=>(h(),F("div",{class:U(["layout-wrapper",u(e)._layoutClasses])},[x("div",{class:U(["layout-navbar-and-nav-container",u(e).isNavbarBlurEnabled&&"header-blur"])},[x("div",xe,[x("div",be,[M(n.$slots,"navbar")])]),x("div",Ce,[x("div",Re,[T(u(ve),{"nav-items":t.navItems},null,8,["nav-items"])])])],2),x("main",ke,[M(n.$slots,"default")]),x("footer",Ae,[x("div",Se,[M(n.$slots,"footer")])])],2))}},It={__name:"HorizontalNavLink",props:{item:{type:null,required:!0},isSubItem:{type:Boolean,required:!1,default:!1}},setup(t){const e=t;return(n,o)=>u(ne)(t.item.action,t.item.subject)?(h(),F("li",{key:0,class:U(["nav-link",[{"sub-item":e.isSubItem,disabled:t.item.disable}]])},[(h(),R(L(t.item.to?"RouterLink":"a"),q(u(ie)(t.item),{class:{"router-link-active router-link-exact-active":u(oe)(t.item,n.$router)}}),{default:A(()=>[(h(),R(L(u($).app.iconRenderer||"div"),q({class:"nav-item-icon"},t.item.icon||u($).verticalNav.defaultNavItemIconProps),null,16)),(h(),R(L(u($).app.i18n.enable?"i18n-t":"span"),q({class:"nav-item-title"},u(Bt)(t.item.title,"span")),{default:A(()=>[Vt(mt(t.item.title),1)]),_:1},16))]),_:1},16,["class"]))],2)):gt("",!0)}},ut=Math.min,j=Math.max,ot=Math.round,D=t=>({x:t,y:t}),Le={left:"right",right:"left",bottom:"top",top:"bottom"},Ee={start:"end",end:"start"};function Lt(t,e,n){return j(t,ut(e,n))}function ht(t,e){return typeof t=="function"?t(e):t}function X(t){return t.split("-")[0]}function vt(t){return t.split("-")[1]}function Ht(t){return t==="x"?"y":"x"}function Mt(t){return t==="y"?"height":"width"}function yt(t){return["top","bottom"].includes(X(t))?"y":"x"}function Ft(t){return Ht(yt(t))}function _e(t,e,n){n===void 0&&(n=!1);const o=vt(t),i=Ft(t),s=Mt(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=it(r)),[r,it(r)]}function Te(t){const e=it(t);return[ft(t),e,ft(e)]}function ft(t){return t.replace(/start|end/g,e=>Ee[e])}function Oe(t,e,n){const o=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?s:r;default:return[]}}function Pe(t,e,n,o){const i=vt(t);let s=Oe(X(t),n==="start",o);return i&&(s=s.map(r=>r+"-"+i),e&&(s=s.concat(s.map(ft)))),s}function it(t){return t.replace(/left|right|bottom|top/g,e=>Le[e])}function $e(t){return{top:0,right:0,bottom:0,left:0,...t}}function De(t){return typeof t!="number"?$e(t):{top:t,right:t,bottom:t,left:t}}function st(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function Et(t,e,n){let{reference:o,floating:i}=t;const s=yt(e),r=Ft(e),l=Mt(r),a=X(e),c=s==="y",d=o.x+o.width/2-i.width/2,f=o.y+o.height/2-i.height/2,g=o[l]/2-i[l]/2;let p;switch(a){case"top":p={x:d,y:o.y-i.height};break;case"bottom":p={x:d,y:o.y+o.height};break;case"right":p={x:o.x+o.width,y:f};break;case"left":p={x:o.x-i.width,y:f};break;default:p={x:o.x,y:o.y}}switch(vt(e)){case"start":p[r]-=g*(n&&c?-1:1);break;case"end":p[r]+=g*(n&&c?-1:1);break}return p}const Be=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,l=s.filter(Boolean),a=await(r.isRTL==null?void 0:r.isRTL(e));let c=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:f}=Et(c,o,a),g=o,p={},m=0;for(let v=0;v<l.length;v++){const{name:y,fn:w}=l[v],{x:b,y:C,data:_,reset:k}=await w({x:d,y:f,initialPlacement:o,placement:g,strategy:i,middlewareData:p,rects:c,platform:r,elements:{reference:t,floating:e}});if(d=b??d,f=C??f,p={...p,[y]:{...p[y],..._}},k&&m<=50){m++,typeof k=="object"&&(k.placement&&(g=k.placement),k.rects&&(c=k.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):k.rects),{x:d,y:f}=Et(c,g,a)),v=-1;continue}}return{x:d,y:f,placement:g,strategy:i,middlewareData:p}};async function zt(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:f="floating",altBoundary:g=!1,padding:p=0}=ht(e,t),m=De(p),y=l[g?f==="floating"?"reference":"floating":f],w=st(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(y)))==null||n?y:y.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:c,rootBoundary:d,strategy:a})),b=f==="floating"?{...r.floating,x:o,y:i}:r.reference,C=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),_=await(s.isElement==null?void 0:s.isElement(C))?await(s.getScale==null?void 0:s.getScale(C))||{x:1,y:1}:{x:1,y:1},k=st(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:b,offsetParent:C,strategy:a}):b);return{top:(w.top-k.top+m.top)/_.y,bottom:(k.bottom-w.bottom+m.bottom)/_.y,left:(w.left-k.left+m.left)/_.x,right:(k.right-w.right+m.right)/_.x}}const Ve=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:s,rects:r,initialPlacement:l,platform:a,elements:c}=e,{mainAxis:d=!0,crossAxis:f=!0,fallbackPlacements:g,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:v=!0,...y}=ht(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const w=X(i),b=X(l)===l,C=await(a.isRTL==null?void 0:a.isRTL(c.floating)),_=g||(b||!v?[it(l)]:Te(l));!g&&m!=="none"&&_.push(...Pe(l,v,m,C));const k=[l,..._],at=await zt(e,y),et=[];let K=((o=s.flip)==null?void 0:o.overflows)||[];if(d&&et.push(at[w]),f){const I=_e(i,r,C);et.push(at[I[0]],at[I[1]])}if(K=[...K,{placement:i,overflows:et}],!et.every(I=>I<=0)){var bt,Ct;const I=(((bt=s.flip)==null?void 0:bt.index)||0)+1,kt=k[I];if(kt)return{data:{index:I,overflows:K},reset:{placement:kt}};let J=(Ct=K.filter(z=>z.overflows[0]<=0).sort((z,W)=>z.overflows[1]-W.overflows[1])[0])==null?void 0:Ct.placement;if(!J)switch(p){case"bestFit":{var Rt;const z=(Rt=K.map(W=>[W.placement,W.overflows.filter(Q=>Q>0).reduce((Q,Qt)=>Q+Qt,0)]).sort((W,Q)=>W[1]-Q[1])[0])==null?void 0:Rt[0];z&&(J=z);break}case"initialPlacement":J=l;break}if(i!==J)return{reset:{placement:J}}}return{}}}},Ie=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:l={fn:y=>{let{x:w,y:b}=y;return{x:w,y:b}}},...a}=ht(t,e),c={x:n,y:o},d=await zt(e,a),f=yt(X(i)),g=Ht(f);let p=c[g],m=c[f];if(s){const y=g==="y"?"top":"left",w=g==="y"?"bottom":"right",b=p+d[y],C=p-d[w];p=Lt(b,p,C)}if(r){const y=f==="y"?"top":"left",w=f==="y"?"bottom":"right",b=m+d[y],C=m-d[w];m=Lt(b,m,C)}const v=l.fn({...e,[g]:p,[f]:m});return{...v,data:{x:v.x-n,y:v.y-o}}}}};function B(t){return Wt(t)?(t.nodeName||"").toLowerCase():"#document"}function S(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function V(t){var e;return(e=(Wt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Wt(t){return t instanceof Node||t instanceof S(t).Node}function P(t){return t instanceof Element||t instanceof S(t).Element}function E(t){return t instanceof HTMLElement||t instanceof S(t).HTMLElement}function _t(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof S(t).ShadowRoot}function tt(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=N(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function He(t){return["table","td","th"].includes(B(t))}function wt(t){const e=xt(),n=N(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Me(t){let e=Y(t);for(;E(e)&&!rt(e);){if(wt(e))return e;e=Y(e)}return null}function xt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function rt(t){return["html","body","#document"].includes(B(t))}function N(t){return S(t).getComputedStyle(t)}function lt(t){return P(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Y(t){if(B(t)==="html")return t;const e=t.assignedSlot||t.parentNode||_t(t)&&t.host||V(t);return _t(e)?e.host:e}function qt(t){const e=Y(t);return rt(e)?t.ownerDocument?t.ownerDocument.body:t.body:E(e)&&tt(e)?e:qt(e)}function dt(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=qt(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=S(i);return s?e.concat(r,r.visualViewport||[],tt(i)?i:[],r.frameElement&&n?dt(r.frameElement):[]):e.concat(i,dt(i,[],n))}function jt(t){const e=N(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=E(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,l=ot(n)!==s||ot(o)!==r;return l&&(n=s,o=r),{width:n,height:o,$:l}}function Gt(t){return P(t)?t:t.contextElement}function G(t){const e=Gt(t);if(!E(e))return D(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=jt(e);let r=(s?ot(n.width):n.width)/o,l=(s?ot(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const Fe=D(0);function Xt(t){const e=S(t);return!xt()||!e.visualViewport?Fe:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ze(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==S(t)?!1:e}function Z(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=Gt(t);let r=D(1);e&&(o?P(o)&&(r=G(o)):r=G(t));const l=ze(s,n,o)?Xt(s):D(0);let a=(i.left+l.x)/r.x,c=(i.top+l.y)/r.y,d=i.width/r.x,f=i.height/r.y;if(s){const g=S(s),p=o&&P(o)?S(o):o;let m=g.frameElement;for(;m&&o&&p!==g;){const v=G(m),y=m.getBoundingClientRect(),w=N(m),b=y.left+(m.clientLeft+parseFloat(w.paddingLeft))*v.x,C=y.top+(m.clientTop+parseFloat(w.paddingTop))*v.y;a*=v.x,c*=v.y,d*=v.x,f*=v.y,a+=b,c+=C,m=S(m).frameElement}}return st({width:d,height:f,x:a,y:c})}function We(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=E(n),s=V(n);if(n===s)return e;let r={scrollLeft:0,scrollTop:0},l=D(1);const a=D(0);if((i||!i&&o!=="fixed")&&((B(n)!=="body"||tt(s))&&(r=lt(n)),E(n))){const c=Z(n);l=G(n),a.x=c.x+n.clientLeft,a.y=c.y+n.clientTop}return{width:e.width*l.x,height:e.height*l.y,x:e.x*l.x-r.scrollLeft*l.x+a.x,y:e.y*l.y-r.scrollTop*l.y+a.y}}function qe(t){return Array.from(t.getClientRects())}function Yt(t){return Z(V(t)).left+lt(t).scrollLeft}function je(t){const e=V(t),n=lt(t),o=t.ownerDocument.body,i=j(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=j(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+Yt(t);const l=-n.scrollTop;return N(o).direction==="rtl"&&(r+=j(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:l}}function Ge(t,e){const n=S(t),o=V(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,l=0,a=0;if(i){s=i.width,r=i.height;const c=xt();(!c||c&&e==="fixed")&&(l=i.offsetLeft,a=i.offsetTop)}return{width:s,height:r,x:l,y:a}}function Xe(t,e){const n=Z(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=E(t)?G(t):D(1),r=t.clientWidth*s.x,l=t.clientHeight*s.y,a=i*s.x,c=o*s.y;return{width:r,height:l,x:a,y:c}}function Tt(t,e,n){let o;if(e==="viewport")o=Ge(t,n);else if(e==="document")o=je(V(t));else if(P(e))o=Xe(e,n);else{const i=Xt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return st(o)}function Kt(t,e){const n=Y(t);return n===e||!P(n)||rt(n)?!1:N(n).position==="fixed"||Kt(n,e)}function Ye(t,e){const n=e.get(t);if(n)return n;let o=dt(t,[],!1).filter(l=>P(l)&&B(l)!=="body"),i=null;const s=N(t).position==="fixed";let r=s?Y(t):t;for(;P(r)&&!rt(r);){const l=N(r),a=wt(r);!a&&l.position==="fixed"&&(i=null),(s?!a&&!i:!a&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||tt(r)&&!a&&Kt(t,r))?o=o.filter(d=>d!==r):i=l,r=Y(r)}return e.set(t,o),o}function Ke(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?Ye(e,this._c):[].concat(n),o],l=r[0],a=r.reduce((c,d)=>{const f=Tt(e,d,i);return c.top=j(f.top,c.top),c.right=ut(f.right,c.right),c.bottom=ut(f.bottom,c.bottom),c.left=j(f.left,c.left),c},Tt(e,l,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Je(t){return jt(t)}function Qe(t,e,n){const o=E(e),i=V(e),s=n==="fixed",r=Z(t,!0,s,e);let l={scrollLeft:0,scrollTop:0};const a=D(0);if(o||!o&&!s)if((B(e)!=="body"||tt(i))&&(l=lt(e)),o){const c=Z(e,!0,s,e);a.x=c.x+e.clientLeft,a.y=c.y+e.clientTop}else i&&(a.x=Yt(i));return{x:r.left+l.scrollLeft-a.x,y:r.top+l.scrollTop-a.y,width:r.width,height:r.height}}function Ot(t,e){return!E(t)||N(t).position==="fixed"?null:e?e(t):t.offsetParent}function Jt(t,e){const n=S(t);if(!E(t))return n;let o=Ot(t,e);for(;o&&He(o)&&N(o).position==="static";)o=Ot(o,e);return o&&(B(o)==="html"||B(o)==="body"&&N(o).position==="static"&&!wt(o))?n:o||Me(t)||n}const Ue=async function(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||Jt,s=this.getDimensions;return{reference:Qe(e,await i(n),o),floating:{x:0,y:0,...await s(n)}}};function Ze(t){return N(t).direction==="rtl"}const tn={convertOffsetParentRelativeRectToViewportRelativeRect:We,getDocumentElement:V,getClippingRect:Ke,getOffsetParent:Jt,getElementRects:Ue,getClientRects:qe,getDimensions:Je,getScale:G,isElement:P,isRTL:Ze},en=(t,e,n)=>{const o=new Map,i={platform:tn,...n},s={...i.platform,_c:o};return Be(t,e,{...i,platform:s})},nn={__name:"HorizontalNavPopper",props:{popperInlineEnd:{type:Boolean,required:!1,default:!1},tag:{type:String,required:!1,default:"div"},contentContainerTag:{type:String,required:!1,default:"div"},isRtl:{type:Boolean,required:!1}},setup(t){const e=t,n=pt(),o=H(),i=H(),s=H({left:"0px",top:"0px"}),r=async()=>{if(o.value!==void 0&&i.value!==void 0){const{x:f,y:g}=await en(o.value,i.value,{placement:e.popperInlineEnd?e.isRtl?"left-start":"right-start":"bottom-start",middleware:[Ve({boundary:document.querySelector("body")}),Ie({boundary:document.querySelector("body")})]});s.value.left=`${f}px`,s.value.top=`${g}px`}};se(()=>n.horizontalNavType).toMatch(f=>f==="static").then(()=>{re("scroll",r)});const l=H(!1),a=()=>{l.value=!0,r()},c=()=>{l.value=!1};le(r),nt([()=>n.isAppRTL,()=>n.appContentWidth],r);const d=Dt();return nt(()=>d.fullPath,c),(f,g)=>(h(),F("div",{class:U(["nav-popper",[{"popper-inline-end":t.popperInlineEnd,"show-content":u(l)}]])},[x("div",{ref_key:"refPopperContainer",ref:o,class:"popper-triggerer",onMouseenter:a,onMouseleave:c},[M(f.$slots,"default")],544),u(O).horizontalNav.transition?typeof u(O).horizontalNav.transition=="string"?(h(),R(ae,{key:1,name:u(O).horizontalNav.transition},{default:A(()=>[At(x("div",{ref_key:"refPopper",ref:i,class:"popper-content",style:ct(u(s)),onMouseenter:a,onMouseleave:c},[x("div",null,[M(f.$slots,"content")])],36),[[St,u(l)]])]),_:3},8,["name"])):(h(),R(L(u(O).horizontalNav.transition),{key:2},{default:A(()=>[At(x("div",{ref_key:"refPopper",ref:i,class:"popper-content",style:ct(u(s)),onMouseenter:a,onMouseleave:c},[x("div",null,[M(f.$slots,"content")])],36),[[St,u(l)]])]),_:3})):(h(),F("div",{key:0,ref_key:"refPopper",ref:i,class:"popper-content",style:ct(u(s)),onMouseenter:a,onMouseleave:c},[x("div",null,[M(f.$slots,"content")])],36))],2))}},on=[{title:"Home",to:{name:"root"},icon:{icon:"tabler-smart-home"}},{title:"Second page",to:{name:"second-page"},icon:{icon:"tabler-file"}}],sn={class:"app-title font-weight-bold leading-normal text-xl text-capitalize"},kn={__name:"DefaultLayoutWithHorizontalNav",setup(t){const e=H(!1),n=H(null);return nt([e,n],()=>{e.value&&n.value&&n.value.fallbackHandle(),!e.value&&n.value&&n.value.resolveHandle()},{immediate:!0}),(o,i)=>{const s=Nt("RouterLink"),r=Ut,l=Nt("RouterView");return h(),R(u(Ne),{"nav-items":u(on)},{navbar:A(()=>{var a;return[T(s,{to:"/",class:"app-logo d-flex align-center gap-x-3"},{default:A(()=>[T(u(ge),{nodes:u(O).app.logo},null,8,["nodes"]),x("h1",sn,mt(u(O).app.title),1)]),_:1}),T(pe),u(O).app.i18n.enable&&((a=u(O).app.i18n.langConfig)!=null&&a.length)?(h(),R(me,{key:0,languages:u(O).app.i18n.langConfig},null,8,["languages"])):gt("",!0),T(fe,{class:"me-2"}),T(de)]}),footer:A(()=>[T(ue)]),default:A(()=>[T(r,{ref_key:"refLoadingIndicator",ref:n},null,512),T(l,null,{default:A(({Component:a})=>[(h(),R(ce,{timeout:0,onFallback:i[0]||(i[0]=c=>e.value=!0),onResolve:i[1]||(i[1]=c=>e.value=!1)},{default:A(()=>[(h(),R(L(a)))]),_:2},1024))]),_:1})]),_:1},8,["nav-items"])}}};export{kn as default};

import{ae as o,aN as y,aM as V,am as i,N as f,ac as k,ao as C,cw as P,aq as h,cA as S,an as z,ar as A,cq as D,cr as I,cD as N,cE as R,at as T,cG as q,ah as B,b as c,a1 as F,cJ as _}from"./main-bb175efe.js";import{V as b}from"./VImg-eedbfd95.js";function G(a){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",e=arguments.length>2?arguments[2]:void 0;return o()({name:e??y(V(a.replace(/__/g,"-"))),props:{tag:{type:String,default:l},...i()},setup(s,r){let{slots:t}=r;return()=>{var n;return f(s.tag,{class:[a,s.class],style:s.style},(n=t.default)==null?void 0:n.call(t))}}})}const w=k({start:Boolean,end:Boolean,icon:C,image:String,...i(),...P(),...h(),...S(),...z(),...A(),...D({variant:"flat"})},"VAvatar"),J=o()({name:"VAvatar",props:w(),setup(a,l){let{slots:e}=l;const{themeClasses:s}=I(a),{colorClasses:r,colorStyles:t,variantClasses:n}=N(a),{densityClasses:m}=R(a),{roundedClasses:v}=T(a),{sizeClasses:d,sizeStyles:g}=q(a);return B(()=>c(a.tag,{class:["v-avatar",{"v-avatar--start":a.start,"v-avatar--end":a.end},s.value,r.value,m.value,v.value,d.value,n.value,a.class],style:[t.value,g.value,a.style]},{default:()=>{var u;return[a.image?c(b,{key:"image",src:a.image,alt:"",cover:!0},null):a.icon?c(F,{key:"icon",icon:a.icon},null):(u=e.default)==null?void 0:u.call(e),_(!1,"v-avatar")]}})),{}}});export{J as V,G as c};
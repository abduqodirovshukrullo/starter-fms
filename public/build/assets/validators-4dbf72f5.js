const e=r=>r==null||r===""?!0:!!(Array.isArray(r)&&r.length===0),n=r=>r==null,s=r=>Array.isArray(r)&&r.length===0,d=r=>n(r)||s(r)||r===!1?"This field is required":!!String(r).trim().length||"This field is required",a=r=>{if(e(r))return!0;const i=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return Array.isArray(r)?r.every(t=>i.test(String(t)))||"The Email field must be a valid email":i.test(String(r))||"The Email field must be a valid email"};export{a as e,d as r};
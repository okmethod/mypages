import{s as k,e as f,t as x,b as y,c as g,f as h,h as E,j as D,d as m,a as _,i as I,k as l,l as $,n as S,m as V}from"../chunks/scheduler.kefbiraV.js";import{S as j,i as q}from"../chunks/index.DnJoHyjX.js";import{s as w}from"../chunks/entry.B6xMH49M.js";const C=()=>{const e=w;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},P={subscribe(e){return C().page.subscribe(e)}};function z(e){var v;let s,a,t,o=e[0].status+"",p,b,i=((v=e[0].error)==null?void 0:v.message)+"",u;return{c(){s=f("div"),a=f("div"),t=f("p"),p=x(o),b=y(),u=x(i),this.h()},l(r){s=g(r,"DIV",{class:!0});var n=h(s);a=g(n,"DIV",{class:!0});var c=h(a);t=g(c,"P",{class:!0});var d=h(t);p=E(d,o),b=D(d),u=E(d,i),d.forEach(m),c.forEach(m),n.forEach(m),this.h()},h(){_(t,"class","text-4xl font-bold text-gray-800 leading-loose tracking-wider"),_(a,"class","m-auto text-center"),_(s,"class","flex h-screen")},m(r,n){I(r,s,n),l(s,a),l(a,t),l(t,p),l(t,b),l(t,u)},p(r,[n]){var c;n&1&&o!==(o=r[0].status+"")&&$(p,o),n&1&&i!==(i=((c=r[0].error)==null?void 0:c.message)+"")&&$(u,i)},i:S,o:S,d(r){r&&m(s)}}}function A(e,s,a){let t;return V(e,P,o=>a(0,t=o)),[t]}let H=class extends j{constructor(s){super(),q(this,s,A,z,k,{})}};export{H as component};

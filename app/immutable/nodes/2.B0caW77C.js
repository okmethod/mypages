import{n as l,I as t}from"../chunks/navigation.client.BCQVUJR7.js";import{s,e as a,a as e,c as n,b as o,g as c,d as r,f as i,h as u,i as m,j as h,k as f,t as d,l as y,z as b,m as p,A as g,B as v,n as S,C as k}from"../chunks/scheduler.DLLSWhB6.js";import{S as $,i as w,t as x,c as T,a as C,g as E,b as I,d as j,m as D,e as V}from"../chunks/index.Ci6zZizQ.js";import{e as M}from"../chunks/each.D67ckFIM.js";const _=[{label:"Example route",symbolSrc:{type:"icon",key:"mdi:page-next"},action:"navigate",target:"/example"},{label:"Github Repository",symbolSrc:{type:"icon",key:"mdi:source-repository"},action:"redirectNewTab",target:"https://github.com/okmethod/my-static-site"}];const B=Object.freeze(Object.defineProperty({__proto__:null,load:async function(){var t;return{buttonConfigs:_.map((s=>{return{label:s.label,symbol:void 0!==s.symbolSrc?"image"===s.symbolSrc.type&&void 0!==t?{src:t[s.symbolSrc.key],alt:s.symbolSrc.key}:{icon:s.symbolSrc.key}:null,onClick:(a=s.action,e=s.target,{navigate:()=>l(e),redirect:()=>{window.location.href=e},redirectNewTab:()=>window.open(e,"_blank")}[a]||(()=>{}))};var a,e}))}}},Symbol.toStringTag,{value:"Module"}));function N(l,t,s){const a=l.slice();return a[1]=t[s],a}function P(l){let s,a;return s=new t({props:{icon:l[1].symbol.icon,class:"w-full h-full"}}),{c(){I(s.$$.fragment)},l(l){j(s.$$.fragment,l)},m(l,t){D(s,l,t),a=!0},p(l,t){const a={};1&t&&(a.icon=l[1].symbol.icon),s.$set(a)},i(l){a||(x(s.$$.fragment,l),a=!0)},o(l){C(s.$$.fragment,l),a=!1},d(l){V(s,l)}}}function O(l){let t,s,e;return{c(){t=a("img"),this.h()},l(l){t=n(l,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){v(t.src,s=l[1].symbol.src)||u(t,"src",s),u(t,"alt",e=l[1].symbol.alt),u(t,"class","w-full h-full")},m(l,s){m(l,t,s)},p(l,a){1&a&&!v(t.src,s=l[1].symbol.src)&&u(t,"src",s),1&a&&e!==(e=l[1].symbol.alt)&&u(t,"alt",e)},i:S,o:S,d(l){l&&i(t)}}}function z(l){return{c:S,l:S,m:S,p:S,i:S,o:S,d:S}}function A(l){let t,s,c,f,v,S,$,w,I,j,D,V,M,_,B=l[1].label+"";const N=[z,O,P],A=[];function G(l,t){return 1&t&&(f=null),1&t&&(v=null),null===l[1].symbol?0:(null==f&&(f=!!function(l){if(null===l)return!1;const t=l;return void 0!==t.src&&void 0!==t.alt}(l[1].symbol)),f?1:(null==v&&(s=l[1].symbol,v=!(null===s||void 0===s.icon)),v?2:-1));var s}return~(S=G(l,-1))&&($=A[S]=N[S](l)),{c(){t=a("div"),s=a("button"),c=a("div"),$&&$.c(),w=e(),I=a("span"),j=d(B),D=e(),this.h()},l(l){t=n(l,"DIV",{class:!0});var a=o(t);s=n(a,"BUTTON",{class:!0});var e=o(s);c=n(e,"DIV",{class:!0});var u=o(c);$&&$.l(u),u.forEach(i),w=r(e),I=n(e,"SPAN",{class:!0});var m=o(I);j=y(m,B),m.forEach(i),e.forEach(i),D=r(a),a.forEach(i),this.h()},h(){u(c,"class","w-6 h-6 mr-2"),u(I,"class","hover:underline text-lg md:text-2xl"),u(s,"class","flex items-center"),u(t,"class","")},m(a,e){m(a,t,e),h(t,s),h(s,c),~S&&A[S].m(c,null),h(s,w),h(s,I),h(I,j),h(t,D),V=!0,M||(_=b(s,"click",g((function(){k(l[1].onClick)&&l[1].onClick.apply(this,arguments)}))),M=!0)},p(t,s){let a=S;S=G(l=t,s),S===a?~S&&A[S].p(l,s):($&&(E(),C(A[a],1,1,(()=>{A[a]=null})),T()),~S?($=A[S],$?$.p(l,s):($=A[S]=N[S](l),$.c()),x($,1),$.m(c,null)):$=null),(!V||1&s)&&B!==(B=l[1].label+"")&&p(j,B)},i(l){V||(x($),V=!0)},o(l){C($),V=!1},d(l){l&&i(t),~S&&A[S].d(),M=!1,_()}}}function G(l){let t,s,d,y,b,p,g='<h1 class="cTitleStyle">Welcome to My Static Site !</h1>',v=M(l[0].buttonConfigs),S=[];for(let a=0;a<v.length;a+=1)S[a]=A(N(l,v,a));const k=l=>C(S[l],1,1,(()=>{S[l]=null}));return{c(){t=a("div"),s=a("div"),s.innerHTML=g,d=e(),y=a("div"),b=a("div");for(let l=0;l<S.length;l+=1)S[l].c();this.h()},l(l){t=n(l,"DIV",{class:!0});var a=o(t);s=n(a,"DIV",{class:!0,"data-svelte-h":!0}),"svelte-1el3n81"!==c(s)&&(s.innerHTML=g),d=r(a),y=n(a,"DIV",{class:!0});var e=o(y);b=n(e,"DIV",{class:!0});var u=o(b);for(let t=0;t<S.length;t+=1)S[t].l(u);u.forEach(i),e.forEach(i),a.forEach(i),this.h()},h(){u(s,"class","cTitlePartStyle"),u(b,"class","space-y-4"),u(y,"class","cContentPartStyle"),u(t,"class","cRouteBodyStyle")},m(l,a){m(l,t,a),h(t,s),h(t,d),h(t,y),h(y,b);for(let t=0;t<S.length;t+=1)S[t]&&S[t].m(b,null);p=!0},p(l,[t]){if(1&t){let s;for(v=M(l[0].buttonConfigs),s=0;s<v.length;s+=1){const a=N(l,v,s);S[s]?(S[s].p(a,t),x(S[s],1)):(S[s]=A(a),S[s].c(),x(S[s],1),S[s].m(b,null))}for(E(),s=v.length;s<S.length;s+=1)k(s);T()}},i(l){if(!p){for(let l=0;l<v.length;l+=1)x(S[l]);p=!0}},o(l){S=S.filter(Boolean);for(let t=0;t<S.length;t+=1)C(S[t]);p=!1},d(l){l&&i(t),f(S,l)}}}function H(l,t,s){let{data:a}=t;return l.$$set=l=>{"data"in l&&s(0,a=l.data)},[a]}class L extends ${constructor(l){super(),w(this,l,H,G,s,{data:0})}}export{L as component,B as universal};

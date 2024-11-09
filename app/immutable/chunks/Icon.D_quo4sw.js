import{t,a as e,S as n,i as o}from"./index.CcV1z4yQ.js";import{x as r,s as i,m as s,i as c,n as a,g as l,A as f,H as u,I as d,J as p,e as h,c as g,b as m,K as b,L as y,M as v,N as x,O as w,P as k,Q as j}from"./scheduler.D3Z0lQde.js";function O(t){return void 0!==(null==t?void 0:t.length)?t:Array.from(t)}function S(t,n){t.f(),function(t,n){e(t,1,1,(()=>{n.delete(t.key)}))}(t,n)}function E(e,n,o,i,s,c,a,l,f,u,d,p){let h=e.length,g=c.length,m=h;const b={};for(;m--;)b[e[m].key]=m;const y=[],v=new Map,x=new Map,w=[];for(m=g;m--;){const t=p(s,c,m),e=o(t);let r=a.get(e);r?w.push((()=>r.p(t,n))):(r=u(e,t),r.c()),v.set(e,y[m]=r),e in b&&x.set(e,Math.abs(m-b[e]))}const k=new Set,j=new Set;function O(e){t(e,1),e.m(l,d),a.set(e.key,e),d=e.first,g--}for(;h&&g;){const t=y[g-1],n=e[h-1],o=t.key,r=n.key;t===n?(d=t.first,h--,g--):v.has(r)?!a.has(o)||k.has(o)?O(t):j.has(r)?h--:x.get(o)>x.get(r)?(j.add(o),O(t)):(k.add(r),h--):(f(n,a),h--)}for(;h--;){const t=e[h];v.has(t.key)||f(t,a)}for(;g;)O(y[g-1]);return r(w),y}function M(t,e){const n={},o={},r={$$scope:1};let i=t.length;for(;i--;){const s=t[i],c=e[i];if(c){for(const t in s)t in c||(o[t]=1);for(const t in c)r[t]||(n[t]=c[t],r[t]=1);t[i]=c}else for(const t in s)r[t]=1}for(const s in o)s in n||(n[s]=void 0);return n}function F(t){return"object"==typeof t&&null!==t?t:{}}const I=/^[a-z0-9]+(-[a-z0-9]+)*$/,T=(t,e,n,o="")=>{const r=t.split(":");if("@"===t.slice(0,1)){if(r.length<2||r.length>3)return null;o=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const t=r.pop(),n=r.pop(),i={provider:r.length>0?r[0]:o,prefix:n,name:t};return e&&!C(i)?null:i}const i=r[0],s=i.split("-");if(s.length>1){const t={provider:o,prefix:s.shift(),name:s.join("-")};return e&&!C(t)?null:t}if(n&&""===o){const t={provider:o,prefix:"",name:i};return e&&!C(t,n)?null:t}return null},C=(t,e)=>!!t&&!(""!==t.provider&&!t.provider.match(I)||!(e&&""===t.prefix||t.prefix.match(I))||!t.name.match(I)),L=Object.freeze({left:0,top:0,width:16,height:16}),$=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),z=Object.freeze({...L,...$}),A=Object.freeze({...z,body:"",hidden:!1});function N(t,e){const n=function(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const o=((t.rotate||0)+(e.rotate||0))%4;return o&&(n.rotate=o),n}(t,e);for(const o in A)o in $?o in t&&!(o in n)&&(n[o]=$[o]):o in e?n[o]=e[o]:o in t&&(n[o]=t[o]);return n}function P(t,e,n){const o=t.icons,r=t.aliases||Object.create(null);let i={};function s(t){i=N(o[t]||r[t],i)}return s(e),n.forEach(s),N(t,i)}function R(t,e){const n=[];if("object"!=typeof t||"object"!=typeof t.icons)return n;t.not_found instanceof Array&&t.not_found.forEach((t=>{e(t,null),n.push(t)}));const o=function(t){const e=t.icons,n=t.aliases||Object.create(null),o=Object.create(null);return Object.keys(e).concat(Object.keys(n)).forEach((function t(r){if(e[r])return o[r]=[];if(!(r in o)){o[r]=null;const e=n[r]&&n[r].parent,i=e&&t(e);i&&(o[r]=[e].concat(i))}return o[r]})),o}(t);for(const r in o){const i=o[r];i&&(e(r,P(t,r,i)),n.push(r))}return n}const D={provider:"",aliases:{},not_found:{},...L};function _(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function U(t){if("object"!=typeof t||null===t)return null;const e=t;if("string"!=typeof e.prefix||!t.icons||"object"!=typeof t.icons)return null;if(!_(t,D))return null;const n=e.icons;for(const r in n){const t=n[r];if(!r.match(I)||"string"!=typeof t.body||!_(t,A))return null}const o=e.aliases||Object.create(null);for(const r in o){const t=o[r],e=t.parent;if(!r.match(I)||"string"!=typeof e||!n[e]&&!o[e]||!_(t,A))return null}return e}const q=Object.create(null);function Q(t,e){const n=q[t]||(q[t]=Object.create(null));return n[e]||(n[e]=function(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}(t,e))}function J(t,e){return U(e)?R(e,((e,n)=>{n?t.icons[e]=n:t.missing.add(e)})):[]}let B=!1;function H(t){return"boolean"==typeof t&&(B=t),B}function K(t,e){if("object"!=typeof t)return!1;if("string"!=typeof e&&(e=t.provider||""),B&&!e&&!t.prefix){let e=!1;return U(t)&&(t.prefix="",R(t,((t,n)=>{n&&function(t,e){const n=T(t,!0,B);return!!n&&function(t,e,n){try{if("string"==typeof n.body)return t.icons[e]={...n},!0}catch(o){}return!1}(Q(n.provider,n.prefix),n.name,e)}(t,n)&&(e=!0)}))),e}const n=t.prefix;if(!C({provider:e,prefix:n,name:"a"}))return!1;return!!J(Q(e,n),t)}const G=Object.freeze({width:null,height:null}),V=Object.freeze({...G,...$}),W=/(-?[0-9.]*[0-9]+[0-9.]*)/g,X=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Y(t,e,n){if(1===e)return t;if(n=n||100,"number"==typeof t)return Math.ceil(t*e*n)/n;if("string"!=typeof t)return t;const o=t.split(W);if(null===o||!o.length)return t;const r=[];let i=o.shift(),s=X.test(i);for(;;){if(s){const t=parseFloat(i);isNaN(t)?r.push(i):r.push(Math.ceil(t*e*n)/n)}else r.push(i);if(i=o.shift(),void 0===i)return r.join("");s=!s}}const Z=/\sid="(\S+)"/g,tt="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16);let et=0;function nt(t,e=tt){const n=[];let o;for(;o=Z.exec(t);)n.push(o[1]);if(!n.length)return t;const r="suffix"+(16777216*Math.random()|Date.now()).toString(16);return n.forEach((n=>{const o="function"==typeof e?e(n):e+(et++).toString(),i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+i+')([")]|\\.[a-z])',"g"),"$1"+o+r+"$3")})),t=t.replace(new RegExp(r,"g"),"")}const ot=Object.create(null);function rt(t){return ot[t]||ot[""]}function it(t){let e;if("string"==typeof t.resources)e=[t.resources];else if(e=t.resources,!(e instanceof Array&&e.length))return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:!0===t.random,index:t.index||0,dataAfterTimeout:!1!==t.dataAfterTimeout}}const st=Object.create(null),ct=["https://api.simplesvg.com","https://api.unisvg.com"],at=[];for(;ct.length>0;)1===ct.length||Math.random()>.5?at.push(ct.shift()):at.push(ct.pop());function lt(t,e){const n=it(e);return null!==n&&(st[t]=n,!0)}function ft(t){return st[t]}st[""]=it({resources:["https://api.iconify.design"].concat(at)});let ut=(()=>{let t;try{if(t=fetch,"function"==typeof t)return t}catch(e){}})();const dt={prepare:(t,e,n)=>{const o=[],r=function(t,e){const n=ft(t);if(!n)return 0;let o;if(n.maxURL){let t=0;n.resources.forEach((e=>{const n=e;t=Math.max(t,n.length)}));const r=e+".json?icons=";o=n.maxURL-t-n.path.length-r.length}else o=0;return o}(t,e),i="icons";let s={type:i,provider:t,prefix:e,icons:[]},c=0;return n.forEach(((n,a)=>{c+=n.length+1,c>=r&&a>0&&(o.push(s),s={type:i,provider:t,prefix:e,icons:[]},c=n.length),s.icons.push(n)})),o.push(s),o},send:(t,e,n)=>{if(!ut)return void n("abort",424);let o=function(t){if("string"==typeof t){const e=ft(t);if(e)return e.path}return"/"}(e.provider);switch(e.type){case"icons":{const t=e.prefix,n=e.icons.join(",");o+=t+".json?"+new URLSearchParams({icons:n}).toString();break}case"custom":{const t=e.uri;o+="/"===t.slice(0,1)?t.slice(1):t;break}default:return void n("abort",400)}let r=503;ut(t+o).then((t=>{const e=t.status;if(200===e)return r=501,t.json();setTimeout((()=>{n(function(t){return 404===t}(e)?"abort":"next",e)}))})).then((t=>{"object"==typeof t&&null!==t?setTimeout((()=>{n("success",t)})):setTimeout((()=>{404===t?n("abort",t):n("next",r)}))})).catch((()=>{n("next",r)}))}};function pt(t,e){t.forEach((t=>{const n=t.loaderCallbacks;n&&(t.loaderCallbacks=n.filter((t=>t.id!==e)))}))}let ht=0;var gt={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function mt(t,e,n,o){const r=t.resources.length,i=t.random?Math.floor(Math.random()*r):t.index;let s;if(t.random){let e=t.resources.slice(0);for(s=[];e.length>1;){const t=Math.floor(Math.random()*e.length);s.push(e[t]),e=e.slice(0,t).concat(e.slice(t+1))}s=s.concat(e)}else s=t.resources.slice(i).concat(t.resources.slice(0,i));const c=Date.now();let a,l="pending",f=0,u=null,d=[],p=[];function h(){u&&(clearTimeout(u),u=null)}function g(){"pending"===l&&(l="aborted"),h(),d.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),d=[]}function m(t,e){e&&(p=[]),"function"==typeof t&&p.push(t)}function b(){l="failed",p.forEach((t=>{t(void 0,a)}))}function y(){d.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),d=[]}function v(){if("pending"!==l)return;h();const o=s.shift();if(void 0===o)return d.length?void(u=setTimeout((()=>{h(),"pending"===l&&(y(),b())}),t.timeout)):void b();const r={status:"pending",resource:o,callback:(e,n)=>{!function(e,n,o){const r="success"!==n;switch(d=d.filter((t=>t!==e)),l){case"pending":break;case"failed":if(r||!t.dataAfterTimeout)return;break;default:return}if("abort"===n)return a=o,void b();if(r)return a=o,void(d.length||(s.length?v():b()));if(h(),y(),!t.random){const n=t.resources.indexOf(e.resource);-1!==n&&n!==t.index&&(t.index=n)}l="completed",p.forEach((t=>{t(o)}))}(r,e,n)}};d.push(r),f++,u=setTimeout(v,t.rotate),n(o,e,r.callback)}return"function"==typeof o&&p.push(o),setTimeout(v),function(){return{startTime:c,payload:e,status:l,queriesSent:f,queriesPending:d.length,subscribe:m,abort:g}}}function bt(t){const e={...gt,...t};let n=[];function o(){n=n.filter((t=>"pending"===t().status))}return{query:function(t,r,i){const s=mt(e,t,r,((t,e)=>{o(),i&&i(t,e)}));return n.push(s),s},find:function(t){return n.find((e=>t(e)))||null},setIndex:t=>{e.index=t},getIndex:()=>e.index,cleanup:o}}function yt(){}const vt=Object.create(null);function xt(t,e,n){let o,r;if("string"==typeof t){const e=rt(t);if(!e)return n(void 0,424),yt;r=e.send;const i=function(t){if(!vt[t]){const e=ft(t);if(!e)return;const n={config:e,redundancy:bt(e)};vt[t]=n}return vt[t]}(t);i&&(o=i.redundancy)}else{const e=it(t);if(e){o=bt(e);const n=rt(t.resources?t.resources[0]:"");n&&(r=n.send)}}return o&&r?o.query(e,r,n)().abort:(n(void 0,424),yt)}const wt="iconify2",kt="iconify",jt=kt+"-count",Ot=kt+"-version",St=36e5;function Et(t,e){try{return t.getItem(e)}catch(n){}}function Mt(t,e,n){try{return t.setItem(e,n),!0}catch(o){}}function Ft(t,e){try{t.removeItem(e)}catch(n){}}function It(t,e){return Mt(t,jt,e.toString())}function Tt(t){return parseInt(Et(t,jt))||0}const Ct={local:!0,session:!0},Lt={local:new Set,session:new Set};let $t=!1;let zt="undefined"==typeof window?{}:window;function At(t){const e=t+"Storage";try{if(zt&&zt[e]&&"number"==typeof zt[e].length)return zt[e]}catch(n){}Ct[t]=!1}function Nt(t,e){const n=At(t);if(!n)return;const o=Et(n,Ot);if(o!==wt){if(o){const t=Tt(n);for(let e=0;e<t;e++)Ft(n,kt+e.toString())}return Mt(n,Ot,wt),void It(n,0)}const r=Math.floor(Date.now()/St)-168,i=t=>{const o=kt+t.toString(),i=Et(n,o);if("string"==typeof i){try{const n=JSON.parse(i);if("object"==typeof n&&"number"==typeof n.cached&&n.cached>r&&"string"==typeof n.provider&&"object"==typeof n.data&&"string"==typeof n.data.prefix&&e(n,t))return!0}catch(s){}Ft(n,o)}};let s=Tt(n);for(let c=s-1;c>=0;c--)i(c)||(c===s-1?(s--,It(n,s)):Lt[t].add(c))}function Pt(){if(!$t){$t=!0;for(const t in Ct)Nt(t,(t=>{const e=t.data,n=Q(t.provider,e.prefix);if(!J(n,e).length)return!1;const o=e.lastModified||-1;return n.lastModifiedCached=n.lastModifiedCached?Math.min(n.lastModifiedCached,o):o,!0}))}}function Rt(t,e){function n(n){let o;if(!Ct[n]||!(o=At(n)))return;const r=Lt[n];let i;if(r.size)r.delete(i=Array.from(r).shift());else if(i=Tt(o),i>=50||!It(o,i+1))return;const s={cached:Math.floor(Date.now()/St),provider:t.provider,data:e};return Mt(o,kt+i.toString(),JSON.stringify(s))}$t||Pt(),e.lastModified&&!function(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const o in Ct)Nt(o,(n=>{const o=n.data;return n.provider!==t.provider||o.prefix!==t.prefix||o.lastModified===e}));return!0}(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&delete(e=Object.assign({},e)).not_found,n("local")||n("session"))}function Dt(){}function _t(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout((()=>{t.iconsLoaderFlag=!1,function(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout((()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const o=t.provider,r=t.prefix;e.forEach((e=>{const i=e.icons,s=i.pending.length;i.pending=i.pending.filter((e=>{if(e.prefix!==r)return!0;const s=e.name;if(t.icons[s])i.loaded.push({provider:o,prefix:r,name:s});else{if(!t.missing.has(s))return n=!0,!0;i.missing.push({provider:o,prefix:r,name:s})}return!1})),i.pending.length!==s&&(n||pt([t],e.id),e.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),e.abort))}))})))}(t)})))}const Ut=(t,e)=>{const n=function(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort(((t,e)=>t.provider!==e.provider?t.provider.localeCompare(e.provider):t.prefix!==e.prefix?t.prefix.localeCompare(e.prefix):t.name.localeCompare(e.name)));let o={provider:"",prefix:"",name:""};return t.forEach((t=>{if(o.name===t.name&&o.prefix===t.prefix&&o.provider===t.provider)return;o=t;const r=t.provider,i=t.prefix,s=t.name,c=n[r]||(n[r]=Object.create(null)),a=c[i]||(c[i]=Q(r,i));let l;l=s in a.icons?e.loaded:""===i||a.missing.has(s)?e.missing:e.pending;const f={provider:r,prefix:i,name:s};l.push(f)})),e}(function(t,e=!0,n=!1){const o=[];return t.forEach((t=>{const r="string"==typeof t?T(t,e,n):t;r&&o.push(r)})),o}(t,!0,H()));if(!n.pending.length){let t=!0;return e&&setTimeout((()=>{t&&e(n.loaded,n.missing,n.pending,Dt)})),()=>{t=!1}}const o=Object.create(null),r=[];let i,s;return n.pending.forEach((t=>{const{provider:e,prefix:n}=t;if(n===s&&e===i)return;i=e,s=n,r.push(Q(e,n));const c=o[e]||(o[e]=Object.create(null));c[n]||(c[n]=[])})),n.pending.forEach((t=>{const{provider:e,prefix:n,name:r}=t,i=Q(e,n),s=i.pendingIcons||(i.pendingIcons=new Set);s.has(r)||(s.add(r),o[e][n].push(r))})),r.forEach((t=>{const{provider:e,prefix:n}=t;o[e][n].length&&function(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout((()=>{t.iconsQueueFlag=!1;const{provider:e,prefix:n}=t,o=t.iconsToLoad;let r;delete t.iconsToLoad,o&&(r=rt(e))&&r.prepare(e,n,o).forEach((n=>{xt(e,n,(e=>{if("object"!=typeof e)n.icons.forEach((e=>{t.missing.add(e)}));else try{const n=J(t,e);if(!n.length)return;const o=t.pendingIcons;o&&n.forEach((t=>{o.delete(t)})),Rt(t,e)}catch(o){console.error(o)}_t(t)}))}))})))}(t,o[e][n])})),e?function(t,e,n){const o=ht++,r=pt.bind(null,n,o);if(!e.pending.length)return r;const i={id:o,icons:e,callback:t,abort:r};return n.forEach((t=>{(t.loaderCallbacks||(t.loaderCallbacks=[])).push(i)})),r}(e,n,r):Dt};const qt=/[\s,]+/;function Qt(t,e){e.split(qt).forEach((e=>{switch(e.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0}}))}function Jt(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function o(t){for(;t<0;)t+=4;return t%4}if(""===n){const e=parseInt(t);return isNaN(e)?0:o(e)}if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let r=parseFloat(t.slice(0,t.length-n.length));return isNaN(r)?0:(r/=e,r%1==0?o(r):0)}}return e}const Bt={...V,inline:!1},Ht={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Kt={display:"inline-block"},Gt={"background-color":"currentColor"},Vt={"background-color":"transparent"},Wt={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Xt={"-webkit-mask":Gt,mask:Gt,background:Vt};for(const ae in Xt){const t=Xt[ae];for(const e in Wt)t[ae+"-"+e]=Wt[e]}function Yt(t,e){const n=function(t,e){const n={...t};for(const o in e){const t=e[o],r=typeof t;o in G?(null===t||t&&("string"===r||"number"===r))&&(n[o]=t):r===typeof n[o]&&(n[o]="rotate"===o?t%4:t)}return n}(Bt,e),o=e.mode||"svg",r="svg"===o?{...Ht}:{};-1===t.body.indexOf("xlink:")&&delete r["xmlns:xlink"];let i="string"==typeof e.style?e.style:"";for(let m in e){const t=e[m];if(void 0!==t)switch(m){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[m]=!0===t||"true"===t||1===t;break;case"flip":"string"==typeof t&&Qt(n,t);break;case"color":i=i+(i.length>0&&";"!==i.trim().slice(-1)?";":"")+"color: "+t+"; ";break;case"rotate":"string"==typeof t?n[m]=Jt(t):"number"==typeof t&&(n[m]=t);break;case"ariaHidden":case"aria-hidden":!0!==t&&"true"!==t&&delete r["aria-hidden"];break;default:if("on:"===m.slice(0,3))break;void 0===Bt[m]&&(r[m]=t)}}const s=function(t,e){const n={...z,...t},o={...V,...e},r={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,o].forEach((t=>{const e=[],n=t.hFlip,o=t.vFlip;let s,c=t.rotate;switch(n?o?c+=2:(e.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),e.push("scale(-1 1)"),r.top=r.left=0):o&&(e.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),e.push("scale(1 -1)"),r.top=r.left=0),c<0&&(c-=4*Math.floor(c/4)),c%=4,c){case 1:s=r.height/2+r.top,e.unshift("rotate(90 "+s.toString()+" "+s.toString()+")");break;case 2:e.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:s=r.width/2+r.left,e.unshift("rotate(-90 "+s.toString()+" "+s.toString()+")")}c%2==1&&(r.left!==r.top&&(s=r.left,r.left=r.top,r.top=s),r.width!==r.height&&(s=r.width,r.width=r.height,r.height=s)),e.length&&(i=function(t,e,n){const o=function(t,e="defs"){let n="";const o=t.indexOf("<"+e);for(;o>=0;){const r=t.indexOf(">",o),i=t.indexOf("</"+e);if(-1===r||-1===i)break;const s=t.indexOf(">",i);if(-1===s)break;n+=t.slice(r+1,i).trim(),t=t.slice(0,o).trim()+t.slice(s+1)}return{defs:n,content:t}}(t);return r=o.defs,i=e+o.content+n,r?"<defs>"+r+"</defs>"+i:i;var r,i}(i,'<g transform="'+e.join(" ")+'">',"</g>"))}));const s=o.width,c=o.height,a=r.width,l=r.height;let f,u;null===s?(u=null===c?"1em":"auto"===c?l:c,f=Y(u,a/l)):(f="auto"===s?a:s,u=null===c?Y(f,l/a):"auto"===c?l:c);const d={},p=(t,e)=>{(t=>"unset"===t||"undefined"===t||"none"===t)(e)||(d[t]=e.toString())};p("width",f),p("height",u);const h=[r.left,r.top,a,l];return d.viewBox=h.join(" "),{attributes:d,viewBox:h,body:i}}(t,n),c=s.attributes;if(n.inline&&(i="vertical-align: -0.125em; "+i),"svg"===o){Object.assign(r,c),""!==i&&(r.style=i);let t=0,n=e.id;return"string"==typeof n&&(n=n.replace(/-/g,"_")),{svg:!0,attributes:r,body:nt(s.body,n?()=>n+"ID"+t++:"iconifySvelte")}}const{body:a,width:l,height:f}=t,u="mask"===o||"bg"!==o&&-1!==a.indexOf("currentColor"),d=function(t,e){let n=-1===t.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const o in e)n+=" "+o+'="'+e[o]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}(a,{...c,width:l+"",height:f+""});const p={"--svg":'url("'+function(t){return"data:image/svg+xml,"+function(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}(t)}(d)+'")'},h=t=>{const e=c[t];e&&(p[t]=function(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}(e))};h("width"),h("height"),Object.assign(p,Kt,u?Gt:Vt);let g="";for(const m in p)g+=m+": "+p[m]+";";return r.style=g+i,{svg:!1,attributes:r}}var Zt;if(H(!0),Zt=dt,ot[""]=Zt,"undefined"!=typeof document&&"undefined"!=typeof window){Pt();const t=window;if(void 0!==t.IconifyPreload){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"==typeof e&&null!==e&&(e instanceof Array?e:[e]).forEach((t=>{try{("object"!=typeof t||null===t||t instanceof Array||"object"!=typeof t.icons||"string"!=typeof t.prefix||!K(t))&&console.error(n)}catch(e){console.error(n)}}))}if(void 0!==t.IconifyProviders){const e=t.IconifyProviders;if("object"==typeof e&&null!==e)for(let t in e){const n="IconifyProviders["+t+"] is invalid.";try{const o=e[t];if("object"!=typeof o||!o||void 0===o.resources)continue;lt(t,o)||console.error(n)}catch(ce){console.error(n)}}}}function te(t,e,n,o,r){function i(){e.loading&&(e.loading.abort(),e.loading=null)}if("object"==typeof t&&null!==t&&"string"==typeof t.body)return e.name="",i(),{data:{...z,...t}};let s;if("string"!=typeof t||null===(s=T(t,!1,!0)))return i(),null;const c=function(t){const e="string"==typeof t?T(t,!0,B):t;if(e){const t=Q(e.provider,e.prefix),n=e.name;return t.icons[n]||(t.missing.has(n)?null:void 0)}}(s);if(!c)return!n||e.loading&&e.loading.name===t||(i(),e.name="",e.loading={name:t,abort:Ut([s],o)}),null;i(),e.name!==t&&(e.name=t,r&&!e.destroyed&&r(t));const a=["iconify"];return""!==s.prefix&&a.push("iconify--"+s.prefix),""!==s.provider&&a.push("iconify--"+s.provider),{data:c,classes:a}}function ee(t){let e;function n(t,e){return t[0].svg?oe:ne}let o=n(t),r=o(t);return{c(){r.c(),e=s()},l(t){r.l(t),e=s()},m(t,n){r.m(t,n),c(t,e,n)},p(t,i){o===(o=n(t))&&r?r.p(t,i):(r.d(1),r=o(t),r&&(r.c(),r.m(e.parentNode,e)))},d(t){t&&l(e),r.d(t)}}}function ne(t){let e,n=[t[0].attributes],o={};for(let r=0;r<n.length;r+=1)o=d(o,n[r]);return{c(){e=h("span"),this.h()},l(t){e=g(t,"SPAN",{}),m(e).forEach(l),this.h()},h(){b(e,o)},m(t,n){c(t,e,n)},p(t,r){b(e,o=M(n,[1&r&&t[0].attributes]))},d(t){t&&l(e)}}}function oe(t){let e,n,o=t[0].body+"",r=[t[0].attributes],i={};for(let s=0;s<r.length;s+=1)i=d(i,r[s]);return{c(){e=y("svg"),n=new v(!0),this.h()},l(t){e=x(t,"svg",{});var o=m(e);n=w(o,!0),o.forEach(l),this.h()},h(){n.a=null,k(e,i)},m(t,r){c(t,e,r),n.m(o,e)},p(t,s){1&s&&o!==(o=t[0].body+"")&&n.p(o),k(e,i=M(r,[1&s&&t[0].attributes]))},d(t){t&&l(e)}}}function re(t){let e,n=t[0]&&ee(t);return{c(){n&&n.c(),e=s()},l(t){n&&n.l(t),e=s()},m(t,o){n&&n.m(t,o),c(t,e,o)},p(t,[o]){t[0]?n?n.p(t,o):(n=ee(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:a,o:a,d(t){t&&l(e),n&&n.d(t)}}}function ie(t,e,n){const o={name:"",loading:null,destroyed:!1};let r,i=!1,s=0;const c=t=>{"function"==typeof e.onLoad&&e.onLoad(t);j()("load",{icon:t})};function a(){n(3,s++,s)}return f((()=>{n(2,i=!0)})),u((()=>{n(1,o.destroyed=!0,o),o.loading&&(o.loading.abort(),n(1,o.loading=null,o))})),t.$$set=t=>{n(6,e=d(d({},e),p(t)))},t.$$.update=()=>{{const l=te(e.icon,o,i,a,c);n(0,r=l?(t=l.data,s=e,t?Yt({...z,...t},s):null):null),r&&l.classes&&n(0,r.attributes.class=("string"==typeof e.class?e.class+" ":"")+l.classes.join(" "),r)}var t,s},e=p(e),[r,o,i,s]}class se extends n{constructor(t){super(),o(this,t,ie,re,i,{})}}export{se as I,F as a,O as e,S as f,M as g,E as u};

var e,t;import{E as r}from"./scheduler.D3Z0lQde.js";import{w as n}from"./index.Bwg1AZp7.js";function o(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function a({href:e}){return e.split("#")[0]}new URL("sveltekit-internal://");const s=["href","pathname","search","toString","toJSON"];function l(e,t,r){const n=new URL(e);Object.defineProperty(n,"searchParams",{value:new Proxy(n.searchParams,{get(e,n){if("get"===n||"getAll"===n||"has"===n)return t=>(r(t),e[n](t));t();const o=Reflect.get(e,n);return"function"==typeof o?o.bind(e):o}}),enumerable:!0,configurable:!0});for(const o of s)Object.defineProperty(n,o,{get:()=>(t(),e[o]),enumerable:!0,configurable:!0});return n}const i=window.fetch;window.fetch=(e,t)=>("GET"!==(e instanceof Request?e.method:(null==t?void 0:t.method)||"GET")&&c.delete(d(e)),i(e,t));const c=new Map;function u(e,t){const r=d(e,t),n=document.querySelector(r);if(null==n?void 0:n.textContent){let{body:e,...t}=JSON.parse(n.textContent);const o=n.getAttribute("data-ttl");o&&c.set(r,{body:e,init:t,ttl:1e3*Number(o)});return null!==n.getAttribute("data-b64")&&(e=function(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r.buffer}(e)),Promise.resolve(new Response(e,t))}return window.fetch(e,t)}function d(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if((null==t?void 0:t.headers)||(null==t?void 0:t.body)){const e=[];t.headers&&e.push([...new Headers(t.headers)].join(",")),t.body&&("string"==typeof t.body||ArrayBuffer.isView(t.body))&&e.push(t.body),r+=`[data-hash="${function(...e){let t=5381;for(const r of e)if("string"==typeof r){let e=r.length;for(;e;)t=33*t^r.charCodeAt(--e)}else{if(!ArrayBuffer.isView(r))throw new TypeError("value must be a string or TypedArray");{const e=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let n=e.length;for(;n;)t=33*t^e[--n]}}return(t>>>0).toString(36)}(...e)}"]`}return r}const f=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function p(e){const t=[];var r;return{pattern:"/"===e?/^\/$/:new RegExp(`^${(r=e,r.slice(1).split("/").filter(h)).map((e=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(e);if(r)return t.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const n=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(e);if(n)return t.push({name:n[1],matcher:n[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!e)return;const o=e.split(/\[(.+?)\](?!\])/);return"/"+o.map(((e,r)=>{if(r%2){if(e.startsWith("x+"))return m(String.fromCharCode(parseInt(e.slice(2),16)));if(e.startsWith("u+"))return m(String.fromCharCode(...e.slice(2).split("-").map((e=>parseInt(e,16)))));const n=f.exec(e),[,a,s,l,i]=n;return t.push({name:l,matcher:i,optional:!!a,rest:!!s,chained:!!s&&(1===r&&""===o[0])}),s?"(.*?)":a?"([^/]*)?":"([^/]+?)"}return m(e)})).join("")})).join("")}/?$`),params:t}}function h(e){return!/^\([^)]+\)$/.test(e)}function m(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function v({nodes:e,server_loads:t,dictionary:r,matchers:n}){const o=new Set(t);return Object.entries(r).map((([t,[r,o,l]])=>{const{pattern:i,params:c}=p(t),u={id:t,exec:e=>{const t=i.exec(e);if(t)return function(e,t,r){const n={},o=e.slice(1),a=o.filter((e=>void 0!==e));let s=0;for(let l=0;l<t.length;l+=1){const e=t[l];let i=o[l-s];if(e.chained&&e.rest&&s&&(i=o.slice(l-s,l+1).filter((e=>e)).join("/"),s=0),void 0!==i)if(e.matcher&&!r[e.matcher](i)){if(!e.optional||!e.chained)return;s++}else{n[e.name]=i;const r=t[l+1],c=o[l+1];r&&!r.rest&&r.optional&&c&&e.chained&&(s=0),r||c||Object.keys(n).length!==a.length||(s=0)}else e.rest&&(n[e.name]="")}if(!s)return n}(t,c,n)},errors:[1,...l||[]].map((t=>e[t])),layouts:[0,...o||[]].map(s),leaf:a(r)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u}));function a(t){const r=t<0;return r&&(t=~t),[r,e[t]]}function s(t){return void 0===t?t:[o.has(t),e[t]]}}function g(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function y(e,t,r=JSON.stringify){const n=r(t);try{sessionStorage[e]=n}catch{}}const w=(null==(e=globalThis.__sveltekit_1x3o53r)?void 0:e.base)??"/my-static-site",b=(null==(t=globalThis.__sveltekit_1x3o53r)?void 0:t.assets)??w,k="sveltekit:snapshot",A="sveltekit:scroll",S="sveltekit:states",E="sveltekit:pageurl",_="sveltekit:history",R="sveltekit:navigation",x={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},U=location.origin;function P(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const e=document.getElementsByTagName("base");t=e.length?e[0].href:document.URL}return new URL(e,t)}function C(){return{x:pageXOffset,y:pageYOffset}}function L(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const j={...x,"":x.hover};function I(e){let t=e.assignedSlot??e.parentNode;return 11===(null==t?void 0:t.nodeType)&&(t=t.host),t}function O(e,t){for(;e&&e!==t;){if("A"===e.nodeName.toUpperCase()&&e.hasAttribute("href"))return e;e=I(e)}}function T(e,t){let r;try{r=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const n=e instanceof SVGAElement?e.target.baseVal:e.target;return{url:r,external:!r||!!n||B(r,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),target:n,download:(null==r?void 0:r.origin)===U&&e.hasAttribute("download")}}function $(e){let t=null,r=null,n=null,o=null,a=null,s=null,l=e;for(;l&&l!==document.documentElement;)null===n&&(n=L(l,"preload-code")),null===o&&(o=L(l,"preload-data")),null===t&&(t=L(l,"keepfocus")),null===r&&(r=L(l,"noscroll")),null===a&&(a=L(l,"reload")),null===s&&(s=L(l,"replacestate")),l=I(l);function i(e){switch(e){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:j[n??"off"],preload_data:j[o??"off"],keepfocus:i(t),noscroll:i(r),reload:i(a),replace_state:i(s)}}function N(e){const t=n(e);let r=!0;return{notify:function(){r=!0,t.update((e=>e))},set:function(e){r=!1,t.set(e)},subscribe:function(e){let n;return t.subscribe((t=>{(void 0===n||r&&t!==n)&&e(n=t)}))}}}function D(){const{set:e,subscribe:t}=n(!1);let r;return{subscribe:t,check:async function(){clearTimeout(r);try{const t=await fetch(`${b}/app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!t.ok)return!1;const n="1731142770670"!==(await t.json()).version;return n&&(e(!0),clearTimeout(r)),n}catch{return!1}}}}function B(e,t){return e.origin!==U||!e.pathname.startsWith(t)}function V(e){const t=function(e){e.length%4==0&&(e=e.replace(/==?$/,""));let t="",r=0,n=0;for(let o=0;o<e.length;o++)r<<=6,r|=F.indexOf(e[o]),n+=6,24===n&&(t+=String.fromCharCode((16711680&r)>>16),t+=String.fromCharCode((65280&r)>>8),t+=String.fromCharCode(255&r),r=n=0);12===n?(r>>=4,t+=String.fromCharCode(r)):18===n&&(r>>=2,t+=String.fromCharCode((65280&r)>>8),t+=String.fromCharCode(255&r));return t}(e),r=new ArrayBuffer(t.length),n=new DataView(r);for(let o=0;o<r.byteLength;o++)n.setUint8(o,t.charCodeAt(o));return r}const F="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";const q=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);class W{constructor(e,t){this.status=e,this.body="string"==typeof t?{message:t}:t||{message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class M{constructor(e,t){this.status=e,this.location=t}}class J extends Error{constructor(e,t,r){super(r),this.status=e,this.text=t}}function G(e){return e instanceof W||e instanceof J?e.status:500}const H=g(A)??{},K=g(k)??{},z={url:N({}),page:N({}),navigating:n(null),updated:D()};function X(e){H[e]=C()}function Y(e){return location.href=e.href,new Promise((()=>{}))}async function Q(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(w||"/");e&&await e.update()}}function Z(){}let ee,te,re,ne,oe,ae;const se=[],le=[];let ie=null;const ce=[],ue=[];let de,fe,pe,he,me,ve=[],ge={branch:[],error:null,url:null},ye=!1,we=!1,be=!0,ke=!1,Ae=!1,Se=!1,Ee=!1;const _e=new Set;async function Re(e,t,r){var n,o;document.URL!==location.href&&(location.href=location.href),ae=e,ee=v(e),ne=document.documentElement,oe=t,te=e.nodes[0],re=e.nodes[1],te(),re(),fe=null==(n=history.state)?void 0:n[_],pe=null==(o=history.state)?void 0:o[R],fe||(fe=pe=Date.now(),history.replaceState({...history.state,[_]:fe,[R]:pe},""));const s=H[fe];s&&(history.scrollRestoration="manual",scrollTo(s.x,s.y)),r?await async function(e,{status:t=200,error:r,node_ids:n,params:o,route:a,data:s,form:l}){ye=!0;const i=new URL(location.href);let c;({params:o={},route:a={id:null}}=Fe(i,!1)||{});try{const e=n.map((async(t,r)=>{const n=s[r];return(null==n?void 0:n.uses)&&(n.uses=ze(n.uses)),Oe({loader:ae.nodes[t],url:i,params:o,route:a,parent:async()=>{const t={};for(let n=0;n<r;n+=1)Object.assign(t,(await e[n]).data);return t},server_data_node:$e(n)})})),u=await Promise.all(e),d=ee.find((({id:e})=>e===a.id));if(d){const e=d.layouts;for(let t=0;t<e.length;t++)e[t]||u.splice(t,0,void 0)}c=Ie({url:i,params:o,branch:u,status:t,error:r,form:l,route:d??null})}catch(u){if(u instanceof M)return void(await Y(new URL(u.location,location.href)));c=await Ve({status:G(u),error:await Ge(u,{url:i,params:o,route:a}),url:i,route:a})}c.props.page&&(c.props.page.state={});je(c,e,!0)}(oe,r):He(location.href,{replaceState:!0}),function(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",(e=>{let t=!1;if(Pe(),!ke){const e=Xe(ge,void 0,null,"leave"),r={...e.navigation,cancel:()=>{t=!0,e.reject(new Error("navigation cancelled"))}};ce.forEach((e=>e(r)))}t?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"})),addEventListener("visibilitychange",(()=>{"hidden"===document.visibilityState&&Pe()})),(null==(e=navigator.connection)?void 0:e.saveData)||function(){let e;function t(e){e.defaultPrevented||n(e.composedPath()[0],1)}ne.addEventListener("mousemove",(t=>{const r=t.target;clearTimeout(e),e=setTimeout((()=>{n(r,2)}),20)})),ne.addEventListener("mousedown",t),ne.addEventListener("touchstart",t,{passive:!0});const r=new IntersectionObserver((e=>{for(const t of e)t.isIntersecting&&(Le(t.target.href),r.unobserve(t.target))}),{threshold:0});function n(e,t){const r=O(e,ne);if(!r)return;const{url:n,external:o,download:a}=T(r,w);if(o||a)return;const s=$(r),l=n&&ge.url.pathname+ge.url.search===n.pathname+n.search;if(!s.reload&&!l)if(t<=s.preload_data){const e=Fe(n,!1);e&&async function(e){if(e.id!==(null==ie?void 0:ie.id)){const t={};_e.add(t),ie={id:e.id,token:t,promise:De({...e,preload:t}).then((e=>(_e.delete(t),"loaded"===e.type&&e.state.error&&(ie=null),e)))}}ie.promise}(e)}else t<=s.preload_code&&Le(n.pathname)}function o(){r.disconnect();for(const e of ne.querySelectorAll("a")){const{url:t,external:n,download:o}=T(e,w);if(n||o)continue;const a=$(e);a.reload||(a.preload_code===x.viewport&&r.observe(e),a.preload_code===x.eager&&Le(t.pathname))}}ve.push(o),o()}();ne.addEventListener("click",(async e=>{if(e.button||1!==e.which)return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const r=O(e.composedPath()[0],ne);if(!r)return;const{url:n,external:o,target:s,download:l}=T(r,w);if(!n)return;if("_parent"===s||"_top"===s){if(window.parent!==window)return}else if(s&&"_self"!==s)return;const i=$(r);if(!(r instanceof SVGAElement)&&n.protocol!==location.protocol&&"https:"!==n.protocol&&"http:"!==n.protocol)return;if(l)return;const[c,u]=n.href.split("#"),d=c===a(location);if(!o&&(!i.reload||d&&u)){if(void 0!==u&&d){const[,o]=ge.url.href.split("#");if(o===u){if(e.preventDefault(),""===u||"top"===u&&null===r.ownerDocument.getElementById("top"))window.scrollTo({top:0});else{const e=r.ownerDocument.getElementById(decodeURIComponent(u));e&&(e.scrollIntoView(),e.focus())}return}if(Ae=!0,X(fe),t(n),!i.replace_state)return;Ae=!1}e.preventDefault(),await new Promise((e=>{requestAnimationFrame((()=>{setTimeout(e,0)})),setTimeout(e,100)})),Me({type:"link",url:n,keepfocus:i.keepfocus,noscroll:i.noscroll,replace_state:i.replace_state??n.href===location.href})}else We({url:n,type:"link"})?ke=!0:e.preventDefault()})),ne.addEventListener("submit",(e=>{if(e.defaultPrevented)return;const t=HTMLFormElement.prototype.cloneNode.call(e.target),r=e.submitter;if("_blank"===((null==r?void 0:r.formTarget)||t.target))return;if("get"!==((null==r?void 0:r.formMethod)||t.method))return;const n=new URL((null==r?void 0:r.hasAttribute("formaction"))&&(null==r?void 0:r.formAction)||t.action);if(B(n,w))return;const o=e.target,a=$(o);if(a.reload)return;e.preventDefault(),e.stopPropagation();const s=new FormData(o),l=null==r?void 0:r.getAttribute("name");l&&s.append(l,(null==r?void 0:r.getAttribute("value"))??""),n.search=new URLSearchParams(s).toString(),Me({type:"form",url:n,keepfocus:a.keepfocus,noscroll:a.noscroll,replace_state:a.replace_state??n.href===location.href})})),addEventListener("popstate",(async e=>{var r;if(null==(r=e.state)?void 0:r[_]){const r=e.state[_];if(me={},r===fe)return;const n=H[r],o=e.state[S]??{},s=new URL(e.state[E]??location.href),l=e.state[R],i=a(location)===a(ge.url);if(l===pe&&(Se||i))return t(s),H[fe]=C(),n&&scrollTo(n.x,n.y),o!==he.state&&(he={...he,state:o},de.$set({page:he})),void(fe=r);const c=r-fe;await Me({type:"popstate",url:s,popped:{state:o,scroll:n,delta:c},accept:()=>{fe=r,pe=l},block:()=>{history.go(-c)},nav_token:me})}else if(!Ae){t(new URL(location.href))}})),addEventListener("hashchange",(()=>{Ae&&(Ae=!1,history.replaceState({...history.state,[_]:++fe,[R]:pe},"",location.href))}));for(const r of document.querySelectorAll("link"))"icon"===r.rel&&(r.href=r.href);function t(e){ge.url=e,z.page.set({...he,url:e}),z.page.notify()}addEventListener("pageshow",(e=>{e.persisted&&z.navigating.set(null)}))}()}function xe(e){le.some((e=>null==e?void 0:e.snapshot))&&(K[e]=le.map((e=>{var t;return null==(t=null==e?void 0:e.snapshot)?void 0:t.capture()})))}function Ue(e){var t;null==(t=K[e])||t.forEach(((e,t)=>{var r,n;null==(n=null==(r=le[t])?void 0:r.snapshot)||n.restore(e)}))}function Pe(){X(fe),y(A,H),xe(pe),y(k,K)}async function Ce(e,t,r,n){return Me({type:"goto",url:P(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:r,nav_token:n,accept:()=>{t.invalidateAll&&(Ee=!0)}})}async function Le(e){const t=ee.find((t=>t.exec(qe(e))));t&&await Promise.all([...t.layouts,t.leaf].map((e=>null==e?void 0:e[1]())))}function je(e,t,r){var n;ge=e.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),he=e.props.page,de=new ae.root({target:t,props:{...e.props,stores:z,components:le},hydrate:r,sync:!1}),Ue(pe);const a={from:null,to:{params:ge.params,route:{id:(null==(n=ge.route)?void 0:n.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};ve.forEach((e=>e(a))),we=!0}function Ie({url:e,params:t,branch:r,status:n,error:o,route:a,form:s}){let l="never";if(!w||e.pathname!==w&&e.pathname!==w+"/")for(const m of r)void 0!==(null==m?void 0:m.slash)&&(l=m.slash);else l="always";var i,c;e.pathname=(i=e.pathname,c=l,"/"===i||"ignore"===c?i:"never"===c?i.endsWith("/")?i.slice(0,-1):i:"always"!==c||i.endsWith("/")?i:i+"/"),e.search=e.search;const u={type:"loaded",state:{url:e,params:t,branch:r,error:o,route:a},props:{constructors:(d=r,d.filter((e=>null!=e))).map((e=>e.node.component)),page:he}};var d;void 0!==s&&(u.props.form=s);let f={},p=!he,h=0;for(let m=0;m<Math.max(r.length,ge.branch.length);m+=1){const e=r[m],t=ge.branch[m];(null==e?void 0:e.data)!==(null==t?void 0:t.data)&&(p=!0),e&&(f={...f,...e.data},p&&(u.props[`data_${h}`]=f),h+=1)}return(!ge.url||e.href!==ge.url.href||ge.error!==o||void 0!==s&&s!==he.form||p)&&(u.props.page={error:o,params:t,route:{id:(null==a?void 0:a.id)??null},state:{},status:n,url:new URL(e),form:s??null,data:p?f:he.data}),u}async function Oe({loader:e,parent:t,url:r,params:n,route:o,server_data_node:a}){var s,i,f;let p=null,h=!0;const m={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},v=await e();if(null==(s=v.universal)?void 0:s.load){let e=function(...e){for(const t of e){const{href:e}=new URL(t,r);m.dependencies.add(e)}};const s={route:new Proxy(o,{get:(e,t)=>(h&&(m.route=!0),e[t])}),params:new Proxy(n,{get:(e,t)=>(h&&m.params.add(t),e[t])}),data:(null==a?void 0:a.data)??null,url:l(r,(()=>{h&&(m.url=!0)}),(e=>{h&&m.search_params.add(e)})),async fetch(t,n){let o;t instanceof Request?(o=t.url,n={body:"GET"===t.method||"HEAD"===t.method?void 0:await t.blob(),cache:t.cache,credentials:t.credentials,headers:t.headers,integrity:t.integrity,keepalive:t.keepalive,method:t.method,mode:t.mode,redirect:t.redirect,referrer:t.referrer,referrerPolicy:t.referrerPolicy,signal:t.signal,...n}):o=t;const a=new URL(o,r);return h&&e(a.href),a.origin===r.origin&&(o=a.href.slice(r.origin.length)),we?function(e,t,r){if(c.size>0){const t=d(e,r),n=c.get(t);if(n){if(performance.now()<n.ttl&&["default","force-cache","only-if-cached",void 0].includes(null==r?void 0:r.cache))return new Response(n.body,n.init);c.delete(t)}}return window.fetch(t,r)}(o,a.href,n):u(o,n)},setHeaders:()=>{},depends:e,parent:()=>(h&&(m.parent=!0),t()),untrack(e){h=!1;try{return e()}finally{h=!0}}};p=await v.universal.load.call(null,s)??null}return{node:v,loader:e,server:a,universal:(null==(i=v.universal)?void 0:i.load)?{type:"data",data:p,uses:m}:null,data:p??(null==a?void 0:a.data)??null,slash:(null==(f=v.universal)?void 0:f.trailingSlash)??(null==a?void 0:a.slash)}}function Te(e,t,r,n,o,a){if(Ee)return!0;if(!o)return!1;if(o.parent&&e)return!0;if(o.route&&t)return!0;if(o.url&&r)return!0;for(const s of o.search_params)if(n.has(s))return!0;for(const s of o.params)if(a[s]!==ge.params[s])return!0;for(const s of o.dependencies)if(se.some((e=>e(new URL(s)))))return!0;return!1}function $e(e,t){return"data"===(null==e?void 0:e.type)?e:"skip"===(null==e?void 0:e.type)?t??null:null}function Ne({error:e,url:t,route:r,params:n}){return{type:"loaded",state:{error:e,url:t,route:r,params:n,branch:[]},props:{page:he,constructors:[]}}}async function De({id:e,invalidating:t,url:r,params:n,route:o,preload:a}){if((null==ie?void 0:ie.id)===e)return _e.delete(ie.token),ie.promise;const{errors:s,layouts:l,leaf:i}=o,c=[...l,i];s.forEach((e=>null==e?void 0:e().catch((()=>{})))),c.forEach((e=>null==e?void 0:e[1]().catch((()=>{}))));let u=null;const d=!!ge.url&&e!==ge.url.pathname+ge.url.search,f=!!ge.route&&o.id!==ge.route.id,p=function(e,t){if(!e)return new Set(t.searchParams.keys());const r=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const n of r){const o=e.searchParams.getAll(n),a=t.searchParams.getAll(n);o.every((e=>a.includes(e)))&&a.every((e=>o.includes(e)))&&r.delete(n)}return r}(ge.url,r);let h=!1;const m=c.map(((e,t)=>{var r;const o=ge.branch[t],a=!!(null==e?void 0:e[0])&&((null==o?void 0:o.loader)!==e[1]||Te(h,f,d,p,null==(r=o.server)?void 0:r.uses,n));return a&&(h=!0),a}));if(m.some(Boolean)){try{u=await Ke(r,m)}catch(b){const t=await Ge(b,{url:r,params:n,route:{id:e}});return _e.has(a)?Ne({error:t,url:r,params:n,route:o}):Ve({status:G(b),error:t,url:r,route:o})}if("redirect"===u.type)return u}const v=null==u?void 0:u.nodes;let g=!1;const y=c.map((async(e,t)=>{var a;if(!e)return;const s=ge.branch[t],l=null==v?void 0:v[t];if(!(l&&"skip"!==l.type||e[1]!==(null==s?void 0:s.loader)||Te(g,f,d,p,null==(a=s.universal)?void 0:a.uses,n)))return s;if(g=!0,"error"===(null==l?void 0:l.type))throw l;return Oe({loader:e[1],url:r,params:n,route:o,parent:async()=>{var e;const r={};for(let n=0;n<t;n+=1)Object.assign(r,null==(e=await y[n])?void 0:e.data);return r},server_data_node:$e(void 0===l&&e[0]?{type:"skip"}:l??null,e[0]?null==s?void 0:s.server:void 0)})}));for(const A of y)A.catch((()=>{}));const w=[];for(let A=0;A<c.length;A+=1)if(c[A])try{w.push(await y[A])}catch(k){if(k instanceof M)return{type:"redirect",location:k.location};if(_e.has(a))return Ne({error:await Ge(k,{params:n,url:r,route:{id:o.id}}),url:r,params:n,route:o});let e,t=G(k);if(null==v?void 0:v.includes(k))t=k.status??t,e=k.error;else if(k instanceof W)e=k.body;else{if(await z.updated.check())return await Q(),await Y(r);e=await Ge(k,{params:n,url:r,route:{id:o.id}})}const l=await Be(A,w,s);return l?Ie({url:r,params:n,branch:w.slice(0,l.idx).concat(l.node),status:t,error:e,route:o}):await Je(r,{id:o.id},e,t)}else w.push(void 0);return Ie({url:r,params:n,branch:w,status:200,error:null,route:o,form:t?void 0:null})}async function Be(e,t,r){for(;e--;)if(r[e]){let n=e;for(;!t[n];)n-=1;try{return{idx:n+1,node:{node:await r[e](),loader:r[e],data:{},server:null,universal:null}}}catch{continue}}}async function Ve({status:e,error:t,url:r,route:n}){const o={};let a=null;if(0===ae.server_loads[0])try{const e=await Ke(r,[!0]);if("data"!==e.type||e.nodes[0]&&"data"!==e.nodes[0].type)throw 0;a=e.nodes[0]??null}catch{(r.origin!==U||r.pathname!==location.pathname||ye)&&await Y(r)}return Ie({url:r,params:o,branch:[await Oe({loader:te,url:r,params:o,route:n,parent:()=>Promise.resolve({}),server_data_node:$e(a)}),{node:await re(),loader:re,universal:null,server:null,data:null}],status:e,error:t,route:null})}function Fe(e,t){if(!e)return;if(B(e,w))return;let r;try{r=ae.hooks.reroute({url:new URL(e)})??e.pathname}catch(a){return}const n=qe(r);for(const s of ee){const r=s.exec(n);if(r){return{id:e.pathname+e.search,invalidating:t,route:s,params:o(r),url:e}}}}function qe(e){return function(e){return e.split("%25").map(decodeURI).join("%25")}(e.slice(w.length)||"/")}function We({url:e,type:t,intent:r,delta:n}){let o=!1;const a=Xe(ge,r,e,t);void 0!==n&&(a.navigation.delta=n);const s={...a.navigation,cancel:()=>{o=!0,a.reject(new Error("navigation cancelled"))}};return ke||ce.forEach((e=>e(s))),o?null:a}async function Me({type:e,url:t,popped:n,keepfocus:o,noscroll:a,replace_state:s,state:l={},redirect_count:i=0,nav_token:c={},accept:u=Z,block:d=Z}){const f=Fe(t,!1),p=We({url:t,type:e,delta:null==n?void 0:n.delta,intent:f});if(!p)return void d();const h=fe,m=pe;u(),ke=!0,we&&z.navigating.set(p.navigation),me=c;let v=f&&await De(f);if(!v){if(B(t,w))return await Y(t);v=await Je(t,{id:null},await Ge(new J(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(null==f?void 0:f.url)||t,me!==c)return p.reject(new Error("navigation aborted")),!1;if("redirect"===v.type){if(!(i>=20))return Ce(new URL(v.location,t).href,{},i+1,c),!1;v=await Ve({status:500,error:await Ge(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}})}else if(v.props.page.status>=400){await z.updated.check()&&(await Q(),await Y(t))}if(se.length=0,Ee=!1,X(h),xe(m),v.props.page.url.pathname!==t.pathname&&(t.pathname=v.props.page.url.pathname),l=n?n.state:l,!n){const e=s?0:1,r={[_]:fe+=e,[R]:pe+=e,[S]:l};(s?history.replaceState:history.pushState).call(history,r,"",t),s||function(e,t){let r=e+1;for(;H[r];)delete H[r],r+=1;for(r=t+1;K[r];)delete K[r],r+=1}(fe,pe)}if(ie=null,v.props.page.state=l,we){ge=v.state,v.props.page&&(v.props.page.url=t);const e=(await Promise.all(ue.map((e=>e(p.navigation))))).filter((e=>"function"==typeof e));if(e.length>0){let t=function(){ve=ve.filter((t=>!e.includes(t)))};e.push(t),ve.push(...e)}de.$set(v.props),Se=!0}else je(v,oe,!1);const{activeElement:g}=document;await r();const y=n?n.scroll:a?C():null;if(be){const e=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));y?scrollTo(y.x,y.y):e?e.scrollIntoView():scrollTo(0,0)}const b=document.activeElement!==g&&document.activeElement!==document.body;o||b||function(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const e=document.body,t=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),null!==t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex");const r=getSelection();if(r&&"None"!==r.type){const e=[];for(let t=0;t<r.rangeCount;t+=1)e.push(r.getRangeAt(t));setTimeout((()=>{if(r.rangeCount===e.length){for(let t=0;t<r.rangeCount;t+=1){const n=e[t],o=r.getRangeAt(t);if(n.commonAncestorContainer!==o.commonAncestorContainer||n.startContainer!==o.startContainer||n.endContainer!==o.endContainer||n.startOffset!==o.startOffset||n.endOffset!==o.endOffset)return}r.removeAllRanges()}}))}}}(),be=!0,v.props.page&&(he=v.props.page),ke=!1,"popstate"===e&&Ue(pe),p.fulfil(void 0),ve.forEach((e=>e(p.navigation))),z.navigating.set(null)}async function Je(e,t,r,n){return e.origin!==U||e.pathname!==location.pathname||ye?await Y(e):await Ve({status:n,error:r,url:e,route:t})}function Ge(e,t){if(e instanceof W)return e.body;const r=G(e),n=function(e){return e instanceof J?e.text:"Internal Error"}(e);return ae.hooks.handleError({error:e,event:t,status:r,message:n})??{message:n}}function He(e,t={}){return(e=P(e)).origin!==U?Promise.reject(new Error("goto: invalid URL")):Ce(e,t,0)}async function Ke(e,t){var r;const n=new URL(e);var o;n.pathname=(o=e.pathname).endsWith(".html")?o.replace(/\.html$/,".html__data.json"):o.replace(/\/$/,"")+"/__data.json",e.pathname.endsWith("/")&&n.searchParams.append("x-sveltekit-trailing-slash","1"),n.searchParams.append("x-sveltekit-invalidated",t.map((e=>e?"1":"0")).join(""));const a=await i(n.href);if(!a.ok){let e;throw(null==(r=a.headers.get("content-type"))?void 0:r.includes("application/json"))?e=await a.json():404===a.status?e="Not Found":500===a.status&&(e="Internal Error"),new W(a.status,e)}return new Promise((async e=>{var t;const r=new Map,n=a.body.getReader(),o=new TextDecoder;function s(e){return function(e,t){if("number"==typeof e)return o(e,!0);if(!Array.isArray(e)||0===e.length)throw new Error("Invalid input");const r=e,n=Array(r.length);function o(e,a=!1){if(-1===e)return;if(-3===e)return NaN;if(-4===e)return 1/0;if(-5===e)return-1/0;if(-6===e)return-0;if(a)throw new Error("Invalid input");if(e in n)return n[e];const s=r[e];if(s&&"object"==typeof s)if(Array.isArray(s))if("string"==typeof s[0]){const r=s[0],a=null==t?void 0:t[r];if(a)return n[e]=a(o(s[1]));switch(r){case"Date":n[e]=new Date(s[1]);break;case"Set":const t=new Set;n[e]=t;for(let e=1;e<s.length;e+=1)t.add(o(s[e]));break;case"Map":const a=new Map;n[e]=a;for(let e=1;e<s.length;e+=2)a.set(o(s[e]),o(s[e+1]));break;case"RegExp":n[e]=new RegExp(s[1],s[2]);break;case"Object":n[e]=Object(s[1]);break;case"BigInt":n[e]=BigInt(s[1]);break;case"null":const l=Object.create(null);n[e]=l;for(let e=1;e<s.length;e+=2)l[s[e]]=o(s[e+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const t=new(0,globalThis[r])(V(s[1]));n[e]=t;break}case"ArrayBuffer":{const t=V(s[1]);n[e]=t;break}default:throw new Error(`Unknown type ${r}`)}}else{const t=new Array(s.length);n[e]=t;for(let e=0;e<s.length;e+=1){const r=s[e];-2!==r&&(t[e]=o(r))}}else{const t={};n[e]=t;for(const e in s){const r=s[e];t[e]=o(r)}}else n[e]=s;return n[e]}return o(0)}(e,{Promise:e=>new Promise(((t,n)=>{r.set(e,{fulfil:t,reject:n})}))})}let l="";for(;;){const{done:a,value:i}=await n.read();if(a&&!l)break;for(l+=!i&&l?"\n":o.decode(i,{stream:!0});;){const n=l.indexOf("\n");if(-1===n)break;const o=JSON.parse(l.slice(0,n));if(l=l.slice(n+1),"redirect"===o.type)return e(o);if("data"===o.type)null==(t=o.nodes)||t.forEach((e=>{"data"===(null==e?void 0:e.type)&&(e.uses=ze(e.uses),e.data=s(e.data))})),e(o);else if("chunk"===o.type){const{id:e,data:t,error:n}=o,a=r.get(e);r.delete(e),n?a.reject(s(n)):a.fulfil(s(t))}}}}))}function ze(e){return{dependencies:new Set((null==e?void 0:e.dependencies)??[]),params:new Set((null==e?void 0:e.params)??[]),parent:!!(null==e?void 0:e.parent),route:!!(null==e?void 0:e.route),url:!!(null==e?void 0:e.url),search_params:new Set((null==e?void 0:e.search_params)??[])}}function Xe(e,t,r,n){var o,a;let s,l;const i=new Promise(((e,t)=>{s=e,l=t}));i.catch((()=>{}));return{navigation:{from:{params:e.params,route:{id:(null==(o=e.route)?void 0:o.id)??null},url:e.url},to:r&&{params:(null==t?void 0:t.params)??null,route:{id:(null==(a=null==t?void 0:t.route)?void 0:a.id)??null},url:r},willUnload:!t,type:n,complete:i},fulfil:s,reject:l}}export{Re as a,w as b,He as g,z as s};

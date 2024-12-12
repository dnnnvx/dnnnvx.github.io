import{n as he,aE as yt,aD as _e}from"./runtime.B--FIw-H.js";import{H as ae,S as ke,R as Me}from"./control.CYgJF_JY.js";new URL("sveltekit-internal://");function _t(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function wt(e){return e.split("%25").map(decodeURI).join("%25")}function vt(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function pe({href:e}){return e.split("#")[0]}const bt=["href","pathname","search","toString","toJSON"];function At(e,n,t){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(t(s),a[o](s));n();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of bt)Object.defineProperty(r,a,{get(){return n(),e[a]},enumerable:!0,configurable:!0});return r}const kt="/__data.json",St=".html__data.json";function Et(e){return e.endsWith(".html")?e.replace(/\.html$/,St):e.replace(/\/$/,"")+kt}function Rt(...e){let n=5381;for(const t of e)if(typeof t=="string"){let r=t.length;for(;r;)n=n*33^t.charCodeAt(--r)}else if(ArrayBuffer.isView(t)){const r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function It(e){const n=atob(e),t=new Uint8Array(n.length);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t.buffer}const Ke=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&H.delete(Se(e)),Ke(e,n));const H=new Map;function Tt(e,n){const t=Se(e,n),r=document.querySelector(t);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&H.set(t,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=It(a)),Promise.resolve(new Response(a,o))}return window.fetch(e,n)}function Ut(e,n,t){if(H.size>0){const r=Se(e,t),a=H.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(a.body,a.init);H.delete(r)}}return window.fetch(n,t)}function Se(e,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${Rt(...a)}"]`}return r}const Lt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Pt(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Ct(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return ge(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return ge(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const d=Lt.exec(c),[,h,y,u,g]=d;return n.push({name:u,matcher:g,optional:!!h,rest:!!y,chained:y?l===1&&i[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return ge(c)}).join("")}).join("")}/?$`),params:n}}function xt(e){return!/^\([^)]+\)$/.test(e)}function Ct(e){return e.slice(1).split("/").filter(xt)}function Nt(e,n,t){const r={},a=e.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||t[c.matcher](l)){r[c.name]=l;const d=n[s+1],h=a[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function ge(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ot({nodes:e,server_loads:n,dictionary:t,matchers:r}){const a=new Set(n);return Object.entries(t).map(([s,[c,l,d]])=>{const{pattern:h,params:y}=Pt(s),u={id:s,exec:g=>{const f=h.exec(g);if(f)return Nt(f,y,r)},errors:[1,...d||[]].map(g=>e[g]),layouts:[0,...l||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[a.has(s),e[s]]}}function We(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Ne(e,n,t=JSON.stringify){const r=t(n);try{sessionStorage[e]=r}catch{}}const O=[];function Ee(e,n=he){let t=null;const r=new Set;function a(s){if(yt(e,s)&&(e=s,t)){const c=!O.length;for(const l of r)l[1](),O.push(l,e);if(c){for(let l=0;l<O.length;l+=2)O[l][0](O[l+1]);O.length=0}}}function o(s){a(s(e))}function i(s,c=he){const l=[s,c];return r.add(l),r.size===1&&(t=n(a,o)||he),s(e),()=>{r.delete(l),r.size===0&&t&&(t(),t=null)}}return{set:a,update:o,subscribe:i}}var Ge;const U=((Ge=globalThis.__sveltekit_1nkw12s)==null?void 0:Ge.base)??"";var He;const jt=((He=globalThis.__sveltekit_1nkw12s)==null?void 0:He.assets)??U,$t="1734016349018",Ye="sveltekit:snapshot",ze="sveltekit:scroll",Je="sveltekit:states",Dt="sveltekit:pageurl",D="sveltekit:history",K="sveltekit:navigation",Z={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},J=location.origin;function Xe(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function Re(){return{x:pageXOffset,y:pageYOffset}}function j(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Oe={...Z,"":Z.hover};function Ze(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Qe(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Ze(e)}}function we(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,a=!t||!!r||oe(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===J&&e.hasAttribute("download");return{url:t,external:a,target:r,download:o}}function Q(e){let n=null,t=null,r=null,a=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)r===null&&(r=j(s,"preload-code")),a===null&&(a=j(s,"preload-data")),n===null&&(n=j(s,"keepfocus")),t===null&&(t=j(s,"noscroll")),o===null&&(o=j(s,"reload")),i===null&&(i=j(s,"replacestate")),s=Ze(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Oe[r??"off"],preload_data:Oe[a??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(i)}}function je(e){const n=Ee(e);let t=!0;function r(){t=!0,n.update(i=>i)}function a(i){t=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||t&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}function Ft(){const{set:e,subscribe:n}=Ee(!1);let t;async function r(){clearTimeout(t);try{const a=await fetch(`${jt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==$t;return i&&(e(!0),clearTimeout(t)),i}catch{return!1}}return{subscribe:n,check:r}}function oe(e,n){return e.origin!==J||!e.pathname.startsWith(n)}function $e(e){const n=Bt(e),t=new ArrayBuffer(n.length),r=new DataView(t);for(let a=0;a<t.byteLength;a++)r.setUint8(a,n.charCodeAt(a));return t}const Vt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Bt(e){e.length%4===0&&(e=e.replace(/==?$/,""));let n="",t=0,r=0;for(let a=0;a<e.length;a++)t<<=6,t|=Vt.indexOf(e[a]),r+=6,r===24&&(n+=String.fromCharCode((t&16711680)>>16),n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255),t=r=0);return r===12?(t>>=4,n+=String.fromCharCode(t)):r===18&&(t>>=2,n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255)),n}const qt=-1,Gt=-2,Ht=-3,Mt=-4,Kt=-5,Wt=-6;function dn(e,n){return et(JSON.parse(e),n)}function et(e,n){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,r=Array(t.length);function a(o,i=!1){if(o===qt)return;if(o===Ht)return NaN;if(o===Mt)return 1/0;if(o===Kt)return-1/0;if(o===Wt)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=t[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=n==null?void 0:n[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const d=new Set;r[o]=d;for(let u=1;u<s.length;u+=1)d.add(a(s[u]));break;case"Map":const h=new Map;r[o]=h;for(let u=1;u<s.length;u+=2)h.set(a(s[u]),a(s[u+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const y=Object.create(null);r[o]=y;for(let u=1;u<s.length;u+=2)y[s[u]]=a(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=s[1],f=$e(g),p=new u(f);r[o]=p;break}case"ArrayBuffer":{const u=s[1],g=$e(u);r[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const d=s[l];d!==Gt&&(c[l]=a(d))}}else{const c={};r[o]=c;for(const l in s){const d=s[l];c[l]=a(d)}}return r[o]}return a(0)}const tt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...tt];const Yt=new Set([...tt]);[...Yt];function zt(e){return e.filter(n=>n!=null)}const Jt="x-sveltekit-invalidated",Xt="x-sveltekit-trailing-slash";function ee(e){return e instanceof ae||e instanceof ke?e.status:500}function Zt(e){return e instanceof ke?e.text:"Internal Error"}const Qt=new Set(["icon","shortcut icon","apple-touch-icon"]),N=We(ze)??{},W=We(Ye)??{},P={url:je({}),page:je({}),navigating:Ee(null),updated:Ft()};function Ie(e){N[e]=Re()}function en(e,n){let t=e+1;for(;N[t];)delete N[t],t+=1;for(t=n+1;W[t];)delete W[t],t+=1}function V(e){return location.href=e.href,new Promise(()=>{})}async function nt(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(U||"/");e&&await e.update()}}function De(){}let se,ve,te,L,be,q;const rt=[],ne=[];let I=null;const at=[],tn=[];let $=[],_={branch:[],error:null,url:null},Te=!1,re=!1,Fe=!0,Y=!1,G=!1,ot=!1,ie=!1,C,E,T,R,B;const M=new Set;let me;async function hn(e,n,t){var a,o,i,s;document.URL!==location.href&&(location.href=location.href),q=e,await((o=(a=e.hooks).init)==null?void 0:o.call(a)),se=Ot(e),L=document.documentElement,be=n,ve=e.nodes[0],te=e.nodes[1],ve(),te(),E=(i=history.state)==null?void 0:i[D],T=(s=history.state)==null?void 0:s[K],E||(E=T=Date.now(),history.replaceState({...history.state,[D]:E,[K]:T},""));const r=N[E];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),t?await ln(be,t):sn(location.href,{replaceState:!0}),cn()}async function nn(){if(await(me||(me=Promise.resolve())),!me)return;me=null;const e=fe(_.url,!0);I=null;const n=B={},t=e&&await Pe(e);if(!(!t||n!==B)){if(t.type==="redirect")return ce(new URL(t.location,_.url).href,{},1,n);t.props.page&&(R=t.props.page),_=t.state,st(),C.$set(t.props)}}function st(){rt.length=0,ie=!1}function it(e){ne.some(n=>n==null?void 0:n.snapshot)&&(W[e]=ne.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function ct(e){var n;(n=W[e])==null||n.forEach((t,r)=>{var a,o;(o=(a=ne[r])==null?void 0:a.snapshot)==null||o.restore(t)})}function Ve(){Ie(E),Ne(ze,N),it(T),Ne(Ye,W)}async function ce(e,n,t,r){return X({type:"goto",url:Xe(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:r,accept:()=>{n.invalidateAll&&(ie=!0)}})}async function rn(e){if(e.id!==(I==null?void 0:I.id)){const n={};M.add(n),I={id:e.id,token:n,promise:Pe({...e,preload:n}).then(t=>(M.delete(n),t.type==="loaded"&&t.state.error&&(I=null),t))}}return I.promise}async function ye(e){const n=se.find(t=>t.exec(ut(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function lt(e,n,t){var o;_=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),R=e.props.page,C=new q.root({target:n,props:{...e.props,stores:P,components:ne},hydrate:t,sync:!1}),ct(T);const a={from:null,to:{params:_.params,route:{id:((o=_.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};$.forEach(i=>i(a)),re=!0}function z({url:e,params:n,branch:t,status:r,error:a,route:o,form:i}){let s="never";if(U&&(e.pathname===U||e.pathname===U+"/"))s="always";else for(const u of t)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);e.pathname=_t(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:a,route:o},props:{constructors:zt(t).map(u=>u.node.component),page:R}};i!==void 0&&(c.props.form=i);let l={},d=!R,h=0;for(let u=0;u<Math.max(t.length,_.branch.length);u+=1){const g=t[u],f=_.branch[u];(g==null?void 0:g.data)!==(f==null?void 0:f.data)&&(d=!0),g&&(l={...l,...g.data},d&&(c.props[`data_${h}`]=l),h+=1)}return(!_.url||e.href!==_.url.href||_.error!==a||i!==void 0&&i!==R.form||d)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:d?l:R.data}),c}async function Ue({loader:e,parent:n,url:t,params:r,route:a,server_data_node:o}){var d,h,y;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if((d=l.universal)!=null&&d.load){let u=function(...f){for(const p of f){const{href:b}=new URL(p,t);c.dependencies.add(b)}};const g={route:new Proxy(a,{get:(f,p)=>(s&&(c.route=!0),f[p])}),params:new Proxy(r,{get:(f,p)=>(s&&c.params.add(p),f[p])}),data:(o==null?void 0:o.data)??null,url:At(t,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)}),async fetch(f,p){let b;f instanceof Request?(b=f.url,p={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:[...f.headers].length?f.headers:void 0,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...p}):b=f;const k=new URL(b,t);return s&&u(k.href),k.origin===t.origin&&(b=k.href.slice(t.origin.length)),re?Ut(b,k.href,p):Tt(b,p)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),n()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,g)??null}return{node:l,loader:e,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((y=l.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function Be(e,n,t,r,a,o){if(ie)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&t)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==_.params[i])return!0;for(const i of a.dependencies)if(rt.some(s=>s(new URL(i))))return!0;return!1}function Le(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function an(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const r of t){const a=e.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&t.delete(r)}return t}function qe({error:e,url:n,route:t,params:r}){return{type:"loaded",state:{error:e,url:n,route:t,params:r,branch:[]},props:{page:R,constructors:[]}}}async function Pe({id:e,invalidating:n,url:t,params:r,route:a,preload:o}){if((I==null?void 0:I.id)===e)return M.delete(I.token),I.promise;const{errors:i,layouts:s,leaf:c}=a,l=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),l.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let d=null;const h=_.url?e!==_.url.pathname+_.url.search:!1,y=_.route?a.id!==_.route.id:!1,u=an(_.url,t);let g=!1;const f=l.map((m,v)=>{var x;const A=_.branch[v],S=!!(m!=null&&m[0])&&((A==null?void 0:A.loader)!==m[1]||Be(g,y,h,u,(x=A.server)==null?void 0:x.uses,r));return S&&(g=!0),S});if(f.some(Boolean)){try{d=await pt(t,f)}catch(m){const v=await F(m,{url:t,params:r,route:{id:e}});return M.has(o)?qe({error:v,url:t,params:r,route:a}):le({status:ee(m),error:v,url:t,route:a})}if(d.type==="redirect")return d}const p=d==null?void 0:d.nodes;let b=!1;const k=l.map(async(m,v)=>{var ue;if(!m)return;const A=_.branch[v],S=p==null?void 0:p[v];if((!S||S.type==="skip")&&m[1]===(A==null?void 0:A.loader)&&!Be(b,y,h,u,(ue=A.universal)==null?void 0:ue.uses,r))return A;if(b=!0,(S==null?void 0:S.type)==="error")throw S;return Ue({loader:m[1],url:t,params:r,route:a,parent:async()=>{var Ce;const xe={};for(let de=0;de<v;de+=1)Object.assign(xe,(Ce=await k[de])==null?void 0:Ce.data);return xe},server_data_node:Le(S===void 0&&m[0]?{type:"skip"}:S??null,m[0]?A==null?void 0:A.server:void 0)})});for(const m of k)m.catch(()=>{});const w=[];for(let m=0;m<l.length;m+=1)if(l[m])try{w.push(await k[m])}catch(v){if(v instanceof Me)return{type:"redirect",location:v.location};if(M.has(o))return qe({error:await F(v,{params:r,url:t,route:{id:a.id}}),url:t,params:r,route:a});let A=ee(v),S;if(p!=null&&p.includes(v))A=v.status??A,S=v.error;else if(v instanceof ae)S=v.body;else{if(await P.updated.check())return await nt(),await V(t);S=await F(v,{params:r,url:t,route:{id:a.id}})}const x=await ft(m,w,i);return x?z({url:t,params:r,branch:w.slice(0,x.idx).concat(x.node),status:A,error:S,route:a}):await ht(t,{id:a.id},S,A)}else w.push(void 0);return z({url:t,params:r,branch:w,status:200,error:null,route:a,form:n?void 0:null})}async function ft(e,n,t){for(;e--;)if(t[e]){let r=e;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function le({status:e,error:n,url:t,route:r}){const a={};let o=null;if(q.server_loads[0]===0)try{const l=await pt(t,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(t.origin!==J||t.pathname!==location.pathname||Te)&&await V(t)}const s=await Ue({loader:ve,url:t,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Le(o)}),c={node:await te(),loader:te,universal:null,server:null,data:null};return z({url:t,params:a,branch:[s,c],status:e,error:n,route:null})}function fe(e,n){if(!e||oe(e,U))return;let t;try{t=q.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const r=ut(t);for(const a of se){const o=a.exec(r);if(o)return{id:e.pathname+e.search,invalidating:n,route:a,params:vt(o),url:e}}}function ut(e){return wt(e.slice(U.length)||"/")}function dt({url:e,type:n,intent:t,delta:r}){let a=!1;const o=mt(_,t,e,n);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return Y||at.forEach(s=>s(i)),a?null:o}async function X({type:e,url:n,popped:t,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=De,block:d=De}){const h=fe(n,!1),y=dt({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!y){d();return}const u=E,g=T;l(),Y=!0,re&&P.navigating.set(y.navigation),B=c;let f=h&&await Pe(h);if(!f){if(oe(n,U))return await V(n);f=await ht(n,{id:null},await F(new ke(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,B!==c)return y.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await le({status:500,error:await F(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return ce(new URL(f.location,n).href,{},s+1,c),!1;else f.props.page.status>=400&&await P.updated.check()&&(await nt(),await V(n));if(st(),Ie(u),it(g),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),i=t?t.state:i,!t){const w=o?0:1,m={[D]:E+=w,[K]:T+=w,[Je]:i};(o?history.replaceState:history.pushState).call(history,m,"",n),o||en(E,T)}if(I=null,f.props.page.state=i,re){_=f.state,f.props.page&&(f.props.page.url=n);const w=(await Promise.all(tn.map(m=>m(y.navigation)))).filter(m=>typeof m=="function");if(w.length>0){let m=function(){$=$.filter(v=>!w.includes(v))};w.push(m),$.push(...w)}C.$set(f.props),ot=!0}else lt(f,be,!1);const{activeElement:p}=document;await _e();const b=t?t.scroll:a?Re():null;if(Fe){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):w?w.scrollIntoView():scrollTo(0,0)}const k=document.activeElement!==p&&document.activeElement!==document.body;!r&&!k&&Ae(),Fe=!0,f.props.page&&(R=f.props.page),Y=!1,e==="popstate"&&ct(T),y.fulfil(void 0),$.forEach(w=>w(y.navigation)),P.navigating.set(null)}async function ht(e,n,t,r){return e.origin===J&&e.pathname===location.pathname&&!Te?await le({status:r,error:t,url:e,route:n}):await V(e)}function on(){let e;L.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function n(o){o.defaultPrevented||r(o.composedPath()[0],1)}L.addEventListener("mousedown",n),L.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(ye(i.target.href),t.unobserve(i.target))},{threshold:0});function r(o,i){const s=Qe(o,L);if(!s)return;const{url:c,external:l,download:d}=we(s,U);if(l||d)return;const h=Q(s),y=c&&_.url.pathname+_.url.search===c.pathname+c.search;if(!h.reload&&!y)if(i<=h.preload_data){const u=fe(c,!1);u&&rn(u)}else i<=h.preload_code&&ye(c.pathname)}function a(){t.disconnect();for(const o of L.querySelectorAll("a")){const{url:i,external:s,download:c}=we(o,U);if(s||c)continue;const l=Q(o);l.reload||(l.preload_code===Z.viewport&&t.observe(o),l.preload_code===Z.eager&&ye(i.pathname))}}$.push(a),a()}function F(e,n){if(e instanceof ae)return e.body;const t=ee(e),r=Zt(e);return q.hooks.handleError({error:e,event:n,status:t,message:r})??{message:r}}function sn(e,n={}){return e=Xe(e),e.origin!==J?Promise.reject(new Error("goto: invalid URL")):ce(e,n,0)}function pn(){return ie=!0,nn()}async function gn(e){if(e.type==="error"){const n=new URL(location.href),{branch:t,route:r}=_;if(!r)return;const a=await ft(_.branch.length,t,r.errors);if(a){const o=z({url:n,params:_.params,branch:t.slice(0,a.idx).concat(a.node),status:e.status??500,error:e.error,route:r});_=o.state,C.$set(o.props),_e().then(Ae)}}else e.type==="redirect"?ce(e.location,{invalidateAll:!0},0):(C.$set({form:null,page:{...R,form:e.data,status:e.status}}),await _e(),C.$set({form:e.data}),e.type==="success"&&Ae())}function cn(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let r=!1;if(Ve(),!Y){const a=mt(_,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};at.forEach(i=>i(o))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ve()}),(n=navigator.connection)!=null&&n.saveData||on(),L.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=Qe(t.composedPath()[0],L);if(!r)return;const{url:a,external:o,target:i,download:s}=we(r,U);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=Q(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;const[d,h]=a.href.split("#"),y=d===pe(location);if(o||c.reload&&(!y||!h)){dt({url:a,type:"link"})?Y=!0:t.preventDefault();return}if(h!==void 0&&y){const[,u]=_.url.href.split("#");if(u===h){if(t.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const g=r.ownerDocument.getElementById(decodeURIComponent(h));g&&(g.scrollIntoView(),g.focus())}return}if(G=!0,Ie(E),e(a),!c.replace_state)return;G=!1}t.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),X({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),L.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(oe(s,U))return;const c=t.target,l=Q(c);if(l.reload)return;t.preventDefault(),t.stopPropagation();const d=new FormData(c),h=a==null?void 0:a.getAttribute("name");h&&d.append(h,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),X({type:"form",url:s,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??s.href===location.href})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[D]){const a=t.state[D];if(B={},a===E)return;const o=N[a],i=t.state[Je]??{},s=new URL(t.state[Dt]??location.href),c=t.state[K],l=pe(location)===pe(_.url);if(c===T&&(ot||l)){e(s),N[E]=Re(),o&&scrollTo(o.x,o.y),i!==R.state&&(R={...R,state:i},C.$set({page:R})),E=a;return}const h=a-E;await X({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{E=a,T=c},block:()=>{history.go(-h)},nav_token:B})}else if(!G){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{G&&(G=!1,history.replaceState({...history.state,[D]:++E,[K]:T},"",location.href))});for(const t of document.querySelectorAll("link"))Qt.has(t.rel)&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&P.navigating.set(null)});function e(t){_.url=t,P.page.set({...R,url:t}),P.page.notify()}}async function ln(e,{status:n=200,error:t,node_ids:r,params:a,route:o,data:i,form:s}){Te=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=fe(c,!1)||{});let l,d=!0;try{const h=r.map(async(g,f)=>{const p=i[f];return p!=null&&p.uses&&(p.uses=gt(p.uses)),Ue({loader:q.nodes[g],url:c,params:a,route:o,parent:async()=>{const b={};for(let k=0;k<f;k+=1)Object.assign(b,(await h[k]).data);return b},server_data_node:Le(p)})}),y=await Promise.all(h),u=se.find(({id:g})=>g===o.id);if(u){const g=u.layouts;for(let f=0;f<g.length;f++)g[f]||y.splice(f,0,void 0)}l=z({url:c,params:a,branch:y,status:n,error:t,form:s,route:u??null})}catch(h){if(h instanceof Me){await V(new URL(h.location,location.href));return}l=await le({status:ee(h),error:await F(h,{url:c,params:a,route:o}),url:c,route:o}),e.textContent="",d=!1}l.props.page&&(l.props.page.state={}),lt(l,e,d)}async function pt(e,n){var a;const t=new URL(e);t.pathname=Et(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(Xt,"1"),t.searchParams.append(Jt,n.map(o=>o?"1":"0").join(""));const r=await Ke(t.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new ae(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(y){return et(y,{Promise:u=>new Promise((g,f)=>{i.set(u,{fulfil:g,reject:f})})})}let d="";for(;;){const{done:y,value:u}=await s.read();if(y&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const g=d.indexOf(`
`);if(g===-1)break;const f=JSON.parse(d.slice(0,g));if(d=d.slice(g+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(p=>{(p==null?void 0:p.type)==="data"&&(p.uses=gt(p.uses),p.data=l(p.data))}),o(f);else if(f.type==="chunk"){const{id:p,data:b,error:k}=f,w=i.get(p);i.delete(p),k?w.reject(l(k)):w.fulfil(l(b))}}}})}function gt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function Ae(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function mt(e,n,t,r){var c,l;let a,o;const i=new Promise((d,h)=>{a=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:t},willUnload:!n,type:r,complete:i},fulfil:a,reject:o}}export{gn as a,hn as b,pn as i,dn as p,P as s};

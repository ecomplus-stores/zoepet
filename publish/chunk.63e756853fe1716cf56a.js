(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{194:function(e,t,r){"use strict";var o=r(28),n=(r(12),r(3));var s=(e,[t])=>{t||(t=e.location.pathname);const r="string"==typeof t?t.slice(1):null,o="/"+e.storeId+"@"+r.replace(/\//g,"$")+".json";return Object(n.h)({url:o}).then((e=>{const r=e.data.GET;if(r){const[e,o]=r.split("@");if(o)return{path:t,resource:e,_id:o}}const o=new Error("Resource not found, invalid slug or store ID");throw o.response=e,o}))};var a=(e,[t])=>new Promise(((r,o)=>{const{storeId:s}=e,{resource:a,_id:c}=t;if(a&&c)Object(n.g)({url:`/${a}/${c}.json`,storeId:s}).then((({data:e})=>{r({resource:a,body:e})})).catch(o);else{const e=new Error("Invalid route resource or object ID");e.response={},o(e)}})),c=e=>new Promise(((t,r)=>{const{storeId:o}=e,s=[],a=[];["products","categories","collections","brands"].forEach((e=>{s.push(Object(n.g)({url:`/${e}.json`,storeId:o}).then((t=>{const{result:r}=t.data;Array.isArray(r)&&r.forEach((({_id:t,slug:r,name:o,sku:n})=>{if(r){const s="/"+r;a.find((e=>e.path===s))||a.push({resource:e,_id:t,path:s,name:o,sku:n})}}))})))})),Promise.all(s).then((()=>t(a))).catch(r)})),i=r(2);var u=(e,[t,r=!0])=>{t||(t=e.location.hostname);const o="/domains/"+t+".json";return Object(n.e)({url:o}).then((({data:t})=>{if(r){["store_id","store_object_id","channel_id"].forEach((e=>i.a.set(e,t[e])));const e=t.default_lang;e&&(i.a.set("lang",e),i.a.set("country_code",e.replace(/^[a-z]{2}_/,"").toUpperCase()),"pt_br"===e&&(i.a.set("currency","BRL"),i.a.set("currency_symbol","R$")))}return e.storeId=t.store_id,t}))};t.a=function(e,t="object"==typeof window&&window.location){const r=this;this.storeId=e||o.$ecomConfig.get("store_id"),this.location=t,this.map=function(){return s(r,arguments)},this.resolve=function(){return a(r,arguments)},this.list=function(){return c(r)},this.setupStore=function(){return u(r,arguments)}}},362:function(e,t,r){"use strict";r.r(t);r(111);var o=r(43),n=r(194),s=r(0),a=r(34),c=r(259),i=r(261);const u=Object(s.$)("#fallback-404");if(u.length){const e=new URLSearchParams(window.location.search).get("url");if(e){const t=new n.a;u.html('<div class="spinner-border" role="status"></div>');const r=()=>{u.html(Object(s.$)("<h3>",{class:"my-4",html:['<i class="text-muted fas fa-exclamation-triangle mr-3"></i>',Object(o.a)({pt_br:"Página não encontrada",en_us:"Page not found"})]})),t.list().then((e=>{u.append([Object(s.$)("<p>",{class:"lead",html:Object(o.a)({pt_br:"Mapa do site:",en_us:"Sitemap:"})}),Object(s.$)("<ul>",{html:e.map((({path:e})=>`<li><a href="${e}">${e}</a></li>`))})])})).catch(console.error)};t.map(e).then((e=>{const{resource:r,_id:o}=e;switch(r){case"products":return new a.a({render:e=>e(c.a,{props:{productId:o}})});case"brands":case"categories":return t.resolve(e).then((({body:e})=>new a.a({render:t=>t(i.a,{props:{[r]:[e.name]}})})))}})).then((e=>{e?e.$mount(u[0]):r()})).catch((e=>{console.error(e),r()}))}}}},0,[30,31]]);
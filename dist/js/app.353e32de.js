(function(e){function n(n){for(var t,r,o=n[0],h=n[1],i=n[2],l=0,f=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(u,r)&&u[r]&&f.push(u[r][0]),u[r]=0;for(t in h)Object.prototype.hasOwnProperty.call(h,t)&&(e[t]=h[t]);d&&d(n);while(f.length)f.shift()();return a.push.apply(a,i||[]),c()}function c(){for(var e,n=0;n<a.length;n++){for(var c=a[n],t=!0,r=1;r<c.length;r++){var o=c[r];0!==u[o]&&(t=!1)}t&&(a.splice(n--,1),e=h(h.s=c[0]))}return e}var t={},r={app:0},u={app:0},a=[];function o(e){return h.p+"js/"+({}[e]||e)+"."+{"chunk-3a6cb610":"433dcec4","chunk-548a2523":"3260b04c","chunk-57390ff9":"00effbb3","chunk-63c1eac8":"6273d5aa","chunk-194f0bad":"5b1d4f11","chunk-2c057d17":"4765c964","chunk-4b04e70c":"6defe192","chunk-2d0b2004":"6de6d209","chunk-2d22ba2a":"e221c068","chunk-542f67e6":"17df6b98","chunk-5943e478":"657cc6f0","chunk-7f2396d9":"868db9c3","chunk-ac0217ec":"6217f8c0","chunk-bbecc746":"7d0cfba7","chunk-c81cef74":"4774edc7","chunk-e74d142c":"90a6547a"}[e]+".js"}function h(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,h),c.l=!0,c.exports}h.e=function(e){var n=[],c={"chunk-3a6cb610":1,"chunk-548a2523":1,"chunk-57390ff9":1,"chunk-194f0bad":1,"chunk-2c057d17":1,"chunk-4b04e70c":1,"chunk-542f67e6":1,"chunk-5943e478":1,"chunk-7f2396d9":1,"chunk-ac0217ec":1,"chunk-bbecc746":1,"chunk-c81cef74":1,"chunk-e74d142c":1};r[e]?n.push(r[e]):0!==r[e]&&c[e]&&n.push(r[e]=new Promise((function(n,c){for(var t="css/"+({}[e]||e)+"."+{"chunk-3a6cb610":"c6949b43","chunk-548a2523":"90213dea","chunk-57390ff9":"f3a2d0ce","chunk-63c1eac8":"31d6cfe0","chunk-194f0bad":"5fcc8b49","chunk-2c057d17":"8f061655","chunk-4b04e70c":"997e6d26","chunk-2d0b2004":"31d6cfe0","chunk-2d22ba2a":"31d6cfe0","chunk-542f67e6":"19cb12dc","chunk-5943e478":"c406d7c2","chunk-7f2396d9":"3aea285f","chunk-ac0217ec":"5338215e","chunk-bbecc746":"24d2fe81","chunk-c81cef74":"19cb12dc","chunk-e74d142c":"5ff3c77a"}[e]+".css",u=h.p+t,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var i=a[o],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===t||l===u))return n()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){i=f[o],l=i.getAttribute("data-href");if(l===t||l===u)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var t=n&&n.target&&n.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=t,delete r[e],d.parentNode.removeChild(d),c(a)},d.href=u;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[e]=0})));var t=u[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise((function(n,c){t=u[e]=[n,c]}));n.push(t[2]=a);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,h.nc&&l.setAttribute("nonce",h.nc),l.src=o(e);var f=new Error;i=function(n){l.onerror=l.onload=null,clearTimeout(d);var c=u[e];if(0!==c){if(c){var t=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+t+": "+r+")",f.name="ChunkLoadError",f.type=t,f.request=r,c[1](f)}u[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(n)},h.m=e,h.c=t,h.d=function(e,n,c){h.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:c})},h.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},h.t=function(e,n){if(1&n&&(e=h(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(h.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)h.d(c,t,function(n){return e[n]}.bind(null,t));return c},h.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return h.d(n,"a",n),n},h.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},h.p="",h.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var f=0;f<i.length;f++)n(i[f]);var d=l;a.push([0,"chunk-vendors"]),c()})({0:function(e,n,c){e.exports=c("56d7")},"034f":function(e,n,c){"use strict";c("85ec")},"56d7":function(e,n,c){"use strict";c.r(n);c("e260"),c("e6cf"),c("cca6"),c("a79d");var t=c("2b0e"),r=function(){var e=this,n=e.$createElement,c=e._self._c||n;return c("div",{attrs:{id:"app"}},[c("router-view")],1)},u=[],a={name:"App"},o=a,h=(c("034f"),c("2877")),i=Object(h["a"])(o,r,u,!1,null,null,null),l=i.exports,f=(c("d3b7"),c("8c4f"));t["a"].use(f["a"]);var d=function(){return c.e("chunk-3a6cb610").then(c.bind(null,"a094"))},p=function(){return Promise.all([c.e("chunk-63c1eac8"),c.e("chunk-ac0217ec")]).then(c.bind(null,"f9f3"))},s=function(){return Promise.all([c.e("chunk-63c1eac8"),c.e("chunk-2c057d17")]).then(c.bind(null,"7a6d"))},b=function(){return c.e("chunk-e74d142c").then(c.bind(null,"d473"))},k=function(){return c.e("chunk-548a2523").then(c.bind(null,"09e8"))},m=function(){return c.e("chunk-57390ff9").then(c.bind(null,"c518"))},g=function(){return Promise.all([c.e("chunk-63c1eac8"),c.e("chunk-542f67e6")]).then(c.bind(null,"0797"))},v=function(){return Promise.all([c.e("chunk-63c1eac8"),c.e("chunk-5943e478")]).then(c.bind(null,"26f7"))},y=function(){return Promise.all([c.e("chunk-63c1eac8"),c.e("chunk-194f0bad")]).then(c.bind(null,"d9ab"))},P=function(){return Promise.all([c.e("chunk-63c1eac8"),c.e("chunk-4b04e70c"),c.e("chunk-2d22ba2a")]).then(c.bind(null,"f08b"))},w=function(){return Promise.all([c.e("chunk-63c1eac8"),c.e("chunk-c81cef74")]).then(c.bind(null,"5a32"))},j=function(){return Promise.all([c.e("chunk-63c1eac8"),c.e("chunk-bbecc746")]).then(c.bind(null,"10ab"))},O=function(){return Promise.all([c.e("chunk-63c1eac8"),c.e("chunk-7f2396d9")]).then(c.bind(null,"808a"))},E=function(){return Promise.all([c.e("chunk-63c1eac8"),c.e("chunk-4b04e70c"),c.e("chunk-2d0b2004")]).then(c.bind(null,"21f5"))},_=[{path:"/",redirect:"/first"},{path:"/first",component:d,meta:{title:"教务管理系统"}},{path:"/login",name:"login",component:p,meta:{title:"统一身份登录"},children:[{path:"",redirect:"/login/tabbar"},{path:"tabbar",component:s},{path:"tabbar2",component:b}]},{path:"/loginfirst",meta:{title:"教务系统"},component:k,children:[{path:"",redirect:"/loginfirst/img"},{path:"img",component:m},{path:"kcb",component:g},{path:"kcgl",component:y},{path:"cjgl",component:v},{path:"yhgl",component:P},{path:"skcb",component:w},{path:"skccx",component:j},{path:"scjcx",component:O},{path:"syhgl",component:E}]}],x=new f["a"]({routes:_});x.beforeEach((function(e,n,c){document.title=e.matched[0].meta.title,c()}));var S=f["a"].prototype.push;f["a"].prototype.push=function(e,n,c){return n||c?S.call(this,e,n,c):S.call(this,e).catch((function(e){return e}))};var T=x;t["a"].config.productionTip=!1,t["a"].prototype.$bus=new t["a"],new t["a"]({render:function(e){return e(l)},router:T}).$mount("#app")},"85ec":function(e,n,c){}});
//# sourceMappingURL=app.353e32de.js.map
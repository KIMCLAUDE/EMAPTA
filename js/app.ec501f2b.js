(function(e){function t(t){for(var a,r,u=t[0],l=t[1],s=t[2],c=0,d=[];c<u.length;c++)r=u[c],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(a=!1)}a&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function u(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"28957f4d"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"7e4498ac"}[e]+".css",o=l.p+a,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],c=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===a||c===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],c=s.getAttribute("data-href");if(c===a||c===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=o;var v=document.getElementsByTagName("head")[0];v.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=u(e);var d=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0884":function(e,t,n){"use strict";n("e368")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("VALUES")]),e._v(" | "),n("router-link",{attrs:{to:"/Principle"}},[e._v("PRINCIPLES")])],1),n("router-view")],1)},o=[],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Main-Header"},[n("div",{staticClass:"Title-Header"},[e._v("EMAPTA EXAMINATION")])])}],l={name:"Header"},s=l,c=(n("cb5d"),n("2877")),d=Object(c["a"])(s,i,u,!1,null,"5618cc04",null),f=d.exports,v={name:"App",components:{Header:f}},p=v,m=(n("034f"),Object(c["a"])(p,r,o,!1,null,null,null)),h=m.exports,b=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("AddValue",{attrs:{values:e.values},on:{"add-value":e.addValue}}),n("div",{staticClass:"Main-display"},[n("div",{staticClass:"Values-display"},[n("Values",{attrs:{values:e.values},on:{"mark-modify":e.markModify,"del-value":e.delValue}})],1)])],1)},y=[],_=n("2909"),V=(n("c740"),n("4de4"),n("99af"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Main-Add"},[n("form",{on:{submit:function(t){return e.addValue(e.titleString)}}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.titleString,expression:"titleString"}],attrs:{name:"Value",id:"Value"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.titleString=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"None",selected:""}},[e._v("...")]),n("option",{attrs:{value:"Individuals and interactions over processes and tools"}},[e._v("Individuals and interactions over processes and tools")]),n("option",{attrs:{value:"Working product over comprehensive documentation"}},[e._v("Working product over comprehensive documentation")]),n("option",{attrs:{value:"Customer collaboration over contract negotiation"}},[e._v("Customer collaboration over contract negotiation")]),n("option",{attrs:{value:"Responding to change over following a plan"}},[e._v("Responding to change over following a plan")])]),n("input",{staticClass:"btn_add",attrs:{type:"submit",value:"Submit"}})])])}),E=[],C={name:"AddValue",components:{},data:function(){return{failed:!1}},props:["values"],methods:{addValue:function(e){console.log(e);for(var t=0;t<this.values.length;t++)e==this.values[t].title&&(alert("Value already existing!"),this.failed=!0);if(0==this.failed)if("None"==e||null==e)alert("Please Enter Valid Values!");else{var n={title:e,is_modify:0};this.$emit("add-value",n)}}}},w=C,A=(n("a739"),Object(c["a"])(w,V,E,!1,null,"57c4ce37",null)),j=A.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Main-Values"},[n("div",{staticClass:"Title-Values"},[e._v("VALUES of Agile Software Development")]),e._l(e.values,(function(t){return n("div",{key:t.id,staticClass:"Content-Values"},[n("ValuesItem",{attrs:{value:t},on:{"mark-modify":function(n){return e.$emit("mark-modify",t.id)},"del-value":function(n){return e.$emit("del-value",t.id)}}})],1)}))],2)},P=[],O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Value-Item",class:{"is-modify":e.value.is_modify}},[n("p",{staticClass:"Value-Title"},[e._v(" "+e._s(e.value.title)+" ")]),n("div",{staticClass:"value-buttons"},[n("button",{staticClass:"Value-markModify",on:{click:function(t){return e.$emit("mark-modify",e.value.id)},"":function(e){}}},[e._v("UPDATE")]),n("button",{staticClass:"del-btn",on:{click:function(t){return e.$emit("del-value",e.value.id)}}},[e._v("DELETE")])])])},S=[],x={name:"ValuesItem",props:["value"],methods:{}},T=x,M=(n("0884"),Object(c["a"])(T,O,S,!1,null,"2591ef57",null)),$=M.exports,I={name:"Value",components:{ValuesItem:$},props:["values"]},N=I,L=(n("b541"),Object(c["a"])(N,k,P,!1,null,"2bf9b9cc",null)),H=L.exports,D=n("bc3a"),U=n.n(D),B={name:"App",components:{AddValue:j,Values:H},data:function(){return{values:[]}},methods:{markModify:function(e){var t=this,n=this.values.findIndex((function(t){return t.id==e}));console.log(n),console.log(e),U.a.put("http://localhost:5000/api/values/".concat(e)).then((function(n){return t.values[e]=n.data})).catch((function(e){return Promise.reject(e)})),alert("Updated Successfully"),document.location.reload()},delValue:function(e){var t=this,n=window.confirm("Are you sure to delete this data?");n&&U.a.delete("http://localhost:5000/api/values/".concat(e)).then((function(n){return t.values=t.values.filter((function(t){return t.id!==e})),n})).catch((function(e){return Promise.reject(e)}))},addValue:function(e){var t=this,n=e.title,a=e.is_modify;U.a.post("http://localhost:5000/api/values",{title:n,is_modify:a}).then((function(e){return t.values=[].concat(Object(_["a"])(t.values),[e.data])})).catch((function(e){return Promise.reject(e)})),alert("Added Successfully"),document.location.reload()}},created:function(){var e=this;U.a.get("http://localhost:5000/api/values",{mode:"cores"}).then((function(t){return e.values=t.data})).catch((function(e){return Promise.reject(e)}))}},R=B,q=(n("cccb"),Object(c["a"])(R,g,y,!1,null,null,null)),J=q.exports;a["a"].use(b["a"]);var W=[{path:"/",name:"Home",component:J},{path:"/principle",name:"Principle",component:function(){return n.e("about").then(n.bind(null,"3e82"))}}],F=new b["a"]({routes:W}),K=F;a["a"].config.productionTip=!1,new a["a"]({router:K,render:function(e){return e(h)}}).$mount("#app")},5714:function(e,t,n){},"5ced":function(e,t,n){},"72fb":function(e,t,n){},"85ec":function(e,t,n){},a739:function(e,t,n){"use strict";n("c933")},b541:function(e,t,n){"use strict";n("5714")},c933:function(e,t,n){},cb5d:function(e,t,n){"use strict";n("72fb")},cccb:function(e,t,n){"use strict";n("5ced")},e368:function(e,t,n){}});
//# sourceMappingURL=app.ec501f2b.js.map
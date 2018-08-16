(function(e){function t(t){for(var n,o,u=t[0],i=t[1],c=t[2],p=0,f=[];p<u.length;p++)o=u[p],a[o]&&f.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,u=1;u<r.length;u++){var i=r[u];0!==a[i]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue-github-search-demo/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=i;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0895":function(e,t,r){},4276:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Search"),r("User")],1)},s=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{placeholder:"Enter username"},domProps:{value:e.query},on:{input:[function(t){t.target.composing||(e.query=t.target.value)},e.debouncedSearch]}})},u=[],i=(r("386d"),r("c93e")),c=r("2f62"),l=r("b047"),p=r.n(l),f={name:"search",computed:Object(i["a"])({},Object(c["c"])(["searchQuery"]),{query:{get(){return this.searchQuery},set(e){return this.setSearchQuery(e)}}}),methods:Object(i["a"])({},Object(c["b"])(["setSearchQuery","search"]),{debouncedSearch:p()(function(){this.search()},500)})},d=f,h=(r("a73b"),r("2877")),v=Object(h["a"])(d,o,u,!1,null,"e1d39324",null);v.options.__file="Search.vue";var b=v.exports,g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"github-card"},[r("transition",{attrs:{name:"fade",mode:"out-in"}},[e.loading?r("div",{key:"loading"},[e._v("\n      Loading\n    ")]):e.user?r("div",{key:"user"},[r("div",{staticClass:"background",style:{backgroundImage:"url("+e.user.avatar_url+")"}}),r("div",{staticClass:"content"},[r("a",{staticClass:"avatar",attrs:{href:"https://github.com/"+e.user.login,target:"_blank"}},[r("img",{attrs:{src:e.user.avatar_url,alt:e.user.login}})]),r("h1",[e._v(e._s(e.user.name||e.user.login))]),r("ul",{staticClass:"status"},[r("li",[r("a",{attrs:{href:"https://github.com/"+e.user.login+"?tab=repositories",target:"_blank"}},[r("strong",[e._v(e._s(e.user.public_repos))]),r("span",[e._v("Repos")])])]),r("li",[r("a",{attrs:{href:"https://gist.github.com/"+e.user.login,target:"_blank"}},[r("strong",[e._v(e._s(e.user.public_gists))]),r("span",[e._v("Gists")])])]),r("li",[r("a",{attrs:{href:"https://github.com/"+e.user.login+"/followers",target:"_blank"}},[r("strong",[e._v(e._s(e.user.followers))]),r("span",[e._v("Followers")])])])])])]):r("div",{key:"not-found"},[e._v("\n      User not found\n    ")])])],1)},_=[],m={name:"User",computed:Object(c["c"])(["loading","user"])},y=m,S=(r("7d80"),Object(h["a"])(y,g,_,!1,null,"ef33484e",null));S.options.__file="User.vue";var O=S.exports,j={name:"app",components:{User:O,Search:b}},w=j,E=(r("7faf"),Object(h["a"])(w,a,s,!1,null,null,null));E.options.__file="App.vue";var k=E.exports,x=r("bc3a"),Q=r.n(x);n["a"].use(c["a"]);const U="SET_SEARCH_QUERY",P="SET_LOADING",T="SET_USER",C="RESET_USER";var R=new c["a"].Store({state:{searchQuery:"",loading:!1,user:null},mutations:{[U]:(e,t)=>e.searchQuery=t,[P]:(e,t)=>e.loading=t,[T]:(e,t)=>e.user=t,[C]:e=>e.user=null},actions:{setSearchQuery({commit:e},t){e(U,t)},async search({commit:e,state:t}){e(P,!0);try{const r=await Q.a.get(`https://api.github.com/users/${t.searchQuery}`),n=r.data;e(T,n)}catch(t){e(C)}e(P,!1)}}});n["a"].config.productionTip=!1,new n["a"]({store:R,render:e=>e(k)}).$mount("#app")},"7d80":function(e,t,r){"use strict";var n=r("0895"),a=r.n(n);a.a},"7faf":function(e,t,r){"use strict";var n=r("eda2"),a=r.n(n);a.a},a73b:function(e,t,r){"use strict";var n=r("4276"),a=r.n(n);a.a},eda2:function(e,t,r){}});
//# sourceMappingURL=app.c6740bf0.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[511],{921:function(n,e,t){function r(n,e,t,r,c,o,i){try{var a=n[o](i),u=a.value}catch(s){return void t(s)}a.done?e(u):Promise.resolve(u).then(r,c)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(c,o){var i=n.apply(e,t);function a(n){r(i,c,o,a,u,"next",n)}function u(n){r(i,c,o,a,u,"throw",n)}a(void 0)}))}}t.d(e,{sb:function(){return m},xz:function(){return v},QK:function(){return d},Tn:function(){return h},Qd:function(){return l}});var o=t(757),i=t.n(o),a="bee84003116e0d7efbcdf8ada59f5536",u="https://api.themoviedb.org";function s(){return f.apply(this,arguments)}function f(){return f=c(i().mark((function n(){var e,t,r,c=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:"",t=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(e,t);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),f.apply(this,arguments)}function l(){return s("".concat(u,"/3/trending/movie/day?api_key=").concat(a,"&language=en-US"))}function v(n){return s("".concat(u,"/3/movie/").concat(n,"?api_key=").concat(a,"&language=en-US"))}function d(n){return s("".concat(u,"/3/search/movie?api_key=").concat(a,"&query=").concat(n,"&language=en-US"))}function m(n){return s("".concat(u,"/3/movie/").concat(n,"/credits?api_key=").concat(a,"&language=en-US"))}function h(n){return s("".concat(u,"/3/movie/").concat(n,"/reviews?api_key=").concat(a,"&language=en-US"))}},511:function(n,e,t){t.r(e),t.d(e,{default:function(){return u}});var r=t(439),c=t(791),o=t(921),i=t(536),a=t(184);var u=function(){var n=(0,c.useState)(null),e=(0,r.Z)(n,2),t=e[0],u=e[1];return(0,c.useEffect)((function(){(0,o.Qd)().then(u)}),[]),(0,a.jsx)(a.Fragment,{children:t&&(0,a.jsx)(i.Z,{movies:t})})}},536:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(87),c={section:"ListMovies_section__b2f-7",item:"ListMovies_item__TNDE5"},o=t(184);var i=function(n){var e=n.movies;return(0,o.jsx)("section",{className:c.section,children:(0,o.jsx)("ul",{className:c.list,children:e.results.map((function(n){return(0,o.jsx)("li",{className:c.item,children:(0,o.jsx)(r.rU,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})})}}}]);
//# sourceMappingURL=511.7b7ce12c.chunk.js.map
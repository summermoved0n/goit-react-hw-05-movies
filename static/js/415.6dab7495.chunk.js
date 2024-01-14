"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{943:function(e,t,n){function r(e,t,n,r,o,c,a){try{var u=e[c](a),s=u.value}catch(i){return void n(i)}u.done?t(s):Promise.resolve(s).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,c){var a=e.apply(t,n);function u(e){r(a,o,c,u,s,"next",e)}function s(e){r(a,o,c,u,s,"throw",e)}u(void 0)}))}}n.d(t,{Z:function(){return h}});var c=n(671),a=n(144),u=n(757),s=n.n(u),i="bca00b9ffd93ea25185e7e4e149d031e",f="https://api.themoviedb.org/3/",l={method:"GET",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2EwMGI5ZmZkOTNlYTI1MTg1ZTdlNGUxNDlkMDMxZSIsInN1YiI6IjY1OWQ3MDE4MjMxNjhjMDE0OTE4YmJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8gl9eklQfO5psef9tvqzllBAi4Zu-LhVXx8kFEuwEok"},h=function(){function e(){(0,c.Z)(this,e)}return(0,a.Z)(e,[{key:"getFetchPopularMovie",value:function(){var e=o(s().mark((function e(){var t,n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(f).concat("trending/all/day","?api_key=").concat(i),e.next=3,fetch(t,l);case 3:if((n=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject(new Error("Oops, something went wrong! \ud83d\ude25")));case 6:return e.next=8,n.json();case 8:return r=e.sent,console.log(r),e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getMovieByQuery",value:function(){var e=o(s().mark((function e(t){var n,r,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(f,"search/movie?api_key=").concat(i,"&query=").concat(t),e.next=3,fetch(n,l);case 3:if((r=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject(new Error("Oops, something went wrong! \ud83d\ude25")));case 6:return e.next=8,r.json();case 8:return o=e.sent,console.log(o),e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieById",value:function(){var e=o(s().mark((function e(t){var n,r,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(f,"movie/").concat(t,"?api_key=").concat(i),e.next=3,fetch(n,l);case 3:if((r=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject(new Error("Oops, something went wrong! \ud83d\ude25")));case 6:return e.next=8,r.json();case 8:return o=e.sent,console.log(o),e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getActorsById",value:function(){var e=o(s().mark((function e(t){var n,r,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(f,"movie/").concat(t,"/credits?api_key=").concat(i),e.next=3,fetch(n,l);case 3:if((r=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject(new Error("Oops, something went wrong! \ud83d\ude25")));case 6:return e.next=8,r.json();case 8:return o=e.sent,console.log(o),e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getReviewById",value:function(){var e=o(s().mark((function e(t){var n,r,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(f,"movie/").concat(t,"/reviews?api_key=").concat(i),e.next=3,fetch(n,l);case 3:if((r=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject(new Error("Oops, something went wrong! \ud83d\ude25")));case 6:return e.next=8,r.json();case 8:return o=e.sent,console.log(o),e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()},415:function(e,t,n){n.r(t);var r,o=n(433),c=n(439),a=n(168),u=n(791),s=n(943),i=n(87),f=n(689),l=n(971),h=n(924),p=n(184),v=(0,h.ZP)(i.rU)(r||(r=(0,a.Z)(["\n  text-decoration: none;\n  color: #fff;\n"]))),m=new s.Z;t.default=function(){var e=(0,u.useState)([]),t=(0,c.Z)(e,2),n=t[0],r=t[1],a=(0,u.useState)(""),s=(0,c.Z)(a,2),i=s[0],h=s[1],d=(0,u.useState)("idle"),k=(0,c.Z)(d,2),w=k[0],x=k[1],g=(0,f.TH)();return(0,u.useEffect)((function(){m.getFetchPopularMovie().then((function(e){var t=e.results;r((0,o.Z)(t)),x("resolved")})).catch((function(e){h(e.message),x("rejected")}))}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h3",{className:l.Z.home_title,children:"Trending today:"}),n.length>0&&(0,p.jsx)("ul",{className:l.Z.home_list,children:n.map((function(e){var t=e.id,n=e.title,r=e.name;return(0,p.jsx)("li",{className:l.Z.home_item,children:(0,p.jsx)(v,{to:"movies/".concat(t),state:{from:g},children:null!==n&&void 0!==n?n:r})},t)}))}),"resolved"===w&&0===n.length&&(0,p.jsx)("h4",{children:"List of trends not found\ud83d\udc37"}),"rejected"===w&&(0,p.jsx)("p",{children:i})]})}}}]);
//# sourceMappingURL=415.6dab7495.chunk.js.map
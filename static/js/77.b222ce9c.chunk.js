"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[77],{943:function(e,t,n){function r(e,t,n,r,o,c,a){try{var u=e[c](a),s=u.value}catch(i){return void n(i)}u.done?t(s):Promise.resolve(s).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,c){var a=e.apply(t,n);function u(e){r(a,o,c,u,s,"next",e)}function s(e){r(a,o,c,u,s,"throw",e)}u(void 0)}))}}n.d(t,{Z:function(){return p}});var c=n(671),a=n(144),u=n(757),s=n.n(u),i="bca00b9ffd93ea25185e7e4e149d031e",l="https://api.themoviedb.org/3/",f={method:"GET",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2EwMGI5ZmZkOTNlYTI1MTg1ZTdlNGUxNDlkMDMxZSIsInN1YiI6IjY1OWQ3MDE4MjMxNjhjMDE0OTE4YmJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8gl9eklQfO5psef9tvqzllBAi4Zu-LhVXx8kFEuwEok"},p=function(){function e(){(0,c.Z)(this,e)}return(0,a.Z)(e,[{key:"getFetchPopularMovie",value:function(){var e=o(s().mark((function e(){var t,n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(l).concat("trending/all/day","?api_key=").concat(i),e.next=3,fetch(t,f);case 3:if((n=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject(new Error("Oops, something went wrong! \ud83d\ude25")));case 6:return e.next=8,n.json();case 8:return r=e.sent,console.log(r),e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getMovieByQuery",value:function(){var e=o(s().mark((function e(t){var n,r,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(l,"search/movie?api_key=").concat(i,"&query=").concat(t),e.next=3,fetch(n,f);case 3:if((r=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject(new Error("Oops, something went wrong! \ud83d\ude25")));case 6:return e.next=8,r.json();case 8:return o=e.sent,console.log(o),e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieById",value:function(){var e=o(s().mark((function e(t){var n,r,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(l,"movie/").concat(t,"?api_key=").concat(i),e.next=3,fetch(n,f);case 3:if((r=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject(new Error("Oops, something went wrong! \ud83d\ude25")));case 6:return e.next=8,r.json();case 8:return o=e.sent,console.log(o),e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getActorsById",value:function(){var e=o(s().mark((function e(t){var n,r,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(l,"movie/").concat(t,"/credits?api_key=").concat(i),e.next=3,fetch(n,f);case 3:if((r=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject(new Error("Oops, something went wrong! \ud83d\ude25")));case 6:return e.next=8,r.json();case 8:return o=e.sent,console.log(o),e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getReviewById",value:function(){var e=o(s().mark((function e(t){var n,r,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(l,"movie/").concat(t,"/reviews?api_key=").concat(i),e.next=3,fetch(n,f);case 3:if((r=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject(new Error("Oops, something went wrong! \ud83d\ude25")));case 6:return e.next=8,r.json();case 8:return o=e.sent,console.log(o),e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()},77:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r,o=n(433),c=n(439),a=n(791),u="Searchbar_form__D-hp5",s="Searchbar_input__19umw",i="Searchbar_button__nkcjk",l=n(184),f=function(e){var t=e.onSubmit,n=(0,a.useState)(""),r=(0,c.Z)(n,2),o=r[0],f=r[1];return(0,l.jsxs)("form",{className:u,onSubmit:function(e){e.preventDefault(),t(o),f("")},children:[(0,l.jsx)("input",{className:s,onChange:function(e){var t=e.target.value;f(t)},type:"text",value:o,autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,l.jsx)("button",{className:i,type:"submit",children:"Search"})]})},p=n(943),h=n(168),v=n(87),m=n(689),d=n(924),x="MoviesGallery_gallery_list__SESSQ",y="MoviesGallery_gallery_item__YCtQm",k=(0,d.ZP)(v.rU)(r||(r=(0,h.Z)(["\n  text-decoration: none;\n  color: #fff;\n"]))),w=function(e){var t=e.movies,n=(0,m.TH)();return(0,l.jsx)("ul",{className:x,children:t.map((function(e){var t=e.id,r=e.title;return(0,l.jsx)("li",{className:y,children:(0,l.jsx)(k,{to:"".concat(t),state:{from:n},children:r})},t)}))})},g=n(971),j=n(973),b=new p.Z,_=function(){var e=(0,a.useState)("idle"),t=(0,c.Z)(e,2),n=t[0],r=t[1],u=(0,a.useState)(""),s=(0,c.Z)(u,2),i=s[0],p=s[1],h=(0,a.useState)([]),m=(0,c.Z)(h,2),d=m[0],x=m[1],y=(0,v.lr)(),k=(0,c.Z)(y,2),_=k[0],Z=k[1],S=_.get("query");(0,a.useEffect)((function(){null!==S&&(r("pending"),b.getMovieByQuery(S).then((function(e){var t=e.results;x((0,o.Z)(t)),r("resolved")})).catch((function(e){p(e.message),r("rejected")})))}),[S]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f,{onSubmit:function(e){Z(e?{query:e}:{})}}),"pending"===n&&(0,l.jsx)("div",{className:g.Z.Loader,children:(0,l.jsx)(j.Z,{})}),d.length>0&&(0,l.jsx)(w,{movies:d}),"resolved"===n&&0===d.length&&(0,l.jsxs)("p",{children:["Sorry ",(0,l.jsxs)("b",{children:['"',S,'"']})," not found"]}),"rejected"===n&&(0,l.jsx)("p",{children:i})]})}}}]);
//# sourceMappingURL=77.b222ce9c.chunk.js.map
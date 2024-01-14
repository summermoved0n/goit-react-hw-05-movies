"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[449],{449:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(433),c=r(439),a=r(791),o=r(689),s=r(943),u="CastItem_cast_list__HU5-A",i="CastItem_cast_item__FzKoK",l="CastItem_cast_title__4Sfv9",f="CastItem_cast_subtitle__JIaqD",p=r(184),h=function(e){var t=e.actors;return(0,p.jsx)("ul",{className:u,children:t.map((function(e){var t=e.character,r=e.id,n=e.name,c=e.profile_path;return(0,p.jsxs)("li",{className:i,children:[(0,p.jsx)("img",{src:c?"https://image.tmdb.org/t/p/w500/".concat(c):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:"actor",width:200}),(0,p.jsx)("h3",{className:l,children:n}),(0,p.jsxs)("p",{className:f,children:[(0,p.jsx)("span",{children:"Character: "}),t]})]},r)}))})},m=new s.Z,v=function(){var e=(0,a.useState)([]),t=(0,c.Z)(e,2),r=t[0],s=t[1],u=(0,a.useState)("idle"),i=(0,c.Z)(u,2),l=i[0],f=i[1],v=(0,a.useState)(""),d=(0,c.Z)(v,2),w=d[0],x=d[1],k=(0,o.UO)().movieId;return(0,a.useEffect)((function(){m.getActorsById(k).then((function(e){var t=e.cast;s((0,n.Z)(t)),f("resolved")})).catch((function(e){x(e.message),f("rejected")}))}),[k]),console.log(r),(0,p.jsxs)(p.Fragment,{children:[r.length>0&&(0,p.jsx)(h,{actors:r}),"resolved"===l&&0===r.length&&(0,p.jsx)("h3",{children:"List of actors not found\ud83d\udc12"}),"rejected"===l&&(0,p.jsx)("h3",{children:w})]})}},943:function(e,t,r){function n(e,t,r,n,c,a,o){try{var s=e[a](o),u=s.value}catch(i){return void r(i)}s.done?t(u):Promise.resolve(u).then(n,c)}function c(e){return function(){var t=this,r=arguments;return new Promise((function(c,a){var o=e.apply(t,r);function s(e){n(o,c,a,s,u,"next",e)}function u(e){n(o,c,a,s,u,"throw",e)}s(void 0)}))}}r.d(t,{Z:function(){return p}});var a=r(671),o=r(144),s=r(757),u=r.n(s),i="bca00b9ffd93ea25185e7e4e149d031e",l="https://api.themoviedb.org/3/",f={method:"GET",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2EwMGI5ZmZkOTNlYTI1MTg1ZTdlNGUxNDlkMDMxZSIsInN1YiI6IjY1OWQ3MDE4MjMxNjhjMDE0OTE4YmJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8gl9eklQfO5psef9tvqzllBAi4Zu-LhVXx8kFEuwEok"},p=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,[{key:"getFetchPopularMovie",value:function(){var e=c(u().mark((function e(){var t,r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(l).concat("trending/all/day","?api_key=").concat(i),e.next=3,fetch(t,f);case 3:if((r=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject(new Error("Oops, something went wrong! \ud83d\ude25")));case 6:return e.next=8,r.json();case 8:return n=e.sent,console.log(n),e.abrupt("return",n);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getMovieByQuery",value:function(){var e=c(u().mark((function e(t){var r,n,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(l,"search/movie?api_key=").concat(i,"&query=").concat(t),e.next=3,fetch(r,f);case 3:if((n=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject(new Error("Oops, something went wrong! \ud83d\ude25")));case 6:return e.next=8,n.json();case 8:return c=e.sent,console.log(c),e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieById",value:function(){var e=c(u().mark((function e(t){var r,n,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(l,"movie/").concat(t,"?api_key=").concat(i),e.next=3,fetch(r,f);case 3:if((n=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject(new Error("Oops, something went wrong! \ud83d\ude25")));case 6:return e.next=8,n.json();case 8:return c=e.sent,console.log(c),e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getActorsById",value:function(){var e=c(u().mark((function e(t){var r,n,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(l,"movie/").concat(t,"/credits?api_key=").concat(i),e.next=3,fetch(r,f);case 3:if((n=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject(new Error("Oops, something went wrong! \ud83d\ude25")));case 6:return e.next=8,n.json();case 8:return c=e.sent,console.log(c),e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getReviewById",value:function(){var e=c(u().mark((function e(t){var r,n,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(l,"movie/").concat(t,"/reviews?api_key=").concat(i),e.next=3,fetch(r,f);case 3:if((n=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject(new Error("Oops, something went wrong! \ud83d\ude25")));case 6:return e.next=8,n.json();case 8:return c=e.sent,console.log(c),e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()}}]);
//# sourceMappingURL=449.ca233e26.chunk.js.map
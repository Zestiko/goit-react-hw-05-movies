"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[483],{483:function(e,t,r){r.r(t);var a=r(861),n=r(439),c=r(757),i=r.n(c),s=r(791),o=r(689),u=r(912),l=r(184);t.default=function(){var e=(0,o.UO)().movieId,t=(0,s.useState)([]),r=(0,n.Z)(t,2),c=r[0],h=r[1];return(0,s.useEffect)((function(){var t=function(){var e=(0,a.Z)(i().mark((function e(t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=30c2328b2ce92a2dec1b35516df54c65&language=en-US"));case 3:r=e.sent,a=r.data,console.log(a),h(a.cast),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();t(e)}),[e]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:c.map((function(e){var t=e.id,r=e.original_name,a=e.character,n="https://image.tmdb.org/t/p/w500"+e.profile_path;return(0,l.jsxs)("li",{children:[(0,l.jsx)("img",{src:n,alt:"character",width:"150"}),(0,l.jsx)("h3",{children:r}),(0,l.jsxs)("p",{children:["Character: ",a]})]},t)}))})})})}}}]);
//# sourceMappingURL=483.1759d9f4.chunk.js.map
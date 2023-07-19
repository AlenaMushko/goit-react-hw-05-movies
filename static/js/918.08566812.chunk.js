"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[918],{8830:function(n,e,t){t.d(e,{CF:function(){return h},R8:function(){return u},eG:function(){return x},oO:function(){return l},tN:function(){return d}});var r=t(5861),i=t(7757),o=t.n(i),a=t(1912),c="8d41be39d2696eeff12b89d916a6c984";a.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,r.Z)(o().mark((function n(){var e,t,r=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"",n.prev=1,n.next=4,a.Z.get(e);case 4:return t=n.sent,n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}}(),u=function(){return s("trending/movie/day?api_key=".concat(c))},l=function(n){return s("/search/movie?api_key=".concat(c,"&query=").concat(n))};function d(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",s("movie/".concat(e,"?api_key=").concat(c)));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",s("movie/".concat(e,"/credits?api_key=").concat(c)));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",s("movie/".concat(e,"/reviews?api_key=").concat(c)));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},8866:function(n,e,t){t.d(e,{a:function(){return o}});var r=t(8402),i=t(184);function o(){return(0,i.jsx)("div",{style:{margin:"auto",display:"block"},children:(0,i.jsx)(r.NB,{})})}},8918:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r,i,o,a,c,s,u,l=t(9439),d=t(2791),p=t(7689),h=t(8866),f=t(8830),x=t(8617),v=t(168),m=t(1087),g=t(6444),j=(0,g.ZP)(m.rU)(r||(r=(0,v.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: whitesmoke;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: tomato;\n  }\n"]))),b=t(184),k=function(n){var e=n.to,t=n.children;return(0,b.jsxs)(j,{to:e,children:[(0,b.jsx)(x.jTe,{size:"24"}),t]})},w=g.ZP.div(i||(i=(0,v.Z)(["\npadding: 15px;\n"]))),y=t(2007),Z=t.n(y),_=t(1989),P=t(3277),O=t(9983),C=g.ZP.div(o||(o=(0,v.Z)(["\ndisplay:flex;\ngap:28px;\n margin: 30px  0 0 0;\n"]))),G=g.ZP.img(a||(a=(0,v.Z)(["\n  border-radius: 5px;\n  height:604.5px;\n"]))),L=g.ZP.h2(c||(c=(0,v.Z)(["\n  margin-top: 10px;\n  text-transform: uppercase;\n  color:whitesmoke;\n"]))),R=(g.ZP.p(s||(s=(0,v.Z)(["\n  position: absolute;\n  z-index: 15;\n  top: 2%;\n  right: 4%;\n  display: flex;\n  width: 60px;\n  height: 30px;\n  border-radius: 5px;\n  background-color: rgba(165, 14, 14, 0.6);\n  color: whitesmoke;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n"]))),g.ZP.li(u||(u=(0,v.Z)(["\ncolor:whitesmoke;\ndisplay: block;\nborder-radius:4px;\nborder:2px solid tomato;\ntext-align:center;\nmax-width:170px;\ntransition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n:first-child{\n  margin-bottom:20px;\n}\n:hover {\n  background-color:tomato;\n}\n\n"])))),S=function(n){var e,t,r=n.film,i=(0,p.TH)(),o=r.id,a=r.poster_path,c=r.title,s=r.release_date,u=r.vote_average,l=r.overview,h=r.genres,f=s.split("-")[0],x=h.map((function(n){return n.name})).join(", ");return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(C,{children:[(0,b.jsx)(G,{src:a?"https://image.tmdb.org/t/p/w500/".concat(a):"".concat(O),alt:c}),(0,b.jsxs)("div",{children:[(0,b.jsxs)(L,{children:[c," (",f,")"]}),(0,b.jsxs)("p",{children:["User Score: ",Math.round(10*u),"%"]}),(0,b.jsx)("h3",{children:"Overview"}),(0,b.jsx)("p",{children:l}),(0,b.jsx)("h3",{children:"Genres"}),(0,b.jsx)("p",{children:x})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("hr",{}),(0,b.jsx)("h2",{children:"Additional information"}),(0,b.jsxs)("ul",{children:[(0,b.jsx)(m.OL,{to:(0,_.Gn)(P.a.cast,{id:o}),state:{from:null===(e=i.state)||void 0===e?void 0:e.from},children:(0,b.jsxs)(R,{children:[(0,b.jsx)("h3",{children:"Cast"})," "]})}),(0,b.jsx)(m.OL,{to:(0,_.Gn)(P.a.review,{id:o}),state:{from:null===(t=i.state)||void 0===t?void 0:t.from},children:(0,b.jsx)(R,{children:(0,b.jsx)("h3",{children:"Reviews"})})})]}),(0,b.jsx)("hr",{}),(0,b.jsx)(d.Suspense,{fallback:(0,b.jsx)("div",{children:"Loading page..."}),children:(0,b.jsx)(p.j3,{})})]})]})},U=S;S.prototype={film:Z().arrayOf(Z().shape({id:Z().number,title:Z().string,poster_path:Z().string,vote_average:Z().number,release_date:Z().number,overview:Z().string,genres:Z().number})).isRequired};var z=function(){var n,e,t=(0,d.useState)(!1),r=(0,l.Z)(t,2),i=r[0],o=r[1],a=null!==(n=null===(e=(0,p.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies",c=(0,p.UO)().id,s=(0,d.useState)(null),u=(0,l.Z)(s,2),x=u[0],v=u[1];return(0,d.useEffect)((function(){o(!0),(0,f.tN)(c).then((function(n){v(n)})).catch((function(n){console.log(n)})).finally((function(){o(!1)}))}),[c]),(0,b.jsx)("main",{children:(0,b.jsxs)(w,{children:[i&&(0,b.jsx)(h.a,{}),(0,b.jsx)(k,{to:a,children:"Back to films"}),x&&(0,b.jsx)(U,{film:null===x||void 0===x?void 0:x.data})]})})}},9983:function(n,e,t){n.exports=t.p+"static/media/noPhoto .56ce619dc80345f81abe.png"}}]);
//# sourceMappingURL=918.08566812.chunk.js.map
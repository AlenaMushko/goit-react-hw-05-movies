(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[526],{8830:function(n,t,e){"use strict";e.d(t,{CF:function(){return d},R8:function(){return u},eG:function(){return m},oO:function(){return p},tN:function(){return l}});var r=e(5861),i=e(7757),a=e.n(i),o=e(1912),c="8d41be39d2696eeff12b89d916a6c984";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,r.Z)(a().mark((function n(){var t,e,r=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",n.prev=1,n.next=4,o.Z.get(t);case 4:return e=n.sent,n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}}(),u=function(){return s("trending/movie/day?api_key=".concat(c))},p=function(n){return s("/search/movie?api_key=".concat(c,"&query=").concat(n))};function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",s("movie/".concat(t,"?api_key=").concat(c)));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",s("movie/".concat(t,"/credits?api_key=").concat(c)));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",s("movie/".concat(t,"/reviews?api_key=").concat(c)));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},119:function(n,t,e){"use strict";e.d(t,{Z:function(){return _}});var r,i,a,o,c,s,u=e(2007),p=e.n(u),l=e(1087),f=e(7689),d=e(1989),h=e(3277),m=e(168),g=e(6444),x=g.ZP.div(r||(r=(0,m.Z)(["\n  margin: 30px auto 0 auto;\n"]))),v=g.ZP.ul(i||(i=(0,m.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),y=g.ZP.li(a||(a=(0,m.Z)(["\n  cursor: pointer;\n  position: relative;\n    :hover{\n    scale:1.05;\n  }\n"]))),Z=g.ZP.img(o||(o=(0,m.Z)(["\n  border-radius: 5px;\n  height:604.5px;\n"]))),b=g.ZP.h2(c||(c=(0,m.Z)(["\n  margin-top: 10px;\n  text-transform: uppercase;\n  color:whitesmoke;\n"]))),w=g.ZP.p(s||(s=(0,m.Z)(["\n  position: absolute;\n  z-index: 15;\n  top: 2%;\n  right: 4%;\n  display: flex;\n  width: 60px;\n  height: 30px;\n  border-radius: 5px;\n  background-color: rgba(165, 14, 14, 0.6);\n  color: whitesmoke;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n"]))),k=e(9983),P=e(184),j=function(n){var t=n.films,e=(0,f.TH)();return(0,P.jsx)(x,{children:(0,P.jsx)(v,{children:null===t||void 0===t?void 0:t.map((function(n){var t=n.id,r=n.poster_path,i=n.title,a=n.vote_average;return(0,P.jsx)(y,{children:(0,P.jsxs)(l.rU,{to:(0,d.Gn)(h.a.filmInfo,{id:t}),state:{from:e},children:[(0,P.jsx)(Z,{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):"".concat(k),alt:i}),(0,P.jsx)(b,{children:i}),(0,P.jsx)(w,{children:a})]})},t)}))})})},_=j;j.prototype={films:p().arrayOf(p().shape({id:p().number,title:p().string,poster_path:p().string,vote_average:p().number})).isRequired}},8866:function(n,t,e){"use strict";e.d(t,{a:function(){return a}});var r=e(8402),i=e(184);function a(){return(0,i.jsx)("div",{style:{margin:"auto",display:"block"},children:(0,i.jsx)(r.NB,{})})}},4526:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return k}});var r,i,a,o,c,s,u,p=e(5861),l=e(9439),f=e(7757),d=e.n(f),h=e(2791),m=e(8830),g=e(8866),x=e(168),v=e(6444),y=v.ZP.div(r||(r=(0,x.Z)(["\n  margin: 0 auto;\n"]))),Z=v.ZP.h1(i||(i=(0,x.Z)(["\n  text-align: center;\n  font-size: 42px;\n"]))),b=(v.ZP.ul(a||(a=(0,x.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),v.ZP.li(o||(o=(0,x.Z)(["\n  cursor: pointer;\n  position: relative;\n    :hover{\n    scale:1.05;\n  }\n"]))),v.ZP.img(c||(c=(0,x.Z)(["\n  border-radius: 5px;\n"]))),v.ZP.h2(s||(s=(0,x.Z)(["\n  margin-top: 10px;\n  text-transform: uppercase;\n"]))),v.ZP.p(u||(u=(0,x.Z)(["\n  position: absolute;\n  z-index: 15;\n  top: 2%;\n  right: 4%;\n  display: flex;\n  width: 60px;\n  height: 30px;\n  border-radius: 5px;\n  background-color: rgba(165, 14, 14, 0.6);\n  color: whitesmoke;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n"]))),e(119)),w=e(184),k=function(){var n=(0,h.useState)(null),t=(0,l.Z)(n,2),e=t[0],r=t[1],i=(0,h.useState)(!1),a=(0,l.Z)(i,2),o=a[0],c=a[1],s=(0,h.useState)(""),u=(0,l.Z)(s,2),f=u[0],x=u[1];return(0,h.useEffect)((function(){c(!0);var n=function(){var n=(0,p.Z)(d().mark((function n(){var t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,m.R8)();case 3:t=n.sent,r(t.data.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),x(n.t0.message);case 10:return n.prev=10,c(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,w.jsx)("main",{children:(0,w.jsxs)(y,{children:[(0,w.jsx)(Z,{children:"Trending today"}),o&&(0,w.jsx)(g.a,{}),e&&(0,w.jsx)(b.Z,{films:e}),f&&(0,w.jsx)("p",{children:"Something went wrong. Try again"})]})})}},888:function(n,t,e){"use strict";var r=e(9047);function i(){}function a(){}a.resetWarningCache=i,n.exports=function(){function n(n,t,e,i,a,o){if(o!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return n}n.isRequired=n;var e={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:t,element:n,elementType:n,instanceOf:t,node:n,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:i};return e.PropTypes=e,e}},2007:function(n,t,e){n.exports=e(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9983:function(n,t,e){"use strict";n.exports=e.p+"static/media/noPhoto .56ce619dc80345f81abe.png"}}]);
//# sourceMappingURL=526.c94efcb0.chunk.js.map
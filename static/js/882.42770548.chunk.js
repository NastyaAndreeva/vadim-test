"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[882],{692:function(n,e,t){t.d(e,{x:function(){return c}});var r=t(31),o=t(407),c=(0,r.ZP)("div")(o.$_,o.bK,o.Dh,o.GQ)},438:function(n,e,t){t.d(e,{$:function(){return r}});var r="e9111f601e940d4d6bd4d7bfd73fa6ea"},580:function(n,e,t){t.d(e,{_:function(){return r}});var r="https://api.themoviedb.org/3"},17:function(n,e,t){t.d(e,{b:function(){return r}});var r="https://image.tmdb.org/t/p/w500/"},882:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r,o,c,i,u,a,s,l,d,h,f,p,x=t(861),m=t(885),v=t(757),j=t.n(v),Z=t(871),g=t(438),b=t(580),w=function(){var n=(0,x.Z)(j().mark((function n(e){var t;return j().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=fetch("".concat(b._,"/movie/").concat(e,"?api_key=").concat(g.$,"&language=en-US")).then((function(n){return n.json()})),n.abrupt("return",t);case 5:n.prev=5,n.t0=n.catch(0),console.log(n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(e){return n.apply(this,arguments)}}(),P=t(168),k=t(31),_=k.ZP.h2(r||(r=(0,P.Z)(["\n  margin-bottom: ",";\n"])),(function(n){return n.theme.space.l})),y=k.ZP.ul(o||(o=(0,P.Z)(["\n  display: flex;\n"]))),S=k.ZP.li(c||(c=(0,P.Z)(["\n  margin-right: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.space.m}),(function(n){return n.theme.space.m})),T=k.ZP.p(i||(i=(0,P.Z)(["\n  margin-bottom: ",";\n"])),(function(n){return n.theme.space.m})),C=k.ZP.p(u||(u=(0,P.Z)(["\n  margin-bottom: ",";\n  text-indent: 20px;\n  padding-top: 20px;\n"])),(function(n){return n.theme.space.m})),G=k.ZP.img(a||(a=(0,P.Z)(["\n  width: 320px;\n  border-radius: 10px;\n  margin-right: ",";\n"])),(function(n){return n.theme.space.m})),O=t(692),$=t(17),z=t(184),L=function(n){var e=n.info;return(0,z.jsxs)("div",{children:[(0,z.jsxs)(_,{children:['"',e.title,'"']}),(0,z.jsxs)(T,{children:[(0,z.jsx)("b",{children:"Vote average:"})," ",e.vote_average]}),(0,z.jsxs)(y,{children:[(0,z.jsx)("b",{children:"Genres:\xa0"}),e.genres.map((function(n){return(0,z.jsx)(S,{children:n.name},n.name)}))]}),(0,z.jsxs)(O.x,{display:"flex",children:[(0,z.jsx)(G,{src:"".concat($.b).concat(e.poster_path),alt:e.tagline}),(0,z.jsx)(C,{children:e.overview})]})]})},U=t(791),B=t(501),D=k.ZP.ul(s||(s=(0,P.Z)(["\n  display: flex;\n"]))),E=k.ZP.li(l||(l=(0,P.Z)(["\n  margin-right: 10px;\n"]))),F=(0,k.ZP)(B.OL)(d||(d=(0,P.Z)(["\n  text-decoration: none;\n  color: ",";\n  font-weight: 500;\n  &:hover {\n    color: ",";\n  }\n  &.active {\n    color: red;\n  }\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.accentText})),H=function(){return(0,z.jsx)(z.Fragment,{children:(0,z.jsxs)(D,{children:[(0,z.jsx)(E,{children:(0,z.jsx)(F,{to:"cast",children:"Cast"})}),(0,z.jsx)(E,{children:(0,z.jsx)(F,{to:"reviews",children:"Reviews"})})]})})},K=t(128),Q=(0,k.ZP)(B.OL)(h||(h=(0,P.Z)(["\n  text-decoration: none;\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.accentText})),R=k.ZP.button(f||(f=(0,P.Z)(["\n  padding: 5px;\n  cursor: pointer;\n  background-color: inherit;\n  border: none;\n  font-size: ",";\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.accentText})),V=(0,k.ZP)(K.ldB)(p||(p=(0,P.Z)(["\n  width: 15px;\n  padding-top: ",";\n"])),(function(n){return n.theme.space.s})),q=function(n){var e=n.to;return(0,z.jsx)(O.x,{mb:"l",children:(0,z.jsxs)(R,{children:[(0,z.jsx)(V,{}),(0,z.jsx)(Q,{to:e,children:" Go back"})]})})},A=function(){var n,e,t=(0,U.useState)(null),r=(0,m.Z)(t,2),o=r[0],c=r[1],i=(0,Z.TH)(),u=(0,Z.UO)().id,a=null!==(n=null===(e=i.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,U.useEffect)((function(){var n=function(){var n=(0,x.Z)(j().mark((function n(){var e;return j().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w(u);case 2:e=n.sent,c(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return function(){return n()}}),[u]),(0,z.jsxs)(O.x,{p:"l",children:[(0,z.jsx)(q,{to:a}),o&&(0,z.jsx)(L,{info:o}),(0,z.jsx)(O.x,{pt:"l",pb:"l",children:(0,z.jsx)(H,{})}),(0,z.jsx)(U.Suspense,{children:(0,z.jsx)(Z.j3,{})})]})}}}]);
//# sourceMappingURL=882.42770548.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[485],{9320:function(n,e,t){t.d(e,{W2:function(){return k},aN:function(){return j},OM:function(){return z},rB:function(){return U},UI:function(){return E}});var r,i,o,c,a,s,d,p,u,h,l,x,m,f=t(168),g=t(8402),w=t(6444),v=w.ZP.div(r||(r=(0,f.Z)(["\n    margin: 0 auto;\n    width: 80px;\n    height: 80px;\n"]))),b=(0,w.ZP)(g.s5)(i||(i=(0,f.Z)([""]))),Z=t(184),j=function(){return(0,Z.jsx)(v,{children:(0,Z.jsx)(b,{strokeColor:"white",width:"80"})})},y=w.ZP.div(o||(o=(0,f.Z)(["\n    padding: 0 20px;\n    width: 100%;\n    @media screen and (min-width: 480px) {\n        margin: 0 auto;\n        width: 480px;\n    }\n    @media screen and (min-width: 768px) {\n        width: 768px;\n    }\n    @media screen and (min-width: 1200px) {\n        width: 1200px;\n    }\n"]))),k=function(n){var e=n.children;return(0,Z.jsx)(y,{children:e})},P=w.ZP.ul(c||(c=(0,f.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n    @media screen and (min-width: 480px) {\n        flex-direction: row;\n        flex-wrap: wrap;\n    }\n"]))),z=function(n){var e=n.movies;return(0,Z.jsx)(P,{children:e.map((function(n){var e=n.id,t=n.title,r=n.poster_path;return(0,Z.jsx)(U,{id:e,title:t,poster:r},e)}))})},O=t(1087),_=w.ZP.li(a||(a=(0,f.Z)(["\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,\n        rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;\n    width: 100%;\n    @media screen and (min-width: 480px) {\n        width: calc((100% - 30px) / 2);\n    }\n    @media screen and (min-width: 768px) {\n        width: calc((100% - 60px) / 3);\n    }\n    @media screen and (min-width: 1200px) {\n        width: calc((100% - 90px) / 4);\n    }\n"]))),C=(0,w.ZP)(O.rU)(s||(s=(0,f.Z)(["\n    display: flex;\n    flex-direction: column;\n    padding: 15px;\n    background-color: #2d3035;\n    height: 100%;\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    &:hover,\n    &:focus {\n        transform: scale(1.05);\n    }\n\n    &:hover Img,\n    &:focus Img {\n        transform: scale(1.2);\n    }\n\n    &:hover p,\n    &:focus p {\n        color: green;\n    }\n"]))),S=w.ZP.div(d||(d=(0,f.Z)(["\n    width: 100%;\n    margin-bottom: 15px;\n    overflow: hidden;\n"]))),I=w.ZP.img(p||(p=(0,f.Z)(["\n    width: 100%;\n    height: auto;\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    object-fit: cover;\n    @media screen and (min-width: 480px) {\n        height: 260px;\n    }\n    @media screen and (min-width: 768px) {\n        height: 288px;\n    }\n    @media screen and (min-width: 1200px) {\n        height: 356px;\n    }\n"]))),N=w.ZP.p(u||(u=(0,f.Z)(["\n    color: lightgray;\n    font-size: 24px;\n    font-weight: 700;\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    @media screen and (min-width: 480px) {\n        font-size: 18px;\n    }\n"]))),T=t(8299),D=t(7689),U=function(n){var e=n.id,t=n.title,r=n.poster,i=(0,D.TH)();return(0,Z.jsx)(_,{children:(0,Z.jsxs)(C,{to:"/movies/".concat(e),state:{from:i},children:[(0,Z.jsx)(S,{children:(0,Z.jsx)(I,{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):"".concat(T),alt:t})}),(0,Z.jsx)(N,{children:t})]})})},B=t(6355),F=w.ZP.form(h||(h=(0,f.Z)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 30px;\n"]))),H=w.ZP.input(l||(l=(0,f.Z)(["\n    padding: 0 15px;\n    width: calc(100% - 40px);\n    height: 40px;\n    outline: none;\n    border: none;\n    font-size: 18px;\n    font-weight: 700;\n    color: #2d3035;\n    @media screen and (min-width: 480px) {\n        width: 440px;\n    }\n"]))),W=w.ZP.button(x||(x=(0,f.Z)(["\n    width: 40px;\n    height: 40px;\n    background-color: white;\n    color: #2d3035;\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    &:hover,\n    &:focus {\n        color: green;\n    }\n"]))),A=(0,w.ZP)(B.U41)(m||(m=(0,f.Z)(["\n    width: 25px;\n    height: 25px;\n    fill: currentColor;\n"]))),E=function(n){var e=n.onSubmit;return(0,Z.jsxs)(F,{onSubmit:e,children:[(0,Z.jsx)(H,{type:"text",name:"searchField",placeholder:"Search movies"}),(0,Z.jsx)(W,{type:"submit","area-aria-label":"Search",children:(0,Z.jsx)(A,{})})]})}},3485:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var r,i,o=t(9439),c=t(168),a=t(6444),s=a.ZP.main(r||(r=(0,c.Z)([""]))),d=a.ZP.h1(i||(i=(0,c.Z)(["\n    text-align: center;\n    color: lightgray;\n    margin-bottom: 30px;\n    font-size: 32px;\n    @media screen and (min-width: 480px) {\n        font-size: 36px;\n    }\n    @media screen and (min-width: 768px) {\n        font-size: 40px;\n    }\n    @media screen and (min-width: 1200px) {\n        font-size: 44px;\n    }\n"]))),p=t(9320),u=t(2791),h=t(835),l=t(7596),x=(t(5462),t(184)),m=function(){var n=(0,u.useState)(null),e=(0,o.Z)(n,2),t=e[0],r=e[1],i=(0,u.useState)(!1),c=(0,o.Z)(i,2),a=c[0],m=c[1];return(0,u.useEffect)((function(){m(!0),(0,h.Df)().then((function(n){return r(n.results)})).catch((function(n){console.log(n),l.Am.error("Oops... Something went wrong. Please, try to refresh the page.",{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})})).finally((function(){return m(!1)}))}),[]),t?(0,x.jsxs)(s,{children:[(0,x.jsxs)(p.W2,{children:[(0,x.jsx)(d,{children:"TRENDING TODAY"}),a&&(0,x.jsx)(p.aN,{}),t&&(0,x.jsx)(p.OM,{movies:t})]}),(0,x.jsx)(l.Ix,{position:"top-center",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"})]}):(0,x.jsx)(x.Fragment,{children:a&&(0,x.jsx)(p.aN,{})})}},835:function(n,e,t){t.d(e,{Wd:function(){return w},TP:function(){return g},tx:function(){return v},gy:function(){return f},Df:function(){return m}});var r=t(5861),i=t(7757),o=t.n(i),c=t(1243),a="a2b23be55398d79ed0c58fbe13d82482";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="trending/movie/day?",d="search/movie?",p="movie/",u="movie/",h="movie/";function l(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get(e);case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function m(){return l("".concat(s,"api_key=").concat(a))}function f(n){return l("".concat(d,"api_key=").concat(a,"&query=").concat(n))}function g(n){return l("".concat(p).concat(n,"?api_key=").concat(a))}function w(n){return l("".concat(u).concat(n,"/credits?api_key=").concat(a))}function v(n){return l("".concat(h).concat(n,"/reviews?api_key=").concat(a))}},8299:function(n,e,t){n.exports=t.p+"static/media/no-poster-placeholder.77ebe4527218c490e3c0.jpg"}}]);
//# sourceMappingURL=485.ae4157e5.chunk.js.map
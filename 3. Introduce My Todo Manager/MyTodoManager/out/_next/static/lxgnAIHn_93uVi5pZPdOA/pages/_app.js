(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+oT+":function(e,t,n){var r=n("eVuF");function a(e,t,n,a,u,o,l){try{var i=e[o](l),c=i.value}catch(p){return void n(p)}i.done?t(c):r.resolve(c).then(a,u)}e.exports=function(e){return function(){var t=this,n=arguments;return new r(function(r,u){var o=e.apply(t,n);function l(e){a(o,r,u,l,i,"next",e)}function i(e){a(o,r,u,l,i,"throw",e)}l(void 0)})}}},"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),u=n("8Bbg"),o=n("nOHt"),l=n.n(o),i=n("IkXL"),c=(n("giil"),function(e,t){t.children,e.Component,e.pageProps,e.reduxStore;return a.a.createElement(i.g,{transparent:!0,fixed:"top",style:{backgroundColor:"#155B9C"}},a.a.createElement(i.g.Brand,null,a.a.createElement(i.g.Item,{href:"/"},a.a.createElement("img",{src:"https://bulma.io/images/bulma-logo-white.png",alt:"",role:"presentation",width:"112",height:"28"})),a.a.createElement(i.g.Burger,null)),a.a.createElement(i.g.Menu,null,a.a.createElement(i.g.Segment,{align:"end"},a.a.createElement(i.g.Item,{style:{backgroundColor:"#155B9C"}},a.a.createElement(i.b.Group,null,a.a.createElement(i.b,{color:"info",onClick:function(){return l.a.push("/main")}},a.a.createElement("strong",null,"Main")),a.a.createElement(i.b,{color:"info",onClick:function(){return l.a.push("/login")}},a.a.createElement("strong",null,"Login")))))))});t.default=function(e){var t=e.Component,n=e.pageProps;return e.reduxStore,a.a.createElement(u.Container,null,a.a.createElement(c,null),a.a.createElement(t,n))}},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},B5Ud:function(e,t,n){"use strict";var r=n("KI45"),a=r(n("0iUn")),u=r(n("sLSF")),o=r(n("MI3g")),l=r(n("a7VT")),i=r(n("Tit0")),c=r(n("ln6h")),p=n("KI45");t.__esModule=!0,t.Container=w,t.createUrl=x,t.default=void 0;var s=p(n("htGi")),f=p(n("+oT+")),d=p(n("q1tI")),h=p(n("17x9")),g=n("Bu4q");t.AppInitialProps=g.AppInitialProps;var m=n("nOHt");function v(e){return E.apply(this,arguments)}function E(){return(E=(0,f.default)(c.default.mark(function e(t){var n,r,a;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,r=t.ctx,e.next=3,(0,g.loadGetInitialProps)(n,r);case 3:return a=e.sent,e.abrupt("return",{pageProps:a});case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}var C=function(e){function t(){return(0,a.default)(this,t),(0,o.default)(this,(0,l.default)(t).apply(this,arguments))}return(0,i.default)(t,e),(0,u.default)(t,[{key:"getChildContext",value:function(){return{router:(0,m.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,a=x(t);return d.default.createElement(w,null,d.default.createElement(n,(0,s.default)({},r,{url:a})))}}]),t}(d.default.Component);function w(e){return e.children}t.default=C,C.childContextTypes={router:h.default.object},C.origGetInitialProps=v,C.getInitialProps=v;var b=(0,g.execOnce)(function(){0});function x(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return b(),r},get pathname(){return b(),t},get asPath(){return b(),n},back:function(){b(),e.back()},push:function(t,n){return b(),e.push(t,n)},pushTo:function(t,n){b();var r=n?t:"",a=n||t;return e.push(r,a)},replace:function(t,n){return b(),e.replace(t,n)},replaceTo:function(t,n){b();var r=n?t:"",a=n||t;return e.replace(r,a)}}}},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var e=n("1TCz");return{page:e.default||e}}])}},[["GcxT",1,0]]]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2mql":function(e,t,r){"use strict";r("ioFf"),r("HAE/");var n=r("TOwV"),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function i(e){return n.isMemo(e)?c:l[e.$$typeof]||a}l[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[n.Memo]=c;var s=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(m){var a=p(r);a&&a!==m&&e(t,a,n)}var c=u(r);f&&(c=c.concat(f(r)));for(var l=i(t),y=i(r),h=0;h<c.length;++h){var b=c[h];if(!(o[b]||n&&n[b]||y&&y[b]||l&&l[b])){var v=d(r,b);try{s(t,b,v)}catch(E){}}}}return t}},DW2E:function(e,t,r){var n=r("0/R4"),a=r("Z6vF").onFreeze;r("Xtr8")("freeze",(function(e){return function(t){return e&&n(t)?e(a(t)):t}}))},RXBc:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("Wbzz"),c=r("Zttt"),l=r("EYWl");r("V+eJ"),r("dZ+Y"),r("LK8F"),r("2Spj"),r("VRzm"),r("Btvt"),r("91GP"),r("DW2E"),r("f3/d");function i(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var f=r("2mql"),d=r.n(f);function p(e,t){if(!e){var r=new Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}var m=a.a.createContext();var y=function(e){return function(t){return a.a.createElement(m.Consumer,null,(function(r){return a.a.createElement(e,Object.assign({__chunkExtractor:r},t))}))}},h=function(e){return e};function b(e){var t=e.resolve,r=void 0===t?h:t,n=e.render,o=e.onLoad;function c(e,t){void 0===t&&(t={});var c=function(e){return"function"==typeof e?{requireAsync:e}:e}(e),l={};function f(e){return t.cacheKey?t.cacheKey(e):c.resolve?c.resolve(e):null}var d=function(e){var a,d;function m(r){var n;return(n=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:f(r)},n.promise=null,p(!r.__chunkExtractor||c.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?!1===t.ssr?u(n):(c.requireAsync(r).catch((function(){})),n.loadSync(),r.__chunkExtractor.addChunk(c.chunkName(r)),u(n)):(!1!==t.ssr&&c.isReady&&c.isReady(r)&&n.loadSync(),n)}d=e,(a=m).prototype=Object.create(d.prototype),a.prototype.constructor=a,a.__proto__=d,m.getDerivedStateFromProps=function(e,t){var r=f(e);return s({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var y=m.prototype;return y.componentDidMount=function(){this.mounted=!0,this.state.loading?this.loadAsync():this.state.error||this.triggerOnLoad()},y.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&(this.promise=null,this.loadAsync())},y.componentWillUnmount=function(){this.mounted=!1},y.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},y.triggerOnLoad=function(){var e=this;o&&setTimeout((function(){o(e.state.result,e.props)}))},y.loadSync=function(){if(this.state.loading)try{var e=c.requireSync(this.props),t=r(e,{Loadable:h});this.state.result=t,this.state.loading=!1}catch(n){this.state.error=n}},y.getCacheKey=function(){return f(this.props)||JSON.stringify(this.props)},y.getCache=function(){return l[this.getCacheKey()]},y.setCache=function(e){l[this.getCacheKey()]=e},y.loadAsync=function(){var e=this;if(!this.promise){var n=this.props,a=(n.__chunkExtractor,n.forwardedRef,i(n,["__chunkExtractor","forwardedRef"]));this.promise=c.requireAsync(a).then((function(n){var a=r(n,{Loadable:h});t.suspense&&e.setCache(a),e.safeSetState({result:r(n,{Loadable:h}),loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){e.safeSetState({error:t,loading:!1})}))}return this.promise},y.render=function(){var e=this.props,r=e.forwardedRef,a=e.fallback,o=(e.__chunkExtractor,i(e,["forwardedRef","fallback","__chunkExtractor"])),c=this.state,l=c.error,u=c.loading,f=c.result;if(t.suspense){var d=this.getCache();if(!d)throw this.loadAsync();return n({loading:!1,fallback:null,result:d,options:t,props:s({},o,{ref:r})})}if(l)throw l;var p=a||t.fallback||null;return u?p:n({loading:u,fallback:p,result:f,options:t,props:s({},o,{ref:r})})},m}(a.a.Component),m=y(d),h=a.a.forwardRef((function(e,t){return a.a.createElement(m,Object.assign({forwardedRef:t},e))}));return h.preload=function(e){c.requireAsync(e)},h.load=function(e){return c.requireAsync(e)},h}return{loadable:c,lazy:function(e,t){return c(e,s({},t,{suspense:!0}))}}}var v=b({resolve:function(e,t){var r=t.Loadable,n=e.__esModule?e.default:e.default||e;return d()(r,n,{preload:!0}),n},render:function(e){var t=e.result,r=e.props;return a.a.createElement(t,r)}}),E=v.loadable,g=v.lazy,k=b({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.loading,n=e.props;return!r&&n.children?n.children(t):null}}),w=k.loadable,S=k.lazy;var O=E;O.lib=w,g.lib=S;var _=O,x=a.a.forwardRef((function(e,t){var r=Object(n.useState)([{name:"drift",url:"https://a.tumblr.com/tumblr_qa7jfcv7741r4pgk7o1.mp3"},{name:"plata",url:"https://a.tumblr.com/tumblr_pyo5kf51M41r4pgk7o1.mp3"}])[0],o=Object(n.useState)(0),c=o[0],l=o[1],i=Object(n.useState)(r[c]),s=i[0],u=i[1];return a.a.createElement("audio",{src:s.url,controls:!0,crossOrigin:"anonymous",ref:t,onEnded:function(){var e=t.current,n=c;n+1>=r.length?n=1:n++;var a=r[n];l(n),u(a),console.log("setting source as",a.name),e.src=a.url,console.log("audio.load()"),e.load(),console.log("audio.play()"),e.play()},autoPlay:!0,style:{display:"none"}})})),R=_((function(){return r.e(11).then(r.bind(null,"xF6q"))})),P=function(){var e=a.a.useRef(null),t=a.a.useState(!1),r=t[0],n=t[1],o=r?"⏸":"▶️",c=function(){e.current.paused?(e.current.play(),n(!0)):(e.current.pause(),n(!1))};return a.a.createElement("div",{id:"about",className:"section"},a.a.createElement("h1",{style:{color:"#FFF2F7"},className:"ontop"},"Sharad Shekar,",a.a.createElement("br",null),a.a.createElement("span",{style:{color:"#FFDAE7"}},"creative tech enthusiast")),a.a.createElement("p",null,"AI, ML, JavaScript, Python, Golang, 3D, XR, CSS, Design, Art, Music"),a.a.createElement("br",null),a.a.createElement("h3",{style:{color:"#FFF2F7"}}," Find me here: ")," ",a.a.createElement("a",{href:"https://drive.google.com/open?id=1VF2xl-mBi8d1MHQN0ySn8WELDYOK4sM-",target:"_blank",style:{textDecoration:"underline"}},"Resume"),", ",a.a.createElement("a",{href:"https://www.linkedin.com/in/sharad-shekar/",target:"_blank",style:{textDecoration:"underline"}},"LinkedIn"),",  ",a.a.createElement("a",{href:"https://www.github.com/sharad-s/",target:"_blank",style:{textDecoration:"underline"}},"Github"),",  ",a.a.createElement("a",{href:"https://www.soundcloud.com/sharad_s/",target:"_blank",style:{textDecoration:"underline"}},"Soundcloud"),a.a.createElement("br",null),a.a.createElement("a",{href:"mailto:sharadshekar@gmail.com",style:{textDecoration:"underline"}},"Email"),a.a.createElement("div",{id:"AUDIO"},a.a.createElement(x,{ref:e})),a.a.createElement("div",{id:"VISUAL",onClick:c},a.a.createElement(R,{audioRef:e,radius:100,maxRadius:100,minRadius:70,R:.7,fov:65})),a.a.createElement("div",{style:{position:"absolute",bottom:"0",right:"0",color:"white",padding:"20px"}},a.a.createElement("button",{onClick:c,id:"PLAY_BTN"}," ",o," ")))},j=r("L6NH");t.default=function(){a.a.useRef(null);return a.a.createElement(c.a,null,a.a.createElement(l.a,{title:"Home"}),a.a.createElement(P,null),a.a.createElement("div",{id:"work",className:"section"},a.a.createElement("h1",null,"Work"),a.a.createElement(o.Link,{to:"/#top",onClick:function(e){return Object(j.a)(e,"#top")},className:"backToTop"},"Back to top"),a.a.createElement("br",null),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(o.Link,{className:"",to:"/work/pizzahut"},"Pizza Hut")),a.a.createElement("li",null,a.a.createElement(o.Link,{className:"",to:"/work/olypsis"},"Olypsis")),a.a.createElement("li",null,a.a.createElement(o.Link,{className:"",to:"/work/plug"},"Plug.af")),a.a.createElement("li",null,a.a.createElement(o.Link,{className:"",to:"/work/trakz"},"Trakz.co")))),a.a.createElement("div",{id:"projects",className:"section"},a.a.createElement("h1",null,"Projects"),a.a.createElement(o.Link,{to:"/#top",onClick:function(e){return Object(j.a)(e,"#top")},className:"backToTop"},"Back to top"),a.a.createElement("br",null)),a.a.createElement("div",{id:"media",className:"section"},a.a.createElement("h1",null," Media Library"),a.a.createElement(o.Link,{to:"/#top",onClick:function(e){return Object(j.a)(e,"#top")},className:"backToTop"},"Back to top"),a.a.createElement("br",null)))}},TOwV:function(e,t,r){"use strict";e.exports=r("qT12")},qT12:function(e,t,r){"use strict";r("rE2o"),r("ioFf"),r("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,a=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,c=n?Symbol.for("react.fragment"):60107,l=n?Symbol.for("react.strict_mode"):60108,i=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.memo"):60115,h=n?Symbol.for("react.lazy"):60116;function b(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case f:case d:case c:case i:case l:case m:return e;default:switch(e=e&&e.$$typeof){case u:case p:case s:return e;default:return t}}case h:case y:case o:return t}}}function v(e){return b(e)===d}t.typeOf=b,t.AsyncMode=f,t.ConcurrentMode=d,t.ContextConsumer=u,t.ContextProvider=s,t.Element=a,t.ForwardRef=p,t.Fragment=c,t.Lazy=h,t.Memo=y,t.Portal=o,t.Profiler=i,t.StrictMode=l,t.Suspense=m,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===d||e===i||e===l||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===y||e.$$typeof===s||e.$$typeof===u||e.$$typeof===p)},t.isAsyncMode=function(e){return v(e)||b(e)===f},t.isConcurrentMode=v,t.isContextConsumer=function(e){return b(e)===u},t.isContextProvider=function(e){return b(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return b(e)===p},t.isFragment=function(e){return b(e)===c},t.isLazy=function(e){return b(e)===h},t.isMemo=function(e){return b(e)===y},t.isPortal=function(e){return b(e)===o},t.isProfiler=function(e){return b(e)===i},t.isStrictMode=function(e){return b(e)===l},t.isSuspense=function(e){return b(e)===m}}}]);
//# sourceMappingURL=component---src-pages-index-js-26972b8ed0e6134e99eb.js.map
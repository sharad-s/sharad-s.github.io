(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2mql":function(e,t,r){"use strict";r("ioFf"),r("HAE/");var n=r("TOwV"),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function i(e){return n.isMemo(e)?c:l[e.$$typeof]||a}l[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[n.Memo]=c;var s=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,d=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(d){var a=p(r);a&&a!==d&&e(t,a,n)}var c=u(r);f&&(c=c.concat(f(r)));for(var l=i(t),h=i(r),y=0;y<c.length;++y){var b=c[y];if(!(o[b]||n&&n[b]||h&&h[b]||l&&l[b])){var v=m(r,b);try{s(t,b,v)}catch(E){}}}}return t}},DW2E:function(e,t,r){var n=r("0/R4"),a=r("Z6vF").onFreeze;r("Xtr8")("freeze",(function(e){return function(t){return e&&n(t)?e(a(t)):t}}))},RXBc:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("Zttt"),c=r("EYWl");r("V+eJ"),r("dZ+Y"),r("LK8F"),r("2Spj"),r("VRzm"),r("Btvt"),r("91GP"),r("DW2E"),r("f3/d");function l(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=r("2mql"),f=r.n(u);function m(e,t){if(!e){var r=new Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}var p=a.a.createContext();var d=function(e){return function(t){return a.a.createElement(p.Consumer,null,(function(r){return a.a.createElement(e,Object.assign({__chunkExtractor:r},t))}))}},h=function(e){return e};function y(e){var t=e.resolve,r=void 0===t?h:t,n=e.render,o=e.onLoad;function c(e,t){void 0===t&&(t={});var c=function(e){return"function"==typeof e?{requireAsync:e}:e}(e),u={};function f(e){return t.cacheKey?t.cacheKey(e):c.resolve?c.resolve(e):null}var p=function(e){var a,p;function d(r){var n;return(n=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:f(r)},n.promise=null,m(!r.__chunkExtractor||c.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor?!1===t.ssr?s(n):(c.requireAsync(r).catch((function(){})),n.loadSync(),r.__chunkExtractor.addChunk(c.chunkName(r)),s(n)):(!1!==t.ssr&&c.isReady&&c.isReady(r)&&n.loadSync(),n)}p=e,(a=d).prototype=Object.create(p.prototype),a.prototype.constructor=a,a.__proto__=p,d.getDerivedStateFromProps=function(e,t){var r=f(e);return i({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var h=d.prototype;return h.componentDidMount=function(){this.mounted=!0,this.state.loading?this.loadAsync():this.state.error||this.triggerOnLoad()},h.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&(this.promise=null,this.loadAsync())},h.componentWillUnmount=function(){this.mounted=!1},h.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},h.triggerOnLoad=function(){var e=this;o&&setTimeout((function(){o(e.state.result,e.props)}))},h.loadSync=function(){if(this.state.loading)try{var e=c.requireSync(this.props),t=r(e,{Loadable:y});this.state.result=t,this.state.loading=!1}catch(n){this.state.error=n}},h.getCacheKey=function(){return f(this.props)||JSON.stringify(this.props)},h.getCache=function(){return u[this.getCacheKey()]},h.setCache=function(e){u[this.getCacheKey()]=e},h.loadAsync=function(){var e=this;if(!this.promise){var n=this.props,a=(n.__chunkExtractor,n.forwardedRef,l(n,["__chunkExtractor","forwardedRef"]));this.promise=c.requireAsync(a).then((function(n){var a=r(n,{Loadable:y});t.suspense&&e.setCache(a),e.safeSetState({result:r(n,{Loadable:y}),loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){e.safeSetState({error:t,loading:!1})}))}return this.promise},h.render=function(){var e=this.props,r=e.forwardedRef,a=e.fallback,o=(e.__chunkExtractor,l(e,["forwardedRef","fallback","__chunkExtractor"])),c=this.state,s=c.error,u=c.loading,f=c.result;if(t.suspense){var m=this.getCache();if(!m)throw this.loadAsync();return n({loading:!1,fallback:null,result:m,options:t,props:i({},o,{ref:r})})}if(s)throw s;var p=a||t.fallback||null;return u?p:n({loading:u,fallback:p,result:f,options:t,props:i({},o,{ref:r})})},d}(a.a.Component),h=d(p),y=a.a.forwardRef((function(e,t){return a.a.createElement(h,Object.assign({forwardedRef:t},e))}));return y.preload=function(e){c.requireAsync(e)},y.load=function(e){return c.requireAsync(e)},y}return{loadable:c,lazy:function(e,t){return c(e,i({},t,{suspense:!0}))}}}var b=y({resolve:function(e,t){var r=t.Loadable,n=e.__esModule?e.default:e.default||e;return f()(r,n,{preload:!0}),n},render:function(e){var t=e.result,r=e.props;return a.a.createElement(t,r)}}),v=b.loadable,E=b.lazy,g=y({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.loading,n=e.props;return!r&&n.children?n.children(t):null}}),k=g.loadable,w=g.lazy;var S=v;S.lib=k,E.lib=w;var _=S,C=[{name:"problems",artist:"NK",url:"https://a.tumblr.com/tumblr_qac3h4ePQn1r4pgk7o1.mp3"},{name:"M4R1T1M0V1P",artist:"PLATA",url:"https://a.tumblr.com/tumblr_pyo5kf51M41r4pgk7o1.mp3"},{name:"drift",artist:"sharad s.",url:"https://a.tumblr.com/tumblr_qa7jfcv7741r4pgk7o1.mp3"},{name:"Surgeon",artist:"Ivy Sly",url:"https://a.tumblr.com/tumblr_qdulojp1o01r4pgk7o1.mp3"},{name:"DONA",artist:"PLATA",url:"https://a.tumblr.com/tumblr_qdj26ba3oh1r4pgk7o1.mp3"},{name:"6.3.17 burial",artist:"sharad s.",url:"https://a.tumblr.com/tumblr_qduv8vQvg01r4pgk7o1.mp3"}],O=a.a.forwardRef((function(e,t){var r=Object(n.useState)(!1),o=r[0],c=r[1],l=Object(n.useState)(0),i=l[0],s=l[1],u=Object(n.useState)(C[i]),f=u[0],m=u[1],p=e.handleClick,d=e.isPlaying;a.a.useEffect((function(){c(d)}),[d]);var h=function(){var e=t.current,r=i;r+1>=C.length?r=0:r++;var n=C[r];s(r),m(n),e.src=n.url,e.load(),e.play(),c(!0)},y=a.a.createElement("svg",{class:"svg-icon",viewBox:"0 0 20 20"},a.a.createElement("path",{d:"M18.084,11.639c0.168,0.169,0.168,0.442,0,0.611c-0.084,0.084-0.195,0.127-0.306,0.127c-0.111,0-0.221-0.043-0.306-0.127l-1.639-1.639l-1.639,1.639c-0.084,0.084-0.195,0.127-0.306,0.127c-0.111,0-0.222-0.043-0.307-0.127c-0.168-0.169-0.168-0.442,0-0.611L15.223,10l-1.64-1.639c-0.168-0.168-0.168-0.442,0-0.61c0.17-0.169,0.442-0.169,0.612,0l1.639,1.639l1.639-1.639c0.169-0.169,0.442-0.169,0.611,0c0.168,0.168,0.168,0.442,0,0.61L16.445,10L18.084,11.639z M12.161,2.654v14.691c0,0.175-0.105,0.333-0.267,0.4c-0.054,0.021-0.109,0.032-0.166,0.032c-0.111,0-0.223-0.043-0.305-0.127l-3.979-3.979H2.222c-0.237,0-0.432-0.194-0.432-0.432V6.759c0-0.237,0.195-0.432,0.432-0.432h5.222l3.979-3.978c0.123-0.125,0.309-0.163,0.471-0.095C12.056,2.322,12.161,2.479,12.161,2.654 M7.192,7.192H2.654v5.617h4.538V7.192z M11.296,3.698l-3.24,3.241v6.123l3.24,3.24V3.698z"})),b=a.a.createElement("svg",{class:"svg-icon",viewBox:"0 0 20 20"},a.a.createElement("path",{d:"M17.969,10c0,1.707-0.5,3.366-1.446,4.802c-0.076,0.115-0.203,0.179-0.333,0.179c-0.075,0-0.151-0.022-0.219-0.065c-0.184-0.122-0.233-0.369-0.113-0.553c0.86-1.302,1.314-2.812,1.314-4.362s-0.454-3.058-1.314-4.363c-0.12-0.183-0.07-0.43,0.113-0.552c0.186-0.12,0.432-0.07,0.552,0.114C17.469,6.633,17.969,8.293,17.969,10 M15.938,10c0,1.165-0.305,2.319-0.88,3.339c-0.074,0.129-0.21,0.201-0.347,0.201c-0.068,0-0.134-0.016-0.197-0.052c-0.191-0.107-0.259-0.351-0.149-0.542c0.508-0.9,0.776-1.918,0.776-2.946c0-1.028-0.269-2.046-0.776-2.946c-0.109-0.191-0.042-0.434,0.149-0.542c0.193-0.109,0.436-0.042,0.544,0.149C15.634,7.681,15.938,8.834,15.938,10 M13.91,10c0,0.629-0.119,1.237-0.354,1.811c-0.063,0.153-0.211,0.247-0.368,0.247c-0.05,0-0.102-0.01-0.151-0.029c-0.203-0.084-0.301-0.317-0.217-0.521c0.194-0.476,0.294-0.984,0.294-1.508s-0.1-1.032-0.294-1.508c-0.084-0.203,0.014-0.437,0.217-0.52c0.203-0.084,0.437,0.014,0.52,0.217C13.791,8.763,13.91,9.373,13.91,10 M11.594,3.227v13.546c0,0.161-0.098,0.307-0.245,0.368c-0.05,0.021-0.102,0.03-0.153,0.03c-0.104,0-0.205-0.04-0.281-0.117l-3.669-3.668H2.43c-0.219,0-0.398-0.18-0.398-0.398V7.012c0-0.219,0.179-0.398,0.398-0.398h4.815l3.669-3.668c0.114-0.115,0.285-0.149,0.435-0.087C11.496,2.92,11.594,3.065,11.594,3.227 M7.012,7.41H2.828v5.18h4.184V7.41z M10.797,4.189L7.809,7.177v5.646l2.988,2.988V4.189z"})),v=a.a.createElement("svg",{class:"svg-icon",viewBox:"0 0 20 20"},a.a.createElement("path",{fill:"none",d:"M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"})),E=o?f.artist:"Click to play ",g=o?f.name:"",k=o?b:y;return a.a.createElement("div",null,a.a.createElement("div",{className:"audio-player hidden"},a.a.createElement("div",{className:"song-details",onClick:p},a.a.createElement("span",null," ",E),a.a.createElement("span",null,g)),a.a.createElement("div",{className:"controls"},a.a.createElement("button",{onClick:p,className:"control-button",style:{"font-size":"20px"}},k),a.a.createElement("button",{onClick:h,className:"control-button",style:{"font-size":"20px"}}," ",v," "))),a.a.createElement("audio",{src:f.url,controls:!0,crossOrigin:"anonymous",ref:t,onEnded:h,autoPlay:!0,style:{display:"none"}}))})),x=_((function(){return r.e(11).then(r.bind(null,"xF6q"))})),L=function(){var e=a.a.useRef(null),t=a.a.useState(!1),r=t[0],n=t[1],o=function(){e.current.paused?(e.current.play(),n(!0)):(e.current.pause(),n(!1))};return a.a.createElement("div",{id:"about",className:"section"},a.a.createElement("h1",{style:{color:"#FFF2F7"},className:"ontop"},"Sharad Shekar,",a.a.createElement("br",null),a.a.createElement("span",{style:{color:"#FFDAE7"}},"creative tech enthusiast")),a.a.createElement("p",null,"AI, ML, JavaScript, Python, Golang, 3D, XR, CSS, Design, Art, Music"),a.a.createElement("br",null),a.a.createElement("h3",{style:{color:"#FFF2F7"}}," Find me here: ")," ",a.a.createElement("a",{href:"https://drive.google.com/open?id=1VF2xl-mBi8d1MHQN0ySn8WELDYOK4sM-",target:"_blank",style:{textDecoration:"underline"}},"Resume"),", ",a.a.createElement("a",{href:"https://www.linkedin.com/in/sharad-shekar/",target:"_blank",style:{textDecoration:"underline"}},"LinkedIn"),",  ",a.a.createElement("a",{href:"https://www.github.com/sharad-s/",target:"_blank",style:{textDecoration:"underline"}},"Github"),",  ",a.a.createElement("a",{href:"https://www.soundcloud.com/sharad_s/",target:"_blank",style:{textDecoration:"underline"}},"Soundcloud"),a.a.createElement("br",null),a.a.createElement("a",{href:"mailto:sharadshekar@gmail.com",style:{textDecoration:"underline"}},"Email"),a.a.createElement("div",{style:{position:"absolute",bottom:"0",right:"0",color:"white",padding:"20px"}},a.a.createElement("div",{id:"AUDIO"},a.a.createElement(O,{ref:e,handleClick:o,isPlaying:r}))),a.a.createElement("div",{id:"VISUAL",onClick:o},a.a.createElement(x,{audioRef:e,radius:100,maxRadius:100,minRadius:70,R:.7,fov:65})))},M=r("Wbzz"),P=r("L6NH"),R=function(){return a.a.createElement("div",{id:"work",className:"section"},a.a.createElement("h1",null,"Work"),a.a.createElement(M.Link,{to:"/#top",onClick:function(e){return Object(P.a)(e,"#top")},className:"backToTop"},"Back to top"),a.a.createElement("br",null),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(M.Link,{className:"",to:"/work/pizzahut"},"Pizza Hut")),a.a.createElement("li",null,a.a.createElement(M.Link,{className:"",to:"/work/olypsis"},"Olypsis")),a.a.createElement("li",null,a.a.createElement(M.Link,{className:"",to:"/work/plug"},"Plug.af")),a.a.createElement("li",null,a.a.createElement(M.Link,{className:"",to:"/work/trakz"},"Trakz.co"))))},j=function(){return a.a.createElement("div",{id:"projects",className:"section"},a.a.createElement("h1",null,"Projects"),a.a.createElement("p",null," Coming soon!"),a.a.createElement(M.Link,{to:"/#top",onClick:function(e){return Object(P.a)(e,"#top")},className:"backToTop"},"Back to top"),a.a.createElement("br",null))},N=function(){return a.a.createElement("div",{id:"media",className:"section"},a.a.createElement("h1",null," Media Library"),a.a.createElement("p",null," Coming soon!"),a.a.createElement(M.Link,{to:"/#top",onClick:function(e){return Object(P.a)(e,"#top")},className:"backToTop"},"Back to top"),a.a.createElement("br",null))};t.default=function(){return a.a.createElement(o.a,null,a.a.createElement(c.a,{title:"Home"}),a.a.createElement(L,null),a.a.createElement(R,null),a.a.createElement(j,null),a.a.createElement(N,null))}},TOwV:function(e,t,r){"use strict";e.exports=r("qT12")},qT12:function(e,t,r){"use strict";r("rE2o"),r("ioFf"),r("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,a=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,c=n?Symbol.for("react.fragment"):60107,l=n?Symbol.for("react.strict_mode"):60108,i=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,m=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116;function b(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case f:case m:case c:case i:case l:case d:return e;default:switch(e=e&&e.$$typeof){case u:case p:case s:return e;default:return t}}case y:case h:case o:return t}}}function v(e){return b(e)===m}t.typeOf=b,t.AsyncMode=f,t.ConcurrentMode=m,t.ContextConsumer=u,t.ContextProvider=s,t.Element=a,t.ForwardRef=p,t.Fragment=c,t.Lazy=y,t.Memo=h,t.Portal=o,t.Profiler=i,t.StrictMode=l,t.Suspense=d,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===m||e===i||e===l||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===s||e.$$typeof===u||e.$$typeof===p)},t.isAsyncMode=function(e){return v(e)||b(e)===f},t.isConcurrentMode=v,t.isContextConsumer=function(e){return b(e)===u},t.isContextProvider=function(e){return b(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return b(e)===p},t.isFragment=function(e){return b(e)===c},t.isLazy=function(e){return b(e)===y},t.isMemo=function(e){return b(e)===h},t.isPortal=function(e){return b(e)===o},t.isProfiler=function(e){return b(e)===i},t.isStrictMode=function(e){return b(e)===l},t.isSuspense=function(e){return b(e)===d}}}]);
//# sourceMappingURL=component---src-pages-index-js-5e26547f172a07bc67c6.js.map
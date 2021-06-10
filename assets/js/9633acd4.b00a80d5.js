(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{111:function(e,n,o){"use strict";o.d(n,"a",(function(){return p})),o.d(n,"b",(function(){return f}));var t=o(0),r=o.n(t);function i(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function c(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){i(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=r.a.createContext({}),s=function(e){var n=r.a.useContext(u),o=n;return e&&(o="function"==typeof e?e(n):c(c({},n),e)),o},p=function(e){var n=s(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var o=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(o),b=t,f=p["".concat(a,".").concat(b)]||p[b]||d[b]||i;return o?r.a.createElement(f,c(c({ref:n},u),{},{components:o})):r.a.createElement(f,c({ref:n},u))}));function f(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=o.length,a=new Array(i);a[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var u=2;u<i;u++)a[u]=o[u];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"},93:function(e,n,o){"use strict";o.r(n),o.d(n,"frontMatter",(function(){return a})),o.d(n,"metadata",(function(){return c})),o.d(n,"toc",(function(){return l})),o.d(n,"default",(function(){return s}));var t=o(3),r=o(7),i=(o(0),o(111)),a={title:"\u989d\u5916\u7684 API",id:"additional-api"},c={unversionedId:"additional-api",id:"additional-api",isDocsHomePage:!1,title:"\u989d\u5916\u7684 API",description:"useCookie",source:"@site/api/additional-api.md",sourceDirName:".",slug:"/additional-api",permalink:"/api/additional-api",version:"current",frontMatter:{title:"\u989d\u5916\u7684 API",id:"additional-api"},sidebar:"docs",previous:{title:"\u72b6\u6001\u7ba1\u7406 API",permalink:"/api/state-management-api"}},l=[{value:"useCookie",id:"usecookie",children:[]},{value:"libs",id:"libs",children:[]}],u={toc:l};function s(e){var n=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},u,o,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"usecookie"},"useCookie"),Object(i.b)("p",null,"\u64cd\u4f5c Cookie \u7684 Hook \u3002\u8fd4\u56de\u5f53\u524d\u7528\u6237\u7684 cookie \u4fe1\u606f\uff0c\u53ca\u64cd\u4f5c cookie \u7684\u65b9\u6cd5\u3002\u5176\u4e2d\uff0c\u64cd\u4f5c\u65b9\u6cd5\u5305\u62ec\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"getCookie : \u83b7\u53d6\u6307\u5b9a name \u7684 cookie \u503c"),Object(i.b)("li",{parentName:"ul"},"updateCookie : \u66f4\u65b0 cookie"),Object(i.b)("li",{parentName:"ul"},"removeCookie : \u5220\u9664\u6307\u5b9a name \u7684 cookie"),Object(i.b)("li",{parentName:"ul"},"clearCookie : \u6e05\u9664\u6240\u6709 cookie")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"import {useCookie, useEffect} from 'concisejs'\n\nexport default function Example() {\n  const [cookies, cookieHandler] = useCookie()\n\n  const addToken = () => {\n    cookieHandler.updateCookie('AUTHTOKEN', 'euco94vaifk10j19g5nolh9pnb')\n  }\n  const addUserInfo = () => {\n    cookieHandler.updateCookie('_u', '16|admin', {\n      long: 1000 * 60 * 60, // Number \u7c7b\u578b\uff0c cookie \u7684\u6301\u7eed\u65f6\u95f4\uff0c\u4ee5\u6beb\u79d2\u8ba1\uff0c\u65e0\u9ed8\u8ba4\n      path: '/', // String \u7c7b\u578b\uff0c cookie \u7684\u751f\u6548\u8def\u5f84\uff0c\u9ed8\u8ba4\u5728\u6839\u76ee\u5f55\u4e0b\n      domain: undefined, // String \u7c7b\u578b\uff0c cookie \u7684\u751f\u6548\u57df\u540d\uff0c\u9ed8\u8ba4\u4e3a\u8be5 cookie \u7684\u7f51\u9875\u6240\u5728\u7684\u57df\u540d\n      secure: false // Boolean \u7c7b\u578b\uff0c\u662f\u5426\u9700\u8981 https \u53d1\u9001 cookie \uff0c\u9ed8\u8ba4 false\n    })\n  }\n  const deleteToken = () => {\n    cookieHandler.removeCookie('AUTHTOKEN')\n  }\n  const clearAllToken = () => {\n    cookieHandler.clearCookie()\n  }\n\n  useEffect(() => {\n    console.log(cookieHandler.getCookie('AUTHTOKEN'))\n  })\n\n  return (\n    <div>\n      <div>cookies: {JSON.stringify(cookies)}</div>\n      <button onClick={addToken}>\u66f4\u65b0 cookie : AUTHTOKEN=euco94vaifk10j19g5nolh9pnb;</button>\n      <button onClick={addUserInfo}>\u66f4\u65b0 cookie : _u=16|admin;</button>\n      <button onClick={deleteToken}>\u5220\u9664 AUTHTOKEN cookie</button>\n      <button onClick={clearAllToken}>\u6e05\u9664\u6240\u6709 cookie</button>\n    </div>\n  )\n}\n")),Object(i.b)("h2",{id:"libs"},"libs"),Object(i.b)("p",null,"\u5e38\u7528\u51fd\u6570\u96c6\u5408\uff0c\u5305\u62ec\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"sleep : \u4f11\u7720\u51fd\u6570"),Object(i.b)("li",{parentName:"ul"},"getAllCookies : \u83b7\u53d6\u6240\u6709 cookie")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"import {libs} from 'concisejs'\n\nasync function example() {\n  const res = await libs.sleep(2000, {message: 'ok'})\n  console.log(res)\n}\nexample() // => {message: 'ok'}\n\nconst cookies = libs.getAllCookies()\nconsole.log(cookies)\n")))}s.isMDXComponent=!0}}]);
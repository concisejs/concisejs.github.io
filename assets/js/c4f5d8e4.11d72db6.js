(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{124:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,l,r]=t;if(n&&r){n=parseInt(n),r=parseInt(r);const e=n<r?1:-1;"-"!==l&&".."!==l&&"\u2025"!==l||(r+=e);for(let t=n;t!==r;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},125:function(e,t,a){"use strict";a.d(t,"a",(function(){return C}));var n=a(3),l=a(0),r=a.n(l),s=a(113),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:a(23).a,theme:o};function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var m=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},g=function(e,t){var a=e.plain,n=Object.create(null),l=e.styles.reduce((function(e,a){var n=a.languages,l=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=p({},e[t],l);e[t]=a})),e}),n);return l.root=a,l.plain=p({},a,{backgroundColor:null}),l};function y(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var h=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?g(e.theme,e.language):void 0;return t.themeDict=a})),i(this,"getLineProps",(function(e){var a=e.key,n=e.className,l=e.style,r=p({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(r.style=s.plain),void 0!==l&&(r.style=void 0!==r.style?p({},r.style,l):l),void 0!==a&&(r.key=a),n&&(r.className+=" "+n),r})),i(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,l=a.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===l&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===l&&!n)return r[a[0]];var s=n?{display:"inline-block"}:{},o=a.map((function(e){return r[e]}));return Object.assign.apply(Object,[s].concat(o))}})),i(this,"getTokenProps",(function(e){var a=e.key,n=e.className,l=e.style,r=e.token,s=p({},y(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==l&&(s.style=void 0!==s.style?p({},s.style,l):l),void 0!==a&&(s.key=a),n&&(s.className+=" "+n),s})),i(this,"tokenize",(function(e,t,a,n){var l={code:t,grammar:a,language:n,tokens:[]};e.hooks.run("before-tokenize",l);var r=l.tokens=e.tokenize(l.code,l.grammar,l.language);return e.hooks.run("after-tokenize",l),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,l=e.children,r=this.getThemeDict(this.props),s=t.languages[a];return l({tokens:function(e){for(var t=[[]],a=[e],n=[0],l=[e.length],r=0,s=0,o=[],c=[o];s>-1;){for(;(r=n[s]++)<l[s];){var i=void 0,p=t[s],g=a[s][r];if("string"==typeof g?(p=s>0?p:["plain"],i=g):(p=d(p,g.type),g.alias&&(p=d(p,g.alias)),i=g.content),"string"==typeof i){var y=i.split(m),h=y.length;o.push({types:p,content:y[0]});for(var b=1;b<h;b++)u(o),c.push(o=[]),o.push({types:p,content:y[b]})}else s++,t.push(p),a.push(i),n.push(0),l.push(i.length)}s--,t.pop(),a.pop(),n.pop(),l.pop()}return u(o),c}(void 0!==s?this.tokenize(t,n,s,a):[n]),className:"prism-code language-"+a,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(l.Component);var b=a(124),f=a.n(b),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},k=a(121),E=a(112);var j=()=>{const{prism:e}=Object(E.useThemeConfig)(),{isDarkTheme:t}=Object(k.a)(),a=e.theme||v,n=e.darkTheme||a;return t?n:a},N=a(114),O=a(56),x=a.n(O);const T=/{([\d,-]+)}/,w=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)};function C({children:e,className:t,metastring:a,title:o}){const{prism:i}=Object(E.useThemeConfig)(),[p,m]=Object(l.useState)(!1),[u,d]=Object(l.useState)(!1);Object(l.useEffect)((()=>{d(!0)}),[]);const g=Object(E.parseCodeBlockTitle)(a)||o,y=Object(l.useRef)(null);let b=[];const v=j(),k=Array.isArray(e)?e.join(""):e;if(a&&T.test(a)){const e=a.match(T)[1];b=f()(e).filter((e=>e>0))}let O=t&&t.replace(/language-/,"");!O&&i.defaultLanguage&&(O=i.defaultLanguage);let C=k.replace(/\n$/,"");if(0===b.length&&void 0!==O){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return w(["js","jsBlock"]);case"jsx":case"tsx":return w(["js","jsBlock","jsx"]);case"html":return w(["js","jsBlock","html"]);case"python":case"py":return w(["python"]);default:return w()}})(O),a=k.replace(/\n$/,"").split("\n");let n;for(let l=0;l<a.length;){const r=l+1,s=a[l].match(t);if(null!==s){switch(s.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${r},`;break;case"highlight-start":n=r;break;case"highlight-end":e+=`${n}-${r-1},`}a.splice(l,1)}else l+=1}b=f()(e),C=a.join("\n")}const S=()=>{!function(e,{target:t=document.body}={}){const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const l=document.getSelection();let r=!1;l.rangeCount>0&&(r=l.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}a.remove(),r&&(l.removeAllRanges(),l.addRange(r)),n&&n.focus()}(C),m(!0),setTimeout((()=>m(!1)),2e3)};return r.a.createElement(h,Object(n.a)({},c,{key:String(u),theme:v,code:C,language:O}),(({className:e,style:t,tokens:a,getLineProps:l,getTokenProps:o})=>r.a.createElement("div",{className:x.a.codeBlockContainer},g&&r.a.createElement("div",{style:t,className:x.a.codeBlockTitle},g),r.a.createElement("div",{className:Object(s.a)(x.a.codeBlockContent,O)},r.a.createElement("div",{tabIndex:0,className:Object(s.a)(e,x.a.codeBlock,"thin-scrollbar",{[x.a.codeBlockWithTitle]:g})},r.a.createElement("div",{className:x.a.codeBlockLines,style:t},a.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=l({line:e,key:t});return b.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),r.a.createElement("div",Object(n.a)({key:t},a),e.map(((e,t)=>r.a.createElement("span",Object(n.a)({key:t},o({token:e,key:t}))))))})))),r.a.createElement("button",{ref:y,type:"button","aria-label":Object(N.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(x.a.copyButton),onClick:S},p?r.a.createElement(N.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.a.createElement(N.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}},99:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var n=a(3),l=a(0),r=a.n(l),s=a(113),o=a(119),c=a(115),i=a(125),p=a(17),m=a(116),u=a(100),d=a.n(u);const g=[{title:"\u4e13\u6ce8\u4e8e\u91cd\u8981\u7684\u4e8b\u60c5",imageUrl:"img/undraw_docusaurus_tree.svg",description:r.a.createElement(r.a.Fragment,null,"ConciseJS \u5e2e\u52a9\u60a8\u4e13\u6ce8\u4e8e\u4e1a\u52a1\uff08\u4ee3\u7801\uff09\u5f00\u53d1\uff0c\u65e0\u9700\u5173\u5fc3\u548c\u914d\u7f6e\u6784\u5efa\u5de5\u5177\u3002",r.a.createElement("br",null),"\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u4ec5\u9700\u8981\u4e00\u4e2a\u6784\u5efa\u4f9d\u8d56\u9879\uff0c\u4ee5\u786e\u4fdd\u5176\u6240\u6709\u57fa\u7840\u90e8\u5206\u90fd\u53ef\u4ee5\u65e0\u7f1d\u534f\u540c\u5de5\u4f5c\uff0c\u4e0d\u4f1a\u51fa\u73b0\u590d\u6742\u7684\u7248\u672c\u4e0d\u5339\u914d\u7684\u60c5\u51b5\u3002")},{title:"\u5927\u91cf\u81ea\u7814\uff0c\u7b80\u5316\u5f00\u53d1",imageUrl:"img/undraw_docusaurus_mountain.svg",description:r.a.createElement(r.a.Fragment,null,"\u5185\u7f6e\u8def\u7531\u3001\u6784\u5efa\u3001\u6d4b\u8bd5\u3001\u6743\u9650\u6821\u9a8c\u3001\u7ec4\u4ef6\u5e93\u3001HTTP \u8bf7\u6c42\u5e93\u3001\u81ea\u5b9a\u4e49 Hooks \u5e93\u3001JavaScript \u72b6\u6001\u7ba1\u7406\u5e93\u7b49\uff0c\u6ee1\u8db3\u65e5\u5e38\u9879\u76ee\u7684\u5468\u8fb9\u9700\u6c42\u3002",r.a.createElement("br",null),"\u81ea\u7814 Webpack \u63d2\u4ef6\uff0c\u4f18\u5316\u6253\u5305\u901f\u5ea6\u3001\u8ba9\u63d0\u793a\u4fe1\u606f\u66f4\u52a0\u53cb\u597d\u3002")},{title:"\u57fa\u4e8e React \u548c Redux",imageUrl:"img/undraw_docusaurus_react.svg",description:r.a.createElement(r.a.Fragment,null,"\u4ee5\u58f0\u660e\u5f0f\u7f16\u5199 UI \uff0c\u9ad8\u6548\u3001\u7075\u6d3b\u7684\u6784\u5efa\u7528\u6237\u754c\u9762\uff0c\u540c\u65f6\u8ba9\u60a8\u7684\u4ee3\u7801\u66f4\u52a0\u53ef\u9760\uff0c\u4e14\u65b9\u4fbf\u8c03\u8bd5\u3002",r.a.createElement("br",null),"\u63d0\u4f9b\u53ef\u9884\u6d4b\u5316\u7684\u72b6\u6001\u7ba1\u7406\uff0c\u53ef\u4ee5\u8ba9\u60a8\u6784\u5efa\u4e00\u81f4\u5316\u7684\u5e94\u7528\u3002",r.a.createElement("br",null),"\u5c06\u5e94\u7528\u7a0b\u5e8f\u7684\u72b6\u6001\u548c\u903b\u8f91\u96c6\u4e2d\u7ba1\u7406\uff0c\u53ef\u5b9e\u73b0\u5f3a\u5927\u7684\u529f\u80fd\u3002")}];function y({imageUrl:e,title:t,description:a}){const n=Object(m.a)(e);return r.a.createElement("div",{className:Object(s.a)("col col--4",d.a.feature)},n&&r.a.createElement("div",{className:"text--center"},r.a.createElement("img",{className:d.a.featureImage,src:n,alt:t})),r.a.createElement("h3",{style:{textAlign:"center"}},t),r.a.createElement("p",null,a))}function h(){const e=Object(p.default)(),{siteConfig:t={}}=e;return r.a.createElement(o.a,{title:"\u9996\u9875"},r.a.createElement("header",{className:Object(s.a)("hero hero--primary",d.a.heroBanner)},r.a.createElement("div",{className:"container"},r.a.createElement("img",{className:Object(s.a)(d.a.heroBannerLogo,"margin-vert--md"),alt:"ConciseJS logo",src:Object(m.a)("img/logo.svg")}),r.a.createElement("h1",{className:"hero__title"},t.title),r.a.createElement("p",{className:"hero__subtitle"},t.tagline),r.a.createElement("div",{className:d.a.buttons},r.a.createElement(c.a,{className:Object(s.a)("button button--outline button--secondary button--lg",d.a.getStarted),to:Object(m.a)("docs/getting-started")},"\u5feb\u901f\u5f00\u59cb")))),r.a.createElement("main",null,g&&g.length>0&&r.a.createElement("section",{className:d.a.features},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},g.map(((e,t)=>r.a.createElement(y,Object(n.a)({key:t},e))))))),r.a.createElement("section",{className:d.a.gettingStartedSection},r.a.createElement("div",{className:"container padding-vert--xl text--left"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"part-wrap"},r.a.createElement("h2",null,"\u4e00\u5206\u949f\u4e0a\u624b ConciseJS"),r.a.createElement("p",null,"ConciseJS \u8ba9\u60a8\u4e13\u6ce8\u4e8e\u4ee3\u7801\u5f00\u53d1\uff0c\u800c\u4e0d\u662f\u6784\u5efa\u5de5\u5177\u3002"),r.a.createElement("p",null,"\u8981\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",r.a.createElement("code",null,"myApp")," \u7684\u9879\u76ee\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),r.a.createElement(i.a,{className:"language-sh"},["npm config set registry http://192.168.0.94:7002","\n","\n","npx @concisejs/cli create myApp"])),r.a.createElement("div",{className:"part-wrap"},r.a.createElement("img",{className:d.a.gettingStartedImage,alt:"Easy to get started in seconds",src:Object(m.a)("img/create.gif")}))))),r.a.createElement("section",{className:d.a.easyMaintainSection},r.a.createElement("div",{className:"container padding-vert--xl text--left"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"part-wrap"},r.a.createElement("img",{className:d.a.updateImage,alt:"Easy to update",src:Object(m.a)("img/update.png")})),r.a.createElement("div",{className:"part-wrap"},r.a.createElement("h2",null,"\u6613\u4e8e\u7ef4\u62a4"),r.a.createElement("p",null,"\u66f4\u65b0\u4f9d\u8d56\u901a\u5e38\u662f\u4e00\u9879\u8270\u5de8\u4e14\u8017\u65f6\u7684\u4efb\u52a1\u3002\u53d1\u5e03\u65b0\u7248\u672c\u7684 ConciseJS \u540e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5355\u4e2a\u547d\u4ee4\u8fdb\u884c\u5347\u7ea7\uff1a"),r.a.createElement(i.a,{className:"language-sh"},"npm install concisejs@latest")))))))}}}]);
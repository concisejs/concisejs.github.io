(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{109:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(17),s=t(119),r=t(127),o=t(115),m=t(114);var c=function(e){const{metadata:a}=e,{previousPage:t,nextPage:n}=a;return i.a.createElement("nav",{className:"pagination-nav","aria-label":Object(m.b)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},i.a.createElement("div",{className:"pagination-nav__item"},t&&i.a.createElement(o.a,{className:"pagination-nav__link",to:t},i.a.createElement("div",{className:"pagination-nav__label"},"\xab"," ",i.a.createElement(m.a,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),i.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&i.a.createElement(o.a,{className:"pagination-nav__link",to:n},i.a.createElement("div",{className:"pagination-nav__label"},i.a.createElement(m.a,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},g=t(123),p=t(112);a.default=function(e){const{metadata:a,items:t,sidebar:n}=e,{siteConfig:{title:o}}=Object(l.default)(),{blogDescription:m,blogTitle:d,permalink:b}=a,v="/"===b?o:d;return i.a.createElement(s.a,{title:v,description:m,wrapperClassName:p.ThemeClassNames.wrapper.blogPages,pageClassName:p.ThemeClassNames.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"}},i.a.createElement("div",{className:"container margin-vert--lg"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col col--3"},i.a.createElement(g.a,{sidebar:n})),i.a.createElement("main",{className:"col col--7"},t.map((({content:e})=>i.a.createElement(r.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:e.metadata.truncated},i.a.createElement(e,null)))),i.a.createElement(c,{metadata:a})))))}}}]);
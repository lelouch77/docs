(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{130:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(132),c=t(138),s=t(148),i=t(134);var o=function(e){const{metadata:a}=e,{previousPage:t,nextPage:n}=a;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t},r.a.createElement("h4",{className:"pagination-nav__label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(i.a,{className:"pagination-nav__link",to:n},r.a.createElement("h4",{className:"pagination-nav__label"},"Older Entries \xbb"))))};a.default=function(e){const{metadata:a,items:t}=e,{siteConfig:{title:n}}=Object(l.a)(),i="/"===a.permalink?n:"Blog";return r.a.createElement(c.a,{title:i,description:"Blog"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},t.map(({content:e})=>r.a.createElement(s.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:e.metadata.truncated},r.a.createElement(e,null))),r.a.createElement(o,{metadata:a})))))}},140:function(e,a,t){"use strict";t(12),t(52),t(141),t(142),t(143);var n=t(0),r=t.n(n),l=t(133),c=t.n(l),s=t(136),i=t(132),o=!1;a.a=function(e){var a=Object(n.useRef)(!1),l=Object(n.useRef)(null),m=Object(s.b)(),u=Object(i.a)().siteConfig,d=(void 0===u?{}:u).baseUrl,h=function(){a.current||(new window.DocSearch({searchData:window.searchData,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=d+t.url;document.createElement("a").href=n,m.push(n)}}),a.current=!0)},E=function(){o?h():Promise.all([fetch(d+"search-data.json").then((function(e){return e.json()})),Promise.all([t.e(32),t.e(34)]).then(t.bind(null,146)),t.e(20).then(t.t.bind(null,145,7))]).then((function(e){var a=e[0],t=e[1].default;o=!0,window.searchData=a,window.DocSearch=t,h()}))},p=Object(n.useCallback)((function(a){l.current.contains(a.target)||l.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:p,onKeyDown:p,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:E,onMouseOver:E,onFocus:p,onBlur:p,ref:l}))}},148:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(133),c=t.n(l),s=t(135),i=t(134),o=t(149),m=t(92),u=t.n(m);const d=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:n,truncated:l,isBlogPostPage:m=!1}=e,{date:h,permalink:E,tags:p,readingTime:g}=n,{author:v,title:b}=t,_=t.author_url||t.authorURL,f=t.author_title||t.authorTitle,N=t.author_image_url||t.authorImageURL;return r.a.createElement("article",{className:m?void 0:"margin-bottom--xl"},(()=>{const e=m?"h1":"h2",a=h.substring(0,10).split("-"),t=a[0],n=d[parseInt(a[1],10)-1],l=parseInt(a[2],10);return r.a.createElement("header",null,r.a.createElement(e,{className:c()("margin-bottom--sm",u.a.blogPostTitle)},m?b:r.a.createElement(i.a,{to:E},b)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:h,className:u.a.blogPostDate},n," ",l,", ",t," ",g&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(g)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},N&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:_,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:N,alt:v})),r.a.createElement("div",{className:"avatar__intro"},v&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:_,target:"_blank",rel:"noreferrer noopener"},v)),r.a.createElement("small",{className:"avatar__subtitle"},f)))))})(),r.a.createElement("section",{className:"markdown"},r.a.createElement(s.a,{components:o.a},a)),(p.length>0||l)&&r.a.createElement("footer",{className:"row margin-vert--lg"},p.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),p.map(({label:e,permalink:a})=>r.a.createElement(i.a,{key:a,className:"margin-horiz--sm",to:a},e))),l&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(i.a,{to:n.permalink,"aria-label":"Read more about "+b},r.a.createElement("strong",null,"Read More")))))}}}]);
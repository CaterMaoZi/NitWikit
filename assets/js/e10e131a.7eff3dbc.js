"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[1614],{4336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(86070),i=n(18355),s=n(35992);const o={title:"\u642d\u5efa",slug:"/build",sidebar_position:2},c="\u642d\u5efa\u4ee3\u7406\u670d",a={id:"advance/cross-server/build-up/build-up",title:"\u642d\u5efa",description:"\u5e38\u89c1\u7684\u4ee3\u7406\u670d\u5206\u4e3a\u4ee5\u4e0b\u4e24\u79cd\uff1a",source:"@site/docs-java/advance/cross-server/build-up/build-up.md",sourceDirName:"advance/cross-server/build-up",slug:"/build",permalink:"/NitWikit/Java/build",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/advance/cross-server/build-up/build-up.md",tags:[],version:"current",lastUpdatedBy:"Minimouse48",lastUpdatedAt:172473126e4,sidebarPosition:2,frontMatter:{title:"\u642d\u5efa",slug:"/build",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u6838\u5fc3\u9009\u62e9",permalink:"/NitWikit/Java/advance/cross-server/server-core-choose"},next:{title:"BungeeCord \u7aef",permalink:"/NitWikit/Java/bungeecord"}},l={},u=[];function d(e){const t={h1:"h1",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"\u642d\u5efa\u4ee3\u7406\u670d",children:"\u642d\u5efa\u4ee3\u7406\u670d"})}),"\n",(0,r.jsx)(t.p,{children:"\u5e38\u89c1\u7684\u4ee3\u7406\u670d\u5206\u4e3a\u4ee5\u4e0b\u4e24\u79cd\uff1a"}),"\n","\n",(0,r.jsx)(s.A,{}),"\n",(0,r.jsx)(t.p,{children:"\u8bf7\u9009\u62e9\u5408\u9002\u4f60\u7684\u6838\u5fc3\u3002"})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},35992:(e,t,n)=>{n.d(t,{A:()=>b});n(30758);var r=n(13526),i=n(88397),s=n(3839),o=n(70417),c=n(48205),a=n(55821),l=n(91898);const u={cardContainer:"cardContainer_E_wU",cardTitle:"cardTitle_ApXF",cardDescription:"cardDescription_ifMK"};var d=n(86070);function p(e){let{href:t,children:n}=e;return(0,d.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:i,description:s}=e;return(0,d.jsxs)(p,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:i,children:[n," ",i]}),s&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function h(e){let{item:t}=e;const n=(0,i.Nr)(t),r=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,i.$S)();return(0,d.jsx)(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,i.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},70417:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(30758),i=n(93191);const s=["zero","one","two","few","many","other"];function o(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),s=n.pluralForms.indexOf(i);return r[Math.min(s,r.length-1)]}(n,t,e)}}},18355:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(30758);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
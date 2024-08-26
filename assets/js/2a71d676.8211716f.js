"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[6741],{65314:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>h,toc:()=>d});var i=t(86070),r=t(18355);const s={title:"\u673a\u5668\u4eba\u6846\u67b6",sidebar_position:1},l="\u673a\u5668\u4eba\u6846\u67b6",h={id:"advance/bot/framework",title:"\u673a\u5668\u4eba\u6846\u67b6",description:"QQ\u673a\u5668\u4eba",source:"@site/docs/advance/bot/framework.md",sourceDirName:"advance/bot",slug:"/advance/bot/framework",permalink:"/NitWikit/advance/bot/framework",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/advance/bot/framework.md",tags:[],version:"current",lastUpdatedBy:"lilingfengdev",lastUpdatedAt:172467402e4,sidebarPosition:1,frontMatter:{title:"\u673a\u5668\u4eba\u6846\u67b6",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u7fa4\u673a\u5668\u4eba",permalink:"/NitWikit/advance/bot"},next:{title:"\u901a\u7528\u673a\u5668\u4eba",permalink:"/NitWikit/advance/bot/general"}},o={},d=[{value:"QQ\u673a\u5668\u4eba",id:"qq\u673a\u5668\u4eba",level:2},{value:"LiteLoaderQQNT + LLOneBot",id:"liteloaderqqnt--llonebot",level:3},{value:"Lagrange\uff08\u62c9\u683c\u6717\u65e5\uff09",id:"lagrange\u62c9\u683c\u6717\u65e5",level:3},{value:"Gensokyo",id:"gensokyo",level:3},{value:"OpenShamrock",id:"openshamrock",level:3},{value:"Mirai",id:"mirai",level:3}];function a(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u673a\u5668\u4eba\u6846\u67b6",children:"\u673a\u5668\u4eba\u6846\u67b6"})}),"\n",(0,i.jsx)(n.h2,{id:"qq\u673a\u5668\u4eba",children:"QQ\u673a\u5668\u4eba"}),"\n",(0,i.jsxs)(n.admonition,{type:"danger",children:[(0,i.jsx)(n.p,{children:"\u8bf7\u4e00\u5b9a\u8981\u4f7f\u7528\u5c0f\u53f7\u6765\u642d\u5efa QQ \u673a\u5668\u4eba\uff0c\u5426\u5219\u5982\u679c\u767b\u5f55\u4e0d\u6210\u529f\u6216\u662f\u6210\u529f\u540e\u88ab\u68c0\u6d4b\uff0c\u5c06\u6709\u5927\u6982\u7387\u5bfc\u81f4\u5c01\u53f7\u3002"}),(0,i.jsxs)(n.p,{children:["\u4f7f\u7528\u5982 go-cqhttp \u7684 ",(0,i.jsx)(n.a,{href:"https://mirai.mamoe.net/topic/2373/%E5%85%B3%E4%BA%8E%E7%AD%BE%E5%90%8D%E6%9C%8D%E5%8A%A1",children:"\u7b7e\u540d\u670d\u52a1"})," \u4e0d\u7a33\u5b9a\u5e76\u4e14\u975e\u5e38\u5bb9\u6613\u5bfc\u81f4\u5c01\u53f7\uff0c\u63a8\u8350\u4f7f\u7528 LLOneBot \u8fd9\u7c7b\u901a\u8fc7 hook \u5b98\u65b9\u5ba2\u6237\u7aef\u800c\u8df3\u8fc7\u4f7f\u7528\u7b7e\u540d\u670d\u52a1\u767b\u5f55\u7684\u65b9\u6848\u3002"]})]}),"\n",(0,i.jsx)(n.p,{children:"\u63a7\u5236 QQ \u53f7\u7684\u90e8\u5206\u53eb\u5c31\u662f\u6846\u67b6\uff0c\u53ef\u5206\u4e3a\u4e09\u79cd\u539f\u7406\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u63a5\u5165 QQ \u5b98\u65b9\u7684\u673a\u5668\u4eba\u6846\u67b6"}),"\uff0c\u8fd9\u9700\u8981\u6bcf\u4e2a\u4f7f\u7528\u8fd9\u6837\u6846\u67b6\u7684\u7528\u6237\u90fd\u5fc5\u987b\u5728QQ\u5b98\u65b9\u7533\u8bf7\u673a\u5668\u4eba\u5e76\u8fdb\u884c\u5ba1\u6838\uff0c\u800c\u4e14\u529f\u80fd\u5b58\u5728\u9650\u5236"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u7834\u89e3 QQ \u5ba2\u6237\u7aef"})," \u6765\u5b9e\u73b0\u64cd\u4f5c QQ \u53f7\uff0c\u8fd9\u79cd\u65b9\u5f0f\u76ee\u524d\u6700\u4e3a\u7a33\u5b9a\uff0c\u4e5f\u662f\u6700\u63a8\u8350\u7684\uff0c\u552f\u4e00\u7684\u7f3a\u70b9\u5c31\u662f\u5360\u7528\u7684\u7cfb\u7edf\u8d44\u6e90\u8f83\u591a"]}),"\n",(0,i.jsxs)(n.li,{children:["\u76f4\u63a5\u7f16\u5199\u8f6f\u4ef6\u4f2a\u88c5\u6210 QQ \u5ba2\u6237\u7aef\u76f4\u63a5\u8fde\u63a5 QQ \u5b98\u65b9\u670d\u52a1\u5668\uff0c\u53c8\u53eb ",(0,i.jsx)(n.strong,{children:"\u534f\u8bae\u5e93"}),"\u3002\u8fd9\u6837\u7684\u8f6f\u4ef6\u5360\u7528\u8d44\u6e90\u5f88\u4f4e\uff0c\u4f46\u662f\u76ee\u524d\u7531\u4e8e\u88ab\u817e\u8baf\u5b98\u65b9\u9488\u5bf9\u5904\u7406\uff0c\u5bfc\u81f4\u975e\u5e38\u4e0d\u7a33\u5b9a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"liteloaderqqnt--llonebot",children:"LiteLoaderQQNT + LLOneBot"}),"\n",(0,i.jsx)(n.table,{children:(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u539f\u7406"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"\u7834\u89e3 QQ \u5ba2\u6237\u7aef"})]})})}),"\n",(0,i.jsxs)(n.p,{children:["LiteLoaderQQNT \u662f ",(0,i.jsx)(n.a,{href:"https://github.com/Mrs4s/go-cqhttp/issues/2471",children:"\u5229\u7528 NTQQ \u7279\u6027"})," \u5b9e\u73b0\u7684 QQ ",(0,i.jsx)(n.strong,{children:"\u63d2\u4ef6\u52a0\u8f7d\u5668"}),"\u3002\u5b83\u672c\u8eab\u5e76\u4e0d\u5177\u5907QQ\u673a\u5668\u4eba\u529f\u80fd\uff0c\u4f60\u9700\u8981",(0,i.jsx)(n.strong,{children:"\u4e3a\u5176\u5b89\u88c5 LLOneBot \u63d2\u4ef6"}),"\u624d\u80fd\u5f00\u59cb\u4f7f\u7528 QQ \u673a\u5668\u4eba\u529f\u80fd\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"\u6839\u636e\u5148\u524d\u5176\u4ed6\u8be5\u9886\u57df\u5f00\u53d1\u8005\u7684\u7ecf\u5386\uff0c\u8be5\u8f6f\u4ef6\u5f00\u53d1\u8005\u4e0d\u5efa\u8bae\u4efb\u4f55\u4eba\u516c\u5f00\u5ba3\u4f20\u6b64\u8f6f\u4ef6\u3002\u5982\u679c\u4f60\u4f7f\u7528\u4e86 LLOneBot\uff0c\u8bf7\u52ff\u5728\u4efb\u4f55\u7fa4\u804a\u53d1\u9001\u53ef\u4ee5\u770b\u51fa\u4f60\u4f7f\u7528\u4e86\u975e\u5b98\u65b9 QQ \u7684\u622a\u56fe\u3002"})}),"\n",(0,i.jsxs)(n.p,{children:["\u524d\u5f80 ",(0,i.jsx)(n.a,{href:"https://liteloaderqqnt.github.io/",children:"LiteLoaderQQNT\u5b98\u7f51"})," \uff0c\u6839\u636e\u5176\u6559\u7a0b\u4e0b\u8f7d\u5b89\u88c5\u8be5\u6846\u67b6\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u6839\u636e ",(0,i.jsx)(n.a,{href:"https://liteloaderqqnt.github.io/guide/plugins.html",children:"LiteLoaderQQNT \u6587\u6863\u5b89\u88c5\u63d2\u4ef6\u65b9\u6cd5"})," \u4e3a\u6846\u67b6\u5b89\u88c5\u63d2\u4ef6\uff1a",(0,i.jsx)(n.a,{href:"https://github.com/LLOneBot/LLOneBot/tree/main",children:"LLOneBot"}),"\u3002\u5982\u679c\u4f60\u5df2\u7ecf\u5728\u4f7f\u7528\u8be5\u6846\u67b6\u5e76\u4e14\u5df2\u5b89\u88c5\u4e86 ",(0,i.jsx)(n.a,{href:"https://github.com/ltxhhz/LL-plugin-list-viewer/tree/main",children:"\u63d2\u4ef6\u5217\u8868\u67e5\u770b"})," \u63d2\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u8be5\u63d2\u4ef6\u8fdb\u884c\u5b89\u88c5\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u8fdb\u5165 QQ \u8bbe\u7f6e\uff0c\u5728\u4fa7\u8fb9\u680f\u4e2d\u627e\u5230 LLOneBot \u70b9\u51fb\u5207\u6362\u5230\u5176\u8bbe\u7f6e\u9875\uff0c\u7136\u540e ",(0,i.jsx)(n.strong,{children:"\u6839\u636e\u673a\u5668\u4eba\u7ed9\u51fa\u7684\u6587\u6863"})," \u8fdb\u884c\u914d\u7f6e\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"lagrange\u62c9\u683c\u6717\u65e5",children:"Lagrange\uff08\u62c9\u683c\u6717\u65e5\uff09"}),"\n",(0,i.jsx)(n.table,{children:(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u539f\u7406"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"\u534f\u8bae\u5e93"})]})})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://docs.qq.com/doc/DQ2N2b0JqeUhmWUVa",children:"\u53c2\u89c1\u6b64\u5904"})}),"\n",(0,i.jsx)(n.h3,{id:"gensokyo",children:(0,i.jsx)(n.a,{href:"https://github.com/Hoshinonyaruko/Gensokyo",children:"Gensokyo"})}),"\n",(0,i.jsx)(n.table,{children:(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u539f\u7406"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"\u5b98\u65b9 API"})]})})}),"\n",(0,i.jsx)(n.p,{children:"\u6b64\u6846\u67b6\u7531\u4e8e\u662f\u63a5\u5165 QQ \u5b98\u65b9\u9891\u9053\u673a\u5668\u4eba API\uff0c\u4f7f\u7528\u7a33\u5b9a\u4e14\u6709\u817e\u8baf\u5b98\u65b9\u7684\u652f\u6301\u3002"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["\u7531\u4e8e\u5b98\u65b9\u9650\u5236\uff0c\u9891\u9053\u673a\u5668\u4eba\u65e0\u6cd5\u4e3b\u52a8\u53d1\u9001\u6d88\u606f\uff0c\u5728\u88ab ",(0,i.jsx)(n.strong,{children:"\u4e0d\u662f\u673a\u5668\u4eba\u7684\u666e\u901a\u7528\u6237"}),' @\u540e\u53ef\u81ea\u7531\u53d1\u9001\u6d88\u606f\uff0c\u6301\u7eed 5 \u5206\u949f\u3002\u5f53\u8d85\u8fc7 5 \u5206\u949f\u65f6\uff0c\u673a\u5668\u4eba\u4f1a\u63d0\u793a"\u56de\u590d\u65f6\u95f4\u7ed3\u675f"\u3002']})}),"\n",(0,i.jsx)(n.h3,{id:"openshamrock",children:(0,i.jsx)(n.a,{href:"https://github.com/whitechi73/OpenShamrock",children:"OpenShamrock"})}),"\n",(0,i.jsx)(n.table,{children:(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u539f\u7406"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"\u7834\u89e3 QQ \u5ba2\u6237\u7aef"})]})})}),"\n",(0,i.jsx)(n.p,{children:"OpenShamrock \u662f\u8fd0\u884c\u5728\u5b89\u5353\u624b\u673a QQ \u4e0a\u7684 OneBot \u6846\u67b6\uff0c\u76f8\u5f53\u4e8e\u5b89\u5353\u7248\u7684 LiteLoaderQQNT + LLOneBot\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u4e5f\u5c31\u662f\u8bf4\uff0c\u4f60\u5fc5\u987b\u5df2\u7ecf\u62e5\u6709\u4e00\u53f0 ",(0,i.jsx)(n.strong,{children:"\u548c\u670d\u52a1\u5668\u8fde\u63a5\u5230\u540c\u4e00\u5c40\u57df\u7f51\u4e0b"})," \u7684\u5b89\u5353\u624b\u673a\u3002\u6709\u4e24\u79cd\u65b9\u5f0f\u6765\u90e8\u7f72\u4e00\u53f0\u8fd9\u6837\u7684\u5b89\u5353\u624b\u673a\uff1a"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u4f7f\u7528\u95f2\u7f6e\u7684\u65e7\u624b\u673a"}),"\n",(0,i.jsx)(n.li,{children:"\u670d\u52a1\u5668\u5185\u5b58\u8db3\u591f\u7684\u60c5\u51b5\u4e0b\u90e8\u7f72\u5b89\u5353\u6a21\u62df\u5668"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"OpenShamrock\u7684\u642d\u5efa\u6559\u7a0b\u5f85\u8865\u5145"}),"\n",(0,i.jsx)(n.h3,{id:"mirai",children:(0,i.jsx)(n.a,{href:"https://mirai.mamoe.net/",children:"Mirai"})}),"\n",(0,i.jsx)(n.table,{children:(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u539f\u7406"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"\u534f\u8bae\u5e93"})]})})}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsx)(n.p,{children:"Mirai \u539f\u751f\u7531\u4e8e\u672c\u8eab\u4e3a\u534f\u8bae\u5e93\u539f\u7406\uff0c\u8fd1\u671f\u56e0\u4e0d\u53ef\u6297\u529b\u5bfc\u81f4\u96be\u4ee5\u767b\u5f55\u5e76\u4e1499%\u5c01\u53f7\u51bb\u7ed3\u3002\u63a8\u8350\u914d\u5408\u4e0b\u6587\u7684 Overflow \u4f7f\u7528\u3002"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u53d1\u73b0 Mirai \u7684 ",(0,i.jsx)(n.strong,{children:"\u5e10\u53f7\u767b\u5f55"})," \u5bf9\u4e8e\u4f60\u7684\u670d\u52a1\u5668\u6765\u8bf4\u96be\u4ee5\u4f7f\u7528\u548c\u7ef4\u62a4\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(n.a,{href:"https://github.com/MrXiaoM/Overflow",children:"Overflow\uff08OneBot\uff09"})," \u5c06 Mirai \u63a5\u5165\u5176\u4ed6 OneBot \u6846\u67b6\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u901a\u8fc7 Mirai \u767b\u5f55\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://github.com/MrXiaoM/Overflow/blob/main/docs/UserManual.md",children:"Overflow \u4f7f\u7528\u65b9\u6cd5"})})}),"\n",(0,i.jsx)(n.p,{children:"\u914d\u7f6e Websocket \u94fe\u63a5\u65f6\uff0c\u5728\u6b63\u5411 ws \u548c\u53cd\u5411 ws \u4e4b\u95f4\u9009\u62e9\u4e00\u79cd\u5373\u53ef\u3002"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["\u63a8\u8350\u4f7f\u7528 ",(0,i.jsx)(n.a,{href:"https://mirai.mrxiaom.top/#get-started",children:"\u5b98\u7f51\u4e00\u952e\u6253\u5305\u6574\u5408\u5305"})," + ",(0,i.jsx)(n.a,{href:"#liteloaderqqnt--llonebot",children:"LLOneBot"})," \u7684\u65b9\u5f0f\u90e8\u7f72\u3002"]})})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},18355:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>h});var i=t(30758);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
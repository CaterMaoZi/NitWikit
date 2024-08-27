"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[4410],{5921:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var t=i(86070),l=i(18355);const s={sidebar_position:6,title:"Azul Zing",slug:"/optimize/jvm/zing"},r="Azul Zing",d={id:"process/maintenance/optimize/jvm/zing",title:"Azul Zing",description:"\u795e\u65e0\u9700\u4f18\u5316",source:"@site/docs-java/process/maintenance/optimize/jvm/zing.md",sourceDirName:"process/maintenance/optimize/jvm",slug:"/optimize/jvm/zing",permalink:"/NitWikit/Java/optimize/jvm/zing",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/process/maintenance/optimize/jvm/zing.md",tags:[],version:"current",lastUpdatedBy:"lilingfengdev",lastUpdatedAt:1724727592e3,sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Azul Zing",slug:"/optimize/jvm/zing"},sidebar:"tutorialSidebar",previous:{title:"GraalVM EE",permalink:"/NitWikit/Java/optimize/jvm/graalvm"},next:{title:"OpenJ9",permalink:"/NitWikit/Java/optimize/jvm/openj9"}},o={},c=[{value:"ReadyNow",id:"readynow",level:2},{value:"\u5783\u573e\u56de\u6536\u5668",id:"\u5783\u573e\u56de\u6536\u5668",level:2},{value:"\u7d27\u51d1\u5b57\u7b26\u4e32",id:"\u7d27\u51d1\u5b57\u7b26\u4e32",level:2},{value:"\u66f4\u9ad8\u7ea7\u522b\u7684 Falcon \u4f18\u5316",id:"\u66f4\u9ad8\u7ea7\u522b\u7684-falcon-\u4f18\u5316",level:2},{value:"Zing System Tool",id:"zing-system-tool",level:2},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:2},{value:"\u4e00\u4e9b\u7279\u6b8a\u60c5\u51b5",id:"\u4e00\u4e9b\u7279\u6b8a\u60c5\u51b5",level:2}];function a(e){const n={a:"a",code:"code",del:"del",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"azul-zing",children:"Azul Zing"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.del,{children:"\u795e\u65e0\u9700\u4f18\u5316"})}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u7528\u5185\u5bb9\u7684\u53c2\u6570\u53ef\u4ee5\u4f7f\u7528(\u6bd4\u5982\u5927\u9875),\u4f46\u4e0d\u8981\u81ea\u884c\u6307\u5b9aGC,\u6216\u5176\u4ed6\u4f18\u5316\u53c2\u6570"}),"\n",(0,t.jsx)(n.h2,{id:"readynow",children:"ReadyNow"}),"\n",(0,t.jsx)(n.p,{children:"\u4f60\u5927\u6982\u5df2\u7ecf\u6ce8\u610f\u5230\u4e86,Zing\u7684\u9884\u70ed\u671f\u5f88\u957f,ReadyNow\u5c31\u662f\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u7684"}),"\n",(0,t.jsxs)(n.p,{children:["\u82e5\u8981\u542f\u7528 ReadyNow,\u8bf7\u6dfb\u52a0\u4ee5\u4e0b\u547d\u4ee4\u884c\u9009\u9879,\u5176\u4e2d\u4e24\u8005",(0,t.jsx)(n.code,{children:"<file>"}),"\u901a\u5e38\u76f8\u540c\uff1a"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-XX:ProfileLogIn=<file>"})," \u6307\u793a Azul Platform Prime \u4f7f\u7528\u73b0\u6709\u914d\u7f6e\u6587\u4ef6\u65e5\u5fd7\u4e2d\u7684\u4fe1\u606f\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-XX:ProfileLogOut=<file>"})," \u8bb0\u5f55\u4e4b\u524d\u7684\u7f16\u8bd1\u548c\u8fd0\u884c\u4e2d\u7684\u53bb\u4f18\u5316\u51b3\u7b56\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u7136\u540e,\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u5c06\u81ea\u52a8\u751f\u6210\u6216\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6\u65e5\u5fd7\u3002\u6b64\u914d\u7f6e\u6587\u4ef6\u65e5\u5fd7\u5c06\u5728\u5e94\u7528\u7a0b\u5e8f\u7684\u540e\u7eed\u8fd0\u884c\u65f6\u4f7f\u7528,\u4ece\u800c\u6539\u8fdb\u9884\u70ed\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u5b98\u65b9\u63a8\u8350\u6240\u6709\u91cd\u8981\u51fd\u6570\u6267\u884c",(0,t.jsx)(n.strong,{children:"5\u4e07\u904d"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u6dfb\u52a0",(0,t.jsx)(n.code,{children:"-XX:+FalconUseCompileStashing"}),"\u4ee5\u4f7f\u7528\u7f16\u8bd1\u5b58\u50a8"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5783\u573e\u56de\u6536\u5668",children:"\u5783\u573e\u56de\u6536\u5668"}),"\n",(0,t.jsx)(n.p,{children:"C4 \u662f Zing \u4e2d\u552f\u4e00\u7684\u5783\u573e\u6536\u96c6\u5668,\u53d6\u4ee3\u4e86 OpenJDK \u4e2d\u53ef\u7528\u7684\u5176\u4ed6\u5783\u573e\u6536\u96c6\u5668\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u7d27\u51d1\u5b57\u7b26\u4e32",children:"\u7d27\u51d1\u5b57\u7b26\u4e32"}),"\n",(0,t.jsxs)(n.p,{children:["\u6dfb\u52a0\u9009\u9879",(0,t.jsx)(n.code,{children:"-XX:+CompactStrings"}),"\u53ef\u51cf\u5c11\u5185\u5b58\u5360\u7528,\u63d0\u9ad8\u5b57\u7b26\u4e32\u5bc6\u96c6\u578b\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd,\u5e76\u51cf\u5c11\u82b1\u8d39\u5728\u5783\u573e\u56de\u6536\u4e0a\u7684\u65f6\u95f4"]}),"\n",(0,t.jsx)(n.h2,{id:"\u66f4\u9ad8\u7ea7\u522b\u7684-falcon-\u4f18\u5316",children:"\u66f4\u9ad8\u7ea7\u522b\u7684 Falcon \u4f18\u5316"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528\u9009\u9879",(0,t.jsx)(n.code,{children:"-XX:FalconOptimizationLevel=3"}),"\u53ef\u4ee5\u83b7\u5f97\u66f4\u9ad8\u7ea7\u522b\u7684\u4f18\u5316,\u4f46\u4f1a\u51fa\u73b0\u517c\u5bb9\u6027\u95ee\u9898"]}),"\n",(0,t.jsx)(n.h2,{id:"zing-system-tool",children:"Zing System Tool"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u73a9\u610f\u53ef\u4ee5\u8ba9\u4f60\u7684\u7cfb\u7edf\u66f4\u52a0\u9002\u5e94Zing,\u53ef\u4ee5\u81ea\u52a8\u4f18\u5316\u7cfb\u7edf\u914d\u7f6e"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://docs.azul.com/prime/zst/installation",children:"\u5b98\u65b9\u5b89\u88c5\u6559\u7a0b"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528",(0,t.jsx)(n.code,{children:"-XX:+UseZST"})," \u5f00\u542f"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4e0b\u8f7d",children:"\u4e0b\u8f7d"}),"\n",(0,t.jsx)(n.p,{children:"\u867d\u7136\u9700\u8981\u516c\u53f8\u8d26\u6237,\u4f46\u6211\u4eec\u901a\u8fc7\u795e\u79d8\u624b\u6bb5\u641e\u5230\u4e86\u5b89\u88c5\u5305,\u90fd\u662fJDK"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://cdn.azul.com/zing-zvm/ZVM24.07.0.0/zing24.07.0.0-3-jdk21.0.3.0.101-linux.x86_64.rpm",children:"RPM"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://cdn.azul.com/zing-zvm/ZVM24.07.0.0/zing24.07.0.0-3-jdk21.0.3.0.101-linux_x64.tar.gz",children:"TAR.GZ"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://cdn.azul.com/zing-zvm/ZVM24.07.0.0/zing24.07.0.0-3-jdk21.0.3.0.101-linux_amd64.deb",children:"DEB"})}),"\n",(0,t.jsx)(n.h2,{id:"\u4e00\u4e9b\u7279\u6b8a\u60c5\u51b5",children:"\u4e00\u4e9b\u7279\u6b8a\u60c5\u51b5"}),"\n",(0,t.jsx)(n.p,{children:"zing\u548cmariadb\u4e0d\u8981\u4e00\u8d77\u7528"})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},18355:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var t=i(30758);const l={},s=t.createContext(l);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
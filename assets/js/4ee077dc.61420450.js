"use strict";(self.webpackChunkall_alone=self.webpackChunkall_alone||[]).push([[595],{9952:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var i=t(5893),r=t(1151);const s={slug:"three-tier-switch-vlan",title:"\u5229\u7528\u4e09\u5c42\u4ea4\u6362\u673a\u5b9e\u73b0VLAN \u95f4\u8def\u7531",authors:["jianlang"]},l=void 0,d={permalink:"/three-tier-switch-vlan",source:"@site/blog/2024-1-30-\u200b\u5229\u7528\u4e09\u5c42\u4ea4\u6362\u673a\u5b9e\u73b0VLAN \u95f4\u8def\u7531/index.md",title:"\u5229\u7528\u4e09\u5c42\u4ea4\u6362\u673a\u5b9e\u73b0VLAN \u95f4\u8def\u7531",description:"\u5b9e\u9a8c\u4ecb\u7ecd",date:"2024-01-30T00:00:00.000Z",formattedDate:"2024\u5e741\u670830\u65e5",tags:[],readingTime:5.015,hasTruncateMarker:!1,authors:[{name:"all-alone",title:"\u4f5c\u8005",url:"https://space.bilibili.com/21977351",imageURL:"https://static.cocomoe.cn/img/allalone-face.jpg",key:"jianlang"}],frontMatter:{slug:"three-tier-switch-vlan",title:"\u5229\u7528\u4e09\u5c42\u4ea4\u6362\u673a\u5b9e\u73b0VLAN \u95f4\u8def\u7531",authors:["jianlang"]},unlisted:!1,nextItem:{title:"\u5229\u7528\u5355\u81c2\u8def\u7531\u5b9e\u73b0VLAN\u95f4\u8def\u7531",permalink:"/one-armed-routing-vlan"}},c={authorsImageUrls:[void 0]},h=[{value:"\u5b9e\u9a8c\u4ecb\u7ecd",id:"\u5b9e\u9a8c\u4ecb\u7ecd",level:2},{value:"\u5173\u4e8e\u672c\u5b9e\u9a8c\u7684\u6240\u9700\u8981\u7684\u77e5\u8bc6\u70b9\u8865\u5145",id:"\u5173\u4e8e\u672c\u5b9e\u9a8c\u7684\u6240\u9700\u8981\u7684\u77e5\u8bc6\u70b9\u8865\u5145",level:3},{value:"\u5b9e\u9a8c\u76ee\u7684",id:"\u5b9e\u9a8c\u76ee\u7684",level:3},{value:"\u5b9e\u9a8c\u5185\u5bb9",id:"\u5b9e\u9a8c\u5185\u5bb9",level:3},{value:"\u5b9e\u9a8c\u62d3\u6251",id:"\u5b9e\u9a8c\u62d3\u6251",level:3},{value:"\u5b9e\u9a8c\u7f16\u5740",id:"\u5b9e\u9a8c\u7f16\u5740",level:3},{value:"\u57fa\u672c\u914d\u7f6e",id:"\u57fa\u672c\u914d\u7f6e",level:2},{value:"\u5176\u4ed6\u64cd\u4f5c",id:"\u5176\u4ed6\u64cd\u4f5c",level:3},{value:"\u7ed3\u679c\u9a8c\u8bc1",id:"\u7ed3\u679c\u9a8c\u8bc1",level:2}];function a(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u5b9e\u9a8c\u4ecb\u7ecd",children:"\u5b9e\u9a8c\u4ecb\u7ecd"}),"\n",(0,i.jsx)(n.h3,{id:"\u5173\u4e8e\u672c\u5b9e\u9a8c\u7684\u6240\u9700\u8981\u7684\u77e5\u8bc6\u70b9\u8865\u5145",children:"\u5173\u4e8e\u672c\u5b9e\u9a8c\u7684\u6240\u9700\u8981\u7684\u77e5\u8bc6\u70b9\u8865\u5145"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"vlanif"})}),"\n",(0,i.jsx)(n.p,{children:"VLANIF\uff08Virtual Local Area Network Interface\uff09\u662f\u4e00\u79cd\u865a\u62df\u5c40\u57df\u7f51\u63a5\u53e3\uff0c\u5b83\u662f\u57fa\u4e8e VLAN \u6280\u672f\u7684\u6269\u5c55\u3002\u5728\u7f51\u7edc\u4e2d\uff0cVLAN \u662f\u4e00\u79cd\u5c06\u5c40\u57df\u7f51\u5212\u5206\u6210\u591a\u4e2a\u865a\u62df\u5c40\u57df\u7f51\u7684\u6280\u672f\uff0c\u53ef\u4ee5\u5728\u5355\u4e2a\u7269\u7406\u7f51\u7edc\u4e2d\u5b9e\u73b0\u903b\u8f91\u4e0a\u7684\u9694\u79bb\u548c\u5212\u5206\u3002\u800c VLANIF \u5c31\u662f\u5728\u6bcf\u4e2a\u865a\u62df\u5c40\u57df\u7f51\u4e2d\u521b\u5efa\u7684\u4e00\u4e2a\u865a\u62df\u63a5\u53e3\uff0c\u7528\u4e8e\u4e0e\u8be5\u865a\u62df\u5c40\u57df\u7f51\u5185\u7684\u8bbe\u5907\u8fdb\u884c\u4ea4\u4e92\u548c\u901a\u4fe1\u3002VLANIF \u63a5\u53e3\u53ef\u4ee5\u914d\u7f6e IP \u5730\u5740\u548c\u5176\u4ed6\u7f51\u7edc\u53c2\u6570\uff0c\u5b9e\u73b0\u865a\u62df\u5c40\u57df\u7f51\u4e2d\u7684\u4e92\u8054\u548c\u901a\u4fe1\u529f\u80fd\u3002\u5b83\u5728\u7f51\u7edc\u4e2d\u8d77\u5230\u8fde\u63a5\u4e0d\u540c VLAN \u4e4b\u95f4\u7684\u6865\u6881\u4f5c\u7528\uff0c\u53ef\u4ee5\u5c06\u4e0d\u540c\u7684 VLAN \u5212\u5206\u6210\u591a\u4e2a\u5b50\u7f51\uff0c\u5e76\u63d0\u4f9b\u8def\u7531\u529f\u80fd\uff0c\u5b9e\u73b0\u4e0d\u540c\u5b50\u7f51\u4e4b\u95f4\u7684\u901a\u4fe1\u3002"}),"\n",(0,i.jsx)(n.p,{children:"VLANIF \u4e4b\u95f4\u7684\u8def\u7531\u662f\u6307\u4e0d\u540c VLANIF \u63a5\u53e3\u4e4b\u95f4\u8fdb\u884c\u7f51\u7edc\u8def\u7531\u7684\u8fc7\u7a0b\u3002\u5728\u4e00\u4e2a\u7f51\u7edc\u4e2d\uff0c\u6bcf\u4e2a VLANIF \u63a5\u53e3\u90fd\u4ee3\u8868\u4e00\u4e2a\u865a\u62df\u5c40\u57df\u7f51\uff0c\u800c\u8fd9\u4e9b\u865a\u62df\u5c40\u57df\u7f51\u53ef\u80fd\u5b58\u5728\u8de8\u7f51\u6bb5\u7684\u901a\u4fe1\u9700\u6c42\u3002\u4e3a\u4e86\u5b9e\u73b0\u4e0d\u540c VLANIF \u4e4b\u95f4\u7684\u901a\u4fe1\uff0c\u9700\u8981\u8fdb\u884c\u8def\u7531\u914d\u7f6e\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u8def\u7531\u5668\u6216\u4e09\u5c42\u4ea4\u6362\u673a\u4e0a\uff0c\u9700\u8981\u521b\u5efa\u865a\u62df\u63a5\u53e3\u5e76\u5c06\u5176\u5206\u914d\u7ed9\u76f8\u5e94\u7684 VLAN\u3002\u8fd9\u4e9b\u865a\u62df\u63a5\u53e3\u901a\u5e38\u79f0\u4e3a SVI\uff08Switched Virtual Interface\uff09\uff0c\u6bcf\u4e2a SVI \u4e0e\u4e00\u4e2a VLAN \u5173\u8054\u3002\u901a\u8fc7\u5728 SVI \u4e0a\u914d\u7f6e IP \u5730\u5740\u548c\u5b50\u7f51\u63a9\u7801\uff0c\u53ef\u4ee5\u4e3a\u6bcf\u4e2a VLAN \u521b\u5efa\u4e00\u4e2a\u865a\u62df\u7f51\u5173\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5f53\u6570\u636e\u5305\u4ece\u4e00\u4e2a VLANIF \u63a5\u53e3\u53d1\u9001\u5230\u53e6\u4e00\u4e2a VLANIF \u63a5\u53e3\u65f6\uff0c\u6570\u636e\u5305\u9996\u5148\u5230\u8fbe\u8def\u7531\u5668\u6216\u4e09\u5c42\u4ea4\u6362\u673a\u4e0a\u7684 SVI \u63a5\u53e3\u3002\u7136\u540e\uff0c\u6839\u636e\u8def\u7531\u8868\u4e2d\u7684\u8def\u7531\u4fe1\u606f\uff0c\u51b3\u5b9a\u6570\u636e\u5305\u5e94\u8be5\u88ab\u53d1\u9001\u5230\u54ea\u4e2a\u76ee\u6807 VLANIF \u63a5\u53e3\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u901a\u8fc7\u5728\u8def\u7531\u5668\u6216\u4e09\u5c42\u4ea4\u6362\u673a\u4e0a\u914d\u7f6e\u9002\u5f53\u7684\u8def\u7531\u7b56\u7565\u548c\u8def\u7531\u534f\u8bae\uff0c\u53ef\u4ee5\u5b9e\u73b0 VLANIF \u4e4b\u95f4\u7684\u4e92\u8054\u548c\u901a\u4fe1\u3002\u8fd9\u6837\uff0c\u4e0d\u540c VLAN \u4e2d\u7684\u4e3b\u673a\u5c31\u53ef\u4ee5\u901a\u8fc7 VLANIF \u4e4b\u95f4\u7684\u8def\u7531\u8fdb\u884c\u4e92\u76f8\u8bbf\u95ee\u548c\u901a\u4fe1\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u5b9e\u9a8c\u76ee\u7684",children:"\u5b9e\u9a8c\u76ee\u7684"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u638c\u63e1\u914d\u7f6eVLANIF\u63a5\u53e3\u7684\u65b9\u6cd5"}),"\n",(0,i.jsx)(n.li,{children:"\u7406\u89e3\u6570\u636e\u5305\u8de8VLAN\u8def\u7531\u7684\u539f\u7406"}),"\n",(0,i.jsx)(n.li,{children:"\u638c\u63e1\u6d4b\u8bd5\u591a\u5c42\u4ea4\u6362\u7f51\u7edc\u8fde\u901a\u6027\u7684\u65b9\u6cd5"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u5b9e\u9a8c\u5185\u5bb9",children:"\u5b9e\u9a8c\u5185\u5bb9"}),"\n",(0,i.jsx)(n.p,{children:"\u672c\u5b9e\u9a8c\u6a21\u62df\u4f01\u4e1a\u7f51\u7edc\u573a\u666f\u3002\u516c\u53f8\u6709\u4e24\u4e2a\u90e8\u95e8--\u9500\u552e\u90e8\u548c\u5ba2\u670d\u90e8\uff0c\u5206\u522b\u89c4\u5212\u4f7f\u7528VLAN 10\u548cVLAN20\u3002\u5176\u4e2d\u9500\u552e\u90e8\u4e0b\u6709\u4e24\u53f0\u7ec8\u7aefPC-1\u548cPC-2\uff0c\u5ba2\u670d\u90e8\u4e0b\u6709\u4e00\u53f0\u7ec8\u7aefPC-3\u3002\u6240\u6709\u7ec8\u7aef\u90fd\u901a\u8fc7\u6838\u5fc3\u4e09\u5c42\u4ea4\u6362\u673aS1\u76f8\u8fde\u3002\u73b0\u9700\u8981\u8ba9\u8be5\u516c\u53f8\u6240\u6709\u4e09\u53f0\u4e3b\u673a\u90fd\u80fd\u5b9e\u73b0\u4e92\u76f8\u8bbf\u95ee\uff0c\u7f51\u7edc\u7ba1\u7406\u5458\u5c06\u901a\u8fc7\u914d\u7f6e\u4e09\u5c42\u4ea4\u6362\u673a\u6765\u5b9e\u73b0\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u5b9e\u9a8c\u62d3\u6251",children:"\u5b9e\u9a8c\u62d3\u6251"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(702).Z+"",width:"829",height:"639"})}),"\n",(0,i.jsx)(n.h3,{id:"\u5b9e\u9a8c\u7f16\u5740",children:"\u5b9e\u9a8c\u7f16\u5740"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"\u8bbe\u5907"}),(0,i.jsx)("th",{children:"\u63a5\u53e3"}),(0,i.jsx)("th",{children:"IP\u5730\u5740/\u63a9\u7801"}),(0,i.jsx)("th",{children:"\u7f51\u5173"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"PC1"}),(0,i.jsx)("td",{children:"E0/0/1"}),(0,i.jsx)("td",{children:"192.168.1.1/24"}),(0,i.jsx)("td",{children:"192.168.1.254"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"PC2"}),(0,i.jsx)("td",{children:"E0/0/1"}),(0,i.jsx)("td",{children:"192.168.1.2/24"}),(0,i.jsx)("td",{children:"192.168.1.254"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"PC3"}),(0,i.jsx)("td",{children:"E0/0/1"}),(0,i.jsx)("td",{children:"192.168.2.1/24"}),(0,i.jsx)("td",{children:"192.168.2.254"})]}),(0,i.jsx)("tr",{children:(0,i.jsx)("th",{rowspan:"4",children:"S1"})}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"VLANIF10"}),(0,i.jsx)("td",{children:"192.168.1.254"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"VLANIF20"}),(0,i.jsx)("td",{children:"192.168.2.254"})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u57fa\u672c\u914d\u7f6e",children:"\u57fa\u672c\u914d\u7f6e"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(6817).Z+"",width:"781",height:"533"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(9373).Z+"",width:"781",height:"533"})}),"\n",(0,i.jsx)(n.h3,{id:"\u5176\u4ed6\u64cd\u4f5c",children:"\u5176\u4ed6\u64cd\u4f5c"}),"\n",(0,i.jsx)(n.p,{children:"\u914d\u7f6e\u4e09\u5c42\u4ea4\u6362\u673a\u5b9e\u73b0VLAN\u95f4\u901a\u4fe1\u901a\u8fc7\u5728\u4ea4\u6362\u673a\u4e0a\u8bbe\u7f6e\u4e0d\u540c\u7684VLAN\u4f7f\u5f97\u4e3b\u673a\u5b9e\u73b0\u76f8\u4e92\u9694\u79bb\u3002\u5728\u4e09\u5c42\u4ea4\u6362\u673aS1\u4e0a\u521b\u5efaVLAN10\u548cVLAN 20\uff0c\u628a\u9500\u552e\u90e8\u7684\u4e3b\u673a\u5168\u90e8\u5212\u5165VLAN 10 \u4e2d\uff0c\u5ba2\u670d\u90e8\u7684\u4e3b\u673a\u5212\u5165VLAN 20 \u4e2d\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\r\n[S1]vlan 10\r\n\r\n[S1-vlan10]vlan 20\r\n\r\n[S1-vlan20]interface GigabitEthernet0/0/1\r\n\r\n[S1-GigabitEthernet0/0/1]port link-type access\r\n\r\n[S1-GigabitEthernet0/0/1]port default VLAN 10\r\n\r\n[S1-GigabitEthernet0/0/1]interface GigabitEthernet0/0/2\r\n\r\n[S1-GigabitEthernet0/0/2]port link-type access\r\n\r\n[S1-GigabitEthernet0/0/2]port default VLAN 10\r\n\r\n[S1-GigabitEthernet0/0/2]interface GigabitEthernet0/0/3\r\n\r\n[S1-GigabitEthernet0/0/3]port link-type access\r\n\r\n[S1-GigabitEthernet0/0/3]port default VLAN 20\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728S1\u4e0a\u4f7f\u7528 interface VLANif\u547d\u4ee4\u521b\u5efa VLANIF \u63a5\u53e3\uff0c\u6307\u5b9aVLANIF \u63a5\u53e3\u6240\u5bf9\u5e94\u7684 VLAN ID \u4e3a10\uff0c\u5e76\u8fdb\u5165 VLANIF \u63a5\u53e3\u89c6\u56fe\uff0c\u5728\u63a5\u53e3\u89c6\u56fe\u4e0b\u914d\u7f6eIP \u5730\u5740192.168.1.254/24\u3002\u518d\u521b\u5efa \u5bf9\u5e94 VLAN 20 \u7684VLANIF \u63a5\u53e3\uff0c\u5730\u5740\u914d\u7f6e\u4e3a192.168.2.254/24\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\r\n[S1]interface VLANif 10\r\n\r\n[S1-VLANif10]ip address 192.168.1.254 24\r\n\r\n[S1-VLANif10]interface VLANif 20\r\n\r\n[S1-VLANif20]ip address 192.168.2.254 24\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u67e5\u770b\u63a5\u53e3\u72b6\u6001\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(5728).Z+"",width:"781",height:"533"})}),"\n",(0,i.jsx)(n.h2,{id:"\u7ed3\u679c\u9a8c\u8bc1",children:"\u7ed3\u679c\u9a8c\u8bc1"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(5442).Z+"",width:"1080",height:"419"})}),"\n",(0,i.jsx)(n.p,{children:"\u53ef\u89c1\u901a\u4fe1\u6b63\u5e38\uff0c\u5b9e\u73b0\u4e86\u9500\u552e\u90e8\u7ec8\u7aef\u4e0e\u5ba2\u670d\u90e8\u7ec8\u7aef\u95f4\u7684\u901a\u4fe1\u3002PC-2\u4e0a\u7684\u6d4b\u8bd5\u7701\u7565\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u672c\u6587\u5b8c"})})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},702:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/1-9c6d9cb29b3b04af4b85058a5449f57a.png"},6817:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/2-00ad94d77e6a08b351a3a2496f90fdfe.png"},9373:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/3-aaaff95d4ae76d08702f0b0558bb6734.png"},5728:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/4-3447e00ceb6bc743cf134e2ecd49752d.png"},5442:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/5-02b8910fe077072e45f68534851f8ad3.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>l});var i=t(7294);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
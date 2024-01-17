"use strict";(self.webpackChunkcasibase_website=self.webpackChunkcasibase_website||[]).push([[98],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=r,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2968:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={title:"Chat with AI",description:"Implement AI chat functionality in your Casibase knowledge base system.",keywords:["Casibase","AI Chat","Chatbot Implementation","Knowledge"],authors:["kv-chiu"]},o=void 0,s={unversionedId:"walkthrough-guides/chat-with-ai",id:"walkthrough-guides/chat-with-ai",title:"Chat with AI",description:"Implement AI chat functionality in your Casibase knowledge base system.",source:"@site/docs/walkthrough-guides/chat-with-ai.md",sourceDirName:"walkthrough-guides",slug:"/walkthrough-guides/chat-with-ai",permalink:"/de/docs/walkthrough-guides/chat-with-ai",draft:!1,editUrl:"https://github.com/casibase/casibase-website/edit/master/docs/walkthrough-guides/chat-with-ai.md",tags:[],version:"current",frontMatter:{title:"Chat with AI",description:"Implement AI chat functionality in your Casibase knowledge base system.",keywords:["Casibase","AI Chat","Chatbot Implementation","Knowledge"],authors:["kv-chiu"]},sidebar:"tutorialSidebar",previous:{title:"Add a Store",permalink:"/de/docs/walkthrough-guides/add-a-store"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Step 1: Add a New Chat",id:"step-1-add-a-new-chat",level:3},{value:"Step 2: Send a Message",id:"step-2-send-a-message",level:3},{value:"Step 3: Knowledge Base Chat",id:"step-3-knowledge-base-chat",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:d},p="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document is a step-by-step tutorial designed for beginners. It will guide you through the process of implementing AI chat functionality in your Casibase knowledge base system."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In previous sections, we have deployed Casdoor and Casibase, integrated a storage provider, a model provider, and a embedding provider with Casibase, and added a store to use these providers."),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/de/docs/walkthrough-guides/add-a-store"},"Add a Store")," section of our previous documentation for more information about stores."),(0,r.kt)("p",null,"Now, let's implement AI chat functionality in Casibase."),(0,r.kt)("h3",{id:"step-1-add-a-new-chat"},"Step 1: Add a New Chat"),(0,r.kt)("p",null,"Click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Chats")," button on the home page and then click the ",(0,r.kt)("inlineCode",{parentName:"p"},"New Chat")," button to add a chat."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Casibase-chats-add",src:a(2310).Z,width:"2556",height:"1391"})),(0,r.kt)("h3",{id:"step-2-send-a-message"},"Step 2: Send a Message"),(0,r.kt)("p",null,"Write a message and click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Send")," button to send it."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Casibase-chats-davinci003",src:a(9310).Z,width:"2178",height:"276"})),(0,r.kt)("h3",{id:"step-3-knowledge-base-chat"},"Step 3: Knowledge Base Chat"),(0,r.kt)("p",null,"Addtionally, you can chat with the chatbot in the knowledge base."),(0,r.kt)("p",null,"There are some requirements for the knowledge base chat:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The knowledge base must have a store."),(0,r.kt)("li",{parentName:"ul"},"The store must have a model provider."),(0,r.kt)("li",{parentName:"ul"},"The store must have a embedding provider."),(0,r.kt)("li",{parentName:"ul"},"The store must have a storage provider."),(0,r.kt)("li",{parentName:"ul"},"The storage provider must have a readable document (e.g. a markdown file, docx file and pdf file).")),(0,r.kt)("p",null,"Once you have met these requirements, you can return to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Stores")," page and click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Refresh Vectors")," button to embedding the knowledge base data."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Casibase-stores-refresh-button",src:a(8798).Z,width:"2556",height:"421"})),(0,r.kt)("p",null,"The button will be disabled when the embedding is in progress."),(0,r.kt)("p",null,"After the embedding is complete, you can click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Vectors")," button in the navigation bar to view the vectors."),(0,r.kt)("p",null,"Result:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Casibase-vectors-refresh-result",src:a(5745).Z,width:"2555",height:"635"})),(0,r.kt)("p",null,"Let's ",(0,r.kt)("strong",{parentName:"p"},"chat with the chatbot in the knowledge base"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Casibase-chats-get-answer",src:a(1).Z,width:"2187",height:"293"})),(0,r.kt)("p",null,"Compare the results with ",(0,r.kt)("strong",{parentName:"p"},"non-knowledge base chat"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Casibase-chats-answer-wrong-casdoor",src:a(7117).Z,width:"2184",height:"316"})),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The embedding rate is related two factors:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"The documents in the knowledge base.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Documents number: The more documents, the longer the embedding time."),(0,r.kt)("li",{parentName:"ul"},"Documents size: The larger the document size, the longer the embedding time."))),(0,r.kt)("li",{parentName:"ul"},"The embedding provider.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Api rate limit: The more api rate limit, the faster the embedding speed."),(0,r.kt)("li",{parentName:"ul"},"Api concurrency: The more api concurrency, the faster the embedding speed.")))),(0,r.kt)("p",{parentName:"admonition"},"For example, if you use the ",(0,r.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference"},"OpenAI API")," as the embedding provider, the embedding rate is related to the ",(0,r.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference"},"OpenAI API")," rate limit and concurrency.")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this guide, we have learned how to implement AI chat functionality in Casibase."),(0,r.kt)("p",null,"Now, you can chat with the chatbot in Casibase. Enjoy it!"),(0,r.kt)("p",null,"More information about Casibase can be found in the ",(0,r.kt)("a",{parentName:"p",href:"../basic/core-concepts"},"Core Concepts")," section of our documentation."))}h.isMDXComponent=!0},2310:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/casibase-chats-add-2f803a5a3bc0d2b690a2c5974d1ea4d2.png"},7117:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/casibase-chats-answer-wrong-casdoor-25dffc5ca07ee6be37552f410a6e7f48.png"},9310:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/casibase-chats-davinci003-9d35009f1c0872b8fa7a2647129e496e.png"},1:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/casibase-chats-get-answer-56ab4b974c6ff56a428569a003a01f02.png"},8798:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/casibase-stores-refresh-button-c201cac1a7c7bcc9190664da13e397e4.png"},5745:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/casibase-vectors-refresh-result-8fdb6b219031b415836c2e978d5bddf0.png"}}]);
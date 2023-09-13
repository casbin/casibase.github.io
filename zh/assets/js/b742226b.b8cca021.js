"use strict";(self.webpackChunkcasibase_website=self.webpackChunkcasibase_website||[]).push([[989],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.createContext({}),l=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},p=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=l(r),m=a,b=c["".concat(s,".").concat(m)]||c[m]||u[m]||n;return r?i.createElement(b,d(d({ref:t},p),{},{components:r})):i.createElement(b,d({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,d=new Array(n);d[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,d[1]=o;for(var l=2;l<n;l++)d[l]=r[l];return i.createElement.apply(null,d)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1049:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var i=r(7462),a=(r(7294),r(3905));const n={title:"Add an Embedding Provider",description:"Explore how to integrate an embedding provider with Casibase.",keywords:["Casibase","Embedding Provider","Integration"],authors:["kv-chiu"]},d=void 0,o={unversionedId:"walkthrough-guides/add-a-embedding-provider",id:"walkthrough-guides/add-a-embedding-provider",title:"Add an Embedding Provider",description:"Explore how to integrate an embedding provider with Casibase.",source:"@site/docs/walkthrough-guides/add-a-embedding-provider.md",sourceDirName:"walkthrough-guides",slug:"/walkthrough-guides/add-a-embedding-provider",permalink:"/zh/docs/walkthrough-guides/add-a-embedding-provider",draft:!1,editUrl:"https://github.com/casbin/casibase-website/edit/master/docs/walkthrough-guides/add-a-embedding-provider.md",tags:[],version:"current",frontMatter:{title:"Add an Embedding Provider",description:"Explore how to integrate an embedding provider with Casibase.",keywords:["Casibase","Embedding Provider","Integration"],authors:["kv-chiu"]},sidebar:"tutorialSidebar",previous:{title:"Add a Model Provider",permalink:"/zh/docs/walkthrough-guides/add-a-model-provider"},next:{title:"Add a Store",permalink:"/zh/docs/walkthrough-guides/add-a-store"}},s={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Step 1: Deploy Casdoor and Casibase",id:"step-1-deploy-casdoor-and-casibase",level:3},{value:"Step 2: Add a New Embedding Provider",id:"step-2-add-a-new-embedding-provider",level:3},{value:"Step 2.1: Add an Embedding Provider",id:"step-21-add-an-embedding-provider",level:4},{value:"Step 2.2: Fill in Embedding Provider Details",id:"step-22-fill-in-embedding-provider-details",level:4}],p={toc:l},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document is a step-by-step tutorial designed for beginners. It will guide you through the process of integrating an embedding provider with Casibase, our powerful knowledge base system."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Embedding is a technique used to represent words and documents as vectors. Embedding providers allow you to analyze and process data within your knowledge base system, making it more intelligent and efficient."),(0,a.kt)("p",null,"Refer to the ",(0,a.kt)("a",{parentName:"p",href:"../basic/core-concepts"},"Core Concepts")," section of our previous documentation for more information about embedding."),(0,a.kt)("p",null,"In Casibase, you can add an embedding provider by following these steps:"),(0,a.kt)("h3",{id:"step-1-deploy-casdoor-and-casibase"},"Step 1: Deploy Casdoor and Casibase"),(0,a.kt)("p",null,"Before you can add an embedding provider, make sure you have Casdoor and Casibase deployed. If you haven't done this yet, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"./deploy-casdoor-and-casibase"},"Deploy Casdoor and Casibase")," tutorial in our previous documentation."),(0,a.kt)("h3",{id:"step-2-add-a-new-embedding-provider"},"Step 2: Add a New Embedding Provider"),(0,a.kt)("p",null,"Embedding providers are used to integrate embedding into Casibase. You can add them by following these steps:"),(0,a.kt)("p",null,"Click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Providers")," button on the home page."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Casibase-home-providers",src:r(3121).Z,width:"955",height:"239"})),(0,a.kt)("h4",{id:"step-21-add-an-embedding-provider"},"Step 2.1: Add an Embedding Provider"),(0,a.kt)("p",null,"Click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Add")," button to add an embedding provider."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Casibase-providers-add",src:r(8817).Z,width:"2554",height:"530"})),(0,a.kt)("h4",{id:"step-22-fill-in-embedding-provider-details"},"Step 2.2: Fill in Embedding Provider Details"),(0,a.kt)("p",null,"Fill in the embedding provider details and click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Save & Exit")," button."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Casibase-embedding",src:r(1881).Z,width:"807",height:"877"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Same as the ",(0,a.kt)("a",{parentName:"p",href:"./add-a-model-provider"},"Model Provider")," section, Casibase supports many embedding providers, including:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://openai.com/"},"OpenAI"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"AdaSimilarity"),(0,a.kt)("li",{parentName:"ul"},"DavinciSimilarity"),(0,a.kt)("li",{parentName:"ul"},"AdaEmbedding2"),(0,a.kt)("li",{parentName:"ul"},"......"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://huggingface.co/"},"Hugging Face"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"sentence-transformers/paraphrase-MiniLM-L6-v2"),(0,a.kt)("li",{parentName:"ul"},"......"))))),(0,a.kt)("p",null,"Return providers list page:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Casibase-embedding-view",src:r(2247).Z,width:"2557",height:"462"})),(0,a.kt)("p",null,"Now, you can use the embedding provider to convert text to vectors."),(0,a.kt)("p",null,"After adding an embedding provider, you can use it to retrieve similar documents in Casibase. For more information, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"../basic/core-concepts"},"Core Concepts")," section of our previous documentation."),(0,a.kt)("p",null,"In the next chapter, we will learn how to integrate storage providers, model providers, and embedding providers with Casibase."))}u.isMDXComponent=!0},1881:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/casibase-embedding-form-39b4bcbcc5c0e814b079f1bb011c1dcd.png"},2247:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/casibase-embedding-view-63f8150df1abb68f99f7c1b7b4933588.png"},3121:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/casibase-home-providers-da0f899a33ea4fa9669b842db7d54722.png"},8817:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/casibase-providers-add-21905bc315cae875893c457fac06a826.png"}}]);
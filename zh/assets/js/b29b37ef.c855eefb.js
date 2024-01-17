"use strict";(self.webpackChunkcasibase_website=self.webpackChunkcasibase_website||[]).push([[290],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),c=l(a),h=o,g=c["".concat(i,".").concat(h)]||c[h]||u[h]||s;return a?r.createElement(g,d(d({ref:t},p),{},{components:a})):r.createElement(g,d({ref:t},p))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,d=new Array(s);d[0]=h;var n={};for(var i in t)hasOwnProperty.call(t,i)&&(n[i]=t[i]);n.originalType=e,n[c]="string"==typeof e?e:o,d[1]=n;for(var l=2;l<s;l++)d[l]=a[l];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3838:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>n,toc:()=>l});var r=a(7462),o=(a(7294),a(3905));const s={title:"Add a Store",description:"Learn how to add a store to your Casibase knowledge base system.",keywords:["Casibase","Add a Store","Data Storage","Knowledge Base"],authors:["kv-chiu"]},d=void 0,n={unversionedId:"walkthrough-guides/add-a-store",id:"walkthrough-guides/add-a-store",title:"Add a Store",description:"Learn how to add a store to your Casibase knowledge base system.",source:"@site/docs/walkthrough-guides/add-a-store.md",sourceDirName:"walkthrough-guides",slug:"/walkthrough-guides/add-a-store",permalink:"/zh/docs/walkthrough-guides/add-a-store",draft:!1,editUrl:"https://github.com/casibase/casibase-website/edit/master/docs/walkthrough-guides/add-a-store.md",tags:[],version:"current",frontMatter:{title:"Add a Store",description:"Learn how to add a store to your Casibase knowledge base system.",keywords:["Casibase","Add a Store","Data Storage","Knowledge Base"],authors:["kv-chiu"]},sidebar:"tutorialSidebar",previous:{title:"Add an Embedding Provider",permalink:"/zh/docs/walkthrough-guides/add-a-embedding-provider"},next:{title:"Chat with AI",permalink:"/zh/docs/walkthrough-guides/chat-with-ai"}},i={},l=[{value:"Step 1: Add a New Store",id:"step-1-add-a-new-store",level:3},{value:"Step 2: Fill in Store Details",id:"step-2-fill-in-store-details",level:3}],p={toc:l},c="wrapper";function u(e){let{components:t,...s}=e;return(0,o.kt)(c,(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We have add a storage provider, a model provider, and a embedding provider. Now we need to configure a store to use these providers."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This guide assumes that you have already deployed a Casibase knowledge base system. If you have not, please follow the ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/walkthrough-guides/deploy-casdoor-and-casibase"},"Deploy Casdoor and Casibase")," guide."),(0,o.kt)("p",{parentName:"admonition"},"Besides, this guide assumes that you have already added a storage provider, a model provider, and a embedding provider. If you have not, please follow the ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/walkthrough-guides/add-a-storage-provider"},"Add a Storage Provider"),", ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/walkthrough-guides/add-a-model-provider"},"Add a Model Provider"),", and ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/walkthrough-guides/add-a-embedding-provider"},"Add a Embedding Provider")," guides.")),(0,o.kt)("h3",{id:"step-1-add-a-new-store"},"Step 1: Add a New Store"),(0,o.kt)("p",null,"Stores are used to integrate storage, model, and embedding providers into Casibase. You can add them by following these steps:"),(0,o.kt)("p",null,"Click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Stores")," button on the home page and then click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Add")," button to add a store."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Casibase-stores-add",src:a(7840).Z,width:"957",height:"369"})),(0,o.kt)("h3",{id:"step-2-fill-in-store-details"},"Step 2: Fill in Store Details"),(0,o.kt)("p",null,"Fill in the store details and click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Save & Exit")," button."),(0,o.kt)("p",null,"This part we have done if you follow the ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/walkthrough-guides/add-a-storage-provider"},"Add a Storage Provider")," guides."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Casibase-stores-form-preview",src:a(6085).Z,width:"2552",height:"1394"})),(0,o.kt)("p",null,"Select the storage provider, model provider, and embedding provider you added before."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Casibase-stores-select",src:a(1201).Z,width:"1299",height:"1329"})),(0,o.kt)("p",null,"Click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Save & Exit")," button and return stores list page:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Casibase-stores-view",src:a(8587).Z,width:"2549",height:"408"})),(0,o.kt)("p",null,"Now, you can use the store to store knowledge base data, convert text to vectors, and chat with the chatbot."),(0,o.kt)("p",null,"In the next section, we will learn how to chat with the chatbot in Casibase."))}u.isMDXComponent=!0},7840:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/casibase-stores-add-8521a0f17c4205e623afdab45193e951.png"},6085:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/casibase-stores-form-preview-b8e0b00c72c9daeb0c0d6d157ccf6832.png"},1201:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/casibase-stores-select-e6ff79d0506b328b53582c3b0ecb40c4.png"},8587:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/casibase-stores-view-cdc32bb3028e5cd2f75c1b99e5d9075d.png"}}]);
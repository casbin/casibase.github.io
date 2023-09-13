"use strict";(self.webpackChunkcasibase_website=self.webpackChunkcasibase_website||[]).push([[411],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=r.createContext({}),p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},l=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=o,m=c["".concat(d,".").concat(u)]||c[u]||g[u]||i;return a?r.createElement(m,n(n({ref:t},l),{},{components:a})):r.createElement(m,n({ref:t},l))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:o,n[1]=s;for(var p=2;p<i;p++)n[p]=a[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1029:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(7462),o=(a(7294),a(3905));const i={title:"Add a Storage Provider",description:"Discover how to integrate a storage provider with Casibase.",keywords:["Casibase","Storage Provider","Integration"],authors:["kv-chiu"]},n=void 0,s={unversionedId:"walkthrough-guides/add-a-storage-provider",id:"walkthrough-guides/add-a-storage-provider",title:"Add a Storage Provider",description:"Discover how to integrate a storage provider with Casibase.",source:"@site/docs/walkthrough-guides/add-a-storage-provider.md",sourceDirName:"walkthrough-guides",slug:"/walkthrough-guides/add-a-storage-provider",permalink:"/ko/docs/walkthrough-guides/add-a-storage-provider",draft:!1,editUrl:"https://github.com/casbin/casibase-website/edit/master/docs/walkthrough-guides/add-a-storage-provider.md",tags:[],version:"current",frontMatter:{title:"Add a Storage Provider",description:"Discover how to integrate a storage provider with Casibase.",keywords:["Casibase","Storage Provider","Integration"],authors:["kv-chiu"]},sidebar:"tutorialSidebar",previous:{title:"Deploy Casdoor and Casibase",permalink:"/ko/docs/walkthrough-guides/deploy-casdoor-and-casibase"},next:{title:"Add a Model Provider",permalink:"/ko/docs/walkthrough-guides/add-a-model-provider"}},d={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Step 1: Deploy Casdoor and Casibase",id:"step-1-deploy-casdoor-and-casibase",level:3},{value:"Step 2: Add a New Storage Provider",id:"step-2-add-a-new-storage-provider",level:3},{value:"Step 2.1: Add a storage provider",id:"step-21-add-a-storage-provider",level:4},{value:"Step 2.2: Fill in the storage provider information",id:"step-22-fill-in-the-storage-provider-information",level:4},{value:"Add an Aliyun OSS storage provider",id:"add-an-aliyun-oss-storage-provider",level:5},{value:"Step 2.3: View the storage provider",id:"step-23-view-the-storage-provider",level:4},{value:"Step 3: Add a New Storage Provider to Casibase",id:"step-3-add-a-new-storage-provider-to-casibase",level:3},{value:"Step 3.1: Add a storage provider",id:"step-31-add-a-storage-provider",level:4},{value:"Step 3.2: Fill in the storage provider information",id:"step-32-fill-in-the-storage-provider-information",level:4}],l={toc:p},c="wrapper";function g(e){let{components:t,...i}=e;return(0,o.kt)(c,(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document is a step-by-step tutorial designed for beginners. It will guide you through the process of integrating a storage provider with Casibase, our powerful knowledge base system."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Adding a storage provider to Casibase enables you to efficiently manage and store data, making it an essential component for your knowledge base system."),(0,o.kt)("p",null,"If you're new to integrating storage providers, don't worry. We've broken down the process into simple steps that anyone can follow."),(0,o.kt)("h3",{id:"step-1-deploy-casdoor-and-casibase"},"Step 1: Deploy Casdoor and Casibase"),(0,o.kt)("p",null,"In the last chapter, we learned how to deploy Casdoor and Casibase. If you haven't done so already, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"./deploy-casdoor-and-casibase"},"Deploy Casdoor and Casibase")," tutorial."),(0,o.kt)("h3",{id:"step-2-add-a-new-storage-provider"},"Step 2: Add a New Storage Provider"),(0,o.kt)("p",null,"Storage providers are used to store data. They can be added in Casdoor by clicking the ",(0,o.kt)("inlineCode",{parentName:"p"},"Identity - Providers")," button on the home page."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Casdoor-home-providers",src:a(8084).Z,width:"1088",height:"545"})),(0,o.kt)("h4",{id:"step-21-add-a-storage-provider"},"Step 2.1: Add a storage provider"),(0,o.kt)("p",null,"Click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Add")," button to add a storage provider."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Casdoor-providers-add",src:a(6655).Z,width:"819",height:"370"})),(0,o.kt)("h4",{id:"step-22-fill-in-the-storage-provider-information"},"Step 2.2: Fill in the storage provider information"),(0,o.kt)("p",null,"Fill in the storage provider information and click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Save & Exit")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Casdoor-providers-form-filling",src:a(179).Z,width:"1058",height:"993"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Casdoor supports many storage providers, including:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/s3/"},"AWS S3")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/products/storage/blobs"},"Azure Blob")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/storage"},"Google Cloud Storage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://min.io/"},"MinIO")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.qiniu.com/"},"Qiniu Cloud Kodo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.alibabacloud.com/product/oss"},"Alibaba Cloud OSS"),"\n......"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("h5",{id:"add-an-aliyun-oss-storage-provider"},"Add an Aliyun OSS storage provider"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Client ID: The AccessKey ID of your Aliyun OSS account."),(0,o.kt)("li",{parentName:"ul"},"Client Secret: The AccessKey Secret of your Aliyun OSS account.")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"****")," is the placeholder for your Aliyun OSS account information."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{alt:"Casdoor-providers-form-filling-alioss",src:a(4526).Z,width:"1094",height:"914"}))),(0,o.kt)("h4",{id:"step-23-view-the-storage-provider"},"Step 2.3: View the storage provider"),(0,o.kt)("p",null,"After adding the storage provider, you can view the storage provider information."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Casdoor-providers-view",src:a(8070).Z,width:"2496",height:"208"})),(0,o.kt)("h3",{id:"step-3-add-a-new-storage-provider-to-casibase"},"Step 3: Add a New Storage Provider to Casibase"),(0,o.kt)("p",null,"In Casibase, you can add a storage provider to manage your data. You can add a storage provider by clicking the ",(0,o.kt)("inlineCode",{parentName:"p"},"Providers - Add")," button on the home page."),(0,o.kt)("h4",{id:"step-31-add-a-storage-provider"},"Step 3.1: Add a storage provider"),(0,o.kt)("p",null,"Click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Add")," button to add a storage provider."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Casibase-stores-add",src:a(7840).Z,width:"957",height:"369"})),(0,o.kt)("h4",{id:"step-32-fill-in-the-storage-provider-information"},"Step 3.2: Fill in the storage provider information"),(0,o.kt)("p",null,"Fill in the storage provider information and click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Save & Exit")," button."),(0,o.kt)("p",null,"If Edit page is not displayed, please click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit")," button."),(0,o.kt)("p",null,"You'll see the following page:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Casibase-stores-form-preview",src:a(6085).Z,width:"2552",height:"1394"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Storage providers comes from Casdoor. You can add a storage provider in Casdoor and then add it to Casibase."),(0,o.kt)("p",{parentName:"admonition"},"Refer to ",(0,o.kt)("a",{parentName:"p",href:"#step-2-add-a-new-storage-provider"},"Step 2: Add a New Storage Provider")," for more information."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{alt:"Casibase-stores-select-storage",src:a(9341).Z,width:"1138",height:"819"}))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Store Example")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Casibase-stores-form-filling",src:a(4790).Z,width:"901",height:"712"})),(0,o.kt)("p",null,"Save the configuration, return to the home page, and you'll see the file-tree of the storage provider."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Casibase-home-filetree",src:a(1267).Z,width:"2559",height:"1391"})),(0,o.kt)("p",null,"Now you can manage your data in Casibase."),(0,o.kt)("p",null,"In the next chapter, we'll learn how to add a ",(0,o.kt)("inlineCode",{parentName:"p"},"AI model provider")," to Casibase."))}g.isMDXComponent=!0},8084:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/casdoor-home-providers-10dd4a228d431fa9d22624d8f9341e01.png"},6655:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/casdoor-providers-add-e76fd7859b2c841a49d13abe476147cd.png"},4526:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/casdoor-providers-form-filling-alioss-89e1af0969fefdba29d601035b0c3b4c.png"},179:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/casdoor-providers-form-filling-e1b10aace347e7f01eb8f70fcd88463d.png"},8070:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/casdoor-providers-view-5c022c5131fd5f00a8de657b513e2c32.png"},1267:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/casibase-home-filetree-1a67546edfa30c0209facba53bb4f211.png"},7840:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/casibase-stores-add-8521a0f17c4205e623afdab45193e951.png"},4790:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/casibase-stores-form-filling-a9a8d90e44ba195d0705a2d102ec34fe.png"},6085:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/casibase-stores-form-preview-b8e0b00c72c9daeb0c0d6d157ccf6832.png"},9341:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/casibase-stores-select-storage-6b4ec79dc7e1c86c406dad7c8d455902.png"}}]);
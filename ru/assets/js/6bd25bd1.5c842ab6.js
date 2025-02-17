"use strict";(self.webpackChunkcasibase_website=self.webpackChunkcasibase_website||[]).push([[649],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=d(a),g=i,m=c["".concat(l,".").concat(g)]||c[g]||u[g]||o;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=g;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:i,s[1]=r;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6109:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const o={title:"Casibase + DeepSeek Integration Guide",author:"Casbin Team",author_url:"https://github.com/casbin",author_image_url:"https://avatars.githubusercontent.com/casbin",tags:["casibase"]},s="Casibase + DeepSeek Integration Guide: Building an Efficient AI Knowledge Base and Dialogue System",r={permalink:"/ru/blog/casibase-deepSeek-guideline",editUrl:"https://github.com/casibase/casibase-website/edit/master/blog/casibase-deepSeek-guideline.md",source:"@site/blog/casibase-deepSeek-guideline.md",title:"Casibase + DeepSeek Integration Guide",description:"In today's digital age, there is a growing demand for efficient knowledge management and intelligent Q&A systems for businesses and individuals. With the rapid development of AI technology, people are looking for smarter and more efficient solutions to improve information processing, optimise workflow and enhance user experience.",date:"2025-02-17T15:20:06.000Z",formattedDate:"17 \u0444\u0435\u0432\u0440\u0430\u043b\u044f 2025 \u0433.",tags:[{label:"casibase",permalink:"/ru/blog/tags/casibase"}],readingTime:4.835,hasTruncateMarker:!1,authors:[{name:"Casbin Team",url:"https://github.com/casbin",imageURL:"https://avatars.githubusercontent.com/casbin"}],frontMatter:{title:"Casibase + DeepSeek Integration Guide",author:"Casbin Team",author_url:"https://github.com/casbin",author_image_url:"https://avatars.githubusercontent.com/casbin",tags:["casibase"]},nextItem:{title:"Welcome",permalink:"/ru/blog/welcome"}},l={authorsImageUrls:[void 0]},d=[{value:"What is Casibase:",id:"what-is-casibase",level:2},{value:"Casibase Online Demo:",id:"casibase-online-demo",level:3},{value:"Casibase integration with the DeepSeek series of models:",id:"casibase-integration-with-the-deepseek-series-of-models",level:2},{value:"Step 1: Casibase environment deployment",id:"step-1-casibase-environment-deployment",level:3},{value:"1.1 <strong>Deployment of Casdoor</strong>.",id:"11-deployment-of-casdoor",level:4},{value:"1.2 <strong>Deployment of Casibase</strong>: Deployment of Casibase",id:"12-deployment-of-casibase-deployment-of-casibase",level:4},{value:"Step 2: Casibase Basic Configuration",id:"step-2-casibase-basic-configuration",level:3},{value:"2.1 <strong>Configuring Casdoor</strong>:",id:"21-configuring-casdoor",level:4},{value:"2.1.1 Add Organisation",id:"211-add-organisation",level:5},{value:"2.1.2 Add Apply",id:"212-add-apply",level:5},{value:"2.1.3 Add User",id:"213-add-user",level:5},{value:"2.2 <strong>Configuring Casibase</strong>\uff1a",id:"22-configuring-casibase",level:3},{value:"2.2.1 Configure Storage Provider",id:"221-configure-storage-provider",level:5},{value:"2.2.2 Configure Model Provider",id:"222-configure-model-provider",level:5},{value:"2.2.3 Configure Embedding Providers (Optional)",id:"223-configure-embedding-providers-optional",level:5},{value:"2.2.4 Add stores.",id:"224-add-stores",level:5},{value:"Step 3: Chatting using the DeepSeek model based on Casibase and Alibaba Cloud",id:"step-3-chatting-using-the-deepseek-model-based-on-casibase-and-alibaba-cloud",level:3},{value:"Conclusions",id:"conclusions",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(c,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In today's digital age, there is a growing demand for efficient knowledge management and intelligent Q&A systems for businesses and individuals. With the rapid development of AI technology, people are looking for smarter and more efficient solutions to improve information processing, optimise workflow and enhance user experience."),(0,i.kt)("p",null,"Casibase, as an open source AI knowledge base and dialogue system, has become the preferred solution for many developers and enterprises due to its strong multi-model compatibility, enterprise-level feature support, and intuitive and friendly web interface. It not only can efficiently organise and retrieve knowledge, but also provides flexible interfaces for easy integration with various AI models to meet the needs of different scenarios."),(0,i.kt)("p",null,"Meanwhile, recently released advanced AI models such as ",(0,i.kt)("strong",{parentName:"p"},"DeepSeek R1")," have attracted a lot of attention in the developer community due to their excellent performance, optimised distillation technology and free open source. DeepSeek R1's powerful reasoning and efficient knowledge integration capabilities have enabled it to perform well in intelligent Q&A, code generation, text comprehension, and other tasks, making it an important member of the open source AI ecosystem."),(0,i.kt)("p",null,"In this article, we will discuss how to efficiently integrate Casibase with DeepSeek R1 to build an AI knowledge base and dialogue system with high performance, security, and powerful features. We will introduce the key steps from environment setup to real-world application, and analyse how to leverage the enterprise-grade features of Casibase and the power of DeepSeek R1 to achieve accurate and efficient intelligent Q&A and knowledge management."),(0,i.kt)("h2",{id:"what-is-casibase"},"What is Casibase:"),(0,i.kt)("p",null,"Casibase is an open source AI knowledge base and dialogue system that combines the latest RAG (Retrieval Augmented Generation) technology, enterprise-grade ",(0,i.kt)("a",{parentName:"p",href:"https://so.csdn.net/so/search?q=%E5%8D%95%E7%82%B9%E7%99%BB%E5%BD%95&spm=1001.2101.3001.7020"},"Single sign-on")," (SSO) functionality, and support for a wide range of mainstream AI models. As a LangChain-like system, Casibase aims to provide a powerful, flexible and easy-to-use knowledge management and intelligent dialogue platform for enterprises and developers."),(0,i.kt)("p",null,"Currently, Casibase supports language models such as OpenAI-based GPT series, Gemini, Claude, Moonshot, DeepSeek, etc., as well as OpenAI-based embedding models, Hugging Face's sentence-transformers, Cohere, Qwen, and other models. Hugging Face, Cohere, Qwen, and other embedding models. This wide range of model support allows users to choose the most suitable AI model according to their needs and preferences, and also facilitates the integration of new models in the future."),(0,i.kt)("h3",{id:"casibase-online-demo"},"Casibase Online Demo:"),(0,i.kt)("p",null,"Casibase offers several online demo sites, including a chatbot demo and an administration interface demo, allowing users to experience the system's functionality visually."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chatbot demo: ",(0,i.kt)("a",{parentName:"li",href:"https://demo.casibase.com/"},"https://demo.casibase.com")),(0,i.kt)("li",{parentName:"ul"},"Management UI Demo: ",(0,i.kt)("a",{parentName:"li",href:"https://demo-admin.casibase.com/"},"https://demo-admin.casibase.com"))),(0,i.kt)("h2",{id:"casibase-integration-with-the-deepseek-series-of-models"},"Casibase integration with the DeepSeek series of models:"),(0,i.kt)("p",null,"Using DeepSeek in Casibase is very easy, by building Casibase and making some simple configurations, you can talk to DeepSeek R1, DeepSeek V3 and a bunch of Deepseek and its enhancements supported by other platforms such as AlibabaCloud. Avoid complex configurations for local deployments."),(0,i.kt)("h3",{id:"step-1-casibase-environment-deployment"},"Step 1: Casibase environment deployment"),(0,i.kt)("h4",{id:"11-deployment-of-casdoor"},"1.1 ",(0,i.kt)("strong",{parentName:"h4"},"Deployment of Casdoor"),"."),(0,i.kt)("p",null,"Since the powerful enterprise SSO authentication, authentication and other functions provided by Casibase are done based on Casdoor. Therefore, installing Casdoor is a prerequisite for using Casibase."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Casdoor is a robust authentication system that provides a safe and secure login experience."))),(0,i.kt)("p",null,"You can refer to the official Casdoor documentation to complete the Casdoor environment deployment\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://casdoor.org/docs/basic/server-installation/"},"Deployment of Casdoor")),(0,i.kt)("h4",{id:"12-deployment-of-casibase-deployment-of-casibase"},"1.2 ",(0,i.kt)("strong",{parentName:"h4"},"Deployment of Casibase"),": ",(0,i.kt)("a",{parentName:"h4",href:"https://casibase.org/zh/docs/basic/server-installation"},"Deployment of Casibase")),(0,i.kt)("h3",{id:"step-2-casibase-basic-configuration"},"Step 2: Casibase Basic Configuration"),(0,i.kt)("h4",{id:"21-configuring-casdoor"},"2.1 ",(0,i.kt)("strong",{parentName:"h4"},"Configuring Casdoor"),":"),(0,i.kt)("p",null,"You need to complete three steps in the deployed Casdoor to support the presence of users accessing Casibase, i.e., Configure Organizations->Configure Apply under Authentication->Configure user. do the following:"),(0,i.kt)("h5",{id:"211-add-organisation"},"2.1.1 Add Organisation"),(0,i.kt)("p",null,"Configuring Organisations in the Casdoor website."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"addOrganisations",src:a(5924).Z,width:"1359",height:"271"})),(0,i.kt)("h5",{id:"212-add-apply"},"2.1.2 Add Apply"),(0,i.kt)("p",null,'Set "Apply" for Casibase. you should create it based on the Organizations you have configured, which will be reflected in the add form.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"addApply",src:a(2765).Z,width:"1551",height:"254"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"addApplications",src:a(7495).Z,width:"1611",height:"1393"})),(0,i.kt)("h5",{id:"213-add-user"},"2.1.3 Add User"),(0,i.kt)("p",null,"Creating a user for the created Apply is the final preparation for subsequent login to Casibase. Just follow the information on the form."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"addUser",src:a(5841).Z,width:"1442",height:"203"})),(0,i.kt)("h3",{id:"22-configuring-casibase"},"2.2 ",(0,i.kt)("strong",{parentName:"h3"},"Configuring Casibase"),"\uff1a"),(0,i.kt)("p",null,"With the above configuration, we already have access to casibase, next, after logging in, we will configure it for AI chat, deploying a DeepSeek r1 based on the AlibabaCloud Big Model Service Platform (",(0,i.kt)("a",{parentName:"p",href:"https://help.aliyun.com/zh/model-studio/"},"https://help.aliyun.com/zh/model-studio/"),") supported model."),(0,i.kt)("h5",{id:"221-configure-storage-provider"},"2.2.1 Configure Storage Provider"),(0,i.kt)("p",null,"Firstly, it is necessary to ",(0,i.kt)("strong",{parentName:"p"},"configure a storage provider")," through Casdoor, which can be used to store data by adding this storage provider. They can be added to Casdoor by clicking the button on the homepage\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"Authentication-> Providers->add")),(0,i.kt)("h5",{id:"222-configure-model-provider"},"2.2.2 Configure Model Provider"),(0,i.kt)("p",null,"In Casibase, configure the new model provider: ",(0,i.kt)("inlineCode",{parentName:"p"},"Click the Providers button in the navigation bar at the top of the home page->add"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"In the pop-up add form, we can set Category as Model, and then set the first level model: such as Moonshot, DeepSeek, Alibaba Cloud, etc. Here we don't directly select the AI model support provided by DeepSeek, but use the DeepSeek provided by Alibaba Cloud support, as shown below, we can see various sub-models supported by Alibaba Cloud in Sub Type."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"addModelProvider",src:a(3596).Z,width:"982",height:"659"})),(0,i.kt)("h5",{id:"223-configure-embedding-providers-optional"},"2.2.3 Configure Embedding Providers (Optional)"),(0,i.kt)("p",null,"After 2.2.1 and 2.2.2 have been added successfully, we can Configure Embedding Providers, by configuring Embedding Providers, we can integrate with our powerful knowledge base system Casibase. Similar steps to 2.2.2, fill out the form via: ",(0,i.kt)("inlineCode",{parentName:"p"},"Authentication-> Providers->add")," (but please note that the Category needs to be configured as Embedding):"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"casibaseEmbedding",src:a(7286).Z,width:"807",height:"877"})),(0,i.kt)("h5",{id:"224-add-stores"},"2.2.4 Add stores."),(0,i.kt)("p",null,"In this step we organise all the information we added above (Storage provider, Model provider, Embedding provider), in the form we can fill in these three items and finally create a Stores."),(0,i.kt)("h3",{id:"step-3-chatting-using-the-deepseek-model-based-on-casibase-and-alibaba-cloud"},"Step 3: Chatting using the DeepSeek model based on Casibase and Alibaba Cloud"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Chat",src:a(8337).Z,width:"1154",height:"522"})),(0,i.kt)("h2",{id:"conclusions"},"Conclusions"),(0,i.kt)("p",null,"In this guide, we learned how to implement AI chat functionality in Casibase using DeepSeek. Now you can chat with chatbots in Casibase."),(0,i.kt)("p",null,"For more details, you can refer to ",(0,i.kt)("a",{parentName:"p",href:"https://casibase.org/zh/docs/overview"},"Casibase Docs"),"."))}u.isMDXComponent=!0},7495:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-applications-844bd0bb6f076f3d5be2c2e07a4a3e1b.png"},2765:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-apply-9695f8277120c5d7047889814bf6afd0.png"},3596:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-model-provider-d424e78c5a62f7a45f029bb06b2fd926.png"},5924:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-organisations-b90b77a563738419899b3120101238ba.png"},5841:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-user-76612266d261575f40968efa7a2c1bf6.png"},7286:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/casibase-embedding-39b4bcbcc5c0e814b079f1bb011c1dcd.png"},8337:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/chat-792075c037c1aa90ae1b538ca973238f.png"}}]);
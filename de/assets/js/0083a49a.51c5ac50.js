"use strict";(self.webpackChunkcasibase_website=self.webpackChunkcasibase_website||[]).push([[559],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>g});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return t?n.createElement(g,i(i({ref:r},p),{},{components:t})):n.createElement(g,i({ref:r},p))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2570:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const o={title:"Core Concepts",description:"Casibase core concepts",keywords:["core concepts","provider","storage","chat","vector"],authors:["kv-chiu"]},i=void 0,s={unversionedId:"basic/core-concepts",id:"basic/core-concepts",title:"Core Concepts",description:"Casibase core concepts",source:"@site/docs/basic/core-concepts.md",sourceDirName:"basic",slug:"/basic/core-concepts",permalink:"/de/docs/basic/core-concepts",draft:!1,editUrl:"https://crowdin.com/project/casibase-website/de",tags:[],version:"current",frontMatter:{title:"Core Concepts",description:"Casibase core concepts",keywords:["core concepts","provider","storage","chat","vector"],authors:["kv-chiu"]},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/de/docs/overview"},next:{title:"Server Installation",permalink:"/de/docs/basic/server-installation"}},l={},c=[{value:"Provider",id:"provider",level:2},{value:"Vectors",id:"vectors",level:2},{value:"Chats",id:"chats",level:2},{value:"Embedding",id:"embedding",level:2}],p={toc:c},d="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(d,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As Casibase's user, you should get familiar with at least 4 core concepts: ",(0,a.kt)("inlineCode",{parentName:"p"},"Provider"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Storage"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Chat")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Vector"),"."),(0,a.kt)("mermaid",{value:"flowchart TD;\n    subgraph Providers;\n    subgraph Storage_Provider\n    AWS\\\\nAzure\\\\nLocal\n    end\n    \n    subgraph AI_Provider\n    OpenAI\\\\nChatGLM\\\\nInternLM\n    end\n    end;\n    \n    subgraph Vectors;\n    Text_Vector;\n    Image_Vector;\n    ...;\n    end;\n    \n    subgraph Chats;\n    Question;\n    Query_Prompt;\n    Answer;\n    end;\n    \n    AI_Provider --\x3e Embedding;\n    AI_Provider --\x3e Chats;\n    Storage_Provider --\x3e Embedding;\n    Embedding --\x3e Vectors;\n    Vectors --\x3e Query_Prompt;\n    Query_Prompt --\x3e Answer;\n    Question --\x3e Query_Prompt;"}),(0,a.kt)("h2",{id:"provider"},"Provider"),(0,a.kt)("p",null,"Providers are the backbone of Casibase, offering essential services and integration with external systems. The Provider class definition is shown as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type Provider struct {\n    Owner       string `xorm:"varchar(100) notnull pk" json:"owner"`\n    Name        string `xorm:"varchar(100) notnull pk" json:"name"`\n    CreatedTime string `xorm:"varchar(100)" json:"createdTime"`\n\n    DisplayName  string `xorm:"varchar(100)" json:"displayName"`\n    Category     string `xorm:"varchar(100)" json:"category"`\n    Type         string `xorm:"varchar(100)" json:"type"`\n    ClientId     string `xorm:"varchar(100)" json:"clientId"`\n    ClientSecret string `xorm:"varchar(2000)" json:"clientSecret"`\n    ProviderUrl  string `xorm:"varchar(200)" json:"providerUrl"`\n}\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"There are two primary types of providers in Casibase:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Storage Provider:"),"The Storage Provider facilitates the storage and retrieval of data within Casibase. It supports various storage options, including:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"AWS"),(0,a.kt)("li",{parentName:"ul"},"Azure"),(0,a.kt)("li",{parentName:"ul"},"Local File System"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"AI Provider:"),"The AI Provider is responsible for handling AI-related tasks and services in Casibase. It supports multiple AI models and technologies, including:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"OpenAI"),(0,a.kt)("li",{parentName:"ul"},"ChatGLM"),(0,a.kt)("li",{parentName:"ul"},"InternLM"))))),(0,a.kt)("h2",{id:"vectors"},"Vectors"),(0,a.kt)("p",null,"Vectors in Casibase represent numerical representations of different types of data. These vectors enable efficient processing and analysis of information. Some of the vector types available are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Text Vector"),(0,a.kt)("li",{parentName:"ul"},"Image Vector"),(0,a.kt)("li",{parentName:"ul"},"... (other vector types)")),(0,a.kt)("p",null,"The Provider class definition is shown as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type Vector struct {\n    Owner       string    `xorm:"varchar(100) notnull pk" json:"owner"`\n    Name        string    `xorm:"varchar(100) notnull pk" json:"name"`\n    CreatedTime string    `xorm:"varchar(100)" json:"createdTime"`\n\n    DisplayName string    `xorm:"varchar(100)" json:"displayName"`\n    Store       string    `xorm:"varchar(100)" json:"store"`\n    File        string    `xorm:"varchar(100)" json:"file"`\n    Text        string    `xorm:"mediumtext" json:"text"`\n    Data        []float64 `xorm:"mediumtext" json:"data"`\n}\n')),(0,a.kt)("h2",{id:"chats"},"Chats"),(0,a.kt)("p",null,"Chats are at the core of interactive communication between users and the AI models in Casibase. They consist of three essential components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Question: The user's input or query, seeking information or assistance."),(0,a.kt)("li",{parentName:"ul"},"Query Prompt: A formatted version of the user's question, prepared for processing by the AI models."),(0,a.kt)("li",{parentName:"ul"},"Answer: The AI-generated response to the user's question, providing relevant information or solutions.")),(0,a.kt)("p",null,"The Chat class definition is shown as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type Chat struct {\n    Owner        string   `xorm:"varchar(100) notnull pk" json:"owner"`\n    Name         string   `xorm:"varchar(100) notnull pk" json:"name"`\n    CreatedTime  string   `xorm:"varchar(100)" json:"createdTime"`\n    UpdatedTime  string   `xorm:"varchar(100)" json:"updatedTime"`\n\n    DisplayName  string   `xorm:"varchar(100)" json:"displayName"`\n    Category     string   `xorm:"varchar(100)" json:"category"`\n    Type         string   `xorm:"varchar(100)" json:"type"`\n    User1        string   `xorm:"varchar(100)" json:"user1"`\n    User2        string   `xorm:"varchar(100)" json:"user2"`\n    Users        []string `xorm:"varchar(100)" json:"users"`\n    MessageCount int      `json:"messageCount"`\n}\n')),(0,a.kt)("h2",{id:"embedding"},"Embedding"),(0,a.kt)("p",null,"Embedding is the process of transforming various types of data, such as text and images, into dense vector representations. This step is crucial for facilitating efficient data processing and analysis within Casibase."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"By embedding, the questions in chat and the knowledge files in storage will be turned into vectors and used in the next step of knowledge search.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Casibase's default embedding method is provided by OpenAI at a rate of up to three calls per minute. We propose to minimize the knowledge file coupling as much as possible to facilitate embedding and further processing.")))))}m.isMDXComponent=!0}}]);
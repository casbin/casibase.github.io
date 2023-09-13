"use strict";(self.webpackChunkcasibase_website=self.webpackChunkcasibase_website||[]).push([[66],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>g});var o=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,o,i=function(e,a){if(null==e)return{};var t,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),d=function(e){var a=o.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=d(e.components);return o.createElement(l.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},h=o.forwardRef((function(e,a){var t=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=d(t),h=i,g=c["".concat(l,".").concat(h)]||c[h]||u[h]||n;return t?o.createElement(g,s(s({ref:a},p),{},{components:t})):o.createElement(g,s({ref:a},p))}));function g(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=t.length,s=new Array(n);s[0]=h;var r={};for(var l in a)hasOwnProperty.call(a,l)&&(r[l]=a[l]);r.originalType=e,r[c]="string"==typeof e?e:i,s[1]=r;for(var d=2;d<n;d++)s[d]=t[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},6704:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var o=t(7462),i=(t(7294),t(3905));const n={title:"Deploy Casdoor and Casibase",description:"Discover how to deploy Casdoor and Casibase.",keywords:["Casibase","Deployment","Installation","Casdoor"],authors:["kv-chiu"]},s=void 0,r={unversionedId:"walkthrough-guides/deploy-casdoor-and-casibase",id:"walkthrough-guides/deploy-casdoor-and-casibase",title:"Deploy Casdoor and Casibase",description:"Discover how to deploy Casdoor and Casibase.",source:"@site/docs/walkthrough-guides/deploy-casdoor-and-casibase.md",sourceDirName:"walkthrough-guides",slug:"/walkthrough-guides/deploy-casdoor-and-casibase",permalink:"/ru/docs/walkthrough-guides/deploy-casdoor-and-casibase",draft:!1,editUrl:"https://github.com/casbin/casibase-website/edit/master/docs/walkthrough-guides/deploy-casdoor-and-casibase.md",tags:[],version:"current",frontMatter:{title:"Deploy Casdoor and Casibase",description:"Discover how to deploy Casdoor and Casibase.",keywords:["Casibase","Deployment","Installation","Casdoor"],authors:["kv-chiu"]},sidebar:"tutorialSidebar",previous:{title:"Walkthrough Guides",permalink:"/ru/docs/category/walkthrough-guides"},next:{title:"Add a Storage Provider",permalink:"/ru/docs/walkthrough-guides/add-a-storage-provider"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Step 1: Deploy Casdoor",id:"step-1-deploy-casdoor",level:3},{value:"Step 2: Create an organization in Casdoor",id:"step-2-create-an-organization-in-casdoor",level:3},{value:"Step 2.1: Add an organization",id:"step-21-add-an-organization",level:4},{value:"Step 2.2: Fill in the organization information",id:"step-22-fill-in-the-organization-information",level:4},{value:"Step 2.3: View the organization",id:"step-23-view-the-organization",level:4},{value:"Step 3: Create an application in Casdoor",id:"step-3-create-an-application-in-casdoor",level:3},{value:"Step 3.1: Add an application",id:"step-31-add-an-application",level:4},{value:"Step 3.2: Fill in the application information",id:"step-32-fill-in-the-application-information",level:4},{value:"Step 3.3: View the application",id:"step-33-view-the-application",level:4},{value:"Step 4: Create a user in Casdoor for Casibase",id:"step-4-create-a-user-in-casdoor-for-casibase",level:3},{value:"Step 4.1: Add a user",id:"step-41-add-a-user",level:4},{value:"Step 4.2: Fill in the user information",id:"step-42-fill-in-the-user-information",level:4},{value:"Step 4.3: View the user",id:"step-43-view-the-user",level:4},{value:"Step 5: Deploy Casibase",id:"step-5-deploy-casibase",level:3}],p={toc:d},c="wrapper";function u(e){let{components:a,...n}=e;return(0,i.kt)(c,(0,o.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This document is a step-by-step tutorial designed for beginners. It will guide you through the process of deploying Casdoor and Casibase, our powerful knowledge base system."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"What is Casdoor?")),(0,i.kt)("p",{parentName:"admonition"},"Casdoor is a powerful authentication system that provides a secure and reliable login experience. It's a prerequisite for Casibase, so be sure to deploy it first."),(0,i.kt)("p",{parentName:"admonition"},"Refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://casdoor.org/"},"Casdoor")," website for more information.")),(0,i.kt)("h3",{id:"step-1-deploy-casdoor"},"Step 1: Deploy Casdoor"),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"https://casdoor.org/docs/basic/server-installation/"},"Casdoor Deployment Guide"),", you can find the detailed steps to deploy Casdoor."),(0,i.kt)("p",null,"Once you've deployed Casdoor, you'll look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Casdoor-home",src:t(6016).Z,width:"2560",height:"1395"})),(0,i.kt)("h3",{id:"step-2-create-an-organization-in-casdoor"},"Step 2: Create an organization in Casdoor"),(0,i.kt)("p",null,"In Casdoor, you can create an organization to manage your users and applications. You can create an organization by clicking the ",(0,i.kt)("inlineCode",{parentName:"p"},"User Management - Organizations")," button on the home page."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Casdoor-home-organization",src:t(627).Z,width:"846",height:"470"})),(0,i.kt)("h4",{id:"step-21-add-an-organization"},"Step 2.1: Add an organization"),(0,i.kt)("p",null,"Click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add")," button to add an organization."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Casdoor-organizations-add",src:t(769).Z,width:"750",height:"353"})),(0,i.kt)("h4",{id:"step-22-fill-in-the-organization-information"},"Step 2.2: Fill in the organization information"),(0,i.kt)("p",null,"Fill in the organization information and click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Save & Exit")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Casdoor-organizations-form-filling",src:t(3771).Z,width:"987",height:"608"})),(0,i.kt)("h4",{id:"step-23-view-the-organization"},"Step 2.3: View the organization"),(0,i.kt)("p",null,"After adding the organization, you can view the organization information."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Casdoor-organizations-view",src:t(8036).Z,width:"2551",height:"593"})),(0,i.kt)("h3",{id:"step-3-create-an-application-in-casdoor"},"Step 3: Create an application in Casdoor"),(0,i.kt)("p",null,"In Casdoor, you can create an application to manage your users and organizations. You can create an application by clicking the ",(0,i.kt)("inlineCode",{parentName:"p"},"Identity - Applications")," button on the home page."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Casdoor-home-applications",src:t(911).Z,width:"1063",height:"657"})),(0,i.kt)("h4",{id:"step-31-add-an-application"},"Step 3.1: Add an application"),(0,i.kt)("p",null,"Click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add")," button to add an application."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Casdoor-applications-add",src:t(6205).Z,width:"751",height:"436"})),(0,i.kt)("h4",{id:"step-32-fill-in-the-application-information"},"Step 3.2: Fill in the application information"),(0,i.kt)("p",null,"Fill in the application information and click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Save & Exit")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Casdoor-applications-form-filling",src:t(6752).Z,width:"1611",height:"1393"})),(0,i.kt)("h4",{id:"step-33-view-the-application"},"Step 3.3: View the application"),(0,i.kt)("p",null,"After adding the application, you can view the application information."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Casdoor-applications-view",src:t(6311).Z,width:"2558",height:"534"})),(0,i.kt)("h3",{id:"step-4-create-a-user-in-casdoor-for-casibase"},"Step 4: Create a user in Casdoor for Casibase"),(0,i.kt)("p",null,"In Casdoor, you can create a user to login Casibase. You can create a user by clicking the ",(0,i.kt)("inlineCode",{parentName:"p"},"User Management - Organizations - Users")," button from the home page."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Casdoor-home-users",src:t(7688).Z,width:"2560",height:"556"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"A user is a member of an organization who can login to applications in the organization."),(0,i.kt)("p",{parentName:"admonition"},"Refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://casdoor.org/"},"Casdoor")," website for more information.")),(0,i.kt)("h4",{id:"step-41-add-a-user"},"Step 4.1: Add a user"),(0,i.kt)("p",null,"Click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add")," button to add a user."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Casdoor-users-add",src:t(1789).Z,width:"639",height:"225"})),(0,i.kt)("h4",{id:"step-42-fill-in-the-user-information"},"Step 4.2: Fill in the user information"),(0,i.kt)("p",null,"Fill in the user information and click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Save & Exit")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Casdoor-users-form-filling",src:t(1622).Z,width:"1567",height:"1274"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Password")),(0,i.kt)("p",null,"You can set the user's password by clicking the ",(0,i.kt)("inlineCode",{parentName:"p"},"Modify password")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Casdoor-users-form-filling-password",src:t(994).Z,width:"1015",height:"754"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Admin")),(0,i.kt)("p",null,"You can set the user's admin permission by clicking the ",(0,i.kt)("inlineCode",{parentName:"p"},"Is admin")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Casdoor-users-form-filling-admin",src:t(5067).Z,width:"810",height:"506"})),(0,i.kt)("h4",{id:"step-43-view-the-user"},"Step 4.3: View the user"),(0,i.kt)("p",null,"After adding the user, you can view the user information."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Casdoor-users-view",src:t(6991).Z,width:"2560",height:"474"})),(0,i.kt)("h3",{id:"step-5-deploy-casibase"},"Step 5: Deploy Casibase"),(0,i.kt)("p",null,"Like Casdoor, you can deploy Casibase by following the ",(0,i.kt)("a",{parentName:"p",href:"../basic/server-installation"},"Casibase Deployment Guide"),"."),(0,i.kt)("p",null,"Once you've deployed Casibase, you'll look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Casibase-home",src:t(66).Z,width:"2557",height:"1395"})),(0,i.kt)("p",null,"Don't worry if you see a blank page in the beginning. In the next chapter, we will learn how to initialize data in Casdoor and Casibase."))}u.isMDXComponent=!0},6205:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/casdoor-applications-add-c802c7dc1cf450d3ab0ade3f9f0a0aa3.png"},6752:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/casdoor-applications-form-filling-844bd0bb6f076f3d5be2c2e07a4a3e1b.png"},6311:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/casdoor-applications-view-994b6f46b9f4614c971a3609bc8ac909.png"},911:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/casdoor-home-applications-410671b0a7e97edbfcb3834588e9e41f.png"},627:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/casdoor-home-organizations-977925efb749b10787beea15e03cbb0a.png"},7688:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/casdoor-home-users-95801f9dab04e440fe4dd97850a8a8d3.png"},6016:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/casdoor-home-630a19f8a2a06c79f5f240a21a0b593a.png"},769:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/casdoor-organizations-add-489bb8ccb03d60ca66d37185b9447fa1.png"},3771:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/casdoor-organizations-form-filling-8a94463dd2b7073b9f3a2c91f4871a32.png"},8036:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/casdoor-organizations-view-8fc4da60b87eee774a1ec99726bbcd7a.png"},1789:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/casdoor-users-add-192c58736a21066d3770f432ae52cfd9.png"},5067:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/casdoor-users-form-filling-admin-56b035d043176e34285fefaad7507464.png"},994:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/casdoor-users-form-filling-password-b4db42b848d75aab5d75dd798c4077f5.png"},1622:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/casdoor-users-form-filling-73f5a74230573329b285d906a9bc188b.png"},6991:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/casdoor-users-view-f4abb80ff852ab43affb3e36da85c90e.png"},66:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/casibase-home-aafc5e3358225e0019ee9959a58c5bf8.png"}}]);
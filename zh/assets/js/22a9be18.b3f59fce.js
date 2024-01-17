"use strict";(self.webpackChunkcasibase_website=self.webpackChunkcasibase_website||[]).push([[141],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,g=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return r?a.createElement(g,i(i({ref:t},d),{},{components:r})):a.createElement(g,i({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},83:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(7294);function n(e){return a.createElement("iframe",{src:e.src,width:e.width,height:e.height,style:{borderRadius:"20px"},frameBorder:"0",scrolling:"no"})}n.defaultProps={src:"https://door.casdoor.com",width:"600",height:"700"}},821:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));r(4204),r(83);const o={title:"Casdoor-SSO",description:"Setup Casdoor for casibase",keywords:["Casdoor","SSO","Security","Authentication","Authorization"],authors:["palp1tate"]},i=void 0,s={unversionedId:"basic/casdoor-sso",id:"basic/casdoor-sso",title:"Casdoor-SSO",description:"Setup Casdoor for casibase",source:"@site/docs/basic/casdoor-sso.md",sourceDirName:"basic",slug:"/basic/casdoor-sso",permalink:"/zh/docs/basic/casdoor-sso",draft:!1,editUrl:"https://github.com/casibase/casibase-website/edit/master/docs/basic/casdoor-sso.md",tags:[],version:"current",frontMatter:{title:"Casdoor-SSO",description:"Setup Casdoor for casibase",keywords:["Casdoor","SSO","Security","Authentication","Authorization"],authors:["palp1tate"]},sidebar:"tutorialSidebar",previous:{title:"(Optional) Try with Docker",permalink:"/zh/docs/basic/try-with-docker"},next:{title:"Walkthrough Guides",permalink:"/zh/docs/category/walkthrough-guides"}},c={},l=[],d={toc:l},u="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Casibase uses Casdoor as its identity and single-sign-on (SSO) provider. Make sure to deploy it in advance."),(0,n.kt)("p",null,"Please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://casdoor.org/docs/basic/server-installation"},"Casdoor Server Installation")," to install and configure Casdoor."),(0,n.kt)("p",null,"Follow these steps to setup Casdoor for casibase:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create an Organization")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create-organization",src:r(1404).Z,width:"1758",height:"486"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Configure information about the Organization")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"configure-organization",src:r(4187).Z,width:"1653",height:"822"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create a new Application")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create-application",src:r(1091).Z,width:"1803",height:"490"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Configuring Application Information (Remember Name, ClientID and ClientSecret)")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"configure-application",src:r(8765).Z,width:"2086",height:"1185"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add a member to the newly created organization")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"add-user",src:r(1549).Z,width:"2466",height:"522"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"add-user",src:r(603).Z,width:"1787",height:"471"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Configure member information (remember its Name as well as Password)")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"configure-user",src:r(1760).Z,width:"2560",height:"1151"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"configure-user",src:r(6415).Z,width:"2560",height:"973"})))}p.isMDXComponent=!0},4204:(e,t,r)=>{r.d(t,{Z:()=>a});const a={gradientborder:"gradientborder_zL2q"}},1549:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/add-user-1-7d0b29f639433f3120d0d56dd011f97a.png"},603:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/add-user-2-1b570f871c25050810669ff723f071a3.png"},8765:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/configure-application-ada5da422dcd54dc60bd5489070b2380.png"},4187:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/configure-organization-60af33dee5482bbf0903269cb46ec24e.png"},1760:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/configure-user-1-24c01fa3fb481cbacbeb63e8848b7e9c.png"},6415:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/configure-user-2-47af9d676dd97548b08a957c7c7769fd.png"},1091:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create-application-ceca3337c3a86954f690b24d2a675826.png"},1404:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create-organization-305e64ad0bd12f13ee7deb698d837761.png"}}]);
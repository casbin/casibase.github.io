"use strict";(self.webpackChunkcasibase_website=self.webpackChunkcasibase_website||[]).push([[918],{8690:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var l=n(7294),a=n(1944),o=n(902);const c=l.createContext(null);function r(e){let{children:t,content:n}=e;const a=function(e){return(0,l.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return l.createElement(c.Provider,{value:a},t)}function i(){const e=(0,l.useContext)(c);if(null===e)throw new o.i6("DocProvider");return e}function s(){const{metadata:e,frontMatter:t,assets:n}=i();return l.createElement(a.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var m=n(6010),d=n(7524),u=n(64);function f(){const{metadata:e}=i();return l.createElement(u.Z,{previous:e.previous,next:e.next})}var v=n(3120),E=n(4364),g=n(5281),p=n(4881),h=n(1526);const b={lastUpdated:"lastUpdated_VsjB"};var C=n(5999);function L(e){let{authors:t}=e;return t.length<=1?l.createElement(l.Fragment,null,l.createElement("span",null,l.createElement(C.Z,null,"Created by")),l.createElement("a",{href:`https://github.com/${t[0]}`,target:"_blank",rel:"noreferrer"},l.createElement("img",{alt:`${t[0]}`,src:`https://avatars.githubusercontent.com/${t[0]}`,width:"24px",style:{borderRadius:"12px",verticalAlign:"sub",marginLeft:"4px"}}),"  ",t[0])):t.length<=3?l.createElement(l.Fragment,null,l.createElement("span",null,l.createElement(C.Z,null,"Modified by")),t.map((e=>l.createElement("a",{key:e,href:`https://github.com/${e}`,target:"_blank",rel:"noreferrer"},l.createElement("img",{alt:`${e}`,src:`https://avatars.githubusercontent.com/${e}`,width:"24px",style:{borderRadius:"12px",verticalAlign:"sub",marginLeft:"4px"}})," ",e)))):l.createElement(l.Fragment,null,l.createElement("span",null,l.createElement(C.Z,null,"Modified by")),t.map((e=>l.createElement("a",{key:e,href:`https://github.com/${e}`,target:"_blank",rel:"noreferrer"},l.createElement("img",{alt:`${e}`,src:`https://avatars.githubusercontent.com/${e}`,width:"24px",style:{borderRadius:"12px",verticalAlign:"sub",marginLeft:"4px"}})))))}function _(e){return l.createElement("div",{className:(0,m.Z)(g.k.docs.docFooterTagsRow,"row margin-bottom--sm")},l.createElement("div",{className:"col"},l.createElement(h.Z,e)))}function k(e){let{editUrl:t,authors:n}=e;return l.createElement("div",{className:(0,m.Z)(g.k.docs.docFooterEditMetaRow,"row")},l.createElement("div",{className:"col"},t&&l.createElement(p.Z,{editUrl:t})),l.createElement("div",{className:(0,m.Z)("col",b.lastUpdated)},l.createElement(L,{authors:n})))}function x(){const{metadata:e}=i(),{editUrl:t,tags:n}=e,a=e.frontMatter.authors||["casbin"],o=n.length>0,c=!!t;return o||c?l.createElement("footer",{className:(0,m.Z)(g.k.docs.docFooter,"docusaurus-mt-lg")},o&&l.createElement(_,{tags:n}),c&&l.createElement(k,{editUrl:t,authors:a})):null}var N=n(6043),H=n(3743),Z=n(7462);const M={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function y(e){let{collapsed:t,...n}=e;return l.createElement("button",(0,Z.Z)({type:"button"},n,{className:(0,m.Z)("clean-btn",M.tocCollapsibleButton,!t&&M.tocCollapsibleButtonExpanded,n.className)}),l.createElement(C.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const w={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function I(e){let{toc:t,className:n,minHeadingLevel:a,maxHeadingLevel:o}=e;const{collapsed:c,toggleCollapsed:r}=(0,N.u)({initialState:!0});return l.createElement("div",{className:(0,m.Z)(w.tocCollapsible,!c&&w.tocCollapsibleExpanded,n)},l.createElement(y,{collapsed:c,onClick:r}),l.createElement(N.z,{lazy:!0,className:w.tocCollapsibleContent,collapsed:c},l.createElement(H.Z,{toc:t,minHeadingLevel:a,maxHeadingLevel:o})))}const O={tocMobile:"tocMobile_ITEo"};function T(){const{toc:e,frontMatter:t}=i();return l.createElement(I,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,m.Z)(g.k.docs.docTocMobile,O.tocMobile)})}var A=n(9407);function $(){const{toc:e,frontMatter:t}=i();return l.createElement(A.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:g.k.docs.docTocDesktop})}var B=n(7955),R=n(1098);function F(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=i();return t.hide_title||void 0!==n?null:e.title}();return l.createElement("div",{className:(0,m.Z)(g.k.docs.docMarkdown,"markdown")},n&&l.createElement("header",null,l.createElement(B.Z,{as:"h1"},n)),l.createElement(R.Z,null,t))}var U=n(1310);const D={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function j(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=i(),n=(0,d.i)(),a=e.hide_table_of_contents,o=!a&&t.length>0;return{hidden:a,mobile:o?l.createElement(T,null):void 0,desktop:!o||"desktop"!==n&&"ssr"!==n?void 0:l.createElement($,null)}}();return l.createElement("div",{className:"row"},l.createElement("div",{className:(0,m.Z)("col",!n.hidden&&D.docItemCol)},l.createElement(v.Z,null),l.createElement("div",{className:D.docItemContainer},l.createElement("article",null,l.createElement(U.Z,null),l.createElement(E.Z,null),n.mobile,l.createElement(F,null,t),l.createElement(x,null)),l.createElement(f,null))),n.desktop&&l.createElement("div",{className:"col col--3"},n.desktop))}function z(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return l.createElement(r,{content:e.content},l.createElement(a.FG,{className:t},l.createElement(s,null),l.createElement(j,null,l.createElement(n,null))))}},9407:(e,t,n)=>{n.d(t,{Z:()=>m});var l=n(7462),a=n(7294),o=n(6010),c=n(3743);const r={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},i="table-of-contents__link toc-highlight",s="table-of-contents__link--active";function m(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,o.Z)(r.tableOfContents,"thin-scrollbar",t)},a.createElement(c.Z,(0,l.Z)({},n,{linkClassName:i,linkActiveClassName:s})))}},3743:(e,t,n)=>{n.d(t,{Z:()=>v});var l=n(7462),a=n(7294),o=n(6668);function c(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const l=n.slice(2,e.level);e.parentIndex=Math.max(...l),n[e.level]=t}));const l=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):l.push(a)})),l}function r(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return t.flatMap((e=>{const t=r({toc:e.children,minHeadingLevel:n,maxHeadingLevel:l});return function(e){return e.level>=n&&e.level<=l}(e)?[{...e,children:t}]:t}))}function i(e){const t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function s(e,t){let{anchorTopOffset:n}=t;const l=e.find((e=>i(e).top>=n));if(l){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(l))?l:e[e.indexOf(l)-1]??null}return e[e.length-1]??null}function m(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=m();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:l,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:c}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(l),r=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const l=[];for(let a=t;a<=n;a+=1)l.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(l.join()))}({minHeadingLevel:o,maxHeadingLevel:c}),i=s(r,{anchorTopOffset:n.current}),m=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===m)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:l,isChild:o}=e;return t.length?a.createElement("ul",{className:o?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:l}))))):null}const f=a.memo(u);function v(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:u,...v}=e;const E=(0,o.L)(),g=m??E.tableOfContents.minHeadingLevel,p=u??E.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>r({toc:c(t),minHeadingLevel:n,maxHeadingLevel:l})),[t,n,l])}({toc:t,minHeadingLevel:g,maxHeadingLevel:p});return d((0,a.useMemo)((()=>{if(i&&s)return{linkClassName:i,linkActiveClassName:s,minHeadingLevel:g,maxHeadingLevel:p}}),[i,s,g,p])),a.createElement(f,(0,l.Z)({toc:h,className:n,linkClassName:i},v))}},64:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(7294),a=n(49),o=n(9861),c=n(2949);function r(e){const{colorMode:t}=(0,c.I)();return l.createElement(l.Fragment,null,l.createElement(a.Z,e),l.createElement("br",null),l.createElement(o.Z,{id:"comments",repo:"casbin/casibase",repoId:"R_kgDOJm0jTw",category:"Docs comments",categoryId:"DIC_kwDOJm0jT84CX63U",mapping:"url",strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"bottom",theme:t,lang:"en",loading:"lazy"}))}}}]);
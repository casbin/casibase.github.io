"use strict";(self.webpackChunkcasibase_website=self.webpackChunkcasibase_website||[]).push([[81],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=i,g=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(g,o(o({ref:t},d),{},{components:a})):n.createElement(g,o({ref:t},d))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},83:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294);function i(e){return n.createElement("iframe",{src:e.src,width:e.width,height:e.height,style:{borderRadius:"20px"},frameBorder:"0",scrolling:"no"})}i.defaultProps={src:"https://door.casdoor.com",width:"600",height:"700"}},4826:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=a(7462),i=(a(7294),a(3905)),r=a(4204),o=a(83);const s={title:"Overview",description:"Casibase Overview",keywords:["casibase","ai","knowledge database"],authors:["kv-chiu"]},l=void 0,p={unversionedId:"overview",id:"overview",title:"Overview",description:"Casibase Overview",source:"@site/docs/overview.mdx",sourceDirName:".",slug:"/overview",permalink:"/ko/docs/overview",draft:!1,editUrl:"https://github.com/casbin/casibase-website/edit/master/docs/overview.mdx",tags:[],version:"current",frontMatter:{title:"Overview",description:"Casibase Overview",keywords:["casibase","ai","knowledge database"],authors:["kv-chiu"]},sidebar:"tutorialSidebar",previous:{title:"The Basics",permalink:"/ko/docs/category/the-basics"},next:{title:"Core Concepts",permalink:"/ko/docs/basic/core-concepts"}},d={},c=[{value:"Casibase features",id:"casibase-features",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Step 0 (Pre-knowledge)",id:"step-0-pre-knowledge",level:3},{value:"Step 1 (Importing Knowledge)",id:"step-1-importing-knowledge",level:3},{value:"Step 2 (Retrieving Knowledge)",id:"step-2-retrieving-knowledge",level:3},{value:"Step 3 (Building the Prompt)",id:"step-3-building-the-prompt",level:3},{value:"Step 4 (Achieving the Goal)",id:"step-4-achieving-the-goal",level:3},{value:"Step 5 (Optional Fine-tuning)",id:"step-5-optional-fine-tuning",level:3},{value:"Online demo",id:"online-demo",level:2},{value:"Casibase",id:"casibase",level:3},{value:"Architecture",id:"architecture",level:2}],m={toc:c},u="wrapper";function g(e){let{components:t,...s}=e;return(0,i.kt)(u,(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Casibase is a Open-Source ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Domain_knowledge"},"Domain Knowledge")," Database & IM & Forum Software powered by ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ChatGPT"},"ChatGPT"),"."),(0,i.kt)("div",{className:r.Z.gradientborder},(0,i.kt)(o.Z,{src:"https://ai.casbin.com",mdxType:"CasdoorCard"})),(0,i.kt)("h2",{id:"casibase-features"},"Casibase features"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Front-end and back-end separate architecture, developed by Golang, Casibase supports high concurrency, provides web-based managing UI and supports multiple languages(Chinese, English).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Casibase supports third-party applications login, such as GitHub, Google, QQ, WeChat, etc., and supports the extension of third-party login with plugins.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Based on embedding and prompt engineering for knowledge management, Casibase supports customized embedding methods and language models.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Casibase supports integration with existing systems by db sync, so users can transition to Casibase smoothly.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Casibase supports mainstream databases: MySQL, PostgreSQL, SQL Server, etc., and supports the extension of new databases with plugins."))),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("h3",{id:"step-0-pre-knowledge"},"Step 0 (Pre-knowledge)"),(0,i.kt)("p",null,"Casibase's knowledge retrieval process is based on Embedding and Prompt engineering, so it is highly recommended that you take a brief look at how Embedding works. An ",(0,i.kt)("a",{parentName:"p",href:"https://openai.com/blog/new-and-improved-embedding-model"},"introduction")," to Embedding."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"embedding",src:a(8944).Z,width:"1141",height:"313"})),(0,i.kt)("h3",{id:"step-1-importing-knowledge"},"Step 1 (Importing Knowledge)"),(0,i.kt)("p",null,"To get started with Casibase, users need to follow these steps to import knowledge and create a domain-specific knowledge database:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Configure Storage:")," In the Casibase dashboard, users should first configure the storage settings. This involves specifying the storage system to be used for storing knowledge-related files, such as documents, images, or any other relevant data. Users can choose from a variety of storage options based on their preferences and requirements.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Upload Files to Storage:")," Once the storage is set up, users can proceed to upload files containing domain-specific knowledge into the configured storage system. These files can be in various formats, such as text documents, images, or structured data files like CSV or JSON.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Select Embedding Method for Knowledge Generation:")," After the files are uploaded, users have the option to choose the embedding method for generating knowledge and corresponding vectors. Embeddings are numerical representations of textual or visual content, which facilitate efficient similarity search and data analysis."))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"How knowledge is embedded?"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For textual data: Users can choose from various embedding methods, such as Word2Vec, GloVe, or BERT, to convert the textual knowledge into meaningful vectors.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For visual data: If the uploaded files contain images or visual content, users can select image embedding techniques like CNN-based feature extraction to create representative vectors.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"More methods coming soon...")))),(0,i.kt)("p",null,"By following these steps, users can populate their domain knowledge database with relevant information and corresponding embeddings, which will be used for effective searching, clustering, and retrieval of knowledge within Casibase. The embedding process allows the system to understand the context and relationships between different pieces of knowledge, enabling more efficient and insightful knowledge management and exploration."),(0,i.kt)("h3",{id:"step-2-retrieving-knowledge"},"Step 2 (Retrieving Knowledge)"),(0,i.kt)("p",null,"After importing your ",(0,i.kt)("inlineCode",{parentName:"p"},"domain knowledge"),", Casibase transforms it into ",(0,i.kt)("inlineCode",{parentName:"p"},"vectors")," and stores these vectors in a ",(0,i.kt)("inlineCode",{parentName:"p"},"vector database"),". This vector representation enables powerful functions like ",(0,i.kt)("inlineCode",{parentName:"p"},"similarity search")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"efficient retrieval of related information"),". You can quickly find relevant data based on context or content, enabling advanced querying and uncovering valuable insights within your domain knowledge."),(0,i.kt)("h3",{id:"step-3-building-the-prompt"},"Step 3 (Building the Prompt)"),(0,i.kt)("p",null,"Casibase performs a similarity search on the stored knowledge vectors to find the closest match to the user's query. Using the search results, it creates a ",(0,i.kt)("inlineCode",{parentName:"p"},"prompt template")," to frame a specific question for the ",(0,i.kt)("inlineCode",{parentName:"p"},"language model"),". This ensures accurate and contextually relevant responses, delivering comprehensive answers based on the domain knowledge in Casibase."),(0,i.kt)("h3",{id:"step-4-achieving-the-goal"},"Step 4 (Achieving the Goal)"),(0,i.kt)("p",null,"At this stage, using Casibase, you have successfully acquired the knowledge you sought. Through the innovative combination of domain knowledge transformed into vectors and powerful language models like ChatGPT, Casibase provides you with accurate and relevant responses to your inquiries. This enables you to efficiently access and utilize the domain-specific information stored in Casibase, meeting your knowledge requirements with ease."),(0,i.kt)("h3",{id:"step-5-optional-fine-tuning"},"Step 5 (Optional Fine-tuning)"),(0,i.kt)("p",null,"If you find that the results are not entirely satisfactory, you can try to get better results by doing the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Tweaking Language Model Parameters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Asking multiple questions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Optimizing the original files"))),(0,i.kt)("p",null,"By utilizing these fine-tuning options, you can improve the efficiency of your knowledge management in Casibase, ensure that the system is better aligned with your goals, and provide more accurate and insightful information."),(0,i.kt)("admonition",{title:"Hints",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Other ways to optimize results (may require source code changes):"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Updating ",(0,i.kt)("inlineCode",{parentName:"p"},"Embedding")," Results: Refine the knowledge representation by adjusting the embedding results of your domain knowledge.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Modifying ",(0,i.kt)("inlineCode",{parentName:"p"},"Prompt")," Templates: By customizing the prompts, you can elicit more precise responses from the language model.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Exploring Different ",(0,i.kt)("inlineCode",{parentName:"p"},"Language Models"),": Experiment with different models to find the one that best suits your requirements for generating responses.")))),(0,i.kt)("h2",{id:"online-demo"},"Online demo"),(0,i.kt)("h3",{id:"casibase"},"Casibase"),(0,i.kt)("p",null,"Here is an online demo deployed by Casbin."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ai.casbin.com"},"Casibase official demo"))),(0,i.kt)("p",null,"Global admin login:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Username: ",(0,i.kt)("inlineCode",{parentName:"li"},"admin")),(0,i.kt)("li",{parentName:"ul"},"Password: ",(0,i.kt)("inlineCode",{parentName:"li"},"123"))),(0,i.kt)("h2",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"Casibase contains 4 parts:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Language"),(0,i.kt)("th",{parentName:"tr",align:null},"Source code"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Frontend"),(0,i.kt)("td",{parentName:"tr",align:null},"User interface for the casibase application"),(0,i.kt)("td",{parentName:"tr",align:null},"JavaScript + React"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casibase/tree/master/web"},"https://github.com/casbin/casibase/tree/master/web"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Backend"),(0,i.kt)("td",{parentName:"tr",align:null},"Server-side logic and API for casibase"),(0,i.kt)("td",{parentName:"tr",align:null},"Golang + Beego + MySQL"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casibase"},"https://github.com/casbin/casibase"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AI Model"),(0,i.kt)("td",{parentName:"tr",align:null},"Artificial intelligence model"),(0,i.kt)("td",{parentName:"tr",align:null},"Python + OpenAI"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casibase/tree/master/ai"},"https://github.com/casbin/casibase/tree/master/ai"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Knowledge Base"),(0,i.kt)("td",{parentName:"tr",align:null},"Storage for casibase application domain knowledge"),(0,i.kt)("td",{parentName:"tr",align:null},"pgvector"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casbin/casibase/tree/master/ai"},"https://github.com/casbin/casibase/tree/master/ai"))))))}g.isMDXComponent=!0},4204:(e,t,a)=>{a.d(t,{Z:()=>n});const n={gradientborder:"gradientborder_zL2q"}},8944:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/embedding-f845e1978e6685e7868b809f6101b115.gif"}}]);
"use strict";(self.webpackChunkcasibase_website=self.webpackChunkcasibase_website||[]).push([[81],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,g=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(g,l(l({ref:t},d),{},{components:a})):n.createElement(g,l({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},83:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294);function r(e){return n.createElement("iframe",{src:e.src,width:e.width,height:e.height,style:{borderRadius:"20px"},frameBorder:"0",scrolling:"no"})}r.defaultProps={src:"https://door.casdoor.com",width:"600",height:"700"}},4826:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),i=a(4204),l=a(83);const o={title:"Overview",description:"Casibase Overview",keywords:["casibase","ai","knowledge database"],authors:["kv-chiu","palp1tate"]},s=void 0,p={unversionedId:"overview",id:"overview",title:"Overview",description:"Casibase Overview",source:"@site/docs/overview.mdx",sourceDirName:".",slug:"/overview",permalink:"/ja/docs/overview",draft:!1,editUrl:"https://github.com/casbin/casibase-website/edit/master/docs/overview.mdx",tags:[],version:"current",frontMatter:{title:"Overview",description:"Casibase Overview",keywords:["casibase","ai","knowledge database"],authors:["kv-chiu","palp1tate"]},sidebar:"tutorialSidebar",previous:{title:"The Basics",permalink:"/ja/docs/category/the-basics"},next:{title:"Core Concepts",permalink:"/ja/docs/basic/core-concepts"}},d={},m=[{value:"Casibase features",id:"casibase-features",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Step 0 (Pre-knowledge)",id:"step-0-pre-knowledge",level:3},{value:"Step 1 (Importing Knowledge)",id:"step-1-importing-knowledge",level:3},{value:"Step 2 (Retrieving Knowledge)",id:"step-2-retrieving-knowledge",level:3},{value:"Step 3 (Building the Prompt)",id:"step-3-building-the-prompt",level:3},{value:"Step 4 (Achieving the Goal)",id:"step-4-achieving-the-goal",level:3},{value:"Step 5 (Optional Fine-tuning)",id:"step-5-optional-fine-tuning",level:3},{value:"Online demo",id:"online-demo",level:2},{value:"Casibase",id:"casibase",level:3},{value:"Architecture",id:"architecture",level:2},{value:"Supported Models",id:"supported-models",level:2}],u={toc:m},c="wrapper";function g(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Casibase is a Open-Source ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Domain_knowledge"},"Domain Knowledge")," Database & IM & Forum Software powered by ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ChatGPT"},"ChatGPT"),"."),(0,r.kt)("div",{className:i.Z.gradientborder},(0,r.kt)(l.Z,{src:"https://ai.casibase.com",mdxType:"CasdoorCard"})),(0,r.kt)("h2",{id:"casibase-features"},"Casibase features"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Front-end and back-end separate architecture, developed by Golang, Casibase supports high concurrency, provides web-based managing UI and supports multiple languages(Chinese, English).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Casibase supports third-party applications login, such as GitHub, Google, QQ, WeChat, etc., and supports the extension of third-party login with plugins.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Based on embedding and prompt engineering for knowledge management, Casibase supports customized embedding methods and language models.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Casibase supports integration with existing systems by db sync, so users can transition to Casibase smoothly.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Casibase supports mainstream databases: MySQL, PostgreSQL, SQL Server, etc., and supports the extension of new databases with plugins."))),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("h3",{id:"step-0-pre-knowledge"},"Step 0 (Pre-knowledge)"),(0,r.kt)("p",null,"Casibase's knowledge retrieval process is based on Embedding and Prompt engineering, so it is highly recommended that you take a brief look at how Embedding works. An ",(0,r.kt)("a",{parentName:"p",href:"https://openai.com/blog/new-and-improved-embedding-model"},"introduction")," to Embedding."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"embedding",src:a(8944).Z,width:"1141",height:"313"})),(0,r.kt)("h3",{id:"step-1-importing-knowledge"},"Step 1 (Importing Knowledge)"),(0,r.kt)("p",null,"To get started with Casibase, users need to follow these steps to import knowledge and create a domain-specific knowledge database:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Configure Storage:")," In the Casibase dashboard, users should first configure the storage settings. This involves specifying the storage system to be used for storing knowledge-related files, such as documents, images, or any other relevant data. Users can choose from a variety of storage options based on their preferences and requirements.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Upload Files to Storage:")," Once the storage is set up, users can proceed to upload files containing domain-specific knowledge into the configured storage system. These files can be in various formats, such as text documents, images, or structured data files like CSV or JSON.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Select Embedding Method for Knowledge Generation:")," After the files are uploaded, users have the option to choose the embedding method for generating knowledge and corresponding vectors. Embeddings are numerical representations of textual or visual content, which facilitate efficient similarity search and data analysis."))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"How knowledge is embedded?"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For textual data: Users can choose from various embedding methods, such as Word2Vec, GloVe, or BERT, to convert the textual knowledge into meaningful vectors.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For visual data: If the uploaded files contain images or visual content, users can select image embedding techniques like CNN-based feature extraction to create representative vectors.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"More methods coming soon...")))),(0,r.kt)("p",null,"By following these steps, users can populate their domain knowledge database with relevant information and corresponding embeddings, which will be used for effective searching, clustering, and retrieval of knowledge within Casibase. The embedding process allows the system to understand the context and relationships between different pieces of knowledge, enabling more efficient and insightful knowledge management and exploration."),(0,r.kt)("h3",{id:"step-2-retrieving-knowledge"},"Step 2 (Retrieving Knowledge)"),(0,r.kt)("p",null,"After importing your ",(0,r.kt)("inlineCode",{parentName:"p"},"domain knowledge"),", Casibase transforms it into ",(0,r.kt)("inlineCode",{parentName:"p"},"vectors")," and stores these vectors in a ",(0,r.kt)("inlineCode",{parentName:"p"},"vector database"),". This vector representation enables powerful functions like ",(0,r.kt)("inlineCode",{parentName:"p"},"similarity search")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"efficient retrieval of related information"),". You can quickly find relevant data based on context or content, enabling advanced querying and uncovering valuable insights within your domain knowledge."),(0,r.kt)("h3",{id:"step-3-building-the-prompt"},"Step 3 (Building the Prompt)"),(0,r.kt)("p",null,"Casibase performs a similarity search on the stored knowledge vectors to find the closest match to the user's query. Using the search results, it creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"prompt template")," to frame a specific question for the ",(0,r.kt)("inlineCode",{parentName:"p"},"language model"),". This ensures accurate and contextually relevant responses, delivering comprehensive answers based on the domain knowledge in Casibase."),(0,r.kt)("h3",{id:"step-4-achieving-the-goal"},"Step 4 (Achieving the Goal)"),(0,r.kt)("p",null,"At this stage, using Casibase, you have successfully acquired the knowledge you sought. Through the innovative combination of domain knowledge transformed into vectors and powerful language models like ChatGPT, Casibase provides you with accurate and relevant responses to your inquiries. This enables you to efficiently access and utilize the domain-specific information stored in Casibase, meeting your knowledge requirements with ease."),(0,r.kt)("h3",{id:"step-5-optional-fine-tuning"},"Step 5 (Optional Fine-tuning)"),(0,r.kt)("p",null,"If you find that the results are not entirely satisfactory, you can try to get better results by doing the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Tweaking Language Model Parameters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Asking multiple questions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Optimizing the original files"))),(0,r.kt)("p",null,"By utilizing these fine-tuning options, you can improve the efficiency of your knowledge management in Casibase, ensure that the system is better aligned with your goals, and provide more accurate and insightful information."),(0,r.kt)("admonition",{title:"Hints",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Other ways to optimize results (may require source code changes):"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Updating ",(0,r.kt)("inlineCode",{parentName:"p"},"Embedding")," Results: Refine the knowledge representation by adjusting the embedding results of your domain knowledge.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Modifying ",(0,r.kt)("inlineCode",{parentName:"p"},"Prompt")," Templates: By customizing the prompts, you can elicit more precise responses from the language model.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Exploring Different ",(0,r.kt)("inlineCode",{parentName:"p"},"Language Models"),": Experiment with different models to find the one that best suits your requirements for generating responses.")))),(0,r.kt)("h2",{id:"online-demo"},"Online demo"),(0,r.kt)("h3",{id:"casibase"},"Casibase"),(0,r.kt)("p",null,"Here is an online demo deployed by Casbin."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ai.casibase.com"},"Casibase official demo"))),(0,r.kt)("p",null,"Global admin login:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Username: ",(0,r.kt)("inlineCode",{parentName:"li"},"admin")),(0,r.kt)("li",{parentName:"ul"},"Password: ",(0,r.kt)("inlineCode",{parentName:"li"},"123"))),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"Casibase contains 2 parts:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Language"),(0,r.kt)("th",{parentName:"tr",align:null},"Source code"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Frontend"),(0,r.kt)("td",{parentName:"tr",align:null},"User interface for the casibase application"),(0,r.kt)("td",{parentName:"tr",align:null},"JavaScript + React"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casibase/tree/master/web"},"https://github.com/casbin/casibase/tree/master/web"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Backend"),(0,r.kt)("td",{parentName:"tr",align:null},"Server-side logic and API for casibase"),(0,r.kt)("td",{parentName:"tr",align:null},"Golang + Beego + MySQL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/casbin/casibase"},"https://github.com/casbin/casibase"))))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Architecture",src:a(9432).Z,width:"1051",height:"591"})),(0,r.kt)("h2",{id:"supported-models"},"Supported Models"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Language Model")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Model"),(0,r.kt)("th",{parentName:"tr",align:null},"Sub Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Link"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OpenAI"),(0,r.kt)("td",{parentName:"tr",align:null},"gpt-4-32k-0613\uff0cgpt-4-32k-0314\uff0cgpt-4-32k\uff0cgpt-4-0613\uff0cgpt-4-0314\uff0cgpt-4\uff0cgpt-3.5-turbo-0613\uff0cgpt-3.5-turbo-0301\uff0cgpt-3.5-turbo-16k\uff0cgpt-3.5-turbo-16k-0613\uff0cgpt-3.5-turbo\uff0ctext-davinci-003\uff0ctext-davinci-002\uff0ctext-curie-001\uff0ctext-babbage-001\uff0ctext-ada-001\uff0ctext-davinci-001\uff0cdavinci-instruct-beta\uff0cdavinci\uff0ccurie-instruct-beta\uff0ccurie\uff0cada\uff0cbabbage"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://openai.com/"},"OpenAI"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hugging Face"),(0,r.kt)("td",{parentName:"tr",align:null},"meta-llama/Llama-2-7b, tiiuae/falcon-180B, bigscience/bloom, gpt2, baichuan-inc/Baichuan2-13B-Chat, THUDM/chatglm2-6b"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://huggingface.co/"},"Hugging Face"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Claude"),(0,r.kt)("td",{parentName:"tr",align:null},"claude-2, claude-v1, claude-v1-100k, claude-instant-v1, claude-instant-v1-100k, claude-v1.3, claude-v1.3-100k, claude-v1.2, claude-v1.0, claude-instant-v1.1, claude-instant-v1.1-100k, claude-instant-v1.0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://claude.ai/chats"},"Claude"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OpenRouter"),(0,r.kt)("td",{parentName:"tr",align:null},"google/palm-2-codechat-bison, google/palm-2-chat-bison, openai/gpt-3.5-turbo, openai/gpt-3.5-turbo-16k, openai/gpt-4, openai/gpt-4-32k, anthropic/claude-2, anthropic/claude-instant-v1, meta-llama/llama-2-13b-chat, meta-llama/llama-2-70b-chat, palm-2-codechat-bison, palm-2-chat-bison, gpt-3.5-turbo, gpt-3.5-turbo-16k, gpt-4, gpt-4-32k, claude-2, claude-instant-v1, llama-2-13b-chat, llama-2-70b-chat"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://openrouter.ai/"},"OpenRouter"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ernie"),(0,r.kt)("td",{parentName:"tr",align:null},"ERNIE-Bot, ERNIE-Bot-turbo, BLOOMZ-7B, Llama-2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://yiyan.baidu.com/"},"Ernie"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"iFlytek"),(0,r.kt)("td",{parentName:"tr",align:null},"spark-v1.5, spark-v2.0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://xinghuo.xfyun.cn/"},"iFlytek"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ChatGLM"),(0,r.kt)("td",{parentName:"tr",align:null},"chatglm2-6b"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://chatglm.cn/"},"ChatGLM"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MiniMax"),(0,r.kt)("td",{parentName:"tr",align:null},"abab5-chat"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://api.minimax.chat/"},"MiniMax"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Local"),(0,r.kt)("td",{parentName:"tr",align:null},"custom-model"),(0,r.kt)("td",{parentName:"tr",align:null},"Local Computer")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Embedding Model")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Model"),(0,r.kt)("th",{parentName:"tr",align:null},"Sub Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Link"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OpenAI"),(0,r.kt)("td",{parentName:"tr",align:null},"AdaSimilarity, BabbageSimilarity, CurieSimilarity, DavinciSimilarity, AdaSearchDocument, AdaSearchQuery, BabbageSearchDocument, BabbageSearchQuery, CurieSearchDocument, CurieSearchQuery, DavinciSearchDocument, DavinciSearchQuery, AdaCodeSearchCode, AdaCodeSearchText, BabbageCodeSearchCode, BabbageCodeSearchText, AdaEmbeddingV2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://openai.com/"},"OpenAI"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hugging Face"),(0,r.kt)("td",{parentName:"tr",align:null},"sentence-transformers/all-MiniLM-L6-v2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://huggingface.co/"},"Hugging Face"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cohere"),(0,r.kt)("td",{parentName:"tr",align:null},"embed-english-v2.0, embed-english-light-v2.0, embed-multilingual-v2.0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://cohere.com/"},"Cohere"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ernie"),(0,r.kt)("td",{parentName:"tr",align:null},"default"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://yiyan.baidu.com/"},"Ernie"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Local"),(0,r.kt)("td",{parentName:"tr",align:null},"custom-embedding"),(0,r.kt)("td",{parentName:"tr",align:null},"Local Computer")))))}g.isMDXComponent=!0},4204:(e,t,a)=>{a.d(t,{Z:()=>n});const n={gradientborder:"gradientborder_zL2q"}},9432:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Architecture-casibase-572fd0dbb1f860ae50d89ea8460ced90.png"},8944:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/embedding-f845e1978e6685e7868b809f6101b115.gif"}}]);
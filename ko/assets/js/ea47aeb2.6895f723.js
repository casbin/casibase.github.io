"use strict";(self.webpackChunkcasibase_website=self.webpackChunkcasibase_website||[]).push([[310],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},668:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"(Optional) Try with Docker",description:"Try Casibase with Docker",keywords:["Casibase","Docker"],authors:["hsluoyz"]},i=void 0,s={unversionedId:"basic/try-with-docker",id:"basic/try-with-docker",title:"(Optional) Try with Docker",description:"Try Casibase with Docker",source:"@site/docs/basic/try-with-docker.md",sourceDirName:"basic",slug:"/basic/try-with-docker",permalink:"/ko/docs/basic/try-with-docker",draft:!1,editUrl:"https://github.com/casibase/casibase-website/edit/master/docs/basic/try-with-docker.md",tags:[],version:"current",frontMatter:{title:"(Optional) Try with Docker",description:"Try Casibase with Docker",keywords:["Casibase","Docker"],authors:["hsluoyz"]},sidebar:"tutorialSidebar",previous:{title:"Server Installation",permalink:"/ko/docs/basic/server-installation"},next:{title:"Casdoor-SSO",permalink:"/ko/docs/basic/casdoor-sso"}},l={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Hardware",id:"hardware",level:3},{value:"OS",id:"os",level:3},{value:"Docker",id:"docker",level:3},{value:"Get the image",id:"get-the-image",level:2},{value:"<strong>Option-1</strong>: Use the toy database",id:"option-1-use-the-toy-database",level:3},{value:"<strong>Option-2</strong>: Try with docker-compose",id:"option-2-try-with-docker-compose",level:3},{value:"<strong>Option-3</strong>: Try directly with the standard image",id:"option-3-try-directly-with-the-standard-image",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("h3",{id:"hardware"},"Hardware"),(0,r.kt)("p",null,"If you want to build the Docker image yourself, please ensure that your machine has at least ",(0,r.kt)("strong",{parentName:"p"},"2GB")," of memory. Casibase's frontend is an NPM project of React. Building the frontend requires at least ",(0,r.kt)("strong",{parentName:"p"},"2GB")," of memory. Having less than ",(0,r.kt)("strong",{parentName:"p"},"2GB")," of memory may result in a frontend build failure."),(0,r.kt)("p",null,"If you only need to run the pre-built image, please ensure that your machine has at least ",(0,r.kt)("strong",{parentName:"p"},"100MB")," of memory."),(0,r.kt)("h3",{id:"os"},"OS"),(0,r.kt)("p",null,"All operating systems (Linux, Windows, and macOS) are supported."),(0,r.kt)("h3",{id:"docker"},"Docker"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("strong",{parentName:"p"},"Docker (docker-engine version >= 17.05)")," in Linux or ",(0,r.kt)("strong",{parentName:"p"},"Docker Desktop")," in Windows and macOS."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker"))),(0,r.kt)("p",null,"Regardless of the operating system, users must ensure that they have ",(0,r.kt)("strong",{parentName:"p"},"docker-engine version >= 17.05"),". This is because we utilize the multi-stage build feature in the docker-compose.yml, which is supported in versions 17.05 and above. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/develop/develop-images/multistage-build/"},"https://docs.docker.com/develop/develop-images/multistage-build/"),"."),(0,r.kt)("p",null,"If you are also using docker-compose, please ensure that you have ",(0,r.kt)("strong",{parentName:"p"},"docker-compose version >= 2.2"),". For Linux users, you also need to make sure that docker-compose is installed, as it is separate from docker-engine."),(0,r.kt)("h2",{id:"get-the-image"},"Get the image"),(0,r.kt)("p",null,"We have provided two DockerHub images:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Suggestion"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/casbin/casibase-all-in-one"},"casibase-all-in-one")),(0,r.kt)("td",{parentName:"tr",align:null},"Both Casibase and a MySQL database are included in the image"),(0,r.kt)("td",{parentName:"tr",align:null},"This image already includes a toy database and is only for testing purposes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://hub.docker.com/r/casbin/casibase"},"casibase")),(0,r.kt)("td",{parentName:"tr",align:null},"Only Casibase is included in the image"),(0,r.kt)("td",{parentName:"tr",align:null},"This image can be connected to your own database and used in production")))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"casbin/casibase-all-in-one: This image includes the casibase binary, a MySQL database, and all the necessary configurations. It is designed for new users who want to try Casibase quickly. With this image, you can start Casibase immediately with just one or two commands, without any complex configuration. However, please note that we ",(0,r.kt)("strong",{parentName:"li"},"do not recommend")," using this image in a production environment.")),(0,r.kt)("h3",{id:"option-1-use-the-toy-database"},(0,r.kt)("strong",{parentName:"h3"},"Option-1"),": Use the toy database"),(0,r.kt)("p",null,"Run the container with port ",(0,r.kt)("inlineCode",{parentName:"p"},"14000")," exposed to the host. The image will be automatically pulled if it doesn't exist on the local host."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -p 14000:14000 casbin/casibase-all-in-one\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull casbin/casibase-all-in-one:$(curl -sS \"https://hub.docker.com/v2/repositories/casbin/casibase-all-in-one/tags/?page_size=1&page=2\" | sed 's/,/,\\n/g' | grep '\"name\"' |awk -F '\"' '{print $4}')\n")),(0,r.kt)("p",null,"Note: The above command utilizes Linux tools like ",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sed"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"grep"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"awk"),". If you are using Windows, make sure you run it in a Linux-style shell like ",(0,r.kt)("inlineCode",{parentName:"p"},"Git Shell")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Cygwin"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"CMD")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"PowerShell")," won't work."),(0,r.kt)("p",null,":::"),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:14000"},(0,r.kt)("strong",{parentName:"a"},"http://localhost:14000"))," in your browser. Log into the Casibase dashboard with the default global admin account: ",(0,r.kt)("inlineCode",{parentName:"p"},"built-in/admin")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"admin\n123\n")),(0,r.kt)("h3",{id:"option-2-try-with-docker-compose"},(0,r.kt)("strong",{parentName:"h3"},"Option-2"),": Try with docker-compose"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull casbin/casibase:$(curl -sS \"https://hub.docker.com/v2/repositories/casbin/casibase/tags/?page_size=1&page=2\" | sed 's/,/,\\n/g' | grep '\"name\"' |awk -F '\"' '{print $4}')\n")),(0,r.kt)("p",null,"Note: The above command utilizes Linux tools like ",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sed"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"grep"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"awk"),". If you are using Windows, make sure you run it in a Linux-style shell like ",(0,r.kt)("inlineCode",{parentName:"p"},"Git Shell")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Cygwin"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"CMD")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"PowerShell")," won't work."),(0,r.kt)("p",null,":::"),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/app.conf")," directory in the same directory level as the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file. Then, copy ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casibase/casibase/blob/master/conf/app.conf"},"app.conf")," from Casibase. For more details about ",(0,r.kt)("inlineCode",{parentName:"p"},"app.conf"),", you can see ",(0,r.kt)("a",{parentName:"p",href:"/docs/basic/server-installation#via-ini-file"},"Via Ini file"),"."),(0,r.kt)("p",null,"Create a separate database using docker-compose:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up\n")),(0,r.kt)("p",null,"That's it! \ud83d\udee9\ufe0f"),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:14000"},(0,r.kt)("strong",{parentName:"a"},"http://localhost:14000"))," in your browser. Log into the Casibase dashboard with the default global admin account: ",(0,r.kt)("inlineCode",{parentName:"p"},"built-in/admin")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"admin\n123\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: If you dig deeper into the docker-compose.yml file, you may be puzzled by the environment variable we created called \"RUNNING_IN_DOCKER\". When the database 'db' is created via docker-compose, it is available on your PC's localhost but not the localhost of the Casibase container. To prevent you from running into troubles caused by modifying app.conf, which can be quite difficult for a new user, we provided this environment variable and pre-assigned it in the docker-compose.yml. When this environment variable is set to true, localhost will be replaced with host.docker.internal so that Casibase can access the database.")),(0,r.kt)("h3",{id:"option-3-try-directly-with-the-standard-image"},(0,r.kt)("strong",{parentName:"h3"},"Option-3"),": Try directly with the standard image"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull casbin/casibase:$(curl -sS \"https://hub.docker.com/v2/repositories/casbin/casibase/tags/?page_size=1&page=2\" | sed 's/,/,\\n/g' | grep '\"name\"' |awk -F '\"' '{print $4}')\n")),(0,r.kt)("p",null,"Note: The above command utilizes Linux tools like ",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sed"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"grep"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"awk"),". If you are using Windows, make sure you run it in a Linux-style shell like ",(0,r.kt)("inlineCode",{parentName:"p"},"Git Shell")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Cygwin"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"CMD")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"PowerShell")," won't work."),(0,r.kt)("p",null,":::"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If it is not convenient to mount the configuration file to a container, using environment variables is also a possible solution."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="example"',title:'"example"'},"\ndocker run \\\n  -e driverName=mysql \\\n  -e dataSourceName='user:password@tcp(x.x.x.x:3306)/' \\\n  -p 14000:14000 \\\n  casbin/casibase:latest\n\n"))),(0,r.kt)("p",null,"Create ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/app.conf"),". You can copy it from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casibase/casibase/blob/master/conf/app.conf"},"conf/app.conf")," in Casibase. For more details about ",(0,r.kt)("inlineCode",{parentName:"p"},"app.conf"),", you can see ",(0,r.kt)("a",{parentName:"p",href:"/docs/basic/server-installation#via-ini-file"},"Via Ini file"),"."),(0,r.kt)("p",null,"Then run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run  -p 14000:14000 -v /folder/of/app.conf:/conf casbin/casibase:latest\n")),(0,r.kt)("p",null,"Anyway, just ",(0,r.kt)("strong",{parentName:"p"},"mount the app.conf to /conf/app.conf")," and start the container."),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:14000"},(0,r.kt)("strong",{parentName:"a"},"http://localhost:14000"))," in your browser. Log into the Casibase dashboard with the default global admin account: ",(0,r.kt)("inlineCode",{parentName:"p"},"built-in/admin")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"admin\n123\n")))}u.isMDXComponent=!0}}]);
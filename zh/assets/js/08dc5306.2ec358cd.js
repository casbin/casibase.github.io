"use strict";(self.webpackChunkcasibase_website=self.webpackChunkcasibase_website||[]).push([[385],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=o,k=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4106:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={title:"Server Installation",description:"Install and configure Casdoor server",keywords:["Casibase server","installation","configuration"],authors:["kv-chiu","palp1tate"]},i=void 0,s={unversionedId:"basic/server-installation",id:"basic/server-installation",title:"Server Installation",description:"Install and configure Casdoor server",source:"@site/docs/basic/server-installation.md",sourceDirName:"basic",slug:"/basic/server-installation",permalink:"/zh/docs/basic/server-installation",draft:!1,editUrl:"https://github.com/casbin/casibase-website/edit/master/docs/basic/server-installation.md",tags:[],version:"current",frontMatter:{title:"Server Installation",description:"Install and configure Casdoor server",keywords:["Casibase server","installation","configuration"],authors:["kv-chiu","palp1tate"]},sidebar:"tutorialSidebar",previous:{title:"Core Concepts",permalink:"/zh/docs/basic/core-concepts"},next:{title:"(Optional) Try with Docker",permalink:"/zh/docs/basic/try-with-docker"}},l={},p=[{value:"Requirements",id:"requirements",level:2},{value:"OS",id:"os",level:3},{value:"Environment",id:"environment",level:3},{value:"Database",id:"database",level:3},{value:"Download",id:"download",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Configure Casdoor",id:"configure-casdoor",level:3},{value:"Configure Database",id:"configure-database",level:3},{value:"MySQL",id:"mysql",level:4},{value:"PostgreSQL",id:"postgresql",level:4},{value:"CockroachDB",id:"cockroachdb",level:4},{value:"Sqlite3",id:"sqlite3",level:4},{value:"Custom configuration",id:"custom-configuration",level:3},{value:"Run",id:"run",level:2},{value:"Development mode",id:"development-mode",level:3},{value:"Backend",id:"backend",level:4},{value:"Frontend",id:"frontend",level:4},{value:"Production mode",id:"production-mode",level:3},{value:"Backend",id:"backend-1",level:4},{value:"Frontend",id:"frontend-1",level:4},{value:"Preview",id:"preview",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("h3",{id:"os"},"OS"),(0,o.kt)("p",null,"All major operating systems including Windows, Linux and macOS are supported."),(0,o.kt)("h3",{id:"environment"},"Environment"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://go.dev/dl/"},"Go 1.17+")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org"},"Node.js LTS (18)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://classic.yarnpkg.com/en/docs/install"},"Yarn 1.x"))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The use of Casibase is divided into two steps:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"step1: ",(0,o.kt)("a",{parentName:"li",href:"https://casdoor.org/docs/basic/server-installation"},"Deploy and run Casdoor")),(0,o.kt)("li",{parentName:"ul"},"step2: Deploy and run Casibase (this docs)")),(0,o.kt)("p",{parentName:"admonition"},"We strongly suggest you use ",(0,o.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/docs/install"},"Yarn 1.x")," to run & build Casdoor&Casibase frontend, using NPM might cause UI styling issues, see more details at: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casdoor/casdoor/issues/294"},"casdoor#294"))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"For ",(0,o.kt)("strong",{parentName:"p"},"Chinese")," users, in order to download the Go dependency packages successfully, you need to use a Go proxy by Configuring the GOPROXY environment variable. We strongly recommend: ",(0,o.kt)("a",{parentName:"p",href:"https://goproxy.cn/"},"https://goproxy.cn/"))),(0,o.kt)("h3",{id:"database"},"Database"),(0,o.kt)("p",null,"Casibase uses ",(0,o.kt)("a",{parentName:"p",href:"https://xorm.io/"},"XORM")," to talk to the database. Based on ",(0,o.kt)("a",{parentName:"p",href:"https://gitea.com/xorm/xorm#drivers-support"},"Xorm Drivers Support"),", Casibase currently provides support for following databases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MySQL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MariaDB")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PostgreSQL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CockroachDB")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SQL Server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Oracle")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SQLite 3")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TiDB"))),(0,o.kt)("h2",{id:"download"},"Download"),(0,o.kt)("p",null,"The source code of Casibase is hosted at GitHub: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/casibase"},"https://github.com/casbin/casibase"),". Both the Go backend code and React frontend code are inside the single repository."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Language"),(0,o.kt)("th",{parentName:"tr",align:null},"Source code"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Frontend"),(0,o.kt)("td",{parentName:"tr",align:null},"Web frontend UI for Casibase"),(0,o.kt)("td",{parentName:"tr",align:null},"JavaScript + React"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casibase/tree/master/web"},"https://github.com/casbin/casibase/tree/master/web"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Backend"),(0,o.kt)("td",{parentName:"tr",align:null},"RESTful API backend for Casibase"),(0,o.kt)("td",{parentName:"tr",align:null},"Golang + Beego + XORM"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casibase"},"https://github.com/casbin/casibase"))))),(0,o.kt)("p",null,"Casibase supports ",(0,o.kt)("inlineCode",{parentName:"p"},"Go Modules"),". To download the code, you can just simply clone the code via git:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd path/to/folder\ngit clone https://github.com/casbin/casibase\n")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"configure-casdoor"},"Configure Casdoor"),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/basic/casdoor-sso"},"Casdoor-SSO")," section to configure Casdoor."),(0,o.kt)("p",null,"Remember your ",(0,o.kt)("inlineCode",{parentName:"p"},"clientId"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"clientSecret"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"organization"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"application")," and so on in Casdoor configuration, we will use them later."),(0,o.kt)("h3",{id:"configure-database"},"Configure Database"),(0,o.kt)("p",null,"Casibase supports mysql, mssql, sqlite3, postgres. Casibase uses mysql by default."),(0,o.kt)("h4",{id:"mysql"},"MySQL"),(0,o.kt)("p",null,"Casibase will store its users, nodes and topics information in a MySQL database named: ",(0,o.kt)("inlineCode",{parentName:"p"},"casibase"),". If the database does not exist, it needs to be created manually. The DB connection string can be specified at: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casbin/casibase/blob/master/conf/app.conf"},"https://github.com/casbin/casibase/blob/master/conf/app.conf")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"driverName = mysql\ndataSourceName = root:123456@tcp(localhost:3306)/\ndbName = casdoor\n")),(0,o.kt)("h4",{id:"postgresql"},"PostgreSQL"),(0,o.kt)("p",null,"Since we must choose a database when opening Postgres with xorm, you should prepare a database manually before running Casibase."),(0,o.kt)("p",null,"Let's assume that you have already prepared a database called ",(0,o.kt)("inlineCode",{parentName:"p"},"casibase"),", then you should specify ",(0,o.kt)("inlineCode",{parentName:"p"},"app.conf")," like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},'driverName = postgres\ndataSourceName = "user=postgres password=postgres host=localhost port=5432 sslmode=disable dbname=casibase"\ndbName =\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For PostgreSQL, make sure ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSourceName")," has non-empty ",(0,o.kt)("inlineCode",{parentName:"p"},"dbName")," and leave the standalone ",(0,o.kt)("inlineCode",{parentName:"p"},"dbName")," field empty like the above example.")),(0,o.kt)("h4",{id:"cockroachdb"},"CockroachDB"),(0,o.kt)("p",null,"You can also use cockroachdb with postgres driver. It has same configuration as postgreSQL."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},'driverName = postgres\ndataSourceName = "user=postgres password=postgres host=localhost port=5432 sslmode=disable dbname=casibase serial_normalization=virtual_sequence"\ndbName =\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For CockroachDB, don't forget to add ",(0,o.kt)("inlineCode",{parentName:"p"},"serial_normalization=virtual_sequence")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSourceName")," like the above example. otherwise you will get error regarding existed database, whenever the service started or restarted. Notice, this must be added before the database created.")),(0,o.kt)("h4",{id:"sqlite3"},"Sqlite3"),(0,o.kt)("p",null,"You should specify ",(0,o.kt)("inlineCode",{parentName:"p"},"app.conf")," like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},'driverName = sqlite\ndataSourceName = "file:casibase.db?cache=shared"\ndbName = casibase\n')),(0,o.kt)("h3",{id:"custom-configuration"},"Custom configuration"),(0,o.kt)("p",null,"Casibase supports custom configuration, you can modify the configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/app.conf")," to change the configuration."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Backend (conf/app.conf)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"casdoorEndpoint = <Your Casdoor endpoint>\nclientId = <Your Casdoor application's client ID>\nclientSecret = <Your Casdoor application's client secret>\ncasdoorOrganization = <Your Casdoor organization name>\ncasdoorApplication = <Your Casdoor application name>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Frontend (web/src/Conf.js)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'serverUrl: "<Your Casdoor endpoint>"\nclientId: "<Your Casdoor application\'s client ID>" \nappName: "<Your Casdoor application name>"\norganizationName: "<Your Casdoor organization name>"\n')),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("p",null,"There are currently two methods to start, you can choose one according to your own situation."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Casibase")," requires ",(0,o.kt)("strong",{parentName:"p"},"Casdoor")," to provide access control and some back-end services, so you must make sure ",(0,o.kt)("strong",{parentName:"p"},"Casdoor")," is running properly before running ",(0,o.kt)("strong",{parentName:"p"},"Casibase"),"."),(0,o.kt)("p",{parentName:"admonition"},"How to install and run Casdoor:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://casdoor.org/docs/basic/server-installation"},"Casdoor Installation")))),(0,o.kt)("h3",{id:"development-mode"},"Development mode"),(0,o.kt)("h4",{id:"backend"},"Backend"),(0,o.kt)("p",null,"Casibase's Go backend runs at port 14000 by default. You can start the Go backend with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go run main.go\n")),(0,o.kt)("p",null,"After the server is successfully running, we can start the frontend part."),(0,o.kt)("h4",{id:"frontend"},"Frontend"),(0,o.kt)("p",null,"Casibase's frontend is a very classic ",(0,o.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},(0,o.kt)("strong",{parentName:"a"},"Create-React-App (CRA)"))," project. It runs at port ",(0,o.kt)("inlineCode",{parentName:"p"},"13001")," by default. Use the following commands to run the frontend:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd web\nyarn install\nyarn start\n")),(0,o.kt)("h3",{id:"production-mode"},"Production mode"),(0,o.kt)("h4",{id:"backend-1"},"Backend"),(0,o.kt)("p",null,"Build Casibase Go backend code into executable and start it."),(0,o.kt)("p",null,"For Linux:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go build\n./casibase\n")),(0,o.kt)("p",null,"For Windows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go build\ncasibase.exe\n")),(0,o.kt)("h4",{id:"frontend-1"},"Frontend"),(0,o.kt)("p",null,"Build Casibase frontend code into static resources (.html, .js, .css files):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd web\nyarn install\nyarn build\n")),(0,o.kt)("h2",{id:"preview"},"Preview"),(0,o.kt)("p",null,"Visit: ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:13001")," in your browser. Login into Casibase dashboard with the user account you have just registered in Casdoor:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"login",src:a(9968).Z,width:"2560",height:"1189"})),(0,o.kt)("p",null,"Then you will go to the home page of Casibase:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"home",src:a(5790).Z,width:"2560",height:"1187"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To use another port, please edit ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/app.conf")," and modify ",(0,o.kt)("inlineCode",{parentName:"p"},"httpport"),", then restart the Go backend.")))}u.isMDXComponent=!0},5790:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/casibase-home-6513a7f1b023003c9a7a0a0e33c78116.png"},9968:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/login-casibase-ff49a9d36c405492932eafbd0caf07e5.png"}}]);
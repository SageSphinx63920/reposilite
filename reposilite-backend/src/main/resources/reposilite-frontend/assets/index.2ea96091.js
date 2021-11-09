var Se=Object.defineProperty;var _e=Object.getOwnPropertySymbols;var Le=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable;var me=(o,t,i)=>t in o?Se(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i,Q=(o,t)=>{for(var i in t||(t={}))Le.call(t,i)&&me(o,i,t[i]);if(_e)for(var i of _e(t))Me.call(t,i)&&me(o,i,t[i]);return o};import{r as R,a as se,u as ge,w as U,d as Ee,b as Oe,c as _,o as d,e as p,f as r,g as m,t as $,h as C,n as ae,i as he,E as je,S as qe,j as f,k as x,l as fe,m as Y,v as Z,p as Pe,q as S,s as ve,x as be,y as B,z as M,A as O,P as ye,B as Ve,C as W,D as G,F as j,G as P,T as Re,H as Be,I as Ae,J as He,K as De,L as Ne,M as ke,N as ze,O as Ue,Q as We,R as Ge,U as Ke,V as Fe}from"./vendor.ce89086a.js";const Qe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function i(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function e(s){if(s.ep)return;s.ep=!0;const l=i(s);fetch(s.href,l)}};Qe();const D=R({isDark:!1}),re="dark-theme";function xe(){return{theme:D,fetchTheme:()=>{localStorage.getItem(re)===null?D.isDark=window.matchMedia("(prefers-color-scheme: dark)").matches:D.isDark=localStorage.getItem(re)==="true"},toggleTheme:()=>{D.isDark=!D.isDark,localStorage.setItem(re,D.isDark)}}}function N(){const o=!"{{REPOSILITE.BASE_PATH}}".includes("REPOSILITE.BASE_PATH"),t=o?"{{REPOSILITE.BASE_PATH}}":"/",i=o?"{{REPOSILITE.ID}}":"reposilite-repository",e=o?"{{REPOSILITE.TITLE}}":"Reposilite Repository",s=o?"{{REPOSILITE.DESCRIPTION}}":"Public Maven repository hosted through the Reposilite",l=o?"{{REPOSILITE.ORGANIZATION_WEBSITE}}":location.protocol+"//"+location.host+t;return{available:o,basePath:t,id:i,title:e,description:s,organizationWebsite:l,organizationLogo:o?"{{REPOSILITE.ORGANIZATION_LOGO}}":"https://avatars.githubusercontent.com/u/75123628?s=200&v=4",icpLicense:o?"{{REPOSILITE.ICP_LICENSE}}":"\u56FDICP\u5907000000000\u53F7"}}const{basePath:Ye}=N(),ie=()=>window.location.protocol+"//"+location.host+Ye,Ze=()=>ie().endsWith("/")?ie().slice(0,-1):ie(),K=o=>Ze()+o,J=(o,t)=>{const i=()=>o&&t?e(o,t):{},e=(a,u)=>({headers:{Authorization:`xBasic ${btoa(`${a}:${u}`)}`}}),s=(a,u)=>se.get(K(a),Q({},u||i())),l=(a,u,c)=>se.put(K(a),u,{headers:Q({"Content-Type":"text/plain"},(c||i()).headers)});return{createURL:K,client:{auth:{me(a,u){return s("/api/auth/me",e(a,u))}},console:{},maven:{content(a){return s(`/${a}`)},details(a){return s(`/api/maven/details/${a||""}`)},download(a){return s(`/${a}`,Q({responseType:"blob"},i()))}},settings:{content(a){return s(`/api/settings/content/${a}`)},updateContent(a,u){return l(`/api/settings/content/${a}`,u)}}}}},q="",le="session-token-name",ce="session-token-secret",Je="access-token:manager",X=R({name:localStorage.getItem(le)||q,secret:localStorage.getItem(ce)||q}),we={id:q,name:q,createdAt:q,permissions:[],routes:[]},ee=R({details:we});function F(){const o=(n,a)=>{localStorage.setItem(le,n),X.name=n,localStorage.setItem(ce,a),X.secret=a},t=()=>{o(q,q),ee.details=we},i=async(n,a)=>{try{const{client:u}=J();if(n==q)throw new Error("Missing credentials");const c=await u.auth.me(n,a);return o(n,a),ee.details=c.data,{token:X,session:ee}}catch(u){throw t(),u}};return{token:X,session:ee,login:i,logout:t,fetchSession:()=>i(localStorage.getItem(le),localStorage.getItem(ce)),isLogged:n=>(n==null?void 0:n.name)!=q,hasManagerPermission:n=>{var a;return(a=n==null?void 0:n.permissions)==null?void 0:a.find(u=>u.identifier==Je)}}}const te=R({watchable:0,path:""});function Xe(o){const t=ge();return U(()=>t.params.qualifier,i=>{te.path=i,te.watchable++},{immediate:!0}),U(()=>o.name,i=>te.watchable++),{qualifier:te}}var y=(o,t)=>{for(const[i,e]of t)o[i]=e;return o};const et=Ee({setup(){const{title:o,description:t,organizationLogo:i,icpLicense:e}=N();Oe({title:o,description:t});const{theme:s,fetchTheme:l}=xe(),{fetchSession:n,token:a,session:u}=F(),{qualifier:c}=Xe(a);return l(),n().catch(g=>{}),{theme:s,qualifier:c,token:a,session:u,icpLicense:e}}}),tt={class:"min-h-screen dark:bg-black dark:text-white"},ot={key:0,class:"absolute h-8 pb-2 w-full text-center text-xs dark:bg-black dark:text-white"},nt={href:"https://beian.miit.gov.cn",target:"_blank"};function st(o,t,i,e,s,l){const n=_("router-view");return d(),p("div",{class:ae({dark:o.theme.isDark})},[r("div",tt,[m(n,{class:"router-view-full",qualifier:o.qualifier,token:o.token,session:o.session},null,8,["qualifier","token","session"]),o.icpLicense?(d(),p("div",ot,[r("a",nt,$(o.icpLicense),1)])):C("",!0)])],2)}var at=y(et,[["render",st]]);const rt={},it={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},lt=r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),ct=[lt];function dt(o,t){return d(),p("svg",it,ct)}var ut=y(rt,[["render",dt]]);const pt={components:{GlobeIcon:ut},setup(){const{description:o,organizationWebsite:t,organizationLogo:i}=N();return{description:o,organizationWebsite:t,organizationLogo:i}}},_t={class:"bg-gray-100 dark:bg-black"},mt={class:"container mx-auto flex flex-row <sm:flex-col <sm:items-center"},gt={class:"w-35 <sm:mb-2"},ht=["src"],ft={class:"flex flex-col justify-center px-10 <sm:px-0"},vt={class:"<sm:text-center"},bt={class:"flex flex-row py-2 <sm:justify-center"},yt=["href"];function kt(o,t,i,e,s,l){const n=_("GlobeIcon");return d(),p("div",_t,[r("div",mt,[r("div",gt,[r("img",{class:"border-2 rounded-full dark:border-gray-700",src:e.organizationLogo},null,8,ht)]),r("div",ft,[r("div",vt,$(e.description),1),r("div",bt,[m(n),r("a",{class:"px-3 text-gray-500",href:e.organizationWebsite},$(e.organizationWebsite),9,yt)])])])])}var xt=y(pt,[["render",kt]]);const wt={},$t={class:"mx-2 py-1.5 rounded-full bg-white dark:bg-gray-900 font-bold px-6 text-sm cursor-pointer max-h-35px min-w-93px"};function It(o,t){return d(),p("div",$t,[he(o.$slots,"default")])}var Ct=y(wt,[["render",It]]);const Tt={inheritAttrs:!1,components:{VueFinalModal:je,ModalsContainer:qe},setup(){const{login:o}=F(),t=f(!1),i=f(""),e=f(""),s=()=>t.value=!1;return{name:i,secret:e,close:s,showLogin:t,signin:(n,a)=>{o(n,a).then(u=>S(`Dashboard accessed as ${n}`,{position:"bottom-right"})).then(u=>s()).catch(u=>{console.log(u),S(`${u.response.status}: ${u.response.data.message}`,{type:"danger"})})}}}},$e=o=>(ve("data-v-3229371c"),o=o(),be(),o),St={id:"login-modal"},Lt={class:"relative border bg-white dark:bg-gray-900 border-gray-100 dark:border-black m-w-20 py-5 px-10 rounded-2xl shadow-xl text-center"},Mt=$e(()=>r("p",{class:"font-bold text-xl pb-4"},"Login with access token",-1)),Et={class:"text-right mt-1"},Ot=$e(()=>r("button",{class:"bg-gray-100 dark:bg-gray-800 py-2 my-3 rounded-md cursor-pointer"},"Sign in",-1));function jt(o,t,i,e,s,l){const n=_("vue-final-modal");return d(),p("div",St,[m(n,Pe({modelValue:e.showLogin,"onUpdate:modelValue":t[5]||(t[5]=a=>e.showLogin=a)},o.$attrs,{classes:"flex justify-center items-center"}),{default:x(()=>[r("div",Lt,[Mt,r("form",{class:"flex flex-col w-96 <sm:w-65",onSubmit:t[3]||(t[3]=fe(a=>e.signin(e.name,e.secret),["prevent"]))},[Y(r("input",{placeholder:"Name","onUpdate:modelValue":t[0]||(t[0]=a=>e.name=a),type:"text",class:"input"},null,512),[[Z,e.name]]),Y(r("input",{placeholder:"Secret","onUpdate:modelValue":t[1]||(t[1]=a=>e.secret=a),type:"password",class:"input"},null,512),[[Z,e.secret]]),r("div",Et,[r("button",{onClick:t[2]||(t[2]=a=>e.close()),class:"text-blue-400 text-xs"},"\u2190 Back to index")]),Ot],32),r("button",{class:"absolute top-0 right-0 mt-5 mr-5",onClick:t[4]||(t[4]=a=>e.close())},"\u{1F5D9}")])]),_:1},16,["modelValue"]),r("div",{onClick:t[6]||(t[6]=a=>e.showLogin=!0)},[he(o.$slots,"button",{},void 0,!0)])])}var qt=y(Tt,[["render",jt],["__scopeId","data-v-3229371c"]]);const Pt={},Vt={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Rt=r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1),Bt=[Rt];function At(o,t){return d(),p("svg",Vt,Bt)}var Ht=y(Pt,[["render",At]]);const Dt={},Nt={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},zt=r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1),Ut=[zt];function Wt(o,t){return d(),p("svg",Nt,Ut)}var Gt=y(Dt,[["render",Wt]]);const Kt={},Ft={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Qt=r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"},null,-1),Yt=[Qt];function Zt(o,t){return d(),p("svg",Ft,Yt)}var Jt=y(Kt,[["render",Zt]]);const Xt={components:{LogoutIcon:Jt,MenuButton:Ct,LoginModal:qt,MoonIcon:Ht,SunIcon:Gt},props:{token:{type:Object,required:!0}},setup(o){const{theme:t,toggleTheme:i}=xe(),{title:e}=N(),{isLogged:s,logout:l}=F(),n=o.token,a=B(()=>s(n));return{token:n,title:e,logged:a,signout:()=>l(),theme:t,toggleTheme:i}}},eo={class:"flex flex-row <sm:max-w-100px <sm:flex-wrap <sm:flex-1 <sm:justify-end <sm:min-w-1/2"},to={key:0,class:"pt-1.1 px-2 <sm:py-2 <sm:max-w-full <sm:truncate"},oo=O(" Welcome "),no={class:"font-bold underline"},so=O(" Sign in "),ao=O(" Logout "),ro={key:2,class:"hidden px-2.7 pt-0.8 mr-1.5 cursor-pointer rounded-full bg-white dark:bg-gray-900 max-h-35px <sm:block"};function io(o,t,i,e,s,l){const n=_("MenuButton"),a=_("LoginModal"),u=_("LogoutIcon"),c=_("SunIcon"),g=_("MoonIcon");return d(),p("nav",eo,[e.logged?(d(),p("div",to,[oo,r("span",no,$(e.token.name),1)])):C("",!0),m(a,null,{button:x(()=>[e.logged?C("",!0):(d(),M(n,{key:0},{default:x(()=>[so]),_:1}))]),_:1}),e.logged?(d(),M(n,{key:1,onClick:t[0]||(t[0]=v=>e.signout()),class:"<sm:hidden"},{default:x(()=>[ao]),_:1})):C("",!0),e.logged?(d(),p("div",ro,[m(u,{onClick:t[1]||(t[1]=v=>e.signout())})])):C("",!0),r("div",{class:"pl-2 pt-1.3 cursor-pointer rounded-full bg-white dark:bg-gray-900 max-h-35px",onClick:t[2]||(t[2]=v=>e.toggleTheme())},[e.theme.isDark?(d(),M(c,{key:0,class:"mr-1.9"})):(d(),M(g,{key:1,class:"mr-1.5"}))])])}var lo=y(Xt,[["render",io]]);const co={components:{Hero:xt,Menu:lo},props:{token:{type:Object,required:!0}},setup(o){const t=o.token,{title:i}=N();return{token:t,title:i}}},uo={class:"bg-gray-100 dark:bg-black dark:text-white"},po={class:"container mx-auto flex flex-row py-10 justify-between <sm:pb-2 <sm:pt-5 <sm:px-5 <sm:justify-start"},_o={class:"text-xl font-medium py-1 <sm:w-1/2"};function mo(o,t,i,e,s,l){const n=_("router-link"),a=_("Menu"),u=_("Hero");return d(),p("header",uo,[r("div",po,[r("h1",_o,[m(n,{to:"/"},{default:x(()=>[O($(e.title),1)]),_:1})]),m(a,{token:e.token,class:"mt-0.5"},null,8,["token"])]),m(u,{class:"pt-2 pb-10 <sm:pb-4"})])}var go=y(co,[["render",mo]]);function ho(){return{createSnippets:(t,i,e)=>[{name:"Maven",lang:"xml",snippet:`
<dependency>
  <groupId>${t}</groupId>
  <artifactId>${i}</artifactId>
  <version>${e}</version>
</dependency>`.trim()},{name:"Gradle Groovy",lang:"xml",snippet:`implementation "${t}:${i}:${e}"`},{name:"Gradle Kotlin",lang:"kotlin",snippet:`implementation("${t}:${i}:${e}")`},{name:"SBT",lang:"scala",snippet:`"${t}" %% "${i}" %% "${e}"`}]}}function fo(){const{basePath:o,id:t,title:i}=N();return{createRepositories:s=>{const l=B(()=>s.path.split("/")[0]),n=t+(s.path?`-${l.value}`:""),a=location.protocol+"//"+location.host+o+(o.endsWith("/")?"":"/")+(s.path?`${l.value}`:"{repository}");return[{name:"Maven",lang:"xml",snippet:`
<repository>
  <id>${n}</id>
  <name>${i}</name>
  <url>${a}</url>
</repository>
        `.trim()},{name:"Gradle Groovy",lang:"groovy",snippet:`maven {
    url "${a}"
 }`.trim()},{name:"Gradle Kotlin",lang:"kotlin",snippet:`maven {
    url = uri("${a}")
}`},{name:"SBT",lang:"scala",snippet:`resolvers += "${n}" at "${a}"`}]}}}const vo=new DOMParser;function bo(){return{parseMetadata:s=>vo.parseFromString(s,"text/xml"),groupId:s=>{var l,n;return(n=(l=s==null?void 0:s.getElementsByTagName("groupId")[0])==null?void 0:l.firstChild)==null?void 0:n.nodeValue},artifactId:s=>{var l,n;return(n=(l=s==null?void 0:s.getElementsByTagName("artifactId")[0])==null?void 0:l.firstChild)==null?void 0:n.nodeValue},versions:s=>{var l;return(l=[...s.querySelector("versioning versions").children].map(n=>n.firstChild.nodeValue))!=null?l:["{unknown}"]}}}const yo={},ko={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},xo=r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"},null,-1),wo=[xo];function $o(o,t){return d(),p("svg",ko,wo)}var Io=y(yo,[["render",$o]]);const Co={},To={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},So=r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1),Lo=[So];function Mo(o,t){return d(),p("svg",To,Lo)}var Eo=y(Co,[["render",Mo]]);const Oo={components:{PrismEditor:ye,CopyIcon:Io,DownIcon:Eo},props:{qualifier:{type:Object,required:!0},token:{type:Object,required:!0}},setup(o){const t=o.qualifier,i=o.token,e=f(""),s=f([]),{createRepositories:l}=fo(),{createSnippets:n}=ho(),{parseMetadata:a,groupId:u,artifactId:c,versions:g}=bo(),{client:v}=J(i.name,i.secret),{copy:V,isSupported:k}=Ve(),h=f(localStorage.getItem("card-tab")||"Maven"),b=f(localStorage.getItem("dropdown-open")||!1);W(()=>localStorage.setItem("card-tab",h.value)),W(()=>localStorage.setItem("dropdown-open",b.value));const A=()=>{s.value=l(t),e.value="Repository details"},E=(w,L)=>{e.value="Artifact details";const I=a(w),z=g(I);s.value=n(u(I),c(I),z[L?z.indexOf(L):z.length-1])};W(()=>{const w=t.path.split("/");if(w.length==1&&w[0]==""){A();return}v.maven.content(`${t.path}/maven-metadata.xml`).then(L=>E(L.data)).catch(L=>{v.maven.content(`${t.path.substring(0,t.path.indexOf(w[w.length-1])-1)}/maven-metadata.xml`).then(I=>E(I.data,w[w.length-1])).catch(I=>{I.message!=="Request failed with status code 404"&&console.log(I),A()})})}),W(()=>{s.value.forEach(w=>{w.highlighter=L=>{var I;return G.highlight(L,(I=G.languages[w.lang])!=null?I:G.languages.js)}})});const H=f("slide-right");return U(h,(w,L)=>{const I=s.value.findIndex(ne=>ne.name===w),z=s.value.findIndex(ne=>ne.name===L);H.value=I-z<0?"slide-left":"slide-right"}),{title:e,configurations:s,selectedTab:h,transitionName:H,copy:async()=>{const{snippet:w}=s.value.find(L=>L.name===h.value);return await V(w),S("Snippet copied",{type:"info",timeout:"2000"})},isCopySupported:k,dropdownOpen:b}}},jo={class:"bg-white dark:bg-gray-900 shadow-lg p-7 rounded-xl border-gray-100 dark:border-black"},qo={class:"flex flex-row justify-between"},Po={class:"font-bold flex items-center w-full"},Vo={id:"card-menu",class:"flex mt-2 <sm:hidden"},Ro=["onClick"],Bo={class:"hidden flex-col items-center mt-24px <sm:flex"},Ao={class:"w-20px h-25px float-right m-auto flex items-center"},Ho={key:0,class:"rounded-lg w-full box-border p-2 bg-true-gray-100 dark:bg-dark-600"},Do=["onClick"],No=r("hr",{class:"dark:border-gray-800 <sm:hidden"},null,-1),zo={class:"overflow-hidden"};function Uo(o,t,i,e,s,l){const n=_("copy-icon"),a=_("down-icon"),u=_("prism-editor");return d(),p("div",jo,[r("div",qo,[r("h1",Po,[O($(e.title)+" ",1),e.isCopySupported?(d(),p("span",{key:0,onClick:t[0]||(t[0]=(...c)=>e.copy&&e.copy(...c)),class:"ml-auto cursor-pointer"},[m(n)])):C("",!0)])]),r("div",Vo,[(d(!0),p(j,null,P(e.configurations,c=>(d(),p("div",{key:c.name,onClick:g=>e.selectedTab=c.name,class:ae(["py-4 px-7 flex-grow text-center border-b-2 cursor-pointer border-transparent",{"!border-gray-800":c.name===e.selectedTab}])},$(c.name),11,Ro))),128))]),r("div",Bo,[r("div",{class:"w-full box-border py-5px p-2 rounded-lg border-1 border-true-gray-200 dark:border-dark-300",onClick:t[1]||(t[1]=c=>e.dropdownOpen=!e.dropdownOpen)},[O($(e.selectedTab)+" ",1),r("div",Ao,[m(a)])]),e.dropdownOpen?C("",!0):(d(),p("ul",Ho,[(d(!0),p(j,null,P(e.configurations,c=>(d(),p("li",{key:c.name,onClick:g=>{e.selectedTab=c.name,e.dropdownOpen=!e.dropdownOpen},class:ae(["dropdown py-1",{hidden:c.name===e.selectedTab}])},$(c.name),11,Do))),128))]))]),No,r("div",zo,[m(Re,{name:e.transitionName,mode:"out-in"},{default:x(()=>[(d(),p("div",{key:e.selectedTab,class:"relative h-33 mt-6 p-4 mr-1 rounded-lg bg-gray-100 dark:bg-gray-800"},[(d(!0),p(j,null,P(e.configurations,c=>(d(),p(j,{key:c.name},[c.name===e.selectedTab?(d(),M(u,{key:0,class:"card-editor font-mono absolute text-sm",modelValue:c.snippet,"onUpdate:modelValue":g=>c.snippet=g,highlight:c.highlighter,readonly:"","line-numbers":""},null,8,["modelValue","onUpdate:modelValue","highlight"])):C("",!0)],64))),128))]))]),_:1},8,["name"])])])}var Wo=y(Oo,[["render",Uo]]);const Go={props:{file:{type:Object,required:!0}},setup(o){return{file:o.file,prettyBytes:Be}}},Ko={class:"browser-entry flex flex-row justify-between mb-1.5 py-3 rounded-full bg-white dark:bg-gray-900 lg:max-w-2/5 xl:max-w-1/2 cursor-pointer"},Fo={class:"flex flex-row"},Qo={key:0,class:"text-xm px-6 pt-1.75"},Yo={key:1,class:"text-xm px-6 pt-1.75"},Zo={class:"font-semibold"},Jo={key:0,class:"px-6"};function Xo(o,t,i,e,s,l){return d(),p("div",Ko,[r("div",Fo,[e.file.type=="DIRECTORY"?(d(),p("div",Qo,"\u26AB")):(d(),p("div",Yo,"\u26AA")),r("div",Zo,$(e.file.name),1)]),e.file.contentLength?(d(),p("div",Jo,$(e.prettyBytes(e.file.contentLength)),1)):C("",!0)])}var en=y(Go,[["render",Xo],["__scopeId","data-v-2bad1130"]]);const tn={components:{Card:Wo,Entry:en},props:{qualifier:{type:Object,required:!0},token:{type:Object,required:!0}},setup(o){const t=o.qualifier,i=o.token,{client:e}=J(i.name,i.secret),s=f(""),l=f([]),n=f(!1),a=f(void 0),u=k=>k.type=="DIRECTORY",c=ge(),g=k=>(k.endsWith("/")?k.slice(0,-1):k).split("/").slice(0,-1).join("/")||"/";U(()=>t.watchable,async k=>{e.maven.details(t.path).then(h=>{l.value=h.data.files,n.value=l.value.length==0,a.value=void 0}).catch(h=>{console.log(h),S(`${h.response.status}: ${h.response.data.message}`,{type:"danger"}),a.value=h}),s.value=g(`/${t.path}`)},{immediate:!0});const v=B(()=>{const k=c.path.split("/");return k.map((h,b)=>({link:k.slice(0,b+1).join("/")||"/",name:b===k.length-1?h:h+"/"}))});return{qualifier:t,token:i,parentPath:s,files:l,isEmpty:n,isErrored:a,isDirectory:u,createURL:K,breadcrumbs:v,downloadHandler:(k,h)=>{e.maven.download(k.substring(1)+"/"+h).then(b=>Ae(b.data,h,b.headers["content-type"])).catch(b=>{console.log(b),S(`Cannot download file - ${error.response.status}: ${error.response.data.message}`,{type:"danger"})})}}}},on={class:"bg-gray-100"},nn={class:"bg-gray-100 dark:bg-black"},sn={class:"container mx-auto"},an={class:"pt-7 pb-3 pl-2 font-semibold"},rn={class:"select-none"},ln=O(" Index of "),cn={class:"select-text"},dn=r("span",{class:"font-normal text-xl text-gray-500 select-none"}," \u2934 ",-1),un={class:"dark:bg-black"},pn={class:"container mx-auto relative min-h-320px mb-1.5"},_n={class:"lg:absolute pt-5 -top-5 right-8"},mn={id:"browser-list",class:"pt-4"},gn=["onClick","href"],hn={key:0},fn=r("p",null,"Directory is empty",-1),vn=[fn],bn={key:1},yn=r("p",null,"Directory not found",-1),kn=[yn];function xn(o,t,i,e,s,l){const n=_("router-link"),a=_("Card"),u=_("Entry");return d(),p("div",on,[r("div",nn,[r("div",sn,[r("p",an,[r("span",rn,[m(n,{to:"/"},{default:x(()=>[ln]),_:1})]),r("span",cn,[(d(!0),p(j,null,P(e.breadcrumbs,c=>(d(),M(n,{key:c.link,to:c.link},{default:x(()=>[O($(c.name),1)]),_:2},1032,["to"]))),128))]),m(n,{to:e.parentPath},{default:x(()=>[dn]),_:1},8,["to"])])])]),r("div",un,[r("div",pn,[r("div",_n,[m(a,{qualifier:e.qualifier,token:e.token},null,8,["qualifier","token"])]),r("div",mn,[(d(!0),p(j,null,P(e.files,c=>(d(),p("div",{key:c},[e.isDirectory(c)?(d(),M(n,{key:0,to:o.append(o.$route.path,c.name)},{default:x(()=>[m(u,{file:c},null,8,["file"])]),_:2},1032,["to"])):(d(),p("a",{key:1,onClick:fe(g=>e.downloadHandler(o.$route.path,c.name),["left","prevent"]),href:o.$route.path+"/"+c.name,target:"_blank"},[m(u,{file:c},null,8,["file"])],8,gn))]))),128)),e.isEmpty?(d(),p("div",hn,vn)):C("",!0),e.isErrored?(d(),p("div",bn,kn)):C("",!0)])])])])}var wn=y(tn,[["render",xn]]);const $n={},In={class:"container mx-auto pt-10 px-15"},Cn=r("i",null,"Endpoints :: soon\u2122",-1),Tn=[Cn];function Sn(o,t){return d(),p("div",In,Tn)}var Ln=y($n,[["render",Sn]]);const Mn={components:{PrismEditor:ye},props:{token:{type:Object,required:!0}},setup(o){const t=o.token,{client:i}=J(t.name,t.secret),e=u=>G.highlight(u,G.languages.js),s="configuration.shared.cdn",l=f(),n=()=>i.settings.content(s).then(u=>l.value=u.data.content).catch(u=>S(u,{type:"error"})),a=()=>i.settings.updateContent(s,l.value).then(u=>{S("Configuration has been deployed, fetching...",{type:"info"}),n().then(c=>S("Configuration reloaded, refresh page to see changes",{type:"success"}))}).catch(u=>S(u,{type:"error"}));return n(),{configuration:l,fetchConfiguration:n,updateConfiguration:a,highlighter:e}}},En={class:"container mx-auto py-10 px-15"},On={class:"flex justify-between pb-5 flex-col xl:flex-row"},jn=r("div",null,[r("p",null,"Modify configuration shared between all instances."),r("p",null,[r("strong",null,"Remember"),O(": Configuration propagation can take up to 30 seconds on all instances")])],-1),qn={id:"configuration-state",class:"flex flex-row pt-3 xl:pt-2"},Pn=r("p",null,"Reset changes",-1),Vn=[Pn],Rn=r("p",null,"Update and reload",-1),Bn=[Rn],An={class:"border-1 rounded p-4 dark:border-gray-700"};function Hn(o,t,i,e,s,l){const n=_("prism-editor");return d(),p("div",En,[r("div",On,[jn,r("div",qn,[r("button",{onClick:t[0]||(t[0]=(...a)=>e.fetchConfiguration&&e.fetchConfiguration(...a))},Vn),r("button",{onClick:t[1]||(t[1]=(...a)=>e.updateConfiguration&&e.updateConfiguration(...a))},Bn)])]),r("div",An,[m(n,{class:"configuration-editor font-mono text-xs",modelValue:e.configuration,"onUpdate:modelValue":t[2]||(t[2]=a=>e.configuration=a),highlight:e.highlighter,"line-numbers":""},null,8,["modelValue","highlight"])])])}var Dn=y(Mn,[["render",Hn]]);const Ie=["Other","Trace","Debug","Info","Warn","Error"],de=R({}),Ce=f(""),Nn=f(0),oe=R([]),zn=new He,Un=o=>{var t;return(t=Ie.find(i=>o.includes(`${i.toUpperCase()} | `)))!=null?t:"Other"},Te=o=>zn.toHtml(o.replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll(" ","&nbsp;"));function Wn(){Ie.forEach(e=>{de[e]={name:e,enabled:!0,count:B(()=>oe.reduce((s,l)=>s+(l.level===e),0))}});const o=B(()=>oe.filter(e=>e.message.toLowerCase().includes(Ce.value.toLowerCase())).filter(e=>de[e.level].enabled));return{levels:de,log:o,filter:Ce,sanitizeMessage:Te,logMessage:e=>{oe.push({id:Nn.value++,message:Te(e),level:Un(e)})},clearLog:()=>{oe.length=0}}}const T=f(),ue=f("");function Gn(){const o=K("/api/console/sock").replace("https","wss").replace("http","ws"),t=()=>{var c;return((c=T.value)==null?void 0:c.readyState)===WebSocket.OPEN},i=()=>{t()&&T.value.close()},e=()=>{T.value.send(ue.value),ue.value=""},s=f(),l=f(),n=f(),a=f();return{connection:T,connect:c=>{try{T.value=new WebSocket(o),T.value.onopen=()=>{T.value.send(`Authorization:${c.name}:${c.secret}`),s==null||s.value()},T.value.onmessage=v=>{v.data!="keep-alive"&&(l==null||l.value(v.data))},T.value.onerror=v=>n==null?void 0:n.value(v),T.value.onclose=()=>a==null?void 0:a.value();const g=setInterval(()=>{var v;t()?(v=T==null?void 0:T.value)==null||v.send("keep-alive"):clearInterval(g)},1e3*5)}catch(g){console.log(g),n==null||n.value(g)}},close:i,onOpen:s,onMessage:l,onError:n,onClose:a,command:ue,execute:e}}const Kn={props:{selectedTab:{type:Object,required:!0}},setup(o){const t=o.selectedTab,{levels:i,log:e,logMessage:s,filter:l,clearLog:n}=Wn(),{onOpen:a,onMessage:u,onClose:c,onError:g,connect:v,close:V,command:k,execute:h}=Gn();De(()=>V());const b=()=>{const E=document.getElementById("console");E.scrollTop=E.scrollHeight},A=()=>{S("Connecting to the remote console",{type:"info"});const{token:E}=F();a.value=()=>n(),u.value=H=>{s(H),ke(()=>b())},g.value=H=>S(`${H||""}`,{type:"danger"}),c.value=()=>S("Connection with console has been lost",{type:"danger"}),v(E),ke(()=>setTimeout(()=>document.getElementById("consoleInput").focus(),1e3))};return U(()=>t.value,E=>E==="Console"?A():V(),{immediate:!0}),{log:e,command:k,execute:h,levels:i,filter:l}}},Fn={class:"container mx-auto pt-10 px-15 pb-10 text-xs"},Qn={class:"flex text-sm flex-col xl:flex-row w-full py-2 justify-between"},Yn={class:"flex flex-row justify-around w-full xl:w-1/2 <md:flex-wrap"},Zn=["checked","onChange"],Jn={class:"pl-2 pr-4"},Xn={class:"bg-white dark:bg-gray-900 rounded-lg"},es={id:"console",class:"overflow-scroll h-144 px-4 whitespace-pre-wrap font-mono text-xs"},ts=["innerHTML"],os=r("hr",{class:"dark:border-dark-300"},null,-1);function ns(o,t,i,e,s,l){return d(),p("div",Fn,[r("div",Qn,[Y(r("input",{placeholder:"Filter","onUpdate:modelValue":t[0]||(t[0]=n=>e.filter=n),class:"w-full xl:w-1/2 mr-5 py-1 px-4 rounded-lg bg-white dark:bg-gray-900"},null,512),[[Z,e.filter]]),r("div",Yn,[(d(!0),p(j,null,P(e.levels,n=>(d(),p("div",{key:n.name,class:"pt-1.9 xl:pt-0.8 font-sans whitespace-nowrap"},[r("input",{type:"checkbox",checked:n.enabled,onChange:a=>n.enabled=!n.enabled},null,40,Zn),r("span",Jn,$(n.name)+" ("+$(n.count)+")",1)]))),128))])]),r("div",Xn,[r("div",es,[(d(!0),p(j,null,P(e.log,n=>(d(),p("p",{key:n.id,innerHTML:n.message,class:"whitespace-nowrap"},null,8,ts))),128))]),os,Y(r("input",{id:"consoleInput",placeholder:"Type command or '?' to get help",class:"w-full py-2 px-4 rounded-b-lg bg-white dark:bg-gray-900 dark:text-white","onUpdate:modelValue":t[1]||(t[1]=n=>e.command=n),onKeyup:t[2]||(t[2]=Ne(n=>e.execute(),["enter"]))},null,544),[[Z,e.command]])])])}var ss=y(Kn,[["render",ns]]);const as={components:{Header:go,Browser:wn,Endpoints:Ln,Console:ss,Configuration:Dn},props:{qualifier:{type:Object,required:!0},token:{type:Object,required:!0},session:{type:Object,required:!0}},setup(o){const t=o.qualifier,i=o.token,e=o.session,{hasManagerPermission:s}=F(),l=B(()=>s(e.details)),n=[{name:"Overview"},{name:"Endpoints"},{name:"Console",manager:!0},{name:"Configuration",manager:!0}],a=R({value:localStorage.getItem("selectedTab")||"Overview"});W(()=>localStorage.setItem("selectedTab",a.value));const u=B(()=>n.filter(c=>!(c==null?void 0:c.manager)||s(e.details)).map(c=>c.name));return{qualifier:t,token:i,menuTabs:u,isManager:l,selectedTab:a}}},rs=o=>(ve("data-v-421a9952"),o=o(),be(),o),is={class:"bg-gray-100 dark:bg-black"},ls={class:"container mx-auto <sm:px-0"},cs=rs(()=>r("hr",{class:"dark:border-gray-700"},null,-1)),ds={class:"overflow-auto"};function us(o,t,i,e,s,l){const n=_("Header"),a=_("tab"),u=_("tabs"),c=_("Browser"),g=_("tab-panel"),v=_("Endpoints"),V=_("Console"),k=_("Configuration"),h=_("tab-panels");return d(),p("div",null,[m(n,{token:e.token},null,8,["token"]),r("div",is,[r("div",ls,[m(u,{modelValue:e.selectedTab.value,"onUpdate:modelValue":t[0]||(t[0]=b=>e.selectedTab.value=b)},{default:x(()=>[(d(!0),p(j,null,P(e.menuTabs,(b,A)=>(d(),M(a,{class:"item font-normal",key:`menu${A}`,val:b,label:b,indicator:!0},null,8,["val","label"]))),128))]),_:1},8,["modelValue"])]),cs,r("div",ds,[m(h,{modelValue:e.selectedTab.value,"onUpdate:modelValue":t[1]||(t[1]=b=>e.selectedTab.value=b),animate:!0},{default:x(()=>[m(g,{val:"Overview"},{default:x(()=>[m(c,{qualifier:e.qualifier,token:e.token,ref:""},null,8,["qualifier","token"])]),_:1}),m(g,{val:"Endpoints"},{default:x(()=>[m(v)]),_:1}),e.isManager?(d(),M(g,{key:0,val:"Console"},{default:x(()=>[m(V,{selectedTab:e.selectedTab},null,8,["selectedTab"])]),_:1})):C("",!0),e.isManager?(d(),M(g,{key:1,val:"Configuration"},{default:x(()=>[m(k,{selectedTab:e.selectedTab,token:e.token},null,8,["selectedTab","token"])]),_:1})):C("",!0)]),_:1},8,["modelValue"])])])])}var ps=y(as,[["render",us],["__scopeId","data-v-421a9952"]]);const _s=ze({history:Ue(),routes:[{path:"/:qualifier(.*)",name:"Index",component:ps}]});const pe=We(at);pe.config.globalProperties.append=(o,t)=>o+(o.endsWith("/")?"":"/")+t;pe.config.globalProperties.drop=o=>(o.endsWith("/")?o.slice(0,-1):o).split("/").slice(0,-1).join("/");pe.use(Ge()).use(Ke,se).use(Fe).use(_s).mount("#app");

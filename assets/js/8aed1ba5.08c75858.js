"use strict";(self.webpackChunk_drayman_docs=self.webpackChunk_drayman_docs||[]).push([[9223],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2098:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"N-body code",sidebar_position:1},i=void 0,l={unversionedId:"simulations/data-access",id:"simulations/data-access",isDocsHomePage:!1,title:"N-body code",description:"Drayman is a server-side component framework.",source:"@site/docs/simulations/data-access.mdx",sourceDirName:"simulations",slug:"/simulations/data-access",permalink:"/docs/simulations/data-access",editUrl:"https://github.com/Claviz/drayman/blob/main/docs/docs/simulations/data-access.mdx",version:"current",sidebarPosition:1,frontMatter:{title:"N-body code",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Markov Chain Monte Carlo",permalink:"/docs/Constraining MOGs/getting-started"},next:{title:"Implementation of massive neutrinos",permalink:"/docs/simulations/getting-started"}},s=[{value:"Installing locally",id:"installing-locally",children:[]},{value:"Online IDE",id:"online-ide",children:[]}],c={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Drayman is a server-side component framework."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The browser only renders ",(0,a.kt)("strong",{parentName:"li"},"what the user should see")," - all logic and calculations happen ",(0,a.kt)("strong",{parentName:"li"},"server-side"),"."),(0,a.kt)("li",{parentName:"ul"},"For displaying UI, you can use any available ",(0,a.kt)("strong",{parentName:"li"},"HTML element, web component or custom Drayman third-party component"),"."),(0,a.kt)("li",{parentName:"ul"},"Both worlds - server-side and front-end code is managed inside a ",(0,a.kt)("strong",{parentName:"li"},"single script"),".")),(0,a.kt)("p",null,"Let's discover ",(0,a.kt)("strong",{parentName:"p"},"Drayman in less than 5 minutes"),"."),(0,a.kt)("h2",{id:"installing-locally"},"Installing locally"),(0,a.kt)("p",null,"To start building with Drayman and use the latest version available you'll need to run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx @drayman/framework-init@latest my-app\ncd my-app\nnpm start\n")),(0,a.kt)("p",null,"The website will be available at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3033"},"http://localhost:3033"),"."),(0,a.kt)("h2",{id:"online-ide"},"Online IDE"),(0,a.kt)("p",null,"You can play around with Drayman using ",(0,a.kt)("a",{parentName:"p",href:"https://replit.com/@jansivans/Drayman-Framework"},"repl.it here"),"."))}u.isMDXComponent=!0}}]);
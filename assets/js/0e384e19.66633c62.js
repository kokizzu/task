"use strict";(self.webpackChunktaskfile_dev=self.webpackChunktaskfile_dev||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={slug:"/",sidebar_position:1,title:"Home"},s="Task",u={unversionedId:"intro",id:"intro",title:"Home",description:"Task is a task runner / build tool that aims to be simpler and easier to use",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1,title:"Home"},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/installation/"}},p={},c=[{value:"Features",id:"features",level:2}],m={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"task"},"Task"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{id:"logo",src:"img/logo.svg",height:"250px",width:"250px"})),(0,o.kt)("p",null,"Task is a task runner / build tool that aims to be simpler and easier to use\nthan, for example, ",(0,o.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/make/"},"GNU Make"),"."),(0,o.kt)("p",null,"Since it's written in ",(0,o.kt)("a",{parentName:"p",href:"https://go.dev/"},"Go"),", Task is just a single binary and has no other\ndependencies, which means you don't need to mess with any complicated install\nsetups just to use a build tool."),(0,o.kt)("p",null,"Once ",(0,o.kt)("a",{parentName:"p",href:"/installation/"},"installed"),", you just need to describe your build tasks\nusing a simple ",(0,o.kt)("a",{parentName:"p",href:"http://yaml.org/"},"YAML")," schema in a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"Taskfile.yml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Taskfile.yml"',title:'"Taskfile.yml"'},"version: '3'\n\ntasks:\n  hello:\n    cmds:\n      - echo 'Hello World from Task!'\n    silent: true\n")),(0,o.kt)("p",null,"And call it by running ",(0,o.kt)("inlineCode",{parentName:"p"},"task hello")," from your terminal."),(0,o.kt)("p",null,"The above example is just the start, you can take a look at the ",(0,o.kt)("a",{parentName:"p",href:"/usage"},"usage"),"\nguide to check the full schema documentation and Task features."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/installation/"},"Easy installation"),": just download a single binary, add to\n$PATH and you're done! Or you can also install using ",(0,o.kt)("a",{parentName:"li",href:"https://brew.sh/"},"Homebrew"),",\n",(0,o.kt)("a",{parentName:"li",href:"https://snapcraft.io/"},"Snapcraft"),", or ",(0,o.kt)("a",{parentName:"li",href:"https://scoop.sh/"},"Scoop")," if you want;"),(0,o.kt)("li",{parentName:"ul"},"Available on CIs: by adding ",(0,o.kt)("a",{parentName:"li",href:"/installation/#install-script"},"this simple command"),"\nto install on your CI script and you're done to use Task as part of your CI pipeline;"),(0,o.kt)("li",{parentName:"ul"},"Truly cross-platform: while most build tools only work well on Linux or macOS,\nTask also supports Windows thanks to ",(0,o.kt)("a",{parentName:"li",href:"https://mvdan.cc/sh"},"this shell interpreter for Go"),";"),(0,o.kt)("li",{parentName:"ul"},"Great for code generation: you can easily ",(0,o.kt)("a",{parentName:"li",href:"/usage#prevent-unnecessary-work"},"prevent a task from running"),"\nif a given set of files haven't changed since last run (based either on its\ntimestamp or content).")))}f.isMDXComponent=!0}}]);
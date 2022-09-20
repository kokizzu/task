"use strict";(self.webpackChunktaskfile_dev=self.webpackChunktaskfile_dev||[]).push([[217],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(a),m=i,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9250:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return u}});var n=a(7462),i=a(3366),l=(a(7294),a(3905)),o=["components"],r={slug:"/installation/",sidebar_position:2},s="Installation",p={unversionedId:"installation",id:"installation",title:"Installation",description:"Task offers many installation methods. Check out the available methods below.",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation/",permalink:"/installation/",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/installation/",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Home",permalink:"/"},next:{title:"Usage",permalink:"/usage/"}},c={},u=[{value:"Package Managers",id:"package-managers",level:2},{value:"Homebrew",id:"homebrew",level:3},{value:"Snap",id:"snap",level:3},{value:"Chocolatey",id:"chocolatey",level:3},{value:"Scoop",id:"scoop",level:3},{value:"AUR",id:"aur",level:3},{value:"Fedora",id:"fedora",level:3},{value:"Nix",id:"nix",level:3},{value:"Get The Binary",id:"get-the-binary",level:2},{value:"Binary",id:"binary",level:3},{value:"Install Script",id:"install-script",level:3},{value:"GitHub Actions",id:"github-actions",level:3},{value:"Build From Source",id:"build-from-source",level:2},{value:"Go Modules",id:"go-modules",level:3}],d={toc:u};function m(e){var t=e.components,a=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Task offers many installation methods. Check out the available methods below."),(0,l.kt)("h2",{id:"package-managers"},"Package Managers"),(0,l.kt)("h3",{id:"homebrew"},"Homebrew"),(0,l.kt)("p",null,"If you're on macOS or Linux and have ",(0,l.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," installed, getting\nTask is as simple as running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install go-task/tap/go-task\n")),(0,l.kt)("h3",{id:"snap"},"Snap"),(0,l.kt)("p",null,"Task is available in ",(0,l.kt)("a",{parentName:"p",href:"https://snapcraft.io/task"},"Snapcraft"),", but keep in mind that your\nLinux distribution should allow classic confinement for Snaps to Task work\nright:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo snap install task --classic\n")),(0,l.kt)("h3",{id:"chocolatey"},"Chocolatey"),(0,l.kt)("p",null,"If you're on Windows and have ",(0,l.kt)("a",{parentName:"p",href:"https://chocolatey.org/"},"Chocolatey")," installed, getting\nTask is as simple as running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"choco install go-task\n")),(0,l.kt)("p",null,"This installation method is community owned."),(0,l.kt)("h3",{id:"scoop"},"Scoop"),(0,l.kt)("p",null,"If you're on Windows and have ",(0,l.kt)("a",{parentName:"p",href:"https://scoop.sh/"},"Scoop")," installed, getting\nTask is as simple as running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd"},"scoop install task\n")),(0,l.kt)("p",null,"This installation method is community owned. After a new release of Task, it\nmay take some time until it's available on Scoop."),(0,l.kt)("h3",{id:"aur"},"AUR"),(0,l.kt)("p",null,"If you're on Arch Linux you can install Task from\n",(0,l.kt)("a",{parentName:"p",href:"https://aur.archlinux.org/packages/go-task-bin"},"AUR")," using your favorite\npackage manager such as ",(0,l.kt)("inlineCode",{parentName:"p"},"yay"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pacaur")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"yaourt"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd"},"yay -S go-task-bin\n")),(0,l.kt)("p",null,"Alternatively, there's\n",(0,l.kt)("a",{parentName:"p",href:"https://aur.archlinux.org/packages/go-task"},"this package")," which installs from\nthe source code instead of downloading the binary from the\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/go-task/task/releases"},"releases page"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd"},"yay -S go-task\n")),(0,l.kt)("p",null,"This installation method is community owned. "),(0,l.kt)("h3",{id:"fedora"},"Fedora"),(0,l.kt)("p",null,"If you're on Fedora Linux you can install Task from the official\n",(0,l.kt)("a",{parentName:"p",href:"https://packages.fedoraproject.org/pkgs/golang-github-task/go-task/"},"Fedora")," repository using ",(0,l.kt)("inlineCode",{parentName:"p"},"dnf"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd"},"sudo dnf install go-task\n")),(0,l.kt)("p",null,"This installation method is community owned. After a new release of Task, it\nmay take some time until it's available in ",(0,l.kt)("a",{parentName:"p",href:"https://packages.fedoraproject.org/pkgs/golang-github-task/go-task/"},"Fedora"),"."),(0,l.kt)("h3",{id:"nix"},"Nix"),(0,l.kt)("p",null,"If you're on NixOS or have Nix installed\nyou can install Task from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/NixOS/nixpkgs"},"nixpkgs"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd"},"nix-env -iA nixpkgs.go-task\n")),(0,l.kt)("p",null,"This installation method is community owned. After a new release of Task, it\nmay take some time until it's available in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/NixOS/nixpkgs"},"nixpkgs"),"."),(0,l.kt)("h2",{id:"get-the-binary"},"Get The Binary"),(0,l.kt)("h3",{id:"binary"},"Binary"),(0,l.kt)("p",null,"You can download the binary from the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/go-task/task/releases"},"releases page on GitHub")," and\nadd to your ",(0,l.kt)("inlineCode",{parentName:"p"},"$PATH"),"."),(0,l.kt)("p",null,"DEB and RPM packages are also available."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"task_checksums.txt")," file contains the SHA-256 checksum for each file."),(0,l.kt)("h3",{id:"install-script"},"Install Script"),(0,l.kt)("p",null,"We also have an ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/go-task/task/blob/master/install-task.sh"},"install script")," which is very useful in\nscenarios like CI. Many thanks to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/goreleaser/godownloader"},"GoDownloader")," for enabling the\neasy generation of this script."),(0,l.kt)("p",null,"By default, it installs on the ",(0,l.kt)("inlineCode",{parentName:"p"},"./bin")," directory relative to the working\ndirectory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'sh -c "$(curl --location https://taskfile.dev/install.sh)" -- -d\n')),(0,l.kt)("p",null,"It is possible to override the installation directory with the ",(0,l.kt)("inlineCode",{parentName:"p"},"-b")," parameter.\nOn Linux, common choices are ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.local/bin")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"~/bin")," to install for the\ncurrent user or ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," to install for all users:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'sh -c "$(curl --location https://taskfile.dev/install.sh)" -- -d -b ~/.local/bin\n')),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"On macOS and Windows, ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.local/bin")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"~/bin")," are not added to ",(0,l.kt)("inlineCode",{parentName:"p"},"$PATH")," by\ndefault."))),(0,l.kt)("h3",{id:"github-actions"},"GitHub Actions"),(0,l.kt)("p",null,"If you want to install Task in GitHub Actions you can try using\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/arduino/setup-task"},"this action"),"\nby the Arduino team:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Install Task\n  uses: arduino/setup-task@v1\n")),(0,l.kt)("p",null,"This installation method is community owned."),(0,l.kt)("h2",{id:"build-from-source"},"Build From Source"),(0,l.kt)("h3",{id:"go-modules"},"Go Modules"),(0,l.kt)("p",null,"First, make sure you have ",(0,l.kt)("a",{parentName:"p",href:"https://golang.org/"},"Go")," properly installed and setup."),(0,l.kt)("p",null,"You can easily install the latest release globally by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"go install github.com/go-task/task/v3/cmd/task@latest\n")),(0,l.kt)("p",null,"Or you can install into another directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"env GOBIN=/bin go install github.com/go-task/task/v3/cmd/task@latest\n")),(0,l.kt)("p",null,"If using Go 1.15 or earlier, instead use:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"env GO111MODULE=on go get -u github.com/go-task/task/v3/cmd/task@latest\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"For CI environments we recommend using the ",(0,l.kt)("a",{parentName:"p",href:"#get-the-binary"},"install script"),"\ninstead, which is faster and more stable, since it'll just download the latest\nreleased binary."))))}m.isMDXComponent=!0}}]);
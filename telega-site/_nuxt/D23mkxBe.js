import{p as u,_ as p,r as c,g as v,f,w as g,n as h,o,c as r,a,t as m}from"./BH4CL5cc.js";import{W as _}from"./BeE9BeaC.js";const I=u("/icons/java-icon.png"),b=u("/icons/launcher-icon.png"),k=window.setInterval,x={key:0,class:"launcher-wrapper"},L={key:1,class:"launcher-wrapper"},N={class:"gradle-loader"},U={class:"console"},B={__name:"launcher",setup(F){const i=c(!1),e=c(`> Starting gradle build...
`);return v(()=>{const l=[`> Configuring tasks...
<==-----------> 10% CONFIGURING`,`> Configuring dependencies...
<======-------> 30% CONFIGURING`,`> Initializing build environment
<======-------> 50% BUILDING`,`> Resolving project dependencies
<========-----> 70% BUILDING`,`> Finalizing build configuration
<===========--> 90% BUILDING`,`> Finalizing build configuration
<=============> 100% BUILDING`],n=["> Task :compileJava","> Task :processResources","> Task :classes","> Task :jar"];let s=0,t=0;const d=k(()=>{s<l.length?(e.value+=l[s]+`
`,s++):t<n.length?(e.value+=n[t]+`
`,t++):(clearInterval(d),Math.random()<.01?(e.value+=`
> Task :compileJava FAILED
`,e.value+=`src/Main.java:42: error: cannot find symbol
`,e.value+=`  someMissingFunction();
`,e.value+=`  ^
`,e.value+=`symbol:   method someMissingFunction()
`,e.value+=`location: class Main

`,e.value+=`BUILD FAILED in 8s
`,e.value+=`1 actionable task: 1 executed
`,buildFailed.value=!0):(e.value+=`
BUILD SUCCESSFUL in 7s
`,e.value+=`4 actionable tasks: 4 executed
`,setTimeout(()=>{i.value=!0},1e3))),h(()=>{consoleRef.value&&(consoleRef.value.scrollTop=consoleRef.value.scrollHeight)})},800)}),(l,n)=>(o(),f(_,{title:"Скачать лаунчер"},{default:g(()=>[i.value?(o(),r("div",x,n[0]||(n[0]=[a("table",{class:"launcher-table"},[a("thead",null,[a("tr",null,[a("th",{colspan:"3",class:"table-title"}," ☕ Скачать лаунчер для сервера ")])]),a("tbody",null,[a("tr",null,[a("td",{class:"icon-cell",rowspan:"2"},[a("img",{src:I,alt:"Java"}),a("img",{src:b,alt:"Launcher"})]),a("td",{class:"label"},"📄 Файл:"),a("td",null,[a("code",null,"miaucraft-launcher.jar")])]),a("tr",null,[a("td",{class:"label"},"💾 Размер:"),a("td",null,"2.3 МБ")]),a("tr",null,[a("td",{colspan:"3",class:"download-link"},[a("a",{href:"https://username.github.io/miaucraft-launcher.jar",target:"_blank"}," 📥 Нажмите здесь чтобы скачать лаунчер (.jar) ")])]),a("tr",null,[a("td",{colspan:"3",class:"info"}," Требуется Java 17 или новее. Если лаунчер не запускается, проверьте установленную версию Java. ")])])],-1)]))):(o(),r("div",L,[a("div",N,[a("div",U,[a("pre",null,m(e.value),1)])])]))]),_:1}))}},T=p(B,[["__scopeId","data-v-51d1d97b"]]);export{T as default};

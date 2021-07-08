(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{"16l3":function(e,t,n){"use strict";n.r(t);var a=n("dI71"),r=n("q1tI"),o=n.n(r),c=n("DxCv"),i=n("TJpk"),l=n.n(i),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement(l.a,{title:"Projects | Enlight",meta:[{name:"description",content:"Discover your next Enlight project in Web Development, Data Science, and more."},{name:"og:title",content:"Projects | Enlight"},{name:"og:description",content:"Discover your next Enlight project in Web Development, Data Science, and more."},{name:"og:url",content:"https://enlight.nyc/projects"},{name:"og:image",content:"https://enlight.nyc/img/courses/web-development/projects.png"},{name:"twitter:title",content:"Projects | Enlight"},{name:"twitter:image",content:"https://enlight.nyc/img/courses/web-development/projects.png"}]}),o.a.createElement(c.a,null))},t}(r.Component);t.default=u},DxCv:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("Wbzz"),c=n("wBNj"),i=n("KQm4");var l=function(e){var t=e.data,n=e.type,o=e.setType,c=e.language,l=e.setLanguage,u=e.difficulty,g=e.setDifficulty,s=Object(a.useState)([]),d=s[0],m=s[1],p=Object(a.useState)([]),f=p[0],b=p[1],x=Object(a.useState)([]),y=x[0],h=x[1];return Object(a.useEffect)((function(){m(Object(i.a)(new Set(t.filter((function(e){return"Algorithms"!=e.node.category})).sort((function(e,t){return e.node.category.localeCompare(t.node.category)})).map((function(e){return e.node.category}))))),b(Object(i.a)(new Set(t.sort((function(e,t){return e.node.language.localeCompare(t.node.language)})).map((function(e){return e.node.language}))))),h(Object(i.a)(new Set(t.map((function(e){return e.node.difficulty})))))}),[]),r.a.createElement("div",{className:"mx-auto sm:flex justify-center"},r.a.createElement("div",{className:"px-6"},r.a.createElement("p",{className:"text-center font-bold text-gray-800 mb-2"},"Category"),r.a.createElement("select",{className:"sm:w-48 block w-full bg-gray-200 border border-gray-300 text-gray-700 p-1 px-2 rounded leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500",value:n,onChange:function(e){return o(e.currentTarget.value)}},r.a.createElement("option",null),d.map((function(e,t){return r.a.createElement("option",{key:t},e)})))),r.a.createElement("div",{className:"px-8"},r.a.createElement("p",{className:"text-center font-bold text-gray-800 mb-2"},"Language"),r.a.createElement("select",{className:"sm:w-48 block w-full bg-gray-200 border border-gray-300 text-gray-700 p-1 px-2 rounded leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500",value:c,onChange:function(e){return l(e.currentTarget.value)}},r.a.createElement("option",null),f.map((function(e,t){return r.a.createElement("option",{key:t},e)})))),r.a.createElement("div",{className:"px-8"},r.a.createElement("p",{className:"text-center font-bold text-gray-800 mb-2"},"Difficulty"),r.a.createElement("select",{className:"sm:w-48 flex-1 block w-full bg-gray-200 border border-gray-300 text-gray-700 p-1 px-2 rounded leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500",value:u,onChange:function(e){return g(e.currentTarget.value)}},r.a.createElement("option",null),y.map((function(e,t){return r.a.createElement("option",{key:t},e)})))))},u=n("hqO0");function g(e){return r.a.createElement(o.Link,{to:e.url},r.a.createElement(u.a,{className:"project text-center"},r.a.createElement(u.b,{src:e.img}),r.a.createElement("h1",{className:"text-2xl leading-snug font-bold text-gray-800 mt-6"},e.title),r.a.createElement(u.c,{className:"text-xs tracking-tight rounded-lg py-2 px-4 bg-gray-200 text-gray-800 mr-1 font-bold"}," ",e.language),r.a.createElement(u.d,{className:"uppercase text-xs tracking-wide rounded-lg py-2 px-4 bg-gray-200 text-gray-800 mr-1 font-bold"}," ",e.difficulty)))}t.a=function(){var e=Object(o.useStaticQuery)(s).allTutorial.edges,t=Object(a.useState)(e),n=t[0],i=t[1],u=Object(a.useState)(""),d=u[0],m=u[1],p=Object(a.useState)(""),f=p[0],b=p[1],x=Object(a.useState)(""),y=x[0],h=x[1];return Object(a.useEffect)((function(){var t=e;""!==d&&(t=t.filter((function(e){return e.node.category===d}))),""!==f&&(t=t.filter((function(e){return e.node.language===f}))),""!==y&&(t=t.filter((function(e){return e.node.difficulty===y}))),i(t)}),[d,f,y]),r.a.createElement("div",{className:"mx-auto max-w-screen-xl py-8"},r.a.createElement("h1",{className:"text-5xl font-extrabold text-center text-gray-800 tracking-tight"},"Projects"),r.a.createElement("h2",{className:"text-2xl text-center text-gray-700 tracking-tight mb-4 px-1"},"Discover your next Enlight project."),r.a.createElement(c.Container,{fluid:!0},r.a.createElement(l,{data:e,type:d,setType:m,language:f,setLanguage:b,difficulty:y,setDifficulty:h}),r.a.createElement("br",null),r.a.createElement(c.Row,null,n.sort((function(e,t){return t.node.projectId-e.node.projectId})).map((function(e){return r.a.createElement(c.Col,{lg:4,md:6,xs:12,key:e.node.id},r.a.createElement(g,{url:"/projects/"+e.node.id,img:e.node.img,title:e.node.title,author:e.node.author,difficulty:e.node.difficulty,language:e.node.language}))})))))};var s="1431347745"},hqO0:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return l}));var a=n("vOnD"),r=a.b.div.withConfig({displayName:"Card",componentId:"sc-1goptcu-0"})(["height:320px;margin:20px;border-radius:4px;background:#fcfcfc;-moz-box-shadow:0 0.2rem 3rem rgba(0,0,0,0.08);-webkit-box-shadow:0 0.2rem 1rem rgba(0,0,0,0.08);box-shadow:0 0.2rem 1rem rgba(0,0,0,0.08);transition:all 200ms ease;&:active,&:focus,&:hover{-moz-box-shadow:0 0.2rem 3rem rgba(0,0,0,0.2);-webkit-box-shadow:0 0.2rem 1rem rgba(0,0,0,0.2);box-shadow:0 0.2rem 1rem rgba(0,0,0,0.2);}"]),o=a.b.h1.withConfig({displayName:"Card__Title",componentId:"sc-1goptcu-1"})([""]),c=a.b.div.withConfig({displayName:"Card__Left",componentId:"sc-1goptcu-2"})(["position:absolute;left:48px;bottom:36px;padding:8px;"]),i=a.b.span.withConfig({displayName:"Card__Right",componentId:"sc-1goptcu-3"})(["position:absolute;right:48px;bottom:36px;padding:8px;"]),l=a.b.div.withConfig({displayName:"Card__Img",componentId:"sc-1goptcu-4"})(["background-image:url(",");background-size:cover;background-repeat:no-repeat;background-position:center center;height:175px;border-top-left-radius:4px;border-top-right-radius:4px;"],(function(e){return e.src}))}}]);
//# sourceMappingURL=component---src-pages-projects-js-7faca82bfbd616bf613c.js.map
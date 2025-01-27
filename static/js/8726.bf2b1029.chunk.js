"use strict";(self.webpackChunkpablo_gonzalez_landing_page=self.webpackChunkpablo_gonzalez_landing_page||[]).push([[8726],{78994:(e,s,r)=>{r.d(s,{A:()=>m});var i=r(65043),l=r(54739),a=r(11536),o=r(70827),t=r(14647),n=r(15832),c=r(51849),d=r(54019),h=r(70579);const m=e=>{let{title:s,isHomePage:r}=e;const[m,p]=(0,i.useState)();return(0,i.useEffect)((()=>{(async()=>{try{p(l),r&&p(l.slice(0,4))}catch(e){console.error("Error loading post info:",e)}})()}),[]),r?(0,h.jsx)("section",{id:"blog",className:"blog-section",children:(0,h.jsx)(d.q7,{direction:"right",triggerOnce:!0,children:(0,h.jsx)(o.A,{align:"middle",justify:"center",children:(0,h.jsx)(t.A,{children:(0,h.jsxs)(d.q7,{direction:"left",triggerOnce:!0,children:[(0,h.jsx)(o.A,{justify:"center",align:"middle",className:"title",children:(0,h.jsx)("h6",{children:s})}),(0,h.jsx)(o.A,{justify:"center",align:"middle",children:null===m||void 0===m?void 0:m.map(((e,s)=>(0,h.jsx)(t.A,{lg:6,md:12,sm:12,xs:24,className:"post-card",children:(0,h.jsx)(n.A.Ribbon,{text:"New",color:"blue",className:e.isNew?"ribbon":"ribbon hidden",placement:"start",children:(0,h.jsx)(c.A,{className:"home-posts",hoverable:!0,cover:(0,h.jsx)(a.A,{src:e.imageUrl,className:"home-page-thumbnail"},s),children:(0,h.jsxs)("a",{href:`#/blog/${e.id}`,children:[(0,h.jsx)("p",{children:e.title}),(0,h.jsx)("span",{children:e.description})]})})})},s)))})]})})})})}):(0,h.jsxs)("div",{className:"other-posts",children:[(0,h.jsx)("h2",{children:s}),(0,h.jsx)("ul",{className:"post-list",children:null===m||void 0===m?void 0:m.map(((e,s)=>(0,h.jsxs)("li",{className:"post-item",children:[(0,h.jsx)(a.A,{src:e.imageUrl,className:"thumbnail"},s),(0,h.jsxs)("div",{className:"post-info",children:[(0,h.jsx)("a",{href:`#/blog/${e.id}`,children:(0,h.jsx)("h3",{className:"post-title",children:e.title})}),(0,h.jsx)("p",{className:"post-description",children:e.description})]})]},e.id)))})]})}},18726:(e,s,r)=>{r.r(s),r.d(s,{default:()=>j});var i=r(65043),l=r(91688),a=r(29258),o=r(68330),t=r(17689),n=r(94666),c=r(51443),d=r(13529),h=r(70579);const m=(0,d.C)()((e=>{let{publishDate:s}=e;return(0,h.jsxs)(c.A,{overlayStyle:{width:300},content:(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:"img/author.jpg",alt:"Author",className:"author-picture"}),(0,h.jsx)("br",{}),(0,h.jsx)("strong",{children:"Pablo Gonzalez"}),(0,h.jsx)("br",{}),(0,h.jsx)("span",{children:"Frontend Engineer. Apaixonado por desenvolvimento de interfaces limpas e intuitivas."}),(0,h.jsx)("br",{}),(0,h.jsxs)("div",{className:"social-links",children:[(0,h.jsx)("a",{href:"https://www.linkedin.com/in/pablogonzalezzz/",children:(0,h.jsx)(o.A,{})}),(0,h.jsx)("a",{href:"https://www.youtube.com/@PabloGonzalez_dev",children:(0,h.jsx)(t.A,{})}),(0,h.jsx)("a",{href:"https://github.com/pablogonzalezz",children:(0,h.jsx)(n.A,{})})]})]}),children:[(0,h.jsx)("img",{src:"img/author.jpg",alt:"Author",className:"author-picture"}),(0,h.jsxs)("div",{className:"author-info",children:[(0,h.jsx)("p",{className:"author-name",children:"Pablo Gonzalez"}),(0,h.jsxs)("p",{className:"publish-date",children:["Published on ",s]})]})]})}));var p=r(54739),u=r(78994);const x=e=>{let{src:s}=e;return(0,h.jsx)("iframe",{width:"560",height:"315",className:"embed-video",src:s,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})},j=()=>{const{filename:e}=(0,l.g)(),[s,r]=(0,i.useState)(""),[o,t]=(0,i.useState)();return(0,i.useEffect)((()=>{const s=async()=>{try{const s=await(async e=>{const s=await fetch(`markdown/${e}.md`);if(!s.ok)throw new Error("Network response was not ok");return s.text()})(e);r(s)}catch(s){console.error("Error loading markdown file:",s),r("# Error\nCould not load the blog post.")}};e&&s()}),[e]),(0,i.useEffect)((()=>{e&&(async()=>{try{const s=p.find((s=>s.id===e));t(s),document.title=(null===s||void 0===s?void 0:s.title)||"Blog Post"}catch(s){console.error("Error loading post info:",s)}})()}),[e]),(0,h.jsxs)("div",{className:"blog-container",children:[(0,h.jsx)("div",{className:"blog-meta",children:(0,h.jsx)(m,{publishDate:null===o||void 0===o?void 0:o.publishDate})}),(0,h.jsx)("hr",{className:"separator-line"}),null!==o&&void 0!==o&&o.videoUrl?(0,h.jsx)(x,{src:null===o||void 0===o?void 0:o.videoUrl}):null,(0,h.jsx)(a.o,{children:s}),(0,h.jsx)("hr",{className:"separator-line"}),(0,h.jsx)(u.A,{title:"Other posts"})]})}},54739:e=>{e.exports=JSON.parse('[{"id":"7-frameworks-frontend","title":"7 Frameworks Frontend para aprender em 2025 e conseguir um emprego \ud83d\ude80","publishDate":"January 24, 2025","description":"Aprenda os 7 frameworks frontend mais populares em 2025 e consiga um emprego.","imageUrl":"markdown/7-frameworks-frontend/image.png","isNew":true,"videoUrl":"https://www.youtube.com/embed/9VcWkkIckb0?si=FJ-xCQqqb-gMUkvV"}]')}}]);
//# sourceMappingURL=8726.bf2b1029.chunk.js.map
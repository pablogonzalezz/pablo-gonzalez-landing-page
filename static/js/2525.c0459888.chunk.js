"use strict";(self.webpackChunkpablo_gonzalez_landing_page=self.webpackChunkpablo_gonzalez_landing_page||[]).push([[2525],{58538:(e,n,i)=>{i.r(n),i.d(n,{default:()=>a});var t=i(65043),o=i(62646);const r=(0,i(30009).Ay)("div")`
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  cursor: pointer;
  background: rgb(241, 242, 243);
  text-align: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  visibility: ${e=>e.show?"visible":"hidden"};
  opacity: ${e=>e.show?"1":"0"};
  display: flex;

  &:hover,
  &:active,
  &:focus {
    background: rgb(224, 224, 224);
  }

  @media screen and (max-width: 1240px) {
    display: none;
  }
`;var s=i(70579);const a=()=>{const[e,n]=(0,t.useState)(!1),i=(0,t.useCallback)((()=>{const i=window.scrollY;!e&&i>350?n(!0):i<=350&&n(!1)}),[e]);(0,t.useEffect)((()=>(window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)})),[i]);return(0,s.jsx)(r,{onClick:()=>{document.getElementById("intro").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},show:e,children:(0,s.jsx)(o.A,{src:"scroll-top.svg",width:"20px",height:"20px"})})}},30918:(e,n,i)=>{function t(e){var n=Object.create(null);return function(i){return void 0===n[i]&&(n[i]=e(i)),n[i]}}i.d(n,{A:()=>t})}}]);
//# sourceMappingURL=2525.c0459888.chunk.js.map
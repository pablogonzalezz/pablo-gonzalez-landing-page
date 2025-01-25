"use strict";(self.webpackChunkpablo_gonzalez_landing_page=self.webpackChunkpablo_gonzalez_landing_page||[]).push([[8538],{58538:(e,n,i)=>{i.r(n),i.d(n,{default:()=>l});var o=i(65043),t=i(62646);const s=(0,i(30009).Ay)("div")`
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
`;var a=i(70579);const l=()=>{const[e,n]=(0,o.useState)(!1),i=(0,o.useCallback)((()=>{const i=window.scrollY;!e&&i>350?n(!0):i<=350&&n(!1)}),[e]);(0,o.useEffect)((()=>(window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)})),[i]);return(0,a.jsx)(s,{onClick:()=>{document.getElementById("intro").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},show:e,children:(0,a.jsx)(t.A,{src:"scroll-top.svg",width:"20px",height:"20px"})})}}}]);
//# sourceMappingURL=8538.75925f4d.chunk.js.map
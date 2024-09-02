"use strict";(self.webpackChunkreact_project=self.webpackChunkreact_project||[]).push([[2768],{953:(n,e,t)=>{t.d(e,{M9:()=>o,Vp:()=>c,Wv:()=>l,vS:()=>d,yo:()=>s});var i=t(7390),r=t(8147);const o=(n,e)=>a("/board/write/".concat(n),"POST",e),s=(n,e)=>a("/board/update/".concat(n),"PATCH",e);function a(n,e,t){return new Promise(((r,o)=>{(async()=>{try{const s=await(0,i.A)(n,e,t);if(201===s.status)return void r(s.data.data);o(s.data)}catch(s){console.error(s),o(s)}})()}))}const c=n=>(0,r.A)("/board/info/".concat(n)),d=(n,e)=>{var t;e=null!==(t=e)&&void 0!==t?t:{};let i=Object.entries(e).map((n=>{let[e,t]=n;return"".concat(e,"=").concat(t)})).join("&");i=i?"?".concat(i):i;const o="/board/list/".concat(n).concat(i);return(0,r.A)(o)},l=n=>(0,r.A)("/board/delete/".concat(n),"DELETE")},7782:(n,e,t)=>{t.d(e,{A:()=>k});var i,r=t(7528),o=t(5043),s=t(4905),a=t(5475),c=t(4117),d=t(4978),l=t(9888),p=t(579);const{whiteGreen:x}=l.y,h=()=>{const{t:n}=(0,c.Bd)();return(0,p.jsx)(m,{children:(0,p.jsxs)("li",{className:"board-list",children:[(0,p.jsx)("div",{className:"seq",children:n("\uae00_\ubc88\ud638")}),(0,p.jsx)("div",{className:"title",children:n("\uc81c\ubaa9")}),(0,p.jsxs)("div",{className:"post-info",children:[(0,p.jsx)("div",{className:"poster",children:n("\uc791\uc131\uc790")}),(0,p.jsx)("div",{className:"view",children:n("\uc870\ud68c\uc218")}),(0,p.jsx)("div",{className:"datetime",children:n("\uc791\uc131\uc77c")})]})]})})},m=s.Ay.div(i||(i=(0,r.A)(["\n  border-bottom: 1px solid #ccc;\n  border-top: 3px solid #ccc;\n  margin-top: 20px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  font-size: 1.3rem;\n  text-align: center;\n  font-weight: bold;\n  width: 100%;\n  background: ",";\n\n  .board-list {\n    display: flex;\n    width: 100%;\n\n    .seq {\n      width: 7%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .title {\n      width: 57%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n  }\n\n  .post-info {\n    width: 38%;\n    display: flex;\n    justify-content: space-between;\n\n    .poster{\n    width: 30%;\n    padding-right: 20px;\n    }\n    .view {\n    width: 30%;\n    padding-right: 80px;\n    }\n    .datetime{\n    width: 30%;\n    padding-right: 70px;\n    }\n  }\n"])),x),g=o.memo(h);var f,u,b,j=t(6058);const v=s.Ay.ul(f||(f=(0,r.A)([""]))),y=(0,s.Ay)((n=>{let{item:e,className:t}=n;const{seq:i,notice:r,subject:o,poster:s,member:c,viewCount:l,commentCount:x,createdAt:h}=e;return(0,p.jsx)("div",{className:"board-list",children:(0,p.jsx)(a.N_,{to:"/board/view/"+i,className:"subject",children:(0,p.jsxs)("li",{className:t,children:[(0,p.jsx)("div",{className:"seq",children:i}),(0,p.jsxs)("div",{className:"title",children:[r&&"[".concat((0,d.t)("\uacf5\uc9c0"),"]"),o,x>0&&"(".concat(x.toLocaleString(),")")]}),(0,p.jsxs)("div",{className:"post-info",children:[(0,p.jsx)("div",{className:"poster",children:s}),(0,p.jsx)("div",{className:"view",children:l>0&&(0,p.jsxs)("span",{className:"view-count",children:[(0,d.t)("\uc870\ud68c\uc218"),": ",l.toLocaleString()]})}),(0,p.jsx)("span",{className:"datetime",children:h})]})]})})})}))(u||(u=(0,r.A)(["\n  display: flex;\n  border-bottom: 1px solid #ccc;\n  height: 50px;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 1.2rem;\n  text-align: center;\n\n  .seq {\n    width: 5%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-left: 20px;\n  }\n\n  .title {\n    width: 60%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .post-info {\n    width: 35%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    .poster {\n      width: 25%;\n      height: 18px;\n      padding-right: 40px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n    .view {\n      width: 25%;\n    }\n    .datetime {\n      width: 50%;\n    }\n  }\n"]))),w=s.Ay.li(b||(b=(0,r.A)(["\n  font-size: 1.3em;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),A=n=>{let{items:e}=n;const{t:t}=(0,c.Bd)();return(0,p.jsxs)(v,{children:[(0,p.jsx)(g,{}),e&&e.length>0?e.map((n=>(0,p.jsx)(y,{item:n},n.seq))):(0,p.jsxs)(w,{children:[t("\uc870\ud68c\ub41c_\uac8c\uc2dc\uae00\uc774_\uc5c6\uc2b5\ub2c8\ub2e4"),(0,p.jsx)(j.g1n,{})]})]})},k=o.memo(A)},7114:(n,e,t)=>{t.d(e,{q:()=>o});var i,r=t(7528);t(5043);const o=t(4905).Ay.div(i||(i=(0,r.A)(["\n  background: url('","') no-repeat center center;\n  background-size: 100% 100%;\n  width: ",";\n  height: ",";\n  object-fit: cover;\n"])),(n=>{let{url:e}=n;return e}),(n=>{let{width:e}=n;return null!==e&&void 0!==e?e:"200px"}),(n=>{let{height:e}=n;return null!==e&&void 0!==e?e:"200px"}))},3794:(n,e,t)=>{t.d(e,{W4:()=>p,bm:()=>l,dj:()=>d,p1:()=>x});var i,r,o,s,a=t(7528),c=(t(5043),t(4905));const d=c.Ay.div(i||(i=(0,a.A)(["\n  box-sizing: border-box;\n  width: 1300px;\n  min-height: 700px;\n  margin: 0 auto;\n  display: grid;\n  place-items: center;\n  gap: 60px;\n  grid-template-columns: repeat(3, 1fr);\n  margin-top: 60px;\n  justify-content: center;\n"]))),l=c.Ay.div(r||(r=(0,a.A)(["\n  box-sizing: border-box;\n  width: 100%;\n  min-height: 700px;\n  margin: 0 auto;\n  display: grid;\n  place-items: center;\n  gap: 30px;\n  grid-template-columns: repeat(3, 1fr);\n  margin-top: 60px;\n  justify-content: center;\n  "]))),p=c.Ay.div(o||(o=(0,a.A)(["\n  box-sizing: border-box;\n  width: 1300px;\n  min-height: 700px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n"]))),x=c.Ay.div(s||(s=(0,a.A)(["\n  box-sizing: border-box;\n  width: 950px;\n  margin: 0 auto;\n  display: grid;\n  place-items: center;\n  grid-template-columns: repeat(2, 1fr);\n"])))},4385:(n,e,t)=>{t.r(e),t.d(e,{default:()=>oi});var i=t(5043),r=t(3216),o=t(7528),s=t(4905),a=t(9888);const c=t.p+"static/media/MainBanner1.5b58d7f609d9e2e27519.jpeg",d=t.p+"static/media/MainBanner2.3ca81c4db35064971123.jpeg",l=t.p+"static/media/MainBanner3.0d7fb701df455b5e8d08.jpeg";var p,x,h,m,g,f,u,b,j,v=t(579);const{darkGreen:y,white:w,light:A,mid_gray:k}=a.y,C=s.Ay.div(p||(p=(0,o.A)(["\n  position: relative;\n  overflow: hidden;\n  background-color: ",";\n  height: 650px;\n"])),y),z=s.Ay.img(x||(x=(0,o.A)(["\n  width: 100%;\n  height: 650px;\n  object-fit: cover;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: opacity 1s ease-in-out;\n  opacity: ",";\n"])),(n=>n.isActive?1:0)),R=s.Ay.nav(h||(h=(0,o.A)(["\n  position: relative;\n  width: 100%;\n  background-color: ",";\n  color: ",";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 50px 40px;\n  box-sizing: border-box;\n  font-size: 1.2em;\n"])),y,w),N=s.Ay.div(m||(m=(0,o.A)(["\n  text-align: right;\n"]))),O=s.Ay.div(g||(g=(0,o.A)(["\n  margin-right:270px;\n  color: ",";\n  font-size: ",";\n  margin-top: ",";\n  margin-bottom: ",";\n"])),w,(n=>n.isHeader?"1.5em":"1em"),(n=>n.isHeader?"0":"5px"),(n=>n.isHeader?"10px":"0")),G=s.Ay.button(f||(f=(0,o.A)(["\n  background-color: ",";\n  color: ",";\n  border: 1px solid ",";\n  border-radius: 20px;\n  margin-left:300px;\n  padding: 10px 20px;\n  font-size: 1em;\n  cursor: pointer;\n  transition: background-color 0.3s ease, color 0.3s ease;\n  &:hover {\n    color: ",";\n    background-color: ",";\n    border: none;\n  }\n"])),y,w,w,y,w),E=s.Ay.div(u||(u=(0,o.A)(["\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  gap: 10px;\n"]))),P=s.Ay.div(b||(b=(0,o.A)(["\n  width: 10px;\n  height: 10px;\n  background-color: ",";\n  border-radius: 50%;\n  cursor: pointer;\n"])),(n=>n.isActive?w:k)),B=s.Ay.button(j||(j=(0,o.A)(["\n  position: absolute;\n  top: 50%;\n  ","\n  transform: translateY(-50%);\n  background-color: rgba(0, 0, 0, 0.5); \n  color: ",";\n  border: none;\n  padding: 15px;\n  cursor: pointer;\n  border-radius: 50%;\n  width: 55px; \n  z-index: 2;\n  font-size: 2em;\n  line-height: 1;\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.8); \n  }\n"])),(n=>n.isLeft?"left: 20px;":"right: 20px;"),w),_=n=>{let{onButtonClick:e}=n;const[t,r]=(0,i.useState)(0),o=[c,d,l],s=(0,i.useCallback)((()=>{r((n=>(n+1)%o.length))}),[o.length]),a=(0,i.useCallback)((()=>{r((n=>0===n?o.length-1:n-1))}),[o.length]);return(0,i.useEffect)((()=>{const n=setInterval(s,7e3);return()=>clearInterval(n)}),[s]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(C,{children:[o.map(((n,e)=>(0,v.jsx)(z,{src:n,alt:"Main Banner ".concat(e+1),isActive:e===t},e))),(0,v.jsx)(B,{isLeft:!0,onClick:a,children:"\u276e"}),(0,v.jsx)(B,{onClick:s,children:"\u276f"}),(0,v.jsx)(E,{children:o.map(((n,e)=>(0,v.jsx)(P,{isActive:e===t,onClick:()=>r(e)},e)))})]}),(0,v.jsxs)(R,{children:[(0,v.jsx)(G,{onClick:e,children:"\uc9c0\uae08 \ubc14\ub85c \uc608\uc57d\ud558\uae30"}),(0,v.jsxs)(N,{children:[(0,v.jsx)(O,{isHeader:!0,children:"\uc870\uc774\ud31c\uacfc \ud568\uaed8 \ub5a0\ub098\ub294 \uc990\uac70\uc6b4 \ub18d\ucd0c\uccb4\ud5d8"}),(0,v.jsx)(O,{children:"\uc804\uad6d\uc5d0 \uc788\ub294 \uccb4\ud5d8\uac00\ub2a5\ud55c \ub18d\ucd0c\ub4e4\uc744 \ubc29\ubb38\ud558\uc5ec, \uc88b\uc740 \uacbd\ud5d8\uacfc \ucd94\uc5b5\uc744 \uc313\uc544\ubcf4\uc138\uc694!"})]})]})]})},S=i.memo(_),q=t.p+"static/media/Main_Map.3f2e575fde46dc5bfa69.png";var I,M,D,F,Y,L,H,T,W=t(678);const{dark:Q,light:Z,midGreen:V,white:X,lightGreen:U,darkGreen:J}=a.y,K=s.Ay.div(I||(I=(0,o.A)(["\n  display: flex;\n  justify-content: center;\n  background: linear-gradient(to bottom, ",", ",");\n  padding: 50px 0;\n  min-height: 950px;\n"])),U,X),$=s.Ay.div(M||(M=(0,o.A)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between\n  max-width: 1440px; \n  width: 100%; \n  padding: 0 20px;\n  \n"]))),nn=s.Ay.img(D||(D=(0,o.A)(["\n  margin-left: 200px;\n  margin-top: 50px;\n  width: 40%;\n  height: auto;\n  object-fit: cover;\n  margin-bottom: 20px;\n"]))),en=s.Ay.div(F||(F=(0,o.A)(["\n  margin-top: 100px;\n  display: flex;\n  flex-direction: column;\n  width: 40%;\n  padding-left: 50px;\n"]))),tn=s.Ay.img(Y||(Y=(0,o.A)(["\n  width: 500px;\n  margin-bottom: 30px;\n"]))),rn=s.Ay.div(L||(L=(0,o.A)(["\n  background-color: ",";\n  color: ",";\n  padding: 25px 40px;\n  width: 85%;\n  margin-bottom: 30px;\n  display: flex;\n  font-size: 2em;\n  font-weight: bold;\n  // border-top-left-radius: 40px;\n  // border-bottom-left-radius: 40px;\n  border-radius: 20px;\n  margin-right: 0;\n"])),J,X),on=s.Ay.div(H||(H=(0,o.A)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n  width: 100%;\n"]))),sn=s.Ay.button(T||(T=(0,o.A)(["\n  background-color: ",";\n  color: ",";\n  border-radius: 15px;\n  width: 170px;\n  height: 70px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-size: 1.5em;\n  font-weight: bold;\n  cursor: pointer;\n  transition: background-color 0.3s ease, color 0.3s ease;\n  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.5);\n  border: none;\n  &:hover {\n    border: none;\n    text-decoration-line: underline;\n    text-decoration-thickness: 2px;\n    text-underline-offset: 10px;\n    color: ",";\n    transform: scale(1.07);\n  }\n"])),X,Q,V),an=n=>{window.location.href=n},cn=n=>{let{onButtonClick:e}=n;return(0,v.jsx)(K,{children:(0,v.jsxs)($,{children:[(0,v.jsx)(nn,{src:q,alt:"Map"}),(0,v.jsxs)(en,{children:[(0,v.jsx)(tn,{src:W,alt:"Logo"}),(0,v.jsx)(rn,{children:"\uc5b4\ub5a4\uc9c0\uc5ed\uc73c\ub85c \uac00\uc2dc\ub098\uc694?"}),(0,v.jsxs)(on,{children:[(0,v.jsx)(sn,{onClick:()=>an("recommend/festival?address=\uc11c\uc6b8\ud2b9\ubcc4\uc2dc"),children:"\uc11c \uc6b8"}),(0,v.jsx)(sn,{onClick:()=>an("recommend/festival?address=\uacbd\uae30\ub3c4"),children:"\uacbd\uae30\u2022\uc778\ucc9c"}),(0,v.jsx)(sn,{onClick:()=>an("recommend/festival?address=\uac15\uc6d0\ub3c4"),children:"\uac15\uc6d0\ub3c4"}),(0,v.jsx)(sn,{onClick:()=>an("recommend/festival?address=\uc81c\uc8fc\ub3c4"),children:"\uc81c\uc8fc\ub3c4"}),(0,v.jsx)(sn,{onClick:()=>an("recommend/festival?address=\ucda9\uccad\ubd81\ub3c4"),children:"\ucda9\uccad\ubd81\ub3c4"}),(0,v.jsx)(sn,{onClick:()=>an("recommend/festival?address=\ucda9\uccad\ub0a8\ub3c4"),children:"\ucda9\uccad\ub0a8\ub3c4"}),(0,v.jsx)(sn,{onClick:()=>an("recommend/festival?address=\uc804\ub77c\ubd81\ub3c4"),children:"\uc804\ub77c\ubd81\ub3c4"}),(0,v.jsx)(sn,{onClick:()=>an("recommend/festival?address=\uc804\ub77c\ub0a8\ub3c4"),children:"\uc804\ub77c\ub0a8\ub3c4"}),(0,v.jsx)(sn,{onClick:()=>an("recommend/festival?address=\uacbd\uc0c1\ubd81\ub3c4"),children:"\uacbd\uc0c1\ubd81\ub3c4"}),(0,v.jsx)(sn,{onClick:()=>an("recommend/festival?address=\uacbd\uc0c1\ub0a8\ub3c4"),children:"\uacbd\uc0c1\ub0a8\ub3c4"})]})]})]})})},dn=i.memo(cn),ln=t.p+"static/media/ReviewImage1.6fce4459dcdccbcd6319.jpg";var pn,xn,hn=t(5475),mn=t(7114),gn=t(184);const{midGreen:fn,mid_gray:un,darkGreen:bn}=a.y,jn=(0,s.Ay)((n=>{let{item:e,className:t}=n;const{seq:i,title:r,photoUrl:o,address:s,description:a}=e,c="/recommend/tour/".concat(i);return(0,v.jsx)("li",{className:t,children:(0,v.jsxs)(hn.N_,{to:c,children:[o&&(0,v.jsx)(mn.q,{className:"photo",url:o,width:"100%"}),(0,v.jsxs)("div",{className:"item-content",children:[(0,v.jsx)("div",{className:"title",children:r}),(0,v.jsx)("div",{className:"description",children:a}),(0,v.jsxs)("div",{className:"address",children:[(0,v.jsx)(gn.vq8,{className:"icon"}),s]})]})]})})}))(pn||(pn=(0,o.A)(["\n  width: 250px;\n  height: 400px;\n  border-radius: 30px;\n  overflow: hidden;\n  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);\n  border: 2px solid ",";\n\n  a {\n    display: flex;\n    flex-direction: column;\n\n    .photo {\n      width: 100%;\n      height: 200px;\n      border-radius: 5px 5px 0px 0px;\n      filter: brightness(40%);\n\n      &:hover {\n        filter: none;\n      }\n    }\n\n    .item-content {\n      width: 100%;\n      word-break: break-all;\n      padding: 5px 20px;\n      height: 200px;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n\n      .title {\n        font-size: 20px;\n        width: 200px;\n        font-weight: bold;\n        text-align: center;\n        height: 30%;\n        margin-bottom: 5px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        overflow-wrap: break-word;\n        color: ",";\n      }\n\n      .description {\n        font-size: 15px;\n        width: 100%;\n        height: 32%;\n        display: flex;\n        align-items: center;\n        text-align: justify;\n        line-height: 20px;\n        -webkit-line-clamp: 3;\n        display: -webkit-box;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: normal;\n        -webkit-line-clamp: 3;\n        -webkit-box-orient: vertical;\n      }\n\n      .address {\n        font-size: 1.2em;\n        font-weight: bold;\n        margin-top: 10px;\n        margin-left: 20px;\n        color: ",";\n\n        .icon {\n          color: #ff5e00;\n          position: relative;\n          top: 3px;\n          margin-right: 5px;\n        }\n      }\n    }\n   &:hover {\n    .photo {\n      filter: none;\n    }\n  }\n"])),fn,bn,un),vn=n=>{let{items:e=[]}=n;const t=(n=>{let e=n.slice();for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e})(e).slice(0,5);return(0,v.jsx)(yn,{children:t.map((n=>(0,v.jsx)(jn,{item:n},n.seq)))})},yn=s.Ay.ul(xn||(xn=(0,o.A)(["\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n"]))),wn=i.memo(vn);var An,kn,Cn,zn,Rn,Nn,On=t(3794),Gn=t(3768);const{darkGreen:En,white:Pn,dark:Bn,mid_gray:_n,midGreen:Sn,lightGreen:qn}=a.y,In=s.Ay.div(An||(An=(0,o.A)(["\n  padding: 100px 20px;\n  background: ",";\n  display: flex;\n  justify-content: center;\n"])),Pn),Mn=s.Ay.div(kn||(kn=(0,o.A)(["\n  max-width: 1440px;\n  width: 100%;\n"]))),Dn=s.Ay.div(Cn||(Cn=(0,o.A)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n"]))),Fn=s.Ay.h2(zn||(zn=(0,o.A)(["\n  font-size: 3em;\n  margin-bottom: 10px;\n  position: relative;\n"]))),Yn=s.Ay.span(Rn||(Rn=(0,o.A)(["\n  display: block;\n  width: 400px;\n  height: 10px;\n  background-color: ",";\n  margin-top: -5px;\n  margin-left: 20px;\n  border-radius: 5px;\n"])),qn),Ln=s.Ay.a(Nn||(Nn=(0,o.A)(["\n  font-size: 1.5em;\n  margin-right: 50px;\n  color: ",";\n  font-weight: bold;\n  cursor: pointer;\n  &:hover {\n    text-decoration-line: underline;\n    text-decoration-thickness: 2px;\n    text-underline-offset: 10px;\n  }\n"])),En),Hn=n=>{let{onButtonClick:e}=n;const[t,r]=(0,i.useState)([]);return(0,i.useEffect)((()=>{(0,Gn.lZ)().then((n=>{r(n.items)}))}),[]),(0,v.jsx)(In,{children:(0,v.jsxs)(Mn,{children:[(0,v.jsxs)(Dn,{children:[(0,v.jsxs)(Fn,{children:["\uc774\ub7f0 \uc5ec\ud589\uc9c0\ub294 \uc5b4\ub5a0\uc138\uc694?",(0,v.jsx)(Yn,{})]}),(0,v.jsx)(Ln,{onClick:e,children:"\ub354\ubcf4\uae30"})]}),(0,v.jsx)(On.W4,{children:(0,v.jsx)(wn,{items:t})})]})})},Tn=i.memo(Hn),Wn=t.p+"static/media/ReviewImage2.e3a9e0c5dd0230630d99.jpg",Qn=t.p+"static/media/ReviewImage3.9e5b41782945a566e3e7.jpg",Zn=t.p+"static/media/ReviewImage4.5bb1a8f83357126d81ad.jpg",Vn=t.p+"static/media/ReviewImage5.e65940598e1599dee400.jpg",Xn=t.p+"static/media/ReviewImage6.90b7dbd2dec874f21fe9.jpg",Un=t.p+"static/media/ReviewImage7.1c2a3caa878f4ff01de5.jpg",Jn=t.p+"static/media/ReviewImage8.936213e12aacc6479b7d.jpg",Kn=t.p+"static/media/ReviewImage9.7a99a8bf8c9d8aa7f9eb.jpg",$n=t.p+"static/media/ReviewImage10.7b606654e74b69089d63.jpg";var ne,ee,te,ie,re,oe,se,ae,ce,de,le,pe,xe,he,me,ge,fe,ue,be,je;const{darkGreen:ve,white:ye,dark:we,midGreen:Ae,whiteGreen:ke,lightGreen:Ce,mid_gray:ze}=a.y,Re=s.Ay.img(ne||(ne=(0,o.A)(["\n  width: 900px;\n  height: auto;\n  opacity: 0.3;\n  position: absolute;\n  top: 655px; \n  left: 1200px;\n  transform: translateX(-25%);\n"]))),Ne=s.Ay.div(ee||(ee=(0,o.A)(["\n  background: ",";\n  display: flex;\n  justify-content: center; \n  position: relative;\n  height: 700px;\n  margin-bottom: 150px;\n"])),ke),Oe=s.Ay.div(te||(te=(0,o.A)(["\n  width: 100%;\n  height: 300px;\n  background: ",";\n"])),ye),Ge=s.Ay.div(ie||(ie=(0,o.A)(["\n  padding: 0 20px;\n  max-width: 1440px; \n  width: 100%; \n  display: flex;\n  justify-content: center;\n"]))),Ee=s.Ay.div(re||(re=(0,o.A)(["\n  margin-left: 100px;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  margin-top: 230px;\n  padding: 0 40px;\n"]))),Pe=(0,s.i7)(oe||(oe=(0,o.A)(["\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-100%);\n  }\n"]))),Be=(0,s.i7)(se||(se=(0,o.A)(["\n  0% {\n    transform: translateY(-100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n"]))),_e=s.Ay.div(ae||(ae=(0,o.A)(["\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  height: 1000px; \n  width: 270px;\n  margin-right: 40px;\n"]))),Se=s.Ay.div(ce||(ce=(0,o.A)(["\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  height: 1000px; \n  width: 270px;\n  margin-right: 100px;\n"]))),qe=s.Ay.div(de||(de=(0,o.A)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"]))),Ie=s.Ay.div(le||(le=(0,o.A)(["\n  width: 270px;\n  height: 190px;\n  background: ",";\n  margin-bottom: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 15px; \n"])),we),Me=(0,s.Ay)(qe)(pe||(pe=(0,o.A)(["\n  animation: "," 25s linear infinite;\n"])),Pe),De=(0,s.Ay)(qe)(xe||(xe=(0,o.A)(["\n  animation: "," 25s linear infinite;\n    animation-delay: 0.3s;\n"])),Pe),Fe=(0,s.Ay)(qe)(he||(he=(0,o.A)(["\n  animation: "," 25s linear infinite;\n"])),Be),Ye=(0,s.Ay)(qe)(me||(me=(0,o.A)(["\n  animation: "," 25s linear infinite;\n  animation-delay: -1.7s;\n"])),Be),Le=s.Ay.img(ge||(ge=(0,o.A)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 15px; \n"]))),He=s.Ay.h2(fe||(fe=(0,o.A)(["\n  font-size: 3em;\n  margin-bottom: 10px;\n  position: relative;\n"]))),Te=s.Ay.span(ue||(ue=(0,o.A)(["\n  display: block;\n  width: 500px;\n  height: 10px;\n  background-color: ",";\n  margin-top: -5px; \n  margin-left: 20px;\n  border-radius: 5px;\n"])),Ce),We=s.Ay.p(be||(be=(0,o.A)(["\n  font-size: 1.5em;\n  font-weight:bold;\n  color: ",";\n  margin-bottom: 70px;\n  line-height: 1.7;\n\n"])),ze),Qe=s.Ay.button(je||(je=(0,o.A)(["\n  width: 300px;\n  padding: 20px 20px;\n  font-size: 1.3em;\n  font-weight: bold;\n  color: ",";\n  background: ",";\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: background-color 0.3s ease, color 0.3s ease;\n  &:hover {\n    background: ",";\n    color: ",";\n  }\n"])),Ae,ye,ve,ye),Ze=n=>{let{onButtonClick:e}=n;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(Ne,{children:[(0,v.jsxs)(Ge,{children:[(0,v.jsxs)(_e,{children:[(0,v.jsxs)(Me,{children:[(0,v.jsx)(Ie,{children:(0,v.jsx)(Le,{src:ln,alt:"Review 1"})}),(0,v.jsx)(Ie,{children:(0,v.jsx)(Le,{src:Wn,alt:"Review 2"})}),(0,v.jsx)(Ie,{children:(0,v.jsx)(Le,{src:Qn,alt:"Review 3"})}),(0,v.jsx)(Ie,{children:(0,v.jsx)(Le,{src:Zn,alt:"Review 4"})}),(0,v.jsx)(Ie,{children:(0,v.jsx)(Le,{src:Vn,alt:"Review 5"})})]}),(0,v.jsxs)(De,{children:[(0,v.jsx)(Ie,{children:(0,v.jsx)(Le,{src:ln,alt:"Review 1"})}),(0,v.jsx)(Ie,{children:(0,v.jsx)(Le,{src:Wn,alt:"Review 2"})}),(0,v.jsx)(Ie,{children:(0,v.jsx)(Le,{src:Qn,alt:"Review 3"})}),(0,v.jsx)(Ie,{children:(0,v.jsx)(Le,{src:Zn,alt:"Review 4"})}),(0,v.jsx)(Ie,{children:(0,v.jsx)(Le,{src:Vn,alt:"Review 5"})})]})]}),(0,v.jsxs)(Se,{children:[(0,v.jsxs)(Fe,{children:[(0,v.jsx)(Ie,{children:(0,v.jsx)(Le,{src:Xn,alt:"Review 1"})}),(0,v.jsx)(Ie,{children:(0,v.jsx)(Le,{src:Un,alt:"Review 2"})}),(0,v.jsx)(Ie,{children:(0,v.jsx)(Le,{src:Jn,alt:"Review 3"})}),(0,v.jsx)(Ie,{children:(0,v.jsx)(Le,{src:Kn,alt:"Review 4"})}),(0,v.jsx)(Ie,{children:(0,v.jsx)(Le,{src:$n,alt:"Review 5"})})]}),(0,v.jsxs)(Ye,{children:[(0,v.jsx)(Ie,{children:(0,v.jsx)(Le,{src:Xn,alt:"Review 1"})}),(0,v.jsx)(Ie,{children:(0,v.jsx)(Le,{src:Un,alt:"Review 2"})}),(0,v.jsx)(Ie,{children:(0,v.jsx)(Le,{src:Jn,alt:"Review 3"})}),(0,v.jsx)(Ie,{children:(0,v.jsx)(Le,{src:Kn,alt:"Review 4"})}),(0,v.jsx)(Ie,{children:(0,v.jsx)(Le,{src:$n,alt:"Review 5"})})]})]}),(0,v.jsxs)(Ee,{children:[(0,v.jsxs)(He,{children:["\ud2b9\ubcc4\ud588\ub358 \uc21c\uac04\uc744 \uacf5\uc720\ud558\uc138\uc694!",(0,v.jsx)(Te,{})]}),(0,v.jsxs)(We,{children:["\uc9dc\ub9bf\ud558\uace0 \uc990\uac70\uc6e0\ub358 \uccb4\ud5d8\uc758 \uc21c\uac04\ub4e4\uc744",(0,v.jsx)("br",{}),"\uc0ac\ub78c\ub4e4\uacfc \uacf5\uc720\ud558\uba70 \ud589\ubcf5\uc744 \ub098\ub220\ubcf4\uc138\uc694!"]}),(0,v.jsx)(Qe,{onClick:e,children:"\uccb4\ud5d8\ud6c4\uae30 \ubc14\ub85c\uac00\uae30"})]})]}),(0,v.jsx)(Re,{src:W,alt:"Logo"})]}),(0,v.jsx)(Oe,{})]})},Ve=i.memo(Ze),Xe=t.p+"static/media/QnAImage.b7e3bec2b4c9f19ee7ca.png";t(7782);var Ue,Je,Ke,$e,nt,et,tt,it,rt,ot,st,at,ct,dt,lt,pt,xt,ht,mt,gt,ft=t(953),ut=t(6178),bt=t.n(ut);const{darkGreen:jt,white:vt,dark:yt,midGreen:wt,lightGreen:At,mid_gray:kt,line_gray:Ct}=a.y,zt=s.Ay.div(Ue||(Ue=(0,o.A)(["\n  padding: 50px 20px;\n  background: ",";\n  display: flex;\n  justify-content: center;\n"])),vt),Rt=s.Ay.div(Je||(Je=(0,o.A)(["\n  max-width: 1440px;\n  width: 100%;\n  margin-bottom: 50px;\n"]))),Nt=s.Ay.div(Ke||(Ke=(0,o.A)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 40px;\n"]))),Ot=s.Ay.div($e||($e=(0,o.A)(["\n  display: flex;\n  align-items: center;\n"]))),Gt=s.Ay.h2(nt||(nt=(0,o.A)(["\n  font-size: 3em;\n  margin-bottom: 10px;\n  position: relative;\n  text-align: center;\n  margin-left: 150px;\n"]))),Et=s.Ay.h2(et||(et=(0,o.A)(["\n  font-size: 3em;\n  margin-bottom: 10px;\n  position: relative;\n  text-align: center;\n  margin-left: 320px;\n"]))),Pt=s.Ay.span(tt||(tt=(0,o.A)(["\n  display: block;\n  width: 150px;\n  height: 10px;\n  background-color: ",";\n  margin: 0 auto;\n  border-radius: 5px;\n"])),At),Bt=s.Ay.a(it||(it=(0,o.A)(["\n  font-size: 1.5em;\n  color: ",";\n  font-weight: bold;\n  margin-right: 170px;\n  margin-top: 70px;\n  cursor: pointer;\n  &:hover {\n    text-decoration-line: underline;\n    text-decoration-thickness: 2px;\n    text-underline-offset: 10px;\n  }\n"])),jt),_t=s.Ay.div(rt||(rt=(0,o.A)(["\n  display: flex;\n  gap: 70px;\n  margin: 0 auto;\n"]))),St=s.Ay.div(ot||(ot=(0,o.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  background: ",";\n  border-radius: 15px;\n  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);\n  padding-bottom: 30px;\n  margin-left: 150px;\n"])),vt),qt=s.Ay.div(st||(st=(0,o.A)(["\n  width: 100%;\n  max-width: 450px;\n  height: 230px;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: ",";\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n"])),yt),It=s.Ay.img(at||(at=(0,o.A)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),Mt=s.Ay.div(ct||(ct=(0,o.A)(["\n  width: 100%;\n  color: ",";\n  cursor: pointer;\n"])),yt),Dt=s.Ay.p(dt||(dt=(0,o.A)(["\n  font-size: 1.5em;\n  font-weight: bold;\n  color: ",";\n  font-weight: bold;\n  margin-bottom: 20px;\n"])),wt),Ft=s.Ay.p(lt||(lt=(0,o.A)(["\n  font-size: 1.2em;\n  line-height: 1.5;\n  color: ",";\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 100%;\n"])),yt),Yt=s.Ay.div(pt||(pt=(0,o.A)(["\n  width: 700px;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  background: ",";\n  padding-top: 40px;\n  border-radius: 15px;\n  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);\n"])),vt),Lt=s.Ay.div(xt||(xt=(0,o.A)(["\n  font-size: 1.6em;\n  font-weight: bold;\n  color: ",";\n  margin-bottom: 25px;\n  width: 70%;\n  margin-left: 80px;\n  text-align: left;\n  cursor: pointer;\n"])),yt),Ht=s.Ay.div(ht||(ht=(0,o.A)(["\n  width: 80%;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  margin-left: 60px;\n  border-bottom: 1px solid ",";\n  padding: 5px 0;\n  &:nth-child(5) {\n    border-bottom: none;\n  }\n"])),Ct),Tt=s.Ay.p(mt||(mt=(0,o.A)(["\n  font-size: 1.4em;\n  font-weight: bold;\n  flex: 1;\n  color: ",";\n  margin-left: 20px;\n  margin-right: 30px;\n"])),kt),Wt=s.Ay.p(gt||(gt=(0,o.A)(["\n  font-size: 1.4em;\n  flex: 2;\n  color: black;\n  font-weight: bold;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 70%;\n"]))),Qt=n=>{let{onButtonClick:e,bid:t="notice"}=n;const[r,o]=(0,i.useState)([]);(0,i.useEffect)((()=>{(async()=>{try{const{items:n}=await(0,ft.vS)(t,{page:1,limit:5});console.log("Fetched items: ",n),o(n)}catch(n){console.error(n)}})()}),[t]);const s=()=>{window.location.href="/board/list/qna"};return(0,v.jsx)(zt,{children:(0,v.jsxs)(Rt,{children:[(0,v.jsxs)(Nt,{children:[(0,v.jsxs)(Ot,{children:[(0,v.jsxs)(Gt,{children:["QnA",(0,v.jsx)(Pt,{})]}),(0,v.jsxs)(Et,{children:["\uacf5\uc9c0\uc0ac\ud56d",(0,v.jsx)(Pt,{})]})]}),(0,v.jsx)(Bt,{onClick:e,children:"\ub354\ubcf4\uae30"})]}),(0,v.jsxs)(_t,{children:[(0,v.jsxs)(St,{children:[(0,v.jsx)(qt,{children:(0,v.jsx)(It,{src:Xe,alt:"QnA",onClick:s})}),(0,v.jsxs)(Mt,{onClick:s,children:[(0,v.jsx)(Dt,{children:"\ubb38\uc758 \uc0ac\ud56d\uc774 \uc788\uc73c\uc2dc\ub2e4\uba74 \uc54c\ub824\uc8fc\uc138\uc694!"}),(0,v.jsxs)(Ft,{onClick:s,children:["\ub2f9\uc2e0\uc758 \uc18c\uc911\ud55c \uc758\uacac\uc744 \ubc1b\uc544,",(0,v.jsx)("br",{}),"\ub354 \ub098\uc740 \uc11c\ube44\uc2a4\uac00 \ub418\ub3c4\ub85d \ub178\ub825\ud558\uaca0\uc2b5\ub2c8\ub2e4."]})]})]}),(0,v.jsxs)(Yt,{children:[(0,v.jsx)(Lt,{onClick:e,children:"\uacf5\uc9c0\uc0ac\ud56d"}),(0,v.jsx)("div",{className:"noticeParent",children:r&&r.length>0?r.map((n=>(0,v.jsxs)(Ht,{onClick:()=>{return e=n.seq,void(window.location.href="/board/view/".concat(e));var e},children:[(0,v.jsx)(Wt,{children:n.subject}),(0,v.jsx)(Tt,{children:n.poster}),(0,v.jsx)(Tt,{children:bt()(n.createdAt).format("YYYY/MM/DD")})]},n.seq))):(0,v.jsx)("p",{children:"\uacf5\uc9c0\uc0ac\ud56d\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."})})]})]})]})})},Zt=i.memo(Qt);var Vt,Xt;const{darkGreen:Ut,white:Jt,dark:Kt,mid_gray:$t,midGreen:ni}=a.y,ei=s.Ay.div(Vt||(Vt=(0,o.A)(["\n  position: fixed;\n  top: 30%;\n  right: 50px;\n  width: 130px;\n  background: ",";\n  padding: 20px;\n  box-shadow: -2px 2px 12px rgba(0, 0, 0, 0.3);\n  z-index: 1000;\n  text-align: center;\n  border-radius: 20px;\n  font-size: 1.2em;\n  font-weight: bold;\n"])),Jt),ti=s.Ay.a(Xt||(Xt=(0,o.A)(["\n  display: block;\n  margin: 10px 0;\n  padding: 10px;\n  background: ",";\n  border-radius: 10px;\n  text-decoration: none;\n  color: #333;\n  cursor: pointer;\n  &:hover {\n    background: #e1e1e1;\n  }\n"])),Jt),ii=n=>{let{onLinkClick:e}=n;return(0,v.jsxs)(ei,{children:[(0,v.jsx)(ti,{onClick:()=>e("top"),children:"\uba54 \ub274"}),(0,v.jsx)(ti,{onClick:()=>e("location"),children:"\uc9c0 \uc5ed"}),(0,v.jsx)(ti,{onClick:()=>e("recommend"),children:"\ucd94 \ucc9c"}),(0,v.jsx)(ti,{onClick:()=>e("review"),children:"\ud6c4 \uae30"}),(0,v.jsx)(ti,{onClick:()=>e("board"),children:"\uacf5 \uc9c0"})]})},ri=()=>{const n=(0,r.Zp)(),e=(0,i.useRef)(null),t=(0,i.useRef)(null),o=(0,i.useRef)(null),s=(0,i.useRef)(null),a=(0,i.useRef)(null),c=function(n){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(n.current){const t=n.current.getBoundingClientRect().top+window.pageYOffset-e;window.scrollTo({top:t,behavior:"smooth"})}};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{ref:e,children:(0,v.jsx)(S,{onButtonClick:()=>{n("/reservation/list")}})}),(0,v.jsx)("div",{ref:t,children:(0,v.jsx)(dn,{onButtonClick:()=>{n("/recommend/festival")}})}),(0,v.jsx)("div",{ref:o,children:(0,v.jsx)(Tn,{onButtonClick:()=>{n("/recommend/tour")}})}),(0,v.jsx)("div",{ref:s,children:(0,v.jsx)(Ve,{onButtonClick:()=>{n("/board/list/review")}})}),(0,v.jsx)("div",{ref:a,children:(0,v.jsx)(Zt,{onButtonClick:()=>{n("/board/list/notice")}})}),(0,v.jsx)(ii,{onLinkClick:n=>{switch(n){case"top":c(e,300);break;case"location":c(t);break;case"recommend":c(o);break;case"review":c(s);break;case"board":c(a)}}})]})},oi=i.memo(ri)},3768:(n,e,t)=>{t.d(e,{Vg:()=>o,gR:()=>s,lZ:()=>r});var i=t(8147);const r=n=>{var e;n=null!==(e=n)&&void 0!==e?e:{};const t=[];for(const[i,o]of Object.entries(n))t.push("".concat(i,"=").concat(o));let r="/tour/list";return t.length>0&&(r+="?".concat(t.join("&"))),(0,i.A)(r)},o=n=>(0,i.A)("/tour/info/".concat(n)),s=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return(0,i.A)("/tour/wish?page=".concat(n,"&limit=").concat(e))}},9888:(n,e,t)=>{t.d(e,{S:()=>r,y:()=>i});const i={blue:"#6CC0FF",primary:"#007bff",secondary:"#6c757d",success:"#28a745",danger:"#dc3545",warning:"#ffc107",info:"#17a2b8",light:"#E2E2E2",dark:"#343a40",black:"#000",darkGreen:"#428C4C",midGreen:"#39AE48",lightGreen:"#C2F2B6",white:"#ffffff",dark_gray:"#333333",mid_gray:"#767676",line_gray:"#D5D5D5",whiteGreen:"#FFFFDE",whiteGray:"#cccccc",gray:"#ccc"},r={primary:[i.primary,"#fff",i.primary],secondary:[i.secondary,"#fff",i.secondary],success:[i.success,"#fff",i.success],danger:[i.danger,"#fff",i.danger],warning:[i.warning,"#212529","#212529"],info:[i.info,"#fff",i.info],light:[i.light,"#212529","#212529"],dark:[i.dark,"#fff",i.dark],darkGreen:[i.darkGreen,"#fff",i.darkGreen],midGreen:[i.midGreen,"#fff",i.midGreen],lightGreen:[i.lightGreen,"#fff",i.lightGreen]}},678:(n,e,t)=>{n.exports=t.p+"static/media/logo.7063a0bd59ebd927b9d3.png"},3441:(n,e,t)=>{t.d(e,{k5:()=>h});var i=t(5043),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=i.createContext&&i.createContext(r),s=["attr","size","title"];function a(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t={};for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){if(e.indexOf(i)>=0)continue;t[i]=n[i]}return t}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function c(){return c=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},c.apply(this,arguments)}function d(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?d(Object(t),!0).forEach((function(e){p(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e,t){return(e=function(n){var e=function(n,e){if("object"!=typeof n||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var i=t.call(n,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(n)}(n,"string");return"symbol"==typeof e?e:e+""}(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function x(n){return n&&n.map(((n,e)=>i.createElement(n.tag,l({key:e},n.attr),x(n.child))))}function h(n){return e=>i.createElement(m,c({attr:l({},n.attr)},e),x(n.child))}function m(n){var e=e=>{var t,{attr:r,size:o,title:d}=n,p=a(n,s),x=o||e.size||"1em";return e.className&&(t=e.className),n.className&&(t=(t?t+" ":"")+n.className),i.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,r,p,{className:t,style:l(l({color:n.color||e.color},e.style),n.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),d&&i.createElement("title",null,d),n.children)};return void 0!==o?i.createElement(o.Consumer,null,(n=>e(n))):e(r)}}}]);
//# sourceMappingURL=2768.e0413d8e.chunk.js.map
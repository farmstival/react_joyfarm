"use strict";(self.webpackChunkreact_project=self.webpackChunkreact_project||[]).push([[5721],{9068:(n,e,t)=>{t.d(e,{S7:()=>x,c7:()=>c,g4:()=>h});var s,i,r,d=t(7528),o=t(4905),l=t(9888);const{darkGreen:a}=l.y,c=o.Ay.div(s||(s=(0,d.A)(["\n  padding: 30px 30px;\n  border: 1px solid #d9d9d9;\n  margin: 30px auto;\n  max-width: 1200px;\n  border-radius: 8px;\n  box-shadow: 2px 2px 2px 1px #f5f5f5;\n"]))),x=o.Ay.form(i||(i=(0,d.A)(["\n  border: 2.5px solid #d9d9d9;\n  margin: auto;\n  max-width: 1300px;\n  border-radius: 8px;\n  box-shadow: 2px 2px 2px 1px #f5f5f5;\n"]))),h=o.Ay.div(r||(r=(0,d.A)(["\n  overflow: hidden;\n  width: calc(100% - 170px);\n  font-size: 1.5rem;\n  padding-top: 20px;\n\n  h1 {\n    display: flex;\n    align-items: center;\n    margin: 0;\n    line-height: 1;\n  }\n\n  .icon {\n    color: ",";\n  }\n\n  svg {\n    margin-right: 6px;\n  }\n"])),a)},1120:(n,e,t)=>{t.d(e,{A:()=>g});var s,i,r=t(7528),d=t(5043),o=t(3216),l=t(4905),a=t(9888),c=t(4117),x=t(579);const{white:h,midGreen:p}=a.y,m=()=>{const n=(0,o.Zp)(),{t:e}=(0,c.Bd)(),t=l.Ay.div(s||(s=(0,r.A)(["\n    display: flex;\n    justify-content: center;\n    margin-top: 30px;\n  "]))),d=l.Ay.button(i||(i=(0,r.A)(["\n    font-size: 1.4em;\n    width: 120px;\n    height: 50px;\n    background-color: ",";\n    color: ",";\n    border-radius: 5px;\n    border: none;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    &:hover {\n      transform: scale(1.02);\n      box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);\n    }\n  "])),p,h);return(0,x.jsx)(t,{children:(0,x.jsx)(d,{onClick:()=>{n(-1)},children:e("\ubaa9\ub85d")})})},g=d.memo(m)},1439:(n,e,t)=>{t.d(e,{A:()=>f});var s,i=t(7528),r=t(5043),d=t(6833),o=t(3216),l=t(6075),a=t(7779),c=t(7128),x=t(4905),h=t(9888),p=t(579);const{mid_gray:m,white:g}=h.y,j=x.Ay.div(s||(s=(0,i.A)(["\n  cursor: pointer;\n  color: ",";\n  // background-color: ",";\n  transition: color 0.3s;\n  font-size: 40px;\n"])),(n=>n.active?"#ff6a39":m),g),u=n=>{let{IconOn:e,IconOff:t,seq:s,type:i}=n;const[x,h]=(0,r.useState)(!1),m=null!==e&&void 0!==e?e:d.eS$,g=null!==t&&void 0!==t?t:d.Lrx,u=(0,o.Zp)(),f=(0,o.zy)(),{states:{isLogin:v}}=(0,r.useContext)(a.Ay),{states:y}=(0,r.useContext)(c.Ay),A=y["".concat(i.toLowerCase(),"Wish")];(0,r.useEffect)((()=>{h(Boolean(A.includes(s)))}),[A,s,v]);const b=(0,r.useCallback)((n=>{if(!v)return void u("/member/login?redirectUrl=".concat(f.pathname));const e=n?l.jW:l.ax;(async()=>{try{await e(s,i),h(n)}catch(t){console.error(t)}})()}),[s,i,u,f.pathname,v]),k=x?m:g;return(0,p.jsx)(j,{as:k,active:x,onClick:()=>b(!x)})},f=r.memo(u)},5554:(n,e,t)=>{t.d(e,{Vg:()=>r,gR:()=>d,lZ:()=>i});var s=t(8147);const i=n=>{var e;n=null!==(e=n)&&void 0!==e?e:{};const t=[];for(const[s,r]of Object.entries(n))t.push("".concat(s,"=").concat(r));let i="/festival/list";return t.length>0&&(i+="?".concat(t.join("&"))),(0,s.A)(i)},r=n=>(0,s.A)("/festival/info/".concat(n)),d=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return(0,s.A)("/festival/wish?page=".concat(n,"&limit=").concat(e))}},8102:(n,e,t)=>{t.r(e),t.d(e,{default:()=>G});var s,i,r=t(5043),d=t(9367),o=t(7841),l=t(423),a=t(9068),c=t(7528),x=t(4117),h=t(3216),p=t(4905),m=t(5554),g=t(5062),j=t(3386),u=t(579);const f=p.Ay.div(s||(s=(0,c.A)(["\nflex-grow: 1;\nmargin-right: 10px;\nborder-radius: 5px;\nheight: 500px;\noverflow: hidden;\ndisplay: flex;\nalign-items: center;\n"]))),v=p.Ay.div(i||(i=(0,c.A)(["\n  background:url('","') no-repeat center center;\n  background-size: cover;\n  background-size: 100% 100%;\n  width: 100%;\n  height: 450px;\n  border-radius: 8px;\n  isolation: isolate;\n  cursor: pointer;\n"])),(n=>{let{image:e}=n;return e})),y=n=>{let{images:e,onClick:t}=n;return e=Array.isArray(e)?e:[e],e.length>0&&(0,u.jsx)(f,{className:"item-images",children:e.map((n=>(0,u.jsx)(v,{image:n,className:"item-image",onClick:()=>t(n)},n)))})},A=r.memo(y);var b,k=t(9888),w=t(6178),C=t.n(w),z=t(6058),S=t(1439);const{mid_gray:Y}=k.y,L=p.Ay.div(b||(b=(0,c.A)(["\n  display: flex;\n  flex: 1;\n  padding-left: 20px;\n  margin: auto;\n\n  dl {\n    padding-top: 10px;\n    margin: 16px 0;\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n\n    dt {\n      padding-left: 15px;\n      font-size: 1.5rem;\n      font-weight: 650;\n      line-height: 29px;\n    }\n\n    dd {\n      padding-left: 15px;\n      font-size: 1.3rem;\n      line-height: 1.8rem;\n    }\n  }\n\n  dl dt svg {\n    margin-right: 8px;\n  }\n\n  dl + dl {\n    border-top: 1px solid #f8f9fa;\n  }\n\n  .button {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: 15px;\n    color: ",";\n    position: absolute;\n    right: 20px;\n    top: -40px;\n  }\n"])),Y),q=n=>{let{item:e}=n;const{t:t}=(0,x.Bd)(),{startDate:s,endDate:i,title:r,address:d,location:o,hostMain:l,hostSub:a,tel:c,pageLink:h,content:p,seq:m}=e,g=C()(s).format("YYYY\ub144 MM\uc6d4 DD\uc77c"),j=C()(i).format("YYYY\ub144 MM\uc6d4 DD\uc77c");return(0,u.jsxs)(L,{children:[(0,u.jsxs)("div",{className:"button",children:[(0,u.jsx)(S.A,{seq:m,type:"FESTIVAL"}),t("\ucc1c\ud558\uae30")]}),(0,u.jsxs)("div",{className:"description",children:[s&&i&&(0,u.jsxs)("dl",{children:[(0,u.jsxs)("dt",{children:[(0,u.jsx)(z.sLe,{}),t("\ud589\uc0ac\uae30\uac04 ")]}),(0,u.jsxs)("dd",{children:[g,"~",j]})]}),(0,u.jsxs)("dl",{children:[(0,u.jsxs)("dt",{children:[(0,u.jsx)(z.zAZ,{}),t("\ud589\uc0ac\uba85")]}),(0,u.jsx)("dd",{children:r})]}),d&&(0,u.jsxs)("dl",{children:[(0,u.jsxs)("dt",{children:[(0,u.jsx)(z.vmY,{}),t("\uc8fc\uc18c")]}),(0,u.jsx)("dd",{children:d})]}),o&&(0,u.jsxs)("dl",{children:[(0,u.jsxs)("dt",{children:[(0,u.jsx)(z.sqE,{}),t("\ud589\uc0ac\uc7a5\uc18c")]}),(0,u.jsx)("dd",{children:o})]}),l&&(0,u.jsxs)("dl",{children:[(0,u.jsxs)("dt",{children:[(0,u.jsx)(z.Bm,{}),t("\uc8fc\ucd5c\uae30\uad00")]}),(0,u.jsx)("dd",{children:l})]}),(0,u.jsxs)("dl",{children:[(0,u.jsxs)("dt",{children:[(0,u.jsx)(z.Bm,{}),t("\uc8fc\uad00\uae30\uad00")]}),(0,u.jsx)("dd",{children:a})]}),(0,u.jsxs)("dl",{children:[(0,u.jsxs)("dt",{children:[(0,u.jsx)(z.dZ1,{}),t("\ubb38\uc758\ucc98")]}),(0,u.jsx)("dd",{children:c})]}),(0,u.jsxs)("dl",{children:[(0,u.jsxs)("dt",{children:[(0,u.jsx)(z.v1b,{}),t("\ud648\ud398\uc774\uc9c0_\uc8fc\uc18c")]}),(0,u.jsx)("dd",{children:h})]}),(0,u.jsxs)("dl",{children:[(0,u.jsxs)("dt",{children:[(0,u.jsx)(z.E8b,{}),t("\ud589\uc0ac\ub0b4\uc6a9")]}),(0,u.jsx)("dd",{children:p})]})]})]})},B=r.memo(q);var D,_=t(1120),E=t(2647);const M=p.Ay.div(D||(D=(0,c.A)(["\n  display: flex;\n  position: relative;\n  padding: 48px 0;\n  margin-bottom: 20px;\n  border-bottom: solid 1px #e6e6eb;\n"]))),N=n=>{let{setPageTitle:e}=n;const{t:t}=(0,x.Bd)(),[s,i]=(0,r.useState)(null),[d,o]=(0,r.useState)(!1),[l,a]=(0,r.useState)({height:"600px",zoom:3}),{seq:c}=(0,h.g)(),{actions:{setLinkText:p,setLinkHref:f}}=(0,r.useContext)(E.Ay);(0,r.useEffect)((()=>{o(!0),(0,m.Vg)(c).then((n=>{e(n.title),p(t("\uc9c0\uc5ed\ubcc4_\ucd95\uc81c\uc815\ubcf4")),f("/recommend/festival"),i(n);const s={lat:n.latitude,lng:n.longitude};a((e=>n.latitude?{...e,center:s,marker:s}:{...e,address:n.address}))})),o(!1)}),[c,e]);const v=(0,r.useCallback)((n=>{console.log("\uc774\ubbf8\uc9c0 \uc8fc\uc18c",n)}),[]);return d||!s?(0,u.jsx)(g.A,{}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(M,{children:[s.photoUrl1&&(0,u.jsx)(A,{images:s.photoUrl1,onClick:v}),(0,u.jsx)(B,{item:s})]}),(0,u.jsx)("h1",{children:t("\uae38\ucc3e\uae30")}),(0,u.jsx)(j.A,{...l}),(0,u.jsx)(_.A,{})]})},Z=r.memo(N);var T=t(295);const F=()=>{const[n,e]=(0,r.useState)("");return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d.mg,{children:(0,u.jsx)("title",{children:n})}),(0,u.jsxs)(o.xG,{children:[(0,u.jsx)(T.A,{}),(0,u.jsx)(o.bQ,{children:(0,u.jsxs)(a.c7,{children:[(0,u.jsx)(a.g4,{children:(0,u.jsxs)("h1",{children:[(0,u.jsx)(l.yq6,{className:"icon"})," ",n]})}),(0,u.jsx)(Z,{setPageTitle:e})]})})]})]})},G=r.memo(F)}}]);
//# sourceMappingURL=5721.7f1f4945.chunk.js.map
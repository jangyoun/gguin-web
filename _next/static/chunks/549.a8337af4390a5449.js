(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[549],{5439:function(e,t,n){"use strict";n.d(t,{Z:function(){return S}});var i=n(4942),l=n(7462),a=n(1002),o=n(4184),r=n.n(o),c=n(7685),d=n(91),s=n(1413),x=n(7294),u=n(3129),p=n(2550),m=n(8423),f=n(2874),h=n(8410),v=function(e){return e?{left:e.offsetLeft,width:e.clientWidth}:null},g=function(e){return void 0!==e?"".concat(e,"px"):void 0};function b(e){var t=e.prefixCls,n=e.containerRef,i=e.value,l=e.getValueIndex,a=e.motionName,o=e.onMotionStart,d=e.onMotionEnd,u=x.useRef(null),m=x.useState(i),b=(0,c.Z)(m,2),y=b[0],j=b[1],D=function(e){var i,a=l(e);return null===(i=n.current)||void 0===i?void 0:i.querySelectorAll(".".concat(t,"-item"))[a]},Z=x.useState(null),C=(0,c.Z)(Z,2),_=C[0],w=C[1],S=x.useState(null),E=(0,c.Z)(S,2),N=E[0],k=E[1];(0,h.Z)(function(){if(y!==i){var e=D(y),t=D(i),n=v(e),l=v(t);j(i),w(n),k(l),e&&t?o():d()}},[i]);var I=function(){return{transform:"translateX(var(--thumb-start-left))",width:"var(--thumb-start-width)"}},P=function(){return{transform:"translateX(var(--thumb-active-left))",width:"var(--thumb-active-width)"}},M=function(){w(null),k(null),d()};return _&&N?x.createElement(f.Z,{visible:!0,motionName:a,motionAppear:!0,onAppearStart:I,onAppearActive:P,onAppearEnd:M},function(e,n){var i=e.className,l=e.style,a=(0,s.Z)((0,s.Z)({},l),{},{"--thumb-start-left":g(null==_?void 0:_.left),"--thumb-start-width":g(null==_?void 0:_.width),"--thumb-active-left":g(null==N?void 0:N.left),"--thumb-active-width":g(null==N?void 0:N.width)}),o={ref:(0,p.sQ)(u,n),style:a,className:r()("".concat(t,"-thumb"),i)};return x.createElement("div",(0,s.Z)({},o))}):null}var y=["prefixCls","direction","options","disabled","defaultValue","value","onChange","className","motionName"],j=function(e){var t=e.prefixCls,n=e.className,l=e.disabled,a=e.checked,o=e.label,c=e.title,d=e.value,s=e.onChange,u=function(e){!l&&s(e,d)};return x.createElement("label",{className:r()(n,(0,i.Z)({},"".concat(t,"-item-disabled"),l))},x.createElement("input",{className:"".concat(t,"-item-input"),type:"radio",disabled:l,checked:a,onChange:u}),x.createElement("div",{className:"".concat(t,"-item-label"),title:c},o))},D=x.forwardRef(function(e,t){var n,l,o=e.prefixCls,f=void 0===o?"rc-segmented":o,h=e.direction,v=e.options,g=e.disabled,D=e.defaultValue,Z=e.value,C=e.onChange,_=e.className,w=e.motionName,S=(0,d.Z)(e,y),E=x.useRef(null),N=x.useMemo(function(){return(0,p.sQ)(E,t)},[E,t]),k=x.useMemo(function(){var e;return v.map(function(e){if("object"===(0,a.Z)(e)&&null!==e){var t=function(e){if(void 0!==e.title)return e.title;if("object"!==(0,a.Z)(e.label)){var t;return null===(t=e.label)||void 0===t?void 0:t.toString()}}(e);return(0,s.Z)((0,s.Z)({},e),{},{title:t})}return{label:null==e?void 0:e.toString(),title:null==e?void 0:e.toString(),value:e}})},[v]),I=(0,u.Z)(null===(n=k[0])||void 0===n?void 0:n.value,{value:Z,defaultValue:D}),P=(0,c.Z)(I,2),M=P[0],V=P[1],z=x.useState(!1),F=(0,c.Z)(z,2),R=F[0],O=F[1],A=function(e,t){!g&&(V(t),null==C||C(t))},T=(0,m.Z)(S,["children"]);return x.createElement("div",(0,s.Z)((0,s.Z)({},T),{},{className:r()(f,(l={},(0,i.Z)(l,"".concat(f,"-rtl"),"rtl"===h),(0,i.Z)(l,"".concat(f,"-disabled"),g),l),void 0===_?"":_),ref:N}),x.createElement("div",{className:"".concat(f,"-group")},x.createElement(b,{prefixCls:f,value:M,containerRef:E,motionName:"".concat(f,"-").concat(void 0===w?"thumb-motion":w),getValueIndex:function(e){return k.findIndex(function(t){return t.value===e})},onMotionStart:function(){O(!0)},onMotionEnd:function(){O(!1)}}),k.map(function(e){return x.createElement(j,(0,s.Z)((0,s.Z)({key:e.value,prefixCls:f,className:r()(e.className,"".concat(f,"-item"),(0,i.Z)({},"".concat(f,"-item-selected"),e.value===M&&!R)),checked:e.value===M,onChange:A},e),{},{disabled:!!g||!!e.disabled}))})))});D.displayName="Segmented",D.defaultProps={options:[]};var Z,C=n(3124),_=n(7647),w=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,i=Object.getOwnPropertySymbols(e);l<i.length;l++)0>t.indexOf(i[l])&&Object.prototype.propertyIsEnumerable.call(e,i[l])&&(n[i[l]]=e[i[l]]);return n},S=x.forwardRef(function(e,t){var n,o=e.prefixCls,c=e.className,d=e.block,s=e.options,u=void 0===s?[]:s,p=e.size,m=w(e,["prefixCls","className","block","options","size"]),f=x.useContext(C.E_),h=f.getPrefixCls,v=f.direction,g=h("segmented",o),b=x.useContext(_.Z),y=(void 0===p?"middle":p)||b,j=x.useMemo(function(){return u.map(function(e){var t;if("object"===(0,a.Z)(e)&&(null==e?void 0:e.icon)){var n=e.icon,i=e.label,o=w(e,["icon","label"]);return(0,l.Z)((0,l.Z)({},o),{label:x.createElement(x.Fragment,null,x.createElement("span",{className:"".concat(g,"-item-icon")},n),i&&x.createElement("span",null,i))})}return e})},[u,g]);return x.createElement(D,(0,l.Z)({},m,{className:r()(c,(n={},(0,i.Z)(n,"".concat(g,"-block"),d),(0,i.Z)(n,"".concat(g,"-sm"),"small"===y),(0,i.Z)(n,"".concat(g,"-lg"),"large"===y),n)),options:j,ref:t,prefixCls:g,direction:v}))})},9454:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var i=n(5893),l=n(7294),a=n(2970),o=n(9462),r=n(1966),c=n.n(r),d=function(){return(0,l.useEffect)(function(){},[]),(0,i.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",overflow:"hidden"},children:[(0,i.jsx)(o.a1,{}),(0,i.jsx)("div",{style:{height:"100%",overflow:"auto"},children:(0,i.jsx)("div",{style:{maxHeight:600},children:(0,i.jsx)("div",{className:c().intro_img_pc})})}),(0,i.jsx)(o.r,{})]})},s=n(5439),x=n(9643),u=function(){return(0,l.useEffect)(function(){},[]),(0,i.jsxs)("div",{style:{backgroundColor:"#fff"},children:[(0,i.jsx)("div",{style:{height:83,zIndex:2,width:"100%"},children:(0,i.jsx)(o.nf,{})}),(0,i.jsx)("div",{style:{maxHeight:400},children:(0,i.jsx)("div",{className:c().intro_img_mo})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{display:"flex",margin:"30px 0px 4px 4px",fontSize:14,fontWeight:"bold"},children:"언어를 선택해주세요."}),(0,i.jsx)("div",{className:c().hide_scrollbar,style:{display:"flex",margin:"0px 0px 6px 4px",overflow:"auto"},children:(0,i.jsx)(s.Z,{options:["\uD83C\uDDF0\uD83C\uDDF7 한국","\uD83C\uDDEF\uD83C\uDDF5 일본","\uD83C\uDDE8\uD83C\uDDF3 중국","\uD83C\uDDF7\uD83C\uDDFA 러시아","\uD83C\uDDF9\uD83C\uDDED 태국","\uD83C\uDDF5\uD83C\uDDED 필리핀","\uD83C\uDDF0\uD83C\uDDED 캄보디아"],onChange:function(e){}})})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{display:"flex",margin:"30px 0px 4px 4px",fontSize:14,fontWeight:"bold"},children:"지역을 선택해주세요"}),(0,i.jsx)(x.ZP,{grid:{gutter:0,xs:2,sm:2,md:2,lg:2,xl:2,xxl:2},style:{backgroundColor:"transparent",margin:"0px 4px"},dataSource:[{code:0,name:"경기"},{code:0,name:"서울"},{code:0,name:"인천"},{code:0,name:"충청(대전/세종)"},{code:0,name:"경상(부산/대구/울산)"},{code:0,name:"전라(광주/전주)"},{code:0,name:"강원"},{code:0,name:"제주"},],renderItem:function(e,t){return(0,i.jsx)(x.ZP.Item,{style:{width:"100%",padding:0,margin:0},children:(0,i.jsx)("div",{style:{margin:2,borderRadius:"4px",border:"1px solid #ddd",backgroundColor:"#fff"},children:(0,i.jsx)("div",{style:{fontSize:14,textAlign:"center",margin:4},children:e.name})})},t)}})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{display:"flex",margin:"30px 0px 4px 4px",fontSize:14,fontWeight:"bold"},children:"전국 :: 프리미엄 구인"}),(0,i.jsx)(x.ZP,{style:{backgroundColor:"transparent",margin:"0px 4px"},split:!0,dataSource:[{id:0,company:"금곡키트",local:"경기 평택시",cate:"생산\xb7건설",title:"경기",desc:"급구급구/ 남여모집/ 자동차부품/조립/사출/검사/자재 월350만원"},{id:0,company:"송탄공단",local:"경기 오산시",cate:"조립\xb7포장",title:"서울",desc:"일급 14만 5천원/주차 별도/주간/장기 일당/남여"},{id:0,company:"시화MTV",local:"경기 수원시",cate:"생산\xb7건설",title:"인천",desc:"자동차부품 사출,자동조립기 오퍼 검사2교대 300만원이상 여자분환영"},],renderItem:function(e,t){return(0,i.jsxs)(x.ZP.Item,{style:{width:"100%",padding:0,margin:0,display:"flex",flexDirection:"column"},children:[(0,i.jsx)("div",{style:{height:4}}),(0,i.jsxs)("div",{style:{width:"100%"},children:[(0,i.jsx)("span",{style:{margin:"0px 4px 0px 4px",padding:"0px 4px",borderRadius:"4px",border:"1px solid #ddd",backgroundColor:"#87d068",color:"#fff"},children:e.cate}),(0,i.jsxs)("span",{children:[e.company," \xb7 ",e.local]})]}),(0,i.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"row"},children:[(0,i.jsx)("div",{style:{width:100,height:50,backgroundColor:"#ddd",margin:"0px 4px 0px 4px"}}),(0,i.jsx)("div",{style:{flex:1,margin:"0px 4px 0px 4px"},children:e.desc})]}),(0,i.jsx)("div",{style:{height:4}})]},t)}})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{display:"flex",margin:"30px 0px 4px 4px",fontSize:14,fontWeight:"bold"},children:"전국 :: TOP 구인"}),(0,i.jsx)(x.ZP,{style:{backgroundColor:"transparent",margin:"0px 4px"},split:!0,dataSource:[{id:0,company:"금곡키트",local:"경기 평택시",cate:"생산\xb7건설",title:"경기",desc:"급구급구/ 남여모집/ 자동차부품/조립/사출/검사/자재 월350만원"},{id:0,company:"송탄공단",local:"경기 오산시",cate:"조립\xb7포장",title:"서울",desc:"일급 14만 5천원/주차 별도/주간/장기 일당/남여"},{id:0,company:"시화MTV",local:"경기 수원시",cate:"생산\xb7건설",title:"인천",desc:"자동차부품 사출,자동조립기 오퍼 검사2교대 300만원이상 여자분환영"},],renderItem:function(e,t){return(0,i.jsxs)(x.ZP.Item,{style:{width:"100%",padding:0,margin:0,display:"flex",flexDirection:"column"},children:[(0,i.jsx)("div",{style:{height:4}}),(0,i.jsxs)("div",{style:{width:"100%"},children:[(0,i.jsx)("span",{style:{margin:"0px 4px 0px 4px",padding:"0px 4px",borderRadius:"4px",border:"1px solid #ddd",backgroundColor:"#ccc",color:"#fff"},children:e.cate}),(0,i.jsxs)("span",{children:[e.company," \xb7 ",e.local]})]}),(0,i.jsxs)("div",{style:{padding:"0px 4px 0px 4px",width:"100%",display:"flex",flexDirection:"row",overflow:"hidden",whiteSpace:"nowrap"},children:[e.desc," "]}),(0,i.jsx)("div",{style:{height:4}})]},t)}})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{display:"flex",margin:"30px 0px 4px 4px",fontSize:14,fontWeight:"bold"},children:"전국 :: 무료 구인"}),(0,i.jsx)(x.ZP,{style:{backgroundColor:"transparent",margin:"0px 4px"},split:!0,dataSource:[{id:0,company:"금곡키트",local:"경기 평택시",cate:"생산\xb7건설",title:"경기",desc:"급구급구/ 남여모집/ 자동차부품/조립/사출/검사/자재 월350만원"},{id:0,company:"송탄공단",local:"경기 오산시",cate:"조립\xb7포장",title:"서울",desc:"일급 14만 5천원/주차 별도/주간/장기 일당/남여"},{id:0,company:"시화MTV",local:"경기 수원시",cate:"생산\xb7건설",title:"인천",desc:"자동차부품 사출,자동조립기 오퍼 검사2교대 300만원이상 여자분환영"},{id:0,company:"금곡키트",local:"경기 평택시",cate:"생산\xb7건설",title:"경기",desc:"급구급구/ 남여모집/ 자동차부품/조립/사출/검사/자재 월350만원"},{id:0,company:"송탄공단",local:"경기 오산시",cate:"조립\xb7포장",title:"서울",desc:"일급 14만 5천원/주차 별도/주간/장기 일당/남여"},{id:0,company:"시화MTV",local:"경기 수원시",cate:"생산\xb7건설",title:"인천",desc:"자동차부품 사출,자동조립기 오퍼 검사2교대 300만원이상 여자분환영"},{id:0,company:"금곡키트",local:"경기 평택시",cate:"생산\xb7건설",title:"경기",desc:"급구급구/ 남여모집/ 자동차부품/조립/사출/검사/자재 월350만원"},{id:0,company:"송탄공단",local:"경기 오산시",cate:"조립\xb7포장",title:"서울",desc:"일급 14만 5천원/주차 별도/주간/장기 일당/남여"},{id:0,company:"시화MTV",local:"경기 수원시",cate:"생산\xb7건설",title:"인천",desc:"자동차부품 사출,자동조립기 오퍼 검사2교대 300만원이상 여자분환영"},{id:0,company:"금곡키트",local:"경기 평택시",cate:"생산\xb7건설",title:"경기",desc:"급구급구/ 남여모집/ 자동차부품/조립/사출/검사/자재 월350만원"},{id:0,company:"송탄공단",local:"경기 오산시",cate:"조립\xb7포장",title:"서울",desc:"일급 14만 5천원/주차 별도/주간/장기 일당/남여"},{id:0,company:"시화MTV",local:"경기 수원시",cate:"생산\xb7건설",title:"인천",desc:"자동차부품 사출,자동조립기 오퍼 검사2교대 300만원이상 여자분환영"},{id:0,company:"시화MTV",local:"경기 수원시",cate:"생산\xb7건설",title:"인천",desc:"자동차부품 사출,자동조립기 오퍼 검사2교대 300만원이상 여자분환영"},],renderItem:function(e,t){return(0,i.jsxs)(x.ZP.Item,{style:{width:"100%",padding:0,margin:0,display:"flex",flexDirection:"column"},children:[(0,i.jsx)("div",{style:{height:4}}),(0,i.jsxs)("div",{style:{width:"100%",whiteSpace:"nowrap",overflow:"hidden"},children:[(0,i.jsx)("span",{style:{margin:"0px 4px 0px 4px",padding:"0px 4px",borderRadius:"4px",border:"1px solid #ddd",backgroundColor:"#ccc",color:"#fff"},children:e.cate}),(0,i.jsxs)("span",{children:[e.company," \xb7 ",e.desc]})]}),(0,i.jsx)("div",{style:{height:4}})]},t)}})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{display:"flex",margin:"30px 0px 4px 4px",fontSize:14,fontWeight:"bold"},children:"G구인을 소개합니다."}),(0,i.jsx)(x.ZP,{grid:{gutter:0,xs:4,sm:4,md:4,lg:4,xl:4,xxl:4},style:{backgroundColor:"transparent",margin:"0px 4px"},dataSource:[{code:0,name:"소개"},{code:0,name:"질문\xb7답변"},{code:0,name:"광고문의"},{code:0,name:"이용\xb7약관"},],renderItem:function(e,t){return(0,i.jsx)(x.ZP.Item,{style:{width:"100%",padding:0,margin:0},children:(0,i.jsx)("div",{style:{margin:2,borderRadius:"4px",border:"1px solid #ddd",backgroundColor:"#fff"},children:(0,i.jsx)("div",{style:{fontSize:14,textAlign:"center",margin:4},children:e.name})})},t)}})]}),(0,i.jsx)("div",{style:{height:40}})]})},p=function(){return a.Zr.isDesktop()?(0,i.jsx)(d,{}):(0,i.jsx)(u,{})}},1966:function(e){e.exports={intro_img_mo:"home_intro_img_mo__DsLWy",intro_img_pc:"home_intro_img_pc__VzZSV",icon_child:"home_icon_child__0jE3z",icon_parent:"home_icon_parent__7GjNI",hide_scrollbar:"home_hide_scrollbar___IGhM"}}}]);
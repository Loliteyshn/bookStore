(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9335],{93269:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return e(18936)}])},44273:function(t,n,e){"use strict";var s=e(85893),a=(e(67294),e(38803));n.Z=function(){return(0,s.jsx)(a.Z,{title:"Contact Us - Coddy",description:"Coddy is constantly evolving and looking for every possible feedback, Contact us for any matter. Get started practicing your new skills right away. For More Information Contact Us Now!"})}},83580:function(t,n,e){"use strict";var s=e(85893),a=e(41664),i=(e(67294),e(6634)),o=e.n(i);n.Z=function(t){var n=t.href,e=t.onClick,i=t.type,r=t.size,l=t.disabled,c=t.label,u=t.text,h=t.hide,d=t.path,m=t.newTab,x=t.alt,p=void 0===x?"":x,f=t.className,g=o().main;"home"===i&&(g=o().home);var j=o().normal;"small"===r&&(j=o().small),u&&(j===o().normal?j=o().normalWithText:j===o().small&&(j=o().smallWithText));var _=24;"small"===r&&(_=20);return"home"===i&&"white",h?null:n?(0,s.jsx)(a.default,{href:n,children:(0,s.jsxs)("a",{className:[o().base,g,j,l?o().disabled:null,f].join(" "),target:m?"_blank":"_self",rel:m?"noreferrer":null,children:[(0,s.jsx)("img",{src:d,alt:p,width:_,height:_}),u?(0,s.jsx)("p",{className:o().text,children:u}):null,c?(0,s.jsx)("span",{className:o().tooltip,children:c}):null]})}):(0,s.jsxs)("div",{className:[o().base,g,j,l?o().disabled:null,f].join(" "),onClick:l?null:e,children:[(0,s.jsx)("img",{src:d,alt:p,width:_,height:_}),u?(0,s.jsx)("p",{className:o().text,children:u}):null,c?(0,s.jsx)("span",{className:o().tooltip,children:c}):null]})}},18936:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return B}});var s=e(85893),a=e(67294),i=e(54973),o=e.n(i),r=e(44273),l=e(12458),c=e(8596),u=e(6426),h=e.n(u),d=e(52513),m=e(41664),x=e(21432),p=e(3796),f=e(60831),g=e(24978),j=e(40782),_=e(25617),w=e(45679),b=function(){var t=(0,_.I0)(),n=(0,f.Z)().width,e=(0,a.useState)(""),i=e[0],o=e[1],r=(0,a.useState)(""),c=r[0],u=r[1],b=(0,a.useState)(""),y=b[0],v=b[1],k=(0,a.useState)(!1),Z=k[0],C=k[1],N=(0,a.useState)(!1),I=N[0],W=N[1],T=(0,a.useState)(!1),B=T[0],S=T[1],F=(0,_.v9)((function(t){return t.user.data})),P=n<600,E=n<800;return(0,a.useEffect)((function(){var t,n;u(null!==(t=null===F||void 0===F?void 0:F.email)&&void 0!==t?t:""),o(null!==(n=null===F||void 0===F?void 0:F.displayName)&&void 0!==n?n:"")}),[F]),(0,s.jsxs)(l.Z,{padding:[P?16:32],cardSecondary:!0,spacing:16,alignItems:"normal",className:h().container,children:[(0,s.jsx)(p.X,{placeholder:"Full Name",path:"/icons/full-name.svg",value:i,maxLength:100,error:!0,onChange:o}),(0,s.jsx)(p.X,{placeholder:"Email Address",path:"/icons/email.svg",value:c,maxLength:100,onChange:u}),(0,s.jsx)(p.X,{placeholder:"Message",multiline:!0,fullWidth:!0,maxLength:2e3,className:h().message,value:y,onChange:v}),(0,s.jsx)(x.ZP,{text:"By submitting this form, I acknowledge:"}),(0,s.jsxs)(l.Z,{row:!0,alignItems:"flex-start",justifyContent:"flex-start",spacing:4,children:[(0,s.jsx)("input",{checked:Z,type:"checkbox",style:{width:"16px",height:"16px"},onChange:function(t){return C(t.target.checked)}}),(0,s.jsx)(x.ZP,{align:"left",text:"For assistance with specific challenges, use the support tab within the challenge."})]}),(0,s.jsxs)(l.Z,{row:!0,alignItems:"flex-start",justifyContent:"flex-start",spacing:4,children:[(0,s.jsx)("input",{checked:B,type:"checkbox",style:{width:"16px",height:"16px"},onChange:function(t){return S(t.target.checked)}}),(0,s.jsx)(x.ZP,{align:"left",text:(0,s.jsxs)(s.Fragment,{children:["To become a creator, head to the ",(0,s.jsx)(m.default,{href:"/creator",children:(0,s.jsx)("a",{children:(0,s.jsx)("u",{children:"creator page."})})})]})})]}),(0,s.jsxs)(l.Z,{row:!0,alignItems:"flex-start",justifyContent:"flex-start",spacing:4,children:[(0,s.jsx)("input",{checked:I,type:"checkbox",style:{width:"16px",height:"16px"},onChange:function(t){return W(t.target.checked)}}),(0,s.jsx)(x.ZP,{align:"left",text:(0,s.jsxs)(s.Fragment,{children:["Subscription details and cancellation are in ",(0,s.jsx)("b",{children:"billing settings"})," on your ",(0,s.jsx)(m.default,{href:"/profile",children:(0,s.jsx)("a",{children:(0,s.jsx)("u",{children:"profile page."})})})]})})]}),(0,s.jsxs)(l.Z,{row:!E,justifyContent:"space-between",alignItems:"normal",fullWidth:!0,padding:[0,P?0:16],spacing:E?16:0,children:[(0,s.jsx)("div",{}),(0,s.jsx)(d.ZP,{classNameContainer:I&&Z&&B?null:h().disabledButton,text:"SEND MESSAGE",type:d.AB,onClick:I&&Z&&B?function(){(0,g.oH)(c)?y.length<=0?j.Am.error("Please enter your message!"):(t((0,w.b8)({email:c,name:i,message:y})),u(""),v(""),o("")):j.Am.error("Please enter valid Email address")}:null,disabled:!I||!Z||!B})]})]})},y=e(72825),v=e.n(y),k=e(73185),Z=e(83580),C=function(t){var n=t.email,e=t.title;return(0,s.jsxs)(l.Z,{alignItems:"flex-start",spacing:8,children:[(0,s.jsx)(x.ZP,{text:e,colorType:"main"}),(0,s.jsx)(x.rU,{text:n,type:"title",bold:!0,url:"mailto:".concat(n),newTab:!0,colorType:"black"})]})},N=function(){return(0,s.jsxs)(l.Z,{alignItems:"flex-start",spacing:16,children:[(0,s.jsx)(x.ZP,{text:"Contact Us",type:"hugeTitle",h1:!0}),(0,s.jsx)(x.ZP,{className:v().contactDescription,text:(0,s.jsxs)(s.Fragment,{children:["Coddy is a ",(0,s.jsx)("strong",{children:"code learning platform"})," we are constantly evolving and looking for every possible feedback, contact us for any matter!"]}),type:"bigNormal"}),(0,s.jsx)(k.Z,{colorType:"strong"}),(0,s.jsxs)(l.Z,{spacing:16,alignItems:"flex-start",children:[(0,s.jsx)(C,{title:"For Support",email:"support@coddy.tech"}),(0,s.jsx)(C,{title:"For Creators",email:"creator@coddy.tech"}),(0,s.jsx)(C,{title:"Anything else",email:"info@coddy.tech"}),(0,s.jsxs)(l.Z,{alignItems:"flex-start",spacing:8,children:[(0,s.jsx)(x.ZP,{text:"Follow Us",colorType:"main"}),(0,s.jsxs)(l.Z,{row:!0,spacing:4,children:[(0,s.jsx)(Z.Z,{path:"/icons/instagram.svg",href:"https://www.instagram.com/coddy.tech/",newTab:!0}),(0,s.jsx)(Z.Z,{path:"/icons/facebook.svg",href:"https://www.facebook.com/Coddy-112079361137873",newTab:!0}),(0,s.jsx)(Z.Z,{path:"/icons/linkedin.svg",href:"https://www.linkedin.com/company/coddy-tech",newTab:!0}),(0,s.jsx)(Z.Z,{path:"/icons/twitter.svg",href:"https://twitter.com/coddy_tech",newTab:!0}),(0,s.jsx)(Z.Z,{path:"/icons/tiktok.svg",href:"https://www.tiktok.com/@coddy.tech",newTab:!0})]})]})]})]})},I=e(87691),W=e.n(I),T=function(t){var n=t.className;return(0,s.jsx)("div",{className:[W().container,n].join(" ")})},B=function(){return(0,s.jsxs)(c.Z,{elevateOffset:-1,children:[(0,s.jsx)(r.Z,{}),(0,s.jsxs)(l.Z,{fullWidth:!0,className:o().container,style:{position:"relative",minHeight:"calc(100vh - 64px)"},children:[(0,s.jsx)(T,{className:o().background}),(0,s.jsxs)(l.Z,{className:o().innerContainer,justifyContent:"space-between",padding:[80,0],children:[(0,s.jsx)(N,{}),(0,s.jsx)("div",{className:o().spacing}),(0,s.jsx)(b,{})]})]})]})}},24978:function(t,n,e){"use strict";e.d(n,{oH:function(){return s},ZX:function(){return a},Ol:function(){return i},Yp:function(){return l},rZ:function(){return r},_F:function(){return c},qj:function(){return u},JU:function(){return d},HS:function(){return h},rh:function(){return m},vU:function(){return o}});var s=function(t){return String(t).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)},a=function(t){return""!==t&&t.length>=6},i=function(t){return/^[a-zA-Z0-9\s]+$/.test(t)&&t.length>=3},o=function(t){return t.length<300},r=function(t){return null==t||0===t.length||t.startsWith("https://www.linkedin.com")||t.startsWith("https://linkedin.com")},l=function(t){return null==t||0===t.length||t.startsWith("https://github.com")||t.startsWith("https://www.github.com")},c=function(t){return null==t||0===t.length||t.startsWith("https://facebook.com")||t.startsWith("https://www.facebook.com")},u=function(t){return null==t||0===t.length||t.startsWith("https://instagram.com")||t.startsWith("https://www.instagram.com")},h=function(t){return null==t||0===t.length||t.startsWith("https://")},d=function(t){return null==t||0===t.length||t.startsWith("https://twitter.com")||t.startsWith("https://www.twitter.com")},m=function(t){return null==t||0===t.length||t.startsWith("https://youtube.com")||t.startsWith("https://www.youtube.com")}},6634:function(t){t.exports={base:"IconButton_base__CMFSN",tooltip:"IconButton_tooltip__owLK6",disabled:"IconButton_disabled__1okM0",main:"IconButton_main__5m687",home:"IconButton_home__gQae9",normal:"IconButton_normal__JbBvI",small:"IconButton_small__W_Xc9",normalWithText:"IconButton_normalWithText__2mxLz",smallWithText:"IconButton_smallWithText__Xp5tU",text:"IconButton_text__vMIuO"}},87691:function(t){t.exports={container:"Background_container__QfKbZ"}},6426:function(t){t.exports={message:"Form_message__Ew8Ep",container:"Form_container__UKJqY",disabledButton:"Form_disabledButton__slPSS"}},72825:function(t){t.exports={contactDescription:"Links_contactDescription__LIbTB"}},54973:function(t){t.exports={container:"Contact_container__xUjZL",innerContainer:"Contact_innerContainer__1euRO",spacing:"Contact_spacing__8NUNN",background:"Contact_background__NZHxs"}}},function(t){t.O(0,[7888,4167,5883,6298,4057,9774,2888,179],(function(){return n=93269,t(t.s=n);var n}));var n=t.O();_N_E=n}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6335],{83580:function(e,n,t){"use strict";var s=t(85893),l=t(41664),i=(t(67294),t(6634)),a=t.n(i);n.Z=function(e){var n=e.href,t=e.onClick,i=e.type,o=e.size,r=e.disabled,c=e.label,u=e.text,d=e.hide,h=e.path,g=e.newTab,x=e.alt,f=void 0===x?"":x,m=e.className,p=a().main;"home"===i&&(p=a().home);var v=a().normal;"small"===o&&(v=a().small),u&&(v===a().normal?v=a().normalWithText:v===a().small&&(v=a().smallWithText));var j=24;"small"===o&&(j=20);return"home"===i&&"white",d?null:n?(0,s.jsx)(l.default,{href:n,children:(0,s.jsxs)("a",{className:[a().base,p,v,r?a().disabled:null,m].join(" "),target:g?"_blank":"_self",rel:g?"noreferrer":null,children:[(0,s.jsx)("img",{src:h,alt:f,width:j,height:j}),u?(0,s.jsx)("p",{className:a().text,children:u}):null,c?(0,s.jsx)("span",{className:a().tooltip,children:c}):null]})}):(0,s.jsxs)("div",{className:[a().base,p,v,r?a().disabled:null,m].join(" "),onClick:r?null:t,children:[(0,s.jsx)("img",{src:h,alt:f,width:j,height:j}),u?(0,s.jsx)("p",{className:a().text,children:u}):null,c?(0,s.jsx)("span",{className:a().tooltip,children:c}):null]})}},2148:function(e,n,t){"use strict";t.d(n,{xE:function(){return i},Rp:function(){return a},ZP:function(){return o}});var s=t(83580),l=t(85893),i=(t(67294),function(e){var n=e.size,t=void 0===n?"normal":n,s=e.onClick,i=e.hide;return(0,l.jsx)(o,{path:"/icons/left.svg",size:t,label:"Back",onClick:s,hide:i})}),a=function(e){var n=e.size,t=void 0===n?"normal":n,s=e.onClick,i=e.hide,a=e.isPlus;return(0,l.jsx)(o,{path:a?"/icons/plus.svg":"/icons/minus.svg",size:t,onClick:s,hide:i})},o=s.Z},66335:function(e,n,t){"use strict";t.d(n,{J:function(){return G},Z:function(){return W}});var s=t(85893),l=t(67294),i=t(13432),a=t.n(i),o=t(12458),r=t(45679),c=t(25617),u=t(4040),d=t(21432),h=t(34682),g=t(52513),x=t(74040),f=t(11163),m=t(2148),p=t(59564),v=t(57919);function j(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},s=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),s.forEach((function(n){j(e,n,t[n])}))}return e}var y=function(e){var n=e.week,t=e.year,i=(0,l.useState)(null),r=i[0],u=i[1],h=(0,l.useState)(!1),g=h[0],f=h[1],j=(0,c.v9)((function(e){return e.user.data.uid}));(0,l.useEffect)((function(){g&&v.Z.getMotivationalQuote(n,t).then((function(e){var n,t,s;u({quote:e.quote,liked:void 0!==(null!==(n=null===e||void 0===e?void 0:e.likes)&&void 0!==n?n:{})[j],likesNum:(null!==(t=null===e||void 0===e?void 0:e.startLikes)&&void 0!==t?t:0)+Object.keys(null!==(s=null===e||void 0===e?void 0:e.likes)&&void 0!==s?s:{}).length})}))}),[n,t,g,j]);var y,C;return(0,s.jsxs)(o.Z,{className:a().motivationalContainer,children:[(0,s.jsxs)(o.Z,{fullWidth:!0,row:!0,justifyContent:"space-between",className:a().motivationalTopContainer,onClick:function(){return f(!0)},children:[(0,s.jsxs)(o.Z,{alignItems:"flex-start",children:[(0,s.jsx)(d.ZP,{text:"Motivational Quote",type:"subTitle"}),(0,s.jsx)(d.ZP,{text:"Week ".concat(n,", ").concat(t),type:"verySmall",colorType:"secondary"})]}),(0,s.jsx)(m.ZP,{path:"/icons/".concat(g?"up":"down",".svg"),onClick:function(e){e.stopPropagation(),f((function(e){return!e}))}})]}),(0,s.jsxs)(o.Z,{alignItems:"flex-start",fullWidth:!0,className:[a().motivationalInnerContainer,g?a().show:null].join(" "),children:[null===r?(0,s.jsx)(x.BeatLoader,{color:"#007bcc"}):(0,s.jsx)(d.ZP,{text:(0,s.jsx)("i",{children:"\u201c".concat(null!==(y=null===r||void 0===r?void 0:r.quote)&&void 0!==y?y:"","\u201d")})}),(0,s.jsxs)(o.Z,{row:!0,justifyContent:"space-between",alignItems:"flex-end",fullWidth:!0,children:[(0,s.jsxs)(o.Z,{row:!0,spacing:4,children:[(0,s.jsx)("img",{src:"/icons/ai-main.svg",width:20,height:20,alt:""}),(0,s.jsx)(d.ZP,{text:"Coddy's AI Assistant",type:"small",colorType:"main"})]}),(0,s.jsxs)(o.Z,{row:!0,children:[(0,s.jsx)(d.ZP,{text:null!==(C=null===r||void 0===r?void 0:r.likesNum)&&void 0!==C?C:0,type:"verySmall"}),(0,s.jsx)(m.ZP,{disabled:null===r,path:"/icons/heart".concat((null===r||void 0===r?void 0:r.liked)?"-filled":"",".svg"),size:"small",label:"Like",onClick:function(){r.liked||(p.Z.likeMotivationalQuote(n,t),u((function(e){return _({},e,{liked:!0,likesNum:e.likesNum+1})})))}})]})]})]})]})},C=function(){return(0,s.jsx)("img",{src:"/icons/stars-main.svg",width:12,height:12,alt:"personalized"})},k=function(e){var n=e.type,t=e.target,l=e.current,i=e.chapterTitle,r=e.courseTitle,c=e.courseId,u=(0,f.useRouter)(),g=function(){u.push("/challenges")},x=function(){u.push("/course/"+c)},m="",p=!1;switch(n){case"profile_update":p=!0,m=(0,s.jsxs)(s.Fragment,{children:["Edit ",(0,s.jsx)("span",{onClick:function(){u.push("/profile")},className:a().link,children:"your profile"})," ",(0,s.jsx)(C,{})]});break;case"visit_store":p=!0,m=(0,s.jsxs)(s.Fragment,{children:["Visit ",(0,s.jsx)("span",{onClick:function(){u.push("/store")},className:a().link,children:"Coddy Store"})," ",(0,s.jsx)(C,{})]});break;case"lesson":m="Complete ".concat(t," lessons");break;case"first_try_challenge":m=1===t?"Solve one challenge on the first try":"Solve ".concat(t," challenges on the first try");break;case"daily_challenge":m=1===t?(0,s.jsxs)(s.Fragment,{children:["Solve one ",(0,s.jsx)("span",{onClick:g,className:a().link,children:"daily challenge"})]}):(0,s.jsxs)(s.Fragment,{children:["Solve ",t," ",(0,s.jsx)("span",{onClick:g,className:a().link,children:"daily challenges"})]});break;case"chapter":p=!0,m=(0,s.jsxs)("span",{children:["Complete ",(0,s.jsx)("b",{children:i})," chapter on ",(0,s.jsx)("span",{className:a().link,onClick:x,children:r})," "]});break;case"course":p=!0,m=(0,s.jsxs)("span",{children:["Complete ",(0,s.jsx)("b",{children:(0,s.jsx)("span",{className:a().link,onClick:x,children:r})})]})}return(0,s.jsxs)(o.Z,{fullWidth:!0,alignItems:"flex-start",spacing:4,children:[(0,s.jsx)(o.Z,{fullWidth:!0,alignItems:"flex-start",children:(0,s.jsx)(d.ZP,{text:m,type:"normal"})}),(0,s.jsx)(h.Z,{maxProgress:t,progress:Math.min(l,t)}),(0,s.jsx)(o.Z,{fullWidth:!0,alignItems:"flex-end",children:(0,s.jsx)(d.ZP,{text:p?l>=t?"Done":"Not done":"".concat(l,"/").concat(t),type:"verySmall",colorType:"secondary"})})]})},b=function(e){var n=e.isSetup,t=e.inLesson,l=e.handleChooseIntensity,i=e.setIsSetup,r=(0,c.v9)((function(e){return e.user.data.goalsIntensity})),u=(0,c.v9)((function(e){return e.user.isLogged})),h=(0,c.v9)((function(e){return e.user.currentLearningGoals}));return n?(0,s.jsxs)(o.Z,{alignItems:"flex-start",justifyContent:"space-between",className:[a().innerContainer,t?a().inLesson:null].join(" "),spacing:16,children:[(0,s.jsxs)(o.Z,{spacing:8,alignItems:"flex-start",children:[(0,s.jsx)(d.ZP,{text:"What's your preferred intensity level for your weekly goals on Coddy?",type:"bigNormal"}),null]}),(0,s.jsxs)(o.Z,{row:!0,className:a().buttonsContainer,justifyContent:"flex-start",children:[(0,s.jsx)(g.ZP,{text:(0,s.jsxs)(s.Fragment,{children:["\ud83d\udfe2 Low ",(0,s.jsx)("span",{style:{fontSize:"11px",color:"rgba(0, 0, 0, 0.87)"},children:"(~5 Minutes a day)"})]}),type:g.ej,onClick:function(){return l(1)},classNameContainer:1===r?a().selectedButton:null}),(0,s.jsx)(g.ZP,{text:(0,s.jsxs)(s.Fragment,{children:["\ud83d\udfe1 Moderate ",(0,s.jsx)("span",{style:{fontSize:"11px",color:"rgba(0, 0, 0, 0.87)"},children:"(~15 Minutes a day)"})]}),type:g.ej,onClick:function(){return l(2)},classNameContainer:2===r?a().selectedButton:null}),(0,s.jsx)(g.ZP,{text:(0,s.jsxs)(s.Fragment,{children:["\ud83d\udfe0 High ",(0,s.jsx)("span",{style:{fontSize:"11px",color:"rgba(0, 0, 0, 0.87)"},children:"(~30 Minutes a day)"})]}),type:g.ej,onClick:function(){return l(3)},classNameContainer:3===r?a().selectedButton:null}),(0,s.jsx)(g.ZP,{text:(0,s.jsxs)(s.Fragment,{children:["\ud83d\udd34 Very High ",(0,s.jsx)("span",{style:{fontSize:"11px",color:"rgba(0, 0, 0, 0.87)"},children:"(~60 Minutes a day)"})]}),type:g.ej,onClick:function(){return l(4)},classNameContainer:4===r?a().selectedButton:null})]}),void 0===r?(0,s.jsx)(d.ZP,{text:"You can change this preferences at any time.",type:"small",colorType:"secondary"}):(0,s.jsx)(d.rU,{text:"\u2718 Remove weekly goals",type:"small",onClick:function(){return l(0)}})]}):void 0===r&&u?(0,s.jsxs)(o.Z,{alignItems:"flex-start",justifyContent:"space-between",className:[a().innerContainer,t?a().inLesson:null].join(" "),children:[(0,s.jsx)(d.ZP,{text:"Set goals to stay on track and get rewards!",colorType:"secondary"}),(0,s.jsx)(g.ZP,{classNameContainer:a().createButton,text:"CREATE",type:g.ej,onClick:function(){return i(!0)}})]}):void 0===h?(0,s.jsx)(o.Z,{fullWidth:!0,className:[a().innerContainer,t?a().inLesson:null].join(" "),children:(0,s.jsx)(x.BeatLoader,{color:"#007bcc"})}):(0,s.jsxs)(o.Z,{fullWidth:!0,className:[a().innerContainer,t?a().inLesson:null].join(" "),children:[(0,s.jsxs)(o.Z,{className:[a().goalsContainer,t?a().inLesson:null].join(" "),children:[void 0===h.goals.lesson?null:(0,s.jsx)(k,_({},h.goals.lesson,{type:"lesson"})),void 0===h.goals.first_try_challenge?null:(0,s.jsx)(k,_({},h.goals.first_try_challenge,{type:"first_try_challenge"})),void 0===h.goals.daily_challenge?null:(0,s.jsx)(k,_({},h.goals.daily_challenge,{type:"daily_challenge"})),Object.keys(h.goals).filter((function(e){return e.startsWith("chapter")})).sort().map((function(e){return(0,s.jsx)(k,_({},h.goals[e],{type:"chapter"}),e)})),Object.keys(h.goals).filter((function(e){return e.startsWith("course")})).sort().map((function(e){return(0,s.jsx)(k,_({},h.goals[e],{type:"course"}),e)})),void 0===h.goals.visit_store?null:(0,s.jsx)(k,_({},h.goals.visit_store,{type:"visit_store"})),void 0===h.goals.profile_update?null:(0,s.jsx)(k,_({},h.goals.profile_update,{type:"profile_update"}))]}),t?(0,s.jsx)(y,{week:h.week,year:h.year}):null]})},w=t(4231),Z=function(e){var n=e.isSetup,t=e.setIsSetup,l=e.inLesson,i=(0,c.I0)(),u=(0,c.v9)((function(e){return e.user.data.goalsIntensity})),h=(0,c.v9)((function(e){return e.user.currentLearningGoals})),g=(0,c.v9)((function(e){return e.user.getGoalsRewardStatus})),f="",p=0;switch(null===h||void 0===h?void 0:h.intensity){case 1:f=(0,s.jsx)("span",{title:"Low Intensity",children:"\ud83d\udfe2"}),p=5;break;case 2:f=(0,s.jsx)("span",{title:"Moderate Intensity",children:"\ud83d\udfe1"}),p=10;break;case 3:f=(0,s.jsx)("span",{title:"High Intensity",children:"\ud83d\udfe0"}),p=20;break;case 4:f=(0,s.jsx)("span",{title:"Very High Intensity",children:"\ud83d\udd34"}),p=30}var v,j,_,y=Object.values(null!==(v=null===h||void 0===h?void 0:h.goals)&&void 0!==v?v:{}).every((function(e){return e.current>=e.target}));return(0,s.jsxs)(o.Z,{row:!0,spacing:8,fullWidth:!0,children:[(0,s.jsx)("img",{src:"/icons/goal.svg",alt:"goal",width:32,height:32}),(0,s.jsxs)(o.Z,{className:a().titleContainer,alignItems:"flex-start",children:[(0,s.jsx)(d.ZP,{text:"Weekly Goals",type:"title",bold:!0}),h?(0,s.jsxs)(o.Z,{className:a().titleInfoContainer,row:!0,alignItems:"baseline",children:[(0,s.jsx)(d.ZP,{text:f,type:"verySmall"}),(0,s.jsx)(d.ZP,{text:"Week ".concat(h.week),type:"verySmall"})]}):null]}),void 0===u?(0,s.jsx)("div",{style:{height:"40px"}}):(0,s.jsxs)(o.Z,{row:!0,children:[n?null:g===w.Z.Loading?(0,s.jsx)(o.Z,{style:{width:"40px",height:"40px"},children:(0,s.jsx)(x.BounceLoader,{size:24})}):(0,s.jsx)(m.ZP,{path:(null===h||void 0===h?void 0:h.rewarded)>=p?"/icons/gift-open.svg":"/icons/gift.svg",label:(null===h||void 0===h?void 0:h.rewarded)>=p?"Claimed!":"Claim Reward",className:(null!==(j=null===h||void 0===h?void 0:h.rewarded)&&void 0!==j?j:0)<p&&y?a().focusOnButton:a().disabledButton,onClick:(null!==(_=null===h||void 0===h?void 0:h.rewarded)&&void 0!==_?_:0)<p&&y?function(){i((0,r.C3)({updateScore:!l}))}:null}),(0,s.jsx)(m.ZP,{path:n?"/icons/cross.svg":"/icons/settings.svg",label:n?"Close":"Change Intensity",onClick:function(){return t((function(e){return!e}))}})]})]})},I=function(e){var n=e.color,t=void 0===n?"#007BCC":n,i=e.inLesson,d=void 0!==i&&i,h=(0,c.I0)(),g=(0,l.useState)(!1),x=g[0],f=g[1],m=(0,c.v9)((function(e){return e.user.data.goalsIntensity})),p=(0,c.v9)((function(e){return e.user.isLogged})),v=(0,c.v9)((function(e){return e.challenges.currDate}));(0,l.useEffect)((function(){h((0,u.f5)())}),[h]),(0,l.useEffect)((function(){if(void 0!==v&&p&&void 0!==m){var e=new Date(v),n=new Date(e.getFullYear(),0,0),t=Math.floor((e-n)/864e5),s=Math.ceil(t/7);h((0,r.Nh)({week:s,year:e.getFullYear()}))}}),[v,h,p]),(0,l.useEffect)((function(){void 0===m&&p&&d&&f(!0)}),[m,p,d]);return(0,s.jsxs)(o.Z,{className:[a().container,d?a().inLesson:null].join(" "),style:d?null:{border:"2px ".concat(void 0===m?"dashed":"solid"," ").concat(t)},alignItems:"flex-start",children:[(0,s.jsx)(Z,{isSetup:x,setIsSetup:f,inLesson:d}),(0,s.jsx)(b,{isSetup:x,inLesson:d,handleChooseIntensity:function(e){var n=new Date(v),t=new Date(n.getFullYear(),0,0),s=Math.floor((n-t)/864e5),l=Math.ceil(s/7);h((0,r.f$)({intensity:e,week:l,year:n.getFullYear()})),f(!1)},setIsSetup:f})]})},L=t(74379),S=t.n(L),N=t(18498),P=t.n(N),B=t(19882),G=function(e){var n=e.inLesson,t=(0,c.I0)(),i=(0,l.useState)(!1),a=i[0],h=i[1],x=(0,c.v9)((function(e){return e.user.data.goalsIntensity})),f=(0,c.v9)((function(e){return e.user.isLogged})),m=(0,c.v9)((function(e){return e.user.currentLearningGoals})),p=(0,c.v9)((function(e){return e.challenges.currDate}));(0,l.useEffect)((function(){t((0,u.f5)())}),[t]),(0,l.useEffect)((function(){if(void 0!==p&&f&&void 0!==x){var e=new Date(p),n=new Date(e.getFullYear(),0,0),s=Math.floor((e-n)/864e5),l=Math.ceil(s/7);t((0,r.Nh)({week:l,year:e.getFullYear()}))}}),[p,t,f]);var v,j="",_=0;switch(null===m||void 0===m?void 0:m.intensity){case 1:j=(0,s.jsx)("span",{title:"Low Intensity",children:"\ud83d\udfe2"}),_=5;break;case 2:j=(0,s.jsx)("span",{title:"Moderate Intensity",children:"\ud83d\udfe1"}),_=10;break;case 3:j=(0,s.jsx)("span",{title:"High Intensity",children:"\ud83d\udfe0"}),_=20;break;case 4:j=(0,s.jsx)("span",{title:"Very High Intensity",children:"\ud83d\udd34"}),_=30}var y,C=Object.values(null!==(v=null===m||void 0===m?void 0:m.goals)&&void 0!==v?v:{}).reduce((function(e,n){return e+n.target}),0),k=Math.min(C,Object.values(null!==(y=null===m||void 0===m?void 0:m.goals)&&void 0!==y?y:{}).reduce((function(e,n){return e+Math.min(n.current,n.target)}),0));return(0,s.jsxs)(o.Z,{className:S().containerWrapper,children:[(0,s.jsx)(o.Z,{className:S().staticContainer,alignItems:"flex-start",children:(0,s.jsxs)(o.Z,{row:!0,spacing:8,fullWidth:!0,children:[(0,s.jsx)("img",{src:"/icons/goal.svg",alt:"goal",width:32,height:32}),(0,s.jsxs)(o.Z,{className:S().titleContainer,alignItems:"flex-start",children:[(0,s.jsx)(d.ZP,{text:"Weekly Goals",type:"title",bold:!0}),m?(0,s.jsxs)(o.Z,{className:S().titleInfoContainer,row:!0,alignItems:"flex-end",children:[(0,s.jsx)(B.Z,{maxProgress:C,progress:k}),(0,s.jsx)("img",{src:"/icons/gift".concat((null===m||void 0===m?void 0:m.rewarded)>=_?"-open":"",".svg"),width:16,height:16,alt:"",style:k>=C?{}:{opacity:.3}})]}):null]}),(0,s.jsx)(o.Z,{row:!0,margin:[0,0,0,void 0===x&&f?8:void 0===m?24:0],children:void 0===x&&f?(0,s.jsx)(g.ZP,{classNameContainer:S().createButtonSmall,text:"Create",type:g.Tq,onClick:function(){return h(!0)}}):void 0===m?(0,s.jsx)(P(),{color:"#007bcc"}):(0,s.jsxs)(o.Z,{row:!0,alignItems:"baseline",spacing:4,children:[(0,s.jsx)(d.ZP,{text:j,type:"verySmall"}),(0,s.jsx)(d.ZP,{text:"Week ".concat(m.week),type:"verySmall"})]})})]})}),(0,s.jsxs)(o.Z,{className:[S().container,n?S().inLesson:null,void 0===x&&f&&!a?S().hide:null].join(" "),alignItems:"flex-start",children:[(0,s.jsx)(Z,{isSetup:a,setIsSetup:h,inLesson:n}),(0,s.jsx)(b,{isSetup:a,inLesson:n,handleChooseIntensity:function(e){var n=new Date(p),s=new Date(n.getFullYear(),0,0),l=Math.floor((n-s)/864e5),i=Math.ceil(l/7);t((0,r.f$)({intensity:e,week:i,year:n.getFullYear()})),h(!1)},setIsSetup:h})]})]})},W=I},6634:function(e){e.exports={base:"IconButton_base__CMFSN",tooltip:"IconButton_tooltip__owLK6",disabled:"IconButton_disabled__1okM0",main:"IconButton_main__5m687",home:"IconButton_home__gQae9",normal:"IconButton_normal__JbBvI",small:"IconButton_small__W_Xc9",normalWithText:"IconButton_normalWithText__2mxLz",smallWithText:"IconButton_smallWithText__Xp5tU",text:"IconButton_text__vMIuO"}},13432:function(e){e.exports={container:"LearningGoals_container__ToMkM",inLesson:"LearningGoals_inLesson__TLrAs",innerContainer:"LearningGoals_innerContainer___F7CO",createButton:"LearningGoals_createButton__2PQYD",buttonsContainer:"LearningGoals_buttonsContainer__vWKWE",titleContainer:"LearningGoals_titleContainer__PbcNd",titleInfoContainer:"LearningGoals_titleInfoContainer__TubxP",selectedButton:"LearningGoals_selectedButton__VidmB",settingsSelected:"LearningGoals_settingsSelected___nPGt",goalsContainer:"LearningGoals_goalsContainer__DfM6F",disabledButton:"LearningGoals_disabledButton__1PeDb",link:"LearningGoals_link__NFefM",motivationalContainer:"LearningGoals_motivationalContainer__eYiHH",motivationalTopContainer:"LearningGoals_motivationalTopContainer__mKHzB",motivationalInnerContainer:"LearningGoals_motivationalInnerContainer__lkewH",show:"LearningGoals_show__Cgltp",focusOnButton:"LearningGoals_focusOnButton__r9mA5",colorChange:"LearningGoals_colorChange__E4n2i"}},74379:function(e){e.exports={containerWrapper:"LearningGoalsSmall_containerWrapper__ZosCR",staticContainer:"LearningGoalsSmall_staticContainer___BhJm",container:"LearningGoalsSmall_container__VW6ZE",hide:"LearningGoalsSmall_hide___cAJC",inLesson:"LearningGoalsSmall_inLesson__6Ewoh",createButtonSmall:"LearningGoalsSmall_createButtonSmall__jciWB",titleContainer:"LearningGoalsSmall_titleContainer__HvZ3B",titleInfoContainer:"LearningGoalsSmall_titleInfoContainer__roVgb",goalsContainer:"LearningGoalsSmall_goalsContainer__5t86G"}}}]);
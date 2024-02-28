(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2653],{23963:function(e,n,r){"use strict";var i=r(85893),t=(r(67294),r(99104)),o=r.n(t);n.Z=function(e){var n=e.path,r=e.title,t=e.dark,s=e.darkTransparent,a=e.noMargin;return(0,i.jsxs)("div",{className:[o().container,t?o().containerDark:s?o().containerDarkTransparent:null,a?o().noMargin:null].join(" "),children:[(0,i.jsx)("img",{src:n,alt:"",style:{width:"24px",height:"24px"}}),(0,i.jsx)("p",{className:[o().text,t?o().textDark:s?o().textDarkTransparent:null].join(" "),children:r})]})}},78224:function(e,n,r){"use strict";var i=r(67294),t=r(25617),o=r(80027);n.Z=function(){var e=(0,t.I0)(),n=(0,t.v9)((function(e){return e.userProgress})),r=n.lastCompiles,s=n.fetchLastCompileStatus,a=(0,t.v9)((function(e){return e.user})).isLogged;return(0,i.useEffect)((function(){a&&0===r.length&&e((0,o.NX)())}),[e,a,r.length]),{lastCompiles:r,fetchLastCompileStatus:s}}},33698:function(e,n,r){"use strict";var i=r(67294);n.Z=function(e,n){var r=(0,i.useState)(null),t=r[0],o=r[1];return(0,i.useEffect)((function(){o(function(e){try{var r=localStorage.getItem(e);return r&&"undefined"!==r?JSON.parse(r):n}catch(i){return n}}(e))}),[]),[t,(0,i.useCallback)((function(n){try{o(n),localStorage.setItem(e,JSON.stringify(n))}catch(error){console.log(error)}}),[e,o]),(0,i.useCallback)((function(){try{localStorage.removeItem(e)}catch(n){console.log(error)}}),[e])]}},92090:function(e,n,r){"use strict";r.r(n);var i=r(85893),t=r(12458),o=r(8596),s=r(21432);r(67294);n.default=function(){return(0,i.jsx)(o.Z,{children:(0,i.jsxs)(t.Z,{spacing:16,style:{minHeight:"50vh"},children:[(0,i.jsx)(s.ZP,{text:"404 - Page not found",h1:!0,bold:!0,type:"bigTitle"}),(0,i.jsx)(s.ZP,{text:"Follow the links to return to safe place...",type:"subTitle"})]})})}},32653:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSP:function(){return U},default:function(){return Y}});var i=r(85893),t=r(67294),o=r(89292),s=r.n(o),a=r(8596),l=r(87653),c=r.n(l),u=r(25617),d=r(80027),v=function(e){var n=(0,u.I0)(),r=(0,u.v9)((function(e){return e.userProgress})).progress,i=(0,u.v9)((function(e){return e.user})).isLogged;return(0,t.useEffect)((function(){i&&!r.hasOwnProperty(e)&&n((0,d.T0)(e))}),[n,e,i,r]),r},p=(r(78224),r(60831)),f=(r(33698),r(40782)),h=r(11163),m=r(75475),_=r(79441),x=r(59564),g=t.createContext(),C=function(e){var n=e.lesson,r=e.onClick,t=e.started,o=e.done,s=e.isOpen;return s?(0,i.jsxs)("div",{className:[c().lessonContainer,s?null:c().lessonContainerDisabled].join(" "),onClick:r,children:[(0,i.jsx)("div",{className:[c().lessonIndicatorContainer,t&&c().lessonIndicatorContainerFilled].join(" "),children:o&&(0,i.jsx)("img",{src:"/icons/mark.svg",alt:""})}),(0,i.jsx)("p",{className:c().lessonName,children:n.name})]}):null},j=function(e){var n=e.lesson,r=e.onClick,o=e.started,s=e.done,a=e.isOpen,l=(0,t.useContext)(g),d=l.chapters,v=l.courseId,p=(0,u.v9)((0,_.DM)(d,v,n.id));return a?(0,i.jsxs)("div",{className:[c().lessonContainer,(null===p||void 0===p?void 0:p.done)&&a?null:c().lessonContainerDisabled].join(" "),onClick:r,children:[(0,i.jsx)("div",{className:[c().lessonIndicatorContainer,o&&c().lessonIndicatorContainerFilled].join(" "),children:s&&(0,i.jsx)("img",{src:"/icons/mark.svg",alt:""})}),(0,i.jsx)("p",{className:c().lessonName,children:n.name}),(0,i.jsx)("img",{src:"/icons/project-lesson.svg",alt:"Project lesson",className:c().projectLessonIcon})]}):null},P=function(e){var n=e.chapter,r=e.style,t=e.onClick,o=e.courseId,s=e.progress,a=e.currTime,l=n.lessons.map((function(e){var n,r,i=!0;void 0!==e.additionalProperties&&(0===a?i=!1:(void 0!==(null===(n=e.additionalProperties)||void 0===n?void 0:n.openDate)&&e.additionalProperties.openDate>a&&(i=!1),void 0!==(null===(r=e.additionalProperties)||void 0===r?void 0:r.closeDate)&&e.additionalProperties.closeDate<a&&(i=!1)));return i}));return l.every((function(e){return!1===e}))?null:(0,i.jsxs)("div",{className:c().chapterContainer,style:r,children:[(0,i.jsx)("p",{className:c().chapterTitle,children:n.name}),n.lessons.map((function(e,n){var r,a,c,u=(null!==s&&void 0!==s?s:{}).hasOwnProperty(o)&&(null!==(c=s[o])&&void 0!==c?c:{}).hasOwnProperty(e.id),d=l[n];return e.isProject?(0,i.jsx)(j,{lesson:e,onClick:function(){return t(n)},started:u,isOpen:d,done:u&&!0===(null===(r=s[o][e.id])||void 0===r?void 0:r.done)},e.id+n):(0,i.jsx)(C,{lesson:e,onClick:function(){return t(n)},started:u,isOpen:d,done:u&&!0===(null===(a=s[o][e.id])||void 0===a?void 0:a.done)},e.id+n)}))]})},N=function(e){var n=e.className,r=e.preview,o=e.course,s=(0,h.useRouter)(),a=s.query,l=a.courseId,u=a.businessId,d=v(l),_=(0,p.Z)().width,C=(0,t.useState)(0),j=C[0],N=C[1],D=(0,t.useState)(0),b=D[0],k=D[1];(0,t.useEffect)((function(){o.chapters.flatMap((function(e){return e.lessons})).some((function(e){return void 0!==e.additionalProperties}))&&x.Z.getServerTimestamp().then((function(e){return k(e)}))}),[o.chapters]);var y;return(0,t.useEffect)((function(){if(void 0!==(null===o||void 0===o?void 0:o.chapters)){var e=o.chapters.length,n=0;o.chapters.forEach((function(e){n+=e.lessons.length}));var r=80*e+40*n;N(e<3?r:_>1300?r/2:_>900?r/1.5:r)}}),[_,o]),(0,i.jsx)(g.Provider,{value:{chapters:null!==(y=null===o||void 0===o?void 0:o.chapters)&&void 0!==y?y:[],courseId:l},children:(0,i.jsx)("div",{className:[c().container,n].join(" "),style:{height:j+"px"},children:o&&0===Object.keys(o).length?null:o.chapters.map((function(e,n){return(0,i.jsx)(P,{onClick:function(e){return function(e,n){var t=o.chapters[e].lessons[n],a=t.isProject&&!r;if(!r&&void 0!==t.additionalProperties){if(0===b)return void f.Am.error("Lesson is closed!");var c,v;if(void 0!==(null===(c=t.additionalProperties)||void 0===c?void 0:c.openDate)&&t.additionalProperties.openDate>b)return void f.Am.error("Lesson is closed!");if(void 0!==(null===(v=t.additionalProperties)||void 0===v?void 0:v.closeDate)&&t.additionalProperties.closeDate<b)return void f.Am.error("Lesson is closed!")}if(a){var p=(0,m.RA)(o.chapters,e,n);d.hasOwnProperty(l)&&d[l].hasOwnProperty(p.id)&&d[l][p.id].done?s.push((u?"/partner/"+u:"")+"/courses/"+l+"/"+t.id):f.Am.info((0,i.jsxs)(i.Fragment,{children:["Complete ",(0,i.jsx)("b",{children:null===p||void 0===p?void 0:p.name})," before!"]}))}else""===t.id?f.Am.error("Lesson not exists!"):s.push((u?"/partner/"+u:r?"/preview":"")+"/courses/"+l+"/"+t.id)}(n,e)},chapter:e,progress:d,courseId:o.id,currTime:b},e.name)}))})})},D=r(1828),b=r.n(D),k=r(23963),y=r(50303),T=r.n(y),S=r(70687),I=r(21432),w=r(12458),E=function(e){var n,r=e.course;return(0,i.jsxs)(w.Z,{className:T().container,alignItems:"flex-start",spacing:16,children:[(0,i.jsx)(S.Z,{dark:!0,creators:null===r||void 0===r?void 0:r.creators,imageSize:48}),(0,i.jsx)(I.ZP,{type:"bigTitle",dark:!0,h1:!0,className:T().title,text:null===r||void 0===r?void 0:r.title}),(0,i.jsx)(I.ZP,{type:"subTitle",dark:!0,text:null===r||void 0===r?void 0:r.description}),(0,i.jsxs)("div",{className:T().tagsContainer,children:[(0,i.jsx)(k.Z,{path:"/icons/lesson-small.svg",title:(null===r||void 0===r?void 0:r.lessonsNum)+" Lessons",dark:!0}),(0,i.jsx)(k.Z,{path:"/icons/challenge-small.svg",title:(null===r||void 0===r?void 0:r.challengesNum)+" Challenges",dark:!0}),(null===r||void 0===r||null===(n=r.additionalProperties)||void 0===n?void 0:n.noCertification)?null:(0,i.jsx)(I.oP,{fixed:!0})]})]})},Z=r(52513),O=r(45548),R=r.n(O),L=function(e){var n,r=e.className,t=e.course,o=e.preview,s=(0,h.useRouter)(),a=s.query.businessId,l=(0,u.v9)((0,_.vC)(t.id)),c=Object.keys(l).length>0;return(0,i.jsxs)("div",{className:[R().container,r].join(" "),children:[(0,i.jsxs)("div",{className:R().innerContainer,children:[(0,i.jsx)("p",{className:R().prerequisites,children:"Prerequisites"}),null===t||void 0===t||null===(n=t.pre)||void 0===n?void 0:n.map((function(e,n){return(0,i.jsxs)("div",{className:R().bulletContainer,children:[(0,i.jsx)("div",{className:R().bullet}),(0,i.jsx)("p",{className:R().bulletText,children:e})]},n+"")}))]}),(0,i.jsx)(Z.ZP,{onClick:function(){var e=t.chapters[0].lessons[0].id;c&&(e=t.chapters.flatMap((function(e){return e.lessons})).find((function(e){var n;return!l.hasOwnProperty(e.id)||!(null===(n=l[e.id])||void 0===n?void 0:n.done)})).id),""===e?f.Am.error("Lesson not exists!"):s.push((a?"/partner/"+a:o?"/preview":"")+"/courses/"+t.id+"/"+e)},text:c?"CONTINUE YOUR PROGRESS":"GET STARTED",type:Z.AB,classNameContainer:R().buttonContainer})]})},A=r(38803),F=function(e){var n=e.title,r=e.description,t=e.image;return(0,i.jsx)(A.Z,{title:null!==n&&void 0!==n?n:"Coddy - Course overview",description:r&&0!=r.length?r:"In Coddy, Each Course covers small topic perfectly, with enough practice and examples, so that each student will be able to use what he just learned - try now!",image:t})},q=function(e){var n=e.preview,r=e.course;return(0,i.jsxs)("div",{className:b().container,children:[(0,i.jsx)(F,{title:"".concat(null===r||void 0===r?void 0:r.title," | Coddy"),description:null===r||void 0===r?void 0:r.description,image:null===r||void 0===r?void 0:r.img}),(0,i.jsx)("div",{className:b().img,style:{backgroundImage:"url("+(null===r||void 0===r?void 0:r.img)+")"},children:(0,i.jsx)("div",{className:b().blur})}),(0,i.jsxs)("div",{className:b().content,children:[(0,i.jsx)(E,{course:r}),(0,i.jsx)(L,{preview:n,course:r,className:b().courseDescriptionRight})]})]})},M=r(92090),z=r(27640),J=r(41664),U=!0,Y=function(e){var n,r,o,l=e.data,c=e.preview,d=void 0!==c&&c,v=(0,t.useState)(!1),p=v[0],h=v[1],g=(0,u.v9)((function(e){return e.user.data.email})),C=(0,u.v9)((0,_.OP)());if((0,t.useEffect)((function(){var e,n;d||void 0===(null===l||void 0===l||null===(e=l.additionalProperties)||void 0===e?void 0:e.openDate)&&void 0===(null===l||void 0===l||null===(n=l.additionalProperties)||void 0===n?void 0:n.closeDate)||x.Z.getServerTimestamp().then((function(e){var n,r;void 0!==(null===(n=l.additionalProperties)||void 0===n?void 0:n.openDate)&&e<l.additionalProperties.openDate||void 0!==(null===(r=l.additionalProperties)||void 0===r?void 0:r.closeDate)&&e>l.additionalProperties.closeDate?f.Am.error("Course is closed!"):h(!0)}))}),[l,d]),!l)return(0,i.jsx)(M.default,{});if(!d&&void 0!==(null===(n=l.additionalProperties)||void 0===n?void 0:n.emailSuffix)&&l.additionalProperties.emailSuffix.length>0){var j,P;if(!g)return(0,i.jsx)(a.r,{});if(l.additionalProperties.emailSuffix!==(0,m.zZ)(g)&&!(null!==(P=null===(j=l.additionalProperties)||void 0===j?void 0:j.customEmailAccess)&&void 0!==P?P:[]).includes(g))return f.Am.error("Missing permissions for this course"),(0,i.jsx)(a.r,{});if(!z.Z.isEmailVerified())return f.Am.error((0,i.jsxs)(i.Fragment,{children:["Email must be verified, go to ",(0,i.jsx)(J.default,{href:"/profile",children:(0,i.jsx)("a",{children:(0,i.jsx)("b",{children:"profile"})})})," to verify your email"]})),(0,i.jsx)(a.r,{});if(!C)return f.Am.error("Missing premium plan, contact your organization for further instructions"),(0,i.jsx)(a.r,{})}return d||void 0===(null===(r=l.additionalProperties)||void 0===r?void 0:r.openDate)&&void 0===(null===(o=l.additionalProperties)||void 0===o?void 0:o.closeDate)||p?(0,i.jsx)(a.r,{children:(0,i.jsxs)("div",{className:s().container,children:[(0,i.jsx)(q,{preview:d,course:l}),(0,i.jsx)(N,{className:s().structureContainer,preview:d,course:l})]})}):(0,i.jsx)(a.r,{})}},99104:function(e){e.exports={container:"Tag_container__QxJyG",containerDark:"Tag_containerDark__9CzfF",containerDarkTransparent:"Tag_containerDarkTransparent__Ievg8",text:"Tag_text__uFR5P",textDark:"Tag_textDark__8YyCY",textDarkTransparent:"Tag_textDarkTransparent__VVgvF",noMargin:"Tag_noMargin__tRlb7"}},50303:function(e){e.exports={container:"CourseDescriptionLeft_container__6zWnq",title:"CourseDescriptionLeft_title__02YSA",tagsContainer:"CourseDescriptionLeft_tagsContainer__fpU1D"}},45548:function(e){e.exports={container:"CourseDescriptionRight_container__q34oS",innerContainer:"CourseDescriptionRight_innerContainer__f1Ebd",prerequisites:"CourseDescriptionRight_prerequisites__m9Xok",bullet:"CourseDescriptionRight_bullet__GJnHP",bulletText:"CourseDescriptionRight_bulletText__lIPKW",bulletContainer:"CourseDescriptionRight_bulletContainer__EYt1e",buttonContainer:"CourseDescriptionRight_buttonContainer__3ioxW"}},1828:function(e){e.exports={container:"CourseFeature_container__aKRUI",img:"CourseFeature_img__lCVb5",blur:"CourseFeature_blur__NrTmN",content:"CourseFeature_content__mky7b"}},87653:function(e){e.exports={container:"CourseStructure_container___EydX",chapterContainer:"CourseStructure_chapterContainer__BoKLN",chapterTitle:"CourseStructure_chapterTitle__bvCfa",lessonContainer:"CourseStructure_lessonContainer__gKQ2P",lessonName:"CourseStructure_lessonName__upcJ_",projectLessonIcon:"CourseStructure_projectLessonIcon___tEaq",lessonIndicatorContainer:"CourseStructure_lessonIndicatorContainer__UrH_7",lessonIndicatorContainerFilled:"CourseStructure_lessonIndicatorContainerFilled__D8Nac",lessonContainerDisabled:"CourseStructure_lessonContainerDisabled__ew7Eg"}}}]);
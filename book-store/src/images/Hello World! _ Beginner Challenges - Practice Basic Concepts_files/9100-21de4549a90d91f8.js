(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9100],{87931:function(e,t,n){"use strict";n.d(t,{Sd:function(){return v},PP:function(){return q},u$:function(){return de}});var i=n(85893),s=n(67294),r=n(27640),o=n(14183),a=n.n(o),l=n(21432),c=n(12458),u=n(11163),d=n(25617),f=n(80027),g=n(77091),p=(n(40740),n(79441)),x=function(e){var t=e.text,n=e.path,s=e.onClick;return(0,i.jsxs)(c.Z,{row:!0,justifyContent:"flex-start",onClick:s,className:a().actionContainer,padding:[16,24],spacing:16,children:[(0,i.jsx)("img",{src:n,alt:""}),(0,i.jsx)(l.ZP,{text:t,type:"subTitle",dark:!0})]})},v=function(){var e=(0,d.I0)(),t=(0,u.useRouter)(),n=(0,d.v9)((function(e){return e.user.data.isAffiliation})),s=(0,d.v9)((function(e){return e.user.data.billingData})),o=(0,d.v9)((0,p.OP)());return(0,i.jsxs)("div",{className:a().container,children:[n?null:(0,i.jsx)(x,{text:"Refer a friend",path:"/icons/referral-white.svg",onClick:function(){g.Z.event("referral_view"),t.query.p="refer",t.replace(t)}}),(0,i.jsx)(x,{onClick:function(){g.Z.event("profile_become_creator_click"),t.push("/creator")},text:"Become creator",path:"/icons/become-creator-white.svg"}),s?(0,i.jsx)(x,{onClick:function(){g.Z.event("profile_billing_settings_click"),window.open("https://billing.stripe.com/p/login/eVa8xbcYWcXAcyA9AA","_blank").focus()},text:"Billing settings",path:"/icons/card-white.svg"}):null,o?null:(0,i.jsx)(x,{text:"Upgrade to Premium",path:"/icons/premium-white.svg",onClick:function(){g.Z.event("profile_upgrade_to_premium_click"),t.push("/pricing")}}),(0,i.jsx)(x,{onClick:function(){r.Z.logout().then((function(){e((0,f.sv)()),t.replace("/login")}))},text:"Logout",path:"/icons/logout-white.svg"})]})},h=n(78786),m=n.n(h),j=n(4231),b=n(34682),_=n(45016),P=n(57919),C=n(13728),y=n.n(C),Z=function(e){var t=e.children;return(0,i.jsx)("div",{className:y().container,children:t})},w=n(73185),k=n(40782),N=n(5410),I=n.n(N),S=function(e){var t=e.course,n=e.progress,s=(0,u.useRouter)();return void 0===t||void 0===n?null:(0,i.jsx)(c.Z,{cardSecondary:!0,fullWidth:!0,padding:[16],margin:[0,0,16,0],spacing:12,alignItems:"flex-start",onClick:function(){g.Z.event("profile_project_click"),s.push("/courses/"+t.id)},children:(0,i.jsxs)(c.Z,{row:!0,justifyContent:"space-between",fullWidth:!0,children:[(0,i.jsx)(l.ZP,{text:t.title,bold:!0}),(0,i.jsxs)("div",{className:I().codeViewContainer,onClick:function(e){e.stopPropagation(),k.Am.info("Coming soon!")},children:[(0,i.jsx)("img",{src:"/icons/code.svg",alt:"code view"}),(0,i.jsx)(l.ZP,{className:I().codeViewTooltip,text:"View code",type:"verySmall"})]})]})})},T=function(e){var t=e.isPublic,n=e.progress,s=e.coursesData;if((0,d.v9)((function(e){return e.userProgress})).fetchAllStatus!==j.Z.Success&&!t)return(0,i.jsx)(l.ZP,{text:t?"":"Loading..."});var r=[];return 0===(r=Object.keys(n).filter((function(e){var t=s.find((function(t){return t.id===e}));return void 0!==t&&(Object.keys(n[e]).filter((function(t){return n[e][t].done})).length>=t.lessonsNum&&t.tags.includes("project"))}))).length?(0,i.jsxs)(c.Z,{spacing:8,children:[(0,i.jsx)(l.ZP,{text:"Completed projects will appear here",type:"bigNormal",align:"center"}),(0,i.jsx)(l.ZP,{text:t?null:(0,i.jsxs)(i.Fragment,{children:["Start to ",(0,i.jsx)(l.rU,{url:"/explore/tag/project",text:"Explore Projects",type:"title"})]}),type:"title",align:"center"})]}):r.map((function(e){return(0,i.jsx)(S,{progress:n[e],course:s.find((function(t){return t.id===e}))},e)}))},D=function(e){var t,n=e.courseId,s=e.progress,r=e.course,o=e.isPublic,a=(0,u.useRouter)(),f=((0,d.v9)((0,p.OP)()),(0,d.v9)((function(e){return e.user.data.uid})));if(void 0===r)return null;var x=r.lessonsNum,v=Object.keys(s).filter((function(e){return s[e].done})).length,h=x===v;return(0,i.jsxs)(c.Z,{onClick:function(){g.Z.event("profile_course_click"),a.push("/courses/"+n)},cardSecondary:!0,fullWidth:!0,padding:[16],margin:[0,0,16,0],spacing:12,alignItems:"flex-start",children:[(0,i.jsxs)(c.Z,{row:!0,justifyContent:"space-between",alignItems:"flex-start",fullWidth:!0,children:[(0,i.jsx)(l.ZP,{text:r.title,bold:!0,className:m().courseTitle}),o||(null===r||void 0===r||null===(t=r.additionalProperties)||void 0===t?void 0:t.noCertification)?null:h?(0,i.jsx)("img",{src:"/icons/certificate.svg",alt:"certificate",className:m().certificate,onClick:function(e){e.stopPropagation(),g.Z.event("show_certificate"),window.open("http://coddy.tech/certifications/".concat(f.substring(0,6)+"-"+r.cid.substring(0,6)),"_blank")}}):(0,i.jsxs)("div",{className:m().certificateDisabledContainer,onClick:function(e){return e.stopPropagation()},children:[(0,i.jsx)("img",{src:"/icons/certificate.svg",alt:"certificate",className:m().certificateDisabled}),(0,i.jsx)(l.ZP,{className:m().certificateTooltip,text:"Complete to achieve certification",type:"verySmall"})]})]}),(0,i.jsxs)(c.Z,{row:!0,spacing:8,children:[h?(0,i.jsx)("img",{src:"/icons/mark-circle-success.svg",alt:""}):null,0===Object.keys(s).length?(0,i.jsx)("img",{src:"/icons/bookmark.svg",alt:"bookmark icon",width:20,height:20}):null,(0,i.jsx)(l.ZP,{text:0===Object.keys(s).length?"Saved for later":"".concat((v/x*100).toFixed(),"% Completed"),type:"small",colorType:"secondary"})]}),(0,i.jsx)(b.Z,{progress:v,maxProgress:x})]})},A=function(e){var t=e.isPublic,n=e.uid,r=(0,d.I0)(),o=(0,d.v9)((function(e){return e.userProgress})),a=o.fetchAllStatus,u=o.progress,g=(0,s.useState)({}),p=g[0],x=g[1],v=(0,s.useState)(!1),h=v[0],b=v[1],C=(0,s.useState)("courses"),y=C[0],k=C[1],N=(0,_.Z)(Object.keys(t?p:u));t&&(u=p),(0,s.useEffect)((function(){t?P.Z.getAllUserProgress(n).then((function(e){return x(e)})):a===j.Z.None&&r((0,f.ET)())}),[r,a,t,n]);var I=[];t?I=Object.keys(u).filter((function(e){var t=N.find((function(t){return t.id===e}));return void 0!==t&&Object.keys(u[e]).filter((function(t){return u[e][t].done})).length>=t.lessonsNum})):(I=Object.keys(u).sort((function(e,t){var n=N.find((function(t){return t.id===e})),i=N.find((function(e){return e.id===t}));if(void 0!==n&&void 0!==i){if(0===Object.keys(u[e]).length)return-1;if(0===Object.keys(u[t]).length)return 1;var s=Object.keys(u[e]).filter((function(t){return u[e][t].done})).length;return Object.keys(u[t]).filter((function(e){return u[t][e].done})).length/i.lessonsNum-s/n.lessonsNum}return 0})),h&&(I=I.filter((function(e){var t=N.find((function(t){return t.id===e}));return Object.keys(u[e]).filter((function(t){return u[e][t].done})).length/t.lessonsNum<1}))));return(0,i.jsxs)(Z,{children:[(0,i.jsxs)(c.Z,{row:!0,alignItems:"center",justifyContent:"flex-start",padding:[16],children:[(0,i.jsx)(l.ZP,{text:"Courses",type:"subTitle",bold:!0,onClick:function(){return k("courses")},className:[m().topbarButton,"courses"===y?m().topbarButtonSelected:null].join(" ")}),(0,i.jsx)(l.ZP,{text:"|",type:"subTitle",className:m().topbarDivider}),(0,i.jsx)(l.ZP,{text:"Projects",type:"subTitle",bold:!0,onClick:function(){return k("projects")},className:[m().topbarButton,"projects"===y?m().topbarButtonSelected:null].join(" ")})]}),t||"projects"===y?null:(0,i.jsx)(c.Z,{padding:[0,16,16,16],alignItems:"flex-start",children:(0,i.jsxs)("label",{children:["Hide finished",(0,i.jsx)("input",{type:"checkbox",onChange:function(e){b(e.target.checked)},checked:h})]})}),(0,i.jsx)(w.Z,{colorType:"strong"}),(0,i.jsx)(c.Z,{padding:[16],style:{overflow:"auto",height:"400px"},justifyContent:"normal",children:"projects"===y?(0,i.jsx)(T,{progress:u,isPublic:t,coursesData:N}):a===j.Z.Success||t?0===Object.keys(u).length?(0,i.jsx)(l.ZP,{text:t?null:(0,i.jsxs)(i.Fragment,{children:["Start to ",(0,i.jsx)(l.rU,{url:"/courses",text:"Explore Courses",type:"title"})]}),type:"title"}):I.map((function(e){return(0,i.jsx)(D,{courseId:e,isPublic:t,progress:u[e],course:N.find((function(t){return t.id===e}))},e)})):(0,i.jsx)(l.ZP,{text:t?"":"Loading..."})})]})},O=n(78224),H=n(23461),U=n(4040),B=n(69487),E=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(0,d.I0)(),i=(0,d.v9)((function(e){return e.courses})).data.find((function(t){return(null===t||void 0===t?void 0:t.id)===e})),r=(0,d.v9)((function(t){return t.challenges.data[e]})),o=(0,d.v9)((function(e){return e.courses})).fetchCourseStatus[e];return(0,s.useEffect)((function(){t?void 0===r&&n((0,U.gW)({id:e})):void 0!==i||o!==j.Z.Fail&&void 0!==o||n((0,B.uH)(e))}),[n,i,e,o,t,r]),t?null!==r&&void 0!==r?r:{}:null!==i&&void 0!==i?i:{}},W=function(e){var t,n,s=e.data,r=e.last,o="challenge"===s.context.courseId,a=(0,u.useRouter)(),d=E(o?s.context.lessonId:s.context.courseId,o),f=s.failed||s.regexFailed||s.testsResult.some((function(e){return e.failed})),g=o?"Challenge":d.title,p=o?d.title:null===(n=null===(t=d.chapters)||void 0===t?void 0:t.find((function(e){return e.lessons.some((function(e){return e.id===s.context.lessonId}))})).lessons.find((function(e){return e.id===s.context.lessonId})))||void 0===n?void 0:n.name;return(0,i.jsxs)(c.Z,{padding:[16],row:!0,fullWidth:!0,justifyContent:"space-between",bottomBorder:!r,children:[(0,i.jsxs)(c.Z,{alignItems:"flex-start",spacing:8,children:[(0,i.jsx)(l.ZP,{text:g}),(0,i.jsxs)(c.Z,{row:!0,spacing:8,children:[(0,i.jsx)("img",{src:"/icons/inherit.svg",style:{transform:"translate(8px, -8px)"},alt:""}),(0,i.jsx)(l.ZP,{text:p,bold:!0,onClick:function(){a.push(o?"/challenges/".concat(s.context.lessonId):"/courses/".concat(s.context.courseId,"/").concat(s.context.lessonId))}})]}),(0,i.jsxs)(c.Z,{row:!0,spacing:16,children:[(0,i.jsx)(l.ZP,{text:new Date(s.date).toLocaleString(),type:"small",colorType:"secondary"}),(0,i.jsx)(l.Vp,{text:H.Oq[s.lang],type:"small"})]})]}),(0,i.jsx)(c.Z,{children:f?(0,i.jsx)("img",{src:"/icons/test-case-failure.svg",alt:"",style:{width:"24px",height:"24px"}}):(0,i.jsx)("img",{src:"/icons/test-case-success.svg",alt:"",style:{width:"24px",height:"24px"}})})]})},L=function(){var e=(0,d.I0)(),t=(0,O.Z)(),n=t.lastCompiles,s=t.fetchLastCompileStatus;return(0,i.jsxs)(Z,{children:[(0,i.jsx)(c.Z,{alignItems:"center",justifyContent:"space-between",padding:[16],row:!0,children:(0,i.jsx)(l.ZP,{text:"Last Compiles",type:"subTitle",bold:!0})}),(0,i.jsx)(w.Z,{colorType:"strong"}),(0,i.jsx)(c.Z,{style:{overflow:"auto",height:"400px"},justifyContent:"normal",onScroll:function(t){var i;(i=t.target).scrollHeight-i.scrollTop===i.clientHeight&&e((0,f.M7)({startDate:n[n.length-1].date}))},children:0===n.length&&s!==j.Z.Success?(0,i.jsx)(l.ZP,{text:"Loading..."}):n.map((function(e,t){return(0,i.jsx)(W,{data:e,last:t===n.length-1},e.date+t)}))})]})},R=n(15452),F=n.n(R),V=n(33107),K=n(75475),Q=function(e){var t=e.linkedInPage,n=e.githubPage,s=e.facebookPage,r=e.instagramPage,o=e.twitterPage,a=e.personalWebPage,l=e.youtubePage;return(0,i.jsxs)(c.Z,{row:!0,style:{width:"90%",flexWrap:"wrap"},children:[t?(0,i.jsx)(V.U,{src:"/icons/linkedin-profile.svg",className:F().socialIcon,url:t,newTab:!0}):null,n?(0,i.jsx)(V.U,{src:"/icons/github-profile.svg",className:F().socialIcon,url:n,newTab:!0}):null,s?(0,i.jsx)(V.U,{src:"/icons/facebook-profile.svg",className:F().socialIcon,url:s,newTab:!0}):null,r?(0,i.jsx)(V.U,{src:"/icons/instagram-profile.svg",className:F().socialIcon,url:r,newTab:!0}):null,o?(0,i.jsx)(V.U,{src:"/icons/twitter-profile.svg",className:F().socialIcon,url:o,newTab:!0}):null,a?(0,i.jsx)(V.U,{src:"/icons/web-profile.svg",className:F().socialIcon,url:a,newTab:!0}):null,l?(0,i.jsx)(V.U,{src:"/icons/youtube-profile.svg",className:F().socialIcon,url:l,newTab:!0}):null]})},q=function(e){var t,n,s,r,o,a=e.onEditProfile,u=e.isPublic,f=e.data,p=e.isCreator,x=(0,d.v9)((function(e){return e.user.data}));u&&(x=f);var v,h,m=null!==(o=null===x||void 0===x?void 0:x.streak)&&void 0!==o?o:0,j=new Date(null===x||void 0===x||null===(t=x.metadata)||void 0===t?void 0:t.lastStreakDate),b=null===x||void 0===x||null===(n=x.metadata)||void 0===n?void 0:n.streakFreeze,_=(0,K.Kr)(j,b);return _.isActive||_.canBeActivated||(m=0),(0,i.jsxs)(c.Z,{cardSecondary:!0,padding:[32,16],className:F().container,children:[(null===x||void 0===x||null===(s=x.billingData)||void 0===s?void 0:s.isPremium)?(0,i.jsx)(l.ZP,{text:"PRO",type:"small",bold:!0,className:F().proTag,dark:!0}):null,u?null:(0,i.jsx)(V.U,{url:"/user/".concat(x.uid),newTab:!0,src:"/icons/resume-blue.svg",className:F().publicProfile,onClick:function(){return g.Z.event("view_public_profile")}}),(0,i.jsx)(V.Z,{src:null!==(v=x.imagePath)&&void 0!==v?v:"/images/user_placeholder.svg",alt:"user profile image",width:160,height:160,className:F().imageContainer,placeholder:"circle"}),(0,i.jsxs)(c.Z,{spacing:16,children:[(0,i.jsxs)(c.Z,{spacing:16,children:[(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(l.ZP,{text:x.displayName,type:"title",bold:!0,align:"center"}),u?null:(0,i.jsx)(l.ZP,{text:x.email,type:"normal",colorType:"main"})]}),(null===x||void 0===x||null===(r=x.bio)||void 0===r?void 0:r.length)>0?(0,i.jsx)(l.ZP,{text:x.bio,type:"bigNormal",align:"center"}):null]}),(0,i.jsx)(Q,{linkedInPage:x.linkedInPage,githubPage:x.githubPage,facebookPage:x.facebookPage,instagramPage:x.instagramPage,twitterPage:x.twitterPage,personalWebPage:x.personalWebPage,youtubePage:x.youtubePage}),(0,i.jsxs)(c.Z,{row:!0,hide:p,children:[(0,i.jsxs)(c.Z,{className:[F().streakContainer,_.isActive?null:F().notActiveStreak].join(" "),row:!0,spacing:8,padding:[4,12,4,12],alt:"Streak",children:[(0,i.jsx)(l.ZP,{text:m,dark:!0,type:"semiTitle"}),(0,i.jsx)("img",{src:"/icons/fire".concat(_.isActive?"-filled":"",".svg"),alt:"streak icon"})]}),(0,i.jsxs)(c.Z,{className:F().scoreContainer,row:!0,spacing:8,padding:[4,12,4,12],alt:"Score",children:[(0,i.jsx)(l.ZP,{text:null!==(h=null===x||void 0===x?void 0:x.score)&&void 0!==h?h:0,dark:!0,type:"semiTitle"}),(0,i.jsx)("img",{src:"/icons/score.svg",alt:"score icon"})]})]})]}),(0,i.jsx)(w.Z,{colorType:"strong"}),u?null:(0,i.jsxs)(c.Z,{row:!0,spacing:8,onClick:a,children:[(0,i.jsx)("img",{src:"/icons/edit.svg",alt:""}),(0,i.jsx)(l.ZP,{text:"Edit your profile",colorType:"main",type:"bigNormal"})]})]})},z=n(60831),J=n(13254),M=n.n(J),X=n(47130),Y=(n(58102),function(e){var t=e.courses;return(0,i.jsx)(Z,{children:(0,i.jsx)(c.Z,{padding:[16,40],style:{overflow:"auto",maxHeight:"800px"},justifyContent:"normal",alignItems:"normal",children:t.map((function(e){return(0,i.jsx)(X.Z,{data:e},e.id)}))})})}),G=n(29802),$=n(25820),ee=n.n($),te=function(e){var t,n,s,r=e.data,o=e.isPublic,a=(0,d.v9)((function(e){var n;return null!==(t=null===(n=e.user.data)||void 0===n?void 0:n.badges)&&void 0!==t?t:{}})),u=Object.keys(G.H);return(0,i.jsxs)(Z,{children:[(0,i.jsx)(c.Z,{alignItems:"center",justifyContent:"space-between",padding:[16],row:!0,children:(0,i.jsx)(l.ZP,{text:"Badges",type:"subTitle",bold:!0})}),(0,i.jsx)(w.Z,{colorType:"strong"}),(0,i.jsx)(c.Z,{row:!0,className:ee().container,justifyContent:"flex-start",alignItems:"flex-start",padding:[8,16],children:u.map((function(e){return(0,i.jsx)(G.Z,{type:e,small:!0,isPublic:o,level:o?null!==(n=r[e])&&void 0!==n?n:0:null!==(s=a[e])&&void 0!==s?s:0,hideHint:o},e)}))})]})},ne=n(68607),ie=n.n(ne),se=n(57277),re=n.n(se),oe=(n(93841),n(24762)),ae=function(e){var t=e.isPublic,n=e.data,r=(0,s.useState)({}),o=r[0],a=r[1],u=(0,d.v9)((function(e){return e.user.data.uid}));(0,s.useEffect)((function(){t?n&&P.Z.getUserActivityUsage(n).then((function(e){return a(e)})):u&&P.Z.getUserActivityUsage(u).then((function(e){return a(e)}))}),[u,t,n]);var f=new Date,g=0,p=ce(365).map((function(e){var t=le(f,-e),n=0,i=0,s=t.getFullYear().toString();if(o.hasOwnProperty(s)){var r=(t.getMonth()+1).toString();if(o[s].hasOwnProperty(r)){var a,l,c,u,d=t.getDate().toString();if(o[s][r].hasOwnProperty(d))n=null!==(c=null===(a=o[s][r][d])||void 0===a?void 0:a.submissions)&&void 0!==c?c:0,i=null!==(u=null===(l=o[s][r][d])||void 0===l?void 0:l.challengesDone)&&void 0!==u?u:0,g+=n}}return{date:t,submissions:n,challengesDone:i}}));return(0,i.jsxs)(c.Z,{padding:[0,0,32,0],spacing:16,alignItems:"flex-start",children:[(0,i.jsxs)(c.Z,{row:!0,justifyContent:"flex-start",fullWidth:!0,spacing:8,children:[(0,i.jsx)(l.ZP,{text:g,type:"subTitle",bold:!0}),(0,i.jsx)(l.ZP,{text:"Submissions in the last year",type:"normal"}),(0,i.jsx)(c.Z,{className:ie().infoIconContainer,children:(0,i.jsx)("img",{src:"/icons/info.svg",width:16,height:16,alt:""})})]}),(0,i.jsx)(c.Z,{className:ie().heatmapContainer,alignItems:"flex-end",children:(0,i.jsxs)(c.Z,{className:ie().innerHeatmapContainer,children:[(0,i.jsx)(re(),{startDate:le(f,-365),endDate:f,classForValue:function(e){return(null===e||void 0===e?void 0:e.submissions)?e.submissions<=2&&e.challengesDone<2?"color-github-1":e.submissions<=4&&e.challengesDone<3?"color-github-2":e.submissions<=7&&e.challengesDone<4?"color-github-3":"color-github-4":"color-empty"},values:p,tooltipDataAttrs:function(e){var t,n,i,s;return{"data-tip":"<b>".concat(null!==(i=e.submissions)&&void 0!==i?i:0,"</b>&nbsp&nbspSubmissions<br/><b>").concat(null!==(s=e.challengesDone)&&void 0!==s?s:0,"</b>&nbsp&nbspChallenges done</br></br>").concat(null===(n=null===e||void 0===e||null===(t=e.date)||void 0===t?void 0:t.toUTCString())||void 0===n?void 0:n.slice(5,16))}}}),(0,i.jsx)(oe.Z,{html:!0})]})})]})},le=function(e,t){var n=new Date(e);return n.setDate(n.getDate()+t),n},ce=function(e){return Array.from({length:e},(function(e,t){return t}))},ue=s.memo(ae),de=function(e){var t,n=e.isPublic,s=e.isCreator,r=e.courses,o=e.userData,a=(0,z.Z)().width;return(0,i.jsxs)(c.Z,{fullWidth:!0,className:M().container,spacing:16,alignItems:"normal",justifyContent:"flex-start",children:[s?null:(0,i.jsx)(ue,{isPublic:n,data:null===o||void 0===o?void 0:o.uid}),s?null:(0,i.jsx)(c.Z,{alignItems:"normal",row:a>1200,spacing:32,children:(0,i.jsx)(te,{isPublic:n,data:null!==(t=null===o||void 0===o?void 0:o.badges)&&void 0!==t?t:{}})}),s?(0,i.jsx)(c.Z,{alignItems:"normal",row:a>1200,spacing:32,children:(0,i.jsx)(Y,{courses:r})}):(0,i.jsxs)(c.Z,{alignItems:"normal",row:a>1200,spacing:32,children:[(0,i.jsx)(A,{isPublic:n,uid:null===o||void 0===o?void 0:o.uid}),n?null:(0,i.jsx)(L,{})]})]})}},45016:function(e,t,n){"use strict";var i=n(67294),s=n(25617),r=n(69487),o=n(4231);t.Z=function(e){var t=(0,s.I0)(),n=(0,s.v9)((function(e){return e.courses})).data.filter((function(t){return e.includes(null===t||void 0===t?void 0:t.id)})),a=(0,s.v9)((function(e){return e.courses})).fetchCourseStatus;return(0,i.useEffect)((function(){e&&e.forEach((function(e){n.some((function(t){return t.id===e}))||a[e]!==o.Z.Fail&&void 0!==a[e]||t((0,r.uH)(e))}))}),[t,e,n,a]),null!==n&&void 0!==n?n:[]}},78224:function(e,t,n){"use strict";var i=n(67294),s=n(25617),r=n(80027);t.Z=function(){var e=(0,s.I0)(),t=(0,s.v9)((function(e){return e.userProgress})),n=t.lastCompiles,o=t.fetchLastCompileStatus,a=(0,s.v9)((function(e){return e.user})).isLogged;return(0,i.useEffect)((function(){a&&0===n.length&&e((0,r.NX)())}),[e,a,n.length]),{lastCompiles:n,fetchLastCompileStatus:o}}},14183:function(e){e.exports={container:"ActionsCard_container__SbJnf",actionContainer:"ActionsCard_actionContainer__luMjm"}},68607:function(e){e.exports={heatmapContainer:"ActivityHeatmap_heatmapContainer__T2TvH",innerHeatmapContainer:"ActivityHeatmap_innerHeatmapContainer__iR09H",infoIcon:"ActivityHeatmap_infoIcon__D1OKT",infoIconContainer:"ActivityHeatmap_infoIconContainer__gQLsF"}},25820:function(e){e.exports={container:"Badges_container__QsTWZ"}},78786:function(e){e.exports={courseTitle:"CourseProgress_courseTitle__Qh0rz",certificateDisabled:"CourseProgress_certificateDisabled__iFiEr",certificate:"CourseProgress_certificate__9kvrc",certificateDisabledContainer:"CourseProgress_certificateDisabledContainer__jk5bb",certificateTooltip:"CourseProgress_certificateTooltip__AmDNv",topbarButton:"CourseProgress_topbarButton__CRPqX",topbarButtonSelected:"CourseProgress_topbarButtonSelected__DlsHa",topbarDivider:"CourseProgress_topbarDivider__h7iSE"}},15452:function(e){e.exports={container:"ProfileCard_container__Q1G_K",socialIcon:"ProfileCard_socialIcon__jam18",imageContainer:"ProfileCard_imageContainer__eKy6e",scoreContainer:"ProfileCard_scoreContainer__nb_iO",streakContainer:"ProfileCard_streakContainer__yRtfb",notActiveStreak:"ProfileCard_notActiveStreak__wN3e_",proTag:"ProfileCard_proTag__h48Jt",publicProfile:"ProfileCard_publicProfile__sCl7r"}},13728:function(e){e.exports={container:"ProgressLayout_container__emROG"}},13254:function(e){e.exports={container:"ProgressSection_container__iJAtV",learningRemindersContainer:"ProgressSection_learningRemindersContainer__ALBA_"}},5410:function(e){e.exports={codeViewContainer:"ProjectsShowcase_codeViewContainer__d0boT",codeViewTooltip:"ProjectsShowcase_codeViewTooltip__uNvN4"}},4731:function(e){e.exports={container:"Profile_container__YZwcN",sideContainer:"Profile_sideContainer__zaUlb"}}}]);
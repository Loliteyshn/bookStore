(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1335],{51335:function(e,r,n){"use strict";var o=n(85893),s=n(67294),t=n(12975),i=n.n(t),a=n(21432),l=n(41664),u=n(28286),c=n(26613),d=n(60831),v=n(12458),m=n(42708),f=n(70687),C=n(34682),h=n(25617),g=n(80027);function _(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,o=new Array(r);n<r;n++)o[n]=e[n];return o}function p(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,s,t=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(t.push(o.value),!r||t.length!==r);i=!0);}catch(l){a=!0,s=l}finally{try{i||null==n.return||n.return()}finally{if(a)throw s}}return t}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return _(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var x=function(e){var r=e.path,n=e.title;return(0,o.jsxs)("div",{className:i().tagContainer,children:[(0,o.jsx)("img",{src:r,alt:"",style:{width:"24px",height:"24px"}}),(0,o.jsx)("p",{className:i().tag,children:n})]})},j=function(e){var r=e.id,n=e.title,t=e.img,l=e.maxProgress,u=void 0===l?0:l,d=e.showSaveForLater,v=void 0!==d&&d,m=e.number,f=(0,h.I0)(),_=(0,h.v9)((function(e){var n;return void 0!==(null===(n=e.userProgress.progressSummary)||void 0===n?void 0:n.courses)?e.userProgress.progressSummary.courses[r]:void 0})),p=(0,s.useState)(!1),x=p[0],j=p[1],N=(0,s.useState)(!1),y=N[0],b=N[1],S=(0,h.v9)((function(e){return e.user.isLogged}));return(0,o.jsxs)("div",{className:i().courseImgContainer,children:[(0,o.jsx)(c.Fu,{className:i().courseImg,show:!x}),(0,o.jsx)("img",{src:t,alt:n+" logo",className:i().courseImg,onLoad:function(){return j(!0)},style:x?{display:"block"}:{display:"none"}}),0===u||void 0==_||0===_.lessonsDone?null:(0,o.jsx)("div",{className:i().courseProgressBar,children:(0,o.jsx)(C.Z,{progress:_.lessonsDone,maxProgress:u})}),v&&S&&(void 0===_||0===_.lessonsDone&&!_.started)?(0,o.jsxs)("div",{className:i().courseSaveForLaterContainer,onClick:function(e){e.stopPropagation(),e.preventDefault(),void 0!==_&&0===(null===_||void 0===_?void 0:_.lessonsDone)||y||(b(!0),f((0,g.Ev)(r)))},children:[(0,o.jsx)("img",{src:"/icons/".concat(0===(null===_||void 0===_?void 0:_.lessonsDone)||y?"mark":"bookmark","-white.svg"),alt:"bookmark",width:20,height:20}),(0,o.jsx)(a.ZP,{text:0===(null===_||void 0===_?void 0:_.lessonsDone)||y?"Saved":"Save for later",dark:!0})]}):null,m>0?(0,o.jsx)("div",{className:i().courseNumberContainer,children:(0,o.jsx)("p",{className:i().courseNumber,children:m})}):null]})};r.Z=function(e){var r,n,t,c,C,h,g,_,N,y=e.courses,b=e.onFetchMore,S=e.canFetch,L=e.maxCourses,P=void 0===L?Number.MAX_VALUE:L,I=e.showProgress,w=void 0!==I&&I,k=e.showNumbers,B=void 0!==k&&k,Z=e.noPaddingLeft,D=void 0!==Z&&Z,M=e.hideSaveLater,E=void 0!==M&&M,A=e.containerClassName,F=void 0===A?null:A,T=(0,d.Z)().width,W=(0,s.useRef)(),z=p((0,m.YD)(),3),J=z[0],Y=z[1],G=z[2],O=p((0,m.YD)(),3),U=O[0],V=O[1],X=(O[2],(0,s.useState)(0)),Q=X[0],H=X[1],K=(0,s.useState)(!1),R=K[0],$=K[1],q=(0,s.useState)(0),ee=q[0],re=q[1],ne=(0,s.useState)(!0),oe=ne[0],se=ne[1],te=(0,s.useState)(!1),ie=te[0],ae=te[1],le=function(e){return e>1520?320:e<=1520&&e>970?288:e<=970&&e>600?272:e<=660&&e>400?224:e<=400?192:void 0},ue=(null!==(g=null===W||void 0===W||null===(r=W.current)||void 0===r?void 0:r.scrollWidth)&&void 0!==g?g:0)-(null!==(_=null===W||void 0===W||null===(n=W.current)||void 0===n?void 0:n.scrollLeft)&&void 0!==_?_:0)==(null!==(N=null===W||void 0===W||null===(t=W.current)||void 0===t?void 0:t.clientWidth)&&void 0!==N?N:0),ce=(0,s.useCallback)((function(){return Math.floor(T/(le(T)+32))+1}),[T]);(0,s.useEffect)((function(){oe&&T&&S&&(se(!1),b(ce()))}),[oe,b,T,ce,S]),(0,s.useEffect)((function(){T&&!oe&&H(ce()-1)}),[T,oe,ce]);(0,s.useEffect)((function(){void 0!==G&&y.length>ce()&&ie&&(W.current.scrollLeft+=Math.ceil(ce())*(le(T)+32),ae(!1))}),[y]);var de,ve,me,fe=function(e){return e===y.length-1?J:0===e?U:null},Ce=T>600&&R&&y.length>0&&(!V||0!==(null!==(de=null===W||void 0===W||null===(c=W.current)||void 0===c?void 0:c.scrollLeft)&&void 0!==de?de:0))&&1!==y.length,he=T<=600&&(y.length<P||!ue)||R&&y.length>0&&(y.length<P||!ue),ge=T<=600||(null!==(ve=null===W||void 0===W||null===(C=W.current)||void 0===C?void 0:C.scrollLeft)&&void 0!==ve?ve:0)+T-ee<le(T)+64&&he||(null!==(me=null===W||void 0===W||null===(h=W.current)||void 0===h?void 0:h.scrollLeft)&&void 0!==me?me:0)>=ee&&Ce;return(0,o.jsxs)("div",{className:[i().coursesContainer,D?i().noPaddingLeft:null,F].join(" "),ref:W,onMouseEnter:function(){return $(!0)},onMouseLeave:function(){return $(!1)},children:[(0,o.jsx)(v.Z,{style:{visibility:Ce?"visible":"hidden",left:"0"},onClick:function(){W.current.scrollLeft-=Math.ceil(ce()/2)*(le(T)+32)},className:i().nextButton,children:(0,o.jsx)("img",{src:"/icons/left-white.svg",alt:"show next",className:[i().navButton,i().next].join(" ")})}),0===y.length?Array.from(Array(Math.min(10,P)),(function(e,r){return(0,o.jsx)("div",{className:i().cardContainer,children:(0,o.jsx)(j,{title:"loading"})},r)})):y.map((function(e,r){var n;return(0,o.jsx)(l.default,{href:"/courses/".concat(e.id),children:(0,o.jsx)("a",{children:(0,o.jsxs)("div",{className:i().cardContainer,ref:fe(r),onMouseMove:function(e){return re(e.currentTarget.offsetLeft)},children:[(0,o.jsx)(j,{img:e.img,title:e.title,maxProgress:w?e.lessonsNum:0,number:B?r+1:-1,id:e.id}),(0,o.jsx)(a.ZP,{text:e.title,type:"bigNormal",className:i().courseTitle}),(0,o.jsx)(u.Z,{creators:e.creators}),(0,o.jsxs)("div",{className:i().popupCardContainer,style:ge?{visibility:"hidden"}:{},children:[(0,o.jsx)(j,{img:e.img,title:e.title,maxProgress:e.lessonsNum,id:e.id,showSaveForLater:!E}),(0,o.jsxs)("div",{className:i().popupCardInfoContainer,children:[(0,o.jsx)(a.ZP,{text:e.title,type:"bigNormal"}),(0,o.jsxs)("div",{className:i().popupCardInnerInfoContainer,children:[(0,o.jsx)(f.Z,{creators:e.creators,imageSize:32}),(null===e||void 0===e||null===(n=e.additionalProperties)||void 0===n?void 0:n.noCertification)?null:(0,o.jsx)(a.oP,{})]}),(0,o.jsx)(a.ZP,{text:e.description,type:"normal",className:i().courseDesc}),(0,o.jsxs)("div",{className:i().tagsContainer,children:[(0,o.jsx)(x,{path:"/icons/lesson-small.svg",title:e.lessonsNum+" Lessons"}),(0,o.jsx)(x,{path:"/icons/challenge-small.svg",title:e.challengesNum+" Challenges"})]})]})]})]})})},r)})),(0,o.jsx)(v.Z,{style:{visibility:he?"visible":"hidden",right:"0"},onClick:function(){y.length>=P?ue||(W.current.scrollLeft+=Math.ceil(ce()/2)*(le(T)+32)):Y?(b(Q),ae(!0)):W.current.scrollLeft+=Math.ceil(ce()/2)*(le(T)+32)},className:i().nextButton,children:(0,o.jsx)("img",{src:"/icons/right-white.svg",alt:"show next",className:[i().navButton,i().next].join(" ")})})]})}},28286:function(e,r,n){"use strict";var o=n(85893),s=n(67294),t=n(61942),i=n.n(t),a=n(21432),l=n(25617),u=n(69487),c=s.memo((function(e){var r,n=e.creators,t=(0,l.I0)(),c=(0,l.v9)((function(e){return null!==(r=e.courses.creators[(null===n||void 0===n?void 0:n.length)>=1?n[0]:0])&&void 0!==r?r:{}})),d=(0,l.v9)((function(e){return e.courses.fetchCreatorStatus}));if((0,s.useEffect)((function(){1===(null===n||void 0===n?void 0:n.length)&&void 0===d[n[0]]&&t((0,u.tt)(n[0]))}),[n,c,t,d]),null===c)return null;var v="Anonymous";return"normal"===c.creatorVisibility?v=c.displayName:"coddy"===c.creatorVisibility&&(v="Coddy Team"),(0,o.jsx)(a.ZP,{text:v,type:"small",colorType:"secondary",className:i().name})}));r.Z=c},12975:function(e){e.exports={cardContainer:"CoursesCarousel_cardContainer__53z_G",popupCardContainer:"CoursesCarousel_popupCardContainer__xFhxb",popupCardInfoContainer:"CoursesCarousel_popupCardInfoContainer__IuXwj",courseImg:"CoursesCarousel_courseImg___zhgj",courseImgContainer:"CoursesCarousel_courseImgContainer__mmkxd",courseProgressBar:"CoursesCarousel_courseProgressBar__1Z1WB",courseTitle:"CoursesCarousel_courseTitle__64BJg",courseDesc:"CoursesCarousel_courseDesc__Gydb0",coursesContainer:"CoursesCarousel_coursesContainer__ia8nN",noPaddingLeft:"CoursesCarousel_noPaddingLeft__OmcEi",navButton:"CoursesCarousel_navButton__3jYfj",nextButton:"CoursesCarousel_nextButton__7PBUk",disabled:"CoursesCarousel_disabled__D4v4w",tagContainer:"CoursesCarousel_tagContainer__L__XW",tag:"CoursesCarousel_tag__Qt6EY",tagsContainer:"CoursesCarousel_tagsContainer__zh_JK",courseSaveForLaterContainer:"CoursesCarousel_courseSaveForLaterContainer__70SSW",courseNumberContainer:"CoursesCarousel_courseNumberContainer__NWH6v",courseNumber:"CoursesCarousel_courseNumber__QkJJ_",popupCardInnerInfoContainer:"CoursesCarousel_popupCardInnerInfoContainer__Won9m"}},61942:function(e){e.exports={name:"CreatorName_name__GvNSt"}}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9457],{9008:function(e,t,n){e.exports=n(5443)},67305:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Rerousel=void 0;var o=s(n(67294)),a=n(33806).style({display:"flex",alignItems:"center",overflowX:"scroll",height:"100%",scrollSnapType:"x mandatory","-webkit-overflow-scrolling":"touch",flexFlow:"row nowrap","-ms-overflow-style":"none",scrollbarWidth:"none",$nest:{"& > *":{boxSizing:"border-box",flexShrink:0},"&::-webkit-scrollbar":{display:"none"}}});t.Rerousel=function(e){var t=e.children,n=e.itemRef,r=e.interval,i=void 0===r?3e3:r,s=e.stop,u=void 0!==s&&s,c=function(e){var t=o.useState(0),n=t[0],r=t[1],i=o.useCallback((function(){if(e&&e.current){var t=e.current.getBoundingClientRect().width;r(t)}}),[e]),s=o.useCallback((function(){if(e&&e.current){var t=e.current.getBoundingClientRect().width;t=(t=t-parseInt(window.getComputedStyle(e.current).getPropertyValue("border-left-width"))-parseInt(window.getComputedStyle(e.current).getPropertyValue("border-right-width")))-parseInt(window.getComputedStyle(e.current).getPropertyValue("padding-left"))-parseInt(window.getComputedStyle(e.current).getPropertyValue("padding-right")),r(t)}}),[e]);return o.useEffect((function(){return s(),window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}}),[i]),[n]}(n)[0],l=o.useState()[1],h=o.useState(0),f=h[0],d=h[1],g=o.useRef(null),y=o.Children.count(t);return o.useEffect((function(){var e,t;if(0===f)return null===(e=g.current)||void 0===e||e.scrollTo({left:0}),void d(1);f>y?d(0):void 0!=c&&(null===(t=g.current)||void 0===t||t.scrollTo({left:c*f,behavior:"smooth"}))}),[f,c]),o.useEffect((function(){if(!u){var e=setInterval((function(){d((function(e){return e+1}))}),i);l(e)}return function(){l((function(e){e&&clearInterval(e)}))}}),[c,i,u]),o.default.createElement("div",{className:a,ref:g},t,t)}},33806:function(e,t,n){"use strict";n.r(t),n.d(t,{TypeStyle:function(){return R},classes:function(){return b},createTypeStyle:function(){return H},cssRaw:function(){return T},cssRule:function(){return A},extend:function(){return $},fontFace:function(){return N},forceRenderStyles:function(){return F},getStyles:function(){return U},keyframes:function(){return q},media:function(){return x},reinit:function(){return E},setStylesTarget:function(){return O},style:function(){return P},stylesheet:function(){return z},types:function(){return I}});let r=0;const i=Object.create(null),s=["animation-iteration-count","border-image-outset","border-image-slice","border-image-width","box-flex","box-flex-group","box-ordinal-group","column-count","columns","counter-increment","counter-reset","flex","flex-grow","flex-positive","flex-shrink","flex-negative","flex-order","font-weight","grid-area","grid-column","grid-column-end","grid-column-span","grid-column-start","grid-row","grid-row-end","grid-row-span","grid-row-start","line-clamp","line-height","opacity","order","orphans","tab-size","widows","z-index","zoom","fill-opacity","flood-opacity","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-miterlimit","stroke-opacity","stroke-width"];for(const G of s)for(const e of["-webkit-","-ms-","-moz-","-o-",""])i[e+G]=!0;function o(e,t){return t&&"number"===typeof t&&!i[e]?`${e}:${t}px`:`${e}:${t}`}function a(e){return e.sort(((e,t)=>e[0]>t[0]?1:-1))}function u(e){return e.map((([e,t])=>Array.isArray(t)?t.map((t=>o(e,t))).join(";"):o(e,t))).join(";")}function c(e,t){return-1===e.indexOf("&")?`${t} ${e}`:e.replace(/&/g,t)}function l(e,t,n,r,i){const{style:s,nested:o,isUnique:h}=function(e,t){const n=[],r=[];for(const s of Object.keys(e)){const t=s.trim(),o=e[s];36!==t.charCodeAt(0)&&null!=o&&("object"!==typeof o||Array.isArray(o)?n.push([(i=t,i.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`)).replace(/^ms-/,"-ms-")),o]):r.push([t,o]))}var i;return{style:u(a(n)),nested:t?r:a(r),isUnique:!!e.$unique}}(t,""!==e);let f=s;if(64===e.charCodeAt(0)){const t={selector:e,styles:[],rules:[],style:i?"":s};n.push(t),s&&i&&t.styles.push({selector:i,style:s,isUnique:h});for(const[e,n]of o)f+=e+l(e,n,t.rules,t.styles,i)}else{const t=i?c(e,i):e;s&&r.push({selector:t,style:s,isUnique:h});for(const[e,i]of o)f+=e+l(e,i,n,r,t)}return f}function h(e,t,n,i,s,o){for(const{selector:a,style:u,isUnique:l}of i){const n=o?c(a,s):a,i=l?`u\0${(++r).toString(36)}`:`s\0${t}\0${u}`,h=new p(u,i);h.add(new y(n,`k\0${t}\0${n}`)),e.add(h)}for(const{selector:r,style:a,rules:u,styles:c}of n){const n=new m(r,a,`r\0${t}\0${r}\0${a}`);h(n,t,u,c,s,o),e.add(n)}}function f(e){let t="";for(let n=0;n<e.length;n++)t+=e[n];return t}const d={add:()=>{},change:()=>{},remove:()=>{}};class g{constructor(e=d){this.changes=e,this.sheet=[],this.changeId=0,this._keys=[],this._children=Object.create(null),this._counters=Object.create(null)}add(e){const t=this._counters[e.id]||0,n=this._children[e.id]||e.clone();if(this._counters[e.id]=t+1,0===t)this._children[n.id]=n,this._keys.push(n.id),this.sheet.push(n.getStyles()),this.changeId++,this.changes.add(n,this._keys.length-1);else if(n instanceof g&&e instanceof g){const t=this._keys.indexOf(e.id),r=n.changeId;n.merge(e),n.changeId!==r&&(this.sheet.splice(t,1,n.getStyles()),this.changeId++,this.changes.change(n,t,t))}}remove(e){const t=this._counters[e.id];if(t){this._counters[e.id]=t-1;const n=this._children[e.id],r=this._keys.indexOf(n.id);if(1===t)delete this._counters[e.id],delete this._children[e.id],this._keys.splice(r,1),this.sheet.splice(r,1),this.changeId++,this.changes.remove(n,r);else if(n instanceof g&&e instanceof g){const t=n.changeId;n.unmerge(e),n.changeId!==t&&(this.sheet.splice(r,1,n.getStyles()),this.changeId++,this.changes.change(n,r,r))}}}values(){return this._keys.map((e=>this._children[e]))}merge(e){for(const t of e.values())this.add(t);return this}unmerge(e){for(const t of e.values())this.remove(t);return this}clone(){return(new g).merge(this)}}class y{constructor(e,t){this.selector=e,this.id=t}getStyles(){return this.selector}clone(){return this}}class p extends g{constructor(e,t){super(),this.style=e,this.id=t}getStyles(){return`${this.sheet.join(",")}{${this.style}}`}clone(){return new p(this.style,this.id).merge(this)}}class m extends g{constructor(e,t,n){super(),this.rule=e,this.style=t,this.id=n}getStyles(){return`${this.rule}{${this.style}${f(this.sheet)}}`}clone(){return new m(this.rule,this.style,this.id).merge(this)}}function v(e,t){const n=`f${function(e){let t=5381,n=e.length;for(;n--;)t=33*t^e.charCodeAt(n);return(t>>>0).toString(36)}(e)}`;return n}class _ extends g{constructor(e,t){super(t),this.id=e}registerStyle(e){const t=[],n=[],r=l("&",e,t,n),i=v(r);return h(this,r,t,n,`.${i}`,!0),i}registerKeyframes(e){return this.registerHashRule("@keyframes",e)}registerHashRule(e,t){const n=[],r=[],i=l("",t,n,r),s=v(i),o=new m(`${e} ${s}`,"",`h\0${i}\0${e}`);return h(o,i,n,r,"",!1),this.add(o),s}registerRule(e,t){const n=[],r=[];h(this,l(e,t,n,r),n,r,"",!1)}registerCss(e){return this.registerRule("",e)}getStyles(){return f(this.sheet)}clone(){return new _(this.id,this.changes).merge(this)}}function w(e){var t={};for(var n in e){var r=e[n];if("$nest"===n){var i=r;for(var s in i){var o=i[s];t[s]=w(o)}}else"$debugName"===n?t.$displayName=r:t[n]=r}return t}var S="undefined"===typeof requestAnimationFrame?function(e){return setTimeout(e)}:"undefined"===typeof window?requestAnimationFrame:requestAnimationFrame.bind(window);function b(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.map((function(e){return e&&"object"===typeof e?Object.keys(e).map((function(t){return!!e[t]&&t})):[e]})).reduce((function(e,t){return e.concat(t)}),[]).filter((function(e){return!!e})).join(" ")}function $(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n={},r=0,i=e;r<i.length;r++){var s=i[r];if(null!=s&&!1!==s)for(var o in s){var a=s[o];(a||0===a)&&("$nest"===o&&a?n[o]=n.$nest?$(n.$nest,a):a:-1!==o.indexOf("&")||0===o.indexOf("@media")?n[o]=n[o]?$(n[o],a):a:n[o]=a)}}return n}var x=function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=[];e.type&&i.push(e.type),e.orientation&&i.push("(orientation: "+e.orientation+")"),e.minWidth&&i.push("(min-width: "+C(e.minWidth)+")"),e.maxWidth&&i.push("(max-width: "+C(e.maxWidth)+")"),e.minHeight&&i.push("(min-height: "+C(e.minHeight)+")"),e.maxHeight&&i.push("(max-height: "+C(e.maxHeight)+")"),e.prefersColorScheme&&i.push("(prefers-color-scheme: "+e.prefersColorScheme+")");var s="@media "+i.join(" and "),o={$nest:(t={},t[s]=$.apply(void 0,n),t)};return o},C=function(e){return"string"===typeof e?e:e+"px"},k=function(){return new _(`f${(++r).toString(36)}`,e);var e},R=function(){function e(e){var t=this,n=e.autoGenerateTag;this.cssRaw=function(e){e&&(t._raw+=e||"",t._pendingRawChange=!0,t._styleUpdated())},this.cssRule=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=w($.apply(void 0,n));t._freeStyle.registerRule(e,i),t._styleUpdated()},this.forceRenderStyles=function(){var e=t._getTag();e&&(e.textContent=t.getStyles())},this.fontFace=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];for(var r=t._freeStyle,i=0,s=e;i<s.length;i++){var o=s[i];r.registerRule("@font-face",o)}t._styleUpdated()},this.getStyles=function(){return(t._raw||"")+t._freeStyle.getStyles()},this.keyframes=function(e){var n=function(e){var t={};for(var n in e)"$debugName"!==n&&(t[n]=e[n]);return e.$debugName&&(t.$displayName=e.$debugName),t}(e),r=t._freeStyle.registerKeyframes(n);return t._styleUpdated(),r},this.reinit=function(){var e=k();t._freeStyle=e,t._lastFreeStyleChangeId=e.changeId,t._raw="",t._pendingRawChange=!1;var n=t._getTag();n&&(n.textContent="")},this.setStylesTarget=function(e){t._tag&&(t._tag.textContent=""),t._tag=e,t.forceRenderStyles()},this.stylesheet=function(e){for(var n={},r=0,i=Object.getOwnPropertyNames(e);r<i.length;r++){var s=i[r],o=e[s];o&&(o.$debugName=s,n[s]=t.style(o))}return n};var r=k();this._autoGenerateTag=n,this._freeStyle=r,this._lastFreeStyleChangeId=r.changeId,this._pending=0,this._pendingRawChange=!1,this._raw="",this._tag=void 0,this.style=this.style.bind(this)}return e.prototype._afterAllSync=function(e){var t=this;this._pending++;var n=this._pending;S((function(){n===t._pending&&e()}))},e.prototype._getTag=function(){if(this._tag)return this._tag;if(this._autoGenerateTag){var e="undefined"===typeof window?{textContent:""}:document.createElement("style");return"undefined"!==typeof document&&document.head.appendChild(e),this._tag=e,e}},e.prototype._styleUpdated=function(){var e=this,t=this._freeStyle.changeId,n=this._lastFreeStyleChangeId;(this._pendingRawChange||t!==n)&&(this._lastFreeStyleChangeId=t,this._pendingRawChange=!1,this._afterAllSync((function(){return e.forceRenderStyles()})))},e.prototype.style=function(){var e=this._freeStyle.registerStyle(w($.apply(void 0,arguments)));return this._styleUpdated(),e},e}(),I=n(92131),j=new R({autoGenerateTag:!0}),O=j.setStylesTarget,T=j.cssRaw,A=j.cssRule,F=j.forceRenderStyles,N=j.fontFace,U=j.getStyles,q=j.keyframes,E=j.reinit,P=j.style,z=j.stylesheet;function H(e){var t=new R({autoGenerateTag:!1});return e&&t.setStylesTarget(e),t}},92131:function(){}}]);
webpackJsonp([3,4,5],{"+MLA":function(e,n,t){var r=t("EqjI"),i=t("06OY").onFreeze;t("uqUo")("freeze",function(e){return function(n){return e&&r(n)?e(i(n)):n}})},"/Vir":function(e,n,t){"use strict";var r=t("jayD"),i=t("2aVk"),a=!1;var o=function(e){a||t("tkdj")},s=t("VU/8")(r.a,i.a,!1,o,null,null);s.options.__file="node_modules/vue-spinner/src/ScaleLoader.vue",n.a=s.exports},"2R8v":function(e,n,t){"use strict";n.__esModule=!0;var r=a(t("HSQo")),i=a(t("u2KI"));function a(e){return e&&e.__esModule?e:{default:e}}n.default=function(e,n){return(0,i.default)((0,r.default)(e,{raw:{value:(0,i.default)(n)}}))}},"2UHX":function(e,n,t){"use strict";var r=t("Dd8w"),i=t.n(r),a=t("NYxO"),o=t("NnFb"),s=t("VoZC"),l=t("o6Uq"),c=t("UafY"),u=t("3UqJ");n.a={name:"SongPage",components:{SongPlayer:o.a,PageTitle:s.a,Wrap:l.default,InnerWrap:c.default,Spinner:u.a},methods:i()({forceUpdate:function(){}},Object(a.mapActions)(["toggleSong","previousSong","nextSong","play","pause"])),computed:i()({},Object(a.mapGetters)({selectedSong:"getSelectedSong",isLoading:"getIsLoading",url:"getUrl",isPlaying:"getIsPlaying"}))}},"2aVk":function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"v-spinner"},[t("div",{staticClass:"v-scale v-scale1",style:[e.spinnerStyle,e.spinnerDelay1]}),t("div",{staticClass:"v-scale v-scale2",style:[e.spinnerStyle,e.spinnerDelay2]}),t("div",{staticClass:"v-scale v-scale3",style:[e.spinnerStyle,e.spinnerDelay3]}),t("div",{staticClass:"v-scale v-scale4",style:[e.spinnerStyle,e.spinnerDelay4]}),t("div",{staticClass:"v-scale v-scale5",style:[e.spinnerStyle,e.spinnerDelay5]})])};r._withStripped=!0;var i={render:r,staticRenderFns:[]};n.a=i},"3UqJ":function(e,n,t){"use strict";var r=t("JtgL"),i=t("R2RG"),a=t("VU/8")(r.a,i.a,!1,null,null,null);a.options.__file="components/Spinner/index.vue",n.a=a.exports},"3b02":function(e,n,t){"use strict";var r=t("2R8v"),i=t.n(r),a=t("XI+s"),o=i()(["\n  position: relative;\n"],["\n  position: relative;\n"]),s=a.b.div(o);n.a=s},"56xz":function(e,n,t){"use strict";var r=t("2R8v"),i=t.n(r),a=t("XI+s"),o=(t("OUZk"),i()(["\n  padding: 1em 0;\n  article {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n\n    img {\n      max-height: 60vh;\n      max-width: 100%;\n    }\n  }\n"],["\n  padding: 1em 0;\n  article {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n\n    img {\n      max-height: 60vh;\n      max-width: 100%;\n    }\n  }\n"])),s=a.b.div(o);n.a=s},"5zde":function(e,n,t){t("zQR9"),t("qyJz"),e.exports=t("FeBl").Array.from},"73+1":function(e,n,t){"use strict";n.a=function(e){return Object(a.a)(s,Object(o.a)(e,"background-color"))},n.b=function(e){return Object(a.a)(l,Object(o.a)(e.map(function(e){return Object(o.b)(e)}),"transform"))};var r=t("2R8v"),i=t.n(r),a=t("XI+s"),o=t("bQJd"),s=i()(["\n    @keyframes changeColor {\n      ",";\n    }\n  "],["\n    @keyframes changeColor {\n      ",";\n    }\n  "]),l=i()(["\n    @keyframes pulse {\n      ",";\n    }\n  "],["\n    @keyframes pulse {\n      ",";\n    }\n  "])},"9r8n":function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Wrap",[t("AnimatedBackground",{attrs:{isActive:e.isPlaying}}),t("SongWrap",[t("article",[t("ImageWrap",{directives:[{name:"touch",rawName:"v-touch:swipe.right",value:e.previousSong,expression:"previousSong",arg:"swipe",modifiers:{right:!0}},{name:"touch",rawName:"v-touch:swipe.left",value:e.nextSong,expression:"nextSong",arg:"swipe",modifiers:{left:!0}}],nativeOn:{click:function(n){e.toggleSong(n)}}},[t("ToggleSongOverlayControl",{attrs:{isPlaying:e.isPlaying}}),t("AnimatedImage",{attrs:{src:e.song.cover,isActive:e.isPlaying},on:{load:e.forceUpdate}})],1),t("PaddingWrap",[t("p",[e._v(" "+e._s(e.song.artist)+" ")]),t("p",[e._v(" "+e._s(e.song.title)+" ")])])],1)])],1)};r._withStripped=!0;var i={render:r,staticRenderFns:[]};n.a=i},"9rOI":function(e,n,t){"use strict";var r=t("2R8v"),i=t.n(r),a=t("XI+s"),o=(t("OUZk"),t("egV+"),i()(['\n  cursor: pointer;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  z-index: 2;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  &:before {\n    content: "";\n    position: absolute;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    background-image: url(svgs/song/',".svg);\n    background-size: 20%;\n    background-position: center;\n    background-repeat: no-repeat;\n    transition: opacity 0.3s;\n    opacity: 1;\n  }\n"],['\n  cursor: pointer;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  z-index: 2;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  &:before {\n    content: "";\n    position: absolute;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    background-image: url(svgs/song/',".svg);\n    background-size: 20%;\n    background-position: center;\n    background-repeat: no-repeat;\n    transition: opacity 0.3s;\n    opacity: 1;\n  }\n"])),s={isPlaying:Boolean},l=Object(a.b)("a",s)(o,function(e){return e.isPlaying?"pause":"play"});n.a=l},"9zjr":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("2UHX"),i=t("gAyF"),a=t("VU/8")(r.a,i.a,!1,null,null,null);a.options.__file="pages/song/index.vue",n.default=a.exports},CJli:function(e,n,t){t("pRCB");var r=t("FeBl").Object;e.exports=function(e,n){return r.defineProperties(e,n)}},CqIM:function(e,n,t){"use strict";var r=t("2R8v"),i=t.n(r),a=t("XI+s"),o=i()(["\n  height: 100vh;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n"],["\n  height: 100vh;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n"]);n.a=a.b.div(o)},DE6e:function(e,n,t){"use strict";var r=t("2R8v"),i=t.n(r),a=t("XI+s"),o=(t("OUZk"),i()(["\n  iframe {\n    position: absolute;\n    opacity: 0;\n    left: -1000em;\n  }\n"],["\n  iframe {\n    position: absolute;\n    opacity: 0;\n    left: -1000em;\n  }\n"])),s=a.b.div(o);n.a=s},EAO1:function(e,n,t){"use strict";var r=t("M7of");n.a={name:"PageTitle",components:{Wrap:r.a}}},Gu7T:function(e,n,t){"use strict";n.__esModule=!0;var r,i=t("c/Tr"),a=(r=i)&&r.__esModule?r:{default:r};n.default=function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return(0,a.default)(e)}},HSQo:function(e,n,t){e.exports={default:t("CJli"),__esModule:!0}},JtgL:function(e,n,t){"use strict";var r=t("/Vir"),i=t("CqIM");n.a={components:{ScaleLoader:r.a,Wrap:i.a}}},KCKv:function(e,n,t){"use strict";var r=t("l9tc"),i=t("yewy"),a=t("9rOI"),o=(t("OUZk"),t("DE6e")),s=t("56xz"),l=t("rFwh"),c=t("3b02");n.a={name:"SongPlayer",props:{song:{type:Object,required:!0},isPlaying:{type:Boolean,default:!1},toggleSong:{type:Function,required:!0},forceUpdate:{type:Function,required:!0},nextSong:{type:Function,required:!0},previousSong:{type:Function,required:!0}},components:{AnimatedBackground:i.a,Wrap:o.a,SongWrap:s.a,PaddingWrap:l.a,AnimatedImage:r.a,ToggleSongOverlayControl:a.a,ImageWrap:c.a}}},M7of:function(e,n,t){"use strict";var r=t("2R8v"),i=t.n(r),a=t("XI+s"),o=t("OUZk"),s=t("egV+"),l=i()(['\n  display: flex;\n  justify-content: center;\n  padding: 1em 0;\n  position: relative;\n  z-index: 2;\n  a {\n    color: transparent;\n  }\n\n  h1 {\n    font-family: "Quicksand", "Source Sans Pro", -apple-system,\n      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,\n      sans-serif;\n    display: block;\n    font-weight: 300;\n    color: ',";\n    letter-spacing: 1px;\n    ",";\n    ",";\n  }\n"],['\n  display: flex;\n  justify-content: center;\n  padding: 1em 0;\n  position: relative;\n  z-index: 2;\n  a {\n    color: transparent;\n  }\n\n  h1 {\n    font-family: "Quicksand", "Source Sans Pro", -apple-system,\n      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,\n      sans-serif;\n    display: block;\n    font-weight: 300;\n    color: ',";\n    letter-spacing: 1px;\n    ",";\n    ",";\n  }\n"]),c=i()(["\n      font-size: 5rem;\n    "],["\n      font-size: 5rem;\n    "]),u=i()(["\n      font-size: 7rem;\n    "],["\n      font-size: 7rem;\n    "]),d=a.b.div(l,o.a.almostBlack,s.a.phone(c),s.a.tablet(u));n.a=d},NnFb:function(e,n,t){"use strict";var r=t("KCKv"),i=t("9r8n"),a=t("VU/8")(r.a,i.a,!1,null,null,null);a.options.__file="components/SongPlayer/index.vue",n.a=a.exports},O4R0:function(e,n,t){t("+MLA"),e.exports=t("FeBl").Object.freeze},OUZk:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var r={primary:"#549594",secondary:"#9DBCAD",tertiary:"#F8E5A3",link:"#D1B47A",almostBlack:"#040F0F",white:"#fff",black:"#000",neutral:"#F2F2F2",aquaMarine:"#449DD1",orange:"#FB4D3D",pana:"#EAC435",fucsia:"#CA1551",turqouise:"#03CEA4"}},R2RG:function(e,n,t){"use strict";var r=function(){var e=this.$createElement,n=this._self._c||e;return n("Wrap",[n("ScaleLoader")],1)};r._withStripped=!0;var i={render:r,staticRenderFns:[]};n.a=i},ULDK:function(e,n,t){(e.exports=t("FZ+f")(!1)).push([e.i,".v-spinner{text-align:center}@-webkit-keyframes v-scaleStretchDelay{0%,to{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}}@keyframes v-scaleStretchDelay{0%,to{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}}",""])},UafY:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("2R8v"),i=t.n(r),a=t("XI+s"),o=i()(["\n  padding: 0 2em;\n  max-width: 700px;\n  margin: 0 auto;\n"],["\n  padding: 0 2em;\n  max-width: 700px;\n  margin: 0 auto;\n"]),s=a.b.div(o);n.default=s},VoZC:function(e,n,t){"use strict";var r=t("EAO1"),i=t("nEKK"),a=t("VU/8")(r.a,i.a,!1,null,null,null);a.options.__file="components/PageTitle/index.vue",n.a=a.exports},"XI+s":function(e,n,t){"use strict";(function(e){t.d(n,"a",function(){return w});var r="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),i=/([A-Z])/g;var a=function(e){return e.replace(i,"-$1").toLowerCase()},o=/^ms-/;var s=function(e){return a(e).replace(o,"-ms-")},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")},u=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),d=function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)},f="[object Object]";var p,h,g=Function.prototype,v=Object.prototype,m=g.toString,y=v.hasOwnProperty,b=m.call(Object),x=v.toString,S=(p=Object.getPrototypeOf,h=Object,function(e){return p(h(e))});var A=function(e){if(!(n=e)||"object"!=(void 0===n?"undefined":l(n))||x.call(e)!=f||function(e){var n=!1;if(null!=e&&"function"!=typeof e.toString)try{n=!!(e+"")}catch(e){}return n}(e))return!1;var n,t=S(e);if(null===t)return!0;var r=y.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&m.call(r)==b},k=function e(n,t){return n.reduce(function(n,r){return void 0===r||null===r||!1===r||""===r?n:Array.isArray(r)?[].concat(d(n),d(e(r,t))):"function"==typeof r?t?n.concat.apply(n,d(e([r(t)],t))):n.concat(r):n.concat(A(r)?function e(n,t){var r=Object.keys(n).map(function(t){return A(n[t])?e(n[t],t):s(t)+": "+n[t]+";"}).join(" ");return t?t+" {\n  "+r+"\n}":r}(r):r.toString())},[])},w=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return k((i=e,t.reduce(function(e,n,t){return e.concat(n,i[t+1])},[i[0]])));var i};function C(e){return e[e.length-1]}function j(e){for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===e)return document.styleSheets[n]}var O="undefined"!=typeof document,_=!0,R=!1,I=function(){if(O){var e=document.createElement("div");return e.innerHTML="\x3c!--[if lt IE 10]><i></i><![endif]--\x3e",1===e.getElementsByTagName("i").length}}();function D(){var e=document.createElement("style");return e.type="text/css",e.appendChild(document.createTextNode("")),(document.head||document.getElementsByTagName("head")[0]).appendChild(e),e}var F=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.speedy,r=void 0===t?!_&&!R:t,i=n.maxLength,a=void 0===i?O&&I?4e3:65e3:i;c(this,e),this.isSpeedy=r,this.sheet=void 0,this.tags=[],this.maxLength=a,this.ctr=0}return u(e,[{key:"inject",value:function(){var e=this;if(this.injected)throw new Error("already injected stylesheet!");O?(this.tags[0]=D(),this.sheet=j(this.tags[0])):this.sheet={cssRules:[],insertRule:function(n){var t={cssText:n};return e.sheet.cssRules.push(t),{serverRule:t,appendRule:function(e){return t.cssText+=e}}}},this.injected=!0}},{key:"speedy",value:function(e){if(0!==this.ctr)throw new Error("cannot change speedy mode after inserting any rule to sheet. Either call speedy("+e+") earlier in your app, or call flush() before speedy("+e+")");this.isSpeedy=!!e}},{key:"_insert",value:function(e){try{this.sheet.insertRule(e,this.sheet.cssRules.length)}catch(n){_&&console.warn("whoops, illegal rule inserted",e)}}},{key:"insert",value:function(e){var n=void 0;if(O)if(this.isSpeedy&&this.sheet.insertRule)this._insert(e);else{var t=document.createTextNode(e);C(this.tags).appendChild(t),n={textNode:t,appendRule:function(e){return t.appendData(e)}},this.isSpeedy||(this.sheet=j(C(this.tags)))}else n=this.sheet.insertRule(e);return this.ctr++,O&&this.ctr%this.maxLength==0&&(this.tags.push(D()),this.sheet=j(C(this.tags))),n}},{key:"flush",value:function(){O?(this.tags.forEach(function(e){return e.parentNode.removeChild(e)}),this.tags=[],this.sheet=null,this.ctr=0):this.sheet.cssRules=[],this.injected=!1}},{key:"rules",value:function(){if(!O)return this.sheet.cssRules;var e=[];return this.tags.forEach(function(n){return e.splice.apply(e,[e.length,0].concat(d(Array.from(j(n).cssRules))))}),e}}]),e}(),P=new(function(){function e(){c(this,e),this.globalStyleSheet=new F({speedy:!1}),this.componentStyleSheet=new F({speedy:!1,maxLength:40})}return u(e,[{key:"inject",value:function(){this.globalStyleSheet.inject(),this.componentStyleSheet.inject()}},{key:"flush",value:function(){this.globalStyleSheet.sheet&&this.globalStyleSheet.flush(),this.componentStyleSheet.sheet&&this.componentStyleSheet.flush()}},{key:"insert",value:function(e){return((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{global:!1}).global?this.globalStyleSheet:this.componentStyleSheet).insert(e)}},{key:"rules",value:function(){return this.globalStyleSheet.rules().concat(this.componentStyleSheet.rules())}},{key:"injected",get:function(){return this.globalStyleSheet.injected&&this.componentStyleSheet.injected}}]),e}());"undefined"!=typeof window?window:void 0!==e||"undefined"!=typeof self&&self;function U(e,n){return e(n={exports:{}},n.exports),n.exports}var E,M,z,B,L,q,N=U(function(e,n){var t;t=function(e){var n=[],t=/&/g,r=/ +&/,i=/,\n/g,a=/:global\(%?((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,o=/(?:&| ):global\(%?((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,s=/:host\((.*)\)/g,c=/:host-context\((.*)\)/g,u=/\n/g,d=/::place/g,f=/: +/g,p=/[ .#~+><\d]+/g,h=/ *(transform)/g,g="-moz-",v="-ms-",m="-webkit-";function y(e,S,A,k,w){var C,j,O,_,R=w,I="",D="",F=(e+="").charCodeAt(0);switch(F<33&&(F=(e=e.trim()).charCodeAt(0)),F){case 35:case 46:D=(I=e).substring(1);break;case 91:34!==(C=(D=(j=e.substring(1,e.length-1).split("="))[1]||j[0]).charCodeAt(0))&&39!==C||(D=D.substring(1,D.length-1)),I="["+j[0]+(j.length>1?'="'+D+'"]':"]");break;default:D=I=e}F=0,!0===A||void 0===A||null===A?(A=!0,O=D.replace(p,"-")):(O="",A=!1);var P,U,E,M,z,B,L,q,N,T,X,W,V,$,Y,Z,J=void 0!==R&&null!==R,K=n.length;!0===J&&(111===(_=(void 0===R?"undefined":l(R)).charCodeAt(0))?b(R):102===_?n[K++]=R:J=!1),0!==K&&(R=1===K?n[0]:x,J=!0);var Q,G="",H="",ee="",ne=0,te=0,re=0,ie=0,ae=0,oe=0,se=0,le=0,ce=0,ue=0,de=0,fe=0,pe=0,he=0,ge=0;!0===J&&(null!=(B=R(0,S,be,ye,I,0))&&(S=B),Y="");for(var ve=0,me=0,ye=0,be=1,xe=S.length,Se="";ve<xe;){if(ne=S.charCodeAt(ve),1===te&&ve===xe-1||0===le&&0===se&&0===pe&&(123===ne||125===ne||59===ne||ve===xe-1&&0!==G.length)){if(G+=S.charAt(ve),!0===J&&125!==ne&&null!=(B=123===ne?R(1,G.substring(0,G.length-1).trim(),be,ye,I,Se.length):R(2,G,be,ye,I,Se.length))&&(G=123===ne?B+" {":B),32===(N=G.charCodeAt(0))&&(N=(G=G.trim()).charCodeAt(0)),T=G.charCodeAt(1),X=G.charCodeAt(2),64===N){if(1===fe&&0!==ee.length&&(fe=0,ee=I+" {"+ee+"}",!0===J&&null!=(B=R(4,ee,be,ye,I,Se.length))&&(ee=B),Se+=ee,ee=""),59!==ne)if(107===T)V=G.substring(1,11)+O+G.substring(11),G="@"+m+V,F=1;else{if(109===T&&101===X||115===T&&117===X||103===T){for(ve++,ye++,void 0===Z&&(Z=""),E="",ae=1;ve<xe;){if(123===(C=S.charCodeAt(ve))?ae++:125===C&&ae--,0===ae){ve++;break}E+=S.charAt(ve++),ye=13===C||10===C?(be++,0):ye+1}Z+=G+y(e=0===me?I:L.substring(0,L.length-1).replace(u,"").trim(),E.trim(),A,k,null).trim()+"}",!0===J&&null!=(B=R(3,Z,be,ye,I,Se.length))&&(Z=B),G="",te=1,ve===xe&&xe++;continue}F=6}59!==ne&&105!==T&&(107!==T&&109!==T&&115!==T&&103!==T&&(F=5),ie=-1,re++)}else{if(123===ne)if(me++,1===fe&&0!==ee.length&&(fe=0,ee=I+" {"+ee+"}",!0===J&&null!=(B=R(4,ee,be,ye,I,Se.length))&&(ee=B),Se+=ee,ee=""),2===me){ve++,ye++,E="";var Ae=G.substring(0,G.length-1).split(i),ke=L.substring(0,L.length-1).split(i);for(ae=1;ve<xe&&(123===(C=S.charCodeAt(ve))?ae++:125===C&&ae--,0!==ae);)E+=S.charAt(ve++),ye=13===C||10===C?(be++,0):ye+1;K=ke.length;for(var we=0;we<K;we++){q=(B=ke[we]).indexOf(I),ke[we]="";for(var Ce=0,je=Ae.length;Ce<je;Ce++)e=q>0?":global(%)"+B.trim():B.replace(I,"&").trim(),e=(W=Ae[Ce].trim()).indexOf(" &")>0?W.replace("&","").trim()+" "+e:null!==a.exec(W)?W:e+" "+W,ke[we]+=e.replace(r,"").trim()+(Ce===je-1?"":",")}void 0===$&&($=""),$+="\n"+ke.join(",").replace(o," $1")+" {"+E+"}",oe=1,G="",me--}else if(0===re||2===F){0===ue&&-1!==G.indexOf("::place")&&(ue=1),z="",L="",K=(M=G.split(i)).length;for(we=0;we<K;we++)32===(C=(e=M[we]).charCodeAt(0))&&(C=(e=e.trim()).charCodeAt(0)),38===C?e=I+e.substring(1).replace(t,I):(q=e.indexOf(" &"))>0?e=e.replace(t,I).trim():58===C?(Q=e.charCodeAt(1),!0===k&&104===Q&&116===e.charCodeAt(4)?e=40===(Q=e.charCodeAt(5))?I+e.replace(s,"$1").replace(t,I):45===Q?e.replace(c,"$1 "+I).replace(t,I):I+e.substring(5):103!==Q||!0!==k&&37!==(Q=e.charCodeAt(8))?e=I+e:(ce=1,e=e.replace(a,"$1").replace(t,I).trim())):0===ce&&(e=I+" "+e),!0===J&&null!=(B=R(1.5,we===K-1?e.substring(0,e.length-1).trim():e,be,ye,I,Se.length))&&(e=we===K-1?B+" {":B),L+=(0!==we?",\n":"")+(1!==ce?e:":global(%)"+e),z+=0!==we?","+e:e,ce=0;G=z}else L=G;else if(!1==(125===ne&&1===G.length)){if(1===de&&(G=G.replace(u,"")),59!==ne&&(G=(125===ne?G.substring(0,G.length-1):G.trim())+";"),97===N&&110===T&&105===X){if(U=(G=G.substring(0,G.length-1)).indexOf(":")+1,z=G.substring(0,U),!0===A&&45!==G.charCodeAt(9)){var Oe=G.substring(U).trim().split(",");K=Oe.length;for(we=0;we<K;we++){var _e=Oe[we].split(" ");for(Ce=0,je=_e.length;Ce<je;Ce++){var Re=_e[Ce].trim(),Ie=Re.charCodeAt(0),De=Re.charCodeAt(2),Fe=Re.length,Pe=Re.charCodeAt(Fe-1);!(Ie>64&&Ie<90||Ie>96&&Ie<122||45===Ie||95===Ie&&95!==Re.charCodeAt(1))||41===Pe||0===Fe||105===Ie&&(102===De&&101===Pe&&8===Fe||105===De&&108===Pe&&7===Fe||104===De&&116===Pe&&7===Fe)||117===Ie&&115===De&&116===Pe&&5===Fe||108===Ie&&110===De&&114===Pe&&6===Fe||97===Ie&&116===De&&101===Pe&&(9===Fe||17===Fe)||110===Ie&&114===De&&108===Pe&&6===Fe||98===Ie&&99===De&&115===Pe&&9===Fe||102===Ie&&114===De&&115===Pe&&8===Fe||98===Ie&&116===De&&104===Pe&&4===Fe||110===Ie&&110===De&&101===Pe&&4===Fe||114===Ie&&110===De&&103===Pe&&7===Fe||112===Ie&&117===De&&100===Pe&&6===Fe||114===Ie&&118===De&&100===Pe&&8===Fe||115===Ie&&101===De&&(116===Pe&&10===Fe||100===Pe&&8===Fe)||101===Ie&&115===De&&(101===Pe&&4===Fe||(11===Fe||7===Fe||8===Fe)&&45===Re.charCodeAt(4))||!isNaN(parseFloat(Re))||-1!==Re.indexOf("(")||(_e[Ce]=O+Re)}z+=(0===we?"":",")+_e.join(" ").trim()}}else z+=(110!==G.charCodeAt(10)?"":O)+G.substring(U).trim().trim();G=m+z+";"+z+(125===ne?";}":";")}else if(97===N&&112===T&&112===X)G=m+G+g+G+G;else if(100===N&&105===T&&115===X)-1!==(q=G.indexOf("flex"))&&(B=101===G.charCodeAt(q-2)?"inline-":"",G=-1!==G.indexOf(" !important")?" !important":"",G="display: "+m+B+"box"+G+";display: "+m+B+"flex"+G+";display: "+v+"flexbox"+G+";display: "+B+"flex"+G+";");else if(116===N&&(114===T&&97===X||101===T&&120===X))G=m+G+(102===G.charCodeAt(5)?v+G:"")+G,T+X===211&&115===G.charCodeAt(12)&&G.indexOf(" transform")>-1&&(G=G.substring(0,G.indexOf(";")+1).replace(h," "+m+"$1")+G);else if(104===N&&121===T&&112===X||117===N&&115===T&&101===X)G=m+G+g+G+v+G+G;else if(102===N&&108===T&&101===X)G=m+G+v+G+G;else if(111===N&&114===T&&100===X)G=m+G+v+"flex-"+G+G;else if(97===N&&108===T&&105===X&&45===G.charCodeAt(5))switch(G.charCodeAt(6)){case 105:B=G.replace("-items",""),G=m+G+m+"box-"+B+v+"flex-"+B+G;break;case 115:G=v+"flex-item-"+G.replace("-self","")+G;break;default:G=v+"flex-line-pack"+G.replace("align-content","")+G}else 106===N&&117===T&&115===X?(U=G.indexOf(":"),B=G.substring(U).replace("flex-",""),G=m+"box-pack"+B+m+G+v+"flex-pack"+B+G):99===N&&117===T&&114===X&&null!==/zoo|gra/.exec(G)?G=G.replace(f,": "+m)+G.replace(f,": "+g)+G:119===N&&105===T&&100===X&&-1!==(q=G.indexOf("-content"))&&(B=G.substring(q-3),G="width: "+m+B+"width: "+g+B+"width: "+B);59!==ne&&(G=G.substring(0,G.length-1),125===ne&&(G+="}"))}125===ne&&(0!==me&&me--,0===me&&1===oe&&(S=S.substring(0,ve+1)+$+S.substring(ve+1),xe+=$.length,$="",oe=0,ie++),125!==N&&32===G.charCodeAt(G.length-2)&&(G=G.substring(0,G.length-1).trim()+"}")),0!==re?(125===ne?ie++:123===ne&&0!==ie&&ie--,0===ie?(1===F&&(G="}@"+V+"}",V=""),F=0,ie--,re--):1===F&&(V+=G)):0===me&&125!==ne&&(fe=1,ee=void 0===ee?G:ee+G,G="")}H+=G,125===ne&&0===F&&(123!==(C=H.charCodeAt(H.length-2))&&(!0===J&&null!=(B=R(3,H,be,ye,I,Se.length))&&(H=B),1===ue&&(ue=0,H=H.replace(d,"::"+m+"input-place")+H.replace(d,"::"+g+"place")+H.replace(d,":"+v+"input-place")+H),Se+=H),H=""),1===te&&(!0===J&&null!=(B=R(3,H,be,ye,I,Se.length))&&(Z=B),Se+=Z,te=0,Z=""),de=0,G=""}else if(13===ne||10===ne)1===ge?(pe=ge=0,G=G.substring(0,G.indexOf("//")).trim()):!0===J&&0===pe&&0!==(K=(Y=Y.trim()).length)&&47!==Y.charCodeAt(0)&&(0!==G.length&&null!=(B=R(7,Y,be,ye,I,Se.length))&&(G=G.replace(new RegExp(Y+"$"),B).trim()),Y=""),ye=0,be++;else{if(9!==ne)switch(P=S.charAt(ve),!0===J&&0===pe&&(Y+=P),G+=P,ne){case 44:0===le&&0===pe&&0===se&&(de=1,G+="\n");break;case 34:0===pe&&(le=34===le?0:39===le?39:34);break;case 39:0===pe&&(le=39===le?0:34===le?34:39);break;case 40:0===le&&0===pe&&(se=1);break;case 41:0===le&&0===pe&&(se=0);break;case 47:0===le&&0===se&&(C=S.charCodeAt(ve-1),0===he&&47===C?pe=ge=1:42===C&&(pe=he=0,G=G.substring(0,G.indexOf("/*")).trim()));break;case 42:0===le&&0===se&&0===ge&&0===he&&47===S.charCodeAt(ve-1)&&(pe=he=1)}ye++}ve++}return void 0!==ee&&0!==ee.length&&(ee=I+" {"+ee+"}",!0===J&&null!=(B=R(4,ee,be,ye,I,Se.length))&&(ee=B),Se+=ee),!0===J&&null!=(B=R(6,Se,be,ye,I,Se.length))&&(Se=B),Se}function b(e){var t=n.length;if(null!=e)if(e.constructor===Array)for(var r=0,i=e.length;r<i;r++)n[t++]=e[r];else n[t]=e;return y}function x(e,t,r,i,a,o){for(var s=t,l=0,c=n.length;l<c;l++)s=n[l](e,s,r,i,a,o)||s;if(s!==t)return s}return y.use=b,y.p=n,y.r={a:t,s:i,g:a,n:o},y},"object"===(void 0===n?"undefined":l(n))&&void 0!==e?e.exports=t():window.stylis=t(window)}),T=(function(){function e(n,t){c(this,e),this.rules=n,this.selector=t}u(e,[{key:"generateAndInject",value:function(){P.injected||P.inject();var e=k(this.rules).join(""),n=this.selector?this.selector+" { "+e+" }":e,t=N("",n,!1,!1);P.insert(t,{global:!0})}}])}(),U(function(e,n){function t(e,n){return e.charCodeAt(n++)+(e.charCodeAt(n++)<<8)}function r(e,n){return(65535&(e|=0))*(n|=0)+(((e>>>16)*n&65535)<<16)|0}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var i=1540483477,a=n^e.length,o=e.length,s=0;for(;o>=4;){var l=(u=s,(c=e).charCodeAt(u++)+(c.charCodeAt(u++)<<8)+(c.charCodeAt(u++)<<16)+(c.charCodeAt(u)<<24));l=r(l,i),l=r(l^=l>>>24,i),a=r(a,i),a^=l,s+=4,o-=4}var c,u;switch(o){case 3:a^=t(e,s),a=r(a^=e.charCodeAt(s+2)<<16,i);break;case 2:a=r(a^=t(e,s),i);break;case 1:a=r(a^=e.charCodeAt(s),i)}return a=r(a^=a>>>13,i),(a^=a>>>15)>>>0}})),X=(E=T)&&E.__esModule?E.default:E,W=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],V=(L=function e(n){var t=r[n%r.length];return n>r.length?""+e(Math.floor(n/r.length))+t:t},q={},B=function(){function e(n){c(this,e),this.rules=n,P.injected||P.inject(),this.insertedRule=P.insert("")}return u(e,[{key:"generateAndInjectStyles",value:function(e){var n=k(this.rules,e).join("").replace(/^\s*\/\/.*$/gm,""),t=X(n);if(!q[t]){var r=L(t);q[t]=r;var i=N("."+r,n,!1,!1);this.insertedRule.appendRule(i)}return q[t]}}]),e}(),M=function(e,n,t){var r=e&&"string"!=typeof e?"object"===(void 0===e?"undefined":l(e))?e.props:"function"==typeof e?e.options.props:{}:{},i=Object.assign({},r,t),a=new B(n);return{props:i,render:function(n){return n(e,{class:[this.generatedClassName],props:this.$props},this.$slots.default)},methods:{generateAndInjectStyles:function(e){return a.generateAndInjectStyles(e)}},computed:{generatedClassName:function(){var e=Object.assign({},this.$props);return this.generateAndInjectStyles(e)}}}},z=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(t){for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return M(e,w.apply(void 0,[t].concat(i)),n)}},W.forEach(function(e){z[e]=z(e)}),z);n.b=V}).call(n,t("DuR2"))},bQJd:function(e,n,t){"use strict";n.a=function(e,n){var t=e.map(function(e,t,r){return i=t,a=r.length,i/a*100+"% {\n            "+n+": "+e+";\n           }";var i,a}),r="100% {\n      "+n+": "+e[0]+";\n      }";return[].concat(i()(t),[r]).join(" ")},n.b=function(e){return"scale("+e+")"};var r=t("Gu7T"),i=t.n(r)},"c/Tr":function(e,n,t){e.exports={default:t("5zde"),__esModule:!0}},"egV+":function(e,n,t){"use strict";t.d(n,"a",function(){return u});var r=t("2R8v"),i=t.n(r),a=t("fZjL"),o=t.n(a),s=t("XI+s"),l=i()(["\n    @media (min-width: ","em) {\n      ",";\n    }\n  "],["\n    @media (min-width: ","em) {\n      ",";\n    }\n  "]),c={giant:1170,desktop:992,tablet:768,phone:320},u=o()(c).reduce(function(e,n){var t=c[n]/16;return e[n]=function(){return Object(s.a)(l,t,s.a.apply(void 0,arguments))},e},{})},fBQ2:function(e,n,t){"use strict";var r=t("evD5"),i=t("X8DO");e.exports=function(e,n,t){n in e?r.f(e,n,i(0,t)):e[n]=t}},gAyF:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Wrap",[t("InnerWrap",[t("Spinner",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}]}),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading,expression:"!isLoading"}]},[t("page-title"),t("song-player",{attrs:{song:e.selectedSong,isPlaying:e.isPlaying,sourceUrl:e.url,toggleSong:e.toggleSong,forceUpdate:e.forceUpdate,previousSong:e.previousSong,nextSong:e.nextSong}})],1)],1)],1)};r._withStripped=!0;var i={render:r,staticRenderFns:[]};n.a=i},jayD:function(e,n,t){"use strict";n.a={name:"ScaleLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},height:{type:String,default:"35px"},width:{type:String,default:"4px"},margin:{type:String,default:"2px"},radius:{type:String,default:"2px"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,height:this.height,width:this.width,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-scaleStretchDelay",animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.1s"},spinnerDelay2:{animationDelay:"0.2s"},spinnerDelay3:{animationDelay:"0.3s"},spinnerDelay4:{animationDelay:"0.4s"},spinnerDelay5:{animationDelay:"0.5s"}}}}},l9tc:function(e,n,t){"use strict";var r=t("2R8v"),i=t.n(r),a=t("XI+s"),o=t("73+1"),s=i()(["\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  ",";\n  ",";\n"],["\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  ",";\n  ",";\n"]),l={isActive:Boolean},c=Object(a.b)("img",l)(s,Object(o.b)([.98,1,.985,1,.98,.99]),function(e){return e.isActive?"animation: 1.5s pulse linear infinite;":null});n.a=c},nEKK:function(e,n,t){"use strict";var r=function(){var e=this.$createElement,n=this._self._c||e;return n("Wrap",[n("nuxt-link",{attrs:{to:"/",exact:""}},[n("h1",[this._v("VueCloud")])])],1)};r._withStripped=!0;var i={render:r,staticRenderFns:[]};n.a=i},o6Uq:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("2R8v"),i=t.n(r),a=t("XI+s"),o=i()(["\n  height: 100%;\n  width: 100vw;\n  overflow: hidden;\n  padding: 1em 0;\n"],["\n  height: 100%;\n  width: 100vw;\n  overflow: hidden;\n  padding: 1em 0;\n"]),s=a.b.section(o);n.default=s},pRCB:function(e,n,t){var r=t("kM2E");r(r.S+r.F*!t("+E39"),"Object",{defineProperties:t("qio6")})},qyJz:function(e,n,t){"use strict";var r=t("+ZMJ"),i=t("kM2E"),a=t("sB3e"),o=t("msXi"),s=t("Mhyx"),l=t("QRG4"),c=t("fBQ2"),u=t("3fs2");i(i.S+i.F*!t("dY0y")(function(e){Array.from(e)}),"Array",{from:function(e){var n,t,i,d,f=a(e),p="function"==typeof this?this:Array,h=arguments.length,g=h>1?arguments[1]:void 0,v=void 0!==g,m=0,y=u(f);if(v&&(g=r(g,h>2?arguments[2]:void 0,2)),void 0==y||p==Array&&s(y))for(t=new p(n=l(f.length));n>m;m++)c(t,m,v?g(f[m],m):f[m]);else for(d=y.call(f),t=new p;!(i=d.next()).done;m++)c(t,m,v?o(d,g,[i.value,m],!0):i.value);return t.length=m,t}})},rFwh:function(e,n,t){"use strict";var r=t("2R8v"),i=t.n(r),a=t("XI+s"),o=i()(["\n  margin: 1em 0;\n"],["\n  margin: 1em 0;\n"]),s=a.b.div(o);n.a=s},tkdj:function(e,n,t){var r=t("ULDK");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t("rjj0")("50d75bf6",r,!1)},u2KI:function(e,n,t){e.exports={default:t("O4R0"),__esModule:!0}},yewy:function(e,n,t){"use strict";var r=t("2R8v"),i=t.n(r),a=t("XI+s"),o=t("OUZk"),s=t("73+1"),l=i()(["\n  background-color: ",";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100vh;\n  ",";\n  ",";\n"],["\n  background-color: ",";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100vh;\n  ",";\n  ",";\n"]),c={isActive:Boolean},u=[o.a.aquaMarine,o.a.orange,o.a.pana,o.a.fucsia,o.a.turqouise,o.a.primary,o.a.tertiary],d=Object(a.b)("div",c)(l,o.a.white,Object(s.a)(u),function(e){return e.isActive?" animation: "+3*u.length+"s changeColor linear infinite;":null});n.a=d}});
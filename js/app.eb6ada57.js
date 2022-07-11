(function(){"use strict";var t={2293:function(t,n,r){var e=r(9242),i=r(3396);const o={id:"app"};function s(t,n,r,e,s,c){const u=(0,i.up)("Calculator");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(u)])}var c=r(7139);const u={class:"calculator"},a={class:"container"},l={class:"calculator__content"},b={class:"calculator__btns"};function p(t,n,r,e,o,s){return(0,i.wg)(),(0,i.iD)("div",u,[(0,i._)("div",a,[(0,i._)("div",l,[(0,i._)("div",{class:"calculator__display",style:(0,c.j5)({fontSize:o.displayFontSize+"px"})},(0,c.zw)(o.current||"0"),5),(0,i._)("div",b,[(0,i._)("button",{onClick:n[0]||(n[0]=(...t)=>s.btnClear&&s.btnClear(...t)),class:"btn"},"AC"),(0,i._)("button",{onClick:n[1]||(n[1]=(...t)=>s.btnSign&&s.btnSign(...t)),class:"btn"},"+/-"),(0,i._)("button",{onClick:n[2]||(n[2]=(...t)=>s.btnPercent&&s.btnPercent(...t)),class:"btn"},"%"),(0,i._)("button",{onClick:n[3]||(n[3]=(...t)=>s.btnDivide&&s.btnDivide(...t)),class:"btn btn__operator"},"÷"),(0,i._)("button",{onClick:n[4]||(n[4]=t=>s.btnAppend("7")),class:"btn"},"7"),(0,i._)("button",{onClick:n[5]||(n[5]=t=>s.btnAppend("8")),class:"btn"},"8"),(0,i._)("button",{onClick:n[6]||(n[6]=t=>s.btnAppend("9")),class:"btn"},"9"),(0,i._)("button",{onClick:n[7]||(n[7]=(...t)=>s.btnTimes&&s.btnTimes(...t)),class:"btn btn__operator"},"×"),(0,i._)("button",{onClick:n[8]||(n[8]=t=>s.btnAppend("4")),class:"btn"},"4"),(0,i._)("button",{onClick:n[9]||(n[9]=t=>s.btnAppend("5")),class:"btn"},"5"),(0,i._)("button",{onClick:n[10]||(n[10]=t=>s.btnAppend("6")),class:"btn"},"6"),(0,i._)("button",{onClick:n[11]||(n[11]=(...t)=>s.btnMinus&&s.btnMinus(...t)),class:"btn btn__operator"},"-"),(0,i._)("button",{onClick:n[12]||(n[12]=t=>s.btnAppend("1")),class:"btn"},"1"),(0,i._)("button",{onClick:n[13]||(n[13]=t=>s.btnAppend("2")),class:"btn"},"2"),(0,i._)("button",{onClick:n[14]||(n[14]=t=>s.btnAppend("3")),class:"btn"},"3"),(0,i._)("button",{onClick:n[15]||(n[15]=(...t)=>s.btnAdd&&s.btnAdd(...t)),class:"btn btn__operator"},"+"),(0,i._)("button",{onClick:n[16]||(n[16]=t=>s.btnAppend("0")),class:"btn btn__zero"},"0"),(0,i._)("button",{onClick:n[17]||(n[17]=(...t)=>s.btnDot&&s.btnDot(...t)),class:"btn"},"."),(0,i._)("button",{onClick:n[18]||(n[18]=(...t)=>s.btnEqual&&s.btnEqual(...t)),class:"btn btn__operator"},"=")])])])])}var h={data(){return{previous:null,current:"",operator:null,operatorClicked:!1,displayFontSize:62}},methods:{btnClear(){this.current="",this.checkFontSize()},btnSign(){this.current="-"===this.current.charAt(0)?this.current.slice(1):`-${this.current}`},btnPercent(){this.current=""+parseFloat(this.current)/100},btnAppend(t){this.operatorClicked&&(this.current="",this.operatorClicked=!1),this.current.length<32&&(this.current=`${this.current}${t}`),this.checkFontSize()},btnDot(){-1===this.current.indexOf(".")&&this.btnAppend(".")},setPrevious(){this.previous=this.current,this.operatorClicked=!0},btnDivide(){this.operator=(t,n)=>t/n,this.setPrevious()},btnTimes(){this.operator=(t,n)=>t*n,this.setPrevious()},btnMinus(){this.operator=(t,n)=>t-n,this.setPrevious()},btnAdd(){this.operator=(t,n)=>t+n,this.setPrevious()},btnEqual(){this.current=`${this.operator(parseFloat(this.current),parseFloat(this.previous))}`,this.previous=null,this.checkFontSize()},checkFontSize(){this.current.length<=11&&(this.displayFontSize=62),this.current.length>11&&(this.displayFontSize=42),this.current.length>16&&(this.displayFontSize=35),this.current.length>20&&(this.displayFontSize=30),this.current.length>23&&(this.displayFontSize=25),this.current.length>27&&(this.displayFontSize=21)}}},d=r(89);const _=(0,d.Z)(h,[["render",p],["__scopeId","data-v-3aa9c682"]]);var f=_,v={name:"app",components:{Calculator:f}};const k=(0,d.Z)(v,[["render",s]]);var C=k;(0,e.ri)(C).mount("#app")}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(n,e,i,o){if(!e){var s=1/0;for(l=0;l<t.length;l++){e=t[l][0],i=t[l][1],o=t[l][2];for(var c=!0,u=0;u<e.length;u++)(!1&o||s>=o)&&Object.keys(r.O).every((function(t){return r.O[t](e[u])}))?e.splice(u--,1):(c=!1,o<s&&(s=o));if(c){t.splice(l--,1);var a=i();void 0!==a&&(n=a)}}return n}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[e,i,o]}}(),function(){r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,{a:n}),n}}(),function(){r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};r.O.j=function(n){return 0===t[n]};var n=function(n,e){var i,o,s=e[0],c=e[1],u=e[2],a=0;if(s.some((function(n){return 0!==t[n]}))){for(i in c)r.o(c,i)&&(r.m[i]=c[i]);if(u)var l=u(r)}for(n&&n(e);a<s.length;a++)o=s[a],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(l)},e=self["webpackChunkvue_calculator"]=self["webpackChunkvue_calculator"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=r.O(void 0,[998],(function(){return r(2293)}));e=r.O(e)})();
//# sourceMappingURL=app.eb6ada57.js.map
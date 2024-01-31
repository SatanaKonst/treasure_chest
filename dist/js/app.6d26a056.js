(function(){"use strict";var t={2163:function(t,n,e){var r=e(9242),i=(e(2166),e(3396));const a={class:"container pt-3"},s={class:"section"},o={key:1,class:"alert alert-danger text-center"},c={key:1,class:"alert alert-info text-center"};function u(t,n,e,r,u,l){const v=(0,i.up)("scanner"),d=(0,i.up)("tool-bar"),h=(0,i.up)("controls-panel");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("div",s,[(0,i.Wm)(v,{onResult:n[0]||(n[0]=t=>u.scanResult=t)})]),null!==u.team?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[!0===u.play?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Wm)(d,{inventar:u.inventar},null,8,["inventar"]),null!==u.currentQuestion?((0,i.wg)(),(0,i.j4)(h,{key:0,question:u.currentQuestion,inventar:u.inventar,onClose:n[1]||(n[1]=t=>u.currentQuestion=null)},null,8,["question","inventar"])):(0,i.kq)("",!0)],64)):((0,i.wg)(),(0,i.iD)("div",o," Игра окончена "))],64)):((0,i.wg)(),(0,i.iD)("div",c," Для начала игры отсканируейте QR Код c номером команды "))])}const l={ref:"videoArea",class:"w-100"};function v(t,n,e,r,a,s){return(0,i.wg)(),(0,i.iD)("video",l,null,512)}var d=e(4940),h={name:"qrCodeScanner",props:{},data(){return{scanner:null}},mounted(){this.scanner=new d.Z(this.$refs.videoArea,(t=>{this.$emit("result",t)}),{highlightScanRegion:!0}),this.scanner.start()}},p=e(89);const f=(0,p.Z)(h,[["render",v],["__scopeId","data-v-60b365ed"]]);var m=f,w=e(7139);const b={class:"controls-panel"},g={class:"container pt-2"},y={key:0,class:"row"},k={class:"col-12 mb-3 text-center"},_={class:"col-12"},q={key:1,class:"alert alert-success text-center"},x={key:1,class:"alert alert-warning text-center"};function D(t,n,e,r,a,s){return(0,i.wg)(),(0,i.iD)("div",b,[(0,i._)("div",g,[!0===s.open()?((0,i.wg)(),(0,i.iD)("div",y,[(0,i._)("div",k,(0,w.zw)(e.question.text),1),(0,i._)("div",_,[!1===e.question.complete?((0,i.wg)(),(0,i.j4)((0,i.LL)(s.renderComponent()),{key:0,question:e.question,onAnswer:s.setAnswer},null,40,["question","onAnswer"])):((0,i.wg)(),(0,i.iD)("div",q,[(0,i.Uk)(" Ответ на вопрос получен! "),(0,i._)("button",{type:"button",class:"btn btn-success w-100",onClick:n[0]||(n[0]=n=>t.$emit("close"))},"X")]))])])):((0,i.wg)(),(0,i.iD)("div",x,[(0,i.Uk)(" Для прохождения задания не хватает "+(0,w.zw)(e.question.needCristalls)+" кристаллов! ",1),(0,i._)("button",{type:"button",class:"btn btn-danger w-100",onClick:n[1]||(n[1]=n=>t.$emit("close"))},"X")]))])])}const A={class:"section"},T={class:"list-group"},j={class:"form-check"},C=["id","value"],O=["for"];function S(t,n,e,a,s,o){return(0,i.wg)(),(0,i.iD)("div",A,[(0,i._)("ul",T,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.question.variants,((t,e)=>((0,i.wg)(),(0,i.iD)("li",{class:"list-group-item",key:e},[(0,i._)("div",j,[(0,i.wy)((0,i._)("input",{class:"form-check-input",type:"radio",id:"variant"+e,value:t,"onUpdate:modelValue":n[0]||(n[0]=t=>s.answer=t)},null,8,C),[[r.G2,s.answer]]),(0,i._)("label",{class:"form-check-label",for:"variant"+e},(0,w.zw)(t),9,O)])])))),128))])])}var I={name:"radioVariantsType",props:{question:Object},data(){return{answer:""}},watch:{answer(){this.$emit("answer",this.answer)}}};const $=(0,p.Z)(I,[["render",S]]);var E=$;const H={class:"section"},V={class:"list-group"},Q={class:"form-check"},P=["id","value"],R=["for"];function Z(t,n,e,a,s,o){return(0,i.wg)(),(0,i.iD)("div",H,[(0,i._)("ul",V,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.question.variants,((t,e)=>((0,i.wg)(),(0,i.iD)("li",{class:"list-group-item",key:e},[(0,i._)("div",Q,[(0,i.wy)((0,i._)("input",{class:"form-check-input",type:"checkbox",id:"variant"+e,value:t,"onUpdate:modelValue":n[0]||(n[0]=t=>s.answer=t)},null,8,P),[[r.e8,s.answer]]),(0,i._)("label",{class:"form-check-label",for:"variant"+e},(0,w.zw)(t),9,R)])])))),128))])])}var z={name:"checkboxVariantsType",props:{question:Object},data(){return{answer:[]}},watch:{answer(){this.$emit("answer",this.answer)}}};const M=(0,p.Z)(z,[["render",Z]]);var N=M;const U={class:"section"},Y=(0,i._)("label",{class:"form-check-label",for:"textVariant"}," Ответ ",-1);function B(t,n,e,a,s,o){return(0,i.wg)(),(0,i.iD)("div",U,[Y,(0,i.wy)((0,i._)("input",{class:"form-control",type:"text",id:"textVariant","onUpdate:modelValue":n[0]||(n[0]=t=>s.answer=t)},null,512),[[r.nr,s.answer]])])}var L={name:"textVariantsType",props:{question:Object},data(){return{answer:""}},watch:{answer(){this.$emit("answer",this.answer)}}};const K=(0,p.Z)(L,[["render",B]]);var F=K,W={name:"controlsPanel",props:{question:Object,inventar:Object},components:{radioVariantsType:E,checkboxVariantsType:N,textVariantsType:F},data(){return{}},methods:{open(){let t=0;for(let n in this.$props.inventar){let e=n.split("_");"cristal"===e[0]&&(t+=this.$props.inventar[n].count)}return t>=this.$props.question.needCristalls},setAnswer(t){this.$props.question.userAnswer=t,null!==this.$props.question.actionAnswer&&this.$props.question.actionAnswer()},renderComponent(){switch(this.$props.question.type){case"radio-variants":return"radio-variants-type";case"checkbox-variants":return"checkbox-variants-type";case"text-variants":return"text-variants-type"}}}};const X=(0,p.Z)(W,[["render",D],["__scopeId","data-v-51a1ee31"]]);var G=X;const J={class:"section",id:"toolBar"},tt={class:"row"},nt=["onClick"],et=["src"];function rt(t,n,e,r,a,s){return(0,i.wg)(),(0,i.iD)("div",J,[(0,i._)("div",tt,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.inventar,((t,n)=>((0,i.wg)(),(0,i.iD)("div",{class:"col-3 text-center",key:n,onClick:n=>s.initAction(t)},[(0,i._)("img",{src:t.icon,alt:"",height:"50",width:"50"},null,8,et),(0,i._)("p",null,(0,w.zw)(t.count),1)],8,nt)))),128))])])}var it={name:"toolBar",props:{inventar:Array},methods:{initAction(t){"iconClick"===t.actionEventStart&&null!==t.action&&t.action()}}};const at=(0,p.Z)(it,[["render",rt],["__scopeId","data-v-601c484a"]]);var st=at,ot={name:"App",components:{ToolBar:st,ControlsPanel:G,scanner:m},data(){return{inventarSrc:{cristal:{icon:"./assets/icons/cristal.png",actionEventStart:null,action:null,refreshTime:3e4,count:0},aid:{icon:"./assets/icons/aid.png",actionEventStart:"iconClick",action:()=>{this.inventar.health.count=100,delete this.inventar.aid},refreshTime:3e4,count:0},health:{icon:"./assets/icons/health.png",actionEventStart:"mount",action:()=>{setInterval((()=>{this.inventar.health.count<=0?this.play=!1:this.inventar.health.count-=10}),6e4)},refreshTime:0,count:100},team:{icon:"./assets/icons/team.png",actionEventStart:null,action:null,refreshTime:0,count:0}},question:null,scanResult:null,inventar:{},inventarHistory:{},play:!0,currentQuestion:null,team:null}},mounted(){},watch:{team(){if(gameQuestions&&"object"===typeof gameQuestions){this.question={...gameQuestions};for(let t in this.question)"function"===typeof this.question[t].actionAnswer&&(this.question[t].actionAnswer=this.question[t].actionAnswer.bind(this))}this.addInventarItem("team",!1,this.team),this.addInventarItem("health",!1),this.initMountInventarActions()},scanResult(){if("object"===typeof this.scanResult){let t=this.scanResult.data.split("/");switch(t[0]){case"team":this.team=Number(t[1]);break;case"inventar":this.addInventarItem(t[1],!0);break;case"question":this.currentQuestion=this.question[t[1]];break}}}},methods:{initMountInventarActions(){for(let t in this.inventar){let n=this.inventar[t];"mount"===n.actionEventStart&&n.action&&n.action()}},addInventarItem(t,n=!0,e=null){let r=t.split("_"),i=r[0],a=r[1];if(this.inventar[i]){if(void 0!==a&&this.inventarHistory[t]&&this.inventar[i].refreshTime&&this.inventarHistory[t]+this.inventar[i].refreshTime>Date.now())return!1}else{if(this.inventarHistory[t]&&this.inventarSrc[i].refreshTime&&this.inventarHistory[t]+this.inventarSrc[i].refreshTime>Date.now())return!1;this.inventar[i]={...this.inventarSrc[i]}}this.inventarHistory[t]=Date.now(),!0===n&&this.inventar[i].count++,null!==e&&(this.inventar[i].count+=Number(e))}}};const ct=(0,p.Z)(ot,[["render",u]]);var ut=ct;(0,r.ri)(ut).mount("#app")}},n={};function e(r){var i=n[r];if(void 0!==i)return i.exports;var a=n[r]={exports:{}};return t[r].call(a.exports,a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(n,r,i,a){if(!r){var s=1/0;for(l=0;l<t.length;l++){r=t[l][0],i=t[l][1],a=t[l][2];for(var o=!0,c=0;c<r.length;c++)(!1&a||s>=a)&&Object.keys(e.O).every((function(t){return e.O[t](r[c])}))?r.splice(c--,1):(o=!1,a<s&&(s=a));if(o){t.splice(l--,1);var u=i();void 0!==u&&(n=u)}}return n}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[r,i,a]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.f={},e.e=function(t){return Promise.all(Object.keys(e.f).reduce((function(n,r){return e.f[r](t,n),n}),[]))}}(),function(){e.u=function(t){return"js/"+t+".bf34705a.js"}}(),function(){e.miniCssF=function(t){}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={},n="treasure_chest:";e.l=function(r,i,a,s){if(t[r])t[r].push(i);else{var o,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var v=u[l];if(v.getAttribute("src")==r||v.getAttribute("data-webpack")==n+a){o=v;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,e.nc&&o.setAttribute("nonce",e.nc),o.setAttribute("data-webpack",n+a),o.src=r),t[r]=[i];var d=function(n,e){o.onerror=o.onload=null,clearTimeout(h);var i=t[r];if(delete t[r],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((function(t){return t(e)})),n)return n(e)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),c&&document.head.appendChild(o)}}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var t={143:0};e.f.j=function(n,r){var i=e.o(t,n)?t[n]:void 0;if(0!==i)if(i)r.push(i[2]);else{var a=new Promise((function(e,r){i=t[n]=[e,r]}));r.push(i[2]=a);var s=e.p+e.u(n),o=new Error,c=function(r){if(e.o(t,n)&&(i=t[n],0!==i&&(t[n]=void 0),i)){var a=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;o.message="Loading chunk "+n+" failed.\n("+a+": "+s+")",o.name="ChunkLoadError",o.type=a,o.request=s,i[1](o)}};e.l(s,c,"chunk-"+n,n)}},e.O.j=function(n){return 0===t[n]};var n=function(n,r){var i,a,s=r[0],o=r[1],c=r[2],u=0;if(s.some((function(n){return 0!==t[n]}))){for(i in o)e.o(o,i)&&(e.m[i]=o[i]);if(c)var l=c(e)}for(n&&n(r);u<s.length;u++)a=s[u],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(l)},r=self["webpackChunktreasure_chest"]=self["webpackChunktreasure_chest"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(2163)}));r=e.O(r)})();
//# sourceMappingURL=app.6d26a056.js.map
"use strict";(self.webpackChunk_lenna_proj_lenna_web=self.webpackChunk_lenna_proj_lenna_web||[]).push([[584],{745:(e,n,t)=>{t.a(e,(async(e,o)=>{try{t.d(n,{Z:()=>h});var a=t(622),i=t(788),l=t(658),r=t.n(l),c=t(12),s=t(56),d=t(762),u=t(275),p=t.n(u),m=t(2),g=t(433),f=e([g]);g=(f.then?(await f)():f)[0];const h=(0,i.defineComponent)({components:{FileUpload:r(),DownloadButton:c.Z,VueEasyLightbox:s.Z},props:{images:{type:Array,required:!0}},data:function(){return{files:[],imgs:[],visible:!1,index:0,filetype:"png",options:[{text:"png",value:"png"},{text:"jpg",value:"jpg"},{text:"bmp",value:"bmp"},{text:"ico",value:"ico"},{text:"gif",value:"gif"}]}},methods:{inputFile:function(e,n,t){this.imgs=[e.url],this.$emit("changeImage",e)},inputFilter:function(e,n,t){if(e&&!n&&!/\.(gif|jpg|jpeg|png|webp)$/i.test(e.name))return alert("Your choice is not a picture"),t();if(e&&(!n||e.file!==n.file)){e.url="";var o=window.URL||window.webkitURL;o&&o.createObjectURL&&(e.url=o.createObjectURL(e.file))}},createObjectURL:function(e){return URL.createObjectURL(e)},safeImage:function(e,n){return(0,a.mG)(this,void 0,void 0,(function(){var t;return(0,a.Jh)(this,(function(o){switch(o.label){case 0:return[4,e.arrayBuffer().then((function(e){return new Uint8Array(e)}))];case 1:return t=o.sent(),[2,(0,g.OQ)(t,n)]}}))}))},downloadZip:function(){return(0,a.mG)(this,void 0,void 0,(function(){var e,n,t,o,i,l=this;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:return e=new(p()),n=(0,m.pm)(),(t=this.images.length)<1?[2]:(o=0,n.info("compressing of ".concat(this.images.length," images started")),i=this.images.map((function(a){var i="image/".concat(l.filetype);return l.safeImage(a,l.filetype).then((function(r){var c=new File([r],a.name,{type:i});return o++,n.success("compressed ".concat(a.name," ").concat(o," / ").concat(t," images")),e.file("".concat(a.name.replace(/(\.[^/.]+)+$/,""),".").concat(l.filetype),c)}))})),[4,Promise.all(i)]);case 1:return a.sent(),e.generateAsync({type:"blob"}).then((function(e){(0,d.saveAs)(e,"images.zip")})),[2]}}))}))},show:function(){this.visible=!0},showImg:function(e){this.index=e,this.visible=!0},handleHide:function(){this.visible=!1}},watch:{$props:{handler:function(){var e=this;this.imgs=[],this.index=0,this.images.forEach((function(n){e.imgs=[e.createObjectURL(n)]}))},deep:!0,immediate:!0}}});o()}catch(e){o(e)}}))},525:(e,n,t)=>{t.a(e,(async(e,o)=>{try{t.d(n,{Z:()=>h});var a=t(622),i=t(788),l=t(247),r=t(495),c=t(295),s=t(906),d=t(491),u=t(107),p=t(177),m=t(460),g=t(252),f=e([s]);s=(f.then?(await f)():f)[0];const h=(0,i.defineComponent)({name:"Process",components:{Slide:r.Slide,PluginsManager:c.Z,ImageUploadPreview:s.Z,ConfigComp:d.Z,Help:u.Z},data:function(){return{pluginUrl:"",just:null,defaultConfig:[],defaultPlugins:[],sourceImages:[],resultImages:[],pluginManager:new p.Q("")}},setup:function(){return{pluginsManager:(0,i.ref)(c.Z)}},created:function(){this.$route.query.config&&(this.defaultConfig=JSON.parse(Buffer.from(this.$route.query.config.toString(),"base64").toString("binary")),console.log(this.defaultConfig)),this.$route.query.plugin&&(this.defaultPlugins=[this.$route.query.plugin.toString()]),this.$route.query.just&&(this.pluginManager.filter=this.$route.query.just.toString(),this.just=this.$route.query.just.toString()),this.loadDefaultPluginsMap(),this.loadDefaultPluginJson(),this.loadAddedPlugins()},methods:{loadPlugin:function(e){console.log("loaded plugin: ",e),this.pluginManager.importPlugin(e,e)},loadDefaultPluginsMap:function(){this.pluginManager.importPluginMap("https://lenna.app/lenna-plugins/importmap.json")},loadDefaultPluginJson:function(){this.pluginManager.importPluginsJson("/plugins.json")},loadAddedPlugins:function(){var e=this;(0,g.wI)().forEach((function(n){e.pluginManager.importPlugin(n,n)}))},onMorePlugins:function(){window.location.replace("/marketplace")},changeImages:function(e){this.sourceImages=[e.file],this.processImages()},processImages:function(){return(0,a.mG)(this,void 0,void 0,(function(){return(0,a.Jh)(this,(function(e){switch(e.label){case 0:return l.configure({parent:"#process"}),l.start(),[4,(0,m._)(this.sourceImages,this.resultImages,this.pluginManager.getPlugins(),{info:function(e){},success:function(e){}},l.set)];case 1:return e.sent(),l.done(),l.remove(),[2]}}))}))}}});o()}catch(e){o(e)}}))},972:(e,n,t)=>{t.a(e,(async(e,o)=>{try{t.r(n);var a=t(788),i=t(471),l=t(926),r=t(2),c=(t(604),e([l]));l=(c.then?(await c)():c)[0],(0,a.createApp)(i.Z).use(l.Z).use(r.ZP,{position:r.Vr.TOP_LEFT}).mount("#app"),o()}catch(e){o(e)}}))},177:(e,n,t)=>{t.d(n,{Q:()=>i});var o=t(622),a=t(252),i=function(){function e(e){this.configs=[],this.plugins=[],this.filter="",this.filter=e}return e.prototype.importPlugin=function(e,n){return(0,o.mG)(this,void 0,void 0,(function(){var a=this;return(0,o.Jh)(this,(function(i){return[2,System.import(n).then((function(i){return(0,o.mG)(a,void 0,void 0,(function(){var a=this;return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return[4,i.init(t.S.default)];case 1:return o.sent(),[2,i.get("default").then((function(t){a.importModule(e,n,t())}))]}}))}))}))]}))}))},e.prototype.importModule=function(e,n,t){return(0,o.mG)(this,void 0,void 0,(function(){var i;return(0,o.Jh)(this,(function(o){return i=(0,a.ME)({name:e,url:n,plugin:t,enabled:!1,config:{}}),this.filter.length>0?i.name.includes(this.filter)&&(i.enabled=!0,this.configs.push({name:i.name,enabled:!0,config:i.config}),this.plugins.push(i)):this.plugins.push(i),[2]}))}))},e.prototype.importPluginMap=function(e){return(0,o.mG)(this,void 0,void 0,(function(){var n,t,a,i,l=this;return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return n=[],[4,fetch(e)];case 1:return[4,o.sent().json()];case 2:for(i in t=o.sent(),a=function(e){var o=t.imports[e];n.push(System.import(e).then((function(n){return l.importModule(e,o,n)})))},t.imports)a(i);return[2,Promise.all(n)]}}))}))},e.prototype.importPluginsJson=function(e){return(0,o.mG)(this,void 0,void 0,(function(){var n,t,a,i;return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return n=[],[4,fetch(e)];case 1:return[4,o.sent().json()];case 2:for(a in(t=o.sent()).plugins)i=t.plugins[a],n.push(this.importPlugin(a,i));return[2,Promise.all(n)]}}))}))},e.prototype.changeConfig=function(e,n){var t=this.plugins.find((function(n){return n.name===e}));t&&(t.config=n)},e.prototype.getPlugins=function(){return this.plugins},e}()},460:(e,n,t)=>{t.d(n,{_:()=>a});var o=t(622),a=function(e,n,t,a,l){return(0,o.mG)(void 0,void 0,void 0,(function(){var r,c,s,d,u,p,m;return(0,o.Jh)(this,(function(o){for(r=e.length,c=0,a.info("converting ".concat(r," images started")),n.length=0,s=[],d=function(e){s.push(i(e,t,l).then((function(t){var o=new File([t],e.name,{type:"image/png"});n.push(o),c++,a.success("converted ".concat(c," of ").concat(r," images"))})))},u=0,p=e;u<p.length;u++)m=p[u],d(m);return[2,Promise.all(s).then((function(){a.info("converted ".concat(c," images"))}))]}))}))},i=function(e,n,t){return(0,o.mG)(void 0,void 0,void 0,(function(){var a,i,l,r,c,s,d;return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return a=0,l=Uint8Array.bind,[4,e.arrayBuffer()];case 1:i=new(l.apply(Uint8Array,[void 0,o.sent()])),r=0,c=n,o.label=2;case 2:return r<c.length?(s=c[r],t(a),a+=1/n.length,s.enabled?[4,null===(d=s.plugin)||void 0===d?void 0:d.process(s.config,i)]:[3,4]):[3,5];case 3:i=o.sent(),o.label=4;case 4:return r++,[3,2];case 5:return t(1),[2,i]}}))}))}},252:(e,n,t)=>{t.d(n,{ME:()=>a,Oh:()=>o,iy:()=>i,wI:()=>l});var o=function(e){var n={name:e.name,enabled:e.enabled,config:e.config};localStorage.setItem(e.name,JSON.stringify(n))},a=function(e){var n=localStorage.getItem(e.name);if(n){var t=JSON.parse(n);e.enabled=t.enabled,e.config=Object.assign(e.config,t.config)}return e},i=function(e,n){return n.forEach((function(n){n.name===e.name&&(e.enabled=n.enabled,e.config=Object.assign(e.config,n.config))})),e},l=function(){var e=localStorage.getItem("plugins")||"[]";return JSON.parse(e)}},926:(e,n,t)=>{t.a(e,(async(e,o)=>{try{t.d(n,{Z:()=>d});var a=t(986),i=t(112),l=t(125),r=t(294),c=e([l]);l=(c.then?(await c)():c)[0];var s=[{path:"/",name:"Home",component:i.Z},{path:"/process",name:"Process",component:l.Z},{path:"/about",name:"About",component:r.Z},{path:"/just/${just}",name:"Just",component:i.Z}];const d=(0,a.createRouter)({history:(0,a.createWebHistory)(),routes:s});o()}catch(e){o(e)}}))},471:(e,n,t)=>{t.d(n,{Z:()=>C});var o=t(788),a=t(366);const i={class:"navbar"},l=(e=>((0,o.pushScopeId)("data-v-7d45cea4"),e=e(),(0,o.popScopeId)(),e))((()=>(0,o.createElementVNode)("div",{id:"banner"},[(0,o.createElementVNode)("img",{src:a})],-1))),r=(0,o.createTextVNode)("Home"),c=(0,o.createTextVNode)("Process Image"),s=(0,o.createTextVNode)("Contact us"),d=(0,o.defineComponent)({name:"Navbar"});d.render=function(e,n,t,a,d,u){const p=(0,o.resolveComponent)("router-link");return(0,o.openBlock)(),(0,o.createElementBlock)("div",i,[l,(0,o.createVNode)(p,{to:"/"},{default:(0,o.withCtx)((()=>[r])),_:1}),(0,o.createVNode)(p,{to:"/process"},{default:(0,o.withCtx)((()=>[c])),_:1}),(0,o.createVNode)(p,{to:"/about"},{default:(0,o.withCtx)((()=>[s])),_:1})])},d.__scopeId="data-v-7d45cea4";const u=d,p=e=>((0,o.pushScopeId)("data-v-1b71c086"),e=e(),(0,o.popScopeId)(),e),m={class:"footer"},g=(0,o.createTextVNode)(" Convert images online without upload of your data. "),f=p((()=>(0,o.createElementVNode)("a",{href:"https://lenna.app"}," lenna.app ",-1))),h=(0,o.defineComponent)({name:"Footer"});h.render=function(e,n,t,a,i,l){const r=(0,o.resolveComponent)("v-footer");return(0,o.openBlock)(),(0,o.createElementBlock)("div",m,[(0,o.createVNode)(r,null,{default:(0,o.withCtx)((()=>[g,(0,o.createElementVNode)("p",null,[(0,o.createTextVNode)(" © "+(0,o.toDisplayString)((new Date).getFullYear())+" — ",1),f])])),_:1})])},h.__scopeId="data-v-1b71c086";const v=h,b=(0,o.defineComponent)({name:"App",components:{Navbar:u,Footer:v}});b.render=function(e,n,t,a,i,l){const r=(0,o.resolveComponent)("Navbar"),c=(0,o.resolveComponent)("router-view"),s=(0,o.resolveComponent)("Footer");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createVNode)(r),(0,o.createVNode)(c),(0,o.createVNode)(s)])};const C=b},491:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(788);const a={key:1,class:"config"};var i=t(85),l=t.n(i);const r=(0,o.defineComponent)({name:"ConfigComp",props:{plugins:{type:Array,required:!0}},data:function(){return{url:"https://lenna.app/?config=",base64config:""}},methods:{download:function(e,n){var t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(n)),t.setAttribute("download",e),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)},generateConfigUrlBase64:function(){var e=function(e){for(var n=[],t=0,o=e;t<o.length;t++){var a=o[t];if(a.enabled){var i=a.config;i.name=a.name,n.push(i)}}var l=JSON.stringify(n);return btoa(l)}(this.plugins);this.base64config=this.url+e},generateLennaConfig:function(){var e=function(e){for(var n=[],t=0,o=e;t<o.length;t++){var a=o[t];if(a.enabled){var i=a.config;i.name=a.name,n.push(i)}}return"# https://github.com/lenna-project/lenna-cli\n# lenna-cli images_path --config lenna.yml\n"+l().stringify({pipeline:n})}(this.plugins);this.download("lenna.yml",e)}}});r.render=function(e,n,t,i,l,r){return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[e.plugins?((0,o.openBlock)(),(0,o.createElementBlock)("button",{key:0,onClick:n[0]||(n[0]=(...n)=>e.generateConfigUrlBase64&&e.generateConfigUrlBase64(...n))}," generate actual config url ")):(0,o.createCommentVNode)("",!0),e.base64config?((0,o.openBlock)(),(0,o.createElementBlock)("div",a,[(0,o.withDirectives)((0,o.createElementVNode)("textarea",{"onUpdate:modelValue":n[1]||(n[1]=n=>e.base64config=n),readonly:!0},null,512),[[o.vModelText,e.base64config]])])):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("button",{onClick:n[2]||(n[2]=(...n)=>e.generateLennaConfig&&e.generateLennaConfig(...n))},"lenna.yml")])},r.__scopeId="data-v-171f4380";const c=r},12:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(788),a=t(728);const i={class:"download-button"},l=["value"],r=(0,o.defineComponent)({name:"DownloadButton",props:{onClick:{type:Function,required:!0},filetype:{type:String,required:!0}},emits:["update:filetype"],setup:function(e,n){var t=n.emit;return{filetype:(0,o.computed)({get:function(){return e.filetype},set:function(e){return t("update:filetype",e)}})}},data:function(){return{options:[{text:"png",value:"png"},{text:"jpg",value:"jpg"},{text:"bmp",value:"bmp"},{text:"ico",value:"ico"},{text:"gif",value:"gif"}]}}});r.render=function(e,n,t,r,c,s){return(0,o.openBlock)(),(0,o.createElementBlock)("div",i,[(0,o.createElementVNode)("img",{onClick:n[0]||(n[0]=(...n)=>e.onClick&&e.onClick(...n)),src:a}),(0,o.createElementVNode)("div",{id:"text",onClick:n[1]||(n[1]=(...n)=>e.onClick&&e.onClick(...n))},"Download"),(0,o.withDirectives)((0,o.createElementVNode)("select",{"onUpdate:modelValue":n[2]||(n[2]=n=>e.filetype=n)},[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.options,(e=>((0,o.openBlock)(),(0,o.createElementBlock)("option",{value:e.value,key:e.text},(0,o.toDisplayString)(e.text),9,l)))),128))],512),[[o.vModelSelect,e.filetype]])])},r.__scopeId="data-v-23d32a3a";const c=r},107:(e,n,t)=>{t.d(n,{Z:()=>r});var o=t(788);const a=e=>((0,o.pushScopeId)("data-v-0067483e"),e=e(),(0,o.popScopeId)(),e),i={class:"help"},l=[a((()=>(0,o.createElementVNode)("h2",null,"How to Convert Images",-1))),a((()=>(0,o.createElementVNode)("ol",null,[(0,o.createElementVNode)("li",null,"Drop images into left box."),(0,o.createElementVNode)("li",null,"Enable the plugins you want to use in convertion."),(0,o.createElementVNode)("li",null,"Order the plugins via drag and drop"),(0,o.createElementVNode)("li",null,"Press the process button."),(0,o.createElementVNode)("li",null,"Select file type you want to download on the right."),(0,o.createElementVNode)("li",null,"Download your converted images compressed as zip.")],-1)))],r={render:function(e,n){return(0,o.openBlock)(),(0,o.createElementBlock)("div",i,l)},__scopeId:"data-v-0067483e"}},906:(e,n,t)=>{t.a(e,(async(e,o)=>{try{t.d(n,{Z:()=>r});var a=t(600),i=t(373),l=e([i]);(i=(l.then?(await l)():l)[0]).Z.render=a.s,i.Z.__scopeId="data-v-52b41522";const r=i.Z;o()}catch(e){o(e)}}))},295:(e,n,t)=>{t.d(n,{Z:()=>te});var o=t(788);const a={class:"plugins-manager"};var i=t(734),l=t(349),r=t(783),c=t(264),s=t(150),d=t(133);const u=e=>((0,o.pushScopeId)("data-v-41be056f"),e=e(),(0,o.popScopeId)(),e),p={class:"content"},m={key:0,class:"plugin"},g={class:"head"},f=u((()=>(0,o.createElementVNode)("div",null,[(0,o.createElementVNode)("img",{id:"drag-icon",src:l})],-1))),h=u((()=>(0,o.createElementVNode)("span",null,null,-1))),v={key:0,src:r},b={key:1,src:c},C={key:2,src:s},k={key:3,src:d},y={class:"icons"},V={key:1},N=u((()=>(0,o.createElementVNode)("div",{id:"line"},null,-1)));var E=t(622);const B={key:0,class:"plugin-config"},w={class:"parameter"},x={id:"slider"};var I=t(0),S=t.n(I);const _=(0,o.defineComponent)({name:"BlurConfig",props:{defaultConfig:Object},components:{VueSlider:S()},data:function(){return{config:[]}},methods:{updateConfig:function(){return(0,E.mG)(this,void 0,void 0,(function(){var e,n,t,o;return(0,E.Jh)(this,(function(a){for(e={},n=0,t=this.config;n<t.length;n++)o=t[n],e[o.key]=o.value;return this.$emit("changeConfig",e),[2]}))}))}},created:function(){for(var e in this.defaultConfig){var n={key:e,value:this.defaultConfig[e]};this.config.push(n)}this.updateConfig()}});_.render=function(e,n,t,a,i,l){const r=(0,o.resolveComponent)("vue-slider");return e.config?((0,o.openBlock)(),(0,o.createElementBlock)("div",B,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.config,(t=>((0,o.openBlock)(),(0,o.createElementBlock)("div",{key:t.key},[(0,o.createElementVNode)("div",w,[(0,o.createElementVNode)("div",x,[(0,o.createVNode)(r,{interval:.1,min:.1,max:5,modelValue:t.value,"onUpdate:modelValue":e=>t.value=e,onChange:n[0]||(n[0]=n=>e.updateConfig()),id:t.key},null,8,["interval","min","max","modelValue","onUpdate:modelValue","id"])])])])))),128))])):(0,o.createCommentVNode)("",!0)},_.__scopeId="data-v-01f22ffa";const j=_,P={key:0,class:"plugin-config"},Z={class:"parameter"},M={id:"slider"},T=(0,o.defineComponent)({name:"CannyConfig",props:{defaultConfig:Object},components:{VueSlider:S()},data:function(){return{config:[]}},methods:{updateConfig:function(){return(0,E.mG)(this,void 0,void 0,(function(){var e,n,t,o;return(0,E.Jh)(this,(function(a){for(e={},n=0,t=this.config;n<t.length;n++)o=t[n],e[o.key]=o.value;return this.$emit("changeConfig",e),[2]}))}))}},created:function(){for(var e in this.defaultConfig){var n={key:e,value:this.defaultConfig[e]};this.config.push(n)}this.updateConfig()}});T.render=function(e,n,t,a,i,l){const r=(0,o.resolveComponent)("vue-slider");return e.config?((0,o.openBlock)(),(0,o.createElementBlock)("div",P,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.config,(t=>((0,o.openBlock)(),(0,o.createElementBlock)("div",{key:t.key},[(0,o.createElementVNode)("div",Z,[(0,o.createElementVNode)("label",null,(0,o.toDisplayString)(t.key)+": ",1),(0,o.createElementVNode)("div",M,[(0,o.createVNode)(r,{interval:1,min:0,max:100,modelValue:t.value,"onUpdate:modelValue":e=>t.value=e,onChange:n[0]||(n[0]=n=>e.updateConfig()),id:t.key},null,8,["modelValue","onUpdate:modelValue","id"])])])])))),128))])):(0,o.createCommentVNode)("",!0)},T.__scopeId="data-v-47e111a8";const U=T,J={class:"plugin-config"},F=["value"],D=(0,o.defineComponent)({name:"RotateConfig",props:{defaultConfig:Object},components:{VueSlider:S()},data:function(){return{selected:"90",options:[{text:"90°",value:"90"},{text:"180°",value:"180"},{text:"270°",value:"270"}]}},methods:{updateConfig:function(){return(0,E.mG)(this,void 0,void 0,(function(){var e;return(0,E.Jh)(this,(function(n){return e={theta:0},"90"===this.selected?e.theta=90:"180"===this.selected?e.theta=180:"270"===this.selected&&(e.theta=270),this.$emit("changeConfig",e),[2]}))}))}},created:function(){this.updateConfig()}});D.render=function(e,n,t,a,i,l){return(0,o.openBlock)(),(0,o.createElementBlock)("div",J,[(0,o.withDirectives)((0,o.createElementVNode)("select",{"onUpdate:modelValue":n[0]||(n[0]=n=>e.selected=n),onChange:n[1]||(n[1]=n=>e.updateConfig())},[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.options,(e=>((0,o.openBlock)(),(0,o.createElementBlock)("option",{value:e.value,key:e.text},(0,o.toDisplayString)(e.text)+" Clockwise ",9,F)))),128))],544),[[o.vModelSelect,e.selected]])])},D.__scopeId="data-v-5f83a273";const A=D,O={class:"checkbox-container"},L={class:"checkbox"},$=["checked"],G=(e=>((0,o.pushScopeId)("data-v-8e1f5fe6"),e=e(),(0,o.popScopeId)(),e))((()=>(0,o.createElementVNode)("span",null,null,-1))),H=(0,o.defineComponent)({name:"Checkbox",props:{checked:{type:Boolean}},emits:["update:checked"],computed:{value:{get:function(){return this.checked},set:function(e){this.$emit("update:checked",e)}}}});H.render=function(e,n,t,a,i,l){return(0,o.openBlock)(),(0,o.createElementBlock)("div",O,[(0,o.createElementVNode)("label",L,[(0,o.createElementVNode)("input",{onInput:n[0]||(n[0]=n=>e.$emit("update:checked",n.target.checked)),type:"checkbox",checked:e.checked,id:"checkbox"},null,40,$),G])])},H.__scopeId="data-v-8e1f5fe6";const R=H,q={class:"content"},K={id:"icon"},W={props:{title:{type:[String]}},render:function(e,n,t,a,i,l){return(0,o.openBlock)(),(0,o.createElementBlock)("div",q,[(0,o.createElementVNode)("div",K,[(0,o.renderSlot)(e.$slots,"default",{},void 0,!0)]),(0,o.createElementVNode)("div",null,(0,o.toDisplayString)(t.title),1)])},__scopeId:"data-v-dbc69154"},Y=["src"],z={props:{src:{type:[Object,String]}},render:function(e,n,t,a,i,l){return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createElementVNode)("img",{id:"icon",src:t.src},null,8,Y)])},__scopeId:"data-v-223afea4"};var Q=t(252);const X=(0,o.defineComponent)({name:"Plugin",props:{name:String,plugin:Object,url:String,defaultConfig:Object},components:{Checkbox:R,Icon:z,Blur:j,Canny:U,Rotate:A,PluginTitle:W},data:function(){return{ui:(0,o.shallowRef)(null),icon:(0,o.shallowRef)(null),processor:null,enabled:!1,keyCounter:0,pluginKey:"",config:{}}},methods:{loadDefaultConfig:function(){var e;return(0,E.mG)(this,void 0,void 0,(function(){var n=this;return(0,E.Jh)(this,(function(t){return null===(e=this.plugin)||void 0===e||e.defaultConfig().then((function(e){if(n.defaultConfig&&n.defaultConfig.length>0){var t=(0,Q.iy)({name:n.name||"",enabled:!0,config:e},n.defaultConfig),o=t.enabled,a=t.config;n.config=a,n.enabled=o||!1}else{var i=(0,Q.ME)({name:n.name||"",enabled:!1,config:e});o=i.enabled,a=i.config,n.config=a,n.enabled=o||!1}})),[2]}))}))},loadUI:function(){var e,n;return(0,E.mG)(this,void 0,void 0,(function(){var t=this;return(0,E.Jh)(this,(function(o){return(null===(e=this.plugin)||void 0===e?void 0:e.ui)&&this.url&&System.import(this.url).then((function(e){e.get("./Widget").then((function(e){t.ui=e().default}))})).catch((function(e){return console.log(e)})),(null===(n=this.plugin)||void 0===n?void 0:n.icon)&&(this.icon=this.plugin.icon()),[2]}))}))},updateConfig:function(e){return(0,E.mG)(this,void 0,void 0,(function(){return(0,E.Jh)(this,(function(n){return(0,Q.Oh)({name:this.name||"",enabled:this.enabled,config:e}),this.$emit("changeConfig",e),[2]}))}))},updateEnabled:function(e){return(0,E.mG)(this,void 0,void 0,(function(){return(0,E.Jh)(this,(function(n){return this.enabled=e,(0,Q.Oh)({name:this.name||"",enabled:this.enabled,config:this.config}),this.$emit("changeEnabled",e),[2]}))}))}},created:function(){console.log(this.name),this.loadUI(),this.loadDefaultConfig()},watch:{defaultConfig:{handler:function(){this.keyCounter+=1,this.pluginKey=(this.name||"")+this.keyCounter}}}});X.render=function(e,n,t,a,i,l){const r=(0,o.resolveComponent)("plugin-title"),c=(0,o.resolveComponent)("Checkbox"),s=(0,o.resolveComponent)("Blur"),d=(0,o.resolveComponent)("Canny"),u=(0,o.resolveComponent)("Rotate");return(0,o.openBlock)(),(0,o.createElementBlock)("div",p,[e.plugin?((0,o.openBlock)(),(0,o.createElementBlock)("div",m,[(0,o.createElementVNode)("div",g,[f,h,(0,o.createVNode)(r,{title:e.plugin.name()},{default:(0,o.withCtx)((()=>["blur"==e.plugin.name()?((0,o.openBlock)(),(0,o.createElementBlock)("img",v)):(0,o.createCommentVNode)("",!0),"dramatic"==e.plugin.name()?((0,o.openBlock)(),(0,o.createElementBlock)("img",b)):(0,o.createCommentVNode)("",!0),"sharpen"==e.plugin.name()?((0,o.openBlock)(),(0,o.createElementBlock)("img",C)):(0,o.createCommentVNode)("",!0),"sepia"==e.plugin.name()?((0,o.openBlock)(),(0,o.createElementBlock)("img",k)):(0,o.createCommentVNode)("",!0)])),_:1},8,["title"])]),(0,o.createElementVNode)("div",y,[(0,o.createVNode)(c,{id:"checkbox",checked:e.enabled,"onUpdate:checked":n[0]||(n[0]=n=>e.updateEnabled(n))},null,8,["checked"])])])):(0,o.createCommentVNode)("",!0),e.enabled?((0,o.openBlock)(),(0,o.createElementBlock)("div",V,["blur"==e.plugin.name()?((0,o.openBlock)(),(0,o.createBlock)(s,{key:e.pluginKey,defaultConfig:e.config,onChangeConfig:n[1]||(n[1]=n=>e.updateConfig(n))},null,8,["defaultConfig"])):(0,o.createCommentVNode)("",!0),"canny"==e.plugin.name()?((0,o.openBlock)(),(0,o.createBlock)(d,{key:e.pluginKey,defaultConfig:e.config,onChangeConfig:n[2]||(n[2]=n=>e.updateConfig(n))},null,8,["defaultConfig"])):(0,o.createCommentVNode)("",!0),"rotate"==e.plugin.name()?((0,o.openBlock)(),(0,o.createBlock)(u,{key:e.pluginKey,defaultConfig:e.config,onChangeConfig:n[3]||(n[3]=n=>e.updateConfig(n))},null,8,["defaultConfig"])):(0,o.createCommentVNode)("",!0)])):(0,o.createCommentVNode)("",!0),N])},X.__scopeId="data-v-41be056f";const ee=X,ne=(0,o.defineComponent)({name:"PluginsManager",props:{pluginsmap:String,pluginsjson:String,defaultConfig:Object,pluginManager:Object,defaultPlugins:Array},components:{Plugin:ee,draggable:i.J},data:function(){return{plugins:[],configs:{}}},beforeMount:function(){var e;this.plugins=(null===(e=this.pluginManager)||void 0===e?void 0:e.getPlugins())||[]},methods:{changeEnabled:function(e,n){var t=this.plugins.find((function(n){return n.name===e}));t&&(t.enabled=n,this.change())},changeConfig:function(e,n){var t=this.plugins.find((function(n){return n.name===e}));t&&(t.config=n),this.change()},change:function(){this.$emit("change")},raw:function(e){return e}}});ne.render=function(e,n,t,i,l,r){const c=(0,o.resolveComponent)("Plugin"),s=(0,o.resolveComponent)("draggable");return(0,o.openBlock)(),(0,o.createElementBlock)("div",a,[(0,o.createVNode)(s,{class:"dragArea list-group plugins",list:e.plugins,onChange:n[0]||(n[0]=n=>e.change())},{default:(0,o.withCtx)((()=>[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.plugins,(n=>((0,o.openBlock)(),(0,o.createElementBlock)("div",{class:"list-group-item",key:n.name},[(0,o.createVNode)(c,{name:n.name,plugin:n.plugin,url:n.url,defaultConfig:e.configs,onChangeEnabled:t=>e.changeEnabled(n.name,t),onChangeConfig:t=>e.changeConfig(n.name,t)},null,8,["name","plugin","url","defaultConfig","onChangeEnabled","onChangeConfig"])])))),128))])),_:1},8,["list"])])},ne.__scopeId="data-v-a120d5b2";const te=ne},294:(e,n,t)=>{t.d(n,{Z:()=>V});var o=t(788);const a=e=>((0,o.pushScopeId)("data-v-5155017c"),e=e(),(0,o.popScopeId)(),e),i={class:"about"},l=a((()=>(0,o.createElementVNode)("h1",null,"About Lenna Project",-1))),r=a((()=>(0,o.createElementVNode)("p",null," Lenna is a library for image processing algorithms. The web page allows to test and use them. ",-1))),c=(0,o.createStaticVNode)('<h2 data-v-5155017c>Thanks</h2><ul data-v-5155017c><li data-v-5155017c>Silvia (<a href="https://github.com/silvia-odwyer/photon" data-v-5155017c>photon</a>)</li></ul><h2 data-v-5155017c>Plugins</h2><p data-v-5155017c> Lenna allows to plug in more algorithms. The plugins can be activated for use in the <a href="https://lenna.app/marketplace/" data-v-5155017c>marketplace</a>. Some examples can be found at <a href="https://github.com/lenna-project/lenna-plugins" data-v-5155017c>lenna-project/lenna-plugins</a> on github. <br data-v-5155017c> Following a list of available plugins: <ul data-v-5155017c><li data-v-5155017c><b data-v-5155017c>blur</b> - Blurs the image. The strength can be configured.</li><li data-v-5155017c><b data-v-5155017c>dramatic</b> - Gives the image a dramatic touch.</li><li data-v-5155017c><b data-v-5155017c>exif</b> - Allows to clear exif data of the image.</li><li data-v-5155017c><b data-v-5155017c>rotate</b> - Rotates the image.</li><li data-v-5155017c><b data-v-5155017c>canny</b> - Shows edges of objects in the image.</li></ul></p><h2 data-v-5155017c>Jupyter Notebooks</h2> View some notebooks <a href="/jupyter" data-v-5155017c>here</a> to see how the plugins can be used in python. <h2 data-v-5155017c>Command Line Interface</h2>',9),s=a((()=>(0,o.createElementVNode)("iframe",{src:"https://snapcraft.io/lenna-cli/embedded?button=black&summary=true",frameborder:"0",width:"100%",height:"380px",style:{border:"1px solid #CCC","border-radius":"2px"}},null,-1))),d=a((()=>(0,o.createElementVNode)("p",null,[(0,o.createTextVNode)(" A command line interface allows to use the algorithms and run them on multiple images at once. The source for "),(0,o.createElementVNode)("a",{href:"https://github.com/lenna-project/lenna-cli"},"lenna-cli"),(0,o.createTextVNode)(" can be found on github. ")],-1))),u=a((()=>(0,o.createElementVNode)("img",{src:"https://raw.githubusercontent.com/lenna-project/lenna-cli/main/docs/images/run.gif"},null,-1))),p=a((()=>(0,o.createElementVNode)("h2",null,"Desktop App",-1))),m=a((()=>(0,o.createElementVNode)("a",{href:"https://sourceforge.net/projects/lenna/files/latest/download"},[(0,o.createElementVNode)("img",{alt:"Download lenna",src:"https://a.fsdn.com/con/app/sf-download-button",width:"276",height:"48",srcset:"https://a.fsdn.com/con/app/sf-download-button?button_size=2x 2x"})],-1))),g=a((()=>(0,o.createElementVNode)("br",null,null,-1))),f=a((()=>(0,o.createElementVNode)("iframe",{src:"https://snapcraft.io/lenna/embedded?button=black&summary=true&screenshot=true",frameborder:"0",width:"100%",height:"620px",style:{border:"1px solid #CCC","border-radius":"2px"}},null,-1))),h=a((()=>(0,o.createElementVNode)("h2",null,"Desktop Web App",-1))),v=a((()=>(0,o.createElementVNode)("a",{href:"https://github.com/lenna-project/lenna-gui/releases/latest"},"Lenna GUI",-1))),b=(0,o.createTextVNode)(" This App supports convertion of images in folders. "),C=a((()=>(0,o.createElementVNode)("br",null,null,-1))),k=(0,o.createTextVNode)(" You can find installers for Mac, Linux and Windows. "),y=a((()=>(0,o.createElementVNode)("br",null,null,-1))),V={name:"About",components:{Help:t(107).Z},render:function(e,n,t,a,V,N){const E=(0,o.resolveComponent)("Help");return(0,o.openBlock)(),(0,o.createElementBlock)("div",i,[l,r,(0,o.createVNode)(E),c,s,d,u,p,m,g,f,h,v,b,C,k,y])},__scopeId:"data-v-5155017c"}},112:(e,n,t)=>{t.d(n,{Z:()=>V});var o=t(788);const a={class:"main"},i=(e=>((0,o.pushScopeId)("data-v-5a478374"),e=e(),(0,o.popScopeId)(),e))((()=>(0,o.createElementVNode)("h1",null,[(0,o.createTextVNode)("Convert images online"),(0,o.createElementVNode)("br"),(0,o.createTextVNode)(" without upload of your data")],-1))),l=(0,o.createTextVNode)("Process Image"),r=e=>((0,o.pushScopeId)("data-v-836ff504"),e=e(),(0,o.popScopeId)(),e),c={id:"container"},s=[r((()=>(0,o.createElementVNode)("span",{id:"mountain1"},null,-1))),r((()=>(0,o.createElementVNode)("div",{id:"container-right"},[(0,o.createElementVNode)("span",{id:"mountain2"}),(0,o.createElementVNode)("span",{id:"mountain3"})],-1)))],d={render:function(e,n){return(0,o.openBlock)(),(0,o.createElementBlock)("div",c,s)},__scopeId:"data-v-836ff504"},u=e=>((0,o.pushScopeId)("data-v-4db0d360"),e=e(),(0,o.popScopeId)(),e),p=u((()=>(0,o.createElementVNode)("p",{id:"title"},"About the project",-1))),m=u((()=>(0,o.createElementVNode)("div",{id:"container"},[(0,o.createElementVNode)("div",{id:"tile1"}),(0,o.createElementVNode)("div",{id:"tile2"}," Imaging & Co. is a library for image processing algorithms. The web page allows to test and use them. ")],-1))),g={class:"howtotile"},f={id:"text"},h={props:{text:{type:[String]}},render:function(e,n,t,a,i,l){return(0,o.openBlock)(),(0,o.createElementBlock)("div",g,[(0,o.createElementVNode)("p",f,(0,o.toDisplayString)(t.text),1)])},__scopeId:"data-v-5caaf127"},v={components:{HowToTile:h},render:function(e,n,t,a,i,l){return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[p,m],64)},__scopeId:"data-v-4db0d360"},b=(e=>((0,o.pushScopeId)("data-v-1d035855"),e=e(),(0,o.popScopeId)(),e))((()=>(0,o.createElementVNode)("p",{id:"title"},"How to convert images",-1))),C={id:"tiles"},k={components:{HowToTile:h},render:function(e,n,t,a,i,l){const r=(0,o.resolveComponent)("HowToTile");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[b,(0,o.createElementVNode)("div",C,[(0,o.createVNode)(r,{text:"1. Upload the image"}),(0,o.createVNode)(r,{text:"2. Enable the plugins"}),(0,o.createVNode)(r,{text:"3. You can order the plugins by dragging and dropping them"}),(0,o.createVNode)(r,{text:"4. Press the ‘Process button’."})])],64)},__scopeId:"data-v-1d035855"},y=(0,o.defineComponent)({name:"Home",components:{Mountains:d,AboutProject:v,HowToConvert:k}});y.render=function(e,n,t,r,c,s){const d=(0,o.resolveComponent)("Mountains"),u=(0,o.resolveComponent)("router-link"),p=(0,o.resolveComponent)("AboutProject"),m=(0,o.resolveComponent)("HowToConvert");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createElementVNode)("div",a,[i,(0,o.createVNode)(d),(0,o.createVNode)(u,{class:"process-image-button",to:"/process"},{default:(0,o.withCtx)((()=>[l])),_:1}),(0,o.createVNode)(p),(0,o.createVNode)(m)])])},y.__scopeId="data-v-5a478374";const V=y},125:(e,n,t)=>{t.a(e,(async(e,o)=>{try{t.d(n,{Z:()=>r});var a=t(570),i=t(453),l=e([i]);(i=(l.then?(await l)():l)[0]).Z.render=a.s,i.Z.__scopeId="data-v-432c5aa6";const r=i.Z;o()}catch(e){o(e)}}))},600:(e,n,t)=>{t.d(n,{s:()=>v});var o=t(788),a=t(925);const i=e=>((0,o.pushScopeId)("data-v-52b41522"),e=e(),(0,o.popScopeId)(),e),l={class:"image-preview"},r={class:"upload-container"},c=i((()=>(0,o.createElementVNode)("img",{src:a},null,-1))),s={key:0,class:"upload-text"},d=[(0,o.createTextVNode)(" Drop files here "),i((()=>(0,o.createElementVNode)("div",{id:"or-line"},[(0,o.createElementVNode)("div",{class:"line"}),(0,o.createTextVNode)(" or "),(0,o.createElementVNode)("div",{class:"line"})],-1)))],u={key:1,id:"upload-button"},p={key:0,id:"save"},m=i((()=>(0,o.createElementVNode)("br",null,null,-1))),g={key:1,class:"image-container"},f=["onClick"],h=["src"];function v(e,n,t,a,i,v){const b=(0,o.resolveComponent)("FileUpload"),C=(0,o.resolveComponent)("download-button"),k=(0,o.resolveComponent)("vue-easy-lightbox");return(0,o.openBlock)(),(0,o.createElementBlock)("div",l,[(0,o.createVNode)(b,{multiple:!0,drop:!0,"drop-directory":!0,extensions:"gif,jpg,jpeg,png,webp",accept:"image/png,image/gif,image/jpeg,image/webp",onInputFilter:e.inputFilter,onInputFile:e.inputFile,ref:"upload",class:"file-upload"},{default:(0,o.withCtx)((()=>[(0,o.createElementVNode)("div",r,[c,e.imgs.length<1?((0,o.openBlock)(),(0,o.createElementBlock)("div",s,d)):(0,o.createCommentVNode)("",!0),e.imgs.length<1?((0,o.openBlock)(),(0,o.createElementBlock)("div",u,"Select Files...")):(0,o.createCommentVNode)("",!0)])])),_:1},8,["onInputFilter","onInputFile"]),e.imgs.length>0?((0,o.openBlock)(),(0,o.createElementBlock)("div",p,[(0,o.createVNode)(C,{onClick:e.downloadZip,filetype:e.filetype,"onUpdate:filetype":n[0]||(n[0]=n=>e.filetype=n)},null,8,["onClick","filetype"])])):(0,o.createCommentVNode)("",!0),m,e.imgs.length>0?((0,o.openBlock)(),(0,o.createElementBlock)("div",g,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.imgs,((n,t)=>((0,o.openBlock)(),(0,o.createElementBlock)("div",{key:t,class:"pic",onClick:()=>e.showImg(t)},[(0,o.createElementVNode)("img",{src:n},null,8,h)],8,f)))),128))])):(0,o.createCommentVNode)("",!0),(0,o.createVNode)(k,{escDisabled:"",moveDisabled:"",visible:e.visible,imgs:e.imgs,index:e.index,onHide:e.handleHide},null,8,["visible","imgs","index","onHide"])])}},570:(e,n,t)=>{t.d(n,{s:()=>r});var o=t(788);const a={class:"main"},i={id:"process",class:"top_main"},l=(e=>((0,o.pushScopeId)("data-v-432c5aa6"),e=e(),(0,o.popScopeId)(),e))((()=>(0,o.createElementVNode)("div",{class:"bottom_main"},null,-1)));function r(e,n,t,r,c,s){const d=(0,o.resolveComponent)("PluginsManager"),u=(0,o.resolveComponent)("ImageUploadPreview");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("div",i,[(0,o.createVNode)(d,{class:"v-step-4",ref:"pluginsManager",pluginManager:e.pluginManager,defaultConfig:e.defaultConfig,defaultPlugins:e.defaultPlugins,onChange:n[0]||(n[0]=n=>e.processImages())},null,8,["pluginManager","defaultConfig","defaultPlugins"]),(0,o.createVNode)(u,{images:e.resultImages,onChangeImage:n[1]||(n[1]=n=>e.changeImages(n))},null,8,["images"])]),l])])}},373:(e,n,t)=>{t.a(e,(async(e,o)=>{try{t.d(n,{Z:()=>a.Z});var a=t(745),i=e([a]);a=(i.then?(await i)():i)[0],o()}catch(e){o(e)}}))},453:(e,n,t)=>{t.a(e,(async(e,o)=>{try{t.d(n,{Z:()=>a.Z});var a=t(525),i=e([a]);a=(i.then?(await i)():i)[0],o()}catch(e){o(e)}}))},925:(e,n,t)=>{e.exports=t.p+"047e452b85733a554f5b.svg"},366:(e,n,t)=>{e.exports=t.p+"be95ca61cfa2a141ac6a.svg"},783:(e,n,t)=>{e.exports=t.p+"3852580733023e72cf2f.svg"},728:(e,n,t)=>{e.exports=t.p+"2c1d073d3950c3ada5a8.svg"},349:(e,n,t)=>{e.exports=t.p+"055780882d364ab8ea02.png"},264:(e,n,t)=>{e.exports=t.p+"399cd87fcbe120f9132b.svg"},133:(e,n,t)=>{e.exports=t.p+"2bceadd556b2a4d8461c.svg"},150:(e,n,t)=>{e.exports=t.p+"4c752dd5de27acd3e0cc.svg"}}]);
//# sourceMappingURL=584.js.map
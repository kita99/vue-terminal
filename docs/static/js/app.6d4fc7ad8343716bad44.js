webpackJsonp([1],{"1Xjw":function(t,e){},"7+p6":function(t,e,s){"use strict";var n=s("fZjL"),a=s.n(n),i=s("baUs"),o=s("Aunj");e.a={name:"VueTerminalEmulator",data:function(){return{title:"vTerminal",messageList:[],actionResult:"",lastLineContent:"...",inputCommand:"",supportingCommandList:""}},props:{defaultTask:{required:!1,default:"defaultTask"}},computed:{lastLineClass:function(){return"&nbsp"===this.lastLineContent?"cursor":"..."===this.lastLineContent?"loading":void 0}},created:function(){var t=this;this.supportingCommandList=a()(i.a).concat(a()(o.a)),this.handleRun(this.defaultTask).then(function(){t.pushToList({level:"System",message:'Type "help" to get a supporting command list.'}),t.handleFocus()})},methods:{handleFocus:function(){this.$refs.inputBox.focus()},handleCommand:function(){var t=this;this.pushToList({message:"$ "+this.inputCommand});var e=this.inputCommand.split(" ");"help"===e[0]?this.printHelp(e[1]):i.a[this.inputCommand]?i.a[this.inputCommand].messages.map(function(e){return t.pushToList(e)}):o.a[this.inputCommand.split(" ")[0]]?this.handleRun(this.inputCommand.split(" ")[0],this.inputCommand):(this.pushToList({level:"System",message:"Unknown Command."}),this.pushToList({level:"System",message:'type "help" to get a supporting command list.'})),this.inputCommand="",this.autoScroll()},handleRun:function(t,e){var s=this;return this.lastLineContent="...",o.a[t][t](this.pushToList,e).then(function(t){s.pushToList(t),s.lastLineContent="&nbsp"}).catch(function(t){s.pushToList(t||{type:"error",label:"Error",message:"Something went wrong!"}),s.lastLineContent="&nbsp"})},pushToList:function(t){this.messageList.push(t),this.autoScroll()},printHelp:function(t){var e=this;if(t){var s=i.a[t]||o.a[t];this.pushToList({message:s.description})}else this.pushToList({message:"Here is a list of supporting command."}),this.supportingCommandList.map(function(t){i.a[t]?e.pushToList({type:"success",label:t,message:"---\x3e "+i.a[t].description}):e.pushToList({type:"success",label:t,message:"---\x3e "+o.a[t].description})}),this.pushToList({message:"Enter help <command> to get help for a particular command."});this.autoScroll()},time:function(){return(new Date).toLocaleTimeString().split("").splice(2).join("")},autoScroll:function(){var t=this;this.$nextTick(function(){t.$refs.terminalWindow.scrollTop=t.$refs.terminalLastLine.offsetTop})}}}},Aunj:function(t,e,s){"use strict";function n(){var t=new Date,e=t.getHours(),s=t.getMinutes(),n=t.getSeconds(),a=""+e;return a+=(s<10?":0":":")+s,a+=(n<10?":0":":")+n}var a=s("//Fk"),i=s.n(a),o=[{time:n(),type:"system",label:"System",message:"Welcome to vTerminal, this is an example to show you what this project can do."},{time:n(),type:"info",label:"Info",message:"Terminal Initializing ............"},{time:n(),type:"warning",label:"warning",message:"This is a Waning Message!"},{time:n(),type:"error",label:"Error",message:"Oops, Something Went Wrong!"},{time:n(),type:"success",label:"Success",message:"Take it easy! Everything OK!"}];e.a={echo:{description:"Echoes input",echo:function(t,e){return e=e.split(" "),e.splice(0,1),new i.a(function(s){t({time:n(),label:"Echo",type:"success",message:e.join(" ")}),s({type:"success",label:"",message:""})})}},defaultTask:{description:"this is default task.",defaultTask:function(t){var e=0;return new i.a(function(s){var a=setInterval(function(){o[e].time=n(),t(o[e]),e++,o[e]||(clearInterval(a),s({type:"success",label:"Success",message:"Example Over!"}))},1e3)})}},open:{description:"Open a specified url in a new tab.",open:function(t,e){return new i.a(function(s,n){var a=e.split(" ")[1];if(!a)return void n({type:"error",label:"Error",message:"a url is required!"});t({type:"success",label:"Success",message:"Opening"}),-1===e.split(" ")[1].indexOf("http")&&(a="http://"+e.split(" ")[1]),window.open(a,"_blank"),s({type:"success",label:"Done",message:"Page Opened!"})})}}}},JcWJ:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("vue-terminal-emulator")],1)},a=[],i={render:n,staticRenderFns:a};e.a=i},M93x:function(t,e,s){"use strict";function n(t){s("UYKI")}var a=s("xJD8"),i=s("JcWJ"),o=s("VU/8"),r=n,l=o(a.a,i.a,!1,r,null,null);e.a=l.exports},Msdv:function(t,e,s){"use strict";function n(t){s("1Xjw")}var a=s("7+p6"),i=s("qJ+V"),o=s("VU/8"),r=n,l=o(a.a,i.a,!1,r,"data-v-5b5d9ea7",null);e.a=l.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),a=s("M93x");n.a.config.productionTip=!1,new n.a({el:"#app",template:"<App/>",components:{App:a.a}})},UYKI:function(t,e){},baUs:function(t,e,s){"use strict";var n={version:{description:"Return this project version",messages:[{message:"1.0.0"}]},contact:{description:"How to contact author",messages:[{message:"Website: http://xiaofeixu.cn"},{message:"Email: xuxiaofei915@gmail.com"},{message:"Github: https://github.com/dongsuo"},{message:"WeChat Offical Account: dongsuo"}]},about:{description:"About author",messages:[{message:"My name is xu xiaofei. I'm a programmer, You can visit my personal website at http://xiaofeixu.cn to learn more about me."}]},readme:{description:"About this project.",messages:[{message:"This is a component that emulates a command terminal in Vue"}]},document:{description:"Document of this project.",messages:[{message:"Under Construction."}]}};e.a=n},"qJ+V":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"terminal",staticStyle:{width:"60%",margin:"0 auto"}},[s("div",{staticStyle:{position:"relative"}},[s("div",{staticClass:"header"},[s("h4",[t._v(t._s(t.title))]),t._v(" "),t._m(0)]),t._v(" "),s("div",{ref:"terminalWindow",staticStyle:{position:"absolute",top:"0",left:"0",right:"0",overflow:"auto","z-index":"1","margin-top":"30px","max-height":"650px"}},[s("div",{staticClass:"terminal-window",attrs:{id:"terminalWindow"}},[s("p",[t._v("Welcome to "+t._s(t.title)+".")]),t._v(" "),s("p",[s("span",{staticClass:"prompt"}),s("span",{staticClass:"cmd"},[t._v("cd "+t._s(t.title))])]),t._v(" "),t._l(t.messageList,function(e,n){return s("p",{key:n},[s("span",[t._v(t._s(e.time))]),t._v(" "),e.label?s("span",{class:e.type},[t._v(t._s(e.label))]):t._e(),t._v(" "),e.message.list?s("span",{staticClass:"cmd"},[s("span",[t._v(t._s(e.message.text))]),t._v(" "),s("ul",t._l(e.message.list,function(e,n){return s("li",{key:n},[e.label?s("span",{class:e.type},[t._v(t._s(e.label)+":")]):t._e(),t._v(" "),s("pre",[t._v(t._s(e))])])}))]):s("span",{staticClass:"cmd"},[t._v(t._s(e.message))])])}),t._v(" "),t.actionResult?s("p",[s("span",{staticClass:"cmd"},[t._v(t._s(t.actionResult))])]):t._e(),t._v(" "),s("p",{ref:"terminalLastLine",staticClass:"terminal-last-line",on:{click:t.handleFocus}},["&nbsp"===t.lastLineContent?s("span",{staticClass:"prompt"},[t._v(" \\"+t._s(t.title)+" ")]):t._e(),t._v(" "),s("span",[t._v(t._s(t.inputCommand))]),t._v(" "),s("span",{class:t.lastLineClass,domProps:{innerHTML:t._s(t.lastLineContent)}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputCommand,expression:"inputCommand"}],ref:"inputBox",staticClass:"input-box",attrs:{disabled:"&nbsp"!==t.lastLineContent,autofocus:"true",type:"text"},domProps:{value:t.inputCommand},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleCommand(e)},input:function(e){e.target.composing||(t.inputCommand=e.target.value)}}})])],2)])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"shell-dots"},[s("li",{staticClass:"red"}),t._v(" "),s("li",{staticClass:"yellow"}),t._v(" "),s("li",{staticClass:"green"})])}],i={render:n,staticRenderFns:a};e.a=i},xJD8:function(t,e,s){"use strict";var n=s("Msdv");e.a={name:"app",components:{VueTerminalEmulator:n.a}}}},["NHnr"]);
//# sourceMappingURL=app.6d4fc7ad8343716bad44.js.map
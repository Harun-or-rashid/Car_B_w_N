(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"1yzx":function(t,e,n){"use strict";n("yPU0")},"4AkS":function(t,e,n){"use strict";var o={bind:function(t,e){var n={event:"mousedown",transition:600};!function(t,e){t.forEach((function(t){isNaN(Number(t))?e.event=t:e.transition=t}))}(Object.keys(e.modifiers),n),t.addEventListener(n.event,(function(o){!function(t,e){var o=e,s=parseInt(getComputedStyle(o).borderWidth.replace("px","")),r=o.getBoundingClientRect(),l=r.left,c=r.top,u=o.offsetWidth,d=o.offsetHeight,p=t.clientX-l,v=t.clientY-c,h=Math.max(p,u-p),f=Math.max(v,d-v),m=window.getComputedStyle(o),x=Math.sqrt(h*h+f*f),b=s>0?s:0,g=document.createElement("div"),y=document.createElement("div");y.className="ripple-container",g.className="ripple",g.style.marginTop="0px",g.style.marginLeft="0px",g.style.width="1px",g.style.height="1px",g.style.transition="all "+n.transition+"ms cubic-bezier(0.4, 0, 0.2, 1)",g.style.borderRadius="50%",g.style.pointerEvents="none",g.style.position="relative",g.style.zIndex=a,g.style.backgroundColor=i,y.style.position="absolute",y.style.left=0-b+"px",y.style.top=0-b+"px",y.style.height="0",y.style.width="0",y.style.pointerEvents="none",y.style.overflow="hidden";var k=o.style.position.length>0?o.style.position:getComputedStyle(o).position;"relative"!==k&&(o.style.position="relative");function _(){setTimeout((function(){g.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((function(){y.parentNode.removeChild(y)}),850),e.removeEventListener("mouseup",_,!1),setTimeout((function(){for(var t=!0,e=0;e<o.childNodes.length;e++)"ripple-container"===o.childNodes[e].className&&(t=!1);t&&(o.style.position="static"!==k?k:"")}),n.transition+250)}y.appendChild(g),o.appendChild(y),g.style.marginLeft=p+"px",g.style.marginTop=v+"px",y.style.width=u+"px",y.style.height=d+"px",y.style.borderTopLeftRadius=m.borderTopLeftRadius,y.style.borderTopRightRadius=m.borderTopRightRadius,y.style.borderBottomLeftRadius=m.borderBottomLeftRadius,y.style.borderBottomRightRadius=m.borderBottomRightRadius,y.style.direction="ltr",setTimeout((function(){g.style.width=2*x+"px",g.style.height=2*x+"px",g.style.marginLeft=p-x+"px",g.style.marginTop=v-x+"px"}),0),"mousedown"===t.type?e.addEventListener("mouseup",_,!1):_()}(o,t,e.value)}));var i=e.value||o.color||"rgba(0, 0, 0, 0.35)",a=o.zIndex||"9999"}};e.a=o},"7WNh":function(t,e,n){"use strict";n("pNOa")},BtHL:function(t,e,n){(e=n("JPst")(!1)).push([t.i,".toastification-close-icon[data-v-5044ad47], .toastification-title[data-v-5044ad47] {\n  line-height: 26px;\n}\n.toastification-title[data-v-5044ad47] {\n  color: inherit;\n}",""]),t.exports=e},OIjt:function(t,e,n){"use strict";var o={components:{BAvatar:n("6KOa").a},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},i=(n("7WNh"),n("KHd+")),a=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toastification"},[n("div",{staticClass:"d-flex align-items-start"},[n("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[n("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),t._v(" "),n("div",{staticClass:"d-flex flex-grow-1"},[n("div",[t.title?n("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t.text?n("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),t._v(" "),n("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():n("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])}),[],!1,null,"5044ad47",null);e.a=a.exports},Tk63:function(t,e,n){(e=n("JPst")(!1)).push([t.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),t.exports=e},dB2T:function(t,e,n){"use strict";n("y1X2")},"i9/6":function(t,e,n){(e=n("JPst")(!1)).push([t.i,'@charset "UTF-8";\n.v-context, .v-context ul {\n  display: block;\n  min-width: 10rem;\n  z-index: 1500;\n  position: fixed;\n  list-style: none;\n  box-sizing: border-box;\n  max-height: calc(100% - 50px);\n  overflow-y: auto;\n}\n[dir] .v-context, [dir] .v-context ul {\n  background-color: #fff;\n  background-clip: padding-box;\n  border-radius: 0.25rem;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  margin: 0;\n  padding: 10px 0;\n}\n.v-context > li, .v-context ul > li {\n  position: relative;\n}\n[dir] .v-context > li, [dir] .v-context ul > li {\n  margin: 0;\n}\n.v-context > li > a, .v-context ul > li > a {\n  display: block;\n  font-weight: 400;\n  color: #212529;\n  text-decoration: none;\n  white-space: nowrap;\n}\n[dir] .v-context > li > a, [dir] .v-context ul > li > a {\n  padding: 0.5rem 1.5rem;\n  background-color: transparent;\n  border: 0;\n}\n.v-context > li > a:hover, .v-context > li > a:focus, .v-context ul > li > a:hover, .v-context ul > li > a:focus {\n  text-decoration: none;\n  color: #212529;\n}\n[dir] .v-context > li > a:hover, [dir] .v-context > li > a:focus, [dir] .v-context ul > li > a:hover, [dir] .v-context ul > li > a:focus {\n  background-color: #f8f9fa;\n}\n.v-context > li > a:focus, .v-context ul > li > a:focus {\n  outline: 0;\n}\n.v-context:focus, .v-context ul:focus {\n  outline: 0;\n}\n.v-context__sub > a:after {\n  content: "›";\n}\n[dir=ltr] .v-context__sub > a:after {\n  float: right;\n  padding-left: 1rem;\n}\n[dir=rtl] .v-context__sub > a:after {\n  float: left;\n  padding-right: 1rem;\n}\n.v-context__sub > ul {\n  display: none;\n}\n[dir] .v-context, [dir] .v-context ul {\n  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);\n  border: none;\n  border-radius: 0.358rem;\n  padding: 0.5rem 0;\n}\n.v-context > li > a, .v-context ul > li > a {\n  color: #2d2723;\n}\n[dir] .v-context > li > a, [dir] .v-context ul > li > a {\n  padding: 0.65rem 1.28rem;\n}\n.v-context > li > a:hover, .v-context > li > a:focus, .v-context ul > li > a:hover, .v-context ul > li > a:focus {\n  color: #7367f0;\n}\n[dir] .v-context > li > a:hover, [dir] .v-context > li > a:focus, [dir] .v-context ul > li > a:hover, [dir] .v-context ul > li > a:focus {\n  background-color: rgba(115, 103, 240, 0.12);\n}\n[dir] body.dark-layout .v-context {\n  background-color: #161d31;\n}\nbody.dark-layout .v-context > li > a {\n  color: #b4b7bd;\n}',""]),t.exports=e},ikch:function(t,e,n){"use strict";n.r(e);var o=n("m8qd"),i=n("GUe+"),a=n("qlm0"),s=n("XuX8"),r=n.n(s);/^2\./.test(r.a.version)||r.a.util.warn("VueClickaway 2.2.2 only supports Vue 2.x, and does not support Vue "+r.a.version);var l="_vue_clickaway_handler";function c(t,e,n){u(t);var o=n.context,i=e.value;if("function"==typeof i){var a=!1;setTimeout((function(){a=!0}),0),t[l]=function(e){var n=e.path||(e.composedPath?e.composedPath():void 0);if(a&&(n?n.indexOf(t)<0:!t.contains(e.target)))return i.call(o,e)},document.documentElement.addEventListener("click",t[l],!1)}}function u(t){document.documentElement.removeEventListener("click",t[l],!1),delete t[l]}var d={bind:c,update:function(t,e){e.value!==e.oldValue&&c(t,e)},unbind:u};Array.from||(Array.from=t=>[].slice.call(t)),Array.isArray||(Array.isArray=t=>"[object Array]"===Object.prototype.toString.call(t));const p=Array.from,v=Array.isArray,h=27,f=37,m=38,x=39,b=40,g=(t,e,n)=>{t&&t.addEventListener&&t.addEventListener(e,n)},y=(t,e,n)=>{t&&t.removeEventListener&&t.removeEventListener(e,n)},k=t=>_(t)?t.getBoundingClientRect():null,_=t=>Boolean(t&&t.nodeType===Node.ELEMENT_NODE),S=t=>{if(!_(t)||(e=document.body,n=t,!e||"function"!=typeof e.contains||!e.contains(n)))return!1;var e,n;if("none"===t.style.display)return!1;const o=k(t);return Boolean(o&&o.height>0&&o.width>0)},C=(t,e)=>p((_(e)?e:document).querySelectorAll(t)),w=(t,e,n)=>{e&&_(t)&&t.setAttribute(e,n)},E=(t,e)=>{let n=t.parentElement;for(;null!==n&&!n.classList.contains(e);)n=n.parentElement;return n},B=(t,e={},n={},o={})=>{const i=n[t]||o[t];return"function"==typeof i?i(e):i};var I={directives:{onClickaway:d},props:{closeOnClick:{type:Boolean,default:!0},closeOnScroll:{type:Boolean,default:!0},lazy:{type:Boolean,default:!1},itemSelector:{type:[String,Array],default:()=>[".v-context-item",".v-context > li > a"]},role:{type:String,default:"menu"},subMenuOffset:{type:Number,default:10},useScrollHeight:{type:Boolean,default:!1},useScrollWidth:{type:Boolean,default:!1},heightOffset:{type:Number,default:25},widthOffset:{type:Number,default:25},tag:{type:String,default:"ul"}},computed:{style(){return this.show?{top:this.top+"px",left:this.left+"px"}:null}},data:()=>({top:null,left:null,show:!1,data:null,localItemSelector:"",activeSubMenu:null}),created(){this.localItemSelector=this.mapItemSelector(this.itemSelector)},beforeDestroy(){this.closeOnScroll&&this.removeScrollEventListener()},methods:{addScrollEventListener(){g(window,"scroll",this.close)},addHoverEventListener(t){t.querySelectorAll(".v-context__sub").forEach(t=>{g(t,"mouseenter",this.openSubMenu),g(t,"mouseleave",this.closeSubMenu)})},close(){if(this.show){for(;null!==this.activeSubMenu;)E(this.activeSubMenu,"v-context__sub").dispatchEvent(new Event("mouseleave"));this.resetData(),this.removeHoverEventListener(this.$el),this.closeOnScroll&&this.removeScrollEventListener(),this.$emit("close")}},focusItem(t,e){const n=e.find((e,n)=>n===t);n&&n.focus()},focusNext(t,e){this.show&&(t.preventDefault(),t.stopPropagation(),this.$nextTick(()=>{const n=this.getItems();if(n.length<1)return;let o=n.indexOf(t.target);e&&o>0?o--:!e&&o<n.length-1&&o++,o<0&&(o=0),this.focusItem(o,n)}))},getItems(){return(C(this.localItemSelector,this.activeSubMenu||this.$el)||[]).filter(S)},mapItemSelector:t=>(v(t)&&(t=t.map(t=>t+":not(.disabled):not([disabled])").join(", ")),t),onClick(){this.close()},onKeydown(t){const e=t.keyCode;if(e===h)this.close();else if(e===b)this.focusNext(t,!1);else if(e===m)this.focusNext(t,!0);else if(e===x){const e=E(t.target,"v-context__sub");e&&e.getElementsByClassName("v-context")[0]!==this.activeSubMenu&&(e.dispatchEvent(new Event("mouseenter")),this.focusNext(t,!1))}else if(e===f){if(!this.activeSubMenu)return;const t=E(this.activeSubMenu,"v-context__sub");t.dispatchEvent(new Event("mouseleave"));const e=this.getItems(),n=e.indexOf(t.getElementsByTagName("a")[0]);this.focusItem(n,e)}},open(t,e){this.data=e,this.show=!0,this.$nextTick(()=>{[this.top,this.left]=this.positionMenu(t.clientY,t.clientX,this.$el),this.$el.focus(),this.setItemRoles(),this.addHoverEventListener(this.$el),this.closeOnScroll&&this.addScrollEventListener(),this.$emit("open",t,this.data,this.top,this.left)})},openSubMenu(t){const e=this.getSubMenuElementByEvent(t),n=E(e.parentElement,"v-context"),o=k(t.target);if(this.activeSubMenu!==n)for(;null!==this.activeSubMenu&&this.activeSubMenu!==n&&this.activeSubMenu!==e;)E(this.activeSubMenu,"v-context__sub").dispatchEvent(new Event("mouseleave"));e.style.display="block";let[i,a]=this.positionMenu(o.top,o.right-this.subMenuOffset,e);e.style.left=a+"px",e.style.top=i+"px",this.activeSubMenu=e},closeSubMenu(t){const e=this.getSubMenuElementByEvent(t),n=E(e,"v-context");if(this.activeSubMenu!==e)for(;null!==this.activeSubMenu&&this.activeSubMenu!==e;)E(this.activeSubMenu,"v-context__sub").dispatchEvent(new Event("mouseleave"));e.style.display="none",this.activeSubMenu=n&&E(n,"v-context__sub")?n:null},getSubMenuElementByEvent:t=>t.target.getElementsByTagName("ul")[0],positionMenu(t,e,n){const o=this.useScrollHeight?n.scrollHeight:n.offsetHeight,i=window.innerHeight-o-this.heightOffset,a=this.useScrollWidth?n.scrollWidth:n.offsetWidth,s=window.innerWidth-a-this.widthOffset;return t>i&&(t=i),e>s&&(e=s),[t,e]},removeScrollEventListener(){y(window,"scroll",this.close)},removeHoverEventListener(t){t.querySelectorAll(".v-context__sub").forEach(t=>{y(t,"mouseenter",this.openSubMenu),y(t,"mouseleave",this.closeSubMenu)})},resetData(){this.top=null,this.left=null,this.data=null,this.show=!1},setItemRoles(){C(this.localItemSelector,this.$el).forEach(t=>{w(t,"role","menuitem"),w(t,"tabindex","-1")})}},watch:{closeOnScroll(t,e){t!==e&&(t&&this.show?this.addScrollEventListener():this.removeScrollEventListener())},itemSelector(t,e){t!==e&&(this.localItemSelector=this.mapItemSelector(t))}},render(t){if(this.lazy&&!this.show)return t(!1);const e={"!contextmenu":t=>{t.preventDefault()},keydown:this.onKeydown};this.closeOnClick&&(e.click=this.onClick);const n=[{name:"on-clickaway",value:this.close,rawName:"v-on-clickaway"}];return this.lazy||n.push({name:"show",value:this.show,rawName:"v-show",expression:"show"}),t(this.tag,{staticClass:"v-context",style:this.style,attrs:{tabindex:"-1",role:this.role,"aria-hidden":this.lazy?null:String(!this.show)},on:e,directives:n},[B("default",{data:this.data},this.$scopedSlots,this.$slots)])}},L=n("OIjt"),M=n("4AkS"),O={components:{BCardCode:o.a,BButton:i.a,VueContext:I,BLink:a.a,ToastificationContent:L.a},directives:{Ripple:M.a},data:function(){return{menuData:[{icon:"PlusIcon",text:"New"},{icon:"FileIcon",text:"Open"},{icon:"SaveIcon",text:"Save"},{icon:"SaveIcon",text:"Save As"},{icon:"XIcon",text:"Close"}],codeSimple:"\n<template>\n  <div>\n\n    \x3c!-- button --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @contextmenu.prevent=\"$refs.menu.open\"\n    >\n      Right click on me\n    </b-button>\n\n    \x3c!-- context --\x3e\n    <vue-context ref=\"menu\">\n      <li>\n        <b-link\n          v-for=\"data in menuData\"\n          :key=\"data.text\"\n          class=\"d-flex align-items-center\"\n          @click=\"optionClicked(data.text,data.icon)\"\n        >\n          <feather-icon\n            :icon=\"data.icon\"\n            size=\"16\"\n          />\n          <span class=\"ml-75\">{{ data.text }}</span>\n        </b-link>\n      </li>\n    </vue-context>\n  </div>\n</template>\n\n<script>\nimport { BButton, BLink } from 'bootstrap-vue'\nimport { VueContext } from 'vue-context'\nimport ToastificationContent from '@core/components/toastification/ToastificationContent.vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n    VueContext,\n    BLink,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  directives: {\n    Ripple,\n  },\n  data() {\n    return {\n      menuData: [\n        { icon: 'PlusIcon', text: 'New' },\n        { icon: 'FileIcon', text: 'Open' },\n        { icon: 'SaveIcon', text: 'Save' },\n        { icon: 'SaveIcon', text: 'Save As' },\n        { icon: 'XIcon', text: 'Close' },\n      ],\n      codeSimple,\n    }\n  },\n  methods: {\n    optionClicked(text, icon) {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: `You have click on ${text}!`,\n          icon,\n        },\n      })\n    },\n  },\n}\n<\/script>\n"}},methods:{optionClicked:function(t,e){this.$toast({component:L.a,props:{title:"You have click on ".concat(t,"!"),icon:e}})}}},T=n("KHd+"),N=Object(T.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Simple"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeSimple)+"\n  ")]},proxy:!0}])},[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{contextmenu:function(e){return e.preventDefault(),t.$refs.menu.open.apply(null,arguments)}}},[t._v("\n    Right click on me\n  ")]),t._v(" "),n("vue-context",{ref:"menu"},[n("li",t._l(t.menuData,(function(e){return n("b-link",{key:e.text,staticClass:"d-flex align-items-center",on:{click:function(n){return t.optionClicked(e.text,e.icon)}}},[n("feather-icon",{attrs:{icon:e.icon,size:"16"}}),t._v(" "),n("span",{staticClass:"ml-75"},[t._v(t._s(e.text))])],1)})),1)])],1)}),[],!1,null,null,null).exports,$=n("1uQM"),R={components:{BButton:i.a,BLink:a.a,BCardText:$.a,BCardCode:o.a,VueContext:I,ToastificationContent:L.a},directives:{Ripple:M.a},data:function(){return{menuData:[{icon:"ChevronRightIcon",text:"Next"},{icon:"ChevronLeftIcon",text:"Previous"},{icon:"PlusIcon",text:"Increase"},{icon:"MinusIcon",text:"Decrease"},{icon:"ShuffleIcon",text:"Random"}],codeCloseOnClick:"\n<template>\n  <div>\n\n    \x3c!-- button --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @contextmenu.prevent=\"$refs.menuProp.open\"\n    >\n      Right click on me - Do not close\n    </b-button>\n\n    \x3c!-- context --\x3e\n    <vue-context\n      ref=\"menuProp\"\n      :close-on-click=\"false\"\n    >\n      <li\n        v-for=\"data in menuData\"\n        :key=\"data.icon\"\n      >\n        <b-link\n          class=\"d-flex align-items-center\"\n          @click=\"optionClicked(data.text,data.icon)\"\n        >\n          <feather-icon\n            :icon=\"data.icon\"\n            size=\"16\"\n          />\n          <span class=\"ml-75\">{{ data.text }}</span>\n        </b-link>\n      </li>\n    </vue-context>\n  </div>\n</template>\n\n<script>\nimport { BButton, BLink } from 'bootstrap-vue'\nimport { VueContext } from 'vue-context'\nimport ToastificationContent from '@core/components/toastification/ToastificationContent.vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n    BLink,\n    VueContext,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  directives: {\n    Ripple,\n  },\n  data() {\n    return {\n      menuData: [\n        { icon: 'ChevronRightIcon', text: 'Next' },\n        { icon: 'ChevronLeftIcon', text: 'Previous' },\n        { icon: 'PlusIcon', text: 'Increase' },\n        { icon: 'MinusIcon', text: 'Decrease' },\n        { icon: 'ShuffleIcon', text: 'Random' },\n      ],\n    }\n  },\n  methods: {\n    optionClicked(text, icon) {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: `You have click on ${text}!`,\n          icon,\n        },\n      })\n    },\n  },\n}\n<\/script>\n"}},methods:{optionClicked:function(t,e){this.$toast({component:L.a,props:{title:"You have click on ".concat(t,"!"),icon:e}})}}},D={components:{ContextMenuSimple:N,ContextMenuCloseOnClick:Object(T.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Close On Click"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeCloseOnClick)+"\n  ")]},proxy:!0}])},[n("b-card-text",[n("code",[t._v("closeOnClick")]),t._v(" "),n("span",[t._v(" is set to ")]),t._v(" "),n("code",[t._v("false")]),t._v(" "),n("span",[t._v(" , the context menu will not automatically close when clicked on. You can toggle this feature on and off in this demo by using the checkbox below.")])]),t._v(" "),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{contextmenu:function(e){return e.preventDefault(),t.$refs.menuProp.open.apply(null,arguments)}}},[t._v("\n    Right click on me - Do not close\n  ")]),t._v(" "),n("vue-context",{ref:"menuProp",attrs:{"close-on-click":!1}},t._l(t.menuData,(function(e){return n("li",{key:e.icon},[n("b-link",{staticClass:"d-flex align-items-center",on:{click:function(n){return t.optionClicked(e.text,e.icon)}}},[n("feather-icon",{attrs:{icon:e.icon,size:"16"}}),t._v(" "),n("span",{staticClass:"ml-75"},[t._v(t._s(e.text))])],1)],1)})),0)],1)}),[],!1,null,null,null).exports}},A=(n("dB2T"),Object(T.a)(D,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("context-menu-simple"),this._v(" "),e("context-menu-close-on-click")],1)}),[],!1,null,null,null));e.default=A.exports},m8qd:function(t,e,n){"use strict";n("6cQw");var o=n("IF94"),i=n("SWgu"),a=n("ugaB"),s=n("YZfj"),r=n("WEOK"),l=(n("wZee"),n("hL/g"),n("jVEP")),c=n.n(l),u={components:{BCard:o.a,BCardTitle:i.a,BCardSubTitle:a.a,BCardBody:s.a,BCollapse:r.a,Prism:c.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var t=JSON.parse(JSON.stringify(this.$attrs));return delete t.title,delete t["sub-title"],t}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},d=(n("1yzx"),n("KHd+")),p=Object(d.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",t._g(t._b({attrs:{"no-body":""}},"b-card",t.cardAttrs,!1),t.$listeners),[n("div",{staticClass:"card-header"},[n("div",[n("b-card-title",[t._v(t._s(t.$attrs.title))]),t._v(" "),t.$attrs["sub-title"]?n("b-card-sub-title",[t._v("\n        "+t._s(t.$attrs["sub-title"])+"\n      ")]):t._e()],1),t._v(" "),n("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":t.code_visible?"false":"true","aria-controls":t.parentID},on:{click:function(e){t.code_visible=!t.code_visible}}})]),t._v(" "),void 0!==t.$attrs["no-body"]?[t._t("default"),t._v(" "),n("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(e){t.code_visible=e},expression:"code_visible"}},[n("b-card-body",[n("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],1)]:n("b-card-body",[t._t("default"),t._v(" "),n("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(e){t.code_visible=e},expression:"code_visible"}},[n("div",{staticClass:"p-1"}),t._v(" "),n("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);e.a=p.exports},pNOa:function(t,e,n){var o=n("BtHL");"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(o,i);o.locals&&(t.exports=o.locals)},y1X2:function(t,e,n){var o=n("i9/6");"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(o,i);o.locals&&(t.exports=o.locals)},yPU0:function(t,e,n){var o=n("Tk63");"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(o,i);o.locals&&(t.exports=o.locals)}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{"1yzx":function(t,e,r){"use strict";r("yPU0")},"4AkS":function(t,e,r){"use strict";var n={bind:function(t,e){var r={event:"mousedown",transition:600};!function(t,e){t.forEach((function(t){isNaN(Number(t))?e.event=t:e.transition=t}))}(Object.keys(e.modifiers),r),t.addEventListener(r.event,(function(n){!function(t,e){var n=e,i=parseInt(getComputedStyle(n).borderWidth.replace("px","")),s=n.getBoundingClientRect(),d=s.left,c=s.top,l=n.offsetWidth,p=n.offsetHeight,u=t.clientX-d,v=t.clientY-c,m=Math.max(u,l-u),b=Math.max(v,p-v),g=window.getComputedStyle(n),h=Math.sqrt(m*m+b*b),f=i>0?i:0,_=document.createElement("div"),x=document.createElement("div");x.className="ripple-container",_.className="ripple",_.style.marginTop="0px",_.style.marginLeft="0px",_.style.width="1px",_.style.height="1px",_.style.transition="all "+r.transition+"ms cubic-bezier(0.4, 0, 0.2, 1)",_.style.borderRadius="50%",_.style.pointerEvents="none",_.style.position="relative",_.style.zIndex=a,_.style.backgroundColor=o,x.style.position="absolute",x.style.left=0-f+"px",x.style.top=0-f+"px",x.style.height="0",x.style.width="0",x.style.pointerEvents="none",x.style.overflow="hidden";var y=n.style.position.length>0?n.style.position:getComputedStyle(n).position;"relative"!==y&&(n.style.position="relative");function k(){setTimeout((function(){_.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((function(){x.parentNode.removeChild(x)}),850),e.removeEventListener("mouseup",k,!1),setTimeout((function(){for(var t=!0,e=0;e<n.childNodes.length;e++)"ripple-container"===n.childNodes[e].className&&(t=!1);t&&(n.style.position="static"!==y?y:"")}),r.transition+250)}x.appendChild(_),n.appendChild(x),_.style.marginLeft=u+"px",_.style.marginTop=v+"px",x.style.width=l+"px",x.style.height=p+"px",x.style.borderTopLeftRadius=g.borderTopLeftRadius,x.style.borderTopRightRadius=g.borderTopRightRadius,x.style.borderBottomLeftRadius=g.borderBottomLeftRadius,x.style.borderBottomRightRadius=g.borderBottomRightRadius,x.style.direction="ltr",setTimeout((function(){_.style.width=2*h+"px",_.style.height=2*h+"px",_.style.marginLeft=u-h+"px",_.style.marginTop=v-h+"px"}),0),"mousedown"===t.type?e.addEventListener("mouseup",k,!1):k()}(n,t,e.value)}));var o=e.value||n.color||"rgba(0, 0, 0, 0.35)",a=n.zIndex||"9999"}};e.a=n},ISAy:function(t,e,r){"use strict";r("dVrQ")},MQ8C:function(t,e,r){"use strict";r.r(e);var n=r("m8qd"),o=r("GUe+"),a=r("4AkS"),i={name:"VxTour",components:{BButton:o.a},props:{steps:{required:!0,type:Array}}},s=r("KHd+"),d=Object(s.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-tour",{attrs:{name:"vuexyTour",steps:t.steps},scopedSlots:t._u([{key:"default",fn:function(e){return[r("transition",{attrs:{name:"fade"}},t._l(e.steps,(function(n,o){return e.currentStep===o?r("v-step",{key:o,attrs:{step:n,"previous-step":e.previousStep,"next-step":e.nextStep,stop:e.stop,"is-first":e.isFirst,"is-last":e.isLast,labels:e.labels}},[r("div",{staticClass:"tour-actions d-flex justify-content-between",attrs:{slot:"actions"},slot:"actions"},[e.currentStep!=e.steps.length-1?r("b-button",{staticClass:"btn-tour-skip mr-1",attrs:{size:"sm",variant:"outline-primary"},on:{click:e.stop}},[r("span",{staticClass:"mr-25 align-middle"},[t._v("Skip")]),t._v(" "),r("feather-icon",{attrs:{icon:"XIcon",size:"12"}})],1):t._e(),t._v(" "),e.currentStep?r("b-button",{attrs:{size:"sm",variant:"outline-primary mr-1"},on:{click:e.previousStep}},[r("feather-icon",{attrs:{icon:"ChevronLeftIcon",size:"12"}}),t._v(" "),r("span",{staticClass:"ml-25 align-middle"},[t._v("Previous")])],1):t._e(),t._v(" "),e.currentStep!=e.steps.length-1?r("b-button",{staticClass:"btn-tour-next",attrs:{size:"sm",variant:"primary"},on:{click:e.nextStep}},[r("span",{staticClass:"mr-25 align-middle"},[t._v("Next")]),t._v(" "),r("feather-icon",{attrs:{icon:"ChevronRightIcon",size:"12"}})],1):t._e(),t._v(" "),e.currentStep==e.steps.length-1?r("b-button",{staticClass:"btn-tour-finish",attrs:{size:"sm",variant:"primary"},on:{click:e.stop}},[r("span",{staticClass:"mr-25 align-middle"},[t._v("Finish")]),t._v(" "),r("feather-icon",{attrs:{icon:"CheckCircleIcon",size:"12"}})],1):t._e()],1)]):t._e()})),1)]}}])})}),[],!1,null,null,null).exports,c={name:"ShepherdExample",components:{BCardCode:n.a,BButton:o.a,AppTour:d},directives:{Ripple:a.a},data:function(){return{codeTour:"\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"tourStart\"\n    >\n      Start Tour\n    </b-button>\n\n    <app-tour :steps=\"steps\" />\n  </div>\n</template>\n\n<script>\nimport { BButton } from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\nimport AppTour from '@core/components/app-tour/AppTour.vue'\n\nexport default {\n  name: 'ShepherdExample',\n  components: {\n    BButton,\n    AppTour,\n  },\n  directives: {\n    Ripple,\n  },\n  data() {\n    return {\n      steps: [\n        {\n          target: '#tour-card',\n          header: {\n            title: 'Card',\n          },\n          content: 'This card contains demo for the tour.',\n        },\n        {\n          target: '#tour-card .icon-code',\n          header: {\n            title: 'View demo Source',\n          },\n          content: 'If you ever find your self confused, you can click on this code icon to check the source of current demo.',\n        },\n        {\n          target: '#tour-card .btn',\n          header: {\n            title: 'Trigger Tour',\n          },\n          content: 'You can click on this button to trigger the tour.',\n        },\n      ],\n    }\n  },\n  methods: {\n\n    // tour steps\n    tourStart() {\n      this.$tours.vuexyTour.start()\n    },\n  },\n}\n<\/script>\n\n<style lang=\"scss\">\n@import '~@resources/scss/vue/libs/tour.scss';\n</style>\n",steps:[{target:"#tour-card",header:{title:"Card"},content:"This card contains demo for the tour."},{target:"#tour-card .icon-code",header:{title:"View demo Source"},content:"If you ever find your self confused, you can click on this code icon to check the source of current demo."},{target:"#tour-card .btn",header:{title:"Trigger Tour"},content:"You can click on this button to trigger the tour."}]}},methods:{tourStart:function(){this.$tours.vuexyTour.start()}}},l=(r("ISAy"),Object(s.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card-code",{attrs:{id:"tour-card",title:"Tour"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeTour)+"\n  ")]},proxy:!0}])},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:t.tourStart}},[t._v("\n    Start Tour\n  ")]),t._v(" "),r("app-tour",{attrs:{steps:t.steps}})],1)}),[],!1,null,null,null));e.default=l.exports},SFuw:function(t,e,r){(e=r("JPst")(!1)).push([t.i,"body.v-tour--active{pointer-events:none}.v-tour{pointer-events:auto}.v-tour__target--highlighted{-webkit-box-shadow:0 0 0 4px rgba(0,0,0,.4);box-shadow:0 0 0 4px rgba(0,0,0,.4);pointer-events:auto;z-index:9999}.v-tour__target--relative{position:relative}.v-step[data-v-0436c460]{background:#50596c;color:#fff;max-width:320px;border-radius:3px;-webkit-box-shadow:transparent 0 0 0 0,transparent 0 0 0 0,rgba(0,0,0,.1) 0 4px 6px -1px,rgba(0,0,0,.06) 0 2px 4px -1px;box-shadow:0 0 0 0 transparent,0 0 0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);padding:1rem;pointer-events:auto;text-align:center;z-index:10000}.v-step--sticky[data-v-0436c460]{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.v-step--sticky .v-step__arrow[data-v-0436c460]{display:none}.v-step .v-step__arrow[data-v-0436c460]{width:0;height:0;border-style:solid;position:absolute;margin:.5rem;border-color:#50596c}.v-step .v-step__arrow--dark[data-v-0436c460]{border-color:#454d5d}.v-step[x-placement^=top][data-v-0436c460]{margin-bottom:.5rem}.v-step[x-placement^=top] .v-step__arrow[data-v-0436c460]{border-width:.5rem .5rem 0 .5rem;border-left-color:transparent;border-right-color:transparent;border-bottom-color:transparent;bottom:-.5rem;left:calc(50% - 1rem);margin-top:0;margin-bottom:0}.v-step[x-placement^=bottom][data-v-0436c460]{margin-top:.5rem}.v-step[x-placement^=bottom] .v-step__arrow[data-v-0436c460]{border-width:0 .5rem .5rem .5rem;border-left-color:transparent;border-right-color:transparent;border-top-color:transparent;top:-.5rem;left:calc(50% - 1rem);margin-top:0;margin-bottom:0}.v-step[x-placement^=right][data-v-0436c460]{margin-left:.5rem}.v-step[x-placement^=right] .v-step__arrow[data-v-0436c460]{border-width:.5rem .5rem .5rem 0;border-left-color:transparent;border-top-color:transparent;border-bottom-color:transparent;left:-.5rem;top:calc(50% - 1rem);margin-left:0;margin-right:0}.v-step[x-placement^=left][data-v-0436c460]{margin-right:.5rem}.v-step[x-placement^=left] .v-step__arrow[data-v-0436c460]{border-width:.5rem 0 .5rem .5rem;border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent;right:-.5rem;top:calc(50% - 1rem);margin-left:0;margin-right:0}.v-step__header[data-v-0436c460]{margin:-1rem -1rem .5rem;padding:.5rem;background-color:#454d5d;border-top-left-radius:3px;border-top-right-radius:3px}.v-step__content[data-v-0436c460]{margin:0 0 1rem 0}.v-step__button[data-v-0436c460]{background:transparent;border:.05rem solid #fff;border-radius:.1rem;color:#fff;cursor:pointer;display:inline-block;font-size:.8rem;height:1.8rem;line-height:1rem;outline:none;margin:0 .2rem;padding:.35rem .4rem;text-align:center;text-decoration:none;-webkit-transition:all .2s ease;transition:all .2s ease;vertical-align:middle;white-space:nowrap}.v-step__button[data-v-0436c460]:hover{background-color:hsla(0,0%,100%,.95);color:#50596c}",""]),t.exports=e},Tk63:function(t,e,r){(e=r("JPst")(!1)).push([t.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),t.exports=e},dVrQ:function(t,e,r){var n=r("rd1I");"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(n,o);n.locals&&(t.exports=n.locals)},m8qd:function(t,e,r){"use strict";r("6cQw");var n=r("IF94"),o=r("SWgu"),a=r("ugaB"),i=r("YZfj"),s=r("WEOK"),d=(r("wZee"),r("hL/g"),r("jVEP")),c=r.n(d),l={components:{BCard:n.a,BCardTitle:o.a,BCardSubTitle:a.a,BCardBody:i.a,BCollapse:s.a,Prism:c.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var t=JSON.parse(JSON.stringify(this.$attrs));return delete t.title,delete t["sub-title"],t}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},p=(r("1yzx"),r("KHd+")),u=Object(p.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",t._g(t._b({attrs:{"no-body":""}},"b-card",t.cardAttrs,!1),t.$listeners),[r("div",{staticClass:"card-header"},[r("div",[r("b-card-title",[t._v(t._s(t.$attrs.title))]),t._v(" "),t.$attrs["sub-title"]?r("b-card-sub-title",[t._v("\n        "+t._s(t.$attrs["sub-title"])+"\n      ")]):t._e()],1),t._v(" "),r("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":t.code_visible?"false":"true","aria-controls":t.parentID},on:{click:function(e){t.code_visible=!t.code_visible}}})]),t._v(" "),void 0!==t.$attrs["no-body"]?[t._t("default"),t._v(" "),r("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(e){t.code_visible=e},expression:"code_visible"}},[r("b-card-body",[r("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],1)]:r("b-card-body",[t._t("default"),t._v(" "),r("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(e){t.code_visible=e},expression:"code_visible"}},[r("div",{staticClass:"p-1"}),t._v(" "),r("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);e.a=u.exports},rd1I:function(t,e,r){var n=r("JPst"),o=r("SFuw");(e=n(!1)).i(o),e.push([t.i,".v-tour .v-step {\n  z-index: 55000;\n  filter: drop-shadow(0 0 7px rgba(0, 0, 0, 0.2));\n  min-width: 350px;\n}\n[dir] .v-tour .v-step {\n  background-color: #fff;\n  border-radius: 0.428rem;\n}\n[dir=ltr] .v-tour .v-step {\n  text-align: left;\n}\n[dir=rtl] .v-tour .v-step {\n  text-align: right;\n}\n[dir] .v-tour .v-step .v-step__arrow {\n  border-color: #7367f0;\n}\n[dir=ltr] .v-tour .v-step .v-step__arrow {\n  border-left-color: transparent;\n  border-right-color: transparent;\n}\n[dir=rtl] .v-tour .v-step .v-step__arrow {\n  border-right-color: transparent;\n  border-left-color: transparent;\n}\n.v-tour .v-step .v-step__header {\n  font-weight: 500;\n  line-height: 2rem;\n}\n[dir] .v-tour .v-step .v-step__header {\n  background-color: #7367f0;\n  padding: 0.38rem 1.2rem;\n  margin-bottom: 0;\n}\n[dir=ltr] .v-tour .v-step .v-step__header {\n  border-top-left-radius: 0.428rem;\n  border-top-right-radius: 0.428rem;\n}\n[dir=rtl] .v-tour .v-step .v-step__header {\n  border-top-right-radius: 0.428rem;\n  border-top-left-radius: 0.428rem;\n}\n.v-tour .v-step .v-step__content {\n  color: #2d2723;\n}\n[dir] .v-tour .v-step .v-step__content {\n  padding: 1rem 0;\n  margin-bottom: 0;\n}\n[dir=ltr] .v-tour .v-step .v-step__content {\n  border-bottom-left-radius: 0.428rem;\n  border-bottom-right-radius: 0.428rem;\n}\n[dir=rtl] .v-tour .v-step .v-step__content {\n  border-bottom-right-radius: 0.428rem;\n  border-bottom-left-radius: 0.428rem;\n}\n[dir] .dark-layout .v-step {\n  background-color: #283046;\n}\nhtml[dir=rtl] .v-tour .v-step .btn svg {\n  transform: rotate(180deg);\n}",""]),t.exports=e},yPU0:function(t,e,r){var n=r("Tk63");"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(n,o);n.locals&&(t.exports=n.locals)}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{"1yzx":function(n,t,e){"use strict";e("yPU0")},Tk63:function(n,t,e){(t=e("JPst")(!1)).push([n.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),n.exports=t},iPaL:function(n,t,e){"use strict";var a=e("m8qd");t.a=a.a},m8qd:function(n,t,e){"use strict";e("6cQw");var a=e("IF94"),r=e("SWgu"),s=e("ugaB"),i=e("YZfj"),o=e("WEOK"),l=(e("wZee"),e("hL/g"),e("jVEP")),d=e.n(l),c={components:{BCard:a.a,BCardTitle:r.a,BCardSubTitle:s.a,BCardBody:i.a,BCollapse:o.a,Prism:d.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var n=JSON.parse(JSON.stringify(this.$attrs));return delete n.title,delete n["sub-title"],n}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},p=(e("1yzx"),e("KHd+")),v=Object(p.a)(c,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card",n._g(n._b({attrs:{"no-body":""}},"b-card",n.cardAttrs,!1),n.$listeners),[e("div",{staticClass:"card-header"},[e("div",[e("b-card-title",[n._v(n._s(n.$attrs.title))]),n._v(" "),n.$attrs["sub-title"]?e("b-card-sub-title",[n._v("\n        "+n._s(n.$attrs["sub-title"])+"\n      ")]):n._e()],1),n._v(" "),e("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":n.code_visible?"false":"true","aria-controls":n.parentID},on:{click:function(t){n.code_visible=!n.code_visible}}})]),n._v(" "),void 0!==n.$attrs["no-body"]?[n._t("default"),n._v(" "),e("b-collapse",{staticClass:"card-code",attrs:{id:n.parentID,visible:n.code_visible},model:{value:n.code_visible,callback:function(t){n.code_visible=t},expression:"code_visible"}},[e("b-card-body",[e("prism",{attrs:{language:n.codeLanguage}},[n._t("code")],2)],1)],1)]:e("b-card-body",[n._t("default"),n._v(" "),e("b-collapse",{staticClass:"card-code",attrs:{id:n.parentID,visible:n.code_visible},model:{value:n.code_visible,callback:function(t){n.code_visible=t},expression:"code_visible"}},[e("div",{staticClass:"p-1"}),n._v(" "),e("prism",{attrs:{language:n.codeLanguage}},[n._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);t.a=v.exports},"sPb/":function(n,t,e){"use strict";e.r(t);var a=e("oVt+"),r=e("sove"),s=e("iPaL"),i=e("AeMN"),o=e("1uQM"),l={components:{BCardCode:s.a,BSpinner:i.a,BCardText:o.a},data:function(){return{codeBorder:"\n<template>\n  <b-spinner label=\"Loading...\" />\n</template>\n\n<script>\nimport { BSpinner } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BSpinner,\n  },\n}\n<\/script>\n"}}},d=e("KHd+"),c=Object(d.a)(l,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Border Spinners"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeBorder)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[n._v("Use the default ")]),n._v(" "),e("code",[n._v("border")]),n._v(" "),e("span",[n._v(" type spinners for a lightweight loading indicator.")])]),n._v(" "),e("b-spinner",{attrs:{label:"Loading..."}})],1)}),[],!1,null,null,null).exports,p={components:{BCardCode:s.a,BSpinner:i.a,BCardText:o.a},data:function(){return{variants:["primary","secondary","danger","warning","success","info","light","dark"],codeBorderColor:"\n<template>\n  <div class=\"demo-inline-spacing\">\n    <b-spinner\n      v-for=\"variant in variants\"\n      :key=\"variant\"\n      class=\"mr-1\"\n      :variant=\"variant\"\n    />\n  </div>\n</template>\n\n<script>\nimport { BSpinner } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BSpinner,\n  },\n  data: () => ({\n    variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark'],\n  }),\n}\n<\/script>\n"}}},v=Object(d.a)(p,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Colored Spinners"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeBorderColor)+"\n  ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[n._v("You can customize the color using the standard text color variants using the ")]),n._v(" "),e("code",[n._v("variant")]),n._v(" "),e("span",[n._v(" prop.")])]),n._v(" "),e("div",{staticClass:"demo-inline-spacing"},n._l(n.variants,(function(n){return e("b-spinner",{key:n,staticClass:"mr-1",attrs:{variant:n}})})),1)],1)}),[],!1,null,null,null).exports,b={components:{BCardCode:s.a,BSpinner:i.a,BCardText:o.a},data:function(){return{codeGrow:'\n<template>\n  <b-spinner type="grow" label="Loading..." />\n</template>\n\n<script>\nimport { BSpinner } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BSpinner,\n  },\n}\n<\/script>\n'}}},u=Object(d.a)(b,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Growing Spinner"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeGrow)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[n._v("If you don't fancy a ")]),n._v(" "),e("code",[n._v("border")]),n._v(" "),e("span",[n._v(" spinner, switch to the ")]),n._v(" "),e("code",[n._v("grow")]),n._v(" "),e("span",[n._v(" spinner by setting the prop ")]),n._v(" "),e("code",[n._v("type")]),n._v(" "),e("span",[n._v(" to ")]),n._v(" "),e("code",[n._v("'grow'")]),n._v(".\n    "),e("span",[n._v("While it doesn't technically spin, it does repeatedly grow!")])]),n._v(" "),e("b-spinner",{attrs:{type:"grow",label:"Loading..."}})],1)}),[],!1,null,null,null).exports,m={components:{BCardCode:s.a,BSpinner:i.a,BCardText:o.a},data:function(){return{variants:["primary","secondary","danger","warning","success","info","light","dark"],codeGrowColor:"\n<template>\n  <div class=\"d-flex flex-wrap\">\n    <b-spinner\n      v-for=\"variant in variants\"\n      :key=\"variant\"\n      :variant=\"variant\"\n      class=\"mr-1\"\n      type=\"grow\"\n    />\n  </div>\n</template>\n\n<script>\nimport { BSpinner } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCardCode,\n    BSpinner,\n  },\n  data: () => ({\n    variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark'],\n  }),\n}\n<\/script>\n"}}},_=Object(d.a)(m,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Colored Growing Spinners"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeGrowColor)+"\n  ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[n._v("The variant prop translates the variant name to the Bootstrap v4 class ")]),n._v(" "),e("code",[n._v(".text-{variant}")]),n._v(" "),e("span",[n._v(", so if you have custom defined text color ")]),n._v(" "),e("code",[n._v("variants")]),n._v(" "),e("span",[n._v(", feel free to use them via the variant prop.")])]),n._v(" "),e("div",{staticClass:"demo-inline-spacing"},n._l(n.variants,(function(n){return e("b-spinner",{key:n,staticClass:"mr-1",attrs:{variant:n,type:"grow"}})})),1)],1)}),[],!1,null,null,null).exports,g={components:{BCardCode:s.a,BSpinner:i.a,BCardText:o.a},data:function(){return{codeSize:'\n<template>\n  <div class="text-center d-flex justify-content-between">\n    <div>\n      <b-spinner\n        small\n        class="mr-1"\n        label="Small Spinner"\n      />\n      <b-spinner\n        small\n        label="Small Spinner"\n        type="grow"\n      />\n    </div>\n    <div>\n      <b-spinner\n        class="mr-1"\n        label="Small Spinner"\n      />\n      <b-spinner\n        label="Small Spinner"\n        type="grow"\n      />\n    </div>\n    <div>\n      <b-spinner\n        style="width: 3rem; height: 3rem;"\n        class="mr-1"\n        label="Large Spinner"\n      />\n      <b-spinner\n        style="width: 3rem; height: 3rem;"\n        label="Large Spinner"\n        type="grow"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BSpinner } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BSpinner,\n  },\n}\n<\/script>\n'}}},f=Object(d.a)(g,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Sizes"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeSize)+"\n  ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[n._v("Set the prop ")]),n._v(" "),e("code",[n._v("small")]),n._v(" "),e("span",[n._v(" to ")]),n._v(" "),e("code",[n._v("true")]),n._v(" "),e("span",[n._v(" to make a smaller spinner that can quickly be used within other components.")])]),n._v(" "),e("div",{staticClass:"demo-inline-spacing"},[e("div",[e("b-spinner",{staticClass:"mr-1",attrs:{small:"",label:"Small Spinner"}}),n._v(" "),e("b-spinner",{attrs:{small:"",label:"Small Spinner",type:"grow"}})],1),n._v(" "),e("div",[e("b-spinner",{staticClass:"mr-1",attrs:{label:"Small Spinner"}}),n._v(" "),e("b-spinner",{attrs:{label:"Small Spinner",type:"grow"}})],1),n._v(" "),e("div",[e("b-spinner",{staticClass:"mr-1",staticStyle:{width:"3rem",height:"3rem"},attrs:{label:"Large Spinner"}}),n._v(" "),e("b-spinner",{staticStyle:{width:"3rem",height:"3rem"},attrs:{label:"Large Spinner",type:"grow"}})],1)])],1)}),[],!1,null,null,null).exports,y={components:{BCardCode:s.a,BSpinner:i.a,BCardText:o.a},data:function(){return{codeFlex:'\n<template>\n  <div>\n    <div class="d-flex justify-content-center mb-1">\n      <b-spinner label="Loading..." />\n    </div>\n    <div class="d-flex align-items-center">\n      <strong>Loading...</strong>\n      <b-spinner class="ml-auto" />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BSpinner } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BSpinner,\n  },\n}\n<\/script>\n'}}},x=Object(d.a)(y,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Flex"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeFlex)+"\n  ")]},proxy:!0}])},[e("b-card-text",[n._v("\n    Using flex utility classes:\n  ")]),n._v(" "),e("div",{staticClass:"d-flex justify-content-center mb-1"},[e("b-spinner",{attrs:{label:"Loading..."}})],1),n._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("strong",[n._v("Loading...")]),n._v(" "),e("b-spinner",{staticClass:"ml-auto"})],1)],1)}),[],!1,null,null,null).exports,S={components:{BCardCode:s.a,BSpinner:i.a,BCardText:o.a},data:function(){return{codeFloat:'\n<template>\n  <div class="clearfix">\n    <b-spinner class="float-right" label="Floated Right" />\n  </div>\n</template>\n\n<script>\nimport { BSpinner } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BSpinner,\n  },\n}\n<\/script>\n'}}},h=Object(d.a)(S,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Float"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeFloat)+"\n  ")]},proxy:!0}])},[e("b-card-text",[n._v("Using float utility classes:")]),n._v(" "),e("div",{staticClass:"clearfix"},[e("b-spinner",{staticClass:"float-right",attrs:{label:"Floated Right"}})],1)],1)}),[],!1,null,null,null).exports,B={components:{BCardCode:s.a,BSpinner:i.a,BCardText:o.a},data:function(){return{codeTextAlign:'\n<template>\n  <div class="text-center">\n    <b-spinner variant="primary" label="Text Centered" />\n  </div>\n</template>\n\n<script>\nimport { BSpinner } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BSpinner,\n  }\n}\n<\/script>\n'}}},C=Object(d.a)(B,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Text Alignment"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeTextAlign)+"\n  ")]},proxy:!0}])},[e("b-card-text",[n._v("Using text alignment utility classes:")]),n._v(" "),e("div",{staticClass:"text-center"},[e("b-spinner",{attrs:{variant:"primary",label:"Text Centered"}})],1)],1)}),[],!1,null,null,null).exports,w=e("GUe+"),k={components:{BCardCode:s.a,BButton:w.a,BSpinner:i.a,BCardText:o.a},data:function(){return{codeButton:'\n<template>\n  <div>\n    <b-button\n      variant="primary"\n      disabled\n      class="mr-1"\n    >\n      <b-spinner small />\n      <span class="sr-only">Loading...</span>\n    </b-button>\n\n    <b-button\n      variant="primary"\n      disabled\n      class="mr-1"\n    >\n      <b-spinner small />\n      Loading...\n    </b-button>\n\n    <b-button\n      variant="primary"\n      disabled\n      class="mr-1"\n    >\n      <b-spinner\n        small\n        type="grow"\n      />\n      <span class="sr-only">Loading...</span>\n    </b-button>\n\n    <b-button\n      variant="primary"\n      disabled\n      class="mr-1"\n    >\n      <b-spinner\n        small\n        type="grow"\n      />\n      Loading...\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BSpinner, BButton } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BButton,\n    BSpinner,\n  },\n}\n<\/script>\n'}}},L=Object(d.a)(k,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Buttons"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeButton)+"\n  ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[n._v("\n    Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the\n    label text out of the spinner element and utilize button text as needed.\n  ")]),n._v(" "),e("div",{staticClass:"demo-inline-spacing"},[e("b-button",{attrs:{variant:"outline-primary",disabled:""}},[e("b-spinner",{attrs:{small:""}}),n._v(" "),e("span",{staticClass:"sr-only"},[n._v("Loading...")])],1),n._v(" "),e("b-button",{attrs:{variant:"outline-primary",disabled:""}},[e("b-spinner",{attrs:{small:""}}),n._v("\n      Loading...\n    ")],1),n._v(" "),e("b-button",{attrs:{variant:"outline-primary",disabled:""}},[e("b-spinner",{attrs:{small:"",type:"grow"}}),n._v(" "),e("span",{staticClass:"sr-only"},[n._v("Loading...")])],1),n._v(" "),e("b-button",{attrs:{variant:"outline-primary",disabled:""}},[e("b-spinner",{attrs:{small:"",type:"grow"}}),n._v("\n      Loading...\n    ")],1)],1)],1)}),[],!1,null,null,null).exports,T={components:{BRow:a.a,BCol:r.a,SpinnerBorder:c,SpinnerColor:v,SpinnerGrow:u,SpinnerGrowColor:_,SpinnerSize:f,SpinnerFlex:x,SpinnerFloat:h,SpinnerTextAlign:C,SpinnerButton:L}},$=Object(d.a)(T,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-row",{staticClass:"match-height"},[e("b-col",{attrs:{md:"6"}},[e("spinner-border")],1),n._v(" "),e("b-col",{attrs:{md:"6"}},[e("spinner-color")],1),n._v(" "),e("b-col",{attrs:{md:"6"}},[e("spinner-grow")],1),n._v(" "),e("b-col",{attrs:{md:"6"}},[e("spinner-grow-color")],1),n._v(" "),e("b-col",{attrs:{md:"6"}},[e("spinner-flex")],1),n._v(" "),e("b-col",{attrs:{md:"6"}},[e("spinner-float")],1),n._v(" "),e("b-col",{attrs:{md:"6"}},[e("spinner-text-align")],1),n._v(" "),e("b-col",{attrs:{md:"6"}},[e("spinner-size")],1),n._v(" "),e("b-col",[e("spinner-button")],1)],1)}),[],!1,null,null,null);t.default=$.exports},yPU0:function(n,t,e){var a=e("Tk63");"string"==typeof a&&(a=[[n.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(a,r);a.locals&&(n.exports=a.locals)}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{"1yzx":function(e,t,r){"use strict";r("yPU0")},Tk63:function(e,t,r){(t=r("JPst")(!1)).push([e.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),e.exports=t},iPaL:function(e,t,r){"use strict";var a=r("m8qd");t.a=a.a},m8qd:function(e,t,r){"use strict";r("6cQw");var a=r("IF94"),n=r("SWgu"),d=r("ugaB"),s=r("YZfj"),c=r("WEOK"),i=(r("wZee"),r("hL/g"),r("jVEP")),o=r.n(i),b={components:{BCard:a.a,BCardTitle:n.a,BCardSubTitle:d.a,BCardBody:s.a,BCollapse:c.a,Prism:o.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},u=(r("1yzx"),r("KHd+")),l=Object(u.a)(b,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[r("div",{staticClass:"card-header"},[r("div",[r("b-card-title",[e._v(e._s(e.$attrs.title))]),e._v(" "),e.$attrs["sub-title"]?r("b-card-sub-title",[e._v("\n        "+e._s(e.$attrs["sub-title"])+"\n      ")]):e._e()],1),e._v(" "),r("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(t){e.code_visible=!e.code_visible}}})]),e._v(" "),void 0!==e.$attrs["no-body"]?[e._t("default"),e._v(" "),r("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[r("b-card-body",[r("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:r("b-card-body",[e._t("default"),e._v(" "),r("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[r("div",{staticClass:"p-1"}),e._v(" "),r("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);t.a=l.exports},tpZv:function(e,t,r){"use strict";r.r(t);var a=r("oVt+"),n=r("sove"),d=r("4jWJ"),s=r("iPaL"),c={components:{BCardCode:s.a,BBreadcrumb:d.a},data:function(){return{codeDefault:"\n<template>\n <b-breadcrumb\n    :items=\"items\"\n  />\n</template>\n\n<script>\nimport { BBreadcrumb } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BBreadcrumb,\n  },\n data() {\n    return {\n      codeDefault,\n      items: [\n        {\n          text: 'Dashboard',\n        },\n        {\n          text: 'Library',\n        },\n        {\n          text: 'Data',\n          active: true,\n        },\n      ],\n    }\n  },\n}\n<\/script>\n",items:[{text:"Dashboard"},{text:"Library"},{text:"Data",active:!0}]}}},i=r("KHd+"),o=Object(i.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card-code",{attrs:{title:"Default"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeDefault)+"\n  ")]},proxy:!0}])},[r("b-breadcrumb",{attrs:{items:e.items}})],1)}),[],!1,null,null,null).exports,b=r("1uQM"),u={components:{BCardCode:s.a,BBreadcrumb:d.a,BCardText:b.a},data:function(){return{codeSeparator:'\n<template>\n   <div id="component-breadcrumbs">\n    <b-breadcrumb\n      class="breadcrumb-slash"\n      :items="items"\n    />\n    <b-breadcrumb\n      class="breadcrumb-dots"\n      :items="items"\n    />\n    <b-breadcrumb\n      class="breadcrumb-dashes"\n      :items="items"\n    />\n    <b-breadcrumb\n      class="breadcrumb-pipes"\n      :items="items"\n    />\n    <b-breadcrumb\n      class="breadcrumb-chevron mb-0"\n      :items="items"\n    />\n  </div>\n</template>\n\n<script>\nimport { BBreadcrumb } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBreadcrumb,\n  },\n  data() {\n    return {\n      items: [\n        {\n          text: \'Home\',\n        },\n        {\n          text: \'Library\',\n        },\n        {\n          text: \'Data\',\n          active: true,\n        },\n      ],\n    }\n  },\n}\n<\/script>\n',items:[{text:"Home"},{text:"Library"},{text:"Data",active:!0}]}}},l=Object(i.a)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card-code",{attrs:{title:"Separator"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeSeparator)+"\n  ")]},proxy:!0}])},[r("b-card-text",[r("span",[e._v("These breadcrumbs are only for demo puropses. You can change breadcrumb seprator by changing ")]),e._v(" "),r("code",[e._v("$breadcrumb-divider")]),e._v(" "),r("span",[e._v(" variable value in scss")])]),e._v(" "),r("div",{attrs:{id:"component-breadcrumbs"}},[r("b-breadcrumb",{staticClass:"breadcrumb-slash",attrs:{items:e.items}}),e._v(" "),r("b-breadcrumb",{staticClass:"breadcrumb-dots",attrs:{items:e.items}}),e._v(" "),r("b-breadcrumb",{staticClass:"breadcrumb-dashes",attrs:{items:e.items}}),e._v(" "),r("b-breadcrumb",{staticClass:"breadcrumb-pipes",attrs:{items:e.items}}),e._v(" "),r("b-breadcrumb",{staticClass:"breadcrumb-chevron mb-0",attrs:{items:e.items}})],1)],1)}),[],!1,null,null,null).exports,m=r("oUjG"),v={components:{BCardCode:s.a,BBreadcrumb:d.a,BBreadcrumbItem:m.a,BCardText:b.a},data:function(){return{codeSlot:'\n<template>\n  <b-breadcrumb class="breadcrumb-slash">\n    <b-breadcrumb-item href="#home">\n      Home\n    </b-breadcrumb-item>\n    <b-breadcrumb-item href="#foo">\n      Chat\n    </b-breadcrumb-item>\n    <b-breadcrumb-item active>\n      Infos\n    </b-breadcrumb-item>\n  </b-breadcrumb>\n</template>\n\n<script>\nimport { BBreadcrumb, BBreadcrumbItem } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBreadcrumb,\n    BBreadcrumbItem,\n  },\n}\n<\/script>\n'}}},p=Object(i.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-card-code",{attrs:{title:"Slot"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n      "+e._s(e.codeSlot)+"\n    ")]},proxy:!0}])},[r("b-card-text",[r("span",[e._v("You may also manually place individual ")]),e._v(" "),r("code",[e._v("<b-breadcrumb-item>")]),e._v(" "),r("span",[e._v(" child components in the default slot of the ")]),e._v(" "),r("code",[e._v("<b-breadcrumb>")]),e._v(" "),r("span",[e._v(" component, as an alternative to using the ")]),e._v(" "),r("code",[e._v("items")]),e._v(" "),r("span",[e._v(" prop, for greater control over the content of each item:")])]),e._v(" "),r("b-breadcrumb",{staticClass:"breadcrumb-slash"},[r("b-breadcrumb-item",{attrs:{href:"#home"}},[e._v("\n        Home\n      ")]),e._v(" "),r("b-breadcrumb-item",{attrs:{href:"#foo"}},[e._v("\n        Chat\n      ")]),e._v(" "),r("b-breadcrumb-item",{attrs:{active:""}},[e._v("\n        Infos\n      ")])],1)],1)],1)}),[],!1,null,null,null).exports,_={components:{BCardCode:s.a,BBreadcrumb:d.a,BCardText:b.a},data:function(){return{codeAlignment:'\n<template>\n  <div id="breadcrumb-alignment">\n    <div class="d-flex justify-content-start breadcrumb-wrapper">\n      <b-breadcrumb :items="items" />\n    </div>\n    <div class="d-flex justify-content-center breadcrumb-wrapper my-1">\n      <b-breadcrumb :items="items" />\n    </div>\n    <div class="d-flex justify-content-end breadcrumb-wrapper pr-1">\n      <b-breadcrumb :items="items" />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BBreadcrumb} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBreadcrumb,\n  },\n  data() {\n    return {\n      items: [\n        {\n          text: \'Dashboard\',\n        },\n        {\n          text: \'Library\',\n        },\n        {\n          text: \'Data\',\n          active: true,\n        },\n      ],\n    }\n  },\n}\n<\/script>\n',items:[{text:"Dashboard"},{text:"Library"},{text:"Data",active:!0}]}}},f=Object(i.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-card-code",{attrs:{title:"Alignment"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n      "+e._s(e.codeAlignment)+"\n    ")]},proxy:!0}])},[r("b-card-text",[r("span",[e._v("Use class ")]),e._v(" "),r("code",[e._v(".justify-content-{direction}")]),e._v(" "),r("span",[e._v(" to align breadcrumb to center.")])]),e._v(" "),r("div",{attrs:{id:"breadcrumb-alignment"}},[r("div",{staticClass:"d-flex justify-content-start breadcrumb-wrapper"},[r("b-breadcrumb",{attrs:{items:e.items}})],1),e._v(" "),r("div",{staticClass:"d-flex justify-content-center breadcrumb-wrapper my-1"},[r("b-breadcrumb",{attrs:{items:e.items}})],1),e._v(" "),r("div",{staticClass:"d-flex justify-content-end breadcrumb-wrapper pr-1"},[r("b-breadcrumb",{attrs:{items:e.items}})],1)])],1)],1)}),[],!1,null,null,null).exports,h={components:{BRow:a.a,BCol:n.a,BreadcrumbDefault:o,BreadcrumbSeparator:l,BreadcrumbSlot:p,BreadcrumbAlignment:f}},x=Object(i.a)(h,(function(){var e=this.$createElement,t=this._self._c||e;return t("b-row",[t("b-col",{attrs:{cols:"12"}},[t("breadcrumb-default"),this._v(" "),t("breadcrumb-separator"),this._v(" "),t("breadcrumb-slot"),this._v(" "),t("breadcrumb-alignment")],1)],1)}),[],!1,null,null,null);t.default=x.exports},yPU0:function(e,t,r){var a=r("Tk63");"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(a,n);a.locals&&(e.exports=a.locals)}}]);
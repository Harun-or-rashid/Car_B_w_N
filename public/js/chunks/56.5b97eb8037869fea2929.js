(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"1yzx":function(t,n,o){"use strict";o("yPU0")},"4AkS":function(t,n,o){"use strict";var e={bind:function(t,n){var o={event:"mousedown",transition:600};!function(t,n){t.forEach((function(t){isNaN(Number(t))?n.event=t:n.transition=t}))}(Object.keys(n.modifiers),o),t.addEventListener(o.event,(function(e){!function(t,n){var e=n,a=parseInt(getComputedStyle(e).borderWidth.replace("px","")),l=e.getBoundingClientRect(),p=l.left,s=l.top,d=e.offsetWidth,v=e.offsetHeight,c=t.clientX-p,b=t.clientY-s,u=Math.max(c,d-c),m=Math.max(b,v-b),g=window.getComputedStyle(e),h=Math.sqrt(u*u+m*m),f=a>0?a:0,_=document.createElement("div"),y=document.createElement("div");y.className="ripple-container",_.className="ripple",_.style.marginTop="0px",_.style.marginLeft="0px",_.style.width="1px",_.style.height="1px",_.style.transition="all "+o.transition+"ms cubic-bezier(0.4, 0, 0.2, 1)",_.style.borderRadius="50%",_.style.pointerEvents="none",_.style.position="relative",_.style.zIndex=r,_.style.backgroundColor=i,y.style.position="absolute",y.style.left=0-f+"px",y.style.top=0-f+"px",y.style.height="0",y.style.width="0",y.style.pointerEvents="none",y.style.overflow="hidden";var T=e.style.position.length>0?e.style.position:getComputedStyle(e).position;"relative"!==T&&(e.style.position="relative");function x(){setTimeout((function(){_.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((function(){y.parentNode.removeChild(y)}),850),n.removeEventListener("mouseup",x,!1),setTimeout((function(){for(var t=!0,n=0;n<e.childNodes.length;n++)"ripple-container"===e.childNodes[n].className&&(t=!1);t&&(e.style.position="static"!==T?T:"")}),o.transition+250)}y.appendChild(_),e.appendChild(y),_.style.marginLeft=c+"px",_.style.marginTop=b+"px",y.style.width=d+"px",y.style.height=v+"px",y.style.borderTopLeftRadius=g.borderTopLeftRadius,y.style.borderTopRightRadius=g.borderTopRightRadius,y.style.borderBottomLeftRadius=g.borderBottomLeftRadius,y.style.borderBottomRightRadius=g.borderBottomRightRadius,y.style.direction="ltr",setTimeout((function(){_.style.width=2*h+"px",_.style.height=2*h+"px",_.style.marginLeft=c-h+"px",_.style.marginTop=b-h+"px"}),0),"mousedown"===t.type?n.addEventListener("mouseup",x,!1):x()}(e,t,n.value)}));var i=n.value||e.color||"rgba(0, 0, 0, 0.35)",r=e.zIndex||"9999"}};n.a=e},"7WNh":function(t,n,o){"use strict";o("pNOa")},BtHL:function(t,n,o){(n=o("JPst")(!1)).push([t.i,".toastification-close-icon[data-v-5044ad47], .toastification-title[data-v-5044ad47] {\n  line-height: 26px;\n}\n.toastification-title[data-v-5044ad47] {\n  color: inherit;\n}",""]),t.exports=n},O4Jr:function(t,n,o){"use strict";o.r(n);var e=o("oVt+"),i=o("sove"),r=o("iPaL"),a=o("GUe+"),l=o("1uQM"),p=o("JhbM"),s=o("4AkS"),d={components:{BCardCode:r.a,BButton:a.a,BCardText:l.a},directives:{"b-tooltip":p.a,Ripple:s.a},data:function(){return{codePosition:'\n<template>\n  <div class="demo-inline-spacing">\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      v-b-tooltip.hover.top="\'Tooltip on top!\'"\n      variant="outline-primary"\n    >\n      Tooltip on top\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      v-b-tooltip.hover.right="\'Tooltip on right!\'"\n      variant="outline-primary"\n    >\n      Tooltip on right\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      v-b-tooltip.hover.left="\'Tooltip on left!\'"\n      variant="outline-primary"\n    >\n      Tooltip on left\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      v-b-tooltip.hover.bottom="\'Tooltip on bottom!\'"\n      variant="outline-primary"\n    >\n      Tooltip on bottom\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport {BButton, VBTooltip,} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BCardCode,\n    BButton,\n  },\n  directives: {\n    \'b-tooltip\': VBTooltip,\n    Ripple,\n  },\n}\n<\/script>\n'}}},v=o("KHd+"),c=Object(v.a)(d,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("b-card-code",{attrs:{title:"Tooltip Positions"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codePosition)+"\n  ")]},proxy:!0}])},[o("b-card-text",{staticClass:"mb-0"},[o("span",[t._v("Twelve options are available for positioning: ")]),t._v(" "),o("code",[t._v("top, topleft, topright, right, righttop, rightbottom, bottom, bottomleft, bottomright, left, lefttop,")]),t._v(" "),o("span",[t._v(" and ")]),t._v(" "),o("code",[t._v("leftbottom")]),t._v(" "),o("span",[t._v(" aligned. The default position is top.")])]),t._v(" "),o("div",{staticClass:"demo-inline-spacing"},[o("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Tooltip on top!",expression:"'Tooltip on top!'",modifiers:{hover:!0,top:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n      Tooltip on top\n    ")]),t._v(" "),o("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",value:"Tooltip on right!",expression:"'Tooltip on right!'",modifiers:{hover:!0,right:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n      Tooltip on right\n    ")]),t._v(" "),o("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",value:"Tooltip on left!",expression:"'Tooltip on left!'",modifiers:{hover:!0,left:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n      Tooltip on left\n    ")]),t._v(" "),o("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",value:"Tooltip on bottom!",expression:"'Tooltip on bottom!'",modifiers:{hover:!0,bottom:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n      Tooltip on bottom\n    ")])],1)],1)}),[],!1,null,null,null).exports,b={components:{BCardCode:r.a,BButton:a.a,BCardText:l.a},directives:{"b-tooltip":p.a,Ripple:s.a},data:function(){return{codeVariantCustom:'\n<template>\n  <div class="demo-inline-spacing">\n\n    \x3c!-- default --\x3e\n    <b-button\n      v-b-tooltip.hover\n      title="Default variant"\n      variant="gradient-primary"\n    >\n      Default\n    </b-button>\n\n    \x3c!-- primary --\x3e\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      v-b-tooltip.hover.v-primary\n      title="Primary variant"\n      variant="outline-primary"\n    >\n      Primary\n    </b-button>\n\n    \x3c!-- secondary --\x3e\n    <b-button\n      v-ripple.400="\'rgba(186, 191, 199, 0.15)\'"\n      v-b-tooltip.hover.v-secondary\n      title="Secondary variant"\n      variant="outline-secondary"\n    >\n      Secondary\n    </b-button>\n\n    \x3c!-- success --\x3e\n    <b-button\n      v-ripple.400="\'rgba(40, 199, 111, 0.15)\'"\n      v-b-tooltip.hover.v-success\n      title="Success variant"\n      variant="outline-success"\n    >\n      Success\n    </b-button>\n\n    \x3c!-- danger --\x3e\n    <b-button\n      v-ripple.400="\'rgba(234, 84, 85, 0.15)\'"\n      v-b-tooltip.hover.v-danger\n      title="Danger variant"\n      variant="outline-danger"\n    >\n      Danger\n    </b-button>\n\n    \x3c!-- warning --\x3e\n    <b-button\n      v-ripple.400="\'rgba(255, 159, 67, 0.15)\'"\n      v-b-tooltip.hover.v-warning\n      title="Warning variant"\n      variant="outline-warning"\n    >\n      Warning\n    </b-button>\n\n    \x3c!-- info --\x3e\n    <b-button\n      v-ripple.400="\'rgba(0, 207, 232, 0.15)\'"\n      v-b-tooltip.hover.v-info\n      title="Info variant"\n      variant="outline-info"\n    >\n      Info\n    </b-button>\n\n    \x3c!-- dark --\x3e\n    <b-button\n      v-ripple.400="\'rgba(30, 30, 30, 0.15)\'"\n      v-b-tooltip.hover.v-dark\n      title="Dark variant"\n      variant="outline-dark"\n    >\n      Dark\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport {VBTooltip, BButton} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BCardCode,\n    BButton,\n  },\n  directives: {\n    \'b-tooltip\': VBTooltip,\n    Ripple,\n  },\n}\n<\/script>\n'}}},u=Object(v.a)(b,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("b-card-code",{attrs:{title:"Variants and custom class"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeVariantCustom)+"\n  ")]},proxy:!0}])},[o("b-card-text",{staticClass:"mb-0"},[t._v("\n    BootstrapVue's tooltips support contextual color variants via our custom CSS, either by using directive\n    modifiers or config options:\n  ")]),t._v(" "),o("div",{staticClass:"demo-inline-spacing"},[o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Default variant",variant:"gradient-primary"}},[t._v("\n      Default\n    ")]),t._v(" "),o("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-primary",modifiers:{hover:!0,"v-primary":!0}}],attrs:{title:"Primary variant",variant:"outline-primary"}},[t._v("\n      Primary\n    ")]),t._v(" "),o("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-secondary",modifiers:{hover:!0,"v-secondary":!0}}],attrs:{title:"Secondary variant",variant:"outline-secondary"}},[t._v("\n      Secondary\n    ")]),t._v(" "),o("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(40, 199, 111, 0.15)",expression:"'rgba(40, 199, 111, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-success",modifiers:{hover:!0,"v-success":!0}}],attrs:{title:"Success variant",variant:"outline-success"}},[t._v("\n      Success\n    ")]),t._v(" "),o("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(234, 84, 85, 0.15)",expression:"'rgba(234, 84, 85, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-danger",modifiers:{hover:!0,"v-danger":!0}}],attrs:{title:"Danger variant",variant:"outline-danger"}},[t._v("\n      Danger\n    ")]),t._v(" "),o("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 159, 67, 0.15)",expression:"'rgba(255, 159, 67, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-warning",modifiers:{hover:!0,"v-warning":!0}}],attrs:{title:"Warning variant",variant:"outline-warning"}},[t._v("\n      Warning\n    ")]),t._v(" "),o("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(0, 207, 232, 0.15)",expression:"'rgba(0, 207, 232, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-info",modifiers:{hover:!0,"v-info":!0}}],attrs:{title:"Info variant",variant:"outline-info"}},[t._v("\n      Info\n    ")]),t._v(" "),o("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(30, 30, 30, 0.15)",expression:"'rgba(30, 30, 30, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-dark",modifiers:{hover:!0,"v-dark":!0}}],attrs:{title:"Dark variant",variant:"outline-dark"}},[t._v("\n      Dark\n    ")])],1)],1)}),[],!1,null,null,null).exports,m={components:{BCardCode:r.a,BButton:a.a,BCardText:l.a},directives:{"b-tooltip":p.a,Ripple:s.a},data:function(){return{codeTriggers:'\n<template>\n  <div class="demo-inline-spacing">\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      v-b-tooltip.click.v-primary\n      title="On Cllick Trigger"\n      variant="outline-primary"\n    >\n      On Cllick Trigger\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      v-b-tooltip.hover.v-primary\n      title="On Hover Trigger"\n      variant="outline-primary"\n    >\n      On Hover Trigger\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      v-b-tooltip.hover.focus.v-primary\n      title="Hover + Focus Trigger"\n      variant="outline-primary"\n    >\n      Hover + Focus Trigger\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      v-b-tooltip.focus.v-primary\n      title="On Focus Trigger"\n      variant="outline-primary"\n    >\n      On Focus Trigger\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport {\n  VBTooltip, BButton,\n} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButton,\n  },\n  directives: {\n    \'b-tooltip\': VBTooltip,\n    Ripple,\n  },\n}\n<\/script>\n'}}},g=Object(v.a)(m,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("b-card-code",{attrs:{title:"Tooltip Triggers"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeTriggers)+"\n  ")]},proxy:!0}])},[o("b-card-text",{staticClass:"mb-0"},[t._v("\n    Tooltip is triggered using - click | hover | focus | manual options.You may pass multiple triggers; separate them\n    with a space.\n  ")]),t._v(" "),o("div",{staticClass:"demo-inline-spacing"},[o("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.click.v-primary",modifiers:{click:!0,"v-primary":!0}}],attrs:{title:"On Cllick Trigger",variant:"outline-primary"}},[t._v("\n      On Cllick Trigger\n    ")]),t._v(" "),o("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-primary",modifiers:{hover:!0,"v-primary":!0}}],attrs:{title:"On Hover Trigger",variant:"outline-primary"}},[t._v("\n      On Hover Trigger\n    ")]),t._v(" "),o("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover.focus.v-primary",modifiers:{hover:!0,focus:!0,"v-primary":!0}}],attrs:{title:"Hover + Focus Trigger",variant:"outline-primary"}},[t._v("\n      Hover + Focus Trigger\n    ")]),t._v(" "),o("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.focus.v-primary",modifiers:{focus:!0,"v-primary":!0}}],attrs:{title:"On Focus Trigger",variant:"outline-primary"}},[t._v("\n      On Focus Trigger\n    ")])],1)],1)}),[],!1,null,null,null).exports,h=o("tK4P"),f={components:{BCardCode:r.a,BTooltip:h.a,BButton:a.a,BCardText:l.a},directives:{"b-tooltip":p.a,Ripple:s.a},data:function(){return{delay:{show:500,hide:500},codeOptions:'\n<template>\n  <div class="demo-inline-spacing">\n    <b-button\n      id="tooltip-target-1"\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      No animation\n    </b-button>\n    <b-tooltip\n      target="tooltip-target-1"\n      triggers="hover"\n      no-fade\n    >\n      Without Fade Animation        class="mb-1 mb-md-0"\n    </b-tooltip>\n    <b-button\n      id="tooltip-target-2"\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      Delay Tooltip\n    </b-button>\n    <b-tooltip\n      target="tooltip-target-2"\n      :delay="delay"\n    >\n      Delay triggers\n    </b-tooltip>\n  </div>\n</template>\n\n<script>\nimport {VBTooltip, BButton, BTooltip} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BTooltip,\n    BButton,\n  },\n  directives: {\n    \'b-tooltip\': VBTooltip,\n    Ripple,\n  },\n  data() {\n    return {\n      delay: { show: 500, hide: 500 },\n    }\n  },\n}\n<\/script>\n'}}},_=Object(v.a)(f,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("b-card-code",{attrs:{title:"Tooltip Options"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeOptions)+"\n  ")]},proxy:!0}])},[o("b-card-text",{staticClass:"mb-0"},[o("span",[t._v("Use the ")]),t._v(" "),o("code",[t._v("nofade")]),t._v(" "),o("span",[t._v(" prop to turn off animation.")]),t._v(" "),o("span",[t._v("Delay showing and hiding the tooltip (ms). If a number is supplied, delay is applied to both hide/show.\n      Object structure is: ")]),t._v(" "),o("code",[t._v('delay: { "show": 500, "hide": 100 }')])]),t._v(" "),o("div",{staticClass:"demo-inline-spacing"},[o("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{id:"tooltip-target-1",variant:"outline-primary"}},[t._v("\n      No animation\n    ")]),t._v(" "),o("b-tooltip",{attrs:{target:"tooltip-target-1",triggers:"hover","no-fade":""}},[t._v('\n      Without Fade Animation        class="mb-1 mb-md-0"\n    ')]),t._v(" "),o("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{id:"tooltip-target-2",variant:"outline-primary"}},[t._v("\n      Delay Tooltip\n    ")]),t._v(" "),o("b-tooltip",{attrs:{target:"tooltip-target-2",delay:t.delay}},[t._v("\n      Delay triggers\n    ")])],1)],1)}),[],!1,null,null,null).exports,y={components:{BCardCode:r.a,BTooltip:h.a,BButton:a.a,BCardText:l.a},directives:{"b-tooltip":p.a,Ripple:s.a},data:function(){return{show:!1,disabled:!1,codeMethods:'\n<template>\n   <div class="demo-inline-spacing">\n    <b-button\n      id="tooltip-button-1"\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="showTooltip"\n    >\n      Show Toggle Tooltip\n    </b-button>\n    <b-tooltip\n      target="tooltip-button-1"\n      placement="top"\n      triggers="click"\n    >\n      tooltip!\n    </b-tooltip>\n\n    <b-button\n      id="tooltip-button-2"\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="hideTooltip"\n    >\n      Hide Toggle Tooltip\n    </b-button>\n    <b-tooltip\n      target="tooltip-button-2"\n      placement="top"\n      triggers="hover"\n    >\n      tooltip!\n    </b-tooltip>\n\n    <b-button\n      id="tooltip-button-3"\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="show = !show"\n    >\n      Toggle Tooltip\n    </b-button>\n    <b-tooltip\n      :show.sync="show"\n      target="tooltip-button-3"\n      placement="top"\n      triggers="click"\n    >\n      tooltip!\n    </b-tooltip>\n\n    <b-button\n      id="tooltip-button-disable"\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      I have a tooltip\n    </b-button>\n\n    <b-button\n      v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n      :variant="disabled ? \'success\':\'danger\'"\n      @click="disabled = !disabled"\n    >\n      {{ disabled ? \'Enable\' : \'Disable\' }} Tooltip by prop\n    </b-button>\n    <b-tooltip\n      ref="tooltip"\n      :disabled.sync="disabled"\n      target="tooltip-button-disable"\n    >\n      <span>Hello </span><strong>World!</strong>\n    </b-tooltip>\n  </div>\n</template>\n\n<script>\nimport {VBTooltip, BButton, BTooltip} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BTooltip,\n    BButton,\n  },\n  directives: {\n    \'b-tooltip\': VBTooltip,\n    Ripple,\n  },\n  data() {\n    return {\n      show: false,\n      disabled: false,\n    }\n  },\n  methods: {\n    showTooltip() {\n      this.$root.$emit(\'bv::show::tooltip\', \'tooltip-button-1\')\n    },\n    hideTooltip() {\n      this.$root.$emit(\'bv::hide::tooltip\', \'tooltip-button-2\')\n    },\n  },\n}\n<\/script>\n'}},methods:{showTooltip:function(){this.$root.$emit("bv::show::tooltip","tooltip-button-1")},hideTooltip:function(){this.$root.$emit("bv::hide::tooltip","tooltip-button-2")}}},T=Object(v.a)(y,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("b-card-code",{attrs:{title:"Tooltip Methods"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeMethods)+"\n  ")]},proxy:!0}])},[o("b-card-text",{staticClass:"mb-0"},[t._v("\n    This is considered a “manual” triggering of the tooltip. Tooltips with zero-length titles are never displayed.\n  ")]),t._v(" "),o("div",{staticClass:"demo-inline-spacing"},[o("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{id:"tooltip-button-1",variant:"outline-primary"},on:{click:t.showTooltip}},[t._v("\n      Show Toggle Tooltip\n    ")]),t._v(" "),o("b-tooltip",{attrs:{target:"tooltip-button-1",placement:"top",triggers:"click"}},[t._v("\n      tooltip!\n    ")]),t._v(" "),o("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{id:"tooltip-button-2",variant:"outline-primary"},on:{click:t.hideTooltip}},[t._v("\n      Hide Toggle Tooltip\n    ")]),t._v(" "),o("b-tooltip",{attrs:{target:"tooltip-button-2",placement:"top",triggers:"hover"}},[t._v("\n      tooltip!\n    ")]),t._v(" "),o("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{id:"tooltip-button-3",variant:"outline-primary"},on:{click:function(n){t.show=!t.show}}},[t._v("\n      Toggle Tooltip\n    ")]),t._v(" "),o("b-tooltip",{attrs:{show:t.show,target:"tooltip-button-3",placement:"top",triggers:"click"},on:{"update:show":function(n){t.show=n}}},[t._v("\n      tooltip!\n    ")]),t._v(" "),o("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{id:"tooltip-button-disable",variant:"outline-primary"}},[t._v("\n      I have a tooltip\n    ")]),t._v(" "),o("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{variant:t.disabled?"success":"danger"},on:{click:function(n){t.disabled=!t.disabled}}},[t._v("\n      "+t._s(t.disabled?"Enable":"Disable")+" Tooltip by prop\n    ")]),t._v(" "),o("b-tooltip",{ref:"tooltip",attrs:{disabled:t.disabled,target:"tooltip-button-disable"},on:{"update:disabled":function(n){t.disabled=n}}},[o("span",[t._v("Hello ")]),o("strong",[t._v("World!")])])],1)],1)}),[],!1,null,null,null).exports,x=o("OIjt"),w={components:{BCardCode:r.a,BButton:a.a,BTooltip:h.a,ToastificationContent:x.a},directives:{"b-tooltip":p.a,Ripple:s.a},data:function(){return{codeEvent:'\n<template>\n   <div class="demo-inline-spacing">\n\n    \x3c!-- show button --\x3e\n    <b-button\n      id="tooltip-button-show-event"\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      Show Event Tooltip\n    </b-button>\n    \x3c!-- tooltip --\x3e\n    <b-tooltip\n      ref="tooltip-show"\n      target="tooltip-button-show-event"\n      triggers="click"\n      @show="onShow"\n    >\n      tooltip!\n    </b-tooltip>\n\n    \x3c!-- button shown --\x3e\n    <b-button\n      id="tooltip-button-shown-event"\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      Shown Event Tooltip\n    </b-button>\n    \x3c!-- tooltip --\x3e\n    <b-tooltip\n      ref="tooltip-shown"\n      target="tooltip-button-shown-event"\n      triggers="click"\n      @shown="onShown"\n    >\n      tooltip!\n    </b-tooltip>\n\n    \x3c!-- button hide --\x3e\n    <b-button\n      id="tooltip-button-hide-event"\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      Hide Event Tooltip\n    </b-button>\n    \x3c!-- tooltip --\x3e\n    <b-tooltip\n      ref="tooltip-hide"\n      target="tooltip-button-hide-event"\n      triggers="click"\n      @hide="onHide"\n    >\n      tooltip!\n    </b-tooltip>\n\n    \x3c!-- button hidden --\x3e\n    <b-button\n      id="tooltip-button-hidden-event"\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      class="mb-1 mb-xl-0"\n    >\n      Hidden Event Tooltip\n    </b-button>\n\n    \x3c!-- tooltip --\x3e\n    <b-tooltip\n      ref="tooltip-hidden"\n      target="tooltip-button-hidden-event"\n      triggers="click"\n      @hidden="onHidden"\n    >\n      tooltip!\n    </b-tooltip>\n  </div>\n</template>\n\n<script>\nimport {VBTooltip, BButton, BTooltip} from \'bootstrap-vue\'\nimport ToastificationContent from \'@core/components/toastification/ToastificationContent.vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButton,\n    BTooltip,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  directives: {\n    \'b-tooltip\': VBTooltip,\n    Ripple,\n  },\n  methods: {\n    onShow() {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: \'Show Event Tooltip\',\n          icon: \'BellIcon\',\n        },\n      })\n    },\n    onShown() {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: \'Shown Event Tooltip\',\n          icon: \'BellIcon\',\n        },\n      })\n    },\n    onHide() {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: \'Hide Event Tooltip\',\n          icon: \'BellIcon\',\n        },\n      })\n    },\n    onHidden() {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: \'Hidden Event Tooltip\',\n          icon: \'BellIcon\',\n        },\n      })\n    },\n  },\n}\n<\/script>\n'}},methods:{onShow:function(){this.$toast({component:x.a,props:{title:"Show Event Tooltip",icon:"BellIcon"}})},onShown:function(){this.$toast({component:x.a,props:{title:"Shown Event Tooltip",icon:"BellIcon"}})},onHide:function(){this.$toast({component:x.a,props:{title:"Hide Event Tooltip",icon:"BellIcon"}})},onHidden:function(){this.$toast({component:x.a,props:{title:"Hidden Event Tooltip",icon:"BellIcon"}})}}},B=Object(v.a)(w,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("b-card-code",{attrs:{title:"Tooltip Events"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeEvent)+"\n  ")]},proxy:!0}])},[o("div",{staticClass:"demo-inline-spacing"},[o("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{id:"tooltip-button-show-event",variant:"outline-primary"}},[t._v("\n      Show Event Tooltip\n    ")]),t._v(" "),o("b-tooltip",{ref:"tooltip-show",attrs:{target:"tooltip-button-show-event",triggers:"click"},on:{show:t.onShow}},[t._v("\n      tooltip!\n    ")]),t._v(" "),o("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{id:"tooltip-button-shown-event",variant:"outline-primary"}},[t._v("\n      Shown Event Tooltip\n    ")]),t._v(" "),o("b-tooltip",{ref:"tooltip-shown",attrs:{target:"tooltip-button-shown-event",triggers:"click"},on:{shown:t.onShown}},[t._v("\n      tooltip!\n    ")]),t._v(" "),o("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{id:"tooltip-button-hide-event",variant:"outline-primary"}},[t._v("\n      Hide Event Tooltip\n    ")]),t._v(" "),o("b-tooltip",{ref:"tooltip-hide",attrs:{target:"tooltip-button-hide-event",triggers:"click"},on:{hide:t.onHide}},[t._v("\n      tooltip!\n    ")]),t._v(" "),o("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],staticClass:"mb-1 mb-xl-0",attrs:{id:"tooltip-button-hidden-event",variant:"outline-primary"}},[t._v("\n      Hidden Event Tooltip\n    ")]),t._v(" "),o("b-tooltip",{ref:"tooltip-hidden",attrs:{target:"tooltip-button-hidden-event",triggers:"click"},on:{hidden:t.onHidden}},[t._v("\n      tooltip!\n    ")])],1)])}),[],!1,null,null,null).exports,C={components:{BRow:e.a,BCol:i.a,TooltipPosition:c,TooltipVariant:u,TooltipTrigger:g,TooltipOption:_,TooltipMethod:T,TooltipEvent:B}},k=Object(v.a)(C,(function(){var t=this.$createElement,n=this._self._c||t;return n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("tooltip-position"),this._v(" "),n("tooltip-variant"),this._v(" "),n("tooltip-trigger"),this._v(" "),n("tooltip-option"),this._v(" "),n("tooltip-method"),this._v(" "),n("tooltip-event")],1)],1)}),[],!1,null,null,null);n.default=k.exports},OIjt:function(t,n,o){"use strict";var e={components:{BAvatar:o("6KOa").a},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},i=(o("7WNh"),o("KHd+")),r=Object(i.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"toastification"},[o("div",{staticClass:"d-flex align-items-start"},[o("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[o("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),t._v(" "),o("div",{staticClass:"d-flex flex-grow-1"},[o("div",[t.title?o("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t.text?o("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),t._v(" "),o("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto",on:{click:function(n){return t.$emit("close-toast")}}},[t.hideClose?t._e():o("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])}),[],!1,null,"5044ad47",null);n.a=r.exports},Tk63:function(t,n,o){(n=o("JPst")(!1)).push([t.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),t.exports=n},iPaL:function(t,n,o){"use strict";var e=o("m8qd");n.a=e.a},m8qd:function(t,n,o){"use strict";o("6cQw");var e=o("IF94"),i=o("SWgu"),r=o("ugaB"),a=o("YZfj"),l=o("WEOK"),p=(o("wZee"),o("hL/g"),o("jVEP")),s=o.n(p),d={components:{BCard:e.a,BCardTitle:i.a,BCardSubTitle:r.a,BCardBody:a.a,BCollapse:l.a,Prism:s.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var t=JSON.parse(JSON.stringify(this.$attrs));return delete t.title,delete t["sub-title"],t}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},v=(o("1yzx"),o("KHd+")),c=Object(v.a)(d,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("b-card",t._g(t._b({attrs:{"no-body":""}},"b-card",t.cardAttrs,!1),t.$listeners),[o("div",{staticClass:"card-header"},[o("div",[o("b-card-title",[t._v(t._s(t.$attrs.title))]),t._v(" "),t.$attrs["sub-title"]?o("b-card-sub-title",[t._v("\n        "+t._s(t.$attrs["sub-title"])+"\n      ")]):t._e()],1),t._v(" "),o("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":t.code_visible?"false":"true","aria-controls":t.parentID},on:{click:function(n){t.code_visible=!t.code_visible}}})]),t._v(" "),void 0!==t.$attrs["no-body"]?[t._t("default"),t._v(" "),o("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(n){t.code_visible=n},expression:"code_visible"}},[o("b-card-body",[o("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],1)]:o("b-card-body",[t._t("default"),t._v(" "),o("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(n){t.code_visible=n},expression:"code_visible"}},[o("div",{staticClass:"p-1"}),t._v(" "),o("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);n.a=c.exports},pNOa:function(t,n,o){var e=o("BtHL");"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o("aET+")(e,i);e.locals&&(t.exports=e.locals)},yPU0:function(t,n,o){var e=o("Tk63");"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o("aET+")(e,i);e.locals&&(t.exports=e.locals)}}]);
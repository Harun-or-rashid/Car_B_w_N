(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{"1yzx":function(t,n,r){"use strict";r("yPU0")},"4AkS":function(t,n,r){"use strict";var e={bind:function(t,n){var r={event:"mousedown",transition:600};!function(t,n){t.forEach((function(t){isNaN(Number(t))?n.event=t:n.transition=t}))}(Object.keys(n.modifiers),r),t.addEventListener(r.event,(function(e){!function(t,n){var e=n,i=parseInt(getComputedStyle(e).borderWidth.replace("px","")),b=e.getBoundingClientRect(),p=b.left,u=b.top,s=e.offsetWidth,l=e.offsetHeight,d=t.clientX-p,v=t.clientY-u,c=Math.max(d,s-d),m=Math.max(v,l-v),g=window.getComputedStyle(e),f=Math.sqrt(c*c+m*m),y=i>0?i:0,B=document.createElement("div"),_=document.createElement("div");_.className="ripple-container",B.className="ripple",B.style.marginTop="0px",B.style.marginLeft="0px",B.style.width="1px",B.style.height="1px",B.style.transition="all "+r.transition+"ms cubic-bezier(0.4, 0, 0.2, 1)",B.style.borderRadius="50%",B.style.pointerEvents="none",B.style.position="relative",B.style.zIndex=a,B.style.backgroundColor=o,_.style.position="absolute",_.style.left=0-y+"px",_.style.top=0-y+"px",_.style.height="0",_.style.width="0",_.style.pointerEvents="none",_.style.overflow="hidden";var h=e.style.position.length>0?e.style.position:getComputedStyle(e).position;"relative"!==h&&(e.style.position="relative");function w(){setTimeout((function(){B.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((function(){_.parentNode.removeChild(_)}),850),n.removeEventListener("mouseup",w,!1),setTimeout((function(){for(var t=!0,n=0;n<e.childNodes.length;n++)"ripple-container"===e.childNodes[n].className&&(t=!1);t&&(e.style.position="static"!==h?h:"")}),r.transition+250)}_.appendChild(B),e.appendChild(_),B.style.marginLeft=d+"px",B.style.marginTop=v+"px",_.style.width=s+"px",_.style.height=l+"px",_.style.borderTopLeftRadius=g.borderTopLeftRadius,_.style.borderTopRightRadius=g.borderTopRightRadius,_.style.borderBottomLeftRadius=g.borderBottomLeftRadius,_.style.borderBottomRightRadius=g.borderBottomRightRadius,_.style.direction="ltr",setTimeout((function(){B.style.width=2*f+"px",B.style.height=2*f+"px",B.style.marginLeft=d-f+"px",B.style.marginTop=v-f+"px"}),0),"mousedown"===t.type?n.addEventListener("mouseup",w,!1):w()}(e,t,n.value)}));var o=n.value||e.color||"rgba(0, 0, 0, 0.35)",a=e.zIndex||"9999"}};n.a=e},Tk63:function(t,n,r){(n=r("JPst")(!1)).push([t.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),t.exports=n},lwQo:function(t,n,r){"use strict";r.r(n);var e=r("oVt+"),o=r("sove"),a=r("QEvi"),i=r("EqoQ"),b=r("GUe+"),p=r("1uQM"),u=r("m8qd"),s=r("4AkS"),l={components:{BButtonToolbar:a.a,BButtonGroup:i.a,BButton:b.a,BCardText:p.a,BCardCode:u.a},directives:{Ripple:s.a},data:function(){return{codeNavigation:'\n<template>\n  <b-button-toolbar\n    key-nav\n    aria-label="Toolbar with button groups"\n    class="demo-inline-spacing"\n  >\n\n    \x3c!-- group  1 --\x3e\n    <b-button-group>\n      <b-button\n        v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n        class="btn-icon"\n        variant="outline-primary"\n      >\n        <feather-icon icon="ChevronsLeftIcon" />\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n        class="btn-icon"\n        variant="outline-primary"\n      >\n        <feather-icon icon="ChevronLeftIcon" />\n      </b-button>\n    </b-button-group>\n\n    \x3c!-- group 2 --\x3e\n    <b-button-group>\n      <b-button\n        v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n        variant="outline-primary"\n      >\n        Edit\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n        variant="outline-primary"\n      >\n        Undo\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n        variant="outline-primary"\n      >\n        Redo\n      </b-button>\n    </b-button-group>\n\n    \x3c!-- group 3 --\x3e\n    <b-button-group>\n      <b-button\n        v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n        class="btn-icon"\n        variant="outline-primary"\n      >\n        <feather-icon icon="ChevronRightIcon" />\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n        class="btn-icon"\n        variant="outline-primary"\n      >\n        <feather-icon icon="ChevronsRightIcon" />\n      </b-button>\n    </b-button-group>\n  </b-button-toolbar>\n</template>\n\n<script>\nimport {BButtonToolbar, BButtonGroup, BButton} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonToolbar,\n    BButtonGroup,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n'}}},d=r("KHd+"),v=Object(d.a)(l,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("b-card-code",{attrs:{title:"Button groups & Keyboard navigation"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeNavigation)+"\n  ")]},proxy:!0}])},[r("b-card-text",[t._v("Group a series of button-groups and/or input-groups together on a single line, with optional keyboard navigation")]),t._v(" "),r("b-button-toolbar",{staticClass:"demo-inline-spacing",attrs:{"key-nav":"","aria-label":"Toolbar with button groups"}},[r("b-button-group",[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon",attrs:{variant:"outline-primary"}},[r("feather-icon",{attrs:{icon:"ChevronsLeftIcon"}})],1),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon",attrs:{variant:"outline-primary"}},[r("feather-icon",{attrs:{icon:"ChevronLeftIcon"}})],1)],1),t._v(" "),r("b-button-group",[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Edit\n      ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Undo\n      ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Redo\n      ")])],1),t._v(" "),r("b-button-group",[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon",attrs:{variant:"outline-primary"}},[r("feather-icon",{attrs:{icon:"ChevronRightIcon"}})],1),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon",attrs:{variant:"outline-primary"}},[r("feather-icon",{attrs:{icon:"ChevronsRightIcon"}})],1)],1)],1)],1)}),[],!1,null,null,null).exports,c=r("R5cT"),m=r("XhI9"),g={components:{BButtonToolbar:a.a,BButtonGroup:i.a,BButton:b.a,BFormInput:c.a,BInputGroup:m.a,BCardCode:u.a},directives:{Ripple:s.a},data:function(){return{codeInput:'\n<template>\n   <b-button-toolbar\n      class="demo-inline-spacing"\n      aria-label="Toolbar with button groups and input groups"\n    >\n      <b-button-group size="sm">\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Save\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Cancel\n        </b-button>\n      </b-button-group>\n      <b-input-group\n        size="sm"\n        append=".00"\n        prepend="$"\n      >\n        <b-form-input\n          value="100"\n          class="text-right"\n        />\n      </b-input-group>\n  </b-button-toolbar>\n</template>\n\n<script>\nimport {\n  BButtonToolbar, BButtonGroup, BButton, BFormInput, BInputGroup,\n} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonToolbar,\n    BButtonGroup,\n    BButton,\n    BFormInput,\n    BInputGroup,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n'}}},f=Object(d.a)(g,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("b-card-code",{attrs:{title:"Button Toolbar with Input"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeInput)+"\n  ")]},proxy:!0}])},[r("b-button-toolbar",{staticClass:"demo-inline-spacing",attrs:{"aria-label":"Toolbar with button groups and input groups"}},[r("b-button-group",{attrs:{size:"sm"}},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Save\n      ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Cancel\n      ")])],1),t._v(" "),r("b-input-group",{attrs:{size:"sm",append:".00",prepend:"$"}},[r("b-form-input",{staticClass:"text-right",attrs:{value:"100"}})],1)],1)],1)}),[],!1,null,null,null).exports,y=r("3Zo4"),B=r("nqqA"),_={components:{BButtonToolbar:a.a,BButtonGroup:i.a,BButton:b.a,BDropdown:y.a,BCardCode:u.a,BDropdownItem:B.a},directives:{Ripple:s.a},data:function(){return{codeDropdown:'\n<template>\n  <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">\n    <b-button-group>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        New\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Edit\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Undo\n      </b-button>\n    </b-button-group>\n    <b-dropdown\n      v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n      class="mx-1"\n      right\n      text="menu"\n      variant="primary"\n    >\n      <b-dropdown-item>Item 1</b-dropdown-item>\n      <b-dropdown-item>Item 2</b-dropdown-item>\n      <b-dropdown-item>Item 3</b-dropdown-item>\n    </b-dropdown>\n    <b-button-group>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Save\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Cancel\n      </b-button>\n    </b-button-group>\n  </b-button-toolbar>\n</template>\n\n<script>\nimport {\n  BButtonToolbar, BButtonGroup, BButton, BDropdown, BDropdownItem,\n} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonToolbar,\n    BButtonGroup,\n    BButton,\n    BDropdown,\n    BDropdownItem,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n'}}},h=Object(d.a)(_,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("b-card-code",{attrs:{title:"Button Toolbar with Dropdown"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeDropdown)+"\n  ")]},proxy:!0}])},[r("b-button-toolbar",{staticClass:"demo-inline-spacing",attrs:{"aria-label":"Toolbar with button groups and dropdown menu"}},[r("b-button-group",[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        New\n      ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Edit\n      ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Undo\n      ")])],1),t._v(" "),r("b-dropdown",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{right:"",text:"menu",variant:"outline-primary"}},[r("b-dropdown-item",[t._v("Item 1")]),t._v(" "),r("b-dropdown-item",[t._v("Item 2")]),t._v(" "),r("b-dropdown-item",[t._v("Item 3")])],1),t._v(" "),r("b-button-group",[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Save\n      ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Cancel\n      ")])],1)],1)],1)}),[],!1,null,null,null).exports,w={components:{BButtonToolbar:a.a,BButtonGroup:i.a,BButton:b.a,BCardText:p.a,BCardCode:u.a},directives:{Ripple:s.a},data:function(){return{codeSize:'\n<template>\n  <div>\n     <b-button-toolbar>\n      <b-button-group\n        size="lg"\n      >\n        <b-button\n          v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n          variant="primary"\n        >\n          First\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n          variant="primary"\n        >\n          Second\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n          variant="primary"\n        >\n          Third\n        </b-button>\n      </b-button-group>\n    </b-button-toolbar>\n\n    <b-button-toolbar>\n      <b-button-group\n        class="my-1"\n      >\n        <b-button\n          v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n          variant="primary"\n        >\n          First\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n          variant="primary"\n        >\n          Second\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n          variant="primary"\n        >\n          Third\n        </b-button>\n      </b-button-group>\n    </b-button-toolbar>\n\n    <b-button-toolbar>\n      <b-button-group\n        size="sm"\n      >\n        <b-button\n          v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n          variant="primary"\n        >\n          First\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n          variant="primary"\n        >\n          Second\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n          variant="primary"\n        >\n          Third\n        </b-button>\n      </b-button-group>\n    </b-button-toolbar>\n  </div>\n</template>\n\n<script>\nimport { BButtonToolbar, BButtonGroup, BButton } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonToolbar,\n    BButtonGroup,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n'}}},x=Object(d.a)(w,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("b-card-code",{attrs:{title:"Size"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeSize)+"\n  ")]},proxy:!0}])},[r("b-card-text",[r("span",[t._v("If you want smaller or larger buttons or controls, set the size prop directly on the ")]),t._v(" "),r("code",[t._v("<b-button-group>")]),t._v(" "),r("span",[t._v(", ")]),t._v(" "),r("code",[t._v("<b-input-group>")]),t._v(" "),r("span",[t._v(", and ")]),t._v(" "),r("code",[t._v("<b-dropdown>")]),t._v(" "),r("span",[t._v(" components")])]),t._v(" "),r("b-button-toolbar",[r("b-button-group",{attrs:{size:"lg"}},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        First\n      ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Second\n      ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Third\n      ")])],1)],1),t._v(" "),r("b-button-toolbar",[r("b-button-group",{staticClass:"my-1"},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        First\n      ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Second\n      ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Third\n      ")])],1)],1),t._v(" "),r("b-button-toolbar",[r("b-button-group",{attrs:{size:"sm"}},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        First\n      ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Second\n      ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Third\n      ")])],1)],1)],1)}),[],!1,null,null,null).exports,C={components:{BButtonToolbar:a.a,BButtonGroup:i.a,BCardText:p.a,BButton:b.a,BCardCode:u.a},directives:{Ripple:s.a},data:function(){return{codeJustify:'\n<template>\n  <b-button-toolbar justify>\n    <b-button-group\n      class="mr-2 mb-1"\n      vertical\n    >\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Button\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Button\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Button\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Button\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Button\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Button\n      </b-button>\n    </b-button-group>\n    <b-button-group\n      class="mr-2 mb-1"\n      vertical\n    >\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Primary\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="secondary"\n      >\n        Secondary\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="success"\n      >\n        Success\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="warning"\n      >\n        Warning\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="danger"\n      >\n        Danger\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="info"\n      >\n        Info\n      </b-button>\n    </b-button-group>\n    <b-button-group\n      class="mb-1"\n      vertical\n    >\n      <b-button\n        v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n        variant="outline-primary"\n      >\n        Button\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n        variant="outline-secondary"\n      >\n        Button\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(40, 199, 111, 0.15)\'"\n        variant="outline-success"\n      >\n        Button\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 159, 67, 0.15)\'"\n        variant="outline-warning"\n      >\n        Button\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(234, 84, 85, 0.15)\'"\n        variant="outline-danger"\n      >\n        Button\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(0, 207, 232, 0.15)\'"\n        variant="outline-info"\n      >\n        Button\n      </b-button>\n    </b-button-group>\n  </b-button-toolbar>\n</template>\n\n<script>\nimport { BButtonToolbar, BButtonGroup, BButton } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonToolbar,\n    BButtonGroup,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n'}}},T=Object(d.a)(C,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("b-card-code",{attrs:{title:"Justify"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeJustify)+"\n  ")]},proxy:!0}])},[r("b-card-text",[r("span",[t._v("Make the toolbar span the maximum available width, by increasing spacing between the button groups, input groups and dropdowns, by setting the prop ")]),t._v(" "),r("code",[t._v("justify")]),t._v(" "),r("span",[t._v(".")])]),t._v(" "),r("b-button-toolbar",{attrs:{justify:""}},[r("b-button-group",{staticClass:"mr-2 mb-1"},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Button\n      ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Button\n      ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Button\n      ")])],1),t._v(" "),r("b-button-group",{staticClass:"mr-2 mb-1"},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[r("feather-icon",{attrs:{icon:"HomeIcon"}})],1),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[r("feather-icon",{attrs:{icon:"SearchIcon"}})],1),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[r("feather-icon",{attrs:{icon:"BellIcon"}})],1),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[r("feather-icon",{attrs:{icon:"ShoppingCartIcon"}})],1)],1)],1)],1)}),[],!1,null,null,null).exports,N={components:{BRow:e.a,BCol:o.a,ButtonToolbarNavigation:v,ButtonToolbarInput:f,ButtonToolbarDropdown:h,ButtonToolbarSize:x,ButtonToolbarJustify:T}},I=Object(d.a)(N,(function(){var t=this.$createElement,n=this._self._c||t;return n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("button-toolbar-navigation"),this._v(" "),n("button-toolbar-input"),this._v(" "),n("button-toolbar-dropdown"),this._v(" "),n("button-toolbar-size"),this._v(" "),n("button-toolbar-justify")],1)],1)}),[],!1,null,null,null);n.default=I.exports},m8qd:function(t,n,r){"use strict";r("6cQw");var e=r("IF94"),o=r("SWgu"),a=r("ugaB"),i=r("YZfj"),b=r("WEOK"),p=(r("wZee"),r("hL/g"),r("jVEP")),u=r.n(p),s={components:{BCard:e.a,BCardTitle:o.a,BCardSubTitle:a.a,BCardBody:i.a,BCollapse:b.a,Prism:u.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var t=JSON.parse(JSON.stringify(this.$attrs));return delete t.title,delete t["sub-title"],t}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},l=(r("1yzx"),r("KHd+")),d=Object(l.a)(s,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("b-card",t._g(t._b({attrs:{"no-body":""}},"b-card",t.cardAttrs,!1),t.$listeners),[r("div",{staticClass:"card-header"},[r("div",[r("b-card-title",[t._v(t._s(t.$attrs.title))]),t._v(" "),t.$attrs["sub-title"]?r("b-card-sub-title",[t._v("\n        "+t._s(t.$attrs["sub-title"])+"\n      ")]):t._e()],1),t._v(" "),r("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":t.code_visible?"false":"true","aria-controls":t.parentID},on:{click:function(n){t.code_visible=!t.code_visible}}})]),t._v(" "),void 0!==t.$attrs["no-body"]?[t._t("default"),t._v(" "),r("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(n){t.code_visible=n},expression:"code_visible"}},[r("b-card-body",[r("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],1)]:r("b-card-body",[t._t("default"),t._v(" "),r("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(n){t.code_visible=n},expression:"code_visible"}},[r("div",{staticClass:"p-1"}),t._v(" "),r("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);n.a=d.exports},yPU0:function(t,n,r){var e=r("Tk63");"string"==typeof e&&(e=[[t.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(e,o);e.locals&&(t.exports=e.locals)}}]);
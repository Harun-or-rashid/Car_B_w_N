(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{"1yzx":function(t,n,e){"use strict";e("yPU0")},"4AkS":function(t,n,e){"use strict";var a={bind:function(t,n){var e={event:"mousedown",transition:600};!function(t,n){t.forEach((function(t){isNaN(Number(t))?n.event=t:n.transition=t}))}(Object.keys(n.modifiers),e),t.addEventListener(e.event,(function(a){!function(t,n){var a=n,r=parseInt(getComputedStyle(a).borderWidth.replace("px","")),i=a.getBoundingClientRect(),s=i.left,d=i.top,p=a.offsetWidth,u=a.offsetHeight,c=t.clientX-s,b=t.clientY-d,m=Math.max(c,p-c),v=Math.max(b,u-b),f=window.getComputedStyle(a),_=Math.sqrt(m*m+v*v),g=r>0?r:0,x=document.createElement("div"),h=document.createElement("div");h.className="ripple-container",x.className="ripple",x.style.marginTop="0px",x.style.marginLeft="0px",x.style.width="1px",x.style.height="1px",x.style.transition="all "+e.transition+"ms cubic-bezier(0.4, 0, 0.2, 1)",x.style.borderRadius="50%",x.style.pointerEvents="none",x.style.position="relative",x.style.zIndex=l,x.style.backgroundColor=o,h.style.position="absolute",h.style.left=0-g+"px",h.style.top=0-g+"px",h.style.height="0",h.style.width="0",h.style.pointerEvents="none",h.style.overflow="hidden";var B=a.style.position.length>0?a.style.position:getComputedStyle(a).position;"relative"!==B&&(a.style.position="relative");function I(){setTimeout((function(){x.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((function(){h.parentNode.removeChild(h)}),850),n.removeEventListener("mouseup",I,!1),setTimeout((function(){for(var t=!0,n=0;n<a.childNodes.length;n++)"ripple-container"===a.childNodes[n].className&&(t=!1);t&&(a.style.position="static"!==B?B:"")}),e.transition+250)}h.appendChild(x),a.appendChild(h),x.style.marginLeft=c+"px",x.style.marginTop=b+"px",h.style.width=p+"px",h.style.height=u+"px",h.style.borderTopLeftRadius=f.borderTopLeftRadius,h.style.borderTopRightRadius=f.borderTopRightRadius,h.style.borderBottomLeftRadius=f.borderBottomLeftRadius,h.style.borderBottomRightRadius=f.borderBottomRightRadius,h.style.direction="ltr",setTimeout((function(){x.style.width=2*_+"px",x.style.height=2*_+"px",x.style.marginLeft=c-_+"px",x.style.marginTop=b-_+"px"}),0),"mousedown"===t.type?n.addEventListener("mouseup",I,!1):I()}(a,t,n.value)}));var o=n.value||a.color||"rgba(0, 0, 0, 0.35)",l=a.zIndex||"9999"}};n.a=a},Tk63:function(t,n,e){(n=e("JPst")(!1)).push([t.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),t.exports=n},fHeK:function(t,n,e){"use strict";e.r(n);var a=e("oVt+"),o=e("sove"),l=e("iPaL"),r=e("R5cT"),i=e("giZP"),s={components:{BCardCode:l.a,BFormInput:r.a,BFormGroup:i.a,BRow:a.a,BCol:o.a},data:function(){return{codeBasic:'\n<template>\n  <b-row>\n    <b-col\n      md="6"\n      xl="4"\n      class="mb-1"\n    >\n\n      \x3c!-- basic --\x3e\n      <b-form-group\n        label="Basic Input"\n        label-for="basicInput"\n      >\n        <b-form-input\n          id="basicInput"\n          placeholder="Enter Email"\n        />\n      </b-form-group>\n    </b-col>\n\n    <b-col\n      md="6"\n      xl="4"\n      class="mb-1"\n    >\n      \x3c!-- input text with help --\x3e\n      <b-form-group>\n        <label for="InputHelp">Input text with help</label>\n        <small class="text-muted"> eg. <i>someone@example.com</i></small>\n        <b-form-input id="InputHelp" />\n      </b-form-group>\n    </b-col>\n\n    <b-col\n      md="6"\n      xl="4"\n      class="mb-1"\n    >\n      \x3c!-- disabled input --\x3e\n      <b-form-group\n        label="Disabled Input"\n        label-for="disabledInput"\n      >\n        <b-form-input\n          id="disabledInput"\n          disabled\n        />\n      </b-form-group>\n    </b-col>\n\n    <b-col\n      md="6"\n      xl="4"\n    >\n      \x3c!-- with helper text --\x3e\n      <b-form-group\n        label="With Helper Text"\n        label-for="helperInput"\n        description="Find helper text here for given textbox."\n      >\n        <b-form-input\n          id="helperInput"\n          placeholder="Name"\n        />\n      </b-form-group>\n    </b-col>\n    <b-col\n      md="6"\n      xl="4"\n    >\n      \x3c!-- readonly input --\x3e\n      <b-form-group\n        label="Readonly Input"\n        label-for="readOnlyInput"\n      >\n        <b-form-input\n          id="readOnlyInput"\n          value="You can\'t update me :P"\n          readonly\n        />\n      </b-form-group>\n    </b-col>\n\n    <b-col\n      md="6"\n      xl="4"\n    >\n      \x3c!-- static text --\x3e\n      <b-form-group\n        label="Readonly Static Text"\n        label-for="plainTextInput"\n      >\n        <b-form-input\n          id="plainTextInput"\n          plaintext\n          value="email@pixinvent.com"\n        />\n      </b-form-group>\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport {BFormInput, BRow, BCol, BFormGroup} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormInput,\n    BFormGroup,\n    BRow,\n    BCol,\n  },\n}\n<\/script>\n'}}},d=e("KHd+"),p=Object(d.a)(s,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Basic Inputs"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeBasic)+"\n  ")]},proxy:!0}])},[e("b-row",[e("b-col",{staticClass:"mb-1",attrs:{md:"6",xl:"4"}},[e("b-form-group",{attrs:{label:"Basic Input","label-for":"basicInput"}},[e("b-form-input",{attrs:{id:"basicInput",placeholder:"Enter Email"}})],1)],1),t._v(" "),e("b-col",{staticClass:"mb-1",attrs:{md:"6",xl:"4"}},[e("b-form-group",[e("label",{attrs:{for:"InputHelp"}},[t._v("Input text with help")]),t._v(" "),e("small",{staticClass:"text-muted"},[t._v(" eg. "),e("i",[t._v("someone@example.com")])]),t._v(" "),e("b-form-input",{attrs:{id:"InputHelp"}})],1)],1),t._v(" "),e("b-col",{staticClass:"mb-1",attrs:{md:"6",xl:"4"}},[e("b-form-group",{attrs:{label:"Disabled Input","label-for":"disabledInput"}},[e("b-form-input",{attrs:{id:"disabledInput",disabled:""}})],1)],1),t._v(" "),e("b-col",{attrs:{md:"6",xl:"4"}},[e("b-form-group",{attrs:{label:"With Helper Text","label-for":"helperInput",description:"Find helper text here for given textbox."}},[e("b-form-input",{attrs:{id:"helperInput",placeholder:"Name"}})],1)],1),t._v(" "),e("b-col",{attrs:{md:"6",xl:"4"}},[e("b-form-group",{attrs:{label:"Readonly Input","label-for":"readOnlyInput"}},[e("b-form-input",{attrs:{id:"readOnlyInput",value:"You can't update me :P",readonly:""}})],1)],1),t._v(" "),e("b-col",{attrs:{md:"6",xl:"4"}},[e("b-form-group",{attrs:{label:"Readonly Static Text","label-for":"plainTextInput"}},[e("b-form-input",{attrs:{id:"plainTextInput",plaintext:"",value:"email@pixinvent.com"}})],1)],1)],1)],1)}),[],!1,null,null,null).exports,u=e("1uQM"),c={components:{BCardCode:l.a,BFormInput:r.a,BFormGroup:i.a,BCardText:u.a,BRow:a.a,BCol:o.a},data:function(){return{codeSize:'\n<template>\n  <b-row>\n\n    \x3c!-- large --\x3e\n    <b-col cols="12">\n      <b-form-group\n        label="Large"\n        label-for="largeInput"\n      >\n        <b-form-input\n          id="largeInput"\n          size="lg"\n          placeholder="Large Input"\n        />\n      </b-form-group>\n    </b-col>\n\n    \x3c!-- default --\x3e\n    <b-col cols="12">\n      <b-form-group\n        label="Default"\n        label-for="defaultLabel"\n      >\n        <b-form-input\n          id="defaultLabel"\n          placeholder="Normal Input"\n        />\n      </b-form-group>\n    </b-col>\n\n    \x3c!-- small --\x3e\n    <b-col cols="12">\n      <b-form-group\n        label="Small"\n        label-for="smallInput"\n      >\n        <b-form-input\n          id="smallInput"\n          size="sm"\n          placeholder="Small Input"\n        />\n      </b-form-group>\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport {BFormInput, BRow, BCol, BFormGroup} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormInput,\n    BFormGroup,\n    BRow,\n    BCol,\n  },\n}\n<\/script>\n'}}},b=Object(d.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Sizing Options"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeSize)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[t._v("Set heights using the ")]),t._v(" "),e("code",[t._v("size")]),t._v(" "),e("span",[t._v(" prop to ")]),t._v(" "),e("code",[t._v("sm")]),t._v(" "),e("span",[t._v(" or ")]),t._v(" "),e("code",[t._v("lg")]),t._v(" "),e("span",[t._v(" for small or large respectively.")])]),t._v(" "),e("div",[e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("b-form-group",{attrs:{label:"Large","label-for":"largeInput"}},[e("b-form-input",{attrs:{id:"largeInput",size:"lg",placeholder:"Large Input"}})],1)],1),t._v(" "),e("b-col",{attrs:{cols:"12"}},[e("b-form-group",{attrs:{label:"Default","label-for":"defaultLabel"}},[e("b-form-input",{attrs:{id:"defaultLabel",placeholder:"Normal Input"}})],1)],1),t._v(" "),e("b-col",{attrs:{cols:"12"}},[e("b-form-group",{attrs:{label:"Small","label-for":"smallInput"}},[e("b-form-input",{attrs:{id:"smallInput",size:"sm",placeholder:"Small Input"}})],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports,m={components:{BCardCode:e("m8qd").a,BFormGroup:i.a,BFormInput:r.a,BCardText:u.a},data:function(){return{codeHorizontalSize:'\n<template>\n  <div>\n     \x3c!-- large label  --\x3e\n    <b-form-group\n      label-cols="4"\n      label-cols-lg="2"\n      label-size="lg"\n      label="Large"\n      label-for="input-lg"\n    >\n      <b-form-input\n        id="input-lg"\n        size="lg"\n        placeholder="Large Input"\n      />\n    </b-form-group>\n\n    \x3c!-- default label --\x3e\n    <b-form-group\n      label-cols="4"\n      label-cols-lg="2"\n      label="Default"\n      label-for="input-default"\n    >\n      <b-form-input\n        id="input-default"\n        placeholder="Normal Input"\n      />\n    </b-form-group>\n\n    \x3c!-- small label --\x3e\n    <b-form-group\n      label-cols="4"\n      label-cols-lg="2"\n      label-size="sm"\n      label="Small"\n      label-for="input-sm"\n    >\n      <b-form-input\n        id="input-sm"\n        size="sm"\n        placeholder="Small Input"\n      />\n    </b-form-group>\n  </div>\n</template>\n\n<script>\nimport { BFormGroup, BFormInput } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormGroup,\n    BFormInput,\n  },\n}\n<\/script>\n'}}},v=Object(d.a)(m,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Horizontal form label sizing"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeHorizontalSize)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[t._v("You can control the label text size match the size of your form input(s) via the optional ")]),t._v(" "),e("code",[t._v("label-size")]),t._v(" "),e("span",[t._v(" prop. Values can be ")]),t._v(" "),e("code",[t._v("'sm'")]),t._v(" "),e("span",[t._v(" or ")]),t._v(" "),e("code",[t._v("'lg'")]),t._v(" "),e("span",[t._v(" for small or large label, respectively. Sizes work for both horizontal and non-horizontal form groups.")])]),t._v(" "),e("b-form-group",{attrs:{"label-cols":"4","label-cols-lg":"2","label-size":"lg",label:"Large","label-for":"input-lg"}},[e("b-form-input",{attrs:{id:"input-lg",size:"lg",placeholder:"Large Input"}})],1),t._v(" "),e("b-form-group",{attrs:{"label-cols":"4","label-cols-lg":"2",label:"Default","label-for":"input-default"}},[e("b-form-input",{attrs:{id:"input-default",placeholder:"Normal Input"}})],1),t._v(" "),e("b-form-group",{attrs:{"label-cols":"4","label-cols-lg":"2","label-size":"sm",label:"Small","label-for":"input-sm"}},[e("b-form-input",{attrs:{id:"input-sm",size:"sm",placeholder:"Small Input"}})],1)],1)}),[],!1,null,null,null).exports,f={components:{BCardCode:l.a,BCardText:u.a,BFormInput:r.a,BRow:a.a,BCol:o.a},data:function(){return{codeFloatinLabel:'\n<template>\n   <b-row>\n    <b-col md="4">\n      <div class="form-label-group">\n        <b-form-input\n          id="floating-label1"\n          placeholder="Label Placeholder"\n        />\n        <label for="floating-label1">Label-placeholder</label>\n      </div>\n    </b-col>\n    <b-col md="4">\n      <div class="form-label-group has-icon-left">\n        <b-form-input\n          id="iconLabelLeft"\n          placeholder="Icon Left, Default Input"\n        />\n        <div class="form-control-position">\n          <i class="bx bx-user" />\n        </div>\n        <label for="iconLabelLeft">Icon Left, Default Input</label>\n      </div>\n    </b-col>\n    <b-col md="4">\n      <div class="form-label-group">\n        <b-form-input\n          placeholder="Disabled-placeholder"\n          disabled\n        />\n        <label for="floating-label-disable">Disabled-placeholder</label>\n      </div>\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport { BFormInput, BRow, BCol } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCardCode,\n    BFormInput,\n    BRow,\n    BCol,\n  },\n}\n<\/script>\n'}}},_=Object(d.a)(f,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Floating Label Inputs"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeFloatinLabel)+"\n  ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-2"},[e("span",[t._v("For Flating Label Inputs, need to use ")]),t._v(" "),e("code",[t._v(".form-label-group")]),t._v(" "),e("span",[t._v(" class & add prop ")]),t._v(" "),e("code",[t._v("disabled")]),t._v(" "),e("span",[t._v(" for disabled Floating Label Input.")])]),t._v(" "),e("b-row",[e("b-col",{attrs:{md:"6"}},[e("div",{staticClass:"form-label-group"},[e("b-form-input",{attrs:{id:"floating-label1",placeholder:"Label Placeholder"}}),t._v(" "),e("label",{attrs:{for:"floating-label1"}},[t._v("Label-placeholder")])],1)]),t._v(" "),e("b-col",{attrs:{md:"6"}},[e("div",{staticClass:"form-label-group"},[e("b-form-input",{attrs:{placeholder:"Disabled-placeholder",disabled:""}}),t._v(" "),e("label",{attrs:{for:"floating-label-disable"}},[t._v("Disabled-placeholder")])],1)])],1)],1)}),[],!1,null,null,null).exports,g=e("MBD0"),x=e("W0yy"),h={components:{BCardCode:l.a,BFormInput:r.a,BCardText:u.a,BFormInvalidFeedback:g.a,BFormValidFeedback:x.a,BRow:a.a,BFormGroup:i.a,BCol:o.a},data:function(){return{codeStates:'\n<template>\n  <b-row>\n\n    \x3c!-- valid input --\x3e\n    <b-col md="6">\n      <b-form-group\n        label="Valid State"\n        label-for="input-valid"\n      >\n        <b-form-input\n          id="input-valid"\n          :state="true"\n          placeholder="Valid"\n        />\n        <b-form-valid-feedback>\n          This is valid state.\n        </b-form-valid-feedback>\n      </b-form-group>\n    </b-col>\n\n    \x3c!-- invalid input --\x3e\n    <b-col md="6">\n      <b-form-group\n        label="Invalid State"\n        label-for="input-invalid"\n      >\n        <b-form-input\n          id="input-invalid"\n          :state="false"\n          placeholder="Invalid"\n        />\n        <b-form-invalid-feedback>\n          This is invalid state.\n        </b-form-invalid-feedback>\n      </b-form-group>\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport {\n  BFormInput, BRow, BCol, BFormInvalidFeedback, BFormValidFeedback, BFormGroup,\n} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormInput,\n    BFormInvalidFeedback,\n    BFormValidFeedback,\n    BRow,\n    BFormGroup,\n    BCol,\n  },\n}\n<\/script>\n'}}},B=Object(d.a)(h,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Contextual states"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeStates)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[t._v("Use ")]),t._v(" "),e("code",[t._v("<b-form-valid-feedback>")]),t._v(" "),e("span",[t._v(" and ")]),t._v(" "),e("code",[t._v("<b-form-invalid-feedback>")]),t._v(" "),e("span",[t._v(" form sub-components for input validation.")])]),t._v(" "),e("b-row",[e("b-col",{attrs:{md:"6"}},[e("b-form-group",{attrs:{label:"Valid State","label-for":"input-valid"}},[e("b-form-input",{attrs:{id:"input-valid",state:!0,placeholder:"Valid"}}),t._v(" "),e("b-form-valid-feedback",[t._v("\n          This is valid state.\n        ")])],1)],1),t._v(" "),e("b-col",{attrs:{md:"6"}},[e("b-form-group",{attrs:{label:"Invalid State","label-for":"input-invalid"}},[e("b-form-input",{attrs:{id:"input-invalid",state:!1,placeholder:"Invalid"}}),t._v(" "),e("b-form-invalid-feedback",[t._v("\n          This is invalid state.\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null).exports,I=e("Ed67"),y=e("GUe+"),F=e("E7tE"),k=e("4AkS"),C={components:{BCardCode:l.a,BFormInput:r.a,BCardText:u.a,BForm:I.a,BButton:y.a,BFormRow:F.a,BFormValidFeedback:x.a,BFormInvalidFeedback:g.a,BCol:o.a},directives:{Ripple:k.a},data:function(){return{value1:"John",value2:"Doe",value3:"",codeValidateTooltips:'\n<template>\n  <b-form novalidate class="needs-validation" @submit.prevent>\n    <b-form-row>\n\n      \x3c!-- valid input  --\x3e\n      <b-col\n        md="4"\n        class="mb-3"\n      >\n        <label for="input-valid1">Valid Input:</label>\n        <b-form-input\n          id="input-valid1"\n          v-model="value1"\n          :state="value1.length > 0"\n          placeholder="Valid input"\n        />\n        <b-form-valid-feedback\n          tooltip\n        >\n          Looks good!\n        </b-form-valid-feedback>\n        <b-form-invalid-feedback\n          tooltip\n        >\n          Please provide a valid input.\n        </b-form-invalid-feedback>\n      </b-col>\n\n      \x3c!-- invalid input --\x3e\n      <b-col\n        md="4"\n        class="mb-3"\n      >\n        <label for="input-invalid1">Invalid Input:</label>\n        <b-form-input\n          id="input-invalid1"\n          v-model="value2"\n          :state="value2.length > 0"\n          placeholder="Invalid input"\n        />\n        <b-form-valid-feedback tooltip>\n          Looks good!\n        </b-form-valid-feedback>\n        <b-form-invalid-feedback\n          tooltip\n        >\n          Please provide a valid input.\n        </b-form-invalid-feedback>\n      </b-col>\n\n      \x3c!-- invalid input --\x3e\n      <b-col\n        md="4"\n        class="mb-3"\n      >\n        <label for="input-invalid2">Invalid Input:</label>\n        <b-form-input\n          id="input-invalid2"\n          v-model="value3"\n          :state="value3.length > 0"\n          placeholder="Invalid input"\n        />\n        <b-form-valid-feedback tooltip>\n          Looks good!\n        </b-form-valid-feedback>\n        <b-form-invalid-feedback tooltip>\n          Please provide a valid city.\n        </b-form-invalid-feedback>\n      </b-col>\n\n      \x3c!-- submit button --\x3e\n      <b-col\n        cols="12"\n      >\n        <b-button\n          v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n          type="submit"\n          variant="primary"\n        >\n          Submit\n        </b-button>\n      </b-col>\n    </b-form-row>\n  </b-form>\n</template>\n\n<script>\nimport { BFormInput, BCol, BForm, BFormRow, BFormValidFeedback, BFormInvalidFeedback, BButton} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BFormInput,\n    BForm,\n    BButton,\n    BFormRow,\n    BFormValidFeedback,\n    BFormInvalidFeedback,\n    BCol,\n  },\n  directives: {\n    Ripple,\n  },\n  data() {\n    return {\n      value1: \'John\',\n      value2: \'Doe\',\n      value3: \'\',\n    }\n  },\n}\n<\/script>\n'}}},w=Object(d.a)(C,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Input Validation States with Tootltips"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeValidateTooltips)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[t._v("Use ")]),t._v(" "),e("code",[t._v("tooltip")]),t._v(" "),e("span",[t._v(" true in ")]),t._v(" "),e("code",[t._v("<b-form-valid-feedback>")]),t._v(" "),e("span",[t._v(" and ")]),t._v(" "),e("code",[t._v("<b-form-invalid-feedback>")]),t._v(" "),e("span",[t._v(" form sub-components.")])]),t._v(" "),e("b-form",{staticClass:"needs-validation",attrs:{novalidate:""},on:{submit:function(t){t.preventDefault()}}},[e("b-form-row",[e("b-col",{staticClass:"mb-3",attrs:{md:"4"}},[e("label",{attrs:{for:"input-valid1"}},[t._v("Valid Input:")]),t._v(" "),e("b-form-input",{attrs:{id:"input-valid1",state:t.value1.length>0,placeholder:"Valid input"},model:{value:t.value1,callback:function(n){t.value1=n},expression:"value1"}}),t._v(" "),e("b-form-valid-feedback",{attrs:{tooltip:""}},[t._v("\n          Looks good!\n        ")]),t._v(" "),e("b-form-invalid-feedback",{attrs:{tooltip:""}},[t._v("\n          Please provide a valid input.\n        ")])],1),t._v(" "),e("b-col",{staticClass:"mb-3",attrs:{md:"4"}},[e("label",{attrs:{for:"input-invalid1"}},[t._v("Invalid Input:")]),t._v(" "),e("b-form-input",{attrs:{id:"input-invalid1",state:t.value2.length>0,placeholder:"Invalid input"},model:{value:t.value2,callback:function(n){t.value2=n},expression:"value2"}}),t._v(" "),e("b-form-valid-feedback",{attrs:{tooltip:""}},[t._v("\n          Looks good!\n        ")]),t._v(" "),e("b-form-invalid-feedback",{attrs:{tooltip:""}},[t._v("\n          Please provide a valid input.\n        ")])],1),t._v(" "),e("b-col",{staticClass:"mb-3",attrs:{md:"4"}},[e("label",{attrs:{for:"input-invalid2"}},[t._v("Invalid Input:")]),t._v(" "),e("b-form-input",{attrs:{id:"input-invalid2",state:t.value3.length>0,placeholder:"Invalid input"},model:{value:t.value3,callback:function(n){t.value3=n},expression:"value3"}}),t._v(" "),e("b-form-valid-feedback",{attrs:{tooltip:""}},[t._v("\n          Looks good!\n        ")]),t._v(" "),e("b-form-invalid-feedback",{attrs:{tooltip:""}},[t._v("\n          Please provide a valid city.\n        ")])],1),t._v(" "),e("b-col",{attrs:{cols:"12"}},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{type:"submit",variant:"primary"}},[t._v("\n          Submit\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null).exports,L={components:{BCardCode:l.a,BFormGroup:i.a,BCardText:u.a,BFormInput:r.a},data:function(){return{sizes:["Small","Medium","Large","Extra Large"],codeDatalist:"\n<template>\n  <b-form-group class=\"mb-0\">\n    <b-form-input list=\"my-list-id\" />\n\n    <datalist id=\"my-list-id\">\n      <option>Manual Option</option>\n      <option\n        v-for=\"size in sizes\"\n        :key=\"size\"\n      >\n        {{ size }}\n      </option>\n    </datalist>\n  </b-form-group>\n</template>\n\n<script>\nimport { BFormInput, BFormGroup } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormGroup,\n    BFormInput,\n  },\n  data() {\n    return {\n      sizes: ['Small', 'Medium', 'Large', 'Extra Large'],\n    }\n  },\n}\n<\/script>\n"}}},z=Object(d.a)(L,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Datalist support"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeDatalist)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[t._v("Datalists are a native HTML tag ")]),t._v(" "),e("code",[t._v("<datalist>")]),t._v(" "),e("span",[t._v(" that contains a list of ")]),t._v(" "),e("code",[t._v("<option>")]),t._v(" "),e("span",[t._v("\n      tags. By assigning an ID to the datalist tag, the list can be references from a text input by adding a\n    ")]),t._v(" "),e("code",[t._v("list")]),t._v(" "),e("span",[t._v(" attribute.")])]),t._v(" "),e("b-form-group",{staticClass:"mb-0"},[e("b-form-input",{attrs:{list:"my-list-id"}}),t._v(" "),e("datalist",{attrs:{id:"my-list-id"}},[e("option",[t._v("Manual Option")]),t._v(" "),t._l(t.sizes,(function(n){return e("option",{key:n},[t._v("\n        "+t._s(n)+"\n      ")])}))],2)],1)],1)}),[],!1,null,null,null).exports,T={components:{BCardCode:l.a,BFormInput:r.a,BCardText:u.a},data:function(){return{value:"",codeDebounce:'\n<template>\n  <div>\n    <b-form-input\n      v-model="value"\n      type="text"\n      debounce="500"\n    />\n    <b-card-text class="mt-1 mb-0">\n      <strong>Value : </strong><span>{{ value }}</span>\n    </b-card-text>\n  </div>\n</template>\n\n<script>\nimport { BFormInput, BCardText } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormInput,\n    BCardText,\n  },\n  data() {\n    return {\n      value: \'\',\n    }\n  },\n}\n<\/script>\n'}}},S=Object(d.a)(T,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Debounce support"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeDebounce)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[t._v("To enable debouncing, set the prop ")]),t._v(" "),e("code",[t._v("debounce")]),t._v(" "),e("span",[t._v(" to any integer greater than zero. The value is specified in milliseconds. Setting ")]),t._v(" "),e("code",[t._v("debounce")]),t._v(" "),e("span",[t._v(" to ")]),t._v(" "),e("code",[t._v("0")]),t._v(" "),e("span",[t._v(" will disable debouncing.")])]),t._v(" "),e("b-form-input",{attrs:{type:"text",debounce:"500"},model:{value:t.value,callback:function(n){t.value=n},expression:"value"}}),t._v(" "),e("b-card-text",{staticClass:"mt-1 mb-0"},[e("strong",[t._v("Value : ")]),e("span",[t._v(t._s(t.value))])])],1)}),[],!1,null,null,null).exports,R={components:{BCardCode:l.a,BFormInput:r.a,BCardText:u.a,BFormGroup:i.a},data:function(){return{text1:"",text2:"",codeFormatter:'\n<template>\n  <div>\n    <b-form-group\n      label="Text input with formatter (on input)"\n      label-for="input-formatter"\n      description="We will convert your name to lowercase instantly"\n    >\n      <b-form-input\n        id="input-formatter"\n        v-model="text1"\n        placeholder="Enter your name"\n        :formatter="formatter"\n      />\n    </b-form-group>\n    <b-card-text><strong>Value:</strong> {{ text1 }}</b-card-text>\n\n    <b-form-group\n      label="Text input with lazy formatter (on blur)"\n      label-for="input-lazy"\n      description="This one is a little lazy!"\n    >\n      <b-form-input\n        id="input-lazy"\n        v-model="text2"\n        placeholder="Enter your name"\n        lazy-formatter\n        :formatter="formatter"\n      />\n    </b-form-group>\n\n    <b-card-text class="mb-0">\n      <strong>Value:</strong> {{ text2 }}\n    </b-card-text>\n  </div>\n</template>\n\n<script>\nimport { BFormInput, BFormGroup, BCardText } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormInput,\n    BCardText,\n    BFormGroup,\n  },\n  data() {\n    return {\n      text1: \'\',\n      text2: \'\',\n    }\n  },\n  methods: {\n    formatter(value) {\n      return value.toLowerCase()\n    },\n  },\n}\n<\/script>\n'}},methods:{formatter:function(t){return t.toLowerCase()}}},E=Object(d.a)(R,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Formatter support"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeFormatter)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("code",[t._v("<b-form-input>")]),t._v(" "),e("span",[t._v(" optionally supports formatting by passing a function reference to the ")]),t._v(" "),e("code",[t._v("formatter")]),t._v(" "),e("span",[t._v(" prop.")])]),t._v(" "),e("div",[e("b-form-group",{attrs:{label:"Text input with formatter (on input)","label-for":"input-formatter",description:"We will convert your name to lowercase instantly"}},[e("b-form-input",{attrs:{id:"input-formatter",placeholder:"Enter your name",formatter:t.formatter},model:{value:t.text1,callback:function(n){t.text1=n},expression:"text1"}})],1),t._v(" "),e("b-card-text",[e("strong",[t._v("Value:")]),t._v(" "+t._s(t.text1))]),t._v(" "),e("b-form-group",{attrs:{label:"Text input with lazy formatter (on blur)","label-for":"input-lazy",description:"This one is a little lazy!"}},[e("b-form-input",{attrs:{id:"input-lazy",placeholder:"Enter your name","lazy-formatter":"",formatter:t.formatter},model:{value:t.text2,callback:function(n){t.text2=n},expression:"text2"}})],1),t._v(" "),e("b-card-text",{staticClass:"mb-0"},[e("strong",[t._v("Value:")]),t._v(" "+t._s(t.text2)+"\n    ")])],1)],1)}),[],!1,null,null,null).exports,D={components:{BRow:a.a,BCol:o.a,FormInputBasic:p,FormInputSize:b,FormInputHorizontalLableSize:v,FormFloatingLabel:_,FormInputContextualStates:B,FormInputValidateTooltips:w,FormInputDatalist:z,FormInputDebounce:S,FormInputFormatter:E}},V=Object(d.a)(D,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-row",{staticClass:"match-height"},[e("b-col",{attrs:{cols:"12"}},[e("form-input-basic")],1),t._v(" "),e("b-col",{attrs:{md:"6"}},[e("form-input-size")],1),t._v(" "),e("b-col",{attrs:{md:"6"}},[e("form-input-horizontal-lable-size")],1),t._v(" "),e("b-col",{attrs:{cols:"12"}},[e("form-floating-label")],1),t._v(" "),e("b-col",{attrs:{cols:"12"}},[e("form-input-contextual-states")],1),t._v(" "),e("b-col",{attrs:{cols:"12"}},[e("form-input-validate-tooltips")],1),t._v(" "),e("b-col",{attrs:{md:"6"}},[e("form-input-datalist")],1),t._v(" "),e("b-col",{attrs:{md:"6"}},[e("form-input-debounce")],1),t._v(" "),e("b-col",{attrs:{cols:"12"}},[e("form-input-formatter")],1)],1)}),[],!1,null,null,null);n.default=V.exports},iPaL:function(t,n,e){"use strict";var a=e("m8qd");n.a=a.a},m8qd:function(t,n,e){"use strict";e("6cQw");var a=e("IF94"),o=e("SWgu"),l=e("ugaB"),r=e("YZfj"),i=e("WEOK"),s=(e("wZee"),e("hL/g"),e("jVEP")),d=e.n(s),p={components:{BCard:a.a,BCardTitle:o.a,BCardSubTitle:l.a,BCardBody:r.a,BCollapse:i.a,Prism:d.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var t=JSON.parse(JSON.stringify(this.$attrs));return delete t.title,delete t["sub-title"],t}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},u=(e("1yzx"),e("KHd+")),c=Object(u.a)(p,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card",t._g(t._b({attrs:{"no-body":""}},"b-card",t.cardAttrs,!1),t.$listeners),[e("div",{staticClass:"card-header"},[e("div",[e("b-card-title",[t._v(t._s(t.$attrs.title))]),t._v(" "),t.$attrs["sub-title"]?e("b-card-sub-title",[t._v("\n        "+t._s(t.$attrs["sub-title"])+"\n      ")]):t._e()],1),t._v(" "),e("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":t.code_visible?"false":"true","aria-controls":t.parentID},on:{click:function(n){t.code_visible=!t.code_visible}}})]),t._v(" "),void 0!==t.$attrs["no-body"]?[t._t("default"),t._v(" "),e("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(n){t.code_visible=n},expression:"code_visible"}},[e("b-card-body",[e("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],1)]:e("b-card-body",[t._t("default"),t._v(" "),e("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(n){t.code_visible=n},expression:"code_visible"}},[e("div",{staticClass:"p-1"}),t._v(" "),e("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);n.a=c.exports},yPU0:function(t,n,e){var a=e("Tk63");"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(a,o);a.locals&&(t.exports=a.locals)}}]);
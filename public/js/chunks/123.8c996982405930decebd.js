(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{"1yzx":function(e,a,t){"use strict";t("yPU0")},QN1W:function(e,a,t){"use strict";t.r(a);var n=t("oVt+"),r=t("sove"),o=t("iPaL"),l=t("1uQM"),d=t("wvFN"),c={components:{BCardCode:o.a,BCardText:l.a,BFormDatepicker:d.a},data:function(){return{value:"",codeBasic:'\n<template>\n  <div>\n    <label for="example-datepicker">Choose a date</label>\n    <b-form-datepicker\n      id="example-datepicker"\n      v-model="value"\n      class="mb-1"\n    />\n    <p>Value: \'{{ value }}\'</p>\n  </div>\n</template>\n\n<script>\nimport { BFormDatepicker } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormDatepicker,\n  },\n  data: () => ({\n    value: \'\',    codeBasic,    codeBasic,\n  }),\n}\n<\/script>\n'}}},i=t("KHd+"),s=Object(i.a)(c,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Basic Datepicker"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeBasic)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("code",[e._v("<b-form-datepicker>")]),e._v(" "),t("span",[e._v("\n      is a BootstrapVue custom date picker input form control, which provides full WAI-ARIA compliance and\n      internationalization support.\n    ")])]),e._v(" "),t("label",{attrs:{for:"example-datepicker"}},[e._v("Choose a date")]),e._v(" "),t("b-form-datepicker",{staticClass:"mb-1",attrs:{id:"example-datepicker"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),e._v(" "),t("span",[e._v("Value: '"+e._s(e.value)+"'")])],1)}),[],!1,null,null,null).exports,p=t("giZP"),v=t("nhTo"),b=t("KSQ5"),m={components:{BCardCode:o.a,BCardText:l.a,BFormDatepicker:d.a,BFormGroup:p.a,BFormRadio:v.a,BFormRadioGroup:b.a},data:function(){return{state:"disabled",codeState:'\n<template>\n   <div>\n    <b-form-group label="Select date picker interactive state">\n      <b-form-radio-group\n        v-model="state"\n        plain\n        class="vs-radio-con"\n        aria-controls="ex-disabled-readonly"\n      >\n        <b-form-radio value="disabled">\n          <span class="vs-radio">\n            <span class="vs-radio--border" />\n            <span class="vs-radio--circle" />\n          </span>\n          <span class="ml-2">Disabled</span>\n        </b-form-radio>\n        <b-form-radio value="readonly">\n          <span class="vs-radio">\n            <span class="vs-radio--border" />\n            <span class="vs-radio--circle" />\n          </span>\n          <span class="ml-2">Readonly</span>\n        </b-form-radio>\n        <b-form-radio value="normal">\n          <span class="vs-radio">\n            <span class="vs-radio--border" />\n            <span class="vs-radio--circle" />\n          </span>\n          <span class="ml-2">Normal</span>\n        </b-form-radio>\n      </b-form-radio-group>\n    </b-form-group>\n    <b-form-datepicker\n      id="ex-disabled-readonly"\n      :disabled="disabled"\n      :readonly="readonly"\n    />\n  </div>\n</template>\n\n<script>\nimport {\n  BFormDatepicker, BFormGroup, BFormRadio, BFormRadioGroup,\n} from \'bootstrap-vue\'\n\n\nexport default {\n  components: {\n    BFormDatepicker,\n    BFormGroup,\n    BFormRadio,\n    BFormRadioGroup,\n  },\n  data: () => ({\n    state: \'disabled\',\n  }),\n  computed: {\n    disabled() {\n      return this.state === \'disabled\'\n    },\n    readonly() {\n      return this.state === \'readonly\'\n    },\n  },\n}\n<\/script>\n'}},computed:{disabled:function(){return"disabled"===this.state},readonly:function(){return"readonly"===this.state}}},u=Object(i.a)(m,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Disabled and readonly states"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeState)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("code",[e._v("Setting the ")]),e._v(" "),t("code",[e._v("disabled")]),e._v(" "),t("span",[e._v(" prop will remove all interactivity of the ")]),e._v(" "),t("code",[e._v("<b-form-datepicker>")]),e._v(" "),t("span",[e._v(" component. Setting the ")]),e._v(" "),t("code",[e._v("readonly")]),e._v(" "),t("span",[e._v(" prop will disable selecting a date.")])]),e._v(" "),t("div",[t("b-form-group",{attrs:{label:"Select date picker interactive state"}},[t("b-form-radio-group",{attrs:{"aria-controls":"ex-disabled-readonly"},model:{value:e.state,callback:function(a){e.state=a},expression:"state"}},[t("b-form-radio",{attrs:{value:"disabled"}},[e._v("\n          Disabled\n        ")]),e._v(" "),t("b-form-radio",{attrs:{value:"readonly"}},[e._v("\n          Readonly\n        ")]),e._v(" "),t("b-form-radio",{attrs:{value:"normal"}},[e._v("\n          Normal\n        ")])],1)],1),e._v(" "),t("b-form-datepicker",{attrs:{id:"ex-disabled-readonly",disabled:e.disabled,readonly:e.readonly}})],1)],1)}),[],!1,null,null,null).exports,f={components:{BCardCode:o.a,BCardText:l.a,BFormDatepicker:d.a},data:function(){var e=new Date,a=new Date(e.getFullYear(),e.getMonth(),e.getDate()),t=new Date(a);t.setMonth(t.getMonth()-2),t.setDate(15);var n=new Date(a);return n.setMonth(n.getMonth()+2),n.setDate(15),{value:"",min:t,max:n,codeMinMax:'\n<template>\n  <div>\n    <b-form-datepicker\n      v-model="value"\n      :min="min"\n      :max="max"\n      locale="en"\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormDatepicker } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormDatepicker,\n  },\n  data() {\n    const now = new Date()\n    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())\n    // 15th two months prior\n    const minDate = new Date(today)\n    minDate.setMonth(minDate.getMonth() - 2)\n    minDate.setDate(15)\n    // 15th in two months\n    const maxDate = new Date(today)\n    maxDate.setMonth(maxDate.getMonth() + 2)\n    maxDate.setDate(15)\n\n    return {\n      value: \'\',\n      min: minDate,\n      max: maxDate,\n    }\n  },\n}\n<\/script>\n'}}},_=Object(i.a)(f,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Minimum and maximum dates"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeMinMax)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("Restrict the calendar range via the ")]),e._v(" "),t("code",[e._v("min")]),e._v(" "),t("span",[e._v(" and ")]),e._v(" "),t("code",[e._v("max")]),e._v(" "),t("span",[e._v(" props. The props accept a date string in the format of ")]),e._v(" "),t("code",[e._v("YYYY-MM-DD")]),e._v(" "),t("span",[e._v(" or a ")]),e._v(" "),t("code",[e._v("Date")]),e._v(" "),t("span",[e._v(" object.")])]),e._v(" "),t("b-form-datepicker",{attrs:{min:e.min,max:e.max,locale:"en"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1)}),[],!1,null,null,null).exports,h={components:{BCardCode:o.a,BCardText:l.a,BFormDatepicker:d.a},data:function(){return{value:"",codeDisableDate:'\n<template>\n  <div>\n    <b-form-datepicker\n      v-model="value"\n      :date-disabled-fn="dateDisabled"\n      locale="en"\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormDatepicker } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCardCode,\n    BFormDatepicker,\n  },\n  data: () => ({\n    value: \'\',\n  }),\n  methods: {\n    dateDisabled(ymd, date) {\n      // Disable weekends (Sunday = `0`, Saturday = `6`) and\n      // disable days that fall on the 13th of the month\n      const weekday = date.getDay()\n      const day = date.getDate()\n      // Return `true` if the date should be disabled\n      return weekday === 0 || weekday === 6 || day === 13\n    },\n  },\n}\n<\/script>\n'}},methods:{dateDisabled:function(e,a){var t=a.getDay(),n=a.getDate();return 0===t||6===t||13===n}}},k=Object(i.a)(h,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Disable dates"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeDisableDate)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("If you need to disable specific dates within the date picker, specify a function reference to the ")]),e._v(" "),t("code",[e._v("date-disabled-fn")]),e._v(" "),t("span",[e._v(" prop.")])]),e._v(" "),t("b-form-datepicker",{attrs:{"date-disabled-fn":e.dateDisabled,locale:"en"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1)}),[],!1,null,null,null).exports,x={components:{BCardCode:o.a,BCardText:l.a,BFormDatepicker:d.a},data:function(){return{codeValidation:'\n<template>\n  <div>\n    <label for="datepicker-invalid">Choose a date (invalid style)</label>\n    <b-form-datepicker\n      id="datepicker-invalid"\n      :state="false"\n      class="mb-2"\n    />\n    <label for="datepicker-valid">Choose a date (valid style)</label>\n    <b-form-datepicker\n      id="datepicker-valid"\n      :state="true"\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormDatepicker } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormDatepicker,\n  },\n}\n<\/script>\n'}}},y=Object(i.a)(x,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Validation states"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeValidation)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("code",[e._v("<b-form-datepicker>")]),e._v(" "),t("span",[e._v(" supports invalid and valid styling via the boolean ")]),e._v(" "),t("code",[e._v("state")]),e._v(" "),t("span",[e._v(" prop.")])]),e._v(" "),t("div",[t("label",{attrs:{for:"datepicker-invalid"}},[e._v("Choose a date (invalid style)")]),e._v(" "),t("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"datepicker-invalid",state:!1}}),e._v(" "),t("label",{attrs:{for:"datepicker-valid"}},[e._v("Choose a date (valid style)")]),e._v(" "),t("b-form-datepicker",{attrs:{id:"datepicker-valid",state:!0}})],1)],1)}),[],!1,null,null,null).exports,g={components:{BCardCode:o.a,BCardText:l.a,BFormDatepicker:d.a,BRow:n.a,BCol:r.a},data:function(){return{codeVariant:'\n<template>\n  <b-row>\n    <b-col md="4">\n      <b-form-datepicker\n        local="en"\n        placeholder="Primary Variant"\n        class="mb-1"\n        selected-variant="primary"\n      />\n    </b-col>\n    <b-col md="4">\n      <b-form-datepicker\n        local="en"\n        placeholder="Secondary Variant"\n        class="mb-1"\n        selected-variant="secondary"\n      />\n    </b-col>\n    <b-col md="4">\n      <b-form-datepicker\n        local="en"\n        placeholder="Success Variant"\n        class="mb-1"\n        selected-variant="success"\n      />\n    </b-col>\n    <b-col md="4">\n      <b-form-datepicker\n        local="en"\n        placeholder="Warning Variant"\n        class="mb-1"\n        selected-variant="warning"\n      />\n    </b-col>\n    <b-col md="4">\n      <b-form-datepicker\n        local="en"\n        placeholder="Danger Variant"\n        class="mb-1"\n        selected-variant="danger"\n      />\n    </b-col>\n    <b-col md="4">\n      <b-form-datepicker\n        local="en"\n        placeholder="Info Variant"\n        class="mb-1"\n        selected-variant="info"\n      />\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport { BFormDatepicker, BRow, BCol } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormDatepicker,\n    BRow,\n    BCol,\n  },\n}\n<\/script>\n'}}},D=Object(i.a)(g,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Variants"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeVariant)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("The selected date button (background color) defaults to the ")]),e._v(" "),t("code",[e._v("'primary'")]),e._v(" "),t("span",[e._v(" theme variant. You can change this to any of the Bootstrap v4 theme variant colors: ")]),e._v(" "),t("code",[e._v("'secondary', 'success', 'danger', 'warning', 'info',")]),e._v(" "),t("span",[e._v(" etc, via the ")]),e._v(" "),t("code",[e._v("selected-variant")]),e._v(" "),t("span",[e._v(" prop.")])]),e._v(" "),t("b-row",[t("b-col",{attrs:{md:"6",lg:"4"}},[t("b-form-datepicker",{staticClass:"mb-1",attrs:{local:"en",placeholder:"Primary Variant","selected-variant":"primary"}})],1),e._v(" "),t("b-col",{attrs:{md:"6",lg:"4"}},[t("b-form-datepicker",{staticClass:"mb-1",attrs:{local:"en",placeholder:"Secondary Variant","selected-variant":"secondary"}})],1),e._v(" "),t("b-col",{attrs:{md:"6",lg:"4"}},[t("b-form-datepicker",{staticClass:"mb-1",attrs:{local:"en",placeholder:"Success Variant","selected-variant":"success"}})],1),e._v(" "),t("b-col",{attrs:{md:"6",lg:"4"}},[t("b-form-datepicker",{staticClass:"mb-1",attrs:{local:"en",placeholder:"Warning Variant","selected-variant":"warning"}})],1),e._v(" "),t("b-col",{attrs:{md:"6",lg:"4"}},[t("b-form-datepicker",{staticClass:"mb-1",attrs:{local:"en",placeholder:"Danger Variant","selected-variant":"danger"}})],1),e._v(" "),t("b-col",{attrs:{md:"6",lg:"4"}},[t("b-form-datepicker",{staticClass:"mb-1",attrs:{local:"en",placeholder:"Info Variant","selected-variant":"info"}})],1)],1)],1)}),[],!1,null,null,null).exports,w={components:{BCardCode:o.a,BCardText:l.a,BFormDatepicker:d.a},data:function(){return{codeSize:'\n<template>\n  <div>\n    <label for="datepicker-sm">Small date picker</label>\n    <b-form-datepicker\n      id="datepicker-sm"\n      size="sm"\n      local="en"\n      class="mb-2"\n      today-variant="danger"\n    />\n    <label for="datepicker-default">Default date picker</label>\n    <b-form-datepicker\n      id="datepicker-default"\n      local="en"\n      class="mb-2"\n      today-variant="danger"\n    />\n    <label for="datepicker-lg">Large date picker</label>\n    <b-form-datepicker\n      id="datepicker-lg"\n      size="lg"\n      local="en"\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormDatepicker } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormDatepicker,\n  },\n}\n<\/script>\n'}}},B=Object(i.a)(w,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Control sizing"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeSize)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("Fancy a smaller or larger ")]),e._v(" "),t("code",[e._v("<b-form-datepicker>")]),e._v(" "),t("span",[e._v("control? Set the ")]),e._v(" "),t("code",[e._v("size")]),e._v(" "),t("span",[e._v(" prop to ")]),e._v(" "),t("code",[e._v("'sm'")]),e._v(" "),t("span",[e._v(" for a smaller form control, or ")]),e._v(" "),t("code",[e._v("'lg'")]),e._v(" "),t("span",[e._v(" for a larger form form control. Note this does not affect the size of the popup calendar dialog.")])]),e._v(" "),t("div",[t("label",{attrs:{for:"datepicker-sm"}},[e._v("Small date picker")]),e._v(" "),t("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"datepicker-sm",size:"sm",local:"en","today-variant":"danger"}}),e._v(" "),t("label",{attrs:{for:"datepicker-default"}},[e._v("Default date picker")]),e._v(" "),t("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"datepicker-default",local:"en","today-variant":"danger"}}),e._v(" "),t("label",{attrs:{for:"datepicker-lg"}},[e._v("Large date picker")]),e._v(" "),t("b-form-datepicker",{attrs:{id:"datepicker-lg",size:"lg",local:"en"}})],1)],1)}),[],!1,null,null,null).exports,C={components:{BCardCode:o.a,BCardText:l.a,BFormDatepicker:d.a},data:function(){return{codePlaceholder:'\n<template>\n  <div>\n    <label for="datepicker-placeholder">Date picker with placeholder</label>\n    <b-form-datepicker\n      id="datepicker-placeholder"\n      placeholder="Choose a date"\n      local="en"\n      initial-date="2020-06-16"\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormDatepicker } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormDatepicker,\n  },\n}\n<\/script>\n'}}},F=Object(i.a)(C,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Placeholder & Initial Open Date"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codePlaceholder)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("Add custom placeholder text to the control, when no date is selected, via the ")]),e._v(" "),t("code",[e._v("placeholder")]),e._v(" "),t("span",[e._v(" prop. ")]),e._v(" "),t("span",[e._v("You can change this behaviour by specifying a date via the ")]),e._v(" "),t("code",[e._v("initial-date")]),e._v(" "),t("span",[e._v(" prop.")])]),e._v(" "),t("label",{attrs:{for:"datepicker-placeholder"}},[e._v("Date picker with placeholder")]),e._v(" "),t("b-form-datepicker",{attrs:{id:"datepicker-placeholder",placeholder:"Choose a date",local:"en","initial-date":"2020-06-16"}})],1)}),[],!1,null,null,null).exports,S={components:{BCardCode:o.a,BCardText:l.a,BFormDatepicker:d.a},data:function(){return{codeOptional:'\n<template>\n  <div>\n    <label for="datepicker-buttons">Date picker with optional footer buttons</label>\n    <b-form-datepicker\n      id="datepicker-buttons"\n      today-button\n      reset-button\n      close-button\n      locale="en"\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormDatepicker } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormDatepicker,\n  },\n}\n<\/script>\n'}}},M=Object(i.a)(S,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Optional controls"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeOptional)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("Add optional control buttons to the bottom of the calendar popup via the props ")]),e._v(" "),t("code",[e._v("today-button")]),e._v(" "),t("span",[e._v(",")]),e._v(" "),t("code",[e._v("reset-button")]),e._v(" "),t("span",[e._v(" and ")]),e._v(" "),t("code",[e._v("close-button")]),e._v(" "),t("span",[e._v(".")])]),e._v(" "),t("label",{attrs:{for:"datepicker-buttons"}},[e._v("Date picker with optional footer buttons")]),e._v(" "),t("b-form-datepicker",{attrs:{id:"datepicker-buttons","today-button":"","reset-button":"","close-button":"",locale:"en","menu-class":"w-100","calendar-width":"100%"}})],1)}),[],!1,null,null,null).exports,N=t("XhI9"),P=t("zMAm"),T=t("R5cT"),V={components:{BCardCode:o.a,BCardText:l.a,BFormDatepicker:d.a,BInputGroup:N.a,BInputGroupAppend:P.a,BFormInput:T.a},data:function(){return{value:"",formatted:"",selected:"",codeButtonOnly:'\n<template>\n  <div>\n    <label for="example-input">Choose a date</label>\n    <b-input-group class="mb-1">\n      <b-form-input\n        id="example-input"\n        v-model="value"\n        type="text"\n        placeholder="YYYY-MM-DD"\n        autocomplete="off"\n        show-decade-nav\n      />\n      <b-input-group-append>\n        <b-form-datepicker\n          v-model="value"\n          show-decade-nav\n          button-only\n          right\n          locale="en-US"\n          aria-controls="example-input"\n          @context="onContext"\n        />\n      </b-input-group-append>\n    </b-input-group>\n    <p class="mb-1">\n      Value: \'{{ value }}\'\n    </p>\n    <p class="mb-1">\n      Selected: \'{{ selected }}\'\n    </p>\n    <p>Formatted: \'{{ formatted }}\'</p>\n  </div>\n</template>\n\n<script>\nimport {BFormDatepicker, BInputGroup, BInputGroupAppend, BFormInput} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCardCode,\n    BFormDatepicker,\n    BInputGroup,\n    BInputGroupAppend,\n    BFormInput,\n  },\n  data: () => ({\n    value: \'\',\n    formatted: \'\',\n    selected: \'\',\n  }),\n  methods: {\n    onContext(ctx) {\n      // The date formatted in the locale, or the `label-no - date - selected` string\n      this.formatted = ctx.selectedFormatted\n      // The following will be an empty string until a valid date is entered\n      this.selected = ctx.selectedYMD\n    },\n  },\n}\n<\/script>\n'}},methods:{onContext:function(e){this.formatted=e.selectedFormatted,this.selected=e.selectedYMD}}},Y=Object(i.a)(V,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Button only mode"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeButtonOnly)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("code",[e._v("button-only")]),e._v(" "),t("span",[e._v("\n      prop to render the datepicker as a dropdown button. The formatted date label will be rendered with the class\n    ")]),e._v(" "),t("code",[e._v("sr-only")]),e._v(" "),t("span",[e._v(" (available only to screen readers).")])]),e._v(" "),t("label",{attrs:{for:"example-input"}},[e._v("Choose a date")]),e._v(" "),t("b-input-group",{staticClass:"mb-1"},[t("b-form-input",{attrs:{id:"example-input",type:"text",placeholder:"YYYY-MM-DD",autocomplete:"off","show-decade-nav":""},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),e._v(" "),t("b-input-group-append",[t("b-form-datepicker",{attrs:{"show-decade-nav":"","button-only":"","button-variant":"outline-primary",right:"",size:"sm",locale:"en-US","aria-controls":"example-input"},on:{context:e.onContext},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1)],1),e._v(" "),t("b-card-text",{staticClass:"mb-1"},[e._v("\n    Value: '"+e._s(e.value)+"'\n  ")]),e._v(" "),t("b-card-text",{staticClass:"mb-1"},[e._v("\n    Selected: '"+e._s(e.selected)+"'\n  ")]),e._v(" "),t("span",[e._v("Formatted: '"+e._s(e.formatted)+"'")])],1)}),[],!1,null,null,null).exports,z={components:{BCardCode:o.a,BCardText:l.a,BFormDatepicker:d.a},data:function(){return{codeString:'\n<template>\n  <div>\n    <label for="datepicker-dateformat1">Custom date format</label>\n    <b-form-datepicker\n      id="datepicker-dateformat1"\n      :date-format-options="{ year: \'numeric\', month: \'short\', day: \'2-digit\', weekday: \'short\' }"\n      locale="en"\n    />\n\n    <label\n      class="mt-2"\n      for="datepicker-dateformat2"\n    >Short date format</label>\n    <b-form-datepicker\n      id="datepicker-dateformat2"\n      :date-format-options="{ year: \'numeric\', month: \'numeric\', day: \'numeric\' }"\n      locale="en"\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormDatepicker } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormDatepicker,\n  },\n}\n<\/script>\n'}}},E=Object(i.a)(z,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Date string format"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeString)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("To change format options of the displayed date text inside the component, e.g. in the header or placeholder,\n      set the\n    ")]),e._v(" "),t("code",[e._v("date-format-options")]),e._v(" "),t("span",[e._v(" prop to an object containing the requested format properties for the")]),e._v(" "),t("code",[e._v("Intl.DateTimeFormat")]),e._v(" "),t("span",[e._v(" object.")])]),e._v(" "),t("div",[t("label",{attrs:{for:"datepicker-dateformat1"}},[e._v("Custom date format")]),e._v(" "),t("b-form-datepicker",{attrs:{id:"datepicker-dateformat1","date-format-options":{year:"numeric",month:"short",day:"2-digit",weekday:"short"},locale:"en"}}),e._v(" "),t("label",{staticClass:"mt-2",attrs:{for:"datepicker-dateformat2"}},[e._v("Short date format")]),e._v(" "),t("b-form-datepicker",{attrs:{id:"datepicker-dateformat2","date-format-options":{year:"numeric",month:"numeric",day:"numeric"},locale:"en"}})],1)],1)}),[],!1,null,null,null).exports,I={components:{BCardCode:o.a,BCardText:l.a,BFormDatepicker:d.a},data:function(){return{value:"",codeFullWith:'\n<template>\n  <div>\n    <label for="datepicker-full-width">Choose a date</label>\n      <b-form-datepicker\n        id="datepicker-full-width"\n        v-model="value"\n        menu-class="w-100"\n        calendar-width="100%"\n        class="mb-2"\n      />\n  </div>\n</template>\n\n<script>\nimport { BFormDatepicker } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormDatepicker,\n  },\n  data: () => ({\n    value: \'\',\n  }),\n}\n<\/script>\n'}}},O=Object(i.a)(I,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Full width calendar dropdown"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeFullWith)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("To create a full width calendar dropdown simply set the ")]),e._v(" "),t("code",[e._v("menu-class")]),e._v(" "),t("span",[e._v(" prop to ")]),e._v(" "),t("code",[e._v("'w-100'")]),e._v(" "),t("span",[e._v(" and set the calendar-width prop to '100%':")])]),e._v(" "),t("label",{attrs:{for:"datepicker-full-width"}},[e._v("Choose a date")]),e._v(" "),t("b-form-datepicker",{attrs:{id:"datepicker-full-width","menu-class":"w-100","calendar-width":"100%"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1)}),[],!1,null,null,null).exports,G=t("g2Gq"),$=t("w+YJ"),j={components:{BCardCode:o.a,BFormDatepicker:d.a,BFormSelect:G.a,BCardText:l.a,BFormCheckbox:$.a},data:function(){return{value:"",locale:"en-US",showDecadeNav:!1,hideHeader:!1,codeInternationalization:"\n<template>\n  <div>\n    <label for=\"example-locales\">Locale:</label>\n    <b-form-select\n      id=\"example-locales\"\n      v-model=\"locale\"\n      :options=\"locales\"\n      class=\"mb-1\"\n    />\n\n    <label for=\"example-weekdays\">Start weekday:</label>\n    <b-form-select\n      id=\"example-weekdays\"\n      v-model=\"weekday\"\n      :options=\"weekdays\"\n      class=\"mb-1\"\n    />\n\n    <div class=\"d-flex align-items-center\">\n      <b-form-checkbox\n        v-model=\"showDecadeNav\"\n        switch\n        inline\n        class=\"my-1\"\n      />\n      <label class=\"mr-1\">Show decade navigation buttons</label>\n      <b-form-checkbox\n        v-model=\"hideHeader\"\n        switch\n        inline\n        class=\"my-1\"\n      />\n      <label>Hide calendar header</label>\n    </div>\n\n    <label for=\"example-i18n-picker\">Date picker:</label>\n    <b-form-datepicker\n      id=\"example-i18n-picker\"\n      v-model=\"value\"\n      v-bind=\"labels[locale] || {}\"\n      :locale=\"locale\"\n      :start-weekday=\"weekday\"\n      :show-decade-nav=\"showDecadeNav\"\n      :hide-header=\"hideHeader\"\n      class=\"mb-1\"\n    />\n    <p>\n      Value: <b>'{{ value }}'</b>\n    </p>\n  </div>\n</template>\n\n<script>\nimport { BFormDatepicker, BFormSelect, BFormCheckbox } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormDatepicker,\n    BFormSelect,\n    BFormCheckbox,\n  },\n  data: () => ({\n    value: '',\n    locale: 'en-US',\n    showDecadeNav: false,\n    hideHeader: false,\n    locales: [\n      { value: 'en-US', text: 'English US (en-US)' },\n      { value: 'de', text: 'German (de)' },\n      { value: 'ar-EG', text: 'Arabic Egyptian (ar-EG)' },\n      { value: 'zh', text: 'Chinese (zh)' },\n    ],\n    weekday: 0,\n    weekdays: [\n      { value: 0, text: 'Sunday' },\n      { value: 1, text: 'Monday' },\n      { value: 6, text: 'Saturday' },\n    ],\n    labels: {\n      de: {\n        labelPrevDecade: 'Vorheriges Jahrzehnt',\n        labelPrevYear: 'Vorheriges Jahr',\n        labelPrevMonth: 'Vorheriger Monat',\n        labelCurrentMonth: 'Aktueller Monat',\n        labelNextMonth: 'Nächster Monat',\n        labelNextYear: 'Nächstes Jahr',\n        labelNextDecade: 'Nächstes Jahrzehnt',\n        labelToday: 'Heute',\n        labelSelected: 'Ausgewähltes Datum',\n        labelNoDateSelected: 'Kein Datum gewählt',\n        labelCalendar: 'Kalender',\n        labelNav: 'Kalendernavigation',\n        labelHelp: 'Mit den Pfeiltasten durch den Kalender navigieren',\n      },\n      'ar-EG': {\n        labelPrevDecade: 'العقد السابق',\n        labelPrevYear: 'العام السابق',\n        labelPrevMonth: 'الشهر السابق',\n        labelCurrentMonth: 'الشهر الحالي',\n        labelNextMonth: 'الشهر المقبل',\n        labelNextYear: 'العام المقبل',\n        labelNextDecade: 'العقد القادم',\n        labelToday: 'اليوم',\n        labelSelected: 'التاريخ المحدد',\n        labelNoDateSelected: 'لم يتم اختيار تاريخ',\n        labelCalendar: 'التقويم',\n        labelNav: 'الملاحة التقويم',\n        labelHelp: 'استخدم مفاتيح المؤشر للتنقل في التواريخ',\n      },\n      zh: {\n        labelPrevDecade: '过去十年',\n        labelPrevYear: '上一年',\n        labelPrevMonth: '上个月',\n        labelCurrentMonth: '当前月份',\n        labelNextMonth: '下个月',\n        labelNextYear: '明年',\n        labelNextDecade: '下一个十年',\n        labelToday: '今天',\n        labelSelected: '选定日期',\n        labelNoDateSelected: '未选择日期',\n        labelCalendar: '日历',\n        labelNav: '日历导航',\n        labelHelp: '使用光标键浏览日期',\n      },\n    },\n  }),\n}\n<\/script>\n",locales:[{value:"en-US",text:"English US (en-US)"},{value:"de",text:"German (de)"},{value:"ar-EG",text:"Arabic Egyptian (ar-EG)"},{value:"zh",text:"Chinese (zh)"}],weekday:0,weekdays:[{value:0,text:"Sunday"},{value:1,text:"Monday"},{value:6,text:"Saturday"}],labels:{de:{labelPrevDecade:"Vorheriges Jahrzehnt",labelPrevYear:"Vorheriges Jahr",labelPrevMonth:"Vorheriger Monat",labelCurrentMonth:"Aktueller Monat",labelNextMonth:"Nächster Monat",labelNextYear:"Nächstes Jahr",labelNextDecade:"Nächstes Jahrzehnt",labelToday:"Heute",labelSelected:"Ausgewähltes Datum",labelNoDateSelected:"Kein Datum gewählt",labelCalendar:"Kalender",labelNav:"Kalendernavigation",labelHelp:"Mit den Pfeiltasten durch den Kalender navigieren"},"ar-EG":{labelPrevDecade:"العقد السابق",labelPrevYear:"العام السابق",labelPrevMonth:"الشهر السابق",labelCurrentMonth:"الشهر الحالي",labelNextMonth:"الشهر المقبل",labelNextYear:"العام المقبل",labelNextDecade:"العقد القادم",labelToday:"اليوم",labelSelected:"التاريخ المحدد",labelNoDateSelected:"لم يتم اختيار تاريخ",labelCalendar:"التقويم",labelNav:"الملاحة التقويم",labelHelp:"استخدم مفاتيح المؤشر للتنقل في التواريخ"},zh:{labelPrevDecade:"过去十年",labelPrevYear:"上一年",labelPrevMonth:"上个月",labelCurrentMonth:"当前月份",labelNextMonth:"下个月",labelNextYear:"明年",labelNextDecade:"下一个十年",labelToday:"今天",labelSelected:"选定日期",labelNoDateSelected:"未选择日期",labelCalendar:"日历",labelNav:"日历导航",labelHelp:"使用光标键浏览日期"}}}}},H=Object(i.a)(j,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Internationalization"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeInternationalization)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("By default ")]),e._v(" "),t("code",[e._v("<b-form-datepicker>")]),e._v(" "),t("span",[e._v(" will use the browser's default locale, but you can specify the locale (or locales) to use via the ")]),e._v(" "),t("code",[e._v("locale")]),e._v(" "),t("span",[e._v("prop.")])]),e._v(" "),t("div",[t("label",{attrs:{for:"example-locales"}},[e._v("Locale:")]),e._v(" "),t("b-form-select",{staticClass:"mb-1",attrs:{id:"example-locales",options:e.locales},model:{value:e.locale,callback:function(a){e.locale=a},expression:"locale"}}),e._v(" "),t("label",{attrs:{for:"example-weekdays"}},[e._v("Start weekday:")]),e._v(" "),t("b-form-select",{staticClass:"mb-1",attrs:{id:"example-weekdays",options:e.weekdays},model:{value:e.weekday,callback:function(a){e.weekday=a},expression:"weekday"}}),e._v(" "),t("div",[t("b-form-checkbox",{staticClass:"my-1",attrs:{switch:"",inline:""},model:{value:e.showDecadeNav,callback:function(a){e.showDecadeNav=a},expression:"showDecadeNav"}},[e._v("\n        Show decade navigation buttons\n      ")]),e._v(" "),t("b-form-checkbox",{staticClass:"my-1",attrs:{switch:"",inline:""},model:{value:e.hideHeader,callback:function(a){e.hideHeader=a},expression:"hideHeader"}},[e._v("\n        Hide calendar header\n      ")])],1),e._v(" "),t("label",{attrs:{for:"example-i18n-picker"}},[e._v("Date picker:")]),e._v(" "),t("b-form-datepicker",e._b({staticClass:"mb-1",attrs:{id:"example-i18n-picker",locale:e.locale,"start-weekday":e.weekday,"show-decade-nav":e.showDecadeNav,"hide-header":e.hideHeader},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}},"b-form-datepicker",e.labels[e.locale]||{},!1))],1)],1)}),[],!1,null,null,null).exports,A={components:{BRow:n.a,BCol:r.a,FormDatepickerBasic:s,FormDatepickerState:u,FormDatepickerMinMax:_,FormDatepickerDisableDate:k,FormDatepickerValidation:y,FormDatepickerVariant:D,FormDatepickerSize:B,FormDatepickerPlaceholder:F,FormDatepickerOptional:M,FormDatepickerButtonOnly:Y,FormDatepickerString:E,FormDatepickerFullWidth:O,FormDatepickerInternationalization:H}},R=Object(i.a)(A,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-row",{staticClass:"match-height"},[t("b-col",{attrs:{lg:"6"}},[t("form-datepicker-basic")],1),e._v(" "),t("b-col",{attrs:{lg:"6"}},[t("form-datepicker-placeholder")],1),e._v(" "),t("b-col",{attrs:{lg:"6"}},[t("form-datepicker-min-max")],1),e._v(" "),t("b-col",{attrs:{lg:"6"}},[t("form-datepicker-disable-date")],1),e._v(" "),t("b-col",{attrs:{lg:"6"}},[t("form-datepicker-validation")],1),e._v(" "),t("b-col",{attrs:{lg:"6"}},[t("form-datepicker-state")],1),e._v(" "),t("b-col",{attrs:{lg:"12"}},[t("form-datepicker-variant")],1),e._v(" "),t("b-col",{attrs:{lg:"6"}},[t("form-datepicker-button-only")],1),e._v(" "),t("b-col",{attrs:{lg:"6"}},[t("form-datepicker-string")],1),e._v(" "),t("b-col",{attrs:{lg:"6"}},[t("form-datepicker-full-width")],1),e._v(" "),t("b-col",{attrs:{lg:"6"}},[t("form-datepicker-optional")],1),e._v(" "),t("b-col",{attrs:{lg:"6"}},[t("form-datepicker-size")],1),e._v(" "),t("b-col",{attrs:{lg:"6"}},[t("form-datepicker-internationalization")],1)],1)}),[],!1,null,null,null);a.default=R.exports},Tk63:function(e,a,t){(a=t("JPst")(!1)).push([e.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),e.exports=a},iPaL:function(e,a,t){"use strict";var n=t("m8qd");a.a=n.a},m8qd:function(e,a,t){"use strict";t("6cQw");var n=t("IF94"),r=t("SWgu"),o=t("ugaB"),l=t("YZfj"),d=t("WEOK"),c=(t("wZee"),t("hL/g"),t("jVEP")),i=t.n(c),s={components:{BCard:n.a,BCardTitle:r.a,BCardSubTitle:o.a,BCardBody:l.a,BCollapse:d.a,Prism:i.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},p=(t("1yzx"),t("KHd+")),v=Object(p.a)(s,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[t("div",{staticClass:"card-header"},[t("div",[t("b-card-title",[e._v(e._s(e.$attrs.title))]),e._v(" "),e.$attrs["sub-title"]?t("b-card-sub-title",[e._v("\n        "+e._s(e.$attrs["sub-title"])+"\n      ")]):e._e()],1),e._v(" "),t("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(a){e.code_visible=!e.code_visible}}})]),e._v(" "),void 0!==e.$attrs["no-body"]?[e._t("default"),e._v(" "),t("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(a){e.code_visible=a},expression:"code_visible"}},[t("b-card-body",[t("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:t("b-card-body",[e._t("default"),e._v(" "),t("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(a){e.code_visible=a},expression:"code_visible"}},[t("div",{staticClass:"p-1"}),e._v(" "),t("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);a.a=v.exports},yPU0:function(e,a,t){var n=t("Tk63");"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(n,r);n.locals&&(e.exports=n.locals)}}]);
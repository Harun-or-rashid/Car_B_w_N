(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"1yzx":function(e,t,n){"use strict";n("yPU0")},EKpq:function(e,t,n){(t=n("JPst")(!1)).push([e.i,".autosuggest__results-container {\n  position: relative;\n  z-index: 999;\n}\n.autosuggest__results-container .autosuggest__results {\n  position: absolute;\n  width: 100%;\n  overflow-y: auto;\n  max-height: 40vh;\n}\n[dir] .autosuggest__results-container .autosuggest__results {\n  background-color: #fff;\n  margin-top: 1rem;\n  border-radius: 0.5rem;\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08) !important;\n}\n[dir] .autosuggest__results-container .autosuggest__results ul {\n  margin-bottom: 0;\n}\n[dir=ltr] .autosuggest__results-container .autosuggest__results ul {\n  padding-left: 0;\n}\n[dir=rtl] .autosuggest__results-container .autosuggest__results ul {\n  padding-right: 0;\n}\n.autosuggest__results-container .autosuggest__results ul li {\n  list-style: none;\n}\n[dir] .autosuggest__results-container .autosuggest__results ul li {\n  padding: 0.75rem 1rem;\n}\n[dir] .autosuggest__results-container .autosuggest__results ul li:hover, [dir] .autosuggest__results-container .autosuggest__results ul li.autosuggest__results-item--highlighted {\n  background: #ededed;\n}\n.autosuggest__results-container .autosuggest__results ul li .detail {\n  line-height: 0.5;\n}\n.autosuggest__results-container .autosuggest__results ul .autosuggest__results-before {\n  color: #7367f0;\n  font-weight: 600;\n}\nbody.dark-layout .autosuggest__results-container .autosuggest__results {\n  color: #b4b7bd;\n}\n[dir] body.dark-layout .autosuggest__results-container .autosuggest__results {\n  background-color: #283046;\n}\n[dir] body.dark-layout .autosuggest__results-container .autosuggest__results .autosuggest__results-item--highlighted, [dir] body.dark-layout .autosuggest__results-container .autosuggest__results .autosuggest__results-item:hover, [dir] body.dark-layout .autosuggest__results-container .autosuggest__results .autosuggest__results-before:hover {\n  background-color: #242b3d;\n}\nbody.dark-layout .autosuggest__results-container .autosuggest__results .my-suggestion-item {\n  color: #b4b7bd;\n}",""]),e.exports=t},EkQ1:function(e,t,n){"use strict";n("esY+")},FNHR:function(e,t,n){(t=n("JPst")(!1)).push([e.i,"pre[data-v-b0363cf6] {\n  min-height: 295px;\n}[dir] pre[data-v-b0363cf6] {\n  padding: 1.5rem;\n  margin-bottom: 0;\n  border-radius: 0.5rem;\n}",""]),e.exports=t},Tk63:function(e,t,n){(t=n("JPst")(!1)).push([e.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),e.exports=t},ZDJY:function(e,t,n){"use strict";n.r(t);var s=n("oVt+"),i=n("sove"),o=(n("+2oP"),n("TeQF"),n("07d7"),n("sMBO"),n("ma9I"),{name:"default-section",props:{section:{type:Object,required:!0},currentIndex:{type:[Number,String],required:!1,default:1/0},renderSuggestion:{type:Function,required:!1},normalizeItemFunction:{type:Function,required:!0},componentAttrPrefix:{type:String,required:!0},componentAttrIdAutosuggest:{type:String,required:!0}},data:function(){return{_currentIndex:this.currentIndex}},computed:{list:function(){var e=this.section,t=e.limit,n=e.data;return n.length<t&&(t=n.length),n.slice(0,t)}},methods:{getItemIndex:function(e){return this.section.start_index+e},getItemByIndex:function(e){return this.section.data[e]},onMouseEnter:function(e){var t=parseInt(e.currentTarget.getAttribute("data-suggestion-index"));this._currentIndex=t,this.$emit("updateCurrentIndex",t)},onMouseLeave:function(){this.$emit("updateCurrentIndex",null)}},render:function(e){var t=this,n=this.componentAttrPrefix,s={beforeSection:this.$scopedSlots["before-section-"+this.section.name],afterSectionDefault:this.$scopedSlots["after-section"],afterSectionNamed:this.$scopedSlots["after-section-"+this.section.name]},i=n+"__results-before "+n+"__results-before--"+this.section.name,o=s.beforeSection&&s.beforeSection({section:this.section,className:i})||[];return e("ul",{attrs:{role:"listbox","aria-labelledby":this.section.label&&this.componentAttrIdAutosuggest+"-"+this.section.label},class:this.section.ulClass},[o[0]&&o[0]||this.section.label&&e("li",{class:i,id:this.componentAttrIdAutosuggest+"-"+this.section.label},this.section.label)||"",this.list.map((function(s,i){var o,r=t.normalizeItemFunction(t.section.name,t.section.type,t.section.label,t.section.liClass,s),a=t.getItemIndex(i),u=t._currentIndex===a||parseInt(t.currentIndex)===a;return e("li",{attrs:Object.assign({},{role:"option","data-suggestion-index":a,"data-section-name":r.name,id:n+"__results-item--"+a},r.liAttributes),key:a,class:Object.assign((o={},o[n+"__results-item--highlighted"]=u,o[n+"__results-item"]=!0,o),r.liClass),on:{mouseenter:t.onMouseEnter,mouseleave:t.onMouseLeave}},[t.renderSuggestion?t.renderSuggestion(r):t.$scopedSlots.default&&t.$scopedSlots.default({_key:i,suggestion:r})])})),s.afterSectionDefault&&s.afterSectionDefault({section:this.section,className:n+"__results-after "+n+"__results-after--"+this.section.name}),s.afterSectionNamed&&s.afterSectionNamed({section:this.section,className:n+"__results_after "+n+"__results-after--"+this.section.name})])}});function r(e,t){(function(e,t){return!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))})(e,t)||(e.className+=" "+t)}var a="default",u="default-section",l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:e.componentAttrIdAutosuggest}},[e._t("before-input"),n("div",{attrs:{role:"combobox","aria-expanded":e.isOpen?"true":"false","aria-haspopup":"listbox","aria-owns":e.componentAttrIdAutosuggest+"-"+e.componentAttrPrefix+"__results"}},[n("input",e._g(e._b({class:[e.isOpen?e.componentAttrPrefix+"__input--open":"",e.internal_inputProps.class],attrs:{type:e.internal_inputProps.type,autocomplete:e.internal_inputProps.autocomplete,"aria-autocomplete":"list","aria-activedescendant":e.isOpen&&null!==e.currentIndex?e.componentAttrPrefix+"__results-item--"+e.currentIndex:"","aria-controls":e.componentAttrIdAutosuggest+"-"+e.componentAttrPrefix+"__results"},domProps:{value:e.internalValue},on:{input:e.inputHandler,keydown:e.handleKeyStroke}},"input",e.internal_inputProps,!1),e.listeners))]),e._t("after-input"),e._v(" "),n("div",{class:e._componentAttrClassAutosuggestResultsContainer,attrs:{id:e.componentAttrIdAutosuggest+"-"+e.componentAttrPrefix+"__results"}},[e.isOpen?n("div",{class:e._componentAttrClassAutosuggestResults,attrs:{"aria-labelledby":e.componentAttrIdAutosuggest}},[e._t("before-suggestions"),e._v(" "),e._l(e.computedSections,(function(t,s){return n(t.type,{key:e.getSectionRef(""+t.name+s),ref:e.getSectionRef(""+t.name+s),refInFor:!0,tag:"component",attrs:{"current-index":e.currentIndex,"normalize-item-function":e.normalizeItem,"render-suggestion":e.renderSuggestion,section:t,"component-attr-prefix":e.componentAttrPrefix,"component-attr-id-autosuggest":e.componentAttrIdAutosuggest},on:{updateCurrentIndex:e.updateCurrentIndex},scopedSlots:e._u([{key:"before-section-"+(t.name||t.label),fn:function(n){var s=n.section,i=n.className;return[e._t("before-section-"+(t.name||t.label),null,{section:s,className:i})]}},{key:"default",fn:function(t){var n=t.suggestion,s=t._key;return[e._t("default",[e._v(" "+e._s(n.item)+" ")],{suggestion:n,index:s})]}},{key:"after-section-"+(t.name||t.label),fn:function(n){var s=n.section;return[e._t("after-section-"+(t.name||t.label),null,{section:s})]}},{key:"after-section",fn:function(t){var n=t.section;return[e._t("after-section",null,{section:n})]}}])})})),e._v(" "),e._t("after-suggestions")],2):e._e(),e._v(" "),e._t("after-suggestions-container")],2)],2)},staticRenderFns:[],name:"Autosuggest",components:{DefaultSection:o},props:{value:{type:String,default:null},inputProps:{type:Object,required:!0},limit:{type:Number,required:!1,default:1/0},suggestions:{type:Array,required:!0},renderSuggestion:{type:Function,required:!1,default:null},getSuggestionValue:{type:Function,required:!1,default:function(e){var t=e.item;return"object"==typeof t&&t.hasOwnProperty("name")?t.name:t}},shouldRenderSuggestions:{type:Function,required:!1,default:function(e,t){return e>0&&!t}},sectionConfigs:{type:Object,required:!1,default:function(){return{default:{onSelected:null}}}},onSelected:{type:Function,required:!1,default:null},componentAttrIdAutosuggest:{type:String,required:!1,default:"autosuggest"},componentAttrClassAutosuggestResultsContainer:{type:String,required:!1,default:null},componentAttrClassAutosuggestResults:{type:String,required:!1,default:null},componentAttrPrefix:{type:String,required:!1,default:"autosuggest"}},data:function(){return{internalValue:null,searchInputOriginal:null,currentIndex:null,currentItem:null,loading:!1,didSelectFromOptions:!1,defaultInputProps:{type:"text",autocomplete:"off"},clientXMouseDownInitial:null}},computed:{internal_inputProps:function(){return Object.assign({},this.defaultInputProps,this.inputProps)},listeners:function(){var e=this;return Object.assign({},this.$listeners,{input:function(e){},click:function(){e.loading=!1,e.$listeners.click&&e.$listeners.click(e.currentItem),e.$nextTick((function(){e.ensureItemVisible(e.currentItem,e.currentIndex)}))},selected:function(){e.currentItem&&e.sectionConfigs[e.currentItem.name]&&e.sectionConfigs[e.currentItem.name].onSelected?e.sectionConfigs[e.currentItem.name].onSelected(e.currentItem,e.searchInputOriginal):e.sectionConfigs.default.onSelected?e.sectionConfigs.default.onSelected(null,e.searchInputOriginal):e.$listeners.selected&&e.$emit("selected",e.currentItem,e.currentIndex),e.setChangeItem(null)}})},isOpen:function(){return this.shouldRenderSuggestions(this.totalResults,this.loading)},computedSections:function(){var e=this,t=0;return this.suggestions.map((function(n){if(n.data){var s,i,o,r,l=n.name?n.name:a,c=null;e.sectionConfigs[l]&&(s=e.sectionConfigs[l].limit,o=e.sectionConfigs[l].type,i=e.sectionConfigs[l].label,r=e.sectionConfigs[l].ulClass,c=e.sectionConfigs[l].liClass),o=o||u,s=(s=s||e.limit)||1/0,s=n.data.length<s?n.data.length:s;var d={name:l,label:i=i||n.label,type:o,limit:s,data:n.data,start_index:t,end_index:t+s-1,ulClass:r,liClass:c};return t+=s,d}}))},totalResults:function(){return this.computedSections.reduce((function(e,t){if(!t)return e;var n=t.limit,s=t.data;return e+(s.length>=n?n:s.length)}),0)},_componentAttrClassAutosuggestResultsContainer:function(){return this.componentAttrClassAutosuggestResultsContainer||this.componentAttrPrefix+"__results-container"},_componentAttrClassAutosuggestResults:function(){return this.componentAttrClassAutosuggestResults||this.componentAttrPrefix+"__results"}},watch:{value:{handler:function(e){this.internalValue=e},immediate:!0},isOpen:{handler:function(e,t){e!==t&&this.$emit(e?"opened":"closed")},immediate:!0}},created:function(){this.loading=!0},mounted:function(){document.addEventListener("mouseup",this.onDocumentMouseUp),document.addEventListener("mousedown",this.onDocumentMouseDown)},beforeDestroy:function(){document.removeEventListener("mouseup",this.onDocumentMouseUp),document.removeEventListener("mousedown",this.onDocumentMouseDown)},methods:{inputHandler:function(e){var t=e.target.value;this.$emit("input",t),this.internalValue=t,this.didSelectFromOptions||(this.searchInputOriginal=t,this.currentIndex=null)},getSectionRef:function(e){return"computed_section_"+e},getItemByIndex:function(e){var t=!1;if(null===e)return t;for(var n=0;n<this.computedSections.length;n++)if(e>=this.computedSections[n].start_index&&e<=this.computedSections[n].end_index){var s=e-this.computedSections[n].start_index,i=this.computedSections[n].name,o=this.$refs[this.getSectionRef(""+i+n)][0];if(o){t=this.normalizeItem(this.computedSections[n].name,this.computedSections[n].type,o.section.label,o.section.liClass,o.getItemByIndex(s));break}}return t},handleKeyStroke:function(e){var t=this,n=e.keyCode;if(!([16,9,17,18,91,93].indexOf(n)>-1)){var s=!this.isOpen;if(this.loading=!1,this.didSelectFromOptions=!1,this.isOpen)switch(n){case 40:case 38:if(e.preventDefault(),38===n&&null===this.currentIndex)break;var i=40===n?1:-1,o=Math.max((parseInt(this.currentIndex)||0)+(s?0:i),-1);this.setCurrentIndex(o,this.totalResults),this.didSelectFromOptions=!0,this.totalResults>0&&this.currentIndex>=0?(this.setChangeItem(this.getItemByIndex(this.currentIndex)),this.didSelectFromOptions=!0):-1===this.currentIndex&&(this.setChangeItem(null),this.internalValue=this.searchInputOriginal,e.preventDefault()),this.$nextTick((function(){t.ensureItemVisible(t.currentItem,t.currentIndex)}));break;case 13:e.preventDefault(),this.totalResults>0&&this.currentIndex>=0&&(this.setChangeItem(this.getItemByIndex(this.currentIndex),!0),this.didSelectFromOptions=!0),this.loading=!0,this.listeners.selected(this.didSelectFromOptions);break;case 27:this.loading=!0,this.currentIndex=null,this.internalValue=this.searchInputOriginal,this.$emit("input",this.searchInputOriginal),e.preventDefault()}}},setChangeItem:function(e,t){if(void 0===t&&(t=!1),null!==this.currentIndex&&e){if(e){this.currentItem=e,this.$emit("item-changed",e,this.currentIndex);var n=this.getSuggestionValue(e);this.internalValue=n,t&&(this.searchInputOriginal=n),this.ensureItemVisible(e,this.currentIndex)}}else this.currentItem=null,this.$emit("item-changed",null,null)},normalizeItem:function(e,t,n,s,i){return{name:e,type:t,label:n,liClass:i.liClass||s,item:i}},ensureItemVisible:function(e,t,n){var s=this.$el.querySelector(n||"."+this._componentAttrClassAutosuggestResults);if(s){var i=s.querySelector("#"+this.componentAttrPrefix+"__results-item--"+t);if(i){var o=s.clientHeight,r=s.scrollTop,a=i.clientHeight,u=i.offsetTop;a+u>=r+o?s.scrollTop=a+u-o:u<r&&r>0&&(s.scrollTop=u)}}},updateCurrentIndex:function(e){this.setCurrentIndex(e,-1,!0)},clickedOnScrollbar:function(e,t){var n=this.$el.querySelector("."+this._componentAttrClassAutosuggestResults),s=n&&n.clientWidth<=t+17&&t+17<=n.clientWidth+34;return"DIV"===e.target.tagName&&n&&s||!1},onDocumentMouseDown:function(e){var t=e.target.getBoundingClientRect?e.target.getBoundingClientRect():0;this.clientXMouseDownInitial=e.clientX-t.left},onDocumentMouseUp:function(e){if(!this.$el.contains(e.target))return this.loading=!0,void(this.currentIndex=null);"INPUT"===e.target.tagName||this.clickedOnScrollbar(e,this.clientXMouseDownInitial)||(this.loading=!0,this.didSelectFromOptions=!0,this.setChangeItem(this.getItemByIndex(this.currentIndex),!0),this.listeners.selected(!0))},setCurrentIndex:function(e,t,n){void 0===t&&(t=-1),void 0===n&&(n=!1);var s=e;n||(null===this.currentIndex||e>=t)&&(s=0),this.currentIndex=s;var i=this.$el.querySelector("#"+this.componentAttrPrefix+"__results-item--"+this.currentIndex),o=this.componentAttrPrefix+"__results-item--highlighted";this.$el.querySelector("."+o)&&function(e,t){e.classList&&e.classList.remove(t)}(this.$el.querySelector("."+o),o),i&&r(i,o)}}},c={install:function(e){e.component("vue-autosuggest-default-section",o),e.component("vue-autosuggest",l)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(c);var d=n("m8qd"),g={components:{VueAutosuggest:l,BCardCode:d.a},data:function(){return{datasuggest:[],filteredOptions:[],limit:10,selected:null,codeBasic:"\n<template>\n  <vue-autosuggest\n    :suggestions=\"filteredOptions\"\n    :limit=\"10\"\n    :input-props=\"{id:'autosuggest__input',class:'form-control', placeholder:'Do you feel lucky?'}\"\n    @input=\"onInputChange\"\n  >\n    <template slot-scope=\"{suggestion}\">\n      <span class=\"my-suggestion-item\">{{ suggestion.item.name }}</span>\n    </template>\n  </vue-autosuggest>\n</template>\n\n<script>\nimport { VueAutosuggest } from 'vue-autosuggest'\n\nexport default {\n  components: {\n    VueAutosuggest,\n  },\n  data() {\n    return {\n      datasuggest: [],\n      filteredOptions: [],\n      limit: 10,\n      selected: null,\n    }\n  },\n  created() {\n    this.$http.get('/autosuggest/data')\n      .then(res => { this.datasuggest = res })\n  },\n  methods: {\n    onInputChange(text) {\n      if (text === '' || text === undefined) {\n        return\n      }\n\n      /* Full control over filtering. Maybe fetch from API?! Up to you!!! */\n      const filteredDevelopers = this.datasuggest.data[0].developers.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)\n      const filteredDesigner = this.datasuggest.data[0].designers.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)\n      const filteredData = filteredDevelopers.concat(filteredDesigner)\n      this.filteredOptions = [{\n        data: filteredData,\n      }]\n    },\n  },\n}\n<\/script>\n"}},created:function(){var e=this;this.$http.get("/autosuggest/data").then((function(t){e.datasuggest=t}))},methods:{onInputChange:function(e){if(""!==e&&void 0!==e){var t=this.datasuggest.data[0].developers.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1})).slice(0,this.limit),n=this.datasuggest.data[0].designers.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1})).slice(0,this.limit),s=t.concat(n);this.filteredOptions=[{data:s}]}}}},m=n("KHd+"),p=Object(m.a)(g,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Basic"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeBasic)+"\n  ")]},proxy:!0}])},[n("vue-autosuggest",{attrs:{suggestions:e.filteredOptions,limit:10,"input-props":{id:"autosuggest__input",class:"form-control",placeholder:"Do you feel lucky?"}},on:{input:e.onInputChange},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.suggestion;return[n("span",{staticClass:"my-suggestion-item"},[e._v(e._s(s.item.name))])]}}])})],1)}),[],!1,null,null,null).exports,f=n("1uQM"),h=n("6KOa"),v={components:{VueAutosuggest:l,BCardCode:d.a,BCardText:f.a,BAvatar:h.a},data:function(){return{datasuggest:[],filteredOptions:[],inputProps:{id:"autosuggest__input",class:"form-control",placeholder:"Type 'e'"},limit:10,codeSlot:'\n<template>\n  <vue-autosuggest\n    :suggestions="filteredOptions"\n    :input-props="inputProps"\n    :on-selected="onSelected"\n    :limit="10"\n    @input="onInputChange"\n  >\n    <template slot-scope="{suggestion}">\n      <div class="d-flex align-items-center">\n        <b-avatar :src="suggestion.item.img" />\n        <div class="detail ml-50">\n          <b-card-text class="mb-0">\n            {{ suggestion.item.name }}\n          </b-card-text>\n          <small class="text-muted">\n            {{ suggestion.item.time }}\n          </small>\n        </div>\n      </div>\n    </template>\n  </vue-autosuggest>\n</template>\n\n<script>\nimport { VueAutosuggest } from \'vue-autosuggest\'\nimport { BAvatar, BCardText } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    VueAutosuggest,\n    BCardText,\n    BAvatar,\n  },\n  data() {\n    return {\n      datasuggest: [],\n      filteredOptions: [],\n      inputProps: {\n        id: \'autosuggest__input\',\n        class: \'form-control\',\n        placeholder: "Type \'e\'",\n      },\n      limit: 10,\n    }\n  },\n  created() {\n    this.$http.get(\'/autosuggest/data\')\n      .then(res => { this.datasuggest = res })\n  },\n  methods: {\n    onSelected(option) {\n      this.selected = option.item\n    },\n    onInputChange(text) {\n      if (text === \'\' || text === undefined) {\n        return\n      }\n\n      /* Full control over filtering. Maybe fetch from API?! Up to you!!! */\n      const filteredDevelopers = this.datasuggest.data[0].developers.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)\n      const filteredDesigner = this.datasuggest.data[0].designers.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)\n      const filteredData = filteredDevelopers.concat(filteredDesigner)\n      this.filteredOptions = [{\n        data: filteredData,\n      }]\n    },\n  },\n}\n<\/script>\n'}},created:function(){var e=this;this.$http.get("/autosuggest/data").then((function(t){e.datasuggest=t}))},methods:{onSelected:function(e){this.selected=e.item},onInputChange:function(e){if(""!==e&&void 0!==e){var t=this.datasuggest.data[0].developers.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1})).slice(0,this.limit),n=this.datasuggest.data[0].designers.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1})).slice(0,this.limit),s=t.concat(n);this.filteredOptions=[{data:s}]}}}},_=Object(m.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Slot"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeSlot)+"\n  ")]},proxy:!0}])},[n("vue-autosuggest",{attrs:{suggestions:e.filteredOptions,"input-props":e.inputProps,"on-selected":e.onSelected,limit:10},on:{input:e.onInputChange},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.suggestion;return[n("div",{staticClass:"d-flex align-items-center"},[n("b-avatar",{attrs:{src:s.item.img}}),e._v(" "),n("div",{staticClass:"detail ml-50"},[n("b-card-text",{staticClass:"mb-0"},[e._v("\n            "+e._s(s.item.name)+"\n          ")]),e._v(" "),n("small",{staticClass:"text-muted"},[e._v("\n            "+e._s(s.item.time)+"\n          ")])],1)],1)]}}])})],1)}),[],!1,null,null,null).exports,b={components:{VueAutosuggest:l,BCardCode:d.a,BAvatar:h.a,BCardText:f.a},data:function(){var e=this;return{codeSection:'\n<template>\n  <vue-autosuggest\n    v-model="query"\n    :suggestions="suggestions"\n    :input-props="inputProps"\n    :section-configs="sectionConfigs"\n    :render-suggestion="renderSuggestion"\n    :limit="10"\n    @input="fetchResults"\n  />\n</template>\n\n<script>\n/* eslint-disable vue/no-unused-components */\n/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }] */\nimport { VueAutosuggest } from \'vue-autosuggest\'\nimport { BAvatar, BCardText } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    VueAutosuggest,\n    BAvatar,\n    BCardText,\n  },\n  data() {\n    return {\n      datasuggest: [],\n      query: \'\',\n      suggestions: [],\n      selected: null,\n      inputProps: {\n        id: \'autosuggest__input\',\n        class: \'form-control\',\n        placeholder: "Type \'e\'",\n      },\n      sectionConfigs: {\n        developers: {\n          limit: 6,\n          label: \'Developers\',\n          onSelected: selected => {\n            this.selected = selected.item\n          },\n        },\n        pages: {\n          limit: 6,\n          label: \'Pages\',\n          onSelected: selected => {\n            this.selected = selected.item\n          },\n        },\n      },\n      limit: 10,\n    }\n  },\n  created() {\n    this.$http.get(\'/autosuggest/data\')\n      .then(res => { this.datasuggest = res })\n  },\n  methods: {\n    fetchResults(text) {\n      const { query } = this\n      if (query) {\n        this.suggestions = []\n      }\n\n      /* Full control over filtering. Maybe fetch from API?! Up to you!!! */\n      const filteredDevelopers = this.datasuggest.data[0].developers.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)\n      const filteredPages = this.datasuggest.data[0].pages.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)\n      filteredDevelopers.length && this.suggestions.push({ name: \'developers\', data: filteredDevelopers })\n      filteredPages.length && this.suggestions.push({ name: \'pages\', data: filteredPages })\n    },\n    renderSuggestion(suggestion) {\n      if (suggestion.name === \'developers\') {\n        const dev = suggestion.item\n        return (\n          <div class="d-flex align-items-center">\n            <b-avatar src={dev.img} class="mr-50"></b-avatar>\n            <div class="detail">\n              <b-card-text class="mb-0">{dev.name}</b-card-text>\n              <small class="text-muted">{dev.email}</small>\n            </div>\n          </div>\n        )\n      }\n      if (suggestion.name === \'pages\') {\n        const page = suggestion.item\n        return (\n          <div class="d-flex align-items-center">\n            <feather-icon icon={page.icon} size={\'18\'} class={\'mr-75\'} />\n            <span>{page.name}</span>\n          </div>\n        )\n      }\n      return false\n    },\n  },\n}\n<\/script>\n',datasuggest:[],query:"",suggestions:[],selected:null,inputProps:{id:"autosuggest__input",class:"form-control",placeholder:"Type 'e'"},sectionConfigs:{developers:{limit:6,label:"Developers",onSelected:function(t){e.selected=t.item}},pages:{limit:6,label:"Pages",onSelected:function(t){e.selected=t.item}}},limit:10}},created:function(){var e=this;this.$http.get("/autosuggest/data").then((function(t){e.datasuggest=t}))},methods:{fetchResults:function(e){this.query&&(this.suggestions=[]);var t=this.datasuggest.data[0].developers.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1})).slice(0,this.limit),n=this.datasuggest.data[0].pages.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1})).slice(0,this.limit);t.length&&this.suggestions.push({name:"developers",data:t}),n.length&&this.suggestions.push({name:"pages",data:n})},renderSuggestion:function(e){var t=this.$createElement;if("developers"===e.name){var n=e.item;return t("div",{class:"d-flex align-items-center"},[t("b-avatar",{attrs:{src:n.img},class:"mr-50"}),t("div",{class:"detail"},[t("b-card-text",{class:"mb-0"},[n.name]),t("small",{class:"text-muted"},[n.email])])])}if("pages"===e.name){var s=e.item;return t("div",{class:"d-flex align-items-center"},[t("feather-icon",{attrs:{icon:s.icon,size:"18"},class:"mr-75"}),t("span",[s.name])])}return!1}}},x=Object(m.a)(b,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Section"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeSection)+"\n  ")]},proxy:!0}])},[n("vue-autosuggest",{attrs:{suggestions:e.suggestions,"input-props":e.inputProps,"section-configs":e.sectionConfigs,"render-suggestion":e.renderSuggestion,limit:10},on:{input:e.fetchResults},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}})],1)}),[],!1,null,null,null).exports,y=(n("PKPk"),n("3bBZ"),n("ToJy"),n("IF94")),C=n("vDqi"),I=n.n(C),S={components:{VueAutosuggest:l,BCardCode:d.a,BCard:y.a,BCardText:f.a,BAvatar:h.a},data:function(){var e=this;return{codeAjax:"\n<template>\n  <div>\n    <vue-autosuggest\n      ref=\"autocomplete\"\n      v-model=\"query\"\n      :suggestions=\"suggestions\"\n      :input-props=\"inputProps\"\n      :section-configs=\"sectionConfigs\"\n      :render-suggestion=\"renderSuggestion\"\n      :get-suggestion-value=\"getSuggestionValue\"\n      @input=\"fetchResults\"\n    />\n\n    <b-card-text class=\"mt-1\">\n      Selected element (object):\n    </b-card-text>\n    <b-card\n      class=\"border\"\n      no-body\n    >\n      <pre>{{ JSON.stringify(selected, null, 4) }}</pre>\n    </b-card>\n  </div>\n</template>\n\n<script>\n/* eslint-disable vue/no-unused-components */\n/* eslint no-unused-expressions: [\"error\", { \"allowShortCircuit\": true }] */\nimport { BCard, BCardText, BAvatar } from 'bootstrap-vue'\nimport { VueAutosuggest } from 'vue-autosuggest'\nimport axios from 'axios'\n\nexport default {\n  components: {\n    VueAutosuggest,\n    BCard,\n    BCardText,\n    BAvatar,\n  },\n  data() {\n    return {\n      query: '',\n      results: [],\n      timeout: null,\n      selected: null,\n      debounceMilliseconds: 250,\n      usersUrl: 'https://jsonplaceholder.typicode.com/users',\n      photosUrl: 'https://jsonplaceholder.typicode.com/photos',\n      inputProps: {\n        id: 'autosuggest__input_ajax',\n        placeholder: 'Do you feel lucky, punk?',\n        class: 'form-control',\n        name: 'ajax',\n      },\n      suggestions: [],\n      sectionConfigs: {\n        destinations: {\n          limit: 6,\n          label: 'Destination',\n          onSelected: selected => {\n            this.selected = selected.item\n          },\n        },\n        hotels: {\n          limit: 6,\n          label: 'Hotels',\n          onSelected: selected => {\n            this.selected = selected.item\n          },\n        },\n      },\n    }\n  },\n  methods: {\n    fetchResults() {\n      const { query } = this\n\n      clearTimeout(this.timeout)\n      this.timeout = setTimeout(() => {\n        const photosPromise = axios.get(this.photosUrl)\n        const usersPromise = axios.get(this.usersUrl)\n\n        Promise.all([photosPromise, usersPromise]).then(values => {\n          this.suggestions = []\n          this.selected = null\n\n          const photos = this.filterResults(values[0].data, query, 'title')\n          const users = this.filterResults(values[1].data, query, 'name')\n          users.length && this.suggestions.push({ name: 'destinations', data: users })\n          photos.length && this.suggestions.push({ name: 'hotels', data: photos })\n        })\n      }, this.debounceMilliseconds)\n    },\n    filterResults(data, text, field) {\n      return data.filter(item => {\n        if (item[field].toLowerCase().indexOf(text.toLowerCase()) > -1) {\n          return item[field]\n        }\n        return false\n      }).sort()\n    },\n    renderSuggestion(suggestion) {\n      if (suggestion.name === 'hotels') {\n        const image = suggestion.item\n        return (\n          <div class=\"d-flex\">\n            <div>\n              <b-avatar src={image.thumbnailUrl} class=\"mr-50\"></b-avatar>\n            </div>\n            <div>\n              <span>{image.title}</span>\n            </div>\n          </div>\n        )\n      }\n      return suggestion.item.name\n    },\n    getSuggestionValue(suggestion) {\n      const { name, item } = suggestion\n      return name === 'hotels' ? item.title : item.name\n    },\n  },\n}\n<\/script>\n\n<style lang=\"scss\" scoped>\npre{\n  min-height: 295px;\n  padding: 1.5rem;\n  margin-bottom: 0;\n  border-radius: .5rem;\n}\n</style>\n",query:"",results:[],timeout:null,selected:null,debounceMilliseconds:250,usersUrl:"https://jsonplaceholder.typicode.com/users",photosUrl:"https://jsonplaceholder.typicode.com/photos",inputProps:{id:"autosuggest__input_ajax",placeholder:"Do you feel lucky, punk?",class:"form-control",name:"ajax"},suggestions:[],sectionConfigs:{destinations:{limit:6,label:"Destination",onSelected:function(t){e.selected=t.item}},hotels:{limit:6,label:"Hotels",onSelected:function(t){e.selected=t.item}}}}},methods:{fetchResults:function(){var e=this,t=this.query;clearTimeout(this.timeout),this.timeout=setTimeout((function(){var n=I.a.get(e.photosUrl),s=I.a.get(e.usersUrl);Promise.all([n,s]).then((function(n){e.suggestions=[],e.selected=null;var s=e.filterResults(n[0].data,t,"title"),i=e.filterResults(n[1].data,t,"name");i.length&&e.suggestions.push({name:"destinations",data:i}),s.length&&e.suggestions.push({name:"hotels",data:s})}))}),this.debounceMilliseconds)},filterResults:function(e,t,n){return e.filter((function(e){return e[n].toLowerCase().indexOf(t.toLowerCase())>-1&&e[n]})).sort()},renderSuggestion:function(e){var t=this.$createElement;if("hotels"===e.name){var n=e.item;return t("div",{class:"d-flex"},[t("div",[t("b-avatar",{attrs:{src:n.thumbnailUrl},class:"mr-50"})]),t("div",[t("span",[n.title])])])}return e.item.name},getSuggestionValue:function(e){var t=e.name,n=e.item;return"hotels"===t?n.title:n.name}}},A=(n("zzZk"),Object(m.a)(S,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Ajax"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeAjax)+"\n  ")]},proxy:!0}])},[n("vue-autosuggest",{ref:"autocomplete",attrs:{suggestions:e.suggestions,"input-props":e.inputProps,"section-configs":e.sectionConfigs,"render-suggestion":e.renderSuggestion,"get-suggestion-value":e.getSuggestionValue},on:{input:e.fetchResults},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),e._v(" "),n("b-card-text",{staticClass:"mt-1"},[e._v("\n    Selected element (object):\n  ")]),e._v(" "),n("b-card",{staticClass:"border",attrs:{"no-body":""}},[n("pre",[e._v(e._s(JSON.stringify(e.selected,null,4)))])])],1)}),[],!1,null,"b0363cf6",null).exports),O={components:{BRow:s.a,BCol:i.a,AutoSuggestBasic:p,AutoSuggestSlot:_,AutoSuggestSection:x,AutoSuggestAjax:A}},k=(n("EkQ1"),Object(m.a)(O,(function(){var e=this.$createElement,t=this._self._c||e;return t("b-row",[t("b-col",{attrs:{cols:"12"}},[t("auto-suggest-basic"),this._v(" "),t("auto-suggest-slot"),this._v(" "),t("auto-suggest-section"),this._v(" "),t("auto-suggest-ajax")],1)],1)}),[],!1,null,null,null));t.default=k.exports},daJi:function(e,t,n){var s=n("FNHR");"string"==typeof s&&(s=[[e.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(s,i);s.locals&&(e.exports=s.locals)},"esY+":function(e,t,n){var s=n("EKpq");"string"==typeof s&&(s=[[e.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(s,i);s.locals&&(e.exports=s.locals)},m8qd:function(e,t,n){"use strict";n("6cQw");var s=n("IF94"),i=n("SWgu"),o=n("ugaB"),r=n("YZfj"),a=n("WEOK"),u=(n("wZee"),n("hL/g"),n("jVEP")),l=n.n(u),c={components:{BCard:s.a,BCardTitle:i.a,BCardSubTitle:o.a,BCardBody:r.a,BCollapse:a.a,Prism:l.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},d=(n("1yzx"),n("KHd+")),g=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[n("div",{staticClass:"card-header"},[n("div",[n("b-card-title",[e._v(e._s(e.$attrs.title))]),e._v(" "),e.$attrs["sub-title"]?n("b-card-sub-title",[e._v("\n        "+e._s(e.$attrs["sub-title"])+"\n      ")]):e._e()],1),e._v(" "),n("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(t){e.code_visible=!e.code_visible}}})]),e._v(" "),void 0!==e.$attrs["no-body"]?[e._t("default"),e._v(" "),n("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[n("b-card-body",[n("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:n("b-card-body",[e._t("default"),e._v(" "),n("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[n("div",{staticClass:"p-1"}),e._v(" "),n("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);t.a=g.exports},yPU0:function(e,t,n){var s=n("Tk63");"string"==typeof s&&(s=[[e.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(s,i);s.locals&&(e.exports=s.locals)},zzZk:function(e,t,n){"use strict";n("daJi")}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{"4AkS":function(t,a,e){"use strict";var i={bind:function(t,a){var e={event:"mousedown",transition:600};!function(t,a){t.forEach((function(t){isNaN(Number(t))?a.event=t:a.transition=t}))}(Object.keys(a.modifiers),e),t.addEventListener(e.event,(function(i){!function(t,a){var i=a,n=parseInt(getComputedStyle(i).borderWidth.replace("px","")),o=i.getBoundingClientRect(),l=o.left,c=o.top,d=i.offsetWidth,b=i.offsetHeight,m=t.clientX-l,u=t.clientY-c,p=Math.max(m,d-m),v=Math.max(u,b-u),_=window.getComputedStyle(i),g=Math.sqrt(p*p+v*v),C=n>0?n:0,h=document.createElement("div"),x=document.createElement("div");x.className="ripple-container",h.className="ripple",h.style.marginTop="0px",h.style.marginLeft="0px",h.style.width="1px",h.style.height="1px",h.style.transition="all "+e.transition+"ms cubic-bezier(0.4, 0, 0.2, 1)",h.style.borderRadius="50%",h.style.pointerEvents="none",h.style.position="relative",h.style.zIndex=s,h.style.backgroundColor=r,x.style.position="absolute",x.style.left=0-C+"px",x.style.top=0-C+"px",x.style.height="0",x.style.width="0",x.style.pointerEvents="none",x.style.overflow="hidden";var f=i.style.position.length>0?i.style.position:getComputedStyle(i).position;"relative"!==f&&(i.style.position="relative");function y(){setTimeout((function(){h.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((function(){x.parentNode.removeChild(x)}),850),a.removeEventListener("mouseup",y,!1),setTimeout((function(){for(var t=!0,a=0;a<i.childNodes.length;a++)"ripple-container"===i.childNodes[a].className&&(t=!1);t&&(i.style.position="static"!==f?f:"")}),e.transition+250)}x.appendChild(h),i.appendChild(x),h.style.marginLeft=m+"px",h.style.marginTop=u+"px",x.style.width=d+"px",x.style.height=b+"px",x.style.borderTopLeftRadius=_.borderTopLeftRadius,x.style.borderTopRightRadius=_.borderTopRightRadius,x.style.borderBottomLeftRadius=_.borderBottomLeftRadius,x.style.borderBottomRightRadius=_.borderBottomRightRadius,x.style.direction="ltr",setTimeout((function(){h.style.width=2*g+"px",h.style.height=2*g+"px",h.style.marginLeft=m-g+"px",h.style.marginTop=u-g+"px"}),0),"mousedown"===t.type?a.addEventListener("mouseup",y,!1):y()}(i,t,a.value)}));var r=a.value||i.color||"rgba(0, 0, 0, 0.35)",s=i.zIndex||"9999"}};a.a=i},"7KGx":function(t,a,e){"use strict";e.r(a);var i=e("IF94"),r=e("1uQM"),s=e("GUe+"),n=e("YZfj"),o=e("SWgu"),l=e("ugaB"),c=e("oVt+"),d=e("sove"),b=e("qlm0"),m=e("SRip"),u=e("4AkS"),p={components:{BCard:i.a,BCardText:r.a,BButton:s.a,BCardBody:n.a,BCardTitle:o.a,BCardSubTitle:l.a,BRow:c.a,BCol:d.a,BLink:b.a,BImg:m.a},directives:{Ripple:u.a}},v=e("KHd+"),_=Object(v.a)(p,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("b-row",{staticClass:"match-height"},[i("b-col",{attrs:{md:"6",lg:"4"}},[i("b-card",{attrs:{"img-src":e("NaQA"),"img-alt":"Card image cap","img-top":"",title:"Card title"}},[i("b-card-text",[t._v("\n        Some quick example text to build on the card title and make up the bulk of\n        the card's content.\n      ")]),t._v(" "),i("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Go Somewhere\n      ")])],1)],1),t._v(" "),i("b-col",{attrs:{md:"6",lg:"4"}},[i("b-card",{attrs:{"no-body":""}},[i("b-card-body",[i("b-card-title",[t._v("Card title")]),t._v(" "),i("b-card-sub-title",[t._v("Support card subtitle")])],1),t._v(" "),i("b-img",{attrs:{fluid:"",src:e("3BK4"),alt:"Card image cap"}}),t._v(" "),i("b-card-body",[i("b-card-text",[t._v("Bear claw sesame snaps gummies chocolate.")]),t._v(" "),i("b-link",{staticClass:"card-link"},[t._v("\n          Card link\n        ")]),t._v(" "),i("b-link",{staticClass:"card-link"},[t._v("\n          Another link\n        ")])],1)],1)],1),t._v(" "),i("b-col",{attrs:{md:"6",lg:"4"}},[i("b-card",{attrs:{title:"Card title","sub-title":"Support card subtitle"}},[i("b-img",{staticClass:"mb-2",attrs:{fluid:"",src:e("MsyD")}}),t._v(" "),i("b-card-text",[t._v("Bear claw sesame snaps gummies chocolate.")]),t._v(" "),i("b-link",{staticClass:"card-link"},[t._v("\n        Card link\n      ")]),t._v(" "),i("b-link",{staticClass:"card-link"},[t._v("\n        Another link\n      ")])],1)],1)],1)}),[],!1,null,null,null).exports,g=e("MTVL"),C=e("0kd/"),h={components:{BRow:c.a,BCol:d.a,BCard:i.a,BCardText:r.a,BLink:b.a,BCardTitle:o.a,BListGroup:g.a,BListGroupItem:C.a,BCardBody:n.a},data:function(){return{listData:[{text:"Cras justo odio"},{text:"Dapibus ac facilisis in"},{text:"Vestibulum at eros"}],kitchenSinkList:[{text:"Cras justo odio"},{text:"Vestibulum at eros"}]}}},x=Object(v.a)(h,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("section",{attrs:{id:"card-content-types"}},[i("h5",{staticClass:"mt-3"},[t._v("\n    Content Types\n  ")]),t._v(" "),i("b-row",[i("b-col",{attrs:{md:"6",lg:"4"}},[i("h6",{staticClass:"my-2 text-muted"},[t._v("\n        Body\n      ")]),t._v(" "),i("b-card",{staticClass:"mb-4"},[i("b-card-text",[t._v("\n          This is some text within a card body. Jelly lemon drops tiramisu chocolate cake cotton candy soufflé oat cake sweet roll. Sugar plum marzipan dragée topping cheesecake chocolate bar. Danish muffin icing donut.\n        ")])],1),t._v(" "),i("h6",{staticClass:"my-2 text-muted"},[t._v("\n        Titles, Text, and Links\n      ")]),t._v(" "),i("b-card",{staticClass:"mb-4",attrs:{title:"Card title","sub-title":"Card subtitle"}},[i("b-card-text",[t._v("\n          Some quick example text to build on the card title and make up the bulk of the card's content.\n        ")]),t._v(" "),i("b-link",{staticClass:"card-link"},[t._v("\n          Card link\n        ")]),t._v(" "),i("b-link",{staticClass:"card-link"},[t._v("\n          Another link\n        ")])],1),t._v(" "),i("h6",{staticClass:"my-2 text-muted"},[t._v("\n        List groups\n      ")]),t._v(" "),i("b-card",{staticClass:"mb-4",attrs:{"no-body":""}},[i("b-list-group",{attrs:{flush:""}},t._l(t.listData,(function(a){return i("b-list-group-item",{key:a.text},[t._v("\n            "+t._s(a.text)+"\n          ")])})),1)],1)],1),t._v(" "),i("b-col",{attrs:{md:"6",lg:"4"}},[i("h6",{staticClass:"my-2 text-muted"},[t._v("\n        Images\n      ")]),t._v(" "),i("b-card",{attrs:{"img-src":e("rmFA"),"img-alt":"Card image","img-top":""}},[i("b-card-text",[t._v("\n          Some quick example text to build on the card title and make up the bulk of the card's content.\n        ")]),t._v(" "),i("b-card-text",[t._v("\n          Cookie topping caramels jujubes gingerbread. Lollipop apple pie cupcake candy canes cookie ice cream. Wafer chocolate bar carrot cake jelly-o.\n        ")])],1)],1),t._v(" "),i("b-col",{attrs:{md:"6",lg:"4"}},[i("h6",{staticClass:"my-2 text-muted"},[t._v("\n        Kitchen Sink\n      ")]),t._v(" "),i("b-card",{attrs:{"img-src":e("fezf"),"img-alt":"Card image","img-top":"","no-body":""}},[i("b-card-body",[i("b-card-title",[t._v("Card title")]),t._v(" "),i("b-card-text",[t._v("\n            Some quick example text to build on the card title.\n          ")])],1),t._v(" "),i("b-list-group",{attrs:{flush:""}},t._l(t.kitchenSinkList,(function(a){return i("b-list-group-item",{key:a.text},[t._v("\n            "+t._s(a.text)+"\n          ")])})),1),t._v(" "),i("b-card-body",[i("b-link",{staticClass:"card-link"},[t._v("\n            Card link\n          ")]),t._v(" "),i("b-link",{staticClass:"card-link"},[t._v("\n            Another link\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports,f={components:{BCard:i.a,BRow:c.a,BCol:d.a,BCardText:r.a,BButton:s.a},directives:{Ripple:u.a}},y=Object(v.a)(f,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h6",{staticClass:"my-2 text-muted"},[t._v("\n    Header and Footer\n  ")]),t._v(" "),e("b-row",[e("b-col",{attrs:{md:"6",lg:"4"}},[e("b-card",{attrs:{header:"Featured",title:"Special title treatment"}},[e("b-card-text",[t._v("\n          With supporting text below as a natural lead-in to additional content natural lead-in to additional content.\n        ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n          Go somewhere\n        ")])],1)],1),t._v(" "),e("b-col",{attrs:{md:"6",lg:"4"}},[e("b-card",{attrs:{header:"Quote","header-tag":"h6"}},[e("blockquote",{staticClass:"blockquote mb-0"},[e("p",[t._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, Integer posuere erat a ante Integer posuere erat a anteconsectetur.\n          ")]),t._v(" "),e("footer",{staticClass:"blockquote-footer"},[t._v("\n            Someone famous in "),e("cite",{attrs:{title:"Source Title"}},[t._v("Source Title")])])])])],1),t._v(" "),e("b-col",{attrs:{md:"6",lg:"4"}},[e("b-card",{staticClass:"text-center",attrs:{header:"Featured",title:"Special title treatment",footer:"2 days ago","footer-class":"text-muted"}},[e("b-card-text",[t._v("\n          With supporting text below as a natural.\n        ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n          Go somewhere\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null).exports,w={components:{BRow:c.a,BCol:d.a,BCard:i.a,BCardText:r.a,BButton:s.a},directives:{Ripple:u.a}},B=Object(v.a)(w,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{attrs:{id:"card-text-alignment"}},[e("h5",{staticClass:"mt-3 mb-2"},[t._v("\n    Text Alignment\n  ")]),t._v(" "),e("b-row",[e("b-col",{attrs:{md:"6",lg:"4"}},[e("b-card",{staticClass:"mb-3",attrs:{title:"Special title treatment"}},[e("b-card-text",[t._v("\n          With supporting text below as a natural lead-in to additional content.\n        ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n          Go somewhere\n        ")])],1)],1),t._v(" "),e("b-col",{attrs:{md:"6",lg:"4"}},[e("b-card",{staticClass:"text-center",attrs:{title:"Special title treatment"}},[e("b-card-text",[t._v("\n          With supporting text below as a natural lead-in to additional content\n        ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n          Go somewhere\n        ")])],1)],1),t._v(" "),e("b-col",{attrs:{md:"6",lg:"4"}},[e("b-card",{staticClass:"text-right",attrs:{title:"Special title treatment"}},[e("b-card-text",[t._v("\n          With supporting text below as a natural lead-in to additional content.\n        ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n          Go somewhere\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null).exports,k=e("YZAB"),T=e("+QIf"),S={components:{BRow:c.a,BCol:d.a,BCard:i.a,BTab:k.a,BTabs:T.a,BCardText:r.a,BCardTitle:o.a,BButton:s.a},directives:{Ripple:u.a}},L=Object(v.a)(S,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{attrs:{id:"card-navigation"}},[e("h5",{staticClass:"mt-3 mb-2"},[t._v("\n    Navigation\n  ")]),t._v(" "),e("b-row",[e("b-col",{attrs:{md:"6"}},[e("b-card",{staticClass:"text-center"},[e("b-tabs",{attrs:{pills:"","nav-class":"mb-3"}},[e("b-tab",{attrs:{title:"Home",active:""}},[e("b-card-title",[t._v("Special title treatment")]),t._v(" "),e("b-card-text",[t._v("\n              With supporting text below as a natural lead-in to additional content\n            ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n              Go home\n            ")])],1),t._v(" "),e("b-tab",{attrs:{title:"Profile"}},[e("b-card-title",[t._v("Special title treatment")]),t._v(" "),e("b-card-text",[t._v("\n              With supporting text below as a natural lead-in to additional content\n            ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n              Go home\n            ")])],1),t._v(" "),e("b-tab",{attrs:{title:"Disable",disabled:""}})],1)],1)],1),t._v(" "),e("b-col",{attrs:{md:"6"}},[e("b-card",{staticClass:"text-center"},[e("b-tabs",{attrs:{"nav-class":"mb-3"}},[e("b-tab",{attrs:{title:"Home",active:""}},[e("b-card-title",[t._v("Special title treatment")]),t._v(" "),e("b-card-text",[t._v("\n              With supporting text below as a natural lead-in to additional content\n            ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n              Go home\n            ")])],1),t._v(" "),e("b-tab",{attrs:{title:"Profile"}},[e("b-card-title",[t._v("Special title treatment")]),t._v(" "),e("b-card-text",[t._v("\n              With supporting text below as a natural lead-in to additional content\n            ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n              Go home\n            ")])],1),t._v(" "),e("b-tab",{attrs:{title:"Disable",disabled:""}})],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports,R={components:{BRow:c.a,BCol:d.a,BCard:i.a,BCardText:r.a,BCardTitle:o.a}},q=Object(v.a)(R,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("section",{attrs:{id:"card-images"}},[i("h5",{staticClass:"mt-3 mb-2"},[t._v("\n    Images\n  ")]),t._v(" "),i("b-row",[i("b-col",{attrs:{md:"6",xl:"4"}},[i("b-card",{staticClass:"mb-3",attrs:{"img-src":e("MsyD"),"img-top":"","img-alt":"card img",title:"Card title"}},[i("b-card-text",[t._v("\n          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.\n        ")]),t._v(" "),i("b-card-text",[i("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])],1)],1),t._v(" "),i("b-col",{attrs:{md:"6",xl:"4"}},[i("b-card",{staticClass:"mb-3",attrs:{"img-src":e("a7b6"),"img-bottom":"","img-alt":"card img",title:"Card title"}},[i("b-card-text",[t._v("\n          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.\n        ")]),t._v(" "),i("b-card-text",[i("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])],1)],1),t._v(" "),i("b-col",{attrs:{md:"6",xl:"4"}},[i("b-card",{attrs:{"img-src":e("HWDp"),overlay:"","text-variant":"white","img-alt":"card img","body-class":"bg-overlay"}},[i("b-card-title",{staticClass:"text-white"},[t._v("\n          Card title\n        ")]),t._v(" "),i("b-card-text",[t._v("\n          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.\n        ")]),t._v(" "),i("b-card-text",[i("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])],1)],1)],1)],1)}),[],!1,null,null,null).exports,j={components:{BRow:c.a,BCol:d.a,BCard:i.a,BCardText:r.a,BCardTitle:o.a},data:function(){return{solidColor:[{bg:"primary",title:"Primary card title"},{bg:"secondary",title:"Secondary card title"},{bg:"success",title:"Success card title"},{bg:"danger",title:"Danger card title"},{bg:"warning",title:"Warning card title"},{bg:"info",title:"Info card title"}]}}},N=Object(v.a)(j,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{attrs:{id:"card-style-variation"}},[e("h5",{staticClass:"mt-3 mb-2"},[t._v("\n    Style Variation\n  ")]),t._v(" "),e("b-row",t._l(t.solidColor,(function(a,i){return e("b-col",{key:i,attrs:{md:"6",xl:"4"}},[e("b-card",{attrs:{"bg-variant":a.bg,"text-variant":"white"}},[e("b-card-title",{staticClass:"text-white"},[t._v("\n          "+t._s(a.title)+"\n        ")]),t._v(" "),e("b-card-text",[t._v("\n          Some quick example text to build on the card title and make up.\n        ")])],1)],1)})),1),t._v(" "),e("b-row",t._l(t.solidColor,(function(a,i){return e("b-col",{key:i,attrs:{md:"6",xl:"4"}},[e("b-card",{staticClass:"shadow-none",attrs:{"border-variant":a.bg,title:a.title,"bg-variant":"transparent"}},[e("b-card-text",[t._v("\n          Some quick example text to build on the card title and make up.\n        ")])],1)],1)})),1)],1)}),[],!1,null,null,null).exports,E=e("XM6M"),G=e("Zw+I"),I={components:{BRow:c.a,BCol:d.a,BCardGroup:E.a,BCard:i.a,BCardText:r.a,BCardFooter:G.a,BCardBody:n.a,BCardTitle:o.a}},A=Object(v.a)(I,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("b-row",[i("b-col",{attrs:{cols:"12"}},[i("h6",{staticClass:"my-3 text-muted"},[t._v("\n      Card Groups\n    ")])]),t._v(" "),i("b-col",{attrs:{cols:"12"}},[i("b-card-group",{staticClass:"mb-0"},[i("b-card",{attrs:{"img-src":e("rmFA"),"img-alt":"Card image cap","img-top":"","no-body":""}},[i("b-card-body",[i("b-card-title",[t._v("Card title")]),t._v(" "),i("b-card-text",[t._v("\n            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.\n          ")])],1),t._v(" "),i("b-card-footer",[i("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])],1),t._v(" "),i("b-card",{attrs:{"img-src":e("RA0o"),"img-alt":"Card image cap","img-top":"","no-body":""}},[i("b-card-body",[i("b-card-title",[t._v("Card title")]),t._v(" "),i("b-card-text",[t._v("\n            This card has supporting text below as a natural lead-in to additional content.\n          ")])],1),t._v(" "),i("b-card-footer",[i("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])],1),t._v(" "),i("b-card",{attrs:{"img-src":e("3BK4"),"img-alt":"Card image cap","img-top":"","no-body":""}},[i("b-card-body",[i("b-card-title",[t._v("Card title")]),t._v(" "),i("b-card-text",[t._v("\n            This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.\n          ")])],1),t._v(" "),i("b-card-footer",[i("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])],1)],1)],1)],1)}),[],!1,null,null,null).exports,W={components:{BRow:c.a,BCol:d.a,BCardGroup:E.a,BCard:i.a,BCardText:r.a,BCardTitle:o.a,BCardFooter:G.a,BCardBody:n.a}},D=Object(v.a)(W,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("b-row",[i("b-col",{attrs:{cols:"12"}},[i("h6",{staticClass:"my-3 text-muted"},[t._v("\n      Card Decks\n    ")])]),t._v(" "),i("b-col",{attrs:{cols:"12"}},[i("b-card-group",{staticClass:"mb-0",attrs:{deck:""}},[i("b-card",{attrs:{"img-src":e("3BK4"),"img-alt":"Card image cap","img-top":"","no-body":""}},[i("b-card-body",[i("b-card-title",[t._v("Card title")]),t._v(" "),i("b-card-text",[t._v("\n            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.\n          ")])],1),t._v(" "),i("b-card-footer",[i("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])],1),t._v(" "),i("b-card",{attrs:{"img-src":e("fezf"),"img-alt":"Card image cap","img-top":"","no-body":""}},[i("b-card-body",[i("b-card-title",[t._v("Card title")]),t._v(" "),i("b-card-text",[t._v("\n            This card has supporting text below as a natural lead-in to additional content.\n          ")])],1),t._v(" "),i("b-card-footer",[i("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])],1),t._v(" "),i("b-card",{attrs:{"img-src":e("rmFA"),"img-alt":"Card image cap","img-top":"","no-body":""}},[i("b-card-body",[i("b-card-title",[t._v("Card title")]),t._v(" "),i("b-card-text",[t._v("\n            This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.\n          ")])],1),t._v(" "),i("b-card-footer",[i("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])],1)],1)],1)],1)}),[],!1,null,null,null).exports,F={components:{BRow:c.a,BCol:d.a,BCardGroup:E.a,BCard:i.a,BCardText:r.a},directives:{Ripple:u.a}},O={components:{CardTitle:_,CardContentTypes:x,CardHeaderFooter:y,CardTextAlignment:B,CardNavigation:L,CardImages:q,CardStyleVariation:N,CardBasicGroup:A,CardBasicDecks:D,CardBasicColumns:Object(v.a)(F,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("b-row",[i("b-col",{attrs:{cols:"12"}},[i("h6",{staticClass:"my-3 text-muted"},[t._v("\n      Card Columns\n    ")])]),t._v(" "),i("b-col",{attrs:{md:"12"}},[i("b-card-group",{attrs:{columns:""}},[i("b-card",{staticClass:"position-static",attrs:{"img-src":e("MsyD"),"img-top":"","img-alt":"card img",title:"Card title that wraps to a new line"}},[i("b-card-text",[t._v("\n          This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.\n        ")])],1),t._v(" "),i("b-card",{staticClass:"position-static"},[i("blockquote",{staticClass:"blockquote mb-0"},[i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.")]),t._v(" "),i("footer",{staticClass:"blockquote-footer"},[i("small",{staticClass:"text-muted"},[t._v("\n              Someone famous in\n              "),i("cite",{attrs:{title:"Source Title"}},[t._v("Source Title")])])])])]),t._v(" "),i("b-card",{staticClass:"position-static",attrs:{"img-src":e("rmFA"),"img-alt":"card img","img-top":"",title:"Card title"}},[i("b-card-text",[t._v("This card has supporting text below as a natural lead-in to additional content.")]),t._v(" "),i("b-card-text",[i("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])],1),t._v(" "),i("b-card",{staticClass:"position-static",attrs:{"text-variant":"white","bg-variant":"primary",align:"center"}},[i("blockquote",{staticClass:"blockquote mb-0"},[i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.")]),t._v(" "),i("footer",{staticClass:"blockquote-footer text-white opacity-75"},[i("small",[t._v("\n              Someone famous in\n              "),i("cite",{attrs:{title:"Source Title"}},[t._v("Source Title")])])])])]),t._v(" "),i("b-card",{staticClass:"position-static",attrs:{align:"center",title:"Card title"}},[i("b-card-text",[t._v("\n          This card has supporting text below as a natural lead-in to additional content.\n        ")]),t._v(" "),i("b-card-text",[i("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])],1),t._v(" "),i("b-card",{staticClass:"position-static",attrs:{overlay:"","img-src":e("fezf"),"img-alt":"overlay img"}}),t._v(" "),i("b-card",{staticClass:"position-static",attrs:{align:"right"}},[i("blockquote",{staticClass:"blockquote mb-0"},[i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.")]),t._v(" "),i("footer",{staticClass:"blockquote-footer"},[i("small",{staticClass:"text-muted"},[t._v("\n              Someone famous in\n              "),i("cite",{attrs:{title:"Source Title"}},[t._v("Source Title")])])])])]),t._v(" "),i("b-card",{staticClass:"position-static",attrs:{title:"Card title"}},[i("b-card-text",[t._v("\n          This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.\n        ")]),t._v(" "),i("b-card-text",[i("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])],1)],1)],1)],1)}),[],!1,null,null,null).exports}},z=Object(v.a)(O,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("card-title"),t._v(" "),e("card-content-types"),t._v(" "),e("card-header-footer"),t._v(" "),e("card-text-alignment"),t._v(" "),e("card-navigation"),t._v(" "),e("card-images"),t._v(" "),e("card-style-variation"),t._v(" "),e("h5",{staticClass:"mt-3 mb-0"},[t._v("\n    Card Layout\n  ")]),t._v(" "),e("card-basic-group"),t._v(" "),e("card-basic-decks"),t._v(" "),e("card-basic-columns")],1)}),[],!1,null,null,null);a.default=z.exports},RA0o:function(t,a){t.exports="/images/_/_/_/_/kookospizza/resources/js/src/assets/images/slider/05.jpg"},rmFA:function(t,a){t.exports="/images/_/_/_/_/kookospizza/resources/js/src/assets/images/slider/01.jpg"}}]);
(this["webpackJsonpcuriosity-collection"]=this["webpackJsonpcuriosity-collection"]||[]).push([[0],{49:function(e,n,t){},50:function(e,n,t){},52:function(e,n,t){"use strict";t.r(n);var r=t(2),i=t(1),a=t.n(i),o=t(29),c=t.n(o),s=(t(49),t(33)),l=t(74),d=(t(50),t(73)),u=t(32),m=t(75),h=t(76),j=function(e){var n=e.entry,t={root:{color:"#025F52",fontWeight:u.c.semibold}},i={root:{color:"#333333",fontWeight:u.c.regular}};return Object(r.jsxs)(d.a,{"aria-label":"Clickable horizontal card ",horizontal:!0,onClick:function(){console.log("Clicked")},tokens:{childrenMargin:12},children:[Object(r.jsx)(d.a.Item,{fill:!0,children:Object(r.jsx)(m.a,{src:"https://placehold.it/180x135",alt:"Placeholder image."})}),Object(r.jsxs)(d.a.Section,{children:[Object(r.jsx)(h.a,{variant:"medium",styles:t,children:n.name}),Object(r.jsx)(h.a,{styles:i,children:Object(r.jsx)("pre",{id:"json",children:JSON.stringify(n.taxonomy,void 0,2)})})]})]})},p=function(e){var n=e.header,t=e.entries;return Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{style:{fontWeight:"bold"},children:n}),Object(r.jsx)(l.a,{horizontal:!0,wrap:!0,tokens:{childrenGap:10},children:t.map((function(e){return Object(r.jsx)(j,{entry:e})}))})]})},f=function(e){var n=e.entries,t=e.groupLevel,i=n.map((function(e){return e.taxonomy[t]})).filter((function(e,n,t){return t.indexOf(e)===n})).map((function(e){return{groupName:e||"Not Specified",entries:n.filter((function(n){return n.taxonomy[t]===e}))}}));return Object(r.jsx)(l.a,{tokens:{childrenGap:10},children:i.map((function(e){return Object(r.jsx)(p,{entries:e.entries,header:e.groupName})}))})},g=t(72),x=function(e){return e.split(" ").map((function(e){return e.length>0?e[0].toUpperCase()+e.substr(1).toLowerCase():e})).join(" ")},b=["kingdom","phylum","class","order","family","genus","species"],y=function(e){var n,t=e.selectedLevel,i=e.setSelectedLevel,a=function(e){return b[e]};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"groupLevelSliderContainer",style:{width:"30em"},children:[Object(r.jsx)(g.a,{label:"Grouping Level",min:0,max:b.length-1,defaultValue:(n=t,b.indexOf(n)),valueFormat:function(e){return x(a(e))},showValue:!0,snapToStep:!0,onChange:function(e){return i(a(e))},styles:{root:{paddingLeft:"0.1em"}}}),Object(r.jsxs)(l.a,{horizontal:!0,horizontalAlign:"space-between",style:{paddingLeft:"0.4em"},children:[b.map((function(e){return Object(r.jsx)(l.a.Item,{children:Object(r.jsx)(h.a,{styles:{root:{fontWeight:u.c.semibold}},children:x(e[0])})})})),Object(r.jsx)(l.a.Item,{children:"\xa0"})]})]})})};var O=function(){var e=i.useState("kingdom"),n=Object(s.a)(e,2),t=n[0],a=n[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l.a,{horizontal:!0,tokens:{childrenGap:10},children:Object(r.jsx)(y,{selectedLevel:t,setSelectedLevel:a})}),Object(r.jsx)(f,{entries:[{name:"Spider",taxonomy:{kingdom:"Animalia",phylum:"Arthropoda",class:"Arachnida",order:"Araneae"}},{name:"Scorpion",taxonomy:{kingdom:"Animalia",phylum:"Arthropoda",class:"Arachnida",order:"Scorpiones"}},{name:"Hawk",taxonomy:{kingdom:"Animalia",phylum:"Chordata",class:"Aves",order:"Accipitriformes",family:"Accipitridae"}},{name:"Bluejay",taxonomy:{kingdom:"Animalia",phylum:"Chordata",class:"Aves",order:"Passeriformes",family:"Corvidae",genus:"Cyanocitta",species:"cristata"}},{name:"Chickadee",taxonomy:{kingdom:"Animalia",phylum:"Chordata",class:"Aves",order:"Passeriformes",family:"Paridae",genus:"Poecile"}},{name:"Turtle",taxonomy:{kingdom:"Animalia",phylum:"Chordata",class:"Reptilia",order:"Testudines"}}],groupLevel:t})]})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,78)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),r(e),i(e),a(e),o(e)}))};c.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root")),v()}},[[52,1,2]]]);
//# sourceMappingURL=main.d71fdf69.chunk.js.map
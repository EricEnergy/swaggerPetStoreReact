(this["webpackJsonppetstore-react"]=this["webpackJsonppetstore-react"]||[]).push([[0],{54:function(t,e,n){},56:function(t,e,n){},74:function(t,e,n){},75:function(t,e,n){},85:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n(0),r=n.n(c),s=n(15),i=n.n(s),d=(n(54),n(16)),j=n(5),o=n(21),l=n(26),h=n.n(l),b=n(40),u=n(29),O=(n(56),n(41)),x=n.n(O),v=function(t){var e="https://petstore.swagger.io/v2/pet/findByStatus?status=".concat(t);return x()({url:e,method:"GET"})},f=n(87),m=n(88);var p=function(){var t=Object(c.useState)(),e=Object(u.a)(t,2),n=e[0],r=e[1],s=Object(c.useState)(!0),i=Object(u.a)(s,2),d=i[0],j=i[1];Object(c.useEffect)((function(){function t(){return(t=Object(b.a)(h.a.mark((function t(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v("available");case 2:return e=t.sent,t.next=5,r(e.data);case 5:j(!1);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var l=function(t){var e=Object(o.a)(n),a=parseInt(t.target.dataset.id);e.find((function(t,e){return e===a})).status="sold",r(e)};return Object(a.jsxs)(c.Fragment,{children:[Object(a.jsx)("h4",{className:"text-center",children:"Functional Component "}),Object(a.jsxs)(m.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Index"}),Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Catagory"}),Object(a.jsx)("th",{children:"Status"}),Object(a.jsx)("th",{children:"Button"})]})}),Object(a.jsx)("tbody",{children:d?"Loading...":n.map((function(t,e){var n;return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e}),Object(a.jsx)("td",{children:t.name?t.name:"N/A"}),Object(a.jsx)("td",{children:(null===(n=t.category)||void 0===n?void 0:n.name)?t.category.name:"N/A"}),Object(a.jsx)("td",{children:t.status}),Object(a.jsx)("td",{children:Object(a.jsx)(f.a,{"data-id":e,variant:"available"===t.status?"primary":"secondary",onClick:l,children:"available"===t.status?"Purchase":"Sold"})})]},e)}))})]})]})},g=n(42),y=n(43),k=n(48),C=n(47),S=(n(74),function(t){Object(k.a)(n,t);var e=Object(C.a)(n);function n(t){var c;return Object(g.a)(this,n),(c=e.call(this,t)).renderTable=function(){return c.state.inventoryList.map((function(t,e){var n;return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e}),Object(a.jsx)("td",{children:t.name?t.name:"N/A"}),Object(a.jsx)("td",{children:(null===(n=t.category)||void 0===n?void 0:n.name)?t.category.name:"N/A"}),Object(a.jsx)("td",{children:t.status}),Object(a.jsx)("td",{children:Object(a.jsx)(f.a,{"data-id":e,variant:"available"===t.status?"primary":"secondary",onClick:c.onButtonChange,children:"available"===t.status?"Purchase":"Sold"})})]})}))},c.onButtonChange=function(t){var e=Object(o.a)(c.state.inventoryList),n=parseInt(t.target.dataset.id);e.find((function(t,e){return e===n})).status="sold",c.setState({inventoryList:e})},c.state={inventoryList:{},loading:!0},c}return Object(y.a)(n,[{key:"componentDidMount",value:function(){var t=this;v("available").then((function(t){return t.data})).then((function(e){t.setState({inventoryList:e}),t.setState({loading:!1})}))}},{key:"render",value:function(){return Object(a.jsxs)(c.Fragment,{children:[Object(a.jsx)("h4",{className:"text-center",children:"Class Component "}),Object(a.jsxs)(m.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Index"}),Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Catagory"}),Object(a.jsx)("th",{children:"Status"}),Object(a.jsx)("th",{children:"Button"})]})}),Object(a.jsx)("tbody",{children:this.state.loading?"Loading...":this.renderTable()})]})]})}}]),n}(c.Component)),N=(n(75),n(89)),L=n(90);var B=function(){return Object(a.jsxs)(N.a,{bg:"dark",variant:"dark",children:[Object(a.jsx)(N.a.Brand,{children:"Pet Store"}),Object(a.jsxs)(L.a,{className:"mr-auto",children:[Object(a.jsx)(d.b,{className:"nav-link",to:"/",children:"Dashboard (Functional)  "}),Object(a.jsx)(d.b,{className:"nav-link",children:"|"}),Object(a.jsx)(d.b,{className:"nav-link",to:"/dashboard2",children:"Dashboard (Class)"})]})]})};n(84);var F=function(){return Object(a.jsxs)(d.a,{children:[Object(a.jsx)(B,{}),Object(a.jsx)(j.a,{exact:!0,path:"/",component:p}),Object(a.jsx)(j.a,{path:"/dashboard2",component:S})]})},I=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,91)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(F,{})}),document.getElementById("root")),I()}},[[85,1,2]]]);
//# sourceMappingURL=main.ffeedfd0.chunk.js.map
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(e,t,a){e.exports=a(32)},16:function(e,t,a){},17:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),s=(a(16),a(1)),o=(a(17),a(2)),i=a(5),u=a.n(i);u.a.setAppElement("body");var m={content:{bottom:"auto",minHeight:"10rem",left:"50%",padding:"2rem",position:"fixed",right:"auto",top:"50%",transform:"translate(-50%,-50%)",minWidth:"20rem",width:"80%",maxWidth:"60rem"}};function p(e){var t=e.columns,a=e.data,l=e.extraData,c=(e.modal,e.clicker),i=Object(n.useState)(""),u=Object(s.a)(i,2),m=u[0],p=u[1],d=Object(o.useTable)({columns:t,data:a,initialState:{sortBy:[{id:"title",desc:!1}]}},o.useFilters,o.useSortBy,o.usePagination),g=d.getTableProps,b=d.getTableBodyProps,f=d.headerGroups,E=d.page,h=d.prepareRow,v=d.setFilter,O=d.canPreviousPage,j=d.canNextPage,y=d.pageOptions,P=d.gotoPage,S=d.nextPage,w=d.previousPage,N=d.state.pageIndex;return r.a.createElement("div",{className:"movies"},r.a.createElement("input",{className:"search",value:m||"",onChange:function(e){var t=e.target.value||void 0;v("title",t),p(t)},placeholder:"Search title"}),r.a.createElement("table",Object.assign({className:"main-table"},g()),r.a.createElement("thead",null,f.map((function(e){return r.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return r.a.createElement("th",Object.assign({className:e.isSorted?e.isSortedDesc?"up":"down":""},e.getHeaderProps(e.getSortByToggleProps())),e.render("Header"),e.isSorted?e.isSortedDesc?r.a.createElement("span",{className:"uparrow"},"\u02c4"):r.a.createElement("span",{className:"downarrow"},"\u02c5"):"")})))}))),r.a.createElement("tbody",b(),E.map((function(e){return h(e),r.a.createElement("tr",Object.assign({onClick:function(){return c(l[e.id])}},e.getRowProps()),e.cells.map((function(e){return r.a.createElement("td",e.getCellProps(),e.render("Cell"))})))})))),r.a.createElement("div",{className:"pagination"},r.a.createElement("button",{onClick:function(){return w()},disabled:!O},"<")," ",r.a.createElement("button",{onClick:function(){return S()},disabled:!j},">")," ",r.a.createElement("span",null,"Page"," ",r.a.createElement("strong",null,N+1," of ",y.length)," "),r.a.createElement("span",null,"| Go to page:"," ",r.a.createElement("input",{type:"number",defaultValue:N+1,className:"goto",onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;P(t)}}))," "))}var d=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),o=Object(s.a)(c,2),i=o[0],d=o[1],g=Object(n.useState)([]),b=Object(s.a)(g,2),f=b[0],E=b[1],h=Object(n.useState)([]),v=Object(s.a)(h,2),O=v[0],j=v[1],y=r.a.useState(!1),P=Object(s.a)(y,2),S=P[0],w=P[1];function N(){w(!1)}return Object(n.useEffect)((function(){fetch("/getrows").then((function(e){return e.json()})).then((function(e){l(e.columns),d(e.data),E(e.extraData)}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(u.a,{isOpen:S,onRequestClose:N,contentLabel:"Example Modal",style:m},r.a.createElement("button",{className:"close",onClick:N},"X"),O),r.a.createElement(p,{columns:a,data:i,extraData:f,setData:d,clicker:function(e){for(var t=[],a=0;a<e.length;a++){var n=e[a];if("p"===n.type)t.push(r.a.createElement("p",{key:n.name},n.data));else if("h1"===n.type)t.push(r.a.createElement("h1",{key:n.name},n.data));else if("h2"===n.type)t.push(r.a.createElement("h2",{key:n.name},n.data));else if("img"===n.type)if(n.data.includes(",")){var l=n.data.split(",");t.push(r.a.createElement("img",{src:l[0],width:l[1]}))}else t.push(r.a.createElement("img",{src:n.data,width:"200"}))}j(r.a.createElement("div",null,t)),w(!0)}}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.01fe8491.chunk.js.map
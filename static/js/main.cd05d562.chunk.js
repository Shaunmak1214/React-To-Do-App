(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),l=(n(16),n(10)),i=n(2),s=n(3),d=n(6),u=n(5),f=(n(17),n(21));function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var v=o.a.createElement("g",{id:"info"}),h=o.a.createElement("g",{id:"icons"},o.a.createElement("path",{d:"M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z",id:"exit"})),b=function(e){var t=e.svgRef,n=e.title,a=p(e,["svgRef","title"]);return o.a.createElement("svg",m({style:{enableBackground:"new 0 0 24 24"},viewBox:"0 0 24 24",xmlSpace:"preserve",ref:t},a),n?o.a.createElement("title",null,n):null,v,h)},E=o.a.forwardRef((function(e,t){return o.a.createElement(b,m({svgRef:t},e))})),g=(n.p,function(e){var t=e.todos,n=e.deleteTodo,a=t.length?t.map((function(e){return o.a.createElement("div",{className:"collection-item",key:e.id},o.a.createElement("span",null,e.content),o.a.createElement(f.a,{onClick:function(){n(e.id)}},o.a.createElement(E,null),"..."))})):o.a.createElement("p",{className:"center"},"You have no todo's left!");return o.a.createElement("div",{className:"todos collection"},a)}),y=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={content:""},e.handleChange=function(t){e.setState({content:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.addTodo(e.state),e.setState({content:""})},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",null,"Add New Todo"),o.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.state.content})))}}]),n}(a.Component),O=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:[{id:1,content:"Study React"},{id:2,content:"Get good in react"},{id:3,content:"React is hard as hell bruv"}]},e.deleteTodo=function(t){var n=e.state.todos.filter((function(e){return e.id!==t}));e.setState({todos:n})},e.addTodo=function(t){t.id=Math.random();var n=[].concat(Object(l.a)(e.state.todos),[t]);e.setState({todos:n})},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"todo-app container"},o.a.createElement("h1",{className:"center blue-text"},"Todo's"),o.a.createElement(g,{todos:this.state.todos,deleteTodo:this.deleteTodo}),o.a.createElement(y,{addTodo:this.addTodo}))}}]),n}(a.Component);n(18);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(O,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.cd05d562.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),i=(n(15),n(8)),s=n(1),u=n(2),l=n(4),m=n(3),p=n(5),d=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(){this.props.inputElement.current.focus()}},{key:"render",value:function(){return r.a.createElement("div",{className:"todoListMain"},r.a.createElement("div",{className:"header"},r.a.createElement("form",{onSubmit:this.props.addItem},r.a.createElement("input",{placeholder:"Enter Item",ref:this.props.inputElement,value:this.props.currentItem.text,onChange:this.props.handleInput}),r.a.createElement("button",{type:"submit"}," + "))))}}]),t}(a.Component),h=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).createItems=function(e){return r.a.createElement("li",{key:e.key,onClick:function(){return n.props.deleteItem(e.key)}},e.text)},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.data.map(this.createItems);return r.a.createElement("ul",{className:"theList"},e)}}]),t}(a.Component),f=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).inputElement=r.a.createRef(),e.deleteItem=function(t){var n=e.state.items.filter(function(e){return e.key!==t});e.setState({items:n}),console.log("Item deleted!")},e.handleInput=function(t){var n={text:t.target.value,key:Date.now()};e.setState({currentItem:n})},e.addItem=function(t){t.preventDefault();var n=e.state.currentItem;if(""!==n.text){var a=Object(i.a)(e.state.items).concat([n]);console.log(n),e.setState({items:a,currentItem:{text:"",key:""}})}console.log("Item successfully added!")},e.state={items:[],currentItem:{text:"",key:""}},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,{addItem:this.addItem,inputElement:this.inputElement,handleInput:this.handleInput,currentItem:this.state.currentItem}),r.a.createElement(h,{data:this.state.items,deleteItem:this.deleteItem}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(17)}},[[9,2,1]]]);
//# sourceMappingURL=main.86324995.chunk.js.map
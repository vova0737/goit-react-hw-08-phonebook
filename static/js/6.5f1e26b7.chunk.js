(this["webpackJsonpgoit-react-hw"]=this["webpackJsonpgoit-react-hw"]||[]).push([[6],{90:function(e,a,t){"use strict";t.r(a);var n=t(1),s=t(35),r=t(36),l=t(38),i=t(37),c=t(0),o=t(9),h=t(25),m=t(16),u=t(2),b=function(e){Object(l.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).state={name:"",email:"",password:""},e.handleChange=function(a){var t=a.target,s=t.name,r=t.value;e.setState(Object(n.a)({},s,r))},e.handleSubmit=function(a){a.preventDefault(),e.props.onRegister(e.state),e.setState({name:"",email:"",password:""})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,n=e.password;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"Title",children:"Enter your data"}),Object(u.jsxs)("form",{onSubmit:this.handleSubmit,className:"Form",autoComplete:"off",children:[Object(u.jsx)("label",{htmlFor:"name",className:"Label",children:"Name"}),Object(u.jsx)("input",{className:"Input",type:"text",name:"name",value:a,onChange:this.handleChange}),Object(u.jsx)("label",{htmlFor:"email",className:"Label",children:"Email"}),Object(u.jsx)("input",{className:"Input",type:"email",name:"email",value:t,onChange:this.handleChange}),Object(u.jsx)("label",{htmlFor:"password",className:"Label",children:"Password"}),Object(u.jsx)("input",{className:"Input",type:"password",name:"password",value:n,onChange:this.handleChange}),Object(u.jsx)("button",{className:"Button",type:"submit",children:"Sign up"})]})]})}}]),t}(c.Component),p={onRegister:h.a.register};a.default=Object(o.b)((function(e){return{error:m.a.getError(e),isLoadingAuth:m.a.getLoading(e)}}),p)(b)}}]);
//# sourceMappingURL=6.5f1e26b7.chunk.js.map
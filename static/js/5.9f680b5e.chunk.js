(this["webpackJsonpgoit-react-hw"]=this["webpackJsonpgoit-react-hw"]||[]).push([[5],{91:function(e,a,t){"use strict";t.r(a);var n=t(1),s=t(35),r=t(36),l=t(38),o=t(37),i=t(0),c=t(9),h=t(25),u=t(16),m=t(2),b=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=a.call.apply(a,[this].concat(l))).state={email:"",password:""},e.handleChange=function(a){var t=a.target,s=t.name,r=t.value;e.setState(Object(n.a)({},s,r))},e.handleSubmit=function(a){a.preventDefault(),e.props.onLogin(e.state),e.setState({name:"",email:"",password:""})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:"Title",children:"Enter your data"}),Object(m.jsxs)("form",{className:"Form",onSubmit:this.handleSubmit,autoComplete:"off",children:[Object(m.jsx)("label",{htmlFor:"email",className:"Label",children:"Email"}),Object(m.jsx)("input",{className:"Input",type:"email",name:"email",value:a,onChange:this.handleChange}),Object(m.jsx)("label",{htmlFor:"password",className:"Label",children:"Password"}),Object(m.jsx)("input",{className:"Input",type:"password",name:"password",value:t,onChange:this.handleChange}),Object(m.jsx)("button",{className:"Button",type:"submit",children:"Login"})]})]})}}]),t}(i.Component),p={onLogin:h.a.logIn};a.default=Object(c.b)((function(e){return{error:u.a.getError(e),isLoadingAuth:u.a.getLoading(e)}}),p)(b)}}]);
//# sourceMappingURL=5.9f680b5e.chunk.js.map
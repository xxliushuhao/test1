"use strict";(self["webpackChunkliu_vue"]=self["webpackChunkliu_vue"]||[]).push([[838],{2838:function(s,e,t){t.r(e),t.d(e,{default:function(){return p}});var a=function(){var s=this,e=s._self._c;return e("div",{staticClass:"login-container"},[e("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:s.loginForm,rules:s.loginRules,"auto-complete":"on","label-position":"left"}},[e("div",{staticClass:"title-container"},[e("h3",{staticClass:"title"},[s._v("登录")])]),e("el-form-item",{attrs:{prop:"username"}},[e("span",{staticClass:"svg-container"},[e("svg-icon",{attrs:{"icon-class":"user"}})],1),e("el-input",{ref:"username",staticClass:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:s.loginForm.username,callback:function(e){s.$set(s.loginForm,"username",e)},expression:"loginForm.username"}})],1),e("el-form-item",{attrs:{prop:"password"}},[e("span",{staticClass:"svg-container"},[e("svg-icon",{attrs:{"icon-class":"password"}})],1),e("el-input",{key:s.passwordType,ref:"password",staticClass:"password",attrs:{type:s.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&s._k(e.keyCode,"enter",13,e.key,"Enter")?null:s.handleLogin.apply(null,arguments)}},model:{value:s.loginForm.password,callback:function(e){s.$set(s.loginForm,"password",e)},expression:"loginForm.password"}}),e("span",{staticClass:"show-pwd",on:{click:s.showPwd}},[e("svg-icon",{attrs:{"icon-class":"password"===s.passwordType?"eye":"eye-open"}})],1)],1),e("el-button",{staticStyle:{width:"30%","margin-bottom":"30px","margin-left":"36%"},attrs:{loading:s.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),s.handleLogin.apply(null,arguments)}}},[s._v("登录")]),e("div",{staticClass:"tips"},[e("span",{staticStyle:{"margin-left":"35%","font-size":"8px",color:"white"}},[s._v("username: admin")]),e("span",{staticStyle:{"font-size":"8px",color:"white"}},[s._v(" password: any")])])],1)],1)},o=[],n=(t(1703),t(9176),{name:"MyLogin",data(){return{loginForm:{username:"admin",password:"111111"},loginRules:{},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(s){this.redirect=s.query&&s.query.redirect},immediate:!0}},methods:{showPwd(){"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((()=>{this.$refs.password.focus()}))},handleLogin(){this.$refs.loginForm.validate((s=>{if(!s)return console.log("error submit!!"),!1;this.loading=!0,this.$store.dispatch("user/login",this.loginForm).then((()=>{this.$router.push({path:this.redirect||"/"}),this.loading=!1})).catch((()=>{this.loading=!1}))}))}}}),r=n,i=t(1001),l=(0,i.Z)(r,a,o,!1,null,"65ac7eff",null),p=l.exports}}]);
//# sourceMappingURL=838.d2f957b8.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"4JY7":function(e,t,i){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e}).apply(this,arguments)}i.r(t);var n=Object.prototype.hasOwnProperty;var a,c,o,d=(a=!1,c=[],o={resolved:function(){return a},resolve:function(e){if(!a){a=!0;for(var t=0,i=c.length;t<i;t++)c[t](e)}},promise:{then:function(e){a?e():c.push(e)}}},{notify:function(){o.resolve()},wait:function(){return o.promise},render:function(e,t,i){this.wait().then((function(){i(window.grecaptcha.render(e,t))}))},reset:function(e){void 0!==e&&(this.assertLoaded(),this.wait().then((function(){return window.grecaptcha.reset(e)})))},execute:function(e){void 0!==e&&(this.assertLoaded(),this.wait().then((function(){return window.grecaptcha.execute(e)})))},checkRecaptchaLoad:function(){n.call(window,"grecaptcha")&&n.call(window.grecaptcha,"render")&&this.notify()},assertLoaded:function(){if(!o.resolved())throw new Error("ReCAPTCHA has not been loaded")}});"undefined"!=typeof window&&(window.vueRecaptchaApiLoaded=d.notify);var s={name:"VueRecaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String},badge:{type:String},type:{type:String},size:{type:String},tabindex:{type:String},loadRecaptchaScript:{type:Boolean,default:!1},recaptchaScriptId:{type:String,default:"__RECAPTCHA_SCRIPT"},recaptchaHost:{type:String,default:"www.google.com"},language:{type:String,default:""}},beforeMount:function(){if(this.loadRecaptchaScript&&!document.getElementById(this.recaptchaScriptId)){var e=document.createElement("script");e.id=this.recaptchaScriptId,e.src="https://"+this.recaptchaHost+"/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl="+this.language,e.async=!0,e.defer=!0,document.head.appendChild(e)}},mounted:function(){var e=this;d.checkRecaptchaLoad();var t=r({},this.$props,{callback:this.emitVerify,"expired-callback":this.emitExpired,"error-callback":this.emitError}),i=this.$slots.default?this.$el.children[0]:this.$el;d.render(i,t,(function(t){e.$widgetId=t,e.$emit("render",t)}))},methods:{reset:function(){d.reset(this.$widgetId)},execute:function(){d.execute(this.$widgetId)},emitVerify:function(e){this.$emit("verify",e)},emitExpired:function(){this.$emit("expired")},emitError:function(){this.$emit("error")}},render:function(e){return e("div",{},this.$slots.default)}};t.default=s}}]);
!function(){function t(t,i,n){return(i=r(i))in t?Object.defineProperty(t,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[i]=n,t}function i(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */i=function(){return n};var t,n={},e=Object.prototype,o=e.hasOwnProperty,r=Object.defineProperty||function(t,i,n){t[i]=n.value},a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,i,n){return Object.defineProperty(t,i,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[i]}try{u({},"")}catch(t){u=function(t,i,n){return t[i]=n}}function p(t,i,n,e){var o=i&&i.prototype instanceof g?i:g,a=Object.create(o.prototype),s=new j(e||[]);return r(a,"_invoke",{value:I(t,n,s)}),a}function h(t,i,n){try{return{type:"normal",arg:t.call(i,n)}}catch(t){return{type:"throw",arg:t}}}n.wrap=p;var d="suspendedStart",f="executing",v="completed",m={};function g(){}function y(){}function b(){}var w={};u(w,s,function(){return this});var x=Object.getPrototypeOf,k=x&&x(x(F([])));k&&k!==e&&o.call(k,s)&&(w=k);var E=b.prototype=g.prototype=Object.create(w);function C(t){["next","throw","return"].forEach(function(i){u(t,i,function(t){return this._invoke(i,t)})})}function L(t,i){function n(e,r,a,s){var l=h(t[e],t,r);if("throw"!==l.type){var c=l.arg,u=c.value;return u&&"object"==typeof u&&o.call(u,"__await")?i.resolve(u.__await).then(function(t){n("next",t,a,s)},function(t){n("throw",t,a,s)}):i.resolve(u).then(function(t){c.value=t,a(c)},function(t){return n("throw",t,a,s)})}s(l.arg)}var e;r(this,"_invoke",{value:function(t,o){function r(){return new i(function(i,e){n(t,o,i,e)})}return e=e?e.then(r,r):r()}})}function I(i,n,e){var o=d;return function(r,a){if(o===f)throw new Error("Generator is already running");if(o===v){if("throw"===r)throw a;return{value:t,done:!0}}for(e.method=r,e.arg=a;;){var s=e.delegate;if(s){var l=z(s,e);if(l){if(l===m)continue;return l}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===d)throw o=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=f;var c=h(i,n,e);if("normal"===c.type){if(o=e.done?v:"suspendedYield",c.arg===m)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(o=v,e.method="throw",e.arg=c.arg)}}}function z(i,n){var e=n.method,o=i.iterator[e];if(o===t)return n.delegate=null,"throw"===e&&i.iterator.return&&(n.method="return",n.arg=t,z(i,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),m;var r=h(o,i.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,m;var a=r.arg;return a?a.done?(n[i.resultName]=a.value,n.next=i.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function O(t){var i={tryLoc:t[0]};1 in t&&(i.catchLoc=t[1]),2 in t&&(i.finallyLoc=t[2],i.afterLoc=t[3]),this.tryEntries.push(i)}function S(t){var i=t.completion||{};i.type="normal",delete i.arg,t.completion=i}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function F(i){if(i||""===i){var n=i[s];if(n)return n.call(i);if("function"==typeof i.next)return i;if(!isNaN(i.length)){var e=-1,r=function n(){for(;++e<i.length;)if(o.call(i,e))return n.value=i[e],n.done=!1,n;return n.value=t,n.done=!0,n};return r.next=r}}throw new TypeError(typeof i+" is not iterable")}return y.prototype=b,r(E,"constructor",{value:b,configurable:!0}),r(b,"constructor",{value:y,configurable:!0}),y.displayName=u(b,c,"GeneratorFunction"),n.isGeneratorFunction=function(t){var i="function"==typeof t&&t.constructor;return!!i&&(i===y||"GeneratorFunction"===(i.displayName||i.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},n.awrap=function(t){return{__await:t}},C(L.prototype),u(L.prototype,l,function(){return this}),n.AsyncIterator=L,n.async=function(t,i,e,o,r){void 0===r&&(r=Promise);var a=new L(p(t,i,e,o),r);return n.isGeneratorFunction(i)?a:a.next().then(function(t){return t.done?t.value:a.next()})},C(E),u(E,c,"Generator"),u(E,s,function(){return this}),u(E,"toString",function(){return"[object Generator]"}),n.keys=function(t){var i=Object(t),n=[];for(var e in i)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in i)return t.value=e,t.done=!1,t}return t.done=!0,t}},n.values=F,j.prototype={constructor:j,reset:function(i){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!i)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(i){if(this.done)throw i;var n=this;function e(e,o){return s.type="throw",s.arg=i,n.next=e,o&&(n.method="next",n.arg=t),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],s=a.completion;if("root"===a.tryLoc)return e("end");if(a.tryLoc<=this.prev){var l=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return e(a.catchLoc,!0);if(this.prev<a.finallyLoc)return e(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return e(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return e(a.finallyLoc)}}}},abrupt:function(t,i){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc<=this.prev&&o.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var r=e;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=i&&i<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=t,a.arg=i,r?(this.method="next",this.next=r.finallyLoc,m):this.complete(a)},complete:function(t,i){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&i&&(this.next=i),m},finish:function(t){for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),m}},catch:function(t){for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(i,n,e){return this.delegate={iterator:F(i),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=t),m}},n}function n(t,i,n,e,o,r,a){try{var s=t[r](a),l=s.value}catch(c){return void n(c)}s.done?i(l):Promise.resolve(l).then(e,o)}function e(t){return function(){var i=this,e=arguments;return new Promise(function(o,r){var a=t.apply(i,e);function s(t){n(a,o,r,s,l,"next",t)}function l(t){n(a,o,r,s,l,"throw",t)}s(void 0)})}}function o(t,i){for(var n=0;n<i.length;n++){var e=i[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,r(e.key),e)}}function r(t){var i=function(t,i){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var e=n.call(t,i||"default");if("object"!=typeof e)return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}(self.webpackChunkv2x_frontend=self.webpackChunkv2x_frontend||[]).push([[845],{845:function(n,r,a){"use strict";a.r(r),a.d(r,{ion_input:function(){return h}});var s=a(1429),l=a(2343),c=a(8931),u=a(1444),p=a(4881),h=function(){function n(t){var i=this;!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,n),(0,s.r)(this,t),this.ionInput=(0,s.e)(this,"ionInput",7),this.ionChange=(0,s.e)(this,"ionChange",7),this.ionBlur=(0,s.e)(this,"ionBlur",7),this.ionFocus=(0,s.e)(this,"ionFocus",7),this.ionStyle=(0,s.e)(this,"ionStyle",7),this.inputId="ion-input-"+d++,this.didBlurAfterEdit=!1,this.inheritedAttributes={},this.isComposing=!1,this.fireFocusEvents=!0,this.hasFocus=!1,this.autocapitalize="off",this.autocomplete="off",this.autocorrect="off",this.autofocus=!1,this.clearInput=!1,this.debounce=0,this.disabled=!1,this.name=this.inputId,this.readonly=!1,this.required=!1,this.spellcheck=!1,this.type="text",this.value="",this.onInput=function(t){var n=t.target;n&&(i.value=n.value||""),i.ionInput.emit(t)},this.onBlur=function(t){i.hasFocus=!1,i.focusChanged(),i.emitStyle(),i.fireFocusEvents&&i.ionBlur.emit(t)},this.onFocus=function(t){i.hasFocus=!0,i.focusChanged(),i.emitStyle(),i.fireFocusEvents&&i.ionFocus.emit(t)},this.onKeydown=function(t){i.shouldClearOnEdit()&&(i.didBlurAfterEdit&&i.hasValue()&&"Enter"!==t.key&&i.clearTextInput(),i.didBlurAfterEdit=!1)},this.onCompositionStart=function(){i.isComposing=!0},this.onCompositionEnd=function(){i.isComposing=!1},this.clearTextInput=function(t){i.clearInput&&!i.readonly&&!i.disabled&&t&&(t.preventDefault(),t.stopPropagation(),i.setFocus()),i.value="",i.nativeInput&&(i.nativeInput.value="")}}var r,a,h,f,v;return r=n,a=[{key:"debounceChanged",value:function(){this.ionChange=(0,u.h)(this.ionChange,this.debounce)}},{key:"disabledChanged",value:function(){this.emitStyle()}},{key:"placeholderChanged",value:function(){this.emitStyle()}},{key:"valueChanged",value:function(){var t=this.nativeInput,i=this.getValue();t&&t.value!==i&&!this.isComposing&&(t.value=i),this.emitStyle(),this.ionChange.emit({value:null==this.value?this.value:this.value.toString()})}},{key:"componentWillLoad",value:function(){this.inheritedAttributes=Object.assign(Object.assign({},(0,u.i)(this.el)),(0,u.j)(this.el,["tabindex","title","data-form-type"]))}},{key:"connectedCallback",value:function(){this.emitStyle(),this.debounceChanged(),document.dispatchEvent(new CustomEvent("ionInputDidLoad",{detail:this.el}))}},{key:"componentDidLoad",value:function(){var t=this.nativeInput;t&&(t.addEventListener("compositionstart",this.onCompositionStart),t.addEventListener("compositionend",this.onCompositionEnd))}},{key:"disconnectedCallback",value:function(){document.dispatchEvent(new CustomEvent("ionInputDidUnload",{detail:this.el}));var t=this.nativeInput;t&&(t.removeEventListener("compositionstart",this.onCompositionStart),t.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"setFocus",value:(v=e(i().mark(function t(){return i().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.nativeInput&&this.nativeInput.focus();case 1:case"end":return t.stop()}},t,this)})),function(){return v.apply(this,arguments)})},{key:"setBlur",value:(f=e(i().mark(function t(){return i().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.nativeInput&&this.nativeInput.blur();case 1:case"end":return t.stop()}},t,this)})),function(){return f.apply(this,arguments)})},{key:"getInputElement",value:function(){return Promise.resolve(this.nativeInput)}},{key:"shouldClearOnEdit",value:function(){var t=this.type,i=this.clearOnEdit;return void 0===i?"password"===t:i}},{key:"getValue",value:function(){return"number"==typeof this.value?this.value.toString():(this.value||"").toString()}},{key:"emitStyle",value:function(){this.ionStyle.emit({interactive:!0,input:!0,"has-placeholder":void 0!==this.placeholder,"has-value":this.hasValue(),"has-focus":this.hasFocus,"interactive-disabled":this.disabled})}},{key:"focusChanged",value:function(){!this.hasFocus&&this.shouldClearOnEdit()&&this.hasValue()&&(this.didBlurAfterEdit=!0)}},{key:"hasValue",value:function(){return this.getValue().length>0}},{key:"render",value:function(){var i=this,n=(0,c.b)(this),e=this.getValue(),o=this.inputId+"-lbl",r=(0,u.k)(this.el);return r&&(r.id=o),(0,s.h)(s.H,{"aria-disabled":this.disabled?"true":null,class:(0,p.c)(this.color,t(t(t(t({},n,!0),"has-value",this.hasValue()),"has-focus",this.hasFocus),"in-item-color",(0,p.h)("ion-item.ion-color",this.el)))},(0,s.h)("input",Object.assign({class:"native-input",ref:function(t){return i.nativeInput=t},"aria-labelledby":r?o:null,disabled:this.disabled,accept:this.accept,autoCapitalize:this.autocapitalize,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,autoFocus:this.autofocus,enterKeyHint:this.enterkeyhint,inputMode:this.inputmode,min:this.min,max:this.max,minLength:this.minlength,maxLength:this.maxlength,multiple:this.multiple,name:this.name,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readonly,required:this.required,spellcheck:this.spellcheck,step:this.step,size:this.size,type:this.type,value:e,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.onKeydown},this.inheritedAttributes)),this.clearInput&&!this.readonly&&!this.disabled&&(0,s.h)("button",{"aria-label":"reset",type:"button",class:"input-clear-icon",onPointerDown:function(t){t.preventDefault()},onClick:this.clearTextInput},(0,s.h)("ion-icon",{"aria-hidden":"true",icon:"ios"===n?l.b:l.d})))}},{key:"el",get:function(){return(0,s.i)(this)}}],h=[{key:"watchers",get:function(){return{debounce:["debounceChanged"],disabled:["disabledChanged"],placeholder:["placeholderChanged"],value:["valueChanged"]}}}],a&&o(r.prototype,a),h&&o(r,h),Object.defineProperty(r,"prototype",{writable:!1}),n}(),d=0;h.style={ios:".sc-ion-input-ios-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--background:transparent;--color:initial;display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;width:100%;padding:0 !important;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);z-index:2}ion-item.sc-ion-input-ios-h:not(.item-label),ion-item:not(.item-label) .sc-ion-input-ios-h{--padding-start:0}.ion-color.sc-ion-input-ios-h{color:var(--ion-color-base)}.native-input.sc-ion-input-ios{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-input.sc-ion-input-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-input.sc-ion-input-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-ios:invalid{-webkit-box-shadow:none;box-shadow:none}.native-input.sc-ion-input-ios::-ms-clear{display:none}.native-input[disabled].sc-ion-input-ios:not(.cloned-input){opacity:0.4}.cloned-input.sc-ion-input-ios{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-input-ios .cloned-input.sc-ion-input-ios,[dir=rtl].sc-ion-input-ios-h .cloned-input.sc-ion-input-ios,[dir=rtl] .sc-ion-input-ios-h .cloned-input.sc-ion-input-ios{left:unset;right:unset;right:0}.cloned-input.sc-ion-input-ios:disabled{opacity:1}.input-clear-icon.sc-ion-input-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:center;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:30px;height:30px;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;color:var(--ion-color-step-600, #666666);visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.in-item-color.sc-ion-input-ios-h .input-clear-icon.sc-ion-input-ios{color:inherit}.input-clear-icon.sc-ion-input-ios:focus{opacity:0.5}.has-value.sc-ion-input-ios-h .input-clear-icon.sc-ion-input-ios{visibility:visible}.has-focus.sc-ion-input-ios-h{pointer-events:none}.has-focus.sc-ion-input-ios-h input.sc-ion-input-ios,.has-focus.sc-ion-input-ios-h a.sc-ion-input-ios,.has-focus.sc-ion-input-ios-h button.sc-ion-input-ios{pointer-events:auto}.item-label-floating.item-has-placeholder.sc-ion-input-ios-h:not(.item-has-value),.item-label-floating.item-has-placeholder:not(.item-has-value) .sc-ion-input-ios-h{opacity:0}.item-label-floating.item-has-placeholder.sc-ion-input-ios-h:not(.item-has-value).item-has-focus,.item-label-floating.item-has-placeholder:not(.item-has-value).item-has-focus .sc-ion-input-ios-h{-webkit-transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.sc-ion-input-ios-h{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:0;font-size:inherit}.item-label-stacked.sc-ion-input-ios-h,.item-label-stacked .sc-ion-input-ios-h,.item-label-floating.sc-ion-input-ios-h,.item-label-floating .sc-ion-input-ios-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}.input-clear-icon.sc-ion-input-ios ion-icon.sc-ion-input-ios{width:18px;height:18px}",md:".sc-ion-input-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--background:transparent;--color:initial;display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;width:100%;padding:0 !important;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);z-index:2}ion-item.sc-ion-input-md-h:not(.item-label),ion-item:not(.item-label) .sc-ion-input-md-h{--padding-start:0}.ion-color.sc-ion-input-md-h{color:var(--ion-color-base)}.native-input.sc-ion-input-md{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-input.sc-ion-input-md{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-input.sc-ion-input-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-md:invalid{-webkit-box-shadow:none;box-shadow:none}.native-input.sc-ion-input-md::-ms-clear{display:none}.native-input[disabled].sc-ion-input-md:not(.cloned-input){opacity:0.4}.cloned-input.sc-ion-input-md{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-input-md .cloned-input.sc-ion-input-md,[dir=rtl].sc-ion-input-md-h .cloned-input.sc-ion-input-md,[dir=rtl] .sc-ion-input-md-h .cloned-input.sc-ion-input-md{left:unset;right:unset;right:0}.cloned-input.sc-ion-input-md:disabled{opacity:1}.input-clear-icon.sc-ion-input-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:center;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:30px;height:30px;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;color:var(--ion-color-step-600, #666666);visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.in-item-color.sc-ion-input-md-h .input-clear-icon.sc-ion-input-md{color:inherit}.input-clear-icon.sc-ion-input-md:focus{opacity:0.5}.has-value.sc-ion-input-md-h .input-clear-icon.sc-ion-input-md{visibility:visible}.has-focus.sc-ion-input-md-h{pointer-events:none}.has-focus.sc-ion-input-md-h input.sc-ion-input-md,.has-focus.sc-ion-input-md-h a.sc-ion-input-md,.has-focus.sc-ion-input-md-h button.sc-ion-input-md{pointer-events:auto}.item-label-floating.item-has-placeholder.sc-ion-input-md-h:not(.item-has-value),.item-label-floating.item-has-placeholder:not(.item-has-value) .sc-ion-input-md-h{opacity:0}.item-label-floating.item-has-placeholder.sc-ion-input-md-h:not(.item-has-value).item-has-focus,.item-label-floating.item-has-placeholder:not(.item-has-value).item-has-focus .sc-ion-input-md-h{-webkit-transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.sc-ion-input-md-h{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:8px;font-size:inherit}.item-label-stacked.sc-ion-input-md-h,.item-label-stacked .sc-ion-input-md-h,.item-label-floating.sc-ion-input-md-h,.item-label-floating .sc-ion-input-md-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0}.input-clear-icon.sc-ion-input-md ion-icon.sc-ion-input-md{width:22px;height:22px}"}},4881:function(n,o,r){"use strict";r.d(o,{c:function(){return s},g:function(){return l},h:function(){return a},o:function(){return u}});var a=function(t,i){return null!==i.closest(t)},s=function(i,n){return"string"==typeof i&&i.length>0?Object.assign(t({"ion-color":!0},"ion-color-".concat(i),!0),n):n},l=function(t){var i={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return i[t]=!0}),i},c=/^[a-z][a-z0-9+\-.]*:/,u=function(){var t=e(i().mark(function t(n,e,o,r){var a;return i().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null==n||"#"===n[0]||c.test(n)){t.next=4;break}if(!(a=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=e&&e.preventDefault(),a.push(n,o,r)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}},t)}));return function(i,n,e,o){return t.apply(this,arguments)}}()}}])}();
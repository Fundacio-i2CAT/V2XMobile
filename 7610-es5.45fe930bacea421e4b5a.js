!function(){function t(t,e,r){return(e=a(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var t,r={},n=Object.prototype,i=n.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function d(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,o=Object.create(i.prototype),s=new S(n||[]);return a(o,"_invoke",{value:O(t,r,s)}),o}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=d;var f="suspendedStart",h="executing",m="completed",v={};function g(){}function b(){}function y(){}var x={};l(x,s,function(){return this});var w=Object.getPrototypeOf,k=w&&w(w(C([])));k&&k!==n&&i.call(k,s)&&(x=k);var E=y.prototype=g.prototype=Object.create(x);function T(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function L(t,e){function r(n,a,o,s){var c=p(t[n],t,a);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&i.call(l,"__await")?e.resolve(l.__await).then(function(t){r("next",t,o,s)},function(t){r("throw",t,o,s)}):e.resolve(l).then(function(t){u.value=t,o(u)},function(t){return r("throw",t,o,s)})}s(c.arg)}var n;a(this,"_invoke",{value:function(t,i){function a(){return new e(function(e,n){r(t,i,e,n)})}return n=n?n.then(a,a):a()}})}function O(e,r,n){var i=f;return function(a,o){if(i===h)throw new Error("Generator is already running");if(i===m){if("throw"===a)throw o;return{value:t,done:!0}}for(n.method=a,n.arg=o;;){var s=n.delegate;if(s){var c=P(s,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===f)throw i=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=h;var u=p(e,r,n);if("normal"===u.type){if(i=n.done?m:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(i=m,n.method="throw",n.arg=u.arg)}}}function P(e,r){var n=r.method,i=e.iterator[n];if(i===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var a=p(i,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,v;var o=a.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function C(e){if(e||""===e){var r=e[s];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function r(){for(;++n<e.length;)if(i.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(typeof e+" is not iterable")}return b.prototype=y,a(E,"constructor",{value:y,configurable:!0}),a(y,"constructor",{value:b,configurable:!0}),b.displayName=l(y,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},T(L.prototype),l(L.prototype,c,function(){return this}),r.AsyncIterator=L,r.async=function(t,e,n,i,a){void 0===a&&(a=Promise);var o=new L(d(t,e,n,i),a);return r.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},T(E),l(E,u,"Generator"),l(E,s,function(){return this}),l(E,"toString",function(){return"[object Generator]"}),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=C,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;_(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:C(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},r}function r(t,e,r,n,i,a,o){try{var s=t[a](o),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,i)}function n(t){return function(){var e=this,n=arguments;return new Promise(function(i,a){var o=t.apply(e,n);function s(t){r(o,i,a,s,c,"next",t)}function c(t){r(o,i,a,s,c,"throw",t)}s(void 0)})}}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,a(n.key),n)}}function a(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(self.webpackChunkv2x_frontend=self.webpackChunkv2x_frontend||[]).push([[7610],{7610:function(r,a,o){"use strict";o.r(a),o.d(a,{ion_datetime_button:function(){return f}});var s=o(1429),c=o(8931),u=o(1444),l=o(3397),d=o(4881),p=o(3595),f=function(){function r(t){var i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(0,s.r)(this,t),this.datetimeEl=null,this.overlayEl=null,this.datetimePresentation="date-time",this.datetimeActive=!1,this.color="primary",this.disabled=!1,this.getParsedDateValues=function(t){return""===t||null==t?[]:Array.isArray(t)?t:[t]},this.setDateTimeText=function(){var t=i.datetimeEl,e=i.datetimePresentation;if(t){var r=t.value,n=t.locale,a=t.hourCycle,o=t.preferWheel,s=t.multiple,c=t.titleSelectedDatesFormatter,u=i.getParsedDateValues(r),d=(0,p.q)(u.length>0?u:[(0,p.t)()]),f=d[0],h=(0,p.J)(n,a);switch(d.forEach(function(t){t.tzOffset=void 0}),i.dateText=i.timeText=void 0,e){case"date-time":case"time-date":var m=(0,p.T)(n,f),v=(0,p.K)(n,f,h);o?i.dateText="".concat(m," ").concat(v):(i.dateText=m,i.timeText=v);break;case"date":if(s&&1!==u.length){var g="".concat(u.length," days");if(void 0!==c)try{g=c(u)}catch(b){(0,l.b)("Exception in provided `titleSelectedDatesFormatter`: ",b)}i.dateText=g}else i.dateText=(0,p.T)(n,f);break;case"time":i.timeText=(0,p.K)(n,f,h);break;case"month-year":i.dateText=(0,p.G)(n,f);break;case"month":i.dateText=(0,p.S)(n,f,{month:"long"});break;case"year":i.dateText=(0,p.S)(n,f,{year:"numeric"})}}},this.waitForDatetimeChanges=n(e().mark(function t(){var r;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.datetimeEl,t.abrupt("return",r?new Promise(function(t){(0,u.a)(r,"ionRender",t,{once:!0})}):Promise.resolve());case 2:case"end":return t.stop()}},t)})),this.handleDateClick=function(){var t=n(e().mark(function t(r){var n,a,o,s;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=i.datetimeEl,a=i.datetimePresentation,n){t.next=3;break}return t.abrupt("return");case 3:switch(o=!1,a){case"date-time":case"time-date":s="date"!==n.presentation,!n.preferWheel&&s&&(n.presentation="date",o=!0)}i.selectedButton="date",i.presentOverlay(r,o,i.dateTargetEl);case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),this.handleTimeClick=function(t){var e=i.datetimeEl,r=i.datetimePresentation;if(e){var n=!1;switch(r){case"date-time":case"time-date":"time"!==e.presentation&&(e.presentation="time",n=!0)}i.selectedButton="time",i.presentOverlay(t,n,i.timeTargetEl)}},this.presentOverlay=function(){var t=n(e().mark(function t(r,n,a){var o;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o=i.overlayEl,t.t0=o,!t.t0){t.next=12;break}if("ION-POPOVER"!==o.tagName){t.next=11;break}if(t.t1=n,!t.t1){t.next=8;break}return t.next=8,i.waitForDatetimeChanges();case 8:o.present(Object.assign(Object.assign({},r),{detail:{ionShadowTarget:a}})),t.next=12;break;case 11:o.present();case 12:case"end":return t.stop()}},t)}));return function(e,r,n){return t.apply(this,arguments)}}()}var a,o,f,h;return a=r,(o=[{key:"componentWillLoad",value:(h=n(e().mark(function t(){var r,n,i,a=this;return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=this.datetime){t.next=3;break}return t.abrupt("return",void(0,l.b)("An ID associated with an ion-datetime instance is required for ion-datetime-button to function properly.",this.el));case 3:if(n=this.datetimeEl=document.getElementById(r)){t.next=6;break}return t.abrupt("return",void(0,l.b)("No ion-datetime instance found for ID '".concat(r,"'."),this.el));case 6:new IntersectionObserver(function(t){a.datetimeActive=t[0].isIntersecting},{threshold:.01}).observe(n),(i=this.overlayEl=n.closest("ion-modal, ion-popover"))&&i.classList.add("ion-datetime-button-overlay"),(0,u.c)(n,function(){var t=a.datetimePresentation=n.presentation||"date-time";switch(a.setDateTimeText(),(0,u.a)(n,"ionChange",a.setDateTimeText),t){case"date-time":case"date":case"month-year":case"month":case"year":a.selectedButton="date";break;case"time-date":case"time":a.selectedButton="time"}});case 9:case"end":return t.stop()}},t,this)})),function(){return h.apply(this,arguments)})},{key:"render",value:function(){var e=this,r=this.color,n=this.dateText,i=this.timeText,a=this.selectedButton,o=this.datetimeActive,u=this.disabled,l=(0,c.b)(this);return(0,s.h)(s.H,{class:(0,d.c)(r,t(t(t({},l,!0),"".concat(a,"-active"),o),"datetime-button-disabled",u))},n&&(0,s.h)("button",{class:"ion-activatable",id:"date-button","aria-expanded":o?"true":"false",onClick:this.handleDateClick,disabled:u,part:"native",ref:function(t){return e.dateTargetEl=t}},(0,s.h)("slot",{name:"date-target"},n),"md"===l&&(0,s.h)("ion-ripple-effect",null)),i&&(0,s.h)("button",{class:"ion-activatable",id:"time-button","aria-expanded":o?"true":"false",onClick:this.handleTimeClick,disabled:u,part:"native",ref:function(t){return e.timeTargetEl=t}},(0,s.h)("slot",{name:"time-target"},i),"md"===l&&(0,s.h)("ion-ripple-effect",null)))}},{key:"el",get:function(){return(0,s.i)(this)}}])&&i(a.prototype,o),f&&i(a,f),Object.defineProperty(a,"prototype",{writable:!1}),r}();f.style={ios:":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;padding-left:12px;padding-right:12px;padding-top:6px;padding-bottom:6px;margin-left:2px;margin-right:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host button{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host button{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}",md:":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;padding-left:12px;padding-right:12px;padding-top:6px;padding-bottom:6px;margin-left:2px;margin-right:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host button{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host button{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}"}}}])}();
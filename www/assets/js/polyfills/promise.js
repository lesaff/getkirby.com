!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/assets/",r(r.s=39)}({2:function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},3:function(t,e){var r,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function s(t){if(r===setTimeout)return setTimeout(t,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(t){r=i}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(t){n=u}}();var c,a=[],f=!1,l=-1;function h(){f&&c&&(f=!1,c.length?a=c.concat(a):l=-1,a.length&&v())}function v(){if(!f){var t=s(h);f=!0;for(var e=a.length;e;){for(c=a,a=[];++l<e;)c&&c[l].run();l=-1,e=a.length}c=null,f=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function d(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];a.push(new p(t,e)),1!==a.length||f||s(v)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},39:function(t,e,r){t.exports=r(40)},4:function(t,e,r){(function(e,r){var n;n=function(){"use strict";function t(t){return"function"==typeof t}var n=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},o=0,i=void 0,u=void 0,s=function(t,e){p[o]=t,p[o+1]=e,2===(o+=2)&&(u?u(d):b())};var c="undefined"!=typeof window?window:void 0,a=c||{},f=a.MutationObserver||a.WebKitMutationObserver,l="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function v(){var t=setTimeout;return function(){return t(d,1)}}var p=new Array(1e3);function d(){for(var t=0;t<o;t+=2){(0,p[t])(p[t+1]),p[t]=void 0,p[t+1]=void 0}o=0}var y,_,m,w,b=void 0;function g(t,e){var r=this,n=new this.constructor(x);void 0===n[A]&&N(n);var o=r._state;if(o){var i=arguments[o-1];s(function(){return D(o,n,i,r._result)})}else Y(r,n,t,e);return n}function T(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(x);return C(e,t),e}l?b=function(){return e.nextTick(d)}:f?(_=0,m=new f(d),w=document.createTextNode(""),m.observe(w,{characterData:!0}),b=function(){w.data=_=++_%2}):h?((y=new MessageChannel).port1.onmessage=d,b=function(){return y.port2.postMessage(0)}):b=void 0===c?function(){try{var t=Function("return this")().require("vertx");return void 0!==(i=t.runOnLoop||t.runOnContext)?function(){i(d)}:v()}catch(t){return v()}}():v();var A=Math.random().toString(36).substring(2);function x(){}var j=void 0,E=1,O=2,P={error:null};function S(t){try{return t.then}catch(t){return P.error=t,P}}function M(e,r,n){r.constructor===e.constructor&&n===g&&r.constructor.resolve===T?function(t,e){e._state===E?k(t,e._result):e._state===O?F(t,e._result):Y(e,void 0,function(e){return C(t,e)},function(e){return F(t,e)})}(e,r):n===P?(F(e,P.error),P.error=null):void 0===n?k(e,r):t(n)?function(t,e,r){s(function(t){var n=!1,o=function(t,e,r,n){try{t.call(e,r,n)}catch(t){return t}}(r,e,function(r){n||(n=!0,e!==r?C(t,r):k(t,r))},function(e){n||(n=!0,F(t,e))},t._label);!n&&o&&(n=!0,F(t,o))},t)}(e,r,n):k(e,r)}function C(t,e){var r,n;t===e?F(t,new TypeError("You cannot resolve a promise with itself")):(n=typeof(r=e),null===r||"object"!==n&&"function"!==n?k(t,e):M(t,e,S(e)))}function L(t){t._onerror&&t._onerror(t._result),q(t)}function k(t,e){t._state===j&&(t._result=e,t._state=E,0!==t._subscribers.length&&s(q,t))}function F(t,e){t._state===j&&(t._state=O,t._result=e,s(L,t))}function Y(t,e,r,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+E]=r,o[i+O]=n,0===i&&t._state&&s(q,t)}function q(t){var e=t._subscribers,r=t._state;if(0!==e.length){for(var n=void 0,o=void 0,i=t._result,u=0;u<e.length;u+=3)n=e[u],o=e[u+r],n?D(r,n,o,i):o(i);t._subscribers.length=0}}function D(e,r,n,o){var i=t(n),u=void 0,s=void 0,c=void 0,a=void 0;if(i){if((u=function(t,e){try{return t(e)}catch(t){return P.error=t,P}}(n,o))===P?(a=!0,s=u.error,u.error=null):c=!0,r===u)return void F(r,new TypeError("A promises callback cannot return that same promise."))}else u=o,c=!0;r._state!==j||(i&&c?C(r,u):a?F(r,s):e===E?k(r,u):e===O&&F(r,u))}var K=0;function N(t){t[A]=K++,t._state=void 0,t._result=void 0,t._subscribers=[]}var U=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(x),this.promise[A]||N(this.promise),n(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?k(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&k(this.promise,this._result))):F(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===j&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var r=this._instanceConstructor,n=r.resolve;if(n===T){var o=S(t);if(o===g&&t._state!==j)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(r===W){var i=new r(x);M(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new r(function(e){return e(t)}),e)}else this._willSettleAt(n(t),e)},t.prototype._settledAt=function(t,e,r){var n=this.promise;n._state===j&&(this._remaining--,t===O?F(n,r):this._result[e]=r),0===this._remaining&&k(n,this._result)},t.prototype._willSettleAt=function(t,e){var r=this;Y(t,void 0,function(t){return r._settledAt(E,e,t)},function(t){return r._settledAt(O,e,t)})},t}();var W=function(){function t(e){this[A]=K++,this._result=this._state=void 0,this._subscribers=[],x!==e&&("function"!=typeof e&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof t?function(t,e){try{e(function(e){C(t,e)},function(e){F(t,e)})}catch(e){F(t,e)}}(this,e):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return t.prototype.catch=function(t){return this.then(null,t)},t.prototype.finally=function(t){var e=this.constructor;return this.then(function(r){return e.resolve(t()).then(function(){return r})},function(r){return e.resolve(t()).then(function(){throw r})})},t}();return W.prototype.then=g,W.all=function(t){return new U(this,t).promise},W.race=function(t){var e=this;return n(t)?new e(function(r,n){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(r,n)}):new e(function(t,e){return e(new TypeError("You must pass an array to race."))})},W.resolve=T,W.reject=function(t){var e=new this(x);return F(e,t),e},W._setScheduler=function(t){u=t},W._setAsap=function(t){s=t},W._asap=s,W.polyfill=function(){var t=void 0;if(void 0!==r)t=r;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=W},W.Promise=W,W},t.exports=n()}).call(e,r(3),r(2))},40:function(t,e,r){"use strict";var n=r(4);window.Promise=n.Promise}});
//# sourceMappingURL=promise.js.map
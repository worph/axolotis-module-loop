var q=Object.defineProperty;var me=Object.getOwnPropertyDescriptor;var qe=Object.getOwnPropertyNames;var He=Object.prototype.hasOwnProperty;var Xe=(h,n)=>{for(var i in n)q(h,i,{get:n[i],enumerable:!0})},Ye=(h,n,i,f)=>{if(n&&typeof n=="object"||typeof n=="function")for(let l of qe(n))!He.call(h,l)&&l!==i&&q(h,l,{get:()=>n[l],enumerable:!(f=me(n,l))||f.enumerable});return h};var Ze=h=>Ye(q({},"__esModule",{value:!0}),h),L=(h,n,i,f)=>{for(var l=f>1?void 0:f?me(n,i):n,y=h.length-1,b;y>=0;y--)(b=h[y])&&(l=(f?b(n,i,l):b(l))||l);return f&&l&&q(n,i,l),l},M=(h,n)=>(i,f)=>n(i,f,h);var ze={};Xe(ze,{AnimationFrameLoop:()=>H,AnimationFrameLoopFactory:()=>N,AnimationFrameLoopFactoryName:()=>J,AxLoopModule:()=>ee,FrameLoopManager:()=>j,FrameLoopManagerName:()=>T,SUFFIX_DELIMITER:()=>$e,SetIntervalLoop:()=>X,SetIntervalLoopFactory:()=>C,SetIntervalLoopFactoryName:()=>Q,SetTimeoutLoop:()=>Y,SetTimeoutLoopFactory:()=>P,SetTimeoutLoopFactoryName:()=>K,TimeLogger:()=>A,TimeLoggerName:()=>k});module.exports=Ze(ze);var pe;(function(h){(function(n){var i=typeof global=="object"?global:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),f=l(h);typeof i.Reflect>"u"?i.Reflect=h:f=l(i.Reflect,f),n(f);function l(y,b){return function(w,I){typeof y[w]!="function"&&Object.defineProperty(y,w,{configurable:!0,writable:!0,value:I}),b&&b(w,I)}}})(function(n){var i=Object.prototype.hasOwnProperty,f=typeof Symbol=="function",l=f&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",y=f&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",b=typeof Object.create=="function",w={__proto__:[]}instanceof Array,I=!b&&!w,S={create:b?function(){return z(Object.create(null))}:w?function(){return z({__proto__:null})}:function(){return z({})},has:I?function(e,t){return i.call(e,t)}:function(e,t){return t in e},get:I?function(e,t){return i.call(e,t)?e[t]:void 0}:function(e,t){return e[t]}},E=Object.getPrototypeOf(Function),O=typeof process=="object"&&process.env&&process.env.REFLECT_METADATA_USE_MAP_POLYFILL==="true",F=!O&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:We(),ye=!O&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:Ve(),ge=!O&&typeof WeakMap=="function"?WeakMap:Be(),B=new ge;function be(e,t,r,o){if(d(r)){if(!fe(e))throw new TypeError;if(!ue(t))throw new TypeError;return Ee(e,t)}else{if(!fe(e))throw new TypeError;if(!v(t))throw new TypeError;if(!v(o)&&!d(o)&&!R(o))throw new TypeError;return R(o)&&(o=void 0),r=_(r),Oe(e,t,r,o)}}n("decorate",be);function Le(e,t){function r(o,a){if(!v(o))throw new TypeError;if(!d(a)&&!Fe(a))throw new TypeError;oe(e,t,o,a)}return r}n("metadata",Le);function we(e,t,r,o){if(!v(r))throw new TypeError;return d(o)||(o=_(o)),oe(e,t,r,o)}n("defineMetadata",we);function _e(e,t,r){if(!v(t))throw new TypeError;return d(r)||(r=_(r)),te(e,t,r)}n("hasMetadata",_e);function Me(e,t,r){if(!v(t))throw new TypeError;return d(r)||(r=_(r)),Z(e,t,r)}n("hasOwnMetadata",Me);function Te(e,t,r){if(!v(t))throw new TypeError;return d(r)||(r=_(r)),re(e,t,r)}n("getMetadata",Te);function ke(e,t,r){if(!v(t))throw new TypeError;return d(r)||(r=_(r)),ne(e,t,r)}n("getOwnMetadata",ke);function Ie(e,t){if(!v(e))throw new TypeError;return d(t)||(t=_(t)),ae(e,t)}n("getMetadataKeys",Ie);function xe(e,t){if(!v(e))throw new TypeError;return d(t)||(t=_(t)),ie(e,t)}n("getOwnMetadataKeys",xe);function Se(e,t,r){if(!v(t))throw new TypeError;d(r)||(r=_(r));var o=D(t,r,!1);if(d(o)||!o.delete(e))return!1;if(o.size>0)return!0;var a=B.get(t);return a.delete(r),a.size>0||B.delete(t),!0}n("deleteMetadata",Se);function Ee(e,t){for(var r=e.length-1;r>=0;--r){var o=e[r],a=o(t);if(!d(a)&&!R(a)){if(!ue(a))throw new TypeError;t=a}}return t}function Oe(e,t,r,o){for(var a=e.length-1;a>=0;--a){var g=e[a],u=g(t,r,o);if(!d(u)&&!R(u)){if(!v(u))throw new TypeError;o=u}}return o}function D(e,t,r){var o=B.get(e);if(d(o)){if(!r)return;o=new F,B.set(e,o)}var a=o.get(t);if(d(a)){if(!r)return;a=new F,o.set(t,a)}return a}function te(e,t,r){var o=Z(e,t,r);if(o)return!0;var a=$(t);return R(a)?!1:te(e,a,r)}function Z(e,t,r){var o=D(t,r,!1);return d(o)?!1:Pe(o.has(e))}function re(e,t,r){var o=Z(e,t,r);if(o)return ne(e,t,r);var a=$(t);if(!R(a))return re(e,a,r)}function ne(e,t,r){var o=D(t,r,!1);if(!d(o))return o.get(e)}function oe(e,t,r,o){var a=D(r,o,!0);a.set(e,t)}function ae(e,t){var r=ie(e,t),o=$(e);if(o===null)return r;var a=ae(o,t);if(a.length<=0)return r;if(r.length<=0)return a;for(var g=new ye,u=[],c=0,s=r;c<s.length;c++){var m=s[c],p=g.has(m);p||(g.add(m),u.push(m))}for(var x=0,le=a;x<le.length;x++){var m=le[x],p=g.has(m);p||(g.add(m),u.push(m))}return u}function ie(e,t){var r=[],o=D(e,t,!1);if(d(o))return r;for(var a=o.keys(),g=Re(a),u=0;;){var c=De(g);if(!c)return r.length=u,r;var s=Ue(c);try{r[u]=s}catch(m){try{Ge(g)}finally{throw m}}u++}}function se(e){if(e===null)return 1;switch(typeof e){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return e===null?1:6;default:return 6}}function d(e){return e===void 0}function R(e){return e===null}function Ne(e){return typeof e=="symbol"}function v(e){return typeof e=="object"?e!==null:typeof e=="function"}function je(e,t){switch(se(e)){case 0:return e;case 1:return e;case 2:return e;case 3:return e;case 4:return e;case 5:return e}var r=t===3?"string":t===5?"number":"default",o=ce(e,l);if(o!==void 0){var a=o.call(e,r);if(v(a))throw new TypeError;return a}return Ce(e,r==="default"?"number":r)}function Ce(e,t){if(t==="string"){var r=e.toString;if(U(r)){var o=r.call(e);if(!v(o))return o}var a=e.valueOf;if(U(a)){var o=a.call(e);if(!v(o))return o}}else{var a=e.valueOf;if(U(a)){var o=a.call(e);if(!v(o))return o}var g=e.toString;if(U(g)){var o=g.call(e);if(!v(o))return o}}throw new TypeError}function Pe(e){return!!e}function Ae(e){return""+e}function _(e){var t=je(e,3);return Ne(t)?t:Ae(t)}function fe(e){return Array.isArray?Array.isArray(e):e instanceof Object?e instanceof Array:Object.prototype.toString.call(e)==="[object Array]"}function U(e){return typeof e=="function"}function ue(e){return typeof e=="function"}function Fe(e){switch(se(e)){case 3:return!0;case 4:return!0;default:return!1}}function ce(e,t){var r=e[t];if(r!=null){if(!U(r))throw new TypeError;return r}}function Re(e){var t=ce(e,y);if(!U(t))throw new TypeError;var r=t.call(e);if(!v(r))throw new TypeError;return r}function Ue(e){return e.value}function De(e){var t=e.next();return t.done?!1:t}function Ge(e){var t=e.return;t&&t.call(e)}function $(e){var t=Object.getPrototypeOf(e);if(typeof e!="function"||e===E||t!==E)return t;var r=e.prototype,o=r&&Object.getPrototypeOf(r);if(o==null||o===Object.prototype)return t;var a=o.constructor;return typeof a!="function"||a===e?t:a}function We(){var e={},t=[],r=function(){function u(c,s,m){this._index=0,this._keys=c,this._values=s,this._selector=m}return u.prototype["@@iterator"]=function(){return this},u.prototype[y]=function(){return this},u.prototype.next=function(){var c=this._index;if(c>=0&&c<this._keys.length){var s=this._selector(this._keys[c],this._values[c]);return c+1>=this._keys.length?(this._index=-1,this._keys=t,this._values=t):this._index++,{value:s,done:!1}}return{value:void 0,done:!0}},u.prototype.throw=function(c){throw this._index>=0&&(this._index=-1,this._keys=t,this._values=t),c},u.prototype.return=function(c){return this._index>=0&&(this._index=-1,this._keys=t,this._values=t),{value:c,done:!0}},u}();return function(){function u(){this._keys=[],this._values=[],this._cacheKey=e,this._cacheIndex=-2}return Object.defineProperty(u.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),u.prototype.has=function(c){return this._find(c,!1)>=0},u.prototype.get=function(c){var s=this._find(c,!1);return s>=0?this._values[s]:void 0},u.prototype.set=function(c,s){var m=this._find(c,!0);return this._values[m]=s,this},u.prototype.delete=function(c){var s=this._find(c,!1);if(s>=0){for(var m=this._keys.length,p=s+1;p<m;p++)this._keys[p-1]=this._keys[p],this._values[p-1]=this._values[p];return this._keys.length--,this._values.length--,c===this._cacheKey&&(this._cacheKey=e,this._cacheIndex=-2),!0}return!1},u.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=e,this._cacheIndex=-2},u.prototype.keys=function(){return new r(this._keys,this._values,o)},u.prototype.values=function(){return new r(this._keys,this._values,a)},u.prototype.entries=function(){return new r(this._keys,this._values,g)},u.prototype["@@iterator"]=function(){return this.entries()},u.prototype[y]=function(){return this.entries()},u.prototype._find=function(c,s){return this._cacheKey!==c&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=c)),this._cacheIndex<0&&s&&(this._cacheIndex=this._keys.length,this._keys.push(c),this._values.push(void 0)),this._cacheIndex},u}();function o(u,c){return u}function a(u,c){return c}function g(u,c){return[u,c]}}function Ve(){return function(){function e(){this._map=new F}return Object.defineProperty(e.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),e.prototype.has=function(t){return this._map.has(t)},e.prototype.add=function(t){return this._map.set(t,t),this},e.prototype.delete=function(t){return this._map.delete(t)},e.prototype.clear=function(){this._map.clear()},e.prototype.keys=function(){return this._map.keys()},e.prototype.values=function(){return this._map.values()},e.prototype.entries=function(){return this._map.entries()},e.prototype["@@iterator"]=function(){return this.keys()},e.prototype[y]=function(){return this.keys()},e}()}function Be(){var e=16,t=S.create(),r=o();return function(){function s(){this._key=o()}return s.prototype.has=function(m){var p=a(m,!1);return p!==void 0?S.has(p,this._key):!1},s.prototype.get=function(m){var p=a(m,!1);return p!==void 0?S.get(p,this._key):void 0},s.prototype.set=function(m,p){var x=a(m,!0);return x[this._key]=p,this},s.prototype.delete=function(m){var p=a(m,!1);return p!==void 0?delete p[this._key]:!1},s.prototype.clear=function(){this._key=o()},s}();function o(){var s;do s="@@WeakMap@@"+c();while(S.has(t,s));return t[s]=!0,s}function a(s,m){if(!i.call(s,r)){if(!m)return;Object.defineProperty(s,r,{value:S.create()})}return s[r]}function g(s,m){for(var p=0;p<m;++p)s[p]=Math.random()*255|0;return s}function u(s){return typeof Uint8Array=="function"?typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(s)):typeof msCrypto<"u"?msCrypto.getRandomValues(new Uint8Array(s)):g(new Uint8Array(s),s):g(new Array(s),s)}function c(){var s=u(e);s[6]=s[6]&79|64,s[8]=s[8]&191|128;for(var m="",p=0;p<e;++p){var x=s[p];(p===4||p===6||p===8)&&(m+="-"),x<16&&(m+="0"),m+=x.toString(16).toLowerCase()}return m}}function z(e){return e.__=void 0,delete e.__,e}})})(pe||(pe={}));var ve=require("inversify");var T=Symbol.for("FrameLoopManagerName"),J=Symbol.for("AnimationFrameLoopFactoryName"),Q=Symbol.for("SetIntervalLoopFactoryName"),K=Symbol.for("SetTimeoutLoopFactoryName"),k=Symbol.for("TimeLoggerName");var G=require("inversify");var H=class{constructor(n,i){this.callback=n;this.timeLogger=i}enable=!1;start(){if(this.enable)throw new Error("Loop already started");this.enable=!0;let n=0,i=f=>{let l=f-n;n=f,this.enable&&requestAnimationFrame(i),this.timeLogger.monitoringStart(),this.callback(l),this.timeLogger.monitoringEnd()};requestAnimationFrame(i)}stop(){this.enable=!1}},N=class{constructor(n,i){this.timeLogger=n;this.frameLoop=i}create(n,i){let f=new H(i,this.timeLogger.getTimeLogger(n));return this.frameLoop.addLoop(n,f),{loop:f,remover:()=>{this.frameLoop.removeLoop(n)}}}};N=L([(0,G.injectable)(),M(0,(0,G.inject)(k)),M(1,(0,G.inject)(T))],N);var he=require("inversify");var j=class{started=!1;constructor(){}loops=new Map;start(){this.started=!0;for(let[n,i]of this.loops)i.start()}stop(){this.started=!1;for(let[n,i]of this.loops)i.stop()}addLoop(n,i){if(this.loops.has(n))throw new Error("Loop name already used :"+n);return this.started&&i.start(),this.loops.set(n,i),()=>{this.removeLoop(n)}}removeLoop(n){this.loops.get(n).stop(),this.loops.delete(n)}};j=L([(0,he.injectable)()],j);var W=require("inversify");var X=class{constructor(n,i,f){this.callback=n;this.timeLogger=i;this.intervalMs=f}intervalId=null;start(){if(this.intervalId)throw new Error("Loop already started");let n=0,i=f=>{let l=f-n;n=f,this.timeLogger.monitoringStart(),this.callback(l),this.timeLogger.monitoringEnd()};this.intervalId=setInterval(i,this.intervalMs)}stop(){this.intervalId&&(this.intervalId=null,clearInterval(this.intervalId))}},C=class{constructor(n,i){this.timeLogger=n;this.frameLoop=i}create(n,i,f=0){let l=new X(i,this.timeLogger.getTimeLogger(n),f);return this.frameLoop.addLoop(n,l),{loop:l,remover:()=>{this.frameLoop.removeLoop(n)}}}};C=L([(0,W.injectable)(),M(0,(0,W.inject)(k)),M(1,(0,W.inject)(T))],C);var V=require("inversify");var Y=class{constructor(n,i,f){this.callback=n;this.timeLogger=i;this.timeoutMs=f}enable=!1;start(){if(this.enable)throw new Error("Loop already started");this.enable=!0;let n=performance.now(),i=()=>{let f=performance.now(),l=f-n;n=f,this.timeLogger.monitoringStart(),this.callback(l),this.timeLogger.monitoringEnd();let b=performance.now()-f;this.enable&&setTimeout(i,b>this.timeoutMs?0:this.timeoutMs-b)};i()}stop(){this.enable=!1}},P=class{constructor(n,i){this.timeLogger=n;this.frameLoop=i}create(n,i,f=0){let l=new Y(i,this.timeLogger.getTimeLogger(n),f);return this.frameLoop.addLoop(n,l),{loop:l,remover:()=>{this.frameLoop.removeLoop(n)}}}};P=L([(0,V.injectable)(),M(0,(0,V.inject)(k)),M(1,(0,V.inject)(T))],P);var de=require("inversify");var $e="-",A=class{getTimeLogger(n){n=n.replace(/-[^-]*$/,"");let i=0,f=0,l=0,y=0,b=0,w=0,I=0,S=this.callbacks;return{monitoringStart:()=>{w=performance.now()},monitoringEnd:()=>{let E=performance.now(),O=E-w;l+=O,y++,b=l/y,f=Math.max(f,O),i=Math.min(i,O);for(let F of S)E-I>F.refreshInterval&&((async()=>F.cb(n,performance.timeOrigin+E,b,i,f,y,l))(),I=E,l=0,y=0,b=0,i=Number.MAX_VALUE,f=Number.MIN_VALUE)}}}callbacks=[];onPerfLog(n,i){return this.callbacks.push({refreshInterval:n,cb:i}),this.enablePerfLog(!0),()=>{this.callbacks=this.callbacks.filter(f=>f.cb!==i)}}enablePerfLog(n){}};A=L([(0,de.injectable)()],A);var ee=class{getModule(){return new ve.ContainerModule(n=>{n(T).to(j).inSingletonScope(),n(k).to(A).inSingletonScope(),n(J).to(N).inSingletonScope(),n(K).to(P).inSingletonScope(),n(Q).to(C).inSingletonScope()})}};0&&(module.exports={AnimationFrameLoop,AnimationFrameLoopFactory,AnimationFrameLoopFactoryName,AxLoopModule,FrameLoopManager,FrameLoopManagerName,SUFFIX_DELIMITER,SetIntervalLoop,SetIntervalLoopFactory,SetIntervalLoopFactoryName,SetTimeoutLoop,SetTimeoutLoopFactory,SetTimeoutLoopFactoryName,TimeLogger,TimeLoggerName});
/*! Bundled license information:

reflect-metadata/Reflect.js:
  (*! *****************************************************************************
  Copyright (C) Microsoft. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** *)
*/
//# sourceMappingURL=index.cjs.map
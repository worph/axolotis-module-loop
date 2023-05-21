var T=Object.defineProperty;var j=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var q=Object.prototype.hasOwnProperty;var D=(a,e)=>{for(var o in e)T(a,o,{get:e[o],enumerable:!0})},V=(a,e,o,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of _(e))!q.call(a,t)&&t!==o&&T(a,t,{get:()=>e[t],enumerable:!(r=j(e,t))||r.enumerable});return a};var X=a=>V(T({},"__esModule",{value:!0}),a),m=(a,e,o,r)=>{for(var t=r>1?void 0:r?j(e,o):e,n=a.length-1,i;n>=0;n--)(i=a[n])&&(t=(r?i(e,o,t):i(t))||t);return r&&t&&T(e,o,t),t},s=(a,e)=>(o,r)=>e(o,r,a);var O={};D(O,{AnimationFrameLoop:()=>I,AnimationFrameLoopFactory:()=>c,AnimationFrameLoopFactoryName:()=>k,AxLoopModule:()=>y,FrameLoopManager:()=>g,FrameLoopManagerName:()=>p,SUFFIX_DELIMITER:()=>B,SetIntervalLoop:()=>M,SetIntervalLoopFactory:()=>f,SetIntervalLoopFactoryName:()=>S,SetTimeoutLoop:()=>x,SetTimeoutLoopFactory:()=>L,SetTimeoutLoopFactoryName:()=>w,TimeLogger:()=>b,TimeLoggerName:()=>l});module.exports=X(O);var P=require("inversify");var p=Symbol.for("FrameLoopManagerName"),k=Symbol.for("AnimationFrameLoopFactoryName"),S=Symbol.for("SetIntervalLoopFactoryName"),w=Symbol.for("SetTimeoutLoopFactoryName"),l=Symbol.for("TimeLoggerName");var h=require("inversify");var I=class{constructor(e,o){this.callback=e;this.timeLogger=o}enable=!1;start(){if(this.enable)throw new Error("Loop already started");this.enable=!0;let e=0,o=r=>{let t=r-e;e=r,this.enable&&requestAnimationFrame(o),this.timeLogger.monitoringStart(),this.callback(t),this.timeLogger.monitoringEnd()};requestAnimationFrame(o)}stop(){this.enable=!1}},c=class{constructor(e,o){this.timeLogger=e;this.frameLoop=o}create(e,o){let r=new I(o,this.timeLogger.getTimeLogger(e));return this.frameLoop.addLoop(e,r),{loop:r,remover:()=>{this.frameLoop.removeLoop(e)}}}};c=m([(0,h.injectable)(),s(0,(0,h.inject)(l)),s(1,(0,h.inject)(p))],c);var R=require("inversify");var g=class{started=!1;constructor(){}loops=new Map;start(){this.started=!0;for(let[e,o]of this.loops)o.start()}stop(){this.started=!1;for(let[e,o]of this.loops)o.stop()}addLoop(e,o){if(this.loops.has(e))throw new Error("Loop name already used");return this.started&&o.start(),this.loops.set(e,o),()=>{this.removeLoop(e)}}removeLoop(e){this.loops.get(e).stop(),this.loops.delete(e)}};g=m([(0,R.injectable)()],g);var u=require("inversify");var M=class{constructor(e,o,r){this.callback=e;this.timeLogger=o;this.intervalMs=r}intervalId=null;start(){if(this.intervalId)throw new Error("Loop already started");let e=0,o=r=>{let t=r-e;e=r,this.timeLogger.monitoringStart(),this.callback(t),this.timeLogger.monitoringEnd()};this.intervalId=setInterval(o,this.intervalMs)}stop(){this.intervalId&&(this.intervalId=null,clearInterval(this.intervalId))}},f=class{constructor(e,o){this.timeLogger=e;this.frameLoop=o}create(e,o,r=0){let t=new M(o,this.timeLogger.getTimeLogger(e),r);return this.frameLoop.addLoop(e,t),{loop:t,remover:()=>{this.frameLoop.removeLoop(e)}}}};f=m([(0,u.injectable)(),s(0,(0,u.inject)(l)),s(1,(0,u.inject)(p))],f);var v=require("inversify");var x=class{constructor(e,o,r){this.callback=e;this.timeLogger=o;this.timeoutMs=r}enable=!1;start(){if(this.enable)throw new Error("Loop already started");this.enable=!0;let e=performance.now(),o=()=>{let r=performance.now(),t=r-e;e=r,this.timeLogger.monitoringStart(),this.callback(t),this.timeLogger.monitoringEnd();let i=performance.now()-r;this.enable&&setTimeout(o,i>this.timeoutMs?0:this.timeoutMs-i)};o()}stop(){this.enable=!1}},L=class{constructor(e,o){this.timeLogger=e;this.frameLoop=o}create(e,o,r=0){let t=new x(o,this.timeLogger.getTimeLogger(e),r);return this.frameLoop.addLoop(e,t),{loop:t,remover:()=>{this.frameLoop.removeLoop(e)}}}};L=m([(0,v.injectable)(),s(0,(0,v.inject)(l)),s(1,(0,v.inject)(p))],L);var A=require("inversify");var B="-",b=class{getTimeLogger(e){e=e.replace(/-[^-]*$/,"");let o=0,r=0,t=0,n=0,i=0,F=0,E=0,U=this.callbacks;return{monitoringStart:()=>{F=performance.now()},monitoringEnd:()=>{let d=performance.now(),N=d-F;t+=N,n++,i=t/n,r=Math.max(r,N),o=Math.min(o,N);for(let C of U)d-E>C.refreshInterval&&((async()=>C.cb(e,performance.timeOrigin+d,i,o,r,n,t))(),E=d,t=0,n=0,i=0,o=Number.MAX_VALUE,r=Number.MIN_VALUE)}}}callbacks=[];onPerfLog(e,o){return this.callbacks.push({refreshInterval:e,cb:o}),this.enablePerfLog(!0),()=>{this.callbacks=this.callbacks.filter(r=>r.cb!==o)}}enablePerfLog(e){}};b=m([(0,A.injectable)()],b);var y=class{getModule(){return new P.ContainerModule(e=>{e(p).to(g).inSingletonScope(),e(l).to(b).inSingletonScope(),e(k).to(c).inSingletonScope(),e(w).to(L).inSingletonScope(),e(S).to(f).inSingletonScope()})}};0&&(module.exports={AnimationFrameLoop,AnimationFrameLoopFactory,AnimationFrameLoopFactoryName,AxLoopModule,FrameLoopManager,FrameLoopManagerName,SUFFIX_DELIMITER,SetIntervalLoop,SetIntervalLoopFactory,SetIntervalLoopFactoryName,SetTimeoutLoop,SetTimeoutLoopFactory,SetTimeoutLoopFactoryName,TimeLogger,TimeLoggerName});
//# sourceMappingURL=index.cjs.map
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function e(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=e(a);fetch(a.href,l)}})();function O1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Cm={exports:{}},_u={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _T;function P1(){if(_T)return _u;_T=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function e(r,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:n,type:r,key:c,ref:a!==void 0?a:null,props:l}}return _u.Fragment=t,_u.jsx=e,_u.jsxs=e,_u}var yT;function k1(){return yT||(yT=1,Cm.exports=P1()),Cm.exports}var et=k1(),Dm={exports:{}},Rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vT;function V1(){if(vT)return Rt;vT=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function b(x){return x===null||typeof x!="object"?null:(x=T&&x[T]||x["@@iterator"],typeof x=="function"?x:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,L={};function O(x,rt,mt){this.props=x,this.context=rt,this.refs=L,this.updater=mt||I}O.prototype.isReactComponent={},O.prototype.setState=function(x,rt){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,rt,"setState")},O.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function M(){}M.prototype=O.prototype;function q(x,rt,mt){this.props=x,this.context=rt,this.refs=L,this.updater=mt||I}var z=q.prototype=new M;z.constructor=q,D(z,O.prototype),z.isPureReactComponent=!0;var Y=Array.isArray,it={H:null,A:null,T:null,S:null},ot=Object.prototype.hasOwnProperty;function k(x,rt,mt,lt,ut,It){return mt=It.ref,{$$typeof:n,type:x,key:rt,ref:mt!==void 0?mt:null,props:It}}function R(x,rt){return k(x.type,rt,void 0,void 0,void 0,x.props)}function S(x){return typeof x=="object"&&x!==null&&x.$$typeof===n}function N(x){var rt={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(mt){return rt[mt]})}var V=/\/+/g;function j(x,rt){return typeof x=="object"&&x!==null&&x.key!=null?N(""+x.key):rt.toString(36)}function P(){}function ge(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(P,P):(x.status="pending",x.then(function(rt){x.status==="pending"&&(x.status="fulfilled",x.value=rt)},function(rt){x.status==="pending"&&(x.status="rejected",x.reason=rt)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function se(x,rt,mt,lt,ut){var It=typeof x;(It==="undefined"||It==="boolean")&&(x=null);var St=!1;if(x===null)St=!0;else switch(It){case"bigint":case"string":case"number":St=!0;break;case"object":switch(x.$$typeof){case n:case t:St=!0;break;case E:return St=x._init,se(St(x._payload),rt,mt,lt,ut)}}if(St)return ut=ut(x),St=lt===""?"."+j(x,0):lt,Y(ut)?(mt="",St!=null&&(mt=St.replace(V,"$&/")+"/"),se(ut,rt,mt,"",function(he){return he})):ut!=null&&(S(ut)&&(ut=R(ut,mt+(ut.key==null||x&&x.key===ut.key?"":(""+ut.key).replace(V,"$&/")+"/")+St)),rt.push(ut)),1;St=0;var Te=lt===""?".":lt+":";if(Y(x))for(var Ft=0;Ft<x.length;Ft++)lt=x[Ft],It=Te+j(lt,Ft),St+=se(lt,rt,mt,It,ut);else if(Ft=b(x),typeof Ft=="function")for(x=Ft.call(x),Ft=0;!(lt=x.next()).done;)lt=lt.value,It=Te+j(lt,Ft++),St+=se(lt,rt,mt,It,ut);else if(It==="object"){if(typeof x.then=="function")return se(ge(x),rt,mt,lt,ut);throw rt=String(x),Error("Objects are not valid as a React child (found: "+(rt==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":rt)+"). If you meant to render a collection of children, use an array instead.")}return St}function at(x,rt,mt){if(x==null)return x;var lt=[],ut=0;return se(x,lt,"","",function(It){return rt.call(mt,It,ut++)}),lt}function _t(x){if(x._status===-1){var rt=x._result;rt=rt(),rt.then(function(mt){(x._status===0||x._status===-1)&&(x._status=1,x._result=mt)},function(mt){(x._status===0||x._status===-1)&&(x._status=2,x._result=mt)}),x._status===-1&&(x._status=0,x._result=rt)}if(x._status===1)return x._result.default;throw x._result}var dt=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var rt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(rt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function Kt(){}return Rt.Children={map:at,forEach:function(x,rt,mt){at(x,function(){rt.apply(this,arguments)},mt)},count:function(x){var rt=0;return at(x,function(){rt++}),rt},toArray:function(x){return at(x,function(rt){return rt})||[]},only:function(x){if(!S(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},Rt.Component=O,Rt.Fragment=e,Rt.Profiler=a,Rt.PureComponent=q,Rt.StrictMode=r,Rt.Suspense=p,Rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=it,Rt.act=function(){throw Error("act(...) is not supported in production builds of React.")},Rt.cache=function(x){return function(){return x.apply(null,arguments)}},Rt.cloneElement=function(x,rt,mt){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var lt=D({},x.props),ut=x.key,It=void 0;if(rt!=null)for(St in rt.ref!==void 0&&(It=void 0),rt.key!==void 0&&(ut=""+rt.key),rt)!ot.call(rt,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&rt.ref===void 0||(lt[St]=rt[St]);var St=arguments.length-2;if(St===1)lt.children=mt;else if(1<St){for(var Te=Array(St),Ft=0;Ft<St;Ft++)Te[Ft]=arguments[Ft+2];lt.children=Te}return k(x.type,ut,void 0,void 0,It,lt)},Rt.createContext=function(x){return x={$$typeof:c,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:l,_context:x},x},Rt.createElement=function(x,rt,mt){var lt,ut={},It=null;if(rt!=null)for(lt in rt.key!==void 0&&(It=""+rt.key),rt)ot.call(rt,lt)&&lt!=="key"&&lt!=="__self"&&lt!=="__source"&&(ut[lt]=rt[lt]);var St=arguments.length-2;if(St===1)ut.children=mt;else if(1<St){for(var Te=Array(St),Ft=0;Ft<St;Ft++)Te[Ft]=arguments[Ft+2];ut.children=Te}if(x&&x.defaultProps)for(lt in St=x.defaultProps,St)ut[lt]===void 0&&(ut[lt]=St[lt]);return k(x,It,void 0,void 0,null,ut)},Rt.createRef=function(){return{current:null}},Rt.forwardRef=function(x){return{$$typeof:d,render:x}},Rt.isValidElement=S,Rt.lazy=function(x){return{$$typeof:E,_payload:{_status:-1,_result:x},_init:_t}},Rt.memo=function(x,rt){return{$$typeof:g,type:x,compare:rt===void 0?null:rt}},Rt.startTransition=function(x){var rt=it.T,mt={};it.T=mt;try{var lt=x(),ut=it.S;ut!==null&&ut(mt,lt),typeof lt=="object"&&lt!==null&&typeof lt.then=="function"&&lt.then(Kt,dt)}catch(It){dt(It)}finally{it.T=rt}},Rt.unstable_useCacheRefresh=function(){return it.H.useCacheRefresh()},Rt.use=function(x){return it.H.use(x)},Rt.useActionState=function(x,rt,mt){return it.H.useActionState(x,rt,mt)},Rt.useCallback=function(x,rt){return it.H.useCallback(x,rt)},Rt.useContext=function(x){return it.H.useContext(x)},Rt.useDebugValue=function(){},Rt.useDeferredValue=function(x,rt){return it.H.useDeferredValue(x,rt)},Rt.useEffect=function(x,rt){return it.H.useEffect(x,rt)},Rt.useId=function(){return it.H.useId()},Rt.useImperativeHandle=function(x,rt,mt){return it.H.useImperativeHandle(x,rt,mt)},Rt.useInsertionEffect=function(x,rt){return it.H.useInsertionEffect(x,rt)},Rt.useLayoutEffect=function(x,rt){return it.H.useLayoutEffect(x,rt)},Rt.useMemo=function(x,rt){return it.H.useMemo(x,rt)},Rt.useOptimistic=function(x,rt){return it.H.useOptimistic(x,rt)},Rt.useReducer=function(x,rt,mt){return it.H.useReducer(x,rt,mt)},Rt.useRef=function(x){return it.H.useRef(x)},Rt.useState=function(x){return it.H.useState(x)},Rt.useSyncExternalStore=function(x,rt,mt){return it.H.useSyncExternalStore(x,rt,mt)},Rt.useTransition=function(){return it.H.useTransition()},Rt.version="19.0.0",Rt}var ET;function Yg(){return ET||(ET=1,Dm.exports=V1()),Dm.exports}var G=Yg();const ie=O1(G);var Nm={exports:{}},yu={},Om={exports:{}},Pm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TT;function x1(){return TT||(TT=1,function(n){function t(at,_t){var dt=at.length;at.push(_t);t:for(;0<dt;){var Kt=dt-1>>>1,x=at[Kt];if(0<a(x,_t))at[Kt]=_t,at[dt]=x,dt=Kt;else break t}}function e(at){return at.length===0?null:at[0]}function r(at){if(at.length===0)return null;var _t=at[0],dt=at.pop();if(dt!==_t){at[0]=dt;t:for(var Kt=0,x=at.length,rt=x>>>1;Kt<rt;){var mt=2*(Kt+1)-1,lt=at[mt],ut=mt+1,It=at[ut];if(0>a(lt,dt))ut<x&&0>a(It,lt)?(at[Kt]=It,at[ut]=dt,Kt=ut):(at[Kt]=lt,at[mt]=dt,Kt=mt);else if(ut<x&&0>a(It,dt))at[Kt]=It,at[ut]=dt,Kt=ut;else break t}}return _t}function a(at,_t){var dt=at.sortIndex-_t.sortIndex;return dt!==0?dt:at.id-_t.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],g=[],E=1,T=null,b=3,I=!1,D=!1,L=!1,O=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function z(at){for(var _t=e(g);_t!==null;){if(_t.callback===null)r(g);else if(_t.startTime<=at)r(g),_t.sortIndex=_t.expirationTime,t(p,_t);else break;_t=e(g)}}function Y(at){if(L=!1,z(at),!D)if(e(p)!==null)D=!0,ge();else{var _t=e(g);_t!==null&&se(Y,_t.startTime-at)}}var it=!1,ot=-1,k=5,R=-1;function S(){return!(n.unstable_now()-R<k)}function N(){if(it){var at=n.unstable_now();R=at;var _t=!0;try{t:{D=!1,L&&(L=!1,M(ot),ot=-1),I=!0;var dt=b;try{e:{for(z(at),T=e(p);T!==null&&!(T.expirationTime>at&&S());){var Kt=T.callback;if(typeof Kt=="function"){T.callback=null,b=T.priorityLevel;var x=Kt(T.expirationTime<=at);if(at=n.unstable_now(),typeof x=="function"){T.callback=x,z(at),_t=!0;break e}T===e(p)&&r(p),z(at)}else r(p);T=e(p)}if(T!==null)_t=!0;else{var rt=e(g);rt!==null&&se(Y,rt.startTime-at),_t=!1}}break t}finally{T=null,b=dt,I=!1}_t=void 0}}finally{_t?V():it=!1}}}var V;if(typeof q=="function")V=function(){q(N)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,P=j.port2;j.port1.onmessage=N,V=function(){P.postMessage(null)}}else V=function(){O(N,0)};function ge(){it||(it=!0,V())}function se(at,_t){ot=O(function(){at(n.unstable_now())},_t)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(at){at.callback=null},n.unstable_continueExecution=function(){D||I||(D=!0,ge())},n.unstable_forceFrameRate=function(at){0>at||125<at?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<at?Math.floor(1e3/at):5},n.unstable_getCurrentPriorityLevel=function(){return b},n.unstable_getFirstCallbackNode=function(){return e(p)},n.unstable_next=function(at){switch(b){case 1:case 2:case 3:var _t=3;break;default:_t=b}var dt=b;b=_t;try{return at()}finally{b=dt}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(at,_t){switch(at){case 1:case 2:case 3:case 4:case 5:break;default:at=3}var dt=b;b=at;try{return _t()}finally{b=dt}},n.unstable_scheduleCallback=function(at,_t,dt){var Kt=n.unstable_now();switch(typeof dt=="object"&&dt!==null?(dt=dt.delay,dt=typeof dt=="number"&&0<dt?Kt+dt:Kt):dt=Kt,at){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=dt+x,at={id:E++,callback:_t,priorityLevel:at,startTime:dt,expirationTime:x,sortIndex:-1},dt>Kt?(at.sortIndex=dt,t(g,at),e(p)===null&&at===e(g)&&(L?(M(ot),ot=-1):L=!0,se(Y,dt-Kt))):(at.sortIndex=x,t(p,at),D||I||(D=!0,ge())),at},n.unstable_shouldYield=S,n.unstable_wrapCallback=function(at){var _t=b;return function(){var dt=b;b=_t;try{return at.apply(this,arguments)}finally{b=dt}}}}(Pm)),Pm}var AT;function M1(){return AT||(AT=1,Om.exports=x1()),Om.exports}var km={exports:{}},Ze={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wT;function U1(){if(wT)return Ze;wT=1;var n=Yg();function t(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)g+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function e(){}var r={d:{f:e,r:function(){throw Error(t(522))},D:e,C:e,L:e,m:e,X:e,S:e,M:e},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,E){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:p,containerInfo:g,implementation:E}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Ze.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ze.createPortal=function(p,g){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return l(p,g,null,E)},Ze.flushSync=function(p){var g=c.T,E=r.p;try{if(c.T=null,r.p=2,p)return p()}finally{c.T=g,r.p=E,r.d.f()}},Ze.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(p,g))},Ze.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Ze.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var E=g.as,T=d(E,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,I=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;E==="style"?r.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:b,fetchPriority:I}):E==="script"&&r.d.X(p,{crossOrigin:T,integrity:b,fetchPriority:I,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Ze.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var E=d(g.as,g.crossOrigin);r.d.M(p,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(p)},Ze.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var E=g.as,T=d(E,g.crossOrigin);r.d.L(p,E,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Ze.preloadModule=function(p,g){if(typeof p=="string")if(g){var E=d(g.as,g.crossOrigin);r.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(p)},Ze.requestFormReset=function(p){r.d.r(p)},Ze.unstable_batchedUpdates=function(p,g){return p(g)},Ze.useFormState=function(p,g,E){return c.H.useFormState(p,g,E)},Ze.useFormStatus=function(){return c.H.useHostTransitionStatus()},Ze.version="19.0.0",Ze}var bT;function L1(){if(bT)return km.exports;bT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),km.exports=U1(),km.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ST;function B1(){if(ST)return yu;ST=1;var n=M1(),t=Yg(),e=L1();function r(i){var s="https://react.dev/errors/"+i;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}var l=Symbol.for("react.element"),c=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),b=Symbol.for("react.consumer"),I=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),z=Symbol.for("react.offscreen"),Y=Symbol.for("react.memo_cache_sentinel"),it=Symbol.iterator;function ot(i){return i===null||typeof i!="object"?null:(i=it&&i[it]||i["@@iterator"],typeof i=="function"?i:null)}var k=Symbol.for("react.client.reference");function R(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===k?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case p:return"Fragment";case d:return"Portal";case E:return"Profiler";case g:return"StrictMode";case L:return"Suspense";case O:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case I:return(i.displayName||"Context")+".Provider";case b:return(i._context.displayName||"Context")+".Consumer";case D:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case M:return s=i.displayName||null,s!==null?s:R(i.type)||"Memo";case q:s=i._payload,i=i._init;try{return R(i(s))}catch{}}return null}var S=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=Object.assign,V,j;function P(i){if(V===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||"",j=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+V+i+j}var ge=!1;function se(i,s){if(!i||ge)return"";ge=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(s){var nt=function(){throw Error()};if(Object.defineProperty(nt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(nt,[])}catch(X){var K=X}Reflect.construct(i,[],nt)}else{try{nt.call()}catch(X){K=X}i.call(nt.prototype)}}else{try{throw Error()}catch(X){K=X}(nt=i())&&typeof nt.catch=="function"&&nt.catch(function(){})}}catch(X){if(X&&K&&typeof X.stack=="string")return[X.stack,K.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),v=m[0],A=m[1];if(v&&A){var C=v.split(`
`),B=A.split(`
`);for(f=u=0;u<C.length&&!C[u].includes("DetermineComponentFrameRoot");)u++;for(;f<B.length&&!B[f].includes("DetermineComponentFrameRoot");)f++;if(u===C.length||f===B.length)for(u=C.length-1,f=B.length-1;1<=u&&0<=f&&C[u]!==B[f];)f--;for(;1<=u&&0<=f;u--,f--)if(C[u]!==B[f]){if(u!==1||f!==1)do if(u--,f--,0>f||C[u]!==B[f]){var W=`
`+C[u].replace(" at new "," at ");return i.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",i.displayName)),W}while(1<=u&&0<=f);break}}}finally{ge=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?P(o):""}function at(i){switch(i.tag){case 26:case 27:case 5:return P(i.type);case 16:return P("Lazy");case 13:return P("Suspense");case 19:return P("SuspenseList");case 0:case 15:return i=se(i.type,!1),i;case 11:return i=se(i.type.render,!1),i;case 1:return i=se(i.type,!0),i;default:return""}}function _t(i){try{var s="";do s+=at(i),i=i.return;while(i);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function dt(i){var s=i,o=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(o=s.return),i=s.return;while(i)}return s.tag===3?o:null}function Kt(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function x(i){if(dt(i)!==i)throw Error(r(188))}function rt(i){var s=i.alternate;if(!s){if(s=dt(i),s===null)throw Error(r(188));return s!==i?null:i}for(var o=i,u=s;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return x(f),i;if(m===u)return x(f),s;m=m.sibling}throw Error(r(188))}if(o.return!==u.return)o=f,u=m;else{for(var v=!1,A=f.child;A;){if(A===o){v=!0,o=f,u=m;break}if(A===u){v=!0,u=f,o=m;break}A=A.sibling}if(!v){for(A=m.child;A;){if(A===o){v=!0,o=m,u=f;break}if(A===u){v=!0,u=m,o=f;break}A=A.sibling}if(!v)throw Error(r(189))}}if(o.alternate!==u)throw Error(r(190))}if(o.tag!==3)throw Error(r(188));return o.stateNode.current===o?i:s}function mt(i){var s=i.tag;if(s===5||s===26||s===27||s===6)return i;for(i=i.child;i!==null;){if(s=mt(i),s!==null)return s;i=i.sibling}return null}var lt=Array.isArray,ut=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,It={pending:!1,data:null,method:null,action:null},St=[],Te=-1;function Ft(i){return{current:i}}function he(i){0>Te||(i.current=St[Te],St[Te]=null,Te--)}function Xt(i,s){Te++,St[Te]=i.current,i.current=s}var an=Ft(null),ji=Ft(null),Mn=Ft(null),Lr=Ft(null);function Br(i,s){switch(Xt(Mn,s),Xt(ji,i),Xt(an,null),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)&&(s=s.namespaceURI)?$E(s):0;break;default:if(i=i===8?s.parentNode:s,s=i.tagName,i=i.namespaceURI)i=$E(i),s=KE(i,s);else switch(s){case"svg":s=1;break;case"math":s=2;break;default:s=0}}he(an),Xt(an,s)}function Fi(){he(an),he(ji),he(Mn)}function fl(i){i.memoizedState!==null&&Xt(Lr,i);var s=an.current,o=KE(s,i.type);s!==o&&(Xt(ji,i),Xt(an,o))}function ja(i){ji.current===i&&(he(an),he(ji)),Lr.current===i&&(he(Lr),fu._currentValue=It)}var Fa=Object.prototype.hasOwnProperty,Fs=n.unstable_scheduleCallback,qa=n.unstable_cancelCallback,Nd=n.unstable_shouldYield,dl=n.unstable_requestPaint,mn=n.unstable_now,Tc=n.unstable_getCurrentPriorityLevel,Ce=n.unstable_ImmediatePriority,xe=n.unstable_UserBlockingPriority,qi=n.unstable_NormalPriority,Ac=n.unstable_LowPriority,pl=n.unstable_IdlePriority,Od=n.log,qs=n.unstable_setDisableYieldValue,zr=null,Xe=null;function ml(i){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(zr,i,void 0,(i.current.flags&128)===128)}catch{}}function pi(i){if(typeof Od=="function"&&qs(i),Xe&&typeof Xe.setStrictMode=="function")try{Xe.setStrictMode(zr,i)}catch{}}var on=Math.clz32?Math.clz32:bc,gl=Math.log,wc=Math.LN2;function bc(i){return i>>>=0,i===0?32:31-(gl(i)/wc|0)|0}var mi=128,jr=4194304;function ii(i){var s=i&42;if(s!==0)return s;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function Un(i,s){var o=i.pendingLanes;if(o===0)return 0;var u=0,f=i.suspendedLanes,m=i.pingedLanes,v=i.warmLanes;i=i.finishedLanes!==0;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=ii(o):(m&=A,m!==0?u=ii(m):i||(v=A&~v,v!==0&&(u=ii(v))))):(A=o&~f,A!==0?u=ii(A):m!==0?u=ii(m):i||(v=o&~v,v!==0&&(u=ii(v)))),u===0?0:s!==0&&s!==u&&(s&f)===0&&(f=u&-u,v=s&-s,f>=v||f===32&&(v&4194176)!==0)?s:u}function Fr(i,s){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&s)===0}function Ha(i,s){switch(i){case 1:case 2:case 4:case 8:return s+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _l(){var i=mi;return mi<<=1,(mi&4194176)===0&&(mi=128),i}function qr(){var i=jr;return jr<<=1,(jr&62914560)===0&&(jr=4194304),i}function Ga(i){for(var s=[],o=0;31>o;o++)s.push(i);return s}function _e(i,s){i.pendingLanes|=s,s!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function Sc(i,s,o,u,f,m){var v=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var A=i.entanglements,C=i.expirationTimes,B=i.hiddenUpdates;for(o=v&~o;0<o;){var W=31-on(o),nt=1<<W;A[W]=0,C[W]=-1;var K=B[W];if(K!==null)for(B[W]=null,W=0;W<K.length;W++){var X=K[W];X!==null&&(X.lane&=-536870913)}o&=~nt}u!==0&&Hr(i,u,0),m!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=m&~(v&~s))}function Hr(i,s,o){i.pendingLanes|=s,i.suspendedLanes&=~s;var u=31-on(s);i.entangledLanes|=s,i.entanglements[u]=i.entanglements[u]|1073741824|o&4194218}function Gr(i,s){var o=i.entangledLanes|=s;for(i=i.entanglements;o;){var u=31-on(o),f=1<<u;f&s|i[u]&s&&(i[u]|=s),o&=~f}}function Rc(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Ic(){var i=ut.p;return i!==0?i:(i=window.event,i===void 0?32:hT(i.type))}function $r(i,s){var o=ut.p;try{return ut.p=i,s()}finally{ut.p=o}}var gi=Math.random().toString(36).slice(2),Me="__reactFiber$"+gi,De="__reactProps$"+gi,Hi="__reactContainer$"+gi,Hs="__reactEvents$"+gi,$a="__reactListeners$"+gi,_i="__reactHandles$"+gi,yl="__reactResources$"+gi,Kr="__reactMarker$"+gi;function Gs(i){delete i[Me],delete i[De],delete i[Hs],delete i[$a],delete i[_i]}function ri(i){var s=i[Me];if(s)return s;for(var o=i.parentNode;o;){if(s=o[Hi]||o[Me]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(i=XE(i);i!==null;){if(o=i[Me])return o;i=XE(i)}return s}i=o,o=i.parentNode}return null}function Gi(i){if(i=i[Me]||i[Hi]){var s=i.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return i}return null}function Qr(i){var s=i.tag;if(s===5||s===26||s===27||s===6)return i.stateNode;throw Error(r(33))}function Yr(i){var s=i[yl];return s||(s=i[yl]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function ae(i){i[Kr]=!0}var vl=new Set,Ka={};function bn(i,s){gn(i,s),gn(i+"Capture",s)}function gn(i,s){for(Ka[i]=s,i=0;i<s.length;i++)vl.add(s[i])}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),El={},Tl={};function Cc(i){return Fa.call(Tl,i)?!0:Fa.call(El,i)?!1:Pd.test(i)?Tl[i]=!0:(El[i]=!0,!1)}function Xr(i,s,o){if(Cc(s))if(o===null)i.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(s);return;case"boolean":var u=s.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){i.removeAttribute(s);return}}i.setAttribute(s,""+o)}}function Wr(i,s,o){if(o===null)i.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(s);return}i.setAttribute(s,""+o)}}function Ln(i,s,o,u){if(u===null)i.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(s,o,""+u)}}function ln(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Dc(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function kd(i){var s=Dc(i)?"checked":"value",o=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),u=""+i[s];if(!i.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return f.call(this)},set:function(v){u=""+v,m.call(this,v)}}),Object.defineProperty(i,s,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(v){u=""+v},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function $s(i){i._valueTracker||(i._valueTracker=kd(i))}function Al(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return i&&(u=Dc(i)?i.checked?"true":"false":i.value),i=u,i!==o?(s.setValue(i),!0):!1}function Qa(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var $i=/[\n"\\]/g;function fe(i){return i.replace($i,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Zr(i,s,o,u,f,m,v,A){i.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?i.type=v:i.removeAttribute("type"),s!=null?v==="number"?(s===0&&i.value===""||i.value!=s)&&(i.value=""+ln(s)):i.value!==""+ln(s)&&(i.value=""+ln(s)):v!=="submit"&&v!=="reset"||i.removeAttribute("value"),s!=null?Ya(i,v,ln(s)):o!=null?Ya(i,v,ln(o)):u!=null&&i.removeAttribute("value"),f==null&&m!=null&&(i.defaultChecked=!!m),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?i.name=""+ln(A):i.removeAttribute("name")}function Ks(i,s,o,u,f,m,v,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(i.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null))return;o=o!=null?""+ln(o):"",s=s!=null?""+ln(s):o,A||s===i.value||(i.value=s),i.defaultValue=s}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,i.checked=A?i.checked:!!u,i.defaultChecked=!!u,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(i.name=v)}function Ya(i,s,o){s==="number"&&Qa(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function qt(i,s,o,u){if(i=i.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<i.length;o++)f=s.hasOwnProperty("$"+i[o].value),i[o].selected!==f&&(i[o].selected=f),f&&u&&(i[o].defaultSelected=!0)}else{for(o=""+ln(o),s=null,f=0;f<i.length;f++){if(i[f].value===o){i[f].selected=!0,u&&(i[f].defaultSelected=!0);return}s!==null||i[f].disabled||(s=i[f])}s!==null&&(s.selected=!0)}}function Qs(i,s,o){if(s!=null&&(s=""+ln(s),s!==i.value&&(i.value=s),o==null)){i.defaultValue!==s&&(i.defaultValue=s);return}i.defaultValue=o!=null?""+ln(o):""}function Jr(i,s,o,u){if(s==null){if(u!=null){if(o!=null)throw Error(r(92));if(lt(u)){if(1<u.length)throw Error(r(93));u=u[0]}o=u}o==null&&(o=""),s=o}o=ln(s),i.defaultValue=o,u=i.textContent,u===o&&u!==""&&u!==null&&(i.value=u)}function Bn(i,s){if(s){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=s;return}}i.textContent=s}var Vd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wl(i,s,o){var u=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?i.setProperty(s,""):s==="float"?i.cssFloat="":i[s]="":u?i.setProperty(s,o):typeof o!="number"||o===0||Vd.has(s)?s==="float"?i.cssFloat=o:i[s]=(""+o).trim():i[s]=o+"px"}function Nc(i,s,o){if(s!=null&&typeof s!="object")throw Error(r(62));if(i=i.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||s!=null&&s.hasOwnProperty(u)||(u.indexOf("--")===0?i.setProperty(u,""):u==="float"?i.cssFloat="":i[u]="");for(var f in s)u=s[f],s.hasOwnProperty(f)&&o[f]!==u&&wl(i,f,u)}else for(var m in s)s.hasOwnProperty(m)&&wl(i,m,s[m])}function bl(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Md=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yi(i){return Md.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var zn=null;function Xa(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ki=null,Qi=null;function Yi(i){var s=Gi(i);if(s&&(i=s.stateNode)){var o=i[De]||null;t:switch(i=s.stateNode,s.type){case"input":if(Zr(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+fe(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==i&&u.form===i.form){var f=u[De]||null;if(!f)throw Error(r(90));Zr(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)u=o[s],u.form===i.form&&Al(u)}break t;case"textarea":Qs(i,o.value,o.defaultValue);break t;case"select":s=o.value,s!=null&&qt(i,!!o.multiple,s,!1)}}}var Sl=!1;function Oc(i,s,o){if(Sl)return i(s,o);Sl=!0;try{var u=i(s);return u}finally{if(Sl=!1,(Ki!==null||Qi!==null)&&(Ah(),Ki&&(s=Ki,i=Qi,Qi=Ki=null,Yi(s),i)))for(s=0;s<i.length;s++)Yi(i[s])}}function Ys(i,s){var o=i.stateNode;if(o===null)return null;var u=o[De]||null;if(u===null)return null;o=u[s];t:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break t;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(r(231,s,typeof o));return o}var jn=!1;if(Sn)try{var Xs={};Object.defineProperty(Xs,"passive",{get:function(){jn=!0}}),window.addEventListener("test",Xs,Xs),window.removeEventListener("test",Xs,Xs)}catch{jn=!1}var vi=null,ts=null,Xi=null;function Rl(){if(Xi)return Xi;var i,s=ts,o=s.length,u,f="value"in vi?vi.value:vi.textContent,m=f.length;for(i=0;i<o&&s[i]===f[i];i++);var v=o-i;for(u=1;u<=v&&s[o-u]===f[m-u];u++);return Xi=f.slice(i,1<u?1-u:void 0)}function Ei(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function Ti(){return!0}function Il(){return!1}function Ue(i){function s(o,u,f,m,v){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var A in i)i.hasOwnProperty(A)&&(o=i[A],this[A]=o?o(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ti:Il,this.isPropagationStopped=Il,this}return N(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ti)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ti)},persist:function(){},isPersistent:Ti}),s}var Qt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wa=Ue(Qt),Ws=N({},Qt,{view:0,detail:0}),Pc=Ue(Ws),Za,Ja,Ai,Zs=N({},Ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ea,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ai&&(Ai&&i.type==="mousemove"?(Za=i.screenX-Ai.screenX,Ja=i.screenY-Ai.screenY):Ja=Za=0,Ai=i),Za)},movementY:function(i){return"movementY"in i?i.movementY:Ja}}),Fn=Ue(Zs),kc=N({},Zs,{dataTransfer:0}),Ud=Ue(kc),Js=N({},Ws,{relatedTarget:0}),to=Ue(Js),Cl=N({},Qt,{animationName:0,elapsedTime:0,pseudoElement:0}),eo=Ue(Cl),Vc=N({},Qt,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),no=Ue(Vc),Ld=N({},Qt,{data:0}),Dl=Ue(Ld),ta={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nl(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=Mc[i])?!!s[i]:!1}function ea(){return Nl}var Uc=N({},Ws,{key:function(i){if(i.key){var s=ta[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Ei(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?xc[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ea,charCode:function(i){return i.type==="keypress"?Ei(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Ei(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),io=Ue(Uc),Lc=N({},Zs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ol=Ue(Lc),Wi=N({},Ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ea}),Bc=Ue(Wi),zc=N({},Qt,{propertyName:0,elapsedTime:0,pseudoElement:0}),jc=Ue(zc),Fc=N({},Zs,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),ro=Ue(Fc),un=N({},Qt,{newState:0,oldState:0}),qc=Ue(un),Hc=[9,13,27,32],wi=Sn&&"CompositionEvent"in window,h=null;Sn&&"documentMode"in document&&(h=document.documentMode);var _=Sn&&"TextEvent"in window&&!h,y=Sn&&(!wi||h&&8<h&&11>=h),w=" ",H=!1;function Q(i,s){switch(i){case"keyup":return Hc.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function st(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Mt=!1;function Ne(i,s){switch(i){case"compositionend":return st(s);case"keypress":return s.which!==32?null:(H=!0,w);case"textInput":return i=s.data,i===w&&H?null:i;default:return null}}function Ut(i,s){if(Mt)return i==="compositionend"||!wi&&Q(i,s)?(i=Rl(),Xi=ts=vi=null,Mt=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return y&&s.locale!=="ko"?null:s.data;default:return null}}var Le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oe(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!Le[i.type]:s==="textarea"}function Zi(i,s,o,u){Ki?Qi?Qi.push(u):Qi=[u]:Ki=u,s=Ih(s,"onChange"),0<s.length&&(o=new Wa("onChange","change",null,o,u),i.push({event:o,listeners:s}))}var Ge=null,bi=null;function Pl(i){jE(i,0)}function Gc(i){var s=Qr(i);if(Al(s))return i}function gy(i,s){if(i==="change")return s}var _y=!1;if(Sn){var Bd;if(Sn){var zd="oninput"in document;if(!zd){var yy=document.createElement("div");yy.setAttribute("oninput","return;"),zd=typeof yy.oninput=="function"}Bd=zd}else Bd=!1;_y=Bd&&(!document.documentMode||9<document.documentMode)}function vy(){Ge&&(Ge.detachEvent("onpropertychange",Ey),bi=Ge=null)}function Ey(i){if(i.propertyName==="value"&&Gc(bi)){var s=[];Zi(s,bi,i,Xa(i)),Oc(Pl,s)}}function oI(i,s,o){i==="focusin"?(vy(),Ge=s,bi=o,Ge.attachEvent("onpropertychange",Ey)):i==="focusout"&&vy()}function lI(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Gc(bi)}function uI(i,s){if(i==="click")return Gc(s)}function cI(i,s){if(i==="input"||i==="change")return Gc(s)}function hI(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Rn=typeof Object.is=="function"?Object.is:hI;function kl(i,s){if(Rn(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var o=Object.keys(i),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!Fa.call(s,f)||!Rn(i[f],s[f]))return!1}return!0}function Ty(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Ay(i,s){var o=Ty(i);i=0;for(var u;o;){if(o.nodeType===3){if(u=i+o.textContent.length,i<=s&&u>=s)return{node:o,offset:s-i};i=u}t:{for(;o;){if(o.nextSibling){o=o.nextSibling;break t}o=o.parentNode}o=void 0}o=Ty(o)}}function wy(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?wy(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function by(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var s=Qa(i.document);s instanceof i.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)i=s.contentWindow;else break;s=Qa(i.document)}return s}function jd(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function fI(i,s){var o=by(s);s=i.focusedElem;var u=i.selectionRange;if(o!==s&&s&&s.ownerDocument&&wy(s.ownerDocument.documentElement,s)){if(u!==null&&jd(s)){if(i=u.start,o=u.end,o===void 0&&(o=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(o,s.value.length);else if(o=(i=s.ownerDocument||document)&&i.defaultView||window,o.getSelection){o=o.getSelection();var f=s.textContent.length,m=Math.min(u.start,f);u=u.end===void 0?m:Math.min(u.end,f),!o.extend&&m>u&&(f=u,u=m,m=f),f=Ay(s,m);var v=Ay(s,u);f&&v&&(o.rangeCount!==1||o.anchorNode!==f.node||o.anchorOffset!==f.offset||o.focusNode!==v.node||o.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),o.removeAllRanges(),m>u?(o.addRange(i),o.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),o.addRange(i)))}}for(i=[],o=s;o=o.parentNode;)o.nodeType===1&&i.push({element:o,left:o.scrollLeft,top:o.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)o=i[s],o.element.scrollLeft=o.left,o.element.scrollTop=o.top}}var dI=Sn&&"documentMode"in document&&11>=document.documentMode,so=null,Fd=null,Vl=null,qd=!1;function Sy(i,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;qd||so==null||so!==Qa(u)||(u=so,"selectionStart"in u&&jd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Vl&&kl(Vl,u)||(Vl=u,u=Ih(Fd,"onSelect"),0<u.length&&(s=new Wa("onSelect","select",null,s,o),i.push({event:s,listeners:u}),s.target=so)))}function na(i,s){var o={};return o[i.toLowerCase()]=s.toLowerCase(),o["Webkit"+i]="webkit"+s,o["Moz"+i]="moz"+s,o}var ao={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionrun:na("Transition","TransitionRun"),transitionstart:na("Transition","TransitionStart"),transitioncancel:na("Transition","TransitionCancel"),transitionend:na("Transition","TransitionEnd")},Hd={},Ry={};Sn&&(Ry=document.createElement("div").style,"AnimationEvent"in window||(delete ao.animationend.animation,delete ao.animationiteration.animation,delete ao.animationstart.animation),"TransitionEvent"in window||delete ao.transitionend.transition);function ia(i){if(Hd[i])return Hd[i];if(!ao[i])return i;var s=ao[i],o;for(o in s)if(s.hasOwnProperty(o)&&o in Ry)return Hd[i]=s[o];return i}var Iy=ia("animationend"),Cy=ia("animationiteration"),Dy=ia("animationstart"),pI=ia("transitionrun"),mI=ia("transitionstart"),gI=ia("transitioncancel"),Ny=ia("transitionend"),Oy=new Map,Py="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function si(i,s){Oy.set(i,s),bn(s,[i])}var qn=[],oo=0,Gd=0;function $c(){for(var i=oo,s=Gd=oo=0;s<i;){var o=qn[s];qn[s++]=null;var u=qn[s];qn[s++]=null;var f=qn[s];qn[s++]=null;var m=qn[s];if(qn[s++]=null,u!==null&&f!==null){var v=u.pending;v===null?f.next=f:(f.next=v.next,v.next=f),u.pending=f}m!==0&&ky(o,f,m)}}function Kc(i,s,o,u){qn[oo++]=i,qn[oo++]=s,qn[oo++]=o,qn[oo++]=u,Gd|=u,i.lanes|=u,i=i.alternate,i!==null&&(i.lanes|=u)}function $d(i,s,o,u){return Kc(i,s,o,u),Qc(i)}function es(i,s){return Kc(i,null,null,s),Qc(i)}function ky(i,s,o){i.lanes|=o;var u=i.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=i.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(i=m.stateNode,i===null||i._visibility&1||(f=!0)),i=m,m=m.return;f&&s!==null&&i.tag===3&&(m=i.stateNode,f=31-on(o),m=m.hiddenUpdates,i=m[f],i===null?m[f]=[s]:i.push(s),s.lane=o|536870912)}function Qc(i){if(50<su)throw su=0,Zp=null,Error(r(185));for(var s=i.return;s!==null;)i=s,s=i.return;return i.tag===3?i.stateNode:null}var lo={},Vy=new WeakMap;function Hn(i,s){if(typeof i=="object"&&i!==null){var o=Vy.get(i);return o!==void 0?o:(s={value:i,source:s,stack:_t(s)},Vy.set(i,s),s)}return{value:i,source:s,stack:_t(s)}}var uo=[],co=0,Yc=null,Xc=0,Gn=[],$n=0,ra=null,Ji=1,tr="";function sa(i,s){uo[co++]=Xc,uo[co++]=Yc,Yc=i,Xc=s}function xy(i,s,o){Gn[$n++]=Ji,Gn[$n++]=tr,Gn[$n++]=ra,ra=i;var u=Ji;i=tr;var f=32-on(u)-1;u&=~(1<<f),o+=1;var m=32-on(s)+f;if(30<m){var v=f-f%5;m=(u&(1<<v)-1).toString(32),u>>=v,f-=v,Ji=1<<32-on(s)+f|o<<f|u,tr=m+i}else Ji=1<<m|o<<f|u,tr=i}function Kd(i){i.return!==null&&(sa(i,1),xy(i,1,0))}function Qd(i){for(;i===Yc;)Yc=uo[--co],uo[co]=null,Xc=uo[--co],uo[co]=null;for(;i===ra;)ra=Gn[--$n],Gn[$n]=null,tr=Gn[--$n],Gn[$n]=null,Ji=Gn[--$n],Gn[$n]=null}var cn=null,$e=null,Ht=!1,ai=null,Si=!1,Yd=Error(r(519));function aa(i){var s=Error(r(418,""));throw Ul(Hn(s,i)),Yd}function My(i){var s=i.stateNode,o=i.type,u=i.memoizedProps;switch(s[Me]=i,s[De]=u,o){case"dialog":Vt("cancel",s),Vt("close",s);break;case"iframe":case"object":case"embed":Vt("load",s);break;case"video":case"audio":for(o=0;o<ou.length;o++)Vt(ou[o],s);break;case"source":Vt("error",s);break;case"img":case"image":case"link":Vt("error",s),Vt("load",s);break;case"details":Vt("toggle",s);break;case"input":Vt("invalid",s),Ks(s,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),$s(s);break;case"select":Vt("invalid",s);break;case"textarea":Vt("invalid",s),Jr(s,u.value,u.defaultValue,u.children),$s(s)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||u.suppressHydrationWarning===!0||GE(s.textContent,o)?(u.popover!=null&&(Vt("beforetoggle",s),Vt("toggle",s)),u.onScroll!=null&&Vt("scroll",s),u.onScrollEnd!=null&&Vt("scrollend",s),u.onClick!=null&&(s.onclick=Ch),s=!0):s=!1,s||aa(i)}function Uy(i){for(cn=i.return;cn;)switch(cn.tag){case 3:case 27:Si=!0;return;case 5:case 13:Si=!1;return;default:cn=cn.return}}function xl(i){if(i!==cn)return!1;if(!Ht)return Uy(i),Ht=!0,!1;var s=!1,o;if((o=i.tag!==3&&i.tag!==27)&&((o=i.tag===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||mm(i.type,i.memoizedProps)),o=!o),o&&(s=!0),s&&$e&&aa(i),Uy(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(r(317));t:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8)if(o=i.data,o==="/$"){if(s===0){$e=li(i.nextSibling);break t}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++;i=i.nextSibling}$e=null}}else $e=cn?li(i.stateNode.nextSibling):null;return!0}function Ml(){$e=cn=null,Ht=!1}function Ul(i){ai===null?ai=[i]:ai.push(i)}var Ll=Error(r(460)),Ly=Error(r(474)),Xd={then:function(){}};function By(i){return i=i.status,i==="fulfilled"||i==="rejected"}function Wc(){}function zy(i,s,o){switch(o=i[o],o===void 0?i.push(s):o!==s&&(s.then(Wc,Wc),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw i=s.reason,i===Ll?Error(r(483)):i;default:if(typeof s.status=="string")s.then(Wc,Wc);else{if(i=te,i!==null&&100<i.shellSuspendCounter)throw Error(r(482));i=s,i.status="pending",i.then(function(u){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=u}},function(u){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=u}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw i=s.reason,i===Ll?Error(r(483)):i}throw Bl=s,Ll}}var Bl=null;function jy(){if(Bl===null)throw Error(r(459));var i=Bl;return Bl=null,i}var ho=null,zl=0;function Zc(i){var s=zl;return zl+=1,ho===null&&(ho=[]),zy(ho,i,s)}function jl(i,s){s=s.props.ref,i.ref=s!==void 0?s:null}function Jc(i,s){throw s.$$typeof===l?Error(r(525)):(i=Object.prototype.toString.call(s),Error(r(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i)))}function Fy(i){var s=i._init;return s(i._payload)}function qy(i){function s(F,U){if(i){var $=F.deletions;$===null?(F.deletions=[U],F.flags|=16):$.push(U)}}function o(F,U){if(!i)return null;for(;U!==null;)s(F,U),U=U.sibling;return null}function u(F){for(var U=new Map;F!==null;)F.key!==null?U.set(F.key,F):U.set(F.index,F),F=F.sibling;return U}function f(F,U){return F=ds(F,U),F.index=0,F.sibling=null,F}function m(F,U,$){return F.index=$,i?($=F.alternate,$!==null?($=$.index,$<U?(F.flags|=33554434,U):$):(F.flags|=33554434,U)):(F.flags|=1048576,U)}function v(F){return i&&F.alternate===null&&(F.flags|=33554434),F}function A(F,U,$,Z){return U===null||U.tag!==6?(U=Hp($,F.mode,Z),U.return=F,U):(U=f(U,$),U.return=F,U)}function C(F,U,$,Z){var ft=$.type;return ft===p?W(F,U,$.props.children,Z,$.key):U!==null&&(U.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===q&&Fy(ft)===U.type)?(U=f(U,$.props),jl(U,$),U.return=F,U):(U=_h($.type,$.key,$.props,null,F.mode,Z),jl(U,$),U.return=F,U)}function B(F,U,$,Z){return U===null||U.tag!==4||U.stateNode.containerInfo!==$.containerInfo||U.stateNode.implementation!==$.implementation?(U=Gp($,F.mode,Z),U.return=F,U):(U=f(U,$.children||[]),U.return=F,U)}function W(F,U,$,Z,ft){return U===null||U.tag!==7?(U=ga($,F.mode,Z,ft),U.return=F,U):(U=f(U,$),U.return=F,U)}function nt(F,U,$){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return U=Hp(""+U,F.mode,$),U.return=F,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case c:return $=_h(U.type,U.key,U.props,null,F.mode,$),jl($,U),$.return=F,$;case d:return U=Gp(U,F.mode,$),U.return=F,U;case q:var Z=U._init;return U=Z(U._payload),nt(F,U,$)}if(lt(U)||ot(U))return U=ga(U,F.mode,$,null),U.return=F,U;if(typeof U.then=="function")return nt(F,Zc(U),$);if(U.$$typeof===I)return nt(F,ph(F,U),$);Jc(F,U)}return null}function K(F,U,$,Z){var ft=U!==null?U.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return ft!==null?null:A(F,U,""+$,Z);if(typeof $=="object"&&$!==null){switch($.$$typeof){case c:return $.key===ft?C(F,U,$,Z):null;case d:return $.key===ft?B(F,U,$,Z):null;case q:return ft=$._init,$=ft($._payload),K(F,U,$,Z)}if(lt($)||ot($))return ft!==null?null:W(F,U,$,Z,null);if(typeof $.then=="function")return K(F,U,Zc($),Z);if($.$$typeof===I)return K(F,U,ph(F,$),Z);Jc(F,$)}return null}function X(F,U,$,Z,ft){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return F=F.get($)||null,A(U,F,""+Z,ft);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case c:return F=F.get(Z.key===null?$:Z.key)||null,C(U,F,Z,ft);case d:return F=F.get(Z.key===null?$:Z.key)||null,B(U,F,Z,ft);case q:var Nt=Z._init;return Z=Nt(Z._payload),X(F,U,$,Z,ft)}if(lt(Z)||ot(Z))return F=F.get($)||null,W(U,F,Z,ft,null);if(typeof Z.then=="function")return X(F,U,$,Zc(Z),ft);if(Z.$$typeof===I)return X(F,U,$,ph(U,Z),ft);Jc(U,Z)}return null}function pt(F,U,$,Z){for(var ft=null,Nt=null,gt=U,yt=U=0,je=null;gt!==null&&yt<$.length;yt++){gt.index>yt?(je=gt,gt=null):je=gt.sibling;var Gt=K(F,gt,$[yt],Z);if(Gt===null){gt===null&&(gt=je);break}i&&gt&&Gt.alternate===null&&s(F,gt),U=m(Gt,U,yt),Nt===null?ft=Gt:Nt.sibling=Gt,Nt=Gt,gt=je}if(yt===$.length)return o(F,gt),Ht&&sa(F,yt),ft;if(gt===null){for(;yt<$.length;yt++)gt=nt(F,$[yt],Z),gt!==null&&(U=m(gt,U,yt),Nt===null?ft=gt:Nt.sibling=gt,Nt=gt);return Ht&&sa(F,yt),ft}for(gt=u(gt);yt<$.length;yt++)je=X(gt,F,yt,$[yt],Z),je!==null&&(i&&je.alternate!==null&&gt.delete(je.key===null?yt:je.key),U=m(je,U,yt),Nt===null?ft=je:Nt.sibling=je,Nt=je);return i&&gt.forEach(function(Es){return s(F,Es)}),Ht&&sa(F,yt),ft}function wt(F,U,$,Z){if($==null)throw Error(r(151));for(var ft=null,Nt=null,gt=U,yt=U=0,je=null,Gt=$.next();gt!==null&&!Gt.done;yt++,Gt=$.next()){gt.index>yt?(je=gt,gt=null):je=gt.sibling;var Es=K(F,gt,Gt.value,Z);if(Es===null){gt===null&&(gt=je);break}i&&gt&&Es.alternate===null&&s(F,gt),U=m(Es,U,yt),Nt===null?ft=Es:Nt.sibling=Es,Nt=Es,gt=je}if(Gt.done)return o(F,gt),Ht&&sa(F,yt),ft;if(gt===null){for(;!Gt.done;yt++,Gt=$.next())Gt=nt(F,Gt.value,Z),Gt!==null&&(U=m(Gt,U,yt),Nt===null?ft=Gt:Nt.sibling=Gt,Nt=Gt);return Ht&&sa(F,yt),ft}for(gt=u(gt);!Gt.done;yt++,Gt=$.next())Gt=X(gt,F,yt,Gt.value,Z),Gt!==null&&(i&&Gt.alternate!==null&&gt.delete(Gt.key===null?yt:Gt.key),U=m(Gt,U,yt),Nt===null?ft=Gt:Nt.sibling=Gt,Nt=Gt);return i&&gt.forEach(function(N1){return s(F,N1)}),Ht&&sa(F,yt),ft}function me(F,U,$,Z){if(typeof $=="object"&&$!==null&&$.type===p&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case c:t:{for(var ft=$.key;U!==null;){if(U.key===ft){if(ft=$.type,ft===p){if(U.tag===7){o(F,U.sibling),Z=f(U,$.props.children),Z.return=F,F=Z;break t}}else if(U.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===q&&Fy(ft)===U.type){o(F,U.sibling),Z=f(U,$.props),jl(Z,$),Z.return=F,F=Z;break t}o(F,U);break}else s(F,U);U=U.sibling}$.type===p?(Z=ga($.props.children,F.mode,Z,$.key),Z.return=F,F=Z):(Z=_h($.type,$.key,$.props,null,F.mode,Z),jl(Z,$),Z.return=F,F=Z)}return v(F);case d:t:{for(ft=$.key;U!==null;){if(U.key===ft)if(U.tag===4&&U.stateNode.containerInfo===$.containerInfo&&U.stateNode.implementation===$.implementation){o(F,U.sibling),Z=f(U,$.children||[]),Z.return=F,F=Z;break t}else{o(F,U);break}else s(F,U);U=U.sibling}Z=Gp($,F.mode,Z),Z.return=F,F=Z}return v(F);case q:return ft=$._init,$=ft($._payload),me(F,U,$,Z)}if(lt($))return pt(F,U,$,Z);if(ot($)){if(ft=ot($),typeof ft!="function")throw Error(r(150));return $=ft.call($),wt(F,U,$,Z)}if(typeof $.then=="function")return me(F,U,Zc($),Z);if($.$$typeof===I)return me(F,U,ph(F,$),Z);Jc(F,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,U!==null&&U.tag===6?(o(F,U.sibling),Z=f(U,$),Z.return=F,F=Z):(o(F,U),Z=Hp($,F.mode,Z),Z.return=F,F=Z),v(F)):o(F,U)}return function(F,U,$,Z){try{zl=0;var ft=me(F,U,$,Z);return ho=null,ft}catch(gt){if(gt===Ll)throw gt;var Nt=Xn(29,gt,null,F.mode);return Nt.lanes=Z,Nt.return=F,Nt}finally{}}}var oa=qy(!0),Hy=qy(!1),fo=Ft(null),th=Ft(0);function Gy(i,s){i=hr,Xt(th,i),Xt(fo,s),hr=i|s.baseLanes}function Wd(){Xt(th,hr),Xt(fo,fo.current)}function Zd(){hr=th.current,he(fo),he(th)}var Kn=Ft(null),Ri=null;function ns(i){var s=i.alternate;Xt(Pe,Pe.current&1),Xt(Kn,i),Ri===null&&(s===null||fo.current!==null||s.memoizedState!==null)&&(Ri=i)}function $y(i){if(i.tag===22){if(Xt(Pe,Pe.current),Xt(Kn,i),Ri===null){var s=i.alternate;s!==null&&s.memoizedState!==null&&(Ri=i)}}else is()}function is(){Xt(Pe,Pe.current),Xt(Kn,Kn.current)}function er(i){he(Kn),Ri===i&&(Ri=null),he(Pe)}var Pe=Ft(0);function eh(i){for(var s=i;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var _I=typeof AbortController<"u"?AbortController:function(){var i=[],s=this.signal={aborted:!1,addEventListener:function(o,u){i.push(u)}};this.abort=function(){s.aborted=!0,i.forEach(function(o){return o()})}},yI=n.unstable_scheduleCallback,vI=n.unstable_NormalPriority,ke={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jd(){return{controller:new _I,data:new Map,refCount:0}}function Fl(i){i.refCount--,i.refCount===0&&yI(vI,function(){i.controller.abort()})}var ql=null,tp=0,po=0,mo=null;function EI(i,s){if(ql===null){var o=ql=[];tp=0,po=am(),mo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return tp++,s.then(Ky,Ky),s}function Ky(){if(--tp===0&&ql!==null){mo!==null&&(mo.status="fulfilled");var i=ql;ql=null,po=0,mo=null;for(var s=0;s<i.length;s++)(0,i[s])()}}function TI(i,s){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return i.then(function(){u.status="fulfilled",u.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var Qy=S.S;S.S=function(i,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&EI(i,s),Qy!==null&&Qy(i,s)};var la=Ft(null);function ep(){var i=la.current;return i!==null?i:te.pooledCache}function nh(i,s){s===null?Xt(la,la.current):Xt(la,s.pool)}function Yy(){var i=ep();return i===null?null:{parent:ke._currentValue,pool:i}}var rs=0,Ct=null,Wt=null,Ae=null,ih=!1,go=!1,ua=!1,rh=0,Hl=0,_o=null,AI=0;function ye(){throw Error(r(321))}function np(i,s){if(s===null)return!1;for(var o=0;o<s.length&&o<i.length;o++)if(!Rn(i[o],s[o]))return!1;return!0}function ip(i,s,o,u,f,m){return rs=m,Ct=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,S.H=i===null||i.memoizedState===null?ca:ss,ua=!1,m=o(u,f),ua=!1,go&&(m=Wy(s,o,u,f)),Xy(i),m}function Xy(i){S.H=Ii;var s=Wt!==null&&Wt.next!==null;if(rs=0,Ae=Wt=Ct=null,ih=!1,Hl=0,_o=null,s)throw Error(r(300));i===null||Be||(i=i.dependencies,i!==null&&dh(i)&&(Be=!0))}function Wy(i,s,o,u){Ct=i;var f=0;do{if(go&&(_o=null),Hl=0,go=!1,25<=f)throw Error(r(301));if(f+=1,Ae=Wt=null,i.updateQueue!=null){var m=i.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}S.H=ha,m=s(o,u)}while(go);return m}function wI(){var i=S.H,s=i.useState()[0];return s=typeof s.then=="function"?Gl(s):s,i=i.useState()[0],(Wt!==null?Wt.memoizedState:null)!==i&&(Ct.flags|=1024),s}function rp(){var i=rh!==0;return rh=0,i}function sp(i,s,o){s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~o}function ap(i){if(ih){for(i=i.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}ih=!1}rs=0,Ae=Wt=Ct=null,go=!1,Hl=rh=0,_o=null}function _n(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?Ct.memoizedState=Ae=i:Ae=Ae.next=i,Ae}function we(){if(Wt===null){var i=Ct.alternate;i=i!==null?i.memoizedState:null}else i=Wt.next;var s=Ae===null?Ct.memoizedState:Ae.next;if(s!==null)Ae=s,Wt=i;else{if(i===null)throw Ct.alternate===null?Error(r(467)):Error(r(310));Wt=i,i={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},Ae===null?Ct.memoizedState=Ae=i:Ae=Ae.next=i}return Ae}var sh;sh=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Gl(i){var s=Hl;return Hl+=1,_o===null&&(_o=[]),i=zy(_o,i,s),s=Ct,(Ae===null?s.memoizedState:Ae.next)===null&&(s=s.alternate,S.H=s===null||s.memoizedState===null?ca:ss),i}function ah(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return Gl(i);if(i.$$typeof===I)return We(i)}throw Error(r(438,String(i)))}function op(i){var s=null,o=Ct.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var u=Ct.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(s={data:u.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=sh(),Ct.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(i),u=0;u<i;u++)o[u]=Y;return s.index++,o}function nr(i,s){return typeof s=="function"?s(i):s}function oh(i){var s=we();return lp(s,Wt,i)}function lp(i,s,o){var u=i.queue;if(u===null)throw Error(r(311));u.lastRenderedReducer=o;var f=i.baseQueue,m=u.pending;if(m!==null){if(f!==null){var v=f.next;f.next=m.next,m.next=v}s.baseQueue=f=m,u.pending=null}if(m=i.baseState,f===null)i.memoizedState=m;else{s=f.next;var A=v=null,C=null,B=s,W=!1;do{var nt=B.lane&-536870913;if(nt!==B.lane?(Lt&nt)===nt:(rs&nt)===nt){var K=B.revertLane;if(K===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),nt===po&&(W=!0);else if((rs&K)===K){B=B.next,K===po&&(W=!0);continue}else nt={lane:0,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},C===null?(A=C=nt,v=m):C=C.next=nt,Ct.lanes|=K,ps|=K;nt=B.action,ua&&o(m,nt),m=B.hasEagerState?B.eagerState:o(m,nt)}else K={lane:nt,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},C===null?(A=C=K,v=m):C=C.next=K,Ct.lanes|=nt,ps|=nt;B=B.next}while(B!==null&&B!==s);if(C===null?v=m:C.next=A,!Rn(m,i.memoizedState)&&(Be=!0,W&&(o=mo,o!==null)))throw o;i.memoizedState=m,i.baseState=v,i.baseQueue=C,u.lastRenderedState=m}return f===null&&(u.lanes=0),[i.memoizedState,u.dispatch]}function up(i){var s=we(),o=s.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=i;var u=o.dispatch,f=o.pending,m=s.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do m=i(m,v.action),v=v.next;while(v!==f);Rn(m,s.memoizedState)||(Be=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,u]}function Zy(i,s,o){var u=Ct,f=we(),m=Ht;if(m){if(o===void 0)throw Error(r(407));o=o()}else o=s();var v=!Rn((Wt||f).memoizedState,o);if(v&&(f.memoizedState=o,Be=!0),f=f.queue,fp(ev.bind(null,u,f,i),[i]),f.getSnapshot!==s||v||Ae!==null&&Ae.memoizedState.tag&1){if(u.flags|=2048,yo(9,tv.bind(null,u,f,o,s),{destroy:void 0},null),te===null)throw Error(r(349));m||(rs&60)!==0||Jy(u,s,o)}return o}function Jy(i,s,o){i.flags|=16384,i={getSnapshot:s,value:o},s=Ct.updateQueue,s===null?(s=sh(),Ct.updateQueue=s,s.stores=[i]):(o=s.stores,o===null?s.stores=[i]:o.push(i))}function tv(i,s,o,u){s.value=o,s.getSnapshot=u,nv(s)&&iv(i)}function ev(i,s,o){return o(function(){nv(s)&&iv(i)})}function nv(i){var s=i.getSnapshot;i=i.value;try{var o=s();return!Rn(i,o)}catch{return!0}}function iv(i){var s=es(i,2);s!==null&&hn(s,i,2)}function cp(i){var s=_n();if(typeof i=="function"){var o=i;if(i=o(),ua){pi(!0);try{o()}finally{pi(!1)}}}return s.memoizedState=s.baseState=i,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:i},s}function rv(i,s,o,u){return i.baseState=o,lp(i,Wt,typeof u=="function"?u:nr)}function bI(i,s,o,u,f){if(ch(i))throw Error(r(485));if(i=s.action,i!==null){var m={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};S.T!==null?o(!0):m.isTransition=!1,u(m),o=s.pending,o===null?(m.next=s.pending=m,sv(s,m)):(m.next=o.next,s.pending=o.next=m)}}function sv(i,s){var o=s.action,u=s.payload,f=i.state;if(s.isTransition){var m=S.T,v={};S.T=v;try{var A=o(f,u),C=S.S;C!==null&&C(v,A),av(i,s,A)}catch(B){hp(i,s,B)}finally{S.T=m}}else try{m=o(f,u),av(i,s,m)}catch(B){hp(i,s,B)}}function av(i,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){ov(i,s,u)},function(u){return hp(i,s,u)}):ov(i,s,o)}function ov(i,s,o){s.status="fulfilled",s.value=o,lv(s),i.state=o,s=i.pending,s!==null&&(o=s.next,o===s?i.pending=null:(o=o.next,s.next=o,sv(i,o)))}function hp(i,s,o){var u=i.pending;if(i.pending=null,u!==null){u=u.next;do s.status="rejected",s.reason=o,lv(s),s=s.next;while(s!==u)}i.action=null}function lv(i){i=i.listeners;for(var s=0;s<i.length;s++)(0,i[s])()}function uv(i,s){return s}function cv(i,s){if(Ht){var o=te.formState;if(o!==null){t:{var u=Ct;if(Ht){if($e){e:{for(var f=$e,m=Si;f.nodeType!==8;){if(!m){f=null;break e}if(f=li(f.nextSibling),f===null){f=null;break e}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){$e=li(f.nextSibling),u=f.data==="F!";break t}}aa(u)}u=!1}u&&(s=o[0])}}return o=_n(),o.memoizedState=o.baseState=s,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:uv,lastRenderedState:s},o.queue=u,o=Cv.bind(null,Ct,u),u.dispatch=o,u=cp(!1),m=_p.bind(null,Ct,!1,u.queue),u=_n(),f={state:s,dispatch:null,action:i,pending:null},u.queue=f,o=bI.bind(null,Ct,f,m,o),f.dispatch=o,u.memoizedState=i,[s,o,!1]}function hv(i){var s=we();return fv(s,Wt,i)}function fv(i,s,o){s=lp(i,s,uv)[0],i=oh(nr)[0],s=typeof s=="object"&&s!==null&&typeof s.then=="function"?Gl(s):s;var u=we(),f=u.queue,m=f.dispatch;return o!==u.memoizedState&&(Ct.flags|=2048,yo(9,SI.bind(null,f,o),{destroy:void 0},null)),[s,m,i]}function SI(i,s){i.action=s}function dv(i){var s=we(),o=Wt;if(o!==null)return fv(s,o,i);we(),s=s.memoizedState,o=we();var u=o.queue.dispatch;return o.memoizedState=i,[s,u,!1]}function yo(i,s,o,u){return i={tag:i,create:s,inst:o,deps:u,next:null},s=Ct.updateQueue,s===null&&(s=sh(),Ct.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=i.next=i:(u=o.next,o.next=i,i.next=u,s.lastEffect=i),i}function pv(){return we().memoizedState}function lh(i,s,o,u){var f=_n();Ct.flags|=i,f.memoizedState=yo(1|s,o,{destroy:void 0},u===void 0?null:u)}function uh(i,s,o,u){var f=we();u=u===void 0?null:u;var m=f.memoizedState.inst;Wt!==null&&u!==null&&np(u,Wt.memoizedState.deps)?f.memoizedState=yo(s,o,m,u):(Ct.flags|=i,f.memoizedState=yo(1|s,o,m,u))}function mv(i,s){lh(8390656,8,i,s)}function fp(i,s){uh(2048,8,i,s)}function gv(i,s){return uh(4,2,i,s)}function _v(i,s){return uh(4,4,i,s)}function yv(i,s){if(typeof s=="function"){i=i();var o=s(i);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function vv(i,s,o){o=o!=null?o.concat([i]):null,uh(4,4,yv.bind(null,s,i),o)}function dp(){}function Ev(i,s){var o=we();s=s===void 0?null:s;var u=o.memoizedState;return s!==null&&np(s,u[1])?u[0]:(o.memoizedState=[i,s],i)}function Tv(i,s){var o=we();s=s===void 0?null:s;var u=o.memoizedState;if(s!==null&&np(s,u[1]))return u[0];if(u=i(),ua){pi(!0);try{i()}finally{pi(!1)}}return o.memoizedState=[u,s],u}function pp(i,s,o){return o===void 0||(rs&1073741824)!==0?i.memoizedState=s:(i.memoizedState=o,i=wE(),Ct.lanes|=i,ps|=i,o)}function Av(i,s,o,u){return Rn(o,s)?o:fo.current!==null?(i=pp(i,o,u),Rn(i,s)||(Be=!0),i):(rs&42)===0?(Be=!0,i.memoizedState=o):(i=wE(),Ct.lanes|=i,ps|=i,s)}function wv(i,s,o,u,f){var m=ut.p;ut.p=m!==0&&8>m?m:8;var v=S.T,A={};S.T=A,_p(i,!1,s,o);try{var C=f(),B=S.S;if(B!==null&&B(A,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var W=TI(C,u);$l(i,s,W,Nn(i))}else $l(i,s,u,Nn(i))}catch(nt){$l(i,s,{then:function(){},status:"rejected",reason:nt},Nn())}finally{ut.p=m,S.T=v}}function RI(){}function mp(i,s,o,u){if(i.tag!==5)throw Error(r(476));var f=bv(i).queue;wv(i,f,s,It,o===null?RI:function(){return Sv(i),o(u)})}function bv(i){var s=i.memoizedState;if(s!==null)return s;s={memoizedState:It,baseState:It,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:It},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:o},next:null},i.memoizedState=s,i=i.alternate,i!==null&&(i.memoizedState=s),s}function Sv(i){var s=bv(i).next.queue;$l(i,s,{},Nn())}function gp(){return We(fu)}function Rv(){return we().memoizedState}function Iv(){return we().memoizedState}function II(i){for(var s=i.return;s!==null;){switch(s.tag){case 24:case 3:var o=Nn();i=ls(o);var u=us(s,i,o);u!==null&&(hn(u,s,o),Yl(u,s,o)),s={cache:Jd()},i.payload=s;return}s=s.return}}function CI(i,s,o){var u=Nn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},ch(i)?Dv(s,o):(o=$d(i,s,o,u),o!==null&&(hn(o,i,u),Nv(o,s,u)))}function Cv(i,s,o){var u=Nn();$l(i,s,o,u)}function $l(i,s,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(ch(i))Dv(s,f);else{var m=i.alternate;if(i.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,A=m(v,o);if(f.hasEagerState=!0,f.eagerState=A,Rn(A,v))return Kc(i,s,f,0),te===null&&$c(),!1}catch{}finally{}if(o=$d(i,s,f,u),o!==null)return hn(o,i,u),Nv(o,s,u),!0}return!1}function _p(i,s,o,u){if(u={lane:2,revertLane:am(),action:u,hasEagerState:!1,eagerState:null,next:null},ch(i)){if(s)throw Error(r(479))}else s=$d(i,o,u,2),s!==null&&hn(s,i,2)}function ch(i){var s=i.alternate;return i===Ct||s!==null&&s===Ct}function Dv(i,s){go=ih=!0;var o=i.pending;o===null?s.next=s:(s.next=o.next,o.next=s),i.pending=s}function Nv(i,s,o){if((o&4194176)!==0){var u=s.lanes;u&=i.pendingLanes,o|=u,s.lanes=o,Gr(i,o)}}var Ii={readContext:We,use:ah,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useLayoutEffect:ye,useInsertionEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useSyncExternalStore:ye,useId:ye};Ii.useCacheRefresh=ye,Ii.useMemoCache=ye,Ii.useHostTransitionStatus=ye,Ii.useFormState=ye,Ii.useActionState=ye,Ii.useOptimistic=ye;var ca={readContext:We,use:ah,useCallback:function(i,s){return _n().memoizedState=[i,s===void 0?null:s],i},useContext:We,useEffect:mv,useImperativeHandle:function(i,s,o){o=o!=null?o.concat([i]):null,lh(4194308,4,yv.bind(null,s,i),o)},useLayoutEffect:function(i,s){return lh(4194308,4,i,s)},useInsertionEffect:function(i,s){lh(4,2,i,s)},useMemo:function(i,s){var o=_n();s=s===void 0?null:s;var u=i();if(ua){pi(!0);try{i()}finally{pi(!1)}}return o.memoizedState=[u,s],u},useReducer:function(i,s,o){var u=_n();if(o!==void 0){var f=o(s);if(ua){pi(!0);try{o(s)}finally{pi(!1)}}}else f=s;return u.memoizedState=u.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},u.queue=i,i=i.dispatch=CI.bind(null,Ct,i),[u.memoizedState,i]},useRef:function(i){var s=_n();return i={current:i},s.memoizedState=i},useState:function(i){i=cp(i);var s=i.queue,o=Cv.bind(null,Ct,s);return s.dispatch=o,[i.memoizedState,o]},useDebugValue:dp,useDeferredValue:function(i,s){var o=_n();return pp(o,i,s)},useTransition:function(){var i=cp(!1);return i=wv.bind(null,Ct,i.queue,!0,!1),_n().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,s,o){var u=Ct,f=_n();if(Ht){if(o===void 0)throw Error(r(407));o=o()}else{if(o=s(),te===null)throw Error(r(349));(Lt&60)!==0||Jy(u,s,o)}f.memoizedState=o;var m={value:o,getSnapshot:s};return f.queue=m,mv(ev.bind(null,u,m,i),[i]),u.flags|=2048,yo(9,tv.bind(null,u,m,o,s),{destroy:void 0},null),o},useId:function(){var i=_n(),s=te.identifierPrefix;if(Ht){var o=tr,u=Ji;o=(u&~(1<<32-on(u)-1)).toString(32)+o,s=":"+s+"R"+o,o=rh++,0<o&&(s+="H"+o.toString(32)),s+=":"}else o=AI++,s=":"+s+"r"+o.toString(32)+":";return i.memoizedState=s},useCacheRefresh:function(){return _n().memoizedState=II.bind(null,Ct)}};ca.useMemoCache=op,ca.useHostTransitionStatus=gp,ca.useFormState=cv,ca.useActionState=cv,ca.useOptimistic=function(i){var s=_n();s.memoizedState=s.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=_p.bind(null,Ct,!0,o),o.dispatch=s,[i,s]};var ss={readContext:We,use:ah,useCallback:Ev,useContext:We,useEffect:fp,useImperativeHandle:vv,useInsertionEffect:gv,useLayoutEffect:_v,useMemo:Tv,useReducer:oh,useRef:pv,useState:function(){return oh(nr)},useDebugValue:dp,useDeferredValue:function(i,s){var o=we();return Av(o,Wt.memoizedState,i,s)},useTransition:function(){var i=oh(nr)[0],s=we().memoizedState;return[typeof i=="boolean"?i:Gl(i),s]},useSyncExternalStore:Zy,useId:Rv};ss.useCacheRefresh=Iv,ss.useMemoCache=op,ss.useHostTransitionStatus=gp,ss.useFormState=hv,ss.useActionState=hv,ss.useOptimistic=function(i,s){var o=we();return rv(o,Wt,i,s)};var ha={readContext:We,use:ah,useCallback:Ev,useContext:We,useEffect:fp,useImperativeHandle:vv,useInsertionEffect:gv,useLayoutEffect:_v,useMemo:Tv,useReducer:up,useRef:pv,useState:function(){return up(nr)},useDebugValue:dp,useDeferredValue:function(i,s){var o=we();return Wt===null?pp(o,i,s):Av(o,Wt.memoizedState,i,s)},useTransition:function(){var i=up(nr)[0],s=we().memoizedState;return[typeof i=="boolean"?i:Gl(i),s]},useSyncExternalStore:Zy,useId:Rv};ha.useCacheRefresh=Iv,ha.useMemoCache=op,ha.useHostTransitionStatus=gp,ha.useFormState=dv,ha.useActionState=dv,ha.useOptimistic=function(i,s){var o=we();return Wt!==null?rv(o,Wt,i,s):(o.baseState=i,[i,o.queue.dispatch])};function yp(i,s,o,u){s=i.memoizedState,o=o(u,s),o=o==null?s:N({},s,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var vp={isMounted:function(i){return(i=i._reactInternals)?dt(i)===i:!1},enqueueSetState:function(i,s,o){i=i._reactInternals;var u=Nn(),f=ls(u);f.payload=s,o!=null&&(f.callback=o),s=us(i,f,u),s!==null&&(hn(s,i,u),Yl(s,i,u))},enqueueReplaceState:function(i,s,o){i=i._reactInternals;var u=Nn(),f=ls(u);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=us(i,f,u),s!==null&&(hn(s,i,u),Yl(s,i,u))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var o=Nn(),u=ls(o);u.tag=2,s!=null&&(u.callback=s),s=us(i,u,o),s!==null&&(hn(s,i,o),Yl(s,i,o))}};function Ov(i,s,o,u,f,m,v){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,m,v):s.prototype&&s.prototype.isPureReactComponent?!kl(o,u)||!kl(f,m):!0}function Pv(i,s,o,u){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==i&&vp.enqueueReplaceState(s,s.state,null)}function fa(i,s){var o=s;if("ref"in s){o={};for(var u in s)u!=="ref"&&(o[u]=s[u])}if(i=i.defaultProps){o===s&&(o=N({},o));for(var f in i)o[f]===void 0&&(o[f]=i[f])}return o}var hh=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function kv(i){hh(i)}function Vv(i){console.error(i)}function xv(i){hh(i)}function fh(i,s){try{var o=i.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(u){setTimeout(function(){throw u})}}function Mv(i,s,o){try{var u=i.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Ep(i,s,o){return o=ls(o),o.tag=3,o.payload={element:null},o.callback=function(){fh(i,s)},o}function Uv(i){return i=ls(i),i.tag=3,i}function Lv(i,s,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;i.payload=function(){return f(m)},i.callback=function(){Mv(s,o,u)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(i.callback=function(){Mv(s,o,u),typeof f!="function"&&(ms===null?ms=new Set([this]):ms.add(this));var A=u.stack;this.componentDidCatch(u.value,{componentStack:A!==null?A:""})})}function DI(i,s,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(s=o.alternate,s!==null&&Ql(s,o,f,!0),o=Kn.current,o!==null){switch(o.tag){case 13:return Ri===null?em():o.alternate===null&&pe===0&&(pe=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Xd?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([u]):s.add(u),im(i,u,f)),!1;case 22:return o.flags|=65536,u===Xd?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([u]):o.add(u)),im(i,u,f)),!1}throw Error(r(435,o.tag))}return im(i,u,f),em(),!1}if(Ht)return s=Kn.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,u!==Yd&&(i=Error(r(422),{cause:u}),Ul(Hn(i,o)))):(u!==Yd&&(s=Error(r(423),{cause:u}),Ul(Hn(s,o))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,u=Hn(u,o),f=Ep(i.stateNode,u,f),xp(i,f),pe!==4&&(pe=2)),!1;var m=Error(r(520),{cause:u});if(m=Hn(m,o),iu===null?iu=[m]:iu.push(m),pe!==4&&(pe=2),s===null)return!0;u=Hn(u,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,i=f&-f,o.lanes|=i,i=Ep(o.stateNode,u,i),xp(o,i),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ms===null||!ms.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=Uv(f),Lv(f,i,o,u),xp(o,f),!1}o=o.return}while(o!==null);return!1}var Bv=Error(r(461)),Be=!1;function Ke(i,s,o,u){s.child=i===null?Hy(s,null,o,u):oa(s,i.child,o,u)}function zv(i,s,o,u,f){o=o.render;var m=s.ref;if("ref"in u){var v={};for(var A in u)A!=="ref"&&(v[A]=u[A])}else v=u;return pa(s),u=ip(i,s,o,v,m,f),A=rp(),i!==null&&!Be?(sp(i,s,f),ir(i,s,f)):(Ht&&A&&Kd(s),s.flags|=1,Ke(i,s,u,f),s.child)}function jv(i,s,o,u,f){if(i===null){var m=o.type;return typeof m=="function"&&!qp(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,Fv(i,s,m,u,f)):(i=_h(o.type,null,u,s,s.mode,f),i.ref=s.ref,i.return=s,s.child=i)}if(m=i.child,!Dp(i,f)){var v=m.memoizedProps;if(o=o.compare,o=o!==null?o:kl,o(v,u)&&i.ref===s.ref)return ir(i,s,f)}return s.flags|=1,i=ds(m,u),i.ref=s.ref,i.return=s,s.child=i}function Fv(i,s,o,u,f){if(i!==null){var m=i.memoizedProps;if(kl(m,u)&&i.ref===s.ref)if(Be=!1,s.pendingProps=u=m,Dp(i,f))(i.flags&131072)!==0&&(Be=!0);else return s.lanes=i.lanes,ir(i,s,f)}return Tp(i,s,o,u,f)}function qv(i,s,o){var u=s.pendingProps,f=u.children,m=(s.stateNode._pendingVisibility&2)!==0,v=i!==null?i.memoizedState:null;if(Kl(i,s),u.mode==="hidden"||m){if((s.flags&128)!==0){if(u=v!==null?v.baseLanes|o:o,i!==null){for(f=s.child=i.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;s.childLanes=m&~u}else s.childLanes=0,s.child=null;return Hv(i,s,u,o)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},i!==null&&nh(s,v!==null?v.cachePool:null),v!==null?Gy(s,v):Wd(),$y(s);else return s.lanes=s.childLanes=536870912,Hv(i,s,v!==null?v.baseLanes|o:o,o)}else v!==null?(nh(s,v.cachePool),Gy(s,v),is(),s.memoizedState=null):(i!==null&&nh(s,null),Wd(),is());return Ke(i,s,f,o),s.child}function Hv(i,s,o,u){var f=ep();return f=f===null?null:{parent:ke._currentValue,pool:f},s.memoizedState={baseLanes:o,cachePool:f},i!==null&&nh(s,null),Wd(),$y(s),i!==null&&Ql(i,s,u,!0),null}function Kl(i,s){var o=s.ref;if(o===null)i!==null&&i.ref!==null&&(s.flags|=2097664);else{if(typeof o!="function"&&typeof o!="object")throw Error(r(284));(i===null||i.ref!==o)&&(s.flags|=2097664)}}function Tp(i,s,o,u,f){return pa(s),o=ip(i,s,o,u,void 0,f),u=rp(),i!==null&&!Be?(sp(i,s,f),ir(i,s,f)):(Ht&&u&&Kd(s),s.flags|=1,Ke(i,s,o,f),s.child)}function Gv(i,s,o,u,f,m){return pa(s),s.updateQueue=null,o=Wy(s,u,o,f),Xy(i),u=rp(),i!==null&&!Be?(sp(i,s,m),ir(i,s,m)):(Ht&&u&&Kd(s),s.flags|=1,Ke(i,s,o,m),s.child)}function $v(i,s,o,u,f){if(pa(s),s.stateNode===null){var m=lo,v=o.contextType;typeof v=="object"&&v!==null&&(m=We(v)),m=new o(u,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=vp,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=u,m.state=s.memoizedState,m.refs={},kp(s),v=o.contextType,m.context=typeof v=="object"&&v!==null?We(v):lo,m.state=s.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(yp(s,o,v,u),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&vp.enqueueReplaceState(m,m.state,null),Wl(s,u,m,f),Xl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!0}else if(i===null){m=s.stateNode;var A=s.memoizedProps,C=fa(o,A);m.props=C;var B=m.context,W=o.contextType;v=lo,typeof W=="object"&&W!==null&&(v=We(W));var nt=o.getDerivedStateFromProps;W=typeof nt=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=s.pendingProps!==A,W||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||B!==v)&&Pv(s,m,u,v),os=!1;var K=s.memoizedState;m.state=K,Wl(s,u,m,f),Xl(),B=s.memoizedState,A||K!==B||os?(typeof nt=="function"&&(yp(s,o,nt,u),B=s.memoizedState),(C=os||Ov(s,o,C,u,K,B,v))?(W||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=B),m.props=u,m.state=B,m.context=v,u=C):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{m=s.stateNode,Vp(i,s),v=s.memoizedProps,W=fa(o,v),m.props=W,nt=s.pendingProps,K=m.context,B=o.contextType,C=lo,typeof B=="object"&&B!==null&&(C=We(B)),A=o.getDerivedStateFromProps,(B=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==nt||K!==C)&&Pv(s,m,u,C),os=!1,K=s.memoizedState,m.state=K,Wl(s,u,m,f),Xl();var X=s.memoizedState;v!==nt||K!==X||os||i!==null&&i.dependencies!==null&&dh(i.dependencies)?(typeof A=="function"&&(yp(s,o,A,u),X=s.memoizedState),(W=os||Ov(s,o,W,u,K,X,C)||i!==null&&i.dependencies!==null&&dh(i.dependencies))?(B||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,X,C),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,X,C)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===i.memoizedProps&&K===i.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===i.memoizedProps&&K===i.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=X),m.props=u,m.state=X,m.context=C,u=W):(typeof m.componentDidUpdate!="function"||v===i.memoizedProps&&K===i.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===i.memoizedProps&&K===i.memoizedState||(s.flags|=1024),u=!1)}return m=u,Kl(i,s),u=(s.flags&128)!==0,m||u?(m=s.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,i!==null&&u?(s.child=oa(s,i.child,null,f),s.child=oa(s,null,o,f)):Ke(i,s,o,f),s.memoizedState=m.state,i=s.child):i=ir(i,s,f),i}function Kv(i,s,o,u){return Ml(),s.flags|=256,Ke(i,s,o,u),s.child}var Ap={dehydrated:null,treeContext:null,retryLane:0};function wp(i){return{baseLanes:i,cachePool:Yy()}}function bp(i,s,o){return i=i!==null?i.childLanes&~o:0,s&&(i|=Wn),i}function Qv(i,s,o){var u=s.pendingProps,f=!1,m=(s.flags&128)!==0,v;if((v=m)||(v=i!==null&&i.memoizedState===null?!1:(Pe.current&2)!==0),v&&(f=!0,s.flags&=-129),v=(s.flags&32)!==0,s.flags&=-33,i===null){if(Ht){if(f?ns(s):is(),Ht){var A=$e,C;if(C=A){t:{for(C=A,A=Si;C.nodeType!==8;){if(!A){A=null;break t}if(C=li(C.nextSibling),C===null){A=null;break t}}A=C}A!==null?(s.memoizedState={dehydrated:A,treeContext:ra!==null?{id:Ji,overflow:tr}:null,retryLane:536870912},C=Xn(18,null,null,0),C.stateNode=A,C.return=s,s.child=C,cn=s,$e=null,C=!0):C=!1}C||aa(s)}if(A=s.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return A.data==="$!"?s.lanes=16:s.lanes=536870912,null;er(s)}return A=u.children,u=u.fallback,f?(is(),f=s.mode,A=Rp({mode:"hidden",children:A},f),u=ga(u,f,o,null),A.return=s,u.return=s,A.sibling=u,s.child=A,f=s.child,f.memoizedState=wp(o),f.childLanes=bp(i,v,o),s.memoizedState=Ap,u):(ns(s),Sp(s,A))}if(C=i.memoizedState,C!==null&&(A=C.dehydrated,A!==null)){if(m)s.flags&256?(ns(s),s.flags&=-257,s=Ip(i,s,o)):s.memoizedState!==null?(is(),s.child=i.child,s.flags|=128,s=null):(is(),f=u.fallback,A=s.mode,u=Rp({mode:"visible",children:u.children},A),f=ga(f,A,o,null),f.flags|=2,u.return=s,f.return=s,u.sibling=f,s.child=u,oa(s,i.child,null,o),u=s.child,u.memoizedState=wp(o),u.childLanes=bp(i,v,o),s.memoizedState=Ap,s=f);else if(ns(s),A.data==="$!"){if(v=A.nextSibling&&A.nextSibling.dataset,v)var B=v.dgst;v=B,u=Error(r(419)),u.stack="",u.digest=v,Ul({value:u,source:null,stack:null}),s=Ip(i,s,o)}else if(Be||Ql(i,s,o,!1),v=(o&i.childLanes)!==0,Be||v){if(v=te,v!==null){if(u=o&-o,(u&42)!==0)u=1;else switch(u){case 2:u=1;break;case 8:u=4;break;case 32:u=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:u=64;break;case 268435456:u=134217728;break;default:u=0}if(u=(u&(v.suspendedLanes|o))!==0?0:u,u!==0&&u!==C.retryLane)throw C.retryLane=u,es(i,u),hn(v,i,u),Bv}A.data==="$?"||em(),s=Ip(i,s,o)}else A.data==="$?"?(s.flags|=128,s.child=i.child,s=HI.bind(null,i),A._reactRetry=s,s=null):(i=C.treeContext,$e=li(A.nextSibling),cn=s,Ht=!0,ai=null,Si=!1,i!==null&&(Gn[$n++]=Ji,Gn[$n++]=tr,Gn[$n++]=ra,Ji=i.id,tr=i.overflow,ra=s),s=Sp(s,u.children),s.flags|=4096);return s}return f?(is(),f=u.fallback,A=s.mode,C=i.child,B=C.sibling,u=ds(C,{mode:"hidden",children:u.children}),u.subtreeFlags=C.subtreeFlags&31457280,B!==null?f=ds(B,f):(f=ga(f,A,o,null),f.flags|=2),f.return=s,u.return=s,u.sibling=f,s.child=u,u=f,f=s.child,A=i.child.memoizedState,A===null?A=wp(o):(C=A.cachePool,C!==null?(B=ke._currentValue,C=C.parent!==B?{parent:B,pool:B}:C):C=Yy(),A={baseLanes:A.baseLanes|o,cachePool:C}),f.memoizedState=A,f.childLanes=bp(i,v,o),s.memoizedState=Ap,u):(ns(s),o=i.child,i=o.sibling,o=ds(o,{mode:"visible",children:u.children}),o.return=s,o.sibling=null,i!==null&&(v=s.deletions,v===null?(s.deletions=[i],s.flags|=16):v.push(i)),s.child=o,s.memoizedState=null,o)}function Sp(i,s){return s=Rp({mode:"visible",children:s},i.mode),s.return=i,i.child=s}function Rp(i,s){return EE(i,s,0,null)}function Ip(i,s,o){return oa(s,i.child,null,o),i=Sp(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function Yv(i,s,o){i.lanes|=s;var u=i.alternate;u!==null&&(u.lanes|=s),Op(i.return,s,o)}function Cp(i,s,o,u,f){var m=i.memoizedState;m===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function Xv(i,s,o){var u=s.pendingProps,f=u.revealOrder,m=u.tail;if(Ke(i,s,u.children,o),u=Pe.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)t:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Yv(i,o,s);else if(i.tag===19)Yv(i,o,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break t;for(;i.sibling===null;){if(i.return===null||i.return===s)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}switch(Xt(Pe,u),f){case"forwards":for(o=s.child,f=null;o!==null;)i=o.alternate,i!==null&&eh(i)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Cp(s,!1,f,o,m);break;case"backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(i=f.alternate,i!==null&&eh(i)===null){s.child=f;break}i=f.sibling,f.sibling=o,o=f,f=i}Cp(s,!0,o,null,m);break;case"together":Cp(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function ir(i,s,o){if(i!==null&&(s.dependencies=i.dependencies),ps|=s.lanes,(o&s.childLanes)===0)if(i!==null){if(Ql(i,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(i!==null&&s.child!==i.child)throw Error(r(153));if(s.child!==null){for(i=s.child,o=ds(i,i.pendingProps),s.child=o,o.return=s;i.sibling!==null;)i=i.sibling,o=o.sibling=ds(i,i.pendingProps),o.return=s;o.sibling=null}return s.child}function Dp(i,s){return(i.lanes&s)!==0?!0:(i=i.dependencies,!!(i!==null&&dh(i)))}function NI(i,s,o){switch(s.tag){case 3:Br(s,s.stateNode.containerInfo),as(s,ke,i.memoizedState.cache),Ml();break;case 27:case 5:fl(s);break;case 4:Br(s,s.stateNode.containerInfo);break;case 10:as(s,s.type,s.memoizedProps.value);break;case 13:var u=s.memoizedState;if(u!==null)return u.dehydrated!==null?(ns(s),s.flags|=128,null):(o&s.child.childLanes)!==0?Qv(i,s,o):(ns(s),i=ir(i,s,o),i!==null?i.sibling:null);ns(s);break;case 19:var f=(i.flags&128)!==0;if(u=(o&s.childLanes)!==0,u||(Ql(i,s,o,!1),u=(o&s.childLanes)!==0),f){if(u)return Xv(i,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Xt(Pe,Pe.current),u)break;return null;case 22:case 23:return s.lanes=0,qv(i,s,o);case 24:as(s,ke,i.memoizedState.cache)}return ir(i,s,o)}function Wv(i,s,o){if(i!==null)if(i.memoizedProps!==s.pendingProps)Be=!0;else{if(!Dp(i,o)&&(s.flags&128)===0)return Be=!1,NI(i,s,o);Be=(i.flags&131072)!==0}else Be=!1,Ht&&(s.flags&1048576)!==0&&xy(s,Xc,s.index);switch(s.lanes=0,s.tag){case 16:t:{i=s.pendingProps;var u=s.elementType,f=u._init;if(u=f(u._payload),s.type=u,typeof u=="function")qp(u)?(i=fa(u,i),s.tag=1,s=$v(null,s,u,i,o)):(s.tag=0,s=Tp(null,s,u,i,o));else{if(u!=null){if(f=u.$$typeof,f===D){s.tag=11,s=zv(null,s,u,i,o);break t}else if(f===M){s.tag=14,s=jv(null,s,u,i,o);break t}}throw s=R(u)||u,Error(r(306,s,""))}}return s;case 0:return Tp(i,s,s.type,s.pendingProps,o);case 1:return u=s.type,f=fa(u,s.pendingProps),$v(i,s,u,f,o);case 3:t:{if(Br(s,s.stateNode.containerInfo),i===null)throw Error(r(387));var m=s.pendingProps;f=s.memoizedState,u=f.element,Vp(i,s),Wl(s,m,null,o);var v=s.memoizedState;if(m=v.cache,as(s,ke,m),m!==f.cache&&Pp(s,[ke],o,!0),Xl(),m=v.element,f.isDehydrated)if(f={element:m,isDehydrated:!1,cache:v.cache},s.updateQueue.baseState=f,s.memoizedState=f,s.flags&256){s=Kv(i,s,m,o);break t}else if(m!==u){u=Hn(Error(r(424)),s),Ul(u),s=Kv(i,s,m,o);break t}else for($e=li(s.stateNode.containerInfo.firstChild),cn=s,Ht=!0,ai=null,Si=!0,o=Hy(s,null,m,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ml(),m===u){s=ir(i,s,o);break t}Ke(i,s,m,o)}s=s.child}return s;case 26:return Kl(i,s),i===null?(o=tT(s.type,null,s.pendingProps,null))?s.memoizedState=o:Ht||(o=s.type,i=s.pendingProps,u=Dh(Mn.current).createElement(o),u[Me]=s,u[De]=i,Qe(u,o,i),ae(u),s.stateNode=u):s.memoizedState=tT(s.type,i.memoizedProps,s.pendingProps,i.memoizedState),null;case 27:return fl(s),i===null&&Ht&&(u=s.stateNode=WE(s.type,s.pendingProps,Mn.current),cn=s,Si=!0,$e=li(u.firstChild)),u=s.pendingProps.children,i!==null||Ht?Ke(i,s,u,o):s.child=oa(s,null,u,o),Kl(i,s),s.child;case 5:return i===null&&Ht&&((f=u=$e)&&(u=a1(u,s.type,s.pendingProps,Si),u!==null?(s.stateNode=u,cn=s,$e=li(u.firstChild),Si=!1,f=!0):f=!1),f||aa(s)),fl(s),f=s.type,m=s.pendingProps,v=i!==null?i.memoizedProps:null,u=m.children,mm(f,m)?u=null:v!==null&&mm(f,v)&&(s.flags|=32),s.memoizedState!==null&&(f=ip(i,s,wI,null,null,o),fu._currentValue=f),Kl(i,s),Ke(i,s,u,o),s.child;case 6:return i===null&&Ht&&((i=o=$e)&&(o=o1(o,s.pendingProps,Si),o!==null?(s.stateNode=o,cn=s,$e=null,i=!0):i=!1),i||aa(s)),null;case 13:return Qv(i,s,o);case 4:return Br(s,s.stateNode.containerInfo),u=s.pendingProps,i===null?s.child=oa(s,null,u,o):Ke(i,s,u,o),s.child;case 11:return zv(i,s,s.type,s.pendingProps,o);case 7:return Ke(i,s,s.pendingProps,o),s.child;case 8:return Ke(i,s,s.pendingProps.children,o),s.child;case 12:return Ke(i,s,s.pendingProps.children,o),s.child;case 10:return u=s.pendingProps,as(s,s.type,u.value),Ke(i,s,u.children,o),s.child;case 9:return f=s.type._context,u=s.pendingProps.children,pa(s),f=We(f),u=u(f),s.flags|=1,Ke(i,s,u,o),s.child;case 14:return jv(i,s,s.type,s.pendingProps,o);case 15:return Fv(i,s,s.type,s.pendingProps,o);case 19:return Xv(i,s,o);case 22:return qv(i,s,o);case 24:return pa(s),u=We(ke),i===null?(f=ep(),f===null&&(f=te,m=Jd(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),s.memoizedState={parent:u,cache:f},kp(s),as(s,ke,f)):((i.lanes&o)!==0&&(Vp(i,s),Wl(s,null,null,o),Xl()),f=i.memoizedState,m=s.memoizedState,f.parent!==u?(f={parent:u,cache:u},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),as(s,ke,u)):(u=m.cache,as(s,ke,u),u!==f.cache&&Pp(s,[ke],o,!0))),Ke(i,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(r(156,s.tag))}var Np=Ft(null),da=null,rr=null;function as(i,s,o){Xt(Np,s._currentValue),s._currentValue=o}function sr(i){i._currentValue=Np.current,he(Np)}function Op(i,s,o){for(;i!==null;){var u=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),i===o)break;i=i.return}}function Pp(i,s,o,u){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var m=f.dependencies;if(m!==null){var v=f.child;m=m.firstContext;t:for(;m!==null;){var A=m;m=f;for(var C=0;C<s.length;C++)if(A.context===s[C]){m.lanes|=o,A=m.alternate,A!==null&&(A.lanes|=o),Op(m.return,o,i),u||(v=null);break t}m=A.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(r(341));v.lanes|=o,m=v.alternate,m!==null&&(m.lanes|=o),Op(v,o,i),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===i){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function Ql(i,s,o,u){i=null;for(var f=s,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var A=f.type;Rn(f.pendingProps.value,v.value)||(i!==null?i.push(A):i=[A])}}else if(f===Lr.current){if(v=f.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(fu):i=[fu])}f=f.return}i!==null&&Pp(s,i,o,u),s.flags|=262144}function dh(i){for(i=i.firstContext;i!==null;){if(!Rn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function pa(i){da=i,rr=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function We(i){return Zv(da,i)}function ph(i,s){return da===null&&pa(i),Zv(i,s)}function Zv(i,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},rr===null){if(i===null)throw Error(r(308));rr=s,i.dependencies={lanes:0,firstContext:s},i.flags|=524288}else rr=rr.next=s;return o}var os=!1;function kp(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vp(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function ls(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function us(i,s,o){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,(le&2)!==0){var f=u.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s,s=Qc(i),ky(i,null,o),s}return Kc(i,u,s,o),Qc(i)}function Yl(i,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194176)!==0)){var u=s.lanes;u&=i.pendingLanes,o|=u,s.lanes=o,Gr(i,o)}}function xp(i,s){var o=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=v:m=m.next=v,o=o.next}while(o!==null);m===null?f=m=s:m=m.next=s}else f=m=s;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=s:i.next=s,o.lastBaseUpdate=s}var Mp=!1;function Xl(){if(Mp){var i=mo;if(i!==null)throw i}}function Wl(i,s,o,u){Mp=!1;var f=i.updateQueue;os=!1;var m=f.firstBaseUpdate,v=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var C=A,B=C.next;C.next=null,v===null?m=B:v.next=B,v=C;var W=i.alternate;W!==null&&(W=W.updateQueue,A=W.lastBaseUpdate,A!==v&&(A===null?W.firstBaseUpdate=B:A.next=B,W.lastBaseUpdate=C))}if(m!==null){var nt=f.baseState;v=0,W=B=C=null,A=m;do{var K=A.lane&-536870913,X=K!==A.lane;if(X?(Lt&K)===K:(u&K)===K){K!==0&&K===po&&(Mp=!0),W!==null&&(W=W.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var pt=i,wt=A;K=s;var me=o;switch(wt.tag){case 1:if(pt=wt.payload,typeof pt=="function"){nt=pt.call(me,nt,K);break t}nt=pt;break t;case 3:pt.flags=pt.flags&-65537|128;case 0:if(pt=wt.payload,K=typeof pt=="function"?pt.call(me,nt,K):pt,K==null)break t;nt=N({},nt,K);break t;case 2:os=!0}}K=A.callback,K!==null&&(i.flags|=64,X&&(i.flags|=8192),X=f.callbacks,X===null?f.callbacks=[K]:X.push(K))}else X={lane:K,tag:A.tag,payload:A.payload,callback:A.callback,next:null},W===null?(B=W=X,C=nt):W=W.next=X,v|=K;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;X=A,A=X.next,X.next=null,f.lastBaseUpdate=X,f.shared.pending=null}}while(!0);W===null&&(C=nt),f.baseState=C,f.firstBaseUpdate=B,f.lastBaseUpdate=W,m===null&&(f.shared.lanes=0),ps|=v,i.lanes=v,i.memoizedState=nt}}function Jv(i,s){if(typeof i!="function")throw Error(r(191,i));i.call(s)}function tE(i,s){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)Jv(o[i],s)}function Zl(i,s){try{var o=s.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&i)===i){u=void 0;var m=o.create,v=o.inst;u=m(),v.destroy=u}o=o.next}while(o!==f)}}catch(A){Jt(s,s.return,A)}}function cs(i,s,o){try{var u=s.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&i)===i){var v=u.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,f=s;var C=o;try{A()}catch(B){Jt(f,C,B)}}}u=u.next}while(u!==m)}}catch(B){Jt(s,s.return,B)}}function eE(i){var s=i.updateQueue;if(s!==null){var o=i.stateNode;try{tE(s,o)}catch(u){Jt(i,i.return,u)}}}function nE(i,s,o){o.props=fa(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(u){Jt(i,s,u)}}function ma(i,s){try{var o=i.ref;if(o!==null){var u=i.stateNode;switch(i.tag){case 26:case 27:case 5:var f=u;break;default:f=u}typeof o=="function"?i.refCleanup=o(f):o.current=f}}catch(m){Jt(i,s,m)}}function In(i,s){var o=i.ref,u=i.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){Jt(i,s,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Jt(i,s,f)}else o.current=null}function iE(i){var s=i.type,o=i.memoizedProps,u=i.stateNode;try{t:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break t;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){Jt(i,i.return,f)}}function rE(i,s,o){try{var u=i.stateNode;e1(u,i.type,o,s),u[De]=s}catch(f){Jt(i,i.return,f)}}function sE(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27||i.tag===4}function Up(i){t:for(;;){for(;i.sibling===null;){if(i.return===null||sE(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==27&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue t;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Lp(i,s,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,s?o.nodeType===8?o.parentNode.insertBefore(i,s):o.insertBefore(i,s):(o.nodeType===8?(s=o.parentNode,s.insertBefore(i,o)):(s=o,s.appendChild(i)),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Ch));else if(u!==4&&u!==27&&(i=i.child,i!==null))for(Lp(i,s,o),i=i.sibling;i!==null;)Lp(i,s,o),i=i.sibling}function mh(i,s,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,s?o.insertBefore(i,s):o.appendChild(i);else if(u!==4&&u!==27&&(i=i.child,i!==null))for(mh(i,s,o),i=i.sibling;i!==null;)mh(i,s,o),i=i.sibling}var ar=!1,de=!1,Bp=!1,aE=typeof WeakSet=="function"?WeakSet:Set,ze=null,oE=!1;function OI(i,s){if(i=i.containerInfo,dm=xh,i=by(i),jd(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else t:{o=(o=i.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break t}var v=0,A=-1,C=-1,B=0,W=0,nt=i,K=null;e:for(;;){for(var X;nt!==o||f!==0&&nt.nodeType!==3||(A=v+f),nt!==m||u!==0&&nt.nodeType!==3||(C=v+u),nt.nodeType===3&&(v+=nt.nodeValue.length),(X=nt.firstChild)!==null;)K=nt,nt=X;for(;;){if(nt===i)break e;if(K===o&&++B===f&&(A=v),K===m&&++W===u&&(C=v),(X=nt.nextSibling)!==null)break;nt=K,K=nt.parentNode}nt=X}o=A===-1||C===-1?null:{start:A,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(pm={focusedElem:i,selectionRange:o},xh=!1,ze=s;ze!==null;)if(s=ze,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,ze=i;else for(;ze!==null;){switch(s=ze,m=s.alternate,i=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&m!==null){i=void 0,o=s,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var pt=fa(o.type,f,o.elementType===o.type);i=u.getSnapshotBeforeUpdate(pt,m),u.__reactInternalSnapshotBeforeUpdate=i}catch(wt){Jt(o,o.return,wt)}}break;case 3:if((i&1024)!==0){if(i=s.stateNode.containerInfo,o=i.nodeType,o===9)ym(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":ym(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(r(163))}if(i=s.sibling,i!==null){i.return=s.return,ze=i;break}ze=s.return}return pt=oE,oE=!1,pt}function lE(i,s,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:lr(i,o),u&4&&Zl(5,o);break;case 1:if(lr(i,o),u&4)if(i=o.stateNode,s===null)try{i.componentDidMount()}catch(A){Jt(o,o.return,A)}else{var f=fa(o.type,s.memoizedProps);s=s.memoizedState;try{i.componentDidUpdate(f,s,i.__reactInternalSnapshotBeforeUpdate)}catch(A){Jt(o,o.return,A)}}u&64&&eE(o),u&512&&ma(o,o.return);break;case 3:if(lr(i,o),u&64&&(u=o.updateQueue,u!==null)){if(i=null,o.child!==null)switch(o.child.tag){case 27:case 5:i=o.child.stateNode;break;case 1:i=o.child.stateNode}try{tE(u,i)}catch(A){Jt(o,o.return,A)}}break;case 26:lr(i,o),u&512&&ma(o,o.return);break;case 27:case 5:lr(i,o),s===null&&u&4&&iE(o),u&512&&ma(o,o.return);break;case 12:lr(i,o);break;case 13:lr(i,o),u&4&&hE(i,o);break;case 22:if(f=o.memoizedState!==null||ar,!f){s=s!==null&&s.memoizedState!==null||de;var m=ar,v=de;ar=f,(de=s)&&!v?hs(i,o,(o.subtreeFlags&8772)!==0):lr(i,o),ar=m,de=v}u&512&&(o.memoizedProps.mode==="manual"?ma(o,o.return):In(o,o.return));break;default:lr(i,o)}}function uE(i){var s=i.alternate;s!==null&&(i.alternate=null,uE(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&Gs(s)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var be=null,Cn=!1;function or(i,s,o){for(o=o.child;o!==null;)cE(i,s,o),o=o.sibling}function cE(i,s,o){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(zr,o)}catch{}switch(o.tag){case 26:de||In(o,s),or(i,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:de||In(o,s);var u=be,f=Cn;for(be=o.stateNode,or(i,s,o),o=o.stateNode,s=o.attributes;s.length;)o.removeAttributeNode(s[0]);Gs(o),be=u,Cn=f;break;case 5:de||In(o,s);case 6:f=be;var m=Cn;if(be=null,or(i,s,o),be=f,Cn=m,be!==null)if(Cn)try{i=be,u=o.stateNode,i.nodeType===8?i.parentNode.removeChild(u):i.removeChild(u)}catch(v){Jt(o,s,v)}else try{be.removeChild(o.stateNode)}catch(v){Jt(o,s,v)}break;case 18:be!==null&&(Cn?(s=be,o=o.stateNode,s.nodeType===8?_m(s.parentNode,o):s.nodeType===1&&_m(s,o),gu(s)):_m(be,o.stateNode));break;case 4:u=be,f=Cn,be=o.stateNode.containerInfo,Cn=!0,or(i,s,o),be=u,Cn=f;break;case 0:case 11:case 14:case 15:de||cs(2,o,s),de||cs(4,o,s),or(i,s,o);break;case 1:de||(In(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"&&nE(o,s,u)),or(i,s,o);break;case 21:or(i,s,o);break;case 22:de||In(o,s),de=(u=de)||o.memoizedState!==null,or(i,s,o),de=u;break;default:or(i,s,o)}}function hE(i,s){if(s.memoizedState===null&&(i=s.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{gu(i)}catch(o){Jt(s,s.return,o)}}function PI(i){switch(i.tag){case 13:case 19:var s=i.stateNode;return s===null&&(s=i.stateNode=new aE),s;case 22:return i=i.stateNode,s=i._retryCache,s===null&&(s=i._retryCache=new aE),s;default:throw Error(r(435,i.tag))}}function zp(i,s){var o=PI(i);s.forEach(function(u){var f=GI.bind(null,i,u);o.has(u)||(o.add(u),u.then(f,f))})}function Qn(i,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=i,v=s,A=v;t:for(;A!==null;){switch(A.tag){case 27:case 5:be=A.stateNode,Cn=!1;break t;case 3:be=A.stateNode.containerInfo,Cn=!0;break t;case 4:be=A.stateNode.containerInfo,Cn=!0;break t}A=A.return}if(be===null)throw Error(r(160));cE(m,v,f),be=null,Cn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)fE(s,i),s=s.sibling}var oi=null;function fE(i,s){var o=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:Qn(s,i),Yn(i),u&4&&(cs(3,i,i.return),Zl(3,i),cs(5,i,i.return));break;case 1:Qn(s,i),Yn(i),u&512&&(de||o===null||In(o,o.return)),u&64&&ar&&(i=i.updateQueue,i!==null&&(u=i.callbacks,u!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=oi;if(Qn(s,i),Yn(i),u&512&&(de||o===null||In(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=i.memoizedState,o===null)if(u===null)if(i.stateNode===null){t:{u=i.type,o=i.memoizedProps,f=f.ownerDocument||f;e:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Kr]||m[Me]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),Qe(m,u,o),m[Me]=i,ae(m),u=m;break t;case"link":var v=iT("link","href",f).get(u+(o.href||""));if(v){for(var A=0;A<v.length;A++)if(m=v[A],m.getAttribute("href")===(o.href==null?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(A,1);break e}}m=f.createElement(u),Qe(m,u,o),f.head.appendChild(m);break;case"meta":if(v=iT("meta","content",f).get(u+(o.content||""))){for(A=0;A<v.length;A++)if(m=v[A],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(A,1);break e}}m=f.createElement(u),Qe(m,u,o),f.head.appendChild(m);break;default:throw Error(r(468,u))}m[Me]=i,ae(m),u=m}i.stateNode=u}else rT(f,i.type,i.stateNode);else i.stateNode=nT(f,u,i.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?rT(f,i.type,i.stateNode):nT(f,u,i.memoizedProps)):u===null&&i.stateNode!==null&&rE(i,i.memoizedProps,o.memoizedProps)}break;case 27:if(u&4&&i.alternate===null){f=i.stateNode,m=i.memoizedProps;try{for(var C=f.firstChild;C;){var B=C.nextSibling,W=C.nodeName;C[Kr]||W==="HEAD"||W==="BODY"||W==="SCRIPT"||W==="STYLE"||W==="LINK"&&C.rel.toLowerCase()==="stylesheet"||f.removeChild(C),C=B}for(var nt=i.type,K=f.attributes;K.length;)f.removeAttributeNode(K[0]);Qe(f,nt,m),f[Me]=i,f[De]=m}catch(pt){Jt(i,i.return,pt)}}case 5:if(Qn(s,i),Yn(i),u&512&&(de||o===null||In(o,o.return)),i.flags&32){f=i.stateNode;try{Bn(f,"")}catch(pt){Jt(i,i.return,pt)}}u&4&&i.stateNode!=null&&(f=i.memoizedProps,rE(i,f,o!==null?o.memoizedProps:f)),u&1024&&(Bp=!0);break;case 6:if(Qn(s,i),Yn(i),u&4){if(i.stateNode===null)throw Error(r(162));u=i.memoizedProps,o=i.stateNode;try{o.nodeValue=u}catch(pt){Jt(i,i.return,pt)}}break;case 3:if(Ph=null,f=oi,oi=Nh(s.containerInfo),Qn(s,i),oi=f,Yn(i),u&4&&o!==null&&o.memoizedState.isDehydrated)try{gu(s.containerInfo)}catch(pt){Jt(i,i.return,pt)}Bp&&(Bp=!1,dE(i));break;case 4:u=oi,oi=Nh(i.stateNode.containerInfo),Qn(s,i),Yn(i),oi=u;break;case 12:Qn(s,i),Yn(i);break;case 13:Qn(s,i),Yn(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Yp=mn()),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,zp(i,u)));break;case 22:if(u&512&&(de||o===null||In(o,o.return)),C=i.memoizedState!==null,B=o!==null&&o.memoizedState!==null,W=ar,nt=de,ar=W||C,de=nt||B,Qn(s,i),de=nt,ar=W,Yn(i),s=i.stateNode,s._current=i,s._visibility&=-3,s._visibility|=s._pendingVisibility&2,u&8192&&(s._visibility=C?s._visibility&-2:s._visibility|1,C&&(s=ar||de,o===null||B||s||vo(i)),i.memoizedProps===null||i.memoizedProps.mode!=="manual"))t:for(o=null,s=i;;){if(s.tag===5||s.tag===26||s.tag===27){if(o===null){B=o=s;try{if(f=B.stateNode,C)m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{v=B.stateNode,A=B.memoizedProps.style;var X=A!=null&&A.hasOwnProperty("display")?A.display:null;v.style.display=X==null||typeof X=="boolean"?"":(""+X).trim()}}catch(pt){Jt(B,B.return,pt)}}}else if(s.tag===6){if(o===null){B=s;try{B.stateNode.nodeValue=C?"":B.memoizedProps}catch(pt){Jt(B,B.return,pt)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===i)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break t;for(;s.sibling===null;){if(s.return===null||s.return===i)break t;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}u&4&&(u=i.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,zp(i,o))));break;case 19:Qn(s,i),Yn(i),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,zp(i,u)));break;case 21:break;default:Qn(s,i),Yn(i)}}function Yn(i){var s=i.flags;if(s&2){try{if(i.tag!==27){t:{for(var o=i.return;o!==null;){if(sE(o)){var u=o;break t}o=o.return}throw Error(r(160))}switch(u.tag){case 27:var f=u.stateNode,m=Up(i);mh(i,m,f);break;case 5:var v=u.stateNode;u.flags&32&&(Bn(v,""),u.flags&=-33);var A=Up(i);mh(i,A,v);break;case 3:case 4:var C=u.stateNode.containerInfo,B=Up(i);Lp(i,B,C);break;default:throw Error(r(161))}}}catch(W){Jt(i,i.return,W)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function dE(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var s=i;dE(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),i=i.sibling}}function lr(i,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)lE(i,s.alternate,s),s=s.sibling}function vo(i){for(i=i.child;i!==null;){var s=i;switch(s.tag){case 0:case 11:case 14:case 15:cs(4,s,s.return),vo(s);break;case 1:In(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&nE(s,s.return,o),vo(s);break;case 26:case 27:case 5:In(s,s.return),vo(s);break;case 22:In(s,s.return),s.memoizedState===null&&vo(s);break;default:vo(s)}i=i.sibling}}function hs(i,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var u=s.alternate,f=i,m=s,v=m.flags;switch(m.tag){case 0:case 11:case 15:hs(f,m,o),Zl(4,m);break;case 1:if(hs(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(B){Jt(u,u.return,B)}if(u=m,f=u.updateQueue,f!==null){var A=u.stateNode;try{var C=f.shared.hiddenCallbacks;if(C!==null)for(f.shared.hiddenCallbacks=null,f=0;f<C.length;f++)Jv(C[f],A)}catch(B){Jt(u,u.return,B)}}o&&v&64&&eE(m),ma(m,m.return);break;case 26:case 27:case 5:hs(f,m,o),o&&u===null&&v&4&&iE(m),ma(m,m.return);break;case 12:hs(f,m,o);break;case 13:hs(f,m,o),o&&v&4&&hE(f,m);break;case 22:m.memoizedState===null&&hs(f,m,o),ma(m,m.return);break;default:hs(f,m,o)}s=s.sibling}}function jp(i,s){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(i=s.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&Fl(o))}function Fp(i,s){i=null,s.alternate!==null&&(i=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==i&&(s.refCount++,i!=null&&Fl(i))}function fs(i,s,o,u){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)pE(i,s,o,u),s=s.sibling}function pE(i,s,o,u){var f=s.flags;switch(s.tag){case 0:case 11:case 15:fs(i,s,o,u),f&2048&&Zl(9,s);break;case 3:fs(i,s,o,u),f&2048&&(i=null,s.alternate!==null&&(i=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==i&&(s.refCount++,i!=null&&Fl(i)));break;case 12:if(f&2048){fs(i,s,o,u),i=s.stateNode;try{var m=s.memoizedProps,v=m.id,A=m.onPostCommit;typeof A=="function"&&A(v,s.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(C){Jt(s,s.return,C)}}else fs(i,s,o,u);break;case 23:break;case 22:m=s.stateNode,s.memoizedState!==null?m._visibility&4?fs(i,s,o,u):Jl(i,s):m._visibility&4?fs(i,s,o,u):(m._visibility|=4,Eo(i,s,o,u,(s.subtreeFlags&10256)!==0)),f&2048&&jp(s.alternate,s);break;case 24:fs(i,s,o,u),f&2048&&Fp(s.alternate,s);break;default:fs(i,s,o,u)}}function Eo(i,s,o,u,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var m=i,v=s,A=o,C=u,B=v.flags;switch(v.tag){case 0:case 11:case 15:Eo(m,v,A,C,f),Zl(8,v);break;case 23:break;case 22:var W=v.stateNode;v.memoizedState!==null?W._visibility&4?Eo(m,v,A,C,f):Jl(m,v):(W._visibility|=4,Eo(m,v,A,C,f)),f&&B&2048&&jp(v.alternate,v);break;case 24:Eo(m,v,A,C,f),f&&B&2048&&Fp(v.alternate,v);break;default:Eo(m,v,A,C,f)}s=s.sibling}}function Jl(i,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=i,u=s,f=u.flags;switch(u.tag){case 22:Jl(o,u),f&2048&&jp(u.alternate,u);break;case 24:Jl(o,u),f&2048&&Fp(u.alternate,u);break;default:Jl(o,u)}s=s.sibling}}var tu=8192;function To(i){if(i.subtreeFlags&tu)for(i=i.child;i!==null;)mE(i),i=i.sibling}function mE(i){switch(i.tag){case 26:To(i),i.flags&tu&&i.memoizedState!==null&&E1(oi,i.memoizedState,i.memoizedProps);break;case 5:To(i);break;case 3:case 4:var s=oi;oi=Nh(i.stateNode.containerInfo),To(i),oi=s;break;case 22:i.memoizedState===null&&(s=i.alternate,s!==null&&s.memoizedState!==null?(s=tu,tu=16777216,To(i),tu=s):To(i));break;default:To(i)}}function gE(i){var s=i.alternate;if(s!==null&&(i=s.child,i!==null)){s.child=null;do s=i.sibling,i.sibling=null,i=s;while(i!==null)}}function eu(i){var s=i.deletions;if((i.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];ze=u,yE(u,i)}gE(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)_E(i),i=i.sibling}function _E(i){switch(i.tag){case 0:case 11:case 15:eu(i),i.flags&2048&&cs(9,i,i.return);break;case 3:eu(i);break;case 12:eu(i);break;case 22:var s=i.stateNode;i.memoizedState!==null&&s._visibility&4&&(i.return===null||i.return.tag!==13)?(s._visibility&=-5,gh(i)):eu(i);break;default:eu(i)}}function gh(i){var s=i.deletions;if((i.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];ze=u,yE(u,i)}gE(i)}for(i=i.child;i!==null;){switch(s=i,s.tag){case 0:case 11:case 15:cs(8,s,s.return),gh(s);break;case 22:o=s.stateNode,o._visibility&4&&(o._visibility&=-5,gh(s));break;default:gh(s)}i=i.sibling}}function yE(i,s){for(;ze!==null;){var o=ze;switch(o.tag){case 0:case 11:case 15:cs(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Fl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,ze=u;else t:for(o=i;ze!==null;){u=ze;var f=u.sibling,m=u.return;if(uE(u),u===o){ze=null;break t}if(f!==null){f.return=m,ze=f;break t}ze=m}}}function kI(i,s,o,u){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(i,s,o,u){return new kI(i,s,o,u)}function qp(i){return i=i.prototype,!(!i||!i.isReactComponent)}function ds(i,s){var o=i.alternate;return o===null?(o=Xn(i.tag,s,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=s,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&31457280,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,s=i.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function vE(i,s){i.flags&=31457282;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=s,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,s=o.dependencies,i.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),i}function _h(i,s,o,u,f,m){var v=0;if(u=i,typeof i=="function")qp(i)&&(v=1);else if(typeof i=="string")v=y1(i,o,an.current)?26:i==="html"||i==="head"||i==="body"?27:5;else t:switch(i){case p:return ga(o.children,f,m,s);case g:v=8,f|=24;break;case E:return i=Xn(12,o,s,f|2),i.elementType=E,i.lanes=m,i;case L:return i=Xn(13,o,s,f),i.elementType=L,i.lanes=m,i;case O:return i=Xn(19,o,s,f),i.elementType=O,i.lanes=m,i;case z:return EE(o,f,m,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case T:case I:v=10;break t;case b:v=9;break t;case D:v=11;break t;case M:v=14;break t;case q:v=16,u=null;break t}v=29,o=Error(r(130,i===null?"null":typeof i,"")),u=null}return s=Xn(v,o,s,f),s.elementType=i,s.type=u,s.lanes=m,s}function ga(i,s,o,u){return i=Xn(7,i,u,s),i.lanes=o,i}function EE(i,s,o,u){i=Xn(22,i,u,s),i.elementType=z,i.lanes=o;var f={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var m=f._current;if(m===null)throw Error(r(456));if((f._pendingVisibility&2)===0){var v=es(m,2);v!==null&&(f._pendingVisibility|=2,hn(v,m,2))}},attach:function(){var m=f._current;if(m===null)throw Error(r(456));if((f._pendingVisibility&2)!==0){var v=es(m,2);v!==null&&(f._pendingVisibility&=-3,hn(v,m,2))}}};return i.stateNode=f,i}function Hp(i,s,o){return i=Xn(6,i,null,s),i.lanes=o,i}function Gp(i,s,o){return s=Xn(4,i.children!==null?i.children:[],i.key,s),s.lanes=o,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function ur(i){i.flags|=4}function TE(i,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!sT(s)){if(s=Kn.current,s!==null&&((Lt&4194176)===Lt?Ri!==null:(Lt&62914560)!==Lt&&(Lt&536870912)===0||s!==Ri))throw Bl=Xd,Ly;i.flags|=8192}}function yh(i,s){s!==null&&(i.flags|=4),i.flags&16384&&(s=i.tag!==22?qr():536870912,i.lanes|=s,wo|=s)}function nu(i,s){if(!Ht)switch(i.tailMode){case"hidden":s=i.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function oe(i){var s=i.alternate!==null&&i.alternate.child===i.child,o=0,u=0;if(s)for(var f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&31457280,u|=f.flags&31457280,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=u,i.childLanes=o,s}function VI(i,s,o){var u=s.pendingProps;switch(Qd(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(s),null;case 1:return oe(s),null;case 3:return o=s.stateNode,u=null,i!==null&&(u=i.memoizedState.cache),s.memoizedState.cache!==u&&(s.flags|=2048),sr(ke),Fi(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(xl(s)?ur(s):i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,ai!==null&&(Jp(ai),ai=null))),oe(s),null;case 26:return o=s.memoizedState,i===null?(ur(s),o!==null?(oe(s),TE(s,o)):(oe(s),s.flags&=-16777217)):o?o!==i.memoizedState?(ur(s),oe(s),TE(s,o)):(oe(s),s.flags&=-16777217):(i.memoizedProps!==u&&ur(s),oe(s),s.flags&=-16777217),null;case 27:ja(s),o=Mn.current;var f=s.type;if(i!==null&&s.stateNode!=null)i.memoizedProps!==u&&ur(s);else{if(!u){if(s.stateNode===null)throw Error(r(166));return oe(s),null}i=an.current,xl(s)?My(s):(i=WE(f,u,o),s.stateNode=i,ur(s))}return oe(s),null;case 5:if(ja(s),o=s.type,i!==null&&s.stateNode!=null)i.memoizedProps!==u&&ur(s);else{if(!u){if(s.stateNode===null)throw Error(r(166));return oe(s),null}if(i=an.current,xl(s))My(s);else{switch(f=Dh(Mn.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?i.multiple=!0:u.size&&(i.size=u.size);break;default:i=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}i[Me]=s,i[De]=u;t:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break t;for(;f.sibling===null;){if(f.return===null||f.return===s)break t;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=i;t:switch(Qe(i,o,u),o){case"button":case"input":case"select":case"textarea":i=!!u.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&ur(s)}}return oe(s),s.flags&=-16777217,null;case 6:if(i&&s.stateNode!=null)i.memoizedProps!==u&&ur(s);else{if(typeof u!="string"&&s.stateNode===null)throw Error(r(166));if(i=Mn.current,xl(s)){if(i=s.stateNode,o=s.memoizedProps,u=null,f=cn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}i[Me]=s,i=!!(i.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||GE(i.nodeValue,o)),i||aa(s)}else i=Dh(i).createTextNode(u),i[Me]=s,s.stateNode=i}return oe(s),null;case 13:if(u=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=xl(s),u!==null&&u.dehydrated!==null){if(i===null){if(!f)throw Error(r(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[Me]=s}else Ml(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;oe(s),f=!1}else ai!==null&&(Jp(ai),ai=null),f=!0;if(!f)return s.flags&256?(er(s),s):(er(s),null)}if(er(s),(s.flags&128)!==0)return s.lanes=o,s;if(o=u!==null,i=i!==null&&i.memoizedState!==null,o){u=s.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==i&&o&&(s.child.flags|=8192),yh(s,s.updateQueue),oe(s),null;case 4:return Fi(),i===null&&cm(s.stateNode.containerInfo),oe(s),null;case 10:return sr(s.type),oe(s),null;case 19:if(he(Pe),f=s.memoizedState,f===null)return oe(s),null;if(u=(s.flags&128)!==0,m=f.rendering,m===null)if(u)nu(f,!1);else{if(pe!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(m=eh(i),m!==null){for(s.flags|=128,nu(f,!1),i=m.updateQueue,s.updateQueue=i,yh(s,i),s.subtreeFlags=0,i=o,o=s.child;o!==null;)vE(o,i),o=o.sibling;return Xt(Pe,Pe.current&1|2),s.child}i=i.sibling}f.tail!==null&&mn()>vh&&(s.flags|=128,u=!0,nu(f,!1),s.lanes=4194304)}else{if(!u)if(i=eh(m),i!==null){if(s.flags|=128,u=!0,i=i.updateQueue,s.updateQueue=i,yh(s,i),nu(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Ht)return oe(s),null}else 2*mn()-f.renderingStartTime>vh&&o!==536870912&&(s.flags|=128,u=!0,nu(f,!1),s.lanes=4194304);f.isBackwards?(m.sibling=s.child,s.child=m):(i=f.last,i!==null?i.sibling=m:s.child=m,f.last=m)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=mn(),s.sibling=null,i=Pe.current,Xt(Pe,u?i&1|2:i&1),s):(oe(s),null);case 22:case 23:return er(s),Zd(),u=s.memoizedState!==null,i!==null?i.memoizedState!==null!==u&&(s.flags|=8192):u&&(s.flags|=8192),u?(o&536870912)!==0&&(s.flags&128)===0&&(oe(s),s.subtreeFlags&6&&(s.flags|=8192)):oe(s),o=s.updateQueue,o!==null&&yh(s,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048),i!==null&&he(la),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),sr(ke),oe(s),null;case 25:return null}throw Error(r(156,s.tag))}function xI(i,s){switch(Qd(s),s.tag){case 1:return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return sr(ke),Fi(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 26:case 27:case 5:return ja(s),null;case 13:if(er(s),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(r(340));Ml()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return he(Pe),null;case 4:return Fi(),null;case 10:return sr(s.type),null;case 22:case 23:return er(s),Zd(),i!==null&&he(la),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 24:return sr(ke),null;case 25:return null;default:return null}}function AE(i,s){switch(Qd(s),s.tag){case 3:sr(ke),Fi();break;case 26:case 27:case 5:ja(s);break;case 4:Fi();break;case 13:er(s);break;case 19:he(Pe);break;case 10:sr(s.type);break;case 22:case 23:er(s),Zd(),i!==null&&he(la);break;case 24:sr(ke)}}var MI={getCacheForType:function(i){var s=We(ke),o=s.data.get(i);return o===void 0&&(o=i(),s.data.set(i,o)),o}},UI=typeof WeakMap=="function"?WeakMap:Map,le=0,te=null,Pt=null,Lt=0,ee=0,Dn=null,cr=!1,Ao=!1,$p=!1,hr=0,pe=0,ps=0,_a=0,Kp=0,Wn=0,wo=0,iu=null,Ci=null,Qp=!1,Yp=0,vh=1/0,Eh=null,ms=null,Th=!1,ya=null,ru=0,Xp=0,Wp=null,su=0,Zp=null;function Nn(){if((le&2)!==0&&Lt!==0)return Lt&-Lt;if(S.T!==null){var i=po;return i!==0?i:am()}return Ic()}function wE(){Wn===0&&(Wn=(Lt&536870912)===0||Ht?_l():536870912);var i=Kn.current;return i!==null&&(i.flags|=32),Wn}function hn(i,s,o){(i===te&&ee===2||i.cancelPendingCommit!==null)&&(bo(i,0),fr(i,Lt,Wn,!1)),_e(i,o),((le&2)===0||i!==te)&&(i===te&&((le&2)===0&&(_a|=o),pe===4&&fr(i,Lt,Wn,!1)),Di(i))}function bE(i,s,o){if((le&6)!==0)throw Error(r(327));var u=!o&&(s&60)===0&&(s&i.expiredLanes)===0||Fr(i,s),f=u?zI(i,s):nm(i,s,!0),m=u;do{if(f===0){Ao&&!u&&fr(i,s,0,!1);break}else if(f===6)fr(i,s,0,!cr);else{if(o=i.current.alternate,m&&!LI(o)){f=nm(i,s,!1),m=!1;continue}if(f===2){if(m=s,i.errorRecoveryDisabledLanes&m)var v=0;else v=i.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){s=v;t:{var A=i;f=iu;var C=A.current.memoizedState.isDehydrated;if(C&&(bo(A,v).flags|=256),v=nm(A,v,!1),v!==2){if($p&&!C){A.errorRecoveryDisabledLanes|=m,_a|=m,f=4;break t}m=Ci,Ci=f,m!==null&&Jp(m)}f=v}if(m=!1,f!==2)continue}}if(f===1){bo(i,0),fr(i,s,0,!0);break}t:{switch(u=i,f){case 0:case 1:throw Error(r(345));case 4:if((s&4194176)===s){fr(u,s,Wn,!cr);break t}break;case 2:Ci=null;break;case 3:case 5:break;default:throw Error(r(329))}if(u.finishedWork=o,u.finishedLanes=s,(s&62914560)===s&&(m=Yp+300-mn(),10<m)){if(fr(u,s,Wn,!cr),Un(u,0)!==0)break t;u.timeoutHandle=QE(SE.bind(null,u,o,Ci,Eh,Qp,s,Wn,_a,wo,cr,2,-0,0),m);break t}SE(u,o,Ci,Eh,Qp,s,Wn,_a,wo,cr,0,-0,0)}}break}while(!0);Di(i)}function Jp(i){Ci===null?Ci=i:Ci.push.apply(Ci,i)}function SE(i,s,o,u,f,m,v,A,C,B,W,nt,K){var X=s.subtreeFlags;if((X&8192||(X&16785408)===16785408)&&(hu={stylesheets:null,count:0,unsuspend:v1},mE(s),s=T1(),s!==null)){i.cancelPendingCommit=s(PE.bind(null,i,o,u,f,v,A,C,1,nt,K)),fr(i,m,v,!B);return}PE(i,o,u,f,v,A,C,W,nt,K)}function LI(i){for(var s=i;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!Rn(m(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function fr(i,s,o,u){s&=~Kp,s&=~_a,i.suspendedLanes|=s,i.pingedLanes&=~s,u&&(i.warmLanes|=s),u=i.expirationTimes;for(var f=s;0<f;){var m=31-on(f),v=1<<m;u[m]=-1,f&=~v}o!==0&&Hr(i,o,s)}function Ah(){return(le&6)===0?(au(0),!1):!0}function tm(){if(Pt!==null){if(ee===0)var i=Pt.return;else i=Pt,rr=da=null,ap(i),ho=null,zl=0,i=Pt;for(;i!==null;)AE(i.alternate,i),i=i.return;Pt=null}}function bo(i,s){i.finishedWork=null,i.finishedLanes=0;var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,i1(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),tm(),te=i,Pt=o=ds(i.current,null),Lt=s,ee=0,Dn=null,cr=!1,Ao=Fr(i,s),$p=!1,wo=Wn=Kp=_a=ps=pe=0,Ci=iu=null,Qp=!1,(s&8)!==0&&(s|=s&32);var u=i.entangledLanes;if(u!==0)for(i=i.entanglements,u&=s;0<u;){var f=31-on(u),m=1<<f;s|=i[f],u&=~m}return hr=s,$c(),o}function RE(i,s){Ct=null,S.H=Ii,s===Ll?(s=jy(),ee=3):s===Ly?(s=jy(),ee=4):ee=s===Bv?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Dn=s,Pt===null&&(pe=1,fh(i,Hn(s,i.current)))}function IE(){var i=S.H;return S.H=Ii,i===null?Ii:i}function CE(){var i=S.A;return S.A=MI,i}function em(){pe=4,cr||(Lt&4194176)!==Lt&&Kn.current!==null||(Ao=!0),(ps&134217727)===0&&(_a&134217727)===0||te===null||fr(te,Lt,Wn,!1)}function nm(i,s,o){var u=le;le|=2;var f=IE(),m=CE();(te!==i||Lt!==s)&&(Eh=null,bo(i,s)),s=!1;var v=pe;t:do try{if(ee!==0&&Pt!==null){var A=Pt,C=Dn;switch(ee){case 8:tm(),v=6;break t;case 3:case 2:case 6:Kn.current===null&&(s=!0);var B=ee;if(ee=0,Dn=null,So(i,A,C,B),o&&Ao){v=0;break t}break;default:B=ee,ee=0,Dn=null,So(i,A,C,B)}}BI(),v=pe;break}catch(W){RE(i,W)}while(!0);return s&&i.shellSuspendCounter++,rr=da=null,le=u,S.H=f,S.A=m,Pt===null&&(te=null,Lt=0,$c()),v}function BI(){for(;Pt!==null;)DE(Pt)}function zI(i,s){var o=le;le|=2;var u=IE(),f=CE();te!==i||Lt!==s?(Eh=null,vh=mn()+500,bo(i,s)):Ao=Fr(i,s);t:do try{if(ee!==0&&Pt!==null){s=Pt;var m=Dn;e:switch(ee){case 1:ee=0,Dn=null,So(i,s,m,1);break;case 2:if(By(m)){ee=0,Dn=null,NE(s);break}s=function(){ee===2&&te===i&&(ee=7),Di(i)},m.then(s,s);break t;case 3:ee=7;break t;case 4:ee=5;break t;case 7:By(m)?(ee=0,Dn=null,NE(s)):(ee=0,Dn=null,So(i,s,m,7));break;case 5:var v=null;switch(Pt.tag){case 26:v=Pt.memoizedState;case 5:case 27:var A=Pt;if(!v||sT(v)){ee=0,Dn=null;var C=A.sibling;if(C!==null)Pt=C;else{var B=A.return;B!==null?(Pt=B,wh(B)):Pt=null}break e}}ee=0,Dn=null,So(i,s,m,5);break;case 6:ee=0,Dn=null,So(i,s,m,6);break;case 8:tm(),pe=6;break t;default:throw Error(r(462))}}jI();break}catch(W){RE(i,W)}while(!0);return rr=da=null,S.H=u,S.A=f,le=o,Pt!==null?0:(te=null,Lt=0,$c(),pe)}function jI(){for(;Pt!==null&&!Nd();)DE(Pt)}function DE(i){var s=Wv(i.alternate,i,hr);i.memoizedProps=i.pendingProps,s===null?wh(i):Pt=s}function NE(i){var s=i,o=s.alternate;switch(s.tag){case 15:case 0:s=Gv(o,s,s.pendingProps,s.type,void 0,Lt);break;case 11:s=Gv(o,s,s.pendingProps,s.type.render,s.ref,Lt);break;case 5:ap(s);default:AE(o,s),s=Pt=vE(s,hr),s=Wv(o,s,hr)}i.memoizedProps=i.pendingProps,s===null?wh(i):Pt=s}function So(i,s,o,u){rr=da=null,ap(s),ho=null,zl=0;var f=s.return;try{if(DI(i,f,s,o,Lt)){pe=1,fh(i,Hn(o,i.current)),Pt=null;return}}catch(m){if(f!==null)throw Pt=f,m;pe=1,fh(i,Hn(o,i.current)),Pt=null;return}s.flags&32768?(Ht||u===1?i=!0:Ao||(Lt&536870912)!==0?i=!1:(cr=i=!0,(u===2||u===3||u===6)&&(u=Kn.current,u!==null&&u.tag===13&&(u.flags|=16384))),OE(s,i)):wh(s)}function wh(i){var s=i;do{if((s.flags&32768)!==0){OE(s,cr);return}i=s.return;var o=VI(s.alternate,s,hr);if(o!==null){Pt=o;return}if(s=s.sibling,s!==null){Pt=s;return}Pt=s=i}while(s!==null);pe===0&&(pe=5)}function OE(i,s){do{var o=xI(i.alternate,i);if(o!==null){o.flags&=32767,Pt=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(i=i.sibling,i!==null)){Pt=i;return}Pt=i=o}while(i!==null);pe=6,Pt=null}function PE(i,s,o,u,f,m,v,A,C,B){var W=S.T,nt=ut.p;try{ut.p=2,S.T=null,FI(i,s,o,u,nt,f,m,v,A,C,B)}finally{S.T=W,ut.p=nt}}function FI(i,s,o,u,f,m,v,A){do Ro();while(ya!==null);if((le&6)!==0)throw Error(r(327));var C=i.finishedWork;if(u=i.finishedLanes,C===null)return null;if(i.finishedWork=null,i.finishedLanes=0,C===i.current)throw Error(r(177));i.callbackNode=null,i.callbackPriority=0,i.cancelPendingCommit=null;var B=C.lanes|C.childLanes;if(B|=Gd,Sc(i,u,B,m,v,A),i===te&&(Pt=te=null,Lt=0),(C.subtreeFlags&10256)===0&&(C.flags&10256)===0||Th||(Th=!0,Xp=B,Wp=o,$I(qi,function(){return Ro(),null})),o=(C.flags&15990)!==0,(C.subtreeFlags&15990)!==0||o?(o=S.T,S.T=null,m=ut.p,ut.p=2,v=le,le|=4,OI(i,C),fE(C,i),fI(pm,i.containerInfo),xh=!!dm,pm=dm=null,i.current=C,lE(i,C.alternate,C),dl(),le=v,ut.p=m,S.T=o):i.current=C,Th?(Th=!1,ya=i,ru=u):kE(i,B),B=i.pendingLanes,B===0&&(ms=null),ml(C.stateNode),Di(i),s!==null)for(f=i.onRecoverableError,C=0;C<s.length;C++)B=s[C],f(B.value,{componentStack:B.stack});return(ru&3)!==0&&Ro(),B=i.pendingLanes,(u&4194218)!==0&&(B&42)!==0?i===Zp?su++:(su=0,Zp=i):su=0,au(0),null}function kE(i,s){(i.pooledCacheLanes&=s)===0&&(s=i.pooledCache,s!=null&&(i.pooledCache=null,Fl(s)))}function Ro(){if(ya!==null){var i=ya,s=Xp;Xp=0;var o=Rc(ru),u=S.T,f=ut.p;try{if(ut.p=32>o?32:o,S.T=null,ya===null)var m=!1;else{o=Wp,Wp=null;var v=ya,A=ru;if(ya=null,ru=0,(le&6)!==0)throw Error(r(331));var C=le;if(le|=4,_E(v.current),pE(v,v.current,A,o),le=C,au(0,!1),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(zr,v)}catch{}m=!0}return m}finally{ut.p=f,S.T=u,kE(i,s)}}return!1}function VE(i,s,o){s=Hn(o,s),s=Ep(i.stateNode,s,2),i=us(i,s,2),i!==null&&(_e(i,2),Di(i))}function Jt(i,s,o){if(i.tag===3)VE(i,i,o);else for(;s!==null;){if(s.tag===3){VE(s,i,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ms===null||!ms.has(u))){i=Hn(o,i),o=Uv(2),u=us(s,o,2),u!==null&&(Lv(o,u,s,i),_e(u,2),Di(u));break}}s=s.return}}function im(i,s,o){var u=i.pingCache;if(u===null){u=i.pingCache=new UI;var f=new Set;u.set(s,f)}else f=u.get(s),f===void 0&&(f=new Set,u.set(s,f));f.has(o)||($p=!0,f.add(o),i=qI.bind(null,i,s,o),s.then(i,i))}function qI(i,s,o){var u=i.pingCache;u!==null&&u.delete(s),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,te===i&&(Lt&o)===o&&(pe===4||pe===3&&(Lt&62914560)===Lt&&300>mn()-Yp?(le&2)===0&&bo(i,0):Kp|=o,wo===Lt&&(wo=0)),Di(i)}function xE(i,s){s===0&&(s=qr()),i=es(i,s),i!==null&&(_e(i,s),Di(i))}function HI(i){var s=i.memoizedState,o=0;s!==null&&(o=s.retryLane),xE(i,o)}function GI(i,s){var o=0;switch(i.tag){case 13:var u=i.stateNode,f=i.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=i.stateNode;break;case 22:u=i.stateNode._retryCache;break;default:throw Error(r(314))}u!==null&&u.delete(s),xE(i,o)}function $I(i,s){return Fs(i,s)}var bh=null,Io=null,rm=!1,Sh=!1,sm=!1,va=0;function Di(i){i!==Io&&i.next===null&&(Io===null?bh=Io=i:Io=Io.next=i),Sh=!0,rm||(rm=!0,QI(KI))}function au(i,s){if(!sm&&Sh){sm=!0;do for(var o=!1,u=bh;u!==null;){if(i!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var v=u.suspendedLanes,A=u.pingedLanes;m=(1<<31-on(42|i)+1)-1,m&=f&~(v&~A),m=m&201326677?m&201326677|1:m?m|2:0}m!==0&&(o=!0,LE(u,m))}else m=Lt,m=Un(u,u===te?m:0),(m&3)===0||Fr(u,m)||(o=!0,LE(u,m));u=u.next}while(o);sm=!1}}function KI(){Sh=rm=!1;var i=0;va!==0&&(n1()&&(i=va),va=0);for(var s=mn(),o=null,u=bh;u!==null;){var f=u.next,m=ME(u,s);m===0?(u.next=null,o===null?bh=f:o.next=f,f===null&&(Io=o)):(o=u,(i!==0||(m&3)!==0)&&(Sh=!0)),u=f}au(i)}function ME(i,s){for(var o=i.suspendedLanes,u=i.pingedLanes,f=i.expirationTimes,m=i.pendingLanes&-62914561;0<m;){var v=31-on(m),A=1<<v,C=f[v];C===-1?((A&o)===0||(A&u)!==0)&&(f[v]=Ha(A,s)):C<=s&&(i.expiredLanes|=A),m&=~A}if(s=te,o=Lt,o=Un(i,i===s?o:0),u=i.callbackNode,o===0||i===s&&ee===2||i.cancelPendingCommit!==null)return u!==null&&u!==null&&qa(u),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||Fr(i,o)){if(s=o&-o,s===i.callbackPriority)return s;switch(u!==null&&qa(u),Rc(o)){case 2:case 8:o=xe;break;case 32:o=qi;break;case 268435456:o=pl;break;default:o=qi}return u=UE.bind(null,i),o=Fs(o,u),i.callbackPriority=s,i.callbackNode=o,s}return u!==null&&u!==null&&qa(u),i.callbackPriority=2,i.callbackNode=null,2}function UE(i,s){var o=i.callbackNode;if(Ro()&&i.callbackNode!==o)return null;var u=Lt;return u=Un(i,i===te?u:0),u===0?null:(bE(i,u,s),ME(i,mn()),i.callbackNode!=null&&i.callbackNode===o?UE.bind(null,i):null)}function LE(i,s){if(Ro())return null;bE(i,s,!0)}function QI(i){r1(function(){(le&6)!==0?Fs(Ce,i):i()})}function am(){return va===0&&(va=_l()),va}function BE(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:yi(""+i)}function zE(i,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,i.id&&o.setAttribute("form",i.id),s.parentNode.insertBefore(o,s),i=new FormData(i),o.parentNode.removeChild(o),i}function YI(i,s,o,u,f){if(s==="submit"&&o&&o.stateNode===f){var m=BE((f[De]||null).action),v=u.submitter;v&&(s=(s=v[De]||null)?BE(s.formAction):v.getAttribute("formAction"),s!==null&&(m=s,v=null));var A=new Wa("action","action",null,u,f);i.push({event:A,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(va!==0){var C=v?zE(f,v):new FormData(f);mp(o,{pending:!0,data:C,method:f.method,action:m},null,C)}}else typeof m=="function"&&(A.preventDefault(),C=v?zE(f,v):new FormData(f),mp(o,{pending:!0,data:C,method:f.method,action:m},m,C))},currentTarget:f}]})}}for(var om=0;om<Py.length;om++){var lm=Py[om],XI=lm.toLowerCase(),WI=lm[0].toUpperCase()+lm.slice(1);si(XI,"on"+WI)}si(Iy,"onAnimationEnd"),si(Cy,"onAnimationIteration"),si(Dy,"onAnimationStart"),si("dblclick","onDoubleClick"),si("focusin","onFocus"),si("focusout","onBlur"),si(pI,"onTransitionRun"),si(mI,"onTransitionStart"),si(gI,"onTransitionCancel"),si(Ny,"onTransitionEnd"),gn("onMouseEnter",["mouseout","mouseover"]),gn("onMouseLeave",["mouseout","mouseover"]),gn("onPointerEnter",["pointerout","pointerover"]),gn("onPointerLeave",["pointerout","pointerover"]),bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),bn("onBeforeInput",["compositionend","keypress","textInput","paste"]),bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ou="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZI=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ou));function jE(i,s){s=(s&4)!==0;for(var o=0;o<i.length;o++){var u=i[o],f=u.event;u=u.listeners;t:{var m=void 0;if(s)for(var v=u.length-1;0<=v;v--){var A=u[v],C=A.instance,B=A.currentTarget;if(A=A.listener,C!==m&&f.isPropagationStopped())break t;m=A,f.currentTarget=B;try{m(f)}catch(W){hh(W)}f.currentTarget=null,m=C}else for(v=0;v<u.length;v++){if(A=u[v],C=A.instance,B=A.currentTarget,A=A.listener,C!==m&&f.isPropagationStopped())break t;m=A,f.currentTarget=B;try{m(f)}catch(W){hh(W)}f.currentTarget=null,m=C}}}}function Vt(i,s){var o=s[Hs];o===void 0&&(o=s[Hs]=new Set);var u=i+"__bubble";o.has(u)||(FE(s,i,2,!1),o.add(u))}function um(i,s,o){var u=0;s&&(u|=4),FE(o,i,u,s)}var Rh="_reactListening"+Math.random().toString(36).slice(2);function cm(i){if(!i[Rh]){i[Rh]=!0,vl.forEach(function(o){o!=="selectionchange"&&(ZI.has(o)||um(o,!1,i),um(o,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Rh]||(s[Rh]=!0,um("selectionchange",!1,s))}}function FE(i,s,o,u){switch(hT(s)){case 2:var f=b1;break;case 8:f=S1;break;default:f=wm}o=f.bind(null,s,o,i),f=void 0,!jn||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),u?f!==void 0?i.addEventListener(s,o,{capture:!0,passive:f}):i.addEventListener(s,o,!0):f!==void 0?i.addEventListener(s,o,{passive:f}):i.addEventListener(s,o,!1)}function hm(i,s,o,u,f){var m=u;if((s&1)===0&&(s&2)===0&&u!==null)t:for(;;){if(u===null)return;var v=u.tag;if(v===3||v===4){var A=u.stateNode.containerInfo;if(A===f||A.nodeType===8&&A.parentNode===f)break;if(v===4)for(v=u.return;v!==null;){var C=v.tag;if((C===3||C===4)&&(C=v.stateNode.containerInfo,C===f||C.nodeType===8&&C.parentNode===f))return;v=v.return}for(;A!==null;){if(v=ri(A),v===null)return;if(C=v.tag,C===5||C===6||C===26||C===27){u=m=v;continue t}A=A.parentNode}}u=u.return}Oc(function(){var B=m,W=Xa(o),nt=[];t:{var K=Oy.get(i);if(K!==void 0){var X=Wa,pt=i;switch(i){case"keypress":if(Ei(o)===0)break t;case"keydown":case"keyup":X=io;break;case"focusin":pt="focus",X=to;break;case"focusout":pt="blur",X=to;break;case"beforeblur":case"afterblur":X=to;break;case"click":if(o.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=Fn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=Ud;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=Bc;break;case Iy:case Cy:case Dy:X=eo;break;case Ny:X=jc;break;case"scroll":case"scrollend":X=Pc;break;case"wheel":X=ro;break;case"copy":case"cut":case"paste":X=no;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=Ol;break;case"toggle":case"beforetoggle":X=qc}var wt=(s&4)!==0,me=!wt&&(i==="scroll"||i==="scrollend"),F=wt?K!==null?K+"Capture":null:K;wt=[];for(var U=B,$;U!==null;){var Z=U;if($=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||$===null||F===null||(Z=Ys(U,F),Z!=null&&wt.push(lu(U,Z,$))),me)break;U=U.return}0<wt.length&&(K=new X(K,pt,null,o,W),nt.push({event:K,listeners:wt}))}}if((s&7)===0){t:{if(K=i==="mouseover"||i==="pointerover",X=i==="mouseout"||i==="pointerout",K&&o!==zn&&(pt=o.relatedTarget||o.fromElement)&&(ri(pt)||pt[Hi]))break t;if((X||K)&&(K=W.window===W?W:(K=W.ownerDocument)?K.defaultView||K.parentWindow:window,X?(pt=o.relatedTarget||o.toElement,X=B,pt=pt?ri(pt):null,pt!==null&&(me=dt(pt),wt=pt.tag,pt!==me||wt!==5&&wt!==27&&wt!==6)&&(pt=null)):(X=null,pt=B),X!==pt)){if(wt=Fn,Z="onMouseLeave",F="onMouseEnter",U="mouse",(i==="pointerout"||i==="pointerover")&&(wt=Ol,Z="onPointerLeave",F="onPointerEnter",U="pointer"),me=X==null?K:Qr(X),$=pt==null?K:Qr(pt),K=new wt(Z,U+"leave",X,o,W),K.target=me,K.relatedTarget=$,Z=null,ri(W)===B&&(wt=new wt(F,U+"enter",pt,o,W),wt.target=$,wt.relatedTarget=me,Z=wt),me=Z,X&&pt)e:{for(wt=X,F=pt,U=0,$=wt;$;$=Co($))U++;for($=0,Z=F;Z;Z=Co(Z))$++;for(;0<U-$;)wt=Co(wt),U--;for(;0<$-U;)F=Co(F),$--;for(;U--;){if(wt===F||F!==null&&wt===F.alternate)break e;wt=Co(wt),F=Co(F)}wt=null}else wt=null;X!==null&&qE(nt,K,X,wt,!1),pt!==null&&me!==null&&qE(nt,me,pt,wt,!0)}}t:{if(K=B?Qr(B):window,X=K.nodeName&&K.nodeName.toLowerCase(),X==="select"||X==="input"&&K.type==="file")var ft=gy;else if(Oe(K))if(_y)ft=cI;else{ft=lI;var Nt=oI}else X=K.nodeName,!X||X.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?B&&bl(B.elementType)&&(ft=gy):ft=uI;if(ft&&(ft=ft(i,B))){Zi(nt,ft,o,W);break t}Nt&&Nt(i,K,B),i==="focusout"&&B&&K.type==="number"&&B.memoizedProps.value!=null&&Ya(K,"number",K.value)}switch(Nt=B?Qr(B):window,i){case"focusin":(Oe(Nt)||Nt.contentEditable==="true")&&(so=Nt,Fd=B,Vl=null);break;case"focusout":Vl=Fd=so=null;break;case"mousedown":qd=!0;break;case"contextmenu":case"mouseup":case"dragend":qd=!1,Sy(nt,o,W);break;case"selectionchange":if(dI)break;case"keydown":case"keyup":Sy(nt,o,W)}var gt;if(wi)t:{switch(i){case"compositionstart":var yt="onCompositionStart";break t;case"compositionend":yt="onCompositionEnd";break t;case"compositionupdate":yt="onCompositionUpdate";break t}yt=void 0}else Mt?Q(i,o)&&(yt="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(yt="onCompositionStart");yt&&(y&&o.locale!=="ko"&&(Mt||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&Mt&&(gt=Rl()):(vi=W,ts="value"in vi?vi.value:vi.textContent,Mt=!0)),Nt=Ih(B,yt),0<Nt.length&&(yt=new Dl(yt,i,null,o,W),nt.push({event:yt,listeners:Nt}),gt?yt.data=gt:(gt=st(o),gt!==null&&(yt.data=gt)))),(gt=_?Ne(i,o):Ut(i,o))&&(yt=Ih(B,"onBeforeInput"),0<yt.length&&(Nt=new Dl("onBeforeInput","beforeinput",null,o,W),nt.push({event:Nt,listeners:yt}),Nt.data=gt)),YI(nt,i,B,o,W)}jE(nt,s)})}function lu(i,s,o){return{instance:i,listener:s,currentTarget:o}}function Ih(i,s){for(var o=s+"Capture",u=[];i!==null;){var f=i,m=f.stateNode;f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Ys(i,o),f!=null&&u.unshift(lu(i,f,m)),f=Ys(i,s),f!=null&&u.push(lu(i,f,m))),i=i.return}return u}function Co(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function qE(i,s,o,u,f){for(var m=s._reactName,v=[];o!==null&&o!==u;){var A=o,C=A.alternate,B=A.stateNode;if(A=A.tag,C!==null&&C===u)break;A!==5&&A!==26&&A!==27||B===null||(C=B,f?(B=Ys(o,m),B!=null&&v.unshift(lu(o,B,C))):f||(B=Ys(o,m),B!=null&&v.push(lu(o,B,C)))),o=o.return}v.length!==0&&i.push({event:s,listeners:v})}var JI=/\r\n?/g,t1=/\u0000|\uFFFD/g;function HE(i){return(typeof i=="string"?i:""+i).replace(JI,`
`).replace(t1,"")}function GE(i,s){return s=HE(s),HE(i)===s}function Ch(){}function Zt(i,s,o,u,f,m){switch(o){case"children":typeof u=="string"?s==="body"||s==="textarea"&&u===""||Bn(i,u):(typeof u=="number"||typeof u=="bigint")&&s!=="body"&&Bn(i,""+u);break;case"className":Wr(i,"class",u);break;case"tabIndex":Wr(i,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Wr(i,o,u);break;case"style":Nc(i,u,m);break;case"data":if(s!=="object"){Wr(i,"data",u);break}case"src":case"href":if(u===""&&(s!=="a"||o!=="href")){i.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=yi(""+u),i.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&Zt(i,s,"name",f.name,f,null),Zt(i,s,"formEncType",f.formEncType,f,null),Zt(i,s,"formMethod",f.formMethod,f,null),Zt(i,s,"formTarget",f.formTarget,f,null)):(Zt(i,s,"encType",f.encType,f,null),Zt(i,s,"method",f.method,f,null),Zt(i,s,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=yi(""+u),i.setAttribute(o,u);break;case"onClick":u!=null&&(i.onclick=Ch);break;case"onScroll":u!=null&&Vt("scroll",i);break;case"onScrollEnd":u!=null&&Vt("scrollend",i);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(r(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(r(60));i.innerHTML=o}}break;case"multiple":i.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":i.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){i.removeAttribute("xlink:href");break}o=yi(""+u),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""+u):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":u===!0?i.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,u):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?i.setAttribute(o,u):i.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?i.removeAttribute(o):i.setAttribute(o,u);break;case"popover":Vt("beforetoggle",i),Vt("toggle",i),Xr(i,"popover",u);break;case"xlinkActuate":Ln(i,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Ln(i,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Ln(i,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Ln(i,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Ln(i,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Ln(i,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Ln(i,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Ln(i,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Ln(i,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Xr(i,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=xd.get(o)||o,Xr(i,o,u))}}function fm(i,s,o,u,f,m){switch(o){case"style":Nc(i,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(r(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(r(60));i.innerHTML=o}}break;case"children":typeof u=="string"?Bn(i,u):(typeof u=="number"||typeof u=="bigint")&&Bn(i,""+u);break;case"onScroll":u!=null&&Vt("scroll",i);break;case"onScrollEnd":u!=null&&Vt("scrollend",i);break;case"onClick":u!=null&&(i.onclick=Ch);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ka.hasOwnProperty(o))t:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),m=i[De]||null,m=m!=null?m[o]:null,typeof m=="function"&&i.removeEventListener(s,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(s,u,f);break t}o in i?i[o]=u:u===!0?i.setAttribute(o,""):Xr(i,o,u)}}}function Qe(i,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Vt("error",i),Vt("load",i);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var v=o[m];if(v!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:Zt(i,s,m,v,o,null)}}f&&Zt(i,s,"srcSet",o.srcSet,o,null),u&&Zt(i,s,"src",o.src,o,null);return;case"input":Vt("invalid",i);var A=m=v=f=null,C=null,B=null;for(u in o)if(o.hasOwnProperty(u)){var W=o[u];if(W!=null)switch(u){case"name":f=W;break;case"type":v=W;break;case"checked":C=W;break;case"defaultChecked":B=W;break;case"value":m=W;break;case"defaultValue":A=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(r(137,s));break;default:Zt(i,s,u,W,o,null)}}Ks(i,m,A,C,B,v,f,!1),$s(i);return;case"select":Vt("invalid",i),u=v=m=null;for(f in o)if(o.hasOwnProperty(f)&&(A=o[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":v=A;break;case"multiple":u=A;default:Zt(i,s,f,A,o,null)}s=m,o=v,i.multiple=!!u,s!=null?qt(i,!!u,s,!1):o!=null&&qt(i,!!u,o,!0);return;case"textarea":Vt("invalid",i),m=f=u=null;for(v in o)if(o.hasOwnProperty(v)&&(A=o[v],A!=null))switch(v){case"value":u=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Zt(i,s,v,A,o,null)}Jr(i,u,f,m),$s(i);return;case"option":for(C in o)if(o.hasOwnProperty(C)&&(u=o[C],u!=null))switch(C){case"selected":i.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Zt(i,s,C,u,o,null)}return;case"dialog":Vt("cancel",i),Vt("close",i);break;case"iframe":case"object":Vt("load",i);break;case"video":case"audio":for(u=0;u<ou.length;u++)Vt(ou[u],i);break;case"image":Vt("error",i),Vt("load",i);break;case"details":Vt("toggle",i);break;case"embed":case"source":case"link":Vt("error",i),Vt("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in o)if(o.hasOwnProperty(B)&&(u=o[B],u!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:Zt(i,s,B,u,o,null)}return;default:if(bl(s)){for(W in o)o.hasOwnProperty(W)&&(u=o[W],u!==void 0&&fm(i,s,W,u,o,void 0));return}}for(A in o)o.hasOwnProperty(A)&&(u=o[A],u!=null&&Zt(i,s,A,u,o,null))}function e1(i,s,o,u){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,v=null,A=null,C=null,B=null,W=null;for(X in o){var nt=o[X];if(o.hasOwnProperty(X)&&nt!=null)switch(X){case"checked":break;case"value":break;case"defaultValue":C=nt;default:u.hasOwnProperty(X)||Zt(i,s,X,null,u,nt)}}for(var K in u){var X=u[K];if(nt=o[K],u.hasOwnProperty(K)&&(X!=null||nt!=null))switch(K){case"type":m=X;break;case"name":f=X;break;case"checked":B=X;break;case"defaultChecked":W=X;break;case"value":v=X;break;case"defaultValue":A=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(r(137,s));break;default:X!==nt&&Zt(i,s,K,X,u,nt)}}Zr(i,v,A,C,B,W,m,f);return;case"select":X=v=A=K=null;for(m in o)if(C=o[m],o.hasOwnProperty(m)&&C!=null)switch(m){case"value":break;case"multiple":X=C;default:u.hasOwnProperty(m)||Zt(i,s,m,null,u,C)}for(f in u)if(m=u[f],C=o[f],u.hasOwnProperty(f)&&(m!=null||C!=null))switch(f){case"value":K=m;break;case"defaultValue":A=m;break;case"multiple":v=m;default:m!==C&&Zt(i,s,f,m,u,C)}s=A,o=v,u=X,K!=null?qt(i,!!o,K,!1):!!u!=!!o&&(s!=null?qt(i,!!o,s,!0):qt(i,!!o,o?[]:"",!1));return;case"textarea":X=K=null;for(A in o)if(f=o[A],o.hasOwnProperty(A)&&f!=null&&!u.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Zt(i,s,A,null,u,f)}for(v in u)if(f=u[v],m=o[v],u.hasOwnProperty(v)&&(f!=null||m!=null))switch(v){case"value":K=f;break;case"defaultValue":X=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==m&&Zt(i,s,v,f,u,m)}Qs(i,K,X);return;case"option":for(var pt in o)if(K=o[pt],o.hasOwnProperty(pt)&&K!=null&&!u.hasOwnProperty(pt))switch(pt){case"selected":i.selected=!1;break;default:Zt(i,s,pt,null,u,K)}for(C in u)if(K=u[C],X=o[C],u.hasOwnProperty(C)&&K!==X&&(K!=null||X!=null))switch(C){case"selected":i.selected=K&&typeof K!="function"&&typeof K!="symbol";break;default:Zt(i,s,C,K,u,X)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var wt in o)K=o[wt],o.hasOwnProperty(wt)&&K!=null&&!u.hasOwnProperty(wt)&&Zt(i,s,wt,null,u,K);for(B in u)if(K=u[B],X=o[B],u.hasOwnProperty(B)&&K!==X&&(K!=null||X!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(r(137,s));break;default:Zt(i,s,B,K,u,X)}return;default:if(bl(s)){for(var me in o)K=o[me],o.hasOwnProperty(me)&&K!==void 0&&!u.hasOwnProperty(me)&&fm(i,s,me,void 0,u,K);for(W in u)K=u[W],X=o[W],!u.hasOwnProperty(W)||K===X||K===void 0&&X===void 0||fm(i,s,W,K,u,X);return}}for(var F in o)K=o[F],o.hasOwnProperty(F)&&K!=null&&!u.hasOwnProperty(F)&&Zt(i,s,F,null,u,K);for(nt in u)K=u[nt],X=o[nt],!u.hasOwnProperty(nt)||K===X||K==null&&X==null||Zt(i,s,nt,K,u,X)}var dm=null,pm=null;function Dh(i){return i.nodeType===9?i:i.ownerDocument}function $E(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function KE(i,s){if(i===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&s==="foreignObject"?0:i}function mm(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var gm=null;function n1(){var i=window.event;return i&&i.type==="popstate"?i===gm?!1:(gm=i,!0):(gm=null,!1)}var QE=typeof setTimeout=="function"?setTimeout:void 0,i1=typeof clearTimeout=="function"?clearTimeout:void 0,YE=typeof Promise=="function"?Promise:void 0,r1=typeof queueMicrotask=="function"?queueMicrotask:typeof YE<"u"?function(i){return YE.resolve(null).then(i).catch(s1)}:QE;function s1(i){setTimeout(function(){throw i})}function _m(i,s){var o=s,u=0;do{var f=o.nextSibling;if(i.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(u===0){i.removeChild(f),gu(s);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=f}while(o);gu(s)}function ym(i){var s=i.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":ym(o),Gs(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function a1(i,s,o,u){for(;i.nodeType===1;){var f=o;if(i.nodeName.toLowerCase()!==s.toLowerCase()){if(!u&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(u){if(!i[Kr])switch(s){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(m=i.getAttribute("rel"),m==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(m!==f.rel||i.getAttribute("href")!==(f.href==null?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(m=i.getAttribute("src"),(m!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(s==="input"&&i.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===m)return i}else return i;if(i=li(i.nextSibling),i===null)break}return null}function o1(i,s,o){if(s==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=li(i.nextSibling),i===null))return null;return i}function li(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return i}function XE(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return i;s--}else o==="/$"&&s++}i=i.previousSibling}return null}function WE(i,s,o){switch(s=Dh(o),i){case"html":if(i=s.documentElement,!i)throw Error(r(452));return i;case"head":if(i=s.head,!i)throw Error(r(453));return i;case"body":if(i=s.body,!i)throw Error(r(454));return i;default:throw Error(r(451))}}var Zn=new Map,ZE=new Set;function Nh(i){return typeof i.getRootNode=="function"?i.getRootNode():i.ownerDocument}var dr=ut.d;ut.d={f:l1,r:u1,D:c1,C:h1,L:f1,m:d1,X:m1,S:p1,M:g1};function l1(){var i=dr.f(),s=Ah();return i||s}function u1(i){var s=Gi(i);s!==null&&s.tag===5&&s.type==="form"?Sv(s):dr.r(i)}var Do=typeof document>"u"?null:document;function JE(i,s,o){var u=Do;if(u&&typeof s=="string"&&s){var f=fe(s);f='link[rel="'+i+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),ZE.has(f)||(ZE.add(f),i={rel:i,crossOrigin:o,href:s},u.querySelector(f)===null&&(s=u.createElement("link"),Qe(s,"link",i),ae(s),u.head.appendChild(s)))}}function c1(i){dr.D(i),JE("dns-prefetch",i,null)}function h1(i,s){dr.C(i,s),JE("preconnect",i,s)}function f1(i,s,o){dr.L(i,s,o);var u=Do;if(u&&i&&s){var f='link[rel="preload"][as="'+fe(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+fe(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+fe(o.imageSizes)+'"]')):f+='[href="'+fe(i)+'"]';var m=f;switch(s){case"style":m=No(i);break;case"script":m=Oo(i)}Zn.has(m)||(i=N({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:i,as:s},o),Zn.set(m,i),u.querySelector(f)!==null||s==="style"&&u.querySelector(uu(m))||s==="script"&&u.querySelector(cu(m))||(s=u.createElement("link"),Qe(s,"link",i),ae(s),u.head.appendChild(s)))}}function d1(i,s){dr.m(i,s);var o=Do;if(o&&i){var u=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+fe(u)+'"][href="'+fe(i)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Oo(i)}if(!Zn.has(m)&&(i=N({rel:"modulepreload",href:i},s),Zn.set(m,i),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(cu(m)))return}u=o.createElement("link"),Qe(u,"link",i),ae(u),o.head.appendChild(u)}}}function p1(i,s,o){dr.S(i,s,o);var u=Do;if(u&&i){var f=Yr(u).hoistableStyles,m=No(i);s=s||"default";var v=f.get(m);if(!v){var A={loading:0,preload:null};if(v=u.querySelector(uu(m)))A.loading=5;else{i=N({rel:"stylesheet",href:i,"data-precedence":s},o),(o=Zn.get(m))&&vm(i,o);var C=v=u.createElement("link");ae(C),Qe(C,"link",i),C._p=new Promise(function(B,W){C.onload=B,C.onerror=W}),C.addEventListener("load",function(){A.loading|=1}),C.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Oh(v,s,u)}v={type:"stylesheet",instance:v,count:1,state:A},f.set(m,v)}}}function m1(i,s){dr.X(i,s);var o=Do;if(o&&i){var u=Yr(o).hoistableScripts,f=Oo(i),m=u.get(f);m||(m=o.querySelector(cu(f)),m||(i=N({src:i,async:!0},s),(s=Zn.get(f))&&Em(i,s),m=o.createElement("script"),ae(m),Qe(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function g1(i,s){dr.M(i,s);var o=Do;if(o&&i){var u=Yr(o).hoistableScripts,f=Oo(i),m=u.get(f);m||(m=o.querySelector(cu(f)),m||(i=N({src:i,async:!0,type:"module"},s),(s=Zn.get(f))&&Em(i,s),m=o.createElement("script"),ae(m),Qe(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function tT(i,s,o,u){var f=(f=Mn.current)?Nh(f):null;if(!f)throw Error(r(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=No(o.href),o=Yr(f).hoistableStyles,u=o.get(s),u||(u={type:"style",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=No(o.href);var m=Yr(f).hoistableStyles,v=m.get(i);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(i,v),(m=f.querySelector(uu(i)))&&!m._p&&(v.instance=m,v.state.loading=5),Zn.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Zn.set(i,o),m||_1(f,i,o,v.state))),s&&u===null)throw Error(r(528,""));return v}if(s&&u!==null)throw Error(r(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=Oo(o),o=Yr(f).hoistableScripts,u=o.get(s),u||(u={type:"script",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,i))}}function No(i){return'href="'+fe(i)+'"'}function uu(i){return'link[rel="stylesheet"]['+i+"]"}function eT(i){return N({},i,{"data-precedence":i.precedence,precedence:null})}function _1(i,s,o,u){i.querySelector('link[rel="preload"][as="style"]['+s+"]")?u.loading=1:(s=i.createElement("link"),u.preload=s,s.addEventListener("load",function(){return u.loading|=1}),s.addEventListener("error",function(){return u.loading|=2}),Qe(s,"link",o),ae(s),i.head.appendChild(s))}function Oo(i){return'[src="'+fe(i)+'"]'}function cu(i){return"script[async]"+i}function nT(i,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var u=i.querySelector('style[data-href~="'+fe(o.href)+'"]');if(u)return s.instance=u,ae(u),u;var f=N({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(i.ownerDocument||i).createElement("style"),ae(u),Qe(u,"style",f),Oh(u,o.precedence,i),s.instance=u;case"stylesheet":f=No(o.href);var m=i.querySelector(uu(f));if(m)return s.state.loading|=4,s.instance=m,ae(m),m;u=eT(o),(f=Zn.get(f))&&vm(u,f),m=(i.ownerDocument||i).createElement("link"),ae(m);var v=m;return v._p=new Promise(function(A,C){v.onload=A,v.onerror=C}),Qe(m,"link",u),s.state.loading|=4,Oh(m,o.precedence,i),s.instance=m;case"script":return m=Oo(o.src),(f=i.querySelector(cu(m)))?(s.instance=f,ae(f),f):(u=o,(f=Zn.get(m))&&(u=N({},o),Em(u,f)),i=i.ownerDocument||i,f=i.createElement("script"),ae(f),Qe(f,"link",u),i.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(r(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(u=s.instance,s.state.loading|=4,Oh(u,o.precedence,i));return s.instance}function Oh(i,s,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,v=0;v<u.length;v++){var A=u[v];if(A.dataset.precedence===s)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(i,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(i,s.firstChild))}function vm(i,s){i.crossOrigin==null&&(i.crossOrigin=s.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=s.referrerPolicy),i.title==null&&(i.title=s.title)}function Em(i,s){i.crossOrigin==null&&(i.crossOrigin=s.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=s.referrerPolicy),i.integrity==null&&(i.integrity=s.integrity)}var Ph=null;function iT(i,s,o){if(Ph===null){var u=new Map,f=Ph=new Map;f.set(o,u)}else f=Ph,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(i))return u;for(u.set(i,null),o=o.getElementsByTagName(i),f=0;f<o.length;f++){var m=o[f];if(!(m[Kr]||m[Me]||i==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(s)||"";v=i+v;var A=u.get(v);A?A.push(m):u.set(v,[m])}}return u}function rT(i,s,o){i=i.ownerDocument||i,i.head.insertBefore(o,s==="title"?i.querySelector("head > title"):null)}function y1(i,s,o){if(o===1||s.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return i=s.disabled,typeof s.precedence=="string"&&i==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function sT(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var hu=null;function v1(){}function E1(i,s,o){if(hu===null)throw Error(r(475));var u=hu;if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=No(o.href),m=i.querySelector(uu(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(u.count++,u=kh.bind(u),i.then(u,u)),s.state.loading|=4,s.instance=m,ae(m);return}m=i.ownerDocument||i,o=eT(o),(f=Zn.get(f))&&vm(o,f),m=m.createElement("link"),ae(m);var v=m;v._p=new Promise(function(A,C){v.onload=A,v.onerror=C}),Qe(m,"link",o),s.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(u.count++,s=kh.bind(u),i.addEventListener("load",s),i.addEventListener("error",s))}}function T1(){if(hu===null)throw Error(r(475));var i=hu;return i.stylesheets&&i.count===0&&Tm(i,i.stylesheets),0<i.count?function(s){var o=setTimeout(function(){if(i.stylesheets&&Tm(i,i.stylesheets),i.unsuspend){var u=i.unsuspend;i.unsuspend=null,u()}},6e4);return i.unsuspend=s,function(){i.unsuspend=null,clearTimeout(o)}}:null}function kh(){if(this.count--,this.count===0){if(this.stylesheets)Tm(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var Vh=null;function Tm(i,s){i.stylesheets=null,i.unsuspend!==null&&(i.count++,Vh=new Map,s.forEach(A1,i),Vh=null,kh.call(i))}function A1(i,s){if(!(s.state.loading&4)){var o=Vh.get(i);if(o)var u=o.get(null);else{o=new Map,Vh.set(i,o);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var v=f[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),u=v)}u&&o.set(null,u)}f=s.instance,v=f.getAttribute("data-precedence"),m=o.get(v)||u,m===u&&o.set(null,f),o.set(v,f),this.count++,u=kh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),s.state.loading|=4}}var fu={$$typeof:I,Provider:null,Consumer:null,_currentValue:It,_currentValue2:It,_threadCount:0};function w1(i,s,o,u,f,m,v,A){this.tag=1,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ga(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ga(0),this.hiddenUpdates=Ga(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function aT(i,s,o,u,f,m,v,A,C,B,W,nt){return i=new w1(i,s,o,v,A,C,B,nt),s=1,m===!0&&(s|=24),m=Xn(3,null,null,s),i.current=m,m.stateNode=i,s=Jd(),s.refCount++,i.pooledCache=s,s.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:s},kp(m),i}function oT(i){return i?(i=lo,i):lo}function lT(i,s,o,u,f,m){f=oT(f),u.context===null?u.context=f:u.pendingContext=f,u=ls(s),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=us(i,u,s),o!==null&&(hn(o,i,s),Yl(o,i,s))}function uT(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<s?o:s}}function Am(i,s){uT(i,s),(i=i.alternate)&&uT(i,s)}function cT(i){if(i.tag===13){var s=es(i,67108864);s!==null&&hn(s,i,67108864),Am(i,67108864)}}var xh=!0;function b1(i,s,o,u){var f=S.T;S.T=null;var m=ut.p;try{ut.p=2,wm(i,s,o,u)}finally{ut.p=m,S.T=f}}function S1(i,s,o,u){var f=S.T;S.T=null;var m=ut.p;try{ut.p=8,wm(i,s,o,u)}finally{ut.p=m,S.T=f}}function wm(i,s,o,u){if(xh){var f=bm(u);if(f===null)hm(i,s,u,Mh,o),fT(i,u);else if(I1(f,i,s,o,u))u.stopPropagation();else if(fT(i,u),s&4&&-1<R1.indexOf(i)){for(;f!==null;){var m=Gi(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=ii(m.pendingLanes);if(v!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var C=1<<31-on(v);A.entanglements[1]|=C,v&=~C}Di(m),(le&6)===0&&(vh=mn()+500,au(0))}}break;case 13:A=es(m,2),A!==null&&hn(A,m,2),Ah(),Am(m,2)}if(m=bm(u),m===null&&hm(i,s,u,Mh,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else hm(i,s,u,null,o)}}function bm(i){return i=Xa(i),Sm(i)}var Mh=null;function Sm(i){if(Mh=null,i=ri(i),i!==null){var s=dt(i);if(s===null)i=null;else{var o=s.tag;if(o===13){if(i=Kt(s),i!==null)return i;i=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return Mh=i,null}function hT(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Tc()){case Ce:return 2;case xe:return 8;case qi:case Ac:return 32;case pl:return 268435456;default:return 32}default:return 32}}var Rm=!1,gs=null,_s=null,ys=null,du=new Map,pu=new Map,vs=[],R1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function fT(i,s){switch(i){case"focusin":case"focusout":gs=null;break;case"dragenter":case"dragleave":_s=null;break;case"mouseover":case"mouseout":ys=null;break;case"pointerover":case"pointerout":du.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":pu.delete(s.pointerId)}}function mu(i,s,o,u,f,m){return i===null||i.nativeEvent!==m?(i={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},s!==null&&(s=Gi(s),s!==null&&cT(s)),i):(i.eventSystemFlags|=u,s=i.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),i)}function I1(i,s,o,u,f){switch(s){case"focusin":return gs=mu(gs,i,s,o,u,f),!0;case"dragenter":return _s=mu(_s,i,s,o,u,f),!0;case"mouseover":return ys=mu(ys,i,s,o,u,f),!0;case"pointerover":var m=f.pointerId;return du.set(m,mu(du.get(m)||null,i,s,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,pu.set(m,mu(pu.get(m)||null,i,s,o,u,f)),!0}return!1}function dT(i){var s=ri(i.target);if(s!==null){var o=dt(s);if(o!==null){if(s=o.tag,s===13){if(s=Kt(o),s!==null){i.blockedOn=s,$r(i.priority,function(){if(o.tag===13){var u=Nn(),f=es(o,u);f!==null&&hn(f,o,u),Am(o,u)}});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Uh(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var o=bm(i.nativeEvent);if(o===null){o=i.nativeEvent;var u=new o.constructor(o.type,o);zn=u,o.target.dispatchEvent(u),zn=null}else return s=Gi(o),s!==null&&cT(s),i.blockedOn=o,!1;s.shift()}return!0}function pT(i,s,o){Uh(i)&&o.delete(s)}function C1(){Rm=!1,gs!==null&&Uh(gs)&&(gs=null),_s!==null&&Uh(_s)&&(_s=null),ys!==null&&Uh(ys)&&(ys=null),du.forEach(pT),pu.forEach(pT)}function Lh(i,s){i.blockedOn===s&&(i.blockedOn=null,Rm||(Rm=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,C1)))}var Bh=null;function mT(i){Bh!==i&&(Bh=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Bh===i&&(Bh=null);for(var s=0;s<i.length;s+=3){var o=i[s],u=i[s+1],f=i[s+2];if(typeof u!="function"){if(Sm(u||o)===null)continue;break}var m=Gi(o);m!==null&&(i.splice(s,3),s-=3,mp(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function gu(i){function s(C){return Lh(C,i)}gs!==null&&Lh(gs,i),_s!==null&&Lh(_s,i),ys!==null&&Lh(ys,i),du.forEach(s),pu.forEach(s);for(var o=0;o<vs.length;o++){var u=vs[o];u.blockedOn===i&&(u.blockedOn=null)}for(;0<vs.length&&(o=vs[0],o.blockedOn===null);)dT(o),o.blockedOn===null&&vs.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],v=f[De]||null;if(typeof m=="function")v||mT(o);else if(v){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,v=m[De]||null)A=v.formAction;else if(Sm(f)!==null)continue}else A=v.action;typeof A=="function"?o[u+1]=A:(o.splice(u,3),u-=3),mT(o)}}}function Im(i){this._internalRoot=i}zh.prototype.render=Im.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(r(409));var o=s.current,u=Nn();lT(o,u,i,s,null,null)},zh.prototype.unmount=Im.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;i.tag===0&&Ro(),lT(i.current,2,null,i,null,null),Ah(),s[Hi]=null}};function zh(i){this._internalRoot=i}zh.prototype.unstable_scheduleHydration=function(i){if(i){var s=Ic();i={blockedOn:null,target:i,priority:s};for(var o=0;o<vs.length&&s!==0&&s<vs[o].priority;o++);vs.splice(o,0,i),o===0&&dT(i)}};var gT=t.version;if(gT!=="19.0.0")throw Error(r(527,gT,"19.0.0"));ut.findDOMNode=function(i){var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(r(188)):(i=Object.keys(i).join(","),Error(r(268,i)));return i=rt(s),i=i!==null?mt(i):null,i=i===null?null:i.stateNode,i};var D1={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:S,findFiberByHostInstance:ri,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jh.isDisabled&&jh.supportsFiber)try{zr=jh.inject(D1),Xe=jh}catch{}}return yu.createRoot=function(i,s){if(!a(i))throw Error(r(299));var o=!1,u="",f=kv,m=Vv,v=xv,A=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(v=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(A=s.unstable_transitionCallbacks)),s=aT(i,1,!1,null,null,o,u,f,m,v,A,null),i[Hi]=s.current,cm(i.nodeType===8?i.parentNode:i),new Im(s)},yu.hydrateRoot=function(i,s,o){if(!a(i))throw Error(r(299));var u=!1,f="",m=kv,v=Vv,A=xv,C=null,B=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(A=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(C=o.unstable_transitionCallbacks),o.formState!==void 0&&(B=o.formState)),s=aT(i,1,!0,s,o??null,u,f,m,v,A,C,B),s.context=oT(null),o=s.current,u=Nn(),f=ls(u),f.callback=null,us(o,f,u),s.current.lanes=u,_e(s,u),Di(s),i[Hi]=s.current,cm(i),new zh(s)},yu.version="19.0.0",yu}var RT;function z1(){if(RT)return Nm.exports;RT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),Nm.exports=B1(),Nm.exports}var j1=z1(),vu={},IT;function F1(){if(IT)return vu;IT=1,Object.defineProperty(vu,"__esModule",{value:!0}),vu.parse=c,vu.serialize=g;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,e=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,l=(()=>{const b=function(){};return b.prototype=Object.create(null),b})();function c(b,I){const D=new l,L=b.length;if(L<2)return D;const O=(I==null?void 0:I.decode)||E;let M=0;do{const q=b.indexOf("=",M);if(q===-1)break;const z=b.indexOf(";",M),Y=z===-1?L:z;if(q>Y){M=b.lastIndexOf(";",q-1)+1;continue}const it=d(b,M,q),ot=p(b,q,it),k=b.slice(it,ot);if(D[k]===void 0){let R=d(b,q+1,Y),S=p(b,Y,R);const N=O(b.slice(R,S));D[k]=N}M=Y+1}while(M<L);return D}function d(b,I,D){do{const L=b.charCodeAt(I);if(L!==32&&L!==9)return I}while(++I<D);return D}function p(b,I,D){for(;I>D;){const L=b.charCodeAt(--I);if(L!==32&&L!==9)return I+1}return D}function g(b,I,D){const L=(D==null?void 0:D.encode)||encodeURIComponent;if(!n.test(b))throw new TypeError(`argument name is invalid: ${b}`);const O=L(I);if(!t.test(O))throw new TypeError(`argument val is invalid: ${I}`);let M=b+"="+O;if(!D)return M;if(D.maxAge!==void 0){if(!Number.isInteger(D.maxAge))throw new TypeError(`option maxAge is invalid: ${D.maxAge}`);M+="; Max-Age="+D.maxAge}if(D.domain){if(!e.test(D.domain))throw new TypeError(`option domain is invalid: ${D.domain}`);M+="; Domain="+D.domain}if(D.path){if(!r.test(D.path))throw new TypeError(`option path is invalid: ${D.path}`);M+="; Path="+D.path}if(D.expires){if(!T(D.expires)||!Number.isFinite(D.expires.valueOf()))throw new TypeError(`option expires is invalid: ${D.expires}`);M+="; Expires="+D.expires.toUTCString()}if(D.httpOnly&&(M+="; HttpOnly"),D.secure&&(M+="; Secure"),D.partitioned&&(M+="; Partitioned"),D.priority)switch(typeof D.priority=="string"?D.priority.toLowerCase():void 0){case"low":M+="; Priority=Low";break;case"medium":M+="; Priority=Medium";break;case"high":M+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${D.priority}`)}if(D.sameSite)switch(typeof D.sameSite=="string"?D.sameSite.toLowerCase():D.sameSite){case!0:case"strict":M+="; SameSite=Strict";break;case"lax":M+="; SameSite=Lax";break;case"none":M+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${D.sameSite}`)}return M}function E(b){if(b.indexOf("%")===-1)return b;try{return decodeURIComponent(b)}catch{return b}}function T(b){return a.call(b)==="[object Date]"}return vu}F1();/**
 * react-router v7.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var CT="popstate";function q1(n={}){function t(r,a){let{pathname:l,search:c,hash:d}=r.location;return eg("",{pathname:l,search:c,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function e(r,a){return typeof a=="string"?a:zu(a)}return G1(t,e,null,n)}function ue(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function Li(n,t){if(!n){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function H1(){return Math.random().toString(36).substring(2,10)}function DT(n,t){return{usr:n.state,key:n.key,idx:t}}function eg(n,t,e=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof t=="string"?el(t):t,state:e,key:t&&t.key||r||H1()}}function zu({pathname:n="/",search:t="",hash:e=""}){return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),e&&e!=="#"&&(n+=e.charAt(0)==="#"?e:"#"+e),n}function el(n){let t={};if(n){let e=n.indexOf("#");e>=0&&(t.hash=n.substring(e),n=n.substring(0,e));let r=n.indexOf("?");r>=0&&(t.search=n.substring(r),n=n.substring(0,r)),n&&(t.pathname=n)}return t}function G1(n,t,e,r={}){let{window:a=document.defaultView,v5Compat:l=!1}=r,c=a.history,d="POP",p=null,g=E();g==null&&(g=0,c.replaceState({...c.state,idx:g},""));function E(){return(c.state||{idx:null}).idx}function T(){d="POP";let O=E(),M=O==null?null:O-g;g=O,p&&p({action:d,location:L.location,delta:M})}function b(O,M){d="PUSH";let q=eg(L.location,O,M);g=E()+1;let z=DT(q,g),Y=L.createHref(q);try{c.pushState(z,"",Y)}catch(it){if(it instanceof DOMException&&it.name==="DataCloneError")throw it;a.location.assign(Y)}l&&p&&p({action:d,location:L.location,delta:1})}function I(O,M){d="REPLACE";let q=eg(L.location,O,M);g=E();let z=DT(q,g),Y=L.createHref(q);c.replaceState(z,"",Y),l&&p&&p({action:d,location:L.location,delta:0})}function D(O){let M=a.location.origin!=="null"?a.location.origin:a.location.href,q=typeof O=="string"?O:zu(O);return q=q.replace(/ $/,"%20"),ue(M,`No window.location.(origin|href) available to create URL for href: ${q}`),new URL(q,M)}let L={get action(){return d},get location(){return n(a,c)},listen(O){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(CT,T),p=O,()=>{a.removeEventListener(CT,T),p=null}},createHref(O){return t(a,O)},createURL:D,encodeLocation(O){let M=D(O);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:b,replace:I,go(O){return c.go(O)}};return L}function jA(n,t,e="/"){return $1(n,t,e,!1)}function $1(n,t,e,r){let a=typeof t=="string"?el(t):t,l=Ir(a.pathname||"/",e);if(l==null)return null;let c=FA(n);K1(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let g=rC(l);d=nC(c[p],g,r)}return d}function FA(n,t=[],e=[],r=""){let a=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(ue(p.relativePath.startsWith(r),`Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(r.length));let g=Er([r,p.relativePath]),E=e.concat(p);l.children&&l.children.length>0&&(ue(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),FA(l.children,t,E,g)),!(l.path==null&&!l.index)&&t.push({path:g,score:tC(g,l.index),routesMeta:E})};return n.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))a(l,c);else for(let p of qA(l.path))a(l,c,p)}),t}function qA(n){let t=n.split("/");if(t.length===0)return[];let[e,...r]=t,a=e.endsWith("?"),l=e.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let c=qA(r.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),a&&d.push(...c),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function K1(n){n.sort((t,e)=>t.score!==e.score?e.score-t.score:eC(t.routesMeta.map(r=>r.childrenIndex),e.routesMeta.map(r=>r.childrenIndex)))}var Q1=/^:[\w-]+$/,Y1=3,X1=2,W1=1,Z1=10,J1=-2,NT=n=>n==="*";function tC(n,t){let e=n.split("/"),r=e.length;return e.some(NT)&&(r+=J1),t&&(r+=X1),e.filter(a=>!NT(a)).reduce((a,l)=>a+(Q1.test(l)?Y1:l===""?W1:Z1),r)}function eC(n,t){return n.length===t.length&&n.slice(0,-1).every((r,a)=>r===t[a])?n[n.length-1]-t[t.length-1]:0}function nC(n,t,e=!1){let{routesMeta:r}=n,a={},l="/",c=[];for(let d=0;d<r.length;++d){let p=r[d],g=d===r.length-1,E=l==="/"?t:t.slice(l.length)||"/",T=_f({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},E),b=p.route;if(!T&&g&&e&&!r[r.length-1].route.index&&(T=_f({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!T)return null;Object.assign(a,T.params),c.push({params:a,pathname:Er([l,T.pathname]),pathnameBase:lC(Er([l,T.pathnameBase])),route:b}),T.pathnameBase!=="/"&&(l=Er([l,T.pathnameBase]))}return c}function _f(n,t){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[e,r]=iC(n.path,n.caseSensitive,n.end),a=t.match(e);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:r.reduce((g,{paramName:E,isOptional:T},b)=>{if(E==="*"){let D=d[b]||"";c=l.slice(0,l.length-D.length).replace(/(.)\/+$/,"$1")}const I=d[b];return T&&!I?g[E]=void 0:g[E]=(I||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:c,pattern:n}}function iC(n,t=!1,e=!0){Li(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(r.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):e?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function rC(n){try{return n.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Li(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),n}}function Ir(n,t){if(t==="/")return n;if(!n.toLowerCase().startsWith(t.toLowerCase()))return null;let e=t.endsWith("/")?t.length-1:t.length,r=n.charAt(e);return r&&r!=="/"?null:n.slice(e)||"/"}function sC(n,t="/"){let{pathname:e,search:r="",hash:a=""}=typeof n=="string"?el(n):n;return{pathname:e?e.startsWith("/")?e:aC(e,t):t,search:uC(r),hash:cC(a)}}function aC(n,t){let e=t.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?e.length>1&&e.pop():a!=="."&&e.push(a)}),e.length>1?e.join("/"):"/"}function Vm(n,t,e,r){return`Cannot include a '${n}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${e}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function oC(n){return n.filter((t,e)=>e===0||t.route.path&&t.route.path.length>0)}function HA(n){let t=oC(n);return t.map((e,r)=>r===t.length-1?e.pathname:e.pathnameBase)}function GA(n,t,e,r=!1){let a;typeof n=="string"?a=el(n):(a={...n},ue(!a.pathname||!a.pathname.includes("?"),Vm("?","pathname","search",a)),ue(!a.pathname||!a.pathname.includes("#"),Vm("#","pathname","hash",a)),ue(!a.search||!a.search.includes("#"),Vm("#","search","hash",a)));let l=n===""||a.pathname==="",c=l?"/":a.pathname,d;if(c==null)d=e;else{let T=t.length-1;if(!r&&c.startsWith("..")){let b=c.split("/");for(;b[0]==="..";)b.shift(),T-=1;a.pathname=b.join("/")}d=T>=0?t[T]:"/"}let p=sC(a,d),g=c&&c!=="/"&&c.endsWith("/"),E=(l||c===".")&&e.endsWith("/");return!p.pathname.endsWith("/")&&(g||E)&&(p.pathname+="/"),p}var Er=n=>n.join("/").replace(/\/\/+/g,"/"),lC=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),uC=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,cC=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function hC(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var $A=["POST","PUT","PATCH","DELETE"];new Set($A);var fC=["GET",...$A];new Set(fC);var nl=G.createContext(null);nl.displayName="DataRouter";var Yf=G.createContext(null);Yf.displayName="DataRouterState";var KA=G.createContext({isTransitioning:!1});KA.displayName="ViewTransition";var dC=G.createContext(new Map);dC.displayName="Fetchers";var pC=G.createContext(null);pC.displayName="Await";var zi=G.createContext(null);zi.displayName="Navigation";var tc=G.createContext(null);tc.displayName="Location";var xr=G.createContext({outlet:null,matches:[],isDataRoute:!1});xr.displayName="Route";var Xg=G.createContext(null);Xg.displayName="RouteError";function mC(n,{relative:t}={}){ue(ec(),"useHref() may be used only in the context of a <Router> component.");let{basename:e,navigator:r}=G.useContext(zi),{hash:a,pathname:l,search:c}=ic(n,{relative:t}),d=l;return e!=="/"&&(d=l==="/"?e:Er([e,l])),r.createHref({pathname:d,search:c,hash:a})}function ec(){return G.useContext(tc)!=null}function xa(){return ue(ec(),"useLocation() may be used only in the context of a <Router> component."),G.useContext(tc).location}var QA="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function YA(n){G.useContext(zi).static||G.useLayoutEffect(n)}function nc(){let{isDataRoute:n}=G.useContext(xr);return n?CC():gC()}function gC(){ue(ec(),"useNavigate() may be used only in the context of a <Router> component.");let n=G.useContext(nl),{basename:t,navigator:e}=G.useContext(zi),{matches:r}=G.useContext(xr),{pathname:a}=xa(),l=JSON.stringify(HA(r)),c=G.useRef(!1);return YA(()=>{c.current=!0}),G.useCallback((p,g={})=>{if(Li(c.current,QA),!c.current)return;if(typeof p=="number"){e.go(p);return}let E=GA(p,JSON.parse(l),a,g.relative==="path");n==null&&t!=="/"&&(E.pathname=E.pathname==="/"?t:Er([t,E.pathname])),(g.replace?e.replace:e.push)(E,g.state,g)},[t,e,l,a,n])}G.createContext(null);function ic(n,{relative:t}={}){let{matches:e}=G.useContext(xr),{pathname:r}=xa(),a=JSON.stringify(HA(e));return G.useMemo(()=>GA(n,JSON.parse(a),r,t==="path"),[n,a,r,t])}function _C(n,t){return XA(n,t)}function XA(n,t,e,r){var q;ue(ec(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a,static:l}=G.useContext(zi),{matches:c}=G.useContext(xr),d=c[c.length-1],p=d?d.params:{},g=d?d.pathname:"/",E=d?d.pathnameBase:"/",T=d&&d.route;{let z=T&&T.path||"";WA(g,!T||z.endsWith("*")||z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${z==="/"?"*":`${z}/*`}">.`)}let b=xa(),I;if(t){let z=typeof t=="string"?el(t):t;ue(E==="/"||((q=z.pathname)==null?void 0:q.startsWith(E)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${z.pathname}" was given in the \`location\` prop.`),I=z}else I=b;let D=I.pathname||"/",L=D;if(E!=="/"){let z=E.replace(/^\//,"").split("/");L="/"+D.replace(/^\//,"").split("/").slice(z.length).join("/")}let O=!l&&e&&e.matches&&e.matches.length>0?e.matches:jA(n,{pathname:L});Li(T||O!=null,`No routes matched location "${I.pathname}${I.search}${I.hash}" `),Li(O==null||O[O.length-1].route.element!==void 0||O[O.length-1].route.Component!==void 0||O[O.length-1].route.lazy!==void 0,`Matched leaf route at location "${I.pathname}${I.search}${I.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=AC(O&&O.map(z=>Object.assign({},z,{params:Object.assign({},p,z.params),pathname:Er([E,a.encodeLocation?a.encodeLocation(z.pathname).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?E:Er([E,a.encodeLocation?a.encodeLocation(z.pathnameBase).pathname:z.pathnameBase])})),c,e,r);return t&&M?G.createElement(tc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...I},navigationType:"POP"}},M):M}function yC(){let n=IC(),t=hC(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),e=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r},l={padding:"2px 4px",backgroundColor:r},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=G.createElement(G.Fragment,null,G.createElement("p",null,"💿 Hey developer 👋"),G.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",G.createElement("code",{style:l},"ErrorBoundary")," or"," ",G.createElement("code",{style:l},"errorElement")," prop on your route.")),G.createElement(G.Fragment,null,G.createElement("h2",null,"Unexpected Application Error!"),G.createElement("h3",{style:{fontStyle:"italic"}},t),e?G.createElement("pre",{style:a},e):null,c)}var vC=G.createElement(yC,null),EC=class extends G.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?G.createElement(xr.Provider,{value:this.props.routeContext},G.createElement(Xg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function TC({routeContext:n,match:t,children:e}){let r=G.useContext(nl);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),G.createElement(xr.Provider,{value:n},e)}function AC(n,t=[],e=null,r=null){if(n==null){if(!e)return null;if(e.errors)n=e.matches;else if(t.length===0&&!e.initialized&&e.matches.length>0)n=e.matches;else return null}let a=n,l=e==null?void 0:e.errors;if(l!=null){let p=a.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);ue(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let c=!1,d=-1;if(e)for(let p=0;p<a.length;p++){let g=a[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=p),g.route.id){let{loaderData:E,errors:T}=e,b=g.route.loader&&!E.hasOwnProperty(g.route.id)&&(!T||T[g.route.id]===void 0);if(g.route.lazy||b){c=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((p,g,E)=>{let T,b=!1,I=null,D=null;e&&(T=l&&g.route.id?l[g.route.id]:void 0,I=g.route.errorElement||vC,c&&(d<0&&E===0?(WA("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,D=null):d===E&&(b=!0,D=g.route.hydrateFallbackElement||null)));let L=t.concat(a.slice(0,E+1)),O=()=>{let M;return T?M=I:b?M=D:g.route.Component?M=G.createElement(g.route.Component,null):g.route.element?M=g.route.element:M=p,G.createElement(TC,{match:g,routeContext:{outlet:p,matches:L,isDataRoute:e!=null},children:M})};return e&&(g.route.ErrorBoundary||g.route.errorElement||E===0)?G.createElement(EC,{location:e.location,revalidation:e.revalidation,component:I,error:T,children:O(),routeContext:{outlet:null,matches:L,isDataRoute:!0}}):O()},null)}function Wg(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wC(n){let t=G.useContext(nl);return ue(t,Wg(n)),t}function bC(n){let t=G.useContext(Yf);return ue(t,Wg(n)),t}function SC(n){let t=G.useContext(xr);return ue(t,Wg(n)),t}function Zg(n){let t=SC(n),e=t.matches[t.matches.length-1];return ue(e.route.id,`${n} can only be used on routes that contain a unique "id"`),e.route.id}function RC(){return Zg("useRouteId")}function IC(){var r;let n=G.useContext(Xg),t=bC("useRouteError"),e=Zg("useRouteError");return n!==void 0?n:(r=t.errors)==null?void 0:r[e]}function CC(){let{router:n}=wC("useNavigate"),t=Zg("useNavigate"),e=G.useRef(!1);return YA(()=>{e.current=!0}),G.useCallback(async(a,l={})=>{Li(e.current,QA),e.current&&(typeof a=="number"?n.navigate(a):await n.navigate(a,{fromRouteId:t,...l}))},[n,t])}var OT={};function WA(n,t,e){!t&&!OT[n]&&(OT[n]=!0,Li(!1,e))}G.memo(DC);function DC({routes:n,future:t,state:e}){return XA(n,void 0,e,t)}function Jh(n){ue(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function NC({basename:n="/",children:t=null,location:e,navigationType:r="POP",navigator:a,static:l=!1}){ue(!ec(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),d=G.useMemo(()=>({basename:c,navigator:a,static:l,future:{}}),[c,a,l]);typeof e=="string"&&(e=el(e));let{pathname:p="/",search:g="",hash:E="",state:T=null,key:b="default"}=e,I=G.useMemo(()=>{let D=Ir(p,c);return D==null?null:{location:{pathname:D,search:g,hash:E,state:T,key:b},navigationType:r}},[c,p,g,E,T,b,r]);return Li(I!=null,`<Router basename="${c}"> is not able to match the URL "${p}${g}${E}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:G.createElement(zi.Provider,{value:d},G.createElement(tc.Provider,{children:t,value:I}))}function OC({children:n,location:t}){return _C(ng(n),t)}function ng(n,t=[]){let e=[];return G.Children.forEach(n,(r,a)=>{if(!G.isValidElement(r))return;let l=[...t,a];if(r.type===G.Fragment){e.push.apply(e,ng(r.props.children,l));return}ue(r.type===Jh,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ue(!r.props.index||!r.props.children,"An index route cannot have child routes.");let c={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(c.children=ng(r.props.children,l)),e.push(c)}),e}var tf="get",ef="application/x-www-form-urlencoded";function Xf(n){return n!=null&&typeof n.tagName=="string"}function PC(n){return Xf(n)&&n.tagName.toLowerCase()==="button"}function kC(n){return Xf(n)&&n.tagName.toLowerCase()==="form"}function VC(n){return Xf(n)&&n.tagName.toLowerCase()==="input"}function xC(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function MC(n,t){return n.button===0&&(!t||t==="_self")&&!xC(n)}var Fh=null;function UC(){if(Fh===null)try{new FormData(document.createElement("form"),0),Fh=!1}catch{Fh=!0}return Fh}var LC=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function xm(n){return n!=null&&!LC.has(n)?(Li(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ef}"`),null):n}function BC(n,t){let e,r,a,l,c;if(kC(n)){let d=n.getAttribute("action");r=d?Ir(d,t):null,e=n.getAttribute("method")||tf,a=xm(n.getAttribute("enctype"))||ef,l=new FormData(n)}else if(PC(n)||VC(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(r=p?Ir(p,t):null,e=n.getAttribute("formmethod")||d.getAttribute("method")||tf,a=xm(n.getAttribute("formenctype"))||xm(d.getAttribute("enctype"))||ef,l=new FormData(d,n),!UC()){let{name:g,type:E,value:T}=n;if(E==="image"){let b=g?`${g}.`:"";l.append(`${b}x`,"0"),l.append(`${b}y`,"0")}else g&&l.append(g,T)}}else{if(Xf(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');e=tf,r=null,a=ef,c=n}return l&&a==="text/plain"&&(c=l,l=void 0),{action:r,method:e.toLowerCase(),encType:a,formData:l,body:c}}function Jg(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}async function zC(n,t){if(n.id in t)return t[n.id];try{let e=await import(n.module);return t[n.id]=e,e}catch(e){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(e),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function jC(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function FC(n,t,e){let r=await Promise.all(n.map(async a=>{let l=t.routes[a.route.id];if(l){let c=await zC(l,e);return c.links?c.links():[]}return[]}));return $C(r.flat(1).filter(jC).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function PT(n,t,e,r,a,l){let c=(p,g)=>e[g]?p.route.id!==e[g].route.id:!0,d=(p,g)=>{var E;return e[g].pathname!==p.pathname||((E=e[g].route.path)==null?void 0:E.endsWith("*"))&&e[g].params["*"]!==p.params["*"]};return l==="assets"?t.filter((p,g)=>c(p,g)||d(p,g)):l==="data"?t.filter((p,g)=>{var T;let E=r.routes[p.route.id];if(!E||!E.hasLoader)return!1;if(c(p,g)||d(p,g))return!0;if(p.route.shouldRevalidate){let b=p.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((T=e[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function qC(n,t,{includeHydrateFallback:e}={}){return HC(n.map(r=>{let a=t.routes[r.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),e&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function HC(n){return[...new Set(n)]}function GC(n){let t={},e=Object.keys(n).sort();for(let r of e)t[r]=n[r];return t}function $C(n,t){let e=new Set;return new Set(t),n.reduce((r,a)=>{let l=JSON.stringify(GC(a));return e.has(l)||(e.add(l),r.push({key:l,link:a})),r},[])}function KC(n,t){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":t&&Ir(e.pathname,t)==="/"?e.pathname=`${t.replace(/\/$/,"")}/_root.data`:e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function ZA(){let n=G.useContext(nl);return Jg(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function QC(){let n=G.useContext(Yf);return Jg(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var t_=G.createContext(void 0);t_.displayName="FrameworkContext";function JA(){let n=G.useContext(t_);return Jg(n,"You must render this element inside a <HydratedRouter> element"),n}function YC(n,t){let e=G.useContext(t_),[r,a]=G.useState(!1),[l,c]=G.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:g,onMouseLeave:E,onTouchStart:T}=t,b=G.useRef(null);G.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let L=M=>{M.forEach(q=>{c(q.isIntersecting)})},O=new IntersectionObserver(L,{threshold:.5});return b.current&&O.observe(b.current),()=>{O.disconnect()}}},[n]),G.useEffect(()=>{if(r){let L=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(L)}}},[r]);let I=()=>{a(!0)},D=()=>{a(!1),c(!1)};return e?n!=="intent"?[l,b,{}]:[l,b,{onFocus:Eu(d,I),onBlur:Eu(p,D),onMouseEnter:Eu(g,I),onMouseLeave:Eu(E,D),onTouchStart:Eu(T,I)}]:[!1,b,{}]}function Eu(n,t){return e=>{n&&n(e),e.defaultPrevented||t(e)}}function XC({page:n,...t}){let{router:e}=ZA(),r=G.useMemo(()=>jA(e.routes,n,e.basename),[e.routes,n,e.basename]);return r?G.createElement(ZC,{page:n,matches:r,...t}):null}function WC(n){let{manifest:t,routeModules:e}=JA(),[r,a]=G.useState([]);return G.useEffect(()=>{let l=!1;return FC(n,t,e).then(c=>{l||a(c)}),()=>{l=!0}},[n,t,e]),r}function ZC({page:n,matches:t,...e}){let r=xa(),{manifest:a,routeModules:l}=JA(),{basename:c}=ZA(),{loaderData:d,matches:p}=QC(),g=G.useMemo(()=>PT(n,t,p,a,r,"data"),[n,t,p,a,r]),E=G.useMemo(()=>PT(n,t,p,a,r,"assets"),[n,t,p,a,r]),T=G.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let D=new Set,L=!1;if(t.forEach(M=>{var z;let q=a.routes[M.route.id];!q||!q.hasLoader||(!g.some(Y=>Y.route.id===M.route.id)&&M.route.id in d&&((z=l[M.route.id])!=null&&z.shouldRevalidate)||q.hasClientLoader?L=!0:D.add(M.route.id))}),D.size===0)return[];let O=KC(n,c);return L&&D.size>0&&O.searchParams.set("_routes",t.filter(M=>D.has(M.route.id)).map(M=>M.route.id).join(",")),[O.pathname+O.search]},[c,d,r,a,g,t,n,l]),b=G.useMemo(()=>qC(E,a),[E,a]),I=WC(E);return G.createElement(G.Fragment,null,T.map(D=>G.createElement("link",{key:D,rel:"prefetch",as:"fetch",href:D,...e})),b.map(D=>G.createElement("link",{key:D,rel:"modulepreload",href:D,...e})),I.map(({key:D,link:L})=>G.createElement("link",{key:D,...L})))}function JC(...n){return t=>{n.forEach(e=>{typeof e=="function"?e(t):e!=null&&(e.current=t)})}}var tw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{tw&&(window.__reactRouterVersion="7.3.0")}catch{}function tD({basename:n,children:t,window:e}){let r=G.useRef();r.current==null&&(r.current=q1({window:e,v5Compat:!0}));let a=r.current,[l,c]=G.useState({action:a.action,location:a.location}),d=G.useCallback(p=>{G.startTransition(()=>c(p))},[c]);return G.useLayoutEffect(()=>a.listen(d),[a,d]),G.createElement(NC,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:a})}var ew=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nw=G.forwardRef(function({onClick:t,discover:e="render",prefetch:r="none",relative:a,reloadDocument:l,replace:c,state:d,target:p,to:g,preventScrollReset:E,viewTransition:T,...b},I){let{basename:D}=G.useContext(zi),L=typeof g=="string"&&ew.test(g),O,M=!1;if(typeof g=="string"&&L&&(O=g,tw))try{let S=new URL(window.location.href),N=g.startsWith("//")?new URL(S.protocol+g):new URL(g),V=Ir(N.pathname,D);N.origin===S.origin&&V!=null?g=V+N.search+N.hash:M=!0}catch{Li(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let q=mC(g,{relative:a}),[z,Y,it]=YC(r,b),ot=rD(g,{replace:c,state:d,target:p,preventScrollReset:E,relative:a,viewTransition:T});function k(S){t&&t(S),S.defaultPrevented||ot(S)}let R=G.createElement("a",{...b,...it,href:O||q,onClick:M||l?t:k,ref:JC(I,Y),target:p,"data-discover":!L&&e==="render"?"true":void 0});return z&&!L?G.createElement(G.Fragment,null,R,G.createElement(XC,{page:q})):R});nw.displayName="Link";var eD=G.forwardRef(function({"aria-current":t="page",caseSensitive:e=!1,className:r="",end:a=!1,style:l,to:c,viewTransition:d,children:p,...g},E){let T=ic(c,{relative:g.relative}),b=xa(),I=G.useContext(Yf),{navigator:D,basename:L}=G.useContext(zi),O=I!=null&&uD(T)&&d===!0,M=D.encodeLocation?D.encodeLocation(T).pathname:T.pathname,q=b.pathname,z=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;e||(q=q.toLowerCase(),z=z?z.toLowerCase():null,M=M.toLowerCase()),z&&L&&(z=Ir(z,L)||z);const Y=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let it=q===M||!a&&q.startsWith(M)&&q.charAt(Y)==="/",ot=z!=null&&(z===M||!a&&z.startsWith(M)&&z.charAt(M.length)==="/"),k={isActive:it,isPending:ot,isTransitioning:O},R=it?t:void 0,S;typeof r=="function"?S=r(k):S=[r,it?"active":null,ot?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let N=typeof l=="function"?l(k):l;return G.createElement(nw,{...g,"aria-current":R,className:S,ref:E,style:N,to:c,viewTransition:d},typeof p=="function"?p(k):p)});eD.displayName="NavLink";var nD=G.forwardRef(({discover:n="render",fetcherKey:t,navigate:e,reloadDocument:r,replace:a,state:l,method:c=tf,action:d,onSubmit:p,relative:g,preventScrollReset:E,viewTransition:T,...b},I)=>{let D=oD(),L=lD(d,{relative:g}),O=c.toLowerCase()==="get"?"get":"post",M=typeof d=="string"&&ew.test(d),q=z=>{if(p&&p(z),z.defaultPrevented)return;z.preventDefault();let Y=z.nativeEvent.submitter,it=(Y==null?void 0:Y.getAttribute("formmethod"))||c;D(Y||z.currentTarget,{fetcherKey:t,method:it,navigate:e,replace:a,state:l,relative:g,preventScrollReset:E,viewTransition:T})};return G.createElement("form",{ref:I,method:O,action:L,onSubmit:r?p:q,...b,"data-discover":!M&&n==="render"?"true":void 0})});nD.displayName="Form";function iD(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function iw(n){let t=G.useContext(nl);return ue(t,iD(n)),t}function rD(n,{target:t,replace:e,state:r,preventScrollReset:a,relative:l,viewTransition:c}={}){let d=nc(),p=xa(),g=ic(n,{relative:l});return G.useCallback(E=>{if(MC(E,t)){E.preventDefault();let T=e!==void 0?e:zu(p)===zu(g);d(n,{replace:T,state:r,preventScrollReset:a,relative:l,viewTransition:c})}},[p,d,g,e,r,t,n,a,l,c])}var sD=0,aD=()=>`__${String(++sD)}__`;function oD(){let{router:n}=iw("useSubmit"),{basename:t}=G.useContext(zi),e=RC();return G.useCallback(async(r,a={})=>{let{action:l,method:c,encType:d,formData:p,body:g}=BC(r,t);if(a.navigate===!1){let E=a.fetcherKey||aD();await n.fetch(E,e,a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:g,formMethod:a.method||c,formEncType:a.encType||d,flushSync:a.flushSync})}else await n.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:g,formMethod:a.method||c,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:e,flushSync:a.flushSync,viewTransition:a.viewTransition})},[n,t,e])}function lD(n,{relative:t}={}){let{basename:e}=G.useContext(zi),r=G.useContext(xr);ue(r,"useFormAction must be used inside a RouteContext");let[a]=r.matches.slice(-1),l={...ic(n||".",{relative:t})},c=xa();if(n==null){l.search=c.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(E=>E==="")){d.delete("index"),p.filter(T=>T).forEach(T=>d.append("index",T));let E=d.toString();l.search=E?`?${E}`:""}}return(!n||n===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),e!=="/"&&(l.pathname=l.pathname==="/"?e:Er([e,l.pathname])),zu(l)}function uD(n,t={}){let e=G.useContext(KA);ue(e!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=iw("useViewTransitionState"),a=ic(n,{relative:t.relative});if(!e.isTransitioning)return!1;let l=Ir(e.currentLocation.pathname,r)||e.currentLocation.pathname,c=Ir(e.nextLocation.pathname,r)||e.nextLocation.pathname;return _f(a.pathname,c)!=null||_f(a.pathname,l)!=null}new TextEncoder;const cD="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABWCAYAAABVVmH3AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAdTSURBVHgB7Z3dTtRaFMcXdaKi0YhRExMT6o0X3ihXiMak8wTqExzmCTznCZQ30CcQn0B9AiYhQOACOCEhgQRSEi5IIHwGGAgfrn/Ze1LKdPq1d3eZmV/SdGiGYfpnde2111rd7aKCMDExYZ+dnTn80rYsqxd7bOfn5w+6uroe+N/Lx7b52Da/dLE/PT39n/ezfNx99+7dLBWALjIEhGRBPt64ceMDC/I6KF5ahOiz/Nl/+LN/DwwMuGSAXIWdmZl5UKvVPvPLQbqwyDxwWeTveYuci7Cjo6NOqVT6wi8dMkuVLfr727dvf5NmtApbIEGDuOzPh9gfD5MmtAhbYEGDuCcnJ5X3799XSTFKhYUPPTw8/MGDx0e6XgzzNqTSBysTdnx8HGL+UDW6G0Cpe8gsLKz06OjoCw8K/1ILwOfxrbu7e6ivr2+bMpBJWMSivBuh/EKnvHB5K2dxDRalZGxs7DX/d2eo9UQFNm8jOEdKSSphJycn/2FfOnKN/WkcbJ5UjOBcKQWJXQH+EDv5YWojOHcx2N/f/zPJ7yQSth1FlSQVN7aw8DdtcPmHIrJo5bjZs1jCtvDonwiIywN2X5xoIXLwQpxKHVE9kBvm3YjQpCmRwiL4p46ofmyetn+JelNTV8B+dZCd9g/qcAW23k/N0o+hwnb8anPgb2/duvU8bOrbzBV0XEAT4G/ZTYZezQ0tlq3VoQtr7RAB53PLjfK5pZD3G/WrnCSnR48e0d27d+n+/fvEU0vvGOAToePjYwyqtLm5Sbu7u95rg98VV3Y1ePyKxZocsCBeb28v9fT01IWMw/r6Oq2urhoTuJHVXvn2LGpkKKEDWOaLFy8SCSp5/Pix9/srKyueFedNI6u9NHiJKoBNOfPw4UN6+fJlKlElPEJ7/xgIbAAHdT7/gUvCcgjxmXIGguDyV0Vaq8+KsNo6dWFF3OpQzjx79swTVxXSTxvA8U9168JyXJZ7ZRWCwj+qJungp4qDg4N63a8urAk3oMsfQlSImzc88NerDZ6wwg3YlDOIU3VhaBCzp6enPT/kCWvCDYA7d+6QLlT67STUarVP2HvCshv4QC0GZmsmkFpKi01d5s2CKavSCQvraWlNTU29NlXH0jkF5foUmQBZL/hZi+e5NhmiFYUFXGEoW6bcANjf3ydd7OzskEFsi538KzLE1tYW6ULnZ0eBm1MsUXk0AlwB8qmqwZVgMkdLsFgyXH5BHlU1a2trZBjbqMUCWKxKq4WlIvFtEkRZVhFahpaWlrySS1bwGfPz82QaGGvq/liVwMqWl5cpK/gMw761TiGEBSipLC4uphJGWqqJskwY+SctmwBhMKLbth077Qf/DFdSFEuVlMS9p4VpzYRACwsLXtpPFgmDOQVYKOJUDFI6wrWsoEumJO6iLlzPqz9aQOL65s2b3mtMVYtmnUFgrHAFLhW8lQgWqiJqyBEXcewKdVAKa7oDYV3qoBTWdFa6gkKBwQp+FfuwSoD0s9gXzediIYoSZ2KqZBAUFO/du1dvgEtbVeDSsycw0oV7e3taU5JRwAt4TXHj4+NbeYZcKCI+efLE6yjUVf+XmbO8m+UQZb1586anJH7ALTYOaQaCIvjPozQtm0Gw5dmNCP+KfUn88IfFdUgjaCXCZgIpMMTVkab0Ay2xl+VvbWuk4FJHJ6EpUf3gO2TtaoxCaukJK24Ic0kDBlsrGyL7cDXhypvr/NmtRDfhxgEWUiRRJfhOOq4grJAkX9eFrdVq30ghGDyKcPmHobp9FPhdal3YcrmMZEyVFFFkUSVPnz4lhVT999gGE91DpAidnYSqUNnq6XcD4JKwrHiVFFmtTPO1CW7w9s9GpRklVjs3N1fovCmmwEioK+KKZmF3JuKuRIcUIIPzokQHmOai70BhfQwh1vPgwbBIGf8BhxSA6SQ2jMAQF34N/jevFk6ZM0BSZmNjQ3nCHEv4NToeevc3J2Z+6VxKD7Mf5A4gsH8Dcu+/1TMIBJIdhdhzuFgv22CDkLg1VHPlYZittaGwoXM7/nIVPkFHV9YLJ1zEQmACXGoyHoX2FYi4tkIdwmi6yGTThg2EEMH4rMNFzMqiDjd7T5w1Yb5SAcs3BnG7u7u/Rr0pUljhEsqolVMHl7dynJU6Y/VuwZewsG0tLs797OzsU9wVOmM3xWGFNI4Q/qM2Beee5BkLiReN5FnZIBle2sQAlajBKkjiNk7xByrt4BbEOSYWFaRe8RiLSFqW9YtadAkpiIpxJe0jVjpLSTfGJVNLSQP8YZ6j97XSJALncvv27b6BjEv3Z15VXiIGtWu7uhwufU76VPr7+5W0Aih9wARcA3/BrxyapFrX2hT8nX/zbKqSdYl+P0qFlYgl/BCS2VRsqnSRTKmSYrQIKymwe6iSJkElWoWVYKE0sZiPQ2apkmZBJbkIKxE+WIpsUz64vP3kkf6bSh8aRa7C+vGJrOXRfqKDsj0e7dcM8TgAW4j8Sggd+TBKuniqEW5QcdGdbkrIIH8BDAGBkF/hM9YAAAAASUVORK5CYII=",hD="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASdSURBVHgB3ZvBa9RAFMZfrYqwFVuQ9qAiFVER9eBB9GBBBLGX3v0jPXuqFL1URBFaxHpQtBWxB1u0C7IFcX5Nxk7fziSZbHaTzQePbSazs/PlvXnvzct0QvyYNTJvZM5IR4aDrpE1I58lHieMLEgyT40dI7tGNo180zcn1DXk7gYGGgZ6Rp5KPFDG3QL9eKjL6ecBjjk3Z4wsyujIgn0ph5MF+6HAx0ambcOkc+ORJKYyKkD2nSTmF4vfRk4bOVOgLxwvGvnKb1qTXpL+tbotyRrbkfKaqAPW/1xS7fBZhv15I5fVzXUjq5LY/l8ZLzBn66zmnHYUug3h65KsX4tPRt7K+AONou0ptxGnNa06lgkTTcW6up6D8Ixq3Jb2QDvEzjFpN3q64bgMDkLZTCr8jUfHszfSUgYhDLlrRq6KP35DfEuS0NaVhqAsYbR5X7LzbB4C8RBP+ULKJRiVo8wahuxDKb6p6KT9p6UBiCXM5NGsNmHMl/i9ln5qEyb3XZDRpq5exJr0TenX7IYkRHX6eSPtb8H3rqV9a0Oshs+rawI7WZkv1+behmq7IjVrOYYwzsedrN3AZwHS7sPAtGekRsQQ1hP9kf+Vg8C/mTPOSBFDWJti0djazRlnpIghrNdp0bA0lTPOSBFDeEdd48CKaGs2Z5yRIoYwmZJ2QLdyvkNoci2BNV1rjg1hl0TWumSyH1QbYeampy+av+25tyU1g8TjjSQTQ2N5YeajJLUiV2tokZwZze2l9y6I38mtS82YkHjYXDrG22JF1IfrWL9P3IsymwcmfaS4nQNbDK/VWVlMSjn8kWQ9ouWpwDho9b0cVj/rwhE/UsakfSD06IrHsOrZ7nsv0JPD3Rp+RD/cIyZdRYlH0h8adriBKO+TdMLTce5Dlqpr0PlWRXjY0FvNEDpyGPtXfR2aTpglcs/IOYnDfPrZR7rJhG1pyJezs14xXUyY/IHykS5OzPsGrcppVQ00imZ9yQta8/mLrAf0H2XD0jDBGrwj/XPD669IuPppy8JsaoLvj6vQ8Gz6I+6Lq710YjZUFEHWeqVUVPQFX6amByFc9HhE37GDwFihSUJ0Q+Ln5h2vrEnbAYuUazAv3k7wcH3aRqMPjJxS7Tyg51JuhxU0byaBKbED6qWd8rKjQs4hgG76Gzvp98mWQidxXsrgKSm/seQ2EJYwS1t+PTgWkDOAj6x7PAKged+xA753VbIRs17z0PfAIOzWmrPWY4gse1ydym074iveh1BmvUahaOIRQ9YFyQGkCTWXMvrRB7JD30IWIVyWrAVm9UoSQqzZ6XQsfAahq4jfqAx5hAcl68J6zlrrWlkVjyrJNgYhwq0kC3yEW0sW+Ai3liwIadhFa8iCvDJtq8iCLMKtIwtChFtJFkBYJ9j2kEoboPcGuxDWRxdqPZJQMXT+/pMCwL66gZcObdbHCWxY9FZ0HcKYtD5Iba970qBzkgVAMeOsJHt8rV14vLY1LbS6KA04KTckYMXPjHQnnYbvkvz3RxNLt4PAvpv+xYVLjlegXySnrjtmwA+tSEoWhMq0kKaaaA9+jxNYq0QeW205gn8V7PTp/QnotgAAAABJRU5ErkJggg==",fD="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAcDSURBVHgB7VvNb9xEFH8z9kYVpMGoCQKltA6UzQohdXvrjc2ttKFduHFquPXW9AScsrnBqclf0OQfoAlqSuFS9wS3urd8VIqDElEgFW4TKWmy9vCe90Njx95sdu0la/hJ++HZsdfz/N6bN7/3hkHC0PWivp/ZK3CunBcgdCGEDgw0BkyX++FvFr7ZjDH6fOI4jikywny2+MCCBMEgAZw+N1pgCrvmglsMDvSowPMtV7gGc9ns+tN7BsSM2ASg6QWtt6f3Jl5xnA4hAXjCcJ1JR3GNuDSjbQF0YuAhsNFkZhzmTLcriLYE8E72k6LClDvQeOA2vkx8PRHMNYGDmXF7bGtxzpI76bmiXoayzlzQBIMCNp3HVwEa3nxFIzZW7s9Ai2hLAO8Of7pKji3kJxq0gVef3t7dNm3LsKEFkHad7OktuFwUmWDXo/qRIPbZ/kgr2tCWAE4Pj/4N/qdvVwc91eqgo/B27pKuAC+AYBMRjpXMYnJjaWEKjgAF2sDJgXN/4EeekRwZfLf9avuLP5/+/GDXtnYhZmxvPrW3NlfMrecr030DWUaah/8rC/8EHl/qO5WFl8+XHzV73USmwU6gohFKKcw0MNaY2Vhe+LKZ63StAGoYHL4yjk9+AgKOGIVgohAuHHZ+1wuA4GmDUB4eiC6b0IS2fMBxAfmH1wfen0cBFGW/gGF1/mT/Bxr6jZ+izk2FAAiRQgB2EYXwAoXwa9h5qTABGRHmYJdZ+UJYnMAhZfAGqYjPoBKM1aCpQr0T1v+ACVB4q/Xnfnmjf/iGdipnv3i+9AS6DFt/rTxDtX9FcYHUrIeZgs8ESH0yIvNQCm/t9aV7b0KXAiPVu/hRlJpsDNaG5CjVZwKqq16XY3v8Hms467u57OgEhdL0wrn8NiQAtPtbEDAFXLmOy33qAqCnj9PGmPwjHs9CAsBF1G3UvRJUghdih8ZRICWIGZ4/EDDta2RwkxZZtcO6AGihEXj61vrivRIkALz22IFGvDFIAOqeSoujSC2oC4ALZcJ3pismIQWwrDk7TAtqXz0BEIcXXNcT7QRJIXhDFSRiboQwLTidGy3QF08AQhW+FRXF0EmysevLnmlNV2+KOIRJnG3GISF4WkAEjQynMjuo9MaFZ//135DNnYeEUR1wYoM+ACRqcIj1KZFxdo3+n5P3D6r/zt6OASmDuqsSL1k3Axrz0NDnZ3nGVfOBvkbcdNZxQNUMTLltT90d4aj4fgG40HWh7xHgGxsDnlfx/bzciFy7AR3AmezV6y5zpzAIspHWKv22/ENis0ANRMszIQW/XOgcjUGXOylc6Yj6CyZK+KGRLZIgoBNw/CaA2n+W4434uLTMq55V6AACjrcjGSWMbXwPlwPXeJBHW139fg1SimBsQw8hdYTIUfG/AOA/Du5VZkig6AhSCop65WNKqnKcg32eEaOjrqXADoNaVnX5GNc8NkcxWIF+eUgpGPdPt0iIrpEPWPM38tQKoFp4ITeY3KvakMH9oXHK4A/7wTG5AweYn7xMGqYFul6kMRXkNsGFySk6CswEWu+J3tSZgdNTLsjHNGYauxcH4HTgZ4BEMgztvwmXi2u+BlGhyCqBEIO5QP9CmszAy3mIQM6DV3IengCQ/zfgkAxKN8MrrpJQzXkY9J1LrQ0zKN2MRjmPugAOy6B0KygHGeAebDnnURdAVAYlGD93E8LynYhZmRfwZ4dDtEAVaiKZW/BT1BYkAAWUiWC+EzPGU/4+8h3Zi7shhQW5RjU2rUIusuSMf/Nyc9mEGHFm+CpN5V/7Gl1x6/flHw25KbRGCHP2D8EfNdnCdUc2Vu7HepNJgVQfNfcxSFwjPf2NpYWhYN9QQgTVhGrrfKbAuXK3G/xBrcoFAjXMSPePhPUPFUA1PPalx8mW6MLHWQghJT4eaCxRyd7IOkGy+b7+LJEjF6VmDR1L8bWB9+apLg+OEaIGT5lnVP1vo847tE5wMHdlJliQ3E59fhIY/PBynjvK3QNPnonZjcWFsUbnNlUoicHEY+wZXCG2VJ8fN8jbI7VVgqSLpcM0ofpHMw53JjutDVVPTzFKMfhbM0++hqZrhbc2V+ZoowIESAUqSCa/0Hcqqx1lo0KroPVJ/1sffYVprRkI5y+nUStvQJM4cq1wVH1+5WLxb2uroYndaS2ZZEvF0lH1+TLINFzHnd9xdox2Nk31qshOKR5BU4DoJKpBsUvHN00N5i6PNdjEJMPAPma5XH6kMMVGft7CxZcld6husaUB5qvbbEm96dVwS167jrjtcvmqMyK1JAfZKf4gtt1pse0XaGJbWxyIfVteMpunc17hJZoHfNyuMGgR45G2yFvWaKw4kfiOES9EddW8V4xF9UgCdKpKCds+7+UpK6m6NUrYZKDHCG6xjRv/AF0bOBSDHmXQAAAAAElFTkSuQmCC",dD="/assets/logo_icon-Bug9MN-U.png",pD="/assets/logo_big-Cp0kVrXR.png",mD="/assets/logo-9xkPj2hX.png",gD="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJjSURBVHgB1ZiBcdswDEUhT6BOUG7QbBBt0G4QbVBvYI+QDdxO0Gwge4K2E1Ab2BsgQMRcFAikSEnkJe8OpxNNgl8gRMGsYAGI2NDljuzeXWtnzI2sd3Yhe6qqqodSkLia7EB2xXT+krWQk5UCJTaLYHJ655xvTUdmYAvI0c/ARBzdE0fHPUw9Gscr0JDtnSAflsfCGnBYap/A41hYhC9D9ivgb5nYQCQfUwR6BHebiHXONEctbIRbEYlNCgLqL866PIoX+yd28EEZvIdMuFSSNHODtCV/hMzgNGe7uQF7nOaMgfxCm6So4jQ3WygE52ZUVJWn4rd88Ta0QGjU/DuyRrRdqNq5QSForjMMldYrLHKy07DQb6LtCcpzEfeqUCPa/kF55JwyeKrQHsrTi3sjO7DQd4lbMj9HzM65g08CC333NLQ1fIXyzG6HLLQXbV+gPEbc/5cddkpjA+W5F/e97MBC5dbwHcrTiPvpFumpnEp+Qlsxt9X67dzhwFm0Z6tDFR7E/dnbUynzroXKvFZZTRMaUOP0gKGDjLiUs2LOU8xA7ekOkAmc1qHhaIrBXQmxOBxeSI4pDrTl2EysS7FO8W+XOOMjGu1AzOKKFwyHSt6in4clTn1imRPO/a2dCuwwDq/YKjCBoQu/+cbTpYdhz+NP8PhLUrsxXPz+AH/BwWO0w42W9vbfkAKGD7jWcHT+W0yM7JxgdmhxPR2KI6LNxTqnnG+pEeZc5+ObBsKBCIqtYCFuYjYutM3op5uzl9x1f4dj/LV00b5M6TmbG8yRBrnwiL3CRwQja9QPAb7tNC8n3s9GsmlLVaiiEgAAAABJRU5ErkJggg==",_D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABWCAYAAABVVmH3AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAduSURBVHgB7Z0/bBtVHMe/73wJKajFI1vciU60naALShYkBmgyMCC1ohmKVImqZUMopU6JEBIDiYrE0KFBGRgYmtKNpRFLCwuBBTYuGxsuiNRpknu87ztfcrbPvj/23T3/+Sx2nXNP99Hvfu/3/tyzgCFMVWXl4AAzQqACgWkB9SpRkUBZvS8Hj1Wf1dRnNXWcAxc1KfCret2SLpy9z8QWDECgIBoi5yzgvBJzplVeWrR0gS3Xxf3SHjbqnwsHBZCr2PJ1Wd45gWvqpJfAiMwHx5VYzVtyLmLtRTlTEripzjaDIhHYlAdYfbYsNpAxmYo1Rmg7jOKlvU/FGjIiE7EGC23FOXCxsL8sNtFn+ipW59DjuKsajzkMEFJizdrDUj9zcN/ETi7KOVhKap9a9wLoa3roWSyj9OmL6raXuI4hQMldeeFfLNVWRA090JPYqY9kRU7iIfIrnfLCEc8w20tqsJCSiY/lGXcSv2D4pBIdMLxGpCSV2KlP5HvCxsMBzqdxqFjqGnmtSEHiVMATqW7jGkYI9hTrt8Q3Cb8Tn1GU6pNUbmyxzDcjcPt3o+buYzbu6FkssUPc+ielpqqFs3GqhcjGi3XqWOoh2gWdRB0YKVYX/2OpQSr/HddOutI1FUzckJcsgbsY04aarZjvNvzYUew4r0ZSO/YPTnbq+nZMBe7EOAVEUH56vPPdHBqxU2o8VVo6WsdEoMZzZ8PGc0MjVkkd59WYlErhDVmbWDZYGKeA+EjMcMak9eM2sZaILiXGNBMWtU1i9SzAOFqTExK1TWJFCdcwhLx1Cni9gkxpjdpDsaxbaR5DQnkK+OA14OcrwLaqNH90gIuph61joNwFu7r24ecTgzWz2gkt9Jwnlbyh6pvf/gIWZ5Xgv5EpOyf0vF+V7w/Fqop2oNNAUCjfM0rf+fZIKqP15S+RKapTwNmGauP9Yff1TwwgrUIJpTJS+UqpizPev5kOskZMolJfFNs6YgcxDYQJJWFSKTQPqUTuYl69rHipwMJ5rn8cBDoJJUGpX7wJXG3k2eU8O+d06YuVUq9PNZrpsifqwtl2oSQo9c78UQXw4I/8olWjXPJFvKDmsvZtvT7ASCiUt/PFs52PYQNFqbV6s1TCBmu7pzUtyWGetfcsVEyMVhb0zJFRhX03qetb+UslB7uYtVVOyLJsTkxcoeR7dZu/f897z47AKy81/z3X3BqAz1HYQuI0DAjZJELJukpelze8fPvDQrvUoqJVIzDNiC0XWREkFUqipJKiopXwiR+bj/ygANIIJRS2vOk1at+9Gy610GglyqndeI4qN9IKJUGpjNTpcufjCqZs57VkiK01hU6nPFtcqYVHq0fZRoYwB15QQq+eSy+UxJXqH2sCmYlldIZ1O5OSRKoh0apJvaI7CrbcD35HT1y+F18qMSVaicVnT5EBjByWRJSTJor4PUZgEqmmRKuiZomMxPpQDvvrcaOJXVN2Ufk9llI/XYmWSqHrsVat5kbN0o+m5wBvaQpe7zLc40vlaBSlMlLj5Gj+nwZFK3sIjqWGDLeRE93Sgy+VgypJpBoYrewgPGHj5SBnWtMD5bz6tSf17VPxpZLbjwyLVug9E7ZsFbGOKGgQhunBjzbK4Zjrnbn43+d3vnoM83CV2FIJm9JFYfjRxkhNIpWYVF4FkbbKsfWqcGTGlUEcmGOTYGRu9ajtVcWW7iBwDxUUTNKZVFOjFQ2XXs/LxX0YQFxZBkfroUsvYkvYgAEwYtdjTGsaG604cqnFMs+igLIrDFYK3fKt0dGqHDZcHg3CqIor9nOiWaJLqEed/25ytKoCdtV/eyi2bmEFhnD7cXjUGh6tTSn1aNiwKril3SYM4Ek9PGqNjlblzk8DpHlF9wGWYAiM2mBX1fRo5UZpwX83ia3zeSWDojYYoZfvwWSc1sc/22YQTIpaRqjfcch1YVtChGx3Fjr88txN+dCU5xH8aXKDxTq7t8TJ1g9DJxMZtdIyQ6zJkUq4hV/Y56GTicy1UpjRGzMZ5Wit076IHWdpnwksmDDqZTCOmjDs2B51nv5mXdshzMd4DVawbm2l67qCRgmxijHNuFitR2wuGblgY9fSzy05GOPjHLO9Z7m6Eb0SRqUEYWF2nG81Dl3UqtE7dcZaYqSnb0ZcLq/dtTDfLa8Gib12S8/jSHyIEYXXTgdxj0++aeQNeUmO2JZRqgJYqCfcCTnxakOegCcahbSgf6wihVSSeqnGRFWesVxwzKmCIYRS2a4kuf2D9LaVdFVWpDukW0krqXEbqjB6WnjME6s6lw9jDk8nQhX/x9Q19SKV9G3VVqNRu4kBjV7e+rbqwu/06edS+rZUXjdqXq1rxGxvEjiS97yFkzt9/A2aTNYZNrbwY0lWgclIbOrBFNN/EqUVY9NDhkJ9clkZy43S9J5eRU/35CDUJ9clx7o8O8BcY8ekCvLB4SqfKQsrcQZP+kVBa7kDki2cb2ydUkYfaPSWWNTf58qUXsumtBQmthX25MS+imJuTCFwWouO8WOUkmPFEttc8s/V6UWJbOV/J4waAuvSu7cAAAAASUVORK5CYII=",yD="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB8ElEQVR4nO3dzWoUQRRA4ZFAtiZZJVka9QV8AX/ACApZ5R1EyS4afAPXYdC3EMW1P4+j7nUVOVJM1hm7u5p7uTkf9K4aqjj0DF0zdC8WkiRJkiRJkroDbgCPgFfA2ZrjFHjYzjHFDIAd4DvDfQO2jdI/yGfG+2iQvjHuMt1to/QLctQhyJFB+gU57hDk2CAGqQmvkFwwSC4YJBcMkgsGyQWD5AIcdrgPeRy9jjKALeDPhBi/gZvR6yiF1Zb6WKfR8y8JeAH8GBCijX0ePe/SgA3gFnBvzdHGbETPV5IkSZIkSdcXsA88u/zR6qqjjdmPnm9ZwCbwDvg7YLf3Ali2c6PnXw7wnvGW0fOv+DF1MSFIO3cveh1lsPo+mOpp9DrKwH+d5IJBcsEguWCQXDBILhgkFwySCwbJBW8MS26d7EavoxRWu7ZjnUfPv+r2+3LgldLGnrv9Pm+YvQE/UPkxJUmSJEmSpOgHBxz8x4MD2hgfHDBzjBPg14Dd3p/Ay1kndV0BbxjvdfT8SwG2Jz6eqZ27Fb2OMoAnTHcYvY4y8F8nuWCQXDBILhgkFwySCwbJBYPkgkFywVce5QLc6XCnfhC9jlKATxNifIief9UNxq8jYnzxxZLzvnr1QdtOB96uOdqY+756VZIkSZIkSVrM4h8rzbcQzwZwVgAAAABJRU5ErkJggg==",vD="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAABCCAYAAAACPxW5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxEAAAsRAX9kX5EAAAH7SURBVGhD7dq/SsNQFMfxJnYQHBxKUereIV2d3ARxc+sTCILgQ/QpdBKfIEgnH8HZoQ0FZ0cn8c9QuN5fORERmya5f865cL9LuJcM+ZBwh0M6sVgsFoutb4uuIppMJulgMOjNZrMP2jIupauEkvl8fr1cLh/H4/EB7RmX0JW7RKNukiS5pPWzUuo4z/MXWrdOAvAvrswKkhu4DldmjOQEbsKVGSFZTlGclv1+/1bjLmirqp6+7yzLsvuiKN5or3Ycp+jqtNQPfU7rjek3+K5P1y9aNsr3J1r3s/xJ45407mQ6nb7SVqN8Ar3jkC8gCw75ALLhkGsgKw65BLLjkCugCBxyARSDQ7aBonDIJlAcDtkCisQhG0CxOGQKFI1DJkDxONQWGAQOtQEGg0NNgUHhUBNgcDgkafDrpEZDp6IoHrIs29Nv8ZC2KtP37adpejocDvPFYvFJ215rPFULDdlqbBgSsvVcNBSk0eA3BKQREElHGgORZKQVIJKKtAZEEpFWgUga0joQSUI6ASIpSGdAJAHpFIi4kc6BiBPpBYi4kN6AiAPpFYh8IzlGFmo0Gl0ppe5ovTGN3Ol2u9u0bJTJ4Ne0ukOs8H4EKqvxuRr/ysUKRBVIKz/jsQPRP0grOCQCiH4hd23hkKTB7+p01aflkS1cLBaLxWKVdTrf5kX+OXj25HwAAAAASUVORK5CYII=",ED="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAArElEQVR4nO2STQrCMBBG3wnsmUy68AAiLmq9j1RP1kUn7jyCrVeoMgVFJJBJwV0ffBCyeMwfLPyVsqXwHbULXDT61r9ZMtexd8LDB57fccJQBnbZMi+Mv7JPhNEsLVuKWGWR9Jsbq6TQC0eDbMr6yiHdrnC2Cr3QWCpsrEIXOKWFHXWGsLIuZTDI7qalKHoSqbNxwpYcJmmgj51LtuyNtqRz0s1PCVTmNheYywsBbeNMCHkbYwAAAABJRU5ErkJggg==",On={avatar_icon:cD,gallery_icon:hD,help_icon:fD,logo_big:pD,logo_icon:dD,logo:mD,search_icon:gD,send_button:_D,menu_icon:yD,arrow_icon:vD,green_dot:ED},TD=()=>{};var kT={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let a=n.charCodeAt(r);a<128?t[e++]=a:a<2048?(t[e++]=a>>6|192,t[e++]=a&63|128):(a&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=a>>18|240,t[e++]=a>>12&63|128,t[e++]=a>>6&63|128,t[e++]=a&63|128):(t[e++]=a>>12|224,t[e++]=a>>6&63|128,t[e++]=a&63|128)}return t},AD=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const a=n[e++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[e++];t[r++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[e++],c=n[e++],d=n[e++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;t[r++]=String.fromCharCode(55296+(p>>10)),t[r++]=String.fromCharCode(56320+(p&1023))}else{const l=n[e++],c=n[e++];t[r++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return t.join("")},sw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<n.length;a+=3){const l=n[a],c=a+1<n.length,d=c?n[a+1]:0,p=a+2<n.length,g=p?n[a+2]:0,E=l>>2,T=(l&3)<<4|d>>4;let b=(d&15)<<2|g>>6,I=g&63;p||(I=64,c||(b=64)),r.push(e[E],e[T],e[b],e[I])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(rw(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):AD(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<n.length;){const l=e[n.charAt(a++)],d=a<n.length?e[n.charAt(a)]:0;++a;const g=a<n.length?e[n.charAt(a)]:64;++a;const T=a<n.length?e[n.charAt(a)]:64;if(++a,l==null||d==null||g==null||T==null)throw new wD;const b=l<<2|d>>4;if(r.push(b),g!==64){const I=d<<4&240|g>>2;if(r.push(I),T!==64){const D=g<<6&192|T;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bD=function(n){const t=rw(n);return sw.encodeByteArray(t,!0)},yf=function(n){return bD(n).replace(/\./g,"")},aw=function(n){try{return sw.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RD=()=>SD().__FIREBASE_DEFAULTS__,ID=()=>{if(typeof process>"u"||typeof kT>"u")return;const n=kT.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},CD=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&aw(n[1]);return t&&JSON.parse(t)},Wf=()=>{try{return TD()||RD()||ID()||CD()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ow=n=>{var t,e;return(e=(t=Wf())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},lw=n=>{const t=ow(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},uw=()=>{var n;return(n=Wf())===null||n===void 0?void 0:n.config},cw=n=>{var t;return(t=Wf())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[yf(JSON.stringify(e)),yf(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ND(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(sn())}function OD(){var n;const t=(n=Wf())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function PD(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fw(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function kD(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VD(){const n=sn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function xD(){return!OD()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dw(){try{return typeof indexedDB=="object"}catch{return!1}}function pw(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},a.onupgradeneeded=()=>{e=!1},a.onerror=()=>{var l;t(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(e){t(e)}})}function MD(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD="FirebaseError";class xn extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=UD,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ma.prototype.create)}}class Ma{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},a=`${this.service}/${t}`,l=this.errors[t],c=l?LD(l,r):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new xn(a,d,r)}}function LD(n,t){return n.replace(BD,(e,r)=>{const a=t[r];return a!=null?String(a):`<${r}?>`})}const BD=/\{\$([^}]+)}/g;function zD(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Cr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const a of e){if(!r.includes(a))return!1;const l=n[a],c=t[a];if(VT(l)&&VT(c)){if(!Cr(l,c))return!1}else if(l!==c)return!1}for(const a of r)if(!e.includes(a))return!1;return!0}function VT(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(a=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(a))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Au(n){const t={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[a,l]=r.split("=");t[decodeURIComponent(a)]=decodeURIComponent(l)}}),t}function wu(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function jD(n,t){const e=new FD(n,t);return e.subscribe.bind(e)}class FD{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let a;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");qD(t,["next","error","complete"])?a=t:a={next:t,error:e,complete:r},a.next===void 0&&(a.next=Mm),a.error===void 0&&(a.error=Mm),a.complete===void 0&&(a.complete=Mm);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qD(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Mm(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HD=1e3,GD=2,$D=4*60*60*1e3,KD=.5;function xT(n,t=HD,e=GD){const r=t*Math.pow(e,n),a=Math.round(KD*r*(Math.random()-.5)*2);return Math.min($D,r+a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(n){return n&&n._delegate?n._delegate:n}class Vn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new DD;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:e});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),a=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(XD(t))try{this.getOrInitializeService({instanceIdentifier:Ea})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(e);try{const l=this.getOrInitializeService({instanceIdentifier:a});r.resolve(l)}catch{}}}}clearInstance(t=Ea){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ea){return this.instances.has(t)}getOptions(t=Ea){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);r===d&&c.resolve(a)}return a}onInit(t,e){var r;const a=this.normalizeInstanceIdentifier(e),l=(r=this.onInitCallbacks.get(a))!==null&&r!==void 0?r:new Set;l.add(t),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&t(c,a),()=>{l.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const a of r)try{a(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:YD(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ea){return this.component?this.component.multipleInstances?t:Ea:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function YD(n){return n===Ea?void 0:n}function XD(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new QD(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Dt||(Dt={}));const ZD={debug:Dt.DEBUG,verbose:Dt.VERBOSE,info:Dt.INFO,warn:Dt.WARN,error:Dt.ERROR,silent:Dt.SILENT},JD=Dt.INFO,tN={[Dt.DEBUG]:"log",[Dt.VERBOSE]:"log",[Dt.INFO]:"info",[Dt.WARN]:"warn",[Dt.ERROR]:"error"},eN=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),a=tN[t];if(a)console[a](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class sc{constructor(t){this.name=t,this._logLevel=JD,this._logHandler=eN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Dt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ZD[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Dt.DEBUG,...t),this._logHandler(this,Dt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Dt.VERBOSE,...t),this._logHandler(this,Dt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Dt.INFO,...t),this._logHandler(this,Dt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Dt.WARN,...t),this._logHandler(this,Dt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Dt.ERROR,...t),this._logHandler(this,Dt.ERROR,...t)}}const nN=(n,t)=>t.some(e=>n instanceof e);let MT,UT;function iN(){return MT||(MT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rN(){return UT||(UT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mw=new WeakMap,ig=new WeakMap,gw=new WeakMap,Um=new WeakMap,e_=new WeakMap;function sN(n){const t=new Promise((e,r)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{e(Cs(n.result)),a()},c=()=>{r(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",c)});return t.then(e=>{e instanceof IDBCursor&&mw.set(e,n)}).catch(()=>{}),e_.set(t,n),t}function aN(n){if(ig.has(n))return;const t=new Promise((e,r)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{e(),a()},c=()=>{r(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});ig.set(n,t)}let rg={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ig.get(n);if(t==="objectStoreNames")return n.objectStoreNames||gw.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Cs(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function oN(n){rg=n(rg)}function lN(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Lm(this),t,...e);return gw.set(r,t.sort?t.sort():[t]),Cs(r)}:rN().includes(n)?function(...t){return n.apply(Lm(this),t),Cs(mw.get(this))}:function(...t){return Cs(n.apply(Lm(this),t))}}function uN(n){return typeof n=="function"?lN(n):(n instanceof IDBTransaction&&aN(n),nN(n,iN())?new Proxy(n,rg):n)}function Cs(n){if(n instanceof IDBRequest)return sN(n);if(Um.has(n))return Um.get(n);const t=uN(n);return t!==n&&(Um.set(n,t),e_.set(t,n)),t}const Lm=n=>e_.get(n);function _w(n,t,{blocked:e,upgrade:r,blocking:a,terminated:l}={}){const c=indexedDB.open(n,t),d=Cs(c);return r&&c.addEventListener("upgradeneeded",p=>{r(Cs(c.result),p.oldVersion,p.newVersion,Cs(c.transaction),p)}),e&&c.addEventListener("blocked",p=>e(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const cN=["get","getKey","getAll","getAllKeys","count"],hN=["put","add","delete","clear"],Bm=new Map;function LT(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Bm.get(t))return Bm.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,a=hN.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(a||cN.includes(e)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return r&&(g=g.index(d.shift())),(await Promise.all([g[e](...d),a&&p.done]))[0]};return Bm.set(t,l),l}oN(n=>({...n,get:(t,e,r)=>LT(t,e)||n.get(t,e,r),has:(t,e)=>!!LT(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(dN(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function dN(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const sg="@firebase/app",BT="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new sc("@firebase/app"),pN="@firebase/app-compat",mN="@firebase/analytics-compat",gN="@firebase/analytics",_N="@firebase/app-check-compat",yN="@firebase/app-check",vN="@firebase/auth",EN="@firebase/auth-compat",TN="@firebase/database",AN="@firebase/data-connect",wN="@firebase/database-compat",bN="@firebase/functions",SN="@firebase/functions-compat",RN="@firebase/installations",IN="@firebase/installations-compat",CN="@firebase/messaging",DN="@firebase/messaging-compat",NN="@firebase/performance",ON="@firebase/performance-compat",PN="@firebase/remote-config",kN="@firebase/remote-config-compat",VN="@firebase/storage",xN="@firebase/storage-compat",MN="@firebase/firestore",UN="@firebase/vertexai",LN="@firebase/firestore-compat",BN="firebase",zN="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag="[DEFAULT]",jN={[sg]:"fire-core",[pN]:"fire-core-compat",[gN]:"fire-analytics",[mN]:"fire-analytics-compat",[yN]:"fire-app-check",[_N]:"fire-app-check-compat",[vN]:"fire-auth",[EN]:"fire-auth-compat",[TN]:"fire-rtdb",[AN]:"fire-data-connect",[wN]:"fire-rtdb-compat",[bN]:"fire-fn",[SN]:"fire-fn-compat",[RN]:"fire-iid",[IN]:"fire-iid-compat",[CN]:"fire-fcm",[DN]:"fire-fcm-compat",[NN]:"fire-perf",[ON]:"fire-perf-compat",[PN]:"fire-rc",[kN]:"fire-rc-compat",[VN]:"fire-gcs",[xN]:"fire-gcs-compat",[MN]:"fire-fst",[LN]:"fire-fst-compat",[UN]:"fire-vertex","fire-js":"fire-js",[BN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf=new Map,FN=new Map,og=new Map;function zT(n,t){try{n.container.addComponent(t)}catch(e){Dr.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function ni(n){const t=n.name;if(og.has(t))return Dr.debug(`There were multiple attempts to register component ${t}.`),!1;og.set(t,n);for(const e of vf.values())zT(e,n);for(const e of FN.values())zT(e,n);return!0}function Us(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function En(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ds=new Ma("app","Firebase",qN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ds.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=zN;function yw(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ag,automaticDataCollectionEnabled:!1},t),a=r.name;if(typeof a!="string"||!a)throw Ds.create("bad-app-name",{appName:String(a)});if(e||(e=uw()),!e)throw Ds.create("no-options");const l=vf.get(a);if(l){if(Cr(e,l.options)&&Cr(r,l.config))return l;throw Ds.create("duplicate-app",{appName:a})}const c=new WD(a);for(const p of og.values())c.addComponent(p);const d=new HN(e,r,c);return vf.set(a,d),d}function Zf(n=ag){const t=vf.get(n);if(!t&&n===ag&&uw())return yw();if(!t)throw Ds.create("no-app",{appName:n});return t}function nn(n,t,e){var r;let a=(r=jN[n])!==null&&r!==void 0?r:n;e&&(a+=`-${e}`);const l=a.match(/\s|\//),c=t.match(/\s|\//);if(l||c){const d=[`Unable to register library "${a}" with version "${t}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Dr.warn(d.join(" "));return}ni(new Vn(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN="firebase-heartbeat-database",$N=1,ju="firebase-heartbeat-store";let zm=null;function vw(){return zm||(zm=_w(GN,$N,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(ju)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ds.create("idb-open",{originalErrorMessage:n.message})})),zm}async function KN(n){try{const e=(await vw()).transaction(ju),r=await e.objectStore(ju).get(Ew(n));return await e.done,r}catch(t){if(t instanceof xn)Dr.warn(t.message);else{const e=Ds.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Dr.warn(e.message)}}}async function jT(n,t){try{const r=(await vw()).transaction(ju,"readwrite");await r.objectStore(ju).put(t,Ew(n)),await r.done}catch(e){if(e instanceof xn)Dr.warn(e.message);else{const r=Ds.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Dr.warn(r.message)}}}function Ew(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN=1024,YN=30;class XN{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ZN(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=FT();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>YN){const c=JN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Dr.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=FT(),{heartbeatsToSend:r,unsentEntries:a}=WN(this._heartbeatsCache.heartbeats),l=yf(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(e){return Dr.warn(e),""}}}function FT(){return new Date().toISOString().substring(0,10)}function WN(n,t=QN){const e=[];let r=n.slice();for(const a of n){const l=e.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),qT(e)>t){l.dates.pop();break}}else if(e.push({agent:a.agent,dates:[a.date]}),qT(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class ZN{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dw()?pw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await KN(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const a=await this.read();return jT(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const a=await this.read();return jT(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function qT(n){return yf(JSON.stringify({version:2,heartbeats:n})).length}function JN(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tO(n){ni(new Vn("platform-logger",t=>new fN(t),"PRIVATE")),ni(new Vn("heartbeat",t=>new XN(t),"PRIVATE")),nn(sg,BT,n),nn(sg,BT,"esm2017"),nn("fire-js","")}tO("");var eO="firebase",nO="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn(eO,nO,"app");const Tw="@firebase/installations",n_="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=1e4,ww=`w:${n_}`,bw="FIS_v2",iO="https://firebaseinstallations.googleapis.com/v1",rO=60*60*1e3,sO="installations",aO="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ra=new Ma(sO,aO,oO);function Sw(n){return n instanceof xn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw({projectId:n}){return`${iO}/projects/${n}/installations`}function Iw(n){return{token:n.token,requestStatus:2,expiresIn:uO(n.expiresIn),creationTime:Date.now()}}async function Cw(n,t){const r=(await t.json()).error;return Ra.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Dw({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function lO(n,{refreshToken:t}){const e=Dw(n);return e.append("Authorization",cO(t)),e}async function Nw(n){const t=await n();return t.status>=500&&t.status<600?n():t}function uO(n){return Number(n.replace("s","000"))}function cO(n){return`${bw} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hO({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=Rw(n),a=Dw(n),l=t.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&a.append("x-firebase-client",g)}const c={fid:e,authVersion:bw,appId:n.appId,sdkVersion:ww},d={method:"POST",headers:a,body:JSON.stringify(c)},p=await Nw(()=>fetch(r,d));if(p.ok){const g=await p.json();return{fid:g.fid||e,registrationStatus:2,refreshToken:g.refreshToken,authToken:Iw(g.authToken)}}else throw await Cw("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(n){return new Promise(t=>{setTimeout(t,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fO(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO=/^[cdef][\w-]{21}$/,lg="";function pO(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=mO(n);return dO.test(e)?e:lg}catch{return lg}}function mO(n){return fO(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw=new Map;function kw(n,t){const e=Jf(n);Vw(e,t),gO(e,t)}function Vw(n,t){const e=Pw.get(n);if(e)for(const r of e)r(t)}function gO(n,t){const e=_O();e&&e.postMessage({key:n,fid:t}),yO()}let Aa=null;function _O(){return!Aa&&"BroadcastChannel"in self&&(Aa=new BroadcastChannel("[Firebase] FID Change"),Aa.onmessage=n=>{Vw(n.data.key,n.data.fid)}),Aa}function yO(){Pw.size===0&&Aa&&(Aa.close(),Aa=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO="firebase-installations-database",EO=1,Ia="firebase-installations-store";let jm=null;function i_(){return jm||(jm=_w(vO,EO,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(Ia)}}})),jm}async function Ef(n,t){const e=Jf(n),a=(await i_()).transaction(Ia,"readwrite"),l=a.objectStore(Ia),c=await l.get(e);return await l.put(t,e),await a.done,(!c||c.fid!==t.fid)&&kw(n,t.fid),t}async function xw(n){const t=Jf(n),r=(await i_()).transaction(Ia,"readwrite");await r.objectStore(Ia).delete(t),await r.done}async function td(n,t){const e=Jf(n),a=(await i_()).transaction(Ia,"readwrite"),l=a.objectStore(Ia),c=await l.get(e),d=t(c);return d===void 0?await l.delete(e):await l.put(d,e),await a.done,d&&(!c||c.fid!==d.fid)&&kw(n,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r_(n){let t;const e=await td(n.appConfig,r=>{const a=TO(r),l=AO(n,a);return t=l.registrationPromise,l.installationEntry});return e.fid===lg?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function TO(n){const t=n||{fid:pO(),registrationStatus:0};return Mw(t)}function AO(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(Ra.create("app-offline"));return{installationEntry:t,registrationPromise:a}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=wO(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:bO(n)}:{installationEntry:t}}async function wO(n,t){try{const e=await hO(n,t);return Ef(n.appConfig,e)}catch(e){throw Sw(e)&&e.customData.serverCode===409?await xw(n.appConfig):await Ef(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function bO(n){let t=await HT(n.appConfig);for(;t.registrationStatus===1;)await Ow(100),t=await HT(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await r_(n);return r||e}return t}function HT(n){return td(n,t=>{if(!t)throw Ra.create("installation-not-found");return Mw(t)})}function Mw(n){return SO(n)?{fid:n.fid,registrationStatus:0}:n}function SO(n){return n.registrationStatus===1&&n.registrationTime+Aw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RO({appConfig:n,heartbeatServiceProvider:t},e){const r=IO(n,e),a=lO(n,e),l=t.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&a.append("x-firebase-client",g)}const c={installation:{sdkVersion:ww,appId:n.appId}},d={method:"POST",headers:a,body:JSON.stringify(c)},p=await Nw(()=>fetch(r,d));if(p.ok){const g=await p.json();return Iw(g)}else throw await Cw("Generate Auth Token",p)}function IO(n,{fid:t}){return`${Rw(n)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s_(n,t=!1){let e;const r=await td(n.appConfig,l=>{if(!Uw(l))throw Ra.create("not-registered");const c=l.authToken;if(!t&&NO(c))return l;if(c.requestStatus===1)return e=CO(n,t),l;{if(!navigator.onLine)throw Ra.create("app-offline");const d=PO(l);return e=DO(n,d),d}});return e?await e:r.authToken}async function CO(n,t){let e=await GT(n.appConfig);for(;e.authToken.requestStatus===1;)await Ow(100),e=await GT(n.appConfig);const r=e.authToken;return r.requestStatus===0?s_(n,t):r}function GT(n){return td(n,t=>{if(!Uw(t))throw Ra.create("not-registered");const e=t.authToken;return kO(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function DO(n,t){try{const e=await RO(n,t),r=Object.assign(Object.assign({},t),{authToken:e});return await Ef(n.appConfig,r),e}catch(e){if(Sw(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await xw(n.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ef(n.appConfig,r)}throw e}}function Uw(n){return n!==void 0&&n.registrationStatus===2}function NO(n){return n.requestStatus===2&&!OO(n)}function OO(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+rO}function PO(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function kO(n){return n.requestStatus===1&&n.requestTime+Aw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VO(n){const t=n,{installationEntry:e,registrationPromise:r}=await r_(t);return r?r.catch(console.error):s_(t).catch(console.error),e.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xO(n,t=!1){const e=n;return await MO(e),(await s_(e,t)).token}async function MO(n){const{registrationPromise:t}=await r_(n);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UO(n){if(!n||!n.options)throw Fm("App Configuration");if(!n.name)throw Fm("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw Fm(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Fm(n){return Ra.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw="installations",LO="installations-internal",BO=n=>{const t=n.getProvider("app").getImmediate(),e=UO(t),r=Us(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},zO=n=>{const t=n.getProvider("app").getImmediate(),e=Us(t,Lw).getImmediate();return{getId:()=>VO(e),getToken:a=>xO(e,a)}};function jO(){ni(new Vn(Lw,BO,"PUBLIC")),ni(new Vn(LO,zO,"PRIVATE"))}jO();nn(Tw,n_);nn(Tw,n_,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf="analytics",FO="firebase_id",qO="origin",HO=60*1e3,GO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",a_="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new sc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},kn=new Ma("analytics","Analytics",$O);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KO(n){if(!n.startsWith(a_)){const t=kn.create("invalid-gtag-resource",{gtagURL:n});return Tn.warn(t.message),""}return n}function Bw(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function QO(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function YO(n,t){const e=QO("firebase-js-sdk-policy",{createScriptURL:KO}),r=document.createElement("script"),a=`${a_}?l=${n}&id=${t}`;r.src=e?e==null?void 0:e.createScriptURL(a):a,r.async=!0,document.head.appendChild(r)}function XO(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function WO(n,t,e,r,a,l){const c=r[a];try{if(c)await t[c];else{const p=(await Bw(e)).find(g=>g.measurementId===a);p&&await t[p.appId]}}catch(d){Tn.error(d)}n("config",a,l)}async function ZO(n,t,e,r,a){try{let l=[];if(a&&a.send_to){let c=a.send_to;Array.isArray(c)||(c=[c]);const d=await Bw(e);for(const p of c){const g=d.find(T=>T.measurementId===p),E=g&&t[g.appId];if(E)l.push(E);else{l=[];break}}}l.length===0&&(l=Object.values(t)),await Promise.all(l),n("event",r,a||{})}catch(l){Tn.error(l)}}function JO(n,t,e,r){async function a(l,...c){try{if(l==="event"){const[d,p]=c;await ZO(n,t,e,d,p)}else if(l==="config"){const[d,p]=c;await WO(n,t,e,r,d,p)}else if(l==="consent"){const[d,p]=c;n("consent",d,p)}else if(l==="get"){const[d,p,g]=c;n("get",d,p,g)}else if(l==="set"){const[d]=c;n("set",d)}else n(l,...c)}catch(d){Tn.error(d)}}return a}function tP(n,t,e,r,a){let l=function(...c){window[r].push(arguments)};return window[a]&&typeof window[a]=="function"&&(l=window[a]),window[a]=JO(l,n,t,e),{gtagCore:l,wrappedGtag:window[a]}}function eP(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(a_)&&e.src.includes(n))return e;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP=30,iP=1e3;class rP{constructor(t={},e=iP){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const zw=new rP;function sP(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function aP(n){var t;const{appId:e,apiKey:r}=n,a={method:"GET",headers:sP(r)},l=GO.replace("{app-id}",e),c=await fetch(l,a);if(c.status!==200&&c.status!==304){let d="";try{const p=await c.json();!((t=p.error)===null||t===void 0)&&t.message&&(d=p.error.message)}catch{}throw kn.create("config-fetch-failed",{httpStatus:c.status,responseMessage:d})}return c.json()}async function oP(n,t=zw,e){const{appId:r,apiKey:a,measurementId:l}=n.options;if(!r)throw kn.create("no-app-id");if(!a){if(l)return{measurementId:l,appId:r};throw kn.create("no-api-key")}const c=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new cP;return setTimeout(async()=>{d.abort()},HO),jw({appId:r,apiKey:a,measurementId:l},c,d,t)}async function jw(n,{throttleEndTimeMillis:t,backoffCount:e},r,a=zw){var l;const{appId:c,measurementId:d}=n;try{await lP(r,t)}catch(p){if(d)return Tn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:c,measurementId:d};throw p}try{const p=await aP(n);return a.deleteThrottleMetadata(c),p}catch(p){const g=p;if(!uP(g)){if(a.deleteThrottleMetadata(c),d)return Tn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:c,measurementId:d};throw p}const E=Number((l=g==null?void 0:g.customData)===null||l===void 0?void 0:l.httpStatus)===503?xT(e,a.intervalMillis,nP):xT(e,a.intervalMillis),T={throttleEndTimeMillis:Date.now()+E,backoffCount:e+1};return a.setThrottleMetadata(c,T),Tn.debug(`Calling attemptFetch again in ${E} millis`),jw(n,T,r,a)}}function lP(n,t){return new Promise((e,r)=>{const a=Math.max(t-Date.now(),0),l=setTimeout(e,a);n.addEventListener(()=>{clearTimeout(l),r(kn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function uP(n){if(!(n instanceof xn)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class cP{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function hP(n,t,e,r,a){if(a&&a.global){n("event",e,r);return}else{const l=await t,c=Object.assign(Object.assign({},r),{send_to:l});n("event",e,c)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fP(){if(dw())try{await pw()}catch(n){return Tn.warn(kn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Tn.warn(kn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function dP(n,t,e,r,a,l,c){var d;const p=oP(n);p.then(I=>{e[I.measurementId]=I.appId,n.options.measurementId&&I.measurementId!==n.options.measurementId&&Tn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>Tn.error(I)),t.push(p);const g=fP().then(I=>{if(I)return r.getId()}),[E,T]=await Promise.all([p,g]);eP(l)||YO(l,E.measurementId),a("js",new Date);const b=(d=c==null?void 0:c.config)!==null&&d!==void 0?d:{};return b[qO]="firebase",b.update=!0,T!=null&&(b[FO]=T),a("config",E.measurementId,b),E.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(t){this.app=t}_delete(){return delete Du[this.app.options.appId],Promise.resolve()}}let Du={},$T=[];const KT={};let qm="dataLayer",mP="gtag",QT,Fw,YT=!1;function gP(){const n=[];if(fw()&&n.push("This is a browser extension environment."),MD()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,a)=>`(${a+1}) ${r}`).join(" "),e=kn.create("invalid-analytics-context",{errorInfo:t});Tn.warn(e.message)}}function _P(n,t,e){gP();const r=n.options.appId;if(!r)throw kn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Tn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw kn.create("no-api-key");if(Du[r]!=null)throw kn.create("already-exists",{id:r});if(!YT){XO(qm);const{wrappedGtag:l,gtagCore:c}=tP(Du,$T,KT,qm,mP);Fw=l,QT=c,YT=!0}return Du[r]=dP(n,$T,KT,t,QT,qm,e),new pP(n)}function yP(n=Zf()){n=$t(n);const t=Us(n,Tf);return t.isInitialized()?t.getImmediate():vP(n)}function vP(n,t={}){const e=Us(n,Tf);if(e.isInitialized()){const a=e.getImmediate();if(Cr(t,e.getOptions()))return a;throw kn.create("already-initialized")}return e.initialize({options:t})}function EP(n,t,e,r){n=$t(n),hP(Fw,Du[n.app.options.appId],t,e,r).catch(a=>Tn.error(a))}const XT="@firebase/analytics",WT="0.10.12";function TP(){ni(new Vn(Tf,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),a=t.getProvider("installations-internal").getImmediate();return _P(r,a,e)},"PUBLIC")),ni(new Vn("analytics-internal",n,"PRIVATE")),nn(XT,WT),nn(XT,WT,"esm2017");function n(t){try{const e=t.getProvider(Tf).getImmediate();return{logEvent:(r,a,l)=>EP(e,r,a,l)}}catch(e){throw kn.create("interop-component-reg-failed",{reason:e})}}}TP();function o_(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(e[r[a]]=n[r[a]]);return e}function qw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AP=qw,Hw=new Ma("auth","Firebase",qw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af=new sc("@firebase/auth");function wP(n,...t){Af.logLevel<=Dt.WARN&&Af.warn(`Auth (${Ls}): ${n}`,...t)}function nf(n,...t){Af.logLevel<=Dt.ERROR&&Af.error(`Auth (${Ls}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(n,...t){throw l_(n,...t)}function Vi(n,...t){return l_(n,...t)}function Gw(n,t,e){const r=Object.assign(Object.assign({},AP()),{[t]:e});return new Ma("auth","Firebase",r).create(t,{appName:n.name})}function Tr(n){return Gw(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function l_(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return Hw.create(n,...t)}function vt(n,t,...e){if(!n)throw l_(t,...e)}function gr(n){const t="INTERNAL ASSERTION FAILED: "+n;throw nf(t),new Error(t)}function Nr(n,t){n||gr(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function bP(){return ZT()==="http:"||ZT()==="https:"}function ZT(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bP()||fw()||"connection"in navigator)?navigator.onLine:!0}function RP(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(t,e){this.shortDelay=t,this.longDelay=e,Nr(e>t,"Short delay should be less than long delay!"),this.isMobile=ND()||kD()}get(){return SP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(n,t){Nr(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP=new ac(3e4,6e4);function Mr(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function Ur(n,t,e,r,a={}){return Kw(n,a,async()=>{let l={},c={};r&&(t==="GET"?c=r:l={body:JSON.stringify(r)});const d=rc(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g=Object.assign({method:t,headers:p},l);return PD()||(g.referrerPolicy="no-referrer"),$w.fetch()(Qw(n,n.config.apiHost,e,d),g)})}async function Kw(n,t,e){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},IP),t);try{const a=new NP(n),l=await Promise.race([e(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw qh(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw qh(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw qh(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw qh(n,"user-disabled",c);const E=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Gw(n,E,g);fi(n,E)}}catch(a){if(a instanceof xn)throw a;fi(n,"network-request-failed",{message:String(a)})}}async function oc(n,t,e,r,a={}){const l=await Ur(n,t,e,r,a);return"mfaPendingCredential"in l&&fi(n,"multi-factor-auth-required",{_serverResponse:l}),l}function Qw(n,t,e,r){const a=`${t}${e}?${r}`;return n.config.emulator?u_(n.config,a):`${n.config.apiScheme}://${a}`}function DP(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class NP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(Vi(this.auth,"network-request-failed")),CP.get())})}}function qh(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const a=Vi(n,t,r);return a.customData._tokenResponse=e,a}function JT(n){return n!==void 0&&n.enterprise!==void 0}class OP{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return DP(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function PP(n,t){return Ur(n,"GET","/v2/recaptchaConfig",Mr(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kP(n,t){return Ur(n,"POST","/v1/accounts:delete",t)}async function Yw(n,t){return Ur(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function VP(n,t=!1){const e=$t(n),r=await e.getIdToken(t),a=c_(r);vt(a&&a.exp&&a.auth_time&&a.iat,e.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:r,authTime:Nu(Hm(a.auth_time)),issuedAtTime:Nu(Hm(a.iat)),expirationTime:Nu(Hm(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Hm(n){return Number(n)*1e3}function c_(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return nf("JWT malformed, contained fewer than 3 sections"),null;try{const a=aw(e);return a?JSON.parse(a):(nf("Failed to decode base64 JWT payload"),null)}catch(a){return nf("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function t0(n){const t=c_(n);return vt(t,"internal-error"),vt(typeof t.exp<"u","internal-error"),vt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fu(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof xn&&xP(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function xP({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const a=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Nu(this.lastLoginAt),this.creationTime=Nu(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wf(n){var t;const e=n.auth,r=await n.getIdToken(),a=await Fu(n,Yw(e,{idToken:r}));vt(a==null?void 0:a.users.length,e,"internal-error");const l=a.users[0];n._notifyReloadListener(l);const c=!((t=l.providerUserInfo)===null||t===void 0)&&t.length?Xw(l.providerUserInfo):[],d=LP(n.providerData,c),p=n.isAnonymous,g=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),E=p?g:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new cg(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(n,T)}async function UP(n){const t=$t(n);await wf(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function LP(n,t){return[...n.filter(r=>!t.some(a=>a.providerId===r.providerId)),...t]}function Xw(n){return n.map(t=>{var{providerId:e}=t,r=o_(t,["providerId"]);return{providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BP(n,t){const e=await Kw(n,{},async()=>{const r=rc({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,c=Qw(n,a,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",$w.fetch()(c,{method:"POST",headers:d,body:r})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function zP(n,t){return Ur(n,"POST","/v2/accounts:revokeToken",Mr(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){vt(t.idToken,"internal-error"),vt(typeof t.idToken<"u","internal-error"),vt(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):t0(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){vt(t.length!==0,"internal-error");const e=t0(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(vt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:a,expiresIn:l}=await BP(t,e);this.updateTokensAndExpiration(r,a,Number(l))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:a,expirationTime:l}=e,c=new zo;return r&&(vt(typeof r=="string","internal-error",{appName:t}),c.refreshToken=r),a&&(vt(typeof a=="string","internal-error",{appName:t}),c.accessToken=a),l&&(vt(typeof l=="number","internal-error",{appName:t}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new zo,this.toJSON())}_performRefresh(){return gr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(n,t){vt(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class _r{constructor(t){var{uid:e,auth:r,stsTokenManager:a}=t,l=o_(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new MP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new cg(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(t){const e=await Fu(this,this.stsTokenManager.getToken(this.auth,t));return vt(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return VP(this,t)}reload(){return UP(this)}_assign(t){this!==t&&(vt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new _r(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){vt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await wf(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(En(this.auth.app))return Promise.reject(Tr(this.auth));const t=await this.getIdToken();return await Fu(this,kP(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var r,a,l,c,d,p,g,E;const T=(r=e.displayName)!==null&&r!==void 0?r:void 0,b=(a=e.email)!==null&&a!==void 0?a:void 0,I=(l=e.phoneNumber)!==null&&l!==void 0?l:void 0,D=(c=e.photoURL)!==null&&c!==void 0?c:void 0,L=(d=e.tenantId)!==null&&d!==void 0?d:void 0,O=(p=e._redirectEventId)!==null&&p!==void 0?p:void 0,M=(g=e.createdAt)!==null&&g!==void 0?g:void 0,q=(E=e.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:z,emailVerified:Y,isAnonymous:it,providerData:ot,stsTokenManager:k}=e;vt(z&&k,t,"internal-error");const R=zo.fromJSON(this.name,k);vt(typeof z=="string",t,"internal-error"),Ts(T,t.name),Ts(b,t.name),vt(typeof Y=="boolean",t,"internal-error"),vt(typeof it=="boolean",t,"internal-error"),Ts(I,t.name),Ts(D,t.name),Ts(L,t.name),Ts(O,t.name),Ts(M,t.name),Ts(q,t.name);const S=new _r({uid:z,auth:t,email:b,emailVerified:Y,displayName:T,isAnonymous:it,photoURL:D,phoneNumber:I,tenantId:L,stsTokenManager:R,createdAt:M,lastLoginAt:q});return ot&&Array.isArray(ot)&&(S.providerData=ot.map(N=>Object.assign({},N))),O&&(S._redirectEventId=O),S}static async _fromIdTokenResponse(t,e,r=!1){const a=new zo;a.updateFromServerResponse(e);const l=new _r({uid:e.localId,auth:t,stsTokenManager:a,isAnonymous:r});return await wf(l),l}static async _fromGetAccountInfoResponse(t,e,r){const a=e.users[0];vt(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?Xw(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),d=new zo;d.updateFromIdToken(r);const p=new _r({uid:a.localId,auth:t,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new cg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=new Map;function yr(n){Nr(n instanceof Function,"Expected a class definition");let t=e0.get(n);return t?(Nr(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,e0.set(n,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Ww.type="NONE";const n0=Ww;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(n,t,e){return`firebase:${n}:${t}:${e}`}class jo{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:a,name:l}=this.auth;this.fullUserKey=rf(this.userKey,a.apiKey,l),this.fullPersistenceKey=rf("persistence",a.apiKey,l),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?_r._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new jo(yr(n0),t,r);const a=(await Promise.all(e.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||yr(n0);const c=rf(r,t.config.apiKey,t.name);let d=null;for(const g of e)try{const E=await g._get(c);if(E){const T=_r._fromJSON(t,E);g!==l&&(d=T),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new jo(l,t,r):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(e.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new jo(l,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(eb(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Zw(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ib(t))return"Blackberry";if(rb(t))return"Webos";if(Jw(t))return"Safari";if((t.includes("chrome/")||tb(t))&&!t.includes("edge/"))return"Chrome";if(nb(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Zw(n=sn()){return/firefox\//i.test(n)}function Jw(n=sn()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function tb(n=sn()){return/crios\//i.test(n)}function eb(n=sn()){return/iemobile/i.test(n)}function nb(n=sn()){return/android/i.test(n)}function ib(n=sn()){return/blackberry/i.test(n)}function rb(n=sn()){return/webos/i.test(n)}function h_(n=sn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function jP(n=sn()){var t;return h_(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function FP(){return VD()&&document.documentMode===10}function sb(n=sn()){return h_(n)||nb(n)||rb(n)||ib(n)||/windows phone/i.test(n)||eb(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ab(n,t=[]){let e;switch(n){case"Browser":e=i0(sn());break;case"Worker":e=`${i0(sn())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Ls}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=l=>new Promise((c,d)=>{try{const p=t(l);c(p)}catch(p){d(p)}});r.onAbort=e,this.queue.push(r);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const a of e)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HP(n,t={}){return Ur(n,"GET","/v2/passwordPolicy",Mr(n,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP=6;class $P{constructor(t){var e,r,a,l;const c=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=c.minPasswordLength)!==null&&e!==void 0?e:GP,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=t.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,r,a,l,c,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,p),this.validatePasswordCharacterOptions(t,p),p.isValid&&(p.isValid=(e=p.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),p.isValid&&(p.isValid=(r=p.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),a&&(e.meetsMaxPasswordLength=t.length<=a)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let a=0;a<t.length;a++)r=t.charAt(a),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,a,l){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(t,e,r,a){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new r0(this),this.idTokenSubscription=new r0(this),this.beforeStateQueue=new qP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=a.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=yr(e)),this._initializationPromise=this.queue(async()=>{var r,a;if(!this._deleted&&(this.persistenceManager=await jo.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Yw(this,{idToken:t}),r=await _r._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(En(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let a=r,l=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,d=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(t);(!c||c===d)&&(p!=null&&p.user)&&(a=p.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return vt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await wf(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=RP()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(En(this.app))return Promise.reject(Tr(this));const e=t?$t(t):null;return e&&vt(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&vt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return En(this.app)?Promise.reject(Tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return En(this.app)?Promise.reject(Tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yr(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await HP(this),e=new $P(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ma("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await zP(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&yr(t)||this._popupRedirectResolver;vt(e,this,"argument-error"),this.redirectPersistenceManager=await jo.create(this,[yr(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,a){if(this._deleted)return()=>{};const l=typeof e=="function"?e:e.next.bind(e);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(vt(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof e=="function"){const p=t.addObserver(e,r,a);return()=>{c=!0,p()}}else{const p=t.addObserver(e);return()=>{c=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return vt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ab(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const a=await this._getAppCheckToken();return a&&(e["X-Firebase-AppCheck"]=a),e}async _getAppCheckToken(){var t;if(En(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&wP(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Bs(n){return $t(n)}class r0{constructor(t){this.auth=t,this.observer=null,this.addObserver=jD(e=>this.observer=e)}get next(){return vt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ed={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function QP(n){ed=n}function ob(n){return ed.loadJS(n)}function YP(){return ed.recaptchaEnterpriseScript}function XP(){return ed.gapiScript}function WP(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class ZP{constructor(){this.enterprise=new JP}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class JP{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}const tk="recaptcha-enterprise",lb="NO_RECAPTCHA";class ek{constructor(t){this.type=tk,this.auth=Bs(t)}async verify(t="verify",e=!1){async function r(l){if(!e){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{PP(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new OP(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(p=>{d(p)})})}function a(l,c,d){const p=window.grecaptcha;JT(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:t}).then(g=>{c(g)}).catch(()=>{c(lb)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ZP().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{r(this.auth).then(d=>{if(!e&&JT(window.grecaptcha))a(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=YP();p.length!==0&&(p+=d),ob(p).then(()=>{a(d,l,c)}).catch(g=>{c(g)})}}).catch(d=>{c(d)})})}}async function s0(n,t,e,r=!1,a=!1){const l=new ek(n);let c;if(a)c=lb;else try{c=await l.verify(e)}catch{c=await l.verify(e,!0)}const d=Object.assign({},t);if(e==="mfaSmsEnrollment"||e==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function bf(n,t,e,r,a){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await s0(n,t,e,e==="getOobCode");return r(n,c)}else return r(n,t).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await s0(n,t,e,e==="getOobCode");return r(n,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(n,t){const e=Us(n,"auth");if(e.isInitialized()){const a=e.getImmediate(),l=e.getOptions();if(Cr(l,t??{}))return a;fi(a,"already-initialized")}return e.initialize({options:t})}function ik(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(yr);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function rk(n,t,e){const r=Bs(n);vt(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const a=!1,l=ub(t),{host:c,port:d}=sk(t),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},E=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!r._canInitEmulator){vt(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),vt(Cr(g,r.config.emulator)&&Cr(E,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=g,r.emulatorConfig=E,r.settings.appVerificationDisabledForTesting=!0,ak()}function ub(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function sk(n){const t=ub(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(r);if(a){const l=a[1];return{host:l,port:a0(r.substr(l.length+1))}}else{const[l,c]=r.split(":");return{host:l,port:a0(c)}}}function a0(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function ak(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return gr("not implemented")}_getIdTokenResponse(t){return gr("not implemented")}_linkToIdToken(t,e){return gr("not implemented")}_getReauthenticationResolver(t){return gr("not implemented")}}async function ok(n,t){return Ur(n,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lk(n,t){return oc(n,"POST","/v1/accounts:signInWithPassword",Mr(n,t))}async function uk(n,t){return Ur(n,"POST","/v1/accounts:sendOobCode",Mr(n,t))}async function ck(n,t){return uk(n,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hk(n,t){return oc(n,"POST","/v1/accounts:signInWithEmailLink",Mr(n,t))}async function fk(n,t){return oc(n,"POST","/v1/accounts:signInWithEmailLink",Mr(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu extends f_{constructor(t,e,r,a=null){super("password",r),this._email=t,this._password=e,this._tenantId=a}static _fromEmailAndPassword(t,e){return new qu(t,e,"password")}static _fromEmailAndCode(t,e,r=null){return new qu(t,e,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bf(t,e,"signInWithPassword",lk);case"emailLink":return hk(t,{email:this._email,oobCode:this._password});default:fi(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const r={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bf(t,r,"signUpPassword",ok);case"emailLink":return fk(t,{idToken:e,email:this._email,oobCode:this._password});default:fi(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(n,t){return oc(n,"POST","/v1/accounts:signInWithIdp",Mr(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk="http://localhost";class Ca extends f_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Ca(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):fi("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:a}=e,l=o_(e,["providerId","signInMethod"]);if(!r||!a)return null;const c=new Ca(r,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(t){const e=this.buildRequest();return Fo(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,Fo(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Fo(t,e)}buildRequest(){const t={requestUri:dk,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=rc(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mk(n){const t=Au(wu(n)).link,e=t?Au(wu(t)).deep_link_id:null,r=Au(wu(n)).deep_link_id;return(r?Au(wu(r)).link:null)||r||e||t||n}class d_{constructor(t){var e,r,a,l,c,d;const p=Au(wu(t)),g=(e=p.apiKey)!==null&&e!==void 0?e:null,E=(r=p.oobCode)!==null&&r!==void 0?r:null,T=pk((a=p.mode)!==null&&a!==void 0?a:null);vt(g&&E&&T,"argument-error"),this.apiKey=g,this.operation=T,this.code=E,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(t){const e=mk(t);try{return new d_(e)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(){this.providerId=il.PROVIDER_ID}static credential(t,e){return qu._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const r=d_.parseLink(e);return vt(r,"argument-error"),qu._fromEmailAndCode(t,r.code,r.tenantId)}}il.PROVIDER_ID="password";il.EMAIL_PASSWORD_SIGN_IN_METHOD="password";il.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc extends cb{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws extends lc{constructor(){super("facebook.com")}static credential(t){return Ca._fromParams({providerId:ws.PROVIDER_ID,signInMethod:ws.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ws.credentialFromTaggedObject(t)}static credentialFromError(t){return ws.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ws.credential(t.oauthAccessToken)}catch{return null}}}ws.FACEBOOK_SIGN_IN_METHOD="facebook.com";ws.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends lc{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Ca._fromParams({providerId:bs.PROVIDER_ID,signInMethod:bs.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return bs.credentialFromTaggedObject(t)}static credentialFromError(t){return bs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return bs.credential(e,r)}catch{return null}}}bs.GOOGLE_SIGN_IN_METHOD="google.com";bs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss extends lc{constructor(){super("github.com")}static credential(t){return Ca._fromParams({providerId:Ss.PROVIDER_ID,signInMethod:Ss.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ss.credentialFromTaggedObject(t)}static credentialFromError(t){return Ss.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ss.credential(t.oauthAccessToken)}catch{return null}}}Ss.GITHUB_SIGN_IN_METHOD="github.com";Ss.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs extends lc{constructor(){super("twitter.com")}static credential(t,e){return Ca._fromParams({providerId:Rs.PROVIDER_ID,signInMethod:Rs.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Rs.credentialFromTaggedObject(t)}static credentialFromError(t){return Rs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return Rs.credential(e,r)}catch{return null}}}Rs.TWITTER_SIGN_IN_METHOD="twitter.com";Rs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gk(n,t){return oc(n,"POST","/v1/accounts:signUp",Mr(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,a=!1){const l=await _r._fromIdTokenResponse(t,r,a),c=o0(r);return new Da({user:l,providerId:c,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const a=o0(r);return new Da({user:t,providerId:a,_tokenResponse:r,operationType:e})}}function o0(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf extends xn{constructor(t,e,r,a){var l;super(e.code,e.message),this.operationType=r,this.user=a,Object.setPrototypeOf(this,Sf.prototype),this.customData={appName:t.name,tenantId:(l=t.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,a){return new Sf(t,e,r,a)}}function hb(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Sf._fromErrorAndOperation(n,l,t,r):l})}async function _k(n,t,e=!1){const r=await Fu(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Da._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yk(n,t,e=!1){const{auth:r}=n;if(En(r.app))return Promise.reject(Tr(r));const a="reauthenticate";try{const l=await Fu(n,hb(r,a,t,n),e);vt(l.idToken,r,"internal-error");const c=c_(l.idToken);vt(c,r,"internal-error");const{sub:d}=c;return vt(n.uid===d,r,"user-mismatch"),Da._forOperation(n,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&fi(r,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fb(n,t,e=!1){if(En(n.app))return Promise.reject(Tr(n));const r="signIn",a=await hb(n,r,t),l=await Da._fromIdTokenResponse(n,r,a);return e||await n._updateCurrentUser(l.user),l}async function vk(n,t){return fb(Bs(n),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function db(n){const t=Bs(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Ek(n,t,e){const r=Bs(n);await bf(r,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",ck)}async function Tk(n,t,e){if(En(n.app))return Promise.reject(Tr(n));const r=Bs(n),c=await bf(r,{returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gk).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&db(n),p}),d=await Da._fromIdTokenResponse(r,"signIn",c);return await r._updateCurrentUser(d.user),d}function Ak(n,t,e){return En(n.app)?Promise.reject(Tr(n)):vk($t(n),il.credential(t,e)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&db(n),r})}function wk(n,t,e,r){return $t(n).onIdTokenChanged(t,e,r)}function bk(n,t,e){return $t(n).beforeAuthStateChanged(t,e)}function pb(n,t,e,r){return $t(n).onAuthStateChanged(t,e,r)}function Sk(n){return $t(n).signOut()}const Rf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Rf,"1"),this.storage.removeItem(Rf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=1e3,Ik=10;class gb extends mb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sb(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),a=this.localCache[e];r!==a&&t(e,a,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const r=t.key;e?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(r);!e&&this.localCache[r]===c||this.notifyListeners(r,c)},l=this.storage.getItem(r);FP()&&l!==t.newValue&&t.newValue!==t.oldValue?setTimeout(a,Ik):a()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const a of Array.from(r))a(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},Rk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}gb.type="LOCAL";const Ck=gb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b extends mb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}_b.type="SESSION";const yb=_b;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dk(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(a=>a.isListeningto(t));if(e)return e;const r=new nd(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:a,data:l}=e.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:a});const d=Array.from(c).map(async g=>g(e.origin,l)),p=await Dk(d);e.ports[0].postMessage({status:"done",eventId:r,eventType:a,response:p})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=p_("",20);a.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},r);c={messageChannel:a,onMessage(T){const b=T;if(b.data.eventId===g)switch(b.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(b.data.response);break;default:clearTimeout(E),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:t,eventId:g,data:e},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(){return window}function Ok(n){xi().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(){return typeof xi().WorkerGlobalScope<"u"&&typeof xi().importScripts=="function"}async function Pk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kk(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Vk(){return vb()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb="firebaseLocalStorageDb",xk=1,If="firebaseLocalStorage",Tb="fbase_key";class uc{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function id(n,t){return n.transaction([If],t?"readwrite":"readonly").objectStore(If)}function Mk(){const n=indexedDB.deleteDatabase(Eb);return new uc(n).toPromise()}function hg(){const n=indexedDB.open(Eb,xk);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(If,{keyPath:Tb})}catch(a){e(a)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(If)?t(r):(r.close(),await Mk(),t(await hg()))})})}async function l0(n,t,e){const r=id(n,!0).put({[Tb]:t,value:e});return new uc(r).toPromise()}async function Uk(n,t){const e=id(n,!1).get(t),r=await new uc(e).toPromise();return r===void 0?null:r.value}function u0(n,t){const e=id(n,!0).delete(t);return new uc(e).toPromise()}const Lk=800,Bk=3;class Ab{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hg(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>Bk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nd._getInstance(Vk()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await Pk(),!this.activeServiceWorker)return;this.sender=new Nk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((e=r[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||kk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await hg();return await l0(t,Rf,"1"),await u0(t,Rf),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>l0(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>Uk(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>u0(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(a=>{const l=id(a,!1).getAll();return new uc(l).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:a,value:l}of t)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),e.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),e.push(a));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const a of Array.from(r))a(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Lk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ab.type="LOCAL";const zk=Ab;new ac(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jk(n,t){return t?yr(t):(vt(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_ extends f_{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Fo(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Fo(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Fo(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Fk(n){return fb(n.auth,new m_(n),n.bypassAuthState)}function qk(n){const{auth:t,user:e}=n;return vt(e,t,"internal-error"),yk(e,new m_(n),n.bypassAuthState)}async function Hk(n){const{auth:t,user:e}=n;return vt(e,t,"internal-error"),_k(e,new m_(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(t,e,r,a,l=!1){this.auth=t,this.resolver=r,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:a,tenantId:l,error:c,type:d}=t;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:e,sessionId:r,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Fk;case"linkViaPopup":case"linkViaRedirect":return Hk;case"reauthViaPopup":case"reauthViaRedirect":return qk;default:fi(this.auth,"internal-error")}}resolve(t){Nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk=new ac(2e3,1e4);class Lo extends wb{constructor(t,e,r,a,l){super(t,e,a,l),this.provider=r,this.authWindow=null,this.pollId=null,Lo.currentPopupAction&&Lo.currentPopupAction.cancel(),Lo.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return vt(t,this.auth,"internal-error"),t}async onExecution(){Nr(this.filter.length===1,"Popup operations only handle one event");const t=p_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Vi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Vi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lo.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if(!((r=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Gk.get())};t()}}Lo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k="pendingRedirect",sf=new Map;class Kk extends wb{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=sf.get(this.auth._key());if(!t){try{const r=await Qk(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}sf.set(this.auth._key(),t)}return this.bypassAuthState||sf.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qk(n,t){const e=Wk(t),r=Xk(n);if(!await r._isAvailable())return!1;const a=await r._get(e)==="true";return await r._remove(e),a}function Yk(n,t){sf.set(n._key(),t)}function Xk(n){return yr(n._redirectPersistence)}function Wk(n){return rf($k,n.config.apiKey,n.name)}async function Zk(n,t,e=!1){if(En(n.app))return Promise.reject(Tr(n));const r=Bs(n),a=jk(r,t),c=await new Kk(r,a,e).execute();return c&&!e&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,t)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=10*60*1e3;class t2{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!e2(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!bb(t)){const a=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";e.onError(Vi(this.auth,a))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Jk&&this.cachedEventUids.clear(),this.cachedEventUids.has(c0(t))}saveEventToCache(t){this.cachedEventUids.add(c0(t)),this.lastProcessedEventTime=Date.now()}}function c0(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function bb({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function e2(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bb(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n2(n,t={}){return Ur(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,r2=/^https?/;async function s2(n){if(n.config.emulator)return;const{authorizedDomains:t}=await n2(n);for(const e of t)try{if(a2(e))return}catch{}fi(n,"unauthorized-domain")}function a2(n){const t=ug(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&c.hostname===r}if(!r2.test(e))return!1;if(i2.test(n))return r===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2=new ac(3e4,6e4);function h0(){const n=xi().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function l2(n){return new Promise((t,e)=>{var r,a,l;function c(){h0(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{h0(),e(Vi(n,"network-request-failed"))},timeout:o2.get()})}if(!((a=(r=xi().gapi)===null||r===void 0?void 0:r.iframes)===null||a===void 0)&&a.Iframe)t(gapi.iframes.getContext());else if(!((l=xi().gapi)===null||l===void 0)&&l.load)c();else{const d=WP("iframefcb");return xi()[d]=()=>{gapi.load?c():e(Vi(n,"network-request-failed"))},ob(`${XP()}?onload=${d}`).catch(p=>e(p))}}).catch(t=>{throw af=null,t})}let af=null;function u2(n){return af=af||l2(n),af}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c2=new ac(5e3,15e3),h2="__/auth/iframe",f2="emulator/auth/iframe",d2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},p2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function m2(n){const t=n.config;vt(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?u_(t,f2):`https://${n.config.authDomain}/${h2}`,r={apiKey:t.apiKey,appName:n.name,v:Ls},a=p2.get(n.config.apiHost);a&&(r.eid=a);const l=n._getFrameworks();return l.length&&(r.fw=l.join(",")),`${e}?${rc(r).slice(1)}`}async function g2(n){const t=await u2(n),e=xi().gapi;return vt(e,n,"internal-error"),t.open({where:document.body,url:m2(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:d2,dontclear:!0},r=>new Promise(async(a,l)=>{await r.restyle({setHideOnLeave:!1});const c=Vi(n,"network-request-failed"),d=xi().setTimeout(()=>{l(c)},c2.get());function p(){xi().clearTimeout(d),a(r)}r.ping(p).then(p,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},y2=500,v2=600,E2="_blank",T2="http://localhost";class f0{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function A2(n,t,e,r=y2,a=v2){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const p=Object.assign(Object.assign({},_2),{width:r.toString(),height:a.toString(),top:l,left:c}),g=sn().toLowerCase();e&&(d=tb(g)?E2:e),Zw(g)&&(t=t||T2,p.scrollbars="yes");const E=Object.entries(p).reduce((b,[I,D])=>`${b}${I}=${D},`,"");if(jP(g)&&d!=="_self")return w2(t||"",d),new f0(null);const T=window.open(t||"",d,E);vt(T,n,"popup-blocked");try{T.focus()}catch{}return new f0(T)}function w2(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b2="__/auth/handler",S2="emulator/auth/handler",R2=encodeURIComponent("fac");async function d0(n,t,e,r,a,l){vt(n.config.authDomain,n,"auth-domain-config-required"),vt(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:Ls,eventId:a};if(t instanceof cb){t.setDefaultLanguage(n.languageCode),c.providerId=t.providerId||"",zD(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[E,T]of Object.entries({}))c[E]=T}if(t instanceof lc){const E=t.getScopes().filter(T=>T!=="");E.length>0&&(c.scopes=E.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const E of Object.keys(d))d[E]===void 0&&delete d[E];const p=await n._getAppCheckToken(),g=p?`#${R2}=${encodeURIComponent(p)}`:"";return`${I2(n)}?${rc(d).slice(1)}${g}`}function I2({config:n}){return n.emulator?u_(n,S2):`https://${n.authDomain}/${b2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm="webStorageSupport";class C2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yb,this._completeRedirectFn=Zk,this._overrideRedirectResult=Yk}async _openPopup(t,e,r,a){var l;Nr((l=this.eventManagers[t._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await d0(t,e,r,ug(),a);return A2(t,c,p_())}async _openRedirect(t,e,r,a){await this._originValidation(t);const l=await d0(t,e,r,ug(),a);return Ok(l),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:a,promise:l}=this.eventManagers[e];return a?Promise.resolve(a):(Nr(l,"If manager is not set, promise should be"),l)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await g2(t),r=new t2(t);return e.register("authEvent",a=>(vt(a==null?void 0:a.authEvent,t,"invalid-auth-event"),{status:r.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Gm,{type:Gm},a=>{var l;const c=(l=a==null?void 0:a[0])===null||l===void 0?void 0:l[Gm];c!==void 0&&e(!!c),fi(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=s2(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return sb()||Jw()||h_()}}const D2=C2;var p0="@firebase/auth",m0="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){vt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O2(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function P2(n){ni(new Vn("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),a=t.getProvider("heartbeat"),l=t.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=r.options;vt(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ab(n)},g=new KP(r,a,l,p);return ik(g,e),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),ni(new Vn("auth-internal",t=>{const e=Bs(t.getProvider("auth").getImmediate());return(r=>new N2(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(p0,m0,O2(n)),nn(p0,m0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k2=5*60,V2=cw("authIdTokenMaxAge")||k2;let g0=null;const x2=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>V2)return;const a=e==null?void 0:e.token;g0!==a&&(g0=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function M2(n=Zf()){const t=Us(n,"auth");if(t.isInitialized())return t.getImmediate();const e=nk(n,{popupRedirectResolver:D2,persistence:[zk,Ck,yb]}),r=cw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(r,location.origin);if(location.origin===l.origin){const c=x2(l.toString());bk(e,c,()=>c(e.currentUser)),wk(e,d=>c(d))}}const a=ow("auth");return a&&rk(e,`http://${a}`),e}function U2(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}QP({loadJS(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=a=>{const l=Vi("internal-error");l.customData=a,e(l)},r.type="text/javascript",r.charset="UTF-8",U2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});P2("Browser");var _0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ar,Sb;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(k,R){function S(){}S.prototype=R.prototype,k.D=R.prototype,k.prototype=new S,k.prototype.constructor=k,k.C=function(N,V,j){for(var P=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)P[ge-2]=arguments[ge];return R.prototype[V].apply(N,P)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(k,R,S){S||(S=0);var N=Array(16);if(typeof R=="string")for(var V=0;16>V;++V)N[V]=R.charCodeAt(S++)|R.charCodeAt(S++)<<8|R.charCodeAt(S++)<<16|R.charCodeAt(S++)<<24;else for(V=0;16>V;++V)N[V]=R[S++]|R[S++]<<8|R[S++]<<16|R[S++]<<24;R=k.g[0],S=k.g[1],V=k.g[2];var j=k.g[3],P=R+(j^S&(V^j))+N[0]+3614090360&4294967295;R=S+(P<<7&4294967295|P>>>25),P=j+(V^R&(S^V))+N[1]+3905402710&4294967295,j=R+(P<<12&4294967295|P>>>20),P=V+(S^j&(R^S))+N[2]+606105819&4294967295,V=j+(P<<17&4294967295|P>>>15),P=S+(R^V&(j^R))+N[3]+3250441966&4294967295,S=V+(P<<22&4294967295|P>>>10),P=R+(j^S&(V^j))+N[4]+4118548399&4294967295,R=S+(P<<7&4294967295|P>>>25),P=j+(V^R&(S^V))+N[5]+1200080426&4294967295,j=R+(P<<12&4294967295|P>>>20),P=V+(S^j&(R^S))+N[6]+2821735955&4294967295,V=j+(P<<17&4294967295|P>>>15),P=S+(R^V&(j^R))+N[7]+4249261313&4294967295,S=V+(P<<22&4294967295|P>>>10),P=R+(j^S&(V^j))+N[8]+1770035416&4294967295,R=S+(P<<7&4294967295|P>>>25),P=j+(V^R&(S^V))+N[9]+2336552879&4294967295,j=R+(P<<12&4294967295|P>>>20),P=V+(S^j&(R^S))+N[10]+4294925233&4294967295,V=j+(P<<17&4294967295|P>>>15),P=S+(R^V&(j^R))+N[11]+2304563134&4294967295,S=V+(P<<22&4294967295|P>>>10),P=R+(j^S&(V^j))+N[12]+1804603682&4294967295,R=S+(P<<7&4294967295|P>>>25),P=j+(V^R&(S^V))+N[13]+4254626195&4294967295,j=R+(P<<12&4294967295|P>>>20),P=V+(S^j&(R^S))+N[14]+2792965006&4294967295,V=j+(P<<17&4294967295|P>>>15),P=S+(R^V&(j^R))+N[15]+1236535329&4294967295,S=V+(P<<22&4294967295|P>>>10),P=R+(V^j&(S^V))+N[1]+4129170786&4294967295,R=S+(P<<5&4294967295|P>>>27),P=j+(S^V&(R^S))+N[6]+3225465664&4294967295,j=R+(P<<9&4294967295|P>>>23),P=V+(R^S&(j^R))+N[11]+643717713&4294967295,V=j+(P<<14&4294967295|P>>>18),P=S+(j^R&(V^j))+N[0]+3921069994&4294967295,S=V+(P<<20&4294967295|P>>>12),P=R+(V^j&(S^V))+N[5]+3593408605&4294967295,R=S+(P<<5&4294967295|P>>>27),P=j+(S^V&(R^S))+N[10]+38016083&4294967295,j=R+(P<<9&4294967295|P>>>23),P=V+(R^S&(j^R))+N[15]+3634488961&4294967295,V=j+(P<<14&4294967295|P>>>18),P=S+(j^R&(V^j))+N[4]+3889429448&4294967295,S=V+(P<<20&4294967295|P>>>12),P=R+(V^j&(S^V))+N[9]+568446438&4294967295,R=S+(P<<5&4294967295|P>>>27),P=j+(S^V&(R^S))+N[14]+3275163606&4294967295,j=R+(P<<9&4294967295|P>>>23),P=V+(R^S&(j^R))+N[3]+4107603335&4294967295,V=j+(P<<14&4294967295|P>>>18),P=S+(j^R&(V^j))+N[8]+1163531501&4294967295,S=V+(P<<20&4294967295|P>>>12),P=R+(V^j&(S^V))+N[13]+2850285829&4294967295,R=S+(P<<5&4294967295|P>>>27),P=j+(S^V&(R^S))+N[2]+4243563512&4294967295,j=R+(P<<9&4294967295|P>>>23),P=V+(R^S&(j^R))+N[7]+1735328473&4294967295,V=j+(P<<14&4294967295|P>>>18),P=S+(j^R&(V^j))+N[12]+2368359562&4294967295,S=V+(P<<20&4294967295|P>>>12),P=R+(S^V^j)+N[5]+4294588738&4294967295,R=S+(P<<4&4294967295|P>>>28),P=j+(R^S^V)+N[8]+2272392833&4294967295,j=R+(P<<11&4294967295|P>>>21),P=V+(j^R^S)+N[11]+1839030562&4294967295,V=j+(P<<16&4294967295|P>>>16),P=S+(V^j^R)+N[14]+4259657740&4294967295,S=V+(P<<23&4294967295|P>>>9),P=R+(S^V^j)+N[1]+2763975236&4294967295,R=S+(P<<4&4294967295|P>>>28),P=j+(R^S^V)+N[4]+1272893353&4294967295,j=R+(P<<11&4294967295|P>>>21),P=V+(j^R^S)+N[7]+4139469664&4294967295,V=j+(P<<16&4294967295|P>>>16),P=S+(V^j^R)+N[10]+3200236656&4294967295,S=V+(P<<23&4294967295|P>>>9),P=R+(S^V^j)+N[13]+681279174&4294967295,R=S+(P<<4&4294967295|P>>>28),P=j+(R^S^V)+N[0]+3936430074&4294967295,j=R+(P<<11&4294967295|P>>>21),P=V+(j^R^S)+N[3]+3572445317&4294967295,V=j+(P<<16&4294967295|P>>>16),P=S+(V^j^R)+N[6]+76029189&4294967295,S=V+(P<<23&4294967295|P>>>9),P=R+(S^V^j)+N[9]+3654602809&4294967295,R=S+(P<<4&4294967295|P>>>28),P=j+(R^S^V)+N[12]+3873151461&4294967295,j=R+(P<<11&4294967295|P>>>21),P=V+(j^R^S)+N[15]+530742520&4294967295,V=j+(P<<16&4294967295|P>>>16),P=S+(V^j^R)+N[2]+3299628645&4294967295,S=V+(P<<23&4294967295|P>>>9),P=R+(V^(S|~j))+N[0]+4096336452&4294967295,R=S+(P<<6&4294967295|P>>>26),P=j+(S^(R|~V))+N[7]+1126891415&4294967295,j=R+(P<<10&4294967295|P>>>22),P=V+(R^(j|~S))+N[14]+2878612391&4294967295,V=j+(P<<15&4294967295|P>>>17),P=S+(j^(V|~R))+N[5]+4237533241&4294967295,S=V+(P<<21&4294967295|P>>>11),P=R+(V^(S|~j))+N[12]+1700485571&4294967295,R=S+(P<<6&4294967295|P>>>26),P=j+(S^(R|~V))+N[3]+2399980690&4294967295,j=R+(P<<10&4294967295|P>>>22),P=V+(R^(j|~S))+N[10]+4293915773&4294967295,V=j+(P<<15&4294967295|P>>>17),P=S+(j^(V|~R))+N[1]+2240044497&4294967295,S=V+(P<<21&4294967295|P>>>11),P=R+(V^(S|~j))+N[8]+1873313359&4294967295,R=S+(P<<6&4294967295|P>>>26),P=j+(S^(R|~V))+N[15]+4264355552&4294967295,j=R+(P<<10&4294967295|P>>>22),P=V+(R^(j|~S))+N[6]+2734768916&4294967295,V=j+(P<<15&4294967295|P>>>17),P=S+(j^(V|~R))+N[13]+1309151649&4294967295,S=V+(P<<21&4294967295|P>>>11),P=R+(V^(S|~j))+N[4]+4149444226&4294967295,R=S+(P<<6&4294967295|P>>>26),P=j+(S^(R|~V))+N[11]+3174756917&4294967295,j=R+(P<<10&4294967295|P>>>22),P=V+(R^(j|~S))+N[2]+718787259&4294967295,V=j+(P<<15&4294967295|P>>>17),P=S+(j^(V|~R))+N[9]+3951481745&4294967295,k.g[0]=k.g[0]+R&4294967295,k.g[1]=k.g[1]+(V+(P<<21&4294967295|P>>>11))&4294967295,k.g[2]=k.g[2]+V&4294967295,k.g[3]=k.g[3]+j&4294967295}r.prototype.u=function(k,R){R===void 0&&(R=k.length);for(var S=R-this.blockSize,N=this.B,V=this.h,j=0;j<R;){if(V==0)for(;j<=S;)a(this,k,j),j+=this.blockSize;if(typeof k=="string"){for(;j<R;)if(N[V++]=k.charCodeAt(j++),V==this.blockSize){a(this,N),V=0;break}}else for(;j<R;)if(N[V++]=k[j++],V==this.blockSize){a(this,N),V=0;break}}this.h=V,this.o+=R},r.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var R=1;R<k.length-8;++R)k[R]=0;var S=8*this.o;for(R=k.length-8;R<k.length;++R)k[R]=S&255,S/=256;for(this.u(k),k=Array(16),R=S=0;4>R;++R)for(var N=0;32>N;N+=8)k[S++]=this.g[R]>>>N&255;return k};function l(k,R){var S=d;return Object.prototype.hasOwnProperty.call(S,k)?S[k]:S[k]=R(k)}function c(k,R){this.h=R;for(var S=[],N=!0,V=k.length-1;0<=V;V--){var j=k[V]|0;N&&j==R||(S[V]=j,N=!1)}this.g=S}var d={};function p(k){return-128<=k&&128>k?l(k,function(R){return new c([R|0],0>R?-1:0)}):new c([k|0],0>k?-1:0)}function g(k){if(isNaN(k)||!isFinite(k))return T;if(0>k)return O(g(-k));for(var R=[],S=1,N=0;k>=S;N++)R[N]=k/S|0,S*=4294967296;return new c(R,0)}function E(k,R){if(k.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(k.charAt(0)=="-")return O(E(k.substring(1),R));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=g(Math.pow(R,8)),N=T,V=0;V<k.length;V+=8){var j=Math.min(8,k.length-V),P=parseInt(k.substring(V,V+j),R);8>j?(j=g(Math.pow(R,j)),N=N.j(j).add(g(P))):(N=N.j(S),N=N.add(g(P)))}return N}var T=p(0),b=p(1),I=p(16777216);n=c.prototype,n.m=function(){if(L(this))return-O(this).m();for(var k=0,R=1,S=0;S<this.g.length;S++){var N=this.i(S);k+=(0<=N?N:4294967296+N)*R,R*=4294967296}return k},n.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(D(this))return"0";if(L(this))return"-"+O(this).toString(k);for(var R=g(Math.pow(k,6)),S=this,N="";;){var V=Y(S,R).g;S=M(S,V.j(R));var j=((0<S.g.length?S.g[0]:S.h)>>>0).toString(k);if(S=V,D(S))return j+N;for(;6>j.length;)j="0"+j;N=j+N}},n.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function D(k){if(k.h!=0)return!1;for(var R=0;R<k.g.length;R++)if(k.g[R]!=0)return!1;return!0}function L(k){return k.h==-1}n.l=function(k){return k=M(this,k),L(k)?-1:D(k)?0:1};function O(k){for(var R=k.g.length,S=[],N=0;N<R;N++)S[N]=~k.g[N];return new c(S,~k.h).add(b)}n.abs=function(){return L(this)?O(this):this},n.add=function(k){for(var R=Math.max(this.g.length,k.g.length),S=[],N=0,V=0;V<=R;V++){var j=N+(this.i(V)&65535)+(k.i(V)&65535),P=(j>>>16)+(this.i(V)>>>16)+(k.i(V)>>>16);N=P>>>16,j&=65535,P&=65535,S[V]=P<<16|j}return new c(S,S[S.length-1]&-2147483648?-1:0)};function M(k,R){return k.add(O(R))}n.j=function(k){if(D(this)||D(k))return T;if(L(this))return L(k)?O(this).j(O(k)):O(O(this).j(k));if(L(k))return O(this.j(O(k)));if(0>this.l(I)&&0>k.l(I))return g(this.m()*k.m());for(var R=this.g.length+k.g.length,S=[],N=0;N<2*R;N++)S[N]=0;for(N=0;N<this.g.length;N++)for(var V=0;V<k.g.length;V++){var j=this.i(N)>>>16,P=this.i(N)&65535,ge=k.i(V)>>>16,se=k.i(V)&65535;S[2*N+2*V]+=P*se,q(S,2*N+2*V),S[2*N+2*V+1]+=j*se,q(S,2*N+2*V+1),S[2*N+2*V+1]+=P*ge,q(S,2*N+2*V+1),S[2*N+2*V+2]+=j*ge,q(S,2*N+2*V+2)}for(N=0;N<R;N++)S[N]=S[2*N+1]<<16|S[2*N];for(N=R;N<2*R;N++)S[N]=0;return new c(S,0)};function q(k,R){for(;(k[R]&65535)!=k[R];)k[R+1]+=k[R]>>>16,k[R]&=65535,R++}function z(k,R){this.g=k,this.h=R}function Y(k,R){if(D(R))throw Error("division by zero");if(D(k))return new z(T,T);if(L(k))return R=Y(O(k),R),new z(O(R.g),O(R.h));if(L(R))return R=Y(k,O(R)),new z(O(R.g),R.h);if(30<k.g.length){if(L(k)||L(R))throw Error("slowDivide_ only works with positive integers.");for(var S=b,N=R;0>=N.l(k);)S=it(S),N=it(N);var V=ot(S,1),j=ot(N,1);for(N=ot(N,2),S=ot(S,2);!D(N);){var P=j.add(N);0>=P.l(k)&&(V=V.add(S),j=P),N=ot(N,1),S=ot(S,1)}return R=M(k,V.j(R)),new z(V,R)}for(V=T;0<=k.l(R);){for(S=Math.max(1,Math.floor(k.m()/R.m())),N=Math.ceil(Math.log(S)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),j=g(S),P=j.j(R);L(P)||0<P.l(k);)S-=N,j=g(S),P=j.j(R);D(j)&&(j=b),V=V.add(j),k=M(k,P)}return new z(V,k)}n.A=function(k){return Y(this,k).h},n.and=function(k){for(var R=Math.max(this.g.length,k.g.length),S=[],N=0;N<R;N++)S[N]=this.i(N)&k.i(N);return new c(S,this.h&k.h)},n.or=function(k){for(var R=Math.max(this.g.length,k.g.length),S=[],N=0;N<R;N++)S[N]=this.i(N)|k.i(N);return new c(S,this.h|k.h)},n.xor=function(k){for(var R=Math.max(this.g.length,k.g.length),S=[],N=0;N<R;N++)S[N]=this.i(N)^k.i(N);return new c(S,this.h^k.h)};function it(k){for(var R=k.g.length+1,S=[],N=0;N<R;N++)S[N]=k.i(N)<<1|k.i(N-1)>>>31;return new c(S,k.h)}function ot(k,R){var S=R>>5;R%=32;for(var N=k.g.length-S,V=[],j=0;j<N;j++)V[j]=0<R?k.i(j+S)>>>R|k.i(j+S+1)<<32-R:k.i(j+S);return new c(V,k.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Sb=r,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=E,Ar=c}).apply(typeof _0<"u"?_0:typeof self<"u"?self:typeof window<"u"?window:{});var Hh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rb,bu,Ib,of,fg,Cb,Db,Nb;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,y){return h==Array.prototype||h==Object.prototype||(h[_]=y.value),h};function e(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hh=="object"&&Hh];for(var _=0;_<h.length;++_){var y=h[_];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var r=e(this);function a(h,_){if(_)t:{var y=r;h=h.split(".");for(var w=0;w<h.length-1;w++){var H=h[w];if(!(H in y))break t;y=y[H]}h=h[h.length-1],w=y[h],_=_(w),_!=w&&_!=null&&t(y,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var y=0,w=!1,H={next:function(){if(!w&&y<h.length){var Q=y++;return{value:_(Q,h[Q]),done:!1}}return w=!0,{done:!0,value:void 0}}};return H[Symbol.iterator]=function(){return H},H}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function E(h,_,y){return h.call.apply(h.bind,arguments)}function T(h,_,y){if(!h)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var H=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(H,w),h.apply(_,H)}}return function(){return h.apply(_,arguments)}}function b(h,_,y){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:T,b.apply(null,arguments)}function I(h,_){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),h.apply(this,w)}}function D(h,_){function y(){}y.prototype=_.prototype,h.aa=_.prototype,h.prototype=new y,h.prototype.constructor=h,h.Qb=function(w,H,Q){for(var st=Array(arguments.length-2),Mt=2;Mt<arguments.length;Mt++)st[Mt-2]=arguments[Mt];return _.prototype[H].apply(w,st)}}function L(h){const _=h.length;if(0<_){const y=Array(_);for(let w=0;w<_;w++)y[w]=h[w];return y}return[]}function O(h,_){for(let y=1;y<arguments.length;y++){const w=arguments[y];if(p(w)){const H=h.length||0,Q=w.length||0;h.length=H+Q;for(let st=0;st<Q;st++)h[H+st]=w[st]}else h.push(w)}}class M{constructor(_,y){this.i=_,this.j=y,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function q(h){return/^[\s\xa0]*$/.test(h)}function z(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function Y(h){return Y[" "](h),h}Y[" "]=function(){};var it=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function ot(h,_,y){for(const w in h)_.call(y,h[w],w,h)}function k(h,_){for(const y in h)_.call(void 0,h[y],y,h)}function R(h){const _={};for(const y in h)_[y]=h[y];return _}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(h,_){let y,w;for(let H=1;H<arguments.length;H++){w=arguments[H];for(y in w)h[y]=w[y];for(let Q=0;Q<S.length;Q++)y=S[Q],Object.prototype.hasOwnProperty.call(w,y)&&(h[y]=w[y])}}function V(h){var _=1;h=h.split(":");const y=[];for(;0<_&&h.length;)y.push(h.shift()),_--;return h.length&&y.push(h.join(":")),y}function j(h){d.setTimeout(()=>{throw h},0)}function P(){var h=Kt;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class ge{constructor(){this.h=this.g=null}add(_,y){const w=se.get();w.set(_,y),this.h?this.h.next=w:this.g=w,this.h=w}}var se=new M(()=>new at,h=>h.reset());class at{constructor(){this.next=this.g=this.h=null}set(_,y){this.h=_,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let _t,dt=!1,Kt=new ge,x=()=>{const h=d.Promise.resolve(void 0);_t=()=>{h.then(rt)}};var rt=()=>{for(var h;h=P();){try{h.h.call(h.g)}catch(y){j(y)}var _=se;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}dt=!1};function mt(){this.s=this.s,this.C=this.C}mt.prototype.s=!1,mt.prototype.ma=function(){this.s||(this.s=!0,this.N())},mt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function lt(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var ut=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const y=()=>{};d.addEventListener("test",y,_),d.removeEventListener("test",y,_)}catch{}return h}();function It(h,_){if(lt.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var y=this.type=h.type,w=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(it){t:{try{Y(_.nodeName);var H=!0;break t}catch{}H=!1}H||(_=null)}}else y=="mouseover"?_=h.fromElement:y=="mouseout"&&(_=h.toElement);this.relatedTarget=_,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:St[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&It.aa.h.call(this)}}D(It,lt);var St={2:"touch",3:"pen",4:"mouse"};It.prototype.h=function(){It.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Te="closure_listenable_"+(1e6*Math.random()|0),Ft=0;function he(h,_,y,w,H){this.listener=h,this.proxy=null,this.src=_,this.type=y,this.capture=!!w,this.ha=H,this.key=++Ft,this.da=this.fa=!1}function Xt(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function an(h){this.src=h,this.g={},this.h=0}an.prototype.add=function(h,_,y,w,H){var Q=h.toString();h=this.g[Q],h||(h=this.g[Q]=[],this.h++);var st=Mn(h,_,w,H);return-1<st?(_=h[st],y||(_.fa=!1)):(_=new he(_,this.src,Q,!!w,H),_.fa=y,h.push(_)),_};function ji(h,_){var y=_.type;if(y in h.g){var w=h.g[y],H=Array.prototype.indexOf.call(w,_,void 0),Q;(Q=0<=H)&&Array.prototype.splice.call(w,H,1),Q&&(Xt(_),h.g[y].length==0&&(delete h.g[y],h.h--))}}function Mn(h,_,y,w){for(var H=0;H<h.length;++H){var Q=h[H];if(!Q.da&&Q.listener==_&&Q.capture==!!y&&Q.ha==w)return H}return-1}var Lr="closure_lm_"+(1e6*Math.random()|0),Br={};function Fi(h,_,y,w,H){if(Array.isArray(_)){for(var Q=0;Q<_.length;Q++)Fi(h,_[Q],y,w,H);return null}return y=Tc(y),h&&h[Te]?h.K(_,y,g(w)?!!w.capture:!1,H):fl(h,_,y,!1,w,H)}function fl(h,_,y,w,H,Q){if(!_)throw Error("Invalid event type");var st=g(H)?!!H.capture:!!H,Mt=dl(h);if(Mt||(h[Lr]=Mt=new an(h)),y=Mt.add(_,y,w,st,Q),y.proxy)return y;if(w=ja(),y.proxy=w,w.src=h,w.listener=y,h.addEventListener)ut||(H=st),H===void 0&&(H=!1),h.addEventListener(_.toString(),w,H);else if(h.attachEvent)h.attachEvent(qa(_.toString()),w);else if(h.addListener&&h.removeListener)h.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function ja(){function h(y){return _.call(h.src,h.listener,y)}const _=Nd;return h}function Fa(h,_,y,w,H){if(Array.isArray(_))for(var Q=0;Q<_.length;Q++)Fa(h,_[Q],y,w,H);else w=g(w)?!!w.capture:!!w,y=Tc(y),h&&h[Te]?(h=h.i,_=String(_).toString(),_ in h.g&&(Q=h.g[_],y=Mn(Q,y,w,H),-1<y&&(Xt(Q[y]),Array.prototype.splice.call(Q,y,1),Q.length==0&&(delete h.g[_],h.h--)))):h&&(h=dl(h))&&(_=h.g[_.toString()],h=-1,_&&(h=Mn(_,y,w,H)),(y=-1<h?_[h]:null)&&Fs(y))}function Fs(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Te])ji(_.i,h);else{var y=h.type,w=h.proxy;_.removeEventListener?_.removeEventListener(y,w,h.capture):_.detachEvent?_.detachEvent(qa(y),w):_.addListener&&_.removeListener&&_.removeListener(w),(y=dl(_))?(ji(y,h),y.h==0&&(y.src=null,_[Lr]=null)):Xt(h)}}}function qa(h){return h in Br?Br[h]:Br[h]="on"+h}function Nd(h,_){if(h.da)h=!0;else{_=new It(_,this);var y=h.listener,w=h.ha||h.src;h.fa&&Fs(h),h=y.call(w,_)}return h}function dl(h){return h=h[Lr],h instanceof an?h:null}var mn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tc(h){return typeof h=="function"?h:(h[mn]||(h[mn]=function(_){return h.handleEvent(_)}),h[mn])}function Ce(){mt.call(this),this.i=new an(this),this.M=this,this.F=null}D(Ce,mt),Ce.prototype[Te]=!0,Ce.prototype.removeEventListener=function(h,_,y,w){Fa(this,h,_,y,w)};function xe(h,_){var y,w=h.F;if(w)for(y=[];w;w=w.F)y.push(w);if(h=h.M,w=_.type||_,typeof _=="string")_=new lt(_,h);else if(_ instanceof lt)_.target=_.target||h;else{var H=_;_=new lt(w,h),N(_,H)}if(H=!0,y)for(var Q=y.length-1;0<=Q;Q--){var st=_.g=y[Q];H=qi(st,w,!0,_)&&H}if(st=_.g=h,H=qi(st,w,!0,_)&&H,H=qi(st,w,!1,_)&&H,y)for(Q=0;Q<y.length;Q++)st=_.g=y[Q],H=qi(st,w,!1,_)&&H}Ce.prototype.N=function(){if(Ce.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var y=h.g[_],w=0;w<y.length;w++)Xt(y[w]);delete h.g[_],h.h--}}this.F=null},Ce.prototype.K=function(h,_,y,w){return this.i.add(String(h),_,!1,y,w)},Ce.prototype.L=function(h,_,y,w){return this.i.add(String(h),_,!0,y,w)};function qi(h,_,y,w){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var H=!0,Q=0;Q<_.length;++Q){var st=_[Q];if(st&&!st.da&&st.capture==y){var Mt=st.listener,Ne=st.ha||st.src;st.fa&&ji(h.i,st),H=Mt.call(Ne,w)!==!1&&H}}return H&&!w.defaultPrevented}function Ac(h,_,y){if(typeof h=="function")y&&(h=b(h,y));else if(h&&typeof h.handleEvent=="function")h=b(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function pl(h){h.g=Ac(()=>{h.g=null,h.i&&(h.i=!1,pl(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class Od extends mt{constructor(_,y){super(),this.m=_,this.l=y,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:pl(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qs(h){mt.call(this),this.h=h,this.g={}}D(qs,mt);var zr=[];function Xe(h){ot(h.g,function(_,y){this.g.hasOwnProperty(y)&&Fs(_)},h),h.g={}}qs.prototype.N=function(){qs.aa.N.call(this),Xe(this)},qs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ml=d.JSON.stringify,pi=d.JSON.parse,on=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function gl(){}gl.prototype.h=null;function wc(h){return h.h||(h.h=h.i())}function bc(){}var mi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function jr(){lt.call(this,"d")}D(jr,lt);function ii(){lt.call(this,"c")}D(ii,lt);var Un={},Fr=null;function Ha(){return Fr=Fr||new Ce}Un.La="serverreachability";function _l(h){lt.call(this,Un.La,h)}D(_l,lt);function qr(h){const _=Ha();xe(_,new _l(_))}Un.STAT_EVENT="statevent";function Ga(h,_){lt.call(this,Un.STAT_EVENT,h),this.stat=_}D(Ga,lt);function _e(h){const _=Ha();xe(_,new Ga(_,h))}Un.Ma="timingevent";function Sc(h,_){lt.call(this,Un.Ma,h),this.size=_}D(Sc,lt);function Hr(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function Gr(){this.g=!0}Gr.prototype.xa=function(){this.g=!1};function Rc(h,_,y,w,H,Q){h.info(function(){if(h.g)if(Q)for(var st="",Mt=Q.split("&"),Ne=0;Ne<Mt.length;Ne++){var Ut=Mt[Ne].split("=");if(1<Ut.length){var Le=Ut[0];Ut=Ut[1];var Oe=Le.split("_");st=2<=Oe.length&&Oe[1]=="type"?st+(Le+"="+Ut+"&"):st+(Le+"=redacted&")}}else st=null;else st=Q;return"XMLHTTP REQ ("+w+") [attempt "+H+"]: "+_+`
`+y+`
`+st})}function Ic(h,_,y,w,H,Q,st){h.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+H+"]: "+_+`
`+y+`
`+Q+" "+st})}function $r(h,_,y,w){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+Me(h,y)+(w?" "+w:"")})}function gi(h,_){h.info(function(){return"TIMEOUT: "+_})}Gr.prototype.info=function(){};function Me(h,_){if(!h.g)return _;if(!_)return null;try{var y=JSON.parse(_);if(y){for(h=0;h<y.length;h++)if(Array.isArray(y[h])){var w=y[h];if(!(2>w.length)){var H=w[1];if(Array.isArray(H)&&!(1>H.length)){var Q=H[0];if(Q!="noop"&&Q!="stop"&&Q!="close")for(var st=1;st<H.length;st++)H[st]=""}}}}return ml(y)}catch{return _}}var De={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Hi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Hs;function $a(){}D($a,gl),$a.prototype.g=function(){return new XMLHttpRequest},$a.prototype.i=function(){return{}},Hs=new $a;function _i(h,_,y,w){this.j=h,this.i=_,this.l=y,this.R=w||1,this.U=new qs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yl}function yl(){this.i=null,this.g="",this.h=!1}var Kr={},Gs={};function ri(h,_,y){h.L=1,h.v=Qs(fe(_)),h.m=y,h.P=!0,Gi(h,null)}function Gi(h,_){h.F=Date.now(),ae(h),h.A=fe(h.v);var y=h.A,w=h.R;Array.isArray(w)||(w=[String(w)]),Qi(y.i,"t",w),h.C=0,y=h.j.J,h.h=new yl,h.g=jc(h.j,y?_:null,!h.m),0<h.O&&(h.M=new Od(b(h.Y,h,h.g),h.O)),_=h.U,y=h.g,w=h.ca;var H="readystatechange";Array.isArray(H)||(H&&(zr[0]=H.toString()),H=zr);for(var Q=0;Q<H.length;Q++){var st=Fi(y,H[Q],w||_.handleEvent,!1,_.h||_);if(!st)break;_.g[st.key]=st}_=h.H?R(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),qr(),Rc(h.i,h.u,h.A,h.l,h.R,h.m)}_i.prototype.ca=function(h){h=h.target;const _=this.M;_&&Fn(h)==3?_.j():this.Y(h)},_i.prototype.Y=function(h){try{if(h==this.g)t:{const Oe=Fn(this.g);var _=this.g.Ba();const Zi=this.g.Z();if(!(3>Oe)&&(Oe!=3||this.g&&(this.h.h||this.g.oa()||kc(this.g)))){this.J||Oe!=4||_==7||(_==8||0>=Zi?qr(3):qr(2)),Ka(this);var y=this.g.Z();this.X=y;e:if(Qr(this)){var w=kc(this.g);h="";var H=w.length,Q=Fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gn(this),bn(this);var st="";break e}this.h.i=new d.TextDecoder}for(_=0;_<H;_++)this.h.h=!0,h+=this.h.i.decode(w[_],{stream:!(Q&&_==H-1)});w.length=0,this.h.g+=h,this.C=0,st=this.h.g}else st=this.g.oa();if(this.o=y==200,Ic(this.i,this.u,this.A,this.l,this.R,Oe,y),this.o){if(this.T&&!this.K){e:{if(this.g){var Mt,Ne=this.g;if((Mt=Ne.g?Ne.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(Mt)){var Ut=Mt;break e}}Ut=null}if(y=Ut)$r(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sn(this,y);else{this.o=!1,this.s=3,_e(12),gn(this),bn(this);break t}}if(this.P){y=!0;let Ge;for(;!this.J&&this.C<st.length;)if(Ge=Yr(this,st),Ge==Gs){Oe==4&&(this.s=4,_e(14),y=!1),$r(this.i,this.l,null,"[Incomplete Response]");break}else if(Ge==Kr){this.s=4,_e(15),$r(this.i,this.l,st,"[Invalid Chunk]"),y=!1;break}else $r(this.i,this.l,Ge,null),Sn(this,Ge);if(Qr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Oe!=4||st.length!=0||this.h.h||(this.s=1,_e(16),y=!1),this.o=this.o&&y,!y)$r(this.i,this.l,st,"[Invalid Chunked Response]"),gn(this),bn(this);else if(0<st.length&&!this.W){this.W=!0;var Le=this.j;Le.g==this&&Le.ba&&!Le.M&&(Le.j.info("Great, no buffering proxy detected. Bytes received: "+st.length),ea(Le),Le.M=!0,_e(11))}}else $r(this.i,this.l,st,null),Sn(this,st);Oe==4&&gn(this),this.o&&!this.J&&(Oe==4?Lc(this.j,this):(this.o=!1,ae(this)))}else Ud(this.g),y==400&&0<st.indexOf("Unknown SID")?(this.s=3,_e(12)):(this.s=0,_e(13)),gn(this),bn(this)}}}catch{}finally{}};function Qr(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Yr(h,_){var y=h.C,w=_.indexOf(`
`,y);return w==-1?Gs:(y=Number(_.substring(y,w)),isNaN(y)?Kr:(w+=1,w+y>_.length?Gs:(_=_.slice(w,w+y),h.C=w+y,_)))}_i.prototype.cancel=function(){this.J=!0,gn(this)};function ae(h){h.S=Date.now()+h.I,vl(h,h.I)}function vl(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Hr(b(h.ba,h),_)}function Ka(h){h.B&&(d.clearTimeout(h.B),h.B=null)}_i.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(gi(this.i,this.A),this.L!=2&&(qr(),_e(17)),gn(this),this.s=2,bn(this)):vl(this,this.S-h)};function bn(h){h.j.G==0||h.J||Lc(h.j,h)}function gn(h){Ka(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,Xe(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function Sn(h,_){try{var y=h.j;if(y.G!=0&&(y.g==h||Xr(y.h,h))){if(!h.K&&Xr(y.h,h)&&y.G==3){try{var w=y.Da.g.parse(_)}catch{w=null}if(Array.isArray(w)&&w.length==3){var H=w;if(H[0]==0){t:if(!y.u){if(y.g)if(y.g.F+3e3<h.F)io(y),eo(y);else break t;Nl(y),_e(18)}}else y.za=H[1],0<y.za-y.T&&37500>H[2]&&y.F&&y.v==0&&!y.C&&(y.C=Hr(b(y.Za,y),6e3));if(1>=Cc(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Wi(y,11)}else if((h.K||y.g==h)&&io(y),!q(_))for(H=y.Da.g.parse(_),_=0;_<H.length;_++){let Ut=H[_];if(y.T=Ut[0],Ut=Ut[1],y.G==2)if(Ut[0]=="c"){y.K=Ut[1],y.ia=Ut[2];const Le=Ut[3];Le!=null&&(y.la=Le,y.j.info("VER="+y.la));const Oe=Ut[4];Oe!=null&&(y.Aa=Oe,y.j.info("SVER="+y.Aa));const Zi=Ut[5];Zi!=null&&typeof Zi=="number"&&0<Zi&&(w=1.5*Zi,y.L=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const Ge=h.g;if(Ge){const bi=Ge.g?Ge.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bi){var Q=w.h;Q.g||bi.indexOf("spdy")==-1&&bi.indexOf("quic")==-1&&bi.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(Wr(Q,Q.h),Q.h=null))}if(w.D){const Pl=Ge.g?Ge.g.getResponseHeader("X-HTTP-Session-Id"):null;Pl&&(w.ya=Pl,qt(w.I,w.D,Pl))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-h.F,y.j.info("Handshake RTT: "+y.R+"ms")),w=y;var st=h;if(w.qa=zc(w,w.J?w.ia:null,w.W),st.K){Ln(w.h,st);var Mt=st,Ne=w.L;Ne&&(Mt.I=Ne),Mt.B&&(Ka(Mt),ae(Mt)),w.g=st}else Mc(w);0<y.i.length&&no(y)}else Ut[0]!="stop"&&Ut[0]!="close"||Wi(y,7);else y.G==3&&(Ut[0]=="stop"||Ut[0]=="close"?Ut[0]=="stop"?Wi(y,7):Cl(y):Ut[0]!="noop"&&y.l&&y.l.ta(Ut),y.v=0)}}qr(4)}catch{}}var Pd=class{constructor(h,_){this.g=h,this.map=_}};function El(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Tl(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Cc(h){return h.h?1:h.g?h.g.size:0}function Xr(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function Wr(h,_){h.g?h.g.add(_):h.h=_}function Ln(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}El.prototype.cancel=function(){if(this.i=ln(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function ln(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const y of h.g.values())_=_.concat(y.D);return _}return L(h.i)}function Dc(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],y=h.length,w=0;w<y;w++)_.push(h[w]);return _}_=[],y=0;for(w in h)_[y++]=h[w];return _}function kd(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var y=0;y<h;y++)_.push(y);return _}_=[],y=0;for(const w in h)_[y++]=w;return _}}}function $s(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var y=kd(h),w=Dc(h),H=w.length,Q=0;Q<H;Q++)_.call(void 0,w[Q],y&&y[Q],h)}var Al=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qa(h,_){if(h){h=h.split("&");for(var y=0;y<h.length;y++){var w=h[y].indexOf("="),H=null;if(0<=w){var Q=h[y].substring(0,w);H=h[y].substring(w+1)}else Q=h[y];_(Q,H?decodeURIComponent(H.replace(/\+/g," ")):"")}}}function $i(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof $i){this.h=h.h,Zr(this,h.j),this.o=h.o,this.g=h.g,Ks(this,h.s),this.l=h.l;var _=h.i,y=new yi;y.i=_.i,_.g&&(y.g=new Map(_.g),y.h=_.h),Ya(this,y),this.m=h.m}else h&&(_=String(h).match(Al))?(this.h=!1,Zr(this,_[1]||"",!0),this.o=Jr(_[2]||""),this.g=Jr(_[3]||"",!0),Ks(this,_[4]),this.l=Jr(_[5]||"",!0),Ya(this,_[6]||"",!0),this.m=Jr(_[7]||"")):(this.h=!1,this.i=new yi(null,this.h))}$i.prototype.toString=function(){var h=[],_=this.j;_&&h.push(Bn(_,wl,!0),":");var y=this.g;return(y||_=="file")&&(h.push("//"),(_=this.o)&&h.push(Bn(_,wl,!0),"@"),h.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&h.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&h.push("/"),h.push(Bn(y,y.charAt(0)=="/"?bl:Nc,!0))),(y=this.i.toString())&&h.push("?",y),(y=this.m)&&h.push("#",Bn(y,Md)),h.join("")};function fe(h){return new $i(h)}function Zr(h,_,y){h.j=y?Jr(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Ks(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function Ya(h,_,y){_ instanceof yi?(h.i=_,Sl(h.i,h.h)):(y||(_=Bn(_,xd)),h.i=new yi(_,h.h))}function qt(h,_,y){h.i.set(_,y)}function Qs(h){return qt(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Jr(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Bn(h,_,y){return typeof h=="string"?(h=encodeURI(h).replace(_,Vd),y&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Vd(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var wl=/[#\/\?@]/g,Nc=/[#\?:]/g,bl=/[#\?]/g,xd=/[#\?@]/g,Md=/#/g;function yi(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function zn(h){h.g||(h.g=new Map,h.h=0,h.i&&Qa(h.i,function(_,y){h.add(decodeURIComponent(_.replace(/\+/g," ")),y)}))}n=yi.prototype,n.add=function(h,_){zn(this),this.i=null,h=Yi(this,h);var y=this.g.get(h);return y||this.g.set(h,y=[]),y.push(_),this.h+=1,this};function Xa(h,_){zn(h),_=Yi(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function Ki(h,_){return zn(h),_=Yi(h,_),h.g.has(_)}n.forEach=function(h,_){zn(this),this.g.forEach(function(y,w){y.forEach(function(H){h.call(_,H,w,this)},this)},this)},n.na=function(){zn(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),y=[];for(let w=0;w<_.length;w++){const H=h[w];for(let Q=0;Q<H.length;Q++)y.push(_[w])}return y},n.V=function(h){zn(this);let _=[];if(typeof h=="string")Ki(this,h)&&(_=_.concat(this.g.get(Yi(this,h))));else{h=Array.from(this.g.values());for(let y=0;y<h.length;y++)_=_.concat(h[y])}return _},n.set=function(h,_){return zn(this),this.i=null,h=Yi(this,h),Ki(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Qi(h,_,y){Xa(h,_),0<y.length&&(h.i=null,h.g.set(Yi(h,_),L(y)),h.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var y=0;y<_.length;y++){var w=_[y];const Q=encodeURIComponent(String(w)),st=this.V(w);for(w=0;w<st.length;w++){var H=Q;st[w]!==""&&(H+="="+encodeURIComponent(String(st[w]))),h.push(H)}}return this.i=h.join("&")};function Yi(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Sl(h,_){_&&!h.j&&(zn(h),h.i=null,h.g.forEach(function(y,w){var H=w.toLowerCase();w!=H&&(Xa(this,w),Qi(this,H,y))},h)),h.j=_}function Oc(h,_){const y=new Gr;if(d.Image){const w=new Image;w.onload=I(jn,y,"TestLoadImage: loaded",!0,_,w),w.onerror=I(jn,y,"TestLoadImage: error",!1,_,w),w.onabort=I(jn,y,"TestLoadImage: abort",!1,_,w),w.ontimeout=I(jn,y,"TestLoadImage: timeout",!1,_,w),d.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=h}else _(!1)}function Ys(h,_){const y=new Gr,w=new AbortController,H=setTimeout(()=>{w.abort(),jn(y,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:w.signal}).then(Q=>{clearTimeout(H),Q.ok?jn(y,"TestPingServer: ok",!0,_):jn(y,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(H),jn(y,"TestPingServer: error",!1,_)})}function jn(h,_,y,w,H){try{H&&(H.onload=null,H.onerror=null,H.onabort=null,H.ontimeout=null),w(y)}catch{}}function Xs(){this.g=new on}function vi(h,_,y){const w=y||"";try{$s(h,function(H,Q){let st=H;g(H)&&(st=ml(H)),_.push(w+Q+"="+encodeURIComponent(st))})}catch(H){throw _.push(w+"type="+encodeURIComponent("_badmap")),H}}function ts(h){this.l=h.Ub||null,this.j=h.eb||!1}D(ts,gl),ts.prototype.g=function(){return new Xi(this.l,this.j)},ts.prototype.i=function(h){return function(){return h}}({});function Xi(h,_){Ce.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Xi,Ce),n=Xi.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Ti(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ei(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Ti(this)),this.g&&(this.readyState=3,Ti(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Rl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Ei(this):Ti(this),this.readyState==3&&Rl(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Ei(this))},n.Qa=function(h){this.g&&(this.response=h,Ei(this))},n.ga=function(){this.g&&Ei(this)};function Ei(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Ti(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var y=_.next();!y.done;)y=y.value,h.push(y[0]+": "+y[1]),y=_.next();return h.join(`\r
`)};function Ti(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Il(h){let _="";return ot(h,function(y,w){_+=w,_+=":",_+=y,_+=`\r
`}),_}function Ue(h,_,y){t:{for(w in y){var w=!1;break t}w=!0}w||(y=Il(y),typeof h=="string"?y!=null&&encodeURIComponent(String(y)):qt(h,_,y))}function Qt(h){Ce.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(Qt,Ce);var Wa=/^https?$/i,Ws=["POST","PUT"];n=Qt.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Hs.g(),this.v=this.o?wc(this.o):wc(Hs),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(Q){Pc(this,Q);return}if(h=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var H in w)y.set(H,w[H]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const Q of w.keys())y.set(Q,w.get(Q));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(Q=>Q.toLowerCase()=="content-type"),H=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Ws,_,void 0))||w||H||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,st]of y)this.g.setRequestHeader(Q,st);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zs(this),this.u=!0,this.g.send(h),this.u=!1}catch(Q){Pc(this,Q)}};function Pc(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,Za(h),Ai(h)}function Za(h){h.A||(h.A=!0,xe(h,"complete"),xe(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,xe(this,"complete"),xe(this,"abort"),Ai(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ai(this,!0)),Qt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ja(this):this.bb())},n.bb=function(){Ja(this)};function Ja(h){if(h.h&&typeof c<"u"&&(!h.v[1]||Fn(h)!=4||h.Z()!=2)){if(h.u&&Fn(h)==4)Ac(h.Ea,0,h);else if(xe(h,"readystatechange"),Fn(h)==4){h.h=!1;try{const st=h.Z();t:switch(st){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break t;default:_=!1}var y;if(!(y=_)){var w;if(w=st===0){var H=String(h.D).match(Al)[1]||null;!H&&d.self&&d.self.location&&(H=d.self.location.protocol.slice(0,-1)),w=!Wa.test(H?H.toLowerCase():"")}y=w}if(y)xe(h,"complete"),xe(h,"success");else{h.m=6;try{var Q=2<Fn(h)?h.g.statusText:""}catch{Q=""}h.l=Q+" ["+h.Z()+"]",Za(h)}}finally{Ai(h)}}}}function Ai(h,_){if(h.g){Zs(h);const y=h.g,w=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||xe(h,"ready");try{y.onreadystatechange=w}catch{}}}function Zs(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function Fn(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<Fn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),pi(_)}};function kc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function Ud(h){const _={};h=(h.g&&2<=Fn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<h.length;w++){if(q(h[w]))continue;var y=V(h[w]);const H=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const Q=_[H]||[];_[H]=Q,Q.push(y)}k(_,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Js(h,_,y){return y&&y.internalChannelParams&&y.internalChannelParams[h]||_}function to(h){this.Aa=0,this.i=[],this.j=new Gr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Js("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Js("baseRetryDelayMs",5e3,h),this.cb=Js("retryDelaySeedMs",1e4,h),this.Wa=Js("forwardChannelMaxRetries",2,h),this.wa=Js("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new El(h&&h.concurrentRequestLimit),this.Da=new Xs,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=to.prototype,n.la=8,n.G=1,n.connect=function(h,_,y,w){_e(0),this.W=h,this.H=_||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.I=zc(this,null,this.W),no(this)};function Cl(h){if(Vc(h),h.G==3){var _=h.U++,y=fe(h.I);if(qt(y,"SID",h.K),qt(y,"RID",_),qt(y,"TYPE","terminate"),ta(h,y),_=new _i(h,h.j,_),_.L=2,_.v=Qs(fe(y)),y=!1,d.navigator&&d.navigator.sendBeacon)try{y=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!y&&d.Image&&(new Image().src=_.v,y=!0),y||(_.g=jc(_.j,null),_.g.ea(_.v)),_.F=Date.now(),ae(_)}Bc(h)}function eo(h){h.g&&(ea(h),h.g.cancel(),h.g=null)}function Vc(h){eo(h),h.u&&(d.clearTimeout(h.u),h.u=null),io(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function no(h){if(!Tl(h.h)&&!h.s){h.s=!0;var _=h.Ga;_t||x(),dt||(_t(),dt=!0),Kt.add(_,h),h.B=0}}function Ld(h,_){return Cc(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Hr(b(h.Ga,h,_),Ol(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const H=new _i(this,this.j,h);let Q=this.o;if(this.S&&(Q?(Q=R(Q),N(Q,this.S)):Q=this.S),this.m!==null||this.O||(H.H=Q,Q=null),this.P)t:{for(var _=0,y=0;y<this.i.length;y++){e:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break e}w=void 0}if(w===void 0)break;if(_+=w,4096<_){_=y;break t}if(_===4096||y===this.i.length-1){_=y+1;break t}}_=1e3}else _=1e3;_=xc(this,H,_),y=fe(this.I),qt(y,"RID",h),qt(y,"CVER",22),this.D&&qt(y,"X-HTTP-Session-Id",this.D),ta(this,y),Q&&(this.O?_="headers="+encodeURIComponent(String(Il(Q)))+"&"+_:this.m&&Ue(y,this.m,Q)),Wr(this.h,H),this.Ua&&qt(y,"TYPE","init"),this.P?(qt(y,"$req",_),qt(y,"SID","null"),H.T=!0,ri(H,y,null)):ri(H,y,_),this.G=2}}else this.G==3&&(h?Dl(this,h):this.i.length==0||Tl(this.h)||Dl(this))};function Dl(h,_){var y;_?y=_.l:y=h.U++;const w=fe(h.I);qt(w,"SID",h.K),qt(w,"RID",y),qt(w,"AID",h.T),ta(h,w),h.m&&h.o&&Ue(w,h.m,h.o),y=new _i(h,h.j,y,h.B+1),h.m===null&&(y.H=h.o),_&&(h.i=_.D.concat(h.i)),_=xc(h,y,1e3),y.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Wr(h.h,y),ri(y,w,_)}function ta(h,_){h.H&&ot(h.H,function(y,w){qt(_,w,y)}),h.l&&$s({},function(y,w){qt(_,w,y)})}function xc(h,_,y){y=Math.min(h.i.length,y);var w=h.l?b(h.l.Na,h.l,h):null;t:{var H=h.i;let Q=-1;for(;;){const st=["count="+y];Q==-1?0<y?(Q=H[0].g,st.push("ofs="+Q)):Q=0:st.push("ofs="+Q);let Mt=!0;for(let Ne=0;Ne<y;Ne++){let Ut=H[Ne].g;const Le=H[Ne].map;if(Ut-=Q,0>Ut)Q=Math.max(0,H[Ne].g-100),Mt=!1;else try{vi(Le,st,"req"+Ut+"_")}catch{w&&w(Le)}}if(Mt){w=st.join("&");break t}}}return h=h.i.splice(0,y),_.D=h,w}function Mc(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;_t||x(),dt||(_t(),dt=!0),Kt.add(_,h),h.v=0}}function Nl(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Hr(b(h.Fa,h),Ol(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,Uc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Hr(b(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_e(10),eo(this),Uc(this))};function ea(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function Uc(h){h.g=new _i(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=fe(h.qa);qt(_,"RID","rpc"),qt(_,"SID",h.K),qt(_,"AID",h.T),qt(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&qt(_,"TO",h.ja),qt(_,"TYPE","xmlhttp"),ta(h,_),h.m&&h.o&&Ue(_,h.m,h.o),h.L&&(h.g.I=h.L);var y=h.g;h=h.ia,y.L=1,y.v=Qs(fe(_)),y.m=null,y.P=!0,Gi(y,h)}n.Za=function(){this.C!=null&&(this.C=null,eo(this),Nl(this),_e(19))};function io(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function Lc(h,_){var y=null;if(h.g==_){io(h),ea(h),h.g=null;var w=2}else if(Xr(h.h,_))y=_.D,Ln(h.h,_),w=1;else return;if(h.G!=0){if(_.o)if(w==1){y=_.m?_.m.length:0,_=Date.now()-_.F;var H=h.B;w=Ha(),xe(w,new Sc(w,y)),no(h)}else Mc(h);else if(H=_.s,H==3||H==0&&0<_.X||!(w==1&&Ld(h,_)||w==2&&Nl(h)))switch(y&&0<y.length&&(_=h.h,_.i=_.i.concat(y)),H){case 1:Wi(h,5);break;case 4:Wi(h,10);break;case 3:Wi(h,6);break;default:Wi(h,2)}}}function Ol(h,_){let y=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(y*=2),y*_}function Wi(h,_){if(h.j.info("Error code "+_),_==2){var y=b(h.fb,h),w=h.Xa;const H=!w;w=new $i(w||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Zr(w,"https"),Qs(w),H?Oc(w.toString(),y):Ys(w.toString(),y)}else _e(2);h.G=0,h.l&&h.l.sa(_),Bc(h),Vc(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),_e(2)):(this.j.info("Failed to ping google.com"),_e(1))};function Bc(h){if(h.G=0,h.ka=[],h.l){const _=ln(h.h);(_.length!=0||h.i.length!=0)&&(O(h.ka,_),O(h.ka,h.i),h.h.i.length=0,L(h.i),h.i.length=0),h.l.ra()}}function zc(h,_,y){var w=y instanceof $i?fe(y):new $i(y);if(w.g!="")_&&(w.g=_+"."+w.g),Ks(w,w.s);else{var H=d.location;w=H.protocol,_=_?_+"."+H.hostname:H.hostname,H=+H.port;var Q=new $i(null);w&&Zr(Q,w),_&&(Q.g=_),H&&Ks(Q,H),y&&(Q.l=y),w=Q}return y=h.D,_=h.ya,y&&_&&qt(w,y,_),qt(w,"VER",h.la),ta(h,w),w}function jc(h,_,y){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Qt(new ts({eb:y})):new Qt(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fc(){}n=Fc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ro(){}ro.prototype.g=function(h,_){return new un(h,_)};function un(h,_){Ce.call(this),this.g=new to(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!q(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!q(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new wi(this)}D(un,Ce),un.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},un.prototype.close=function(){Cl(this.g)},un.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var y={};y.__data__=h,h=y}else this.u&&(y={},y.__data__=ml(h),h=y);_.i.push(new Pd(_.Ya++,h)),_.G==3&&no(_)},un.prototype.N=function(){this.g.l=null,delete this.j,Cl(this.g),delete this.g,un.aa.N.call(this)};function qc(h){jr.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){t:{for(const y in _){h=y;break t}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}D(qc,jr);function Hc(){ii.call(this),this.status=1}D(Hc,ii);function wi(h){this.g=h}D(wi,Fc),wi.prototype.ua=function(){xe(this.g,"a")},wi.prototype.ta=function(h){xe(this.g,new qc(h))},wi.prototype.sa=function(h){xe(this.g,new Hc)},wi.prototype.ra=function(){xe(this.g,"b")},ro.prototype.createWebChannel=ro.prototype.g,un.prototype.send=un.prototype.o,un.prototype.open=un.prototype.m,un.prototype.close=un.prototype.close,Nb=function(){return new ro},Db=function(){return Ha()},Cb=Un,fg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},De.NO_ERROR=0,De.TIMEOUT=8,De.HTTP_ERROR=6,of=De,Hi.COMPLETE="complete",Ib=Hi,bc.EventType=mi,mi.OPEN="a",mi.CLOSE="b",mi.ERROR="c",mi.MESSAGE="d",Ce.prototype.listen=Ce.prototype.K,bu=bc,Qt.prototype.listenOnce=Qt.prototype.L,Qt.prototype.getLastError=Qt.prototype.Ka,Qt.prototype.getLastErrorCode=Qt.prototype.Ba,Qt.prototype.getStatus=Qt.prototype.Z,Qt.prototype.getResponseJson=Qt.prototype.Oa,Qt.prototype.getResponseText=Qt.prototype.oa,Qt.prototype.send=Qt.prototype.ea,Qt.prototype.setWithCredentials=Qt.prototype.Ha,Rb=Qt}).apply(typeof Hh<"u"?Hh:typeof self<"u"?self:typeof window<"u"?window:{});const y0="@firebase/firestore",v0="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tn=class{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}};tn.UNAUTHENTICATED=new tn(null),tn.GOOGLE_CREDENTIALS=new tn("google-credentials-uid"),tn.FIRST_PARTY=new tn("first-party-uid"),tn.MOCK_USER=new tn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rl="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=new sc("@firebase/firestore");function ko(){return Na.logLevel}function ct(n,...t){if(Na.logLevel<=Dt.DEBUG){const e=t.map(g_);Na.debug(`Firestore (${rl}): ${n}`,...e)}}function Or(n,...t){if(Na.logLevel<=Dt.ERROR){const e=t.map(g_);Na.error(`Firestore (${rl}): ${n}`,...e)}}function $o(n,...t){if(Na.logLevel<=Dt.WARN){const e=t.map(g_);Na.warn(`Firestore (${rl}): ${n}`,...e)}}function g_(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(n="Unexpected state"){const t=`FIRESTORE (${rl}) INTERNAL ASSERTION FAILED: `+n;throw Or(t),new Error(t)}function Yt(n,t){n||Tt()}function bt(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let ht=class extends xn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ob=class{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}},L2=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(tn.UNAUTHENTICATED))}shutdown(){}};class B2{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class z2{constructor(t){this.t=t,this.currentUser=tn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Yt(this.o===void 0);let r=this.i;const a=p=>this.i!==r?(r=this.i,e(p)):Promise.resolve();let l=new wr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new wr,t.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const p=l;t.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},d=p=>{ct("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(ct("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new wr)}},0),c()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(ct("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Yt(typeof r.accessToken=="string"),new Ob(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Yt(t===null||typeof t=="string"),new tn(t)}}let j2=class{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=tn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}},F2=class{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new j2(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(tn.FIRST_PARTY))}shutdown(){}invalidateToken(){}},E0=class{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}};class q2{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,En(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){Yt(this.o===void 0);const r=l=>{l.error!=null&&ct("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.R;return this.R=l.token,ct("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?e(l.token):Promise.resolve()};this.o=l=>{t.enqueueRetryable(()=>r(l))};const a=l=>{ct("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?a(l):ct("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new E0(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Yt(typeof e.token=="string"),this.R=e.token,new E0(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H2(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const a=H2(40);for(let l=0;l<a.length;++l)r.length<20&&a[l]<e&&(r+=t.charAt(a[l]%62))}return r}}function xt(n,t){return n<t?-1:n>t?1:0}function Ko(n,t,e){return n.length===t.length&&n.every((r,a)=>e(r,t[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0=-62135596800,A0=1e6;let pn=class lf{static now(){return lf.fromMillis(Date.now())}static fromDate(t){return lf.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*A0);return new lf(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ht(tt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ht(tt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<T0)throw new ht(tt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ht(tt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/A0}_compareTo(t){return this.seconds===t.seconds?xt(this.nanoseconds,t.nanoseconds):xt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-T0;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{static fromTimestamp(t){return new At(t)}static min(){return new At(new pn(0,0))}static max(){return new At(new pn(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0="__name__";let kb=class As{constructor(t,e,r){e===void 0?e=0:e>t.length&&Tt(),r===void 0?r=t.length-e:r>t.length-e&&Tt(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return As.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof As?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let a=0;a<r;a++){const l=As.compareSegments(t.get(a),e.get(a));if(l!==0)return l}return Math.sign(t.length-e.length)}static compareSegments(t,e){const r=As.isNumericId(t),a=As.isNumericId(e);return r&&!a?-1:!r&&a?1:r&&a?As.extractNumericId(t).compare(As.extractNumericId(e)):t<e?-1:t>e?1:0}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Ar.fromString(t.substring(4,t.length-2))}},Ee=class uf extends kb{construct(t,e,r){return new uf(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new ht(tt.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(a=>a.length>0))}return new uf(e)}static emptyPath(){return new uf([])}};const G2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let hi=class Vo extends kb{construct(t,e,r){return new Vo(t,e,r)}static isValidIdentifier(t){return G2.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Vo.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===w0}static keyField(){return new Vo([w0])}static fromServerFormat(t){const e=[];let r="",a=0;const l=()=>{if(r.length===0)throw new ht(tt.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let c=!1;for(;a<t.length;){const d=t[a];if(d==="\\"){if(a+1===t.length)throw new ht(tt.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ht(tt.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(r+=d,a++):(l(),a++)}if(l(),c)throw new ht(tt.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Vo(e)}static emptyPath(){return new Vo([])}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Et=class Su{constructor(t){this.path=t}static fromPath(t){return new Su(Ee.fromString(t))}static fromName(t){return new Su(Ee.fromString(t).popFirst(5))}static empty(){return new Su(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Ee.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Ee.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Su(new Ee(t.slice()))}};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=-1;function $2(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,a=At.fromTimestamp(r===1e9?new pn(e+1,0):new pn(e,r));return new Os(a,Et.empty(),t)}function K2(n){return new Os(n.readTime,n.key,Hu)}class Os{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Os(At.min(),Et.empty(),Hu)}static max(){return new Os(At.max(),Et.empty(),Hu)}}function Q2(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=Et.comparator(n.documentKey,t.documentKey),e!==0?e:xt(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class X2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(n){if(n.code!==tt.FAILED_PRECONDITION||n.message!==Y2)throw n;ct("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Tt(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new J((r,a)=>{this.nextCallback=l=>{this.wrapSuccess(t,l).next(r,a)},this.catchCallback=l=>{this.wrapFailure(e,l).next(r,a)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof J?e:J.resolve(e)}catch(e){return J.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):J.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):J.reject(e)}static resolve(t){return new J((e,r)=>{e(t)})}static reject(t){return new J((e,r)=>{r(t)})}static waitFor(t){return new J((e,r)=>{let a=0,l=0,c=!1;t.forEach(d=>{++a,d.next(()=>{++l,c&&l===a&&e()},p=>r(p))}),c=!0,l===a&&e()})}static or(t){let e=J.resolve(!1);for(const r of t)e=e.next(a=>a?J.resolve(a):r());return e}static forEach(t,e){const r=[];return t.forEach((a,l)=>{r.push(e.call(this,a,l))}),this.waitFor(r)}static mapArray(t,e){return new J((r,a)=>{const l=t.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;e(t[g]).next(E=>{c[g]=E,++d,d===l&&r(c)},E=>a(E))}})}static doWhile(t,e){return new J((r,a)=>{const l=()=>{t()===!0?e().next(()=>{l()},a):r()};l()})}}function W2(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function al(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.oe(r),this._e=r=>e.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}rd.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=-1;function sd(n){return n==null}function Cf(n){return n===0&&1/n==-1/0}function Z2(n){return typeof n=="number"&&Number.isInteger(n)&&!Cf(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb="";function J2(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=b0(t)),t=tV(n.get(e),t);return b0(t)}function tV(n,t){let e=t;const r=n.length;for(let a=0;a<r;a++){const l=n.charAt(a);switch(l){case"\0":e+="";break;case Vb:e+="";break;default:e+=l}}return e}function b0(n){return n+Vb+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function zs(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function xb(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ie=class dg{constructor(t,e){this.comparator=t,this.root=e||Ns.EMPTY}insert(t,e){return new dg(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ns.BLACK,null,null))}remove(t){return new dg(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ns.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const a=this.comparator(t,r.key);if(a===0)return e+r.left.size;a<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Gh(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Gh(this.root,t,this.comparator,!1)}getReverseIterator(){return new Gh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Gh(this.root,t,this.comparator,!0)}},Gh=class{constructor(t,e,r,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!t.isEmpty();)if(l=e?r(t.key,e):1,e&&a&&(l*=-1),l<0)t=this.isReverse?t.left:t.right;else{if(l===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}},Ns=class pr{constructor(t,e,r,a,l){this.key=t,this.value=e,this.color=r??pr.RED,this.left=a??pr.EMPTY,this.right=l??pr.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,a,l){return new pr(t??this.key,e??this.value,r??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let a=this;const l=r(t,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(t,e,r),null):l===0?a.copy(null,e,null,null,null):a.copy(null,null,null,null,a.right.insert(t,e,r)),a.fixUp()}removeMin(){if(this.left.isEmpty())return pr.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,a=this;if(e(t,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(t,e),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),e(t,a.key)===0){if(a.right.isEmpty())return pr.EMPTY;r=a.right.min(),a=a.copy(r.key,r.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(t,e))}return a.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,pr.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,pr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Tt();const t=this.left.check();if(t!==this.right.check())throw Tt();return t+(this.isRed()?0:1)}};Ns.EMPTY=null,Ns.RED=!0,Ns.BLACK=!1;Ns.EMPTY=new class{constructor(){this.size=0}get key(){throw Tt()}get value(){throw Tt()}get color(){throw Tt()}get left(){throw Tt()}get right(){throw Tt()}copy(t,e,r,a,l){return this}insert(t,e,r){return new Ns(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rn=class pg{constructor(t){this.comparator=t,this.data=new Ie(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const a=r.getNext();if(this.comparator(a.key,t[1])>=0)return;e(a.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new R0(this.data.getIterator())}getIteratorFrom(t){return new R0(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof pg)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const a=e.getNext().key,l=r.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new pg(this.comparator);return e.data=t,e}},R0=class{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pi=class mg{constructor(t){this.fields=t,t.sort(hi.comparator)}static empty(){return new mg([])}unionWith(t){let e=new rn(hi.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new mg(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ko(this.fields,t.fields,(e,r)=>e.isEqual(r))}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mb=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wn=class gg{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Mb("Invalid base64 string: "+l):l}}(t);return new gg(e)}static fromUint8Array(t){const e=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(t);return new gg(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let a=0;a<e.length;a++)r[a]=e.charCodeAt(a);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return xt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}};wn.EMPTY_BYTE_STRING=new wn("");const eV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ps(n){if(Yt(!!n),typeof n=="string"){let t=0;const e=eV.exec(n);if(Yt(!!e),e[1]){let a=e[1];a=(a+"000000000").substr(0,9),t=Number(a)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ve(n.seconds),nanos:ve(n.nanos)}}function ve(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ks(n){return typeof n=="string"?wn.fromBase64String(n):wn.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub="server_timestamp",Lb="__type__",Bb="__previous_value__",zb="__local_write_time__";function y_(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Lb])===null||e===void 0?void 0:e.stringValue)===Ub}function ad(n){const t=n.mapValue.fields[Bb];return y_(t)?ad(t):t}function Gu(n){const t=Ps(n.mapValue.fields[zb].timestampValue);return new pn(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nV=class{constructor(t,e,r,a,l,c,d,p,g){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g}};const Df="(default)";let jb=class _g{constructor(t,e){this.projectId=t,this.database=e||Df}static empty(){return new _g("","")}get isDefaultDatabase(){return this.database===Df}isEqual(t){return t instanceof _g&&t.projectId===this.projectId&&t.database===this.database}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb="__type__",iV="__max__",$h={mapValue:{}},qb="__vector__",Nf="value";function Vs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?y_(n)?4:sV(n)?9007199254740991:rV(n)?10:11:Tt()}function Bi(n,t){if(n===t)return!0;const e=Vs(n);if(e!==Vs(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Gu(n).isEqual(Gu(t));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Ps(a.timestampValue),d=Ps(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(a,l){return ks(a.bytesValue).isEqual(ks(l.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(a,l){return ve(a.geoPointValue.latitude)===ve(l.geoPointValue.latitude)&&ve(a.geoPointValue.longitude)===ve(l.geoPointValue.longitude)}(n,t);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return ve(a.integerValue)===ve(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=ve(a.doubleValue),d=ve(l.doubleValue);return c===d?Cf(c)===Cf(d):isNaN(c)&&isNaN(d)}return!1}(n,t);case 9:return Ko(n.arrayValue.values||[],t.arrayValue.values||[],Bi);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(S0(c)!==S0(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!Bi(c[p],d[p])))return!1;return!0}(n,t);default:return Tt()}}function $u(n,t){return(n.values||[]).find(e=>Bi(e,t))!==void 0}function Qo(n,t){if(n===t)return 0;const e=Vs(n),r=Vs(t);if(e!==r)return xt(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return xt(n.booleanValue,t.booleanValue);case 2:return function(l,c){const d=ve(l.integerValue||l.doubleValue),p=ve(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,t);case 3:return I0(n.timestampValue,t.timestampValue);case 4:return I0(Gu(n),Gu(t));case 5:return xt(n.stringValue,t.stringValue);case 6:return function(l,c){const d=ks(l),p=ks(c);return d.compareTo(p)}(n.bytesValue,t.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const E=xt(d[g],p[g]);if(E!==0)return E}return xt(d.length,p.length)}(n.referenceValue,t.referenceValue);case 8:return function(l,c){const d=xt(ve(l.latitude),ve(c.latitude));return d!==0?d:xt(ve(l.longitude),ve(c.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return C0(n.arrayValue,t.arrayValue);case 10:return function(l,c){var d,p,g,E;const T=l.fields||{},b=c.fields||{},I=(d=T[Nf])===null||d===void 0?void 0:d.arrayValue,D=(p=b[Nf])===null||p===void 0?void 0:p.arrayValue,L=xt(((g=I==null?void 0:I.values)===null||g===void 0?void 0:g.length)||0,((E=D==null?void 0:D.values)===null||E===void 0?void 0:E.length)||0);return L!==0?L:C0(I,D)}(n.mapValue,t.mapValue);case 11:return function(l,c){if(l===$h.mapValue&&c===$h.mapValue)return 0;if(l===$h.mapValue)return 1;if(c===$h.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},E=Object.keys(g);p.sort(),E.sort();for(let T=0;T<p.length&&T<E.length;++T){const b=xt(p[T],E[T]);if(b!==0)return b;const I=Qo(d[p[T]],g[E[T]]);if(I!==0)return I}return xt(p.length,E.length)}(n.mapValue,t.mapValue);default:throw Tt()}}function I0(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return xt(n,t);const e=Ps(n),r=Ps(t),a=xt(e.seconds,r.seconds);return a!==0?a:xt(e.nanos,r.nanos)}function C0(n,t){const e=n.values||[],r=t.values||[];for(let a=0;a<e.length&&a<r.length;++a){const l=Qo(e[a],r[a]);if(l)return l}return xt(e.length,r.length)}function Yo(n){return yg(n)}function yg(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Ps(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return ks(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return Et.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",a=!0;for(const l of e.values||[])a?a=!1:r+=",",r+=yg(l);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let a="{",l=!0;for(const c of r)l?l=!1:a+=",",a+=`${c}:${yg(e.fields[c])}`;return a+"}"}(n.mapValue):Tt()}function cf(n){switch(Vs(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ad(n);return t?16+cf(t):16;case 5:return 2*n.stringValue.length;case 6:return ks(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((a,l)=>a+cf(l),0)}(n.arrayValue);case 10:case 11:return function(r){let a=0;return zs(r.fields,(l,c)=>{a+=l.length+cf(c)}),a}(n.mapValue);default:throw Tt()}}function D0(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function vg(n){return!!n&&"integerValue"in n}function v_(n){return!!n&&"arrayValue"in n}function N0(n){return!!n&&"nullValue"in n}function O0(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function hf(n){return!!n&&"mapValue"in n}function rV(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Fb])===null||e===void 0?void 0:e.stringValue)===qb}function Ou(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return zs(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Ou(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ou(n.arrayValue.values[e]);return t}return Object.assign({},n)}function sV(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===iV}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ui=class Eg{constructor(t){this.value=t}static empty(){return new Eg({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!hf(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ou(e)}setAll(t){let e=hi.emptyPath(),r={},a=[];t.forEach((c,d)=>{if(!e.isImmediateParentOf(d)){const p=this.getFieldsMap(e);this.applyChanges(p,r,a),r={},a=[],e=d.popLast()}c?r[d.lastSegment()]=Ou(c):a.push(d.lastSegment())});const l=this.getFieldsMap(e);this.applyChanges(l,r,a)}delete(t){const e=this.field(t.popLast());hf(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Bi(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let a=e.mapValue.fields[t.get(r)];hf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=a),e=a}return e.mapValue.fields}applyChanges(t,e,r){zs(e,(a,l)=>t[a]=l);for(const a of r)delete t[a]}clone(){return new Eg(Ou(this.value))}};function Hb(n){const t=[];return zs(n.fields,(e,r)=>{const a=new hi([e]);if(hf(r)){const l=Hb(r.mapValue).fields;if(l.length===0)t.push(a);else for(const c of l)t.push(a.child(c))}else t.push(a)}),new Pi(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(t,e,r,a,l,c,d){this.key=t,this.documentType=e,this.version=r,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(t){return new en(t,0,At.min(),At.min(),At.min(),ui.empty(),0)}static newFoundDocument(t,e,r,a){return new en(t,1,e,At.min(),r,a,0)}static newNoDocument(t,e){return new en(t,2,e,At.min(),At.min(),ui.empty(),0)}static newUnknownDocument(t,e){return new en(t,3,e,At.min(),At.min(),ui.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(At.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ui.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ui.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=At.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof en&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new en(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(t,e){this.position=t,this.inclusive=e}}function P0(n,t,e){let r=0;for(let a=0;a<n.position.length;a++){const l=t[a],c=n.position[a];if(l.field.isKeyField()?r=Et.comparator(Et.fromName(c.referenceValue),e.key):r=Qo(c,e.data.field(l.field)),l.dir==="desc"&&(r*=-1),r!==0)break}return r}function k0(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Bi(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(t,e="asc"){this.field=t,this.dir=e}}function aV(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{}class Re extends Gb{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new lV(t,e,r):e==="array-contains"?new hV(t,r):e==="in"?new fV(t,r):e==="not-in"?new dV(t,r):e==="array-contains-any"?new pV(t,r):new Re(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new uV(t,r):new cV(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Qo(e,this.value)):e!==null&&Vs(this.value)===Vs(e)&&this.matchesComparison(Qo(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Tt()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class di extends Gb{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new di(t,e)}matches(t){return $b(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function $b(n){return n.op==="and"}function Kb(n){return oV(n)&&$b(n)}function oV(n){for(const t of n.filters)if(t instanceof di)return!1;return!0}function Tg(n){if(n instanceof Re)return n.field.canonicalString()+n.op.toString()+Yo(n.value);if(Kb(n))return n.filters.map(t=>Tg(t)).join(",");{const t=n.filters.map(e=>Tg(e)).join(",");return`${n.op}(${t})`}}function Qb(n,t){return n instanceof Re?function(r,a){return a instanceof Re&&r.op===a.op&&r.field.isEqual(a.field)&&Bi(r.value,a.value)}(n,t):n instanceof di?function(r,a){return a instanceof di&&r.op===a.op&&r.filters.length===a.filters.length?r.filters.reduce((l,c,d)=>l&&Qb(c,a.filters[d]),!0):!1}(n,t):void Tt()}function Yb(n){return n instanceof Re?function(e){return`${e.field.canonicalString()} ${e.op} ${Yo(e.value)}`}(n):n instanceof di?function(e){return e.op.toString()+" {"+e.getFilters().map(Yb).join(" ,")+"}"}(n):"Filter"}class lV extends Re{constructor(t,e,r){super(t,e,r),this.key=Et.fromName(r.referenceValue)}matches(t){const e=Et.comparator(t.key,this.key);return this.matchesComparison(e)}}class uV extends Re{constructor(t,e){super(t,"in",e),this.keys=Xb("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class cV extends Re{constructor(t,e){super(t,"not-in",e),this.keys=Xb("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Xb(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>Et.fromName(r.referenceValue))}class hV extends Re{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return v_(e)&&$u(e.arrayValue,this.value)}}class fV extends Re{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&$u(this.value.arrayValue,e)}}class dV extends Re{constructor(t,e){super(t,"not-in",e)}matches(t){if($u(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!$u(this.value.arrayValue,e)}}class pV extends Re{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!v_(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>$u(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mV{constructor(t,e=null,r=[],a=[],l=null,c=null,d=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.le=null}}function V0(n,t=null,e=[],r=[],a=null,l=null,c=null){return new mV(n,t,e,r,a,l,c)}function E_(n){const t=bt(n);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Tg(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(l){return l.field.canonicalString()+l.dir}(r)).join(","),sd(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Yo(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Yo(r)).join(",")),t.le=e}return t.le}function T_(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!aV(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Qb(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!k0(n.startAt,t.startAt)&&k0(n.endAt,t.endAt)}function Ag(n){return Et.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cc=class{constructor(t,e=null,r=[],a=[],l=null,c="F",d=null,p=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}};function gV(n,t,e,r,a,l,c,d){return new cc(n,t,e,r,a,l,c,d)}function od(n){return new cc(n)}function x0(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Wb(n){return n.collectionGroup!==null}function Pu(n){const t=bt(n);if(t.he===null){t.he=[];const e=new Set;for(const l of t.explicitOrderBy)t.he.push(l),e.add(l.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new rn(hi.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(t).forEach(l=>{e.has(l.canonicalString())||l.isKeyField()||t.he.push(new Pf(l,r))}),e.has(hi.keyField().canonicalString())||t.he.push(new Pf(hi.keyField(),r))}return t.he}function Mi(n){const t=bt(n);return t.Pe||(t.Pe=_V(t,Pu(n))),t.Pe}function _V(n,t){if(n.limitType==="F")return V0(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new Pf(a.field,l)});const e=n.endAt?new Of(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Of(n.startAt.position,n.startAt.inclusive):null;return V0(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function wg(n,t){const e=n.filters.concat([t]);return new cc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function bg(n,t,e){return new cc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ld(n,t){return T_(Mi(n),Mi(t))&&n.limitType===t.limitType}function Zb(n){return`${E_(Mi(n))}|lt:${n.limitType}`}function xo(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(a=>Yb(a)).join(", ")}]`),sd(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(a=>Yo(a)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(a=>Yo(a)).join(",")),`Target(${r})`}(Mi(n))}; limitType=${n.limitType})`}function ud(n,t){return t.isFoundDocument()&&function(r,a){const l=a.key.path;return r.collectionGroup!==null?a.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(l):Et.isDocumentKey(r.path)?r.path.isEqual(l):r.path.isImmediateParentOf(l)}(n,t)&&function(r,a){for(const l of Pu(r))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(n,t)&&function(r,a){for(const l of r.filters)if(!l.matches(a))return!1;return!0}(n,t)&&function(r,a){return!(r.startAt&&!function(c,d,p){const g=P0(c,d,p);return c.inclusive?g<=0:g<0}(r.startAt,Pu(r),a)||r.endAt&&!function(c,d,p){const g=P0(c,d,p);return c.inclusive?g>=0:g>0}(r.endAt,Pu(r),a))}(n,t)}function yV(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Jb(n){return(t,e)=>{let r=!1;for(const a of Pu(n)){const l=vV(a,t,e);if(l!==0)return l;r=r||a.field.isKeyField()}return 0}}function vV(n,t,e){const r=n.field.isKeyField()?Et.comparator(t.key,e.key):function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?Qo(p,g):Tt()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Tt()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[a,l]of r)if(this.equalsFn(a,t))return l}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),a=this.inner[r];if(a===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],t))return void(a[l]=[t,e]);a.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let a=0;a<r.length;a++)if(this.equalsFn(r[a][0],t))return r.length===1?delete this.inner[e]:r.splice(a,1),this.innerSize--,!0;return!1}forEach(t){zs(this.inner,(e,r)=>{for(const[a,l]of r)t(a,l)})}isEmpty(){return xb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EV=new Ie(Et.comparator);function Pr(){return EV}const tS=new Ie(Et.comparator);function Ru(...n){let t=tS;for(const e of n)t=t.insert(e.key,e);return t}function eS(n){let t=tS;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function wa(){return ku()}function nS(){return ku()}function ku(){return new Ua(n=>n.toString(),(n,t)=>n.isEqual(t))}const TV=new Ie(Et.comparator),AV=new rn(Et.comparator);function kt(...n){let t=AV;for(const e of n)t=t.add(e);return t}const wV=new rn(xt);function bV(){return wV}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cf(t)?"-0":t}}function iS(n){return{integerValue:""+n}}function SV(n,t){return Z2(t)?iS(t):A_(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cd=class{constructor(){this._=void 0}};function RV(n,t,e){return n instanceof Ku?function(a,l){const c={fields:{[Lb]:{stringValue:Ub},[zb]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&y_(l)&&(l=ad(l)),l&&(c.fields[Bb]=l),{mapValue:c}}(e,t):n instanceof Xo?sS(n,t):n instanceof Qu?aS(n,t):function(a,l){const c=rS(a,l),d=M0(c)+M0(a.Ie);return vg(c)&&vg(a.Ie)?iS(d):A_(a.serializer,d)}(n,t)}function IV(n,t,e){return n instanceof Xo?sS(n,t):n instanceof Qu?aS(n,t):e}function rS(n,t){return n instanceof kf?function(r){return vg(r)||function(l){return!!l&&"doubleValue"in l}(r)}(t)?t:{integerValue:0}:null}let Ku=class extends cd{},Xo=class extends cd{constructor(t){super(),this.elements=t}};function sS(n,t){const e=oS(t);for(const r of n.elements)e.some(a=>Bi(a,r))||e.push(r);return{arrayValue:{values:e}}}let Qu=class extends cd{constructor(t){super(),this.elements=t}};function aS(n,t){let e=oS(t);for(const r of n.elements)e=e.filter(a=>!Bi(a,r));return{arrayValue:{values:e}}}let kf=class extends cd{constructor(t,e){super(),this.serializer=t,this.Ie=e}};function M0(n){return ve(n.integerValue||n.doubleValue)}function oS(n){return v_(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(t,e){this.field=t,this.transform=e}}function CV(n,t){return n.field.isEqual(t.field)&&function(r,a){return r instanceof Xo&&a instanceof Xo||r instanceof Qu&&a instanceof Qu?Ko(r.elements,a.elements,Bi):r instanceof kf&&a instanceof kf?Bi(r.Ie,a.Ie):r instanceof Ku&&a instanceof Ku}(n.transform,t.transform)}class DV{constructor(t,e){this.version=t,this.transformResults=e}}let qo=class ff{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ff}static exists(t){return new ff(void 0,t)}static updateTime(t){return new ff(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}};function df(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}let hd=class{};function uS(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new hS(n.key,qo.none()):new hc(n.key,n.data,qo.none());{const e=n.data,r=ui.empty();let a=new rn(hi.comparator);for(let l of t.fields)if(!a.has(l)){let c=e.field(l);c===null&&l.length>1&&(l=l.popLast(),c=e.field(l)),c===null?r.delete(l):r.set(l,c),a=a.add(l)}return new js(n.key,r,new Pi(a.toArray()),qo.none())}}function NV(n,t,e){n instanceof hc?function(a,l,c){const d=a.value.clone(),p=L0(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,t,e):n instanceof js?function(a,l,c){if(!df(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=L0(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(cS(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(n,t,e):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,t,e)}function Vu(n,t,e,r){return n instanceof hc?function(l,c,d,p){if(!df(l.precondition,c))return d;const g=l.value.clone(),E=B0(l.fieldTransforms,p,c);return g.setAll(E),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(n,t,e,r):n instanceof js?function(l,c,d,p){if(!df(l.precondition,c))return d;const g=B0(l.fieldTransforms,p,c),E=c.data;return E.setAll(cS(l)),E.setAll(g),c.convertToFoundDocument(c.version,E).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,t,e,r):function(l,c,d){return df(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(n,t,e)}function OV(n,t){let e=null;for(const r of n.fieldTransforms){const a=t.data.field(r.field),l=rS(r.transform,a||null);l!=null&&(e===null&&(e=ui.empty()),e.set(r.field,l))}return e||null}function U0(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,a){return r===void 0&&a===void 0||!(!r||!a)&&Ko(r,a,(l,c)=>CV(l,c))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}let hc=class extends hd{constructor(t,e,r,a=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}},js=class extends hd{constructor(t,e,r,a,l=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}};function cS(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function L0(n,t,e){const r=new Map;Yt(n.length===e.length);for(let a=0;a<e.length;a++){const l=n[a],c=l.transform,d=t.data.field(l.field);r.set(l.field,IV(c,d,e[a]))}return r}function B0(n,t,e){const r=new Map;for(const a of n){const l=a.transform,c=e.data.field(a.field);r.set(a.field,RV(l,c,t))}return r}let hS=class extends hd{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},PV=class extends hd{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kV{constructor(t,e,r,a){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=a}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(t.key)&&NV(l,t,r[a])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Vu(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Vu(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=nS();return this.mutations.forEach(a=>{const l=t.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=e.has(a.key)?null:d;const p=uS(c,d);p!==null&&r.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(At.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),kt())}isEqual(t){return this.batchId===t.batchId&&Ko(this.mutations,t.mutations,(e,r)=>U0(e,r))&&Ko(this.baseMutations,t.baseMutations,(e,r)=>U0(e,r))}}class w_{constructor(t,e,r,a){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=a}static from(t,e,r){Yt(t.mutations.length===r.length);let a=function(){return TV}();const l=t.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,r[c].version);return new w_(t,e,r,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VV{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xV{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se,Bt;function MV(n){switch(n){case tt.OK:return Tt();case tt.CANCELLED:case tt.UNKNOWN:case tt.DEADLINE_EXCEEDED:case tt.RESOURCE_EXHAUSTED:case tt.INTERNAL:case tt.UNAVAILABLE:case tt.UNAUTHENTICATED:return!1;case tt.INVALID_ARGUMENT:case tt.NOT_FOUND:case tt.ALREADY_EXISTS:case tt.PERMISSION_DENIED:case tt.FAILED_PRECONDITION:case tt.ABORTED:case tt.OUT_OF_RANGE:case tt.UNIMPLEMENTED:case tt.DATA_LOSS:return!0;default:return Tt()}}function fS(n){if(n===void 0)return Or("GRPC error has no .code"),tt.UNKNOWN;switch(n){case Se.OK:return tt.OK;case Se.CANCELLED:return tt.CANCELLED;case Se.UNKNOWN:return tt.UNKNOWN;case Se.DEADLINE_EXCEEDED:return tt.DEADLINE_EXCEEDED;case Se.RESOURCE_EXHAUSTED:return tt.RESOURCE_EXHAUSTED;case Se.INTERNAL:return tt.INTERNAL;case Se.UNAVAILABLE:return tt.UNAVAILABLE;case Se.UNAUTHENTICATED:return tt.UNAUTHENTICATED;case Se.INVALID_ARGUMENT:return tt.INVALID_ARGUMENT;case Se.NOT_FOUND:return tt.NOT_FOUND;case Se.ALREADY_EXISTS:return tt.ALREADY_EXISTS;case Se.PERMISSION_DENIED:return tt.PERMISSION_DENIED;case Se.FAILED_PRECONDITION:return tt.FAILED_PRECONDITION;case Se.ABORTED:return tt.ABORTED;case Se.OUT_OF_RANGE:return tt.OUT_OF_RANGE;case Se.UNIMPLEMENTED:return tt.UNIMPLEMENTED;case Se.DATA_LOSS:return tt.DATA_LOSS;default:return Tt()}}(Bt=Se||(Se={}))[Bt.OK=0]="OK",Bt[Bt.CANCELLED=1]="CANCELLED",Bt[Bt.UNKNOWN=2]="UNKNOWN",Bt[Bt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Bt[Bt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Bt[Bt.NOT_FOUND=5]="NOT_FOUND",Bt[Bt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Bt[Bt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Bt[Bt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Bt[Bt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Bt[Bt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Bt[Bt.ABORTED=10]="ABORTED",Bt[Bt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Bt[Bt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Bt[Bt.INTERNAL=13]="INTERNAL",Bt[Bt.UNAVAILABLE=14]="UNAVAILABLE",Bt[Bt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UV(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LV=new Ar([4294967295,4294967295],0);function z0(n){const t=UV().encode(n),e=new Sb;return e.update(t),new Uint8Array(e.digest())}function j0(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),a=t.getUint32(8,!0),l=t.getUint32(12,!0);return[new Ar([e,r],0),new Ar([a,l],0)]}class b_{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Iu(`Invalid padding: ${e}`);if(r<0)throw new Iu(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Iu(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Iu(`Invalid padding when bitmap length is 0: ${e}`);this.Ee=8*t.length-e,this.de=Ar.fromNumber(this.Ee)}Ae(t,e,r){let a=t.add(e.multiply(Ar.fromNumber(r)));return a.compare(LV)===1&&(a=new Ar([a.getBits(0),a.getBits(1)],0)),a.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const e=z0(t),[r,a]=j0(e);for(let l=0;l<this.hashCount;l++){const c=this.Ae(r,a,l);if(!this.Re(c))return!1}return!0}static create(t,e,r){const a=t%8==0?0:8-t%8,l=new Uint8Array(Math.ceil(t/8)),c=new b_(l,a,e);return r.forEach(d=>c.insert(d)),c}insert(t){if(this.Ee===0)return;const e=z0(t),[r,a]=j0(e);for(let l=0;l<this.hashCount;l++){const c=this.Ae(r,a,l);this.Ve(c)}}Ve(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Iu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(t,e,r,a,l){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const a=new Map;return a.set(t,fc.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new fd(At.min(),a,new Ie(xt),Pr(),kt())}}class fc{constructor(t,e,r,a,l){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new fc(r,e,kt(),kt(),kt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t,e,r,a){this.me=t,this.removedTargetIds=e,this.key=r,this.fe=a}}class dS{constructor(t,e){this.targetId=t,this.ge=e}}class pS{constructor(t,e,r=wn.EMPTY_BYTE_STRING,a=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=a}}class F0{constructor(){this.pe=0,this.ye=q0(),this.we=wn.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.we=t)}Fe(){let t=kt(),e=kt(),r=kt();return this.ye.forEach((a,l)=>{switch(l){case 0:t=t.add(a);break;case 2:e=e.add(a);break;case 1:r=r.add(a);break;default:Tt()}}),new fc(this.we,this.be,t,e,r)}Me(){this.Se=!1,this.ye=q0()}xe(t,e){this.Se=!0,this.ye=this.ye.insert(t,e)}Oe(t){this.Se=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,Yt(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class BV{constructor(t){this.ke=t,this.qe=new Map,this.Qe=Pr(),this.$e=Kh(),this.Ke=Kh(),this.Ue=new Ie(xt)}We(t){for(const e of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(e,t.fe):this.ze(e,t.key,t.fe);for(const e of t.removedTargetIds)this.ze(e,t.key,t.fe)}je(t){this.forEachTarget(t,e=>{const r=this.He(e);switch(t.state){case 0:this.Je(e)&&r.Ce(t.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(t.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(e);break;case 3:this.Je(e)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),r.Ce(t.resumeToken));break;default:Tt()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qe.forEach((r,a)=>{this.Je(a)&&e(a)})}Ze(t){const e=t.targetId,r=t.ge.count,a=this.Xe(e);if(a){const l=a.target;if(Ag(l))if(r===0){const c=new Et(l.path);this.ze(e,c,en.newNoDocument(c,At.min()))}else Yt(r===1);else{const c=this.et(e);if(c!==r){const d=this.tt(t),p=d?this.nt(d,t,c):1;if(p!==0){this.Ye(e);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(e,g)}}}}}tt(t){const e=t.ge.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:a=0},hashCount:l=0}=e;let c,d;try{c=ks(r).toUint8Array()}catch(p){if(p instanceof Mb)return $o("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new b_(c,a,l)}catch(p){return $o(p instanceof Iu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Ee===0?null:d}nt(t,e,r){return e.ge.count===r-this.st(t,e.targetId)?0:2}st(t,e){const r=this.ke.getRemoteKeysForTarget(e);let a=0;return r.forEach(l=>{const c=this.ke.it(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;t.mightContain(d)||(this.ze(e,l,null),a++)}),a}ot(t){const e=new Map;this.qe.forEach((l,c)=>{const d=this.Xe(c);if(d){if(l.current&&Ag(d.target)){const p=new Et(d.target.path);this._t(p).has(c)||this.ut(c,p)||this.ze(c,p,en.newNoDocument(p,t))}l.ve&&(e.set(c,l.Fe()),l.Me())}});let r=kt();this.Ke.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const g=this.Xe(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(r=r.add(l))}),this.Qe.forEach((l,c)=>c.setReadTime(t));const a=new fd(t,e,this.Ue,this.Qe,r);return this.Qe=Pr(),this.$e=Kh(),this.Ke=Kh(),this.Ue=new Ie(xt),a}Ge(t,e){if(!this.Je(t))return;const r=this.ut(t,e.key)?2:0;this.He(t).xe(e.key,r),this.Qe=this.Qe.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t)),this.Ke=this.Ke.insert(e.key,this.ct(e.key).add(t))}ze(t,e,r){if(!this.Je(t))return;const a=this.He(t);this.ut(t,e)?a.xe(e,1):a.Oe(e),this.Ke=this.Ke.insert(e,this.ct(e).delete(t)),this.Ke=this.Ke.insert(e,this.ct(e).add(t)),r&&(this.Qe=this.Qe.insert(e,r))}removeTarget(t){this.qe.delete(t)}et(t){const e=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let e=this.qe.get(t);return e||(e=new F0,this.qe.set(t,e)),e}ct(t){let e=this.Ke.get(t);return e||(e=new rn(xt),this.Ke=this.Ke.insert(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new rn(xt),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||ct("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.qe.get(t);return e&&e.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new F0),this.ke.getRemoteKeysForTarget(t).forEach(e=>{this.ze(t,e,null)})}ut(t,e){return this.ke.getRemoteKeysForTarget(t).has(e)}}function Kh(){return new Ie(Et.comparator)}function q0(){return new Ie(Et.comparator)}const zV={asc:"ASCENDING",desc:"DESCENDING"},jV={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},FV={and:"AND",or:"OR"};let qV=class{constructor(t,e){this.databaseId=t,this.useProto3Json=e}};function Sg(n,t){return n.useProto3Json||sd(t)?t:{value:t}}function Vf(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function mS(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function HV(n,t){return Vf(n,t.toTimestamp())}function Ui(n){return Yt(!!n),At.fromTimestamp(function(e){const r=Ps(e);return new pn(r.seconds,r.nanos)}(n))}function S_(n,t){return Rg(n,t).canonicalString()}function Rg(n,t){const e=function(a){return new Ee(["projects",a.projectId,"databases",a.database])}(n).child("documents");return t===void 0?e:e.child(t)}function gS(n){const t=Ee.fromString(n);return Yt(TS(t)),t}function Ig(n,t){return S_(n.databaseId,t.path)}function $m(n,t){const e=gS(t);if(e.get(1)!==n.databaseId.projectId)throw new ht(tt.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new ht(tt.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new Et(yS(e))}function _S(n,t){return S_(n.databaseId,t)}function GV(n){const t=gS(n);return t.length===4?Ee.emptyPath():yS(t)}function Cg(n){return new Ee(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function yS(n){return Yt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function H0(n,t,e){return{name:Ig(n,t),fields:e.value.mapValue.fields}}function $V(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Tt()}(t.targetChange.targetChangeType||"NO_CHANGE"),a=t.targetChange.targetIds||[],l=function(g,E){return g.useProto3Json?(Yt(E===void 0||typeof E=="string"),wn.fromBase64String(E||"")):(Yt(E===void 0||E instanceof Buffer||E instanceof Uint8Array),wn.fromUint8Array(E||new Uint8Array))}(n,t.targetChange.resumeToken),c=t.targetChange.cause,d=c&&function(g){const E=g.code===void 0?tt.UNKNOWN:fS(g.code);return new ht(E,g.message||"")}(c);e=new pS(r,a,l,d||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const a=$m(n,r.document.name),l=Ui(r.document.updateTime),c=r.document.createTime?Ui(r.document.createTime):At.min(),d=new ui({mapValue:{fields:r.document.fields}}),p=en.newFoundDocument(a,l,c,d),g=r.targetIds||[],E=r.removedTargetIds||[];e=new pf(g,E,p.key,p)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const a=$m(n,r.document),l=r.readTime?Ui(r.readTime):At.min(),c=en.newNoDocument(a,l),d=r.removedTargetIds||[];e=new pf([],d,c.key,c)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const a=$m(n,r.document),l=r.removedTargetIds||[];e=new pf([],l,a,null)}else{if(!("filter"in t))return Tt();{t.filter;const r=t.filter;r.targetId;const{count:a=0,unchangedNames:l}=r,c=new xV(a,l),d=r.targetId;e=new dS(d,c)}}return e}function KV(n,t){let e;if(t instanceof hc)e={update:H0(n,t.key,t.value)};else if(t instanceof hS)e={delete:Ig(n,t.key)};else if(t instanceof js)e={update:H0(n,t.key,t.data),updateMask:nx(t.fieldMask)};else{if(!(t instanceof PV))return Tt();e={verify:Ig(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(l,c){const d=c.transform;if(d instanceof Ku)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Xo)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Qu)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof kf)return{fieldPath:c.field.canonicalString(),increment:d.Ie};throw Tt()}(0,r))),t.precondition.isNone||(e.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:HV(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Tt()}(n,t.precondition)),e}function QV(n,t){return n&&n.length>0?(Yt(t!==void 0),n.map(e=>function(a,l){let c=a.updateTime?Ui(a.updateTime):Ui(l);return c.isEqual(At.min())&&(c=Ui(l)),new DV(c,a.transformResults||[])}(e,t))):[]}function YV(n,t){return{documents:[_S(n,t.path)]}}function XV(n,t){const e={structuredQuery:{}},r=t.path;let a;t.collectionGroup!==null?(a=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(a=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=_S(n,a);const l=function(g){if(g.length!==0)return ES(di.create(g,"and"))}(t.filters);l&&(e.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(E=>function(b){return{field:Mo(b.field),direction:JV(b.dir)}}(E))}(t.orderBy);c&&(e.structuredQuery.orderBy=c);const d=Sg(n,t.limit);return d!==null&&(e.structuredQuery.limit=d),t.startAt&&(e.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(t.endAt)),{ht:e,parent:a}}function WV(n){let t=GV(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let a=null;if(r>0){Yt(r===1);const E=e.from[0];E.allDescendants?a=E.collectionId:t=t.child(E.collectionId)}let l=[];e.where&&(l=function(T){const b=vS(T);return b instanceof di&&Kb(b)?b.getFilters():[b]}(e.where));let c=[];e.orderBy&&(c=function(T){return T.map(b=>function(D){return new Pf(Uo(D.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(b))}(e.orderBy));let d=null;e.limit&&(d=function(T){let b;return b=typeof T=="object"?T.value:T,sd(b)?null:b}(e.limit));let p=null;e.startAt&&(p=function(T){const b=!!T.before,I=T.values||[];return new Of(I,b)}(e.startAt));let g=null;return e.endAt&&(g=function(T){const b=!T.before,I=T.values||[];return new Of(I,b)}(e.endAt)),gV(t,a,c,l,d,"F",p,g)}function ZV(n,t){const e=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Tt()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function vS(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Uo(e.unaryFilter.field);return Re.create(r,"==",{doubleValue:NaN});case"IS_NULL":const a=Uo(e.unaryFilter.field);return Re.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Uo(e.unaryFilter.field);return Re.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Uo(e.unaryFilter.field);return Re.create(c,"!=",{nullValue:"NULL_VALUE"});default:return Tt()}}(n):n.fieldFilter!==void 0?function(e){return Re.create(Uo(e.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Tt()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return di.create(e.compositeFilter.filters.map(r=>vS(r)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Tt()}}(e.compositeFilter.op))}(n):Tt()}function JV(n){return zV[n]}function tx(n){return jV[n]}function ex(n){return FV[n]}function Mo(n){return{fieldPath:n.canonicalString()}}function Uo(n){return hi.fromServerFormat(n.fieldPath)}function ES(n){return n instanceof Re?function(e){if(e.op==="=="){if(O0(e.value))return{unaryFilter:{field:Mo(e.field),op:"IS_NAN"}};if(N0(e.value))return{unaryFilter:{field:Mo(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(O0(e.value))return{unaryFilter:{field:Mo(e.field),op:"IS_NOT_NAN"}};if(N0(e.value))return{unaryFilter:{field:Mo(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mo(e.field),op:tx(e.op),value:e.value}}}(n):n instanceof di?function(e){const r=e.getFilters().map(a=>ES(a));return r.length===1?r[0]:{compositeFilter:{op:ex(e.op),filters:r}}}(n):Tt()}function nx(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function TS(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(t,e,r,a,l=At.min(),c=At.min(),d=wn.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(t){return new Is(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Is(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Is(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Is(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(t){this.Tt=t}}function rx(n){const t=WV({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?bg(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(){this.Tn=new ax}addToCollectionParentIndex(t,e){return this.Tn.add(e),J.resolve()}getCollectionParents(t,e){return J.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return J.resolve()}deleteFieldIndex(t,e){return J.resolve()}deleteAllFieldIndexes(t){return J.resolve()}createTargetIndexes(t,e){return J.resolve()}getDocumentsMatchingTarget(t,e){return J.resolve(null)}getIndexType(t,e){return J.resolve(0)}getFieldIndexes(t,e){return J.resolve([])}getNextCollectionGroupToUpdate(t){return J.resolve(null)}getMinOffset(t,e){return J.resolve(Os.min())}getMinOffsetFromCollectionGroup(t,e){return J.resolve(Os.min())}updateCollectionGroup(t,e,r){return J.resolve()}updateIndexEntries(t,e){return J.resolve()}}class ax{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),a=this.index[e]||new rn(Ee.comparator),l=!a.has(r);return this.index[e]=a.add(r),l}has(t){const e=t.lastSegment(),r=t.popLast(),a=this.index[e];return a&&a.has(r)}getEntries(t){return(this.index[t]||new rn(Ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},AS=41943040;class yn{static withCacheSize(t){return new yn(t,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn.DEFAULT_COLLECTION_PERCENTILE=10,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yn.DEFAULT=new yn(AS,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yn.DISABLED=new yn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Kn(){return new Wo(0)}static Un(){return new Wo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0="LruGarbageCollector",ox=1048576;function K0([n,t],[e,r]){const a=xt(n,e);return a===0?xt(t,r):a}class lx{constructor(t){this.Hn=t,this.buffer=new rn(K0),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();K0(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class ux{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){ct($0,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){al(e)?ct($0,"Ignoring IndexedDB error during garbage collection: ",e):await sl(e)}await this.er(3e5)})}}class cx{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return J.resolve(rd.ae);const r=new lx(e);return this.tr.forEachTarget(t,a=>r.Zn(a.sequenceNumber)).next(()=>this.tr.rr(t,a=>r.Zn(a))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.tr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(ct("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(G0)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(ct("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),G0):this.ir(t,e))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let r,a,l,c,d,p,g;const E=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(ct("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(t,a))).next(T=>(r=T,d=Date.now(),this.removeTargets(t,r,e))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(t,r))).next(T=>(g=Date.now(),ko()<=Dt.DEBUG&&ct("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-E}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(g-p)+`ms
Total Duration: ${g-E}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T})))}}function hx(n,t){return new cx(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(){this.changes=new Ua(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,en.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?J.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(t,e,r,a){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=a}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(a=>(r=a,this.remoteDocumentCache.getEntry(t,e))).next(a=>(r!==null&&Vu(r.mutation,a,Pi.empty(),pn.now()),a))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,kt()).next(()=>r))}getLocalViewOfDocuments(t,e,r=kt()){const a=wa();return this.populateOverlays(t,a,e).next(()=>this.computeViews(t,e,a,r).next(l=>{let c=Ru();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(t,e){const r=wa();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,kt()))}populateOverlays(t,e,r){const a=[];return r.forEach(l=>{e.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(t,a).next(l=>{l.forEach((c,d)=>{e.set(c,d)})})}computeViews(t,e,r,a){let l=Pr();const c=ku(),d=function(){return ku()}();return e.forEach((p,g)=>{const E=r.get(g.key);a.has(g.key)&&(E===void 0||E.mutation instanceof js)?l=l.insert(g.key,g):E!==void 0?(c.set(g.key,E.mutation.getFieldMask()),Vu(E.mutation,g,E.mutation.getFieldMask(),pn.now())):c.set(g.key,Pi.empty())}),this.recalculateAndSaveOverlays(t,l).next(p=>(p.forEach((g,E)=>c.set(g,E)),e.forEach((g,E)=>{var T;return d.set(g,new dx(E,(T=c.get(g))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(t,e){const r=ku();let a=new Ie((c,d)=>c-d),l=kt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(c=>{for(const d of c)d.keys().forEach(p=>{const g=e.get(p);if(g===null)return;let E=r.get(p)||Pi.empty();E=d.applyToLocalView(g,E),r.set(p,E);const T=(a.get(d.batchId)||kt()).add(p);a=a.insert(d.batchId,T)})}).next(()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,E=p.value,T=nS();E.forEach(b=>{if(!l.has(b)){const I=uS(e.get(b),r.get(b));I!==null&&T.set(b,I),l=l.add(b)}}),c.push(this.documentOverlayCache.saveOverlays(t,g,T))}return J.waitFor(c)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,a){return function(c){return Et.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Wb(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,a):this.getDocumentsMatchingCollectionQuery(t,e,r,a)}getNextDocuments(t,e,r,a){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,a-l.size):J.resolve(wa());let d=Hu,p=l;return c.next(g=>J.forEach(g,(E,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(E)?J.resolve():this.remoteDocumentCache.getEntry(t,E).next(b=>{p=p.insert(E,b)}))).next(()=>this.populateOverlays(t,g,l)).next(()=>this.computeViews(t,p,g,kt())).next(E=>({batchId:d,changes:eS(E)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Et(e)).next(r=>{let a=Ru();return r.isFoundDocument()&&(a=a.insert(r.key,r)),a})}getDocumentsMatchingCollectionGroupQuery(t,e,r,a){const l=e.collectionGroup;let c=Ru();return this.indexManager.getCollectionParents(t,l).next(d=>J.forEach(d,p=>{const g=function(T,b){return new cc(b,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(e,p.child(l));return this.getDocumentsMatchingCollectionQuery(t,g,r,a).next(E=>{E.forEach((T,b)=>{c=c.insert(T,b)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(t,e,r,a){let l;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,l,a))).next(c=>{l.forEach((p,g)=>{const E=g.getKey();c.get(E)===null&&(c=c.insert(E,en.newInvalidDocument(E)))});let d=Ru();return c.forEach((p,g)=>{const E=l.get(p);E!==void 0&&Vu(E.mutation,g,Pi.empty(),pn.now()),ud(e,g)&&(d=d.insert(p,g))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return J.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(a){return{id:a.id,version:a.version,createTime:Ui(a.createTime)}}(e)),J.resolve()}getNamedQuery(t,e){return J.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(a){return{name:a.name,query:rx(a.bundledQuery),readTime:Ui(a.readTime)}}(e)),J.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(){this.overlays=new Ie(Et.comparator),this.Rr=new Map}getOverlay(t,e){return J.resolve(this.overlays.get(e))}getOverlays(t,e){const r=wa();return J.forEach(e,a=>this.getOverlay(t,a).next(l=>{l!==null&&r.set(a,l)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((a,l)=>{this.Et(t,e,l)}),J.resolve()}removeOverlaysForBatchId(t,e,r){const a=this.Rr.get(r);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.Rr.delete(r)),J.resolve()}getOverlaysForCollection(t,e,r){const a=wa(),l=e.length+1,c=new Et(e.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!e.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>r&&a.set(p.getKey(),p)}return J.resolve(a)}getOverlaysForCollectionGroup(t,e,r,a){let l=new Ie((g,E)=>g-E);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===e&&g.largestBatchId>r){let E=l.get(g.largestBatchId);E===null&&(E=wa(),l=l.insert(g.largestBatchId,E)),E.set(g.getKey(),g)}}const d=wa(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,E)=>d.set(g,E)),!(d.size()>=a)););return J.resolve(d)}Et(t,e,r){const a=this.overlays.get(r.key);if(a!==null){const c=this.Rr.get(a.largestBatchId).delete(r.key);this.Rr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new VV(e,r));let l=this.Rr.get(e);l===void 0&&(l=kt(),this.Rr.set(e,l)),this.Rr.set(e,l.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(){this.sessionToken=wn.EMPTY_BYTE_STRING}getSessionToken(t){return J.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,J.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(){this.Vr=new rn(Fe.mr),this.gr=new rn(Fe.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const r=new Fe(t,e);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.wr(new Fe(t,e))}br(t,e){t.forEach(r=>this.removeReference(r,e))}Sr(t){const e=new Et(new Ee([])),r=new Fe(e,t),a=new Fe(e,t+1),l=[];return this.gr.forEachInRange([r,a],c=>{this.wr(c),l.push(c.key)}),l}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new Et(new Ee([])),r=new Fe(e,t),a=new Fe(e,t+1);let l=kt();return this.gr.forEachInRange([r,a],c=>{l=l.add(c.key)}),l}containsKey(t){const e=new Fe(t,0),r=this.Vr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class Fe{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return Et.comparator(t.key,e.key)||xt(t.Cr,e.Cr)}static pr(t,e){return xt(t.Cr,e.Cr)||Et.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new rn(Fe.mr)}checkEmpty(t){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,a){const l=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new kV(l,e,r,a);this.mutationQueue.push(c);for(const d of a)this.Mr=this.Mr.add(new Fe(d.key,l)),this.indexManager.addToCollectionParentIndex(t,d.key.path.popLast());return J.resolve(c)}lookupMutationBatch(t,e){return J.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,a=this.Nr(r),l=a<0?0:a;return J.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?__:this.Fr-1)}getAllMutationBatches(t){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new Fe(e,0),a=new Fe(e,Number.POSITIVE_INFINITY),l=[];return this.Mr.forEachInRange([r,a],c=>{const d=this.Or(c.Cr);l.push(d)}),J.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new rn(xt);return e.forEach(a=>{const l=new Fe(a,0),c=new Fe(a,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([l,c],d=>{r=r.add(d.Cr)})}),J.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,a=r.length+1;let l=r;Et.isDocumentKey(l)||(l=l.child(""));const c=new Fe(new Et(l),0);let d=new rn(xt);return this.Mr.forEachWhile(p=>{const g=p.key.path;return!!r.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Cr)),!0)},c),J.resolve(this.Br(d))}Br(t){const e=[];return t.forEach(r=>{const a=this.Or(r);a!==null&&e.push(a)}),e}removeMutationBatch(t,e){Yt(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return J.forEach(e.mutations,a=>{const l=new Fe(a.key,e.batchId);return r=r.delete(l),this.referenceDelegate.markPotentiallyOrphaned(t,a.key)}).next(()=>{this.Mr=r})}qn(t){}containsKey(t,e){const r=new Fe(e,0),a=this.Mr.firstAfterOrEqual(r);return J.resolve(e.isEqual(a&&a.key))}performConsistencyCheck(t){return this.mutationQueue.length,J.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(t){this.kr=t,this.docs=function(){return new Ie(Et.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,a=this.docs.get(r),l=a?a.size:0,c=this.kr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return J.resolve(r?r.document.mutableCopy():en.newInvalidDocument(e))}getEntries(t,e){let r=Pr();return e.forEach(a=>{const l=this.docs.get(a);r=r.insert(a,l?l.document.mutableCopy():en.newInvalidDocument(a))}),J.resolve(r)}getDocumentsMatchingQuery(t,e,r,a){let l=Pr();const c=e.path,d=new Et(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:E}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||Q2(K2(E),r)<=0||(a.has(E.key)||ud(e,E))&&(l=l.insert(E.key,E.mutableCopy()))}return J.resolve(l)}getAllFromCollectionGroup(t,e,r,a){Tt()}qr(t,e){return J.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Ex(this)}getSize(t){return J.resolve(this.size)}}class Ex extends fx{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach((r,a)=>{a.isValidDocument()?e.push(this.Ir.addEntry(t,a)):this.Ir.removeEntry(r)}),J.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(t){this.persistence=t,this.Qr=new Ua(e=>E_(e),T_),this.lastRemoteSnapshotVersion=At.min(),this.highestTargetId=0,this.$r=0,this.Kr=new R_,this.targetCount=0,this.Ur=Wo.Kn()}forEachTarget(t,e){return this.Qr.forEach((r,a)=>e(a)),J.resolve()}getLastRemoteSnapshotVersion(t){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return J.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Ur.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.$r&&(this.$r=e),J.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ur=new Wo(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,J.resolve()}updateTargetData(t,e){return this.zn(e),J.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Kr.Sr(e.targetId),this.targetCount-=1,J.resolve()}removeTargets(t,e,r){let a=0;const l=[];return this.Qr.forEach((c,d)=>{d.sequenceNumber<=e&&r.get(d.targetId)===null&&(this.Qr.delete(c),l.push(this.removeMatchingKeysForTargetId(t,d.targetId)),a++)}),J.waitFor(l).next(()=>a)}getTargetCount(t){return J.resolve(this.targetCount)}getTargetData(t,e){const r=this.Qr.get(e)||null;return J.resolve(r)}addMatchingKeys(t,e,r){return this.Kr.yr(e,r),J.resolve()}removeMatchingKeys(t,e,r){this.Kr.br(e,r);const a=this.persistence.referenceDelegate,l=[];return a&&e.forEach(c=>{l.push(a.markPotentiallyOrphaned(t,c))}),J.waitFor(l)}removeMatchingKeysForTargetId(t,e){return this.Kr.Sr(e),J.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Kr.vr(e);return J.resolve(r)}containsKey(t,e){return J.resolve(this.Kr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new rd(0),this.zr=!1,this.zr=!0,this.jr=new _x,this.referenceDelegate=t(this),this.Hr=new Tx(this),this.indexManager=new sx,this.remoteDocumentCache=function(a){return new vx(a)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new ix(e),this.Yr=new mx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new gx,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Wr[t.toKey()];return r||(r=new yx(e,this.referenceDelegate),this.Wr[t.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,r){ct("MemoryPersistence","Starting transaction:",t);const a=new Ax(this.Gr.next());return this.referenceDelegate.Zr(),r(a).next(l=>this.referenceDelegate.Xr(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}ei(t,e){return J.or(Object.values(this.Wr).map(r=>()=>r.containsKey(t,e)))}}class Ax extends X2{constructor(t){super(),this.currentSequenceNumber=t}}class I_{constructor(t){this.persistence=t,this.ti=new R_,this.ni=null}static ri(t){return new I_(t)}get ii(){if(this.ni)return this.ni;throw Tt()}addReference(t,e,r){return this.ti.addReference(r,e),this.ii.delete(r.toString()),J.resolve()}removeReference(t,e,r){return this.ti.removeReference(r,e),this.ii.add(r.toString()),J.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),J.resolve()}removeTarget(t,e){this.ti.Sr(e.targetId).forEach(a=>this.ii.add(a.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(a=>{a.forEach(l=>this.ii.add(l.toString()))}).next(()=>r.removeTargetData(t,e))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.ii,r=>{const a=Et.fromPath(r);return this.si(t,a).next(l=>{l||e.removeEntry(a,At.min())})}).next(()=>(this.ni=null,e.apply(t)))}updateLimboDocument(t,e){return this.si(t,e).next(r=>{r?this.ii.delete(e.toString()):this.ii.add(e.toString())})}Jr(t){return 0}si(t,e){return J.or([()=>J.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class xf{constructor(t,e){this.persistence=t,this.oi=new Ua(r=>J2(r.path),(r,a)=>r.isEqual(a)),this.garbageCollector=hx(this,e)}static ri(t,e){return new xf(t,e)}Zr(){}Xr(t){return J.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(a=>r+a))}sr(t){let e=0;return this.rr(t,r=>{e++}).next(()=>e)}rr(t,e){return J.forEach(this.oi,(r,a)=>this.ar(t,r,a).next(l=>l?J.resolve():e(a)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.qr(t,c=>this.ar(t,c,e).next(d=>{d||(r++,l.removeEntry(c,At.min()))})).next(()=>l.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),J.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),J.resolve()}removeReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),J.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),J.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=cf(t.data.value)),e}ar(t,e,r){return J.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const a=this.oi.get(e);return J.resolve(a!==void 0&&a>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(t,e,r,a){this.targetId=t,this.fromCache=e,this.Hi=r,this.Ji=a}static Yi(t,e){let r=kt(),a=kt();for(const l of e.docChanges)switch(l.type){case 0:r=r.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new C_(t,e.fromCache,r,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return xD()?8:W2(sn())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,r,a){const l={result:null};return this.rs(t,e).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.ss(t,e,a,r).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new wx;return this._s(t,e,c).next(d=>{if(l.result=d,this.Xi)return this.us(t,e,c,d.size)})}).next(()=>l.result)}us(t,e,r,a){return r.documentReadCount<this.es?(ko()<=Dt.DEBUG&&ct("QueryEngine","SDK will not create cache indexes for query:",xo(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),J.resolve()):(ko()<=Dt.DEBUG&&ct("QueryEngine","Query:",xo(e),"scans",r.documentReadCount,"local documents and returns",a,"documents as results."),r.documentReadCount>this.ts*a?(ko()<=Dt.DEBUG&&ct("QueryEngine","The SDK decides to create cache indexes for query:",xo(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Mi(e))):J.resolve())}rs(t,e){if(x0(e))return J.resolve(null);let r=Mi(e);return this.indexManager.getIndexType(t,r).next(a=>a===0?null:(e.limit!==null&&a===1&&(e=bg(e,null,"F"),r=Mi(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(l=>{const c=kt(...l);return this.ns.getDocuments(t,c).next(d=>this.indexManager.getMinOffset(t,r).next(p=>{const g=this.cs(e,d);return this.ls(e,g,c,p.readTime)?this.rs(t,bg(e,null,"F")):this.hs(t,g,e,p)}))})))}ss(t,e,r,a){return x0(e)||a.isEqual(At.min())?J.resolve(null):this.ns.getDocuments(t,r).next(l=>{const c=this.cs(e,l);return this.ls(e,c,r,a)?J.resolve(null):(ko()<=Dt.DEBUG&&ct("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),xo(e)),this.hs(t,c,e,$2(a,Hu)).next(d=>d))})}cs(t,e){let r=new rn(Jb(t));return e.forEach((a,l)=>{ud(t,l)&&(r=r.add(l))}),r}ls(t,e,r,a){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const l=t.limitType==="F"?e.last():e.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}_s(t,e,r){return ko()<=Dt.DEBUG&&ct("QueryEngine","Using full collection scan to execute query:",xo(e)),this.ns.getDocumentsMatchingQuery(t,e,Os.min(),r)}hs(t,e,r,a){return this.ns.getDocumentsMatchingQuery(t,r,a).next(l=>(e.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="LocalStore",Sx=3e8;class Rx{constructor(t,e,r,a){this.persistence=t,this.Ps=e,this.serializer=a,this.Ts=new Ie(xt),this.Is=new Ua(l=>E_(l),T_),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(r)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new px(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ts))}}function Ix(n,t,e,r){return new Rx(n,t,e,r)}async function bS(n,t){const e=bt(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let a;return e.mutationQueue.getAllMutationBatches(r).next(l=>(a=l,e.As(t),e.mutationQueue.getAllMutationBatches(r))).next(l=>{const c=[],d=[];let p=kt();for(const g of a){c.push(g.batchId);for(const E of g.mutations)p=p.add(E.key)}for(const g of l){d.push(g.batchId);for(const E of g.mutations)p=p.add(E.key)}return e.localDocuments.getDocuments(r,p).next(g=>({Rs:g,removedBatchIds:c,addedBatchIds:d}))})})}function Cx(n,t){const e=bt(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const a=t.batch.keys(),l=e.ds.newChangeBuffer({trackRemovals:!0});return function(d,p,g,E){const T=g.batch,b=T.keys();let I=J.resolve();return b.forEach(D=>{I=I.next(()=>E.getEntry(p,D)).next(L=>{const O=g.docVersions.get(D);Yt(O!==null),L.version.compareTo(O)<0&&(T.applyToRemoteDocument(L,g),L.isValidDocument()&&(L.setReadTime(g.commitVersion),E.addEntry(L)))})}),I.next(()=>d.mutationQueue.removeMutationBatch(p,T))}(e,r,t,l).next(()=>l.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,a,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(d){let p=kt();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p}(t))).next(()=>e.localDocuments.getDocuments(r,a))})}function SS(n){const t=bt(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Hr.getLastRemoteSnapshotVersion(e))}function Dx(n,t){const e=bt(n),r=t.snapshotVersion;let a=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=e.ds.newChangeBuffer({trackRemovals:!0});a=e.Ts;const d=[];t.targetChanges.forEach((E,T)=>{const b=a.get(T);if(!b)return;d.push(e.Hr.removeMatchingKeys(l,E.removedDocuments,T).next(()=>e.Hr.addMatchingKeys(l,E.addedDocuments,T)));let I=b.withSequenceNumber(l.currentSequenceNumber);t.targetMismatches.get(T)!==null?I=I.withResumeToken(wn.EMPTY_BYTE_STRING,At.min()).withLastLimboFreeSnapshotVersion(At.min()):E.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(E.resumeToken,r)),a=a.insert(T,I),function(L,O,M){return L.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=Sx?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(b,I,E)&&d.push(e.Hr.updateTargetData(l,I))});let p=Pr(),g=kt();if(t.documentUpdates.forEach(E=>{t.resolvedLimboDocuments.has(E)&&d.push(e.persistence.referenceDelegate.updateLimboDocument(l,E))}),d.push(Nx(l,c,t.documentUpdates).next(E=>{p=E.Vs,g=E.fs})),!r.isEqual(At.min())){const E=e.Hr.getLastRemoteSnapshotVersion(l).next(T=>e.Hr.setTargetsMetadata(l,l.currentSequenceNumber,r));d.push(E)}return J.waitFor(d).next(()=>c.apply(l)).next(()=>e.localDocuments.getLocalViewOfDocuments(l,p,g)).next(()=>p)}).then(l=>(e.Ts=a,l))}function Nx(n,t,e){let r=kt(),a=kt();return e.forEach(l=>r=r.add(l)),t.getEntries(n,r).next(l=>{let c=Pr();return e.forEach((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(At.min())?(t.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(t.addEntry(p),c=c.insert(d,p)):ct(D_,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)}),{Vs:c,fs:a}})}function Ox(n,t){const e=bt(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=__),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Px(n,t){const e=bt(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let a;return e.Hr.getTargetData(r,t).next(l=>l?(a=l,J.resolve(a)):e.Hr.allocateTargetId(r).next(c=>(a=new Is(t,c,"TargetPurposeListen",r.currentSequenceNumber),e.Hr.addTargetData(r,a).next(()=>a))))}).then(r=>{const a=e.Ts.get(r.targetId);return(a===null||r.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(e.Ts=e.Ts.insert(r.targetId,r),e.Is.set(t,r.targetId)),r})}async function Dg(n,t,e){const r=bt(n),a=r.Ts.get(t),l=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",l,c=>r.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!al(c))throw c;ct(D_,`Failed to update sequence numbers for target ${t}: ${c}`)}r.Ts=r.Ts.remove(t),r.Is.delete(a.target)}function Q0(n,t,e){const r=bt(n);let a=At.min(),l=kt();return r.persistence.runTransaction("Execute query","readwrite",c=>function(p,g,E){const T=bt(p),b=T.Is.get(E);return b!==void 0?J.resolve(T.Ts.get(b)):T.Hr.getTargetData(g,E)}(r,c,Mi(t)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>r.Ps.getDocumentsMatchingQuery(c,t,e?a:At.min(),e?l:kt())).next(d=>(kx(r,yV(t),d),{documents:d,gs:l})))}function kx(n,t,e){let r=n.Es.get(t)||At.min();e.forEach((a,l)=>{l.readTime.compareTo(r)>0&&(r=l.readTime)}),n.Es.set(t,r)}class Y0{constructor(){this.activeTargetIds=bV()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ss(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Vx{constructor(){this.ho=new Y0,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,r){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new Y0,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{To(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0="ConnectivityMonitor";class W0{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ct(X0,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){ct(X0,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qh=null;function Ng(){return Qh===null?Qh=function(){return 268435456+Math.round(2147483648*Math.random())}():Qh++,"0x"+Qh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km="RestConnection",Mx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};let Ux=class{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${r}/databases/${a}`,this.wo=this.databaseId.database===Df?`project_id=${r}`:`project_id=${r}&database_id=${a}`}bo(t,e,r,a,l){const c=Ng(),d=this.So(t,e.toUriEncodedString());ct(Km,`Sending RPC '${t}' ${c}:`,d,r);const p={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(p,a,l),this.vo(t,d,p,r).then(g=>(ct(Km,`Received RPC '${t}' ${c}: `,g),g),g=>{throw $o(Km,`RPC '${t}' ${c} failed with error: `,g,"url: ",d,"request:",r),g})}Co(t,e,r,a,l,c){return this.bo(t,e,r,a,l)}Do(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rl}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((a,l)=>t[l]=a),r&&r.headers.forEach((a,l)=>t[l]=a)}So(t,e){const r=Mx[t];return`${this.po}/v1/${e}:${r}`}terminate(){}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Ko(t){this.ko(t)}Uo(t){this.qo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="WebChannelConnection";class Bx extends Ux{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,r,a){const l=Ng();return new Promise((c,d)=>{const p=new Rb;p.setWithCredentials(!0),p.listenOnce(Ib.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case of.NO_ERROR:const E=p.getResponseJson();ct(Je,`XHR for RPC '${t}' ${l} received:`,JSON.stringify(E)),c(E);break;case of.TIMEOUT:ct(Je,`RPC '${t}' ${l} timed out`),d(new ht(tt.DEADLINE_EXCEEDED,"Request time out"));break;case of.HTTP_ERROR:const T=p.getStatus();if(ct(Je,`RPC '${t}' ${l} failed with status:`,T,"response text:",p.getResponseText()),T>0){let b=p.getResponseJson();Array.isArray(b)&&(b=b[0]);const I=b==null?void 0:b.error;if(I&&I.status&&I.message){const D=function(O){const M=O.toLowerCase().replace(/_/g,"-");return Object.values(tt).indexOf(M)>=0?M:tt.UNKNOWN}(I.status);d(new ht(D,I.message))}else d(new ht(tt.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new ht(tt.UNAVAILABLE,"Connection failed."));break;default:Tt()}}finally{ct(Je,`RPC '${t}' ${l} completed.`)}});const g=JSON.stringify(a);ct(Je,`RPC '${t}' ${l} sending request:`,a),p.send(e,"POST",g,r,15)})}Wo(t,e,r){const a=Ng(),l=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],c=Nb(),d=Db(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Do(p.initMessageHeaders,e,r),p.encodeInitMessageHeaders=!0;const E=l.join("");ct(Je,`Creating RPC '${t}' stream ${a}: ${E}`,p);const T=c.createWebChannel(E,p);let b=!1,I=!1;const D=new Lx({Fo:O=>{I?ct(Je,`Not sending because RPC '${t}' stream ${a} is closed:`,O):(b||(ct(Je,`Opening RPC '${t}' stream ${a} transport.`),T.open(),b=!0),ct(Je,`RPC '${t}' stream ${a} sending:`,O),T.send(O))},Mo:()=>T.close()}),L=(O,M,q)=>{O.listen(M,z=>{try{q(z)}catch(Y){setTimeout(()=>{throw Y},0)}})};return L(T,bu.EventType.OPEN,()=>{I||(ct(Je,`RPC '${t}' stream ${a} transport opened.`),D.Qo())}),L(T,bu.EventType.CLOSE,()=>{I||(I=!0,ct(Je,`RPC '${t}' stream ${a} transport closed`),D.Ko())}),L(T,bu.EventType.ERROR,O=>{I||(I=!0,$o(Je,`RPC '${t}' stream ${a} transport errored:`,O),D.Ko(new ht(tt.UNAVAILABLE,"The operation could not be completed")))}),L(T,bu.EventType.MESSAGE,O=>{var M;if(!I){const q=O.data[0];Yt(!!q);const z=q,Y=(z==null?void 0:z.error)||((M=z[0])===null||M===void 0?void 0:M.error);if(Y){ct(Je,`RPC '${t}' stream ${a} received error:`,Y);const it=Y.status;let ot=function(S){const N=Se[S];if(N!==void 0)return fS(N)}(it),k=Y.message;ot===void 0&&(ot=tt.INTERNAL,k="Unknown error status: "+it+" with message "+Y.message),I=!0,D.Ko(new ht(ot,k)),T.close()}else ct(Je,`RPC '${t}' stream ${a} received:`,q),D.Uo(q)}}),L(d,Cb.STAT_EVENT,O=>{O.stat===fg.PROXY?ct(Je,`RPC '${t}' stream ${a} detected buffering proxy`):O.stat===fg.NOPROXY&&ct(Je,`RPC '${t}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{D.$o()},0),D}}function Qm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(n){return new qV(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(t,e,r=1e3,a=1.5,l=6e4){this.Ti=t,this.timerId=e,this.Go=r,this.zo=a,this.jo=l,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),a=Math.max(0,e-r);a>0&&ct("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,a,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="PersistentStream";class IS{constructor(t,e,r,a,l,c,d,p){this.Ti=t,this.n_=r,this.r_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new RS(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===tt.RESOURCE_EXHAUSTED?(Or(e.toString()),Or("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===tt.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,a])=>{this.i_===e&&this.V_(r,a)},r=>{t(()=>{const a=new ht(tt.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(a)})})}V_(t,e){const r=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(a=>{r(()=>this.m_(a))}),this.stream.onMessage(a=>{r(()=>++this.__==1?this.g_(a):this.onNext(a))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return ct(Z0,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget(()=>this.i_===t?e():(ct(Z0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zx extends IS{constructor(t,e,r,a,l,c){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,a,c),this.serializer=l}f_(t,e){return this.connection.Wo("Listen",t,e)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const e=$V(this.serializer,t),r=function(l){if(!("targetChange"in l))return At.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?At.min():c.readTime?Ui(c.readTime):At.min()}(t);return this.listener.p_(e,r)}y_(t){const e={};e.database=Cg(this.serializer),e.addTarget=function(l,c){let d;const p=c.target;if(d=Ag(p)?{documents:YV(l,p)}:{query:XV(l,p).ht},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=mS(l,c.resumeToken);const g=Sg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(At.min())>0){d.readTime=Vf(l,c.snapshotVersion.toTimestamp());const g=Sg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,t);const r=ZV(this.serializer,t);r&&(e.labels=r),this.I_(e)}w_(t){const e={};e.database=Cg(this.serializer),e.removeTarget=t,this.I_(e)}}class jx extends IS{constructor(t,e,r,a,l,c){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,a,c),this.serializer=l}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(t,e){return this.connection.Wo("Write",t,e)}g_(t){return Yt(!!t.streamToken),this.lastStreamToken=t.streamToken,Yt(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){Yt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const e=QV(t.writeResults,t.commitTime),r=Ui(t.commitTime);return this.listener.v_(r,e)}C_(){const t={};t.database=Cg(this.serializer),this.I_(t)}S_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>KV(this.serializer,r))};this.I_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fx=class{},qx=class extends Fx{constructor(t,e,r,a){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=a,this.F_=!1}M_(){if(this.F_)throw new ht(tt.FAILED_PRECONDITION,"The client has already been terminated.")}bo(t,e,r,a){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.bo(t,Rg(e,r),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===tt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ht(tt.UNKNOWN,l.toString())})}Co(t,e,r,a,l){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Co(t,Rg(e,r),a,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===tt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ht(tt.UNKNOWN,c.toString())})}terminate(){this.F_=!0,this.connection.terminate()}};class Hx{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Or(e),this.N_=!1):ct("OnlineStateTracker",e)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa="RemoteStore";class Gx{constructor(t,e,r,a,l){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=l,this.z_.To(c=>{r.enqueueAndForget(async()=>{La(this)&&(ct(Oa,"Restarting streams for network reachability change."),await async function(p){const g=bt(p);g.W_.add(4),await dc(g),g.j_.set("Unknown"),g.W_.delete(4),await pd(g)}(this))})}),this.j_=new Hx(r,a)}}async function pd(n){if(La(n))for(const t of n.G_)await t(!0)}async function dc(n){for(const t of n.G_)await t(!1)}function CS(n,t){const e=bt(n);e.U_.has(t.targetId)||(e.U_.set(t.targetId,t),k_(e)?P_(e):ol(e).c_()&&O_(e,t))}function N_(n,t){const e=bt(n),r=ol(e);e.U_.delete(t),r.c_()&&DS(e,t),e.U_.size===0&&(r.c_()?r.P_():La(e)&&e.j_.set("Unknown"))}function O_(n,t){if(n.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(At.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ol(n).y_(t)}function DS(n,t){n.H_.Ne(t),ol(n).w_(t)}function P_(n){n.H_=new BV({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>n.U_.get(t)||null,it:()=>n.datastore.serializer.databaseId}),ol(n).start(),n.j_.B_()}function k_(n){return La(n)&&!ol(n).u_()&&n.U_.size>0}function La(n){return bt(n).W_.size===0}function NS(n){n.H_=void 0}async function $x(n){n.j_.set("Online")}async function Kx(n){n.U_.forEach((t,e)=>{O_(n,t)})}async function Qx(n,t){NS(n),k_(n)?(n.j_.q_(t),P_(n)):n.j_.set("Unknown")}async function Yx(n,t,e){if(n.j_.set("Online"),t instanceof pS&&t.state===2&&t.cause)try{await async function(a,l){const c=l.cause;for(const d of l.targetIds)a.U_.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.U_.delete(d),a.H_.removeTarget(d))}(n,t)}catch(r){ct(Oa,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Mf(n,r)}else if(t instanceof pf?n.H_.We(t):t instanceof dS?n.H_.Ze(t):n.H_.je(t),!e.isEqual(At.min()))try{const r=await SS(n.localStore);e.compareTo(r)>=0&&await function(l,c){const d=l.H_.ot(c);return d.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const E=l.U_.get(g);E&&l.U_.set(g,E.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,g)=>{const E=l.U_.get(p);if(!E)return;l.U_.set(p,E.withResumeToken(wn.EMPTY_BYTE_STRING,E.snapshotVersion)),DS(l,p);const T=new Is(E.target,p,g,E.sequenceNumber);O_(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(n,e)}catch(r){ct(Oa,"Failed to raise snapshot:",r),await Mf(n,r)}}async function Mf(n,t,e){if(!al(t))throw t;n.W_.add(1),await dc(n),n.j_.set("Offline"),e||(e=()=>SS(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ct(Oa,"Retrying IndexedDB access"),await e(),n.W_.delete(1),await pd(n)})}function OS(n,t){return t().catch(e=>Mf(n,e,t))}async function md(n){const t=bt(n),e=xs(t);let r=t.K_.length>0?t.K_[t.K_.length-1].batchId:__;for(;Xx(t);)try{const a=await Ox(t.localStore,r);if(a===null){t.K_.length===0&&e.P_();break}r=a.batchId,Wx(t,a)}catch(a){await Mf(t,a)}PS(t)&&kS(t)}function Xx(n){return La(n)&&n.K_.length<10}function Wx(n,t){n.K_.push(t);const e=xs(n);e.c_()&&e.b_&&e.S_(t.mutations)}function PS(n){return La(n)&&!xs(n).u_()&&n.K_.length>0}function kS(n){xs(n).start()}async function Zx(n){xs(n).C_()}async function Jx(n){const t=xs(n);for(const e of n.K_)t.S_(e.mutations)}async function tM(n,t,e){const r=n.K_.shift(),a=w_.from(r,t,e);await OS(n,()=>n.remoteSyncer.applySuccessfulWrite(a)),await md(n)}async function eM(n,t){t&&xs(n).b_&&await async function(r,a){if(function(c){return MV(c)&&c!==tt.ABORTED}(a.code)){const l=r.K_.shift();xs(r).h_(),await OS(r,()=>r.remoteSyncer.rejectFailedWrite(l.batchId,a)),await md(r)}}(n,t),PS(n)&&kS(n)}async function J0(n,t){const e=bt(n);e.asyncQueue.verifyOperationInProgress(),ct(Oa,"RemoteStore received new credentials");const r=La(e);e.W_.add(3),await dc(e),r&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await pd(e)}async function nM(n,t){const e=bt(n);t?(e.W_.delete(2),await pd(e)):t||(e.W_.add(2),await dc(e),e.j_.set("Unknown"))}function ol(n){return n.J_||(n.J_=function(e,r,a){const l=bt(e);return l.M_(),new zx(r,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(n.datastore,n.asyncQueue,{xo:$x.bind(null,n),No:Kx.bind(null,n),Lo:Qx.bind(null,n),p_:Yx.bind(null,n)}),n.G_.push(async t=>{t?(n.J_.h_(),k_(n)?P_(n):n.j_.set("Unknown")):(await n.J_.stop(),NS(n))})),n.J_}function xs(n){return n.Y_||(n.Y_=function(e,r,a){const l=bt(e);return l.M_(),new jx(r,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:Zx.bind(null,n),Lo:eM.bind(null,n),D_:Jx.bind(null,n),v_:tM.bind(null,n)}),n.G_.push(async t=>{t?(n.Y_.h_(),await md(n)):(await n.Y_.stop(),n.K_.length>0&&(ct(Oa,`Stopping write stream with ${n.K_.length} pending writes`),n.K_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(t,e,r,a,l){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=a,this.removalCallback=l,this.deferred=new wr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,a,l){const c=Date.now()+r,d=new V_(t,e,c,a,l);return d.start(r),d}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ht(tt.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function x_(n,t){if(Or("AsyncQueue",`${t}: ${n}`),al(n))return new ht(tt.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{static emptySet(t){return new Ho(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||Et.comparator(e.key,r.key):(e,r)=>Et.comparator(e.key,r.key),this.keyedMap=Ru(),this.sortedSet=new Ie(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ho)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const a=e.getNext().key,l=r.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ho;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(){this.Z_=new Ie(Et.comparator)}track(t){const e=t.doc.key,r=this.Z_.get(e);r?t.type!==0&&r.type===3?this.Z_=this.Z_.insert(e,t):t.type===3&&r.type!==1?this.Z_=this.Z_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Z_=this.Z_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Z_=this.Z_.remove(e):t.type===1&&r.type===2?this.Z_=this.Z_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):Tt():this.Z_=this.Z_.insert(e,t)}X_(){const t=[];return this.Z_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Zo{constructor(t,e,r,a,l,c,d,p,g){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(t,e,r,a,l){const c=[];return e.forEach(d=>{c.push({type:0,doc:d})}),new Zo(t,e,Ho.emptySet(e),c,r,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ld(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let a=0;a<e.length;a++)if(e[a].type!==r[a].type||!e[a].doc.isEqual(r[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class rM{constructor(){this.queries=eA(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,r){const a=bt(e),l=a.queries;a.queries=eA(),l.forEach((c,d)=>{for(const p of d.ta)p.onError(r)})})(this,new ht(tt.ABORTED,"Firestore shutting down"))}}function eA(){return new Ua(n=>Zb(n),ld)}async function M_(n,t){const e=bt(n);let r=3;const a=t.query;let l=e.queries.get(a);l?!l.na()&&t.ra()&&(r=2):(l=new iM,r=t.ra()?0:1);try{switch(r){case 0:l.ea=await e.onListen(a,!0);break;case 1:l.ea=await e.onListen(a,!1);break;case 2:await e.onFirstRemoteStoreListen(a)}}catch(c){const d=x_(c,`Initialization of query '${xo(t.query)}' failed`);return void t.onError(d)}e.queries.set(a,l),l.ta.push(t),t.sa(e.onlineState),l.ea&&t.oa(l.ea)&&L_(e)}async function U_(n,t){const e=bt(n),r=t.query;let a=3;const l=e.queries.get(r);if(l){const c=l.ta.indexOf(t);c>=0&&(l.ta.splice(c,1),l.ta.length===0?a=t.ra()?0:1:!l.na()&&t.ra()&&(a=2))}switch(a){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function sM(n,t){const e=bt(n);let r=!1;for(const a of t){const l=a.query,c=e.queries.get(l);if(c){for(const d of c.ta)d.oa(a)&&(r=!0);c.ea=a}}r&&L_(e)}function aM(n,t,e){const r=bt(n),a=r.queries.get(t);if(a)for(const l of a.ta)l.onError(e);r.queries.delete(t)}function L_(n){n.ia.forEach(t=>{t.next()})}var Og,nA;(nA=Og||(Og={}))._a="default",nA.Cache="cache";class B_{constructor(t,e,r){this.query=t,this.aa=e,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(t){if(!this.options.includeMetadataChanges){const r=[];for(const a of t.docChanges)a.type!==3&&r.push(a);t=new Zo(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ua?this.la(t)&&(this.aa.next(t),e=!0):this.ha(t,this.onlineState)&&(this.Pa(t),e=!0),this.ca=t,e}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let e=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),e=!0),e}ha(t,e){if(!t.fromCache||!this.ra())return!0;const r=e!=="Offline";return(!this.options.Ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}la(t){if(t.docChanges.length>0)return!0;const e=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Pa(t){t=Zo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==Og.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(t){this.key=t}}class xS{constructor(t){this.key=t}}class oM{constructor(t,e){this.query=t,this.fa=e,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=kt(),this.mutatedKeys=kt(),this.ya=Jb(t),this.wa=new Ho(this.ya)}get ba(){return this.fa}Sa(t,e){const r=e?e.Da:new tA,a=e?e.wa:this.wa;let l=e?e.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(t.inorderTraversal((E,T)=>{const b=a.get(E),I=ud(this.query,T)?T:null,D=!!b&&this.mutatedKeys.has(b.key),L=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let O=!1;b&&I?b.data.isEqual(I.data)?D!==L&&(r.track({type:3,doc:I}),O=!0):this.va(b,I)||(r.track({type:2,doc:I}),O=!0,(p&&this.ya(I,p)>0||g&&this.ya(I,g)<0)&&(d=!0)):!b&&I?(r.track({type:0,doc:I}),O=!0):b&&!I&&(r.track({type:1,doc:b}),O=!0,(p||g)&&(d=!0)),O&&(I?(c=c.add(I),l=L?l.add(E):l.delete(E)):(c=c.delete(E),l=l.delete(E)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const E=this.query.limitType==="F"?c.last():c.first();c=c.delete(E.key),l=l.delete(E.key),r.track({type:1,doc:E})}return{wa:c,Da:r,ls:d,mutatedKeys:l}}va(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,a){const l=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const c=t.Da.X_();c.sort((E,T)=>function(I,D){const L=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Tt()}};return L(I)-L(D)}(E.type,T.type)||this.ya(E.doc,T.doc)),this.Ca(r),a=a!=null&&a;const d=e&&!a?this.Fa():[],p=this.pa.size===0&&this.current&&!a?1:0,g=p!==this.ga;return this.ga=p,c.length!==0||g?{snapshot:new Zo(this.query,t.wa,l,c,t.mutatedKeys,p===0,g,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:d}:{Ma:d}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new tA,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=kt(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const e=[];return t.forEach(r=>{this.pa.has(r)||e.push(new xS(r))}),this.pa.forEach(r=>{t.has(r)||e.push(new VS(r))}),e}Oa(t){this.fa=t.gs,this.pa=kt();const e=this.Sa(t.documents);return this.applyChanges(e,!0)}Na(){return Zo.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const z_="SyncEngine";class lM{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class uM{constructor(t){this.key=t,this.Ba=!1}}class cM{constructor(t,e,r,a,l,c){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.La={},this.ka=new Ua(d=>Zb(d),ld),this.qa=new Map,this.Qa=new Set,this.$a=new Ie(Et.comparator),this.Ka=new Map,this.Ua=new R_,this.Wa={},this.Ga=new Map,this.za=Wo.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function hM(n,t,e=!0){const r=jS(n);let a;const l=r.ka.get(t);return l?(r.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.Na()):a=await MS(r,t,e,!0),a}async function fM(n,t){const e=jS(n);await MS(e,t,!0,!1)}async function MS(n,t,e,r){const a=await Px(n.localStore,Mi(t)),l=a.targetId,c=n.sharedClientState.addLocalQueryTarget(l,e);let d;return r&&(d=await dM(n,t,l,c==="current",a.resumeToken)),n.isPrimaryClient&&e&&CS(n.remoteStore,a),d}async function dM(n,t,e,r,a){n.Ha=(T,b,I)=>async function(L,O,M,q){let z=O.view.Sa(M);z.ls&&(z=await Q0(L.localStore,O.query,!1).then(({documents:k})=>O.view.Sa(k,z)));const Y=q&&q.targetChanges.get(O.targetId),it=q&&q.targetMismatches.get(O.targetId)!=null,ot=O.view.applyChanges(z,L.isPrimaryClient,Y,it);return rA(L,O.targetId,ot.Ma),ot.snapshot}(n,T,b,I);const l=await Q0(n.localStore,t,!0),c=new oM(t,l.gs),d=c.Sa(l.documents),p=fc.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",a),g=c.applyChanges(d,n.isPrimaryClient,p);rA(n,e,g.Ma);const E=new lM(t,e,c);return n.ka.set(t,E),n.qa.has(e)?n.qa.get(e).push(t):n.qa.set(e,[t]),g.snapshot}async function pM(n,t,e){const r=bt(n),a=r.ka.get(t),l=r.qa.get(a.targetId);if(l.length>1)return r.qa.set(a.targetId,l.filter(c=>!ld(c,t))),void r.ka.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(a.targetId),r.sharedClientState.isActiveQueryTarget(a.targetId)||await Dg(r.localStore,a.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(a.targetId),e&&N_(r.remoteStore,a.targetId),Pg(r,a.targetId)}).catch(sl)):(Pg(r,a.targetId),await Dg(r.localStore,a.targetId,!0))}async function mM(n,t){const e=bt(n),r=e.ka.get(t),a=e.qa.get(r.targetId);e.isPrimaryClient&&a.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),N_(e.remoteStore,r.targetId))}async function gM(n,t,e){const r=wM(n);try{const a=await function(c,d){const p=bt(c),g=pn.now(),E=d.reduce((I,D)=>I.add(D.key),kt());let T,b;return p.persistence.runTransaction("Locally write mutations","readwrite",I=>{let D=Pr(),L=kt();return p.ds.getEntries(I,E).next(O=>{D=O,D.forEach((M,q)=>{q.isValidDocument()||(L=L.add(M))})}).next(()=>p.localDocuments.getOverlayedDocuments(I,D)).next(O=>{T=O;const M=[];for(const q of d){const z=OV(q,T.get(q.key).overlayedDocument);z!=null&&M.push(new js(q.key,z,Hb(z.value.mapValue),qo.exists(!0)))}return p.mutationQueue.addMutationBatch(I,g,M,d)}).next(O=>{b=O;const M=O.applyToLocalDocumentSet(T,L);return p.documentOverlayCache.saveOverlays(I,O.batchId,M)})}).then(()=>({batchId:b.batchId,changes:eS(T)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(a.batchId),function(c,d,p){let g=c.Wa[c.currentUser.toKey()];g||(g=new Ie(xt)),g=g.insert(d,p),c.Wa[c.currentUser.toKey()]=g}(r,a.batchId,e),await pc(r,a.changes),await md(r.remoteStore)}catch(a){const l=x_(a,"Failed to persist write");e.reject(l)}}async function US(n,t){const e=bt(n);try{const r=await Dx(e.localStore,t);t.targetChanges.forEach((a,l)=>{const c=e.Ka.get(l);c&&(Yt(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?c.Ba=!0:a.modifiedDocuments.size>0?Yt(c.Ba):a.removedDocuments.size>0&&(Yt(c.Ba),c.Ba=!1))}),await pc(e,r,t)}catch(r){await sl(r)}}function iA(n,t,e){const r=bt(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const a=[];r.ka.forEach((l,c)=>{const d=c.view.sa(t);d.snapshot&&a.push(d.snapshot)}),function(c,d){const p=bt(c);p.onlineState=d;let g=!1;p.queries.forEach((E,T)=>{for(const b of T.ta)b.sa(d)&&(g=!0)}),g&&L_(p)}(r.eventManager,t),a.length&&r.La.p_(a),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function _M(n,t,e){const r=bt(n);r.sharedClientState.updateQueryState(t,"rejected",e);const a=r.Ka.get(t),l=a&&a.key;if(l){let c=new Ie(Et.comparator);c=c.insert(l,en.newNoDocument(l,At.min()));const d=kt().add(l),p=new fd(At.min(),new Map,new Ie(xt),c,d);await US(r,p),r.$a=r.$a.remove(l),r.Ka.delete(t),j_(r)}else await Dg(r.localStore,t,!1).then(()=>Pg(r,t,e)).catch(sl)}async function yM(n,t){const e=bt(n),r=t.batch.batchId;try{const a=await Cx(e.localStore,t);BS(e,r,null),LS(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await pc(e,a)}catch(a){await sl(a)}}async function vM(n,t,e){const r=bt(n);try{const a=await function(c,d){const p=bt(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let E;return p.mutationQueue.lookupMutationBatch(g,d).next(T=>(Yt(T!==null),E=T.keys(),p.mutationQueue.removeMutationBatch(g,T))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,E,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,E)).next(()=>p.localDocuments.getDocuments(g,E))})}(r.localStore,t);BS(r,t,e),LS(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await pc(r,a)}catch(a){await sl(a)}}function LS(n,t){(n.Ga.get(t)||[]).forEach(e=>{e.resolve()}),n.Ga.delete(t)}function BS(n,t,e){const r=bt(n);let a=r.Wa[r.currentUser.toKey()];if(a){const l=a.get(t);l&&(e?l.reject(e):l.resolve(),a=a.remove(t)),r.Wa[r.currentUser.toKey()]=a}}function Pg(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.qa.get(t))n.ka.delete(r),e&&n.La.Ja(r,e);n.qa.delete(t),n.isPrimaryClient&&n.Ua.Sr(t).forEach(r=>{n.Ua.containsKey(r)||zS(n,r)})}function zS(n,t){n.Qa.delete(t.path.canonicalString());const e=n.$a.get(t);e!==null&&(N_(n.remoteStore,e),n.$a=n.$a.remove(t),n.Ka.delete(e),j_(n))}function rA(n,t,e){for(const r of e)r instanceof VS?(n.Ua.addReference(r.key,t),EM(n,r)):r instanceof xS?(ct(z_,"Document no longer in limbo: "+r.key),n.Ua.removeReference(r.key,t),n.Ua.containsKey(r.key)||zS(n,r.key)):Tt()}function EM(n,t){const e=t.key,r=e.path.canonicalString();n.$a.get(e)||n.Qa.has(r)||(ct(z_,"New document in limbo: "+e),n.Qa.add(r),j_(n))}function j_(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const t=n.Qa.values().next().value;n.Qa.delete(t);const e=new Et(Ee.fromString(t)),r=n.za.next();n.Ka.set(r,new uM(e)),n.$a=n.$a.insert(e,r),CS(n.remoteStore,new Is(Mi(od(e.path)),r,"TargetPurposeLimboResolution",rd.ae))}}async function pc(n,t,e){const r=bt(n),a=[],l=[],c=[];r.ka.isEmpty()||(r.ka.forEach((d,p)=>{c.push(r.Ha(p,t,e).then(g=>{var E;if((g||e)&&r.isPrimaryClient){const T=g?!g.fromCache:(E=e==null?void 0:e.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;r.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(g){a.push(g);const T=C_.Yi(p.targetId,g);l.push(T)}}))}),await Promise.all(c),r.La.p_(a),await async function(p,g){const E=bt(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>J.forEach(g,b=>J.forEach(b.Hi,I=>E.persistence.referenceDelegate.addReference(T,b.targetId,I)).next(()=>J.forEach(b.Ji,I=>E.persistence.referenceDelegate.removeReference(T,b.targetId,I)))))}catch(T){if(!al(T))throw T;ct(D_,"Failed to update sequence numbers: "+T)}for(const T of g){const b=T.targetId;if(!T.fromCache){const I=E.Ts.get(b),D=I.snapshotVersion,L=I.withLastLimboFreeSnapshotVersion(D);E.Ts=E.Ts.insert(b,L)}}}(r.localStore,l))}async function TM(n,t){const e=bt(n);if(!e.currentUser.isEqual(t)){ct(z_,"User change. New user:",t.toKey());const r=await bS(e.localStore,t);e.currentUser=t,function(l,c){l.Ga.forEach(d=>{d.forEach(p=>{p.reject(new ht(tt.CANCELLED,c))})}),l.Ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await pc(e,r.Rs)}}function AM(n,t){const e=bt(n),r=e.Ka.get(t);if(r&&r.Ba)return kt().add(r.key);{let a=kt();const l=e.qa.get(t);if(!l)return a;for(const c of l){const d=e.ka.get(c);a=a.unionWith(d.view.ba)}return a}}function jS(n){const t=bt(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=US.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=AM.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=_M.bind(null,t),t.La.p_=sM.bind(null,t.eventManager),t.La.Ja=aM.bind(null,t.eventManager),t}function wM(n){const t=bt(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=yM.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=vM.bind(null,t),t}class Uf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=dd(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return Ix(this.persistence,new bx,t.initialUser,this.serializer)}Xa(t){return new wS(I_.ri,this.serializer)}Za(t){return new Vx}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Uf.provider={build:()=>new Uf};class bM extends Uf{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){Yt(this.persistence.referenceDelegate instanceof xf);const r=this.persistence.referenceDelegate.garbageCollector;return new ux(r,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?yn.withCacheSize(this.cacheSizeBytes):yn.DEFAULT;return new wS(r=>xf.ri(r,e),this.serializer)}}class kg{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>iA(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=TM.bind(null,this.syncEngine),await nM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new rM}()}createDatastore(t){const e=dd(t.databaseInfo.databaseId),r=function(l){return new Bx(l)}(t.databaseInfo);return function(l,c,d,p){return new qx(l,c,d,p)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,a,l,c,d){return new Gx(r,a,l,c,d)}(this.localStore,this.datastore,t.asyncQueue,e=>iA(this.syncEngine,e,0),function(){return W0.D()?new W0:new xx}())}createSyncEngine(t,e){return function(a,l,c,d,p,g,E){const T=new cM(a,l,c,d,p,g);return E&&(T.ja=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(a){const l=bt(a);ct(Oa,"RemoteStore shutting down."),l.W_.add(5),await dc(l),l.z_.shutdown(),l.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}kg.provider={build:()=>new kg};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):Or("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms="FirestoreClient";class SM{constructor(t,e,r,a,l){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=a,this.user=tn.UNAUTHENTICATED,this.clientId=Pb.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(r,async c=>{ct(Ms,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(r,c=>(ct(Ms,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new wr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=x_(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ym(n,t){n.asyncQueue.verifyOperationInProgress(),ct(Ms,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async a=>{r.isEqual(a)||(await bS(t.localStore,a),r=a)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function sA(n,t){n.asyncQueue.verifyOperationInProgress();const e=await RM(n);ct(Ms,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>J0(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,a)=>J0(t.remoteStore,a)),n._onlineComponents=t}async function RM(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ct(Ms,"Using user provided OfflineComponentProvider");try{await Ym(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(a){return a.name==="FirebaseError"?a.code===tt.FAILED_PRECONDITION||a.code===tt.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(e))throw e;$o("Error using user provided cache. Falling back to memory cache: "+e),await Ym(n,new Uf)}}else ct(Ms,"Using default OfflineComponentProvider"),await Ym(n,new bM(void 0));return n._offlineComponents}async function FS(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ct(Ms,"Using user provided OnlineComponentProvider"),await sA(n,n._uninitializedComponentsProvider._online)):(ct(Ms,"Using default OnlineComponentProvider"),await sA(n,new kg))),n._onlineComponents}function IM(n){return FS(n).then(t=>t.syncEngine)}async function Lf(n){const t=await FS(n),e=t.eventManager;return e.onListen=hM.bind(null,t.syncEngine),e.onUnlisten=pM.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=fM.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=mM.bind(null,t.syncEngine),e}function CM(n,t,e={}){const r=new wr;return n.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const E=new F_({next:b=>{E.su(),c.enqueueAndForget(()=>U_(l,T));const I=b.docs.has(d);!I&&b.fromCache?g.reject(new ht(tt.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&b.fromCache&&p&&p.source==="server"?g.reject(new ht(tt.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(b)},error:b=>g.reject(b)}),T=new B_(od(d.path),E,{includeMetadataChanges:!0,Ta:!0});return M_(l,T)}(await Lf(n),n.asyncQueue,t,e,r)),r.promise}function DM(n,t,e={}){const r=new wr;return n.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const E=new F_({next:b=>{E.su(),c.enqueueAndForget(()=>U_(l,T)),b.fromCache&&p.source==="server"?g.reject(new ht(tt.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(b)},error:b=>g.reject(b)}),T=new B_(d,E,{includeMetadataChanges:!0,Ta:!0});return M_(l,T)}(await Lf(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(n,t,e){if(!e)throw new ht(tt.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function NM(n,t,e,r){if(t===!0&&r===!0)throw new ht(tt.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function oA(n){if(!Et.isDocumentKey(n))throw new ht(tt.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function lA(n){if(Et.isDocumentKey(n))throw new ht(tt.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function gd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":Tt()}function ei(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new ht(tt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=gd(n);throw new ht(tt.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS="firestore.googleapis.com",uA=!0;let cA=class{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new ht(tt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=GS,this.ssl=uA}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:uA;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=AS;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<ox)throw new ht(tt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}NM("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qS((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ht(tt.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ht(tt.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ht(tt.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,a){return r.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}};class _d{constructor(t,e,r,a){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cA({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ht(tt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new ht(tt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cA(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new L2;switch(r.type){case"firstParty":return new F2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ht(tt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=aA.get(e);r&&(ct("ComponentProvider","Removing Datastore"),aA.delete(e),r.terminate())}(this),Promise.resolve()}}function OM(n,t,e,r={}){var a;const l=(n=ei(n,_d))._getSettings(),c=Object.assign(Object.assign({},l),{emulatorOptions:n._getEmulatorOptions()}),d=`${t}:${e}`;l.host!==GS&&l.host!==d&&$o("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},l),{host:d,ssl:!1,emulatorOptions:r});if(!Cr(p,c)&&(n._setSettings(p),r.mockUserToken)){let g,E;if(typeof r.mockUserToken=="string")g=r.mockUserToken,E=tn.MOCK_USER;else{g=hw(r.mockUserToken,(a=n._app)===null||a===void 0?void 0:a.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new ht(tt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new tn(T)}n._authCredentials=new B2(new Ob(g,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mc=class $S{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new $S(this.firestore,t,this._query)}},An=class KS{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Go(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new KS(this.firestore,t,this._key)}},Go=class QS extends mc{constructor(t,e,r){super(t,e,od(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new An(this.firestore,null,new Et(t))}withConverter(t){return new QS(this.firestore,t,this._path)}};function mf(n,t,...e){if(n=$t(n),HS("collection","path",t),n instanceof _d){const r=Ee.fromString(t,...e);return lA(r),new Go(n,null,r)}{if(!(n instanceof An||n instanceof Go))throw new ht(tt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ee.fromString(t,...e));return lA(r),new Go(n.firestore,null,r)}}function qe(n,t,...e){if(n=$t(n),arguments.length===1&&(t=Pb.newId()),HS("doc","path",t),n instanceof _d){const r=Ee.fromString(t,...e);return oA(r),new An(n,null,new Et(r))}{if(!(n instanceof An||n instanceof Go))throw new ht(tt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ee.fromString(t,...e));return oA(r),new An(n.firestore,n instanceof Go?n.converter:null,new Et(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA="AsyncQueue";class fA{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new RS(this,"async_queue_retry"),this.bu=()=>{const r=Qm();r&&ct(hA,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=t;const e=Qm();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=Qm();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.bu)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const e=new wr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!al(t))throw t;ct(hA,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const e=this.Su.then(()=>(this.pu=!0,t().catch(r=>{this.gu=r,this.pu=!1;const a=function(c){let d=c.message||"";return c.stack&&(d=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),d}(r);throw Or("INTERNAL UNHANDLED ERROR: ",a),r}).then(r=>(this.pu=!1,r))));return this.Su=e,e}enqueueAfterDelay(t,e,r){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const a=V_.createAndSchedule(this,t,e,r,l=>this.Fu(l));return this.fu.push(a),a}Du(){this.gu&&Tt()}verifyOperationInProgress(){}async Mu(){let t;do t=this.Su,await t;while(t!==this.Su)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}function dA(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const a=e;for(const l of r)if(l in a&&typeof a[l]=="function")return!0;return!1}(n,["next","error","complete"])}let Pa=class extends _d{constructor(t,e,r,a){super(t,e,r,a),this.type="firestore",this._queue=new fA,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new fA(t),this._firestoreClient=void 0,await t}}};function PM(n,t){const e=typeof n=="object"?n:Zf(),r=typeof n=="string"?n:Df,a=Us(e,"firestore").getImmediate({identifier:r});if(!a._initialized){const l=lw("firestore");l&&OM(a,...l)}return a}function yd(n){if(n._terminated)throw new ht(tt.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||kM(n),n._firestoreClient}function kM(n){var t,e,r;const a=n._freezeSettings(),l=function(d,p,g,E){return new nV(d,p,g,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,qS(E.experimentalLongPollingOptions),E.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,a);n._componentsProvider||!((e=a.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=a.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),n._firestoreClient=new SM(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let q_=class Vg{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Vg(wn.fromBase64String(t))}catch(e){throw new ht(tt.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Vg(wn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vd=class{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new ht(tt.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new hi(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gc=class{constructor(t){this._methodName=t}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let H_=class{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ht(tt.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ht(tt.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return xt(this._lat,t._lat)||xt(this._long,t._long)}};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let G_=class{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,a){if(r.length!==a.length)return!1;for(let l=0;l<r.length;++l)if(r[l]!==a[l])return!1;return!0}(this._values,t._values)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VM=/^__.*__$/;class xM{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new js(t,this.data,this.fieldMask,e,this.fieldTransforms):new hc(t,this.data,e,this.fieldTransforms)}}let YS=class{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new js(t,this.data,this.fieldMask,e,this.fieldTransforms)}};function XS(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Tt()}}let WS=class ZS{constructor(t,e,r,a,l,c){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=a,l===void 0&&this.Bu(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new ZS(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),a=this.ku({path:r,Qu:!1});return a.$u(t),a}Ku(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),a=this.ku({path:r,Qu:!1});return a.Bu(),a}Uu(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Bf(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(XS(this.Lu)&&VM.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}},MM=class{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||dd(t)}ju(t,e,r,a=!1){return new WS({Lu:t,methodName:e,zu:r,path:hi.emptyPath(),Qu:!1,Gu:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function $_(n){const t=n._freezeSettings(),e=dd(n._databaseId);return new MM(n._databaseId,!!t.ignoreUndefinedProperties,e)}function UM(n,t,e,r,a,l={}){const c=n.ju(l.merge||l.mergeFields?2:0,t,e,a);Y_("Data must be an object, but it was:",c,r);const d=eR(r,c);let p,g;if(l.merge)p=new Pi(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const E=[];for(const T of l.mergeFields){const b=xg(t,T,e);if(!c.contains(b))throw new ht(tt.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);iR(E,b)||E.push(b)}p=new Pi(E),g=c.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,g=c.fieldTransforms;return new xM(new ui(d),p,g)}let JS=class tR extends gc{_toFieldTransform(t){if(t.Lu!==2)throw t.Lu===1?t.Wu(`${this._methodName}() can only appear at the top level of your update data`):t.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof tR}};function LM(n,t,e){return new WS({Lu:3,zu:t.settings.zu,methodName:n._methodName,Qu:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class K_ extends gc{_toFieldTransform(t){return new lS(t.path,new Ku)}isEqual(t){return t instanceof K_}}class Q_ extends gc{constructor(t,e){super(t),this.Hu=e}_toFieldTransform(t){const e=LM(this,t,!0),r=this.Hu.map(l=>ll(l,e)),a=new Xo(r);return new lS(t.path,a)}isEqual(t){return t instanceof Q_&&Cr(this.Hu,t.Hu)}}function BM(n,t,e,r){const a=n.ju(1,t,e);Y_("Data must be an object, but it was:",a,r);const l=[],c=ui.empty();zs(r,(p,g)=>{const E=X_(t,p,e);g=$t(g);const T=a.Ku(E);if(g instanceof JS)l.push(E);else{const b=ll(g,T);b!=null&&(l.push(E),c.set(E,b))}});const d=new Pi(l);return new YS(c,d,a.fieldTransforms)}function zM(n,t,e,r,a,l){const c=n.ju(1,t,e),d=[xg(t,r,e)],p=[a];if(l.length%2!=0)throw new ht(tt.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<l.length;b+=2)d.push(xg(t,l[b])),p.push(l[b+1]);const g=[],E=ui.empty();for(let b=d.length-1;b>=0;--b)if(!iR(g,d[b])){const I=d[b];let D=p[b];D=$t(D);const L=c.Ku(I);if(D instanceof JS)g.push(I);else{const O=ll(D,L);O!=null&&(g.push(I),E.set(I,O))}}const T=new Pi(g);return new YS(E,T,c.fieldTransforms)}function jM(n,t,e,r=!1){return ll(e,n.ju(r?4:3,t))}function ll(n,t){if(nR(n=$t(n)))return Y_("Unsupported field value:",t,n),eR(n,t);if(n instanceof gc)return function(r,a){if(!XS(a.Lu))throw a.Wu(`${r._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Wu(`${r._methodName}() is not currently supported inside arrays`);const l=r._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(r,a){const l=[];let c=0;for(const d of r){let p=ll(d,a.Uu(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(n,t)}return function(r,a){if((r=$t(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return SV(a.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const l=pn.fromDate(r);return{timestampValue:Vf(a.serializer,l)}}if(r instanceof pn){const l=new pn(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Vf(a.serializer,l)}}if(r instanceof H_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof q_)return{bytesValue:mS(a.serializer,r._byteString)};if(r instanceof An){const l=a.databaseId,c=r.firestore._databaseId;if(!c.isEqual(l))throw a.Wu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:S_(r.firestore._databaseId||a.databaseId,r._key.path)}}if(r instanceof G_)return function(c,d){return{mapValue:{fields:{[Fb]:{stringValue:qb},[Nf]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw d.Wu("VectorValues must only contain numeric values.");return A_(d.serializer,g)})}}}}}}(r,a);throw a.Wu(`Unsupported field value: ${gd(r)}`)}(n,t)}function eR(n,t){const e={};return xb(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):zs(n,(r,a)=>{const l=ll(a,t.qu(r));l!=null&&(e[r]=l)}),{mapValue:{fields:e}}}function nR(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof pn||n instanceof H_||n instanceof q_||n instanceof An||n instanceof gc||n instanceof G_)}function Y_(n,t,e){if(!nR(e)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(e)){const r=gd(e);throw r==="an object"?t.Wu(n+" a custom object"):t.Wu(n+" "+r)}}function xg(n,t,e){if((t=$t(t))instanceof vd)return t._internalPath;if(typeof t=="string")return X_(n,t);throw Bf("Field path arguments must be of type string or ",n,!1,void 0,e)}const FM=new RegExp("[~\\*/\\[\\]]");function X_(n,t,e){if(t.search(FM)>=0)throw Bf(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new vd(...t.split("."))._internalPath}catch{throw Bf(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Bf(n,t,e,r,a){const l=r&&!r.isEmpty(),c=a!==void 0;let d=`Function ${t}() called with invalid data`;e&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${r}`),c&&(p+=` in document ${a}`),p+=")"),new ht(tt.INVALID_ARGUMENT,d+n+p)}function iR(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(t,e,r,a,l){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new An(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new qM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(W_("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class qM extends rR{data(){return super.data()}}function W_(n,t){return typeof t=="string"?X_(n,t):t instanceof vd?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ht(tt.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Z_{}class HM extends Z_{}function aR(n,t,...e){let r=[];t instanceof Z_&&r.push(t),r=r.concat(e),function(l){const c=l.filter(p=>p instanceof J_).length,d=l.filter(p=>p instanceof Ed).length;if(c>1||c>0&&d>0)throw new ht(tt.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const a of r)n=a._apply(n);return n}class Ed extends HM{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Ed(t,e,r)}_apply(t){const e=this._parse(t);return lR(t._query,e),new mc(t.firestore,t.converter,wg(t._query,e))}_parse(t){const e=$_(t.firestore);return function(l,c,d,p,g,E,T){let b;if(g.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ht(tt.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){mA(T,E);const D=[];for(const L of T)D.push(pA(p,l,L));b={arrayValue:{values:D}}}else b=pA(p,l,T)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||mA(T,E),b=jM(d,c,T,E==="in"||E==="not-in");return Re.create(g,E,b)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function oR(n,t,e){const r=t,a=W_("where",n);return Ed._create(a,r,e)}class J_ extends Z_{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new J_(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:di.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(a,l){let c=a;const d=l.getFlattenedFilters();for(const p of d)lR(c,p),c=wg(c,p)}(t._query,e),new mc(t.firestore,t.converter,wg(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function pA(n,t,e){if(typeof(e=$t(e))=="string"){if(e==="")throw new ht(tt.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Wb(t)&&e.indexOf("/")!==-1)throw new ht(tt.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(Ee.fromString(e));if(!Et.isDocumentKey(r))throw new ht(tt.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return D0(n,new Et(r))}if(e instanceof An)return D0(n,e._key);throw new ht(tt.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gd(e)}.`)}function mA(n,t){if(!Array.isArray(n)||n.length===0)throw new ht(tt.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function lR(n,t){const e=function(a,l){for(const c of a)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new ht(tt.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new ht(tt.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class GM{convertValue(t,e="none"){switch(Vs(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ve(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ks(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw Tt()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return zs(t,(a,l)=>{r[a]=this.convertValue(l,e)}),r}convertVectorValue(t){var e,r,a;const l=(a=(r=(e=t.fields)===null||e===void 0?void 0:e[Nf].arrayValue)===null||r===void 0?void 0:r.values)===null||a===void 0?void 0:a.map(c=>ve(c.doubleValue));return new G_(l)}convertGeoPoint(t){return new H_(ve(t.latitude),ve(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=ad(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Gu(t));default:return null}}convertTimestamp(t){const e=Ps(t);return new pn(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Ee.fromString(t);Yt(TS(r));const a=new jb(r.get(1),r.get(3)),l=new Et(r.popFirst(5));return a.isEqual(e)||Or(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $M(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class uR extends rR{constructor(t,e,r,a,l,c){super(t,e,r,a,c),this._firestore=t,this._firestoreImpl=t,this.metadata=l}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new gf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(W_("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class gf extends uR{data(t={}){return super.data(t)}}class cR{constructor(t,e,r,a){this._firestore=t,this._userDataWriter=e,this._snapshot=a,this.metadata=new Cu(a.hasPendingWrites,a.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new gf(this._firestore,this._userDataWriter,r.key,r,new Cu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new ht(tt.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(d=>{const p=new gf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Cu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new gf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Cu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,E=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),E=c.indexOf(d.doc.key)),{type:KM(d.type),doc:p,oldIndex:g,newIndex:E}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function KM(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Tt()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(n){n=ei(n,An);const t=ei(n.firestore,Pa);return CM(yd(t),n._key).then(e=>pR(t,n,e))}class ty extends GM{constructor(t){super(),this.firestore=t}convertBytes(t){return new q_(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new An(this.firestore,null,e)}}function hR(n){n=ei(n,mc);const t=ei(n.firestore,Pa),e=yd(t),r=new ty(t);return sR(n._query),DM(e,n._query).then(a=>new cR(t,r,n,a))}function Mg(n,t,e){n=ei(n,An);const r=ei(n.firestore,Pa),a=$M(n.converter,t);return dR(r,[UM($_(r),"setDoc",n._key,a,n.converter!==null,e).toMutation(n._key,qo.none())])}function vr(n,t,e,...r){n=ei(n,An);const a=ei(n.firestore,Pa),l=$_(a);let c;return c=typeof(t=$t(t))=="string"||t instanceof vd?zM(l,"updateDoc",n._key,t,e,r):BM(l,"updateDoc",n._key,t),dR(a,[c.toMutation(n._key,qo.exists(!0))])}function fR(n,...t){var e,r,a;n=$t(n);let l={includeMetadataChanges:!1,source:"default"},c=0;typeof t[c]!="object"||dA(t[c])||(l=t[c],c++);const d={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(dA(t[c])){const T=t[c];t[c]=(e=T.next)===null||e===void 0?void 0:e.bind(T),t[c+1]=(r=T.error)===null||r===void 0?void 0:r.bind(T),t[c+2]=(a=T.complete)===null||a===void 0?void 0:a.bind(T)}let p,g,E;if(n instanceof An)g=ei(n.firestore,Pa),E=od(n._key.path),p={next:T=>{t[c]&&t[c](pR(g,n,T))},error:t[c+1],complete:t[c+2]};else{const T=ei(n,mc);g=ei(T.firestore,Pa),E=T._query;const b=new ty(g);p={next:I=>{t[c]&&t[c](new cR(g,b,T,I))},error:t[c+1],complete:t[c+2]},sR(n._query)}return function(b,I,D,L){const O=new F_(L),M=new B_(I,O,D);return b.asyncQueue.enqueueAndForget(async()=>M_(await Lf(b),M)),()=>{O.su(),b.asyncQueue.enqueueAndForget(async()=>U_(await Lf(b),M))}}(yd(g),E,d,p)}function dR(n,t){return function(r,a){const l=new wr;return r.asyncQueue.enqueueAndForget(async()=>gM(await IM(r),a,l)),l.promise}(yd(n),t)}function pR(n,t,e){const r=e.docs.get(t._key),a=new ty(n);return new uR(n,a,t._key,r,new Cu(e.hasPendingWrites,e.fromCache),t.converter)}function QM(){return new K_("serverTimestamp")}function zf(...n){return new Q_("arrayUnion",n)}(function(t,e=!0){(function(a){rl=a})(Ls),ni(new Vn("firestore",(r,{instanceIdentifier:a,options:l})=>{const c=r.getProvider("app").getImmediate(),d=new Pa(new z2(r.getProvider("auth-internal")),new q2(c,r.getProvider("app-check-internal")),function(g,E){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ht(tt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jb(g.options.projectId,E)}(c,a),c);return l=Object.assign({useFetchStreams:e},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),nn(y0,v0,t),nn(y0,v0,"esm2017")})();function mR(n){var t,e,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var a=n.length;for(t=0;t<a;t++)n[t]&&(e=mR(n[t]))&&(r&&(r+=" "),r+=e)}else for(e in n)n[e]&&(r&&(r+=" "),r+=e);return r}function ba(){for(var n,t,e=0,r="",a=arguments.length;e<a;e++)(n=arguments[e])&&(t=mR(n))&&(r&&(r+=" "),r+=t);return r}function YM(n){if(typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e),e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n))}YM(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);var _c=n=>typeof n=="number"&&!isNaN(n),ka=n=>typeof n=="string",kr=n=>typeof n=="function",XM=n=>ka(n)||_c(n),Ug=n=>ka(n)||kr(n)?n:null,WM=(n,t)=>n===!1||_c(n)&&n>0?n:t,Lg=n=>G.isValidElement(n)||ka(n)||kr(n)||_c(n);function ZM(n,t,e=300){let{scrollHeight:r,style:a}=n;requestAnimationFrame(()=>{a.minHeight="initial",a.height=r+"px",a.transition=`all ${e}ms`,requestAnimationFrame(()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(t,e)})})}function JM({enter:n,exit:t,appendPosition:e=!1,collapse:r=!0,collapseDuration:a=300}){return function({children:l,position:c,preventExitTransition:d,done:p,nodeRef:g,isIn:E,playToast:T}){let b=e?`${n}--${c}`:n,I=e?`${t}--${c}`:t,D=G.useRef(0);return G.useLayoutEffect(()=>{let L=g.current,O=b.split(" "),M=q=>{q.target===g.current&&(T(),L.removeEventListener("animationend",M),L.removeEventListener("animationcancel",M),D.current===0&&q.type!=="animationcancel"&&L.classList.remove(...O))};L.classList.add(...O),L.addEventListener("animationend",M),L.addEventListener("animationcancel",M)},[]),G.useEffect(()=>{let L=g.current,O=()=>{L.removeEventListener("animationend",O),r?ZM(L,p,a):p()};E||(d?O():(D.current=1,L.className+=` ${I}`,L.addEventListener("animationend",O)))},[E]),ie.createElement(ie.Fragment,null,l)}}function gA(n,t){return{content:gR(n.content,n.props),containerId:n.props.containerId,id:n.props.toastId,theme:n.props.theme,type:n.props.type,data:n.props.data||{},isLoading:n.props.isLoading,icon:n.props.icon,reason:n.removalReason,status:t}}function gR(n,t,e=!1){return G.isValidElement(n)&&!ka(n.type)?G.cloneElement(n,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:e}):kr(n)?n({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:e}):n}function tU({closeToast:n,theme:t,ariaLabel:e="close"}){return ie.createElement("button",{className:`Toastify__close-button Toastify__close-button--${t}`,type:"button",onClick:r=>{r.stopPropagation(),n(!0)},"aria-label":e},ie.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},ie.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function eU({delay:n,isRunning:t,closeToast:e,type:r="default",hide:a,className:l,controlledProgress:c,progress:d,rtl:p,isIn:g,theme:E}){let T=a||c&&d===0,b={animationDuration:`${n}ms`,animationPlayState:t?"running":"paused"};c&&(b.transform=`scaleX(${d})`);let I=ba("Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${E}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":p}),D=kr(l)?l({rtl:p,type:r,defaultClassName:I}):ba(I,l),L={[c&&d>=1?"onTransitionEnd":"onAnimationEnd"]:c&&d<1?null:()=>{g&&e()}};return ie.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":T},ie.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${E} Toastify__progress-bar--${r}`}),ie.createElement("div",{role:"progressbar","aria-hidden":T?"true":"false","aria-label":"notification timer",className:D,style:b,...L}))}var nU=1,_R=()=>`${nU++}`;function iU(n,t,e){let r=1,a=0,l=[],c=[],d=t,p=new Map,g=new Set,E=q=>(g.add(q),()=>g.delete(q)),T=()=>{c=Array.from(p.values()),g.forEach(q=>q())},b=({containerId:q,toastId:z,updateId:Y})=>{let it=q?q!==n:n!==1,ot=p.has(z)&&Y==null;return it||ot},I=(q,z)=>{p.forEach(Y=>{var it;(z==null||z===Y.props.toastId)&&((it=Y.toggle)==null||it.call(Y,q))})},D=q=>{var z,Y;(Y=(z=q.props)==null?void 0:z.onClose)==null||Y.call(z,q.removalReason),q.isActive=!1},L=q=>{if(q==null)p.forEach(D);else{let z=p.get(q);z&&D(z)}T()},O=()=>{a-=l.length,l=[]},M=q=>{var z,Y;let{toastId:it,updateId:ot}=q.props,k=ot==null;q.staleId&&p.delete(q.staleId),q.isActive=!0,p.set(it,q),T(),e(gA(q,k?"added":"updated")),k&&((Y=(z=q.props).onOpen)==null||Y.call(z))};return{id:n,props:d,observe:E,toggle:I,removeToast:L,toasts:p,clearQueue:O,buildToast:(q,z)=>{if(b(z))return;let{toastId:Y,updateId:it,data:ot,staleId:k,delay:R}=z,S=it==null;S&&a++;let N={...d,style:d.toastStyle,key:r++,...Object.fromEntries(Object.entries(z).filter(([j,P])=>P!=null)),toastId:Y,updateId:it,data:ot,isIn:!1,className:Ug(z.className||d.toastClassName),progressClassName:Ug(z.progressClassName||d.progressClassName),autoClose:z.isLoading?!1:WM(z.autoClose,d.autoClose),closeToast(j){p.get(Y).removalReason=j,L(Y)},deleteToast(){let j=p.get(Y);if(j!=null){if(e(gA(j,"removed")),p.delete(Y),a--,a<0&&(a=0),l.length>0){M(l.shift());return}T()}}};N.closeButton=d.closeButton,z.closeButton===!1||Lg(z.closeButton)?N.closeButton=z.closeButton:z.closeButton===!0&&(N.closeButton=Lg(d.closeButton)?d.closeButton:!0);let V={content:q,props:N,staleId:k};d.limit&&d.limit>0&&a>d.limit&&S?l.push(V):_c(R)?setTimeout(()=>{M(V)},R):M(V)},setProps(q){d=q},setToggle:(q,z)=>{let Y=p.get(q);Y&&(Y.toggle=z)},isToastActive:q=>{var z;return(z=p.get(q))==null?void 0:z.isActive},getSnapshot:()=>c}}var dn=new Map,Yu=[],Bg=new Set,rU=n=>Bg.forEach(t=>t(n)),yR=()=>dn.size>0;function sU(){Yu.forEach(n=>ER(n.content,n.options)),Yu=[]}var aU=(n,{containerId:t})=>{var e;return(e=dn.get(t||1))==null?void 0:e.toasts.get(n)};function vR(n,t){var e;if(t)return!!((e=dn.get(t))!=null&&e.isToastActive(n));let r=!1;return dn.forEach(a=>{a.isToastActive(n)&&(r=!0)}),r}function oU(n){if(!yR()){Yu=Yu.filter(t=>n!=null&&t.options.toastId!==n);return}if(n==null||XM(n))dn.forEach(t=>{t.removeToast(n)});else if(n&&("containerId"in n||"id"in n)){let t=dn.get(n.containerId);t?t.removeToast(n.id):dn.forEach(e=>{e.removeToast(n.id)})}}var lU=(n={})=>{dn.forEach(t=>{t.props.limit&&(!n.containerId||t.id===n.containerId)&&t.clearQueue()})};function ER(n,t){Lg(n)&&(yR()||Yu.push({content:n,options:t}),dn.forEach(e=>{e.buildToast(n,t)}))}function uU(n){var t;(t=dn.get(n.containerId||1))==null||t.setToggle(n.id,n.fn)}function TR(n,t){dn.forEach(e=>{(t==null||!(t!=null&&t.containerId)||(t==null?void 0:t.containerId)===e.id)&&e.toggle(n,t==null?void 0:t.id)})}function cU(n){let t=n.containerId||1;return{subscribe(e){let r=iU(t,n,rU);dn.set(t,r);let a=r.observe(e);return sU(),()=>{a(),dn.delete(t)}},setProps(e){var r;(r=dn.get(t))==null||r.setProps(e)},getSnapshot(){var e;return(e=dn.get(t))==null?void 0:e.getSnapshot()}}}function hU(n){return Bg.add(n),()=>{Bg.delete(n)}}function fU(n){return n&&(ka(n.toastId)||_c(n.toastId))?n.toastId:_R()}function yc(n,t){return ER(n,t),t.toastId}function Td(n,t){return{...t,type:t&&t.type||n,toastId:fU(t)}}function Ad(n){return(t,e)=>yc(t,Td(n,e))}function Ot(n,t){return yc(n,Td("default",t))}Ot.loading=(n,t)=>yc(n,Td("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function dU(n,{pending:t,error:e,success:r},a){let l;t&&(l=ka(t)?Ot.loading(t,a):Ot.loading(t.render,{...a,...t}));let c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},d=(g,E,T)=>{if(E==null){Ot.dismiss(l);return}let b={type:g,...c,...a,data:T},I=ka(E)?{render:E}:E;return l?Ot.update(l,{...b,...I}):Ot(I.render,{...b,...I}),T},p=kr(n)?n():n;return p.then(g=>d("success",r,g)).catch(g=>d("error",e,g)),p}Ot.promise=dU;Ot.success=Ad("success");Ot.info=Ad("info");Ot.error=Ad("error");Ot.warning=Ad("warning");Ot.warn=Ot.warning;Ot.dark=(n,t)=>yc(n,Td("default",{theme:"dark",...t}));function pU(n){oU(n)}Ot.dismiss=pU;Ot.clearWaitingQueue=lU;Ot.isActive=vR;Ot.update=(n,t={})=>{let e=aU(n,t);if(e){let{props:r,content:a}=e,l={delay:100,...r,...t,toastId:t.toastId||n,updateId:_R()};l.toastId!==n&&(l.staleId=n);let c=l.render||a;delete l.render,yc(c,l)}};Ot.done=n=>{Ot.update(n,{progress:1})};Ot.onChange=hU;Ot.play=n=>TR(!0,n);Ot.pause=n=>TR(!1,n);function mU(n){var t;let{subscribe:e,getSnapshot:r,setProps:a}=G.useRef(cU(n)).current;a(n);let l=(t=G.useSyncExternalStore(e,r,r))==null?void 0:t.slice();function c(d){if(!l)return[];let p=new Map;return n.newestOnTop&&l.reverse(),l.forEach(g=>{let{position:E}=g.props;p.has(E)||p.set(E,[]),p.get(E).push(g)}),Array.from(p,g=>d(g[0],g[1]))}return{getToastToRender:c,isToastActive:vR,count:l==null?void 0:l.length}}function gU(n){let[t,e]=G.useState(!1),[r,a]=G.useState(!1),l=G.useRef(null),c=G.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:d,pauseOnHover:p,closeToast:g,onClick:E,closeOnClick:T}=n;uU({id:n.toastId,containerId:n.containerId,fn:e}),G.useEffect(()=>{if(n.pauseOnFocusLoss)return b(),()=>{I()}},[n.pauseOnFocusLoss]);function b(){document.hasFocus()||M(),window.addEventListener("focus",O),window.addEventListener("blur",M)}function I(){window.removeEventListener("focus",O),window.removeEventListener("blur",M)}function D(k){if(n.draggable===!0||n.draggable===k.pointerType){q();let R=l.current;c.canCloseOnClick=!0,c.canDrag=!0,R.style.transition="none",n.draggableDirection==="x"?(c.start=k.clientX,c.removalDistance=R.offsetWidth*(n.draggablePercent/100)):(c.start=k.clientY,c.removalDistance=R.offsetHeight*(n.draggablePercent===80?n.draggablePercent*1.5:n.draggablePercent)/100)}}function L(k){let{top:R,bottom:S,left:N,right:V}=l.current.getBoundingClientRect();k.nativeEvent.type!=="touchend"&&n.pauseOnHover&&k.clientX>=N&&k.clientX<=V&&k.clientY>=R&&k.clientY<=S?M():O()}function O(){e(!0)}function M(){e(!1)}function q(){c.didMove=!1,document.addEventListener("pointermove",Y),document.addEventListener("pointerup",it)}function z(){document.removeEventListener("pointermove",Y),document.removeEventListener("pointerup",it)}function Y(k){let R=l.current;if(c.canDrag&&R){c.didMove=!0,t&&M(),n.draggableDirection==="x"?c.delta=k.clientX-c.start:c.delta=k.clientY-c.start,c.start!==k.clientX&&(c.canCloseOnClick=!1);let S=n.draggableDirection==="x"?`${c.delta}px, var(--y)`:`0, calc(${c.delta}px + var(--y))`;R.style.transform=`translate3d(${S},0)`,R.style.opacity=`${1-Math.abs(c.delta/c.removalDistance)}`}}function it(){z();let k=l.current;if(c.canDrag&&c.didMove&&k){if(c.canDrag=!1,Math.abs(c.delta)>c.removalDistance){a(!0),n.closeToast(!0),n.collapseAll();return}k.style.transition="transform 0.2s, opacity 0.2s",k.style.removeProperty("transform"),k.style.removeProperty("opacity")}}let ot={onPointerDown:D,onPointerUp:L};return d&&p&&(ot.onMouseEnter=M,n.stacked||(ot.onMouseLeave=O)),T&&(ot.onClick=k=>{E&&E(k),c.canCloseOnClick&&g(!0)}),{playToast:O,pauseToast:M,isRunning:t,preventExitTransition:r,toastRef:l,eventHandlers:ot}}var _U=typeof window<"u"?G.useLayoutEffect:G.useEffect,wd=({theme:n,type:t,isLoading:e,...r})=>ie.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:n==="colored"?"currentColor":`var(--toastify-icon-color-${t})`,...r});function yU(n){return ie.createElement(wd,{...n},ie.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function vU(n){return ie.createElement(wd,{...n},ie.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function EU(n){return ie.createElement(wd,{...n},ie.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function TU(n){return ie.createElement(wd,{...n},ie.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function AU(){return ie.createElement("div",{className:"Toastify__spinner"})}var zg={info:vU,warning:yU,success:EU,error:TU,spinner:AU},wU=n=>n in zg;function bU({theme:n,type:t,isLoading:e,icon:r}){let a=null,l={theme:n,type:t};return r===!1||(kr(r)?a=r({...l,isLoading:e}):G.isValidElement(r)?a=G.cloneElement(r,l):e?a=zg.spinner():wU(t)&&(a=zg[t](l))),a}var SU=n=>{let{isRunning:t,preventExitTransition:e,toastRef:r,eventHandlers:a,playToast:l}=gU(n),{closeButton:c,children:d,autoClose:p,onClick:g,type:E,hideProgressBar:T,closeToast:b,transition:I,position:D,className:L,style:O,progressClassName:M,updateId:q,role:z,progress:Y,rtl:it,toastId:ot,deleteToast:k,isIn:R,isLoading:S,closeOnClick:N,theme:V,ariaLabel:j}=n,P=ba("Toastify__toast",`Toastify__toast-theme--${V}`,`Toastify__toast--${E}`,{"Toastify__toast--rtl":it},{"Toastify__toast--close-on-click":N}),ge=kr(L)?L({rtl:it,position:D,type:E,defaultClassName:P}):ba(P,L),se=bU(n),at=!!Y||!p,_t={closeToast:b,type:E,theme:V},dt=null;return c===!1||(kr(c)?dt=c(_t):G.isValidElement(c)?dt=G.cloneElement(c,_t):dt=tU(_t)),ie.createElement(I,{isIn:R,done:k,position:D,preventExitTransition:e,nodeRef:r,playToast:l},ie.createElement("div",{id:ot,tabIndex:0,onClick:g,"data-in":R,className:ge,...a,style:O,ref:r,...R&&{role:z,"aria-label":j}},se!=null&&ie.createElement("div",{className:ba("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!S})},se),gR(d,n,!t),dt,!n.customProgressBar&&ie.createElement(eU,{...q&&!at?{key:`p-${q}`}:{},rtl:it,theme:V,delay:p,isRunning:t,isIn:R,closeToast:b,hide:T,type:E,className:M,controlledProgress:at,progress:Y||0})))},RU=(n,t=!1)=>({enter:`Toastify--animate Toastify__${n}-enter`,exit:`Toastify--animate Toastify__${n}-exit`,appendPosition:t}),IU=JM(RU("bounce",!0)),CU={position:"top-right",transition:IU,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:n=>n.altKey&&n.code==="KeyT"};function DU(n){let t={...CU,...n},e=n.stacked,[r,a]=G.useState(!0),l=G.useRef(null),{getToastToRender:c,isToastActive:d,count:p}=mU(t),{className:g,style:E,rtl:T,containerId:b,hotKeys:I}=t;function D(O){let M=ba("Toastify__toast-container",`Toastify__toast-container--${O}`,{"Toastify__toast-container--rtl":T});return kr(g)?g({position:O,rtl:T,defaultClassName:M}):ba(M,Ug(g))}function L(){e&&(a(!0),Ot.play())}return _U(()=>{var O;if(e){let M=l.current.querySelectorAll('[data-in="true"]'),q=12,z=(O=t.position)==null?void 0:O.includes("top"),Y=0,it=0;Array.from(M).reverse().forEach((ot,k)=>{let R=ot;R.classList.add("Toastify__toast--stacked"),k>0&&(R.dataset.collapsed=`${r}`),R.dataset.pos||(R.dataset.pos=z?"top":"bot");let S=Y*(r?.2:1)+(r?0:q*k);R.style.setProperty("--y",`${z?S:S*-1}px`),R.style.setProperty("--g",`${q}`),R.style.setProperty("--s",`${1-(r?it:0)}`),Y+=R.offsetHeight,it+=.025})}},[r,p,e]),G.useEffect(()=>{function O(M){var q;let z=l.current;I(M)&&((q=z.querySelector('[tabIndex="0"]'))==null||q.focus(),a(!1),Ot.pause()),M.key==="Escape"&&(document.activeElement===z||z!=null&&z.contains(document.activeElement))&&(a(!0),Ot.play())}return document.addEventListener("keydown",O),()=>{document.removeEventListener("keydown",O)}},[I]),ie.createElement("section",{ref:l,className:"Toastify",id:b,onMouseEnter:()=>{e&&(a(!1),Ot.pause())},onMouseLeave:L,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":t["aria-label"]},c((O,M)=>{let q=M.length?{...E}:{...E,pointerEvents:"none"};return ie.createElement("div",{tabIndex:-1,className:D(O),"data-stacked":e,style:q,key:`c-${O}`},M.map(({content:z,props:Y})=>ie.createElement(SU,{...Y,stacked:e,collapseAll:L,isIn:d(Y.toastId,Y.containerId),key:`t-${Y.key}`},z)))}))}const NU={apiKey:"AIzaSyB2ZjRQCddzIgDORyJASbG9x1WoOao8Rdw",authDomain:"chat-app-24e57.firebaseapp.com",projectId:"chat-app-24e57",storageBucket:"chat-app-24e57.firebasestorage.app",messagingSenderId:"103301429223",appId:"1:103301429223:web:162d876f442617e63c6f42",measurementId:"G-T1QJ4LP7WS"},ey=yw(NU);yP(ey);const Ba=M2(ey),Ve=PM(ey),OU=async(n,t,e)=>{try{const a=(await Tk(Ba,t,e)).user;await Mg(qe(Ve,"users",a.uid),{id:a.uid,username:n.toLowerCase(),email:t,name:"",avatar:"",bio:"Hey,there i am using chat app",lastSeen:Date.now()}),await Mg(qe(Ve,"chats",a.uid),{chatsData:[]})}catch(r){console.error(r),Ot.error(r.code.split("/")[1].split("-").join(" "))}},PU=async(n,t)=>{try{await Ak(Ba,n,t)}catch(e){console.error(e),Ot.error(e.code.split("/")[1].split("-").join(" "))}},kU=async()=>{try{await Sk(Ba)}catch(n){console.error(n),Ot.error(n.code.split("/")[1].split("-").join(" "))}},VU=async n=>{if(!n)return Ot.error("Enter your email"),null;try{const t=mf(Ve,"users"),e=aR(t,oR("email","==",n));(await hR(e)).empty?Ot.error("Email doesn't exist"):(await Ek(Ba,n),Ot.success("Reset Email Sent"))}catch(t){console.error(t),Ot.error(t.message)}},xU=()=>{const[n,t]=G.useState("Sign up"),[e,r]=G.useState(""),[a,l]=G.useState(""),[c,d]=G.useState(""),p=g=>{g.preventDefault(),n==="Sign up"?OU(e,a,c):PU(a,c)};return et.jsx("div",{children:et.jsxs("div",{className:"login",children:[et.jsx("img",{src:On.logo_big,alt:"",className:"logo"}),et.jsxs("form",{onSubmit:p,className:"login-form",children:[et.jsx("h2",{children:n}),n==="Sign up"?et.jsx("input",{onChange:g=>r(g.target.value),value:e,type:"text",className:"form-input",placeholder:"Username",required:!0}):null,et.jsx("input",{onChange:g=>l(g.target.value),value:a,type:"email",className:"form-input",placeholder:"Email address",required:!0}),et.jsx("input",{onChange:g=>d(g.target.value),value:c,type:"password",className:"form-input",placeholder:"Password",required:!0}),et.jsx("button",{type:"submit",children:n==="Sign up"?"Create account":"Login now"}),et.jsxs("div",{className:"login-term",children:[et.jsx("input",{type:"checkbox"}),et.jsx("p",{children:"Agree to the terms of use & privacy policy"})]}),et.jsxs("div",{className:"login-forgot",children:[n==="Sign up"?et.jsxs("p",{className:"login-toggle",children:["Already have an account ",et.jsx("span",{onClick:()=>t("Login"),children:"click here"})]}):et.jsxs("p",{className:"login-toggle",children:["You don't have account ",et.jsx("span",{onClick:()=>t("Sign up"),children:"click here"})]}),n==="Login"?et.jsxs("p",{className:"login-toggle",children:["Forget Password? ",et.jsx("span",{onClick:()=>VU(a),children:"Reset here"})]}):null]})]})]})})},_A="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Jn.UNAUTHENTICATED=new Jn(null),Jn.GOOGLE_CREDENTIALS=new Jn("google-credentials-uid"),Jn.FIRST_PARTY=new Jn("first-party-uid"),Jn.MOCK_USER=new Jn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ul="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=new sc("@firebase/firestore");function jf(n,...t){if(Jo.logLevel<=Dt.DEBUG){const e=t.map(ny);Jo.debug(`Firestore (${ul}): ${n}`,...e)}}function AR(n,...t){if(Jo.logLevel<=Dt.ERROR){const e=t.map(ny);Jo.error(`Firestore (${ul}): ${n}`,...e)}}function MU(n,...t){if(Jo.logLevel<=Dt.WARN){const e=t.map(ny);Jo.warn(`Firestore (${ul}): ${n}`,...e)}}function ny(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(n="Unexpected state"){const t=`FIRESTORE (${ul}) INTERNAL ASSERTION FAILED: `+n;throw AR(t),new Error(t)}function Ff(n,t){n||He()}function UU(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA="ok",LU="cancelled",xu="unknown",ne="invalid-argument",BU="deadline-exceeded",zU="not-found",jU="permission-denied",jg="unauthenticated",FU="resource-exhausted",tl="failed-precondition",qU="aborted",HU="out-of-range",GU="unimplemented",$U="internal",KU="unavailable";class jt extends xn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QU{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class YU{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Jn.UNAUTHENTICATED))}shutdown(){}}class XU{constructor(t){this.auth=null,t.onInit(e=>{this.auth=e})}getToken(){return this.auth?this.auth.getToken().then(t=>t?(Ff(typeof t.accessToken=="string"),new QU(t.accessToken,new Jn(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}class WU{constructor(t,e,r){this.t=t,this.i=e,this.o=r,this.type="FirstParty",this.user=Jn.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const t=this.l();return t&&this.u.set("Authorization",t),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class ZU{constructor(t,e,r){this.t=t,this.i=e,this.o=r}getToken(){return Promise.resolve(new WU(this.t,this.i,this.o))}start(t,e){t.enqueueRetryable(()=>e(Jn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vA{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JU{constructor(t,e){this.h=e,this.appCheck=null,this.m=null,En(t)&&t.settings.appCheckToken&&(this.m=t.settings.appCheckToken),e.onInit(r=>{this.appCheck=r})}getToken(){return this.m?Promise.resolve(new vA(this.m)):this.appCheck?this.appCheck.getToken().then(t=>t?(Ff(typeof t.token=="string"),new vA(t.token)):null):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL{constructor(t,e,r,a,l,c,d,p,g){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g}}const Fg="(default)";class qf{constructor(t,e){this.projectId=t,this.database=e||Fg}static empty(){return new qf("","")}get isDefaultDatabase(){return this.database===Fg}isEqual(t){return t instanceof qf&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA="__name__";class Oi{constructor(t,e,r){e===void 0?e=0:e>t.length&&He(),r===void 0?r=t.length-e:r>t.length-e&&He(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Oi.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Oi?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let a=0;a<r;a++){const l=Oi.compareSegments(t.get(a),e.get(a));if(l!==0)return l}return Math.sign(t.length-e.length)}static compareSegments(t,e){const r=Oi.isNumericId(t),a=Oi.isNumericId(e);return r&&!a?-1:!r&&a?1:r&&a?Oi.extractNumericId(t).compare(Oi.extractNumericId(e)):t<e?-1:t>e?1:0}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Ar.fromString(t.substring(4,t.length-2))}}class ti extends Oi{construct(t,e,r){return new ti(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new jt(ne,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(a=>a.length>0))}return new ti(e)}static emptyPath(){return new ti([])}}const eL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ci extends Oi{construct(t,e,r){return new ci(t,e,r)}static isValidIdentifier(t){return eL.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ci.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===EA}static keyField(){return new ci([EA])}static fromServerFormat(t){const e=[];let r="",a=0;const l=()=>{if(r.length===0)throw new jt(ne,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let c=!1;for(;a<t.length;){const d=t[a];if(d==="\\"){if(a+1===t.length)throw new jt(ne,"Path has trailing escape character: "+t);const p=t[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new jt(ne,"Path has invalid escape sequence: "+t);r+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(r+=d,a++):(l(),a++)}if(l(),c)throw new jt(ne,"Unterminated ` in path: "+t);return new ci(e)}static emptyPath(){return new ci([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(t){this.path=t}static fromPath(t){return new Bo(ti.fromString(t))}static fromName(t){return new Bo(ti.fromString(t).popFirst(5))}static empty(){return new Bo(ti.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ti.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return ti.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Bo(new ti(t.slice()))}}function iy(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":He()}function nL(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new jt(ne,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=iy(n);throw new jt(ne,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wR(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yh=null;function iL(){return Yh===null?Yh=function(){return 268435456+Math.round(2147483648*Math.random())}():Yh++,"0x"+Yh.toString(16)}function Hf(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm="RestConnection",rL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sL{get A(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.T=e+"://"+t.host,this.P=`projects/${r}/databases/${a}`,this.R=this.databaseId.database===Fg?`project_id=${r}`:`project_id=${r}&database_id=${a}`}I(t,e,r,a,l){const c=iL(),d=this.V(t,e.toUriEncodedString());jf(Xm,`Sending RPC '${t}' ${c}:`,d,r);const p={"google-cloud-resource-prefix":this.P,"x-goog-request-params":this.R};return this.p(p,a,l),this.F(t,d,p,r).then(g=>(jf(Xm,`Received RPC '${t}' ${c}: `,g),g),g=>{throw MU(Xm,`RPC '${t}' ${c} failed with error: `,g,"url: ",d,"request:",r),g})}v(t,e,r,a,l,c){return this.I(t,e,r,a,l)}p(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ul}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((a,l)=>t[l]=a),r&&r.headers.forEach((a,l)=>t[l]=a)}V(t,e){const r=rL[t];return`${this.T}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var TA,zt;function AA(n){if(n===void 0)return AR("RPC_ERROR","HTTP error has no status"),xu;switch(n){case 200:return yA;case 400:return tl;case 401:return jg;case 403:return jU;case 404:return zU;case 409:return qU;case 416:return HU;case 429:return FU;case 499:return LU;case 500:return xu;case 501:return GU;case 503:return KU;case 504:return BU;default:return n>=200&&n<300?yA:n>=400&&n<500?tl:n>=500&&n<600?$U:xu}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(zt=TA||(TA={}))[zt.OK=0]="OK",zt[zt.CANCELLED=1]="CANCELLED",zt[zt.UNKNOWN=2]="UNKNOWN",zt[zt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",zt[zt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",zt[zt.NOT_FOUND=5]="NOT_FOUND",zt[zt.ALREADY_EXISTS=6]="ALREADY_EXISTS",zt[zt.PERMISSION_DENIED=7]="PERMISSION_DENIED",zt[zt.UNAUTHENTICATED=16]="UNAUTHENTICATED",zt[zt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",zt[zt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",zt[zt.ABORTED=10]="ABORTED",zt[zt.OUT_OF_RANGE=11]="OUT_OF_RANGE",zt[zt.UNIMPLEMENTED=12]="UNIMPLEMENTED",zt[zt.INTERNAL=13]="INTERNAL",zt[zt.UNAVAILABLE=14]="UNAVAILABLE",zt[zt.DATA_LOSS=15]="DATA_LOSS";class aL extends sL{D(t,e){throw new Error("Not supported by FetchConnection")}async F(t,e,r,a){var l;const c=JSON.stringify(a);let d;try{d=await fetch(e,{method:"POST",headers:r,body:c})}catch(p){const g=p;throw new jt(AA(g.status),"Request failed with error: "+g.statusText)}if(!d.ok){let p=await d.json();Array.isArray(p)&&(p=p[0]);const g=(l=p==null?void 0:p.error)===null||l===void 0?void 0:l.message;throw new jt(AA(d.status),`Request failed with error: ${g??d.statusText}`)}return d.json()}}function Xu(n,t){return n<t?-1:n>t?1:0}function bR(n,t,e){return n.length===t.length&&n.every((r,a)=>e(r,t[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function bd(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oL extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new oL("Invalid base64 string: "+l):l}}(t);return new Vr(e)}static fromUint8Array(t){const e=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(t);return new Vr(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let a=0;a<e.length;a++)r[a]=e.charCodeAt(a);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Xu(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Vr.EMPTY_BYTE_STRING=new Vr("");const lL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qg(n){if(Ff(!!n),typeof n=="string"){let t=0;const e=lL.exec(n);if(Ff(!!e),e[1]){let a=e[1];a=(a+"000000000").substr(0,9),t=Number(a)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ni(n.seconds),nanos:Ni(n.nanos)}}function Ni(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function bA(n){return typeof n=="string"?Vr.fromBase64String(n):Vr.fromUint8Array(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA=-62135596800,RA=1e6;class Sr{static now(){return Sr.fromMillis(Date.now())}static fromDate(t){return Sr.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*RA);return new Sr(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new jt(ne,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new jt(ne,"Timestamp nanoseconds out of range: "+e);if(t<SA)throw new jt(ne,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new jt(ne,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/RA}_compareTo(t){return this.seconds===t.seconds?Xu(this.nanoseconds,t.nanoseconds):Xu(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-SA;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uL(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function IA(n){const t=qg(n.mapValue.fields.__local_write_time__.timestampValue);return new Sr(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR="__type__",cL="__max__",RR="__vector__",hL="value";function CA(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?uL(n)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===cL}(n)?9007199254740991:function(e){var r,a;return((a=(((r=e==null?void 0:e.mapValue)===null||r===void 0?void 0:r.fields)||{})[SR])===null||a===void 0?void 0:a.stringValue)===RR}(n)?10:11:He()}function Hg(n,t){if(n===t)return!0;const e=CA(n);if(e!==CA(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return IA(n).isEqual(IA(t));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=qg(a.timestampValue),d=qg(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(a,l){return bA(a.bytesValue).isEqual(bA(l.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(a,l){return Ni(a.geoPointValue.latitude)===Ni(l.geoPointValue.latitude)&&Ni(a.geoPointValue.longitude)===Ni(l.geoPointValue.longitude)}(n,t);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return Ni(a.integerValue)===Ni(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=Ni(a.doubleValue),d=Ni(l.doubleValue);return c===d?Hf(c)===Hf(d):isNaN(c)&&isNaN(d)}return!1}(n,t);case 9:return bR(n.arrayValue.values||[],t.arrayValue.values||[],Hg);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(wA(c)!==wA(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!Hg(c[p],d[p])))return!1;return!0}(n,t);default:return He()}}function Wm(n){return!!n&&"mapValue"in n}function Mu(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return bd(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Mu(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Mu(n.arrayValue.values[e]);return t}return Object.assign({},n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(t,e){this.comparator=t,this.root=e||Ye.EMPTY}insert(t,e){return new Gf(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(t){return new Gf(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const a=this.comparator(t,r.key);if(a===0)return e+r.left.size;a<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Xh(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Xh(this.root,t,this.comparator,!1)}getReverseIterator(){return new Xh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Xh(this.root,t,this.comparator,!0)}}class Xh{constructor(t,e,r,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!t.isEmpty();)if(l=e?r(t.key,e):1,e&&a&&(l*=-1),l<0)t=this.isReverse?t.left:t.right;else{if(l===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ye{constructor(t,e,r,a,l){this.key=t,this.value=e,this.color=r??Ye.RED,this.left=a??Ye.EMPTY,this.right=l??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,a,l){return new Ye(t??this.key,e??this.value,r??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let a=this;const l=r(t,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(t,e,r),null):l===0?a.copy(null,e,null,null,null):a.copy(null,null,null,null,a.right.insert(t,e,r)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,a=this;if(e(t,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(t,e),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),e(t,a.key)===0){if(a.right.isEmpty())return Ye.EMPTY;r=a.right.min(),a=a.copy(r.key,r.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(t,e))}return a.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw He();const t=this.left.check();if(t!==this.right.check())throw He();return t+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw He()}get value(){throw He()}get color(){throw He()}get left(){throw He()}get right(){throw He()}copy(t,e,r,a,l){return this}insert(t,e,r){return new Ye(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(t){this.comparator=t,this.data=new Gf(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const a=r.getNext();if(this.comparator(a.key,t[1])>=0)return;e(a.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new DA(this.data.getIterator())}getIteratorFrom(t){return new DA(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof $f)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const a=e.getNext().key,l=r.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new $f(this.comparator);return e.data=t,e}}class DA{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(t){this.fields=t,t.sort(ci.comparator)}static empty(){return new Wu([])}unionWith(t){let e=new $f(ci.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Wu(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return bR(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(t){this.value=t}static empty(){return new Zu({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Wm(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Mu(e)}setAll(t){let e=ci.emptyPath(),r={},a=[];t.forEach((c,d)=>{if(!e.isImmediateParentOf(d)){const p=this.getFieldsMap(e);this.applyChanges(p,r,a),r={},a=[],e=d.popLast()}c?r[d.lastSegment()]=Mu(c):a.push(d.lastSegment())});const l=this.getFieldsMap(e);this.applyChanges(l,r,a)}delete(t){const e=this.field(t.popLast());Wm(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Hg(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let a=e.mapValue.fields[t.get(r)];Wm(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=a),e=a}return e.mapValue.fields}applyChanges(t,e,r){bd(e,(a,l)=>t[a]=l);for(const a of r)delete t[a]}clone(){return new Zu(Mu(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{constructor(t,e=null,r=[],a=[],l=null,c="F",d=null,p=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.N=null,this.O=null,this.q=null,this.startAt,this.endAt}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hf(t)?"-0":t}}function dL(n,t){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!Hf(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(t)?function(r){return{integerValue:""+r}}(t):IR(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(){this._=void 0}}class pL extends Sd{}class mL extends Sd{constructor(t){super(),this.elements=t}}class gL extends Sd{constructor(t){super(),this.elements=t}}class _L extends Sd{constructor(t,e){super(),this.serializer=t,this.B=e}}class Uu{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Uu}static exists(t){return new Uu(void 0,t)}static updateTime(t){return new Uu(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}class Rd{}class yL extends Rd{constructor(t,e,r,a=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class CR extends Rd{constructor(t,e,r,a,l=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}class vL extends Rd{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class EL extends Rd{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}class TL{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Gg(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function AL(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function wL(n,t){return Gg(n,t.toTimestamp())}function DR(n,t){return $g(n,t).canonicalString()}function $g(n,t){const e=function(a){return new ti(["projects",a.projectId,"databases",a.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Kg(n,t){return DR(n.databaseId,t.path)}function NA(n,t,e){return{name:Kg(n,t),fields:e.value.mapValue.fields}}function bL(n,t){let e;if(t instanceof yL)e={update:NA(n,t.key,t.value)};else if(t instanceof vL)e={delete:Kg(n,t.key)};else if(t instanceof CR)e={update:NA(n,t.key,t.data),updateMask:SL(t.fieldMask)};else{if(!(t instanceof EL))return He();e={verify:Kg(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(l,c){const d=c.transform;if(d instanceof pL)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof mL)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof gL)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof _L)return{fieldPath:c.field.canonicalString(),increment:d.B};throw He()}(0,r))),t.precondition.isNone||(e.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:wL(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:He()}(n,t.precondition)),e}function SL(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(n){return new TL(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL{}class IL extends RL{constructor(t,e,r,a){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=a,this.Z=!1}X(){if(this.Z)throw new jt(tl,"The client has already been terminated.")}I(t,e,r,a){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.I(t,$g(e,r),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===jg&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new jt(xu,l.toString())})}v(t,e,r,a,l){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.v(t,$g(e,r),a,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===jg&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new jt(xu,c.toString())})}terminate(){this.Z=!0,this.connection.terminate()}}async function CL(n,t){const e=UU(n),r={writes:t.map(a=>bL(e.serializer,a))};await e.I("Commit",e.serializer.databaseId,ti.emptyPath(),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR="ComponentProvider",Lu=new Map;function DL(n){if(n._terminated)throw new jt(tl,"The client has already been terminated.");if(!Lu.has(n)){jf(NR,"Initializing Datastore");const t=function(l){return new aL(l)}(function(l,c,d,p){return new tL(l,c,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,wR(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,n.app.options.appId||"",n._persistenceKey,n._freezeSettings())),e=ry(n._databaseId),r=function(l,c,d,p){return new IL(l,c,d,p)}(n._authCredentials,n._appCheckCredentials,t,e);Lu.set(n,r)}return Lu.get(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NL=1048576,OL="firestore.googleapis.com",OA=!0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new jt(ne,"Can't provide ssl option if host option is not set");this.host=OL,this.ssl=OA}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:OA;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<NL)throw new jt(ne,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(l,c,d,p){if(c===!0&&p===!0)throw new jt(ne,`${l} and ${d} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wR((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new jt(ne,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new jt(ne,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new jt(ne,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,a){return r.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class PL{constructor(t,e,r,a){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new PA({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new jt(tl,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new jt(tl,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new PA(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new YU;switch(r.type){case"firstParty":return new ZU(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new jt(ne,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Lu.get(e);r&&(jf(NR,"Removing Datastore"),Lu.delete(e),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new sy(this.firestore,t,this._query)}}class cl{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ay(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new cl(this.firestore,t,this._key)}}class ay extends sy{constructor(t,e,r){super(t,e,function(l){return new fL(l)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new cl(this.firestore,null,new Bo(t))}withConverter(t){return new ay(this.firestore,t,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ju(Vr.fromBase64String(t))}catch(e){throw new jt(ne,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ju(Vr.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new jt(ne,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ci(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new jt(ne,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new jt(ne,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Xu(this._lat,t._lat)||Xu(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,a){if(r.length!==a.length)return!1;for(let l=0;l<r.length;++l)if(r[l]!==a[l])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kL=/^__.*__$/;class kR{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new CR(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function VR(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw He()}}class uy{constructor(t,e,r,a,l,c){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=a,l===void 0&&this.et(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get rt(){return this.settings.rt}nt(t){return new uy(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}it(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),a=this.nt({path:r,st:!1});return a.ot(t),a}ut(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),a=this.nt({path:r,st:!1});return a.et(),a}_t(t){return this.nt({path:void 0,st:!0})}ct(t){return Kf(t,this.settings.methodName,this.settings.lt||!1,this.path,this.settings.ht)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}et(){if(this.path)for(let t=0;t<this.path.length;t++)this.ot(this.path.get(t))}ot(t){if(t.length===0)throw this.ct("Document fields must not be empty");if(VR(this.rt)&&kL.test(t))throw this.ct('Document fields cannot begin and end with "__"')}}class VL{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||ry(t)}dt(t,e,r,a=!1){return new uy({rt:t,methodName:e,ht:r,path:ci.emptyPath(),st:!1,lt:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xL(n){const t=n._freezeSettings(),e=ry(n._databaseId);return new VL(n._databaseId,!!t.ignoreUndefinedProperties,e)}class Id extends ly{_toFieldTransform(t){if(t.rt!==2)throw t.rt===1?t.ct(`${this._methodName}() can only appear at the top level of your update data`):t.ct(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Id}}function ML(n,t,e,r){const a=n.dt(1,t,e);MR("Data must be an object, but it was:",a,r);const l=[],c=Zu.empty();bd(r,(p,g)=>{const E=UR(t,p,e);g=$t(g);const T=a.ut(E);if(g instanceof Id)l.push(E);else{const b=Cd(g,T);b!=null&&(l.push(E),c.set(E,b))}});const d=new Wu(l);return new kR(c,d,a.fieldTransforms)}function UL(n,t,e,r,a,l){const c=n.dt(1,t,e),d=[kA(t,r,e)],p=[a];if(l.length%2!=0)throw new jt(ne,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<l.length;b+=2)d.push(kA(t,l[b])),p.push(l[b+1]);const g=[],E=Zu.empty();for(let b=d.length-1;b>=0;--b)if(!zL(g,d[b])){const I=d[b];let D=p[b];D=$t(D);const L=c.ut(I);if(D instanceof Id)g.push(I);else{const O=Cd(D,L);O!=null&&(g.push(I),E.set(I,O))}}const T=new Wu(g);return new kR(E,T,c.fieldTransforms)}function Cd(n,t){if(xR(n=$t(n)))return MR("Unsupported field value:",t,n),LL(n,t);if(n instanceof ly)return function(r,a){if(!VR(a.rt))throw a.ct(`${r._methodName}() can only be used with update() and set()`);if(!a.path)throw a.ct(`${r._methodName}() is not currently supported inside arrays`);const l=r._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.st&&t.rt!==4)throw t.ct("Nested arrays are not supported");return function(r,a){const l=[];let c=0;for(const d of r){let p=Cd(d,a._t(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(n,t)}return function(r,a){if((r=$t(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return dL(a.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const l=Sr.fromDate(r);return{timestampValue:Gg(a.serializer,l)}}if(r instanceof Sr){const l=new Sr(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Gg(a.serializer,l)}}if(r instanceof OR)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ju)return{bytesValue:AL(a.serializer,r._byteString)};if(r instanceof cl){const l=a.databaseId,c=r.firestore._databaseId;if(!c.isEqual(l))throw a.ct(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:DR(r.firestore._databaseId||a.databaseId,r._key.path)}}if(r instanceof PR)return function(c,d){return{mapValue:{fields:{[SR]:{stringValue:RR},[hL]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw d.ct("VectorValues must only contain numeric values.");return IR(d.serializer,g)})}}}}}}(r,a);throw a.ct(`Unsupported field value: ${iy(r)}`)}(n,t)}function LL(n,t){const e={};return function(a){for(const l in a)if(Object.prototype.hasOwnProperty.call(a,l))return!1;return!0}(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):bd(n,(r,a)=>{const l=Cd(a,t.it(r));l!=null&&(e[r]=l)}),{mapValue:{fields:e}}}function xR(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Sr||n instanceof OR||n instanceof Ju||n instanceof cl||n instanceof ly||n instanceof PR)}function MR(n,t,e){if(!xR(e)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(e)){const r=iy(e);throw r==="an object"?t.ct(n+" a custom object"):t.ct(n+" "+r)}}function kA(n,t,e){if((t=$t(t))instanceof oy)return t._internalPath;if(typeof t=="string")return UR(n,t);throw Kf("Field path arguments must be of type string or ",n,!1,void 0,e)}const BL=new RegExp("[~\\*/\\[\\]]");function UR(n,t,e){if(t.search(BL)>=0)throw Kf(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new oy(...t.split("."))._internalPath}catch{throw Kf(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Kf(n,t,e,r,a){const l=r&&!r.isEmpty(),c=a!==void 0;let d=`Function ${t}() called with invalid data`;e&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${r}`),c&&(p+=` in document ${a}`),p+=")"),new jt(ne,d+n+p)}function zL(n,t){return n.some(e=>e.isEqual(t))}function VA(n,t,e,...r){const a=xL((n=nL(n,cl)).firestore);let l;return l=typeof(t=$t(t))=="string"||t instanceof oy?UL(a,"updateDoc",n._key,t,e,r):ML(a,"updateDoc",n._key,t),CL(DL(n.firestore),[l.toMutation(n._key,Uu.exists(!0))])}(function(){(function(e){ul=e})(`${Ls}_lite`),ni(new Vn("firestore/lite",(t,{instanceIdentifier:e,options:r})=>{const a=t.getProvider("app").getImmediate(),l=new PL(new XU(t.getProvider("auth-internal")),new JU(a,t.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new jt(ne,'"projectId" not provided in firebase.initializeApp.');return new qf(d.options.projectId,p)}(a,e),a);return r&&l._setSettings(r),l},"PUBLIC").setMultipleInstances(!0)),nn("firestore-lite",_A,""),nn("firestore-lite",_A,"esm2017")})();const za=G.createContext(),jL=n=>{const t=nc(),[e,r]=G.useState(null),[a,l]=G.useState([]),[c,d]=G.useState(null),[p,g]=G.useState([]),[E,T]=G.useState(null),[b,I]=G.useState(!1),D=async O=>{try{const M=qe(Ve,"users",O),z=(await br(M)).data();r(z),z.avatar&&z.name?t("/chat"):t("/profileupdate"),await VA(M,{lastSeen:Date.now()}),setInterval(async()=>{Ba.chatUser&&await VA(M,{lastSeen:Date.now()})},6e4)}catch{}};G.useEffect(()=>{if(e){const O=qe(Ve,"chats",e.id),M=fR(O,async q=>{const z=q.data().chatsData,Y=[];for(const it of z){const ot=qe(Ve,"users",it.rId),R=(await br(ot)).data();Y.push({...it,userData:R})}l(Y.sort((it,ot)=>ot.updateAt-it.updateAt))});return()=>{M()}}},[e]);const L={userData:e,setUserData:r,chatData:a,setChatData:l,loadUserData:D,messages:p,setMessages:g,messageId:c,setMessagesId:d,chatUser:E,setChatUser:T,chatVisible:b,setChatVisible:I};return et.jsx(za.Provider,{value:L,children:n.children})},FL=()=>{const n=nc(),{userData:t,chatData:e,chatUser:r,setChatUser:a,setMessagesId:l,messageId:c,chatVisible:d,setChatVisible:p}=G.useContext(za),[g,E]=G.useState(null),[T,b]=G.useState(!1),I=async O=>{try{const M=O.target.value;if(M){b(!0);const q=mf(Ve,"users"),z=aR(q,oR("username","==",M.toLowerCase())),Y=await hR(z);if(!Y.empty&&Y.docs[0].data().id!==t.id){let it=!1;e.map(ot=>{ot.rId===Y.docs[0].data().id&&(it=!0)}),it||Y.forEach(ot=>{E(Y.docs[0].data())})}else E(null)}else b(!1)}catch(M){console.error("Error fetching user:",M)}},D=async()=>{const O=mf(Ve,"messages"),M=mf(Ve,"chats");try{const q=qe(O);await Mg(q,{createAt:QM(),messages:[]}),await vr(qe(M,g.id),{chatsData:zf({messageId:q.id,lastMessage:"",rId:t.id,updatedAt:Date.now(),messageSeen:!0})}),await vr(qe(M,t.id),{chatsData:zf({messageId:q.id,lastMessage:"",rId:g.id,updatedAt:Date.now(),messageSeen:!0})});const Y=(await br(qe(Ve,"users",g.id))).data();L({messageId:q.id,lastMessage:"",rId:g.id,updatedAt:Date.now(),messageSeen:!0,userData:Y}),b(!1),p(!0)}catch(q){console.error("Error adding chat:",q)}},L=async O=>{l(O.messageId),a(O);const M=qe(Ve,"chats",t.id),z=(await br(M)).data(),Y=z.chatsData.findIndex(it=>it.messageId===O.messageId);z.chatsData[Y].messageSeen=!0,await vr(M,{chatsData:z.chatsData}),p(!0)};return G.useEffect(()=>{(async()=>{if(r){const M=qe(Ve,"users",r.userData.id),z=(await br(M)).data();a(Y=>({...Y,userData:z}))}})()},[e]),et.jsxs("div",{className:`ls ${d?"hidden":""}`,children:[et.jsxs("div",{className:"ls-top",children:[et.jsxs("div",{className:"ls-nav",children:[et.jsx("img",{src:On.logo,className:"logo",alt:"Logo"}),et.jsxs("div",{className:"menu",children:[et.jsx("img",{src:On.menu_icon,alt:"Menu"}),et.jsxs("div",{className:"sub-menu",children:[et.jsx("p",{onClick:()=>n("/profileupdate"),children:"Edit profile"}),et.jsx("hr",{}),et.jsx("p",{children:"Logout"})]})]})]}),et.jsxs("div",{className:"ls-search",children:[et.jsx("img",{src:On.search_icon,alt:"Search"}),et.jsx("input",{onChange:I,type:"text",placeholder:"Search here.."})]})]}),et.jsx("div",{className:"ls-list",children:T&&g?et.jsxs("div",{onClick:D,className:"friends add-user",children:[et.jsx("img",{src:g.avatar,alt:""}),et.jsx("p",{children:g.name})]}):e.map((O,M)=>et.jsxs("div",{onClick:()=>L(O),className:`friends ${O.messageSeen||O.messageId===c?"":"border"}`,children:[et.jsx("img",{src:O.userData.avatar,alt:"Profile"}),et.jsxs("div",{children:[et.jsx("p",{children:O.userData.name}),et.jsx("span",{children:O.lastMessage})]})]},M))})]})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR="firebasestorage.googleapis.com",BR="storageBucket",qL=2*60*1e3,HL=10*60*1e3,GL=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce extends xn{constructor(t,e,r=0){super(Zm(t),`Firebase Storage: ${e} (${Zm(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ce.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Zm(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var re;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(re||(re={}));function Zm(n){return"storage/"+n}function cy(){const n="An unknown error occurred, please check the error payload for server response.";return new ce(re.UNKNOWN,n)}function $L(n){return new ce(re.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function KL(n){return new ce(re.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function QL(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ce(re.UNAUTHENTICATED,n)}function YL(){return new ce(re.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function XL(n){return new ce(re.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function zR(){return new ce(re.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function jR(){return new ce(re.CANCELED,"User canceled the upload/download.")}function WL(n){return new ce(re.INVALID_URL,"Invalid URL '"+n+"'.")}function ZL(n){return new ce(re.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function JL(){return new ce(re.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+BR+"' property when initializing the app?")}function FR(){return new ce(re.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function t4(){return new ce(re.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function e4(){return new ce(re.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function n4(n){return new ce(re.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Qg(n){return new ce(re.INVALID_ARGUMENT,n)}function qR(){return new ce(re.APP_DELETED,"The Firebase app was deleted.")}function i4(n){return new ce(re.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Bu(n,t){return new ce(re.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function Tu(n){throw new ce(re.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let r;try{r=Pn.makeFromUrl(t,e)}catch{return new Pn(t,"")}if(r.path==="")return r;throw ZL(t)}static makeFromUrl(t,e){let r=null;const a="([A-Za-z0-9.\\-_]+)";function l(Y){Y.path.charAt(Y.path.length-1)==="/"&&(Y.path_=Y.path_.slice(0,-1))}const c="(/(.*))?$",d=new RegExp("^gs://"+a+c,"i"),p={bucket:1,path:3};function g(Y){Y.path_=decodeURIComponent(Y.path)}const E="v[A-Za-z0-9_]+",T=e.replace(/[.]/g,"\\."),b="(/([^?#]*).*)?$",I=new RegExp(`^https?://${T}/${E}/b/${a}/o${b}`,"i"),D={bucket:1,path:3},L=e===LR?"(?:storage.googleapis.com|storage.cloud.google.com)":e,O="([^?#]*)",M=new RegExp(`^https?://${L}/${a}/${O}`,"i"),z=[{regex:d,indices:p,postModify:l},{regex:I,indices:D,postModify:g},{regex:M,indices:{bucket:1,path:2},postModify:g}];for(let Y=0;Y<z.length;Y++){const it=z[Y],ot=it.regex.exec(t);if(ot){const k=ot[it.indices.bucket];let R=ot[it.indices.path];R||(R=""),r=new Pn(k,R),it.postModify(r);break}}if(r==null)throw WL(t);return r}}class r4{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s4(n,t,e){let r=1,a=null,l=null,c=!1,d=0;function p(){return d===2}let g=!1;function E(...O){g||(g=!0,t.apply(null,O))}function T(O){a=setTimeout(()=>{a=null,n(I,p())},O)}function b(){l&&clearTimeout(l)}function I(O,...M){if(g){b();return}if(O){b(),E.call(null,O,...M);return}if(p()||c){b(),E.call(null,O,...M);return}r<64&&(r*=2);let z;d===1?(d=2,z=0):z=(r+Math.random())*1e3,T(z)}let D=!1;function L(O){D||(D=!0,b(),!g&&(a!==null?(O||(d=2),clearTimeout(a),T(0)):O||(d=1)))}return T(0),l=setTimeout(()=>{c=!0,L(!0)},e),L}function a4(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o4(n){return n!==void 0}function l4(n){return typeof n=="function"}function u4(n){return typeof n=="object"&&!Array.isArray(n)}function Dd(n){return typeof n=="string"||n instanceof String}function xA(n){return hy()&&n instanceof Blob}function hy(){return typeof Blob<"u"}function MA(n,t,e,r){if(r<t)throw Qg(`Invalid value for '${n}'. Expected ${t} or greater.`);if(r>e)throw Qg(`Invalid value for '${n}'. Expected ${e} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(n,t,e){let r=t;return e==null&&(r=`https://${t}`),`${e}://${r}/v0${n}`}function HR(n){const t=encodeURIComponent;let e="?";for(const r in n)if(n.hasOwnProperty(r)){const a=t(r)+"="+t(n[r]);e=e+a+"&"}return e=e.slice(0,-1),e}var Sa;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Sa||(Sa={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(n,t){const e=n>=500&&n<600,a=[408,429].indexOf(n)!==-1,l=t.indexOf(n)!==-1;return e||a||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c4{constructor(t,e,r,a,l,c,d,p,g,E,T,b=!0){this.url_=t,this.method_=e,this.headers_=r,this.body_=a,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=d,this.errorCallback_=p,this.timeout_=g,this.progressCallback_=E,this.connectionFactory_=T,this.retry=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((I,D)=>{this.resolve_=I,this.reject_=D,this.start_()})}start_(){const t=(r,a)=>{if(a){r(!1,new Wh(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=d=>{const p=d.loaded,g=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,g)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const d=l.getErrorCode()===Sa.NO_ERROR,p=l.getStatus();if(!d||GR(p,this.additionalRetryCodes_)&&this.retry){const E=l.getErrorCode()===Sa.ABORT;r(!1,new Wh(!1,null,E));return}const g=this.successCodes_.indexOf(p)!==-1;r(!0,new Wh(g,l))})},e=(r,a)=>{const l=this.resolve_,c=this.reject_,d=a.connection;if(a.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());o4(p)?l(p):l()}catch(p){c(p)}else if(d!==null){const p=cy();p.serverResponse=d.getErrorText(),this.errorCallback_?c(this.errorCallback_(d,p)):c(p)}else if(a.canceled){const p=this.appDelete_?qR():jR();c(p)}else{const p=zR();c(p)}};this.canceled_?e(!1,new Wh(!1,null,!0)):this.backoffId_=s4(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&a4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Wh{constructor(t,e,r){this.wasSuccessCode=t,this.connection=e,this.canceled=!!r}}function h4(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function f4(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function d4(n,t){t&&(n["X-Firebase-GMPID"]=t)}function p4(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function m4(n,t,e,r,a,l,c=!0){const d=HR(n.urlParams),p=n.url+d,g=Object.assign({},n.headers);return d4(g,t),h4(g,e),f4(g,l),p4(g,r),new c4(p,n.method,g,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,a,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g4(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function _4(...n){const t=g4();if(t!==void 0){const e=new t;for(let r=0;r<n.length;r++)e.append(n[r]);return e.getBlob()}else{if(hy())return new Blob(n);throw new ce(re.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function y4(n,t,e){return n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v4(n){if(typeof atob>"u")throw n4("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Jm{constructor(t,e){this.data=t,this.contentType=e||null}}function E4(n,t){switch(n){case ki.RAW:return new Jm($R(t));case ki.BASE64:case ki.BASE64URL:return new Jm(KR(n,t));case ki.DATA_URL:return new Jm(A4(t),w4(t))}throw cy()}function $R(n){const t=[];for(let e=0;e<n.length;e++){let r=n.charCodeAt(e);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(e<n.length-1&&(n.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const l=r,c=n.charCodeAt(++e);r=65536|(l&1023)<<10|c&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function T4(n){let t;try{t=decodeURIComponent(n)}catch{throw Bu(ki.DATA_URL,"Malformed data URL.")}return $R(t)}function KR(n,t){switch(n){case ki.BASE64:{const a=t.indexOf("-")!==-1,l=t.indexOf("_")!==-1;if(a||l)throw Bu(n,"Invalid character '"+(a?"-":"_")+"' found: is it base64url encoded?");break}case ki.BASE64URL:{const a=t.indexOf("+")!==-1,l=t.indexOf("/")!==-1;if(a||l)throw Bu(n,"Invalid character '"+(a?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=v4(t)}catch(a){throw a.message.includes("polyfill")?a:Bu(n,"Invalid character found")}const r=new Uint8Array(e.length);for(let a=0;a<e.length;a++)r[a]=e.charCodeAt(a);return r}class QR{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw Bu(ki.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=e[1]||null;r!=null&&(this.base64=b4(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function A4(n){const t=new QR(n);return t.base64?KR(ki.BASE64,t.rest):T4(t.rest)}function w4(n){return new QR(n).contentType}function b4(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t,e){let r=0,a="";xA(t)?(this.data_=t,r=t.size,a=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=a}size(){return this.size_}type(){return this.type_}slice(t,e){if(xA(this.data_)){const r=this.data_,a=y4(r,t,e);return a===null?null:new mr(a)}else{const r=new Uint8Array(this.data_.buffer,t,e-t);return new mr(r,!0)}}static getBlob(...t){if(hy()){const e=t.map(r=>r instanceof mr?r.data_:r);return new mr(_4.apply(null,e))}else{const e=t.map(c=>Dd(c)?E4(ki.RAW,c).data:c.data_);let r=0;e.forEach(c=>{r+=c.byteLength});const a=new Uint8Array(r);let l=0;return e.forEach(c=>{for(let d=0;d<c.length;d++)a[l++]=c[d]}),new mr(a,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(n){let t;try{t=JSON.parse(n)}catch{return null}return u4(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S4(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function R4(n,t){const e=t.split("/").filter(r=>r.length>0).join("/");return n.length===0?e:n+"/"+e}function XR(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I4(n,t){return t}class fn{constructor(t,e,r,a){this.server=t,this.local=e||t,this.writable=!!r,this.xform=a||I4}}let Zh=null;function C4(n){return!Dd(n)||n.length<2?n:XR(n)}function fy(){if(Zh)return Zh;const n=[];n.push(new fn("bucket")),n.push(new fn("generation")),n.push(new fn("metageneration")),n.push(new fn("name","fullPath",!0));function t(l,c){return C4(c)}const e=new fn("name");e.xform=t,n.push(e);function r(l,c){return c!==void 0?Number(c):c}const a=new fn("size");return a.xform=r,n.push(a),n.push(new fn("timeCreated")),n.push(new fn("updated")),n.push(new fn("md5Hash",null,!0)),n.push(new fn("cacheControl",null,!0)),n.push(new fn("contentDisposition",null,!0)),n.push(new fn("contentEncoding",null,!0)),n.push(new fn("contentLanguage",null,!0)),n.push(new fn("contentType",null,!0)),n.push(new fn("metadata","customMetadata",!0)),Zh=n,Zh}function D4(n,t){function e(){const r=n.bucket,a=n.fullPath,l=new Pn(r,a);return t._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:e})}function N4(n,t,e){const r={};r.type="file";const a=e.length;for(let l=0;l<a;l++){const c=e[l];r[c.local]=c.xform(r,t[c.server])}return D4(r,n),r}function WR(n,t,e){const r=YR(t);return r===null?null:N4(n,r,e)}function O4(n,t,e,r){const a=YR(t);if(a===null||!Dd(a.downloadTokens))return null;const l=a.downloadTokens;if(l.length===0)return null;const c=encodeURIComponent;return l.split(",").map(g=>{const E=n.bucket,T=n.fullPath,b="/b/"+c(E)+"/o/"+c(T),I=vc(b,e,r),D=HR({alt:"media",token:g});return I+D})[0]}function ZR(n,t){const e={},r=t.length;for(let a=0;a<r;a++){const l=t[a];l.writable&&(e[l.server]=n[l.local])}return JSON.stringify(e)}class hl{constructor(t,e,r,a){this.url=t,this.method=e,this.handler=r,this.timeout=a,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(n){if(!n)throw cy()}function dy(n,t){function e(r,a){const l=WR(n,a,t);return Rr(l!==null),l}return e}function P4(n,t){function e(r,a){const l=WR(n,a,t);return Rr(l!==null),O4(l,a,n.host,n._protocol)}return e}function Ec(n){function t(e,r){let a;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?a=YL():a=QL():e.getStatus()===402?a=KL(n.bucket):e.getStatus()===403?a=XL(n.path):a=r,a.status=e.getStatus(),a.serverResponse=r.serverResponse,a}return t}function JR(n){const t=Ec(n);function e(r,a){let l=t(r,a);return r.getStatus()===404&&(l=$L(n.path)),l.serverResponse=a.serverResponse,l}return e}function k4(n,t,e){const r=t.fullServerUrl(),a=vc(r,n.host,n._protocol),l="GET",c=n.maxOperationRetryTime,d=new hl(a,l,dy(n,e),c);return d.errorHandler=JR(t),d}function V4(n,t,e){const r=t.fullServerUrl(),a=vc(r,n.host,n._protocol),l="GET",c=n.maxOperationRetryTime,d=new hl(a,l,P4(n,e),c);return d.errorHandler=JR(t),d}function x4(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function tI(n,t,e){const r=Object.assign({},e);return r.fullPath=n.path,r.size=t.size(),r.contentType||(r.contentType=x4(null,t)),r}function eI(n,t,e,r,a){const l=t.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function d(){let z="";for(let Y=0;Y<2;Y++)z=z+Math.random().toString().slice(2);return z}const p=d();c["Content-Type"]="multipart/related; boundary="+p;const g=tI(t,r,a),E=ZR(g,e),T="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+E+`\r
--`+p+`\r
Content-Type: `+g.contentType+`\r
\r
`,b=`\r
--`+p+"--",I=mr.getBlob(T,r,b);if(I===null)throw FR();const D={name:g.fullPath},L=vc(l,n.host,n._protocol),O="POST",M=n.maxUploadRetryTime,q=new hl(L,O,dy(n,e),M);return q.urlParams=D,q.headers=c,q.body=I.uploadData(),q.errorHandler=Ec(t),q}class Qf{constructor(t,e,r,a){this.current=t,this.total=e,this.finalized=!!r,this.metadata=a||null}}function py(n,t){let e=null;try{e=n.getResponseHeader("X-Goog-Upload-Status")}catch{Rr(!1)}return Rr(!!e&&(t||["active"]).indexOf(e)!==-1),e}function M4(n,t,e,r,a){const l=t.bucketOnlyServerUrl(),c=tI(t,r,a),d={name:c.fullPath},p=vc(l,n.host,n._protocol),g="POST",E={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":c.contentType,"Content-Type":"application/json; charset=utf-8"},T=ZR(c,e),b=n.maxUploadRetryTime;function I(L){py(L);let O;try{O=L.getResponseHeader("X-Goog-Upload-URL")}catch{Rr(!1)}return Rr(Dd(O)),O}const D=new hl(p,g,I,b);return D.urlParams=d,D.headers=E,D.body=T,D.errorHandler=Ec(t),D}function U4(n,t,e,r){const a={"X-Goog-Upload-Command":"query"};function l(g){const E=py(g,["active","final"]);let T=null;try{T=g.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Rr(!1)}T||Rr(!1);const b=Number(T);return Rr(!isNaN(b)),new Qf(b,r.size(),E==="final")}const c="POST",d=n.maxUploadRetryTime,p=new hl(e,c,l,d);return p.headers=a,p.errorHandler=Ec(t),p}const UA=256*1024;function L4(n,t,e,r,a,l,c,d){const p=new Qf(0,0);if(c?(p.current=c.current,p.total=c.total):(p.current=0,p.total=r.size()),r.size()!==p.total)throw t4();const g=p.total-p.current;let E=g;a>0&&(E=Math.min(E,a));const T=p.current,b=T+E;let I="";E===0?I="finalize":g===E?I="upload, finalize":I="upload";const D={"X-Goog-Upload-Command":I,"X-Goog-Upload-Offset":`${p.current}`},L=r.slice(T,b);if(L===null)throw FR();function O(Y,it){const ot=py(Y,["active","final"]),k=p.current+E,R=r.size();let S;return ot==="final"?S=dy(t,l)(Y,it):S=null,new Qf(k,R,ot==="final",S)}const M="POST",q=t.maxUploadRetryTime,z=new hl(e,M,O,q);return z.headers=D,z.body=L.uploadData(),z.progressCallback=d||null,z.errorHandler=Ec(n),z}const vn={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function tg(n){switch(n){case"running":case"pausing":case"canceling":return vn.RUNNING;case"paused":return vn.PAUSED;case"success":return vn.SUCCESS;case"canceled":return vn.CANCELED;case"error":return vn.ERROR;default:return vn.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B4{constructor(t,e,r){if(l4(t)||e!=null||r!=null)this.next=t,this.error=e??void 0,this.complete=r??void 0;else{const l=t;this.next=l.next,this.error=l.error,this.complete=l.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(n){return(...t)=>{Promise.resolve().then(()=>n(...t))}}class z4{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Sa.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Sa.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Sa.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,r,a){if(this.sent_)throw Tu("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),a!==void 0)for(const l in a)a.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,a[l].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Tu("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Tu("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Tu("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Tu("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class j4 extends z4{initXhr(){this.xhr_.responseType="text"}}function Ta(){return new j4}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F4{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(t,e,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=r,this._mappings=fy(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=a=>{if(this._request=void 0,this._chunkMultiplier=1,a._codeEquals(re.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const l=this.isExponentialBackoffExpired();if(GR(a.status,[]))if(l)a=zR();else{this.sleepTime=Math.max(this.sleepTime*2,GL),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=a,this._transition("error")}},this._metadataErrorHandler=a=>{this._request=void 0,a._codeEquals(re.CANCELED)?this.completeTransitions_():(this._error=a,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((a,l)=>{this._resolve=a,this._reject=l,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([e,r])=>{switch(this._state){case"running":t(e,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,e)=>{const r=M4(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),a=this._ref.storage._makeRequest(r,Ta,t,e);this._request=a,a.getPromise().then(l=>{this._request=void 0,this._uploadUrl=l,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((e,r)=>{const a=U4(this._ref.storage,this._ref._location,t,this._blob),l=this._ref.storage._makeRequest(a,Ta,e,r);this._request=l,l.getPromise().then(c=>{c=c,this._request=void 0,this._updateProgress(c.current),this._needToFetchStatus=!1,c.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=UA*this._chunkMultiplier,e=new Qf(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((a,l)=>{let c;try{c=L4(this._ref._location,this._ref.storage,r,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(p){this._error=p,this._transition("error");return}const d=this._ref.storage._makeRequest(c,Ta,a,l,!1);this._request=d,d.getPromise().then(p=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(p.current),p.finalized?(this._metadata=p.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){UA*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,e)=>{const r=k4(this._ref.storage,this._ref._location,this._mappings),a=this._ref.storage._makeRequest(r,Ta,t,e);this._request=a,a.getPromise().then(l=>{this._request=void 0,this._metadata=l,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,e)=>{const r=eI(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),a=this._ref.storage._makeRequest(r,Ta,t,e);this._request=a,a.getPromise().then(l=>{this._request=void 0,this._metadata=l,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const e=this._state==="paused";this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=jR(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=tg(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,r,a){const l=new B4(e||void 0,r||void 0,a||void 0);return this._addObserver(l),()=>{this._removeObserver(l)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);e!==-1&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(tg(this._state)){case vn.SUCCESS:Po(this._resolve.bind(null,this.snapshot))();break;case vn.CANCELED:case vn.ERROR:const e=this._reject;Po(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(tg(this._state)){case vn.RUNNING:case vn.PAUSED:t.next&&Po(t.next.bind(t,this.snapshot))();break;case vn.SUCCESS:t.complete&&Po(t.complete.bind(t))();break;case vn.CANCELED:case vn.ERROR:t.error&&Po(t.error.bind(t,this._error))();break;default:t.error&&Po(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(t,e){this._service=t,e instanceof Pn?this._location=e:this._location=Pn.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Va(t,e)}get root(){const t=new Pn(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return XR(this._location.path)}get storage(){return this._service}get parent(){const t=S4(this._location.path);if(t===null)return null;const e=new Pn(this._location.bucket,t);return new Va(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw i4(t)}}function q4(n,t,e){n._throwIfRoot("uploadBytes");const r=eI(n.storage,n._location,fy(),new mr(t,!0),e);return n.storage.makeRequestWithTokens(r,Ta).then(a=>({metadata:a,ref:n}))}function H4(n,t,e){return n._throwIfRoot("uploadBytesResumable"),new F4(n,new mr(t),e)}function G4(n){n._throwIfRoot("getDownloadURL");const t=V4(n.storage,n._location,fy());return n.storage.makeRequestWithTokens(t,Ta).then(e=>{if(e===null)throw e4();return e})}function $4(n,t){const e=R4(n._location.path,t),r=new Pn(n._location.bucket,e);return new Va(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K4(n){return/^[A-Za-z]+:\/\//.test(n)}function Q4(n,t){return new Va(n,t)}function nI(n,t){if(n instanceof my){const e=n;if(e._bucket==null)throw JL();const r=new Va(e,e._bucket);return t!=null?nI(r,t):r}else return t!==void 0?$4(n,t):n}function Y4(n,t){if(t&&K4(t)){if(n instanceof my)return Q4(n,t);throw Qg("To use ref(service, url), the first argument must be a Storage instance.")}else return nI(n,t)}function LA(n,t){const e=t==null?void 0:t[BR];return e==null?null:Pn.makeFromBucketSpec(e,n)}function X4(n,t,e,r={}){n.host=`${t}:${e}`,n._protocol="http";const{mockUserToken:a}=r;a&&(n._overrideAuthToken=typeof a=="string"?a:hw(a,n.app.options.projectId))}class my{constructor(t,e,r,a,l){this.app=t,this._authProvider=e,this._appCheckProvider=r,this._url=a,this._firebaseVersion=l,this._bucket=null,this._host=LR,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=qL,this._maxUploadRetryTime=HL,this._requests=new Set,a!=null?this._bucket=Pn.makeFromBucketSpec(a,this._host):this._bucket=LA(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Pn.makeFromBucketSpec(this._url,t):this._bucket=LA(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){MA("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){MA("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){if(En(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Va(this,t)}_makeRequest(t,e,r,a,l=!0){if(this._deleted)return new r4(qR());{const c=m4(t,this._appId,r,a,e,this._firebaseVersion,l);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(t,e){const[r,a]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,r,a).getPromise()}}const BA="@firebase/storage",zA="0.13.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI="storage";function W4(n,t,e){return n=$t(n),q4(n,t,e)}function Z4(n,t,e){return n=$t(n),H4(n,t,e)}function rI(n){return n=$t(n),G4(n)}function sI(n,t){return n=$t(n),Y4(n,t)}function aI(n=Zf(),t){n=$t(n);const r=Us(n,iI).getImmediate({identifier:t}),a=lw("storage");return a&&J4(r,...a),r}function J4(n,t,e,r={}){X4(n,t,e,r)}function t6(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),a=n.getProvider("app-check-internal");return new my(e,r,a,t,Ls)}function e6(){ni(new Vn(iI,t6,"PUBLIC").setMultipleInstances(!0)),nn(BA,zA,""),nn(BA,zA,"esm2017")}e6();const n6=()=>{const{userData:n,messageId:t,chatUser:e,messages:r,setMessages:a,chatVisible:l,setChatVisible:c}=G.useContext(za),[d,p]=G.useState(""),g=async I=>{const D=aI(),L=sI(D,"chat-images/"+I.name);try{const O=await W4(L,I);return await rI(O.ref)}catch(O){throw console.error("Upload failed:",O),new Error("Failed to upload image")}},E=async()=>{try{d&&t?(await vr(qe(Ve,"messages",t),{messages:zf({sId:n.id,text:d,createdAt:new Date})}),[e.rId,n.id].forEach(async D=>{const L=qe(Ve,"chats",D),O=await br(L);if(O.exists()){const M=O.data(),q=M.chatsData.findIndex(z=>z.messageId===t);q!==-1&&(M.chatsData[q].lastMessage=d.slice(0,30),M.chatsData[q].updatedAt=Date.now(),M.chatsData[q].rId===n.id&&(M.chatsData[q].messageSeen=!1),await vr(L,{chatsData:M.chatsData}))}})):console.log("Error: Missing input or messageId")}catch(I){Ot.error(I.message),console.error("Send message error:",I)}p("")},T=async I=>{try{const D=await g(I.target.files[0]);D&&t&&(await vr(qe(Ve,"messages",t),{messages:zf({sId:n.id,image:D,createdAt:new Date})}),[e.rId,n.id].forEach(async O=>{const M=qe(Ve,"chats",O),q=await br(M);if(q.exists()){const z=q.data(),Y=z.chatsData.findIndex(it=>it.messageId===t);Y!==-1&&(z.chatsData[Y].lastMessage="Image",z.chatsData[Y].updatedAt=Date.now(),z.chatsData[Y].rId===n.id&&(z.chatsData[Y].messageSeen=!1),await vr(M,{chatsData:z.chatsData}))}}))}catch(D){Ot.error(D.message)}},b=I=>{let D=I.toDate();const L=D.getHours(),O=D.getMinutes().toString().padStart(2,"0");return L>12?`${L-12}:${O} PM`:`${L}:${O} AM`};return G.useEffect(()=>{if(t&&typeof t=="string"){const I=qe(Ve,"messages",t),D=fR(I,L=>{a(L.data().messages.reverse())});return()=>D()}},[t]),e?et.jsxs("div",{className:`chat-box ${l?"":"hidden"}`,children:[et.jsxs("div",{className:"chat-user",children:[et.jsx("img",{src:e.userData.avatar,alt:""}),et.jsxs("p",{children:[e.userData.name," ",Date.now()-e.userData.lastSeen<=7e4?et.jsx("img",{src:On.green_dot,className:"dot",alt:""}):null]}),et.jsx("img",{src:On.help_icon,className:"help",alt:""}),et.jsx("img",{onClick:()=>c(!1),src:On.arrow_icon,className:"arrow",alt:""})]}),et.jsx("div",{className:"chat-msg",children:r.map((I,D)=>et.jsxs("div",{className:I.sId===n.id?"s-msg":"r-msg",children:[I.text&&et.jsx("p",{className:"msg",children:I.text}),I.image&&et.jsx("img",{className:"msg-img",src:I.image,alt:"sent-img"}),et.jsxs("div",{children:[et.jsx("img",{src:I.sId===n.id?n.avatar:e.userData.avatar,alt:""}),et.jsx("p",{children:b(I.createdAt)})]})]},D))}),et.jsxs("div",{className:"chat-input",children:[et.jsx("input",{onChange:I=>p(I.target.value),value:d,type:"text",placeholder:"Send a message"}),et.jsx("input",{onChange:T,type:"file",id:"image",accept:"image/png, image/jpeg",hidden:!0}),et.jsx("label",{htmlFor:"image",children:et.jsx("img",{src:On.gallery_icon,alt:""})}),et.jsx("img",{onClick:E,src:On.send_button,alt:""})]})]}):et.jsxs("div",{className:`chat-welcome ${l?"":"hidden"}`,children:[et.jsx("img",{src:On.logo_icon,alt:""}),et.jsx("p",{children:"Chat anytime, anywhere"})]})},i6=()=>{var a,l,c;const{chatUser:n,messages:t}=G.useContext(za),[e,r]=G.useState([]);return G.useEffect(()=>{const d=t.filter(p=>p==null?void 0:p.image).map(p=>p.image);r(d)},[t]),et.jsxs("div",{className:"rs",children:[n&&et.jsxs(et.Fragment,{children:[et.jsxs("div",{className:"rs-profile",children:[et.jsx("img",{src:(a=n.userData)==null?void 0:a.avatar,alt:"avatar"}),et.jsxs("h3",{children:[Date.now()-n.userData.lastSeen<=7e4?et.jsx("img",{src:On.green_dot,className:"dot",alt:""}):null,(l=n.userData)==null?void 0:l.name]}),et.jsx("p",{children:(c=n.userData)==null?void 0:c.bio})]}),et.jsx("hr",{}),et.jsxs("div",{className:"rs-media",children:[et.jsx("p",{children:"Media"}),et.jsx("div",{children:e.map((d,p)=>et.jsx("img",{onClick:()=>window.open(d),src:d,alt:`media-${p}`},p))})]})]}),et.jsx("button",{onClick:kU,children:"Logout"})]})},r6=()=>{const{chatData:n,userData:t}=G.useContext(za),[e,r]=G.useState(!0);return G.useEffect(()=>{n&&t&&r(!1)},[n,t]),et.jsx("div",{className:"chat",children:e?et.jsx("p",{className:"loading",children:"Loading..."}):et.jsxs("div",{className:"chat-container",children:[et.jsx(FL,{}),et.jsx(n6,{}),et.jsx(i6,{})]})})},s6=async n=>{const t=aI(),e=sI(t,`images/${Date.now()+n.name}`),r=Z4(e,n);return new Promise((a,l)=>{r.on("state_changed",c=>{const d=c.bytesTransferred/c.totalBytes*100;switch(console.log("Upload is "+d+"% done"),c.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running");break}},c=>{console.error("Upload failed",c),l(c)},()=>{rI(r.snapshot.ref).then(c=>{a(c)}).catch(l)})})},a6=()=>{const n=nc(),[t,e]=G.useState(!1),[r,a]=G.useState(""),[l,c]=G.useState(""),[d,p]=G.useState(""),[g,E]=G.useState(""),{setUserData:T}=G.useContext(za),b=async I=>{I.preventDefault();try{!g&&!t&&Ot.error("Upload profile picture");const D=qe(Ve,"users",d);if(t){const O=await s6(t);E(O),await vr(D,{avatar:O,bio:l,name:r})}else await vr(D,{bio:l,name:r});const L=await br(D);T(L.data()),n("/chat")}catch(D){console.error(D),Ot.error(D.message)}};return G.useEffect(()=>{pb(Ba,async I=>{if(I){p(I.uid);const D=qe(Ve,"users",I.uid),L=await br(D);L.data().name&&a(L.data().name),L.data().bio&&c(L.data().bio),L.data().avatar&&E(L.data().avatar)}else n("/")})},[]),et.jsx("div",{className:"profile",children:et.jsxs("div",{className:"profile-container",children:[et.jsxs("form",{onSubmit:b,children:[et.jsx("h3",{children:"Profile Details"}),et.jsxs("label",{htmlFor:"avatar",children:[et.jsx("input",{onChange:I=>e(I.target.files[0]),type:"file",id:"avatar",accept:".png, .jpg, .jpeg",hidden:!0}),et.jsx("img",{src:t?URL.createObjectURL(t):On.avatar_icon,alt:""}),"upload profile image"]}),et.jsx("input",{onChange:I=>a(I.target.value),value:r,type:"text",placeholder:"Your name",required:!0}),et.jsx("textarea",{onChange:I=>c(I.target.bio),value:l,placeholder:"Write profile bio"}),et.jsx("button",{type:"submit",children:"Save"})]}),et.jsx("img",{className:"profile-pic",src:t?URL.createObjectURL(t):g||On.logo_icon,alt:""})]})})},o6=()=>{const n=nc(),{loadUserData:t}=G.useContext(za);return G.useEffect(()=>{pb(Ba,async e=>{e?(n("/chat"),await t(e.uid)):n("/")})},[]),et.jsxs(et.Fragment,{children:[et.jsx(DU,{}),et.jsxs(OC,{children:[et.jsx(Jh,{path:"/",element:et.jsx(xU,{})}),et.jsx(Jh,{path:"/chat",element:et.jsx(r6,{})}),et.jsx(Jh,{path:"/profileupdate",element:et.jsx(a6,{})})]})]})};j1.createRoot(document.getElementById("root")).render(et.jsx(tD,{children:et.jsx(jL,{children:et.jsx(o6,{})})}));

function n(n,e,r,t){Object.defineProperty(n,e,{get:r,set:t,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},a=e.parcelRequire1ae0;null==a&&((a=function(n){if(n in r)return r[n].exports;if(n in t){var e=t[n];delete t[n];var a={id:n,exports:{}};return r[n]=a,e.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(n,e){t[n]=e},e.parcelRequire1ae0=a),a.register("27Lyk",(function(e,r){var t,a;n(e.exports,"register",(()=>t),(n=>t=n)),n(e.exports,"resolve",(()=>a),(n=>a=n));var o={};t=function(n){for(var e=Object.keys(n),r=0;r<e.length;r++)o[e[r]]=n[e[r]]},a=function(n){var e=o[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),a("27Lyk").register(JSON.parse('{"b9Fgu":"index.3c1de6b7.js","axbrr":"fox.69591128.jpg"}'));var o={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},u={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},i=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],c={CSS:{},springs:{}};function s(n,e,r){return Math.min(Math.max(n,e),r)}function f(n,e){return n.indexOf(e)>-1}function l(n,e){return n.apply(null,e)}var d={arr:function(n){return Array.isArray(n)},obj:function(n){return f(Object.prototype.toString.call(n),"Object")},pth:function(n){return d.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||d.svg(n)},str:function(n){return"string"==typeof n},fnc:function(n){return"function"==typeof n},und:function(n){return void 0===n},nil:function(n){return d.und(n)||null===n},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return d.hex(n)||d.rgb(n)||d.hsl(n)},key:function(n){return!o.hasOwnProperty(n)&&!u.hasOwnProperty(n)&&"targets"!==n&&"keyframes"!==n}};function p(n){var e=/\(([^)]+)\)/.exec(n);return e?e[1].split(",").map((function(n){return parseFloat(n)})):[]}function v(n,e){var r=p(n),t=s(d.und(r[0])?1:r[0],.1,100),a=s(d.und(r[1])?100:r[1],.1,100),o=s(d.und(r[2])?10:r[2],.1,100),u=s(d.und(r[3])?0:r[3],.1,100),i=Math.sqrt(a/t),f=o/(2*Math.sqrt(a*t)),l=f<1?i*Math.sqrt(1-f*f):0,v=1,g=f<1?(f*i-u)/l:-u+i;function h(n){var r=e?e*n/1e3:n;return r=f<1?Math.exp(-r*f*i)*(v*Math.cos(l*r)+g*Math.sin(l*r)):(v+g*r)*Math.exp(-r*i),0===n||1===n?n:1-r}return e?h:function(){var e=c.springs[n];if(e)return e;for(var r=1/6,t=0,a=0;;)if(1===h(t+=r)){if(++a>=16)break}else a=0;var o=t*r*1e3;return c.springs[n]=o,o}}function g(n){return void 0===n&&(n=10),function(e){return Math.ceil(s(e,1e-6,1)*n)*(1/n)}}var h,m,y=function(){var n=11,e=1/(n-1);function r(n,e){return 1-3*e+3*n}function t(n,e){return 3*e-6*n}function a(n){return 3*n}function o(n,e,o){return((r(e,o)*n+t(e,o))*n+a(e))*n}function u(n,e,o){return 3*r(e,o)*n*n+2*t(e,o)*n+a(e)}return function(r,t,a,i){if(0<=r&&r<=1&&0<=a&&a<=1){var c=new Float32Array(n);if(r!==t||a!==i)for(var s=0;s<n;++s)c[s]=o(s*e,r,a);return function(n){return r===t&&a===i||0===n||1===n?n:o(f(n),t,i)}}function f(t){for(var i=0,s=1,f=n-1;s!==f&&c[s]<=t;++s)i+=e;--s;var l=i+(t-c[s])/(c[s+1]-c[s])*e,d=u(l,r,a);return d>=.001?function(n,e,r,t){for(var a=0;a<4;++a){var i=u(e,r,t);if(0===i)return e;e-=(o(e,r,t)-n)/i}return e}(t,l,r,a):0===d?l:function(n,e,r,t,a){var u,i,c=0;do{(u=o(i=e+(r-e)/2,t,a)-n)>0?r=i:e=i}while(Math.abs(u)>1e-7&&++c<10);return i}(t,i,i+e,r,a)}}}(),b=(h={linear:function(){return function(n){return n}}},m={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var e,r=4;n<((e=Math.pow(2,--r))-1)/11;);return 1/Math.pow(4,3-r)-7.5625*Math.pow((3*e-2)/22-n,2)}},Elastic:function(n,e){void 0===n&&(n=1),void 0===e&&(e=.5);var r=s(n,1,10),t=s(e,.1,2);return function(n){return 0===n||1===n?n:-r*Math.pow(2,10*(n-1))*Math.sin((n-1-t/(2*Math.PI)*Math.asin(1/r))*(2*Math.PI)/t)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(n,e){m[n]=function(){return function(n){return Math.pow(n,e+2)}}})),Object.keys(m).forEach((function(n){var e=m[n];h["easeIn"+n]=e,h["easeOut"+n]=function(n,r){return function(t){return 1-e(n,r)(1-t)}},h["easeInOut"+n]=function(n,r){return function(t){return t<.5?e(n,r)(2*t)/2:1-e(n,r)(-2*t+2)/2}},h["easeOutIn"+n]=function(n,r){return function(t){return t<.5?(1-e(n,r)(1-2*t))/2:(e(n,r)(2*t-1)+1)/2}}})),h);function x(n,e){if(d.fnc(n))return n;var r=n.split("(")[0],t=b[r],a=p(n);switch(r){case"spring":return v(n,e);case"cubicBezier":return l(y,a);case"steps":return l(g,a);default:return l(t,a)}}function w(n){try{return document.querySelectorAll(n)}catch(n){return}}function M(n,e){for(var r=n.length,t=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<r;o++)if(o in n){var u=n[o];e.call(t,u,o,n)&&a.push(u)}return a}function O(n){return n.reduce((function(n,e){return n.concat(d.arr(e)?O(e):e)}),[])}function k(n){return d.arr(n)?n:(d.str(n)&&(n=w(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function C(n,e){return n.some((function(n){return n===e}))}function P(n){var e={};for(var r in n)e[r]=n[r];return e}function D(n,e){var r=P(n);for(var t in n)r[t]=e.hasOwnProperty(t)?e[t]:n[t];return r}function I(n,e){var r=P(n);for(var t in e)r[t]=d.und(n[t])?e[t]:n[t];return r}function T(n){return d.rgb(n)?(r=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e=n))?"rgba("+r[1]+",1)":e:d.hex(n)?function(n){var e=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(n,e,r,t){return e+e+r+r+t+t})),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return"rgba("+parseInt(r[1],16)+","+parseInt(r[2],16)+","+parseInt(r[3],16)+",1)"}(n):d.hsl(n)?function(n){var e,r,t,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),o=parseInt(a[1],10)/360,u=parseInt(a[2],10)/100,i=parseInt(a[3],10)/100,c=a[4]||1;function s(n,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?n+6*(e-n)*r:r<.5?e:r<2/3?n+(e-n)*(2/3-r)*6:n}if(0==u)e=r=t=i;else{var f=i<.5?i*(1+u):i+u-i*u,l=2*i-f;e=s(l,f,o+1/3),r=s(l,f,o),t=s(l,f,o-1/3)}return"rgba("+255*e+","+255*r+","+255*t+","+c+")"}(n):void 0;var e,r}function E(n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(e)return e[1]}function B(n,e){return d.fnc(n)?n(e.target,e.id,e.total):n}function F(n,e){return n.getAttribute(e)}function L(n,e,r){if(C([r,"deg","rad","turn"],E(e)))return e;var t=c.CSS[e+r];if(!d.und(t))return t;var a=document.createElement(n.tagName),o=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;o.appendChild(a),a.style.position="absolute",a.style.width=100+r;var u=100/a.offsetWidth;o.removeChild(a);var i=u*parseFloat(e);return c.CSS[e+r]=i,i}function j(n,e,r){if(e in n.style){var t=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=n.style[e]||getComputedStyle(n).getPropertyValue(t)||"0";return r?L(n,a,r):a}}function N(n,e){return d.dom(n)&&!d.inp(n)&&(!d.nil(F(n,e))||d.svg(n)&&n[e])?"attribute":d.dom(n)&&C(i,e)?"transform":d.dom(n)&&"transform"!==e&&j(n,e)?"css":null!=n[e]?"object":void 0}function S(n){if(d.dom(n)){for(var e,r=n.style.transform||"",t=/(\w+)\(([^)]*)\)/g,a=new Map;e=t.exec(r);)a.set(e[1],e[2]);return a}}function A(n,e,r,t){var a=f(e,"scale")?1:0+function(n){return f(n,"translate")||"perspective"===n?"px":f(n,"rotate")||f(n,"skew")?"deg":void 0}(e),o=S(n).get(e)||a;return r&&(r.transforms.list.set(e,o),r.transforms.last=e),t?L(n,o,t):o}function q(n,e,r,t){switch(N(n,e)){case"transform":return A(n,e,t,r);case"css":return j(n,e,r);case"attribute":return F(n,e);default:return n[e]||0}}function H(n,e){var r=/^(\*=|\+=|-=)/.exec(n);if(!r)return n;var t=E(n)||0,a=parseFloat(e),o=parseFloat(n.replace(r[0],""));switch(r[0][0]){case"+":return a+o+t;case"-":return a-o+t;case"*":return a*o+t}}function _(n,e){if(d.col(n))return T(n);if(/\s/g.test(n))return n;var r=E(n),t=r?n.substr(0,n.length-r.length):n;return e?t+e:t}function R(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function V(n){for(var e,r=n.points,t=0,a=0;a<r.numberOfItems;a++){var o=r.getItem(a);a>0&&(t+=R(e,o)),e=o}return t}function $(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return function(n){return 2*Math.PI*F(n,"r")}(n);case"rect":return function(n){return 2*F(n,"width")+2*F(n,"height")}(n);case"line":return function(n){return R({x:F(n,"x1"),y:F(n,"y1")},{x:F(n,"x2"),y:F(n,"y2")})}(n);case"polyline":return V(n);case"polygon":return function(n){var e=n.points;return V(n)+R(e.getItem(e.numberOfItems-1),e.getItem(0))}(n)}}function W(n,e){var r=e||{},t=r.el||function(n){for(var e=n.parentNode;d.svg(e)&&d.svg(e.parentNode);)e=e.parentNode;return e}(n),a=t.getBoundingClientRect(),o=F(t,"viewBox"),u=a.width,i=a.height,c=r.viewBox||(o?o.split(" "):[0,0,u,i]);return{el:t,viewBox:c,x:c[0]/1,y:c[1]/1,w:u,h:i,vW:c[2],vH:c[3]}}function U(n,e,r){function t(r){void 0===r&&(r=0);var t=e+r>=1?e+r:0;return n.el.getPointAtLength(t)}var a=W(n.el,n.svg),o=t(),u=t(-1),i=t(1),c=r?1:a.w/a.vW,s=r?1:a.h/a.vH;switch(n.property){case"x":return(o.x-a.x)*c;case"y":return(o.y-a.y)*s;case"angle":return 180*Math.atan2(i.y-u.y,i.x-u.x)/Math.PI}}function X(n,e){var r=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,t=_(d.pth(n)?n.totalLength:n,e)+"";return{original:t,numbers:t.match(r)?t.match(r).map(Number):[0],strings:d.str(n)||e?t.split(r):[]}}function Y(n){return M(n?O(d.arr(n)?n.map(k):k(n)):[],(function(n,e,r){return r.indexOf(n)===e}))}function Z(n){var e=Y(n);return e.map((function(n,r){return{target:n,id:r,total:e.length,transforms:{list:S(n)}}}))}function G(n,e){var r=P(e);if(/^spring/.test(r.easing)&&(r.duration=v(r.easing)),d.arr(n)){var t=n.length;2===t&&!d.obj(n[0])?n={value:n}:d.fnc(e.duration)||(r.duration=e.duration/t)}var a=d.arr(n)?n:[n];return a.map((function(n,r){var t=d.obj(n)&&!d.pth(n)?n:{value:n};return d.und(t.delay)&&(t.delay=r?0:e.delay),d.und(t.endDelay)&&(t.endDelay=r===a.length-1?e.endDelay:0),t})).map((function(n){return I(n,r)}))}function Q(n,e){var r=[],t=e.keyframes;for(var a in t&&(e=I(function(n){for(var e=M(O(n.map((function(n){return Object.keys(n)}))),(function(n){return d.key(n)})).reduce((function(n,e){return n.indexOf(e)<0&&n.push(e),n}),[]),r={},t=function(t){var a=e[t];r[a]=n.map((function(n){var e={};for(var r in n)d.key(r)?r==a&&(e.value=n[r]):e[r]=n[r];return e}))},a=0;a<e.length;a++)t(a);return r}(t),e)),e)d.key(a)&&r.push({name:a,tweens:G(e[a],n)});return r}function z(n,e){var r;return n.tweens.map((function(t){var a=function(n,e){var r={};for(var t in n){var a=B(n[t],e);d.arr(a)&&1===(a=a.map((function(n){return B(n,e)}))).length&&(a=a[0]),r[t]=a}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}(t,e),o=a.value,u=d.arr(o)?o[1]:o,i=E(u),c=q(e.target,n.name,i,e),s=r?r.to.original:c,f=d.arr(o)?o[0]:s,l=E(f)||E(c),p=i||l;return d.und(u)&&(u=s),a.from=X(f,p),a.to=X(H(u,f),p),a.start=r?r.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=x(a.easing,a.duration),a.isPath=d.pth(o),a.isPathTargetInsideSVG=a.isPath&&d.svg(e.target),a.isColor=d.col(a.from.original),a.isColor&&(a.round=1),r=a,a}))}var J={css:function(n,e,r){return n.style[e]=r},attribute:function(n,e,r){return n.setAttribute(e,r)},object:function(n,e,r){return n[e]=r},transform:function(n,e,r,t,a){if(t.list.set(e,r),e===t.last||a){var o="";t.list.forEach((function(n,e){o+=e+"("+n+") "})),n.style.transform=o}}};function K(n,e){Z(n).forEach((function(n){for(var r in e){var t=B(e[r],n),a=n.target,o=E(t),u=q(a,r,o,n),i=H(_(t,o||E(u)),u),c=N(a,r);J[c](a,r,i,n.transforms,!0)}}))}function nn(n,e){return M(O(n.map((function(n){return e.map((function(e){return function(n,e){var r=N(n.target,e.name);if(r){var t=z(e,n),a=t[t.length-1];return{type:r,property:e.name,animatable:n,tweens:t,duration:a.end,delay:t[0].delay,endDelay:a.endDelay}}}(n,e)}))}))),(function(n){return!d.und(n)}))}function en(n,e){var r=n.length,t=function(n){return n.timelineOffset?n.timelineOffset:0},a={};return a.duration=r?Math.max.apply(Math,n.map((function(n){return t(n)+n.duration}))):e.duration,a.delay=r?Math.min.apply(Math,n.map((function(n){return t(n)+n.delay}))):e.delay,a.endDelay=r?a.duration-Math.max.apply(Math,n.map((function(n){return t(n)+n.duration-n.endDelay}))):e.endDelay,a}var rn=0;var tn=[],an=function(){var n;function e(r){for(var t=tn.length,a=0;a<t;){var o=tn[a];o.paused?(tn.splice(a,1),t--):(o.tick(r),a++)}n=a>0?requestAnimationFrame(e):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){un.suspendWhenDocumentHidden&&(on()?n=cancelAnimationFrame(n):(tn.forEach((function(n){return n._onDocumentVisibility()})),an()))})),function(){n||on()&&un.suspendWhenDocumentHidden||!(tn.length>0)||(n=requestAnimationFrame(e))}}();function on(){return!!document&&document.hidden}function un(n){void 0===n&&(n={});var e,r=0,t=0,a=0,i=0,c=null;function f(n){var e=window.Promise&&new Promise((function(n){return c=n}));return n.finished=e,e}var l=function(n){var e=D(o,n),r=D(u,n),t=Q(r,n),a=Z(n.targets),i=nn(a,t),c=en(i,r),s=rn;return rn++,I(e,{id:s,children:[],animatables:a,animations:i,duration:c.duration,delay:c.delay,endDelay:c.endDelay})}(n);f(l);function d(){var n=l.direction;"alternate"!==n&&(l.direction="normal"!==n?"normal":"reverse"),l.reversed=!l.reversed,e.forEach((function(n){return n.reversed=l.reversed}))}function p(n){return l.reversed?l.duration-n:n}function v(){r=0,t=p(l.currentTime)*(1/un.speed)}function g(n,e){e&&e.seek(n-e.timelineOffset)}function h(n){for(var e=0,r=l.animations,t=r.length;e<t;){var a=r[e],o=a.animatable,u=a.tweens,i=u.length-1,c=u[i];i&&(c=M(u,(function(e){return n<e.end}))[0]||c);for(var f=s(n-c.start-c.delay,0,c.duration)/c.duration,d=isNaN(f)?1:c.easing(f),p=c.to.strings,v=c.round,g=[],h=c.to.numbers.length,m=void 0,y=0;y<h;y++){var b=void 0,x=c.to.numbers[y],w=c.from.numbers[y]||0;b=c.isPath?U(c.value,d*x,c.isPathTargetInsideSVG):w+d*(x-w),v&&(c.isColor&&y>2||(b=Math.round(b*v)/v)),g.push(b)}var O=p.length;if(O){m=p[0];for(var k=0;k<O;k++){p[k];var C=p[k+1],P=g[k];isNaN(P)||(m+=C?P+C:P+" ")}}else m=g[0];J[a.type](o.target,a.property,m,o.transforms),a.currentValue=m,e++}}function m(n){l[n]&&!l.passThrough&&l[n](l)}function y(n){var o=l.duration,u=l.delay,v=o-l.endDelay,y=p(n);l.progress=s(y/o*100,0,100),l.reversePlayback=y<l.currentTime,e&&function(n){if(l.reversePlayback)for(var r=i;r--;)g(n,e[r]);else for(var t=0;t<i;t++)g(n,e[t])}(y),!l.began&&l.currentTime>0&&(l.began=!0,m("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,m("loopBegin")),y<=u&&0!==l.currentTime&&h(0),(y>=v&&l.currentTime!==o||!o)&&h(o),y>u&&y<v?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,m("changeBegin")),m("change"),h(y)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,m("changeComplete")),l.currentTime=s(y,0,o),l.began&&m("update"),n>=o&&(t=0,l.remaining&&!0!==l.remaining&&l.remaining--,l.remaining?(r=a,m("loopComplete"),l.loopBegan=!1,"alternate"===l.direction&&d()):(l.paused=!0,l.completed||(l.completed=!0,m("loopComplete"),m("complete"),!l.passThrough&&"Promise"in window&&(c(),f(l)))))}return l.reset=function(){var n=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed="reverse"===n,l.remaining=l.loop,e=l.children;for(var r=i=e.length;r--;)l.children[r].reset();(l.reversed&&!0!==l.loop||"alternate"===n&&1===l.loop)&&l.remaining++,h(l.reversed?l.duration:0)},l._onDocumentVisibility=v,l.set=function(n,e){return K(n,e),l},l.tick=function(n){a=n,r||(r=a),y((a+(t-r))*un.speed)},l.seek=function(n){y(p(n))},l.pause=function(){l.paused=!0,v()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,tn.push(l),v(),an())},l.reverse=function(){d(),l.completed=!l.reversed,v()},l.restart=function(){l.reset(),l.play()},l.remove=function(n){sn(Y(n),l)},l.reset(),l.autoplay&&l.play(),l}function cn(n,e){for(var r=e.length;r--;)C(n,e[r].animatable.target)&&e.splice(r,1)}function sn(n,e){var r=e.animations,t=e.children;cn(n,r);for(var a=t.length;a--;){var o=t[a],u=o.animations;cn(n,u),u.length||o.children.length||t.splice(a,1)}r.length||t.length||e.pause()}un.version="3.2.1",un.speed=1,un.suspendWhenDocumentHidden=!0,un.running=tn,un.remove=function(n){for(var e=Y(n),r=tn.length;r--;){sn(e,tn[r])}},un.get=q,un.set=K,un.convertPx=L,un.path=function(n,e){var r=d.str(n)?w(n)[0]:n,t=e||100;return function(n){return{property:n,el:r,svg:W(r),totalLength:$(r)*(t/100)}}},un.setDashoffset=function(n){var e=$(n);return n.setAttribute("stroke-dasharray",e),e},un.stagger=function(n,e){void 0===e&&(e={});var r=e.direction||"normal",t=e.easing?x(e.easing):null,a=e.grid,o=e.axis,u=e.from||0,i="first"===u,c="center"===u,s="last"===u,f=d.arr(n),l=f?parseFloat(n[0]):parseFloat(n),p=f?parseFloat(n[1]):0,v=E(f?n[1]:n)||0,g=e.start||0+(f?l:0),h=[],m=0;return function(n,e,d){if(i&&(u=0),c&&(u=(d-1)/2),s&&(u=d-1),!h.length){for(var y=0;y<d;y++){if(a){var b=c?(a[0]-1)/2:u%a[0],x=c?(a[1]-1)/2:Math.floor(u/a[0]),w=b-y%a[0],M=x-Math.floor(y/a[0]),O=Math.sqrt(w*w+M*M);"x"===o&&(O=-w),"y"===o&&(O=-M),h.push(O)}else h.push(Math.abs(u-y));m=Math.max.apply(Math,h)}t&&(h=h.map((function(n){return t(n/m)*m}))),"reverse"===r&&(h=h.map((function(n){return o?n<0?-1*n:-n:Math.abs(m-n)})))}return g+(f?(p-l)/m:l)*(Math.round(100*h[e])/100)+v}},un.timeline=function(n){void 0===n&&(n={});var e=un(n);return e.duration=0,e.add=function(r,t){var a=tn.indexOf(e),o=e.children;function i(n){n.passThrough=!0}a>-1&&tn.splice(a,1);for(var c=0;c<o.length;c++)i(o[c]);var s=I(r,D(u,n));s.targets=s.targets||n.targets;var f=e.duration;s.autoplay=!1,s.direction=e.direction,s.timelineOffset=d.und(t)?f:H(t,f),i(e),e.seek(s.timelineOffset);var l=un(s);i(l),o.push(l);var p=en(o,n);return e.delay=p.delay,e.endDelay=p.endDelay,e.duration=p.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e},un.easing=x,un.penner=b,un.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n};var fn=un;var ln=Object.assign(Object.create(null),{url:"file:///src/main.js"});fn({targets:"h1",rotate:360,duration:3e3}),console.log("vad som helst");const dn=document.createElement("img");document.body.append(dn),console.log(ln);var pn;pn=new URL(a("27Lyk").resolve("axbrr"),import.meta.url).toString();const vn=new URL(pn);dn.src=vn;
//# sourceMappingURL=index.3c1de6b7.js.map

/*! For license information please see vendors~Chat~articleForm~articlePage~commentDropdowns~modCenter-cb822c87ddc05fe679a8.chunk.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2,3,4,95],{0:function(e,t,n){"use strict";n.r(t),n.d(t,"render",(function(){return G})),n.d(t,"hydrate",(function(){return U})),n.d(t,"createElement",(function(){return d})),n.d(t,"h",(function(){return d})),n.d(t,"Fragment",(function(){return b})),n.d(t,"createRef",(function(){return v})),n.d(t,"isValidElement",(function(){return o})),n.d(t,"Component",(function(){return y})),n.d(t,"cloneElement",(function(){return j})),n.d(t,"createContext",(function(){return R})),n.d(t,"toChildArray",(function(){return S})),n.d(t,"options",(function(){return r}));var r,o,i,u,c,a,l={},_=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function f(e,t){for(var n in t)e[n]=t[n];return e}function p(e){var t=e.parentNode;t&&t.removeChild(e)}function d(e,t,n){var r,o,i,u=arguments,c={};for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:c[i]=t[i];if(arguments.length>3)for(n=[n],i=3;i<arguments.length;i++)n.push(u[i]);if(null!=n&&(c.children=n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===c[i]&&(c[i]=e.defaultProps[i]);return h(e,c,r,o,null)}function h(e,t,n,o,i){var u={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==i?++r.__v:i};return null!=r.vnode&&r.vnode(u),u}function v(){return{current:null}}function b(e){return e.children}function y(e,t){this.props=e,this.context=t}function m(e,t){if(null==t)return e.__?m(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?m(e):null}function g(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return g(e)}}function k(e){(!e.__d&&(e.__d=!0)&&i.push(e)&&!E.__r++||c!==r.debounceRendering)&&((c=r.debounceRendering)||u)(E)}function E(){for(var e;E.__r=i.length;)e=i.sort((function(e,t){return e.__v.__b-t.__v.__b})),i=[],e.some((function(e){var t,n,r,o,i,u;e.__d&&(i=(o=(t=e).__v).__e,(u=t.__P)&&(n=[],(r=f({},o)).__v=o.__v+1,F(u,o,r,t.__n,void 0!==u.ownerSVGElement,null!=o.__h?[i]:null,n,null==i?m(o):i,o.__h),N(n,o),o.__e!=i&&g(o)))}))}function w(e,t,n,r,o,i,u,c,a,s){var f,p,d,v,y,g,k,E=r&&r.__k||_,w=E.length;for(n.__k=[],f=0;f<t.length;f++)if(null!=(v=n.__k[f]=null==(v=t[f])||"boolean"==typeof v?null:"string"==typeof v||"number"==typeof v||"bigint"==typeof v?h(null,v,null,null,v):Array.isArray(v)?h(b,{children:v},null,null,null):v.__b>0?h(v.type,v.props,v.key,null,v.__v):v)){if(v.__=n,v.__b=n.__b+1,null===(d=E[f])||d&&v.key==d.key&&v.type===d.type)E[f]=void 0;else for(p=0;p<w;p++){if((d=E[p])&&v.key==d.key&&v.type===d.type){E[p]=void 0;break}d=null}F(e,v,d=d||l,o,i,u,c,a,s),y=v.__e,(p=v.ref)&&d.ref!=p&&(k||(k=[]),d.ref&&k.push(d.ref,null,v),k.push(p,v.__c||y,v)),null!=y?(null==g&&(g=y),"function"==typeof v.type&&null!=v.__k&&v.__k===d.__k?v.__d=a=C(v,a,e):a=O(e,v,d,E,y,a),s||"option"!==n.type?"function"==typeof n.type&&(n.__d=a):e.value=""):a&&d.__e==a&&a.parentNode!=e&&(a=m(d))}for(n.__e=g,f=w;f--;)null!=E[f]&&("function"==typeof n.type&&null!=E[f].__e&&E[f].__e==n.__d&&(n.__d=m(r,f+1)),L(E[f],E[f]));if(k)for(f=0;f<k.length;f++)H(k[f],k[++f],k[++f])}function C(e,t,n){var r,o;for(r=0;r<e.__k.length;r++)(o=e.__k[r])&&(o.__=e,t="function"==typeof o.type?C(o,t,n):O(n,o,o,e.__k,o.__e,t));return t}function S(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){S(e,t)})):t.push(e)),t}function O(e,t,n,r,o,i){var u,c,a;if(void 0!==t.__d)u=t.__d,t.__d=void 0;else if(null==n||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),u=null;else{for(c=i,a=0;(c=c.nextSibling)&&a<r.length;a+=2)if(c==o)break e;e.insertBefore(o,i),u=i}return void 0!==u?u:o.nextSibling}function T(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||s.test(t)?n:n+"px"}function x(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||T(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||T(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?P:D,i):e.removeEventListener(t,i?P:D,i);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function D(e){this.l[e.type+!1](r.event?r.event(e):e)}function P(e){this.l[e.type+!0](r.event?r.event(e):e)}function F(e,t,n,o,i,u,c,a,l){var _,s,p,d,h,v,m,g,k,E,C,S=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(l=n.__h,a=t.__e=n.__e,t.__h=null,u=[a]),(_=r.__b)&&_(t);try{e:if("function"==typeof S){if(g=t.props,k=(_=S.contextType)&&o[_.__c],E=_?k?k.props.value:_.__:o,n.__c?m=(s=t.__c=n.__c).__=s.__E:("prototype"in S&&S.prototype.render?t.__c=s=new S(g,E):(t.__c=s=new y(g,E),s.constructor=S,s.render=I),k&&k.sub(s),s.props=g,s.state||(s.state={}),s.context=E,s.__n=o,p=s.__d=!0,s.__h=[]),null==s.__s&&(s.__s=s.state),null!=S.getDerivedStateFromProps&&(s.__s==s.state&&(s.__s=f({},s.__s)),f(s.__s,S.getDerivedStateFromProps(g,s.__s))),d=s.props,h=s.state,p)null==S.getDerivedStateFromProps&&null!=s.componentWillMount&&s.componentWillMount(),null!=s.componentDidMount&&s.__h.push(s.componentDidMount);else{if(null==S.getDerivedStateFromProps&&g!==d&&null!=s.componentWillReceiveProps&&s.componentWillReceiveProps(g,E),!s.__e&&null!=s.shouldComponentUpdate&&!1===s.shouldComponentUpdate(g,s.__s,E)||t.__v===n.__v){s.props=g,s.state=s.__s,t.__v!==n.__v&&(s.__d=!1),s.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),s.__h.length&&c.push(s);break e}null!=s.componentWillUpdate&&s.componentWillUpdate(g,s.__s,E),null!=s.componentDidUpdate&&s.__h.push((function(){s.componentDidUpdate(d,h,v)}))}s.context=E,s.props=g,s.state=s.__s,(_=r.__r)&&_(t),s.__d=!1,s.__v=t,s.__P=e,_=s.render(s.props,s.state,s.context),s.state=s.__s,null!=s.getChildContext&&(o=f(f({},o),s.getChildContext())),p||null==s.getSnapshotBeforeUpdate||(v=s.getSnapshotBeforeUpdate(d,h)),C=null!=_&&_.type===b&&null==_.key?_.props.children:_,w(e,Array.isArray(C)?C:[C],t,n,o,i,u,c,a,l),s.base=t.__e,t.__h=null,s.__h.length&&c.push(s),m&&(s.__E=s.__=null),s.__e=!1}else null==u&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=A(n.__e,t,n,o,i,u,c,l);(_=r.diffed)&&_(t)}catch(e){t.__v=null,(l||null!=u)&&(t.__e=a,t.__h=!!l,u[u.indexOf(a)]=null),r.__e(e,t,n)}}function N(e,t){r.__c&&r.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){r.__e(e,t.__v)}}))}function A(e,t,n,r,o,i,u,c){var a,s,f,d,h=n.props,v=t.props,b=t.type,y=0;if("svg"===b&&(o=!0),null!=i)for(;y<i.length;y++)if((a=i[y])&&(a===e||(b?a.localName==b:3==a.nodeType))){e=a,i[y]=null;break}if(null==e){if(null===b)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",b):document.createElement(b,v.is&&v),i=null,c=!1}if(null===b)h===v||c&&e.data===v||(e.data=v);else{if(i=i&&_.slice.call(e.childNodes),s=(h=n.props||l).dangerouslySetInnerHTML,f=v.dangerouslySetInnerHTML,!c){if(null!=i)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(f||s)&&(f&&(s&&f.__html==s.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||x(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||x(e,i,t[i],n[i],r)}(e,v,h,o,c),f)t.__k=[];else if(y=t.props.children,w(e,Array.isArray(y)?y:[y],t,n,r,o&&"foreignObject"!==b,i,u,e.firstChild,c),null!=i)for(y=i.length;y--;)null!=i[y]&&p(i[y]);c||("value"in v&&void 0!==(y=v.value)&&(y!==e.value||"progress"===b&&!y)&&x(e,"value",y,h.value,!1),"checked"in v&&void 0!==(y=v.checked)&&y!==e.checked&&x(e,"checked",y,h.checked,!1))}return e}function H(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){r.__e(e,n)}}function L(e,t,n){var o,i,u;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||H(o,null,t)),n||"function"==typeof e.type||(n=null!=(i=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(u=0;u<o.length;u++)o[u]&&L(o[u],t,n);null!=i&&p(i)}function I(e,t,n){return this.constructor(e,n)}function G(e,t,n){var o,i,u;r.__&&r.__(e,t),i=(o="function"==typeof n)?null:n&&n.__k||t.__k,u=[],F(t,e=(!o&&n||t).__k=d(b,null,[e]),i||l,l,void 0!==t.ownerSVGElement,!o&&n?[n]:i?null:t.firstChild?_.slice.call(t.childNodes):null,u,!o&&n?n:i?i.__e:t.firstChild,o),N(u,e)}function U(e,t){G(e,t,U)}function j(e,t,n){var r,o,i,u=arguments,c=f({},e.props);for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:c[i]=t[i];if(arguments.length>3)for(n=[n],i=3;i<arguments.length;i++)n.push(u[i]);return null!=n&&(c.children=n),h(e.type,c,r||e.key,o||e.ref,null)}function R(e,t){var n={__c:t="__cC"+a++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(k)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}r={__e:function(e,t){for(var n,r,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(t){e=t}throw e},__v:0},o=function(e){return null!=e&&void 0===e.constructor},y.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=f({},this.state),"function"==typeof e&&(e=e(f({},n),this.props)),e&&f(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),k(this))},y.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),k(this))},y.prototype.render=b,i=[],u="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,E.__r=0,a=0},1:function(e,t,n){e.exports=n(15)()},15:function(e,t,n){"use strict";var r=n(16);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,u){if(u!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},16:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2:function(e,t,n){"use strict";n.d(t,"j",(function(){return h})),n.d(t,"h",(function(){return v})),n.d(t,"d",(function(){return b})),n.d(t,"f",(function(){return y})),n.d(t,"i",(function(){return m})),n.d(t,"e",(function(){return g})),n.d(t,"g",(function(){return k})),n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return w})),n.d(t,"c",(function(){return C}));var r,o,i,u=n(0),c=0,a=[],l=u.options.__b,_=u.options.__r,s=u.options.diffed,f=u.options.__c,p=u.options.unmount;function d(e,t){u.options.__h&&u.options.__h(o,e,c||t),c=0;var n=o.__H||(o.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function h(e){return c=1,v(P,e)}function v(e,t,n){var i=d(r++,2);return i.t=e,i.__c||(i.__=[n?n(t):P(void 0,t),function(e){var t=i.t(i.__[0],e);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}))}],i.__c=o),i.__}function b(e,t){var n=d(r++,3);!u.options.__s&&D(n.__H,t)&&(n.__=e,n.__H=t,o.__H.__h.push(n))}function y(e,t){var n=d(r++,4);!u.options.__s&&D(n.__H,t)&&(n.__=e,n.__H=t,o.__h.push(n))}function m(e){return c=5,k((function(){return{current:e}}),[])}function g(e,t,n){c=6,y((function(){"function"==typeof e?e(t()):e&&(e.current=t())}),null==n?n:n.concat(e))}function k(e,t){var n=d(r++,7);return D(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function E(e,t){return c=8,k((function(){return e}),t)}function w(e){var t=o.context[e.__c],n=d(r++,9);return n.__c=e,t?(null==n.__&&(n.__=!0,t.sub(o)),t.props.value):e.__}function C(e,t){u.options.useDebugValue&&u.options.useDebugValue(t?t(e):e)}function S(){a.forEach((function(e){if(e.__P)try{e.__H.__h.forEach(T),e.__H.__h.forEach(x),e.__H.__h=[]}catch(o){e.__H.__h=[],u.options.__e(o,e.__v)}})),a=[]}u.options.__b=function(e){o=null,l&&l(e)},u.options.__r=function(e){_&&_(e),r=0;var t=(o=e.__c).__H;t&&(t.__h.forEach(T),t.__h.forEach(x),t.__h=[])},u.options.diffed=function(e){s&&s(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==a.push(t)&&i===u.options.requestAnimationFrame||((i=u.options.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),O&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);O&&(t=requestAnimationFrame(n))})(S)),o=void 0},u.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(T),e.__h=e.__h.filter((function(e){return!e.__||x(e)}))}catch(i){t.some((function(e){e.__h&&(e.__h=[])})),t=[],u.options.__e(i,e.__v)}})),f&&f(e,t)},u.options.unmount=function(e){p&&p(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(T)}catch(e){u.options.__e(e,t.__v)}};var O="function"==typeof requestAnimationFrame;function T(e){var t=o;"function"==typeof e.__c&&e.__c(),o=t}function x(e){var t=o;e.__c=e.__(),o=t}function D(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function P(e,t){return"function"==typeof t?t(e):t}},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var r,o=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],i=o.join(","),u="undefined"===typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,c=function(e,t,n){var r=Array.prototype.slice.apply(e.querySelectorAll(i));return t&&u.call(e,i)&&r.unshift(e),r=r.filter(n)},a=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:"AUDIO"!==e.nodeName&&"VIDEO"!==e.nodeName&&"DETAILS"!==e.nodeName||null!==e.getAttribute("tabindex")?e.tabIndex:0:t},l=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},_=function(e){return"INPUT"===e.tagName},s=function(e){return function(e){return _(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||e.ownerDocument,r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!==typeof window&&"undefined"!==typeof window.CSS&&"function"===typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(i){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",i.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)},f=function(e,t){return!(t.disabled||function(e){return _(e)&&"hidden"===e.type}(t)||function(e,t){if("hidden"===getComputedStyle(e).visibility)return!0;var n=u.call(e,"details>summary:first-of-type")?e.parentElement:e;if(u.call(n,"details:not([open]) *"))return!0;if(t&&"full"!==t){if("non-zero-area"===t){var r=e.getBoundingClientRect(),o=r.width,i=r.height;return 0===o&&0===i}}else for(;e;){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(t,e.displayCheck)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t))},p=function(e,t){return!(!f(e,t)||s(t)||a(t)<0)},d=o.concat("iframe").join(","),h=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==u.call(e,d)&&f(t,e)};function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y,m=(y=[],{activateTrap:function(e){if(y.length>0){var t=y[y.length-1];t!==e&&t.pause()}var n=y.indexOf(e);-1===n||y.splice(n,1),y.push(e)},deactivateTrap:function(e){var t=y.indexOf(e);-1!==t&&y.splice(t,1),y.length>0&&y[y.length-1].unpause()}}),g=function(e){return setTimeout(e,0)},k=function(e,t){var n=-1;return e.every((function(e,r){return!t(e)||(n=r,!1)})),n},E=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return"function"===typeof e?e.apply(void 0,n):e},w=function(e,t){var n,o=document,i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),u={containers:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},_=function(e,t,n){return e&&void 0!==e[t]?e[t]:i[n||t]},s=function(e){return u.containers.some((function(t){return t.contains(e)}))},f=function(e){var t=i[e];if(!t)return null;var n=t;if("string"===typeof t&&!(n=o.querySelector(t)))throw new Error("`".concat(e,"` refers to no known node"));if("function"===typeof t&&!(n=t()))throw new Error("`".concat(e,"` did not return a node"));return n},d=function(){var e;if(null!==f("initialFocus"))e=f("initialFocus");else if(s(o.activeElement))e=o.activeElement;else{var t=u.tabbableGroups[0];e=t&&t.firstTabbableNode||f("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},y=function(){if(u.tabbableGroups=u.containers.map((function(e){var t,n,r,o=(n=[],r=[],c(e,(t=t||{}).includeContainer,p.bind(null,t)).forEach((function(e,t){var o=a(e);0===o?n.push(e):r.push({documentOrder:t,tabIndex:o,node:e})})),r.sort(l).map((function(e){return e.node})).concat(n));if(o.length>0)return{container:e,firstTabbableNode:o[0],lastTabbableNode:o[o.length-1]}})).filter((function(e){return!!e})),u.tabbableGroups.length<=0&&!f("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},w=function e(t){t!==o.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!i.preventScroll}),u.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"===typeof e.select}(t)&&t.select()):e(d()))},C=function(e){var t=f("setReturnFocus");return t||e},S=function(e){s(e.target)||(E(i.clickOutsideDeactivates,e)?n.deactivate({returnFocus:i.returnFocusOnDeactivate&&!h(e.target)}):E(i.allowOutsideClick,e)||e.preventDefault())},O=function(e){var t=s(e.target);t||e.target instanceof Document?t&&(u.mostRecentlyFocusedNode=e.target):(e.stopImmediatePropagation(),w(u.mostRecentlyFocusedNode||d()))},T=function(e){if(!1!==i.escapeDeactivates&&function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e))return e.preventDefault(),void n.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){y();var t=null;if(u.tabbableGroups.length>0){var n=k(u.tabbableGroups,(function(t){return t.container.contains(e.target)}));if(n<0)t=e.shiftKey?u.tabbableGroups[u.tabbableGroups.length-1].lastTabbableNode:u.tabbableGroups[0].firstTabbableNode;else if(e.shiftKey){var r=k(u.tabbableGroups,(function(t){var n=t.firstTabbableNode;return e.target===n}));if(r<0&&u.tabbableGroups[n].container===e.target&&(r=n),r>=0){var o=0===r?u.tabbableGroups.length-1:r-1;t=u.tabbableGroups[o].lastTabbableNode}}else{var i=k(u.tabbableGroups,(function(t){var n=t.lastTabbableNode;return e.target===n}));if(i<0&&u.tabbableGroups[n].container===e.target&&(i=n),i>=0){var c=i===u.tabbableGroups.length-1?0:i+1;t=u.tabbableGroups[c].firstTabbableNode}}}else t=f("fallbackFocus");t&&(e.preventDefault(),w(t))}(e)},x=function(e){E(i.clickOutsideDeactivates,e)||s(e.target)||E(i.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},D=function(){if(u.active)return m.activateTrap(n),r=i.delayInitialFocus?g((function(){w(d())})):w(d()),o.addEventListener("focusin",O,!0),o.addEventListener("mousedown",S,{capture:!0,passive:!1}),o.addEventListener("touchstart",S,{capture:!0,passive:!1}),o.addEventListener("click",x,{capture:!0,passive:!1}),o.addEventListener("keydown",T,{capture:!0,passive:!1}),n},P=function(){if(u.active)return o.removeEventListener("focusin",O,!0),o.removeEventListener("mousedown",S,!0),o.removeEventListener("touchstart",S,!0),o.removeEventListener("click",x,!0),o.removeEventListener("keydown",T,!0),n};return(n={activate:function(e){if(u.active)return this;var t=_(e,"onActivate"),n=_(e,"onPostActivate"),r=_(e,"checkCanFocusTrap");r||y(),u.active=!0,u.paused=!1,u.nodeFocusedBeforeActivation=o.activeElement,t&&t();var i=function(){r&&y(),D(),n&&n()};return r?(r(u.containers.concat()).then(i,i),this):(i(),this)},deactivate:function(e){if(!u.active)return this;clearTimeout(r),P(),u.active=!1,u.paused=!1,m.deactivateTrap(n);var t=_(e,"onDeactivate"),o=_(e,"onPostDeactivate"),i=_(e,"checkCanReturnFocus");t&&t();var c=_(e,"returnFocus","returnFocusOnDeactivate"),a=function(){g((function(){c&&w(C(u.nodeFocusedBeforeActivation)),o&&o()}))};return c&&i?(i(C(u.nodeFocusedBeforeActivation)).then(a,a),this):(a(),this)},pause:function(){return u.paused||!u.active||(u.paused=!0,P()),this},unpause:function(){return u.paused&&u.active?(u.paused=!1,y(),D(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return u.containers=t.map((function(e){return"string"===typeof e?o.querySelector(e):e})),u.active&&y(),this}}).updateContainerElements(e),n}}}]);
//# sourceMappingURL=vendors~Chat~articleForm~articlePage~commentDropdowns~modCenter-cb822c87ddc05fe679a8.chunk.js.map
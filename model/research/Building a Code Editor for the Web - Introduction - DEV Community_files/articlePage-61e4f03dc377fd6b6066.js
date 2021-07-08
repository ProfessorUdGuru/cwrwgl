(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{10:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1),i=n.n(r),o=i.a.oneOfType([i.a.arrayOf(i.a.node),i.a.node])},11:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return c}));var r=n(1),i=n.n(r),o=n(7),a=n(6),s=i.a.shape({body_text:i.a.arrayOf(i.a.string)}),c=i.a.shape({id:i.a.number.isRequired,title:i.a.string.isRequired,path:i.a.string.isRequired,cloudinary_video_url:i.a.string,video_duration_in_minutes:i.a.number,type_of:i.a.oneOf(["podcast_episodes"]),class_name:i.a.oneOf(["PodcastEpisode","User","Article"]),flare_tag:o.a,tag_list:i.a.arrayOf(i.a.string),cached_tag_list_array:i.a.arrayOf(i.a.string),podcast:i.a.shape({slug:i.a.string.isRequired,title:i.a.string.isRequired,image_url:i.a.string.isRequired}),user_id:i.a.string.isRequired,user:i.a.shape({username:i.a.string.isRequired,name:i.a.string.isRequired}),organization:a.a,highlight:s,public_reactions_count:i.a.number,reactions_count:i.a.number,comments_count:i.a.number,reading_time:i.a.number})},18:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),i=n(1),o=n.n(i),a=n(5),s=n(3),c={children:a.c.isRequired,actions:o.a.arrayOf(o.a.shape({message:o.a.string.isRequired,handler:o.a.func.isRequired,lifespan:o.a.number.isRequired}))},u=function(e){var t=e.message,n=e.actions,i=void 0===n?[]:n;return Object(r.h)("div",{className:"crayons-snackbar__item flex"},Object(r.h)("div",{className:"crayons-snackbar__body",role:"alert"},t),Object(r.h)("div",{className:"crayons-snackbar__actions"},i.map((function(e){var t=e.text,n=e.handler;return Object(r.h)(s.a,{variant:"ghost-success",inverted:!0,onClick:n,key:t},t)}))))};u.displayName="SnackbarItem",u.propTypes=c.isRequired},23:function(e,t,n){"use strict";n.d(t,"b",(function(){return w})),n.d(t,"a",(function(){return k}));var r=n(0),i=n(1),o=n.n(i),a=n(18);function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var i=g(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=[];function w(e){Array.isArray(e.actions)||(e.actions=[]),b.push(e)}var k=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(s,e);var t,n,i,o=h(s);function s(){var e;p(this,s);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=o.call.apply(o,[this].concat(n))).state={snacks:[]},e.pollingId=void 0,e.paused=!1,e.pauseLifespan=void 0,e.resumeLifespan=void 0,e}return t=s,(n=[{key:"componentDidMount",value:function(){this.initializePolling()}},{key:"componentDidUpdate",value:function(){var e=this;this.pauseLifespan||(this.pauseLifespan=function(t){e.paused=!0},this.resumeLifespan=function(t){t.stopPropagation(),e.paused=!1},this.element.addEventListener("mouseover",this.pauseLifespan),this.element.addEventListener("mouseout",this.resumeLifespan,!0))}},{key:"componentWillUnmount",value:function(){this.element&&(this.element.removeEventListener("mouseover",this.pauseLifespan),this.element.addEventListener("mouseout",this.resumeLifespan))}},{key:"initializePolling",value:function(){var e=this,t=this.props,n=t.pollingTime,r=t.lifespan;this.pollingId=setInterval((function(){if(b.length>0){var t=b.map((function(e){return f(f({},e),{},{lifespan:r})}));b=[],e.updateSnackbarItems(t),t.forEach((function(t){t.lifespanTimeoutId=setTimeout((function(){e.decreaseLifespan(t)}),1e3),t.addCloseButton&&t.actions.push({text:"Dismiss",handler:function(){e.setState((function(e){return{prevState:e,snacks:e.snacks.filter((function(e){return e!==t}))}}))}})}))}}),n)}},{key:"updateSnackbarItems",value:function(e){this.setState((function(t){var n=[].concat(c(t.snacks),c(e));return n.length>3&&(n.slice(0,n.length-3).forEach((function(e){var t=e.lifespanTimeoutId;clearTimeout(t)})),n=n.slice(n.length-3)),f(f({},t),{},{snacks:n})}))}},{key:"decreaseLifespan",value:function(e){var t=this;if(!this.paused&&0===e.lifespan)return clearTimeout(e.lifespanTimeoutId),void this.setState((function(t){var n=t.snacks.filter((function(t){return t!==e}));return f(f({},t),{},{snacks:n})}));this.paused||(e.lifespan-=1),e.lifespanTimeoutId=setTimeout((function(){t.decreaseLifespan(e)}),1e3)}},{key:"render",value:function(){var e=this,t=this.state.snacks;return Object(r.h)("div",{className:t.length>0?"crayons-snackbar":"hidden",ref:function(t){e.element=t}},t.map((function(e,t){var n=e.message,i=e.actions,o=void 0===i?[]:i;return Object(r.h)(a.a,{message:n,actions:o,key:t})})))}}])&&y(t.prototype,n),i&&y(t,i),s}(r.Component);k.defaultProps={lifespan:5,pollingTime:300},k.displayName="Snackbar",k.propTypes={lifespan:o.a.number,pollingTime:o.a.number}},25:function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=o(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){c=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw a}}}}function o(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t,n,r,i,o,a){try{var s=e[o](a),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(r,i)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){s(o,r,i,a,c,"next",e)}function c(e){s(o,r,i,a,c,"throw",e)}a(void 0)}))}}var u;function l(){return f.apply(this,arguments)}function f(){return(f=c((function*(){if(u)return u;var e=(yield n.e(108).then(n.t.bind(null,40,7))).default;return u=e}))).apply(this,arguments)}function d(e){var t,n=[],o=i(e);try{for(o.s();!(t=o.n()).done;){var a=t.value;1===a.nodeType&&(a.classList.contains("ltag_gist-liquid-tag")&&n.push(a),n.push.apply(n,r(a.querySelectorAll(".ltag_gist-liquid-tag"))))}}catch(s){o.e(s)}finally{o.f()}return n}function p(e,t){var n,r=i(t);try{var o=function(){var t=n.value;e(t,t.firstElementChild.outerHTML,{beforeWrite:function(e){return t.childElementCount>3?"":e}})};for(r.s();!(n=r.n()).done;)o()}catch(a){r.e(a)}finally{r.f()}}function y(e,t){var n=new MutationObserver((function(e){var n,r=i(e);try{for(r.s();!(n=r.n()).done;){var o=n.value,a=o.type,s=o.addedNodes;"childList"===a&&s.length>0&&p(t,d(s))}}catch(c){r.e(c)}finally{r.f()}}));n.observe(e,{attributes:!1,childList:!0,subtree:!0}),InstantClick.on("change",(function(){n.disconnect()})),window.addEventListener("beforeunload",(function(){n.disconnect()}))}function m(e){return h.apply(this,arguments)}function h(){return(h=c((function*(e){var t=yield l();p(t,document.querySelectorAll(".ltag_gist-liquid-tag")),y(e,t)}))).apply(this,arguments)}n.d(t,"a",(function(){return m}))},43:function(e,t,n){"use strict";var r=n(48),i=function(e,t,n,r){var i="",o="";if(n){var a=new Date;a.setTime(a.getTime()+60*n*1e3),i="; expires="+a.toGMTString()}r&&(o="; domain="+r),document.cookie=e+"="+escape(t)+i+o+"; path=/"},o=function(e){var t,n,r=e+"=",i=document.cookie.split(";");for(t=0;t<i.length;t++){for(n=i[t];" "===n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(r))return unescape(n.substring(r.length,n.length))}return null},a={urlPrefix:"",visitsUrl:"/ahoy/visits",eventsUrl:"/ahoy/events",page:null,platform:"Web",useBeacon:!0,startOnReady:!0,trackVisits:!0,cookies:!0,cookieDomain:null,headers:{},visitParams:{},withCredentials:!1,visitDuration:240,visitorDuration:1051200},s=window.ahoy||window.Ahoy||{};s.configure=function(e){for(var t in e)e.hasOwnProperty(t)&&(a[t]=e[t])},s.configure(s);var c,u,l,f,d=window.jQuery||window.Zepto||window.$,p=!1,y=[],m="undefined"!==typeof JSON&&"undefined"!==typeof JSON.stringify,h=[];function v(){return a.urlPrefix+a.eventsUrl}function g(){return(a.useBeacon||a.trackNow)&&(e=a.headers,0===Object.keys(e).length)&&m&&"undefined"!==typeof window.navigator.sendBeacon&&!a.withCredentials;var e}function b(e,t,n){i(e,t,n,a.cookieDomain||a.domain)}function w(e){return o(e)}function k(e){i(e,"",-1)}function O(e){w("ahoy_debug")&&window.console.log(e)}function S(){for(var e;e=y.shift();)e();p=!0}function _(e,t){var n=e.matches||e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector;return n?n.apply(e,[t])?e:e.parentElement?_(e.parentElement,t):null:(O("Unable to match"),null)}function j(e,t,n){document.addEventListener(e,(function(e){var r=_(e.target,t);r&&n.call(r,e)}))}function x(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))}function E(){a.cookies&&m&&b("ahoy_events",JSON.stringify(h),1)}function T(){var e=document.querySelector("meta[name=csrf-token]");return e&&e.content}function I(e){var t=T();t&&e.setRequestHeader("X-CSRF-Token",t)}function A(e,t,n){if(m)if(d&&d.ajax)d.ajax({type:"POST",url:e,data:JSON.stringify(t),contentType:"application/json; charset=utf-8",dataType:"json",beforeSend:I,success:n,headers:a.headers,xhrFields:{withCredentials:a.withCredentials}});else{var r=new XMLHttpRequest;for(var i in r.open("POST",e,!0),r.withCredentials=a.withCredentials,r.setRequestHeader("Content-Type","application/json"),a.headers)a.headers.hasOwnProperty(i)&&r.setRequestHeader(i,a.headers[i]);r.onload=function(){200===r.status&&n()},I(r),r.send(JSON.stringify(t))}}function R(e){var t={events:[e]};return a.cookies&&(t.visit_token=e.visit_token,t.visitor_token=e.visitor_token),delete e.visit_token,delete e.visitor_token,t}function q(e){s.ready((function(){A(v(),R(e),(function(){for(var t=0;t<h.length;t++)if(h[t].id==e.id){h.splice(t,1);break}E()}))}))}function C(e){s.ready((function(){var t,n=R(e),i=(t=document.querySelector("meta[name=csrf-param]"))&&t.content,o=T();i&&o&&(n[i]=o),n.events_json=JSON.stringify(n.events),delete n.events,window.navigator.sendBeacon(v(),Object(r.serialize)(n))}))}function P(){return a.page||window.location.pathname}function L(e){return e&&e.length>0?e:null}function N(e){return function(e){for(var t in e)e.hasOwnProperty(t)&&null===e[t]&&delete e[t];return e}({tag:this.tagName.toLowerCase(),id:L(this.id),class:L(this.className),page:P(),section:B(this)})}function B(e){for(;e&&e!==document;e=e.parentNode)if(e.hasAttribute("data-section"))return e.getAttribute("data-section");return null}function D(){if(p=!1,c=s.getVisitId(),u=s.getVisitorId(),l=w("ahoy_track"),!1===a.cookies||!1===a.trackVisits)O("Visit tracking disabled"),S();else if(c&&u&&!l)O("Active visit"),S();else if(c||b("ahoy_visit",c=x(),a.visitDuration),w("ahoy_visit")){O("Visit started"),u||b("ahoy_visitor",u=x(),a.visitorDuration);var e={visit_token:c,visitor_token:u,platform:a.platform,landing_page:window.location.href,screen_width:window.screen.width,screen_height:window.screen.height,js:!0};for(var t in document.referrer.length>0&&(e.referrer=document.referrer),a.visitParams)a.visitParams.hasOwnProperty(t)&&(e[t]=a.visitParams[t]);O(e),A(a.urlPrefix+a.visitsUrl,e,(function(){k("ahoy_track"),S()}))}else O("Cookies disabled"),S()}s.ready=function(e){p?e():y.push(e)},s.getVisitId=s.getVisitToken=function(){return w("ahoy_visit")},s.getVisitorId=s.getVisitorToken=function(){return w("ahoy_visitor")},s.reset=function(){return k("ahoy_visit"),k("ahoy_visitor"),k("ahoy_events"),k("ahoy_track"),!0},s.debug=function(e){return!1===e?k("ahoy_debug"):b("ahoy_debug","t",525600),!0},s.track=function(e,t){var n={name:e,properties:t||{},time:(new Date).getTime()/1e3,id:x(),js:!0};return s.ready((function(){a.cookies&&!s.getVisitId()&&D(),s.ready((function(){O(n),n.visit_token=s.getVisitId(),n.visitor_token=s.getVisitorId(),g()?C(n):(h.push(n),E(),setTimeout((function(){q(n)}),1e3))}))})),!0},s.trackView=function(e){var t={url:window.location.href,title:document.title,page:P()};if(e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);s.track("$view",t)},s.trackClicks=function(){j("click","a, button, input[type=submit]",(function(e){var t=N.call(this,e);t.text="input"==t.tag?this.value:(this.textContent||this.innerText||this.innerHTML).replace(/[\s\r\n]+/g," ").trim(),t.href=this.href,s.track("$click",t)}))},s.trackSubmits=function(){j("submit","form",(function(e){var t=N.call(this,e);s.track("$submit",t)}))},s.trackChanges=function(){j("change","input, textarea, select",(function(e){var t=N.call(this,e);s.track("$change",t)}))},s.trackAll=function(){s.trackView(),s.trackClicks(),s.trackSubmits(),s.trackChanges()};try{h=JSON.parse(w("ahoy_events")||"[]")}catch(M){}for(var U=0;U<h.length;U++)q(h[U]);s.start=function(){D(),s.start=function(){}},f=function(){a.startOnReady&&s.start()},"interactive"===document.readyState||"complete"===document.readyState?setTimeout(f,0):document.addEventListener("DOMContentLoaded",f),t.a=s},48:function(e,t){const n=e=>void 0===e,r=e=>Array.isArray(e),i=e=>e&&"number"===typeof e.size&&"string"===typeof e.type&&"function"===typeof e.slice,o=(e,t,a,s)=>((t=t||{}).indices=!n(t.indices)&&t.indices,t.nullsAsUndefineds=!n(t.nullsAsUndefineds)&&t.nullsAsUndefineds,t.booleansAsIntegers=!n(t.booleansAsIntegers)&&t.booleansAsIntegers,t.allowEmptyArrays=!n(t.allowEmptyArrays)&&t.allowEmptyArrays,a=a||new FormData,n(e)||(null===e?t.nullsAsUndefineds||a.append(s,""):(e=>"boolean"===typeof e)(e)?t.booleansAsIntegers?a.append(s,e?1:0):a.append(s,e):r(e)?e.length?e.forEach(((e,n)=>{const r=s+"["+(t.indices?n:"")+"]";o(e,t,a,r)})):t.allowEmptyArrays&&a.append(s+"[]",""):(e=>e instanceof Date)(e)?a.append(s,e.toISOString()):!(e=>e===Object(e))(e)||(e=>i(e)&&"string"===typeof e.name&&("object"===typeof e.lastModifiedDate||"number"===typeof e.lastModified))(e)||i(e)?a.append(s,e):Object.keys(e).forEach((n=>{const i=e[n];if(r(i))for(;n.length>2&&n.lastIndexOf("[]")===n.length-2;)n=n.substring(0,n.length-2);o(i,t,a,s?s+"["+n+"]":n)}))),a);e.exports={serialize:o}},5:function(e,t,n){"use strict";n.d(t,"g",(function(){return o})),n.d(t,"c",(function(){return a.a})),n.d(t,"d",(function(){return s.a})),n.d(t,"f",(function(){return c.a})),n.d(t,"b",(function(){return u.b})),n.d(t,"a",(function(){return u.a})),n.d(t,"e",(function(){return l}));var r=n(1),i=n.n(r),o=i.a.shape({id:i.a.string.isRequired,name:i.a.string.isRequired,profile_image_url:i.a.string.isRequired,summary:i.a.string.isRequired}),a=n(10),s=n(6),c=n(7),u=n(11),l=i.a.shape({tags:i.a.arrayOf(i.a.string).isRequired,onClick:i.a.func.isRequired,onKeyPress:i.a.func.isRequired})},52:function(e,t,n){"use strict";function r(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){c=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw a}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return d}));var o=!1,a=0,s=document.getElementsByClassName("js-fullscreen-code")[0],c=document.body;function u(e){"Escape"==e.key&&p(e)}function l(e){e?document.body.addEventListener("keyup",u):document.body.removeEventListener("keyup",u)}function f(e){c.style.overflow=e?"hidden":""}function d(e){if(e){var t,n=r(e);try{for(n.s();!(t=n.n()).done;){t.value.addEventListener("click",p)}}catch(i){n.e(i)}finally{n.f()}}}function p(e){var t=e.currentTarget.closest(".js-code-highlight")?e.currentTarget.closest(".js-code-highlight").cloneNode(!0):null,n=t?t.getElementsByClassName("js-fullscreen-code-action"):null;o?(f(!1),window.scrollTo(0,a),l(!1),function(e){if(e){var t,n=r(e);try{for(n.s();!(t=n.n()).done;)t.value.removeEventListener("click",p)}catch(i){n.e(i)}finally{n.f()}}}(n),s.classList.remove("is-open"),s.removeChild(s.childNodes[0]),o=!1):(f(!0),a=window.scrollY,l(!0),t.classList.add("is-fullscreen"),s.appendChild(t),s.classList.add("is-open"),d(n),o=!0)}},6:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1),i=n.n(r),o=i.a.shape({id:i.a.number.isRequired,name:i.a.string.isRequired,slug:i.a.string.isRequired,profile_image_90:i.a.string.isRequired})},7:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1),i=n.n(r),o=i.a.shape({id:i.a.number.isRequired,name:i.a.string.isRequired,hotness_score:i.a.number.isRequired,points:i.a.number.isRequired,bg_color_hex:i.a.string.isRequired,text_color_hex:i.a.string.isRequired})},76:function(e,t,n){"use strict";n.r(t);var r,i=n(0),o=n(43),a=n(9),s=n(52),c=n(25),u=n(21);function l(e,t,n,r,i,o,a){try{var s=e[o](a),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(r,i)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){l(o,r,i,a,s,"next",e)}function s(e){l(o,r,i,a,s,"throw",e)}a(void 0)}))}}var d=document.getElementsByClassName("js-fullscreen-code-action");d&&Object(s.a)(d);var p=document.getElementById("snack-zone");p&&Object(i.render)(Object(i.h)(a.a,{lifespan:"3"}),p),top.addSnackbarItem=a.b;var y=document.getElementById("article-show-more-button");if("true"!==y.dataset.initialized){if(Runtime.isNativeAndroid("shareText"))y.addEventListener("click",(function(){return AndroidBridge.shareText(location.href)}));else{var m=Object(u.a)({triggerElementId:"article-show-more-button",dropdownContentId:"article-show-more-dropdown",onClose:function(){document.getElementById("article-copy-link-announcer").hidden=!0}}).closeDropdown;document.querySelectorAll("#article-show-more-dropdown [href]").forEach((function(e){e.addEventListener("click",(function(e){m(e),o.a.track("Post Dropdown",{option:e.target.text.trim()})}))}))}y.dataset.initialized="true"}null===(r=document.querySelector("clipboard-copy"))||void 0===r||r.addEventListener("click",(function(){var e=document.getElementById("article-copy-link-input").value;Runtime.copyToClipboard(e).then((function(){var e,t;e=document.activeElement,(t="clipboard-copy"===e.localName?e.querySelector("input"):document.getElementById("article-copy-link-input")).focus(),t.setSelectionRange(0,t.value.length),document.getElementById("article-copy-link-announcer").hidden=!1}))})),getCsrfToken().then(f((function*(){var e=document.body.dataset,t=e.user,r=void 0===t?null:t,o=e.userStatus,s=document.getElementById("comment-subscription"),c="logged-in"===o;try{var u=yield n.e(104).then(n.bind(null,118)),l=u.getCommentSubscriptionStatus,d=u.setCommentSubscriptionStatus,p=u.CommentSubscription,y=document.getElementById("article-body").dataset.articleId,m="not_subscribed";if(c&&null!==r)m=(yield l(y)).config;var h=function(){var e=f((function*(e){var t=yield d(y,e);Object(a.b)({message:t,addCloseButton:!0})}));return function(t){return e.apply(this,arguments)}}();Object(i.render)(Object(i.h)(p,{subscriptionType:m,positionType:"static",onSubscribe:h,onUnsubscribe:h,isLoggedIn:c}),s)}catch(v){document.getElementById("comment-subscription").innerHTML='<p className="color-accent-danger">Unable to load Comment Subscription component.<br />Try refreshing the page.</p>'}})));var h=function(){var e=f((function*(e){var t="js-pin-article"===e.id,n=e.dataset,r=n.articleId,i=n.path,o=t?"PUT":"DELETE",s="PUT"===o?JSON.stringify({id:r}):null;if((yield fetch(i,{method:o,body:s,headers:{Accept:"application/json","X-CSRF-Token":window.csrfToken,"Content-Type":"application/json"},credentials:"same-origin"})).ok){e.id=t?"js-unpin-article":"js-pin-article",e.innerHTML="".concat(t?"Unpin":"Pin"," Post");var c=t?"The post has been succesfully pinned":"The post has been succesfully unpinned";Object(a.b)({message:c})}}));return function(t){return e.apply(this,arguments)}}(),v=document.getElementById("action-space"),g=["js-pin-article","js-unpin-article"];v.addEventListener("click",function(){var e=f((function*(e){g.includes(e.target.id)&&h(e.target)}));return function(t){return e.apply(this,arguments)}}());var b=document.getElementById("profile-preview-trigger");"true"!==(null===b||void 0===b?void 0:b.dataset.initialized)&&(Object(u.a)({triggerElementId:"profile-preview-trigger",dropdownContentId:"profile-preview-content"}),b.dataset.initialized="true");var w=document.querySelector("#comments");w&&Object(c.a)(w)},9:function(e,t,n){"use strict";var r=n(23);n.d(t,"a",(function(){return r.a})),n.d(t,"b",(function(){return r.b}));n(18)}},[[76,54,2,0]]]);
//# sourceMappingURL=articlePage-61e4f03dc377fd6b6066.chunk.js.map
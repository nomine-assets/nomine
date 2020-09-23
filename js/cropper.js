/*!
 * Cropper.js v1.5.4
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2019-08-03T08:38:42.128Z
 */
!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):(t=t||self).Cropper=i()}(this,function(){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,i){for(var e=0;e<i.length;e++){var a=i[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function j(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var n="undefined"!=typeof window&&void 0!==window.document,h=n?window:{},t=n&&"ontouchstart"in h.document.documentElement,e=n&&"PointerEvent"in h,d="cropper",C="all",D="crop",B="move",k="zoom",T="e",E="w",W="s",N="n",H="ne",L="nw",O="se",z="sw",r="".concat(d,"-crop"),o="".concat(d,"-disabled"),Y="".concat(d,"-hidden"),l="".concat(d,"-hide"),p="".concat(d,"-invisible"),s="".concat(d,"-modal"),m="".concat(d,"-move"),u="".concat(d,"Action"),g="".concat(d,"Preview"),c="crop",f="move",v="none",w="crop",b="cropend",x="cropmove",y="cropstart",M="dblclick",X=e?"pointerdown":t?"touchstart":"mousedown",R=e?"pointermove":t?"touchmove":"mousemove",A=e?"pointerup pointercancel":t?"touchend touchcancel":"mouseup",S="ready",I="resize",U="wheel",P="zoom",q="image/jpeg",$=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,Q=/^data:/,K=/^data:image\/jpeg;base64,/,Z=/^img|canvas$/i,G={viewMode:0,dragMode:c,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},V=Number.isNaN||h.isNaN;function F(t){return"number"==typeof t&&!V(t)}var J=function(t){return 0<t&&t<1/0};function _(t){return void 0===t}function tt(t){return"object"===i(t)&&null!==t}var it=Object.prototype.hasOwnProperty;function et(t){if(!tt(t))return!1;try{var i=t.constructor,e=i.prototype;return i&&e&&it.call(e,"isPrototypeOf")}catch(t){return!1}}function at(t){return"function"==typeof t}var nt=Array.prototype.slice;function ot(t){return Array.from?Array.from(t):nt.call(t)}function ht(e,a){return e&&at(a)&&(Array.isArray(e)||F(e.length)?ot(e).forEach(function(t,i){a.call(e,t,i,e)}):tt(e)&&Object.keys(e).forEach(function(t){a.call(e,e[t],t,e)})),e}var rt=Object.assign||function(e){for(var t=arguments.length,i=new Array(1<t?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];return tt(e)&&0<i.length&&i.forEach(function(i){tt(i)&&Object.keys(i).forEach(function(t){e[t]=i[t]})}),e},st=/\.\d*(?:0|9){12}\d*$/;function ct(t,i){var e=1<arguments.length&&void 0!==i?i:1e11;return st.test(t)?Math.round(t*e)/e:t}var dt=/^width|height|left|top|marginLeft|marginTop$/;function lt(t,i){var e=t.style;ht(i,function(t,i){dt.test(i)&&F(t)&&(t="".concat(t,"px")),e[i]=t})}function pt(t,i){if(i)if(F(t.length))ht(t,function(t){pt(t,i)});else if(t.classList)t.classList.add(i);else{var e=t.className.trim();e?e.indexOf(i)<0&&(t.className="".concat(e," ").concat(i)):t.className=i}}function mt(t,i){i&&(F(t.length)?ht(t,function(t){mt(t,i)}):t.classList?t.classList.remove(i):0<=t.className.indexOf(i)&&(t.className=t.className.replace(i,"")))}function ut(t,i,e){i&&(F(t.length)?ht(t,function(t){ut(t,i,e)}):e?pt(t,i):mt(t,i))}var gt=/([a-z\d])([A-Z])/g;function ft(t){return t.replace(gt,"$1-$2").toLowerCase()}function vt(t,i){return tt(t[i])?t[i]:t.dataset?t.dataset[i]:t.getAttribute("data-".concat(ft(i)))}function wt(t,i,e){tt(e)?t[i]=e:t.dataset?t.dataset[i]=e:t.setAttribute("data-".concat(ft(i)),e)}var bt=/\s\s*/,xt=function(){var t=!1;if(n){var i=!1,e=function(){},a=Object.defineProperty({},"once",{get:function(){return t=!0,i},set:function(t){i=t}});h.addEventListener("test",e,a),h.removeEventListener("test",e,a)}return t}();function yt(e,t,a,i){var n=3<arguments.length&&void 0!==i?i:{},o=a;t.trim().split(bt).forEach(function(t){if(!xt){var i=e.listeners;i&&i[t]&&i[t][a]&&(o=i[t][a],delete i[t][a],0===Object.keys(i[t]).length&&delete i[t],0===Object.keys(i).length&&delete e.listeners)}e.removeEventListener(t,o,n)})}function Mt(o,t,h,i){var r=3<arguments.length&&void 0!==i?i:{},s=h;t.trim().split(bt).forEach(function(a){if(r.once&&!xt){var t=o.listeners,n=void 0===t?{}:t;s=function(){delete n[a][h],o.removeEventListener(a,s,r);for(var t=arguments.length,i=new Array(t),e=0;e<t;e++)i[e]=arguments[e];h.apply(o,i)},n[a]||(n[a]={}),n[a][h]&&o.removeEventListener(a,n[a][h],r),n[a][h]=s,o.listeners=n}o.addEventListener(a,s,r)})}function Ct(t,i,e){var a;return at(Event)&&at(CustomEvent)?a=new CustomEvent(i,{detail:e,bubbles:!0,cancelable:!0}):(a=document.createEvent("CustomEvent")).initCustomEvent(i,!0,!0,e),t.dispatchEvent(a)}function Dt(t){var i=t.getBoundingClientRect();return{left:i.left+(window.pageXOffset-document.documentElement.clientLeft),top:i.top+(window.pageYOffset-document.documentElement.clientTop)}}var Bt=h.location,kt=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function Tt(t){var i=t.match(kt);return null!==i&&(i[1]!==Bt.protocol||i[2]!==Bt.hostname||i[3]!==Bt.port)}function Et(t){var i="timestamp=".concat((new Date).getTime());return t+(-1===t.indexOf("?")?"?":"&")+i}function Wt(t){var i=t.rotate,e=t.scaleX,a=t.scaleY,n=t.translateX,o=t.translateY,h=[];F(n)&&0!==n&&h.push("translateX(".concat(n,"px)")),F(o)&&0!==o&&h.push("translateY(".concat(o,"px)")),F(i)&&0!==i&&h.push("rotate(".concat(i,"deg)")),F(e)&&1!==e&&h.push("scaleX(".concat(e,")")),F(a)&&1!==a&&h.push("scaleY(".concat(a,")"));var r=h.length?h.join(" "):"none";return{WebkitTransform:r,msTransform:r,transform:r}}function Nt(t,i){var e=t.pageX,a=t.pageY,n={endX:e,endY:a};return i?n:rt({startX:e,startY:a},n)}function Ht(t,i){var e=t.aspectRatio,a=t.height,n=t.width,o=1<arguments.length&&void 0!==i?i:"contain",h=J(n),r=J(a);if(h&&r){var s=a*e;"contain"===o&&n<s||"cover"===o&&s<n?a=n/e:n=a*e}else h?a=n/e:r&&(n=a*e);return{width:n,height:a}}var Lt=String.fromCharCode;var Ot=/^data:.*,/;function zt(t){var i,e=new DataView(t);try{var a,n,o;if(255===e.getUint8(0)&&216===e.getUint8(1))for(var h=e.byteLength,r=2;r+1<h;){if(255===e.getUint8(r)&&225===e.getUint8(r+1)){n=r;break}r+=1}if(n){var s=n+10;if("Exif"===function(t,i,e){var a="";e+=i;for(var n=i;n<e;n+=1)a+=Lt(t.getUint8(n));return a}(e,n+4,4)){var c=e.getUint16(s);if(((a=18761===c)||19789===c)&&42===e.getUint16(s+2,a)){var d=e.getUint32(s+4,a);8<=d&&(o=s+d)}}}if(o){var l,p,m=e.getUint16(o,a);for(p=0;p<m;p+=1)if(l=o+12*p+2,274===e.getUint16(l,a)){l+=8,i=e.getUint16(l,a),e.setUint16(l,1,a);break}}}catch(t){i=1}return i}var Yt={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,i=this.options,e=this.container,a=this.cropper;pt(a,Y),mt(t,Y);var n={width:Math.max(e.offsetWidth,Number(i.minContainerWidth)||200),height:Math.max(e.offsetHeight,Number(i.minContainerHeight)||100)};lt(a,{width:(this.containerData=n).width,height:n.height}),pt(t,Y),mt(a,Y)},initCanvas:function(){var t=this.containerData,i=this.imageData,e=this.options.viewMode,a=Math.abs(i.rotate)%180==90,n=a?i.naturalHeight:i.naturalWidth,o=a?i.naturalWidth:i.naturalHeight,h=n/o,r=t.width,s=t.height;t.height*h>t.width?3===e?r=t.height*h:s=t.width/h:3===e?s=t.width/h:r=t.height*h;var c={aspectRatio:h,naturalWidth:n,naturalHeight:o,width:r,height:s};c.left=(t.width-r)/2,c.top=(t.height-s)/2,c.oldLeft=c.left,c.oldTop=c.top,this.canvasData=c,this.limited=1===e||2===e,this.limitCanvas(!0,!0),this.initialImageData=rt({},i),this.initialCanvasData=rt({},c)},limitCanvas:function(t,i){var e=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,h=e.viewMode,r=n.aspectRatio,s=this.cropped&&o;if(t){var c=Number(e.minCanvasWidth)||0,d=Number(e.minCanvasHeight)||0;1<h?(c=Math.max(c,a.width),d=Math.max(d,a.height),3===h&&(c<d*r?c=d*r:d=c/r)):0<h&&(c?c=Math.max(c,s?o.width:0):d?d=Math.max(d,s?o.height:0):s&&((c=o.width)<(d=o.height)*r?c=d*r:d=c/r));var l=Ht({aspectRatio:r,width:c,height:d});c=l.width,d=l.height,n.minWidth=c,n.minHeight=d,n.maxWidth=1/0,n.maxHeight=1/0}if(i)if((s?0:1)<h){var p=a.width-n.width,m=a.height-n.height;n.minLeft=Math.min(0,p),n.minTop=Math.min(0,m),n.maxLeft=Math.max(0,p),n.maxTop=Math.max(0,m),s&&this.limited&&(n.minLeft=Math.min(o.left,o.left+(o.width-n.width)),n.minTop=Math.min(o.top,o.top+(o.height-n.height)),n.maxLeft=o.left,n.maxTop=o.top,2===h&&(n.width>=a.width&&(n.minLeft=Math.min(0,p),n.maxLeft=Math.max(0,p)),n.height>=a.height&&(n.minTop=Math.min(0,m),n.maxTop=Math.max(0,m))))}else n.minLeft=-n.width,n.minTop=-n.height,n.maxLeft=a.width,n.maxTop=a.height},renderCanvas:function(t,i){var e=this.canvasData,a=this.imageData;if(i){var n=function(t){var i=t.width,e=t.height,a=t.degree;if(90===(a=Math.abs(a)%180))return{width:e,height:i};var n=a%90*Math.PI/180,o=Math.sin(n),h=Math.cos(n),r=i*h+e*o,s=i*o+e*h;return 90<a?{width:s,height:r}:{width:r,height:s}}({width:a.naturalWidth*Math.abs(a.scaleX||1),height:a.naturalHeight*Math.abs(a.scaleY||1),degree:a.rotate||0}),o=n.width,h=n.height,r=e.width*(o/e.naturalWidth),s=e.height*(h/e.naturalHeight);e.left-=(r-e.width)/2,e.top-=(s-e.height)/2,e.width=r,e.height=s,e.aspectRatio=o/h,e.naturalWidth=o,e.naturalHeight=h,this.limitCanvas(!0,!1)}(e.width>e.maxWidth||e.width<e.minWidth)&&(e.left=e.oldLeft),(e.height>e.maxHeight||e.height<e.minHeight)&&(e.top=e.oldTop),e.width=Math.min(Math.max(e.width,e.minWidth),e.maxWidth),e.height=Math.min(Math.max(e.height,e.minHeight),e.maxHeight),this.limitCanvas(!1,!0),e.left=Math.min(Math.max(e.left,e.minLeft),e.maxLeft),e.top=Math.min(Math.max(e.top,e.minTop),e.maxTop),e.oldLeft=e.left,e.oldTop=e.top,lt(this.canvas,rt({width:e.width,height:e.height},Wt({translateX:e.left,translateY:e.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var i=this.canvasData,e=this.imageData,a=e.naturalWidth*(i.width/i.naturalWidth),n=e.naturalHeight*(i.height/i.naturalHeight);rt(e,{width:a,height:n,left:(i.width-a)/2,top:(i.height-n)/2}),lt(this.image,rt({width:e.width,height:e.height},Wt(rt({translateX:e.left,translateY:e.top},e)))),t&&this.output()},initCropBox:function(){var t=this.options,i=this.canvasData,e=t.aspectRatio||t.initialAspectRatio,a=Number(t.autoCropArea)||.8,n={width:i.width,height:i.height};e&&(i.height*e>i.width?n.height=n.width/e:n.width=n.height*e),this.cropBoxData=n,this.limitCropBox(!0,!0),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),n.width=Math.max(n.minWidth,n.width*a),n.height=Math.max(n.minHeight,n.height*a),n.left=i.left+(i.width-n.width)/2,n.top=i.top+(i.height-n.height)/2,n.oldLeft=n.left,n.oldTop=n.top,this.initialCropBoxData=rt({},n)},limitCropBox:function(t,i){var e=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,h=this.limited,r=e.aspectRatio;if(t){var s=Number(e.minCropBoxWidth)||0,c=Number(e.minCropBoxHeight)||0,d=h?Math.min(a.width,n.width,n.width+n.left,a.width-n.left):a.width,l=h?Math.min(a.height,n.height,n.height+n.top,a.height-n.top):a.height;s=Math.min(s,a.width),c=Math.min(c,a.height),r&&(s&&c?s<c*r?c=s/r:s=c*r:s?c=s/r:c&&(s=c*r),d<l*r?l=d/r:d=l*r),o.minWidth=Math.min(s,d),o.minHeight=Math.min(c,l),o.maxWidth=d,o.maxHeight=l}i&&(h?(o.minLeft=Math.max(0,n.left),o.minTop=Math.max(0,n.top),o.maxLeft=Math.min(a.width,n.left+n.width)-o.width,o.maxTop=Math.min(a.height,n.top+n.height)-o.height):(o.minLeft=0,o.minTop=0,o.maxLeft=a.width-o.width,o.maxTop=a.height-o.height))},renderCropBox:function(){var t=this.options,i=this.containerData,e=this.cropBoxData;(e.width>e.maxWidth||e.width<e.minWidth)&&(e.left=e.oldLeft),(e.height>e.maxHeight||e.height<e.minHeight)&&(e.top=e.oldTop),e.width=Math.min(Math.max(e.width,e.minWidth),e.maxWidth),e.height=Math.min(Math.max(e.height,e.minHeight),e.maxHeight),this.limitCropBox(!1,!0),e.left=Math.min(Math.max(e.left,e.minLeft),e.maxLeft),e.top=Math.min(Math.max(e.top,e.minTop),e.maxTop),e.oldLeft=e.left,e.oldTop=e.top,t.movable&&t.cropBoxMovable&&wt(this.face,u,e.width>=i.width&&e.height>=i.height?B:C),lt(this.cropBox,rt({width:e.width,height:e.height},Wt({translateX:e.left,translateY:e.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),Ct(this.element,w,this.getData())}},Xt={initPreview:function(){var t=this.element,e=this.crossOrigin,i=this.options.preview,a=e?this.crossOriginUrl:this.url,n=t.alt||"The image to preview",o=document.createElement("img");if(e&&(o.crossOrigin=e),o.src=a,o.alt=n,this.viewBox.appendChild(o),this.viewBoxImage=o,i){var h=i;"string"==typeof i?h=t.ownerDocument.querySelectorAll(i):i.querySelector&&(h=[i]),ht(this.previews=h,function(t){var i=document.createElement("img");wt(t,g,{width:t.offsetWidth,height:t.offsetHeight,html:t.innerHTML}),e&&(i.crossOrigin=e),i.src=a,i.alt=n,i.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',t.innerHTML="",t.appendChild(i)})}},resetPreview:function(){ht(this.previews,function(t){var i=vt(t,g);lt(t,{width:i.width,height:i.height}),t.innerHTML=i.html,function(i,e){if(tt(i[e]))try{delete i[e]}catch(t){i[e]=void 0}else if(i.dataset)try{delete i.dataset[e]}catch(t){i.dataset[e]=void 0}else i.removeAttribute("data-".concat(ft(e)))}(t,g)})},preview:function(){var r=this.imageData,t=this.canvasData,i=this.cropBoxData,s=i.width,c=i.height,d=r.width,l=r.height,p=i.left-t.left-r.left,m=i.top-t.top-r.top;this.cropped&&!this.disabled&&(lt(this.viewBoxImage,rt({width:d,height:l},Wt(rt({translateX:-p,translateY:-m},r)))),ht(this.previews,function(t){var i=vt(t,g),e=i.width,a=i.height,n=e,o=a,h=1;s&&(o=c*(h=e/s)),c&&a<o&&(n=s*(h=a/c),o=a),lt(t,{width:n,height:o}),lt(t.getElementsByTagName("img")[0],rt({width:d*h,height:l*h},Wt(rt({translateX:-p*h,translateY:-m*h},r))))}))}},Rt={bind:function(){var t=this.element,i=this.options,e=this.cropper;at(i.cropstart)&&Mt(t,y,i.cropstart),at(i.cropmove)&&Mt(t,x,i.cropmove),at(i.cropend)&&Mt(t,b,i.cropend),at(i.crop)&&Mt(t,w,i.crop),at(i.zoom)&&Mt(t,P,i.zoom),Mt(e,X,this.onCropStart=this.cropStart.bind(this)),i.zoomable&&i.zoomOnWheel&&Mt(e,U,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),i.toggleDragModeOnDblclick&&Mt(e,M,this.onDblclick=this.dblclick.bind(this)),Mt(t.ownerDocument,R,this.onCropMove=this.cropMove.bind(this)),Mt(t.ownerDocument,A,this.onCropEnd=this.cropEnd.bind(this)),i.responsive&&Mt(window,I,this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,i=this.options,e=this.cropper;at(i.cropstart)&&yt(t,y,i.cropstart),at(i.cropmove)&&yt(t,x,i.cropmove),at(i.cropend)&&yt(t,b,i.cropend),at(i.crop)&&yt(t,w,i.crop),at(i.zoom)&&yt(t,P,i.zoom),yt(e,X,this.onCropStart),i.zoomable&&i.zoomOnWheel&&yt(e,U,this.onWheel,{passive:!1,capture:!0}),i.toggleDragModeOnDblclick&&yt(e,M,this.onDblclick),yt(t.ownerDocument,R,this.onCropMove),yt(t.ownerDocument,A,this.onCropEnd),i.responsive&&yt(window,I,this.onResize)}},At={resize:function(){var t=this.options,i=this.container,e=this.containerData,a=Number(t.minContainerWidth)||200,n=Number(t.minContainerHeight)||100;if(!(this.disabled||e.width<=a||e.height<=n)){var o,h,r=i.offsetWidth/e.width;if(1!=r||i.offsetHeight!==e.height)t.restore&&(o=this.getCanvasData(),h=this.getCropBoxData()),this.render(),t.restore&&(this.setCanvasData(ht(o,function(t,i){o[i]=t*r})),this.setCropBoxData(ht(h,function(t,i){h[i]=t*r})))}},dblclick:function(){this.disabled||this.options.dragMode===v||this.setDragMode(function(t,i){return t.classList?t.classList.contains(i):-1<t.className.indexOf(i)}(this.dragBox,r)?f:c)},wheel:function(t){var i=this,e=Number(this.options.wheelZoomRatio)||.1,a=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout(function(){i.wheeling=!1},50),t.deltaY?a=0<t.deltaY?1:-1:t.wheelDelta?a=-t.wheelDelta/120:t.detail&&(a=0<t.detail?1:-1),this.zoom(-a*e,t)))},cropStart:function(t){var i=t.buttons,e=t.button;if(!(this.disabled||F(i)&&1!==i||F(e)&&0!==e||t.ctrlKey)){var a,n=this.options,o=this.pointers;t.changedTouches?ht(t.changedTouches,function(t){o[t.identifier]=Nt(t)}):o[t.pointerId||0]=Nt(t),a=1<Object.keys(o).length&&n.zoomable&&n.zoomOnTouch?k:vt(t.target,u),$.test(a)&&!1!==Ct(this.element,y,{originalEvent:t,action:a})&&(t.preventDefault(),this.action=a,this.cropping=!1,a===D&&(this.cropping=!0,pt(this.dragBox,s)))}},cropMove:function(t){var i=this.action;if(!this.disabled&&i){var e=this.pointers;t.preventDefault(),!1!==Ct(this.element,x,{originalEvent:t,action:i})&&(t.changedTouches?ht(t.changedTouches,function(t){rt(e[t.identifier]||{},Nt(t,!0))}):rt(e[t.pointerId||0]||{},Nt(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var i=this.action,e=this.pointers;t.changedTouches?ht(t.changedTouches,function(t){delete e[t.identifier]}):delete e[t.pointerId||0],i&&(t.preventDefault(),Object.keys(e).length||(this.action=""),this.cropping&&(this.cropping=!1,ut(this.dragBox,s,this.cropped&&this.options.modal)),Ct(this.element,b,{originalEvent:t,action:i}))}}},St={change:function(t){var i,e=this.options,a=this.canvasData,n=this.containerData,o=this.cropBoxData,h=this.pointers,r=this.action,s=e.aspectRatio,c=o.left,d=o.top,l=o.width,p=o.height,m=c+l,u=d+p,g=0,f=0,v=n.width,w=n.height,b=!0;!s&&t.shiftKey&&(s=l&&p?l/p:1),this.limited&&(g=o.minLeft,f=o.minTop,v=g+Math.min(n.width,a.width,a.left+a.width),w=f+Math.min(n.height,a.height,a.top+a.height));function x(t){switch(t){case T:m+M.x>v&&(M.x=v-m);break;case E:c+M.x<g&&(M.x=g-c);break;case N:d+M.y<f&&(M.y=f-d);break;case W:u+M.y>w&&(M.y=w-u)}}var y=h[Object.keys(h)[0]],M={x:y.endX-y.startX,y:y.endY-y.startY};switch(r){case C:c+=M.x,d+=M.y;break;case T:if(0<=M.x&&(v<=m||s&&(d<=f||w<=u))){b=!1;break}x(T),(l+=M.x)<0&&(r=E,c-=l=-l),s&&(p=l/s,d+=(o.height-p)/2);break;case N:if(M.y<=0&&(d<=f||s&&(c<=g||v<=m))){b=!1;break}x(N),p-=M.y,d+=M.y,p<0&&(r=W,d-=p=-p),s&&(l=p*s,c+=(o.width-l)/2);break;case E:if(M.x<=0&&(c<=g||s&&(d<=f||w<=u))){b=!1;break}x(E),l-=M.x,c+=M.x,l<0&&(r=T,c-=l=-l),s&&(p=l/s,d+=(o.height-p)/2);break;case W:if(0<=M.y&&(w<=u||s&&(c<=g||v<=m))){b=!1;break}x(W),(p+=M.y)<0&&(r=N,d-=p=-p),s&&(l=p*s,c+=(o.width-l)/2);break;case H:if(s){if(M.y<=0&&(d<=f||v<=m)){b=!1;break}x(N),p-=M.y,d+=M.y,l=p*s}else x(N),x(T),0<=M.x?m<v?l+=M.x:M.y<=0&&d<=f&&(b=!1):l+=M.x,M.y<=0?f<d&&(p-=M.y,d+=M.y):(p-=M.y,d+=M.y);l<0&&p<0?(r=z,d-=p=-p,c-=l=-l):l<0?(r=L,c-=l=-l):p<0&&(r=O,d-=p=-p);break;case L:if(s){if(M.y<=0&&(d<=f||c<=g)){b=!1;break}x(N),p-=M.y,d+=M.y,l=p*s,c+=o.width-l}else x(N),x(E),M.x<=0?g<c?(l-=M.x,c+=M.x):M.y<=0&&d<=f&&(b=!1):(l-=M.x,c+=M.x),M.y<=0?f<d&&(p-=M.y,d+=M.y):(p-=M.y,d+=M.y);l<0&&p<0?(r=O,d-=p=-p,c-=l=-l):l<0?(r=H,c-=l=-l):p<0&&(r=z,d-=p=-p);break;case z:if(s){if(M.x<=0&&(c<=g||w<=u)){b=!1;break}x(E),l-=M.x,c+=M.x,p=l/s}else x(W),x(E),M.x<=0?g<c?(l-=M.x,c+=M.x):0<=M.y&&w<=u&&(b=!1):(l-=M.x,c+=M.x),0<=M.y?u<w&&(p+=M.y):p+=M.y;l<0&&p<0?(r=H,d-=p=-p,c-=l=-l):l<0?(r=O,c-=l=-l):p<0&&(r=L,d-=p=-p);break;case O:if(s){if(0<=M.x&&(v<=m||w<=u)){b=!1;break}x(T),p=(l+=M.x)/s}else x(W),x(T),0<=M.x?m<v?l+=M.x:0<=M.y&&w<=u&&(b=!1):l+=M.x,0<=M.y?u<w&&(p+=M.y):p+=M.y;l<0&&p<0?(r=L,d-=p=-p,c-=l=-l):l<0?(r=z,c-=l=-l):p<0&&(r=H,d-=p=-p);break;case B:this.move(M.x,M.y),b=!1;break;case k:this.zoom(function(t){var i=rt({},t),s=[];return ht(t,function(r,t){delete i[t],ht(i,function(t){var i=Math.abs(r.startX-t.startX),e=Math.abs(r.startY-t.startY),a=Math.abs(r.endX-t.endX),n=Math.abs(r.endY-t.endY),o=Math.sqrt(i*i+e*e),h=(Math.sqrt(a*a+n*n)-o)/o;s.push(h)})}),s.sort(function(t,i){return Math.abs(t)<Math.abs(i)}),s[0]}(h),t),b=!1;break;case D:if(!M.x||!M.y){b=!1;break}i=Dt(this.cropper),c=y.startX-i.left,d=y.startY-i.top,l=o.minWidth,p=o.minHeight,0<M.x?r=0<M.y?O:H:M.x<0&&(c-=l,r=0<M.y?z:L),M.y<0&&(d-=p),this.cropped||(mt(this.cropBox,Y),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}b&&(o.width=l,o.height=p,o.left=c,o.top=d,this.action=r,this.renderCropBox()),ht(h,function(t){t.startX=t.endX,t.startY=t.endY})}},It={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&pt(this.dragBox,s),mt(this.cropBox,Y),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=rt({},this.initialImageData),this.canvasData=rt({},this.initialCanvasData),this.cropBoxData=rt({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(rt(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),mt(this.dragBox,s),pt(this.cropBox,Y)),this},replace:function(i,t){var e=1<arguments.length&&void 0!==t&&t;return!this.disabled&&i&&(this.isImg&&(this.element.src=i),e?(this.url=i,this.image.src=i,this.ready&&(this.viewBoxImage.src=i,ht(this.previews,function(t){t.getElementsByTagName("img")[0].src=i}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(i))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,mt(this.cropper,o)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,pt(this.cropper,o)),this},destroy:function(){var t=this.element;return t[d]&&(t[d]=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate()),this},move:function(t,i){var e=1<arguments.length&&void 0!==i?i:t,a=this.canvasData,n=a.left,o=a.top;return this.moveTo(_(t)?t:n+Number(t),_(e)?e:o+Number(e))},moveTo:function(t,i){var e=1<arguments.length&&void 0!==i?i:t,a=this.canvasData,n=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.movable&&(F(t)&&(a.left=t,n=!0),F(e)&&(a.top=e,n=!0),n&&this.renderCanvas(!0)),this},zoom:function(t,i){var e=this.canvasData;return t=(t=Number(t))<0?1/(1-t):1+t,this.zoomTo(e.width*t/e.naturalWidth,null,i)},zoomTo:function(t,i,e){var a=this.options,n=this.canvasData,o=n.width,h=n.height,r=n.naturalWidth,s=n.naturalHeight;if(0<=(t=Number(t))&&this.ready&&!this.disabled&&a.zoomable){var c=r*t,d=s*t;if(!1===Ct(this.element,P,{ratio:t,oldRatio:o/r,originalEvent:e}))return this;if(e){var l=this.pointers,p=Dt(this.cropper),m=l&&Object.keys(l).length?function(t){var a=0,n=0,o=0;return ht(t,function(t){var i=t.startX,e=t.startY;a+=i,n+=e,o+=1}),{pageX:a/=o,pageY:n/=o}}(l):{pageX:e.pageX,pageY:e.pageY};n.left-=(c-o)*((m.pageX-p.left-n.left)/o),n.top-=(d-h)*((m.pageY-p.top-n.top)/h)}else et(i)&&F(i.x)&&F(i.y)?(n.left-=(c-o)*((i.x-n.left)/o),n.top-=(d-h)*((i.y-n.top)/h)):(n.left-=(c-o)/2,n.top-=(d-h)/2);n.width=c,n.height=d,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return F(t=Number(t))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var i=this.imageData.scaleY;return this.scale(t,F(i)?i:1)},scaleY:function(t){var i=this.imageData.scaleX;return this.scale(F(i)?i:1,t)},scale:function(t,i){var e=1<arguments.length&&void 0!==i?i:t,a=this.imageData,n=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.scalable&&(F(t)&&(a.scaleX=t,n=!0),F(e)&&(a.scaleY=e,n=!0),n&&this.renderCanvas(!0,!0)),this},getData:function(t){var e,i=0<arguments.length&&void 0!==t&&t,a=this.options,n=this.imageData,o=this.canvasData,h=this.cropBoxData;if(this.ready&&this.cropped){e={x:h.left-o.left,y:h.top-o.top,width:h.width,height:h.height};var r=n.width/n.naturalWidth;if(ht(e,function(t,i){e[i]=t/r}),i){var s=Math.round(e.y+e.height),c=Math.round(e.x+e.width);e.x=Math.round(e.x),e.y=Math.round(e.y),e.width=c-e.x,e.height=s-e.y}}else e={x:0,y:0,width:0,height:0};return a.rotatable&&(e.rotate=n.rotate||0),a.scalable&&(e.scaleX=n.scaleX||1,e.scaleY=n.scaleY||1),e},setData:function(t){var i=this.options,e=this.imageData,a=this.canvasData,n={};if(this.ready&&!this.disabled&&et(t)){var o=!1;i.rotatable&&F(t.rotate)&&t.rotate!==e.rotate&&(e.rotate=t.rotate,o=!0),i.scalable&&(F(t.scaleX)&&t.scaleX!==e.scaleX&&(e.scaleX=t.scaleX,o=!0),F(t.scaleY)&&t.scaleY!==e.scaleY&&(e.scaleY=t.scaleY,o=!0)),o&&this.renderCanvas(!0,!0);var h=e.width/e.naturalWidth;F(t.x)&&(n.left=t.x*h+a.left),F(t.y)&&(n.top=t.y*h+a.top),F(t.width)&&(n.width=t.width*h),F(t.height)&&(n.height=t.height*h),this.setCropBoxData(n)}return this},getContainerData:function(){return this.ready?rt({},this.containerData):{}},getImageData:function(){return this.sized?rt({},this.imageData):{}},getCanvasData:function(){var i=this.canvasData,e={};return this.ready&&ht(["left","top","width","height","naturalWidth","naturalHeight"],function(t){e[t]=i[t]}),e},setCanvasData:function(t){var i=this.canvasData,e=i.aspectRatio;return this.ready&&!this.disabled&&et(t)&&(F(t.left)&&(i.left=t.left),F(t.top)&&(i.top=t.top),F(t.width)?(i.width=t.width,i.height=t.width/e):F(t.height)&&(i.height=t.height,i.width=t.height*e),this.renderCanvas(!0)),this},getCropBoxData:function(){var t,i=this.cropBoxData;return this.ready&&this.cropped&&(t={left:i.left,top:i.top,width:i.width,height:i.height}),t||{}},setCropBoxData:function(t){var i,e,a=this.cropBoxData,n=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&et(t)&&(F(t.left)&&(a.left=t.left),F(t.top)&&(a.top=t.top),F(t.width)&&t.width!==a.width&&(i=!0,a.width=t.width),F(t.height)&&t.height!==a.height&&(e=!0,a.height=t.height),n&&(i?a.height=a.width/n:e&&(a.width=a.height*n)),this.renderCropBox()),this},getCroppedCanvas:function(t){var i=0<arguments.length&&void 0!==t?t:{};if(!this.ready||!window.HTMLCanvasElement)return null;var e=this.canvasData,a=function(t,i,e,a){var n=i.aspectRatio,o=i.naturalWidth,h=i.naturalHeight,r=i.rotate,s=void 0===r?0:r,c=i.scaleX,d=void 0===c?1:c,l=i.scaleY,p=void 0===l?1:l,m=e.aspectRatio,u=e.naturalWidth,g=e.naturalHeight,f=a.fillColor,v=void 0===f?"transparent":f,w=a.imageSmoothingEnabled,b=void 0===w||w,x=a.imageSmoothingQuality,y=void 0===x?"low":x,M=a.maxWidth,C=void 0===M?1/0:M,D=a.maxHeight,B=void 0===D?1/0:D,k=a.minWidth,T=void 0===k?0:k,E=a.minHeight,W=void 0===E?0:E,N=document.createElement("canvas"),H=N.getContext("2d"),L=Ht({aspectRatio:m,width:C,height:B}),O=Ht({aspectRatio:m,width:T,height:W},"cover"),z=Math.min(L.width,Math.max(O.width,u)),Y=Math.min(L.height,Math.max(O.height,g)),X=Ht({aspectRatio:n,width:C,height:B}),R=Ht({aspectRatio:n,width:T,height:W},"cover"),A=Math.min(X.width,Math.max(R.width,o)),S=Math.min(X.height,Math.max(R.height,h)),I=[-A/2,-S/2,A,S];return N.width=ct(z),N.height=ct(Y),H.fillStyle=v,H.fillRect(0,0,z,Y),H.save(),H.translate(z/2,Y/2),H.rotate(s*Math.PI/180),H.scale(d,p),H.imageSmoothingEnabled=b,H.imageSmoothingQuality=y,H.drawImage.apply(H,[t].concat(j(I.map(function(t){return Math.floor(ct(t))})))),H.restore(),N}(this.image,this.imageData,e,i);if(!this.cropped)return a;var n=this.getData(),o=n.x,h=n.y,r=n.width,s=n.height,c=a.width/Math.floor(e.naturalWidth);1!=c&&(o*=c,h*=c,r*=c,s*=c);var d=r/s,l=Ht({aspectRatio:d,width:i.maxWidth||1/0,height:i.maxHeight||1/0}),p=Ht({aspectRatio:d,width:i.minWidth||0,height:i.minHeight||0},"cover"),m=Ht({aspectRatio:d,width:i.width||(1!=c?a.width:r),height:i.height||(1!=c?a.height:s)}),u=m.width,g=m.height;u=Math.min(l.width,Math.max(p.width,u)),g=Math.min(l.height,Math.max(p.height,g));var f=document.createElement("canvas"),v=f.getContext("2d");f.width=ct(u),f.height=ct(g),v.fillStyle=i.fillColor||"transparent",v.fillRect(0,0,u,g);var w=i.imageSmoothingEnabled,b=void 0===w||w,x=i.imageSmoothingQuality;v.imageSmoothingEnabled=b,x&&(v.imageSmoothingQuality=x);var y,M,C,D,B,k,T=a.width,E=a.height,W=o,N=h;W<=-r||T<W?B=C=y=W=0:W<=0?(C=-W,W=0,B=y=Math.min(T,r+W)):W<=T&&(C=0,B=y=Math.min(r,T-W)),y<=0||N<=-s||E<N?k=D=M=N=0:N<=0?(D=-N,N=0,k=M=Math.min(E,s+N)):N<=E&&(D=0,k=M=Math.min(s,E-N));var H=[W,N,y,M];if(0<B&&0<k){var L=u/r;H.push(C*L,D*L,B*L,k*L)}return v.drawImage.apply(v,[a].concat(j(H.map(function(t){return Math.floor(ct(t))})))),f},setAspectRatio:function(t){var i=this.options;return this.disabled||_(t)||(i.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var i=this.options,e=this.dragBox,a=this.face;if(this.ready&&!this.disabled){var n=t===c,o=i.movable&&t===f;t=n||o?t:v,i.dragMode=t,wt(e,u,t),ut(e,r,n),ut(e,m,o),i.cropBoxMovable||(wt(a,u,t),ut(a,r,n),ut(a,m,o))}return this}},jt=h.Cropper,Ut=function(){function e(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,e),!t||!Z.test(t.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=t,this.options=rt({},G,et(i)&&i),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}return function(t,i,e){i&&a(t.prototype,i),e&&a(t,e)}(e,[{key:"init",value:function(){var t,i=this.element,e=i.tagName.toLowerCase();if(!i[d]){if(i[d]=this,"img"===e){if(this.isImg=!0,t=i.getAttribute("src")||"",!(this.originalUrl=t))return;t=i.src}else"canvas"===e&&window.HTMLCanvasElement&&(t=i.toDataURL());this.load(t)}}},{key:"load",value:function(t){var i=this;if(t){this.url=t,this.imageData={};var e=this.element,a=this.options;if(a.rotatable||a.scalable||(a.checkOrientation=!1),a.checkOrientation&&window.ArrayBuffer)if(Q.test(t))K.test(t)?this.read(function(t){var i=t.replace(Ot,""),e=atob(i),a=new ArrayBuffer(e.length),n=new Uint8Array(a);return ht(n,function(t,i){n[i]=e.charCodeAt(i)}),a}(t)):this.clone();else{var n=new XMLHttpRequest,o=this.clone.bind(this);this.reloading=!0,(this.xhr=n).onabort=o,n.onerror=o,n.ontimeout=o,n.onprogress=function(){n.getResponseHeader("content-type")!==q&&n.abort()},n.onload=function(){i.read(n.response)},n.onloadend=function(){i.reloading=!1,i.xhr=null},a.checkCrossOrigin&&Tt(t)&&e.crossOrigin&&(t=Et(t)),n.open("GET",t),n.responseType="arraybuffer",n.withCredentials="use-credentials"===e.crossOrigin,n.send()}else this.clone()}}},{key:"read",value:function(t){var i=this.options,e=this.imageData,a=zt(t),n=0,o=1,h=1;if(1<a){this.url=function(t,i){for(var e=[],a=new Uint8Array(t);0<a.length;)e.push(Lt.apply(null,ot(a.subarray(0,8192)))),a=a.subarray(8192);return"data:".concat(i,";base64,").concat(btoa(e.join("")))}(t,q);var r=function(t){var i=0,e=1,a=1;switch(t){case 2:e=-1;break;case 3:i=-180;break;case 4:a=-1;break;case 5:i=90,a=-1;break;case 6:i=90;break;case 7:i=90,e=-1;break;case 8:i=-90}return{rotate:i,scaleX:e,scaleY:a}}(a);n=r.rotate,o=r.scaleX,h=r.scaleY}i.rotatable&&(e.rotate=n),i.scalable&&(e.scaleX=o,e.scaleY=h),this.clone()}},{key:"clone",value:function(){var t=this.element,i=this.url,e=t.crossOrigin,a=i;this.options.checkCrossOrigin&&Tt(i)&&(e=e||"anonymous",a=Et(i)),this.crossOrigin=e,this.crossOriginUrl=a;var n=document.createElement("img");e&&(n.crossOrigin=e),n.src=a||i,n.alt=t.alt||"The image to crop",(this.image=n).onload=this.start.bind(this),n.onerror=this.stop.bind(this),pt(n,l),t.parentNode.insertBefore(n,t.nextSibling)}},{key:"start",value:function(){var e=this,t=this.image;t.onload=null,t.onerror=null,this.sizing=!0;function i(t,i){rt(e.imageData,{naturalWidth:t,naturalHeight:i,aspectRatio:t/i}),e.sizing=!1,e.sized=!0,e.build()}var a=h.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(h.navigator.userAgent);if(!t.naturalWidth||a){var n=document.createElement("img"),o=document.body||document.documentElement;(this.sizingImage=n).onload=function(){i(n.width,n.height),a||o.removeChild(n)},n.src=t.src,a||(n.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",o.appendChild(n))}else i(t.naturalWidth,t.naturalHeight)}},{key:"stop",value:function(){var t=this.image;t.onload=null,t.onerror=null,t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){if(this.sized&&!this.ready){var t=this.element,i=this.options,e=this.image,a=t.parentNode,n=document.createElement("div");n.innerHTML='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';var o=n.querySelector(".".concat(d,"-container")),h=o.querySelector(".".concat(d,"-canvas")),r=o.querySelector(".".concat(d,"-drag-box")),s=o.querySelector(".".concat(d,"-crop-box")),c=s.querySelector(".".concat(d,"-face"));this.container=a,this.cropper=o,this.canvas=h,this.dragBox=r,this.cropBox=s,this.viewBox=o.querySelector(".".concat(d,"-view-box")),this.face=c,h.appendChild(e),pt(t,Y),a.insertBefore(o,t.nextSibling),this.isImg||mt(e,l),this.initPreview(),this.bind(),i.initialAspectRatio=Math.max(0,i.initialAspectRatio)||NaN,i.aspectRatio=Math.max(0,i.aspectRatio)||NaN,i.viewMode=Math.max(0,Math.min(3,Math.round(i.viewMode)))||0,pt(s,Y),i.guides||pt(s.getElementsByClassName("".concat(d,"-dashed")),Y),i.center||pt(s.getElementsByClassName("".concat(d,"-center")),Y),i.background&&pt(o,"".concat(d,"-bg")),i.highlight||pt(c,p),i.cropBoxMovable&&(pt(c,m),wt(c,u,C)),i.cropBoxResizable||(pt(s.getElementsByClassName("".concat(d,"-line")),Y),pt(s.getElementsByClassName("".concat(d,"-point")),Y)),this.render(),this.ready=!0,this.setDragMode(i.dragMode),i.autoCrop&&this.crop(),this.setData(i.data),at(i.ready)&&Mt(t,S,i.ready,{once:!0}),Ct(t,S)}}},{key:"unbuild",value:function(){this.ready&&(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),mt(this.element,Y))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}],[{key:"noConflict",value:function(){return window.Cropper=jt,e}},{key:"setDefaults",value:function(t){rt(G,et(t)&&t)}}]),e}();return rt(Ut.prototype,Yt,Xt,Rt,At,St,It),Ut});
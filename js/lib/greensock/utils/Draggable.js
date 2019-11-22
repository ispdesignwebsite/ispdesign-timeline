var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("utils.Draggable",["events.EventDispatcher","TweenLite","plugins.CSSPlugin"],function(e,t,o){var n,r,i,l,s,a,c,f,d,p,u,h,g,x,m={css:{}},v={css:{}},y={css:{}},w={css:{}},b=_gsScope._gsDefine.globals,T={},S=document,L=S.documentElement||{},N=function(e){return S.createElementNS?S.createElementNS("http://www.w3.org/1999/xhtml",e):S.createElement(e)},C=N("div"),M=[],X=function(){return!1},Y=180/Math.PI,D=999999999999999,P=Date.now||function(){return(new Date).getTime()},_=!(S.addEventListener||!S.all),k=S.createElement("div"),O=[],B={},E=0,R=/^(?:a|input|textarea|button|select)$/i,W=0,A=-1!==navigator.userAgent.toLowerCase().indexOf("android"),F=0,H={},V={},I=function(e){if("string"==typeof e&&(e=t.selector(e)),!e||e.nodeType)return[e];var o,n=[],r=e.length;for(o=0;o!==r;n.push(e[o++]));return n},G=function(e){var t,o={};for(t in e)o[t]=e[t];return o},z=function(){for(var e=O.length;--e>-1;)O[e]()},U=function(e){O.push(e),1===O.length&&t.ticker.addEventListener("tick",z,this,!1,1)},j=function(e){for(var o=O.length;--o>-1;)O[o]===e&&O.splice(o,1);t.to($,0,{overwrite:"all",delay:15,onComplete:$})},$=function(){O.length||t.ticker.removeEventListener("tick",z)},K=function(e,t){var o;for(o in t)void 0===e[o]&&(e[o]=t[o]);return e},Z=function(){return null!=window.pageYOffset?window.pageYOffset:null!=S.scrollTop?S.scrollTop:L.scrollTop||S.body.scrollTop||0},q=function(){return null!=window.pageXOffset?window.pageXOffset:null!=S.scrollLeft?S.scrollLeft:L.scrollLeft||S.body.scrollLeft||0},Q=function(e,t){Ae(e,"scroll",t),ee(e.parentNode)||Q(e.parentNode,t)},J=function(e,t){Fe(e,"scroll",t),ee(e.parentNode)||J(e.parentNode,t)},ee=function(e){return!(e&&e!==L&&e!==S&&e!==S.body&&e!==window&&e.nodeType&&e.parentNode)},te=function(e,t){var o="x"===t?"Width":"Height",n="scroll"+o,r="client"+o,i=S.body;return Math.max(0,ee(e)?Math.max(L[n],i[n])-(window["inner"+o]||L[r]||i[r]):e[n]-e[r])},oe=function(e){var t=ee(e),o=te(e,"x"),n=te(e,"y");t?e=V:oe(e.parentNode),e._gsMaxScrollX=o,e._gsMaxScrollY=n,e._gsScrollX=e.scrollLeft||0,e._gsScrollY=e.scrollTop||0},ne=function(e,t){return e=e||window.event,T.pageX=e.clientX+S.body.scrollLeft+L.scrollLeft,T.pageY=e.clientY+S.body.scrollTop+L.scrollTop,t&&(e.returnValue=!1),T},re=function(e){return e?("string"==typeof e&&(e=t.selector(e)),e.length&&e!==window&&e[0]&&e[0].style&&!e.nodeType&&(e=e[0]),e===window||e.nodeType&&e.style?e:null):e},ie=function(e,t){var o,r,i,l=e.style;if(void 0===l[t]){for(i=["O","Moz","ms","Ms","Webkit"],r=5,o=t.charAt(0).toUpperCase()+t.substr(1);--r>-1&&void 0===l[i[r]+o];);if(r<0)return"";n=3===r?"ms":i[r],t=n+o}return t},le=function(e,t,o){var n=e.style;n&&(void 0===n[t]&&(t=ie(e,t)),null==o?n.removeProperty?n.removeProperty(t.replace(/([A-Z])/g,"-$1").toLowerCase()):n.removeAttribute(t):void 0!==n[t]&&(n[t]=o))},se=S.defaultView?S.defaultView.getComputedStyle:X,ae=/(?:Left|Right|Width)/i,ce=/(?:\d|\-|\+|=|#|\.)*/g,fe=function(e,t,o,n,r){if("px"===n||!n)return o;if("auto"===n||!o)return 0;var i,l=ae.test(t),s=e,a=C.style,c=o<0;return c&&(o=-o),"%"===n&&-1!==t.indexOf("border")?i=o/100*(l?e.clientWidth:e.clientHeight):(a.cssText="border:0 solid red;position:"+pe(e,"position",!0)+";line-height:0;","%"!==n&&s.appendChild?a[l?"borderLeftWidth":"borderTopWidth"]=o+n:(s=e.parentNode||S.body,a[l?"width":"height"]=o+n),s.appendChild(C),i=parseFloat(C[l?"offsetWidth":"offsetHeight"]),s.removeChild(C),0!==i||r||(i=fe(e,t,o,n,!0))),c?-i:i},de=function(e,t){if("absolute"!==pe(e,"position",!0))return 0;var o="left"===t?"Left":"Top",n=pe(e,"margin"+o,!0);return e["offset"+o]-(fe(e,t,parseFloat(n),(n+"").replace(ce,""))||0)},pe=function(e,t,o){var n,r=(e._gsTransform||{})[t];return r||0===r?r:(e.style[t]?r=e.style[t]:(n=se(e))?(r=n.getPropertyValue(t.replace(/([A-Z])/g,"-$1").toLowerCase()),r=r||n.length?r:n[t]):e.currentStyle&&(r=e.currentStyle[t]),"auto"!==r||"top"!==t&&"left"!==t||(r=de(e,t)),o?r:parseFloat(r)||0)},ue=function(e,t,o){var n=e.vars,r=n[o],i=e._listeners[t];"function"==typeof r&&r.apply(n[o+"Scope"]||n.callbackScope||e,n[o+"Params"]||[e.pointerEvent]),i&&e.dispatchEvent(t)},he=function(e,t){var o,n,r,i=re(e);return i?Oe(i,t):void 0!==e.left?(r=Xe(t),{left:e.left-r.x,top:e.top-r.y,width:e.width,height:e.height}):(n=e.min||e.minX||e.minRotation||0,o=e.min||e.minY||0,{left:n,top:o,width:(e.max||e.maxX||e.maxRotation||0)-n,height:(e.max||e.maxY||0)-o})},ge=function(){if(!S.createElementNS)return l=0,void(s=!1);var e,t,o,n,r=N("div"),i=S.createElementNS("http://www.w3.org/2000/svg","svg"),d=N("div"),p=r.style,u=S.body||L;S.body&&ve&&(p.position="absolute",u.appendChild(d),d.appendChild(r),n=r.offsetParent,d.style[ve]="rotate(1deg)",f=r.offsetParent===n,d.style.position="absolute",p.height="10px",n=r.offsetTop,d.style.border="5px solid red",c=n!==r.offsetTop,u.removeChild(d)),p=i.style,i.setAttributeNS(null,"width","400px"),i.setAttributeNS(null,"height","400px"),i.setAttributeNS(null,"viewBox","0 0 400 400"),p.display="block",p.boxSizing="border-box",p.border="0px solid red",p.transform="none",r.style.cssText="width:100px;height:100px;overflow:scroll;-ms-overflow-style:none;",u.appendChild(r),r.appendChild(i),o=i.createSVGPoint().matrixTransform(i.getScreenCTM()),t=o.y,r.scrollTop=100,o.x=o.y=0,o=o.matrixTransform(i.getScreenCTM()),a=t-o.y<100.1?0:t-o.y-150,r.removeChild(i),u.removeChild(r),u.appendChild(i),e=i.getScreenCTM(),t=e.e,p.border="50px solid red",e=i.getScreenCTM(),0===t&&0===e.e&&0===e.f&&1===e.a?(l=1,s=!0):(l=t!==e.e?1:0,s=1!==e.a),u.removeChild(i)},xe=""!==ie(C,"perspective"),me=ie(C,"transformOrigin").replace(/^ms/g,"Ms").replace(/([A-Z])/g,"-$1").toLowerCase(),ve=ie(C,"transform"),ye=ve.replace(/^ms/g,"Ms").replace(/([A-Z])/g,"-$1").toLowerCase(),we={},be={},Te=window.SVGElement,Se=function(e){return!!(Te&&"function"==typeof e.getBBox&&e.getCTM&&(!e.parentNode||e.parentNode.getBBox&&e.parentNode.getCTM))},Le=(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent))&&parseFloat(RegExp.$1)<11,Ne=[],Ce=[],Me=function(e){if(!e.getBoundingClientRect||!e.parentNode||!ve)return{offsetTop:0,offsetLeft:0,scaleX:1,scaleY:1,offsetParent:L};if(!1!==Ke.cacheSVGData&&e._gsCache&&e._gsCache.lastUpdate===t.ticker.frame)return e._gsCache;var o,n,r,i,c,f,d,p,u,h,g,x,m=e,v=Ye(e);if(v.lastUpdate=t.ticker.frame,e.getBBox&&!v.isSVGRoot){for(m=e.parentNode,o=e.getBBox();m&&"svg"!==(m.nodeName+"").toLowerCase();)m=m.parentNode;return i=Me(m),v.offsetTop=o.y*i.scaleY,v.offsetLeft=o.x*i.scaleX,v.scaleX=i.scaleX,v.scaleY=i.scaleY,v.offsetParent=m||L,v}for(r=v.offsetParent,r===S.body&&(r=L),Ce.length=Ne.length=0;m&&(c=pe(m,ve,!0),"matrix(1, 0, 0, 1, 0, 0)"!==c&&"none"!==c&&"translate3d(0px, 0px, 0px)"!==c&&(Ce.push(m),Ne.push(m.style[ve]),m.style[ve]="none"),m!==r);)m=m.parentNode;for(n=r.getBoundingClientRect(),c=e.getScreenCTM(),p=e.createSVGPoint(),d=p.matrixTransform(c),p.x=p.y=10,p=p.matrixTransform(c),v.scaleX=(p.x-d.x)/10,v.scaleY=(p.y-d.y)/10,void 0===l&&ge(),v.borderBox&&!s&&e.getAttribute("width")&&(i=se(e)||{},u=parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth)||0,h=parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth)||0,g=parseFloat(i.width)||0,x=parseFloat(i.height)||0,v.scaleX*=(g-u)/g,v.scaleY*=(x-h)/x),a?(o=e.getBoundingClientRect(),v.offsetLeft=o.left-n.left,v.offsetTop=o.top-n.top):(v.offsetLeft=d.x-n.left,v.offsetTop=d.y-n.top),v.offsetParent=r,f=Ce.length;--f>-1;)Ce[f].style[ve]=Ne[f];return v},Xe=function(e,o){if(o=o||{},!e||e===L||!e.parentNode||e===window)return{x:0,y:0};var n=se(e),r=me&&n?n.getPropertyValue(me):"50% 50%",i=r.split(" "),l=-1!==r.indexOf("left")?"0%":-1!==r.indexOf("right")?"100%":i[0],s=-1!==r.indexOf("top")?"0%":-1!==r.indexOf("bottom")?"100%":i[1];return"center"!==s&&null!=s||(s="50%"),("center"===l||isNaN(parseFloat(l)))&&(l="50%"),e.getBBox&&Se(e)?(e._gsTransform||(t.set(e,{x:"+=0",overwrite:!1}),void 0===e._gsTransform.xOrigin&&console.log("Draggable requires at least GSAP 1.17.0")),r=e.getBBox(),o.x=e._gsTransform.xOrigin-r.x,o.y=e._gsTransform.yOrigin-r.y):(e.getBBox&&-1!==(l+s).indexOf("%")&&(e=e.getBBox(),e={offsetWidth:e.width,offsetHeight:e.height}),o.x=-1!==l.indexOf("%")?e.offsetWidth*parseFloat(l)/100:parseFloat(l),o.y=-1!==s.indexOf("%")?e.offsetHeight*parseFloat(s)/100:parseFloat(s)),o},Ye=function(e){if(!1!==Ke.cacheSVGData&&e._gsCache&&e._gsCache.lastUpdate===t.ticker.frame)return e._gsCache;var o,n=e._gsCache=e._gsCache||{},r=se(e),i=e.getBBox&&Se(e),l="svg"===(e.nodeName+"").toLowerCase();if(n.isSVG=i,n.isSVGRoot=l,n.borderBox="border-box"===r.boxSizing,n.computedStyle=r,l)o=e.parentNode||L,o.insertBefore(C,e),n.offsetParent=C.offsetParent||L,o.removeChild(C);else if(i){for(o=e.parentNode;o&&"svg"!==(o.nodeName+"").toLowerCase();)o=o.parentNode;n.offsetParent=o}else n.offsetParent=e.offsetParent;return n},De=function(e,t,o,n){if(e===window||!e||!e.style||!e.parentNode)return[1,0,0,1,0,0];var r,i,s,a,d,p,u,h,g,x,m,v,y,w,b=e._gsCache||Ye(e),T=e.parentNode,N=T._gsCache||Ye(T),C=b.computedStyle,M=b.isSVG?N.offsetParent:T.offsetParent;return r=b.isSVG&&-1!==(e.style[ve]+"").indexOf("matrix")?e.style[ve]:C?C.getPropertyValue(ye):e.currentStyle?e.currentStyle[ve]:"1,0,0,1,0,0",e.getBBox&&-1!==(e.getAttribute("transform")+"").indexOf("matrix")&&(r=e.getAttribute("transform")),r=(r+"").match(/(?:\-|\.|\b)(\d|\.|e\-)+/g)||[1,0,0,1,0,0],r.length>6&&(r=[r[0],r[1],r[4],r[5],r[12],r[13]]),n?r[4]=r[5]=0:b.isSVG&&(d=e._gsTransform)&&(d.xOrigin||d.yOrigin)&&(r[0]=parseFloat(r[0]),r[1]=parseFloat(r[1]),r[2]=parseFloat(r[2]),r[3]=parseFloat(r[3]),r[4]=parseFloat(r[4])-(d.xOrigin-(d.xOrigin*r[0]+d.yOrigin*r[2])),r[5]=parseFloat(r[5])-(d.yOrigin-(d.xOrigin*r[1]+d.yOrigin*r[3]))),t&&(void 0===l&&ge(),s=b.isSVG||b.isSVGRoot?Me(e):e,b.isSVG?(a=e.getBBox(),x=N.isSVGRoot?{x:0,y:0}:T.getBBox(),s={offsetLeft:a.x-x.x,offsetTop:a.y-x.y,offsetParent:b.offsetParent}):b.isSVGRoot?(m=parseInt(C.borderTopWidth,10)||0,v=parseInt(C.borderLeftWidth,10)||0,y=(r[0]-l)*v+r[2]*m,w=r[1]*v+(r[3]-l)*m,p=t.x,u=t.y,h=p-(p*r[0]+u*r[2]),g=u-(p*r[1]+u*r[3]),r[4]=parseFloat(r[4])+h,r[5]=parseFloat(r[5])+g,t.x-=h,t.y-=g,p=s.scaleX,u=s.scaleY,t.x*=p,t.y*=u,r[0]*=p,r[1]*=u,r[2]*=p,r[3]*=u,Le||(t.x+=y,t.y+=w)):!c&&e.offsetParent&&(t.x+=parseInt(pe(e.offsetParent,"borderLeftWidth"),10)||0,t.y+=parseInt(pe(e.offsetParent,"borderTopWidth"),10)||0),i=T===L||T===S.body,r[4]=Number(r[4])+t.x+(s.offsetLeft||0)-o.x-(i?0:T.scrollLeft||0),r[5]=Number(r[5])+t.y+(s.offsetTop||0)-o.y-(i?0:T.scrollTop||0),T&&"fixed"===pe(e,"position",C)&&(r[4]+=q(),r[5]+=Z()),!T||T===L||M!==s.offsetParent||N.isSVG||f&&"100100"!==De(T).join("")||(s=N.isSVGRoot?Me(T):T,r[4]-=s.offsetLeft||0,r[5]-=s.offsetTop||0,c||!N.offsetParent||b.isSVG||b.isSVGRoot||(r[4]-=parseInt(pe(N.offsetParent,"borderLeftWidth"),10)||0,r[5]-=parseInt(pe(N.offsetParent,"borderTopWidth"),10)||0))),r},Pe=function(e,t){if(!e||e===window||!e.parentNode)return[1,0,0,1,0,0];for(var o,n,r,i,l,s,a,c,f=Xe(e,we),d=Xe(e.parentNode,be),p=De(e,f,d);(e=e.parentNode)&&e.parentNode&&e!==L;)f=d,d=Xe(e.parentNode,f===we?be:we),a=De(e,f,d),o=p[0],n=p[1],r=p[2],i=p[3],l=p[4],s=p[5],p[0]=o*a[0]+n*a[2],p[1]=o*a[1]+n*a[3],p[2]=r*a[0]+i*a[2],p[3]=r*a[1]+i*a[3],p[4]=l*a[0]+s*a[2]+a[4],p[5]=l*a[1]+s*a[3]+a[5];return t&&(o=p[0],n=p[1],r=p[2],i=p[3],l=p[4],s=p[5],c=o*i-n*r,p[0]=i/c,p[1]=-n/c,p[2]=-r/c,p[3]=o/c,p[4]=(r*s-i*l)/c,p[5]=-(o*s-n*l)/c),p},_e=function(e,t,o,n,r){e=re(e);var i=Pe(e,!1,r),l=t.x,s=t.y;return o&&(Xe(e,t),l-=t.x,s-=t.y),n=!0===n?t:n||{},n.x=l*i[0]+s*i[2]+i[4],n.y=l*i[1]+s*i[3]+i[5],n},ke=function(e,t,o){var n=e.x*t[0]+e.y*t[2]+t[4],r=e.x*t[1]+e.y*t[3]+t[5];return e.x=n*o[0]+r*o[2]+o[4],e.y=n*o[1]+r*o[3]+o[5],e},Oe=function(e,t,o){if(!(e=re(e)))return null;t=re(t);var n,r,i,l,s,a,c,f,d,p,u,h,g,x,m,v,y,w,b,T,N,C,M=e.getBBox&&Se(e);if(e===window)l=Z(),r=q(),i=r+(L.clientWidth||e.innerWidth||S.body.clientWidth||0),s=l+((e.innerHeight||0)-20<L.clientHeight?L.clientHeight:e.innerHeight||S.body.clientHeight||0);else{if(void 0===t||t===window)return e.getBoundingClientRect();n=Xe(e),r=-n.x,l=-n.y,M?(h=e.getBBox(),g=h.width,x=h.height):"svg"!==(e.nodeName+"").toLowerCase()&&e.offsetWidth?(g=e.offsetWidth,x=e.offsetHeight):(N=se(e),g=parseFloat(N.width),x=parseFloat(N.height)),i=r+g,s=l+x,"svg"!==e.nodeName.toLowerCase()||_||(m=Me(e),C=m.computedStyle||{},w=(e.getAttribute("viewBox")||"0 0").split(" "),b=parseFloat(w[0]),T=parseFloat(w[1]),v=parseFloat(C.borderLeftWidth)||0,y=parseFloat(C.borderTopWidth)||0,i-=g-(g-v)/m.scaleX-b,s-=x-(x-y)/m.scaleY-T,r-=v/m.scaleX-b,l-=y/m.scaleY-T,N&&(i+=(parseFloat(C.borderRightWidth)+v)/m.scaleX,s+=(y+parseFloat(C.borderBottomWidth))/m.scaleY))}return e===t?{left:r,top:l,width:i-r,height:s-l}:(a=Pe(e),c=Pe(t,!0),f=ke({x:r,y:l},a,c),d=ke({x:i,y:l},a,c),p=ke({x:i,y:s},a,c),u=ke({x:r,y:s},a,c),r=Math.min(f.x,d.x,p.x,u.x),l=Math.min(f.y,d.y,p.y,u.y),H.x=H.y=0,o&&Xe(t,H),{left:r+H.x,top:l+H.y,width:Math.max(f.x,d.x,p.x,u.x)-r,height:Math.max(f.y,d.y,p.y,u.y)-l})},Be=function(e){return!!(e&&e.length&&e[0]&&(e[0].nodeType&&e[0].style&&!e.nodeType||e[0].length&&e[0][0]))},Ee=function(e){var t,o,n,r=[],i=e.length;for(t=0;t<i;t++)if(o=e[t],Be(o))for(n=o.length,n=0;n<o.length;n++)r.push(o[n]);else o&&0!==o.length&&r.push(o);return r},Re="ontouchstart"in L&&"orientation"in window,We=function(e){for(var t=e.split(","),o=(void 0!==C.onpointerdown?"pointerdown,pointermove,pointerup,pointercancel":void 0!==C.onmspointerdown?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":e).split(","),n={},r=8;--r>-1;)n[t[r]]=o[r],n[o[r]]=t[r];return n}("touchstart,touchmove,touchend,touchcancel"),Ae=function(e,t,o,n){e.addEventListener?e.addEventListener(We[t]||t,o,n):e.attachEvent&&e.attachEvent("on"+t,o)},Fe=function(e,t,o){e.removeEventListener?e.removeEventListener(We[t]||t,o):e.detachEvent&&e.detachEvent("on"+t,o)},He=function(e,t){for(var o=e.length;--o>-1;)if(e[o].identifier===t)return!0;return!1},Ve=function(e){r=e.touches&&W<e.touches.length,Fe(e.target,"touchend",Ve)},Ie=function(e){r=e.touches&&W<e.touches.length,Ae(e.target,"touchend",Ve)},Ge=function(e,t,o,n,r,i){var l,s,a,c={};if(t)if(1!==r&&t instanceof Array){for(c.end=l=[],a=t.length,s=0;s<a;s++)l[s]=t[s]*r;o+=1.1,n-=1.1}else c.end="function"==typeof t?function(o){return t.call(e,o)*r}:t;return(o||0===o)&&(c.max=o),(n||0===n)&&(c.min=n),i&&(c.velocity=0),c},ze=function(e){var t;return!(!e||!e.getAttribute||"BODY"===e.nodeName)&&(!("true"!==(t=e.getAttribute("data-clickable"))&&("false"===t||!e.onclick&&!R.test(e.nodeName+"")&&"true"!==e.getAttribute("contentEditable")))||ze(e.parentNode))},Ue=function(e,t){for(var o,n=e.length;--n>-1;)o=e[n],o.ondragstart=o.onselectstart=t?null:X,le(o,"userSelect",t?"text":"none")},je=(u=S.createElement("div"),h=S.createElement("div"),g=h.style,x=S.body||C,g.display="inline-block",g.position="relative",u.style.cssText=h.innerHTML="width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden",u.appendChild(h),x.appendChild(u),d=h.offsetHeight+18>u.scrollHeight,g.width="100%",ve||(g.paddingRight="500px",p=u.scrollLeft=u.scrollWidth-u.clientWidth,g.left="-90px",p=p!==u.scrollLeft),x.removeChild(u),p),$e=function(e,o){e=re(e),o=o||{};var n,r,i,l,s,a,c=S.createElement("div"),f=c.style,p=e.firstChild,u=0,h=0,g=e.scrollTop,x=e.scrollLeft,m=e.scrollWidth,v=e.scrollHeight,y=0,w=0,b=0;xe&&!1!==o.force3D?(s="translate3d(",a="px,0px)"):ve&&(s="translate(",a="px)"),this.scrollTop=function(e,t){if(!arguments.length)return-this.top();this.top(-e,t)},this.scrollLeft=function(e,t){if(!arguments.length)return-this.left();this.left(-e,t)},this.left=function(n,r){if(!arguments.length)return-(e.scrollLeft+h);var i=e.scrollLeft-x,l=h;if((i>2||i<-2)&&!r)return x=e.scrollLeft,t.killTweensOf(this,!0,{left:1,scrollLeft:1}),this.left(-x),void(o.onKill&&o.onKill());n=-n,n<0?(h=n-.5|0,n=0):n>w?(h=n-w|0,n=w):h=0,(h||l)&&(s?this._suspendTransforms||(f[ve]=s+-h+"px,"+-u+a):f.left=-h+"px",je&&h+y>=0&&(f.paddingRight=h+y+"px")),e.scrollLeft=0|n,x=e.scrollLeft},this.top=function(n,r){if(!arguments.length)return-(e.scrollTop+u);var i=e.scrollTop-g,l=u;if((i>2||i<-2)&&!r)return g=e.scrollTop,t.killTweensOf(this,!0,{top:1,scrollTop:1}),this.top(-g),void(o.onKill&&o.onKill());n=-n,n<0?(u=n-.5|0,n=0):n>b?(u=n-b|0,n=b):u=0,(u||l)&&(s?this._suspendTransforms||(f[ve]=s+-h+"px,"+-u+a):f.top=-u+"px"),e.scrollTop=0|n,g=e.scrollTop},this.maxScrollTop=function(){return b},this.maxScrollLeft=function(){return w},this.disable=function(){for(p=c.firstChild;p;)l=p.nextSibling,e.appendChild(p),p=l;e===c.parentNode&&e.removeChild(c)},this.enable=function(){if(p=e.firstChild,p!==c){for(;p;)l=p.nextSibling,c.appendChild(p),p=l;e.appendChild(c),this.calibrate()}},this.calibrate=function(t){var o,l,s=e.clientWidth===n;g=e.scrollTop,x=e.scrollLeft,s&&e.clientHeight===r&&c.offsetHeight===i&&m===e.scrollWidth&&v===e.scrollHeight&&!t||((u||h)&&(o=this.left(),l=this.top(),this.left(-e.scrollLeft),this.top(-e.scrollTop)),s&&!t||(f.display="block",f.width="auto",f.paddingRight="0px",y=Math.max(0,e.scrollWidth-e.clientWidth),y&&(y+=pe(e,"paddingLeft")+(d?pe(e,"paddingRight"):0))),f.display="inline-block",f.position="relative",f.overflow="visible",f.verticalAlign="top",f.width="100%",f.paddingRight=y+"px",d&&(f.paddingBottom=pe(e,"paddingBottom",!0)),_&&(f.zoom="1"),n=e.clientWidth,r=e.clientHeight,m=e.scrollWidth,v=e.scrollHeight,w=e.scrollWidth-n,b=e.scrollHeight-r,i=c.offsetHeight,f.display="block",(o||l)&&(this.left(o),this.top(l)))},this.content=c,this.element=e,this._suspendTransforms=!1,this.enable()},Ke=function(n,l){e.call(this,n),n=re(n),i||(i=b.com.greensock.plugins.ThrowPropsPlugin),this.vars=l=G(l||{}),this.target=n,this.x=this.y=this.rotation=0,this.dragResistance=parseFloat(l.dragResistance)||0,this.edgeResistance=isNaN(l.edgeResistance)?1:parseFloat(l.edgeResistance)||0,this.lockAxis=l.lockAxis,this.autoScroll=l.autoScroll||0,this.lockedAxis=null,this.allowEventDefault=!!l.allowEventDefault;var s,a,c,f,d,p,u,h,g,x,T,N,C,X,O,R,H,z,$,Z,q,te,ie,se,ae,ce,fe,de,ge,xe,me,ve=(l.type||(_?"top,left":"x,y")).toLowerCase(),ye=-1!==ve.indexOf("x")||-1!==ve.indexOf("y"),we=-1!==ve.indexOf("rotation"),be=we?"rotation":ye?"x":"left",Te=ye?"y":"top",Se=-1!==ve.indexOf("x")||-1!==ve.indexOf("left")||"scroll"===ve,Le=-1!==ve.indexOf("y")||-1!==ve.indexOf("top")||"scroll"===ve,Ne=l.minimumMovement||2,Ce=this,Me=I(l.trigger||l.handle||n),Xe={},Ye=0,De=!1,ke=l.clickableTest||ze,Oe=0,Be=function(e){if(Ce.autoScroll&&Ce.isDragging&&(De||z)){var t,o,r,i,l,s,c,f,d=n,p=15*Ce.autoScroll;for(De=!1,V.scrollTop=null!=window.pageYOffset?window.pageYOffset:null!=L.scrollTop?L.scrollTop:S.body.scrollTop,V.scrollLeft=null!=window.pageXOffset?window.pageXOffset:null!=L.scrollLeft?L.scrollLeft:S.body.scrollLeft,i=Ce.pointerX-V.scrollLeft,l=Ce.pointerY-V.scrollTop;d&&!o;)o=ee(d.parentNode),t=o?V:d.parentNode,r=o?{bottom:Math.max(L.clientHeight,window.innerHeight||0),right:Math.max(L.clientWidth,window.innerWidth||0),left:0,top:0}:t.getBoundingClientRect(),s=c=0,Le&&(f=t._gsMaxScrollY-t.scrollTop,f<0?c=f:l>r.bottom-40&&f?(De=!0,c=Math.min(f,p*(1-Math.max(0,r.bottom-l)/40)|0)):l<r.top+40&&t.scrollTop&&(De=!0,c=-Math.min(t.scrollTop,p*(1-Math.max(0,l-r.top)/40)|0)),c&&(t.scrollTop+=c)),Se&&(f=t._gsMaxScrollX-t.scrollLeft,f<0?s=f:i>r.right-40&&f?(De=!0,s=Math.min(f,p*(1-Math.max(0,r.right-i)/40)|0)):i<r.left+40&&t.scrollLeft&&(De=!0,s=-Math.min(t.scrollLeft,p*(1-Math.max(0,i-r.left)/40)|0)),s&&(t.scrollLeft+=s)),o&&(s||c)&&(window.scrollTo(t.scrollLeft,t.scrollTop),lt(Ce.pointerX+s,Ce.pointerY+c)),d=t}if(z){var u=Ce.x,g=Ce.y,x=1e-6;u<x&&u>-x&&(u=0),g<x&&g>-x&&(g=0),we?(ce.data.rotation=Ce.rotation=u,ce.setRatio(1)):a?(Le&&a.top(g),Se&&a.left(u)):ye?(Le&&(ce.data.y=g),Se&&(ce.data.x=u),ce.setRatio(1)):(Le&&(n.style.top=g+"px"),Se&&(n.style.left=u+"px")),!h||e||ge||(ge=!0,ue(Ce,"drag","onDrag"),ge=!1)}z=!1},Ee=function(e,o){var r;Ce.x,Ce.y;n._gsTransform||!ye&&!we||t.set(n,{x:"+=0",overwrite:!1}),ye?(Ce.y=n._gsTransform.y,Ce.x=n._gsTransform.x):we?Ce.x=Ce.rotation=n._gsTransform.rotation:a?(Ce.y=a.top(),Ce.x=a.left()):(Ce.y=parseInt(n.style.top,10)||0,Ce.x=parseInt(n.style.left,10)||0),!Z&&!q||o||(Z&&(r=Z(Ce.x),r!==Ce.x&&(Ce.x=r,we&&(Ce.rotation=r),z=!0)),q&&(r=q(Ce.y),r!==Ce.y&&(Ce.y=r),z=!0)),z&&Be(!0),e||ue(Ce,"throwupdate","onThrowUpdate")},Ve=function(){var e,t,o,r;u=!1,a?(a.calibrate(),Ce.minX=x=-a.maxScrollLeft(),Ce.minY=N=-a.maxScrollTop(),Ce.maxX=g=Ce.maxY=T=0,u=!0):l.bounds&&(e=he(l.bounds,n.parentNode),we?(Ce.minX=x=e.left,Ce.maxX=g=e.left+e.width,Ce.minY=N=Ce.maxY=T=0):void 0!==l.bounds.maxX||void 0!==l.bounds.maxY?(e=l.bounds,Ce.minX=x=e.minX,Ce.minY=N=e.minY,Ce.maxX=g=e.maxX,Ce.maxY=T=e.maxY):(t=he(n,n.parentNode),Ce.minX=x=pe(n,be)+e.left-t.left,Ce.minY=N=pe(n,Te)+e.top-t.top,Ce.maxX=g=x+(e.width-t.width),Ce.maxY=T=N+(e.height-t.height)),x>g&&(Ce.minX=g,Ce.maxX=g=x,x=Ce.minX),N>T&&(Ce.minY=T,Ce.maxY=T=N,N=Ce.minY),we&&(Ce.minRotation=x,Ce.maxRotation=g),u=!0),l.liveSnap&&(o=!0===l.liveSnap?l.snap||{}:l.liveSnap,r=o instanceof Array||"function"==typeof o,we?(Z=nt(r?o:o.rotation,x,g,1),q=null):(Se&&(Z=nt(r?o:o.x||o.left||o.scrollLeft,x,g,a?-1:1)),Le&&(q=nt(r?o:o.y||o.top||o.scrollTop,N,T,a?-1:1))))},je=function(){Ce.isThrowing=!1,ue(Ce,"throwcomplete","onThrowComplete")},Ze=function(){Ce.isThrowing=!1},qe=function(e,t){var o,r,s,c;e&&i?(!0===e&&(o=l.snap||{},r=o instanceof Array||"function"==typeof o,e={resistance:(l.throwResistance||l.resistance||1e3)/(we?10:1)},we?e.rotation=Ge(Ce,r?o:o.rotation,g,x,1,t):(Se&&(e[be]=Ge(Ce,r?o:o.x||o.left||o.scrollLeft,g,x,a?-1:1,t||"x"===Ce.lockedAxis)),Le&&(e[Te]=Ge(Ce,r?o:o.y||o.top||o.scrollTop,T,N,a?-1:1,t||"y"===Ce.lockedAxis)))),Ce.isThrowing=!0,c=isNaN(l.overshootTolerance)?1===l.edgeResistance?0:1-Ce.edgeResistance+.2:l.overshootTolerance,Ce.tween=s=i.to(a||n,{throwProps:e,ease:l.ease||b.Power3.easeOut,onComplete:je,onOverwrite:Ze,onUpdate:l.fastMode?ue:Ee,onUpdateParams:l.fastMode?[Ce,"onthrowupdate","onThrowUpdate"]:M},isNaN(l.maxDuration)?2:l.maxDuration,isNaN(l.minDuration)?0===c?0:.5:l.minDuration,c),l.fastMode||(a&&(a._suspendTransforms=!0),s.render(s.duration(),!0,!0),Ee(!0,!0),Ce.endX=Ce.x,Ce.endY=Ce.y,we&&(Ce.endRotation=Ce.x),s.play(0),Ee(!0,!0),a&&(a._suspendTransforms=!1))):u&&Ce.applyBounds()},Qe=function(e){var t,o,r,i,l,s,a,d,p,u=se||[1,0,0,1,0,0];se=Pe(n.parentNode,!0),e&&Ce.isPressed&&u.join(",")!==se.join(",")&&(t=u[0],o=u[1],r=u[2],i=u[3],l=u[4],s=u[5],a=t*i-o*r,d=c*(i/a)+f*(-r/a)+(r*s-i*l)/a,p=c*(-o/a)+f*(t/a)+-(t*s-o*l)/a,f=d*se[1]+p*se[3]+se[5],c=d*se[0]+p*se[2]+se[4]),se[1]||se[2]||1!=se[0]||1!=se[3]||0!=se[4]||0!=se[5]||(se=null)},et=function(){var e=1-Ce.edgeResistance;Qe(!1),se&&(c=Ce.pointerX*se[0]+Ce.pointerY*se[2]+se[4],f=Ce.pointerX*se[1]+Ce.pointerY*se[3]+se[5]),z&&(lt(Ce.pointerX,Ce.pointerY),Be(!0)),a?(Ve(),p=a.top(),d=a.left()):(tt()?(Ee(!0,!0),Ve()):Ce.applyBounds(),we?(H=_e(n,{x:0,y:0}),Ee(!0,!0),d=Ce.x,p=Ce.y=Math.atan2(H.y-Ce.pointerY,Ce.pointerX-H.x)*Y):(n.parentNode&&n.parentNode.scrollTop||0,n.parentNode&&n.parentNode.scrollLeft||0,p=pe(n,Te),d=pe(n,be))),u&&e&&(d>g?d=g+(d-g)/e:d<x&&(d=x-(x-d)/e),we||(p>T?p=T+(p-T)/e:p<N&&(p=N-(N-p)/e)))},tt=function(){return Ce.tween&&Ce.tween.isActive()},ot=function(){!k.parentNode||tt()||Ce.isDragging||k.parentNode.removeChild(k)},nt=function(e,t,o,n){return"function"==typeof e?function(r){var i=Ce.isPressed?1-Ce.edgeResistance:1;return e.call(Ce,r>o?o+(r-o)*i:r<t?t+(r-t)*i:r)*n}:e instanceof Array?function(n){for(var r,i,l=e.length,s=0,a=D;--l>-1;)r=e[l],i=r-n,i<0&&(i=-i),i<a&&r>=t&&r<=o&&(s=l,a=i);return e[s]}:isNaN(e)?function(e){return e}:function(){return e*n}},rt=function(e){var o;if(!(!s||Ce.isPressed||!e||("mousedown"===e.type||"pointerdown"===e.type)&&P()-Oe<30&&We[Ce.pointerEvent.type])){if(ae=tt(),Ce.pointerEvent=e,We[e.type]?(ie=-1!==e.type.indexOf("touch")?e.currentTarget||e.target:S,Ae(ie,"touchend",st),Ae(ie,"touchmove",it),Ae(ie,"touchcancel",st),Ae(S,"touchstart",Ie)):(ie=null,Ae(S,"mousemove",it)),de=null,Ae(S,"mouseup",st),e&&e.target&&Ae(e.target,"mouseup",st),te=ke.call(Ce,e.target)&&!l.dragClickables,te)return Ae(e.target,"change",st),ue(Ce,"press","onPress"),void Ue(Me,!0);if(fe=!(!ie||Se===Le||a||!1===Ce.vars.allowNativeTouchScrolling)&&(Se?"y":"x"),_?e=ne(e,!0):fe||Ce.allowEventDefault||(e.preventDefault(),e.preventManipulation&&e.preventManipulation()),e.changedTouches?(e=O=e.changedTouches[0],R=e.identifier):e.pointerId?R=e.pointerId:O=R=null,W++,U(Be),f=Ce.pointerY=e.pageY,c=Ce.pointerX=e.pageX,(fe||Ce.autoScroll)&&oe(n.parentNode),n.parentNode&&(a||Ce.autoScroll&&!we&&n.parentNode._gsMaxScrollX&&!k.parentNode)&&!n.getBBox&&(k.style.width=n.parentNode.scrollWidth+"px",n.parentNode.appendChild(k)),et(),Ce.tween&&Ce.tween.kill(),Ce.isThrowing=!1,t.killTweensOf(a||n,!0,Xe),a&&t.killTweensOf(n,!0,{scrollTo:1}),Ce.tween=Ce.lockedAxis=null,(l.zIndexBoost||!we&&!a&&!1!==l.zIndexBoost)&&(n.style.zIndex=Ke.zIndex++),Ce.isPressed=!0,h=!(!l.onDrag&&!Ce._listeners.drag),!we)for(o=Me.length;--o>-1;)le(Me[o],"cursor",l.cursor||"move");ue(Ce,"press","onPress")}},it=function(e){var t,o,n,i,l=e;if(s&&!r&&Ce.isPressed&&e){if(Ce.pointerEvent=e,t=e.changedTouches,t){if(e=t[0],e!==O&&e.identifier!==R){for(i=t.length;--i>-1&&(e=t[i]).identifier!==R;);if(i<0)return}}else if(e.pointerId&&R&&e.pointerId!==R)return;if(_)e=ne(e,!0);else{if(ie&&fe&&!de&&(o=e.pageX,n=e.pageY,se&&(i=o*se[0]+n*se[2]+se[4],n=o*se[1]+n*se[3]+se[5],o=i),de=Math.abs(o-c)>Math.abs(n-f)&&Se?"x":"y",!1!==Ce.vars.lockAxisOnTouchScroll&&(Ce.lockedAxis="x"===de?"y":"x","function"==typeof Ce.vars.onLockAxis&&Ce.vars.onLockAxis.call(Ce,l)),A&&fe===de))return void st(l);Ce.allowEventDefault||fe&&(!de||fe===de)||!1===l.cancelable||(l.preventDefault(),l.preventManipulation&&l.preventManipulation())}Ce.autoScroll&&(De=!0),lt(e.pageX,e.pageY)}},lt=function(e,t){var o,n,r,i,l,s,a=1-Ce.dragResistance,h=1-Ce.edgeResistance;Ce.pointerX=e,Ce.pointerY=t,we?(i=Math.atan2(H.y-t,e-H.x)*Y,l=Ce.y-i,Ce.y=i,l>180?p-=360:l<-180&&(p+=360),r=d+(p-i)*a):(se&&(s=e*se[0]+t*se[2]+se[4],t=e*se[1]+t*se[3]+se[5],e=s),n=t-f,o=e-c,n<Ne&&n>-Ne&&(n=0),o<Ne&&o>-Ne&&(o=0),(Ce.lockAxis||Ce.lockedAxis)&&(o||n)&&(s=Ce.lockedAxis,s||(Ce.lockedAxis=s=Se&&Math.abs(o)>Math.abs(n)?"y":Le?"x":null,s&&"function"==typeof Ce.vars.onLockAxis&&Ce.vars.onLockAxis.call(Ce,Ce.pointerEvent)),"y"===s?n=0:"x"===s&&(o=0)),r=d+o*a,i=p+n*a),Z||q?(Z&&(r=Z(r)),q&&(i=q(i))):u&&(r>g?r=g+(r-g)*h:r<x&&(r=x+(r-x)*h),we||(i>T?i=T+(i-T)*h:i<N&&(i=N+(i-N)*h))),we||(r=Math.round(r),i=Math.round(i)),(Ce.x!==r||Ce.y!==i&&!we)&&(we?Ce.endRotation=Ce.x=Ce.endX=r:(Le&&(Ce.y=Ce.endY=i),Se&&(Ce.x=Ce.endX=r)),z=!0,!Ce.isDragging&&Ce.isPressed&&(Ce.isDragging=!0,ue(Ce,"dragstart","onDragStart")))},st=function(e,o){if(s&&Ce.isPressed&&(!e||null==R||o||!(e.pointerId&&e.pointerId!==R||e.changedTouches&&!He(e.changedTouches,R)))){Ce.isPressed=!1;var r,i,a,c,f,d=e,p=Ce.isDragging,u=t.delayedCall(.001,ot);if(ie?(Fe(ie,"touchend",st),Fe(ie,"touchmove",it),Fe(ie,"touchcancel",st),Fe(S,"touchstart",Ie)):Fe(S,"mousemove",it),Fe(S,"mouseup",st),e&&e.target&&Fe(e.target,"mouseup",st),z=!1,te)return e&&Fe(e.target,"change",st),Ue(Me,!1),ue(Ce,"release","onRelease"),ue(Ce,"click","onClick"),void(te=!1);if(j(Be),!we)for(i=Me.length;--i>-1;)le(Me[i],"cursor",l.cursor||"move");if(p&&(Ye=F=P(),Ce.isDragging=!1),W--,e){if(_&&(e=ne(e,!1)),r=e.changedTouches,r&&(e=r[0],e!==O&&e.identifier!==R)){for(i=r.length;--i>-1&&(e=r[i]).identifier!==R;);if(i<0)return}Ce.pointerEvent=d,Ce.pointerX=e.pageX,Ce.pointerY=e.pageY}return d&&!p?(ae&&(l.snap||l.bounds)&&qe(l.throwProps),ue(Ce,"release","onRelease"),A&&"touchmove"===d.type||(ue(Ce,"click","onClick"),c=d.target||d.srcElement||n,Oe=P(),f=function(){Oe!==xe&&Ce.enabled()&&!Ce.isPressed&&(c.click?c.click():S.createEvent&&(a=S.createEvent("MouseEvents"),a.initMouseEvent("click",!0,!0,window,1,Ce.pointerEvent.screenX,Ce.pointerEvent.screenY,Ce.pointerX,Ce.pointerY,!1,!1,!1,!1,0,null),c.dispatchEvent(a)))},A||t.delayedCall(1e-5,f))):(qe(l.throwProps),_||Ce.allowEventDefault||!d||!l.dragClickables&&ke.call(Ce,d.target)||!p||fe&&(!de||fe!==de)||!1===d.cancelable||(d.preventDefault(),d.preventManipulation&&d.preventManipulation()),ue(Ce,"release","onRelease")),tt()&&u.duration(Ce.tween.duration()),p&&ue(Ce,"dragend","onDragEnd"),!0}},at=function(e){if(e&&Ce.isDragging){var t=e.target||e.srcElement||n.parentNode,o=t.scrollLeft-t._gsScrollX,r=t.scrollTop-t._gsScrollY;(o||r)&&(se?(c-=o*se[0]+r*se[2],f-=r*se[3]+o*se[1]):(c-=o,f-=r),t._gsScrollX+=o,t._gsScrollY+=r,lt(Ce.pointerX,Ce.pointerY))}},ct=function(e){var t=P(),o=t-Oe<40,n=t-Ye<40,r=o&&xe===Oe,i=!!e.preventDefault,l=o&&me===Oe,s=e.isTrusted||null==e.isTrusted&&o&&r;if(i&&(r||n&&!1!==Ce.vars.suppressClickOnDrag)&&e.stopImmediatePropagation(),o&&(!r||s!==l))return s&&r&&(me=Oe),void(xe=Oe);(Ce.isPressed||n||o)&&(i?s&&e.detail&&o||(e.preventDefault(),e.preventManipulation&&e.preventManipulation()):e.returnValue=!1)};$=Ke.get(this.target),$&&$.kill(),this.startDrag=function(e){rt(e),Ce.isDragging||(Ce.isDragging=!0,ue(Ce,"dragstart","onDragStart"))},this.drag=it,this.endDrag=function(e){st(e,!0)},this.timeSinceDrag=function(){return Ce.isDragging?0:(P()-Ye)/1e3},this.hitTest=function(e,t){return Ke.hitTest(Ce.target,e,t)},this.getDirection=function(e,t){var o,n,r,l,s,a,c="velocity"===e&&i?e:"object"!=typeof e||we?"start":"element";return"element"===c&&(s=Je(Ce.target),a=Je(e)),o="start"===c?Ce.x-d:"velocity"===c?i.getVelocity(this.target,be):s.left+s.width/2-(a.left+a.width/2),we?o<0?"counter-clockwise":"clockwise":(t=t||2,n="start"===c?Ce.y-p:"velocity"===c?i.getVelocity(this.target,Te):s.top+s.height/2-(a.top+a.height/2),r=Math.abs(o/n),l=r<1/t?"":o<0?"left":"right",r<t&&(""!==l&&(l+="-"),l+=n<0?"up":"down"),l)},this.applyBounds=function(e){var t,o,r,i,s,a;if(e&&l.bounds!==e)return l.bounds=e,Ce.update(!0);if(Ee(!0),Ve(),u){if(t=Ce.x,o=Ce.y,t>g?t=g:t<x&&(t=x),o>T?o=T:o<N&&(o=N),(Ce.x!==t||Ce.y!==o)&&(r=!0,Ce.x=Ce.endX=t,we?Ce.endRotation=t:Ce.y=Ce.endY=o,z=!0,Be(!0),Ce.autoScroll&&!Ce.isDragging))for(oe(n.parentNode),i=n,V.scrollTop=null!=window.pageYOffset?window.pageYOffset:null!=L.scrollTop?L.scrollTop:S.body.scrollTop,V.scrollLeft=null!=window.pageXOffset?window.pageXOffset:null!=L.scrollLeft?L.scrollLeft:S.body.scrollLeft;i&&!a;)a=ee(i.parentNode),s=a?V:i.parentNode,Le&&s.scrollTop>s._gsMaxScrollY&&(s.scrollTop=s._gsMaxScrollY),Se&&s.scrollLeft>s._gsMaxScrollX&&(s.scrollLeft=s._gsMaxScrollX),i=s;Ce.isThrowing&&(r||Ce.endX>g||Ce.endX<x||Ce.endY>T||Ce.endY<N)&&qe(l.throwProps,r)}return Ce},this.update=function(e,t,o){var r=Ce.x,i=Ce.y;return Qe(!t),e?Ce.applyBounds():(z&&o&&Be(!0),Ee(!0)),t&&(lt(Ce.pointerX,Ce.pointerY),z&&Be(!0)),Ce.isPressed&&!t&&(Se&&Math.abs(r-Ce.x)>.01||Le&&Math.abs(i-Ce.y)>.01&&!we)&&et(),Ce.autoScroll&&(oe(n.parentNode),De=Ce.isDragging,Be(!0)),Ce.autoScroll&&(J(n,at),Q(n,at)),Ce},this.enable=function(e){var r,c,f;if("soft"!==e){for(c=Me.length;--c>-1;)f=Me[c],Ae(f,"mousedown",rt),Ae(f,"touchstart",rt),Ae(f,"click",ct,!0),we||le(f,"cursor",l.cursor||"move"),le(f,"touchCallout","none"),le(f,"touchAction",Se===Le||a?"none":Se?"pan-y":"pan-x");Ue(Me,!1)}return Q(n,at),s=!0,i&&"soft"!==e&&i.track(a||n,ye?"x,y":we?"rotation":"top,left"),a&&a.enable(),n._gsDragID=r="d"+E++,B[r]=this,a&&(a.element._gsDragID=r),t.set(n,{x:"+=0",overwrite:!1}),ce={t:n,data:_?X:n._gsTransform,tween:{},setRatio:_?function(){t.set(n,C)}:o._internals.setTransformRatio||o._internals.set3DTransformRatio},et(),Ce.update(!0),Ce},this.disable=function(e){var t,o,r=Ce.isDragging;if(!we)for(t=Me.length;--t>-1;)le(Me[t],"cursor",null);if("soft"!==e){for(t=Me.length;--t>-1;)o=Me[t],le(o,"touchCallout",null),le(o,"touchAction",null),Fe(o,"mousedown",rt),Fe(o,"touchstart",rt),Fe(o,"click",ct);Ue(Me,!0),
ie&&(Fe(ie,"touchcancel",st),Fe(ie,"touchend",st),Fe(ie,"touchmove",it)),Fe(S,"mouseup",st),Fe(S,"mousemove",it)}return J(n,at),s=!1,i&&"soft"!==e&&i.untrack(a||n,ye?"x,y":we?"rotation":"top,left"),a&&a.disable(),j(Be),Ce.isDragging=Ce.isPressed=te=!1,r&&ue(Ce,"dragend","onDragEnd"),Ce},this.enabled=function(e,t){return arguments.length?e?Ce.enable(t):Ce.disable(t):s},this.kill=function(){return Ce.isThrowing=!1,t.killTweensOf(a||n,!0,Xe),Ce.disable(),delete B[n._gsDragID],Ce},-1!==ve.indexOf("scroll")&&(a=this.scrollProxy=new $e(n,K({onKill:function(){Ce.isPressed&&st(null)}},l)),n.style.overflowY=Le&&!Re?"auto":"hidden",n.style.overflowX=Se&&!Re?"auto":"hidden",n=a.content),!1!==l.force3D&&t.set(n,{force3D:!0}),we?Xe.rotation=1:(Se&&(Xe[be]=1),Le&&(Xe[Te]=1)),we?(C=w,X=C.css,C.overwrite=!1):ye&&(C=Se&&Le?m:Se?v:y,X=C.css,C.overwrite=!1),this.enable()},Ze=Ke.prototype=new e;Ze.constructor=Ke,Ze.pointerX=Ze.pointerY=0,Ze.isDragging=Ze.isPressed=!1,Ke.version="0.14.8",Ke.zIndex=1e3,Ae(S,"touchcancel",function(){}),Ae(S,"contextmenu",function(e){var t;for(t in B)B[t].isPressed&&B[t].endDrag()}),Ke.create=function(e,o){"string"==typeof e&&(e=t.selector(e));for(var n=e&&0!==e.length?Be(e)?Ee(e):[e]:[],r=n.length;--r>-1;)n[r]=new Ke(n[r],o);return n},Ke.get=function(e){return B[(re(e)||{})._gsDragID]},Ke.timeSinceDrag=function(){return(P()-F)/1e3};var qe={},Qe=function(e){var t,o,n=0,r=0;for(e=re(e),t=e.offsetWidth,o=e.offsetHeight;e;)n+=e.offsetTop,r+=e.offsetLeft,e=e.offsetParent;return{top:n,left:r,width:t,height:o}},Je=function(e,t){if(e===window)return qe.left=qe.top=0,qe.width=qe.right=L.clientWidth||e.innerWidth||S.body.clientWidth||0,qe.height=qe.bottom=(e.innerHeight||0)-20<L.clientHeight?L.clientHeight:e.innerHeight||S.body.clientHeight||0,qe;var o=e.pageX!==t?{left:e.pageX-q(),top:e.pageY-Z(),right:e.pageX-q()+1,bottom:e.pageY-Z()+1}:e.nodeType||e.left===t||e.top===t?_?Qe(e):re(e).getBoundingClientRect():e;return o.right===t&&o.width!==t?(o.right=o.left+o.width,o.bottom=o.top+o.height):o.width===t&&(o={width:o.right-o.left,height:o.bottom-o.top,right:o.right,left:o.left,bottom:o.bottom,top:o.top}),o};return Ke.hitTest=function(e,t,o){if(e===t)return!1;var n,r,i,l=Je(e),s=Je(t),a=s.left>l.right||s.right<l.left||s.top>l.bottom||s.bottom<l.top;return a||!o?!a:(i=-1!==(o+"").indexOf("%"),o=parseFloat(o)||0,n={left:Math.max(l.left,s.left),top:Math.max(l.top,s.top)},n.width=Math.min(l.right,s.right)-n.left,n.height=Math.min(l.bottom,s.bottom)-n.top,!(n.width<0||n.height<0)&&(i?(o*=.01,r=n.width*n.height,r>=l.width*l.height*o||r>=s.width*s.height*o):n.width>o&&n.height>o))},k.style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;",Ke},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(e){"use strict";var t=function(){return(_gsScope.GreenSockGlobals||_gsScope)[e]};"function"==typeof define&&define.amd?define(["TweenLite","CSSPlugin"],t):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),require("../plugins/CSSPlugin.js"),module.exports=t())}("Draggable");
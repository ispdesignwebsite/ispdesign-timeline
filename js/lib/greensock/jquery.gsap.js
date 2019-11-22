(function(e){"use strict";var n,i,t,o=e.fn.animate,a=e.fn.stop,r=!0,s=function(e){var n,i={};for(n in e)i[n]=e[n];return i},l={overwrite:1,delay:1,useFrames:1,runBackwards:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,autoCSS:1},f=",scrollTop,scrollLeft,show,hide,toggle,",u=f,c=function(e,n){for(var i in l)l[i]&&void 0!==e[i]&&(n[i]=e[i])},d=function(e){return function(n){return e.getRatio(n)}},g={},h=function(){var o,a,r,s=window.GreenSockGlobals||window;if(n=s.TweenMax||s.TweenLite,n&&(o=(n.version+".0.0").split("."),a=!(Number(o[0])>0&&Number(o[1])>7),s=s.com.greensock,i=s.plugins.CSSPlugin,g=s.easing.Ease.map||{}),!n||!i||a)return n=null,void(!t&&window.console&&(window.console.log("The jquery.gsap.js plugin requires the TweenMax (or at least TweenLite and CSSPlugin) JavaScript file(s)."+(a?" Version "+o.join(".")+" is too old.":"")),t=!0));if(e.easing){for(r in g)e.easing[r]=d(g[r]);h=!1}};e.fn.animate=function(t,a,l,f){if(t=t||{},h&&(h(),!n||!i))return o.call(this,t,a,l,f);if(!r||!0===t.skipGSAP||"object"==typeof a&&"function"==typeof a.step)return o.call(this,t,a,l,f);var d,p,w,m,v=e.speed(a,l,f),y={ease:g[v.easing]||(!1===v.easing?g.linear:g.swing)},S=this,T="object"==typeof a?a.specialEasing:null;for(p in t){if(d=t[p],d instanceof Array&&g[d[1]]&&(T=T||{},T[p]=d[1],d=d[0]),"show"===d||"hide"===d||"toggle"===d||-1!==u.indexOf(p)&&-1!==u.indexOf(","+p+","))return o.call(this,t,a,l,f);y[-1===p.indexOf("-")?p:e.camelCase(p)]=d}if(T){for(p in y=s(y),m=[],T)d=m[m.length]={},c(y,d),d.ease=g[T[p]]||y.ease,-1!==p.indexOf("-")&&(p=e.camelCase(p)),d[p]=y[p],delete y[p];0===m.length&&(m=null)}return w=function(i){var t,o=s(y);if(m)for(t=m.length;--t>-1;)n.to(this,e.fx.off?0:v.duration/1e3,m[t]);o.onComplete=function(){i?i():v.old&&e(this).each(v.old)},n.to(this,e.fx.off?0:v.duration/1e3,o)},!1!==v.queue?(S.queue(v.queue,w),"function"==typeof v.old&&e(S[S.length-1]).queue(v.queue,function(e){v.old.call(S),e()})):w.call(S),S},e.fn.stop=function(e,i){if(a.call(this,e,i),n){if(i)for(var t,o=n.getTweensOf(this),r=o.length;--r>-1;)t=o[r].totalTime()/o[r].totalDuration(),t>0&&t<1&&o[r].seek(o[r].totalDuration());n.killTweensOf(this)}return this},e.gsap={enabled:function(e){r=e},version:"0.1.12",legacyProps:function(e){u=f+e+","}}})(jQuery);
function VideoPlayer(e,t){function n(){if(0!=v&&0!=S&&("INSIDE"==b||"OUTSIDE"==b)){var e=o();TweenMax.set(e,{width:w,height:M});var t,n=w/v,i=M/S;t="OUTSIDE"==b?Math.max(n,i):Math.min(n,i);var a=.5*(w-Math.ceil(v*t)),l=.5*(M-S*t);TweenMax.set(y,{x:a,y:l,width:v*t,height:S*t})}}function i(){v=this.videoWidth,S=this.videoHeight,n()}function o(){return null!=m?m:(m=document.createElement("div"),m.style.position="absolute",m.style.overflow="hidden",m.appendChild(y),T.appendChild(m),T.appendChild(h),m)}function a(){null!=E&&(T.isReadyToPlay()?"MANUEL"!=E?(A&&y.play(),d()):(l(),Touchable.listen(T,{onClick:u}),T.style.cursor="pointer"):g=!0)}function l(){h.style.display="inline",TweenMax.to(h,.6,{x:SiteGuides.OFFSET_TOP,y:SiteGuides.OFFSET_TOP,ease:Expo.easeOut})}function s(){TweenMax.to(h,.6,{x:SiteGuides.OFFSET_TOP,y:-100,onComplete:function(){h.style.display="none"},ease:Expo.easeOut})}function u(){A?(T.pause(),l()):(g&&d(),s(),T.play())}function d(){null!=f&&(TweenMax.to(f,.6,{alpha:0,onComplete:function(){s()}}),g=!1)}function r(){f=new RetinaImage(t),f.onPreloaderAnimationDone=c,f.setPreloader(new SlidePreloader),f.init(),T.appendChild(f)}function c(){O=!0,a()}function p(){y.removeEventListener("loadeddata",p,!1),x=!0,a(),y.style.display="inline"}var y,f,h,T=document.createElement("div");T.style.position="absolute",T.style.overflow="hidden";var E,m,w=0,M=0,v=0,S=0,A=!1,x=!1,O=!1,g=!0,b="DEFAULT",L=!1;return T.init=function(n){y=document.createElement("video"),y.style.position="absolute","MANUEL"!=n&&(BrowserDetect.isSafari()||BrowserDetect.MOBILE)&&(console.log("SAFARI ON MOBILE"),y.setAttribute("muted",""),y.setAttribute("autoplay",""),y.setAttribute("playsinline",""));var o=document.createElement("source");o.setAttribute("src",e),o.setAttribute("type","video/mp4"),y.addEventListener("loadeddata",p,!1),y.addEventListener("loadedmetadata",i,!1),y.style.display="none",y.appendChild(o),T.appendChild(y),y.style.zIndex=-1,null!=t?r():(f=new SlidePreloader,T.appendChild(f),f.onEaseComplete=c,setTimeout(function(){f.setProgress(100)},10)),h=new RetinaImage("assets/images/logo/play_icon.png",Assets.RETINA_HANDLE),h.init(),h.style.display="none",TweenMax.set(h,{x:SiteGuides.OFFSET_TOP,y:-100}),T.appendChild(h),T.setMode(n)},T.setMode=function(e){E=e,a()},T.setScaleMode=function(e){b=e,n()},T.enableClickToPauseAndPlay=function(){Touchable.listen(T,{onClick:T.toggle})},T.toggle=function(){A?T.pause():T.play()},T.isReadyToPlay=function(){return x&&O},T.mute=function(){L||null!=E&&"MANUEL"!=E&&BrowserDetect.isSafari()||BrowserDetect.MOBILE||(TweenMax.to(y,.3,{volume:0}),L=!0)},T.unmute=function(){L&&(null!=E&&"MANUEL"!=E&&BrowserDetect.isSafari()||BrowserDetect.MOBILE||(TweenMax.to(y,.3,{volume:1}),L=!1))},T.play=function(){T.isReadyToPlay()?(A=!0,y.play()):A=!0},T.pause=function(){A=!1,y.pause()},T.setSize=function(e,t){w=Math.ceil(e),M=t,null!=f&&f.setSize(w+1,M),TweenMax.set(T,{width:e,height:t}),TweenMax.set(y,{width:e,height:t}),n()},T.enableLoop=function(){y.setAttribute("loop","")},T.disableLoop=function(){y.removeAttribute("loop")},T}
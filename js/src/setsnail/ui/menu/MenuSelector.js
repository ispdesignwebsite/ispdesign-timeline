function MenuSelector(e,t){function n(){TweenMax.set(s,{y:SiteGuides.getCenterOffset()-1,x:t.getGuide("start")})}function i(){for(var e=r.length,t=0,n=0;n<e;n++){var i=r[n],a=50*SiteGuides.getDesignHeightRatio();a<26&&(a=26),i.style.fontSize=a+"px",i.updateLineHeight(),TweenMax.set(i,{y:t}),t+=a}}function a(){for(var t=e.children.length,n=0,i=0;i<t;i++){var a=ContentManager.getChildByAttr(e.children[i],"name","menu");if(null!=a){var d=new TextButton(Text.getNewLight(50),UIColors.WHITE,e.children[i].getAttribute("data-path"));d.init(),d.addClass("animate"),d.addClass("thick-line"),d.setText(a.innerHTML),TweenMax.set(d,{y:n}),n+=50,s.appendChild(d),r.push(d)}}}var s=document.createElement("div");s.style.position="absolute";var r=[];return s.init=function(){a(),t.addEventListener(GuideLines.ON_UPDATE,n),n(),Assets.RESIZE_MANAGER.addEventListener(ResizeEvents.RESIZE,i),i()},s}
function TemplatePrincip(e){function n(){var n=ContentManager.getChildByAttr(e.getXML(),"name","frontpage"),a=ContentManager.getChildByAttr(e.getXML(),"name","sections"),i=ContentManager.getChildrenByAttr(a,"name","section");r.addModule(new BasicHomeModule(n,t));for(var l=o(i),d=new TextAreaModel,u=i.length,M=0;M<u;M++){var g=M==l?TextAreaModel.MODE_CONTROL:TextAreaModel.MODE_LISTEN;r.addModule(new PrincipleSectionModule(i[M],d,g))}var c=new ReturnModule;c.addLine(UIColors.LINE_ON_WHITE),r.addModule(c)}function t(){r.scrollToNextModule()}function o(e){for(var n=0,t=-1,o=e.length,r=0;r<o;r++){var a=ContentManager.getChildByAttr(e[r],"name","body").innerHTML;a.length>n&&(n=a.length,t=r)}return t}var r=Snail.extend(new PageTemplate(e));r.style.backgroundColor=UIColors.WHITE;return r.init=function(){r.super.init(),n(),r.onResize()},r.templateIn=function(){r.init(),r.super.templateIn()},r.onResize=function(){r.super.onResize()},r}
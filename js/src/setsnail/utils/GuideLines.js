function GuideLines(t){GuideLines.ON_UPDATE="ON_UPDATE";var e=new EventDispatcher,i=t||SiteGuides.BASE_DESIGN_WIDTH,n={};return e.addGuide=function(t,e){n[t]={offset:e,orig:e}},e.setGuide=function(t,i){n[t].offset=i,e.dispatchEvent(GuideLines.ON_UPDATE,t)},e.setRatioTo=function(t,i){e.setGuide(t,n[t].orig*i)},e.setRatioToAll=function(t){for(var i in n)e.setRatioTo(i,t)},e.getDistance=function(t,i){var n=e.getGuide(t),o=e.getGuide(i);return Math.abs(o-n)},e.setWidthTo=function(t,n){var o=1/i*n;e.setRatioTo(t,o)},e.setWidth=function(t){var n=1/i*t;e.setRatioToAll(n)},e.getDesignWidth=function(){return i},e.getGuide=function(t){var e=n[t];return e||console.error("guide '"+t+"' was not found"),e.offset},e}GuideLines.OFFSET_BOTTOM=40;
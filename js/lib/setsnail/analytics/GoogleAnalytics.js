var GoogleAnalytics={trackPage:function(a){null===a&&(a=location.pathname+location.search+location.hash),_gaq.push(["_trackPageview",a])},trackEvent:function(a,t,c,n,o){null===o&&(o=!1),_gaq.push(["_trackEvent",a,t,c,n,o])},trackSocialEvent:function(a,t,c,n){_gaq.push(["_trackSocial",a,t,c,n])}};
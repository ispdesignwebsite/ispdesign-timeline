ShareUtils={},ShareUtils.tweet=function(t,e){var o="http://twitter.com/intent/tweet?text="+encodeURIComponent(t)+"&url="+encodeURIComponent(e);window.open(o,"tweetFollow","width=550,height=420,toolbar=no")||(window.location.href=o)},ShareUtils.facebook=function(t){window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(t),"fbShare","width=550,height=420,toolbar=yes")},ShareUtils.mail=function(t,e,o){window.open("mailto:?subject="+e+"&body="+o,"_parent")};
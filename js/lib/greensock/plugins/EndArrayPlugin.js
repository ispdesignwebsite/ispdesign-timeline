var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine.plugin({propName:"endArray",API:2,version:"0.1.3",init:function(e,o,s){var t,i,n=o.length,r=this.a=[];if(this.target=e,this._mod=0,!n)return!1;for(;--n>-1;)t=e[n],i=o[n],t!==i&&r.push({i:n,s:t,c:i-t});return!0},mod:function(e){"function"==typeof e.endArray&&(this._mod=e.endArray)},set:function(e){var o,s,t=this.target,i=this.a,n=i.length,r=this._mod;if(r)for(;--n>-1;)o=i[n],t[o.i]=r(o.s+o.c*e,t);else for(;--n>-1;)o=i[n],s=o.s+o.c*e,t[o.i]=s<1e-6&&s>-1e-6?0:s}})}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();
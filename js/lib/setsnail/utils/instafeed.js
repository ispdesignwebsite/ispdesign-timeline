(function(){var t,e;t=function(){function t(t,e){var o,i;if(this.options={target:"instafeed",get:"popular",resolution:"thumbnail",sortBy:"none",links:!0,mock:!1,useHttp:!1},"object"==typeof t)for(o in t)i=t[o],this.options[o]=i;this.context=null!=e?e:this,this.unique=this._genKey()}return t.prototype.hasNext=function(){return"string"==typeof this.context.nextUrl&&this.context.nextUrl.length>0},t.prototype.next=function(){return!!this.hasNext()&&this.run(this.context.nextUrl)},t.prototype.run=function(e){var o,i,n;if("string"!=typeof this.options.clientId&&"string"!=typeof this.options.accessToken)throw new Error("Missing clientId or accessToken.");if("string"!=typeof this.options.accessToken&&"string"!=typeof this.options.clientId)throw new Error("Missing clientId or accessToken.");return null!=this.options.before&&"function"==typeof this.options.before&&this.options.before.call(this),"undefined"!=typeof document&&null!==document&&(n=document.createElement("script"),n.id="instafeed-fetcher",n.src=e||this._buildUrl(),o=document.getElementsByTagName("head"),o[0].appendChild(n),i="instafeedCache"+this.unique,window[i]=new t(this.options,this),window[i].unique=this.unique),!0},t.prototype.parse=function(t){var e,o,i,n,s,r,a,p,c,l,h,u,d,f,m,g,y,w,k,b,_;if("object"!=typeof t){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"Invalid JSON data"),!1;throw new Error("Invalid JSON response")}if(200!==t.meta.code){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,t.meta.error_message),!1;throw new Error("Error from Instagram: "+t.meta.error_message)}if(0===t.data.length){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"No images were returned from Instagram"),!1;throw new Error("No images were returned from Instagram")}if(null!=this.options.success&&"function"==typeof this.options.success&&this.options.success.call(this,t),this.context.nextUrl="",null!=t.pagination&&(this.context.nextUrl=t.pagination.next_url),"none"!==this.options.sortBy)switch(d="random"===this.options.sortBy?["","random"]:this.options.sortBy.split("-"),u="least"===d[0],d[1]){case"random":t.data.sort(function(){return.5-Math.random()});break;case"recent":t.data=this._sortBy(t.data,"created_time",u);break;case"liked":t.data=this._sortBy(t.data,"likes.count",u);break;case"commented":t.data=this._sortBy(t.data,"comments.count",u);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}if("undefined"!=typeof document&&null!==document&&!1===this.options.mock){if(p=t.data,null!=this.options.limit&&p.length>this.options.limit&&(p=p.slice(0,this.options.limit+1||9e9)),o=document.createDocumentFragment(),null!=this.options.filter&&"function"==typeof this.options.filter&&(p=this._filter(p,this.options.filter)),null!=this.options.template&&"string"==typeof this.options.template){for(n="",r="","",f=document.createElement("div"),m=0,w=p.length;m<w;m++)s=p[m],a=s.images[this.options.resolution].url,this.options.useHttp||(a=a.replace("http://","//")),r=this._makeTemplate(this.options.template,{model:s,id:s.id,link:s.link,image:a,caption:this._getObjectProperty(s,"caption.text"),likes:s.likes.count,comments:s.comments.count,location:this._getObjectProperty(s,"location.name")}),n+=r;for(f.innerHTML=n,_=[].slice.call(f.childNodes),g=0,k=_.length;g<k;g++)h=_[g],o.appendChild(h)}else for(y=0,b=p.length;y<b;y++)s=p[y],c=document.createElement("img"),a=s.images[this.options.resolution].url,this.options.useHttp||(a=a.replace("http://","//")),c.src=a,!0===this.options.links?(e=document.createElement("a"),e.href=s.link,e.appendChild(c),o.appendChild(e)):o.appendChild(c);document.getElementById(this.options.target).appendChild(o),i=document.getElementsByTagName("head")[0],i.removeChild(document.getElementById("instafeed-fetcher")),l="instafeedCache"+this.unique,window[l]=void 0;try{delete window[l]}catch(t){}}return null!=this.options.after&&"function"==typeof this.options.after&&this.options.after.call(this),!0},t.prototype._buildUrl=function(){var t,e,o;switch(t="https://api.instagram.com/v1",this.options.get){case"popular":e="media/popular";break;case"tagged":if("string"!=typeof this.options.tagName)throw new Error("No tag name specified. Use the 'tagName' option.");e="tags/"+this.options.tagName+"/media/recent";break;case"location":if("number"!=typeof this.options.locationId)throw new Error("No location specified. Use the 'locationId' option.");e="locations/"+this.options.locationId+"/media/recent";break;case"user":if("number"!=typeof this.options.userId)throw new Error("No user specified. Use the 'userId' option.");if("string"!=typeof this.options.accessToken)throw new Error("No access token. Use the 'accessToken' option.");e="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return o=t+"/"+e,null!=this.options.accessToken?o+="?access_token="+this.options.accessToken:o+="?client_id="+this.options.clientId,null!=this.options.limit&&(o+="&count="+this.options.limit),o+="&callback=instafeedCache"+this.unique+".parse",o},t.prototype._genKey=function(){var t;return t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)},""+t()+t()+t()+t()},t.prototype._makeTemplate=function(t,e){var o,i,n,s,r;for(i=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,o=t;i.test(o);)n=o.match(i)[1],s=null!=(r=this._getObjectProperty(e,n))?r:"",o=o.replace(i,""+s);return o},t.prototype._getObjectProperty=function(t,e){var o,i;for(e=e.replace(/\[(\w+)\]/g,".$1"),i=e.split(".");i.length;){if(o=i.shift(),!(null!=t&&o in t))return null;t=t[o]}return t},t.prototype._sortBy=function(t,e,o){var i;return i=function(t,i){var n,s;return n=this._getObjectProperty(t,e),s=this._getObjectProperty(i,e),o?n>s?1:-1:n<s?1:-1},t.sort(i.bind(this)),t},t.prototype._filter=function(t,e){var o,i,n,s,r;for(o=[],n=function(t){if(e(t))return o.push(t)},s=0,r=t.length;s<r;s++)i=t[s],n(i);return o},t}(),e="undefined"!=typeof exports&&null!==exports?exports:window,e.Instafeed=t}).call(this);
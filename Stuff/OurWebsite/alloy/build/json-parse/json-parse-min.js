/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.1pr1
build: 3.7.1pr1
*/
YUI.add("json-parse",function(b){function k(e){return(b.config.win||this||{})[e];}var j=k("JSON"),l=(Object.prototype.toString.call(j)==="[object JSON]"&&j),f=!!l,o=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,m=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,d=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,g=/(?:^|:|,)(?:\s*\[)+/g,p=/[^\],:{}\s]/,n=function(e){return"\\u"+("0000"+(+(e.charCodeAt(0))).toString(16)).slice(-4);},c=function(r,e){var q=function(x,u){var t,s,w=x[u];if(w&&typeof w==="object"){for(t in w){if(w.hasOwnProperty(t)){s=q(w,t);if(s===undefined){delete w[t];}else{w[t]=s;}}}}return e.call(x,u,w);};return typeof e==="function"?q({"":r},""):r;},h=function(q,e){q=q.replace(o,n);if(!p.test(q.replace(m,"@").replace(d,"]").replace(g,""))){return c(eval("("+q+")"),e);}throw new SyntaxError("JSON.parse");};b.namespace("JSON").parse=function(q,e){if(typeof q!=="string"){q+="";}return l&&b.JSON.useNativeParse?l.parse(q,e):h(q,e);};function a(q,e){return q==="ok"?true:e;}if(l){try{f=(l.parse('{"ok":false}',a)).ok;}catch(i){f=false;}}b.JSON.useNativeParse=f;},"3.7.1pr1",{requires:["yui-base"]});
/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.1pr1
build: 3.7.1pr1
*/
YUI.add("history-hash-ie",function(f){if(f.UA.ie&&!f.HistoryBase.nativeHashChange){var b=f.Do,c=YUI.namespace("Env.HistoryHash"),a=f.HistoryHash,d=c._iframe,e=f.config.win;a.getIframeHash=function(){if(!d||!d.contentWindow){return"";}var g=a.hashPrefix,h=d.contentWindow.location.hash.substr(1);return g&&h.indexOf(g)===0?h.replace(g,""):h;};a._updateIframe=function(h,g){var i=d&&d.contentWindow&&d.contentWindow.document,j=i&&i.location;if(!i||!j){return;}if(g){j.replace(h.charAt(0)==="#"?h:"#"+h);}else{i.open().close();j.hash=h;}};b.before(a._updateIframe,a,"replaceHash",a,true);if(!d){f.on("domready",function(){var g=a.getHash();d=c._iframe=f.Node.getDOMNode(f.Node.create('<iframe src="javascript:0" style="display:none" height="0" width="0" tabindex="-1" title="empty"/>'));f.config.doc.documentElement.appendChild(d);a._updateIframe(g||"#");f.on("hashchange",function(h){g=h.newHash;if(a.getIframeHash()!==g){a._updateIframe(g);}},e);f.later(50,null,function(){var h=a.getIframeHash();if(h!==g){a.setHash(h);}},null,true);});}}},"3.7.1pr1",{requires:["history-hash","node-base"]});
/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.1pr1
build: 3.7.1pr1
*/
YUI.add("widget-base-ie",function(a){var d="boundingBox",f="contentBox",c="height",e="offsetHeight",g="",b=a.UA.ie,i=b<7,h=a.Widget.getClassName("tmp","forcesize"),j=a.Widget.getClassName("content","expanded");a.Widget.prototype._uiSizeCB=function(l){var n=this.get(d),k=this.get(f),m=this._bbs;if(m===undefined){this._bbs=m=!(b&&b<8&&n.get("ownerDocument").get("compatMode")!="BackCompat");}if(m){k.toggleClass(j,l);}else{if(l){if(i){n.addClass(h);}k.set(e,n.get(e));if(i){n.removeClass(h);}}else{k.setStyle(c,g);}}};},"3.7.1pr1",{requires:["widget-base"]});
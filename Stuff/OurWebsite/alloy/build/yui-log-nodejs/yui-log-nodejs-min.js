/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.1pr1
build: 3.7.1pr1
*/
YUI.add("yui-log-nodejs",function(f,d){var c=require(process.binding("natives").util?"util":"sys"),g=false;try{var b=require("stdio");g=b.isStderrATTY();}catch(a){g=true;}f.config.useColor=g;f.consoleColor=function(i,h){if(!this.config.useColor){return i;}if(!h){h="32";}return"\u001b["+h+"m"+i+"\u001b[0m";};var e=function(n,k,h){var o="";if(this.id){o="["+this.id+"]:";}k=k||"info";h=(h)?this.consoleColor(" ("+h.toLowerCase()+"):",35):"";if(n===null){n="null";}if((typeof n==="object")||n instanceof Array){try{if(n.tagName||n._yuid||n._query){n=n.toString();}else{n=c.inspect(n);}}catch(l){}}var j="37;40",i=((n)?"":31);k=k+"";switch(k.toLowerCase()){case"error":j=i=31;break;case"warn":j=33;break;case"debug":j=34;break;}if(typeof n==="string"){if(n&&n.indexOf("\n")!==-1){n="\n"+n;}}c.error(this.consoleColor(k.toLowerCase()+":",j)+h+" "+this.consoleColor(n,i));};if(!f.config.logFn){f.config.logFn=e;}},"3.7.1pr1");
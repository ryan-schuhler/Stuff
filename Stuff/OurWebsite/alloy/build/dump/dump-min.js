/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.1pr1
build: 3.7.1pr1
*/
YUI.add("dump",function(h,f){var b=h.Lang,c="{...}",g="f(){...}",a=", ",d=" => ",e=function(q,p){var k,j,m=[],l=b.type(q);if(!b.isObject(q)){return q+"";}else{if(l=="date"){return q;}else{if(q.nodeType&&q.tagName){return q.tagName+"#"+q.id;}else{if(q.document&&q.navigator){return"window";}else{if(q.location&&q.body){return"document";}else{if(l=="function"){return g;}}}}}}p=(b.isNumber(p))?p:3;if(l=="array"){m.push("[");for(k=0,j=q.length;k<j;k=k+1){if(b.isObject(q[k])){m.push((p>0)?b.dump(q[k],p-1):c);}else{m.push(q[k]);}m.push(a);}if(m.length>1){m.pop();}m.push("]");}else{if(l=="regexp"){m.push(q.toString());}else{m.push("{");for(k in q){if(q.hasOwnProperty(k)){try{m.push(k+d);if(b.isObject(q[k])){m.push((p>0)?b.dump(q[k],p-1):c);}else{m.push(q[k]);}m.push(a);}catch(n){m.push("Error: "+n.message);}}}if(m.length>1){m.pop();}m.push("}");}}return m.join("");};h.dump=e;b.dump=e;},"3.7.1pr1",{"requires":["yui-base"]});
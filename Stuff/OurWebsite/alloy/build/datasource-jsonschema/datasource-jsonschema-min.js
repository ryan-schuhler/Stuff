/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.1pr1
build: 3.7.1pr1
*/
YUI.add("datasource-jsonschema",function(b){var a=function(){a.superclass.constructor.apply(this,arguments);};b.mix(a,{NS:"schema",NAME:"dataSourceJSONSchema",ATTRS:{schema:{}}});b.extend(a,b.Plugin.Base,{initializer:function(c){this.doBefore("_defDataFn",this._beforeDefDataFn);},_beforeDefDataFn:function(g){var d=g.data&&(g.data.responseText||g.data),c=this.get("schema"),f=g.details[0];f.response=b.DataSchema.JSON.apply.call(this,c,d)||{meta:{},results:d};this.get("host").fire("response",f);return new b.Do.Halt("DataSourceJSONSchema plugin halted _defDataFn");}});b.namespace("Plugin").DataSourceJSONSchema=a;},"3.7.1pr1",{requires:["datasource-local","plugin","dataschema-json"]});
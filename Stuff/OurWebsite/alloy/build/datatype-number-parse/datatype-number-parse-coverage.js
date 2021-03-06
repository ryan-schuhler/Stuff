/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.1pr1
build: 3.7.1pr1
*/
if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["/build/datatype-number-parse/datatype-number-parse.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "/build/datatype-number-parse/datatype-number-parse.js",
    code: []
};
_yuitest_coverage["/build/datatype-number-parse/datatype-number-parse.js"].code=["YUI.add('datatype-number-parse', function(Y) {","","/**"," * Parse number submodule."," *"," * @module datatype"," * @submodule datatype-number-parse"," * @for DataType.Number"," */","","var LANG = Y.Lang;","","Y.mix(Y.namespace(\"DataType.Number\"), {","    /**","     * Converts data to type Number.","     *","     * @method parse","     * @param data {String | Number | Boolean} Data to convert. The following","     * values return as null: null, undefined, NaN, \"\".","     * @return {Number} A number, or null.","     */","    parse: function(data) {","        var number = (data === null) ? data : +data;","        if(LANG.isNumber(number)) {","            return number;","        }","        else {","            return null;","        }","    }","});","","// Add Parsers shortcut","Y.namespace(\"Parsers\").number = Y.DataType.Number.parse;","","","}, '3.7.1pr1' );"];
_yuitest_coverage["/build/datatype-number-parse/datatype-number-parse.js"].lines = {"1":0,"11":0,"13":0,"23":0,"24":0,"25":0,"28":0,"34":0};
_yuitest_coverage["/build/datatype-number-parse/datatype-number-parse.js"].functions = {"parse:22":0,"(anonymous 1):1":0};
_yuitest_coverage["/build/datatype-number-parse/datatype-number-parse.js"].coveredLines = 8;
_yuitest_coverage["/build/datatype-number-parse/datatype-number-parse.js"].coveredFunctions = 2;
_yuitest_coverline("/build/datatype-number-parse/datatype-number-parse.js", 1);
YUI.add('datatype-number-parse', function(Y) {

/**
 * Parse number submodule.
 *
 * @module datatype
 * @submodule datatype-number-parse
 * @for DataType.Number
 */

_yuitest_coverfunc("/build/datatype-number-parse/datatype-number-parse.js", "(anonymous 1)", 1);
_yuitest_coverline("/build/datatype-number-parse/datatype-number-parse.js", 11);
var LANG = Y.Lang;

_yuitest_coverline("/build/datatype-number-parse/datatype-number-parse.js", 13);
Y.mix(Y.namespace("DataType.Number"), {
    /**
     * Converts data to type Number.
     *
     * @method parse
     * @param data {String | Number | Boolean} Data to convert. The following
     * values return as null: null, undefined, NaN, "".
     * @return {Number} A number, or null.
     */
    parse: function(data) {
        _yuitest_coverfunc("/build/datatype-number-parse/datatype-number-parse.js", "parse", 22);
_yuitest_coverline("/build/datatype-number-parse/datatype-number-parse.js", 23);
var number = (data === null) ? data : +data;
        _yuitest_coverline("/build/datatype-number-parse/datatype-number-parse.js", 24);
if(LANG.isNumber(number)) {
            _yuitest_coverline("/build/datatype-number-parse/datatype-number-parse.js", 25);
return number;
        }
        else {
            _yuitest_coverline("/build/datatype-number-parse/datatype-number-parse.js", 28);
return null;
        }
    }
});

// Add Parsers shortcut
_yuitest_coverline("/build/datatype-number-parse/datatype-number-parse.js", 34);
Y.namespace("Parsers").number = Y.DataType.Number.parse;


}, '3.7.1pr1' );

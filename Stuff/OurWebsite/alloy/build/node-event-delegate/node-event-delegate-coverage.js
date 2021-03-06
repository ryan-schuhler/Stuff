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
_yuitest_coverage["/build/node-event-delegate/node-event-delegate.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "/build/node-event-delegate/node-event-delegate.js",
    code: []
};
_yuitest_coverage["/build/node-event-delegate/node-event-delegate.js"].code=["YUI.add('node-event-delegate', function(Y) {","","/**"," * Functionality to make the node a delegated event container"," * @module node"," * @submodule node-event-delegate"," */","","/**"," * <p>Sets up a delegation listener for an event occurring inside the Node."," * The delegated event will be verified against a supplied selector or"," * filtering function to test if the event references at least one node that"," * should trigger the subscription callback.</p>"," *"," * <p>Selector string filters will trigger the callback if the event originated"," * from a node that matches it or is contained in a node that matches it."," * Function filters are called for each Node up the parent axis to the"," * subscribing container node, and receive at each level the Node and the event"," * object.  The function should return true (or a truthy value) if that Node"," * should trigger the subscription callback.  Note, it is possible for filters"," * to match multiple Nodes for a single event.  In this case, the delegate"," * callback will be executed for each matching Node.</p>"," *"," * <p>For each matching Node, the callback will be executed with its 'this'"," * object set to the Node matched by the filter (unless a specific context was"," * provided during subscription), and the provided event's"," * <code>currentTarget</code> will also be set to the matching Node.  The"," * containing Node from which the subscription was originally made can be"," * referenced as <code>e.container</code>."," *"," * @method delegate"," * @param type {String} the event type to delegate"," * @param fn {Function} the callback function to execute.  This function"," *              will be provided the event object for the delegated event."," * @param spec {String|Function} a selector that must match the target of the"," *              event or a function to test target and its parents for a match"," * @param context {Object} optional argument that specifies what 'this' refers to."," * @param args* {any} 0..n additional arguments to pass on to the callback function."," *              These arguments will be added after the event object."," * @return {EventHandle} the detach handle"," * @for Node"," */","Y.Node.prototype.delegate = function(type) {","","    var args = Y.Array(arguments, 0, true),","        index = (Y.Lang.isObject(type) && !Y.Lang.isArray(type)) ? 1 : 2;","","    args.splice(index, 0, this._node);","","    return Y.delegate.apply(Y, args);","};","","","}, '3.7.1pr1' ,{requires:['node-base', 'event-delegate']});"];
_yuitest_coverage["/build/node-event-delegate/node-event-delegate.js"].lines = {"1":0,"43":0,"45":0,"48":0,"50":0};
_yuitest_coverage["/build/node-event-delegate/node-event-delegate.js"].functions = {"delegate:43":0,"(anonymous 1):1":0};
_yuitest_coverage["/build/node-event-delegate/node-event-delegate.js"].coveredLines = 5;
_yuitest_coverage["/build/node-event-delegate/node-event-delegate.js"].coveredFunctions = 2;
_yuitest_coverline("/build/node-event-delegate/node-event-delegate.js", 1);
YUI.add('node-event-delegate', function(Y) {

/**
 * Functionality to make the node a delegated event container
 * @module node
 * @submodule node-event-delegate
 */

/**
 * <p>Sets up a delegation listener for an event occurring inside the Node.
 * The delegated event will be verified against a supplied selector or
 * filtering function to test if the event references at least one node that
 * should trigger the subscription callback.</p>
 *
 * <p>Selector string filters will trigger the callback if the event originated
 * from a node that matches it or is contained in a node that matches it.
 * Function filters are called for each Node up the parent axis to the
 * subscribing container node, and receive at each level the Node and the event
 * object.  The function should return true (or a truthy value) if that Node
 * should trigger the subscription callback.  Note, it is possible for filters
 * to match multiple Nodes for a single event.  In this case, the delegate
 * callback will be executed for each matching Node.</p>
 *
 * <p>For each matching Node, the callback will be executed with its 'this'
 * object set to the Node matched by the filter (unless a specific context was
 * provided during subscription), and the provided event's
 * <code>currentTarget</code> will also be set to the matching Node.  The
 * containing Node from which the subscription was originally made can be
 * referenced as <code>e.container</code>.
 *
 * @method delegate
 * @param type {String} the event type to delegate
 * @param fn {Function} the callback function to execute.  This function
 *              will be provided the event object for the delegated event.
 * @param spec {String|Function} a selector that must match the target of the
 *              event or a function to test target and its parents for a match
 * @param context {Object} optional argument that specifies what 'this' refers to.
 * @param args* {any} 0..n additional arguments to pass on to the callback function.
 *              These arguments will be added after the event object.
 * @return {EventHandle} the detach handle
 * @for Node
 */
_yuitest_coverfunc("/build/node-event-delegate/node-event-delegate.js", "(anonymous 1)", 1);
_yuitest_coverline("/build/node-event-delegate/node-event-delegate.js", 43);
Y.Node.prototype.delegate = function(type) {

    _yuitest_coverfunc("/build/node-event-delegate/node-event-delegate.js", "delegate", 43);
_yuitest_coverline("/build/node-event-delegate/node-event-delegate.js", 45);
var args = Y.Array(arguments, 0, true),
        index = (Y.Lang.isObject(type) && !Y.Lang.isArray(type)) ? 1 : 2;

    _yuitest_coverline("/build/node-event-delegate/node-event-delegate.js", 48);
args.splice(index, 0, this._node);

    _yuitest_coverline("/build/node-event-delegate/node-event-delegate.js", 50);
return Y.delegate.apply(Y, args);
};


}, '3.7.1pr1' ,{requires:['node-base', 'event-delegate']});

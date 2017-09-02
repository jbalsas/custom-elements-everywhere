/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from ComponentWithProperties.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ComponentWithProperties.
 * @public
 */

goog.module('ComponentWithProperties.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  data: {arr: !Array<!goog.soy.data.SanitizedContent|string>, boolean: boolean, num: number, obj: {org: (!goog.soy.data.SanitizedContent|string), repo: (!goog.soy.data.SanitizedContent|string)}, str: (!goog.soy.data.SanitizedContent|string)}
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {{arr: !Array<!goog.soy.data.SanitizedContent|string>, boolean: boolean, num: number, obj: {org: (!goog.soy.data.SanitizedContent|string), repo: (!goog.soy.data.SanitizedContent|string)}, str: (!goog.soy.data.SanitizedContent|string)}} */
  var data = soy.asserts.assertType(goog.isObject(opt_data.data), 'data', opt_data.data, '{arr: !Array<!goog.soy.data.SanitizedContent|string>, boolean: boolean, num: number, obj: {org: (!goog.soy.data.SanitizedContent|string), repo: (!goog.soy.data.SanitizedContent|string)}, str: (!goog.soy.data.SanitizedContent|string)}');
  incrementalDom.elementOpen('div');
    incrementalDom.elementOpenStart('ce-with-properties');
        incrementalDom.attr('ref', 'wc');
        incrementalDom.attr('bool', data.boolean ? 'true' : 'false');
        incrementalDom.attr('num', data.num);
        incrementalDom.attr('str', data.str);
        incrementalDom.attr('arr', data.arr);
        incrementalDom.attr('obj', data.obj);
    incrementalDom.elementOpenEnd();
    incrementalDom.elementClose('ce-with-properties');
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  data: {arr: !Array<!goog.soy.data.SanitizedContent|string>, boolean: boolean, num: number, obj: {org: (!goog.soy.data.SanitizedContent|string), repo: (!goog.soy.data.SanitizedContent|string)}, str: (!goog.soy.data.SanitizedContent|string)}
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'ComponentWithProperties.render';
}

exports.render.params = ["data"];
exports.render.types = {"data":"[\n        boolean: bool,\n        num: number,\n        str: string,\n        arr: list<string>,\n        obj: [\n            org: string, \n            repo: string\n        ]\n    ]"};
templates = exports;
return exports;

});

class ComponentWithProperties extends Component {}
Soy.register(ComponentWithProperties, templates);
export { ComponentWithProperties, templates };
export default templates;
/* jshint ignore:end */

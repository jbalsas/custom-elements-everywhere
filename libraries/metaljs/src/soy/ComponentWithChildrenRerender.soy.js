/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from ComponentWithChildrenRerender.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ComponentWithChildrenRerender.
 * @public
 */

goog.module('ComponentWithChildrenRerender.incrementaldom');

var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  count: number
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {number} */
  var count = soy.asserts.assertType(goog.isNumber(opt_data.count), 'count', opt_data.count, 'number');
  incrementalDom.elementOpen('div');
    incrementalDom.elementOpenStart('ce-with-children');
        incrementalDom.attr('ref', 'wc');
    incrementalDom.elementOpenEnd();
      soyIdom.print(count);
    incrementalDom.elementClose('ce-with-children');
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  count: number
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'ComponentWithChildrenRerender.render';
}

exports.render.params = ["count"];
exports.render.types = {"count":"number"};
templates = exports;
return exports;

});

class ComponentWithChildrenRerender extends Component {}
Soy.register(ComponentWithChildrenRerender, templates);
export { ComponentWithChildrenRerender, templates };
export default templates;
/* jshint ignore:end */

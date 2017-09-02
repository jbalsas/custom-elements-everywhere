/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from ComponentWithDifferentViews.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ComponentWithDifferentViews.
 * @public
 */

goog.module('ComponentWithDifferentViews.incrementaldom');

var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  showWC: boolean
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {boolean} */
  var showWC = soy.asserts.assertType(goog.isBoolean(opt_data.showWC) || opt_data.showWC === 1 || opt_data.showWC === 0, 'showWC', opt_data.showWC, 'boolean');
  incrementalDom.elementOpen('div');
    if (showWC) {
      incrementalDom.elementOpenStart('ce-with-children');
          incrementalDom.attr('ref', 'wc');
      incrementalDom.elementOpenEnd();
      incrementalDom.elementClose('ce-with-children');
    } else {
      incrementalDom.elementOpenStart('div');
          incrementalDom.attr('id', 'dummy');
      incrementalDom.elementOpenEnd();
        incrementalDom.text('Dummy view');
      incrementalDom.elementClose('div');
    }
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  showWC: boolean
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'ComponentWithDifferentViews.render';
}

exports.render.params = ["showWC"];
exports.render.types = {"showWC":"bool"};
templates = exports;
return exports;

});

class ComponentWithDifferentViews extends Component {}
Soy.register(ComponentWithDifferentViews, templates);
export { ComponentWithDifferentViews, templates };
export default templates;
/* jshint ignore:end */

/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from ComponentWithoutChildren.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ComponentWithoutChildren.
 * @public
 */

goog.module('ComponentWithoutChildren.incrementaldom');

var incrementalDom = goog.require('incrementaldom');
var soyIdom = goog.require('soy.idom');


/**
 * @param {Object<string, *>=} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  incrementalDom.elementOpen('div');
    incrementalDom.elementOpenStart('ce-without-children');
        incrementalDom.attr('ref', 'wc');
    incrementalDom.elementOpenEnd();
    incrementalDom.elementClose('ce-without-children');
  incrementalDom.elementClose('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'ComponentWithoutChildren.render';
}

exports.render.params = [];
exports.render.types = {};
templates = exports;
return exports;

});

class ComponentWithoutChildren extends Component {}
Soy.register(ComponentWithoutChildren, templates);
export { ComponentWithoutChildren, templates };
export default templates;
/* jshint ignore:end */

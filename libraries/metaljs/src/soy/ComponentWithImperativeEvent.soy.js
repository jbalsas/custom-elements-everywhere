/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from ComponentWithImperativeEvent.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ComponentWithImperativeEvent.
 * @public
 */

goog.module('ComponentWithImperativeEvent.incrementaldom');

var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  eventHandled: boolean
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {boolean} */
  var eventHandled = soy.asserts.assertType(goog.isBoolean(opt_data.eventHandled) || opt_data.eventHandled === 1 || opt_data.eventHandled === 0, 'eventHandled', opt_data.eventHandled, 'boolean');
  incrementalDom.elementOpen('div');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('id', 'handled');
    incrementalDom.elementOpenEnd();
      soyIdom.print(eventHandled ? 'true' : 'false');
    incrementalDom.elementClose('div');
    incrementalDom.elementOpenStart('ce-with-event');
        incrementalDom.attr('ref', 'wc');
    incrementalDom.elementOpenEnd();
    incrementalDom.elementClose('ce-with-event');
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  eventHandled: boolean
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'ComponentWithImperativeEvent.render';
}

exports.render.params = ["eventHandled"];
exports.render.types = {"eventHandled":"bool"};
templates = exports;
return exports;

});

class ComponentWithImperativeEvent extends Component {}
Soy.register(ComponentWithImperativeEvent, templates);
export { ComponentWithImperativeEvent, templates };
export default templates;
/* jshint ignore:end */

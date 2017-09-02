/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from ComponentWithDeclarativeEvent.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ComponentWithDeclarativeEvent.
 * @public
 */

goog.module('ComponentWithDeclarativeEvent.incrementaldom');

var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');


/**
 * @param {{
 *  lowercaseHandled: boolean,
 *  kebabHandled: boolean,
 *  camelHandled: boolean,
 *  capsHandled: boolean,
 *  pascalHandled: boolean
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {boolean} */
  var lowercaseHandled = soy.asserts.assertType(goog.isBoolean(opt_data.lowercaseHandled) || opt_data.lowercaseHandled === 1 || opt_data.lowercaseHandled === 0, 'lowercaseHandled', opt_data.lowercaseHandled, 'boolean');
  /** @type {boolean} */
  var kebabHandled = soy.asserts.assertType(goog.isBoolean(opt_data.kebabHandled) || opt_data.kebabHandled === 1 || opt_data.kebabHandled === 0, 'kebabHandled', opt_data.kebabHandled, 'boolean');
  /** @type {boolean} */
  var camelHandled = soy.asserts.assertType(goog.isBoolean(opt_data.camelHandled) || opt_data.camelHandled === 1 || opt_data.camelHandled === 0, 'camelHandled', opt_data.camelHandled, 'boolean');
  /** @type {boolean} */
  var capsHandled = soy.asserts.assertType(goog.isBoolean(opt_data.capsHandled) || opt_data.capsHandled === 1 || opt_data.capsHandled === 0, 'capsHandled', opt_data.capsHandled, 'boolean');
  /** @type {boolean} */
  var pascalHandled = soy.asserts.assertType(goog.isBoolean(opt_data.pascalHandled) || opt_data.pascalHandled === 1 || opt_data.pascalHandled === 0, 'pascalHandled', opt_data.pascalHandled, 'boolean');
  incrementalDom.elementOpen('div');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('id', 'lowercase');
    incrementalDom.elementOpenEnd();
      soyIdom.print(lowercaseHandled ? 'true' : 'false');
    incrementalDom.elementClose('div');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('id', 'kebab');
    incrementalDom.elementOpenEnd();
      soyIdom.print(kebabHandled ? 'true' : 'false');
    incrementalDom.elementClose('div');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('id', 'camel');
    incrementalDom.elementOpenEnd();
      soyIdom.print(camelHandled ? 'true' : 'false');
    incrementalDom.elementClose('div');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('id', 'caps');
    incrementalDom.elementOpenEnd();
      soyIdom.print(capsHandled ? 'true' : 'false');
    incrementalDom.elementClose('div');
    incrementalDom.elementOpenStart('div');
        incrementalDom.attr('id', 'pascal');
    incrementalDom.elementOpenEnd();
      soyIdom.print(pascalHandled ? 'true' : 'false');
    incrementalDom.elementClose('div');
    incrementalDom.elementOpenStart('ce-with-event');
        incrementalDom.attr('ref', 'wc');
        incrementalDom.attr('onlowercaseevent', 'handleLowercaseEvent');
        incrementalDom.attr('onkebab-event', 'handleKebabEvent');
        incrementalDom.attr('oncamelEvent', 'handleCamelEvent');
        incrementalDom.attr('onCAPSEvent', 'handleCapsEvent');
        incrementalDom.attr('onPascalEvent', 'handlePascalEvent');
    incrementalDom.elementOpenEnd();
    incrementalDom.elementClose('ce-with-event');
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  lowercaseHandled: boolean,
 *  kebabHandled: boolean,
 *  camelHandled: boolean,
 *  capsHandled: boolean,
 *  pascalHandled: boolean
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'ComponentWithDeclarativeEvent.render';
}

exports.render.params = ["lowercaseHandled","kebabHandled","camelHandled","capsHandled","pascalHandled"];
exports.render.types = {"lowercaseHandled":"bool","kebabHandled":"bool","camelHandled":"bool","capsHandled":"bool","pascalHandled":"bool"};
templates = exports;
return exports;

});

class ComponentWithDeclarativeEvent extends Component {}
Soy.register(ComponentWithDeclarativeEvent, templates);
export { ComponentWithDeclarativeEvent, templates };
export default templates;
/* jshint ignore:end */

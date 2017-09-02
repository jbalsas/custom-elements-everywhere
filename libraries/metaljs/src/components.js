/**
 * @license
 * Copyright 2017 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { JSXComponent } from 'metal-jsx';
import 'ce-without-children';
import 'ce-with-children';
import 'ce-with-properties';
import 'ce-with-event';

export class ComponentWithoutChildren extends JSXComponent {
  render() {
    return (
      <div>
        <ce-without-children id="wc"></ce-without-children>
      </div>
    );
  }
}

export class ComponentWithChildren extends JSXComponent {
  render() {
    return (
      <div>
        <ce-with-children id="wc"></ce-with-children>
      </div>
    );
  }
}

export class ComponentWithChildrenRerender extends JSXComponent {
  attached () {
    this.state.count++;
  }
  render () {
    const { count } = this.state;
    return (
      <div>
        <ce-with-children id="wc">{count}</ce-with-children>
      </div>
    );
  }
}

ComponentWithChildrenRerender.STATE = {
	count: {
		value: 1
	}
};

export class ComponentWithDifferentViews extends JSXComponent {
  toggle() {
    this.state.showWC = !this.state.showWC;
  }
  render () {
    const { showWC } = this.state;
    return (
      <div>
        {showWC ? (
          <ce-with-children id="wc"></ce-with-children>
        ) : (
          <div id="dummy">Dummy view</div>
        )}
      </div>
    );
  }
}

ComponentWithDifferentViews.STATE = {
	showWC: {
		value: true
	}
};

export class ComponentWithProperties extends JSXComponent {
  render () {
    const data = {
      bool: true,
      num: 42,
      str: 'Metal',
      arr: ['M', 'e', 't', 'a', 'l'],
      obj: { org: 'metal', repo: 'metal.js' }
    };
    return (
      <div>
        <ce-with-properties id="wc"
          bool={data.bool}
          num={data.num}
          str={data.str}
          arr={data.arr}
          obj={data.obj}
        ></ce-with-properties>
      </div>
    );
  }
}

export class ComponentWithUnregistered extends JSXComponent {
  render () {
    const data = {
      bool: true,
      num: 42,
      str: 'Metal',
      arr: ['M', 'e', 't', 'a', 'l'],
      obj: { org: 'metal', repo: 'metal.js' }
    };
    return (
      <div>
        {/* This element doesn't actually exist.
        It's used to test unupgraded behavior. */}
        <ce-unregistered id="wc"
          bool={data.bool}
          num={data.num}
          str={data.str}
          arr={data.arr}
          obj={data.obj}
        ></ce-unregistered>
      </div>
    );
  }
}

export class ComponentWithImperativeEvent extends JSXComponent {
  attached() {
    this.element.querySelector('#wc').addEventListener('camelEvent', this.handleTestEvent.bind(this));
  }
  handleTestEvent(e) {
    this.state.eventHandled = true;
  }
  render() {
    let state = this.state;
    return (
      <div>
        <div id="handled">{this.state.eventHandled.toString()}</div>
        <ce-with-event id="wc"></ce-with-event> 
      </div>
    );
  }
}

ComponentWithImperativeEvent.STATE = {
	eventHandled: {
		value: false
	}
};

export class ComponentWithDeclarativeEvent extends JSXComponent {
  handleLowercaseEvent(e) {
    this.lowercaseHandled = true;
  }
  handleKebabEvent(e) {
    this.kebabHandled = true;
  }
  handleCamelEvent(e) {
    this.camelHandled = true;
  }
  handleCapsEvent(e) {
    this.capsHandled = true;
  }
  handlePascalEvent(e) {
    this.pascalHandled = true;
  }
  render() {
    let state = this.state;
    return (
      <div>
        <div id="lowercase">{state.lowercaseHandled.toString()}</div>
        <div id="kebab">{state.kebabHandled.toString()}</div>
        <div id="camel">{state.camelHandled.toString()}</div>
        <div id="caps">{state.capsHandled.toString()}</div>
        <div id="pascal">{state.pascalHandled.toString()}</div>
        <ce-with-event id="wc"
          onlowercaseevent={this.handleLowercaseEvent.bind(this)}
          onkebab-event={this.handleKebabEvent.bind(this)}
          oncamelEvent={this.handleCamelEvent.bind(this)}
          onCAPSEvent={this.handleCapsEvent.bind(this)}
          onPascalEvent={this.handlePascalEvent.bind(this)}
        ></ce-with-event> 
      </div>
    );
  }
}

ComponentWithDeclarativeEvent.STATE = {
  lowercaseHandled: { value: false },
  kebabHandled: { value: false },
  camelHandled: { value: false },
  capsHandled: { value: false },
  pascalHandled: { value: false }
};

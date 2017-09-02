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

import Component from 'metal-component';
import Soy from 'metal-soy';

import ComponentWithChildrenRerenderTemplate from './soy/ComponentWithChildrenRerender.soy.js';
import ComponentWithChildrenTemplate from './soy/ComponentWithChildren.soy.js';
import ComponentWithoutChildrenTemplate from './soy/ComponentWithoutChildren.soy.js';
import ComponentWithDeclarativeEventTemplate from './soy/ComponentWithDeclarativeEvent.soy.js';
import ComponentWithDifferentViewsTemplate from './soy/ComponentWithDifferentViews.soy.js';
import ComponentWithImperativeEventTemplate from './soy/ComponentWithImperativeEvent.soy.js';
import ComponentWithPropertiesTemplate from './soy/ComponentWithProperties.soy.js';

import 'ce-without-children';
import 'ce-with-children';
import 'ce-with-properties';
import 'ce-with-event';

// ComponentWithoutChildren definition

export class ComponentWithoutChildren extends Component {}

Soy.register(ComponentWithoutChildren, ComponentWithoutChildrenTemplate);

// ComponentWithChildren definition

export class ComponentWithChildren extends Component {}

Soy.register(ComponentWithChildren, ComponentWithChildrenTemplate);

// ComponentWithChildrenRerender definition

export class ComponentWithChildrenRerender extends Component {
    attached () {
        this.count++;
    }
}

Soy.register(ComponentWithChildrenRerender, ComponentWithChildrenRerenderTemplate);

ComponentWithChildrenRerender.STATE = {
    count: { value: 1 }
};

// ComponentWithDifferentViews definition

export class ComponentWithDifferentViews extends Component {
    toggle() {
        this.showWC = !this.showWC;
    }
}

Soy.register(ComponentWithDifferentViews, ComponentWithDifferentViewsTemplate);

ComponentWithDifferentViews.STATE = {
    showWC: {
        value: true
    }
};

// ComponentWithProperties definition

export class ComponentWithProperties extends Component {}

Soy.register(ComponentWithProperties, ComponentWithPropertiesTemplate);

ComponentWithProperties.STATE = {
    data: {
        value: {
            bool: true,
            num: 42,
            str: 'Metal',
            arr: ['M', 'e', 't', 'a', 'l'],
            obj: { org: 'metal', repo: 'metal.js' }
        }
    }
};

// ComponentWithImperativeEvent definition

export class ComponentWithImperativeEvent extends Component {
    attached() {
      this.refs.wc.addEventListener('camelEvent', this.handleTestEvent.bind(this));
    }
    handleTestEvent(e) {
      this.eventHandled = true;
    }
}

Soy.register(ComponentWithImperativeEvent, ComponentWithImperativeEventTemplate);  

ComponentWithImperativeEvent.STATE = {
    eventHandled: {
        value: false
    }
};

// ComponentWithDeclarativeEvent definition

export class ComponentWithDeclarativeEvent extends Component {
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
}

Soy.register(ComponentWithDeclarativeEvent, ComponentWithDeclarativeEventTemplate);  
  
ComponentWithDeclarativeEvent.STATE = {
    lowercaseHandled: { value: false },
    kebabHandled: { value: false },
    camelHandled: { value: false },
    capsHandled: { value: false },
    pascalHandled: { value: false }
};
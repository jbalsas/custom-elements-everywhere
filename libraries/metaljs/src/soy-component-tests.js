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

import expect from 'expect';
import {
  ComponentWithoutChildren,
  ComponentWithChildren,
  ComponentWithChildrenRerender,
  ComponentWithDifferentViews,
  ComponentWithProperties,
  ComponentWithUnregistered,
  ComponentWithImperativeEvent,
  ComponentWithDeclarativeEvent
} from './soy-components';

// Setup the test harness. This will get cleaned out with every test.
let app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);
let scratch; // This will hold the actual element under test.

beforeEach(function() {
  scratch = document.createElement('div');
  scratch.id = 'scratch';
  app.appendChild(scratch);
});

afterEach(function() {
  app.innerHTML = '';
  scratch = null;
});

describe('no children', function() {
  it('can display a Custom Element with no children', function() {
    let root = new ComponentWithoutChildren({}, scratch);
    let wc = root.refs.wc;
    expect(wc).toExist();
  });
});

describe('with children', function() {
  function expectHasChildren(wc) {
    expect(wc).toExist();
    let shadowRoot = wc.shadowRoot;
    let heading = shadowRoot.querySelector('h1');
    expect(heading).toExist();
    expect(heading.textContent).toEqual('Test h1');
    let paragraph = shadowRoot.querySelector('p');
    expect(paragraph).toExist();
    expect(paragraph.textContent).toEqual('Test p');
  }
  
  it('can display a Custom Element with children in a Shadow Root', function() {
    let root = new ComponentWithChildren({}, scratch);
    let wc = root.refs.wc;
    expectHasChildren(wc);
  });

  it('can display a Custom Element with children in a Shadow Root and pass in Light DOM children', async function() {
    let root = new ComponentWithChildrenRerender({}, scratch);
    let wc = root.refs.wc;
    setImmediate(_ => {
      Promise.resolve();
      expectHasChildren(wc);
      expect(wc.textContent.includes('2')).toEqual(true);
    });
  });

  it('can display a Custom Element with children in the Shadow DOM and handle hiding and showing the element', async function() {
    let root = new ComponentWithDifferentViews({}, scratch);
    let wc = root.refs.wc;
    expectHasChildren(wc);
    root.toggle();
    setImmediate(_ => {
      Promise.resolve();
      let dummy = wc.querySelector('#dummy');
      expect(dummy).toExist();
      expect(dummy.textContent).toEqual('Dummy view');
      root.toggle();
      wc = root.refs.wc;
      expectHasChildren(wc);
    });
  });
});

describe('attributes and properties', function() {
  it('will pass boolean data as either an attribute or a property', function() {
    let root = new ComponentWithProperties({}, scratch);
    let wc = root.refs.wc;
    let data = wc.bool || wc.hasAttribute('bool');
    expect(data).toBe(true);
  });

  it('will pass numeric data as either an attribute or a property', function() {
    let root = new ComponentWithProperties({}, scratch);
    let wc = root.refs.wc;
    let data = wc.num || wc.getAttribute('num');
    expect(data).toEqual(42);
  });

  it('will pass string data as either an attribute or a property', function() {
    let root = new ComponentWithProperties({}, scratch);
    let wc = root.refs.wc;
    let data = wc.str || wc.getAttribute('str');
    expect(data).toEqual('Metal');
  });

  it('will pass array data as a property', function() {
    let root = new ComponentWithProperties({}, scratch);
    let wc = root.refs.wc;
    let data = wc.arr;
    expect(data).toEqual(['M', 'e', 't', 'a', 'l']);
  });

  it('will pass object data as a property', function() {
    let root = new ComponentWithProperties({}, scratch);
    let wc = root.refs.wc;
    let data = wc.obj;
    expect(data).toEqual({ org: 'metal', repo: 'metal.js' });
  });
});

describe('events', function() {
  it('can imperatively listen to a DOM event dispatched by a Custom Element', async function() {
    let root = new ComponentWithImperativeEvent({}, scratch);
    let wc = root.refs.wc;
    let handled = root.element.querySelector('#handled');
    expect(handled.textContent).toEqual('false');
    wc.click();
    setImmediate(_ => {
      Promise.resolve();
      expect(handled.textContent).toEqual('true');
    });
  });

  it('can declaratively listen to a lowercase DOM event dispatched by a Custom Element', async function() {
    let root = new ComponentWithDeclarativeEvent({}, scratch);
    let wc = root.refs.wc;
    let handled = root.element.querySelector('#lowercase');
    expect(handled.textContent).toEqual('false');
    wc.click();
    setImmediate(_ => {
      Promise.resolve
      expect(handled.textContent).toEqual('true');
    });
  });

  it('can declaratively listen to a kebab-case DOM event dispatched by a Custom Element', async function() {
    let root = new ComponentWithDeclarativeEvent({}, scratch);
    let wc = root.refs.wc;    
    let handled = root.element.querySelector('#kebab');
    expect(handled.textContent).toEqual('false');
    wc.click();
    setImmediate(_ => {
      Promise.resolve
      expect(handled.textContent).toEqual('true');
    });
  });

  it('can declaratively listen to a camelCase DOM event dispatched by a Custom Element', async function() {
    let root = new ComponentWithDeclarativeEvent({}, scratch);
    let wc = root.refs.wc;
    let handled = root.element.querySelector('#camel');
    expect(handled.textContent).toEqual('false');
    wc.click();
    setImmediate(_ => {
      Promise.resolve
      expect(handled.textContent).toEqual('true');
    });
  });

  it('can declaratively listen to a CAPScase DOM event dispatched by a Custom Element', async function() {
    let root = new ComponentWithDeclarativeEvent({}, scratch);
    let wc = root.refs.wc;
    let handled = root.element.querySelector('#caps');
    expect(handled.textContent).toEqual('false');
    wc.click();
    setImmediate(_ => {
      Promise.resolve
      expect(handled.textContent).toEqual('true');
    });
  });

  it('can declaratively listen to a PascalCase DOM event dispatched by a Custom Element', async function() {
    let root = new ComponentWithDeclarativeEvent({}, scratch);
    let wc = root.refs.wc;
    let handled = root.element.querySelector('#pascal');
    expect(handled.textContent).toEqual('false');
    wc.click();
    setImmediate(_ => {
      Promise.resolve
      expect(handled.textContent).toEqual('true');
    });
  });
});
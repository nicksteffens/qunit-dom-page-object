/* global QUnit */

import install, { DOMAssertions, PageObject } from './page-object';

export { setup } from './qunit-dom-page-object-modules';

declare global {
  interface Assert {
    pageObject(target?: PageObject, rootElement?: Element): DOMAssertions;
  }
}

install(QUnit.assert);
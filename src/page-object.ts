export interface PageObject {
  selector: string | Element;
}

export class DOMAssertions {
  // NOTE: This will need to come from `qunit-dom` in order to work property
  constructor(
    private target: string | Element,
    private rootElement: Element | Document,
    private testContext: Assert
  ) {}

  // ... all the types of qunit-dom assertions (exists, doesNotExist, ...)
  mockFunction(options?: string, message?: string) {}
}

export default function(assert: Assert) {
  assert.pageObject = function(pageObject: PageObject, rootElement?: Element): DOMAssertions {
    return new DOMAssertions(pageObject.selector, rootElement, this);
  }
}
import install from './page-object';

export { default as install } from './page-object';

interface SetupOptions {
  getRootElement?: () => Element | null;
}

let _getRootElement: () => Element | null = () => null;

function overrideRootElement(fn: () => Element) {
  _getRootElement = fn;
}

function getRootElement() {
  return _getRootElement();
}

export function setup(assert: Assert, options: SetupOptions = {}) {
  install(assert);

  const getRootElement =
    typeof options.getRootElement === 'function'
      ? options.getRootElement
      : () => document.querySelector('#ember-testing');

  overrideRootElement(getRootElement);
}
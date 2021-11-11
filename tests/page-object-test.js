const { test, assert } = require('quint');
const { setup: installPageObject } = require('../dist/');
const { setup: installQUnitDom} = require('qunit-dom');

installPageObject(assert);
installQUnitDom(assert);

test('it able to have dom assertions', async function(assert) {
  assert.pageObject('[data-test-selector]').exists();
});
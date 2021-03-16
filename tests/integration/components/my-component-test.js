import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | my-component', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<MyComponent />`);

    assert.dom('[data-testId="status"]').hasText('NOT checked');

    await click('input');

    // this fails on Ember 3.20.6+
    assert.dom('[data-testId="status"]').hasText('checked');
  });
});

test('should show icon and label', async function(assert) {
  await render(hbs`
    <SimpleButton
      @icon="face"
      @label="Hello world!"
    />
  `);

  // Bad
  assert.strictEqual(
    this.element.querySelector('.material-icons').textContent.trim(),
    'face',
    'The user sees the correct icon.'
  );

  assert.strictEqual(
    this.element.querySelector('span').textContent.trim(),
    'Hello world!',
    'The user sees the correct label.'
  );

  // Good
  assert.strictEqual(
    this.element.querySelector('[data-test-icon]').textContent.trim(),
    'face',
    'The user sees the correct icon.'
  );

  assert.strictEqual(
    this.element.querySelector('[data-test-label]').textContent.trim(),
    'Hello world!',
    'The user sees the correct label.'
  );

  // Great!
  assert.dom('[data-test-icon]')
    .hasText('face', 'The user sees the correct icon.');

  assert.dom('[data-test-label]')
    .hasText('Hello world!', 'The user sees the correct label.');
});

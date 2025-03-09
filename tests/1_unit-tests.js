const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {
  const translator = new Translator();

  // Test 1: Translate "Mangoes are my favorite fruit." to British English
  test('Translate "Mangoes are my favorite fruit." to British English', () => {
    const text = 'Mangoes are my favorite fruit.';
    const locale = 'american-to-british';
    const result = translator.translate(text, locale);
    assert.include(result, 'favourite');
    assert.include(result, '<span class="highlight">favourite</span>');
  });

  // Test 2: Translate "I ate yogurt for breakfast." to British English
  test('Translate "I ate yogurt for breakfast." to British English', () => {
    const text = 'I ate yogurt for breakfast.';
    const locale = 'american-to-british';
    const result = translator.translate(text, locale);
    assert.include(result, 'yoghurt');
    assert.include(result, '<span class="highlight">yoghurt</span>');
  });
});

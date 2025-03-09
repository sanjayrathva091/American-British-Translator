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

  // Test 3: Translate "We had a party at my friend\'s condo." to British English
  test('Translate "We had a party at my friend\'s condo." to British English', () => {
    const text = 'We had a party at my friend\'s condo.';
    const locale = 'american-to-british';
    const result = translator.translate(text, locale);
    assert.include(result, 'flat');
    assert.include(result, '<span class="highlight">flat</span>');
  });

  // Test 4: Translate "Can you toss this in the trashcan for me?" to British English
  test('Translate "Can you toss this in the trashcan for me?" to British English', () => {
    const text = 'Can you toss this in the trashcan for me?';
    const locale = 'american-to-british';
    const result = translator.translate(text, locale);
    assert.include(result, 'bin');
    assert.include(result, '<span class="highlight">bin</span>');
  });

  // Test 5: Translate "The parking lot was full." to British English
  test('Translate "The parking lot was full." to British English', () => {
    const text = 'The parking lot was full.';
    const locale = 'american-to-british';
    const result = translator.translate(text, locale);
    assert.include(result, 'car park');
    assert.include(result, '<span class="highlight">car park</span>');
  });

  // Test 6: Translate "Like a high tech Rube Goldberg machine." to British English
  test('Translate "Like a high tech Rube Goldberg machine." to British English', () => {
    const text = 'Like a high tech Rube Goldberg machine.';
    const locale = 'american-to-british';
    const result = translator.translate(text, locale);
    assert.include(result, 'Heath Robinson device');
    assert.include(result, '<span class="highlight">Heath Robinson device</span>');
  });
});

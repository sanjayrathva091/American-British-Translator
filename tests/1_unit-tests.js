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

  // Test 7: Translate "To play hooky means to skip class or work." to British English
  test('Translate "To play hooky means to skip class or work." to British English', () => {
    const text = 'To play hooky means to skip class or work.';
    const locale = 'american-to-british';
    const result = translator.translate(text, locale);
    assert.include(result, 'bunk off');
    assert.include(result, '<span class="highlight">bunk off</span>');
  });

  // Test 8: Translate "No Mr. Bond, I expect you to die." to British English
  test('Translate "No Mr. Bond, I expect you to die." to British English', () => {
    const text = 'No Mr. Bond, I expect you to die.';
    const locale = 'american-to-british';
    const result = translator.translate(text, locale);
    assert.include(result, 'Mr');
    assert.include(result, '<span class="highlight">Mr</span>');
  });

  // Test 9: Translate "Dr. Grosh will see you now." to British English
  test('Translate "Dr. Grosh will see you now." to British English', () => {
    const text = 'Dr. Grosh will see you now.';
    const locale = 'american-to-british';
    const result = translator.translate(text, locale);
    assert.include(result, 'Dr');
    assert.include(result, '<span class="highlight">Dr</span>');
  });

  // Test 10: Translate "Lunch is at 12:15 today." to British English
  test('Translate "Lunch is at 12:15 today." to British English', () => {
    const text = 'Lunch is at 12:15 today.';
    const locale = 'american-to-british';
    const result = translator.translate(text, locale);
    assert.include(result, '12.15');
    assert.include(result, '<span class="highlight">12.15</span>');
  });

  // Test 11: Translate "We watched the footie match for a while." to American English
  test('Translate "We watched the footie match for a while." to American English', () => {
    const text = 'We watched the footie match for a while.';
    const locale = 'british-to-american';
    const result = translator.translate(text, locale);
    assert.include(result, 'soccer');
    assert.include(result, '<span class="highlight">soccer</span>');
  });

  // Test 12: Translate "Paracetamol takes up to an hour to work." to American English
  test('Translate "Paracetamol takes up to an hour to work." to American English', () => {
    const text = 'Paracetamol takes up to an hour to work.';
    const locale = 'british-to-american';
    const result = translator.translate(text, locale);
    assert.include(result, 'Tylenol');
    assert.include(result, '<span class="highlight">Tylenol</span>');
  });

  // Test 13: Translate "First, caramelise the onions." to American English
  test('Translate "First, caramelise the onions." to American English', () => {
    const text = 'First, caramelise the onions.';
    const locale = 'british-to-american';
    const result = translator.translate(text, locale);
    assert.include(result, 'caramelize');
    assert.include(result, '<span class="highlight">caramelize</span>');
  })

  // Test 14: Translate "I spent the bank holiday at the funfair." to American English
  test('Translate "I spent the bank holiday at the funfair." to American English', () => {
    const text = 'I spent the bank holiday at the funfair.';
    const locale = 'british-to-american';
    const result = translator.translate(text, locale);
    assert.include(result, 'public holiday');
    assert.include(result, '<span class="highlight">public holiday</span>');
    assert.include(result, 'carnival');
    assert.include(result, '<span class="highlight">carnival</span>');
  });

  // Test 15: Translate "I had a bicky then went to the chippy." to American English
  test('Translate "I had a bicky then went to the chippy." to American English', () => {
    const text = 'I had a bicky then went to the chippy.';
    const locale = 'british-to-american';
    const result = translator.translate(text, locale);
    assert.include(result, 'cookie');
    assert.include(result, '<span class="highlight">cookie</span>');
    assert.include(result, 'fish-and-chip shop');
    assert.include(result, '<span class="highlight">fish-and-chip shop</span>');
  });

  // Test 16: Translate "I\'ve just got bits and bobs in my bum bag." to American English
  test('Translate "I\'ve just got bits and bobs in my bum bag." to American English', () => {
    const text = 'I\'ve just got bits and bobs in my bum bag.';
    const locale = 'british-to-american';
    const result = translator.translate(text, locale);
    assert.include(result, 'odds and ends');
    assert.include(result, '<span class="highlight">odds and ends</span>');
    assert.include(result, 'fanny pack');
    assert.include(result, '<span class="highlight">fanny pack</span>');
  });

  // Test 17: Translate "The car boot sale at Boxted Airfield was called off." to American English
  test('Translate "The car boot sale at Boxted Airfield was called off." to American English', () => {
    const text = 'The car boot sale at Boxted Airfield was called off.';
    const locale = 'british-to-american';
    const result = translator.translate(text, locale);
    assert.include(result, 'swap meet');
    assert.include(result, '<span class="highlight">swap meet</span>');
  });

  // Test 18: Translate "Have you met Mrs Kalyani?" to American English
  test('Translate "Have you met Mrs Kalyani?" to American English', () => {
    const text = 'Have you met Mrs Kalyani?';
    const locale = 'british-to-american';
    const result = translator.translate(text, locale);
    assert.include(result, 'Mrs.');
    assert.include(result, '<span class="highlight">Mrs.</span>');
  });

  // Test 19: Translate "Prof Joyner of King\'s College, London." to American English
  test('Translate "Prof Joyner of King\'s College, London." to American English', () => {
    const text = 'Prof Joyner of King\'s College, London.';
    const locale = 'british-to-american';
    const result = translator.translate(text, locale);
    assert.include(result, 'Prof.');
    assert.include(result, '<span class="highlight">Prof.</span>');
  });

  // Test 20: Translate "Tea time is usually around 4 or 4.30." to American English
  test('Translate "Tea time is usually around 4 or 4.30." to American English', () => {
    const text = 'Tea time is usually around 4 or 4.30.';
    const locale = 'british-to-american';
    const result = translator.translate(text, locale);
    assert.include(result, '4:30');
    assert.include(result, '<span class="highlight">4:30</span>');
  });

  // Test 21: Highlight translation in "Mangoes are my favorite fruit."
  test('Highlight translation in "Mangoes are my favorite fruit."', () => {
    const text = 'Mangoes are my favorite fruit.';
    const locale = 'american-to-british';
    const result = translator.translate(text, locale);
    assert.include(result, '<span class="highlight">favourite</span>');
  });

  // Test 22: Highlight translation in "I ate yogurt for breakfast."
  test('Highlight translation in "I ate yogurt for breakfast."', () => {
    const text = 'I ate yogurt for breakfast.';
    const locale = 'american-to-british';
    const result = translator.translate(text, locale);
    assert.include(result, '<span class="highlight">yoghurt</span>');
  });

  // Test 23: Highlight translation in "We watched the footie match for a while."
  test('Highlight translation in "We watched the footie match for a while."', () => {
    const text = 'We watched the footie match for a while.';
    const locale = 'british-to-american';
    const result = translator.translate(text, locale);
    assert.include(result, '<span class="highlight">soccer</span>');
  });

  // Test 24: Highlight translation in "Paracetamol takes up to an hour to work."
  test('Highlight translation in "Paracetamol takes up to an hour to work."', () => {
    const text = 'Paracetamol takes up to an hour to work.';
    const locale = 'british-to-american';
    const result = translator.translate(text, locale);
    assert.include(result, '<span class="highlight">Tylenol</span>');
  });
});

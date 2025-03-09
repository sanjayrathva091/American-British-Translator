const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');

class Translator {
  constructor() {
    this.americanOnly = americanOnly;
    this.americanToBritishSpelling = americanToBritishSpelling;
    this.americanToBritishTitles = americanToBritishTitles;
    this.britishOnly = britishOnly;
  }

  // Helper function to highlight translated text
  highlightTranslation(text) {
    return `<span class="highlight">${text}</span>`;
  }

  // Translate text based on locale
  translate(text, locale) {
    let translation = text;

    // Handle American to British translation
    if (locale === 'american-to-british') {
      // Translate American-only terms
      for (const [key, value] of Object.entries(this.americanOnly)) {
        const regex = new RegExp(`\\b${key}\\b`, 'gi');
        translation = translation.replace(regex, this.highlightTranslation(value));
      }

      // Translate American to British spelling
      for (const [key, value] of Object.entries(this.americanToBritishSpelling)) {
        const regex = new RegExp(`\\b${key}\\b`, 'gi');
        translation = translation.replace(regex, this.highlightTranslation(value));
      }

      // Translate titles
      for (const [key, value] of Object.entries(this.americanToBritishTitles)) {
        const regex = new RegExp(`\\b${key}\\b`, 'gi');
        translation = translation.replace(regex, this.highlightTranslation(value));
      }

      // Translate time format (e.g., 10:30 -> 10.30)
      const timeRegex = /(\d{1,2}):(\d{2})/g;
      translation = translation.replace(timeRegex, (match, p1, p2) => {
        return this.highlightTranslation(`${p1}.${p2}`);
      });
    }

    // Handle British to American translation
    else if (locale === 'british-to-american') {
      // Translate British-only terms
      for (const [key, value] of Object.entries(this.britishOnly)) {
        const regex = new RegExp(`\\b${key}\\b`, 'gi');
        translation = translation.replace(regex, this.highlightTranslation(value));
      }

      // Translate British to American spelling
      for (const [key, value] of Object.entries(this.americanToBritishSpelling)) {
        const regex = new RegExp(`\\b${value}\\b`, 'gi');
        translation = translation.replace(regex, this.highlightTranslation(key));
      }

      // Translate titles
      for (const [key, value] of Object.entries(this.americanToBritishTitles)) {
        const regex = new RegExp(`\\b${value}\\b`, 'gi');
        translation = translation.replace(regex, this.highlightTranslation(key));
      }

      // Translate time format (e.g., 10.30 -> 10:30)
      const timeRegex = /(\d{1,2})\.(\d{2})/g;
      translation = translation.replace(timeRegex, (match, p1, p2) => {
        return this.highlightTranslation(`${p1}:${p2}`);
      });
    }

    // If no translation is needed
    if (translation === text) {
      return 'Everything looks good to me!';
    }

    return translation;
  }
}

module.exports = Translator;
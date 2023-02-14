function translateText(text) {
    const words = text.toLowerCase().split(" ");
    const translatedWords = words.map(word => {
      return dictionary[word] || word;
    });
    return translatedWords.join(" ");
  }
  
  // Export the translation function
  module.exports = translateText;
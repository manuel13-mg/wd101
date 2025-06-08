let isValidPassphrase = (text="Hi hello how are you") => {
    // Split the text into words
    let words = text.split(" ");
  
    // Check if there are at least 4 words
    let minimumFourWords = words.length >= 4;
  
    // Check if each word has at least 2 characters
    let minimumTwoCharsEach = words.every(word => word.length >= 2);
  
    // Final check: both conditions must be true
    let conditionsSatisfied = minimumFourWords && minimumTwoCharsEach;
  
    return conditionsSatisfied;
  }
  
  module.exports = isValidPassphrase;
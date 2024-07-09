const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
// Function to convert titles to title case
function titleCased() {
  // Use map to iterate over each title in the tutorials array
  return tutorials.map(function(title) {
    // Split the title into words
    let words = title.split(" ");
    
    // Capitalize the first letter of each word
    let capitalizedWords = words.map(function(word) {
      // Capitalize the first letter and concatenate with the rest of the word
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    
    // Join the words back into a title and return
    return capitalizedWords.join(" ");
  });
}

// Testing the funct
console.log(titleCased());

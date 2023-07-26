let lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

// function to split a string into an array of words
const words = (str) => {
    // replace commas and periods with empty space then split the string into words
    return str.replace(/[.,]/g, '').split(/\s+/);
}

console.log(words(lorem).length);

// function to count the number of occurrences of each word
const wordFrequency = (wordsArray) => {
    let frequency = {};
    wordsArray.forEach(word => {
        if (frequency[word]) {
            frequency[word]++;
        } else {
            frequency[word] = 1;
        }
    });
    return frequency;
}

console.log(wordFrequency(words(lorem)));

//don't change this line
module.exports = { wordFrequency, words, lorem };

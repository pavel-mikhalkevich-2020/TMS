let str = prompt('type in a palindrome pls','E.g.: A Santa Lived As a Devil At NASA');
let adjustGivenString = str.split(' ').join('').toLowerCase();
let reverseAdjustedGivenString = adjustGivenString.split('').reverse().join('');
adjustGivenString == reverseAdjustedGivenString ? console.log(str + ' is a palindrome') : console.log(str + ' is not a palindrome');
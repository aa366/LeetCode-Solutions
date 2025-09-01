

// problem => A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.



function isPalindrome(s: string): boolean {

    const newStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    // make all letters lower case and remove everything but keeping number and letters 
    return newStr === newStr.split('').reverse().join('');
    // check if the value still the same after reverseing it
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome( " "));









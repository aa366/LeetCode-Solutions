

function lengthOfLastWord(s: string): number {
    const arr = s.trim().split(' ');
   
    
    // remove the leading and trailing white space then split by the normal gap
    return arr[arr.length - 1].length;
    // return the last index of the array length
    
};

console.log(lengthOfLastWord("Hello World"));
console.log(
    lengthOfLastWord("   fly me   to   the moon  ")
);
console.log(lengthOfLastWord("luffy is still joyboy"));





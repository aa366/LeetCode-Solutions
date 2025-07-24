



console.clear()


function longestCommonPrefix(strs: string[]): string {
    if (!strs.length) return "";
    //  if the list is empty return 

    strs.sort();
    // sort list alphabetical ascending 
    const first = strs[0], last = strs[strs.length - 1];
    // take the first and last items in the array
    let result = "";


    for (let i = 0; i < first.length; i++) {
        if (first[i] === last[i]) {
            // loop into fisrt word and see untill when it have the same perfix as last word
            result += first[i];
        } else {
            break;
        }
    }
    return result;
}



console.log(
    longestCommonPrefix(["flower","flow","flight"])
);
console.log(
    longestCommonPrefix(["dog","racecar","car"])
);










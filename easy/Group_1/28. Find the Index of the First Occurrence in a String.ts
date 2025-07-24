



function strStr(characters: string, searchCharacters: string): number {

    if (searchCharacters.length === 0) return 0;
    // if there is no search return 0
    return characters
    .split(searchCharacters).length > 1 ?
    // split the string by search character if it return array with it will be length more than one if not split will return an array with the string its length will be one
     characters.split(searchCharacters)[0].length 
     : -1;
};


console.log(strStr("sadbutsad","sad"));
console.log(strStr("leetcode","leeto"));






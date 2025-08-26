

// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.
// problem => Given an array of strings strs, group the anagrams together. You can return the answer in any order. 


function groupAnagrams1(strs: string[]): string[][] {

    

    const curr = new Map()


    for (let i = 0; i < strs.length; i++) {
        const obj = {}
        //  count the letters 
        for (const char of strs[i]) {
            if (obj[char]) {
                obj[char] += 1
            } else {
                obj[char] = 1
            }
        }


        
       const key =  Object
        .entries(obj)
        .map((e)=>e.join().toLowerCase())
        .sort()
        .join()
    
        //   check if the w in curr or not 

        if (curr.has(key)) {
            // check if the map has the key key  
            curr.get(key).push(strs[i])
            // add the word to the array
        } else {
            curr.set(key, [strs[i]])    
            //    make the a new key with an array contains the current word as it's value
        }


    };
    return Array.from(curr.values())
    // return a big array have as its element the values of the map (array that was pushed)
}




function groupAnagrams2(strs: string[]): string[][] {

    let map = new Map<string, string[]>();
    // create a map 

    for (let word of strs) {

        //  loop on every word 

        let charFreq = Array.from({ length: 26 }, () => 0);
        // create an array for each letter a position arranged alphabetically
      
        

        for (let i = 0;i < word.length; i++) 
            { charFreq[word.charCodeAt(i) - 97]++; 
                // loop and get char postions  and increament the count of char in the array 
                
            }


        let keyStr = charFreq.toString();
        // make the array with its commmas an string 
        

        if (!map.has(keyStr)) { map.set(keyStr, []) }
        // check if the map don't have the word before => if its new word make a empty list * to prevent overwrite the old list and prevent an error if it is do not exist

        map.get(keyStr)!.push(word);
        // get the list and add to it the word 

    }

    return Array.from(map.values());
};





function groupAnagrams(strs: string[]): string[][] {
    
    function sortString(str: string){
    return str.split('').sort().join('')
}

    const map = new Map<string, string[]>()

    for(let str of strs){
        
        const sortedStr = sortString(str)

        const foundKey = map.get(sortedStr)
        
        if(foundKey){
            foundKey.push(str)
          
            continue
        }

        map.set(sortedStr, [str])
    }

    return Array.from(map.values())
};

// console.log(groupAnagrams( ["a"]));
// console.log(groupAnagrams( [""]));

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));






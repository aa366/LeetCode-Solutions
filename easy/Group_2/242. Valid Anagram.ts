
// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.
// 1- make a hash store every letter count
// 2- check if it matches


function isAnagram(s: string, t: string): boolean {
    // check if there is a different in length 
    if (s.length != t.length) {
        return false 
    }

    let lowerS = s.toLowerCase() , lowerT = t.toLowerCase();
    //  make everything a lower case 
    const myMap = {}

    for (let i = 0; i < s.length; i++) {
        // loop on the fisrt string and make every letter a key store in it its count or repeation time
       if (myMap[lowerS[i]]) {
        myMap[lowerS[i]] = myMap[lowerS[i]] + 1 
        
       }else {
         myMap[lowerS[i]] = 1 
       }
        
    }
   
    
    
    //  make aonther loop on the seconed string check if all used chars is the same with same count
    for (let i = 0; i < t.length; i++) {
     
        
       if (myMap[lowerT[i]] <= 0 || !myMap[lowerT[i]] ) {
        // if the letter isn't exist or used more than used in the first string return false 
        return false
        
       }
       myMap[lowerT[i]] -=1

        
    }

    return true

    
};
function isAnagram2(s: string, t: string): boolean {
    return s.split("").sort().join("") === t.split("").sort().join("");
    
};



console.log(isAnagram( "anagram"   ,  "nagaram" ));
console.log("---------------------------");

console.log(isAnagram( "rat"  ,  "car" ));







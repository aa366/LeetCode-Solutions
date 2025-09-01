

//  probelm => Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.


function longestConsecutive(nums: number[]): number {

    const set = new Set(nums);
    // create a set with nums to prevent duplicate elements

    let max = 0;
    // store max value for sequence 

    for (const num of nums) {

        if(!set.has(num +1 )){continue}
        // check if there is sequence 

        let counter = 1, current = num;
        // check by counter long of seqence ,current iterate on the sequence 
        while (set.has(current + 1)){ 
            counter++;
            current++;
            ;}
    //    check bigger value and return it 
        max = Math.max(counter, max);
    }

    return max;
};

function longestConsecutive1(nums: number[]): number {
    let set = new Set(nums);
    let maxLen = 0;

    for(let num of set){
        // check its start of the sequence
        if(!set.has(num-1)){
            // check if set has sequence 
            let len = 0;
            while(set.has(num+len)){
                len += 1;
            }
            // calculate sequence long 
            // reassign the value to max/bigger number 
            maxLen = Math.max(maxLen, len);
        }
    }
    return maxLen;

};

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([1,0,1,2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));




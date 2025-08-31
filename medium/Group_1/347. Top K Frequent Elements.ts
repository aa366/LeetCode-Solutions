

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.



function topKFrequent(nums: number[], k: number): number[] {

    
   
    // make a two lists one for the  key other for counts
    const map = {};

    for (let i = 0; i < nums.length; i++) {

        const key = nums[i];
        const value = map[key];
        // make current element into a variable to save time and make code clean && use key as key and its count as value

        if (typeof value === "number") {
            // check if there a preveious  value in map 
       
            map[key] += 1
            // update the count by increase it by one
        } else {
           map[key] = 1
        }

    }

        //     .sort((a, b) => b[1] - a[1])
        // .slice(0, k)
        // .map(v => Number(v[0]));
    
    const sorted : [string,number][] =Object.entries(map) 

    const result = sorted
    .sort((a, b) => b[1] - a[1])
    // sort it by frequency descending order 
    .slice(0,k)
    // get the number wanted by slice the list from start to k
    .map(v => Number(v[0]))
    // convert from [string , number] to number(it was the string the key) 

    return result;
};

function topKFrequent2(nums: number[], k: number): number[] {
    const freq: { [key: number]: number } = {};
    for (const n of nums) {
        if (freq[n] === undefined) freq[n] = 0;
        freq[n] += 1;
    }
    return Object.entries(freq)
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(v => Number(v[0]));
};


function topKFrequent1(nums: number[], k: number): number[] {

    const freq = new Map<number, number>();
    const buckets = new Array<number[]>(nums.length + 1);

    // Construct buckets
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    // Count frequencies
    for (let num of nums) {
        if (!freq.has(num)) {
            freq.set(num, 1);
        } else {
            freq.set(num, freq.get(num) + 1);
        }
    }

    // Fill buckets
    for (let [num, count] of freq.entries()) {
        buckets[count].push(num);
    }

    // Flat buckets
    const flat = buckets.flat();

    // Return last k elements of flattened array
    return flat.slice(flat.length - k);
}

// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([4,1,-1,2,-1,2,3], 2));
// console.log(topKFrequent([1], 1));
// console.log(topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 3));






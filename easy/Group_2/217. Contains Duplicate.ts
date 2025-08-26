
// problem => Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


function containsDuplicate1(nums: number[]): boolean {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            // loop the array on each element 

            if (i !== j && nums[i] === nums[j]) {
                // if it is not the same element and equals each others then its duplicate
                return true
            }
        }
    }
    return false
};

function containsDuplicate2(nums: number[]): boolean {

    const set = new Set<number>(nums);
    // create a set with all numbers as keys 
    // the duplicate number will overwrite the pervious one
    // if the set size less than array length that cuz some keys overwrite each other
    return (set.size < nums.length);
};

// javascript
var containsDuplicate = function (nums) {
    let set = new Set();
    // create a set 
    for (let x of nums) {
        // short circuits the loop at the first instance of a duplicate
        if (set.has(x)) return true;
        // with each element loop at the set if it has this value then its duplicate value
        set.add(x);
        // if not add the value
    }
    return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

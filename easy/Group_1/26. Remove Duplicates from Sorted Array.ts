


function removeDuplicates(nums: number[]): number {
    let adjust = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i-1]) {
            // if the number repeats in a row increase the adjust by one 
            adjust += 1;
        }

        nums[i-adjust] = nums[i];
        // change the value of element have index of the current count (i) substract by number of adjusts to the element show in current count 
    }

    return nums.length - adjust;

};

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));




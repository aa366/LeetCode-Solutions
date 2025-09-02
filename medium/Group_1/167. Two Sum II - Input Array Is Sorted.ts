

// problem => Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution. You may not use the same element twice.
// Your solution must use only constant extra space.



function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;
    // create two pointers one from start other from end 

    while(left < right) {

        if(numbers[left] + numbers[right] === target) {
        // if the number indexed at left pointer plus number indexed right pointer equals target then 
       
      
            return [left+1, right+1]
            // we return pointer plus one cuz the question asks to
            // Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

        }


        if(
            numbers[left] + numbers[right] > target
        ) {
            // if sum of two number bigger (small number from left + big number from right ) than the target 
            // the array in non-decreasing order so it means we should see the next big number from right (the next big number will be smaller than current one ) 
            right--
        } else {
            // if target bigger than them we should see the next left number 
            left++
        }
    }
    return []
};

console.log(twoSum([2,7,11,15],9));
console.log(twoSum([2,3,4],6));
console.log(twoSum( [-1,0],-1));








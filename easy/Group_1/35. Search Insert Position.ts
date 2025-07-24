

function searchInsert(nums: number[], target: number): number {
    const findIndex = nums.indexOf(target);

    if(findIndex === -1){
        nums.push(target);
        const sortedValues = nums.sort((a, b) => a - b);
        // if the target was not in number array add target into it and sort the array ascending 
        return sortedValues.indexOf(target);
    }

    return findIndex;
};


console.log(searchInsert( [1,3,5,6],5));
console.log(searchInsert([1,3,5,6],2));
console.log(searchInsert([1,3,5,6],7));










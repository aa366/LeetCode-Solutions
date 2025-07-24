


function removeElement(nums: number[], value: number): number {

    let startPostion = 0;
    let endPostion = nums.length - 1;
    let k = nums.length;
    // add start_postion , end postion ,and length of the array 

    while (startPostion <= endPostion) {
        // loop if start postion equal or less than end (postions)

        if (nums[startPostion] === value) {
             //  if the element indexs to start postion  in the array equals to wanted number provided by user
           
            if (nums[endPostion] === value) {
                //  and  the element index of end postion = value 
                endPostion--;
                k--;
                continue;
                // return to the loop and ignore the rest of code in this time 
            } else {
                nums[startPostion] = nums[endPostion];
                nums[endPostion]= -1;
               
            }
             endPostion--;
                k--;
        }
        startPostion++
    }
    return k
};
console.log(removeElement([3,2,2,3],3));
console.log(removeElement([0,1,2,2,3,0,4,2],2));












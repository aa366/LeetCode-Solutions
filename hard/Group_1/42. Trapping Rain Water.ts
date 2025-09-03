/* 
problem =>  
 Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
*/

function trap(height: number[]): number {
    let total: number = 0; 
    // Initialize total water trapped

    let l: number = 0, r: number = height.length - 1;
     // Two pointers, left (l) and right (r)

    let lmax: number = 0, rmax: number = height[r];
     // Initialize max heights for left and right
    
    while (l < r) {

        if (height[l] <= height[r]) {
            // If left height is less than or equal to right height

            if (height[l] < lmax) {
                total += lmax - height[l]; 
                // Water trapped on the left
            } else {
                lmax = height[l]; 
                // Update left max height
            }
            l++; // Move left pointer
        } else {
            // If right height is less than left height
            if (height[r] < rmax) {
                total += rmax - height[r];
                 // Water trapped on the right
            } else {
                rmax = height[r]; 
                // Update right max height
            }
            r--; // Move right pointer
        }
    }
    return total; // Return total water trapped
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap([4,2,0,3,2,5] ));






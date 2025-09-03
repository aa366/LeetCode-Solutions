/*

problem => 
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

*/


function maxArea1(height: number[]): number {

    let max = 0 , current = 0 ; 
    // max contain max container , current to make second loop less in run time like multiplication table (prevent duplicate element )

    for (let i = 0; i < height.length; i++) {

      for (let j = current; j < height.length; j++) {
        // loop with two pointer j , i 

        let col1 = height[i] ,
         col2 = height[j] ,
         len = Math.abs(i-j);
        // get column 1 && column 2 the distance between them 

        const area =  len * Math.min(col1,col2)
      max = (max > area ? max: area)
        // calculate area and see if it the bigger then current one 
      }
        current++ 
    }

    return max
};

function maxArea(height: number[]): number {
  // we'll use the 2 pointer approach to solve the problem
  let low = 0;
  let high = height.length - 1;
  let ans = 0;

  while (low <= high) {
   
    const length = Math.min(height[low], height[high]);
    const breadth = high - low;
    const area = length * breadth;
    // calculate the area 
   
    ans = Math.max(ans, area);
    // check the bigger and save it

    if (height[low] < height[high]) {low++;}
    else {high--;}
    // move the pointer 
  }

  return ans;
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log("----------------");

console.log(maxArea([1,1]));

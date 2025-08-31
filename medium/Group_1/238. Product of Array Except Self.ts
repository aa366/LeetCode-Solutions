
// Problem =>
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.



function productExceptSelf0(nums: number[]): number[] {
    const result: number[] = []

    const sum = Math.abs(nums.reduce((pre, curr,) => pre * curr))



    for (let i = 0; i < nums.length; i++) {
        console.log(i, nums[i], sum / nums[i]);

        result.push(
            sum / nums[i]
        )

    }


    return result
};

function productExceptSelf1(nums: number[]): number[] {
    const result: number[] = []


    for (let i = 0; i < nums.length; i++) {
        let sum = 1


        for (let j = 0; j < nums.length; j++) {
            if (j === i) {
                continue
            }
            sum = sum * nums[j]


        }



        result.push(sum)


    }
    return result

};



function productExceptSelf2(nums: number[]): number[] {
  /*
  The idea is to initialize an array of the size nums.length
  and filled with 1s. After that, go over the array from the start
  until the end and set each element as the product of the previous elements.
  
  Then, iterate one more time from the end until the start and update each element
  of the resulted array with the product of the elements which go after it.
*/
  
  let product = 1;
  let result = new Array(nums.length);
    

  for (let i = 0; i < nums.length; i += 1) {
    result[i] = product;
    product *= nums[i];
  }
  

  
  product = 1;
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    result[i] *= product;
    product *= nums[i];
  }
    
  return result;
};

function productExceptSelf(nums:number[]):number[] {
  // make  arry prefix in each element sum previous of multiplication start from left (start)
  // make arry postfix in each element sum previous of multiplication start from right (end)
  // the function does not save the arrays but make it while working in the same array by overwrite to save space 
  
  const result :number [] = []
  // each element in the result array will be the next element in the postfix multiply by the previous element in prefix
  let num = 1 

  for (let i = 0; i < nums.length; i++) {
    result.push(num)
    num *= nums[i]
    // make the prefix array store prefix number in num 
    
  }

  num = 1 
  for (let i = nums.length -1 ; i >= 0 ; i--) {
    result[i] *= num 
    num *= nums[i]
    

    // make postfix and overwrite to get the final result store postfix number in num 
    
  }

  return result 
}

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));









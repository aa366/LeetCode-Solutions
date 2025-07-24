console.clear()

// my first sloution 
function twoSum(nums: number[], target: number) {
    const result: [number, number][] = []
    nums.forEach((num, idx) => {
        for (let i = 0; i < nums.length; i++) {
            // make double loop to get all matches 

            if (nums[i] + num == target) {
                // check if the matches meet the condition


                if (result.length == 0) {
                    // check is there conent in the result
                    if (i != idx) {
                          // check if this match included in the result or Not tp pervent => [[0,1] ,[1,0]]  
                        result.push([idx, i])
                    }

                } else {
                    result.forEach((item) => {
                        if (!item.includes(i) && !item.includes(idx) && i != idx) {
                            // check if this match included in the result or Not tp pervent => [[0,1] ,[1,0]]   
                            result.push([idx, i])
                            // add  to the result  
                        }
                    })
                }

            }
        }
    })
        const d:Record<number , number> = {}     
    const newResult = result.length == 1 ? result[0] : null
    // check if there only one Solution


    return newResult ? newResult : result
}
// second solution
function twoSumHash(nums: number[], target: number) {
    const index:Map<number,number> = new Map();
    // create new Hash that store  nums
    for (let i = 0; i < nums.length; i++) {
        const soluction = index.get(target - nums[i])
    //try to get complement number from hash 
       if (soluction !=undefined){  return [i,soluction]}
       index.set(nums[i],i)
    //store the number as key and its index as value
    }
    // fallback return
    return []
}

console.log(twoSum([0], 9), "\n");

console.log(twoSum([3, 2, 4], 6), "\n");

console.log(twoSum([3, 3], 6), "\n");
// twoSum([2, 7, 11, 15], 9)












/**
 * 
 * You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * 
 */


function climbStairs1(n: number): number {
    // if there is only one stair return one step 
    if (n <= 1) {
        return 1;
    }

    const dp: number[] = new Array(n + 1).fill(-1);
    // make array of -1 , with length of stairs 


    const h =climbStairsHelper(n, dp);

    console.log(dp);
    
    return h
}

function climbStairsHelper(n: number, dp: number[]): number {
    /* 
    make a list and loop by recall the function untill base case  
    write list element 
    */

    // check is remaing stairs one or less than one 
    if (n <= 1) {
        return 1;
    }
    // check if  not overwrite before and return it 
       if (dp[n] !== -1) {

        return dp[n];
    }
    // callback the function untill reaches base case and reassign all dp list at once 

    dp[n] = climbStairsHelper(n - 1, dp) + climbStairsHelper(n - 2, dp);
   
    // get the last element of the array  
    return dp[n];
}

function climbStairs(n:number):number {
    /* 
    calculate from end to start and each step equals 
    previous sum of two nuumber till the ground 
    */
    let one = 1 , two = 1 ;

    for (let i = 0; i < n-1 ; i++) {
       const temp = one 
       one += two 
       two = temp  
        
    }
    return one
}



// console.log(climbStairs(2));
// console.log(climbStairs(3));
console.log(climbStairs(8));
// console.log(climbStairs(11));
// console.log(climbStairs(14));

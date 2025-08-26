

/* 
1- change to postive number 
2- get the sqrt
3- floor result
*/

function mySqrt1(x: number): number {
    let result = Math.abs(x)
    result = Math.sqrt(result)
    

    return Math.floor(result)
};


function mySqrt(x: number): number {
	let result = 0;

	let r = 0;
	let l = x;
    
	while (l >= r) {
        // loop if the right pointer(l) bigger than left pointer(r)

		const m = r + Math.floor((l - r) / 2);
        // make new variable that equal to left pointer add to right pointer substract by left pointer and return half of it then discard what after point =>make the base

		const square = m * m;


		if (square === x) {
            // if the square  vaiable that we make is equal to number provided  

			return m;
            // return the base 

		} else if (square < x && square > result) {
            // if the square less than number provided and the result less than the square 
			result = m;
            // reassign the result to the base 
		}

		if (square > x) {
            // make new if statement check if the square number bigger than number provided 
			l = m - 1;
            // make the pointer go step back 
		} else {
			r = m + 1;
             // make the pointer go step forward
		}
	}

	return result;
}






console.log(mySqrt(4));
console.log(mySqrt(8));








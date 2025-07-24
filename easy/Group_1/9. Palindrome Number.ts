

// my first solution
function isPalindromeOne(x: number): boolean {  

const reverse = x.toString().split("").reverse().join("");
// make a list and reverse it and string it

return reverse == x.toString() ? true : false 

};

// my seconed make it smaller 
const isPalindromeSeconed =  (x: number) =>  x === Number( x.toString().split("").reverse().join(""))

//  third 
function isPalindrome(x: number): boolean {
    if (x < 0) return false
    // if the number is minus return false cuz -

    const xString = x.toString()
    let left = 0
    let right = xString.length - 1

    while (xString[left] === xString[right]) {
        // start from sides and end at middle
        if (left === right || left === right -1) return true
        // if we get in the middle then returm true
        left++
        right--
    }

    return false
};


   

// isPalindrome(121)
// isPalindrome(-121)
// isPalindrome(10)

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));




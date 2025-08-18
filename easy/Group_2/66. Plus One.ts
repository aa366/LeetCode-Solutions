




function plusOne(digits: number[]): number[] {
    return Array.from((BigInt(digits.join('')) + BigInt('1')).toString(), Number)
};







console.log(plusOne([1,2,3]))
console.log(plusOne([4,3,2,1]))
console.log(plusOne([9]))
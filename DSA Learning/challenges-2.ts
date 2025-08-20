// stack & Queue
const isValidParenthesis= (str:string)=>{
    const stack:any[] = []
    const brackets = {
        "{":"}",
        "[":"]",
        "(":")",
    }
    for (const char of str) {
        if (brackets[char]) {
            // check if the char is bracket and add it to the stack 
            stack.push(char)
            
        }else{
            // if its normal char remove it from stack and get the char 
            const top = stack.pop()
            if (!top || brackets[top] !== char) {
                // if the char is  space " " or char  is close bracket  and does not match last open bracket return false 
                return false
            }

        }

        
    }

    // if there is no open bracket return true
    return stack.length===0;



}

function reverseString(str:string) {
    const stack :any[]= []

    for (let char of str) {
        stack.push(char)
        
    }
    
    let reverseStr = "";
    while (stack.length>0) {
        reverseStr += stack.pop()

    }
    return reverseStr
    
}

// hashtable
const text = [1,2,3,4,5,6,8,2,34,6,7,1]

function wordCounter(str:string) {
    const lower = str.toLowerCase()

    const wordMap :any= {}
    const words = lower.split(/\s+/)
    for (const word of words) {
        if (word in wordMap) {
            wordMap[word]++
            
        }else{
             wordMap[word] = 1
        }
       
        
    }
    return wordMap

}

function twoSum(nums:number[],target:number) {
    const numMap :any= {}
    for (let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i]
        if (compliment in numMap && numMap[compliment ]!== i) {
            return [numMap[compliment],i]
        }
        numMap[nums[i]] = i

        
    }
    return []
    
}

console.log(twoSum(text,4));

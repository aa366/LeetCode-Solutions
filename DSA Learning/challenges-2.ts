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
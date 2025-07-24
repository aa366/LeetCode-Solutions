
console.clear()


function isValid(s: string): boolean {

    let stack :string[]= [];

    for (let i = 0; i <= s.length; i++) {
//  loop on the string provided 

        if (["(", "[", "{"].includes(s[i])) {
            stack.push(s[i]);
            // if there is open bracket add it to stack array 
        }

        if ([")", "]", "}"].includes(s[i])) {
          
            if (["()", "[]", "{}"].includes(
                `${stack[stack.length - 1]}${s[i]}`)
            
            ) {
                  // if there is close bracket in string provided and  the last char of the stack is open braket and the current close char at the same type remove the open bracket from the stack
                stack.pop();
            } else {
                return false;
            }
        }

    }
    // if the stack empty return true else false 
    return stack.length === 0;
};
console.log(isValid( "()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));










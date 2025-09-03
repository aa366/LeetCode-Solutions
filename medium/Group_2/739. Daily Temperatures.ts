
// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.


function dailyTemperatures(temperatures: number[]): number[] {
    // Stack to store indices of temperatures, answer array for result
    const stack: number[] = [];
    const answer: number[] = new Array(temperatures.length).fill(0);

    // Iterate through the temperatures array
    for (let i = 0; i < temperatures.length; i++) {
        // Check if the stack is not empty and current temperature is higher
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            // Calculate waiting days and update answer
            const index = stack.pop()!;
            answer[index] = i - index;
        }

        // Push current index onto the stack
        stack.push(i);
    }

    // Return the final array of waiting days
    return answer;
}

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));
console.log(dailyTemperatures([30,40,50,60]));
console.log(dailyTemperatures([30,60,90]));




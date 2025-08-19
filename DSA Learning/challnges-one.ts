
// reverse integer from right to left 
const reverseInt = (n: number) => parseInt(n.toString().split("").reverse().join("")) * Math.sign(n)
// make every word first letter capital
const sentenceCapitalze = (n: string) => {
    return n
        .toLowerCase()
        .split(" ")
        .map((word) => word[0].toUpperCase + word.slice(1))
        .join(" ")


}
// check all to number to n to see divisable by 3 , 5 or both
const fizzBuzz = (input: number) => {
    for (let i = 0; i < input; i++) {

        if (!(input % 3) && !(input % 5)) {
            console.log("FizzBuzz");

        }
        else if (!(input % 3)) {
            console.log("Fizz");

        }
        else if (!(input % 5)) {
            console.log("Buzz");

        } else {
            console.log(input);
        }




    }



}
// calculate the differnce between stock high and low and return the maxiumum profit can be made
const maxProfit = (arr: number[]) => {

    //   Math.max(...arr)  Math.min(...arr) 
    // const max = arr.reduce((pre,curr) =>pre>curr? pre:curr )
    // , min = arr.reduce((pre,curr) =>pre>curr? curr:pre )
    let min: number = Infinity
        , max: number = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i]
        if (curr > max) {
            max = curr

        }
        if (curr < min) {
            min = curr

        }
    }
    if (min === Infinity) {
        min = 0
    }
    if (max === -Infinity) {
        max = 0
    }

    return {
        high: max,
        low: min,
        profit: max - min,
    }
}
// return new array where original array is split into chunks of the specified size
const arrayChunk = (arr: any[], num: number) => {
//     const result: any[] = []
//     let pusher: any[] = []

// if(num ==1){
//     return arr.map(item => [item])
// }
//     for (let i = 0; i < arr.length; i++) {
//         // check every element 


//         if (((i + 1) % num === 0 && (i != 0 || (i == 0 && i == num))) || i === arr.length - 1) {

//             // add the array that store values when it complete length equals to jump/number provided and check the index isnt equal to 0 but if the user provided it accept it 
//             // and add the last array anyway even though its length is not complete


//             pusher.push(arr[i])
//             result.push(pusher)
//             pusher = []


//         } else {
//             pusher.push(arr[i])
//         }


//     }

const result:any[]= []
let index:number =0;
num = Math.abs(num)

while (index<arr.length) {
    const chunk = arr.slice(index,index+num)
    result.push(chunk)
    index+=num

}
    return result
}
// two sum again brute force
const twoSum = (arr:any[],target:number)=>{
    for (let i = 0; i < arr.length; i++) {
         for (let j = 0; j < arr.length; j++) {
            if (arr[j] + arr[i] === target) {
                return [i,j]
            }
       
        
    }
        
    }
    return []
}
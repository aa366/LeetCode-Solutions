
// problem => 
/* 
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/


function maxProfit1(prices: number[]): number {
    let min = Infinity , max = -Infinity

    for (let i = 0; i < prices.length; i++) {

        if (prices[i]<min ) {
            min = prices[i]
            max = - Infinity

        }

        if (prices[i]>max) {
            max = prices[i]

        }
        
    }
    if (max === - Infinity) {
        max = 0 
    }
    if (min === Infinity) {
        min = 0 
    }
    return max - min
};


function maxProfit(prices:number[]):number {

  let maxProfit = 0;
  let minPrice = Infinity;
    
    

  for (let i = 0; i < prices.length; i++) {

    if (prices[i] < minPrice) {
      minPrice = prices[i];
    //   check if current price less than minprice and reassign it  
    } else if (prices[i] - minPrice > maxProfit) {
        // check if current profit bigger than previous one and reassign it 
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
}



console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit( [7,6,4,3,1]));








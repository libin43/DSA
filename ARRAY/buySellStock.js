const prices = [7,1,5,3,6,4]

function findMaxProfit(prices) {
    let profit = 0
    for(let i=0;i<prices.length;i++) {
        for(let j=i+1;j<prices.length;j++) {
            if(prices[j]-prices[i]>profit){  
                profit = prices[j] - prices[i]
            }
        }
    }
    return profit
}

const res = findMaxProfit(prices)
console.log(res);

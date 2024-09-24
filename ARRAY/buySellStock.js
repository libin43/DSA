const prices = [7,1,5,3,6,4]

function findMaxProfit(prices) {
    let buyStock = Infinity
    let sellStock = 0
    let map = new Map()
    for(let i=0;i<prices.length;i++ ) {
        if(prices[i]<buyStock) {
            buyStock = prices[i]
        }
        if(prices[i]>sellStock) {
            sellStock = prices[i]
        }
    }
    const profit = sellStock - buyStock
    if(profit > 0) {
        return profit
    } else {
        return 0
    }
}

const res = findMaxProfit(prices)
console.log(res);

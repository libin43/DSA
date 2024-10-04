const prices = [7,6,4,3,1]

function maxprofit(prices) {
    let minBuy = prices[0]
    let maxprofit = 0
    for(let i=0;i<prices.length;i++) {
        let profit = prices[i] - minBuy
        if(maxprofit<profit) {
            maxprofit = profit
        }
        if(prices[i]<minBuy){
            minBuy = prices[i]
        }
    }
    return maxprofit
}

const val = maxprofit([7,6,4,3,1])
console.log(val)

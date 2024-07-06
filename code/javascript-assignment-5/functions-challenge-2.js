function percentCalc(amount, percentage) {
    let newPercentage = (percentage/100) * amount
    return `${newPercentage}`
}

console.log(percentCalc(200, 20));


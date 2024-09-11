function calculateTax(income, expenses) {
    const difference = income-expenses
    return difference*.20
}

const result = calculateTax(10000,3000)
console.log(result)

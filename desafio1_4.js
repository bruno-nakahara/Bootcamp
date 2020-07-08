//Operação bancária

//Conta do Usuário
const user = {
    name: 'Bruno',
    transactions: [],
    balance: 0
}

//Adicionar transação
function createTransaction (newTransaction) {
    user.transactions.push(newTransaction)
}

//Valor médio
function getAverageTransactionValue () {
    let sumTransactions = 0

    for (let transaction of user.transactions) {
        sumTransactions = sumTransactions + transaction.value
    }

    const average = sumTransactions / user.transactions.length
    return average
}

//Contador de transação
function getTransactionsCount () {
    let creditCounter = 0
    let debitCounter = 0

    for (let counter of user.transactions) {
        if (counter.type == 'credit') {
            creditCounter++
        } else {
            debitCounter++
        }
    }
   
    return {credit: creditCounter, debit: debitCounter}
}

//Maior valor de cada tipo de transação
function getHigherTransactionByType (types) {
    let max = 0

    for (let userTransaction of user.transactions) {
        if (types == userTransaction.type && userTransaction.value > max) {
            max = userTransaction.value
        } 
    }

    return {type: types, value: max}

}

//Saldo do usuário
function calculateBalance () {
    let sumBalance = 0
    for (let transactionValue of user.transactions) {
        sumBalance = sumBalance + transactionValue.value
    }

    user.balance = sumBalance
}


createTransaction({ type: "credit", value: 100 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 210 });
createTransaction({ type: "debit", value: 200 });
createTransaction({ type: "debit", value: 210 });
calculateBalance ()

console.log(getAverageTransactionValue())
console.log(getTransactionsCount ())
console.log(getHigherTransactionByType ('credit'))
console.log(getHigherTransactionByType ('debit'))
console.log(user.balance)
let incomeInput = 10000;
let expenseInput = 3500;
let balance = 0;

function showIncome(expression){
    console.log("Inputed income is " + expression);
}

function showExpense(expression){
    console.log("Inputed expense is " + expression);
}

function showBalance(incomeInput,expenseInput){
    balance = (incomeInput - expenseInput);
    console.log("Your remaining balance is " + balance);
}

showIncome(incomeInput);
showExpense(expenseInput);
showBalance(incomeInput,expenseInput);

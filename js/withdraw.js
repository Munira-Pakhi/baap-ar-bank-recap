/*
1. add event listener to the withdraw button
2. get withdraw amount from the withdraw input field
2-5. Convert string withdraw amount to a number type
3. clear the withdraw input field after getting the value
4. get the previous withdraw total
5. calculate new withdraw total and set the value to the withdraw total
6. get current balance
7. calculate the new balance and set it to the balance total element
*/ 

// step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){

    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-3
    withdrawField.value = '';

    // step-4
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotalAmount = parseFloat(previousWithdrawTotalString);

    // step-5
    const newWithdrawTotal = previousWithdrawTotalAmount + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;

    // step-6
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

    // step-7
    const newBalanceTotal = previousBalanceTotalAmount - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //get input withdrawl amount
    const withdrawAmountField = document.getElementById('withdraw-amount');
    const withdrawAmount = withdrawAmountField.value;
    document.getElementById('withdraw-amount').value = '';
    if(isNaN(parseFloat(withdrawAmount))){
        alert('Please provide valid number');
        return;
    }

    //get previous widthdrawl
    const previousWithdrawElement = document.getElementById('withdraw-total');
    const previousWithdraw = previousWithdrawElement.innerText;

    //get previous total balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotalElement.innerText;
    //set total balance && set widthdraw total
    if (parseFloat(previousBalanceTotal) >= parseFloat(withdrawAmount)) {
        document.getElementById('withdraw-total').innerText = parseFloat(previousWithdraw) + parseFloat(withdrawAmount);
        document.getElementById('balance-total').innerText = parseFloat(previousBalanceTotal) - parseFloat(withdrawAmount);
    }
    else{
        alert('Baap er bank a oto taka nai');
    }
})
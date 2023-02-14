document.getElementById('btn-withdraw').addEventListener('click',function(){
    //get input withdrawl amount
    const withdrawAmountField = document.getElementById('withdraw-amount');
    const withdrawAmount = withdrawAmountField.value;

    //get previous widthdrawl
    const previousWithdrawElement = document.getElementById('withdraw-total');
    const previousWithdraw = previousWithdrawElement.innerText;

    //set widthdraw total
    document.getElementById('withdraw-total').innerText = parseFloat(previousWithdraw)+parseFloat(withdrawAmount);

    //get previous total balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotalElement.innerText;
    //set total blance
    document.getElementById('balance-total').innerText = parseFloat(previousBalanceTotal) - parseFloat(withdrawAmount);

    document.getElementById('withdraw-amount').value = '';
})
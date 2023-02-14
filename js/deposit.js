//Add event listner on button so that we can get the value
document.getElementById('btn-deposit').addEventListener('click',function(){
    //get the value from input field which we want o deposit
    const depositField = document.getElementById('deposit-amount');
    const newDepositAmount = depositField.value;

    //get the previous total deposited value
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotalElement.innerText;

    //add both and set
    depositTotalElement.innerText = parseFloat(previousDepositTotal) + parseFloat(newDepositAmount);

    //add deposited amount in total balance
    // get previous balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotalElement.innerText;

    //add and set previous balance and deposited amount
    balanceTotalElement.innerText = parseFloat(previousBalanceTotal) + parseFloat(newDepositAmount);

    //clear the deposit field
    depositField.value = '';
})
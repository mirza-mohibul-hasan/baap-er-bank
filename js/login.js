//Step-01: add click event handler with submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    //step-2: get the email address inside the email input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    //step-3: get the password inside the email input field
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // Step-04: Verify
    if(email == 'sontan@baap.com' && password == 'secret'){
        // console.log('valid user');
        window.location.href = 'bank.html';
    }
    else{
        alert('Tokeh ami tejjo sontan ghoshona korlam!! tui tejjoputro');
    }
})
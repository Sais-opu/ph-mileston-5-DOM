// amount add part start
/**
 * 1. click button(evenhandler)
 * 2. pin validation
 * 3. amount money to available balance +
 * 4. current available balance
 */
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    // console.log('ki korbo')
    // precen page reload after form submit
    event.preventDefault();
    // get money to the available balance
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput)

    // get the pin
    const pinNumberInput = document.getElementById('input-pin-Number').value;
    console.log(pinNumberInput)
    // verify pin number not ideal way
    if (pinNumberInput === '1234') {
        console.log('adding monet to your account')
        // get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance)
        // add amount with balance
        // const newBalance = balance + addMoneyInput;
        // console.log(newBalance) //--> output:9400100 because duitai string
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance)

        // update balace in available balance
        document.getElementById('account-balance').innerText=newBalance

    }
    else {
        alert('Failed to add money! Please try again')
    }
});
// amount add part end

// cash out part


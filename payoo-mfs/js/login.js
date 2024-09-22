console.log('kemon aso')
// search: form submit reloading the page

// step-1 set event handler
document.getElementById('button-login').addEventListener('click', function (event) {
    // step-2 prevent default behavior(reloading browser)
    event.preventDefault(); // vejal to beginner
    console.log('Log in button click');

    //step-3 get the phone Number and the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber,pinNumber)
    // step-4 validate phone and pin
    // this is not ideal way
    if (phoneNumber === '5' && pinNumber === '1234') {
        console.log('You are loggin in');
        window.location.href='/home.html' // by click login button after validation it wil go home html file
        //step-5 allow user to use the website
    }
    else {
        alert('Wrong phone number or pin')
    }
})


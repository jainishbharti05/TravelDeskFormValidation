console.log('This is index.js');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validUser = false;
let validPhone = false;
let validEmail = false;
$('#failure').hide();
$('#success').hide();


name.addEventListener('blur', () => {
    console.log('name is blurred');
    // Validate your name here

    let regex = /^([@a-zA-z])([.\-_0-9a-zA-z]+){2,10}$/
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Valid username entered');
        name.classList.remove('is-invalid');
        validUser = true;
    }
    else {
        console.log('Invalid username entered');
        name.classList.add('is-invalid');
        validUser = false;
    }
})

phone.addEventListener('blur', () => {
    console.log('phone is blurred');
    // Validate your phone here

    let regex = /^([0-9]){10}$/
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Valid phone entered');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log('Invalid phone entered');
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})

email.addEventListener('blur', () => {
    console.log('email is blurred');
    //Validate your email here

    let regex = /^([\_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Valid email entered');
        email.classList.remove('is-invalid');
        validEmail = true ;
    }
    else {
        console.log('Invalid email entered');
        email.classList.add('is-invalid');
        validEmail = false ;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('You clicked submit');
    console.log(validEmail, validPhone, validUser);
    

    if (validEmail && validPhone && validUser) {
        console.log('Phone, Email and User are valid, submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();

    }
    else{
        console.log('One of phone, email or user is not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
    }


})
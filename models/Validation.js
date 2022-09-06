const form = document.getElementById("form"),
    email = document.getElementById("email"),
    password = document.getElementById("password"),
    password2 = document.getElementById("password-confirm");

    form.addEventListener('#submit', e =>{
        e.preventDefault();
        checkInputs();
    });

    function checkInputs(){
        const emailvalue = email.value.trim();
        const passwordvalue = password.value.trim();
        const password2value = password2.value.trim();
        
        if(emailvalue === '') {
            setErrorFor(email, 'Email cannot be blank');
        } else if (!isEmail(emailvalue)) {
            setErrorFor(email, 'Not a valid email');
        } else {
            setSuccessFor(email);
        }
        
        if(passwordvalue === '') {
            setErrorFor(password, 'Password cannot be blank');
        } else {
            setSuccessFor(password);
        }
        
        if(password2value === '') {
            setErrorFor(password2, 'Password2 cannot be blank');
        } else if(passwordvalue !== password2value) {
            setErrorFor(password2, 'Passwords does not match');
        } else{
            setSuccessFor(password2);
        }
    }

    function setErrorFor(input,message) {
        const formControl=input.parentElement;
        t.parentElement;
	    const small = formControl.querySelector('small');
	    formControl.className = 'form-control error';
	    small.innerText = message;
}



    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
    
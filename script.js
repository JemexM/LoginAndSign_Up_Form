const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const question = document.getElementById('question');
const answer = document.getElementById('answer');
const button = document.getElementById('Submit');
const signUp = document.getElementById('sign-up')
const aSignup = document.getElementById('aSignup');
const aSignin = document.getElementById('aLogin');
const register_container = document.getElementById('register-container');
const login_container = document.getElementById('login-container');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});
function resetAll() {
    username.value = null
    email.value = null
    password.value = null
    cpassword.value = null
    question.value = null
    answer.value = null
}
function sign_Up() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passVal = password.value.trim();
    const cpassVal = cpassword.value.trim();
    let qVal = question;
    const answerVal = answer.value.trim();
    if (!(usernameVal === '' || emailVal === '' || passVal === '' || cpassVal === '' || (cpassVal !== passVal) || qVal.value === '' || answerVal === '')) {
        alert("Register Successful")
        correct(question)
        correct(answer)
        resetAll()
        answer.style.display = 'none'
        button.style.display = "block";
        signUp.style.display = "none";
        register_container.style.display = 'none';
        login_container.style.display = 'block';

    } else {
        error(answer, "answer cannot be empty")
    }
}
function checkInputs() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passVal = password.value.trim();
    const cpassVal = cpassword.value.trim();
    const answerVal = answer.value.trim();
    if(usernameVal === '') {
        //add error class to username form-control
        error(username, 'Username is Empty');
    } else {
        //add correct class to username form-control
        correct(username);
    }
    if(emailVal === '') {
        //add error class to email form-control
        error(email, 'Email is Empty');
    } else if (!isEmail(emailVal)) {
        //add error class to email form-control if email is not valid
        error(email, 'Email is not valid');
    } else {
        //add correct class to email form-control
        //email is valid
        correct(email);
    }
    if (passVal === '') {
        //add error class to password form-control
        error(password, 'Password is Empty');
    } else {
        //add correct class to password form-control
        correct(password);
    }
    if (cpassVal === '') {
        error(cpassword, 'Confirm password required');
    } else if (cpassVal !== passVal) {
        //add error class
        //password and cpassword does not match
        error(cpassword, 'Passwords does not match');
    } else {
        correct(cpassword);
        checkQuestion()
    }

}
function checkQuestion() {
    let qVal = question;
    var question1 = prompt("Add Your security questions?")
    qVal.value = question1;
    if(qVal.value === "" || qVal.value === null) {
            error(question, "Additional Security cannot be empty")
    } else if (!(qVal.value === "" || qVal.value === null)){
        answer.value = "";
        answer.style.display = "block"
        button.style.display = "none";
        signUp.style.display = "block";
    } else if (answerVal === ""){
        error(answer, "please")
    } else {
        correct(question)
        correct(answer)
    }
}
function error(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');
    //add error message in small
    small.innerText = message;
    //add error class
    formControl.className = 'form-control error';
}
function correct(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control correct';
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function SignUP() {
    register_container.style.display = 'block';
    login_container.style.display = 'none';
}
function SignIn() {
    register_container.style.display = 'none';
    login_container.style.display = 'block';
}
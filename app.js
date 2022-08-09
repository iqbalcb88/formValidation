const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

let VALID = true;

// Show input error mgs
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
  VALID = false;
}

// Show success outline

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
  VALID = true;
}

// check email validation
function checkEmail(input) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regex.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid!');
  }

  /* return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ); */
}
// Check Length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} at least ${min} characters!`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} not more than ${max} characters!`);
  } else {
    showSuccess(input);
  }
}

// match password

function matchPassword(password, password2) {
  if (password.value.trim() === password2.value.trim()) {
    checkRequired([password, password2]);
  } else {
    showError(password2, 'Password do not matched');
  }
}

// Check require
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } /* else if (input.id === 'email' && !isValidEmail(input.value.trim())) {
      showError(input, `${getFieldName(input)} is not valid`);
    }  */ else {
      showSuccess(input);
    }
  });
}

// get filed name
function getFieldName(input) {
  return input.id[0].toUpperCase().toUpperCase() + input.id.slice(1);
}

// Event listener
form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);

  // checkLength(password2, 6, 20);
  checkEmail(email);
  matchPassword(password, password2);
  checkLength(password, 6, 20);

  if (VALID) {
    console.log(username.value, email.value, password.value);
  } else {
    console.log(VALID);
  }
});

/* username.addEventListener('keyup', function (e) {
  e.preventDefault();
  console.log(e.target.value);
  if (e.target.value.length < 8) {
    const formControl = this.parentElement;
    console.log(formControl);
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = 'required 8 char';
  } else {
    const formControl = this.parentElement;
    formControl.className = 'form-control success';
  }
}); */

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error mgs
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Event listener
form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (username.value.length < 1 || username.value === '') {
    showError(username, 'User is required');
  } else {
    console.log('success');
    showSuccess(username);
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

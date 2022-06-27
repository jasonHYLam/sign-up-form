function displayErrorMessage() {
    const password = document.querySelector('.password');
    const confirmPassword = document.querySelector('.confirm-password');
    const errorMessages = document.querySelectorAll('div > span');

    console.log(password.validity)

    if (password.value === confirmPassword.value) {
        errorMessages.forEach(e => {
            e.textContent = '';
            e.className = "no-error";
        })
        
    } else {
        errorMessages.forEach(e => {
            e.textContent = '*Passwords must match';
            e.className = "error";
        });

    }
}
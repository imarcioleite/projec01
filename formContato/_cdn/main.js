const email = document.getElementById('email');
const password = document.getElementById('password');

email.addEventListener('focus', () => {
    email.style.borderColor = '#4a5f6a';
});
email.addEventListener('blur', () => {
    email.style.borderColor = '#ccc';
});
password.addEventListener('focus', () => {
    password.style.borderColor = '#4a5f6a';
});
password.addEventListener('blur', () => {
    password.style.borderColor = '#ccc';
});

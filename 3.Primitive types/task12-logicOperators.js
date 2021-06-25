let validLogin = prompt('Enter login', '');
let validPass;
validLogin.toLowerCase();

if(validLogin === 'admin') {
    validPass = prompt('Enter password', '');

    if(validPass === 'Im a boss') {
        alert('Hi, BOSS!!! :)');
    } else {
        alert('Wrong password');
    }
} else if (validLogin === '') {
    alert('Cancelled');
} else {
    alert('I dont know who you are');
}
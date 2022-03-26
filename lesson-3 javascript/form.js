function validate()
{
    let x = document.form.name.value;
    let y = document.form.pass.value;
    let check = true;
    if (x.length === 0) {
        document.getElementById("login").style.backgroundColor = '#CD5C5CFF';
        document.getElementById("login-text").style.color = 'red';
        document.getElementById("login-text").innerText = '*this field must be filled';
        check = false;
    }
    if (y.length === 0) {
        document.getElementById("password").style.backgroundColor = '#CD5C5CFF';
        document.getElementById("password-text").style.color = 'red';
        document.getElementById("password-text").innerText = '*this field must be filled';
        check = false;
    }
    else if (y.length <=3) {
        document.getElementById("password").style.backgroundColor = '#CD5C5CFF';
        document.getElementById("password-text").style.color = 'red';
        document.getElementById("password-text").innerText = '*password cannot be less than 4 symbols';
        check = false;
    }
    console.log("Finished");
    return check;
}
function validate() {
    let log = document.getElementById("login").value;
    let pass = document.getElementById("password").value;
    let check = true;
    if (log.length === 0 || log.length < 4) {
        if (log.length > 0)
        {document.getElementById("label_login").innerText = "*логин должен быть не менее 4-х символов";}
        else {document.getElementById("label_login").innerText = "*данное поле обязательно для заполнения";}
        document.getElementById("label_login").style.color = 'red';
        document.getElementById("login").style.borderColor = 'red';
        check = false;
    }
    if (pass.length === 0 || pass.length < 8) {
        if (pass.length > 0)
        {document.getElementById("label_password").innerText = "*пароль должен быть не менее 8-и символов";}
        else {document.getElementById("label_password").innerText = "*данное поле обязательно для заполнения";}
        document.getElementById("label_password").style.color = 'red';
        document.getElementById("password").style.borderColor = 'red';
        check = false;
    }
    return check;
}
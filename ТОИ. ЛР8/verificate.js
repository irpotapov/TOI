function IsStringCorrectPassword(str) {
    return /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/.test(str);
}

var error_mes_pass = document.getElementById("message_pass_error");

function verification_pass(event) {
    event.preventDefault();

    form = document.getElementById("verif_form");
    var str_ = form.pass_verif.value;

    if(IsStringCorrectPassword(str_)) {
        document.getElementById("message_pass_correct").innerHTML = "Ввод пароля осуществлён верно!";
        error_mes_pass.style.display = "none";
    } else {
        document.getElementById("message_pass_error").innerHTML = "Пароль введён неправильно!"
        error_mes_pass.style.display = "block";
        document.getElementById("message_pass_correct").innerHTML = "";
    }
}

function IsStringCorrectColor(str) {
    return /#([a-fA-F]|[0-9]){3, 6}/.test(str);
}

var error_mes_color = document.getElementById("message_color_error");

function verification_color(event) {
    event.preventDefault();

    form = document.getElementById("verif_form");
    var str_ = form.color_verif.value;

    if(IsStringCorrectColor(str_)) {
        document.getElementById("message_color_correct").innerHTML = "Ввод кода цвета осуществлён верно!";
        error_mes_color.style.display = "none";
    } else {
        document.getElementById("message_color_error").innerHTML = "Код введён неправильно!";
        error_mes_color.style.display = "block";
        document.getElementById("message_color_correct").innerHTML = "";
    }
}

function IsStringCorrectEmail(str) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(str);
}

var error_mes_email = document.getElementById("message_email_error");

function verification_email(event) {
    event.preventDefault();

    form = document.getElementById("verif_form");
    var str_ = form.email_verif.value;

    if(IsStringCorrectEmail(str_)) {
        document.getElementById("message_email_correct").innerHTML = "Ввод e-mail осуществлён верно!";
        error_mes_email.style.display = "none";
    } else {
        document.getElementById("message_email_error").innerHTML = "E-mail введён неправильно!";
        error_mes_email.style.display = "block";
        document.getElementById("message_email_correct").innerHTML = "";
    }
}

function IsStringCorrectURL(str) {
    return /[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zAZ0-9@:%_\+.~#?&\/=]*)?/gi.test(str);
}

var error_mes_url = document.getElementById("message_url_error");

function verification_url(event) {
    event.preventDefault();

    form = document.getElementById("verif_form");
    var str_ = form.url_verif.value;

    if(IsStringCorrectURL(str_)) {
        document.getElementById("message_url_correct").innerHTML = "Ввод URL-адреса осуществлён верно!";
        error_mes_url.style.display = "none";
    } else {
        document.getElementById("message_url_error").innerHTML = "URL-адрес введён неправильно!";
        error_mes_url.style.display = "block";
        document.getElementById("message_url_correct").innerHTML = "";
    }
}
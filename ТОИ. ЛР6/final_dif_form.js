var snils_pattern = /^\d{3}-\d{3}-\d{3} \d{2}$/,
    phone_pattern = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
    email_patern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

var inp_snils = document.querySelector('#snils-inp');
var inp_phone = document.querySelector('#phone-inp');
var inp_email = document.querySelector('#email-inp');

document.querySelector('.btn').onclick = function(e) {
    e.preventDefault();
    var snils = inp_snils.value;
    var phone = inp_phone.value;
    var email = inp_email.value;

    if (!isValidSnils(snils)) {
        alert('Заполните поле "СНИЛС" в соответтствии с форматом XXX-XXX-XXX XX, где X - цифра');
        return;
    }

    if (!isValidPhone(phone)) {
        alert('Заполните поле "Мобильный телефон" в соответтствии с форматом +7/7/8-XXX-XXX-XX-XX, где X - цифра');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Заполните поле "E-mail" в соответтствии с форматом info@mail.ru');
        return;
    }
};

function isValidSnils(snils) {
    return snils_pattern.test(snils);
}

function isValidPhone(phone) {
    return phone_pattern.test(phone);
}

function isValidEmail(email) {
    return email_pattern.test(email);
}

// Получаем элементы input
var familiyaInput = document.querySelector('input[name="familiya"]');
var imyaInput = document.querySelector('input[name="imya"]');
var otchestvoInput = document.querySelector('input[name="otchestvo"]');

// Получаем элемент legend
var legend = document.querySelector('legend');

// Добавляем обработчики событий на поля ввода
familiyaInput.addEventListener('input', updateLegend);
imyaInput.addEventListener('input', updateLegend);
otchestvoInput.addEventListener('input', updateLegend);

// Функция для обновления текста в legend
function updateLegend() {
  var familiya = familiyaInput.value;
  var imya = imyaInput.value;
  var otchestvo = otchestvoInput.value;

  // Обновляем текст в legend
  legend.textContent = familiya + ' ' + imya[0] + '. ' + otchestvo[0] + '.';
}

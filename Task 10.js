let firstName = prompt("Введите ваше имя:");
let lastName = prompt("Введите вашу фамилию:");

// Проверяем, что пользователь ввел данные
if (firstName && lastName) {
    // Объединяем имя и фамилию, выводим приветственное сообщение
    let fullName = firstName + " " + lastName;
    console.log(fullName + ", Добро пожаловать!");
}


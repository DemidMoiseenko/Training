// Генерируем случайное значение от -10 до 40
const temperature = Math.floor(Math.random() * (40 - (-10) + 1) + (-10));

// Используем switch для вывода сообщения в зависимости от значения температуры
switch(true) {
    case temperature < 0:
        console.log("Холодно");
        break;
    case temperature > 30:
        console.log("Жарко");
        break;
    default:
        console.log("Нормальная температура");
}


const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let i = months.length; // Устанавливаем начальное значение счетчика

while (i > 0) { 
    console.log(`${i}. ${months[i - 1]}`); // Выводим порядковый номер и месяц
    i--; 
}


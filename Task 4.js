// Создаем двумерный массив
const peopleCities = [['Иван', 'Катя', 'Ольга', 'Максим'], ['Минск', 'Брест', 'Гродно', 'Могилев']];

// Используем цикл for для обхода массива и вывода информации
for (let i = 0; i < peopleCities[0].length; i++) {
    const person = peopleCities[0][i];
    const city = peopleCities[1][i];

    console.log(`${person} из ${city}`);
}


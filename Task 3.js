const numbers = [11, 6, 2, 3, 12];

// Создаём переменную для хранения наименьшего числа, присваиваем ей максимальное значение Number.MAX_VALUE (максимальное значение в js)
let SmallestNum = Number.MAX_VALUE;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < SmallestNum) {
        // Если текущее число меньше наименьшего, обновляем значение наименьшего числа
        SmallestNum = numbers[i];
    }
}

console.log("Наименьшее число в массиве: "+ SmallestNum);


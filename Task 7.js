let citiesString = "Минск, Гродно, Брест, Гомель";

// Создаем массив из строки с городами
let citiesArray = citiesString.split(", ");

// Добавляем еще города в массив с применением push
citiesArray.push("Витебск", "Могилев", "Пинск");

console.log(citiesArray);


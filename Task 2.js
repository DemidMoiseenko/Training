const str = "Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь";

let count = 0;

// Поиск по каждому символу строки
for (let i = 0; i < str.length; i++) {
    // Если текущий символ равен 'п' (или 'П' для подсчета прописных и строчных )
    if (str[i] === 'п' || str[i] === 'П') {
        count++; 
    }
}

console.log("Количество символов 'п' в строке: " + count);


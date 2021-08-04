// Реалізуйте клас MyString, який матиме наступні методи:
// метод reverse(), який параметром приймає рядок, а повертає її в перевернутому вигляді,
// метод ucFirst(), який параметром приймає рядок, а повертає цю ж рядок, зробивши її першу букву заголовної та
// метод ucWords(), який приймає рядок і робить капіталізації першої літери кожного слова цього рядка. Використовує cучасний class.


class MyString {
    reverse(str) {
        return str.split("").reverse().join("");
    }
    ucFirst(str) {
        str = str.split("");
        str[0] = str[0].toUpperCase();
        return str.join("");
    }
    ucWords(str) {
        return str.split(" ").map(function(item) {
            item = item.split("");
            item[0] = item[0].toUpperCase();
            return item.join("");
        }).join(" ");
    }
}

const str = new MyString();

console.log(str.reverse('IVAN'));
console.log(str.ucFirst('arsenal'));
console.log(str.ucWords('arsenal arsenal arsenal'));
// while (i < 2) {
//     let question = +prompt('Введите обязательную статью расходов в этом месяце');
//     let quesionHow = prompt('Во сколько обойдется?');

//     if ( (typeof(question) ) === 'string' && (typeof(question)) != null && (typeof(quesionHow)) != null && a != '' && b != '' && a.length < 50) {
//     appData.expenses[question] = quesionHow;
//     } else {
//         i--
//     }
//     i++
// }

// do {
//     let question = +prompt('Введите обязательную статью расходов в этом месяце');
//     let quesionHow = prompt('Во сколько обойдется?');

//     if ( (typeof(question) ) === 'string' && (typeof(question)) != null && (typeof(quesionHow)) != null && a != '' && b != '' && a.length < 50) {
//     appData.expenses[question] = quesionHow;
//     } else {
//         i--
//     }
//     i++
// } while (i < 2)


// elements.addEventListener('contextmenu', messageFunction);
// elements.addEventListener('click', messageFunction);
// elements.addEventListener('mouseover', messageFunction);

// let message = "Hello my favorite";
// let num = 10;
// while (num < 20) {
//     console.log(num);
//     num++
// }

// do {
//     console.log(message)
//     num++
// }
// while (num < 20)

// for (let i = 5; i <=10; i++) {
//     if (i === 7) {
//         break //stop all for
//         //continut пропустить 
//     }
//     console.log(i)
// }


// // elements.onclick = function () {
// //     alert (message)
// // }


// let num = 10

// function numFunc(text) {
//     let num = 20;
//     console.log(num)
// }
// numFunc('lol')
// console.log(num)

// function lol (a, b) {
//     return (a + b)
// }

// let str = "str";
// console.log(str.length);//3

// console.log(str.toUpperCase());//STR
// console.log(str.toLowerCase());//str


// let twelve = "12.2";
// console.log(Math.round(twelve)); //12

// let twelve = "12.2px";
// console.log(parseInt(twelve));//12 (not .2)
// console.log(parseFloat(twelve));//12 (not px)

//Объект в объекте
// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test"
// };

// options.bool = false;
// options.color = {
//     border: "black",
//     bg: "red"
// };

// console.log(options)

// for(let key in options) {
//     console.log('Svoistvo ' + key + ' imeet znachenie ' + options[key]) //Выводит весь объект с каждым значением
// }

// console.log(Object.keys(options).length); // покажет количество ключей в объекте

// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function(item, i, arr) {
//     console.log(i + ": " + item + " (massiv: " + arr + ")");
// }) // item - каждый элемент массива, i - номер элемента, arr - сам массив Перебор массива

//     arr[50] = 50 // добавляем элмент в массив на 50 место со значением 50
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]) //Перебрать все значения массива
// }

// arr.pop() //delete последний элемент массива
// arr.push("5") // добавляю в конецц массива
// arr.shift() //delete one element
// arr.unshift("1") //добавить в начало массива элемент

// console.log(arr);

// let mass = [1, 3, 4, 7, 9];

// for(let key of mass) {
//     console.log(key) // of - получим значение массива
// }

// let ans = prompt("", ""),
//     arr = [];
// arr = ans.split(','); //Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.
// console.log(arr);

// let arr = ['a', 'b', 'c', 'drr'],
//     i = arr.join(', '); //Из массива в строку
//     // i = arr.sort(); // сортировка в алфавитном порядке 
// console.log(arr, i)

let arr = ['a', 'b', 'c', 'drr'],
    i = arr.sort(compareNum); // сортировка цифр по порядке
    function compareNum (a, b) {
        return a - b;
    }
console.log(arr, i)


let solider = {
    health: 400,
    armor: 100
};
let john = {
    health: 100
};

john.__proto__ = solider;
console.log(john);
console.log(john.armor) // ООП наследование
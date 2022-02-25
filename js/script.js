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

// let arr = ['a', 'b', 'c', 'drr'],
//     i = arr.sort(compareNum); // сортировка цифр по порядке
//     function compareNum (a, b) {
//         return a - b;
//     }
// console.log(arr, i)


// let solider = {
//     health: 400,
//     armor: 100
// };
// let john = {
//     health: 100
// };

// john.__proto__ = solider;
// console.log(john);
// console.log(john.armor) // ООП наследование

//to string 1)
// String(null)
//to string 2)
// console.log("kekeke" + 5 + false)

//to number 1)
// Number('kek')

//to number 2)
// console.log(typeof(+'5'));

//to number 3)
// console.log(typeof(parseInt('15px', 10)))

// 0 - false, '' - false, null - false, undefined - false, NaN - false


// let box = document.getElementById('box'),
//     btn = document.getElementsByTagName('button'), //получаем все теги батон в псевдомассив
//     circle = document.getElementsByClassName('circle'), //Получаем все классы сиркл в псведомассив
//     heart = document.querySelectorAll('.heart'),
//     // получаем псведомассив через селектор (класс через точку айди через решетку и тег через квадратные скобки)
//     // можно обращаться через старший класс (главный класс а а в нем класс б ('.a .b'))
//     oneHeart = document.querySelector('.heart'); // выводит первый элемент со страницы с этим селектором

// box.style.backgroundColor = 'black';
// btn[1].style.borderRadius = '100%';
// circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'yellow';
// }

// heart.forEach(function (item, i, massheart) {
//     item.style.backgroundColor = 'blue';
// })

// let div = document.createElement('div'), //create new element
//     text = document.createTextNode('Kakoi to text'), //create text
//     wrapper = document.querySelector('wrapper');

//     div.classList.add('black'); //добавляем класс 

//     // div.innerHTML = '<h1>Hello World!</h1>'; //добавляем к блоку тег с текстом либо просто текст без ш1
//     div.textContent = 'Hello World!'; //only text

//     // document.body.appendChild(div); //Добавляем элемент в конец бади
//     // wrapper.appendChild(div); // добавляем элемент в конец отцовского блока враппер
//     document.body.insertBefore(div, circle[1]); //добавляем элемент к дочернимоу блоку бади  
//     document.body.removeChild(circle[2]); // удаляем в бади элемент сиркл
//     wrapper.removeChild(heart[1]); //Удаляем дочерний блок блока враппер
//     document.body.replaceChild(btn[1], circle[0]); // поместить кнопку вместо круга а круг удалить

// let button = document.querySelectorAll('button'),
//     wrp = document.querySelector('.wrp'),
//     link = document.querySelector('a');

// button[0].onclick = function () {
//     alert(2);
// }

// button[0].addEventListener('click', function(event) { //addEventListner - через него вешаем события 
//     console.log('WOOOOOW' + event.type + ' na elemente ' + event.target); //event - объект. Можно посмотреть что именно и с чем произошло на странице
// });
// button[0].addEventListener('click', function() {
//     alert('3'); //вешаем события
// });

// button[1].addEventListener('mouseenter', function() {
//     alert(4); //вешаем события
// })

// wrp.addEventListener('click', function(event) {
//     console.log('WOOOOOW' + event.type + ' na elemente ' + event.target); //event - объект. Можно посмотреть что именно и с чем произошло на странице
// })

// link.addEventListener('click', function(event) {
//     event.preventDefault(); //Отменяем стандартное поведение при переходе по ссылке
//     console.log('WOOOOOW' + event.type + ' na elemente ' + event.target); //event - объект. Можно посмотреть что именно и с чем произошло на странице

// })

// button.forEach(function(item) {
//     item.addEventListener('mouseleave', function() {
//         console.log('3')
//     });
// }); //обращаться к каждому элементу

// let timerId = setTimeout(sayHello, 3000); //Через сколько появится функция 
// clearTimeout(timerId); //остановка скрипта

// let timerId = setInterval(sayHello, 3000); //Через сколько функция будет повторяться
// clearTimeout(timerId); //остановка скрипта
// function sayHello () {
//     alert('hu');
// };

// let timerId = setTimeout(function log() {
//     console.log(1);
//     setTimeout(log, 2000)
// }); //рекурсивный вызов таймаута

// let f = function() {
//     alert('Нажми на конпку ИРОДЬ!')
// }

// let timerId = setTimeout(f, 3000);

////////////////////////////АНИМАЦИЯ КВАДРАТИКА
// let btn = document.querySelector('.button');
// let box = document.querySelector('.box');


// function myAnimation() {
//     let pos = 0;
    
//     let id = setInterval(frame, 10);    
//     function frame () {
//         if(pos == 370) {
//             clearInterval(id);
//         }else {
//             pos++;
//             box.style.marginTop = pos + 'px';
//             box.style.marginLeft = pos + 'px';
//         }
//     }
// }

// btn.addEventListener('click', myAnimation);


// let wrpBtn = document.querySelector('.btn_wrp');
// let buttons = document.getElementsByTagName('button');

// wrpBtn.addEventListener('click', function(event) {
//     if(event.target && event.target.tagName == 'BUTTON') {
//         console.log('Hello World!')
//     }
// })

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('hello ' + this.name)
//     };
// }

// User.prototype.exit = function(name) {
//     console.log('user ' + this.name + ' by')
// }

// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20)

// alex.exit(); 
// ivan.hello();

//////////////классы и конструкторы
// class User {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//     hello() {
//         console.log(`Hello! ${this.name}`)
//     }
//     exit() {
//         console.log(`user ${this.name} by`)
//     }
// }
// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);

//     ivan.hello();
//     alex.exit();
//     console.log(ivan)
//     console.log(alex)

/////////////////////////// 1)Просто вызов функции - window/undefiend
/////////////////////////// 2)Метод объекта 
// function showThis (a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log (sum());
// }

// showThis(4,5);
// showThis(1,5);

let obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
    }
};
obj.sum();
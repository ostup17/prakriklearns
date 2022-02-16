let message = "Hello my favorite";
let num = 10;
// while (num < 20) {
//     console.log(num);
//     num++
// }

do {
    console.log(message)
    num++
}
while (num < 20)

for (let i = 5; i <=10; i++) {
    if (i === 7) {
        break //stop all for
        //continut пропустить 
    }
    console.log(i)
}


// // elements.onclick = function () {
// //     alert (message)
// // }

let messageFunction =  function() {
    alert(message)
}
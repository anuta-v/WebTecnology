// const num1 = Number.parseInt(prompt("Введите первое число"));
// const num2 = Number.parseInt(prompt("Введите второе число"));

// alert (результат сложения чисел ${num1} и ${num2} равен ${num1 + num2}.);

// const num1 = Number.parseFloat(prompt("Введите первое число"));
// const num2 = Number.parseFloat(prompt("Введите второе число"));
// alert (результат сложения чисел ${num1} и ${num2} равен ${sum(num1,num2}.);

// function sum(n1, n2) {
//     return n1 + n2;
// }
// const answer = confirm ("Вам хорошо живется?");
// if (answer == true) {
//     alert("Да все хорошо");
// } else {
//     alert ("Ну вы держитесь там"); 
// }

const product = prompt("Введите продукт для покупки");
switch (product) {
    case "мандарины":
        alert ("Мандарины стоят 100руб/кг");
        break;
    case "бананы":
    case "груши":
        alert ("Бананы и Груши стоят70руб/кг");
        break;
    default:
        alert ("нет такого продукта");
}

// function getMaxEvenElement(arr) {
//     let max = arr[0];
//     for (let index = 2; index < arr.length; index += 2) {
//         if (arr[index] > max){
//             max = arr[index];
//         }
//     }
//     return max;
// }
 
// console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
// console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31
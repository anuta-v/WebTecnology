// Cоздать функцию greeting, которая принимает в качестве аргумента имя человека и выводит приветствие, используя переданное ей имя, 
// в консоль.
// Необходимо у пользователя запросить имя и вызвать функцию greeting, передав туда полученное от пользователя значение.


const my_name = prompt('Введите имя');

function greeting (name) {
    alert(`Привет, ${name}`);
}

greeting(my_name);
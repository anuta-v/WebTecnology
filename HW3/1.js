// Необходимо пользователя попросить ввести , преобразовать введенное пользователем значение в
//  соответствующую температуру в градусах по Фаренгейту и вывести в alert сообщение с текстом (пример): Цельсий: 21, Фаренгейт: 69.8
// Где вместо 21 и 69.8 должны быть подставлены соответствующие значения, которые были получены ранее.
// Формула перевода градусов Цельсия в градусы Фаренгейта:
// градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
// Примечания: Пользователь всегда вводит корректное числтемпературу в градусах Цельсияо.


let temperature = Number.parseInt(prompt('Введите температуру в градусах Цельсия'));
alert(`Цельсия: ${temperature}\nФаренгейт: ${((9 / 5) * temperature + 32).toFixed(1)}`)
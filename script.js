/* Обьект */

// const user = {
//     names: 'Антошка',
//     ages: 19,
//     weight: 70,
//     height: 1.7,
//     isHuman: true
// };

// let abs = 'Тимур'

// for (const key in user) {
//     // console.log('Ключ: ' + key + ' Значение ключа: ' + user[key]);
//     console.log(`Ключ: ${key} Значение ключа: ${user[key]}`);

// }

// delete user.isHuman

// console.log('from' in user);
// console.log(user);
// user.from = 'Узбекистан';
// user['1'] = 'Ташкент';

// console.log(user);

// console.log(user.isHuman, user.names, user.ages);

// let a = +prompt('Введите возраст')

// const user = {
//     names: 'Федька',
//     age: a,
//     weight: 4,
//     calcWeight: function () {
//         return this.age * this.weight
//     }
// }

// console.log('Вес Федьки ' + user.calcWeight() + ' кг ');

// const users = {
//     '1': {
//         names: 'Сашка',
//         ages: 20
//     },
//     '2': {
//         names: 'Танюша',
//         ages: 18
//     },
//     '3': {
//         names: 'Олег',
//         ages: 2
//     },
//     '4': {
//         names: 'Боорис',
//         ages: 50
//     }
// }

// for (const key in users) {
//     // console.log(key);
//    for (const keys in users[key]) {
//     console.log(users[key][keys]);
//    }
// }

// console.log(users);

// let rec = receipt();
// let menu = 'Вы заказали '
// let delivery = 9000;

// let user = {

//   name: "Amir",
//   surname: "Tursunov",
//   age: 18
// };

// delete user.name
// let key = prompt('что вы хотите узнать?', "age");
// alert(user[key]);

// function isEmpty(obj) {
//   for (let key in obj) {
//     // если тело цикла начнет выполняться - значит в объекте есть свойства
//     return false;
//   }
//   return true;
// }

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let sum = 0
// for (let key in salaries) {
//   sum += salaries[key]

// }
// alert(sum)

users = {};

i = 1;

while (i < 11) {
  let username = prompt("name: ");
  let age = prompt("age: ");
  if (isNaN(age) || (age == '')) {
    alert('Пожалуйста введите число')
  } else {
    users[i] = { username, age };
    i++;
  }

}

console.log(users);

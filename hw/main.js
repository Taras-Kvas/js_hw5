// - створити функцію яка обчислює та повертає площу прямокутника висотою
// - створити функцію яка обчислює та повертає площу кола
// - створити функцію яка обчислює та повертає площу циліндру
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. ' +
// 'Для кожного об'єкту окремий блок.

// const plosha = (a,b) => {
//   return a * b;
// }
// document.write (plosha(10, 39))

// const x = (r) => {
//   return 2 * 3.14 * r;
// }
// document.write(x(15));

// const x = (h,r) => {
//   return 2 * 3.14 * h * r;
// }
// document.write (x(15,20))

// let array = [1,2,3,4,5, 'taras', true]
// const x = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         document.write (array[i])
//     }
// }
// x (array)

// const x = (a) => {
//   document.write (`<p>${a}</p>`)
// }
// x("Taras taras taras taras okten okten okten");

// const x = (a) => {
//     document.write (`<ul>`);
//     document.write (`<li>${a}</li>`)
//     document.write (`<li>${a}</li>`)
//     document.write (`<li>${a}</li>`)
//     document.write (`</ul>`);
// }
// (x('roma'));

// const x = (a,b) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < b ; i++) {
//         document.write(`<li>${a}</li>`)
//     }
//     document.write(`</ul>`);
// }
// (x('roma', 13));

// let array = [1,3,4,5,6, "taras", true, false]
// const x = (array) => {
//   document.write (`<ul>`)
//     for (let i = 0; i <array.length ; i++) {
//         document.write (`<li>${array[i]}</li>`)
//     }
//     document.write (`</ul>`)
//
// }
// x(array)

// let array = [{id:1, name:"Taras", age:25}, {id:2, name:"Maryan", age:24}, {id: 3, name: "Roma", age: 22}]
// const x = (array) => {
//     for (const arrayElement of array) {
//         document.write (`<div>${arrayElement.id}.${arrayElement.name}  ${arrayElement.age}</div>`)
//     }
// }
// x(array)

'use strict'
// 2) Треугольник в цикле

// Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:


let someString = "#";
while (someString.length <= 7) {
    console.log(someString);
    someString += "#";
}

